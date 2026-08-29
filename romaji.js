// ============================================================================
// romaji.js — kana → Hepburn romaji (display only)
// Standalone: no dependencies, safe to load on any page.
//   toRomaji('りょうほう')  -> 'ryōhō'
//   toRomaji('カメラ')      -> 'kamera'
//   toRomaji('がっこう')    -> 'gakkō'
// Modified Hepburn (textbook/JLPT style): shinbun, sanpo, shin'yū.
// Handles: basic kana, dakuten/handakuten, small ya/yu/yo combos,
// small tsu (っ/ッ) gemination, syllabic ん, and long vowels (macrons).
// ============================================================================
(function () {
  'use strict';

  // --- combos first (two-character sequences) ---
  var COMBO = {
    'きゃ':'kya','きゅ':'kyu','きょ':'kyo','しゃ':'sha','しゅ':'shu','しょ':'sho',
    'ちゃ':'cha','ちゅ':'chu','ちょ':'cho','にゃ':'nya','にゅ':'nyu','にょ':'nyo',
    'ひゃ':'hya','ひゅ':'hyu','ひょ':'hyo','みゃ':'mya','みゅ':'myu','みょ':'myo',
    'りゃ':'rya','りゅ':'ryu','りょ':'ryo','ぎゃ':'gya','ぎゅ':'gyu','ぎょ':'gyo',
    'じゃ':'ja','じゅ':'ju','じょ':'jo','ぢゃ':'ja','ぢゅ':'ju','ぢょ':'jo',
    'びゃ':'bya','びゅ':'byu','びょ':'byo','ぴゃ':'pya','ぴゅ':'pyu','ぴょ':'pyo',
    // katakana-only extended combos for loanwords
    'ファ':'fa','フィ':'fi','フェ':'fe','フォ':'fo','ウィ':'wi','ウェ':'we','ウォ':'wo',
    'ヴァ':'va','ヴィ':'vi','ヴェ':'ve','ヴォ':'vo','ティ':'ti','ディ':'di',
    'トゥ':'tu','ドゥ':'du','チェ':'che','シェ':'she','ジェ':'je'
  };

  var BASIC = {
    'あ':'a','い':'i','う':'u','え':'e','お':'o',
    'か':'ka','き':'ki','く':'ku','け':'ke','こ':'ko',
    'さ':'sa','し':'shi','す':'su','せ':'se','そ':'so',
    'た':'ta','ち':'chi','つ':'tsu','て':'te','と':'to',
    'な':'na','に':'ni','ぬ':'nu','ね':'ne','の':'no',
    'は':'ha','ひ':'hi','ふ':'fu','へ':'he','ほ':'ho',
    'ま':'ma','み':'mi','む':'mu','め':'me','も':'mo',
    'や':'ya','ゆ':'yu','よ':'yo',
    'ら':'ra','り':'ri','る':'ru','れ':'re','ろ':'ro',
    'わ':'wa','ゐ':'i','ゑ':'e','を':'o','ん':'n',
    'が':'ga','ぎ':'gi','ぐ':'gu','げ':'ge','ご':'go',
    'ざ':'za','じ':'ji','ず':'zu','ぜ':'ze','ぞ':'zo',
    'だ':'da','ぢ':'ji','づ':'zu','で':'de','ど':'do',
    'ば':'ba','び':'bi','ぶ':'bu','べ':'be','ぼ':'bo',
    'ぱ':'pa','ぴ':'pi','ぷ':'pu','ぺ':'pe','ぽ':'po',
    'ゔ':'vu',
    // small vowels standing alone (rare, but don't drop them)
    'ぁ':'a','ぃ':'i','ぅ':'u','ぇ':'e','ぉ':'o','ゃ':'ya','ゅ':'yu','ょ':'yo'
  };

  var MACRON = { a:'ā', i:'ī', u:'ū', e:'ē', o:'ō' };

  // katakana -> hiragana so one table covers both scripts
  function kataToHira(s) {
    return s.replace(/[\u30a1-\u30f6]/g, function (c) {
      return String.fromCharCode(c.charCodeAt(0) - 0x60);
    });
  }

  function toRomaji(input) {
    if (!input) return '';
    var src = String(input);
    var isKatakana = /[\u30a1-\u30fa]/.test(src);

    // resolve katakana-only combos before folding to hiragana
    var out = '';
    var i = 0;
    var s = src;
    while (i < s.length) {
      var two = s.substr(i, 2);
      if (COMBO[two]) { out += COMBO[two]; i += 2; continue; }
      // katakana long vowel mark ー: lengthen whatever came before
      if (s[i] === 'ー') {
        var last = out.slice(-1);
        if (MACRON[last]) out = out.slice(0, -1) + MACRON[last];
        i += 1; continue;
      }
      // small tsu: double the next consonant
      if (s[i] === 'っ' || s[i] === 'ッ') {
        var rest = kataToHira(s.substr(i + 1, 2));
        var nxt = COMBO[rest] || BASIC[rest[0]] || '';
        if (nxt) out += (nxt[0] === 'c' ? 't' : nxt[0]); // っち -> tchi
        i += 1; continue;
      }
      var hira2 = kataToHira(s.substr(i, 2));
      if (COMBO[hira2]) { out += COMBO[hira2]; i += 2; continue; }
      var hira1 = kataToHira(s[i]);
      if (BASIC[hira1]) {
        var r = BASIC[hira1];
        // Modified Hepburn: ん stays 'n' (shinbun, sanpo), but takes an
        // apostrophe before a vowel or y so ん+あ isn't read as な: shin'yū
        if (r === 'n') {
          var peek = kataToHira(s.substr(i + 1, 2));
          var nx = COMBO[peek] || BASIC[peek[0]] || '';
          if (nx && /^[aiueoy]/.test(nx)) r = "n'";
        }
        out += r;
        i += 1; continue;
      }
      out += s[i]; // punctuation, latin, anything unmapped
      i += 1;
    }

    // long vowels: ou/oo -> ō, uu -> ū, ii stays ii, ei stays ei, aa -> ā
    out = out
      .replace(/ou/g, 'ō')
      .replace(/oo/g, 'ō')
      .replace(/uu/g, 'ū')
      .replace(/aa/g, 'ā');
    if (isKatakana) out = out.replace(/ee/g, 'ē');

    return out;
  }

  window.toRomaji = toRomaji;
})();
