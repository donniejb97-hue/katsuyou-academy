// ==========================================================================
// 回転かな · Kaiten Kana — the kana drill as a conveyor-belt sushi bar.
// Plates ride a belt; the ringed one is yours; type (or pick) its kana before
// it passes your seat. The Menu view shows every kana and your progress.
// Progress lives in the same localStorage keys the old Kana Drill used
// (kanaDrillSeen, kanaDrillBest, …) so nobody loses anything.
// Uses t() from i18n.js and playKanaAudio() from app.js.
// ==========================================================================
(function () {
  'use strict';

  // ---------------------------------------------------------------- data
  var KANA = {
    basic: [
      {r:'a',h:'あ',k:'ア'},{r:'i',h:'い',k:'イ'},{r:'u',h:'う',k:'ウ'},{r:'e',h:'え',k:'エ'},{r:'o',h:'お',k:'オ'},
      {r:'ka',h:'か',k:'カ'},{r:'ki',h:'き',k:'キ'},{r:'ku',h:'く',k:'ク'},{r:'ke',h:'け',k:'ケ'},{r:'ko',h:'こ',k:'コ'},
      {r:'sa',h:'さ',k:'サ'},{r:'shi',h:'し',k:'シ'},{r:'su',h:'す',k:'ス'},{r:'se',h:'せ',k:'セ'},{r:'so',h:'そ',k:'ソ'},
      {r:'ta',h:'た',k:'タ'},{r:'chi',h:'ち',k:'チ'},{r:'tsu',h:'つ',k:'ツ'},{r:'te',h:'て',k:'テ'},{r:'to',h:'と',k:'ト'},
      {r:'na',h:'な',k:'ナ'},{r:'ni',h:'に',k:'ニ'},{r:'nu',h:'ぬ',k:'ヌ'},{r:'ne',h:'ね',k:'ネ'},{r:'no',h:'の',k:'ノ'},
      {r:'ha',h:'は',k:'ハ'},{r:'hi',h:'ひ',k:'ヒ'},{r:'fu',h:'ふ',k:'フ'},{r:'he',h:'へ',k:'ヘ'},{r:'ho',h:'ほ',k:'ホ'},
      {r:'ma',h:'ま',k:'マ'},{r:'mi',h:'み',k:'ミ'},{r:'mu',h:'む',k:'ム'},{r:'me',h:'め',k:'メ'},{r:'mo',h:'も',k:'モ'},
      {r:'ya',h:'や',k:'ヤ'},{r:'yu',h:'ゆ',k:'ユ'},{r:'yo',h:'よ',k:'ヨ'},
      {r:'ra',h:'ら',k:'ラ'},{r:'ri',h:'り',k:'リ'},{r:'ru',h:'る',k:'ル'},{r:'re',h:'れ',k:'レ'},{r:'ro',h:'ろ',k:'ロ'},
      {r:'wa',h:'わ',k:'ワ'},{r:'wo',h:'を',k:'ヲ',alt:['o']},{r:'n',h:'ん',k:'ン',alt:['nn']}
    ],
    dakuten: [
      {r:'ga',h:'が',k:'ガ'},{r:'gi',h:'ぎ',k:'ギ'},{r:'gu',h:'ぐ',k:'グ'},{r:'ge',h:'げ',k:'ゲ'},{r:'go',h:'ご',k:'ゴ'},
      {r:'za',h:'ざ',k:'ザ'},{r:'ji',h:'じ',k:'ジ'},{r:'zu',h:'ず',k:'ズ'},{r:'ze',h:'ぜ',k:'ゼ'},{r:'zo',h:'ぞ',k:'ゾ'},
      {r:'da',h:'だ',k:'ダ'},{r:'ji',h:'ぢ',k:'ヂ',alt:['di']},{r:'zu',h:'づ',k:'ヅ',alt:['du']},{r:'de',h:'で',k:'デ'},{r:'do',h:'ど',k:'ド'},
      {r:'ba',h:'ば',k:'バ'},{r:'bi',h:'び',k:'ビ'},{r:'bu',h:'ぶ',k:'ブ'},{r:'be',h:'べ',k:'ベ'},{r:'bo',h:'ぼ',k:'ボ'},
      {r:'pa',h:'ぱ',k:'パ'},{r:'pi',h:'ぴ',k:'ピ'},{r:'pu',h:'ぷ',k:'プ'},{r:'pe',h:'ぺ',k:'ペ'},{r:'po',h:'ぽ',k:'ポ'}
    ],
    combos: [
      {r:'kya',h:'きゃ',k:'キャ'},{r:'kyu',h:'きゅ',k:'キュ'},{r:'kyo',h:'きょ',k:'キョ'},
      {r:'sha',h:'しゃ',k:'シャ'},{r:'shu',h:'しゅ',k:'シュ'},{r:'sho',h:'しょ',k:'ショ'},
      {r:'cha',h:'ちゃ',k:'チャ'},{r:'chu',h:'ちゅ',k:'チュ'},{r:'cho',h:'ちょ',k:'チョ'},
      {r:'nya',h:'にゃ',k:'ニャ'},{r:'nyu',h:'にゅ',k:'ニュ'},{r:'nyo',h:'にょ',k:'ニョ'},
      {r:'hya',h:'ひゃ',k:'ヒャ'},{r:'hyu',h:'ひゅ',k:'ヒュ'},{r:'hyo',h:'ひょ',k:'ヒョ'},
      {r:'mya',h:'みゃ',k:'ミャ'},{r:'myu',h:'みゅ',k:'ミュ'},{r:'myo',h:'みょ',k:'ミョ'},
      {r:'rya',h:'りゃ',k:'リャ'},{r:'ryu',h:'りゅ',k:'リュ'},{r:'ryo',h:'りょ',k:'リョ'},
      {r:'gya',h:'ぎゃ',k:'ギャ'},{r:'gyu',h:'ぎゅ',k:'ギュ'},{r:'gyo',h:'ぎょ',k:'ギョ'},
      {r:'ja',h:'じゃ',k:'ジャ'},{r:'ju',h:'じゅ',k:'ジュ'},{r:'jo',h:'じょ',k:'ジョ'},
      {r:'bya',h:'びゃ',k:'ビャ'},{r:'byu',h:'びゅ',k:'ビュ'},{r:'byo',h:'びょ',k:'ビョ'},
      {r:'pya',h:'ぴゃ',k:'ピャ'},{r:'pyu',h:'ぴゅ',k:'ピュ'},{r:'pyo',h:'ぴょ',k:'ピョ'}
    ]
  };
  var SETS = ['basic', 'dakuten', 'combos'];
  var SET_COL = { basic: '#2f6fd6', dakuten: '#e2a23b', combos: '#d8362a' };
  var SET_RANK = { basic: '並', dakuten: '上', combos: '特上' };
  // Kunrei-shiki and other common spellings, all accepted
  var ALT = { shi:['si'], chi:['ti'], tsu:['tu'], fu:['hu'], ji:['zi'], sha:['sya'], shu:['syu'], sho:['syo'],
    cha:['tya','cya'], chu:['tyu','cyu'], cho:['tyo','cyo'], ja:['zya','jya'], ju:['zyu','jyu'], jo:['zyo','jyo'] };
  // Rows (gyō) of each set, for the Line setting
  var ROW_DEFS = {
    basic: [[0,5],[5,10],[10,15],[15,20],[20,25],[25,30],[30,35],[35,38],[38,43],[43,46]],
    dakuten: [[0,5],[5,10],[10,15],[15,20],[20,25]],
    combos: (function () { var o = []; for (var i = 0; i < 33; i += 3) o.push([i, i + 3]); return o; })()
  };
  // Look-alikes: when the answer is one of these its twins go on the tiles,
  // and on the Master course they follow each other down the belt.
  var LOOKALIKES = [
    ['シ','ツ','ソ','ン','ノ'], ['ジ','ヅ','ゾ'], ['ク','タ','ケ'], ['ウ','ワ','フ','ラ'], ['ス','ヌ','メ','ナ','ム'],
    ['ア','マ','ヤ'], ['チ','テ'], ['オ','ホ','ネ'], ['コ','ユ','ヨ'],
    ['ぬ','め','ね','れ','わ'], ['さ','ち','き'], ['は','ほ','け'], ['る','ろ'], ['う','つ','ら'], ['い','り'], ['こ','に','た'], ['ま','も'], ['し','つ']
  ];
  var ITEMS = [];
  SETS.forEach(function (set) {
    ROW_DEFS[set].forEach(function (rd, ri) {
      KANA[set].slice(rd[0], rd[1]).forEach(function (it) { ITEMS.push({ it: it, set: set, row: ri }); });
    });
  });

  var COURSES = {
    apprentice: { speed: 'slow',   wait: true,  hint: true,  loop: true, oneChance: false, gap: 2.4 },
    regular:    { speed: 'normal', wait: false, hint: false, loop: true, oneChance: false, gap: 1.9 },
    master:     { speed: 'fast',   wait: false, hint: false, loop: true, oneChance: true,  gap: 1.6 }
  };
  var COURSE_KEYS = ['speed', 'wait', 'hint', 'loop', 'oneChance'];
  var SPEED = { slow: 55, normal: 85, fast: 125, rush: 165 };
  var HINT_AFTER = 5000, RUSH_SECONDS = 60;

  // ---------------------------------------------------------------- helpers
  function $(id) { return document.getElementById(id); }
  function tr(key, vars) {
    var s = (typeof t === 'function') ? t(key) : key;
    if (vars) s = String(s).replace(/\{(\w+)\}/g, function (m, k) { return vars[k] !== undefined ? vars[k] : m; });
    return s;
  }
  function arr(key) {
    var L = (typeof LANG !== 'undefined') ? LANG : 'en';
    var d = (typeof I18N !== 'undefined') && ((I18N[L] && I18N[L][key]) || (I18N.en && I18N.en[key]));
    return Array.isArray(d) ? d : [];
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function load(k, d) { try { var v = localStorage.getItem(k); return v === null ? d : v; } catch (e) { return d; } }
  function save(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function toast(msg, kind) { if (typeof showToast === 'function') showToast(msg, kind || 'info'); }
  function charOf(it, sc) { return sc === 'k' ? it.k : it.h; }
  function accepted(it) { return [it.r].concat(ALT[it.r] || [], it.alt || []); }
  var reduced = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var canHover = window.matchMedia && matchMedia('(hover: hover)').matches;

  // ---------------------------------------------------------------- state
  var seen = {};                       // "あ|h" -> { c: right, m: missed, s: shown }
  try { seen = JSON.parse(load('kanaDrillSeen', '{}')) || {}; } catch (e) { seen = {}; }
  function saveSeen() { save('kanaDrillSeen', JSON.stringify(seen)); }
  function rec(ch, sc, it) { return seen[(it ? it.h : ch) + '|' + sc]; }
  function bump(c, field) { var k = c.it.h + '|' + c.sc; var r = seen[k] || { c: 0, m: 0, s: 0 }; r[field] = (r[field] || 0) + 1; seen[k] = r; saveSeen(); }
  function answered(r) { return !!r && (r.c + r.m) > 0; }
  function weakRec(r) { return answered(r) && r.c / (r.c + r.m) < 0.8; }

  var S = { course: 'regular', mode: 'k2r', tiles: 2, order: 'random', script: 'h', sets: { basic: true, dakuten: false, combos: false },
            line: '', unseen: false, weak: false, speed: 'normal', wait: false, hint: false, loop: true, oneChance: false,
            sheets: true, snap: true };
  try {
    var st = JSON.parse(load('kaitenSettings', 'null'));
    if (st && typeof st === 'object') for (var k in S) if (st[k] !== undefined) S[k] = st[k];
    // the belt is silent on purpose: taps on the cheat sheet, the missed list and the Menu still play the recordings
  } catch (e) {}
  // settings the old Kana Drill kept on their own
  var rows = parseInt(load('kanaDrillChoiceRows', ''), 10); if (rows >= 1 && rows <= 3) S.tiles = rows;
  S.sheets = load('kanaDrillCharts', S.sheets ? '1' : '0') !== '0';
  S.snap = load('kanaDrillSnap', S.snap ? '1' : '0') !== '0';
  if (!S.sets.basic && !S.sets.dakuten && !S.sets.combos) S.sets.basic = true;
  if (!COURSES[S.course] && S.course !== 'custom') S.course = 'regular';
  if (S.speed !== 'auto' && !SPEED[S.speed]) S.speed = 'normal';
  function saveSettings() {
    save('kaitenSettings', JSON.stringify(S));
    save('kanaDrillChoiceRows', String(S.tiles)); save('kanaDrillCharts', S.sheets ? '1' : '0'); save('kanaDrillSnap', S.snap ? '1' : '0');
  }

  var best = parseInt(load('kanaDrillBest', '0'), 10) || 0;
  var score = 0, streak = 0, missN = 0, eatenN = 0, servedN = 0, shownN = 0, sessionBest = 0;
  var eatenBy = { basic: 0, dakuten: 0, combos: 0 };
  var missed = {}, missSeq = 0;         // this session: h -> { it, count, seq }
  var plates = [], express = [], again = [], spawnCount = 0, seqIdx = 0, lastSpawn = null;
  var paused = false, hiddenPause = false, overlayOpen = 0, view = 'belt', uid = 0;
  var bp = 0, last = 0, tgt = null, autoV = 70;
  var vel = 0, track = null;             // the belt's actual speed eases toward the wanted one
  var SMOOTH = true;                     /*DEMO-FLAG*/
  var BELT_TILE = 1110 / 264;            // kaiten-belt.jpg: width / height, seamless end to end
  var rush = null;                      // { left: seconds, eaten: n, course }

  var belt, seatEl, geoCache = null;
  function geo() {
    if (geoCache) return geoCache;
    var w = belt.clientWidth, pw = parseFloat(getComputedStyle(belt).getPropertyValue('--pw')) || 132;
    var seat = seatEl.offsetWidth || 200;
    var gapF = COURSES[S.course] ? COURSES[S.course].gap : 1.9;
    geoCache = { w: w, pw: pw, seatStart: w / 2 - seat / 2, seatMid: w / 2, gap: pw * gapF, tp: belt.clientHeight * BELT_TILE };
    if (track) track.style.setProperty('--tp', Math.ceil(geoCache.tp) + 'px');
    return geoCache;
  }
  window.addEventListener('resize', function () { geoCache = null; });

  // ---------------------------------------------------------------- the pool
  function lineSel() { if (!S.line) return null; var p = S.line.split(':'); return { set: p[0], idx: parseInt(p[1], 10) }; }
  function scripts() { return S.script === 'mixed' ? ['h', 'k'] : [S.script === 'k' ? 'k' : 'h']; }
  function cands() {
    var ln = lineSel(), out = [];
    scripts().forEach(function (sc) {
      ITEMS.forEach(function (x) {
        if (!S.sets[x.set]) return;
        if (ln && (x.set !== ln.set || x.row !== ln.idx)) return;
        out.push({ it: x.it, set: x.set, row: x.row, sc: sc, ch: charOf(x.it, sc) });
      });
    });
    return out;
  }
  function filtered() {
    var c = cands();
    if (S.unseen) {
      var u = c.filter(function (x) { return !answered(rec(null, x.sc, x.it)); });
      if (u.length) c = u; else { S.unseen = false; saveSettings(); paintSettings(); toast(tr('all_seen'), 'success'); }
    }
    if (S.weak) {
      var w = c.filter(function (x) { return weakRec(rec(null, x.sc, x.it)); });
      if (w.length) c = w; else { S.weak = false; saveSettings(); paintSettings(); toast(tr('none_weak'), 'success'); }
    }
    return c;
  }
  function onBelt(ch) { return plates.some(function (p) { return p.state === 'on' && p.c.ch === ch; }); }
  function twinsOf(ch) { for (var i = 0; i < LOOKALIKES.length; i++) if (LOOKALIKES[i].indexOf(ch) !== -1) return LOOKALIKES[i]; return null; }
  function pickNext() {
    if (express.length) { var e = express.shift(); e.tag = 'ex'; return e; }
    if (again.length && again[0].due <= spawnCount) { var a = again.shift().c; a.tag = 'again'; return a; }
    var c = filtered(); if (!c.length) return null;
    if (S.order === 'seq') {
      if (seqIdx >= c.length) { seqIdx = 0; toast(tr('seq_restart'), 'success'); }
      var s = c[seqIdx++]; paintOrderLabel(c.length); return copy(s);
    }
    // Master: a look-alike of the last plate often follows it
    if (S.course === 'master' && lastSpawn && Math.random() < 0.5) {
      var tw = twinsOf(lastSpawn.ch);
      if (tw) {
        var twins = c.filter(function (x) { return x.ch !== lastSpawn.ch && tw.indexOf(x.ch) !== -1 && !onBelt(x.ch); });
        if (twins.length) return copy(twins[Math.floor(Math.random() * twins.length)]);
      }
    }
    var pick, n = 0;
    do { pick = c[Math.floor(Math.random() * c.length)]; n++; }
    while (n < 25 && c.length > 2 && (onBelt(pick.ch) || (lastSpawn && pick.ch === lastSpawn.ch)));
    return copy(pick);
  }
  function copy(x) { return { it: x.it, set: x.set, row: x.row, sc: x.sc, ch: x.ch }; }

  // ---------------------------------------------------------------- the belt
  function spawn(x) {
    var c = pickNext(); if (!c) return;
    spawnCount++; lastSpawn = c;
    var el = document.createElement('div');
    el.className = 'kk-plate'; el.style.setProperty('--pc', SET_COL[c.set]);
    var face = S.mode === 'r2k' ? '<b class="ro">' + esc(c.it.r) + '</b>' : '<b class="jp-plate' + (c.ch.length > 1 ? ' two' : '') + '">' + c.ch + '</b>';
    el.innerHTML = face + '<em></em>' + (c.tag === 'ex' ? '<span class="pb ex">🚄</span>' : c.tag === 'again' ? '<span class="pb">↻</span>' : '');
    belt.appendChild(el);
    var p = { c: c, x: x, el: el, state: 'on', id: ++uid, since: 0 };
    plates.push(p); place(p);
    $('kk-express').classList.toggle('live', c.tag === 'ex' || express.length > 0);
  }
  // Plates and the belt move with transforms only: the compositor slides them, nothing is
  // repainted or re-styled per frame.
  function place(p) {
    p.tf = SMOOTH ? 'translate3d(' + p.x.toFixed(2) + 'px,0,0)' : 'translateX(' + p.x.toFixed(1) + 'px)';
    if (!SMOOTH) p.el.style.setProperty('--tf', p.tf);
    if (p.state !== 'eaten') p.el.style.transform = p.tf;
  }
  function moveBelt(g) {
    if (!SMOOTH) { belt.style.setProperty('--bp', bp.toFixed(1) + 'px'); return; }
    var off = bp % g.tp; if (off > 0) off -= g.tp;
    track.style.transform = 'translate3d(' + off.toFixed(2) + 'px,0,0)';
  }
  function clearBelt() { plates.forEach(function (p) { p.el.remove(); }); plates = []; tgt = null; }
  function resetBelt() {
    clearBelt(); geoCache = null; lastSpawn = null;
    var g = geo(); spawn(g.w * 0.78); paintTarget();
  }
  function target() {
    var g = geo();
    for (var i = 0; i < plates.length; i++) if (plates[i].state === 'on' && plates[i].x < g.w * 0.86) return plates[i];
    return null;
  }
  function paintTarget() {
    var tp = target();
    if (SMOOTH && tp === tgt) return;                  // nothing changed: touch no classes this frame
    for (var i = 0; i < plates.length; i++) plates[i].el.classList.toggle('target', plates[i] === tp);
    if (tp !== tgt) { tgt = tp; if (tp) tp.since = 0; $('kk-in').value = ''; if (S.mode === 'r2k') buildTiles(); }
  }
  function speedNow() {
    var v = S.speed === 'auto' ? autoV : SPEED[S.speed] || 85;
    if (rush) v = Math.max(v, SPEED.fast) * 1.15;
    return v;
  }
  function running() { return !paused && !hiddenPause && !overlayOpen && view === 'belt'; }
  // Frame timestamps wobble by a millisecond or two; moving by the raw gap makes the belt shimmer.
  // Snap each step to whole display frames (60, 120, 144 Hz alike), so motion is even and
  // still keeps real time when a frame is genuinely dropped.
  var frameT = 1 / 60;
  function stepOf(raw) {
    if (raw > frameT * 0.7 && raw < frameT * 1.35) frameT += (raw - frameT) * 0.05;   // learn the display's rate
    var n = Math.max(1, Math.round(raw / frameT));
    return Math.min(0.05, n * frameT);
  }
  function tick(now) {
    var raw = (now - last) / 1000; last = now;
    var dt = SMOOTH ? stepOf(raw) : Math.min(0.05, raw);
    if (running()) {
      var g = geo(), tp = target();
      var dx;
      if (SMOOTH) {
        var want = speedNow() * (tp ? 1 : 4);               // the belt hurries when nothing is at your seat
        if (tp && S.wait && !rush) want = Math.min(want, Math.max(0, tp.x - g.seatMid) * 6);  // …and glides to a stop there on request
        vel += (want - vel) * Math.min(1, dt * 7);           // speeding up and slowing down take a moment, like a real belt
        dx = vel * dt;
      } else dx = speedNow() * dt * (tp ? 1 : 4);
      if (tp && S.wait && !rush && tp.x - dx < g.seatMid) dx = Math.max(0, tp.x - g.seatMid);
      bp -= dx; moveBelt(g);
      // a new plate only comes on once the last one is a full gap away, so plates never stack
      var lastX = -1e9;
      for (var i = 0; i < plates.length; i++) if (plates[i].state !== 'eaten' && plates[i].x > lastX) lastX = plates[i].x;
      if (lastX <= g.w + g.pw - g.gap) spawn(g.w + g.pw);
      // plain loops, no new arrays or closures per frame: nothing for the garbage collector to pause on
      for (var j = 0; j < plates.length; j++) {
        var p = plates[j];
        p.x -= dx; place(p);
        if (p.state === 'on' && p.x < g.seatStart - g.pw * 0.3) miss(p);
      }
      for (var k = plates.length - 1; k >= 0; k--) if (plates[k].x < -g.pw) { plates[k].el.remove(); plates.splice(k, 1); }
      paintTarget();
      if (tgt && S.hint && !rush && !tgt.shown && !tgt.hinted) {
        tgt.since += dt * 1000;
        if (tgt.since >= HINT_AFTER) giveHint(tgt);
      }
      if (rush) { rush.left -= dt; paintRush(); if (rush.left <= 0) endRush(); }
    }
    requestAnimationFrame(tick);
  }

  function eat(p) {
    p.state = 'eaten'; p.el.classList.remove('target'); p.el.classList.add('eaten');
    p.el.style.transform = p.tf + ' translateY(-230px) scale(.4)';
    servedN++; eatenN++; eatenBy[p.c.set]++;
    if (!p.shown && !p.wrong && !p.hinted) {
      bump(p.c, 'c'); score++; streak++;
      if (rush) rush.eaten++;
      if (streak > sessionBest) sessionBest = streak;
      if (streak > best) { best = streak; save('kanaDrillBest', String(best)); }
      if (S.speed === 'auto') autoV = Math.min(170, autoV + 4);
    }
    hud();
    setTimeout(function () { p.el.remove(); }, 500);
    $('kk-in').value = '';
  }
  function noteMiss(c) {
    var prev = missed[c.it.h];
    missed[c.it.h] = { it: c.it, count: prev ? prev.count + 1 : 1, seq: ++missSeq };
  }
  function miss(p) {
    if (p.state !== 'on') return;
    p.state = 'gone'; p.el.classList.remove('target'); p.el.classList.add('gone');
    servedN++; if (!p.wrong) missN++;          // a wrong answer already counted this plate
    if (!p.wrong && !p.shown && !p.hinted) bump(p.c, 'm');
    if (!p.shown || S.course === 'master') streak = 0;
    if (!p.wrong) noteMiss(p.c);
    if (S.speed === 'auto') autoV = Math.max(45, autoV - 15);
    var em = p.el.querySelector('em'); if (em) { em.className = ''; em.textContent = S.mode === 'r2k' ? p.c.ch : p.c.it.r; }
    if (S.loop) { again.push({ c: copy(p.c), due: spawnCount + 2 }); p.el.insertAdjacentHTML('beforeend', '<span class="pb">↻</span>'); }
    hud();
  }
  function wrong(p) {
    if (!p.wrong && !p.shown && !p.hinted) { bump(p.c, 'm'); noteMiss(p.c); }
    if (!p.wrong) { p.wrong = true; missN++; }
    streak = 0;
    if (S.speed === 'auto') autoV = Math.max(45, autoV - 8);
    hud();
    if (S.oneChance) miss(p);
  }
  function showMe() {
    var p = target(); if (!p || p.shown) { focusIn(); return; }
    if (!p.wrong && !p.hinted) bump(p.c, 's');
    p.shown = true; shownN++;
    if (S.course === 'master') { streak = 0; hud(); }
    var em = p.el.querySelector('em'); em.className = ''; em.textContent = S.mode === 'r2k' ? p.c.ch : p.c.it.r;
    if (S.mode === 'r2k') [].forEach.call($('kk-tiles').children, function (b) { b.classList.toggle('hint', b.getAttribute('data-ch') === p.c.ch); });
    focusIn();
  }
  function giveHint(p) {
    p.hinted = true; bump(p.c, 's');
    var em = p.el.querySelector('em'); em.className = 'hint'; em.textContent = S.mode === 'r2k' ? p.c.ch : p.c.it.r;
  }

  // ---------------------------------------------------------------- answering
  function tryEat(enter) {
    var p = target(), inp = $('kk-in');
    var v = inp.value.trim().toLowerCase().replace(/\s+/g, '');
    if (!p || !v) return;
    if (accepted(p.c.it).indexOf(v) !== -1) { eat(p); return; }
    if (!enter) return;
    wrong(p);
    inp.classList.remove('kk-shake'); void inp.offsetWidth; inp.classList.add('kk-shake'); inp.select();
  }
  function focusIn() { if (S.mode === 'k2r' && canHover && view === 'belt' && !overlayOpen) $('kk-in').focus({ preventScroll: true }); }
  function buildTiles() {
    var box = $('kk-tiles'), p = target(), n = S.tiles * 4;
    box.classList.toggle('wait', !p);
    if (!p) { var h = ''; for (var i = 0; i < n; i++) h += '<button class="kk-tile" type="button" tabindex="-1">·</button>'; box.innerHTML = h; return; }
    var ch = p.c.ch, sc = p.c.sc, used = {}; used[ch] = true;
    var usedR = {}; usedR[p.c.it.r] = true;
    var picks = [], tw = twinsOf(ch) || [];
    var pool = [];
    SETS.forEach(function (set) { if (S.sets[set]) KANA[set].forEach(function (it) { pool.push(it); }); });
    tw.forEach(function (x) {
      if (picks.length >= Math.min(3, n - 1) || used[x]) return;
      for (var i = 0; i < pool.length; i++) if (charOf(pool[i], sc) === x && !usedR[pool[i].r]) { picks.push({ ch: x, twin: true }); used[x] = true; usedR[pool[i].r] = true; return; }
    });
    var guard = 0;
    while (picks.length < n - 1 && guard++ < 400) {
      var it = pool[Math.floor(Math.random() * pool.length)], c2 = charOf(it, sc);
      if (used[c2] || usedR[it.r]) continue;
      used[c2] = true; usedR[it.r] = true; picks.push({ ch: c2 });
    }
    var opts = picks.concat([{ ch: ch }]);
    for (var j = opts.length - 1; j > 0; j--) { var q = Math.floor(Math.random() * (j + 1)), tmp = opts[j]; opts[j] = opts[q]; opts[q] = tmp; }
    box.innerHTML = opts.map(function (o, i) {
      return '<button class="kk-tile' + (o.twin ? ' twin' : '') + '" type="button" data-ch="' + o.ch + '"' + (o.twin ? ' data-twin="' + esc(tr('kk_lookalike')) + '"' : '') + '>' + (i < 9 ? '<small>' + (i + 1) + '</small>' : '') + o.ch + '</button>';
    }).join('');
  }
  function pickTile(b) {
    var p = target(); if (!p || !b || !b.getAttribute('data-ch')) return;
    if (b.getAttribute('data-ch') === p.c.ch) { eat(p); return; }
    b.classList.add('bad'); b.classList.remove('kk-shake'); void b.offsetWidth; b.classList.add('kk-shake');
    wrong(p);
  }

  // ---------------------------------------------------------------- rush hour
  function startRush() {
    if (rush) return;
    rush = { left: RUSH_SECONDS, eaten: 0, course: S.course };
    paused = false; paintPause();
    openTab(false); resetBelt(); $('kk-rush-row').hidden = false; paintRush();
    toast(tr('kk_rush_go'), 'success');
    var top = $('kk-hero').getBoundingClientRect().top + window.scrollY - 80;
    if (window.scrollY > top + 40) window.scrollTo({ top: top, behavior: reduced ? 'auto' : 'smooth' });
    focusIn();
  }
  var rushShown = '';
  function paintRush() { if (!rush) return; var t = Math.max(0, Math.ceil(rush.left)) + ' s'; if (t !== rushShown) { rushShown = t; $('kk-rush-left').textContent = t; } }
  function rushBests() { try { return JSON.parse(load('kaitenRushBest', '{}')) || {}; } catch (e) { return {}; } }
  function endRush() {
    var r = rush; rush = null; $('kk-rush-row').hidden = true;
    clearBelt(); paused = true; paintPause();
    var bests = rushBests(), prev = bests[r.course] || 0, isNew = r.eaten > prev;
    if (isNew) { bests[r.course] = r.eaten; save('kaitenRushBest', JSON.stringify(bests)); }
    openBill({ rush: r, isNew: isNew, prev: prev });
  }

  // ---------------------------------------------------------------- the tally & missed list
  function hud() {
    $('kk-eaten').textContent = score; $('kk-streak').textContent = streak; $('kk-best').textContent = best; $('kk-missn').textContent = missN;
    $('kk-bill').textContent = eatenN + '/' + servedN;
    var keys = Object.keys(missed).sort(function (a, b) { return missed[b].seq - missed[a].seq; });
    var box = $('kk-missed');
    box.innerHTML = keys.length ? keys.map(function (h) {
      var m = missed[h];
      return '<button class="kk-mk' + (m.count >= 3 ? ' hot' : '') + '" type="button" data-h="' + h + '" title="' + esc(tr('click_hear')) + '">' + m.it.h + '・' + m.it.k +
        ' <small>' + esc(m.it.r) + '</small>' + (m.count > 1 ? '<span class="x">×' + m.count + '</span>' : '') + '</button>';
    }).join('') : '<span class="empty">' + esc(tr('kk_missed_none')) + '</span>';
  }

  // ---------------------------------------------------------------- the ordering tablet
  function courseName(c) { return tr('kk_c_' + c); }
  function speedName(s) { return tr('kk_sp_' + s); }
  function setOpt(k, v) {
    if (k === 'set') {
      var on = SETS.filter(function (s) { return S.sets[s]; }).length;
      if (S.sets[v] && on === 1) { toast(tr('one_set'), 'warning'); return; }
      S.sets[v] = !S.sets[v];
      var ln = lineSel(); if (ln && !S.sets[ln.set]) S.line = '';
    } else if (v === 't') {
      if (k === 'unseen' && !S.unseen) {
        var any = cands().some(function (x) { return !answered(rec(null, x.sc, x.it)); });
        if (!any) { toast(tr('all_seen'), 'warning'); return; }
        S.weak = false;
      }
      if (k === 'weak' && !S.weak) {
        var anyW = cands().some(function (x) { return weakRec(rec(null, x.sc, x.it)); });
        if (!anyW) { toast(tr('none_weak'), 'warning'); return; }
        S.unseen = false;
      }
      S[k] = !S[k];
    } else S[k] = v;
    if (COURSE_KEYS.indexOf(k) !== -1 && COURSES[S.course] && COURSES[S.course][k] !== S[k]) S.course = 'custom';
    if (k === 'speed' && v === 'auto') autoV = 70;
    saveSettings(); paintSettings();
    // what's served changed: the chef clears the belt
    if (['mode', 'order', 'script', 'set', 'unseen', 'weak'].indexOf(k) !== -1) { seqIdx = 0; again = []; resetBelt(); }
    if (k === 'mode') { syncMode(); focusIn(); }
  }
  function applyCourse(c) {
    S.course = c;
    if (COURSES[c]) COURSE_KEYS.forEach(function (k) { S[k] = COURSES[c][k]; });
    if (S.speed === 'auto') autoV = 70;
    geoCache = null; saveSettings(); paintSettings();
  }
  function rowLabel(set, idx) {
    var rd = ROW_DEFS[set][idx], items = KANA[set].slice(rd[0], rd[1]);
    var chars = items.map(function (it) { return S.script === 'k' ? it.k : it.h; }).join('');
    return tr('row_fmt', { r: items[0].r.toUpperCase() }) + ' · ' + chars;
  }
  function paintOrderLabel(n) {
    $('kk-o-seq').textContent = tr('order_seq') + (S.order === 'seq' && n ? ' · ' + Math.min(seqIdx, n) + '/' + n : '');
  }
  function paintSettings() {
    document.querySelectorAll('#kk-tab .opt').forEach(function (b) {
      var k = b.getAttribute('data-k'), v = b.getAttribute('data-v');
      var on = k === 'set' ? !!S.sets[v] : v === 't' ? !!S[k] : S[k] === v;
      b.classList.toggle('on', on); b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    $('kk-o-rand').textContent = tr('order_random'); paintOrderLabel(S.order === 'seq' ? filteredCount() : 0);
    $('kk-f-unseen').textContent = tr('unseen_only'); $('kk-f-weak').textContent = tr('weak_only');
    $('kk-f-sheets').textContent = S.sheets ? tr('charts_on') : tr('charts_off');
    $('kk-f-snap').textContent = S.snap ? tr('snap_on') : tr('snap_off');
    // courses
    $('kk-courses').innerHTML = ['apprentice', 'regular', 'master', 'custom'].map(function (c) {
      var jp = { apprentice: '見習い', regular: '一人前', master: '職人', custom: 'お好み' }[c];
      return '<button class="kk-course' + (S.course === c ? ' on' : '') + '" type="button" data-course="' + c + '" aria-pressed="' + (S.course === c) + '"><b>' + esc(courseName(c)) +
        ' <span class="jp">' + jp + '</span></b>' + esc(tr('kk_c_' + c + '_d')) + '</button>';
    }).join('');
    $('kk-speeds').innerHTML = ['slow', 'normal', 'fast', 'rush', 'auto'].map(function (s) {
      return '<button class="kk-btn opt' + (S.speed === s ? ' on' : '') + '" type="button" data-k="speed" data-v="' + s + '" aria-pressed="' + (S.speed === s) + '">' + esc(speedName(s)) + '</button>';
    }).join('');
    // tiles & lines
    var ts = $('kk-tilesel');
    ts.innerHTML = [1, 2, 3].map(function (n) { return '<option value="' + n + '">' + esc(n === 1 ? tr('choice_rows_1') : tr('choice_rows_n', { n: n, c: n * 4 })) + '</option>'; }).join('');
    ts.value = String(S.tiles); ts.disabled = S.mode !== 'r2k';
    var ls = $('kk-linesel'), h = '<option value="">' + esc(tr('all_rows')) + '</option>';
    SETS.forEach(function (set) {
      if (!S.sets[set]) return;
      h += '<optgroup label="' + esc(String(tr('set_' + set)).replace(/\s*\(\d+\)\s*$/, '')) + '">';
      ROW_DEFS[set].forEach(function (_, i) { h += '<option value="' + set + ':' + i + '">' + esc(rowLabel(set, i)) + '</option>'; });
      h += '</optgroup>';
    });
    ls.innerHTML = h; ls.value = S.line; if (ls.value !== S.line) { S.line = ''; ls.value = ''; }
    // the closed summary
    $('kk-s0').textContent = courseName(S.course);
    $('kk-s1').textContent = tr(S.mode === 'k2r' ? 'mode_k2r' : 'mode_r2k') + ' · ' + tr(S.order === 'seq' ? 'order_seq' : 'order_random') + (S.mode === 'r2k' ? ' · ' + tr('kk_n_tiles', { n: S.tiles * 4 }) : '');
    var ln = lineSel();
    $('kk-s2').textContent = (S.script === 'mixed' ? tr('mixed') : S.script === 'k' ? 'カタカナ' : 'ひらがな') + ' · ' +
      SETS.filter(function (s) { return S.sets[s]; }).map(function (s) { return String(tr('set_' + s)).replace(/\s*\(\d+\)\s*$/, ''); }).join(' + ') + ' · ' +
      (ln ? rowLabel(ln.set, ln.idx).split(' · ')[0] : tr('all_rows'));
    var f = [S.unseen && tr('unseen_only'), S.weak && tr('weak_only')].filter(Boolean);
    $('kk-s3').textContent = (f.length ? f.join(' + ') : tr('kk_everything')) + ' · ' + speedName(S.speed) + (S.oneChance ? ' · ' + tr('kk_onechance') : '');
    $('kk-s4').textContent = S.sheets ? tr('charts_on') : tr('charts_off');
    document.querySelectorAll('.kk-sheet-btn').forEach(function (b) { b.disabled = !S.sheets; });
    $('kk-tog').textContent = $('kk-tab-open').hidden ? tr('kk_change') : tr('kk_done');
    $('kk-rush').disabled = !!rush;
  }
  function filteredCount() { var c = cands(); if (S.unseen || S.weak) c = c.filter(function (x) { var r = rec(null, x.sc, x.it); return S.unseen ? !answered(r) : weakRec(r); }); return c.length; }
  function openTab(on) {
    $('kk-tab-open').hidden = !on; $('kk-tab').classList.toggle('open', on);
    $('kk-tog').setAttribute('aria-expanded', on ? 'true' : 'false'); save('kaitenTabOpen', on ? '1' : '0'); paintSettings();
  }
  function syncMode() { $('kk-type').hidden = S.mode !== 'k2r'; $('kk-pick').hidden = S.mode !== 'r2k'; if (S.mode === 'r2k') buildTiles(); }
  function paintPause() {
    document.querySelectorAll('.kk-pause').forEach(function (b) { b.textContent = paused ? tr('kk_resume') : tr('kk_pause'); });
    belt.classList.toggle('is-paused', paused);
  }

  // ---------------------------------------------------------------- overlays
  var ovEl = null, peekKey = null;
  function openCard(html, cls) {
    closeCard(true);
    ovEl = document.createElement('div'); ovEl.className = 'kk-ov'; ovEl.setAttribute('role', 'dialog'); ovEl.setAttribute('aria-modal', 'true');
    ovEl.innerHTML = '<div class="kk-card ' + (cls || '') + '"><button class="x" type="button" aria-label="' + esc(tr('kk_close')) + '">✕</button>' + html + '</div>';
    document.body.appendChild(ovEl); overlayOpen++;
    ovEl.addEventListener('click', function (e) { if (e.target === ovEl || e.target.closest('.x') || e.target.closest('[data-close]')) closeCard(); });
    return ovEl;
  }
  function closeCard(silent) {
    if (!ovEl) return;
    ovEl.remove(); ovEl = null; overlayOpen = Math.max(0, overlayOpen - 1); last = performance.now();
    if (!silent) focusIn();
  }
  function sheet(sc, peek) {
    if (!S.sheets) { toast(tr('charts_disabled'), 'warning'); return; }
    var tp = target(), cur = tp ? tp.c.it.h : null, f = function (it) { return charOf(it, sc); };
    var cell = function (it) { return it ? '<button class="cell' + (it.h === cur ? ' cur' : '') + '" type="button" data-h="' + it.h + '"><b>' + f(it) + '</b><i>' + esc(it.r) + '</i></button>' : '<span class="gap"></span>'; };
    var byR = {}; KANA.basic.forEach(function (it) { byR[it.r] = it; });
    var G = [['a','i','u','e','o'],['ka','ki','ku','ke','ko'],['sa','shi','su','se','so'],['ta','chi','tsu','te','to'],['na','ni','nu','ne','no'],['ha','hi','fu','he','ho'],
             ['ma','mi','mu','me','mo'],['ya',null,'yu',null,'yo'],['ra','ri','ru','re','ro'],['wa',null,null,null,'wo'],['n',null,null,null,null]];
    var heads = ['', 'k', 's', 't', 'n', 'h', 'm', 'y', 'r', 'w', 'n'];
    var h = '<div class="eb">' + esc(tr('kk_sheet_eb')) + '</div><h2>' + esc(sc === 'k' ? tr('cheat_title_k') : tr('cheat_title_h')) + '</h2>' +
      '<div class="hint">' + esc(peek ? tr('kk_peek_hint') : tr('kk_sheet_hint')) + '</div>';
    h += '<div class="kk-sheet-sec">' + esc(tr('cheat_basic')) + '</div><div class="kk-sheet-grid"><span class="hd"></span>' + ['a','i','u','e','o'].map(function (v) { return '<span class="hd">' + v + '</span>'; }).join('');
    G.forEach(function (row, i) { h += '<span class="hd">' + heads[i] + '</span>' + row.map(function (r) { return cell(r ? byR[r] : null); }).join(''); });
    h += '</div><div class="kk-sheet-sec">' + esc(tr('cheat_dakuten')) + '</div><div class="kk-sheet-grid"><span class="hd"></span>' + ['a','i','u','e','o'].map(function (v) { return '<span class="hd">' + v + '</span>'; }).join('');
    KANA.dakuten.forEach(function (it, i) { if (i % 5 === 0) h += '<span class="hd">' + 'gzdbp'[i / 5] + '</span>'; h += cell(it); });
    h += '</div><div class="kk-sheet-sec">' + esc(tr('cheat_combos')) + '</div><div class="kk-sheet-grid c3"><span class="hd"></span><span class="hd">a</span><span class="hd">u</span><span class="hd">o</span>';
    KANA.combos.forEach(function (it, i) { if (i % 3 === 0) h += '<span class="hd">' + it.r.replace(/[aiueo]+$/, '') + '</span>'; h += cell(it); });
    h += '</div>';
    var ov = openCard(h, 'sheet');
    ov.querySelectorAll('.cell').forEach(function (b) { b.addEventListener('click', function () { if (typeof playKanaAudio === 'function') playKanaAudio(b.getAttribute('data-h')); }); });
    if (S.snap) { var c = ov.querySelector('.cell.cur'); if (c && c.scrollIntoView) c.scrollIntoView({ block: 'center' }); }
  }
  function openKeys() {
    var rowsK = arr('kk_keys_rows');
    openCard('<div class="eb">' + esc(tr('kk_shortcuts_eb')) + '</div><h2>' + esc(tr('kk_shortcuts_t')) + '</h2><table>' +
      rowsK.map(function (r) { return '<tr><td><kbd>' + esc(r[0]) + '</kbd></td><td>' + esc(r[1]) + '</td></tr>'; }).join('') + '</table>', 'keys');
  }
  function openBill(extra) {
    var acc = servedN ? Math.round(100 * score / servedN) : 0;
    var rowsB = [['🔵 ' + tr('kk_r_basic'), eatenBy.basic], ['🟡 ' + tr('kk_r_dakuten'), eatenBy.dakuten], ['🔴 ' + tr('kk_r_combos'), eatenBy.combos],
      [tr('kk_r_served'), servedN], [tr('kk_r_first'), score], [tr('kk_r_shown'), shownN], [tr('kk_r_away'), missN], [tr('kk_r_best'), sessionBest], [tr('kk_r_acc'), acc + '%'],
      [tr('kk_r_course'), courseName(S.course)]];
    var misses = Object.keys(missed).map(function (h) { return missed[h].it; });
    var d = new Date(), time = ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2);
    var html = '<h2>お会計</h2><div class="c">回転かな · ' + time + '</div>';
    if (extra && extra.rush) {
      html += '<div class="rush">' + esc(tr('kk_rush_over')) + '<b>' + extra.rush.eaten + '</b>' + esc(tr('kk_rush_score', { c: courseName(extra.rush.course) })) +
        '<br>' + esc(extra.isNew ? tr('kk_rush_new') : tr('kk_rush_best', { n: extra.prev })) + '</div>';
    }
    html += '<table>' + rowsB.map(function (r) { return '<tr><td>' + esc(r[0]) + '</td><td>' + esc(r[1]) + '</td></tr>'; }).join('') + '</table>';
    if (misses.length) html += '<p style="font-size:.85rem">' + esc(tr('kk_r_gotaway')) + ' <b class="jp">' + misses.map(function (it) { return it.h; }).join(' ') + '</b></p>';
    html += '<div class="kk-act"><button type="button" id="kk-r-ord"' + (misses.length ? '' : ' disabled') + '>🚄 ' + esc(tr('kk_r_order')) + '</button><button type="button" class="q" data-close>' + esc(tr('kk_r_thanks')) + '</button></div>';
    var ov = openCard(html, 'receipt');
    var ob = ov.querySelector('#kk-r-ord');
    if (misses.length) ob.addEventListener('click', function () {
      express = misses.map(function (it) { var x = ITEMS.filter(function (y) { return y.it === it; })[0]; var sc = S.script === 'k' ? 'k' : 'h'; return { it: it, set: x.set, row: x.row, sc: sc, ch: charOf(it, sc) }; });
      closeCard(); paused = false; paintPause(); resetBelt(); toast(tr('kk_express_on', { n: express.length + 1 }), 'success');
    });
  }

  // ---------------------------------------------------------------- How it works: the お品書き book
  var book = null;
  function buildBook() {
    var D = arr('kk_hw_dishes'), KN = ['一','二','三','四','五','六','七','八','九','十'];
    var dish = function (d, i) {
      return '<div class="kk-dish"><span class="kk-num">' + KN[i] + '</span><div><h4>' + esc(d[0]) + ' <span class="jp">' + esc(d[1]) + '</span><span class="lead"></span><span class="price">' + esc(d[3]) +
        '</span></h4><p>' + d[2] + '</p></div></div>';
    };
    var page = function (n, a, b) {
      return '<div class="kk-face"><span class="kk-frame"></span><div class="kk-ph"><b>お品書き</b><small>' + esc(tr('kk_how')) + '</small></div>' + dish(D[a], a) + (D[b] ? dish(D[b], b) : '') +
        '<div class="kk-pf"><span>回転かな</span><span>' + KN[n] + '</span></div></div>';
    };
    var pages = [
      '<div class="kk-face kk-inside"><div class="kk-slip2">使い方</div><div class="sub">' + esc(tr('kk_how')) + '</div><span class="kk-hanko">回転<br>かな</span></div>',
      page(0, 0, 1), page(1, 2, 3), page(2, 4, 5), page(3, 6, 7), page(4, 8, 9),
      '<div class="kk-face kk-endpage"><span class="kk-frame"></span><span class="stack"><i style="--c:#d8362a"></i><i style="--c:#e2a23b"></i><i style="--c:#2f6fd6"></i></span><b>召し上がれ</b><p>' +
        esc(tr('kk_hw_end')) + '</p><button type="button" data-close>' + esc(tr('kk_hw_start')) + '</button><div class="kk-pf"><span>回転かな</span><span>六</span></div></div>',
      '<div class="kk-face kk-inside"><span class="kk-hanko">回転<br>かな</span></div>'
    ];
    return pages;
  }
  var BLANK = '<div class="kk-face blank"></div>';
  var COVER = '<div class="kk-face kk-coverface"><div class="kk-slip2">使い方</div></div>';
  function single() { return window.matchMedia && matchMedia('(max-width: 700px)').matches; }
  function spreads(P) { if (single()) return P.slice(0, 7).map(function (p) { return [BLANK, p]; }); return [[P[0], P[1]], [P[2], P[3]], [P[4], P[5]], [P[6], P[7]]]; }
  function openBook() {
    if (book) return;
    var P = buildBook(), SP = spreads(P), idx = 0, busy = true;
    var ov = document.createElement('div'); ov.className = 'kk-bov'; ov.setAttribute('role', 'dialog'); ov.setAttribute('aria-modal', 'true'); ov.setAttribute('aria-label', tr('kk_how'));
    ov.innerHTML = '<div class="kk-book"><div class="kk-pg l"></div><div class="kk-pg r"></div><div class="kk-leaf"></div></div><div class="kk-bctl"><button type="button" data-prev aria-label="' + esc(tr('tv_help_prev')) +
      '">‹</button><span class="kk-dots"></span><button type="button" data-next aria-label="' + esc(tr('tv_help_next')) + '">›</button><button type="button" data-close>✕ ' + esc(tr('kk_close')) + '</button></div>';
    document.body.appendChild(ov); overlayOpen++;
    var L = ov.querySelector('.kk-pg.l'), R = ov.querySelector('.kk-pg.r'), leaf = ov.querySelector('.kk-leaf');
    book = { ov: ov, turn: turn, close: close };
    function ctl() {
      ov.querySelector('.kk-dots').innerHTML = SP.map(function (_, i) { return '<i class="' + (i === idx ? 'on' : '') + '"></i>'; }).join('');
      ov.querySelector('[data-prev]').disabled = idx === 0; ov.querySelector('[data-next]').disabled = idx === SP.length - 1;
    }
    function flip(front, back, dir, done) {
      var one = single();
      leaf.innerHTML = front.replace('class="kk-face', 'class="kk-face front') + back.replace('class="kk-face', 'class="kk-face back') + '<span class="shade"></span>';
      leaf.style.left = (dir > 0 || one ? R.offsetLeft : 0) + 'px';
      leaf.style.transformOrigin = (dir > 0 || one ? 'left' : 'right') + ' center';
      leaf.style.transition = 'none'; leaf.style.transform = one && dir < 0 ? 'rotateY(-180deg)' : 'rotateY(0)'; leaf.classList.add('on');
      if (reduced) { leaf.classList.remove('on'); done(); return; }
      requestAnimationFrame(function () { requestAnimationFrame(function () {
        leaf.style.transition = 'transform .75s cubic-bezier(.45,.05,.3,1)';
        leaf.style.transform = one ? (dir > 0 ? 'rotateY(-180deg)' : 'rotateY(0)') : (dir > 0 ? 'rotateY(-180deg)' : 'rotateY(180deg)');
        var sh = leaf.querySelector('.shade'); sh.style.transition = 'opacity .75s'; sh.style.opacity = '1';
        setTimeout(function () { leaf.classList.remove('on'); done(); }, 780);
      }); });
    }
    function turn(d) {
      if (busy) return; var n = idx + d; if (n < 0 || n >= SP.length) return; busy = true;
      var fin = function () { idx = n; busy = false; ctl(); };
      if (single()) {
        if (d > 0) { var cur = SP[idx][1]; R.innerHTML = SP[n][1]; flip(cur, BLANK, 1, fin); }
        else { var tgtP = SP[n][1]; flip(tgtP, BLANK, -1, function () { R.innerHTML = tgtP; fin(); }); }
        return;
      }
      if (d > 0) { R.innerHTML = SP[n][1]; flip(SP[idx][1], SP[n][0], 1, function () { L.innerHTML = SP[n][0]; fin(); }); }
      else { L.innerHTML = SP[n][0]; flip(SP[idx][0], SP[n][1], -1, function () { R.innerHTML = SP[n][1]; fin(); }); }
    }
    function close() {
      ov.classList.remove('on'); save('kaitenHelpSeen', '1');
      setTimeout(function () { ov.remove(); }, 250);
      book = null; overlayOpen = Math.max(0, overlayOpen - 1); last = performance.now(); focusIn();
    }
    ov.addEventListener('click', function (e) {
      if (e.target === ov || e.target.closest('[data-close]')) close();
      else if (e.target.closest('[data-next]')) turn(1);
      else if (e.target.closest('[data-prev]')) turn(-1);
    });
    L.innerHTML = BLANK; R.innerHTML = SP[0][1]; ctl();
    requestAnimationFrame(function () { ov.classList.add('on'); });
    if (single()) flip(COVER, BLANK, 1, function () { busy = false; });
    else flip(COVER, SP[0][0], 1, function () { L.innerHTML = SP[0][0]; busy = false; });
    ov.querySelector('[data-next]').focus({ preventScroll: true });
  }

  // ---------------------------------------------------------------- the Menu
  var mScript = 'h', order = [], mRomaji = true, mCounts = true;
  function stateOf(r) { if (!r || !(r.c + r.m + (r.s || 0))) return 'unseen'; if (r.m) return 'missed'; if (r.c) return 'seen'; return 'skip'; }
  function paintMenu() {
    var sc = mScript, f = function (it) { return charOf(it, sc); };
    var eatenAll = 0;
    var board = function (set) {
      var list = KANA[set], eaten = 0, missedL = [], newL = [];
      var tags = list.map(function (it) {
        var r = rec(null, sc, it), s = stateOf(r), c = f(it);
        if (r && r.c) eaten++;
        if (s === 'missed') missedL.push(it); if (s === 'unseen') newL.push(it);
        var cnt = s === 'unseen' ? '·' : s === 'skip' ? tr('kk_shown_n', { n: r.s }) : '✓' + r.c + '<s>✗' + r.m + '</s>';
        var hk = s === 'missed' ? '<span class="hk">逃</span>' : s === 'skip' ? '<span class="hk">見</span>' : '';
        var tip = s === 'unseen' ? tr('tip_unseen') : s === 'skip' ? tr('tip_skipped_only') : tr('tip_counts', { r: it.r, c: r.c, m: r.m });
        return '<button class="kk-kt ' + s + (order.some(function (o) { return o.ch === c; }) ? ' ordered' : '') + '" type="button" style="--pc:' + SET_COL[set] + '" data-set="' + set + '" data-h="' + it.h +
          '" title="' + esc(tip) + '">' + hk + '<b class="' + (c.length > 1 ? 'two' : '') + '">' + c + '</b><i>' + esc(it.r) + '</i><u>' + cnt + '</u></button>';
      }).join('');
      eatenAll += eaten;
      var cols = set === 'combos' ? 11 : set === 'dakuten' ? 10 : 16;
      return '<div class="kk-board"><h3><span class="kk-plate-ic" style="--pc:' + SET_COL[set] + '"></span>' + SET_RANK[set] + ' · ' + esc(String(tr('set_' + set)).replace(/\s*\(\d+\)\s*$/, '')) +
        ' <small>' + esc(tr('kk_board_sub', { n: list.length, col: tr('kk_col_' + set), e: eaten })) + '</small><span class="kk-ord">' +
        '<button type="button" data-o="' + set + ':missed"' + (missedL.length ? '' : ' disabled') + '>🚄 ' + esc(tr('kk_ord_missed', { n: missedL.length })) + '</button>' +
        '<button type="button" class="q" data-o="' + set + ':new"' + (newL.length ? '' : ' disabled') + '>' + esc(tr('kk_ord_new', { n: Math.min(10, newL.length) })) + '</button></span></h3>' +
        '<div class="kk-kg" style="grid-template-columns:repeat(' + cols + ',1fr)">' + tags + '</div></div>';
    };
    var html = board('basic') + '<div class="kk-two">' + board('dakuten') + board('combos') + '</div>';
    var bx = $('kk-boards'); bx.innerHTML = html;
    bx.className = 'kk-boards' + (mRomaji ? '' : ' hide-ro') + (mCounts ? '' : ' hide-counts');
    $('kk-mprog').innerHTML = tr('kk_eaten_of', { n: '<b>' + eatenAll + '</b>', t: 104 });
    document.querySelectorAll('#kk-mseg button').forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-sc') === sc); });
    $('kk-m-ro').classList.toggle('on', mRomaji); $('kk-m-cnt').classList.toggle('on', mCounts);
    paintTray();
  }
  function itemBy(h) { for (var i = 0; i < ITEMS.length; i++) if (ITEMS[i].it.h === h) return ITEMS[i]; return null; }
  function addOrder(h) {
    var x = itemBy(h); if (!x) return;
    var c = charOf(x.it, mScript), i = -1;
    order.forEach(function (o, j) { if (o.ch === c) i = j; });
    if (i >= 0) order.splice(i, 1); else order.push({ it: x.it, set: x.set, row: x.row, sc: mScript, ch: c });
  }
  function paintTray() {
    var tray = $('kk-tray'); tray.classList.toggle('has', order.length > 0);
    tray.innerHTML = order.length ? '🚄 <b>' + esc(tr('kk_your_order')) + '</b> ' + order.map(function (o) { return '<span class="kk-mk">' + o.ch + ' <small>' + esc(o.it.r) + '</small></span>'; }).join('') +
      '<button class="kk-chip" type="button" id="kk-tr-clear">' + esc(tr('kk_clear')) + '</button><button class="go" type="button" id="kk-tr-go">' + esc(tr('kk_send', { n: order.length })) + '</button>'
      : esc(tr('kk_tray_hint'));
  }
  function sendOrder() {
    if (!order.length) return;
    express = order.slice(); var n = order.length; order = [];
    setView('belt'); paused = false; paintPause(); resetBelt();
    toast(tr('kk_express_on', { n: n }), 'success');
  }

  // ---------------------------------------------------------------- views
  function setView(v, fromHash) {
    view = v === 'menu' ? 'menu' : 'belt';
    $('kk-belt-view').hidden = view !== 'belt'; $('kk-menu-view').hidden = view !== 'menu';
    document.querySelectorAll('.kk-key').forEach(function (a) { var on = a.getAttribute('data-view') === view; a.classList.toggle('on', on); if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
    $('page-kana-drill').setAttribute('data-view', view);
    if (view === 'menu') { if (S.script === 'k') mScript = 'k'; paintMenu(); }
    geoCache = null; last = performance.now();
    if (!fromHash) { try { history.replaceState(null, '', view === 'menu' ? '#menu' : location.pathname + location.search); } catch (e) {} }
    window.scrollTo(0, 0);
    if (view === 'belt') focusIn();
  }

  // ---------------------------------------------------------------- ambience
  function motes() {
    if (reduced) return;
    document.querySelectorAll('.kk-motes').forEach(function (m) {
      var h = '', ht = (m.parentElement.offsetHeight || 400);
      for (var i = 0; i < 20; i++) {
        var s = 2 + Math.random() * 5;
        h += '<i style="left:' + (Math.random() * 100).toFixed(1) + '%;--s:' + s.toFixed(1) + 'px;--d:' + (9 + Math.random() * 10).toFixed(1) + 's;--dl:-' + (Math.random() * 18).toFixed(1) +
          's;--dx:' + Math.round(Math.random() * 60 - 30) + 'px;--o:' + (0.35 + Math.random() * 0.5).toFixed(2) + ';--h:' + ht + 'px"></i>';
      }
      m.innerHTML = h;
    });
    if (canHover) document.addEventListener('mousemove', function (e) {
      var x = ((e.clientX / innerWidth) - 0.5) * -14, y = ((e.clientY / innerHeight) - 0.5) * -8;
      document.querySelectorAll('.kk-hero').forEach(function (h) { h.style.setProperty('--px', x.toFixed(1) + 'px'); h.style.setProperty('--py', y.toFixed(1) + 'px'); });
    });
  }

  // ---------------------------------------------------------------- language
  window.refreshDrillI18n = function () {
    paintSettings(); paintPause(); hud(); if (S.mode === 'r2k') buildTiles(); if (view === 'menu') paintMenu();
    if (book) { book.close(); }
  };

  // ---------------------------------------------------------------- wiring
  function init() {
    belt = $('kk-belt'); seatEl = $('kk-seat');
    track = document.createElement('div'); track.className = 'kk-track'; belt.insertBefore(track, belt.firstChild);
    belt.classList.toggle('smooth', SMOOTH);
    var inp = $('kk-in');
    inp.addEventListener('input', function () { tryEat(false); });
    inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); tryEat(true); } });
    $('kk-eat').addEventListener('click', function () { tryEat(true); focusIn(); });
    document.querySelectorAll('.kk-show').forEach(function (b) { b.addEventListener('click', showMe); });
    document.querySelectorAll('.kk-pause').forEach(function (b) { b.addEventListener('click', function () { paused = !paused; last = performance.now(); paintPause(); focusIn(); }); });
    $('kk-tiles').addEventListener('click', function (e) { pickTile(e.target.closest('.kk-tile')); });
    $('kk-tab').addEventListener('click', function (e) {
      var b = e.target.closest('.opt'); if (b) { setOpt(b.getAttribute('data-k'), b.getAttribute('data-v')); return; }
      var c = e.target.closest('.kk-course'); if (c) { applyCourse(c.getAttribute('data-course')); return; }
    });
    $('kk-tog').addEventListener('click', function () { openTab($('kk-tab-open').hidden); });
    $('kk-tilesel').addEventListener('change', function (e) { S.tiles = parseInt(e.target.value, 10) || 2; saveSettings(); buildTiles(); });
    $('kk-linesel').addEventListener('change', function (e) { S.line = e.target.value; seqIdx = 0; again = []; saveSettings(); paintSettings(); resetBelt(); });
    $('kk-rush').addEventListener('click', startRush);
    document.querySelectorAll('.kk-sheet-btn').forEach(function (b) { b.addEventListener('click', function () { sheet(b.getAttribute('data-sc')); }); });
    $('kk-how').addEventListener('click', openBook);
    $('kk-bill-btn').addEventListener('click', function () { openBill(); });
    $('kk-keys-btn').addEventListener('click', openKeys);
    $('kk-reset').addEventListener('click', function () {
      score = 0; streak = 0; missN = 0; eatenN = 0; servedN = 0; shownN = 0; sessionBest = 0; eatenBy = { basic: 0, dakuten: 0, combos: 0 };
      missed = {}; missSeq = 0; again = []; hud(); toast(tr('kk_reset_done'), 'info');
    });
    $('kk-missed').addEventListener('click', function (e) { var b = e.target.closest('.kk-mk'); if (b && typeof playKanaAudio === 'function') playKanaAudio(b.getAttribute('data-h')); });
    // the Menu
    document.querySelectorAll('.kk-key').forEach(function (a) { a.addEventListener('click', function (e) { e.preventDefault(); setView(a.getAttribute('data-view')); }); });
    $('kk-mseg').addEventListener('click', function (e) { var b = e.target.closest('button'); if (!b) return; mScript = b.getAttribute('data-sc'); paintMenu(); });
    $('kk-m-ro').addEventListener('click', function () { mRomaji = !mRomaji; paintMenu(); });
    $('kk-m-cnt').addEventListener('click', function () { mCounts = !mCounts; paintMenu(); });
    $('kk-boards').addEventListener('click', function (e) {
      var tg = e.target.closest('.kk-kt');
      if (tg) {
        var was = order.length; addOrder(tg.getAttribute('data-h'));
        if (order.length > was && typeof playKanaAudio === 'function') playKanaAudio(tg.getAttribute('data-h'));
        paintMenu(); var again2 = $('kk-boards').querySelector('.kk-kt[data-h="' + tg.getAttribute('data-h') + '"]'); if (again2) again2.classList.add('swing');
        return;
      }
      var ob = e.target.closest('[data-o]');
      if (ob) {
        var p = ob.getAttribute('data-o').split(':'), set = p[0], kind = p[1], n = 0;
        KANA[set].forEach(function (it) {
          var s = stateOf(rec(null, mScript, it));
          if ((kind === 'missed' && s === 'missed') || (kind === 'new' && s === 'unseen' && n < 10)) {
            var c = charOf(it, mScript);
            if (!order.some(function (o) { return o.ch === c; })) { addOrder(it.h); n++; }
          }
        });
        paintMenu();
      }
    });
    $('kk-tray').addEventListener('click', function (e) {
      if (e.target.closest('#kk-tr-clear')) { order = []; paintMenu(); }
      else if (e.target.closest('#kk-tr-go')) sendOrder();
    });
    $('kk-clear').addEventListener('click', function () {
      if (!window.confirm(tr('kk_clear_confirm'))) return;
      seen = {}; saveSeen(); S.unseen = false; S.weak = false; saveSettings(); paintSettings(); paintMenu(); toast(tr('kk_cleared'), 'info');
    });
    // keyboard
    window.addEventListener('keydown', function (e) {
      if (book) {
        if (e.key === 'ArrowRight') { e.preventDefault(); book.turn(1); }
        else if (e.key === 'ArrowLeft') { e.preventDefault(); book.turn(-1); }
        else if (e.key === 'Escape') { e.preventDefault(); book.close(); }
        return;
      }
      if (e.key === 'Escape' && ovEl) { closeCard(); return; }
      if (e.altKey && !e.metaKey) {
        var code = e.code || '', key = (e.key || '').toLowerCase();
        var isH = code === 'KeyH' || key === 'h', isK = code === 'KeyK' || key === 'k', isP = code === 'KeyP' || key === 'p', isC = code === 'KeyC' || key === 'c';
        if (isH || isK) { e.preventDefault(); if (e.repeat || peekKey) return; if (!S.sheets) { toast(tr('charts_disabled'), 'warning'); return; } peekKey = isH ? 'h' : 'k'; sheet(peekKey, true); return; }
        if (isP) { e.preventDefault(); if (!e.repeat) setView(view === 'menu' ? 'belt' : 'menu'); return; }
        if (isC) { e.preventDefault(); if (e.repeat) return; S.snap = !S.snap; saveSettings(); paintSettings(); toast(S.snap ? tr('snap_on') : tr('snap_off'), 'info'); return; }
        if (code === 'Space') { e.preventDefault(); paused = !paused; last = performance.now(); paintPause(); return; }
      }
      if (view === 'belt' && S.mode === 'r2k' && !ovEl && /^[1-9]$/.test(e.key) && !(document.activeElement && /INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName))) {
        pickTile($('kk-tiles').children[parseInt(e.key, 10) - 1]);
      }
    }, true);
    window.addEventListener('keyup', function (e) {
      if (!peekKey) return;
      var code = e.code || '', key = (e.key || '').toLowerCase();
      if (code === 'KeyH' || code === 'KeyK' || key === 'h' || key === 'k' || e.key === 'Alt' || e.key === 'AltGraph') { peekKey = null; closeCard(); }
    }, true);
    window.addEventListener('blur', function () { if (peekKey) { peekKey = null; closeCard(); } });
    document.addEventListener('visibilitychange', function () { hiddenPause = document.hidden; last = performance.now(); });
    window.addEventListener('hashchange', function () { setView(location.hash === '#menu' ? 'menu' : 'belt', true); });

    // first paint
    paintSettings(); paintPause(); syncMode(); hud(); motes();
    openTab(load('kaitenTabOpen', '0') === '1');
    if (location.hash === '#menu') setView('menu', true);
    last = performance.now(); resetBelt(); requestAnimationFrame(tick);
    // the translated labels arrive a moment after load on some pages
    setTimeout(function () { paintSettings(); paintPause(); hud(); }, 250);
    if (load('kaitenHelpSeen', '') !== '1' && view === 'belt') setTimeout(openBook, 700);
    else focusIn();
    window.KA_KAITEN = { S: S, target: function () { var p = target(); return p && { r: p.c.it.r, ch: p.c.ch, set: p.c.set }; }, setView: setView, resetBelt: resetBelt,
      plates: function () { return plates.filter(function (p) { return p.state !== 'eaten'; }).map(function (p) { return p.x; }); }, rush: function () { return rush; },
      endRush: function () { if (rush) { rush.left = 0; } },
      setSmooth: function (on) { SMOOTH = !!on; belt.classList.toggle('smooth', SMOOTH); geoCache = null; vel = speedNow(); plates.forEach(place); moveBelt(geo()); }, /*DEMO-HOOK*/ stats: function () { return { score: score, streak: streak, miss: missN, served: servedN }; } };
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
