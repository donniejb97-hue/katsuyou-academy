/* ============================================================
   account.js — optional sync for Katsuyō Academy.

   Nothing on the site needs an account. This adds one button next to the
   language picker ("ⓘ Sync") and, only for people who want it:
     • a free account (email link, password or passkey) that keeps progress
       in step across devices,
     • "Continue on another device" (a one-time QR code, no account),
     • "Save or open a file" (a backup that never leaves the device).

   Progress is whatever the site already keeps in localStorage. Nothing about
   the rest of the site changes: pages keep reading and writing localStorage
   as before, and this file copies it up and down.

   Loaded on every page by i18n.js, with account.i18n.js and account.css.
   The server side is /api/account on the katsuyou-backend Vercel project.
   ============================================================ */
(function () {
  'use strict';
  if (window.KA_Account) return;

  var API = window.KA_ACCOUNT_API || 'https://katsuyou-backend.vercel.app/api/account';
  var ROOT = window.KA_ACCOUNT_ROOT || '/';

  // ---- this device's own keys (never synced) ----
  var K_AUTH = 'katsuyo-acct-auth',      // { token, user }
      K_KNOWN = 'katsuyo-acct-known',    // who signed in here last: { email, method, username, avatar }
      K_SEEN = 'katsuyo-acct-seen',      // the tip has been seen
      K_QUIET = 'katsuyo-acct-quiet',    // reminders off
      K_LASTN = 'katsuyo-acct-lastn',    // kanji count when the button last glowed
      K_META = 'katsuyo-acct-meta',      // { uid, keys: { key: { h, t } } }
      K_SYNC = 'katsuyo-acct-synced',    // last good sync, ms
      K_FLOW = 'katsuyo-acct-flow',      // what to do after an email link: { key: true }
      K_BACKUP = 'katsuyo-acct-backup',  // this computer before it was combined: { at, uid, data, n }
      K_COMBINED = 'katsuyo-acct-combined', // accounts this computer's own progress was already added to: [uid]
      K_BUSY = 'katsuyo-acct-combining'; // set while combining, so other tabs hold off syncing
  var BACKUP_DAYS = 30;

  // What counts as progress: everything the site keeps under its own names.
  var TRACK = /^(katsu|ka_|kanji|talk)/i;
  var SKIP = /^katsuyo-acct|queue|^katsuPanelOpen$|^katsuyo-kanji-before$/i;
  var STAMPS = ['fox', 'cat', 'shiba', 'crane', 'tanuki', 'koi', 'daruma', 'onigiri', 'matcha', 'sakura', 'fuji', 'lantern'];

  // ---------------------------------------------------------------- helpers
  function get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function set(k, v) { try { if (v == null) localStorage.removeItem(k); else localStorage.setItem(k, v); } catch (e) {} }
  function getJ(k) { try { return JSON.parse(get(k) || 'null'); } catch (e) { return null; } }
  function setJ(k, v) { set(k, v == null ? null : JSON.stringify(v)); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function lang() {
    var l = (typeof LANG === 'string' && LANG) || get('katsuyoLang') || 'en';
    return (window.KA_ACCT_T && KA_ACCT_T[l]) ? l : 'en';
  }
  function T(key, vars) {
    var L = window.KA_ACCT_T || {}, s = (L[lang()] && L[lang()][key]) || (L.en && L.en[key]) || key;
    if (vars) Object.keys(vars).forEach(function (k) { s = s.split('{' + k + '}').join(vars[k]); });
    return s;
  }
  function stampName(s) { var L = window.KA_ACCT_T || {}; return ((L[lang()] || L.en || {}).st || {})[s] || s; }
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function toast(msg) {
    var t = el('div', 'ka-acc ka-toast', esc(msg)); t.setAttribute('role', 'status');
    document.body.appendChild(t); setTimeout(function () { t.remove(); }, 3200);
  }
  function kanjiCount() { var p = getJ('katsuyo-kanji-progress'); return p ? Object.keys(p).length : 0; }
  function validEmail(v) { return /^[^@\s<>"',;]+@[^@\s<>"',;]+\.[^@\s<>"',;]{2,}$/.test(String(v || '').trim()); }

  function api(action, bodyObj, method) {
    var auth = getJ(K_AUTH), m = method || (bodyObj ? 'POST' : 'GET');
    var headers = { 'Content-Type': 'application/json' };
    if (auth && auth.token) headers.Authorization = 'Bearer ' + auth.token;
    return fetch(API + (API.indexOf('?') < 0 ? '?' : '&') + 'a=' + action, {
      method: m, headers: headers, body: m === 'POST' ? JSON.stringify(bodyObj || {}) : undefined, keepalive: !!(bodyObj && bodyObj.__keepalive)
    }).then(function (r) {
      return r.json().catch(function () { return { ok: false, error: 'server' }; }).then(function (j) {
        if (!r.ok || !j.ok) {
          var err = new Error(j.error || 'server'); err.code = j.error || 'server'; err.data = j; err.status = r.status;
          if (r.status === 401 && j.error === 'signed_out' && auth) lostSession();
          throw err;
        }
        return j;
      });
    }, function () { var e = new Error('net'); e.code = 'net'; throw e; });
  }
  function errText(e) { var c = (e && e.code) || 'server'; var s = T('e_' + c); return s === 'e_' + c ? T('e_server') : s; }

  // ---------------------------------------------------------------- auth state
  function me() { var a = getJ(K_AUTH); return a && a.token ? a.user : null; }
  function saveAuth(token, user, method) {
    setJ(K_AUTH, { token: token, user: user });
    setJ(K_KNOWN, { email: user.email, method: method || (getJ(K_KNOWN) || {}).method || 'link', username: user.username, avatar: user.avatar });
  }
  function saveUser(user) {
    var a = getJ(K_AUTH); if (!a) return;
    a.user = user; setJ(K_AUTH, a);
    var k = getJ(K_KNOWN) || {}; k.email = user.email; k.username = user.username; k.avatar = user.avatar; setJ(K_KNOWN, k);
    paintBtn();
  }
  function lostSession() {
    set(K_AUTH, null); paintBtn();
    toast(T('e_signed_out'));
  }

  // ---------------------------------------------------------------- sync engine
  // Each tracked key gets { h: hash of its value, t: when it last changed }.
  // Changes are found by comparing hashes, so the rest of the site doesn't
  // have to tell us anything.
  function hashOf(s) { var h = 5381, i = s.length; while (i) h = (h * 33) ^ s.charCodeAt(--i); return (h >>> 0).toString(36) + ':' + s.length; }
  function trackedKeys() {
    var out = [];
    try { for (var i = 0; i < localStorage.length; i++) { var k = localStorage.key(i); if (TRACK.test(k) && !SKIP.test(k)) out.push(k); } } catch (e) {}
    return out;
  }
  function loadMeta(uid) {
    var m = getJ(K_META);
    if (!m || m.uid !== uid) m = { uid: uid, keys: {} };
    return m;
  }
  // Returns the changes since last time: { key: { v, t } }.
  function scan(uid) {
    var meta = loadMeta(uid), now = Date.now(), changes = {}, seen = {};
    trackedKeys().forEach(function (k) {
      var v = get(k); if (v == null) return;
      seen[k] = 1;
      var h = hashOf(v), m = meta.keys[k];
      if (!m) { meta.keys[k] = { h: h, t: 1, n: 1 }; changes[k] = { v: v, t: 1 }; }       // age unknown: any server copy wins
      else if (m.h !== h) { m.h = h; m.t = now; m.n = 1; changes[k] = { v: v, t: now }; }
      else if (m.n) { changes[k] = { v: v, t: m.t }; }                                    // not confirmed by the server yet
    });
    Object.keys(meta.keys).forEach(function (k) {
      if (!seen[k] && meta.keys[k].h !== '') { meta.keys[k] = { h: '', t: now, n: 1 }; changes[k] = { v: null, t: now }; }
    });
    setJ(K_META, meta);
    return changes;
  }
  // Writes the server's copy into this browser. Returns true if anything changed.
  function applyRemote(uid, data) {
    var meta = loadMeta(uid), changed = false;
    Object.keys(data || {}).forEach(function (k) {
      if (!TRACK.test(k) || SKIP.test(k)) return;
      var s = data[k], m = meta.keys[k];
      if (!s) return;
      var cur = get(k);
      if (m && m.t > s.t && !(k === 'katsuyo-kanji-progress')) return;   // ours is newer
      if (s.v == null) { if (cur != null) { set(k, null); changed = true; } meta.keys[k] = { h: '', t: s.t }; }
      else { if (cur !== s.v) { set(k, s.v); changed = true; } meta.keys[k] = { h: hashOf(s.v), t: s.t }; }
    });
    Object.keys(meta.keys).forEach(function (k) { if (meta.keys[k].n && data[k]) delete meta.keys[k].n; });
    setJ(K_META, meta);
    return changed;
  }
  var pushing = null, dirtyTimer = null;
  function push(opts) {
    opts = opts || {};
    var u = me(); if (!u) return Promise.resolve(false);
    if (pushing) return pushing;
    if (Date.now() - (+get(K_BUSY) || 0) < 90000) return Promise.resolve(false);   // another tab is combining
    var changes = scan(u.id);
    if (!Object.keys(changes).length && !opts.pull) return Promise.resolve(false);
    pushing = api('progress-put', { changes: changes, __keepalive: !!opts.keepalive }).then(function (r) {
      set(K_SYNC, String(Date.now()));
      var meta = loadMeta(u.id);
      Object.keys(changes).forEach(function (k) { if (meta.keys[k]) delete meta.keys[k].n; });
      setJ(K_META, meta);
      var changed = opts.pull ? applyRemote(u.id, r.data) : false;
      paintMenu();
      return changed;
    }).catch(function (e) { if (e.code === 'too_big') console.warn('sync: too big', e.data); return false; })
      .then(function (x) { pushing = null; return x; });
    return pushing;
  }
  // First thing on every page: bring in what other devices did. The page has
  // already read localStorage by now, so if anything changed, reload once.
  function pullOnLoad() {
    if (!me()) return;
    push({ pull: true }).then(function (changed) {
      var ss = null; try { ss = window.sessionStorage; } catch (e) {}
      var again = false; try { again = !!(ss && ss.getItem('ka-acct-reloaded')); } catch (e) {}
      if (changed && veil.hidden && !again) {
        try { ss.setItem('ka-acct-reloaded', '1'); } catch (e) {}
        toast(T('in_reload')); setTimeout(function () { location.reload(); }, 900);
      } else { try { ss.removeItem('ka-acct-reloaded'); } catch (e) {} }
    });
  }
  var hiddenAt = 0;
  function startSyncLoop() {
    setInterval(function () { if (!document.hidden) push(); }, 20000);
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) { hiddenAt = Date.now(); push({ keepalive: true }); }
      else if (hiddenAt && Date.now() - hiddenAt > 60000) pullOnLoad();
    });
    window.addEventListener('pagehide', function () { push({ keepalive: true }); });
  }

  // "Everything this browser keeps", for files and QR codes.
  function snapshot() { var d = {}; trackedKeys().forEach(function (k) { d[k] = get(k); }); return d; }
  function restore(data) {
    trackedKeys().forEach(function (k) { set(k, null); });
    Object.keys(data || {}).forEach(function (k) { if (TRACK.test(k) && !SKIP.test(k) && typeof data[k] === 'string') set(k, data[k]); });
    var u = me();
    if (u) {   // they count as fresh changes, so they win on the server
      var meta = { uid: u.id, keys: {} }, now = Date.now();
      trackedKeys().forEach(function (k) { meta.keys[k] = { h: 'x', t: now }; });
      setJ(K_META, meta);
    }
  }

  // ---------------------------------------------------------------- combining
  // The first time a computer that already has its own progress signs in to an
  // account that also has progress, the two are added together instead of the
  // account's copy replacing this one. Settings stay as the account has them.
  // Before anything changes, this computer's copy is kept as a backup.
  function jp_(s, d) { try { var v = JSON.parse(s); return v == null ? d : v; } catch (e) { return d; } }
  function num(x) { return +x || 0; }
  function byId(a, b, one) {          // per-entry maps: keep entries from both, `one` joins an entry both have
    var A = jp_(a, {}), B = jp_(b, {}), out = {};
    Object.keys(A).forEach(function (k) { out[k] = A[k]; });
    Object.keys(B).forEach(function (k) {
      var x = out[k], y = B[k];
      if (x == null) out[k] = y;
      else if (y != null && JSON.stringify(x) !== JSON.stringify(y)) out[k] = one(x, y);
    });
    return JSON.stringify(out);
  }
  function list(a, b, timeKey, max) { // logs: both lists, oldest first, each entry once
    var seen = {}, out = [];
    jp_(a, []).concat(jp_(b, [])).forEach(function (m) { var j = JSON.stringify(m); if (m && !seen[j]) { seen[j] = 1; out.push(m); } });
    out.sort(function (x, y) { return num(x[timeKey]) - num(y[timeKey]); });
    return JSON.stringify(out.slice(-max));
  }
  var MERGE = {
    // [seen, wrong, streak, lastTs]: answers add up; the streak (how the kanji
    // stands now) comes from whichever computer saw it last.
    'katsuyo-kanji-progress': function (a, b) {
      return byId(a, b, function (x, y) {
        if (!Array.isArray(x) || !Array.isArray(y)) return Array.isArray(x) ? x : y;
        var n = num(y[3]) > num(x[3]) ? y : x;
        return [num(x[0]) + num(y[0]), num(x[1]) + num(y[1]), num(n[2]), Math.max(num(x[3]), num(y[3])) + 1];
      });
    },
    // Words and quizzes: { s seen, m missed, k streak, d due, t last }
    'ka_memory_v1': function (a, b) {
      return byId(a, b, function (x, y) {
        var n = num(y.t) > num(x.t) ? y : x;
        return { s: num(x.s) + num(y.s), m: num(x.m) + num(y.m), k: num(n.k), d: num(n.d), t: Math.max(num(x.t), num(y.t)) + 1 };
      });
    },
    // Conjugator weak spots: misses add up, and it needs winning back from the lower count.
    'katsuyo-weakspots': function (a, b) {
      return byId(a, b, function (x, y) { var o = Object.assign({}, x, y); o.misses = num(x.misses) + num(y.misses); o.hits = Math.min(num(x.hits), num(y.hits)); return o; });
    },
    'ka_dojo_weak': function (a, b) {
      return byId(a, b, function (x, y) { var o = Object.assign({}, x, y); o.misses = num(x.misses) + num(y.misses); o.streak = Math.min(num(x.streak), num(y.streak)); o.due = Math.min(num(x.due), num(y.due)); o.q = x.q || y.q; return o; });
    },
    'katsuyo-mistakes': function (a, b) { return list(a, b, 'timestamp', 200); },
    'katsuMistakes': function (a, b) { return list(a, b, 't', 20); },
    'katsuyo-stats': function (a, b) {
      var A = jp_(a, {}), B = jp_(b, {}), o = Object.assign({}, A);
      ['correct', 'total', 'skipped'].forEach(function (k) { if (A[k] != null || B[k] != null) o[k] = num(A[k]) + num(B[k]); });
      return JSON.stringify(o);
    },
    'katsuyo-best-streak': function (a, b) { return String(Math.max(num(a), num(b))); },
    'kanjiDrillBest': function (a, b) { return String(Math.max(num(a), num(b))); },
    'katsuyoDeconjugator': function (a, b) {
      var A = jp_(a, {}), B = jp_(b, {}), o = Object.assign({}, A);
      o.right = num(A.right) + num(B.right); o.total = num(A.total) + num(B.total); o.best = Math.max(num(A.best), num(B.best));
      return JSON.stringify(o);
    },
    // Reading Room: the best score per story counts; its settings stay the account's.
    'katsuyoReading': function (a, b) {
      var A = jp_(a, {}), B = jp_(b, {}), o = Object.assign({}, A), best = Object.assign({}, A.best || {});
      Object.keys(B.best || {}).forEach(function (id) { best[id] = best[id] == null ? B.best[id] : Math.max(num(best[id]), num(B.best[id])); });
      o.best = best; return JSON.stringify(o);
    },
    // Stories written for you: keep both sets, newest first.
    'katsuyoReadingAI': function (a, b) {
      var seen = {}, out = [];
      jp_(a, []).concat(jp_(b, [])).forEach(function (x) { if (x && x.id && !seen[x.id]) { seen[x.id] = 1; out.push(x); } });
      out.sort(function (x, y) { return num(y.created) - num(x.created); });
      return JSON.stringify(out.slice(0, 30));
    }
  };
  function mergeOne(k, a, b) {
    if (a == null) return b;
    if (b == null || a === b) return a;
    try {
      if (MERGE[k]) return MERGE[k](a, b);
      if (/^katsuyo-kanji-story-/.test(k)) return a + '\n\n' + b;   // your own kanji stories: keep both texts
    } catch (e) {}
    return a;   // a setting: the account's stays
  }
  // What the summary table counts, for one set of values { key: string }.
  function tally(d) {
    var kp = jp_(d['katsuyo-kanji-progress'], {}), mem = jp_(d['ka_memory_v1'], {}), words = {};
    Object.keys(mem).forEach(function (id) { if (/^vocab:/.test(id)) words[id.split('|')[0]] = 1; });
    return {
      kanji: Object.keys(kp).length, words: Object.keys(words).length,
      conj: num(jp_(d['katsuyo-stats'], {}).total),
      stories: Object.keys(jp_(d['katsuyoReading'], {}).best || {}).length,
      weak: Object.keys(jp_(d['katsuyo-weakspots'], {})).length + Object.keys(jp_(d['ka_dojo_weak'], {})).length
    };
  }
  function combinedWith(uid) { return (getJ(K_COMBINED) || []).indexOf(uid) >= 0; }
  function needsCombine(uid) {
    var m = getJ(K_META);
    if (m && m.uid === uid) return false;          // this computer already syncs with this account
    if (combinedWith(uid)) return false;           // …or was added to it before (then undone)
    return hasProgress();
  }
  // Resolves to the summary, or null when the account had nothing to combine with.
  function combine(uid) {
    var local = snapshot();
    set(K_BUSY, String(Date.now()));
    return api('progress-get').then(function (r) {
      var srv = r.data || {}, acct = {};
      Object.keys(srv).forEach(function (k) { if (TRACK.test(k) && !SKIP.test(k) && srv[k] && srv[k].v != null) acct[k] = String(srv[k].v); });
      var ta = tally(acct);
      if (!ta.kanji && !ta.words && !ta.conj && !ta.stories && !ta.weak) return null;   // nothing there yet: this computer's progress simply goes up
      var tl = tally(local);
      setJ(K_BACKUP, { at: Date.now(), uid: uid, data: local, n: tl.kanji });
      var now = Date.now(), meta = { uid: uid, keys: {} }, merged = {};
      var keys = Object.keys(acct).concat(Object.keys(local).filter(function (k) { return acct[k] == null; }));
      keys.forEach(function (k) {
        var v = mergeOne(k, acct[k], local[k]);
        if (v == null) return;
        merged[k] = v; set(k, v);
        meta.keys[k] = (acct[k] === v && srv[k]) ? { h: hashOf(v), t: srv[k].t } : { h: hashOf(v), t: now, n: 1 };
      });
      setJ(K_META, meta);
      var both = 0, A = jp_(acct['katsuyo-kanji-progress'], {}), L = jp_(local['katsuyo-kanji-progress'], {});
      Object.keys(L).forEach(function (id) { if (A[id]) both++; });
      var c = getJ(K_COMBINED) || []; if (c.indexOf(uid) < 0) c.push(uid); setJ(K_COMBINED, c);
      return { here: tl, acct: ta, now: tally(merged), both: both, backup: !!get(K_BACKUP) };
    }).then(function (x) { set(K_BUSY, null); return x; }, function (e) { set(K_BUSY, null); throw e; });
  }
  function backup() {
    var b = getJ(K_BACKUP);
    if (b && (!b.at || Date.now() - b.at > BACKUP_DAYS * 86400000)) { set(K_BACKUP, null); b = null; }
    return b;
  }
  // Put this computer back the way the backup has it, and sign out here.
  function undoCombine() {
    var b = backup(); if (!b) return;
    var done = function () {
      set(K_AUTH, null); set(K_SYNC, null); set(K_META, null);
      restore(b.data); set(K_BACKUP, null);
      close(); paintBtn(); toast(T('un_done'));
      setTimeout(function () { location.reload(); }, 1100);
    };
    api('signout', {}).then(done, done);
  }

  // ---------------------------------------------------------------- avatars
  function avatarHTML(a, size, fallback) {
    var st = 'width:' + size + 'px;height:' + size + 'px;font-size:' + Math.round(size * 0.5) + 'px';
    if (a && /^stamp:/.test(a) && STAMPS.indexOf(a.slice(6)) >= 0) {
      return '<span class="ka-av" style="' + st + ';background-image:url(' + ROOT + 'avatars/' + a.slice(6) + '.webp)" role="img" aria-label="' + esc(stampName(a.slice(6))) + '"></span>';
    }
    if (a && /^(https:|data:image\/)/.test(a)) return '<span class="ka-av" style="' + st + ';background-image:url(&quot;' + esc(a) + '&quot;)" role="img" aria-label=""></span>';
    return '<span class="ka-av ka-av-letter" style="' + st + '">' + esc((fallback || '?').charAt(0).toUpperCase()) + '</span>';
  }
  function nameOf(u) { return (u && (u.username || (u.email || '').split('@')[0])) || ''; }

  // ---------------------------------------------------------------- the button
  var ls, btn, tip, menu, veil, box, dockEl, homeParent, homeNext, current = null;
  var PROGRESS_KEYS = ['ka_memory_v1', 'katsuyo-stats', 'katsuyo-vocab-deck', 'katsuyo-vocab-city', 'katsuyoReading', 'ka_dojo_weak', 'katsuyo-weakspots', 'katsuyo-mistakes'];
  function hasProgress() { return kanjiCount() >= 5 || PROGRESS_KEYS.some(function (k) { return get(k) != null; }); }

  function mount() {
    ls = document.querySelector('.lang-switch');
    if (!ls) { if ((mount.tries = (mount.tries || 0) + 1) < 60) setTimeout(mount, 100); return; }
    homeParent = ls.parentNode; homeNext = ls.nextSibling;
    btn = el('button', 'ka-acc ka-btn'); btn.type = 'button';
    dockEl = el('div', 'ka-acc ka-dock');
    tip = el('div', 'ka-acc ka-tip'); tip.hidden = true; tip.setAttribute('role', 'note');
    menu = el('div', 'ka-acc ka-menu'); menu.hidden = true; menu.setAttribute('role', 'menu');
    veil = el('div', 'ka-acc ka-veil'); veil.hidden = true;
    box = el('div', 'ka-box'); box.setAttribute('role', 'dialog'); box.setAttribute('aria-modal', 'true');
    veil.appendChild(box);
    document.body.appendChild(tip); document.body.appendChild(menu); document.body.appendChild(veil);
    dock();

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      set(K_SEEN, '1'); set(K_LASTN, String(kanjiCount()));
      if (me()) { menu.hidden = !menu.hidden; paintMenu(); placeMenu(); }
      else if (getJ(K_KNOWN)) showAccount({ isNew: false, welcome: true });
      else showChoice();
      paintBtn();
    });
    veil.addEventListener('click', function (e) { if (e.target === veil) close(); });
    // Typing in these windows belongs to them: no page shortcut should fire.
    ['keydown', 'keyup', 'keypress'].forEach(function (t) {
      veil.addEventListener(t, function (e) { if (e.key === 'Escape' && t === 'keydown') close(); e.stopPropagation(); });
    });
    document.addEventListener('click', function (e) { if (!menu.hidden && !menu.contains(e.target) && e.target !== btn) menu.hidden = true; });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') menu.hidden = true; });
    window.addEventListener('resize', function () { dock(); placeTip(); placeMenu(); });
    window.addEventListener('katsuyo:lang', function () { paintBtn(); paintMenu(); if (current && !veil.hidden) current(); });
    // Another tab signed in or out (an email link opens in a new tab).
    window.addEventListener('storage', function (e) {
      if (e.key === K_COMBINED && me()) {   // another tab just added this computer's progress to the account
        if (!veil.hidden) close();
        toast(T('in_reload')); setTimeout(function () { location.reload(); }, 900);
        return;
      }
      if (e.key === K_BUSY && e.newValue == null && me()) { if (!veil.hidden && box.getAttribute('data-screen') === 'mail') { close(); toast(T('in_eb')); } pullOnLoad(); return; }
      if (e.key !== K_AUTH) return;
      paintBtn();
      if (get(K_BUSY)) return;                // the other tab is combining; it tells us when it's done
      if (me() && !veil.hidden && box.getAttribute('data-screen') === 'mail') { close(); toast(T('in_eb')); pullOnLoad(); }
    });
    backup();   // drops a backup older than 30 days
    paintBtn();
    handleHash();
    pullOnLoad();
    startSyncLoop();
  }

  // Wide screens: language + account together in the top-right corner of the
  // bar, clear of the menu. Narrower: side by side where the language button is.
  function dock() {
    var nav = ls.closest('nav') || document.querySelector('nav');
    var wide = nav && window.innerWidth >= 1560;
    if (ls.parentNode !== dockEl) {
      homeParent.insertBefore(dockEl, ls);
      dockEl.appendChild(ls); dockEl.appendChild(btn);
    }
    if (wide) { if (dockEl.parentNode !== nav) nav.appendChild(dockEl); dockEl.classList.add('ka-corner'); }
    else {
      if (dockEl.parentNode !== homeParent) homeParent.insertBefore(dockEl, homeNext && homeNext.parentNode === homeParent ? homeNext : null);
      dockEl.classList.remove('ka-corner');
    }
  }

  function paintBtn() {
    if (!btn) return;
    var u = me(), known = getJ(K_KNOWN);
    if (u) {
      btn.className = 'ka-acc ka-btn ka-me';
      btn.innerHTML = avatarHTML(u.avatar, 26, nameOf(u)) + '<span class="ka-ok" aria-hidden="true">✓</span><span class="ka-car" aria-hidden="true">▾</span>';
      btn.title = T('btn_me_t'); btn.setAttribute('aria-label', T('btn_me_t'));
      btn.setAttribute('aria-haspopup', 'menu');
      tip.hidden = true;
      return;
    }
    btn.removeAttribute('aria-haspopup');
    if (known) {
      btn.className = 'ka-acc ka-btn ka-quiet';
      btn.innerHTML = avatarHTML(known.avatar, 22, known.username || known.email) + '<span class="ka-lbl">' + esc(T('btn_signin')) + '</span>';
      btn.title = T('btn_signin'); btn.setAttribute('aria-label', T('btn_signin'));
      tip.hidden = true;
      return;
    }
    var quiet = !!get(K_QUIET), seen = !!get(K_SEEN), grew = kanjiCount() >= (+get(K_LASTN) || 0) + 10;
    var glow = !quiet && hasProgress() && (!seen || grew);
    btn.className = 'ka-acc ka-btn' + (glow ? ' ka-glow' : ' ka-quiet');
    btn.innerHTML = '<span class="ka-i" aria-hidden="true">i</span><span class="ka-lbl">' + esc(T('btn_sync')) + '</span>';
    btn.title = T('btn_sync_t'); btn.setAttribute('aria-label', T('btn_sync_t'));
    tip.hidden = !(glow && !seen);
    if (!tip.hidden) {
      tip.innerHTML = '<button type="button" class="ka-x" aria-label="' + esc(T('close')) + '">✕</button><b>' + esc(T('tip_h')) + '</b>' + esc(T('tip_p'));
      tip.querySelector('.ka-x').onclick = function () { set(K_SEEN, '1'); set(K_LASTN, String(kanjiCount())); paintBtn(); };
      placeTip();
    }
  }
  function placeTip() {
    if (!tip || tip.hidden || !btn) return;
    var r = btn.getBoundingClientRect(), w = Math.min(280, innerWidth - 16);
    var L = Math.max(8, Math.min(innerWidth - w - 8, r.left + r.width / 2 - w / 2));
    tip.style.width = w + 'px'; tip.style.left = L + 'px'; tip.style.top = (r.bottom + 12) + 'px';
    tip.style.setProperty('--ax', (r.left + r.width / 2 - L - 7) + 'px');
  }
  function placeMenu() {
    if (!menu || menu.hidden || !btn) return;
    var r = btn.getBoundingClientRect(), w = Math.min(300, innerWidth - 16);
    menu.style.width = w + 'px';
    menu.style.left = Math.max(8, Math.min(innerWidth - w - 8, r.right - w)) + 'px';
    menu.style.top = (r.bottom + 10) + 'px';
  }
  function whenText() {
    var t = +get(K_SYNC); if (!t) return null;
    var m = Math.floor((Date.now() - t) / 60000);
    return m < 1 ? T('mn_now') : T('mn_min', { n: m });
  }
  function paintMenu() {
    var u = me(); if (!u || !menu) return;
    var w = whenText();
    menu.innerHTML = '<div class="ka-who">' + avatarHTML(u.avatar, 44, nameOf(u)) + '<div><b>' + esc(nameOf(u)) + '</b><span>' + esc(u.email) + '</span>' +
      '<em>' + esc(w ? T('mn_synced', { when: w, n: kanjiCount() }) : T('mn_off')) + '</em></div></div>' +
      '<button type="button" role="menuitem" data-m="prof">' + esc(T('mn_profile')) + ' <span>✎</span></button>' +
      '<button type="button" role="menuitem" data-m="qr">' + esc(T('mn_qr')) + ' <span>📱</span></button>' +
      '<button type="button" role="menuitem" data-m="file">' + esc(T('mn_file')) + ' <span>💾</span></button>' +
      '<button type="button" role="menuitem" data-m="acc">' + esc(T('mn_acc')) + ' <span>⚙</span></button>' +
      '<button type="button" role="menuitem" data-m="out" class="ka-out">' + esc(T('mn_out')) + '</button>';
    menu.querySelectorAll('[data-m]').forEach(function (b) {
      b.onclick = function () {
        menu.hidden = true;
        var m = b.getAttribute('data-m');
        if (m === 'prof') showProfile(false); else if (m === 'qr') showQR(true); else if (m === 'file') showFile(true);
        else if (m === 'acc') showAccPrivacy(); else showSignOut();
      };
    });
  }

  // ---------------------------------------------------------------- windows
  var lastFocus = null;
  function frame(screen, html, render) {
    if (veil.hidden) lastFocus = document.activeElement;
    current = render || current;
    box.setAttribute('data-screen', screen);
    box.innerHTML = '<button type="button" class="ka-close" aria-label="' + esc(T('close')) + '">✕</button>' + html;
    box.querySelector('.ka-close').onclick = close;
    box.querySelectorAll('[data-back]').forEach(function (b) { b.onclick = showChoice; });
    box.querySelectorAll('[data-close]').forEach(function (b) { b.onclick = close; });
    veil.hidden = false;
    document.documentElement.classList.add('ka-modal-open');
    var f = box.querySelector('[autofocus]') || box.querySelector('input:not([type=hidden]):not([type=file]),button:not(.ka-close)');
    if (f) setTimeout(function () { try { f.focus(); } catch (e) {} }, 30);
  }
  var afterClose = null;
  function close() {
    if (veil.hidden) return;
    veil.hidden = true; current = null; box.innerHTML = '';
    document.documentElement.classList.remove('ka-modal-open');
    if (lastFocus && lastFocus.focus) try { lastFocus.focus(); } catch (e) {}
    if (afterClose) { var f = afterClose; afterClose = null; f(); }
  }
  function backBtn(attr) { return '<button type="button" class="ka-b ka-backb" ' + attr + '>' + esc(T('back_b')) + '</button>'; }
  function busy(b, on) { if (!b) return; b.disabled = on; b.classList.toggle('ka-busy', on); }
  function say(sel, msg, bad) { var n = box.querySelector(sel); if (n) { n.textContent = msg || ''; n.classList.toggle('ka-bad', !!bad); n.classList.toggle('ka-good', !bad && !!msg); } }

  // ---- 1. the choice ----
  function showChoice() {
    var n = kanjiCount();
    frame('choice',
      '<div class="ka-eb">' + esc(T('ch_eb')) + '</div><h3>' + esc(T('ch_h')) + '</h3>' +
      '<p class="ka-sub">' + (n ? esc(T('ch_have', { n: n })) + ' ' : '') + esc(T('ch_p')) + '</p>' +
      '<div class="ka-opts">' +
        '<div class="ka-opt ka-pick"><div class="ka-big">👤</div><span class="ka-tag">' + esc(T('tag_auto')) + '</span><h5>' + esc(T('o_acc_h')) + '</h5><p>' + esc(T('o_acc_p')) + '</p><button type="button" class="ka-b ka-red" data-go="acc">' + esc(T('o_acc_b')) + '</button></div>' +
        '<div class="ka-opt"><div class="ka-big">📱</div><span class="ka-tag ka-n">' + esc(T('tag_noacc')) + '</span><h5>' + esc(T('o_qr_h')) + '</h5><p>' + esc(T('o_qr_p')) + '</p><button type="button" class="ka-b" data-go="qr">' + esc(T('o_qr_b')) + '</button></div>' +
        '<div class="ka-opt"><div class="ka-big">💾</div><span class="ka-tag ka-n">' + esc(T('tag_noacc')) + '</span><h5>' + esc(T('o_file_h')) + '</h5><p>' + esc(T('o_file_p')) + '</p><button type="button" class="ka-b" data-go="file">' + esc(T('o_file_b')) + '</button></div>' +
      '</div>' +
      '<div class="ka-row2"><div class="ka-quiet-box"><label class="ka-toggle"><input type="checkbox" id="ka-rem"' + (get(K_QUIET) ? '' : ' checked') + '><span class="ka-tr"><i></i></span>' +
        '<span><b>' + esc(T('rem_h')) + '</b><small>' + esc(T('rem_p')) + '</small></span></label></div>' +
        '<div class="ka-codebox">' + esc(T('ch_code')) + ' <button type="button" class="ka-link" data-go="code">' + esc(T('ch_code_b')) + '</button><br>' +
        esc(T('ch_have_acc')) + ' <button type="button" class="ka-link" data-go="in">' + esc(T('sw_new_b')) + '</button></div></div>' +
      '<p class="ka-foot">' + esc(T('ch_foot')) + ' · <button type="button" class="ka-link ka-mute" data-close>' + esc(T('not_now')) + '</button></p>', showChoice);
    box.querySelector('[data-go=acc]').onclick = function () { showAccount({ isNew: true }); };
    box.querySelector('[data-go=in]').onclick = function () { showAccount({ isNew: false }); };
    box.querySelector('[data-go=qr]').onclick = function () { showQR(false); };
    box.querySelector('[data-go=file]').onclick = function () { showFile(false); };
    box.querySelector('[data-go=code]').onclick = function () { showCode(); };
    box.querySelector('#ka-rem').onchange = function () {
      set(K_QUIET, this.checked ? null : '1'); paintBtn();
      toast(this.checked ? T('rem_on') : T('rem_off'));
    };
  }

  // ---- 2. create account / sign in ----
  var A = { mode: 'link', isNew: true, email: '' };
  var PW_RULES = ['len', 'up', 'low', 'num', 'sym', 'safe'];
  var COMMON = ['password', 'passwort', 'motdepasse', '123456', 'qwerty', 'azerty', 'iloveyou', 'letmein', 'welcome', 'admin', 'katsuyo', 'japanese', 'nihongo', 'monkey', 'dragon', 'football', 'baseball', 'sunshine', 'princess'];
  function pwCheck(pw, email) {
    var low = pw.toLowerCase(), alnum = low.replace(/[^a-z0-9]/g, ''), user = String(email || '').split('@')[0].toLowerCase(), n = Array.from(pw).length;
    return { len: n >= 10, up: /\p{Lu}/u.test(pw), low: /\p{Ll}/u.test(pw), num: /\p{N}/u.test(pw), sym: /[^\p{L}\p{N}\s]/u.test(pw),
             safe: !!pw && !COMMON.some(function (c) { return alnum.indexOf(c) >= 0; }) && !(user.length >= 3 && low.indexOf(user) >= 0) };
  }
  function pwRulesHTML() {
    return '<div class="ka-meter" id="ka-meter"><i></i><span></span></div><ul class="ka-rules" id="ka-rules">' +
      PW_RULES.map(function (r) { return '<li data-r="' + r + '">' + esc(T('r_' + r)) + '</li>'; }).join('') + '</ul>';
  }
  function paintRules(pw, email) {
    var r = pwCheck(pw, email), n = 0;
    box.querySelectorAll('#ka-rules li').forEach(function (li) { var ok = r[li.getAttribute('data-r')]; li.classList.toggle('ka-ok', ok); if (ok) n++; });
    var m = box.querySelector('#ka-meter'); if (!m) return r;
    var lv = !pw ? 0 : n <= 2 ? 1 : n <= 4 ? 2 : n === 5 ? 3 : 4;
    m.className = 'ka-meter ka-l' + lv;
    m.querySelector('span').textContent = ['', T('pw_weak'), T('pw_mid'), T('pw_good'), T('pw_strong')][lv];
    return r;
  }
  function allRules(r) { return PW_RULES.every(function (k) { return r[k]; }); }
  function eye(id) { return '<button type="button" class="ka-eye" data-eye="' + id + '" aria-label="' + esc(T('pw_show')) + '">👁</button>'; }
  function wireEyes() { box.querySelectorAll('[data-eye]').forEach(function (b) { b.onclick = function () { var i = box.querySelector('#' + b.getAttribute('data-eye')); i.type = i.type === 'password' ? 'text' : 'password'; }; }); }

  function showAccount(opts) {
    opts = opts || {};
    if ('isNew' in opts) A.isNew = opts.isNew;
    var known = getJ(K_KNOWN);
    if (opts.welcome && known) { A.isNew = false; A.mode = known.method || 'link'; A.email = known.email; }
    var welcome = !A.isNew && known && A.email && known.email === A.email;
    var pw = A.mode === 'pw', pk = A.mode === 'key', n = kanjiCount();
    var keyIn = pk && !A.isNew;
    var head = welcome
      ? '<div class="ka-eb">' + esc(T('acc_eb_in')) + '</div><h3 class="ka-wb">' + avatarHTML(known.avatar, 40, known.username || known.email) + '<span>' + esc(T('acc_wb', { name: known.username || known.email.split('@')[0] })) + '</span></h3>'
      : '<div class="ka-eb">' + esc(T(A.isNew ? 'acc_eb_new' : 'acc_eb_in')) + '</div><h3>' + esc(T(A.isNew ? 'acc_h_new' : 'acc_h_in')) + '</h3>';
    var form =
      '<div class="ka-seg" role="tablist">' + ['link', 'pw', 'key'].map(function (m) {
        return '<button type="button" role="tab" aria-selected="' + (A.mode === m) + '" data-mode="' + m + '" class="' + (A.mode === m ? 'ka-on' : '') + '">' + esc(T('m_' + m)) + '</button>';
      }).join('') + '</div>' +
      (keyIn ? '' : '<label class="ka-lb" for="ka-mail">' + esc(T('f_email')) + '</label><input id="ka-mail" class="ka-in" type="email" autocomplete="email" inputmode="email" placeholder="you@example.com">') +
      (pw ? '<label class="ka-lb" for="ka-pw">' + esc(T(A.isNew ? 'f_pw_new' : 'f_pw')) + '</label><div class="ka-pwrow"><input id="ka-pw" class="ka-in" type="password" autocomplete="' + (A.isNew ? 'new-password' : 'current-password') + '"' + (A.isNew ? ' placeholder="' + esc(T('f_ph_pw')) + '"' : '') + '>' + eye('ka-pw') + '</div>' +
            (A.isNew ? pwRulesHTML() + '<label class="ka-lb" for="ka-pw2">' + esc(T('f_pw2')) + '</label><div class="ka-pwrow"><input id="ka-pw2" class="ka-in" type="password" autocomplete="new-password">' + eye('ka-pw2') + '</div><div class="ka-hint" id="ka-h2"></div>'
                     : '<div class="ka-hint"><button type="button" class="ka-link" data-go="forgot">' + esc(T('pw_forgot')) + '</button></div>') : '') +
      (pk ? '<div class="ka-hint ka-keyp">' + esc(T('key_p')) + (A.isNew ? ' ' + esc(T('key_new_p')) : '') + '</div>' : '') +
      '<div class="ka-msg" id="ka-msg" role="alert"></div>' +
      '<div class="ka-actrow">' + backBtn('data-back') + '<button type="button" class="ka-b ka-red" data-go="go">' + esc(pw ? T(A.isNew ? 'b_create' : 'b_signin') : pk ? T(A.isNew ? 'b_key_new' : 'b_key_in') : T('b_link')) + '</button></div>' +
      '<p class="ka-switch">' + (welcome
        ? esc(T('sw_not', { email: known.email })) + ' <button type="button" class="ka-link" data-go="other">' + esc(T('sw_other')) + '</button> · <button type="button" class="ka-link" data-go="stop">' + esc(T('sw_stop')) + '</button>'
        : esc(T(A.isNew ? 'sw_new' : 'sw_in')) + ' <button type="button" class="ka-link" data-go="flip">' + esc(T(A.isNew ? 'sw_new_b' : 'sw_in_b')) + '</button>') + '</p>';
    var side = '<div class="ka-side"><b>' + esc(T('keeps_h')) + '</b><br>' + esc(T('keeps_1')) + '<br>' +
      (pw ? esc(T('keeps_pw')) + '<br>' : '') + (pk ? esc(T('keeps_key')) + '<br>' : '') +
      esc(T('keeps_2')) + '<br>' + esc(T('keeps_3')) + '<br>' + esc(T('keeps_4')) + '<br><br>' +
      '<b>' + esc(n ? T('keeps_come_n', { n: n }) : T('keeps_come')) + '</b> ' + esc(T('keeps_come_p')) + '<br><br>' +
      esc(T('keeps_switch')) + '<br><br>' + esc(T('keeps_del')) + '</div>';
    frame('acc', head + '<p class="ka-sub">' + esc(T('acc_p')) + '</p><div class="ka-acc2"><div>' + form + '</div>' + side + '</div>', function () { showAccount({}); });

    var mail = box.querySelector('#ka-mail'), pwi = box.querySelector('#ka-pw'), pw2 = box.querySelector('#ka-pw2');
    if (mail) { mail.value = A.email || ''; mail.oninput = function () { A.email = mail.value.trim(); mail.classList.remove('ka-err'); if (pwi && A.isNew) paintRules(pwi.value, A.email); }; }
    box.querySelectorAll('[data-mode]').forEach(function (b) { b.onclick = function () { A.mode = b.getAttribute('data-mode'); showAccount({}); }; });
    var flip = box.querySelector('[data-go=flip]'); if (flip) flip.onclick = function () { A.isNew = !A.isNew; showAccount({}); };
    var other = box.querySelector('[data-go=other]'); if (other) other.onclick = function () { set(K_KNOWN, null); A.email = ''; A.isNew = true; paintBtn(); showAccount({}); };
    var stop = box.querySelector('[data-go=stop]'); if (stop) stop.onclick = function () { set(K_KNOWN, null); close(); paintBtn(); toast(T('sw_stopped')); };
    var fg = box.querySelector('[data-go=forgot]'); if (fg) fg.onclick = showForgot;
    wireEyes();
    function paintMatch() {
      if (!pw2) return;
      if (!pw2.value) { say('#ka-h2', ''); return; }
      var same = pw2.value === pwi.value; say('#ka-h2', same ? T('pw_match') : T('pw_nomatch'), !same);
    }
    if (pwi && A.isNew) { pwi.oninput = function () { pwi.classList.remove('ka-err'); paintRules(pwi.value, A.email); paintMatch(); }; paintRules('', A.email); }
    if (pw2) pw2.oninput = function () { pw2.classList.remove('ka-err'); paintMatch(); };
    // Enter submits
    box.querySelectorAll('.ka-in').forEach(function (i) { i.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); go.click(); } }); });

    var go = box.querySelector('[data-go=go]');
    go.onclick = function () {
      say('#ka-msg', '');
      if (keyIn) return passkeySignIn(go);
      var email = (mail.value || '').trim();
      if (!validEmail(email)) { mail.classList.add('ka-err'); mail.focus(); say('#ka-msg', T('e_bad_email'), true); return; }
      A.email = email;
      if (pk || A.mode === 'link') {
        busy(go, true);
        if (pk) setJ(K_FLOW, { key: true });
        api('link-start', { email: email, lang: lang() }).then(function () { showMailSent(email); })
          .catch(function (e) { busy(go, false); say('#ka-msg', errText(e), true); });
        return;
      }
      if (A.isNew) {
        var r = paintRules(pwi.value, email);
        if (!allRules(r)) { pwi.classList.add('ka-err'); pwi.focus(); var rl = box.querySelector('#ka-rules'); rl.classList.add('ka-shake'); setTimeout(function () { rl.classList.remove('ka-shake'); }, 500); return; }
        if (pw2.value !== pwi.value) { pw2.classList.add('ka-err'); pw2.focus(); say('#ka-h2', T('pw_nomatch2'), true); return; }
      } else if (!pwi.value) { pwi.classList.add('ka-err'); pwi.focus(); return; }
      busy(go, true);
      api(A.isNew ? 'pw-signup' : 'pw-signin', { email: email, password: pwi.value, lang: lang() }).then(function (r) {
        signedIn(r, 'pw');
      }).catch(function (e) {
        busy(go, false);
        if (e.code === 'email_taken') { say('#ka-msg', T('e_email_taken'), true); var f = el('button', 'ka-link', esc(T('sw_new_b'))); f.type = 'button'; f.onclick = function () { A.isNew = false; showAccount({}); }; box.querySelector('#ka-msg').appendChild(document.createTextNode(' ')); box.querySelector('#ka-msg').appendChild(f); return; }
        if (e.code === 'weak_password' && e.data && e.data.rules) { paintRules(pwi.value, email); }
        say('#ka-msg', errText(e), true);
      });
    };
  }

  function showMailSent(email) {
    frame('mail', '<div class="ka-done"><div class="ka-big">📬</div><div class="ka-eb">' + esc(T('mail_eb')) + '</div><h3>' + esc(T('mail_h', { email: email })) + '</h3>' +
      '<p class="ka-sub">' + esc(T('mail_p')) + '</p><p class="ka-hint">' + esc(T('mail_spam')) + '</p>' +
      '<div class="ka-msg" id="ka-msg" role="status"></div>' +
      '<div class="ka-btns"><button type="button" class="ka-b" data-go="again">' + esc(T('mail_again')) + '</button><button type="button" class="ka-b ka-red" data-close>' + esc(T('close')) + '</button></div></div>',
      function () { showMailSent(email); });
    box.querySelector('[data-go=again]').onclick = function () {
      var b = this; busy(b, true);
      api('link-start', { email: email, lang: lang() }).then(function () { say('#ka-msg', T('mail_sent')); })
        .catch(function (e) { say('#ka-msg', errText(e), true); }).then(function () { busy(b, false); });
    };
  }

  function showForgot() {
    frame('forgot', '<div class="ka-eb">' + esc(T('fg_eb')) + '</div><h3>' + esc(T('fg_h')) + '</h3><p class="ka-sub">' + esc(T('fg_p')) + '</p>' +
      '<div class="ka-narrow"><label class="ka-lb" for="ka-mail">' + esc(T('f_email')) + '</label><input id="ka-mail" class="ka-in" type="email" autocomplete="email">' +
      '<div class="ka-msg" id="ka-msg" role="alert"></div><div class="ka-actrow">' + backBtn('data-go="backacc"') + '<button type="button" class="ka-b ka-red" data-go="go">' + esc(T('fg_b')) + '</button></div></div>', showForgot);
    var mail = box.querySelector('#ka-mail'); mail.value = A.email || '';
    box.querySelector('[data-go=backacc]').onclick = function () { showAccount({}); };
    box.querySelector('[data-go=go]').onclick = function () {
      var b = this, v = mail.value.trim();
      if (!validEmail(v)) { mail.classList.add('ka-err'); say('#ka-msg', T('e_bad_email'), true); return; }
      busy(b, true);
      api('pw-forgot', { email: v, lang: lang() }).then(function () { say('#ka-msg', T('fg_sent', { email: v })); })
        .catch(function (e) { say('#ka-msg', errText(e), true); }).then(function () { busy(b, false); });
    };
  }

  function showReset(token) {
    frame('reset', '<div class="ka-eb">' + esc(T('rs_eb')) + '</div><h3>' + esc(T('rs_h')) + '</h3><p class="ka-sub">' + esc(T('rs_p')) + '</p>' +
      '<div class="ka-narrow"><label class="ka-lb" for="ka-pw">' + esc(T('f_pw_new')) + '</label><div class="ka-pwrow"><input id="ka-pw" class="ka-in" type="password" autocomplete="new-password">' + eye('ka-pw') + '</div>' +
      pwRulesHTML() + '<label class="ka-lb" for="ka-pw2">' + esc(T('f_pw2')) + '</label><div class="ka-pwrow"><input id="ka-pw2" class="ka-in" type="password" autocomplete="new-password">' + eye('ka-pw2') + '</div>' +
      '<div class="ka-hint" id="ka-h2"></div><div class="ka-msg" id="ka-msg" role="alert"></div><button type="button" class="ka-b ka-red ka-wide" data-go="go">' + esc(T('rs_b')) + '</button></div>',
      function () { showReset(token); });
    var p1 = box.querySelector('#ka-pw'), p2 = box.querySelector('#ka-pw2');
    wireEyes(); paintRules('', '');
    p1.oninput = function () { p1.classList.remove('ka-err'); paintRules(p1.value, ''); };
    p2.oninput = function () { p2.classList.remove('ka-err'); var s = p2.value === p1.value; say('#ka-h2', p2.value ? (s ? T('pw_match') : T('pw_nomatch')) : '', !s); };
    box.querySelector('[data-go=go]').onclick = function () {
      var b = this;
      if (!allRules(paintRules(p1.value, ''))) { p1.classList.add('ka-err'); p1.focus(); return; }
      if (p1.value !== p2.value) { p2.classList.add('ka-err'); say('#ka-h2', T('pw_nomatch2'), true); return; }
      busy(b, true);
      api('pw-reset', { token: token, password: p1.value }).then(function (r) { signedIn(r, 'pw'); toast(T('rs_ok')); })
        .catch(function (e) { busy(b, false); say('#ka-msg', errText(e), true); });
    };
  }

  // ---- passkeys ----
  function webauthn() {
    if (window.SimpleWebAuthnBrowser) return Promise.resolve(window.SimpleWebAuthnBrowser);
    return new Promise(function (ok, no) {
      var s = document.createElement('script'); s.src = ROOT + 'account-webauthn.js';
      s.onload = function () { window.SimpleWebAuthnBrowser ? ok(window.SimpleWebAuthnBrowser) : no(new Error('load')); };
      s.onerror = function () { no(new Error('load')); };
      document.head.appendChild(s);
    });
  }
  function passkeysSupported() { return !!(window.PublicKeyCredential && navigator.credentials); }
  function passkeySignIn(b) {
    if (!passkeysSupported()) { say('#ka-msg', T('key_none'), true); return; }
    busy(b, true); say('#ka-msg', T('key_wait'));
    var cid;
    webauthn().then(function (W) {
      return api('pk-auth-options', {}).then(function (r) { cid = r.challengeId; return W.startAuthentication({ optionsJSON: r.options }); });
    }).then(function (resp) { return api('pk-auth-verify', { challengeId: cid, response: resp }); })
      .then(function (r) { signedIn(r, 'key'); })
      .catch(function (e) { busy(b, false); say('#ka-msg', e && e.code ? errText(e) : (e && e.name === 'NotAllowedError' ? '' : T('e_passkey_failed')), !!(e && e.code) || !(e && e.name === 'NotAllowedError')); });
  }
  function addPasskey(b, after) {
    if (!passkeysSupported()) { toast(T('key_none')); return; }
    busy(b, true);
    var cid;
    webauthn().then(function (W) {
      return api('pk-reg-options', {}).then(function (r) { cid = r.challengeId; return W.startRegistration({ optionsJSON: r.options }); });
    }).then(function (resp) { return api('pk-reg-verify', { challengeId: cid, response: resp }); })
      .then(function (r) {
        saveUser(r.user); var k = getJ(K_KNOWN) || {}; k.method = 'key'; setJ(K_KNOWN, k);
        toast(T('key_added')); if (after) after();
      })
      .catch(function (e) { busy(b, false); if (!(e && e.name === 'NotAllowedError')) toast(e && e.code ? errText(e) : T('e_passkey_failed')); });
  }
  function showMakeKey(created) {
    frame('mkkey', '<div class="ka-done"><div class="ka-big">🔑</div><div class="ka-eb">' + esc(T('key_eb')) + '</div><h3>' + esc(T('key_make_h')) + '</h3>' +
      '<p class="ka-sub">' + esc(T('key_make_p')) + '</p><div class="ka-btns"><button type="button" class="ka-b" data-go="skip">' + esc(T('key_skip')) + '</button>' +
      '<button type="button" class="ka-b ka-red" data-go="make">' + esc(T('key_make_b')) + '</button></div></div>', function () { showMakeKey(created); });
    function next() { if (created) showProfile(true); else showDone(); }
    box.querySelector('[data-go=skip]').onclick = next;
    box.querySelector('[data-go=make]').onclick = function () { addPasskey(this, next); };
  }

  // ---- after signing in ----
  var needReload = false, combined = null;
  function signedIn(r, method) {
    var uid = r.user && r.user.id;
    if (uid && needsCombine(uid)) {
      set(K_BUSY, String(Date.now()));   // before other tabs see the sign-in
      saveAuth(r.token, r.user, method); paintBtn();
      frame('combining', '<div class="ka-done"><div class="ka-big">🔄</div><h3>' + esc(T('cb_wait')) + '</h3></div>');
      combine(uid).then(function (sum) {
        combined = sum; if (sum) needReload = true;
        afterSignIn(r);
      }, function () {
        set(K_AUTH, null); set(K_META, null); paintBtn();   // nothing was written yet
        frame('combine-fail', '<div class="ka-done"><div class="ka-big">⚠️</div><p class="ka-sub">' + esc(T('cb_fail')) + '</p><button type="button" class="ka-b ka-red" data-close>' + esc(T('close')) + '</button></div>');
      });
      return;
    }
    saveAuth(r.token, r.user, method);
    paintBtn();
    afterSignIn(r);
  }
  function afterSignIn(r) {
    push({ pull: true }).then(function (changed) { if (changed) needReload = true; });
    var flow = getJ(K_FLOW); set(K_FLOW, null);
    if (flow && flow.key && passkeysSupported()) return showMakeKey(r.created);
    if (r.created) return showProfile(true);
    showDone();
  }
  function showDone() {
    if (combined) return showCombined();
    var u = me() || {};
    frame('done', '<div class="ka-done">' + (u.username || u.avatar ? '<div class="ka-center">' + avatarHTML(u.avatar, 72, nameOf(u)) + '</div>' : '<div class="ka-big">✅</div>') +
      '<div class="ka-eb">' + esc(u.username ? T('in_eb_n', { name: u.username }) : T('in_eb')) + '</div><h3>' + esc(T('in_h')) + '</h3>' +
      '<p class="ka-sub">' + esc(T('in_p')) + '</p><button type="button" class="ka-b ka-red" data-close>' + esc(T('in_b')) + '</button></div>', showDone);
    afterClose = function () { if (needReload) { needReload = false; toast(T('in_reload')); setTimeout(function () { location.reload(); }, 700); } };
  }

  function showCombined() {
    var s = combined, u = me() || {};
    if (!s) return showDone();
    var fmt = function (n) { try { return Number(n).toLocaleString(lang()); } catch (e) { return String(n); } };
    var row = function (jp, label, key, sub) {
      if (!s.here[key] && !s.acct[key] && key !== 'kanji') return '';
      return '<tr><td><span class="jp">' + jp + '</span>' + esc(label) + (sub ? '<small>' + esc(sub) + '</small>' : '') + '</td><td>' + fmt(s.here[key]) + '</td><td>' + fmt(s.acct[key]) + '</td><td class="now">' + fmt(s.now[key]) + '</td></tr>';
    };
    frame('combined', '<div class="ka-done">' + (u.username || u.avatar ? '<div class="ka-center">' + avatarHTML(u.avatar, 72, nameOf(u)) + '</div>' : '<div class="ka-big">✅</div>') +
      '<div class="ka-eb">' + esc(u.username ? T('in_eb_n', { name: u.username }) : T('in_eb')) + '</div><h3>' + esc(T('cb_h')) + '</h3>' +
      '<p class="ka-sub">' + esc(T('cb_p')) + '</p></div>' +
      '<div class="ka-cbwrap"><table class="ka-cb"><tr><th></th><th>' + esc(T('cb_here')) + '</th><th>' + esc(T('cb_acct')) + '</th><th>' + esc(T('cb_now')) + '</th></tr>' +
      row('漢', T('cb_kanji'), 'kanji', s.both ? T('cb_both', { n: fmt(s.both) }) : '') + row('語', T('cb_words'), 'words') + row('活', T('cb_conj'), 'conj') +
      row('読', T('cb_stories'), 'stories') + row('弱', T('cb_weak'), 'weak') +
      '<tr class="ka-cbset"><td><span class="jp">⚙</span>' + esc(T('cb_set')) + '<small>' + esc(T('cb_set_p')) + '</small></td><td colspan="2">' + esc(T('cb_set_v')) + '</td><td>—</td></tr></table></div>' +
      (s.backup ? '<div class="ka-cbbk"><span>💾</span><div><b>' + esc(T('cb_bk_h')) + '</b> ' + esc(T('cb_bk_p')) + '</div></div>' : '') +
      '<div class="ka-cbfoot">' + (s.backup ? '<button type="button" class="ka-link ka-mute" data-go="undo">' + esc(T('cb_undo')) + '</button>' : '<span></span>') +
      '<button type="button" class="ka-b ka-red" data-go="ok" autofocus>' + esc(T('cb_ok')) + '</button></div>', showCombined);
    box.querySelector('[data-go=ok]').onclick = function () { combined = null; close(); };
    var un = box.querySelector('[data-go=undo]'); if (un) un.onclick = function () { showUndo(showCombined); };
    afterClose = function () { combined = null; if (needReload) { needReload = false; toast(T('in_reload')); setTimeout(function () { location.reload(); }, 700); } };
  }
  function showUndo(back) {
    var b = backup(); if (!b) return back();
    var d = ''; try { d = new Date(b.at).toLocaleString(lang(), { dateStyle: 'medium', timeStyle: 'short' }); } catch (e) { d = new Date(b.at).toLocaleString(); }
    frame('undo', '<div class="ka-done"><div class="ka-big">↩</div><div class="ka-eb">' + esc(T('un_eb')) + '</div><h3>' + esc(T('un_h')) + '</h3>' +
      '<p class="ka-sub">' + esc(T('un_p', { date: d })) + '</p><div class="ka-btns"><button type="button" class="ka-b" data-go="no">' + esc(T('cancel')) + '</button>' +
      '<button type="button" class="ka-b ka-red" data-go="yes">' + esc(T('un_b')) + '</button></div></div>', function () { showUndo(back); });
    box.querySelector('[data-go=no]').onclick = back;
    box.querySelector('[data-go=yes]').onclick = function () { busy(this, true); afterClose = null; undoCombine(); };
  }

  // ---- profile ----
  function foldName(v) { return String(v || '').normalize('NFKC').toLowerCase().replace(/[ァ-ヶ]/g, function (c) { return String.fromCharCode(c.charCodeAt(0) - 0x60); }); }
  var NAME_OK = /^[\p{L}\p{N}](?:[\p{L}\p{N}\p{M}_.\-ー・]*[\p{L}\p{N}\p{M}ー])?$/u;
  function showProfile(first) {
    var u = me(); if (!u) return;
    var pick = u.avatar, photo = u.avatar && !/^stamp:/.test(u.avatar) ? u.avatar : null, newPhoto = null, checkT = null, nameOk = true;
    frame('profile', '<div class="ka-eb">' + esc(T(first ? 'pf_eb_first' : 'pf_eb')) + '</div><h3>' + esc(T(first ? 'pf_h_first' : 'pf_h')) + '</h3>' +
      '<p class="ka-sub">' + esc(T('pf_p')) + '</p><div class="ka-prof"><div class="ka-prev"><div id="ka-pv"></div><b id="ka-pn"></b><small>' + esc(u.email) + '</small></div><div>' +
      '<label class="ka-lb" for="ka-user">' + esc(T('pf_user')) + '</label><input id="ka-user" class="ka-in" maxlength="40" autocomplete="username" placeholder="' + esc(T('pf_user_ph')) + '">' +
      '<div class="ka-hint" id="ka-uh">' + esc(T('pf_hint')) + '</div>' +
      '<div class="ka-lb" style="margin-top:.7rem">' + esc(T('pf_pic')) + '</div><div class="ka-grid" id="ka-grid" role="radiogroup"></div>' +
      '<input type="file" accept="image/*" hidden id="ka-file"></div></div><div class="ka-msg" id="ka-msg" role="alert"></div>' +
      '<div class="ka-btns ka-end"><button type="button" class="ka-b" data-go="skip">' + esc(T(first ? 'pf_skip' : 'cancel')) + '</button><button type="button" class="ka-b ka-red" data-go="save">' + esc(T('save')) + '</button></div>',
      function () { showProfile(first); });
    var inp = box.querySelector('#ka-user'), grid = box.querySelector('#ka-grid'), file = box.querySelector('#ka-file');
    inp.value = u.username || '';
    function curAvatar() { return newPhoto || (pick === 'photo' ? photo : pick); }
    function prev() {
      box.querySelector('#ka-pv').innerHTML = avatarHTML(curAvatar(), 96, inp.value.trim() || u.email);
      box.querySelector('#ka-pn').textContent = inp.value.trim() || u.email.split('@')[0];
      grid.querySelectorAll('button').forEach(function (b) {
        var on = b.getAttribute('data-p') === (pick && /^stamp:/.test(pick) ? pick : (pick === 'photo' || (photo && pick === photo) || newPhoto ? 'photo' : ''));
        b.classList.toggle('ka-on', on); b.setAttribute('aria-checked', on);
      });
    }
    grid.innerHTML = STAMPS.map(function (s) {
      return '<button type="button" role="radio" data-p="stamp:' + s + '" title="' + esc(stampName(s)) + '" aria-label="' + esc(stampName(s)) + '"><img src="' + ROOT + 'avatars/' + s + '.webp" alt="" loading="lazy"></button>';
    }).join('') + '<button type="button" role="radio" data-p="photo" class="ka-up" title="' + esc(T('pf_upload_t')) + '" aria-label="' + esc(T('pf_upload_t')) + '">' +
      (photo ? '<img src="' + esc(photo) + '" alt="">' : '📷<small>' + esc(T('pf_upload')) + '</small>') + '</button>';
    if (photo) pick = 'photo';
    grid.onclick = function (e) {
      var b = e.target.closest('button'); if (!b) return;
      var p = b.getAttribute('data-p');
      if (p === 'photo') { if (!photo && !newPhoto) return file.click(); pick = 'photo'; }
      else { pick = p; newPhoto = null; }
      prev();
    };
    grid.querySelector('.ka-up').ondblclick = function () { file.click(); };
    file.onchange = function () {
      var f = file.files[0]; if (!f) return;
      var img = new Image(), rd = new FileReader();
      rd.onload = function () { img.src = rd.result; };
      img.onload = function () {   // square crop, 192 px, so uploads stay tiny
        var c = document.createElement('canvas'), n = 192, s = Math.min(img.width, img.height);
        c.width = c.height = n; c.getContext('2d').drawImage(img, (img.width - s) / 2, (img.height - s) / 2, s, s, 0, 0, n, n);
        newPhoto = c.toDataURL('image/jpeg', 0.85); pick = 'photo';
        grid.querySelector('.ka-up').innerHTML = '<img src="' + newPhoto + '" alt="">'; prev();
      };
      img.onerror = function () { say('#ka-msg', T('e_bad_image'), true); };
      rd.readAsDataURL(f);
    };
    function local(v) {
      var n = Array.from(v.normalize('NFC')).length;
      if (!v) return '';
      if (n < 2 || n > 20) return T('pf_len', { n: n });
      if (!NAME_OK.test(v)) return T('pf_chars');
      return null;
    }
    inp.oninput = function () {
      inp.classList.remove('ka-err'); prev();
      var v = inp.value.trim(), p = local(v);
      clearTimeout(checkT);
      if (p === '') { nameOk = true; say('#ka-uh', T('pf_hint')); box.querySelector('#ka-uh').classList.remove('ka-good', 'ka-bad'); return; }
      if (p) { nameOk = false; say('#ka-uh', p, true); return; }
      if (u.username && foldName(u.username) === foldName(v)) { nameOk = true; say('#ka-uh', T('pf_free', { name: v })); return; }
      nameOk = false; say('#ka-uh', T('pf_checking'));
      checkT = setTimeout(function () {
        api('check-username&u=' + encodeURIComponent(v)).then(function (r) {
          if (inp.value.trim() !== v) return;
          nameOk = !!r.ok; say('#ka-uh', r.ok ? T('pf_free', { name: v }) : (r.reason === 'taken' ? T('pf_taken', { name: v }) : T('pf_chars')), !r.ok);
        }).catch(function (e) {
          if (inp.value.trim() !== v) return;
          var reason = e && e.data && e.data.reason;
          if (reason) { nameOk = false; say('#ka-uh', reason === 'taken' ? T('pf_taken', { name: v }) : T('pf_chars'), true); }
          else { nameOk = true; say('#ka-uh', ''); }
        });
      }, 350);
    };
    box.querySelector('[data-go=skip]').onclick = function () { if (first) showDone(); else close(); };
    box.querySelector('[data-go=save]').onclick = function () {
      var b = this, v = inp.value.trim();
      if (!nameOk || local(v)) { inp.classList.add('ka-err'); inp.focus(); return; }
      busy(b, true); say('#ka-msg', '');
      var step = newPhoto ? api('avatar-upload', { image: newPhoto }) : Promise.resolve(null);
      step.then(function () {
        var av = pick === 'photo' ? 'photo:keep' : (pick && /^stamp:/.test(pick) ? pick : null);
        return api('profile', { username: v || null, avatar: av, lang: lang() });
      }).then(function (r) {
        saveUser(r.user);
        if (first) showDone(); else { close(); toast(T('pf_saved')); }
      }).catch(function (e) { busy(b, false); say('#ka-msg', e.code === 'name_taken' ? T('pf_taken', { name: v }) : errText(e), true); });
    };
    prev();
  }

  // ---- QR / code ----
  function loadQR() {
    if (window.qrcode) return Promise.resolve(window.qrcode);
    return new Promise(function (ok, no) {
      var s = document.createElement('script'); s.src = ROOT + 'account-qr.js';
      s.onload = function () { window.qrcode ? ok(window.qrcode) : no(); }; s.onerror = no;
      document.head.appendChild(s);
    });
  }
  var qrTimer = null;
  function showQR(fromMenu) {
    frame('qr', '<div class="ka-eb">' + esc(T('qr_eb')) + '</div><h3>' + esc(T('qr_h')) + '</h3><p class="ka-sub">' + esc(T('qr_p', { n: kanjiCount() })) + '</p>' +
      '<div class="ka-qr"><div class="ka-qrimg" id="ka-qrimg">' + esc(T('qr_making')) + '</div><div><ol><li>' + esc(T('qr_1')) + '</li><li>' + esc(T('qr_2')) + '</li><li>' + esc(T('qr_3')) + '</li></ol>' +
      '<div class="ka-hint">' + esc(T('qr_nocam')) + '</div><div class="ka-code" id="ka-code">····-····</div><div class="ka-hint" id="ka-timer"></div>' +
      '<div class="ka-msg" id="ka-msg" role="alert"></div><div style="margin-top:1rem">' + (fromMenu ? '<button type="button" class="ka-b" data-close>' + esc(T('done')) + '</button>' : '<button type="button" class="ka-b" data-back>' + esc(T('back')) + '</button>') + '</div></div></div>',
      function () { showQR(fromMenu); });
    clearInterval(qrTimer);
    Promise.all([loadQR(), api('move-create', { data: { app: 'katsuyo-academy', v: 1, data: snapshot() } })]).then(function (x) {
      var Q = x[0], r = x[1];
      if (box.getAttribute('data-screen') !== 'qr') return;
      var qr = Q(0, 'M'); qr.addData(r.url); qr.make();
      box.querySelector('#ka-qrimg').innerHTML = qr.createSvgTag({ cellSize: 6, margin: 2, scalable: true });
      box.querySelector('#ka-code').textContent = r.code;
      var left = r.expiresIn || 600;
      function tick() {
        var t = box.querySelector('#ka-timer'); if (!t || veil.hidden) { clearInterval(qrTimer); return; }
        left--;
        t.textContent = left > 0 ? T('qr_time', { t: Math.floor(left / 60) + ':' + ('0' + left % 60).slice(-2) }) : T('qr_gone');
        if (left <= 0) { clearInterval(qrTimer); box.querySelector('#ka-qrimg').classList.add('ka-dead'); }
      }
      tick(); qrTimer = setInterval(tick, 1000);
    }).catch(function (e) { var i = box.querySelector('#ka-qrimg'); if (i) i.textContent = '—'; say('#ka-msg', errText(e), true); });
  }
  function showCode(prefill) {
    frame('code', '<div class="ka-eb">' + esc(T('cd_eb')) + '</div><h3>' + esc(T('cd_h')) + '</h3><p class="ka-sub">' + esc(T('cd_p')) + '</p>' +
      '<div class="ka-narrow"><input id="ka-cd" class="ka-in ka-codein" maxlength="9" autocomplete="off" autocapitalize="characters" spellcheck="false" placeholder="ABCD-EFGH">' +
      '<div class="ka-hint">' + esc(T('cd_warn')) + '</div><div class="ka-msg" id="ka-msg" role="alert"></div>' +
      '<div class="ka-actrow">' + backBtn('data-back') + '<button type="button" class="ka-b ka-red" data-go="go">' + esc(T('cd_b')) + '</button></div></div>', function () { showCode(prefill); });
    var i = box.querySelector('#ka-cd'); i.value = prefill || '';
    i.oninput = function () { var v = i.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 8); i.value = v.length > 4 ? v.slice(0, 4) + '-' + v.slice(4) : v; };
    i.addEventListener('keydown', function (e) { if (e.key === 'Enter') box.querySelector('[data-go=go]').click(); });
    box.querySelector('[data-go=go]').onclick = function () {
      var b = this;
      if (i.value.replace('-', '').length !== 8) { i.classList.add('ka-err'); return; }
      takeMove(i.value, b);
    };
  }
  function takeMove(code, b) {
    busy(b, true);
    api('move-take', { code: code }).then(function (r) {
      var d = r.data;
      if (!d || d.app !== 'katsuyo-academy' || !d.data) throw Object.assign(new Error('x'), { code: 'code_expired' });
      restore(d.data); toast(T('mv_ok'));
      if (me()) push(); setTimeout(function () { location.reload(); }, 900);
    }).catch(function (e) { busy(b, false); say('#ka-msg', errText(e), true); });
  }
  function showMoveConfirm(code) {
    frame('move', '<div class="ka-done"><div class="ka-big">📱</div><div class="ka-eb">' + esc(T('cd_eb')) + '</div><h3>' + esc(T('cd_h')) + '</h3>' +
      '<p class="ka-sub">' + esc(T('mv_confirm')) + '</p><div class="ka-msg" id="ka-msg" role="alert"></div>' +
      '<div class="ka-btns"><button type="button" class="ka-b" data-close>' + esc(T('cancel')) + '</button><button type="button" class="ka-b ka-red" data-go="go">' + esc(T('cd_b')) + '</button></div></div>',
      function () { showMoveConfirm(code); });
    box.querySelector('[data-go=go]').onclick = function () { takeMove(code, this); };
  }

  // ---- file ----
  function showFile(fromMenu) {
    frame('file', '<div class="ka-eb">' + esc(T('fl_eb')) + '</div><h3>' + esc(T('fl_h')) + '</h3><p class="ka-sub">' + esc(T('fl_p')) + '</p>' +
      '<div class="ka-opts ka-two"><div class="ka-opt"><div class="ka-big">⬇️</div><h5>' + esc(T('fl_save_h')) + '</h5><p>' + esc(T('fl_save_p')) + '</p><button type="button" class="ka-b ka-red" data-go="save">' + esc(T('fl_save_b')) + '</button></div>' +
      '<div class="ka-opt"><div class="ka-big">⬆️</div><h5>' + esc(T('fl_open_h')) + '</h5><p>' + esc(T('fl_open_p')) + '</p><button type="button" class="ka-b" data-go="open">' + esc(T('fl_open_b')) + '</button><input type="file" accept=".json,application/json" hidden></div></div>' +
      '<p class="ka-foot">' + (fromMenu ? '<button type="button" class="ka-link ka-mute" data-close>' + esc(T('close')) + '</button>' : '<button type="button" class="ka-link ka-mute" data-back>' + esc(T('back')) + '</button>') + '</p>',
      function () { showFile(fromMenu); });
    box.querySelector('[data-go=save]').onclick = function () {
      var data = snapshot();
      var blob = new Blob([JSON.stringify({ app: 'katsuyo-academy', v: 1, saved: new Date().toISOString(), data: data }, null, 1)], { type: 'application/json' });
      var a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'katsuyo-progress-' + new Date().toISOString().slice(0, 10) + '.json';
      document.body.appendChild(a); a.click(); a.remove(); setTimeout(function () { URL.revokeObjectURL(a.href); }, 4000);
      toast(T('fl_saved', { n: Object.keys(data).length }));
    };
    var inp = box.querySelector('input[type=file]');
    box.querySelector('[data-go=open]').onclick = function () { inp.click(); };
    inp.onchange = function () {
      var f = inp.files[0]; if (!f) return;
      f.text().then(function (txt) {
        var j = JSON.parse(txt); if (!j || j.app !== 'katsuyo-academy' || !j.data) throw 0;
        restore(j.data); if (me()) push();
        toast(T('fl_restored')); setTimeout(function () { location.reload(); }, 1000);
      }).catch(function () { toast(T('fl_bad')); });
    };
  }

  // ---- sign out ----
  function showSignOut() {
    var u = me(); if (!u) return;
    frame('out', '<div class="ka-eb">' + esc(T('so_eb')) + '</div><h3>' + esc(T('so_h', { email: u.email })) + '</h3><p class="ka-sub">' + esc(T('so_p')) + '</p>' +
      '<label class="ka-radio"><input type="radio" name="ka-keep" value="keep" checked><span><b>' + esc(T('so_keep_h')) + '</b>' + esc(T('so_keep_p')) + '</span></label>' +
      '<label class="ka-radio"><input type="radio" name="ka-keep" value="wipe"><span><b>' + esc(T('so_wipe_h')) + '</b>' + esc(T('so_wipe_p')) + '</span></label>' +
      '<div class="ka-btns"><button type="button" class="ka-b ka-red" data-go="out">' + esc(T('so_b')) + '</button><button type="button" class="ka-b" data-close>' + esc(T('cancel')) + '</button></div>', showSignOut);
    box.querySelector('[data-go=out]').onclick = function () {
      var b = this, wipe = box.querySelector('input[value=wipe]').checked;
      busy(b, true);
      push().then(function () { return api('signout', {}).catch(function () {}); }).then(function () {
        set(K_AUTH, null); set(K_SYNC, null);
        if (wipe) { trackedKeys().forEach(function (k) { set(k, null); }); set(K_META, null); }
        close(); paintBtn();
        toast(T(wipe ? 'so_done_wipe' : 'so_done'));
        if (wipe) setTimeout(function () { location.reload(); }, 1200);
      });
    };
  }

  // ---- account & privacy ----
  function showAccPrivacy() {
    var u = me(); if (!u) return;
    var keys = (u.passkeys || []).map(function (p) {
      return '<li><span>🔑 ' + esc(p.device || '') + ' <small>' + esc(new Date(p.created).toLocaleDateString(lang())) + '</small></span><button type="button" class="ka-link" data-rm="' + esc(p.id) + '">' + esc(T('ap_key_remove')) + '</button></li>';
    }).join('');
    frame('acc-priv', '<div class="ka-eb">' + esc(T('ap_eb')) + '</div><h3>' + esc(T('ap_h')) + '</h3>' +
      '<div class="ka-ap"><section><h6>' + esc(T('ap_email')) + '</h6><p><b>' + esc(u.email) + '</b> · ' + esc(T(u.emailVerified ? 'ap_verified' : 'ap_unverified')) + '</p>' +
        '<h6>' + esc(T('ap_signin_h')) + '</h6><ul class="ka-list"><li><span>✉️ ' + esc(T('ap_link')) + '</span></li>' +
        '<li><span>🔒 ' + esc(T(u.hasPassword ? 'ap_pw_on' : 'ap_pw_off')) + '</span><button type="button" class="ka-link" data-go="pw">' + esc(T(u.hasPassword ? 'ap_pw_change' : 'ap_pw_set')) + '</button></li></ul>' +
        '<h6>' + esc(T('ap_keys')) + '</h6><ul class="ka-list">' + (keys || '<li><span class="ka-mute">' + esc(T('ap_key_none')) + '</span></li>') + '</ul>' +
        (passkeysSupported() ? '<button type="button" class="ka-b" data-go="addkey">' + esc(T('ap_key_add')) + '</button>' : '') + backupHTML() + '</section>' +
      '<section><h6>' + esc(T('ap_data_h')) + '</h6><p class="ka-hint">' + esc(T('ap_dl_p')) + '</p><button type="button" class="ka-b" data-go="dl">⬇ ' + esc(T('ap_dl')) + '</button>' +
        '<p style="margin-top:1rem"><button type="button" class="ka-b" data-go="outall">' + esc(T('ap_outall')) + '</button></p>' +
        '<div class="ka-danger"><p class="ka-hint">' + esc(T('ap_del_p')) + '</p><button type="button" class="ka-b ka-dangerb" data-go="del">' + esc(T('ap_del')) + '</button></div></section></div>' +
      '<div class="ka-msg" id="ka-msg" role="status"></div>', showAccPrivacy);
    api('me').then(function (r) { if (JSON.stringify(r.user) !== JSON.stringify(me())) { saveUser(r.user); if (box.getAttribute('data-screen') === 'acc-priv') showAccPrivacy(); } }).catch(function () {});
    box.querySelector('[data-go=pw]').onclick = function () {
      var b = this; busy(b, true);
      api('pw-forgot', { email: u.email, lang: lang() }).then(function () { say('#ka-msg', T('ap_pw_mail')); }).catch(function (e) { say('#ka-msg', errText(e), true); }).then(function () { busy(b, false); });
    };
    var ak = box.querySelector('[data-go=addkey]'); if (ak) ak.onclick = function () { addPasskey(ak, showAccPrivacy); };
    box.querySelectorAll('[data-rm]').forEach(function (b) {
      b.onclick = function () { api('pk-remove', { id: b.getAttribute('data-rm') }).then(function (r) { saveUser(r.user); showAccPrivacy(); }).catch(function (e) { say('#ka-msg', errText(e), true); }); };
    });
    box.querySelector('[data-go=dl]').onclick = function () {
      api('export').then(function (r) {
        var blob = new Blob([JSON.stringify(r.export, null, 2)], { type: 'application/json' });
        var a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'katsuyo-my-data-' + new Date().toISOString().slice(0, 10) + '.json';
        document.body.appendChild(a); a.click(); a.remove();
      }).catch(function (e) { say('#ka-msg', errText(e), true); });
    };
    box.querySelector('[data-go=outall]').onclick = function () {
      api('signout-all', {}).then(function () { set(K_AUTH, null); close(); paintBtn(); toast(T('ap_outall_done')); }).catch(function (e) { say('#ka-msg', errText(e), true); });
    };
    box.querySelector('[data-go=del]').onclick = showDelete;
    var bk = backup();
    if (bk) {
      box.querySelector('[data-bk=restore]').onclick = function () { showUndo(showAccPrivacy); };
      box.querySelector('[data-bk=save]').onclick = function () {
        var blob = new Blob([JSON.stringify({ app: 'katsuyo-academy', v: 1, saved: new Date(bk.at).toISOString(), data: bk.data }, null, 1)], { type: 'application/json' });
        var a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'katsuyo-backup-' + new Date(bk.at).toISOString().slice(0, 10) + '.json';
        document.body.appendChild(a); a.click(); a.remove(); setTimeout(function () { URL.revokeObjectURL(a.href); }, 4000);
      };
      box.querySelector('[data-bk=del]').onclick = function () { set(K_BACKUP, null); showAccPrivacy(); };
    }
  }
  function backupHTML() {
    var b = backup(); if (!b) return '';
    var d = ''; try { d = new Date(b.at).toLocaleString(lang(), { dateStyle: 'medium', timeStyle: 'short' }); } catch (e) { d = new Date(b.at).toLocaleString(); }
    return '<h6 style="margin-top:1.2rem">' + esc(T('bk_h')) + '</h6><ul class="ka-list ka-bku"><li><span>💾 ' + esc(T('bk_item')) + '<small>' + esc(T('bk_meta', { date: d, n: b.n || 0 })) + '</small></span>' +
      '<span class="ka-bka"><button type="button" class="ka-link" data-bk="restore">' + esc(T('bk_restore')) + '</button><button type="button" class="ka-link ka-mute" data-bk="save">' + esc(T('bk_save')) + '</button>' +
      '<button type="button" class="ka-link ka-mute" data-bk="del">' + esc(T('bk_del')) + '</button></span></li></ul><p class="ka-hint">' + esc(T('bk_p')) + '</p>';
  }
  function showDelete() {
    frame('delete', '<div class="ka-eb">' + esc(T('ap_del')) + '</div><h3>' + esc(T('del_h')) + '</h3><p class="ka-sub">' + esc(T('del_p')) + '</p>' +
      '<div class="ka-narrow"><input id="ka-del" class="ka-in" autocomplete="off" spellcheck="false" placeholder="DELETE"><div class="ka-msg" id="ka-msg" role="alert"></div>' +
      '<div class="ka-btns"><button type="button" class="ka-b" data-go="back">' + esc(T('cancel')) + '</button><button type="button" class="ka-b ka-dangerb" data-go="go" disabled>' + esc(T('del_b')) + '</button></div></div>', showDelete);
    var i = box.querySelector('#ka-del'), go = box.querySelector('[data-go=go]');
    i.oninput = function () { go.disabled = i.value.trim() !== 'DELETE'; };
    box.querySelector('[data-go=back]').onclick = showAccPrivacy;
    go.onclick = function () {
      busy(go, true);
      api('delete', { confirm: 'DELETE' }).then(function () {
        set(K_AUTH, null); set(K_KNOWN, null); set(K_META, null); set(K_SYNC, null);
        close(); paintBtn(); toast(T('del_done'));
      }).catch(function (e) { busy(go, false); say('#ka-msg', errText(e), true); });
    };
  }

  // ---------------------------------------------------------------- links
  // Email links land on the home page as #ka-link=…, #ka-reset=…; QR codes as #ka-move=…
  function handleHash() {
    var m = /#ka-(link|reset|move)=([A-Za-z0-9_\-]+)/.exec(location.hash || '');
    if (!m) return;
    try { history.replaceState(null, '', location.pathname + location.search); } catch (e) {}
    if (m[1] === 'reset') return showReset(m[2]);
    if (m[1] === 'move') return showMoveConfirm(m[2]);
    frame('verify', '<div class="ka-done"><div class="ka-big">⏳</div><h3>' + esc(T('in_reload')) + '</h3><div class="ka-msg" id="ka-msg" role="alert"></div></div>');
    api('link-verify', { token: m[2] }).then(function (r) { signedIn(r, 'link'); })
      .catch(function (e) { say('#ka-msg', errText(e), true); });
  }

  window.KA_Account = { me: me, open: function () { btn && btn.click(); }, sync: push };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount); else mount();
})();
