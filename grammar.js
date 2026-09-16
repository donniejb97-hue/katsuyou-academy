/* ============================================================
   GRAMMAR PAGES — behaviour
   Loaded by adjectives.html, conjugation.html, reference.html.
   Four jobs: furigana toggle, section filter, contents
   scrollspy, and anchor links that clear the fixed nav.
   Every block is guarded, so a page missing one of these
   controls simply skips it.
   ============================================================ */

(function () {
  'use strict';

  var page = document.querySelector('.g-page');
  if (!page) return;

  var NAV_OFFSET = 92; // 72px nav + breathing room
  var reduceMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function decode(value) {
    try { return decodeURIComponent(value); } catch (e) { return value; }
  }

  function store(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* private mode */ }
  }

  function recall(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }

  /* ---------- 1. furigana toggle ---------- */

  var furiganaButtons = document.querySelectorAll('[data-furigana-toggle]');

  function applyFurigana(state) {
    page.setAttribute('data-furigana', state);
    for (var i = 0; i < furiganaButtons.length; i++) {
      var btn = furiganaButtons[i];
      btn.setAttribute('aria-pressed', state === 'on' ? 'true' : 'false');
      // Labels can be supplied per-language via data-label-on / data-label-off;
      // English is the fallback so the button works without them.
      btn.textContent = state === 'on' ?
        (btn.getAttribute('data-label-on') || 'Furigana on') :
        (btn.getAttribute('data-label-off') || 'Furigana off');
    }
  }

  if (furiganaButtons.length) {
    var saved = recall('katsuyo-furigana');
    applyFurigana(saved === 'off' ? 'off' : 'on');

    for (var f = 0; f < furiganaButtons.length; f++) {
      furiganaButtons[f].addEventListener('click', function () {
        var next = page.getAttribute('data-furigana') === 'on' ? 'off' : 'on';
        applyFurigana(next);
        store('katsuyo-furigana', next);
      });
    }
  }

  /* ---------- 2. section filter ---------- */

  var filterInput = document.querySelector('[data-filter]');
  var filterCount = document.querySelector('[data-filter-count]');
  var body = document.querySelector('.g-body');

  if (filterInput && body) {
    var blocks = [];
    var sections = body.querySelectorAll('.g-sec');

    for (var s = 0; s < sections.length; s++) {
      var heading = sections[s].querySelector('h2');
      blocks.push({
        el: sections[s],
        id: heading ? heading.id : '',
        text: sections[s].textContent.toLowerCase()
      });
    }

    var empty = document.createElement('p');
    empty.className = 'g-no-matches';
    empty.hidden = true;
    empty.textContent = 'No sections match that.';
    body.appendChild(empty);

    var tocLinks = document.querySelectorAll('.g-toc a');

    var runFilter = function () {
      var q = filterInput.value.trim().toLowerCase();
      var shown = 0;
      var visibleIds = {};

      for (var i = 0; i < blocks.length; i++) {
        var hit = !q || blocks[i].text.indexOf(q) !== -1;
        blocks[i].el.hidden = !hit;
        if (hit) {
          shown++;
          visibleIds[blocks[i].id] = true;
        }
      }

      // keep the contents list in step with what's on screen
      for (var t = 0; t < tocLinks.length; t++) {
        var target = tocLinks[t].getAttribute('href').slice(1);
        tocLinks[t].hidden = !!q && !visibleIds[decode(target)];
      }

      empty.hidden = shown !== 0;

      if (filterCount) {
        if (!q) {
          filterCount.textContent = '';
        } else {
          filterCount.textContent = shown === 1 ?
            '1 section' : shown + ' sections';
        }
      }
    };

    var debounce;
    filterInput.addEventListener('input', function () {
      clearTimeout(debounce);
      debounce = setTimeout(runFilter, 120);
    });

    filterInput.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        filterInput.value = '';
        runFilter();
      }
    });

    runFilter();
  }

  /* ---------- 3. anchors that clear the fixed nav ---------- */

  function revealTarget(el) {
    // a target can sit inside a collapsed <details> — open its ancestors
    var parent = el.parentElement;
    while (parent) {
      if (parent.tagName === 'DETAILS') parent.open = true;
      parent = parent.parentElement;
    }
  }

  function scrollToTarget(el) {
    revealTarget(el);
    var top = el.getBoundingClientRect().top + window.pageYOffset - NAV_OFFSET;
    window.scrollTo({
      top: top,
      behavior: reduceMotion ? 'auto' : 'smooth'
    });
    if (typeof el.focus === 'function') {
      el.focus({ preventScroll: true });
    }
  }

  page.addEventListener('click', function (e) {
    var link = e.target.closest ? e.target.closest('a[href^="#"]') : null;
    if (!link) return;

    var id = decode(link.getAttribute('href').slice(1));
    if (!id) return;

    var target = document.getElementById(id);
    if (!target) return;

    e.preventDefault();
    scrollToTarget(target);
    if (history.replaceState) history.replaceState(null, '', '#' + id);
  });

  if (window.location.hash.length > 1) {
    window.addEventListener('load', function () {
      var el = document.getElementById(
        decode(window.location.hash.slice(1))
      );
      if (el) setTimeout(function () { scrollToTarget(el); }, 60);
    });
  }

  /* ---------- 4. contents scrollspy ---------- */

  var tocAnchors = document.querySelectorAll('.g-toc a');

  if (tocAnchors.length && 'IntersectionObserver' in window) {
    var byId = {};
    var watched = [];

    for (var a = 0; a < tocAnchors.length; a++) {
      var key = decode(tocAnchors[a].getAttribute('href').slice(1));
      var node = document.getElementById(key);
      if (node) {
        byId[key] = tocAnchors[a];
        watched.push(node);
      }
    }

    var current = null;

    var setActive = function (id) {
      if (id === current) return;
      if (current && byId[current]) byId[current].classList.remove('is-active');
      if (byId[id]) byId[id].classList.add('is-active');
      current = id;
    };

    var visible = {};

    var observer = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        var id = entries[i].target.id;
        if (entries[i].isIntersecting) {
          visible[id] = entries[i].boundingClientRect.top;
        } else {
          delete visible[id];
        }
      }

      // highest heading currently in the reading band wins
      var best = null;
      var bestTop = Infinity;
      for (var k in visible) {
        if (visible[k] < bestTop) {
          bestTop = visible[k];
          best = k;
        }
      }
      if (best) setActive(best);
    }, {
      rootMargin: '-' + NAV_OFFSET + 'px 0px -65% 0px',
      threshold: 0
    });

    for (var w = 0; w < watched.length; w++) observer.observe(watched[w]);
  }
})();
