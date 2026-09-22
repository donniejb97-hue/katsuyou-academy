// ============================================================================
// SENSEI — floating Japanese assistant for Katsuyō Academy
// Ask "how do I say X in Japanese?" or any grammar/vocab question.
// Uses the same Vercel backend as the Talk practice tool (multi-turn).
//
// Features:
//  - Chat history persists across page navigation (localStorage)
//  - Aware of which page the student is currently on
//  - Can pop in on its own when it notices repeated wrong answers on the
//    page (drill/dojo feedback going "bad"/"incorrect") — toggleable
//  - UI strings run through the site's i18n system
// ============================================================================
(function () {
  'use strict';

  var BACKEND_URL = 'https://katsuyou-backend.vercel.app/api/claude';
  var MAX_CONTEXT_MESSAGES = 8;     // turns of context sent with each question
  var MAX_STORED_MESSAGES = 24;     // turns kept in localStorage for display
  var MAX_TOKENS = 500;             // keep answers (and your API bill) small

  var STORAGE_HISTORY = 'katsuHistory';
  var STORAGE_PREV = 'katsuPrevChat';
  var STORAGE_OPEN = 'katsuPanelOpen';
  var STORAGE_PROACTIVE = 'katsuProactive';
  var STORAGE_MISTAKES = 'katsuMistakes';

  var MAX_MISTAKES = 20;        // kept in storage
  var MISTAKE_CONTEXT = 5;      // sent to Katsu with a question

  // ---------- how long anything Katsu remembers stays around ----------
  // The panel used to open chock-full of whatever you last did, days later.
  // Now both stores age out, but nothing is ever destroyed by an accident:
  // a chat that has gone cold is SET ASIDE, not deleted, and one tap brings
  // it back. So the clearing can be brisk without ever being the thing that
  // loses someone's work to a dropped connection.
  var CHAT_WARM_MS = 2 * 60 * 60 * 1000;    // a reload inside this keeps the chat
  var PREV_CHAT_TTL_MS = 24 * 60 * 60 * 1000;  // how long "show previous" still works
  var MISTAKE_TTL_MS = 12 * 60 * 60 * 1000;    // each mistake, from when it happened

  var STRUGGLE_WINDOW_MS = 600000;   // a miss older than this no longer counts
  var STRUGGLE_THRESHOLD = 6;        // this many misses IN A ROW triggers a pop-in;
                                     // any right answer resets the count
  var PROACTIVE_COOLDOWN_MS = 180000; // don't pop in again this soon
  var MAX_PROACTIVE_PER_LOAD = 2;

  var PAGE_NAV_KEY = {
    home: 'nav_home', kana: 'nav_kana', learn: 'nav_learn', forms: 'nav_forms',
    verblist: 'nav_verbs', conjugator: 'nav_conjugator', 'kana-drill': 'nav_kana_drill',
    'kanji-drill': 'nav_kanji_drill', talk: 'nav_talk', reading: 'nav_reading', datedojo: 'nav_dates',
    vocabulary: 'nav_vocab', kanji: 'nav_kanji', about: 'nav_contact',
    adjectives: 'nav_adjectives', reference: 'nav_reference', conjugation: 'nav_conjugation'
  };

  // Pages Katsu stays out of. The kana drill is rapid recall — a question is
  // over in a couple of seconds, so a tutor logging every miss and offering to
  // explain it turns a drill into a lecture. Nothing from here is recorded and
  // nothing here triggers a pop-in.
  var KATSU_HANDS_OFF = { 'kana-drill': true };

  function handsOffPage() {
    return !!KATSU_HANDS_OFF[document.body.getAttribute('data-page')];
  }

  // The stored page name is translated, so a drill logged in German reads
  // "Kana-Übung". Match the label in every language to clear old entries.
  function handsOffLabels() {
    var labels = {};
    try {
      Object.keys(KATSU_HANDS_OFF).forEach(function (page) {
        var key = PAGE_NAV_KEY[page];
        if (!key) return;
        Object.keys(window.I18N || {}).forEach(function (lang) {
          var v = window.I18N[lang] && window.I18N[lang][key];
          if (v) labels[v] = true;
        });
      });
    } catch (e) {}
    return labels;
  }

  function tr(key, fallback) {
    // i18n.js's t() falls back to English automatically, then to the raw key —
    // guard for the (unlikely) case i18n.js hasn't loaded yet.
    if (typeof t === 'function') return t(key);
    return fallback || key;
  }

  // ---------- tiny markdown renderer ----------
  // Katsu writes **bold**, *italic* and `code`, and may write kanji readings
  // as 注文[ちゅうもん]. Rendering it beats showing raw asterisks. Everything
  // is HTML-escaped first, so nothing in a reply can inject markup.
  var READING_RE = /([々〆一-龯豈-﫿]+)\[([^\]]+)\]/g;

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function mdLite(s) {
    var out = escapeHtml(s);
    out = out.replace(READING_RE, '<ruby>$1<rt>$2</rt></ruby>');
    out = out.replace(/`([^`\n]+)`/g, '<code>$1</code>');
    out = out.replace(/\*\*([^*\n]+)\*\*/g, '<strong>$1</strong>');
    out = out.replace(/(^|[^*\w])\*([^*\n]+)\*(?![*\w])/g, '$1<em>$2</em>');
    out = out.replace(/(^|[^_\w])_([^_\n]+)_(?![_\w])/g, '$1<em>$2</em>');
    return out;
  }

  function currentPageName() {
    var page = document.body.getAttribute('data-page');
    var key = PAGE_NAV_KEY[page];
    return key ? tr(key) : null;
  }

  // ---------- shared mistake log ----------
  // Every practice page on the site writes wrong answers here, so Katsu can
  // answer "what did I get wrong?" from any page. Exposed as
  // window.KatsuMistakes so pages can report mistakes precisely.
  function clip(s, n) {
    s = (s == null ? '' : String(s)).replace(/\s+/g, ' ').trim();
    return s.length > n ? s.slice(0, n - 1) + '…' : s;
  }

  function loadMistakes() {
    try {
      var raw = JSON.parse(localStorage.getItem(STORAGE_MISTAKES) || '[]');
      if (!Array.isArray(raw)) return [];
      var drop = handsOffLabels();
      var cutoff = Date.now() - MISTAKE_TTL_MS;
      var kept = raw.filter(function (m) {
        if (!m || drop[m.page]) return false;          // recorded before a page went hands-off
        // Each mistake ages out on its own clock rather than at midnight, so
        // late-night practice isn't wiped ten minutes after you did it. An
        // entry with no timestamp predates this and is treated as expired.
        return typeof m.t === 'number' && m.t > cutoff;
      });
      if (kept.length !== raw.length) {
        try { localStorage.setItem(STORAGE_MISTAKES, JSON.stringify(kept)); } catch (e) {}
      }
      return kept;
    } catch (e) { return []; }
  }

  function saveMistakes(list) {
    try { localStorage.setItem(STORAGE_MISTAKES, JSON.stringify(list.slice(-MAX_MISTAKES))); } catch (e) {}
  }

  function logMistake(entry) {
    if (handsOffPage()) return;   // whether the page asked directly or not
    entry = entry || {};
    var e = {
      t: Date.now(),
      page: clip(entry.page || currentPageName() || '', 40),
      q: clip(entry.q, 140),
      a: clip(entry.a, 80),
      c: clip(entry.c, 80),
      note: clip(entry.note, 260),
      seen: false
    };
    if (!e.q && !e.a && !e.note) return;   // nothing useful to remember

    var list = loadMistakes();
    var last = list[list.length - 1];
    // The same wrong answer can fire several DOM mutations — don't log it twice.
    if (last && last.q === e.q && last.a === e.a && last.note === e.note && (e.t - last.t) < 8000) return;

    list.push(e);
    saveMistakes(list);
    if (typeof updateMistakeBadge === 'function') updateMistakeBadge();
  }

  function unreviewedMistakes() {
    return loadMistakes().filter(function (m) { return !m.seen; });
  }

  function markMistakesSeen() {
    var list = loadMistakes().map(function (m) { m.seen = true; return m; });
    saveMistakes(list);
    if (typeof updateMistakeBadge === 'function') updateMistakeBadge();
  }

  function mistakeContext() {
    var list = loadMistakes().slice(-MISTAKE_CONTEXT);
    if (!list.length) return '';
    var lines = list.map(function (m) {
      var bits = [];
      if (m.page) bits.push('on the ' + m.page + ' page');
      if (m.q) bits.push('question: ' + m.q);
      if (m.a) bits.push('they answered: ' + m.a);
      if (m.c) bits.push('correct answer: ' + m.c);
      if (m.note) bits.push('note: ' + m.note);
      return '- ' + bits.join(' | ');
    });
    return '\n\nRecent mistakes this student has made on the site, oldest first:\n' + lines.join('\n') +
      '\nIf they ask what they got wrong, what a mistake was about, or why an answer was wrong, explain from this list — ' +
      'name the specific item, why it was wrong, and how to remember it. Do not recite the whole list unprompted, ' +
      'and do not mention mistakes at all if they asked about something unrelated.';
  }

  window.KatsuMistakes = {
    log: logMistake,
    list: loadMistakes,
    unreviewed: unreviewedMistakes,
    markSeen: markMistakesSeen,
    clear: function () { saveMistakes([]); if (typeof updateMistakeBadge === 'function') updateMistakeBadge(); }
  };

  var updateMistakeBadge = null;   // assigned once the widget is built

  var SYSTEM_PROMPT_BASE =
    'You are Katsu (カツ先生), the friendly Japanese tutor mascot of Katsuyō Academy. ' +
    'Your name comes from 活 (katsu, "lively"), the first kanji of 活用 (katsuyō). ' +
    'a site for beginner Japanese learners (around JLPT N5-N4 level).\n\n' +
    'Rules:\n' +
    '- When asked how to say a word or phrase in Japanese, give: the word in ' +
    'hiragana (or katakana for loanwords), the romaji in parentheses, the kanji ' +
    'if common, and one short example sentence with a translation.\n' +
    '- Keep answers short and beginner-friendly: a few sentences, not essays.\n' +
    '- Prefer hiragana over kanji-heavy writing; always include romaji.\n' +
    '- You may answer grammar questions, cultural questions, and questions about ' +
    'how to use this website (it has Kana charts, a verb Learn section, a Forms ' +
    'reference, a Verb list, the Conjugator practice tool, Kana Drill, the Kanji Kitchen (kanji drill), a Talk ' +
    'conversation-practice tool, graded Reading stories (N5–N1) with comprehension questions, Date Dojo, Vocabulary flashcards, and 2,300 KLC Kanji flashcards).\n' +
    '- Politely decline questions unrelated to Japanese language, Japan, or this ' +
    'website, and steer back to Japanese learning.\n' +
    '- Be warm and encouraging, like a patient teacher.\n' +
    '- If the student was proactively greeted because they seemed to be struggling ' +
    'with something on the page, be extra gentle and offer concrete help, but don’t ' +
    'assume you know exactly what they got wrong unless they tell you.';

  function buildSystemPrompt() {
    var page = currentPageName();
    var lang = (typeof explainLanguage === 'function') ? explainLanguage() : 'English';
    var prompt = SYSTEM_PROMPT_BASE;

    // Japanese is what they're learning; this is the language you explain in.
    prompt += '\n\nWrite everything except the Japanese itself in ' + lang +
      ' — explanations, translations, grammar notes, encouragement. Japanese examples stay in Japanese, ' +
      'with rōmaji as usual. If the student writes to you in another language, answer in ' + lang + ' anyway, ' +
      'unless they explicitly ask you to switch.';

    if (page) prompt += '\n\nThe student is currently on the "' + page + '" page of the site.';
    // A page can describe what's on screen right now (Reading passes the open story).
    if (typeof window.KatsuPageContext === 'function') {
      try { var ctx = window.KatsuPageContext(); if (ctx) prompt += '\n\n' + ctx; } catch (e) {}
    }
    prompt += mistakeContext();
    return prompt;
  }

  // ---------- settings & persisted state ----------
  var settings = { proactive: true };
  try {
    var savedProactive = localStorage.getItem(STORAGE_PROACTIVE);
    if (savedProactive !== null) settings.proactive = savedProactive === '1';
  } catch (e) { /* storage unavailable */ }

  // The stored chat is { t: when it was last touched, m: [messages] }. Older
  // builds wrote a bare array; those are read as "no timestamp", which counts
  // as cold, so the first load after an update starts clean and the old chat
  // lands in the set-aside slot.
  function readChat(key) {
    try {
      var raw = JSON.parse(localStorage.getItem(key) || 'null');
      if (Array.isArray(raw)) return { t: 0, m: raw };
      if (raw && Array.isArray(raw.m)) return { t: Number(raw.t) || 0, m: raw.m };
    } catch (e) { /* unavailable or corrupt */ }
    return { t: 0, m: [] };
  }

  function setAside(messages) {
    if (!messages || !messages.length) return;
    try { localStorage.setItem(STORAGE_PREV, JSON.stringify({ t: Date.now(), m: messages.slice(-MAX_STORED_MESSAGES) })); } catch (e) {}
  }

  function previousChat() {
    var prev = readChat(STORAGE_PREV);
    if (!prev.m.length || Date.now() - prev.t > PREV_CHAT_TTL_MS) return null;
    return prev.m;
  }

  function dropPrevious() {
    try { localStorage.removeItem(STORAGE_PREV); } catch (e) {}
  }

  var history = [];   // { role: 'student'|'sensei', text: '...' }
  (function () {
    var saved = readChat(STORAGE_HISTORY);
    if (!saved.m.length) return;
    if (Date.now() - saved.t <= CHAT_WARM_MS) {
      history = saved.m.slice(-MAX_STORED_MESSAGES);   // a reload, or still the same sitting
    } else {
      setAside(saved.m);                               // cold: put it away, don't bin it
      try { localStorage.removeItem(STORAGE_HISTORY); } catch (e) {}
    }
  })();

  function persistHistory() {
    try {
      localStorage.setItem(STORAGE_HISTORY,
        JSON.stringify({ t: Date.now(), m: history.slice(-MAX_STORED_MESSAGES) }));
    } catch (e) {}
  }
  function persistOpen(isOpen) {
    try { localStorage.setItem(STORAGE_OPEN, isOpen ? '1' : '0'); } catch (e) {}
  }
  function persistProactive() {
    try { localStorage.setItem(STORAGE_PROACTIVE, settings.proactive ? '1' : '0'); } catch (e) {}
  }

  // ---------- styles ----------
  var css = [
    '#sensei-fab { position: fixed; bottom: 5.5rem; right: 2rem; width: 56px; height: 56px;',
    '  border-radius: 50%; background: var(--ink, #1a1a2e); color: var(--paper, #faf9f7);',
    '  border: 2px solid var(--accent, #c45c4a); font-size: 1.5rem; cursor: pointer; z-index: 1200;',
    '  box-shadow: 0 4px 14px rgba(0,0,0,0.25); transition: transform 0.15s; font-family: "Noto Serif JP", serif; }',
    '#sensei-fab:hover { transform: scale(1.08); }',
    '#sensei-fab.nudge { animation: sensei-pulse 1.4s ease-in-out 2; }',
    '#sensei-badge { position: absolute; top: -3px; right: -3px; min-width: 19px; height: 19px; padding: 0 4px;',
    '  border-radius: 999px; background: var(--accent, #c45c4a); color: #fff; border: 2px solid var(--paper, #faf9f7);',
    '  font-family: "Outfit", sans-serif; font-size: 0.68rem; font-weight: 700; line-height: 1;',
    '  display: none; align-items: center; justify-content: center; }',
    '#sensei-badge.show { display: flex; }',
    '#sensei-review { display: none; padding: 0.5rem 0.6rem; border-top: 1px solid rgba(0,0,0,0.07); background: var(--paper-warm, #f5f3ef); }',
    '#sensei-review.show { display: block; }',
    '#sensei-review button { width: 100%; background: #fff; border: 1.5px solid var(--accent, #c45c4a); color: var(--accent, #c45c4a);',
    '  border-radius: 8px; padding: 0.45rem 0.6rem; font-family: inherit; font-size: 0.82rem; font-weight: 600; cursor: pointer; }',
    '#sensei-review button:hover { background: var(--accent, #c45c4a); color: #fff; }',
    '@keyframes sensei-pulse { 0%, 100% { box-shadow: 0 4px 14px rgba(0,0,0,0.25); } 50% { box-shadow: 0 4px 22px rgba(196,92,74,0.65); } }',
    '#sensei-panel { position: fixed; bottom: 10rem; right: 2rem; width: 340px; max-width: calc(100vw - 2rem);',
    '  height: 460px; max-height: calc(100vh - 13rem); background: var(--paper, #faf9f7);',
    '  border: 1px solid rgba(0,0,0,0.12); border-radius: 8px; box-shadow: 0 12px 40px rgba(0,0,0,0.25);',
    '  display: none; flex-direction: column; overflow: hidden; z-index: 1200;',
    '  font-family: "Outfit", sans-serif; }',
    '#sensei-panel.open { display: flex; }',
    '#sensei-head { background: var(--ink, #1a1a2e); color: var(--paper, #faf9f7); padding: 0.75rem 1rem;',
    '  display: flex; align-items: center; justify-content: space-between; gap: 0.4rem; }',
    '#sensei-head .jp-name { font-family: "Noto Serif JP", serif; color: var(--accent-soft, #d4786a); margin-right: 0.4rem; }',
    '#sensei-head-btns { display: flex; align-items: center; gap: 0.15rem; }',
    '#sensei-gear, #sensei-close { background: none; border: none; color: inherit; cursor: pointer; opacity: 0.85; }',
    '#sensei-gear:hover, #sensei-close:hover { opacity: 1; }',
    '#sensei-gear { font-size: 1rem; }',
    '#sensei-close { font-size: 1.2rem; }',
    '#sensei-settings { display: none; padding: 0.85rem 1rem; border-bottom: 1px solid rgba(0,0,0,0.08);',
    '  background: var(--paper-warm, #f5f3ef); font-size: 0.82rem; }',
    '#sensei-settings.open { display: block; }',
    '.sensei-setting-row { display: flex; align-items: center; justify-content: space-between; gap: 0.6rem; margin-bottom: 0.6rem; }',
    '.sensei-setting-row:last-child { margin-bottom: 0; }',
    '.sensei-switch { position: relative; display: inline-block; width: 34px; height: 19px; flex: 0 0 auto; }',
    '.sensei-switch input { opacity: 0; width: 0; height: 0; }',
    '.sensei-switch-track { position: absolute; inset: 0; background: rgba(0,0,0,0.2); border-radius: 999px; cursor: pointer; transition: background 0.15s; }',
    '.sensei-switch-track::before { content: ""; position: absolute; width: 15px; height: 15px; left: 2px; top: 2px; background: white; border-radius: 50%; transition: transform 0.15s; }',
    '.sensei-switch input:checked + .sensei-switch-track { background: var(--sage, #7a9e7e); }',
    '.sensei-switch input:checked + .sensei-switch-track::before { transform: translateX(15px); }',
    '#sensei-clear { background: none; border: 1px solid rgba(0,0,0,0.15); color: var(--text, #3d3d3d); border-radius: 6px;',
    '  padding: 0.3rem 0.6rem; font-family: inherit; font-size: 0.78rem; cursor: pointer; }',
    '#sensei-clear:hover { border-color: var(--accent-soft, #d4786a); }',
    '#sensei-msgs { flex: 1; overflow-y: auto; overscroll-behavior: contain; padding: 0.9rem; display: flex; flex-direction: column; gap: 0.6rem; }',
    /* the way back to a conversation that was set aside — quiet, and only
       there while there is something to come back to */
    '#sensei-restore { display: none; padding: 0.5rem 0.9rem 0; }',
    '#sensei-restore.show { display: block; }',
    '#sensei-restore button { width: 100%; background: none; border: 1px dashed rgba(0,0,0,0.18); color: var(--text-light, #6b6b6b);',
    '  border-radius: 8px; padding: 0.45rem 0.6rem; font-family: inherit; font-size: 0.82rem; cursor: pointer; }',
    '#sensei-restore button:hover { border-color: var(--accent-soft, #d4786a); color: var(--text, #3d3d3d); }',
    '.sensei-msg { max-width: 85%; padding: 0.55rem 0.8rem; border-radius: 8px; font-size: 0.92rem; line-height: 1.45; white-space: pre-wrap; word-wrap: break-word; }',
    '.sensei-msg.student { align-self: flex-end; background: var(--ink, #1a1a2e); color: var(--paper, #faf9f7); border-bottom-right-radius: 2px; }',
    '.sensei-msg.sensei { align-self: flex-start; background: var(--paper-warm, #f5f3ef); border: 1px solid rgba(0,0,0,0.08); border-bottom-left-radius: 2px; }',
    '.sensei-msg.thinking { opacity: 0.6; font-style: italic; }',
    '.sensei-msg.error { border-color: var(--accent-soft, #d4786a); }',
    '.sensei-msg strong { font-weight: 700; color: var(--ink, #1a1a2e); }',
    '.sensei-msg em { font-style: italic; opacity: 0.85; }',
    '.sensei-msg code { font-family: ui-monospace, Menlo, Consolas, monospace; font-size: 0.86em;',
    '  background: rgba(0,0,0,0.06); border-radius: 4px; padding: 0.05rem 0.3rem; }',
    '.sensei-msg ruby rt { font-size: 0.55em; opacity: 0.75; }',
    '.sensei-retry { display: inline-block; margin-top: 0.4rem; background: none; border: none; color: var(--accent, #c45c4a);',
    '  font-family: inherit; font-size: 0.85rem; font-weight: 600; cursor: pointer; padding: 0; }',
    '.sensei-retry:hover { text-decoration: underline; }',
    '#sensei-form { display: flex; gap: 0.4rem; padding: 0.6rem; border-top: 1px solid rgba(0,0,0,0.08); background: var(--paper, #faf9f7); }',
    '#sensei-input { flex: 1; padding: 0.55rem 0.7rem; border: 1px solid rgba(0,0,0,0.15); border-radius: 6px;',
    '  font-family: inherit; font-size: 0.92rem; outline: none; }',
    '#sensei-input:focus { border-color: var(--accent, #c45c4a); }',
    '#sensei-send { background: var(--accent, #c45c4a); color: #fff; border: none; border-radius: 6px;',
    '  padding: 0 0.9rem; font-family: inherit; font-weight: 600; cursor: pointer; }',
    '#sensei-send:disabled { opacity: 0.5; cursor: default; }',
    '@media (max-width: 480px) { #sensei-fab { bottom: 4.5rem; right: 1rem; } #sensei-panel { right: 1rem; bottom: 8.5rem; } }'
  ].join('\n');

  // ---------- markup ----------
  function build() {
    var style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    var fab = document.createElement('button');
    fab.id = 'sensei-fab';
    fab.title = 'Ask Katsu a Japanese question';
    fab.setAttribute('aria-label', 'Open Katsu chat');
    fab.textContent = '活';
    fab.style.fontSize = '1.45rem';

    var badge = document.createElement('span');
    badge.id = 'sensei-badge';
    fab.appendChild(badge);

    var panel = document.createElement('div');
    panel.id = 'sensei-panel';
    panel.innerHTML =
      '<div id="sensei-head">' +
        '<div><span class="jp-name">カツ</span><strong>Katsu</strong></div>' +
        '<div id="sensei-head-btns">' +
          '<button id="sensei-gear" aria-label="Settings" title="Settings">⚙️</button>' +
          '<button id="sensei-close" aria-label="Close">×</button>' +
        '</div>' +
      '</div>' +
      '<div id="sensei-settings">' +
        '<div class="sensei-setting-row">' +
          '<span id="sensei-proactive-label"></span>' +
          '<label class="sensei-switch"><input type="checkbox" id="sensei-proactive-toggle"><span class="sensei-switch-track"></span></label>' +
        '</div>' +
        '<div class="sensei-setting-row">' +
          '<button id="sensei-clear"></button>' +
        '</div>' +
        '<div class="sensei-setting-row">' +
          '<button id="sensei-clear-mistakes"></button>' +
        '</div>' +
      '</div>' +
      '<div id="sensei-restore"><button type="button" id="sensei-restore-btn"></button></div>' +
      '<div id="sensei-msgs"></div>' +
      '<div id="sensei-review"><button type="button" id="sensei-review-btn"></button></div>' +
      '<div id="sensei-form">' +
        '<input id="sensei-input" type="text" maxlength="300" autocomplete="off">' +
        '<button id="sensei-send"></button>' +
      '</div>';

    document.body.appendChild(fab);
    document.body.appendChild(panel);

    var input = panel.querySelector('#sensei-input');
    var send = panel.querySelector('#sensei-send');
    var msgsEl = panel.querySelector('#sensei-msgs');
    var gear = panel.querySelector('#sensei-gear');
    var settingsPanel = panel.querySelector('#sensei-settings');
    var proactiveToggle = panel.querySelector('#sensei-proactive-toggle');
    var clearBtn = panel.querySelector('#sensei-clear');
    var clearMistakesBtn = panel.querySelector('#sensei-clear-mistakes');

    var restoreRow = panel.querySelector('#sensei-restore');
    var restoreBtn = panel.querySelector('#sensei-restore-btn');
    var reviewRow = panel.querySelector('#sensei-review');
    var reviewBtn = panel.querySelector('#sensei-review-btn');

    function applyStrings() {
      input.placeholder = tr('sensei_placeholder', 'How do I say… in Japanese?');
      send.textContent = tr('sensei_send', 'Ask');
      panel.querySelector('#sensei-proactive-label').textContent = tr('sensei_proactive_label', 'Let Katsu check in after six misses in a row');
      clearBtn.textContent = tr('sensei_clear_history', '🗑 Clear chat');
      refreshRestore();
      refreshMistakeUI();
    }

    // Shown only while a set-aside conversation is still within reach.
    function refreshRestore() {
      var prev = previousChat();
      restoreRow.classList.toggle('show', !!prev && !history.length);
      if (prev) restoreBtn.textContent = tr('sensei_restore_chat', '↩ Show previous conversation');
    }

    // Badge on the button, and a one-tap "go over them" row inside the panel.
    function refreshMistakeUI() {
      var n = unreviewedMistakes().length;
      badge.textContent = n > 9 ? '9+' : String(n);
      badge.classList.toggle('show', n > 0);
      reviewRow.classList.toggle('show', n > 0);
      reviewBtn.textContent = tr('sensei_review_btn', '📝 Go over my last mistakes') + (n > 1 ? ' (' + n + ')' : '');

      // Separate control, so clearing the chat never throws away the record
      var total = loadMistakes().length;
      clearMistakesBtn.textContent = tr('sensei_clear_mistakes', '🗑 Clear saved mistakes') +
        (total ? ' (' + total + ')' : '');
      clearMistakesBtn.disabled = !total;
      clearMistakesBtn.style.opacity = total ? '' : '0.45';
    }
    updateMistakeBadge = refreshMistakeUI;

    reviewBtn.addEventListener('click', function () {
      ask(tr('sensei_review_q', 'What did I just get wrong, and why? Explain it simply.'));
    });
    applyStrings();
    window.refreshSenseiI18n = applyStrings;

    proactiveToggle.checked = settings.proactive;
    proactiveToggle.addEventListener('change', function () {
      settings.proactive = proactiveToggle.checked;
      persistProactive();
    });

    gear.addEventListener('click', function () {
      settingsPanel.classList.toggle('open');
    });

    // Clearing the conversation deliberately leaves the mistake log alone —
    // it's a study record, not chat scrollback, and wiping it meant Katsu
    // could no longer explain anything you'd got wrong before.
    clearBtn.addEventListener('click', function () {
      // Set aside rather than destroy: the same one-tap way back as an
      // automatic clear, so a mis-click costs nothing.
      setAside(history);
      history = [];
      try { localStorage.removeItem(STORAGE_HISTORY); } catch (e) {}
      msgsEl.innerHTML = '';
      addMsg('sensei', tr('sensei_greeting', greetingFallback()));
      refreshRestore();
    });

    restoreBtn.addEventListener('click', function () {
      var prev = previousChat();
      if (!prev) { refreshRestore(); return; }
      history = prev.slice(-MAX_STORED_MESSAGES);
      dropPrevious();
      persistHistory();
      msgsEl.innerHTML = '';
      history.forEach(function (m) { addMsg(m.role === 'student' ? 'student' : 'sensei', m.text); });
      refreshRestore();
    });

    clearMistakesBtn.addEventListener('click', function () {
      window.KatsuMistakes.clear();
      refreshMistakeUI();
    });

    var lastManualCloseAt = 0;

    function openPanel(fromProactive) {
      panel.classList.add('open');
      fab.classList.remove('nudge');
      persistOpen(true);
      // Gate on what's actually on screen, not on history — the greeting is
      // deliberately never stored in history (no point sending it to the API),
      // so checking history meant a fresh greeting on every single open.
      if (!msgsEl.children.length && !fromProactive) {
        addMsg('sensei', tr('sensei_greeting', greetingFallback()));
      }
      if (!fromProactive) input.focus();
    }

    function closePanel(manual) {
      panel.classList.remove('open');
      // Fold the settings away with the window. Leaving them open meant the
      // next time you opened Katsu you got the settings, not the conversation.
      settingsPanel.classList.remove('open');
      persistOpen(false);
      if (manual) lastManualCloseAt = Date.now();
    }

    fab.addEventListener('click', function () {
      if (panel.classList.contains('open')) closePanel(true);
      else openPanel(false);
    });
    panel.querySelector('#sensei-close').addEventListener('click', function () {
      closePanel(true);
    });
    send.addEventListener('click', function () { ask(); });
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') ask();
    });

    function greetingFallback() {
      return 'こんにちは！(Konnichiwa!) I’m Katsu. Ask me how to say something in Japanese, or any grammar question. 何でも聴いてください！(Nandemo kiite kudasai! — Ask me anything!)';
    }

    function addMsg(role, text, opts) {
      opts = opts || {};
      var div = document.createElement('div');
      div.className = 'sensei-msg ' + role + (opts.thinking ? ' thinking' : '') + (opts.error ? ' error' : '');
      // Katsu's replies get light markdown; the student's own text never does.
      if (role === 'sensei' && !opts.thinking && !opts.error) div.innerHTML = mdLite(text);
      else div.textContent = text;
      if (opts.retry) {
        var retryBtn = document.createElement('button');
        retryBtn.className = 'sensei-retry';
        retryBtn.textContent = tr('sensei_retry', '↻ Try again');
        retryBtn.addEventListener('click', function () { div.remove(); opts.retry(); });
        div.appendChild(document.createElement('br'));
        div.appendChild(retryBtn);
      }
      msgsEl.appendChild(div);
      msgsEl.scrollTop = msgsEl.scrollHeight;
      return div;
    }

    // Replay persisted history into the DOM on load (without hitting the API).
    history.forEach(function (m) {
      addMsg(m.role === 'student' ? 'student' : 'sensei', m.text);
    });
    refreshRestore();

    // Restore panel open state across navigation.
    var wasOpen = false;
    try { wasOpen = localStorage.getItem(STORAGE_OPEN) === '1'; } catch (e) {}
    if (wasOpen) openPanel(true);

    function callBackend(payload) {
      return fetch(BACKEND_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).then(function (res) {
        if (!res.ok) {
          return res.json().catch(function () { return {}; }).then(function (data) {
            var err = new Error((data && data.error) || ('HTTP ' + res.status));
            err.status = res.status;
            throw err;
          });
        }
        return res.json();
      }).then(function (data) {
        var answer = (data.feedback || '').trim();
        if (!data.success || !answer) throw new Error(data.error || 'empty response');
        return answer;
      });
    }

    function contextMessages() {
      return history.slice(-MAX_CONTEXT_MESSAGES).map(function (m) {
        return { role: m.role === 'student' ? 'user' : 'assistant', content: m.text };
      });
    }

    function ask(prefill) {
      var q = (prefill !== undefined ? prefill : input.value).trim();
      if (!q || send.disabled) return;
      if (prefill === undefined) input.value = '';
      send.disabled = true;
      addMsg('student', q);
      var thinkingEl = addMsg('sensei', '考えています… (Thinking…)', { thinking: true });

      var payload = {
        system: buildSystemPrompt(),   // includes the recent-mistake context
        messages: contextMessages().concat([{ role: 'user', content: q }]),
        maxTokens: MAX_TOKENS
      };
      // They're in Katsu's hands now, so stop flagging them as unreviewed.
      markMistakesSeen();

      callBackend(payload).then(function (answer) {
        thinkingEl.classList.remove('thinking');
        thinkingEl.innerHTML = mdLite(answer);
        history.push({ role: 'student', text: q });
        history.push({ role: 'sensei', text: answer });
        history = history.slice(-MAX_STORED_MESSAGES);
        persistHistory();
        refreshRestore();   // a live conversation hides the way back
      }).catch(function (err) {
        console.error('Sensei error:', err);
        thinkingEl.remove();
        addMsg('sensei', tr('sensei_error', 'すみません (Sumimasen) — I couldn’t reach the server.'), {
          error: true,
          retry: function () { ask(q); }
        });
      }).finally(function () {
        send.disabled = false;
        input.focus();
      });
    }

    // ---------- proactive "struggling" detector ----------
    var recentMisses = [];
    var lastProactiveAt = 0;
    var proactiveCount = 0;
    var STRUGGLE_PATTERN = /\bfeedback\b/;
    var STRUGGLE_STATE = /\b(bad|wrong|incorrect)\b/;
    var GOOD_STATE = /\b(good|correct|right)\b/;

    // "In a row" means exactly that: one right answer and the count starts over.
    function noteHit() { recentMisses = []; }

    function noteMiss() {
      if (!settings.proactive) return;
      if (panel.classList.contains('open')) return; // already talking to Katsu
      if (Date.now() - lastManualCloseAt < PROACTIVE_COOLDOWN_MS) return; // just dismissed — give space
      if (proactiveCount >= MAX_PROACTIVE_PER_LOAD) return;

      var now = Date.now();
      recentMisses = recentMisses.filter(function (ts) { return now - ts < STRUGGLE_WINDOW_MS; });
      recentMisses.push(now);
      if (recentMisses.length < STRUGGLE_THRESHOLD) return;
      if (now - lastProactiveAt < PROACTIVE_COOLDOWN_MS) return;

      recentMisses = [];
      lastProactiveAt = now;
      proactiveCount++;

      fab.classList.add('nudge');
      openPanel(true);
      var nudge = Math.random() < 0.5
        ? tr('sensei_nudge_1', 'Looks like this one’s tricky — want a hint? 💡')
        : tr('sensei_nudge_2', 'I noticed a few misses in a row — I’m here if you want to talk it through!');
      addMsg('sensei', nudge);
    }

    // Where each practice page keeps its question, the student's answer, and
    // the correct answer. Unknown pages still get the feedback text itself.
    var CAPTURE = {
      // 'kana-drill' is deliberately absent — see KATSU_HANDS_OFF above.
      'kanji-drill': { q: ['#drill-question'], a: ['#drill-input'] },
      'datedojo':    { q: ['#dojo-question-text'], a: ['#dojo-answer-input'], c: ['#dojo-feedback-answer'] },
      'conjugator':  { q: ['#verb-kanji', '#prompt-form'], a: ['#answer-input'], c: ['#feedback-answer'] }
    };

    function readAll(selectors) {
      if (!selectors) return '';
      var parts = [];
      selectors.forEach(function (sel) {
        var el = document.querySelector(sel);
        if (!el) return;
        var val = (el.value !== undefined && el.value !== null && el.value !== '') ? el.value : el.textContent;
        val = (val || '').trim();
        if (val) parts.push(val);
      });
      return parts.join(' → ');
    }

    function captureMistake(feedbackEl) {
      // The page usually sets the class first and the text a tick later.
      setTimeout(function () {
        var map = CAPTURE[document.body.getAttribute('data-page')] || {};
        var note = (feedbackEl.textContent || '').trim();
        // Correct-answer element may sit inside the feedback box; don't double it.
        var correct = readAll(map.c);
        logMistake({
          q: readAll(map.q),
          a: readAll(map.a),
          c: correct,
          note: correct ? '' : note
        });
      }, 60);
    }

    var observer = new MutationObserver(function (mutations) {
      for (var i = 0; i < mutations.length; i++) {
        var el = mutations[i].target;
        if (!el || el.nodeType !== 1) continue;
        var cls = el.getAttribute ? el.getAttribute('class') : '';
        if (cls && STRUGGLE_PATTERN.test(cls) && GOOD_STATE.test(cls) && !STRUGGLE_STATE.test(cls)) {
          noteHit();
          break;
        }
        if (cls && STRUGGLE_PATTERN.test(cls) && STRUGGLE_STATE.test(cls)) {
          if (handsOffPage()) break;   // this page is none of Katsu's business
          captureMistake(el);   // logged, so Katsu can explain it later
          noteMiss();           // pop-in only if the student left that on
          break;
        }
      }
    });
    if (!handsOffPage()) {
      observer.observe(document.body, { attributes: true, attributeFilter: ['class'], subtree: true });
    }

    refreshMistakeUI();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else {
    build();
  }
})();
