/* ============================================================
   words-theme.js — what the Word Book and the Word Quiz share.

   Decks are the vocabulary topics, drawn as stations on one rail. A word's
   status comes from KA_Memory's "meaning" entry — the same entry the quiz
   writes when you type its meaning — so a ✓ on a flashcard and a right
   answer in the quiz are the same fact:

     new    never met
     shaky  missed and not yet won back        (KA_Memory: weak)
     solid  met and holding                    (KA_Memory: learning or known)
   ============================================================ */
(function () {
  'use strict';

  var COLOURS = ['#c8392b', '#e8742c', '#e0a030', '#7fae3c', '#3aa17e', '#2f8fa8', '#2d6a9f', '#7b4fa0'];

  // The order of the stations. "all" is the terminus you start from.
  var DECKS = [
    { key: 'all',       jp: '全部',  en: 'All decks' },
    { key: 'general',   jp: '一般',  en: 'General' },
    { key: 'food',      jp: '食べ物', en: 'Food & drink' },
    { key: 'taste',     jp: '味',    en: 'Taste' },
    { key: 'home',      jp: '家',    en: 'Home' },
    { key: 'family',    jp: '家族',  en: 'Family' },
    { key: 'body',      jp: '体',    en: 'Body' },
    { key: 'clothing',  jp: '服',    en: 'Clothing' },
    { key: 'colors',    jp: '色',    en: 'Colours' },
    { key: 'time',      jp: '時間',  en: 'Time' },
    { key: 'frequency', jp: '頻度',  en: 'Frequency' },
    { key: 'degree',    jp: '程度',  en: 'Degree' },
    { key: 'weather',   jp: '天気',  en: 'Weather' },
    { key: 'transport', jp: '交通',  en: 'Transport' },
    { key: 'location',  jp: '場所',  en: 'Location' },
    { key: 'countries', jp: '国',    en: 'Countries' },
    { key: 'jobs',      jp: '仕事',  en: 'Jobs' },
    { key: 'school',    jp: '学校',  en: 'School' },
    { key: 'subjects',  jp: '科目',  en: 'Subjects' },
    { key: 'hobbies',   jp: '趣味',  en: 'Hobbies' }
  ];

  function ct(key, fallback) {
    if (window.KA_ct) return window.KA_ct(key, fallback);
    try {
      var v = (typeof I18N !== 'undefined' && I18N[LANG] && I18N[LANG][key]);
      return v || fallback;
    } catch (e) { return fallback; }
  }

  function deck(key) {
    for (var i = 0; i < DECKS.length; i++) if (DECKS[i].key === key) return DECKS[i];
    return { key: key, jp: '', en: key };
  }
  function deckName(key) {
    var d = deck(key);
    return key === 'all' ? ct('wb_all', d.en) : ct('vq_topic_' + key, d.en);
  }
  function deckColour(key) {
    var i = 0;
    for (var k = 0; k < DECKS.length; k++) if (DECKS[k].key === key) i = k;
    return COLOURS[(i * 3) % COLOURS.length];
  }
  function tilt(n) { return [-2, 2, -1.5, 1.5, -3][Math.abs(n) % 5]; }

  function list() { return (typeof vocabDataList !== 'undefined') ? vocabDataList : []; }
  function cardId(card) { return (card.japanese || '') + '/' + (card.kanji || ''); }
  function memId(card) { return 'vocab:' + cardId(card) + '|meaning'; }

  function status(card) {
    if (!window.KA_Memory) return 'new';
    var st = KA_Memory.state(memId(card));
    if (st === 'weak') return 'shaky';
    if (st === 'learning' || st === 'known') return 'solid';
    return 'new';
  }
  function grade(card, right) {
    if (!window.KA_Memory) return status(card);
    KA_Memory.tick();
    KA_Memory.record(memId(card), !!right);
    return status(card);
  }

  function deckCards(key) {
    var all = list();
    if (!key || key === 'all') return all;
    return all.filter(function (c) { return c.topic === key; });
  }
  function counts(key) {
    var out = { total: 0, solid: 0, shaky: 0, 'new': 0 };
    deckCards(key).forEach(function (c) { out.total++; out[status(c)]++; });
    return out;
  }
  // A number for one word, stable across shuffles, for its tilt and colour.
  function hash(card) {
    var s = cardId(card), h = 0;
    for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) & 0xffff;
    return h;
  }
  function stampColour(card) { return COLOURS[hash(card) % COLOURS.length]; }

  // The character a word is stamped with: the first of how it is written.
  function stampChar(card) {
    var w = card.kanji || card.katakana || card.japanese || '';
    return w.charAt(0);
  }

  /* ---------- the rail ---------- */
  function renderRail(host, opts) {
    if (!host) return;
    opts = opts || {};
    var present = {};
    list().forEach(function (c) { present[c.topic] = true; });
    var decks = DECKS.filter(function (d) { return d.key === 'all' || present[d.key]; });
    // A topic in the data that this file does not know still gets a station.
    Object.keys(present).forEach(function (k) {
      if (!decks.some(function (d) { return d.key === k; })) decks.push({ key: k, jp: '', en: k });
    });
    host.innerHTML = '';
    var rail = document.createElement('div');
    rail.className = 'wd-rail';
    var fill = document.createElement('div');
    fill.className = 'wd-rail-fill';
    rail.appendChild(fill);
    decks.forEach(function (d, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'wd-stn';
      b.dataset.deck = d.key;
      b.style.setProperty('--c', deckColour(d.key));
      b.style.setProperty('--tilt', tilt(i) + 'deg');
      b.innerHTML = '<span class="wd-stn-stamp"></span>' +
        '<span class="wd-stn-label"><b class="jp">' + (d.jp || '·') + '</b><span class="wd-stn-en"></span></span>';
      b.addEventListener('click', function () { if (opts.onPick) opts.onPick(d.key); });
      rail.appendChild(b);
    });
    var train = document.createElement('div');
    train.className = 'wd-train';
    rail.appendChild(train);
    host.appendChild(rail);
    host.__decks = decks;
    paintRail(host, opts.current || 'all');
  }

  function paintRail(host, current) {
    if (!host || !host.__decks) return;
    var decks = host.__decks;
    var rail = host.querySelector('.wd-rail');
    var stns = host.querySelectorAll('.wd-stn');
    var here = 0;
    Array.prototype.forEach.call(stns, function (b, i) {
      var key = b.dataset.deck;
      var c = counts(key);
      var pct = c.total ? Math.round(c.solid / c.total * 100) : 0;
      b.style.setProperty('--pct', pct + '%');
      b.classList.toggle('is-done', pct > 0);
      b.classList.toggle('is-here', key === current);
      if (key === current) here = i;
      b.querySelector('.wd-stn-en').textContent = deckName(key);
      b.title = deckName(key) + ' · ' + c.solid + ' / ' + c.total;
    });
    // 88px per station, the line inset 44px either side: the centre of
    // station i sits at 44 + 88i.
    var x = 44 + 88 * here;
    host.querySelector('.wd-rail-fill').style.width = Math.max(0, x - 44) + 'px';
    var train = host.querySelector('.wd-train');
    var cc = counts(current);
    train.style.left = x + 'px';
    train.textContent = cc.solid + ' / ' + cc.total;
    // keep the current station in view, without scrolling if it already is
    var wrap = host;
    var left = x - 44, right = x + 44;
    if (left < wrap.scrollLeft + 20) wrap.scrollTo({ left: Math.max(0, left - 60), behavior: 'smooth' });
    else if (right > wrap.scrollLeft + wrap.clientWidth - 20) wrap.scrollTo({ left: right - wrap.clientWidth + 60, behavior: 'smooth' });
  }

  /* ---------- the round's stops (quiz) ---------- */
  function renderStops(host, results, size) {
    if (!host) return;
    size = size || 10;
    host.innerHTML = '';
    for (var i = 0; i < size; i++) {
      var s = document.createElement('i');
      s.className = 'wd-stop';
      if (i < results.length) {
        s.classList.add(results[i] === true ? 'is-right' : results[i] === false ? 'is-wrong' : 'is-skip');
      } else if (i === results.length) {
        s.classList.add('is-here');
      }
      host.appendChild(s);
    }
  }

  window.KA_Words = {
    DECKS: DECKS,
    COLOURS: COLOURS,
    deck: deck,
    deckName: deckName,
    deckColour: deckColour,
    deckCards: deckCards,
    counts: counts,
    cardId: cardId,
    memId: memId,
    status: status,
    grade: grade,
    stampChar: stampChar,
    stampColour: stampColour,
    tilt: function (card) { return tilt(hash(card)); },
    renderRail: renderRail,
    paintRail: paintRail,
    renderStops: renderStops
  };
})();
