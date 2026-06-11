# Katsuyō Academy — Multi-Page Split

## What changed
- One file → 10 HTML pages + styles.css + app.js + kanji-data.js + ai.js
- index.html went from 1.97MB to 27KB. Kanji data (1.2MB) now loads ONLY on kanji.html.
- Nav buttons are now real <a> links (each page has its own URL, title, and meta description — better for SEO and Google Ads landing pages).
- showPage() still exists as a shim that navigates to the right URL, so every existing onclick button in the content works unchanged.
- Old links like yoursite.com/#kanji automatically redirect to kanji.html.
- Per-page init (conjugator question, vocab/kanji flashcards, date dojo) now runs on each page's own load instead of on tab-switch.
- The Cloudflare-injected email-decode scripts were removed (Cloudflare re-injects them itself when proxying). The contact mailto link was restored to plain text.

## Deploying
Drop all files in the same directory as before (next to your audio/ folder and open_book.png). Nothing else on the server changes.

## Future optimizations (optional)
- Split app.js (292KB) into per-page scripts — the conjugation engine + verb data could load only on conjugator/verblist/forms pages.
- Convert kanji-data.js to JSON and fetch() it, enabling a loading indicator on the kanji page.
