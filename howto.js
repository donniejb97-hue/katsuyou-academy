/* ============================================================
   howto.js — builds the "How it works" scroll.

   A page opts in with one element:

     <div data-howto="wok" data-howto-seal="壁" data-howto-anchor=".kanji-container"></div>

   The text comes from i18n (howto_<key>_title, howto_<key>_1 … _N), so it
   follows the site language. The scroll hangs in the right margin whenever
   the margin beside the anchor is wide enough for it; otherwise it moves
   into the page flow above the anchor, full width. It starts open and rolls
   up on demand; whichever way you leave it is remembered per browser.
   ============================================================ */
(function () {
  'use strict';

  var STORE = 'katsuyo-howto-';
  var GAP = 28;                    // between the content's edge and the scroll
  var FULL_W = 244, MIN_W = 200;   // the scroll's width; it narrows a little to fit a margin

  function t(key, fallback) {
    try {
      var v = (typeof I18N !== 'undefined' && I18N[LANG] && I18N[LANG][key]) ||
              (typeof I18N !== 'undefined' && I18N.en && I18N.en[key]);
      return v || fallback || '';
    } catch (e) { return fallback || ''; }
  }

  function build(host) {
    var key = host.getAttribute('data-howto');
    var seal = host.getAttribute('data-howto-seal') || '説';
    var anchor = document.querySelector(host.getAttribute('data-howto-anchor') || 'main');
    if (!key || !anchor) return;

    var el = document.createElement('aside');
    el.className = 'howto';
    el.setAttribute('aria-label', t('howto_label', 'How it works'));
    el.innerHTML =
      '<div class="howto-roll is-top"></div>' +
      '<div class="howto-paper"><div class="howto-inner">' +
        '<div class="howto-eyebrow"></div>' +
        '<h3 class="howto-title"><span class="howto-title-text"></span><span class="jp">使い方</span></h3>' +
        '<ol class="howto-list"></ol>' +
        '<div class="howto-foot"><span class="howto-seal jp">' + seal + '</span>' +
          '<button type="button" class="howto-hide"></button></div>' +
      '</div></div>' +
      '<div class="howto-roll is-bottom" title=""></div>' +
      '<button type="button" class="howto-tag"><span class="jp">使い方</span><span class="howto-tag-text"></span></button>';

    var paper = el.querySelector('.howto-paper');
    var hideBtn = el.querySelector('.howto-hide');
    var tag = el.querySelector('.howto-tag');
    var bottom = el.querySelector('.howto-roll.is-bottom');

    function fill() {
      el.querySelector('.howto-eyebrow').textContent = t('howto_label', 'How it works');
      el.querySelector('.howto-title-text').textContent = t('howto_' + key + '_title', key);
      var list = el.querySelector('.howto-list');
      list.innerHTML = '';
      for (var i = 1; i <= 12; i++) {
        var s = t('howto_' + key + '_' + i, '');
        if (!s) break;
        var li = document.createElement('li');
        li.innerHTML = s;      // the strings carry <b>, <i> and the colour swatches
        list.appendChild(li);
      }
      hideBtn.textContent = t('howto_hide', 'roll up');
      el.querySelector('.howto-tag-text').textContent = t('howto_show', 'How it works');
      bottom.title = t('howto_toggle', 'Roll up / unroll');
    }

    var rolled = false;
    try { rolled = localStorage.getItem(STORE + key) === 'rolled'; } catch (e) {}
    function paint() {
      el.classList.toggle('is-rolled', rolled);
      el.setAttribute('aria-expanded', rolled ? 'false' : 'true');
    }
    function toggle() {
      rolled = !rolled;
      try { localStorage.setItem(STORE + key, rolled ? 'rolled' : 'open'); } catch (e) {}
      paint();
      if (placed) place();
    }
    hideBtn.addEventListener('click', toggle);
    tag.addEventListener('click', toggle);
    bottom.addEventListener('click', toggle);

    // Where it hangs. Measured, not guessed, so it works for any page width.
    var placed = null;
    var TOP = 92, ROLLERS = 32;
    function place() {
      var rect = anchor.getBoundingClientRect();
      // it hangs on the LEFT of the content, in the margin there
      var margin = rect.left;
      var avail = Math.min(FULL_W, margin - GAP - 12);
      // the paper may scroll inside itself, but never below ~260px. The Ko-fi
      // button floats in the bottom-left corner, so the scroll stops above it.
      var paperMax = window.innerHeight - TOP - ROLLERS - kofiRoom();
      var mode = (avail >= MIN_W && paperMax >= 260) ? 'docked' : 'inline';
      if (mode !== placed) {
        placed = mode;
        el.classList.toggle('is-docked', mode === 'docked');
        el.classList.toggle('is-inline', mode === 'inline');
        document.body.classList.toggle('howto-docked', mode === 'docked');
        if (mode === 'docked') document.body.appendChild(el);
        else anchor.parentNode.insertBefore(el, anchor);
      }
      // Docked, it hangs just off the content's left edge — beside the page.
      el.style.left = mode === 'docked' ? Math.round(rect.left - GAP - avail) + 'px' : '';
      el.style.width = mode === 'docked' ? Math.round(avail) + 'px' : '';
      el.classList.toggle('is-narrow', mode === 'docked' && avail < 230);
      paper.style.maxHeight = (mode === 'docked' && !rolled) ? Math.min(900, paperMax) + 'px' : '';
      column();
    }
    // How much of the bottom-left corner the Ko-fi button takes: measured
    // when it has rendered, a safe guess until then.
    function kofiRoom() {
      var k = document.querySelector('.floatingchat-container-wrap, [class*="floatingchat"], iframe[id^="kofi"]');
      if (k) {
        var r = k.getBoundingClientRect();
        if (r.height && r.top < window.innerHeight) return Math.max(40, window.innerHeight - r.top + 16);
      }
      return 110;
    }
    // Tell the floating buttons where the scroll's column is and where it ends.
    function column() {
      if (placed !== 'docked') return;
      var r = el.getBoundingClientRect();
      var st = document.body.style;
      st.setProperty('--howto-left', Math.round(r.left) + 'px');
      st.setProperty('--howto-right', Math.round(r.right) + 'px');
      st.setProperty('--howto-bottom', Math.round(r.bottom) + 'px');
    }
    paper.addEventListener('transitionend', column);

    // the first paint should not animate the paper open
    paper.style.transition = 'none';
    fill(); paint(); place();
    host.parentNode.removeChild(host);
    requestAnimationFrame(function () { requestAnimationFrame(function () { paper.style.transition = ''; }); });

    window.addEventListener('resize', place);
    window.addEventListener('katsuyo:lang', fill);
    var tries = 0, again = setInterval(function () { place(); if (++tries > 8) clearInterval(again); }, 1000);
  }

  function init() {
    var hosts = document.querySelectorAll('[data-howto]');
    for (var i = 0; i < hosts.length; i++) build(hosts[i]);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
