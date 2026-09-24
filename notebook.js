/* ============================================================
   notebook.js — the 学生 "How it works" notebook on Night Owl and Night Shift.

   A page opts in with one element:

     <div data-notebook="owl" data-notebook-title="wb_title"
          data-notebook-anchor=".nt-line" data-notebook-after="#wb-send"></div>

   The points come from i18n (howto_<key>_1 … _N), so they follow the site
   language. Where it goes is measured, not guessed:
     · a wide margin beside the anchor  → docked there, open flat (two pages)
     · a narrower margin                → docked there, one page at a time
     · no margin (phones, tablets)      → under the page, after data-notebook-after
   Scrolling the mouse wheel over it turns the pages (at the first and last
   page the wheel scrolls the page as normal); a sideways swipe does the same.
   Open/closed, the page you were on and the name written inside the cover
   are kept in this browser.
   ============================================================ */
(function () {
  'use strict';

  var STORE = 'katsuyo-notebook-', NAME_KEY = 'katsuyo-notebook-name';
  var GAP = 20, EDGE = 8;           // between the page and the notebook; from the window's edge
  var SPREAD_MIN = 190, SINGLE_MIN = 160, F_MAX = 230, SINGLE_MAX = 244;
  var TURN_MS = 800;

  function t(key, fallback) {
    try {
      var v = (typeof I18N !== 'undefined' && I18N[LANG] && I18N[LANG][key]) ||
              (typeof I18N !== 'undefined' && I18N.en && I18N.en[key]);
      return v || fallback || '';
    } catch (e) { return fallback || ''; }
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function load(key) { try { return JSON.parse(localStorage.getItem(STORE + key)) || {}; } catch (e) { return {}; } }
  function save(key, v) { try { localStorage.setItem(STORE + key, JSON.stringify(v)); } catch (e) {} }

  function Notebook(host) {
    var key = host.getAttribute('data-notebook');
    var titleKey = host.getAttribute('data-notebook-title');
    var anchor = document.querySelector(host.getAttribute('data-notebook-anchor') || 'main');
    var after = document.querySelector(host.getAttribute('data-notebook-after') || '') || anchor;
    host.parentNode.removeChild(host);
    if (!key || !anchor) return;

    var saved = load(key);
    var open = saved.open !== false, at = saved.at || 0, atShape = saved.shape || '';
    var el = null, mode = '', F = 0, cover, leaves = [], dots, L = 0, single = false, settle = 0;

    function points() {
      var out = [];
      for (var i = 1; i <= 12; i++) { var s = t('howto_' + key + '_' + i, ''); if (!s) break; out.push(s); }
      return out;
    }
    // "How it works" with 使い方 beside it — unless the site is in Japanese, where they are the same word
    function howLabel() { var h = t('howto_label', 'How it works'); return h === '使い方' ? '' : h; }
    function label() {
      var title = t(titleKey, key), h = howLabel();
      return '<div class="nb2-label"><span class="jp">学生</span><b>' + esc(title) + '</b><small>' + (h ? esc(h) + ' · ' : '') + '使い方</small></div>';
    }
    function endpaper() {
      return '<div class="nb2-endpaper">' + label() +
        '<label class="nb2-owner">' + esc(t('nb_belongs', 'This notebook belongs to')) +
          '<span class="nb2-name-line"><input class="nb2-name" type="text" maxlength="24" autocomplete="off" spellcheck="false" placeholder="' +
          esc(t('nb_name_ph', 'write your name')) + '"><i class="nb2-pen" aria-hidden="true">✎</i></span></label>' +
        '<div class="nb2-tip">' + esc(t('nb_tip', 'Scroll over the pages to turn them.')) + '</div></div>';
    }
    function face(pts, list, n) {
      var h = howLabel();
      return '<div class="nb2-eyebrow"><span>' + esc(h || '使い方') + '</span>' + (h ? '<span class="jp">使い方</span>' : '') + '</div>' +
        pts.map(function (i) {
          return '<div class="nb2-text' + (i === 0 ? ' is-first' : '') + '"><span class="nb2-num">' + (i + 1) + '</span>' + list[i] + '</div>';
        }).join('') +
        (n ? '<div class="nb2-folio">' + n + '</div>' : '');
    }
    function hint() { return '<div class="nb2-hint"><span class="nb2-wheel"></span>' + esc(t('nb_scroll', 'scroll')) + '</div>'; }

    // ---- build for a mode and a page width ----
    function build(newMode, newF) {
      var keepOpen = open;
      if (el && el.parentNode) el.parentNode.removeChild(el);
      mode = newMode; F = newF; single = mode === 'single';
      var H = Math.round(F * 1.42);

      el = document.createElement('aside');
      el.className = 'nb2' + (single ? ' is-single' : '') + (mode === 'inline' ? ' is-inline' : ' is-docked');
      el.setAttribute('aria-label', t('howto_label', 'How it works'));
      el.style.setProperty('--f', F + 'px');
      el.style.setProperty('--h', H + 'px');
      el.innerHTML = '<div class="nb2-book"><div class="nb2-board"></div><div class="nb2-spread"></div><div class="nb2-ribbon"></div></div>' +
        '<div class="nb2-foot"><button type="button" class="nb2-arrow" data-d="-1">‹</button><div class="nb2-dots"></div>' +
        '<button type="button" class="nb2-arrow" data-d="1">›</button></div>' +
        '<button type="button" class="nb2-close"></button>';
      if (mode === 'inline') after.parentNode.insertBefore(el, after.nextSibling);
      else document.body.appendChild(el);

      var spread = el.querySelector('.nb2-spread');
      dots = el.querySelector('.nb2-dots');
      el.querySelector('[data-d="-1"]').setAttribute('aria-label', t('nb_prev', 'Previous page'));
      el.querySelector('[data-d="1"]').setAttribute('aria-label', t('nb_next', 'Next page'));
      el.querySelector('.nb2-close').textContent = t('nb_close', 'close the notebook');

      // Two points share a page when both fit; otherwise each gets its own.
      var list = points();
      var probe = document.createElement('div');
      probe.className = 'nb2-face';
      probe.style.cssText = 'position:absolute;visibility:hidden;top:0;left:0;right:auto;bottom:auto;height:auto;width:' + F + 'px';
      spread.appendChild(probe);
      function fits(pts) { probe.innerHTML = face(pts, list, 1); return probe.offsetHeight <= H; }
      var groups = [], i = 0;
      while (i < list.length) {
        if (i + 1 < list.length && fits([i, i + 1])) { groups.push([i, i + 1]); i += 2; }
        else { groups.push([i]); i++; }
      }
      // a point too long for the page makes the notebook a little taller, never cut off
      groups.forEach(function (g) { probe.innerHTML = face(g, list, 1); H = Math.max(H, probe.offsetHeight); });
      el.style.setProperty('--h', H + 'px');
      spread.removeChild(probe);
      var faces = groups.map(function (g, k) { return face(g, list, k + 1); });

      cover = document.createElement('div');
      cover.className = 'nb2-leaf is-cover';
      cover.innerHTML = '<div class="nb2-face is-front" role="button" tabindex="0">' + label() + '<div class="nb2-open">' + esc(t('nb_open', 'open the notebook')) + '</div></div>' +
        (single ? '' : '<div class="nb2-face is-back">' + endpaper() + '</div>');
      spread.appendChild(cover);

      leaves = [];
      var leafFaces = [];     // [front, back] per leaf
      if (single) {
        // one page at a time: the inside cover is page 0, the first tips page 1
        leafFaces.push([endpaper(), '']);
        faces.forEach(function (f) { leafFaces.push([f, '']); });
      } else {
        // open flat: fronts on the right, backs on the left; the last right-hand page closes the book
        if (faces.length % 2 === 0) faces.push('<div class="nb2-end"><span class="jp">がんばって!</span><b>' + esc(t('nb_luck', 'Good luck')) + '</b><small>' +
          esc(t('nb_luck_sub', 'Close the notebook whenever you like — it stays the way you left it.')) + '</small></div>');
        for (var j = 0; j < faces.length; j += 2) leafFaces.push([faces[j], faces[j + 1] || '']);
      }
      L = leafFaces.length;
      leafFaces.forEach(function (fb, k) {
        var lf = document.createElement('div');
        lf.className = 'nb2-leaf';
        var firstTips = single ? k === 1 : k === 0;
        lf.innerHTML = '<div class="nb2-face is-front">' + fb[0] + (firstTips && L > 1 ? hint() : '') + '</div>' +
          (single ? '' : '<div class="nb2-face is-back">' + fb[1] + '</div>');
        spread.appendChild(lf); leaves.push(lf);
        var d = document.createElement('button');
        d.type = 'button';
        d.setAttribute('aria-label', t('nb_page', 'Page') + ' ' + (k + 1));
        d.onclick = function () { go(k); };
        dots.appendChild(d);
      });
      // the notebook opens on the first tips page
      var first = single ? 1 : 0, shape = single ? 'single' : 'spread';
      if (atShape !== shape) { at = first; atShape = shape; }
      at = Math.max(0, Math.min(L - 1, at));

      wire(spread);
      open = keepOpen;
      paint();
      place();
    }

    // ---- state → classes ----
    function paint(turning) {
      el.classList.toggle('is-closed', !open);
      cover.classList.toggle('is-over', open);
      // shut, the cover lies on top; open, it lies under the pages turned onto it
      cover.style.zIndex = turning === 'cover' ? 400 : (open ? 5 : 300);
      leaves.forEach(function (lf, k) {
        var over = open && k < at;
        lf.classList.toggle('is-over', over);
        lf.style.zIndex = turning === k ? 400 : (over ? 10 + k : 200 - k);
        // only the pages you can see are reachable by keyboard
        var fr = lf.querySelector('.is-front'), bk = lf.querySelector('.is-back');
        var frontShown = open && (k === at), backShown = open && !single && (k === at - 1);
        if (fr) fr.inert = !frontShown;
        if (bk) bk.inert = !backShown;
      });
      var coverBack = cover.querySelector('.is-back');
      if (coverBack) coverBack.inert = !(open && at === 0);
      cover.querySelector('.is-front').inert = open;
      [].forEach.call(dots.children, function (d, k) { d.classList.toggle('on', k === at); });
      el.querySelector('[data-d="-1"]').disabled = at === 0;
      el.querySelector('[data-d="1"]').disabled = at === L - 1;
      save(key, { open: open, at: at, shape: atShape });
    }
    function go(k) {
      k = Math.max(0, Math.min(L - 1, k));
      if (k === at || !open) return;
      var turning = k > at ? at : k;
      at = k; paint(turning);
      clearTimeout(settle); settle = setTimeout(function () { paint(); }, TURN_MS + 20);
    }
    function turnCover(v) {
      open = v;
      if (!v) at = single ? 1 : 0;
      paint('cover');
      clearTimeout(settle); settle = setTimeout(function () { paint(); }, TURN_MS + 20);
    }

    function wire(spread) {
      el.querySelectorAll('.nb2-arrow').forEach(function (b) { b.onclick = function () { go(at + +b.getAttribute('data-d')); }; });
      el.querySelector('.nb2-close').onclick = function () { turnCover(false); };
      var front = cover.querySelector('.is-front');
      front.onclick = function () { if (!open) turnCover(true); };
      front.onkeydown = function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); if (!open) turnCover(true); } };

      // the wheel turns the pages; at either end it scrolls the page as normal
      var acc = 0, lock = 0;
      el.addEventListener('wheel', function (e) {
        if (!open || Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
        var dir = e.deltaY > 0 ? 1 : -1;
        if ((dir > 0 && at === L - 1) || (dir < 0 && at === 0)) return;
        e.preventDefault();
        if (Date.now() < lock) return;
        acc += e.deltaY;
        if (Math.abs(acc) < 40) return;
        acc = 0; lock = Date.now() + TURN_MS - 100;
        go(at + dir);
      }, { passive: false });
      var tx = null, ty = null;
      spread.addEventListener('touchstart', function (e) { tx = e.touches[0].clientX; ty = e.touches[0].clientY; }, { passive: true });
      spread.addEventListener('touchend', function (e) {
        if (tx == null) return;
        var dx = tx - e.changedTouches[0].clientX, dy = ty - e.changedTouches[0].clientY;
        if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) go(at + (dx > 0 ? 1 : -1));
        tx = null;
      });

      // the name inside the cover: this browser only, shared by both notebooks
      el.querySelectorAll('.nb2-name').forEach(function (inp) {
        try { inp.value = localStorage.getItem(NAME_KEY) || ''; } catch (e) {}
        inp.addEventListener('input', function () {
          try { localStorage.setItem(NAME_KEY, inp.value.trim()); } catch (e) {}
          named();
        });
        // typing a name must not set off the page's shortcut keys
        inp.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === 'Escape') inp.blur(); e.stopPropagation(); });
        inp.addEventListener('keyup', function (e) { e.stopPropagation(); });
        inp.addEventListener('wheel', function (e) { e.stopPropagation(); }, { passive: true });
      });
      named();
    }
    function named() {
      var inp = el.querySelector('.nb2-name');
      el.classList.toggle('has-name', !!(inp && inp.value.trim()));
    }

    // ---- where it goes ----
    function choose() {
      var r = anchor.getBoundingClientRect();
      var avail = r.left - GAP - EDGE;
      if (avail >= SPREAD_MIN * 2 + 16) return ['spread', Math.min(F_MAX, Math.floor((avail - 16) / 2))];
      if (avail >= SINGLE_MIN + 16) return ['single', Math.min(SINGLE_MAX, Math.floor(avail - 16))];
      var w = Math.min(after.parentNode.getBoundingClientRect().width || window.innerWidth, window.innerWidth - 32);
      return ['inline', Math.max(140, Math.min(F_MAX, Math.floor((w - 16) / 2)))];
    }
    function place() {
      if (!el || mode === 'inline') { if (el) { el.style.left = ''; el.style.top = ''; } return; }
      var r = anchor.getBoundingClientRect();
      el.style.left = Math.round(r.left + window.scrollX - GAP - el.offsetWidth) + 'px';
      el.style.top = Math.round(r.top + window.scrollY) + 'px';
    }
    function refit() {
      var c = choose();
      if (!el || c[0] !== mode || Math.abs(c[1] - F) > 6) build(c[0], c[1]);
      else place();
    }

    refit();
    var timer = 0;
    window.addEventListener('resize', function () { clearTimeout(timer); timer = setTimeout(refit, 120); });
    window.addEventListener('katsuyo:lang', function () { build(mode, F); });
    // the painting and fonts settle the layout after load; follow them for a few seconds
    var tries = 0, again = setInterval(function () { refit(); if (++tries > 8) clearInterval(again); }, 700);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { build(mode, F); });
  }

  function init() {
    var hosts = document.querySelectorAll('[data-notebook]');
    for (var i = 0; i < hosts.length; i++) Notebook(hosts[i]);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
