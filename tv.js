/* ============================================================
   tv.js — 活用 TV (the Conjugator) and Rewind (the Deconjugator).

   Shared by both pages:
     · the ⚙ Remote settings panel (open/close, remembered)
     · the screen: the answer echoed onto the glass as you type, the word
       sized to fit, the ✓ / ✗ / 👁 stamp after an answer
     · the scoreboard lamps under the TV
     · handing a list of misses to the other page and taking one back

   On the Conjugator it also listens to app.js — which draws the question and
   marks the answer — by wrapping a few of its global functions, so none of
   the conjugation logic had to change.
   ============================================================ */
(function () {
  'use strict';

  var $ = function (id) { return document.getElementById(id); };
  var ct = function (k, f) {
    if (window.KA_ct) return KA_ct(k, f);
    try { var v = I18N[LANG] && I18N[LANG][k]; return v || f; } catch (e) { return f; }
  };
  var esc = function (x) { return String(x == null ? '' : x).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var page = document.querySelector('.tv-page');
  if (!page) return;
  var scr = $('tv-scr'), echo = $('tv-echo'), stamp = $('tv-stamp');

  // ---- the settings panel ------------------------------------------------
  var SET_KEY = 'katsuyo-tv-set-open';
  var set = $('tv-set'), setBtn = $('tv-set-btn');
  function setOpen(on) {
    if (!set) return;
    set.classList.toggle('open', on);
    setBtn.setAttribute('aria-expanded', on ? 'true' : 'false');
  }
  if (setBtn) {
    var wasOpen = false;
    try { wasOpen = localStorage.getItem(SET_KEY) === '1'; } catch (e) {}
    setOpen(wasOpen);
    setBtn.addEventListener('click', function () {
      var on = !set.classList.contains('open');
      setOpen(on);
      try { localStorage.setItem(SET_KEY, on ? '1' : '0'); } catch (e) {}
    });
  }
  // ① ② ③ on the closed line; a part that narrows the quiz is shown in gold
  function paintSummary(parts) {
    var sum = $('tv-set-sum');
    if (!sum) return;
    sum.innerHTML = parts.map(function (p, i) {
      return '<span class="tv-set-part' + (p.narrow ? ' is-narrow' : '') + '"><span class="tv-set-n">' + (i + 1) +
        '</span><b>' + esc(p.text) + '</b></span>';
    }).join('');
  }

  // ---- the screen --------------------------------------------------------
  // The word is sized to its length, so 書かされなかった fits as well as 書く.
  function fitWord(el) {
    if (!el || !scr) return;
    var n = Math.max(2, (el.textContent || '').trim().length);
    scr.style.setProperty('--len', n);
  }
  function verdict(kind, text) {
    if (!scr) return;
    scr.classList.remove('is-right', 'is-wrong', 'is-shown');
    if (echo) echo.classList.remove('is-right', 'is-wrong', 'is-shown');
    if (!kind) { if (stamp) stamp.textContent = ''; return; }
    scr.classList.add('is-' + kind);
    if (echo) { echo.classList.add('is-' + kind); if (text != null) echo.textContent = text; }
    if (stamp) stamp.textContent = kind === 'right' ? '正解' : kind === 'wrong' ? '✗' : '答え';
  }
  function bindEcho(input) {
    if (!input || !echo) return;
    var sync = function () {
      requestAnimationFrame(function () {
        if (scr && (scr.classList.contains('is-right') || scr.classList.contains('is-wrong') || scr.classList.contains('is-shown'))) return;
        echo.textContent = input.value;
      });
    };
    input.addEventListener('input', sync);
    input.addEventListener('keyup', sync);
    input.addEventListener('compositionend', sync);
  }

  // ---- the lamps under the TV ---------------------------------------------
  function paintLamps(results, size) {
    var host = $('tv-lamps');
    if (!host) return;
    size = size || 10;
    var shown = results.length > size ? results.slice(results.length - (results.length % size || size)) : results;
    var h = '';
    for (var i = 0; i < size; i++) {
      var r = shown[i];
      h += '<i class="' + (i < shown.length ? (r === true ? 'ok' : r === false ? 'no' : 'skip') : (i === shown.length ? 'here' : '')) + '"></i>';
    }
    host.innerHTML = h;
  }

  // ---- handing lists between the two pages ---------------------------------
  var FRESH_MS = 2 * 3600 * 1000;
  function send(key, items, label, url) {
    try { localStorage.setItem(key, JSON.stringify({ items: items, label: label || '', t: Date.now() })); } catch (e) { return; }
    location.href = url;
  }
  function take(key) {
    var v = null;
    try { v = JSON.parse(localStorage.getItem(key) || 'null'); localStorage.removeItem(key); } catch (e) { v = null; }
    if (!v || !v.items || !v.items.length || !v.t || Date.now() - v.t > FRESH_MS) return null;
    return v;
  }
  function paintSend(btn, n, key, fallback) {
    if (!btn) return;
    btn.hidden = !n;
    btn.textContent = ct(key, fallback).replace('{n}', n);
  }
  function paintQueue(q, key, fallback, onEnd) {
    var box = $('tv-queue');
    if (!box) return;
    if (!q || !q.items.length) { box.hidden = true; box.innerHTML = ''; return; }
    box.hidden = false;
    box.innerHTML = '<span>' + esc(ct(key, fallback).replace('{n}', q.items.length)) + '</span>' +
      '<button type="button">' + esc(ct('tv_queue_end', 'Back to the normal show')) + '</button>';
    box.querySelector('button').onclick = onEnd;
  }

  // ---- How it works: teletext on the TV ------------------------------------
  // The screen switches to a teletext page (P101, P102 …), one tip per page,
  // with the coloured fastext buttons along the bottom. It opens by itself
  // the first time, and after that from the 📺 button.
  var helpKey = page.getAttribute('data-tv-help'), helpAt = 0, helpEl = null;
  function helpPages() {
    var out = [];
    var look = function (k) {
      try { return (I18N[LANG] && I18N[LANG][k]) || (I18N.en && I18N.en[k]) || ''; } catch (e) { return ''; }
    };
    for (var i = 1; i <= 12; i++) { var h = look('howto_' + helpKey + '_' + i); if (!h) break; out.push(h); }
    return out;
  }
  function helpPaint() {
    if (!helpEl) return;
    var pages = helpPages(), n = pages.length;
    helpAt = Math.max(0, Math.min(n - 1, helpAt));
    helpEl.innerHTML =
      '<div class="tt-head"><span>P' + (101 + helpAt) + ' ' + esc(page.getAttribute('data-tv-ch') || '') + '</span><span>使い方 ' + (helpAt + 1) + '/' + n + '</span></div>' +
      '<div class="tt-bar">' + esc(ct('howto_label', 'How it works')) + '</div>' +
      '<div class="tt-body"><span class="tt-n">' + (helpAt + 1) + '</span> ' + pages[helpAt] + '</div>' +
      '<div class="tt-keys">' +
        '<button type="button" class="tt-red" data-tt="-1"' + (helpAt ? '' : ' disabled') + '>◀︎ ' + esc(ct('tv_help_prev', 'prev')) + '</button>' +
        '<button type="button" class="tt-green" data-tt="1"' + (helpAt < n - 1 ? '' : ' disabled') + '>' + esc(ct('tv_help_next', 'next')) + ' ▶︎</button>' +
        '<button type="button" class="tt-yellow" data-tt="0">' + esc(ct('tv_help_back', 'back to the show')) + '</button>' +
      '</div>';
  }
  function helpOpen(on) {
    if (!scr || !helpKey) return;
    if (on && !helpEl) {
      helpEl = document.createElement('div');
      helpEl.className = 'tv-tt'; helpEl.setAttribute('role', 'dialog'); helpEl.setAttribute('aria-label', ct('howto_label', 'How it works'));
      helpEl.addEventListener('click', function (e) {
        var b = e.target.closest('[data-tt]'); if (!b) return;
        var d = +b.getAttribute('data-tt');
        if (!d) helpOpen(false); else { helpAt += d; helpPaint(); }
      });
      scr.appendChild(helpEl);
      helpAt = 0;
    }
    if (!on && helpEl) { helpEl.remove(); helpEl = null; try { localStorage.setItem('katsuyo-tv-help-' + helpKey, 'seen'); } catch (e) {} }
    page.classList.toggle('is-teletext', !!helpEl);
    helpPaint();
    var hb = $('tv-help'); if (hb) hb.setAttribute('aria-expanded', helpEl ? 'true' : 'false');
  }
  if (helpKey) {
    var hb = $('tv-help');
    if (hb) hb.addEventListener('click', function () { helpOpen(!helpEl); });
    document.addEventListener('keydown', function (e) {
      if (!helpEl) return;
      if (e.key === 'Escape') { helpOpen(false); return; }
      var tag = (e.target && e.target.tagName || '').toLowerCase();
      if (tag === 'input' || tag === 'textarea' || tag === 'select') return;
      if (e.key === 'ArrowRight') { e.preventDefault(); e.stopPropagation(); helpAt++; helpPaint(); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); e.stopPropagation(); helpAt--; helpPaint(); }
    }, true);
    window.addEventListener('katsuyo:lang', helpPaint);
    var seen = false;
    try { seen = localStorage.getItem('katsuyo-tv-help-' + helpKey) === 'seen'; } catch (e) {}
    if (!seen) helpOpen(true);
  }

  window.KA_TV = {
    paintSummary: paintSummary, fitWord: fitWord, verdict: verdict, bindEcho: bindEcho,
    paintLamps: paintLamps, send: send, take: take, paintSend: paintSend, paintQueue: paintQueue,
    echo: function (t) { if (echo) echo.textContent = t || ''; }
  };

  // =========================================================================
  // 活用 TV: the Conjugator
  // =========================================================================
  if (document.body.getAttribute('data-page') !== 'conjugator' || typeof checkAnswer !== 'function') return;

  var REWIND_KEY = 'katsuyo-rewind-queue', CONJ_KEY = 'katsuyo-conj-queue';
  var results = [], misses = [];
  var queue = take(CONJ_KEY), queueStarted = false, onTape = false;

  var snap = function () { return { a: session.answered, c: session.correct, s: session.skipped }; };
  var goal = function () { return (typeof sessionGoal === 'function' && sessionGoal()) || 10; };
  var answerText = function () { var a = $('feedback-answer'); return a ? a.textContent.trim() : ''; };

  // the closed settings line
  function summary() {
    var fs = $('form-select'), jl = $('jlpt-filter'), sg = $('session-goal'), tq = $('type-quiz-toggle');
    var opt = function (el) { var o = el && el.options[el.selectedIndex]; return o ? o.textContent.trim() : ''; };
    var ep = opt(sg) + (tq && tq.checked ? ' · ' + ct('tv_sum_type', 'verb type') : '');
    paintSummary([
      { text: opt(fs), narrow: fs && fs.value.indexOf('random') !== 0 },
      { text: opt(jl), narrow: jl && jl.value !== 'all' },
      { text: ep, narrow: false }
    ]);
  }
  ['form-select', 'jlpt-filter', 'session-goal', 'type-quiz-toggle'].forEach(function (id) {
    var el = $(id); if (el) el.addEventListener('change', summary);
  });

  function paintAll() {
    paintLamps(results, goal());
    var uniq = misses.length;
    paintSend($('tv-send'), uniq, 'tv_send_rew', '◀︎◀︎ Rewind your misses ({n})');
    var left = (queue ? queue.items.length : 0) + (onTape ? 1 : 0);
    var osd = $('tv-osd-r');
    if (osd) osd.textContent = left ? '◀︎◀︎ ' + ct('tv_tape', 'tape') + ' · ' + left : '▶︎ ' + ct('tv_onair', 'ON AIR');
    paintQueue(left ? { items: new Array(left) } : null, 'tv_from_rew', 'Tape from Rewind: your misses — {n} to go', function () {
      queue = null; onTape = false; paintAll(); generateNewQuestion();
    });
  }

  // Wrap app.js's own functions. They are global function declarations, so
  // replacing them on window is what their other callers see too.
  var _check = window.checkAnswer;
  window.checkAnswer = function () {
    var before = snap();
    var r = _check.apply(this, arguments);
    var after = snap();
    if (after.a > before.a) {
      var right = after.c > before.c;
      results.push(right);
      if (right) verdict('right', '✓ ' + answerText());
      else {
        verdict('wrong', '→ ' + answerText());
        if (currentVerb && currentVerb.form && typeof isTypeIdentificationQuiz !== 'undefined') {
          var key = currentVerb.kanji + '|' + currentVerb.form.key;
          var typeQ = $('prompt-form') && $('prompt-form').dataset.formKey === 'type-identification';
          if (!typeQ && !misses.some(function (m) { return m.k === key; })) {
            misses.push({ k: key, kanji: currentVerb.kanji, hiragana: currentVerb.hiragana, type: currentVerb.type, form: currentVerb.form.key });
          }
        }
      }
      paintAll();
    } else if (typeof typeIdentificationAnswer !== 'undefined' && typeIdentificationAnswer && showAnswer) {
      verdict('right', '✓ ' + typeIdentificationAnswer);   // the verb-type checkpoint
    } else if (!showAnswer) {
      verdict(null);                                        // on to the conjugation, or a second try
      if (echo) echo.textContent = ($('answer-input') || {}).value || '';
    }
    return r;
  };
  var _skip = window.skipQuestion;
  window.skipQuestion = function () {
    var r = _skip.apply(this, arguments);
    results.push(null);
    verdict('shown', answerText());
    paintAll();
    return r;
  };
  var _gen = window.generateNewQuestion;
  window.generateNewQuestion = function () {
    verdict(null);
    if (echo) echo.textContent = '';
    return _gen.apply(this, arguments);
  };
  var _cont = window.continueSession;
  window.continueSession = function () {
    results = [];
    var r = _cont.apply(this, arguments);
    paintAll();
    return r;
  };
  // "Check Answer" on the remote is the quiz-show buzzer
  var _paint = window.paintCheckButton;
  if (typeof _paint === 'function') {
    window.paintCheckButton = function () {
      var r = _paint.apply(this, arguments);
      var b = $('check-btn');
      if (b && b.textContent.trim() === ct('check', 'Check Answer')) b.textContent = ct('tv_buzz', '● Buzz in');
      return r;
    };
  }
  // end of an episode: the summary gets a way to rewind the misses
  var _sum = window.showSessionSummary;
  if (typeof _sum === 'function') {
    window.showSessionSummary = function () {
      var r = _sum.apply(this, arguments);
      var acts = document.querySelector('#session-summary .summary-actions');
      if (acts && misses.length) {
        var b = document.createElement('button');
        b.type = 'button'; b.className = 'skip-btn'; b.style.margin = '0';
        b.textContent = ct('tv_send_rew', '◀︎◀︎ Rewind your misses ({n})').replace('{n}', misses.length);
        b.onclick = sendMisses;
        acts.appendChild(b);
      }
      return r;
    };
  }
  // A list from Rewind comes first, one verb and form at a time.
  var _pick = window.getRandomVerb;
  window.getRandomVerb = function () {
    while (queue && queue.items.length) {
      var it = queue.items.shift();
      var form = forms.filter(function (f) { return f.key === it.form; })[0];
      var v = null, vt = it.type;
      [it.type, 'godan', 'ichidan', 'suru', 'irregular'].some(function (ty) {
        var hit = (verbs[ty] || []).filter(function (x) { return x.kanji === it.kanji; })[0];
        if (hit) { v = hit; vt = hit.type || ty; return true; }
        return false;
      });
      if (!form || !v) continue;
      queueStarted = true; onTape = true;
      if (!queue.items.length) queue = null;
      setTimeout(paintAll, 0);
      var tpl = form.templates[Math.floor(Math.random() * form.templates.length)];
      return Object.assign({}, v, { type: vt, form: form, template: tpl, isReview: true });
    }
    if (onTape) { onTape = false; setTimeout(paintAll, 0); }
    return _pick.apply(this, arguments);
  };

  function sendMisses() {
    if (!misses.length) return;
    send(REWIND_KEY, misses.map(function (m) { return { kanji: m.kanji, hiragana: m.hiragana, type: m.type, form: m.form }; }),
      ct('tv_misses', 'your misses'), '/deconjugator?from=tv');
  }
  if ($('tv-send')) $('tv-send').addEventListener('click', sendMisses);

  // the word fits the glass; the end card shows between episodes
  var word = $('verb-kanji');
  if (word && window.MutationObserver) {
    new MutationObserver(function () { fitWord(word); }).observe(word, { childList: true, characterData: true, subtree: true });
    fitWord(word);
  }
  var area = $('question-area');
  if (area && window.MutationObserver) {
    new MutationObserver(function () { page.classList.toggle('is-ended', area.style.display === 'none'); })
      .observe(area, { attributes: true, attributeFilter: ['style'] });
  }
  bindEcho($('answer-input'));
  window.addEventListener('katsuyo:lang', function () { summary(); paintAll(); if (typeof paintCheckButton === 'function') paintCheckButton(); });

  summary(); paintAll();
  // the option labels are translated a moment after load; read them again then
  window.addEventListener('load', function () { setTimeout(summary, 200); setTimeout(summary, 1200); });
  if (typeof paintCheckButton === 'function') paintCheckButton();
  // If the first question was drawn before the list arrived, start the list now.
  if (queue) window.addEventListener('load', function () {
    setTimeout(function () { if (queue && queue.items.length && !queueStarted) generateNewQuestion(); }, 50);
  });
})();
