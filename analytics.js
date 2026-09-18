/* ---------------------------------------------------------------------------
   analytics.js — every tracker the site loads, in one place.

   Both IDs live at the top of this file and nowhere else. Adding, changing or
   removing a tracker is an edit here, not an edit in sixteen <head> blocks —
   which is how the Google tag ended up pasted into every page in the first
   place.

   Loaded from the <head> of each page as:

       <script src="analytics.js"></script>

   Nothing here blocks rendering: both vendors are injected as async <script>
   tags, exactly as their own snippets do.

   ── Privacy ───────────────────────────────────────────────────────────────
   Clarity records sessions. Two things keep learner writing out of them:

   1. Clarity masks every <input> and <select> in all three masking modes.
      That is not configurable, so drill answers and chat replies are never
      captured as text no matter what the dashboard is set to.
   2. The Talk conversation and the Katsu widget are displayed in <div>s, not
      inputs, so masking mode WOULD apply to them. Both carry
      data-clarity-mask="true" in their own markup, which overrides the
      dashboard setting and cannot be switched off from the portal by mistake.

   Set the dashboard to Balanced (the default) and the two together mean
   nothing a learner types is ever recorded.
   --------------------------------------------------------------------------- */

(function () {
  'use strict';

  // ── The two IDs ──────────────────────────────────────────────────────────
  // Clarity: clarity.microsoft.com → your project → Settings → Setup →
  // "Install manually". The ID is the 10-character string at the end of the
  // snippet's clarity.ms/tag/ URL. Leave it empty and Clarity simply does not
  // load — the site works exactly as before, no console errors.
  var CLARITY_ID = 'yjv89komum';       // Clarity project id (public by design)
  var GA_ID      = 'G-4XWJSE6WX0';     // Google Analytics 4

  // Never track while developing. file:// and localhost would otherwise fill
  // the dashboards with your own sessions and skew every number on a site
  // this quiet.
  var host = location.hostname;
  var isLocal = !host ||
                host === 'localhost' ||
                host === '127.0.0.1' ||
                host === '::1' ||
                location.protocol === 'file:';
  if (isLocal) return;

  // ── Microsoft Clarity ────────────────────────────────────────────────────
  // Microsoft's own snippet, with the ID read from the constant above.
  if (CLARITY_ID) {
    (function (c, l, a, r, i, t, y) {
      c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
      t = l.createElement(r); t.async = 1; t.src = 'https://www.clarity.ms/tag/' + i;
      y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
    })(window, document, 'clarity', 'script', CLARITY_ID);
  }

  // ── Google Analytics 4 ───────────────────────────────────────────────────
  if (GA_ID) {
    var ga = document.createElement('script');
    ga.async = true;
    ga.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(ga);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);
  }

  // ── KA_Track — one call that reaches both ────────────────────────────────
  // Marks a moment worth filtering recordings by. Clarity turns the name into
  // a "Smart event" you can filter and segment on; GA4 receives the same name
  // as a custom event.
  //
  //     KA_Track.event('drill_complete');
  //     KA_Track.tag('drill', 'kana');
  //
  // Safe to call whether or not either tracker loaded, so callers never need
  // to guard. Nothing is wired to it yet — it is here so that instrumenting a
  // drill later is a one-line change at the call site.
  window.KA_Track = {
    event: function (name) {
      if (!name) return;
      try { if (window.clarity) window.clarity('event', name); } catch (e) {}
      try { if (window.gtag) window.gtag('event', name); } catch (e) {}
    },
    // Clarity-only: a key/value pair you can segment recordings by.
    tag: function (key, value) {
      if (!key) return;
      try { if (window.clarity) window.clarity('set', key, String(value)); } catch (e) {}
    }
  };
})();
