/* ============================================================
   kanji-progress.js — the one thing the wall and the drill share.

   Before this, the flashcard page and the drill page knew nothing about each
   other: the drill kept a best-streak number, the card page kept nothing, and
   neither could tell you which of the 2,300 you actually know. This file is
   the single store both read and write, so the wall can colour a tile from
   what the drill recorded, and the drill can be handed a list of tiles.

   Two keys, both per-browser like everything else on this site:

     katsuyo-kanji-progress   the history      { "<klc id>": [seen, wrong, streak, lastTs] }
     katsuyo-kanji-queue      the hand-off     { ids: [4, 25, …], label: "…", at: ts }

   The history is stored as a 4-element array rather than an object because
   2,300 entries of {seen:…,wrong:…} is roughly 90 KB of JSON and localStorage
   quotas are small; the array form is about a third of that.

   Status rule — the whole of it:

     new    never answered
     shaky  answered at least once, but not right twice in a row since
     solid  right twice in a row

   "Right twice in a row" is deliberately forgiving: one wrong answer drops a
   tile back to shaky, and two rights put it back. It needs no scheduler, no
   intervals, and no clock — the user can close the tab for six months and the
   wall still means the same thing.
   ============================================================ */

(function () {
  'use strict';

  var PROGRESS_KEY = 'katsuyo-kanji-progress';
  var QUEUE_KEY    = 'katsuyo-kanji-queue';
  var SOLID_AT     = 2;           // consecutive correct answers to count as known

  var SEEN = 0, WRONG = 1, STREAK = 2, LAST = 3;

  function load() {
    try {
      var raw = localStorage.getItem(PROGRESS_KEY);
      if (!raw) return {};
      var obj = JSON.parse(raw);
      return (obj && typeof obj === 'object') ? obj : {};
    } catch (e) { return {}; }
  }

  function save(map) {
    try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(map)); }
    catch (e) { /* private window or quota — the page still works, just forgets */ }
  }

  var cache = null;
  function data() {
    if (!cache) cache = load();
    return cache;
  }

  /* ---------- reading ---------- */

  function entry(id) {
    return data()[String(id)] || null;
  }

  function status(id) {
    var e = entry(id);
    if (!e) return 'new';
    return e[STREAK] >= SOLID_AT ? 'solid' : 'shaky';
  }

  // How the card explains itself: "missed 2 of the last 5" etc.
  function detail(id) {
    var e = entry(id);
    if (!e) return { status: 'new', seen: 0, wrong: 0, streak: 0 };
    return { status: status(id), seen: e[SEEN], wrong: e[WRONG], streak: e[STREAK], last: e[LAST] };
  }

  // Counts over an inclusive KLC id range, e.g. counts(1, 100).
  function counts(lo, hi) {
    var d = data(), out = { solid: 0, shaky: 0, 'new': 0, total: hi - lo + 1 };
    for (var id = lo; id <= hi; id++) {
      var e = d[String(id)];
      if (!e) out['new']++;
      else if (e[STREAK] >= SOLID_AT) out.solid++;
      else out.shaky++;
    }
    return out;
  }

  // Every id in a range with a given status — this is what "Drill these 12" uses.
  function idsWithStatus(lo, hi, want) {
    var d = data(), out = [];
    for (var id = lo; id <= hi; id++) {
      var e = d[String(id)];
      var s = !e ? 'new' : (e[STREAK] >= SOLID_AT ? 'solid' : 'shaky');
      if (s === want) out.push(id);
    }
    return out;
  }

  /* ---------- writing ---------- */

  function note(id, right) {
    var d = data(), key = String(id);
    var e = d[key] || [0, 0, 0, 0];
    e[SEEN]++;
    if (right) {
      e[STREAK]++;
    } else {
      e[WRONG]++;
      e[STREAK] = 0;
    }
    e[LAST] = Date.now();
    d[key] = e;
    save(d);
    return status(id);
  }

  function reset() {
    cache = {};
    try { localStorage.removeItem(PROGRESS_KEY); } catch (e) {}
  }

  /* ---------- the hand-off ----------
     The wall writes a queue, then navigates. The drill takes it exactly once,
     so a refresh of the drill doesn't silently restart someone's round and a
     stale queue can't leak into a later visit. */

  function setQueue(ids, label) {
    try {
      localStorage.setItem(QUEUE_KEY, JSON.stringify({
        ids: ids.slice(0, 200), label: label || '', at: Date.now()
      }));
      return true;
    } catch (e) { return false; }
  }

  function takeQueue() {
    var raw;
    try { raw = localStorage.getItem(QUEUE_KEY); } catch (e) { return null; }
    if (!raw) return null;
    try { localStorage.removeItem(QUEUE_KEY); } catch (e) {}
    try {
      var q = JSON.parse(raw);
      if (!q || !q.ids || !q.ids.length) return null;
      // An hour is long enough to survive a slow page load, short enough that
      // a queue never comes back to haunt a visit the next day.
      if (Date.now() - (q.at || 0) > 3600000) return null;
      return q;
    } catch (e) { return null; }
  }

  // The stamp colour a kanji gets once it is solid. Fixed per id — not per
  // status, not per position on screen — so a kanji is the same colour on the
  // wall, in the drill's round strip and on the end-of-round panel, and a wall
  // that is filling in reads as a mosaic rather than a reshuffle.
  var STAMP = ['#c8392b', '#e0a030', '#2d6a9f', '#3aa17e'];
  function colour(id) { return STAMP[(id * 7) % STAMP.length]; }
  // Solid tiles sit slightly crooked, like a real hanko; the tilt is also
  // fixed per id so it never changes on repaint.
  function tilt(id) { return [-2, 2, -1.5, 1.5, -3][id % 5]; }

  window.KA_Kanji = {
    SOLID_AT: SOLID_AT,
    colour: colour,
    tilt: tilt,
    status: status,
    detail: detail,
    counts: counts,
    idsWithStatus: idsWithStatus,
    note: note,
    reset: reset,
    setQueue: setQueue,
    takeQueue: takeQueue,
    all: data
  };
})();
