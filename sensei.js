// ============================================================================
// SENSEI — floating Japanese assistant for Katsuyō Academy
// Ask "how do I say X in Japanese?" or any grammar/vocab question.
// Uses the same Vercel backend as the conjugator AI feedback.
// ============================================================================
(function () {
  'use strict';

  var BACKEND_URL = 'https://katsuyou-backend.vercel.app/api/claude';
  var MAX_HISTORY = 8;        // messages of context sent with each question
  var MAX_TOKENS = 500;       // keep answers (and your API bill) small
  var history = [];           // { role: 'student'|'sensei', text: '...' }

  var SYSTEM_PROMPT =
    'You are Katsu (カツ先生), the friendly Japanese tutor mascot of Katsuyō Academy. '
    + 'Your name comes from 活 (katsu, "lively"), the first kanji of 活用 (katsuyō). ' +
    'a site for beginner Japanese learners (around JLPT N5-N4 level).\n\n' +
    'Rules:\n' +
    '- When asked how to say a word or phrase in Japanese, give: the word in ' +
    'hiragana (or katakana for loanwords), the romaji in parentheses, the kanji ' +
    'if common, and one short example sentence with English translation.\n' +
    '- Keep answers short and beginner-friendly: a few sentences, not essays.\n' +
    '- Prefer hiragana over kanji-heavy writing; always include romaji.\n' +
    '- You may answer grammar questions, cultural questions, and questions about ' +
    'how to use this website (it has Kana charts, a verb Learn section, a Forms ' +
    'reference, a Verb list, the Conjugator practice tool, Date Dojo, Vocabulary ' +
    'flashcards, and 2,300 KLC Kanji flashcards).\n' +
    '- Politely decline questions unrelated to Japanese language, Japan, or this ' +
    'website, and steer back to Japanese learning.\n' +
    '- Be warm and encouraging, like a patient teacher.';

  // ---------- styles ----------
  var css = [
    '#sensei-fab { position: fixed; bottom: 5.5rem; right: 2rem; width: 56px; height: 56px;',
    '  border-radius: 50%; background: var(--ink, #1a1a2e); color: var(--paper, #faf9f7);',
    '  border: 2px solid var(--accent, #c45c4a); font-size: 1.5rem; cursor: pointer; z-index: 1200;',
    '  box-shadow: 0 4px 14px rgba(0,0,0,0.25); transition: transform 0.15s; font-family: "Noto Serif JP", serif; }',
    '#sensei-fab:hover { transform: scale(1.08); }',
    '#sensei-panel { position: fixed; bottom: 10rem; right: 2rem; width: 340px; max-width: calc(100vw - 2rem);',
    '  height: 460px; max-height: calc(100vh - 13rem); background: var(--paper, #faf9f7);',
    '  border: 1px solid rgba(0,0,0,0.12); border-radius: 8px; box-shadow: 0 12px 40px rgba(0,0,0,0.25);',
    '  display: none; flex-direction: column; overflow: hidden; z-index: 1200;',
    '  font-family: "Outfit", sans-serif; }',
    '#sensei-panel.open { display: flex; }',
    '#sensei-head { background: var(--ink, #1a1a2e); color: var(--paper, #faf9f7); padding: 0.75rem 1rem;',
    '  display: flex; align-items: center; justify-content: space-between; }',
    '#sensei-head .jp-name { font-family: "Noto Serif JP", serif; color: var(--accent-soft, #d4786a); margin-right: 0.4rem; }',
    '#sensei-close { background: none; border: none; color: inherit; font-size: 1.2rem; cursor: pointer; }',
    '#sensei-msgs { flex: 1; overflow-y: auto; overscroll-behavior: contain; padding: 0.9rem; display: flex; flex-direction: column; gap: 0.6rem; }',
    '.sensei-msg { max-width: 85%; padding: 0.55rem 0.8rem; border-radius: 8px; font-size: 0.92rem; line-height: 1.45; white-space: pre-wrap; word-wrap: break-word; }',
    '.sensei-msg.student { align-self: flex-end; background: var(--ink, #1a1a2e); color: var(--paper, #faf9f7); border-bottom-right-radius: 2px; }',
    '.sensei-msg.sensei { align-self: flex-start; background: var(--paper-warm, #f5f3ef); border: 1px solid rgba(0,0,0,0.08); border-bottom-left-radius: 2px; }',
    '.sensei-msg.thinking { opacity: 0.6; font-style: italic; }',
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

    var panel = document.createElement('div');
    panel.id = 'sensei-panel';
    panel.innerHTML =
      '<div id="sensei-head">' +
        '<div><span class="jp-name">カツ</span><strong>Katsu</strong></div>' +
        '<button id="sensei-close" aria-label="Close">×</button>' +
      '</div>' +
      '<div id="sensei-msgs"></div>' +
      '<div id="sensei-form">' +
        '<input id="sensei-input" type="text" maxlength="300" ' +
          'placeholder="How do I say… in Japanese?" autocomplete="off">' +
        '<button id="sensei-send">Ask</button>' +
      '</div>';

    document.body.appendChild(fab);
    document.body.appendChild(panel);

    var input = panel.querySelector('#sensei-input');
    var send = panel.querySelector('#sensei-send');

    fab.addEventListener('click', function () {
      panel.classList.toggle('open');
      if (panel.classList.contains('open')) {
        if (history.length === 0) {
          addMsg('sensei', 'こんにちは！(Konnichiwa!) I\u2019m Katsu. Ask me how to say something in Japanese, or any grammar question. 何でも聞いてください！(Nandemo kiite kudasai! \u2014 Ask me anything!)');
        }
        input.focus();
      }
    });
    panel.querySelector('#sensei-close').addEventListener('click', function () {
      panel.classList.remove('open');
    });
    send.addEventListener('click', ask);
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') ask();
    });

    function addMsg(role, text, thinking) {
      var div = document.createElement('div');
      div.className = 'sensei-msg ' + role + (thinking ? ' thinking' : '');
      div.textContent = text;
      panel.querySelector('#sensei-msgs').appendChild(div);
      div.parentNode.scrollTop = div.parentNode.scrollHeight;
      return div;
    }

    function buildPrompt(question) {
      var convo = history.slice(-MAX_HISTORY).map(function (m) {
        return (m.role === 'student' ? 'Student: ' : 'Sensei: ') + m.text;
      }).join('\n');
      return SYSTEM_PROMPT +
        (convo ? '\n\nConversation so far:\n' + convo : '') +
        '\n\nStudent: ' + question + '\n\nSensei:';
    }

    async function ask() {
      var q = input.value.trim();
      if (!q || send.disabled) return;
      input.value = '';
      send.disabled = true;
      addMsg('student', q);
      var thinkingEl = addMsg('sensei', '考えています… (Thinking…)', true);

      try {
        var res = await fetch(BACKEND_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt: buildPrompt(q), maxTokens: MAX_TOKENS })
        });
        if (!res.ok) throw new Error('HTTP ' + res.status);
        var data = await res.json();
        var answer = (data.feedback || data.text || data.response || data.completion || '').trim();
        if (!answer) throw new Error('empty response');
        thinkingEl.classList.remove('thinking');
        thinkingEl.textContent = answer;
        history.push({ role: 'student', text: q });
        history.push({ role: 'sensei', text: answer });
      } catch (err) {
        console.error('Sensei error:', err);
        thinkingEl.classList.remove('thinking');
        thinkingEl.textContent = 'すみません (Sumimasen) \u2014 I couldn\u2019t reach the server. Please try again in a moment.';
      } finally {
        send.disabled = false;
        input.focus();
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else {
    build();
  }
})();
