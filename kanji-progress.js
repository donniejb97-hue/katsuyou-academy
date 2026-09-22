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
     solid  never missed and answered right at least once,
            or missed before but right twice in a row since
     shaky  everything else — i.e. you have missed it and not yet won it back

   So a red outline only ever appears on a kanji you actually got wrong. One
   wrong answer drops a tile to shaky, and two rights put it back. It needs no
   scheduler, no intervals, and no clock — the user can close the tab for six
   months and the wall still means the same thing.
   ============================================================ */

(function () {
  'use strict';

  var PROGRESS_KEY = 'katsuyo-kanji-progress';
  var QUEUE_KEY    = 'katsuyo-kanji-queue';
  var SOLID_AT     = 2;           // right answers in a row to WIN BACK a kanji you've missed

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

  // The rule, in one place:
  //   never answered            → new
  //   never missed, right ≥ 1   → solid   (a red outline means "you slipped
  //                                          on this", so it must not appear
  //                                          on a kanji you have never got wrong)
  //   missed at some point      → shaky until SOLID_AT right answers in a row
  function statusOf(e) {
    if (!e) return 'new';
    if (e[WRONG] === 0) return e[STREAK] >= 1 ? 'solid' : 'shaky';
    return e[STREAK] >= SOLID_AT ? 'solid' : 'shaky';
  }

  function status(id) { return statusOf(entry(id)); }

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
      out[statusOf(d[String(id)])]++;
    }
    return out;
  }

  // Every id in a range with a given status — this is what "Drill these 12" uses.
  function idsWithStatus(lo, hi, want) {
    var d = data(), out = [];
    for (var id = lo; id <= hi; id++) {
      if (statusOf(d[String(id)]) === want) out.push(id);
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

  /* ---------- stamp colour ----------
     What the colour of a solid stamp means is a setting, shared by the wall
     and the Kitchen so they never disagree:

       mosaic   a fixed colour per kanji (from a palette of four), forever —
                the wall fills in like a mosaic; colour carries no meaning
       ink      one colour you choose, soaking in with your streak:
                a light tint after the first right answer, the full colour
                at two in a row, a deep ink at five
       rainbow  one step along the spectrum per right answer in a row:
                orange, gold, green, teal, blue, indigo, purple at seven

     Red is on none of the ramps, so it can only ever mean "shaky". */
  var PREFS_KEY = 'katsuyo-kanji-colours';
  var PALETTE = ['#c8392b', '#e0a030', '#2d6a9f', '#3aa17e'];
  var RAINBOW = ['#e8742c', '#e0a030', '#7fae3c', '#3aa17e', '#2f8fa8', '#2d6a9f', '#7b4fa0'];
  var INK = '#2b2320';
  var prefs = { mode: 'mosaic', colour: '#3aa17e' };
  try {
    var saved = JSON.parse(localStorage.getItem(PREFS_KEY) || 'null');
    if (saved && /^(mosaic|ink|rainbow)$/.test(saved.mode)) prefs.mode = saved.mode;
    if (saved && /^#[0-9a-f]{6}$/i.test(saved.colour || '')) prefs.colour = saved.colour;
  } catch (e) {}
  function setPrefs(next) {
    if (next.mode && /^(mosaic|ink|rainbow)$/.test(next.mode)) prefs.mode = next.mode;
    if (next.colour && /^#[0-9a-f]{6}$/i.test(next.colour)) prefs.colour = next.colour;
    try { localStorage.setItem(PREFS_KEY, JSON.stringify(prefs)); } catch (e) {}
    return getPrefs();
  }
  function getPrefs() { return { mode: prefs.mode, colour: prefs.colour }; }

  function mix(a, b, t) {
    var x = [1, 3, 5].map(function (i) { return parseInt(a.substr(i, 2), 16); });
    var y = [1, 3, 5].map(function (i) { return parseInt(b.substr(i, 2), 16); });
    return '#' + x.map(function (v, i) {
      var n = Math.round(v * (1 - t) + y[i] * t); return (n < 16 ? '0' : '') + n.toString(16);
    }).join('');
  }
  // The three depths of ink mode, from a base colour.
  function inkTiers(base) { return [mix(base, '#ffffff', 0.55), base, mix(base, INK, 0.35)]; }
  function tierOf(streak) { return streak < 2 ? 0 : (streak < 5 ? 1 : 2); }

  // Background of a solid stamp, and the text colour that reads on it.
  function colour(id) {
    if (prefs.mode === 'mosaic') return PALETTE[(id * 7) % PALETTE.length];
    var e = entry(id), streak = e ? e[STREAK] : 0;
    if (prefs.mode === 'ink') return inkTiers(prefs.colour)[tierOf(streak)];
    return RAINBOW[Math.min(Math.max(streak, 1), RAINBOW.length) - 1];
  }
  function textOn(id) {
    if (prefs.mode !== 'ink') return '#ffffff';
    var e = entry(id), streak = e ? e[STREAK] : 0;
    return tierOf(streak) === 0 ? INK : '#ffffff';
  }
  // The block strip's stamps: mosaic keeps its palette, the others use the
  // mode's "settled" colour so the strip matches the wall.
  function blockColour(b) {
    if (prefs.mode === 'mosaic') return PALETTE[((b + 1) * 7) % PALETTE.length];
    if (prefs.mode === 'ink') return prefs.colour;
    return RAINBOW[3];
  }
  // Solid tiles sit slightly crooked, like a real hanko; the tilt is also
  // fixed per id so it never changes on repaint.
  function tilt(id) { return [-2, 2, -1.5, 1.5, -3][id % 5]; }

  window.KA_Kanji = {
    SOLID_AT: SOLID_AT,
    colour: colour,
    textOn: textOn,
    blockColour: blockColour,
    tilt: tilt,
    prefs: getPrefs,
    setPrefs: setPrefs,
    PALETTE: PALETTE,
    RAINBOW: RAINBOW,
    inkTiers: inkTiers,
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
