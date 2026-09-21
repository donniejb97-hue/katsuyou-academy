// deconjugate.js — turn a conjugated Japanese verb or adjective back into its
// dictionary form.
//
// The approach is deliberately dumb and therefore reliable: strip a known
// ending, rebuild every dictionary form that ending could have come from, and
// ask the dictionary which of those actually exists. Ambiguity is resolved by
// the dictionary rather than by cleverness, so 待って can propose 待つ, 待る and
// 待う and only 待つ survives.
//
// Because each step feeds the next, chains fall out for free:
//   食べさせられなかった → 食べさせられる → 食べさせる → 食べる
//
// Needs one callback: exists(word) -> boolean.
var KA_Deconjugate = (function () {

  // い-row → う-row (ます-stem back to dictionary form): 話し → 話す
  var I2U = { 'き':'く','ぎ':'ぐ','し':'す','ち':'つ','に':'ぬ',
              'び':'ぶ','み':'む','り':'る','い':'う' };
  // あ-row → う-row (ない/passive/causative stem): 話さ → 話す
  var A2U = { 'か':'く','が':'ぐ','さ':'す','た':'つ','な':'ぬ',
              'ば':'ぶ','ま':'む','ら':'る','わ':'う' };
  // え-row → う-row (potential / ば / imperative): 話せ → 話す
  var E2U = { 'け':'く','げ':'ぐ','せ':'す','て':'つ','ね':'ぬ',
              'べ':'ぶ','め':'む','れ':'る','え':'う' };
  // お-row → う-row (volitional): 話そ → 話す
  var O2U = { 'こ':'く','ご':'ぐ','そ':'す','と':'つ','の':'ぬ',
              'ぼ':'ぶ','も':'む','ろ':'る','お':'う' };

  function shift(stem, map) {
    if (!stem) return [];
    var last = stem.charAt(stem.length - 1);
    return map[last] ? [stem.slice(0, -1) + map[last]] : [];
  }

  // Each rule: [ending, how to rebuild candidates, label]
  // `ichidan: true` also proposes stem + る, because ichidan verbs drop their
  // る before almost everything and leave no trace of which verb they were.
  var RULES = [
    // --- polite ---
    ['ませんでした', s => shift(s, I2U), 'polite past negative', true],
    ['ましょう',   s => shift(s, I2U), 'polite volitional', true],
    ['ません',     s => shift(s, I2U), 'polite negative', true],
    ['ました',     s => shift(s, I2U), 'polite past', true],
    ['まして',     s => shift(s, I2U), 'polite て', true],
    ['ます',       s => shift(s, I2U), 'polite', true],

    // --- negative (ない behaves like an い-adjective, so it conjugates on) ---
    ['なくなかった', s => shift(s, A2U), 'negative', true],
    ['なければ',   s => shift(s, A2U), 'negative conditional', true],
    ['なかった',   s => shift(s, A2U), 'past negative', true],
    ['なくて',     s => shift(s, A2U), 'negative て', true],
    ['ないで',     s => shift(s, A2U), 'without doing', true],
    ['なく',       s => shift(s, A2U), 'negative adverbial', true],
    ['ない',       s => shift(s, A2U), 'negative', true],
    ['ず',         s => shift(s, A2U), 'negative (ず)', true],
    ['ぬ',         s => shift(s, A2U), 'negative (ぬ)', false],

    // --- て / た, with the godan sound changes reversed ---
    // って and んで are ambiguous on purpose; the dictionary picks the winner.
    ['いて', s => [s + 'く'], 'て form'],
    ['いで', s => [s + 'ぐ'], 'て form'],
    ['して', s => [s + 'す'], 'て form'],
    ['って', s => [s + 'つ', s + 'る', s + 'う'], 'て form'],
    ['んで', s => [s + 'む', s + 'ぶ', s + 'ぬ'], 'て form'],
    ['いた', s => [s + 'く'], 'past'],
    ['いだ', s => [s + 'ぐ'], 'past'],
    ['した', s => [s + 'す'], 'past'],
    ['った', s => [s + 'つ', s + 'る', s + 'う'], 'past'],
    ['んだ', s => [s + 'む', s + 'ぶ', s + 'ぬ'], 'past'],
    ['いたら', s => [s + 'く'], 'conditional (たら)'],
    ['いだら', s => [s + 'ぐ'], 'conditional (たら)'],
    ['したら', s => [s + 'す'], 'conditional (たら)'],
    ['ったら', s => [s + 'つ', s + 'る', s + 'う'], 'conditional (たら)'],
    ['んだら', s => [s + 'む', s + 'ぶ', s + 'ぬ'], 'conditional (たら)'],
    ['たら',   s => [s + 'る'], 'conditional (たら)', true],
    ['て',   s => [], 'て form', true],   // ichidan only: 食べて → 食べる
    ['た',   s => [], 'past', true],      // ichidan only: 食べた → 食べる

    // --- derived forms that are themselves verbs, so they chain ---
    ['させられる', s => shift(s, A2U), 'causative-passive', true],
    ['られる',     s => shift(s, A2U), 'passive / potential', true],
    ['させる',     s => shift(s, A2U), 'causative', true],
    ['される',     s => shift(s, A2U), 'causative-passive', false],
    ['せる',       s => shift(s, A2U), 'causative', true],
    ['れる',       s => shift(s, A2U).concat([s + 'る']), 'passive / potential', false],

    // --- potential, volitional, conditional, imperative ---
    ['よう',   s => [], 'volitional', true],
    ['う',     s => shift(s, O2U), 'volitional'],
    ['える',   s => shift(s + 'え', E2U), 'potential'],
    ['ける',   s => [s + 'く'], 'potential'],
    ['げる',   s => [s + 'ぐ'], 'potential'],
    ['せる',   s => [s + 'す'], 'potential'],
    ['てる',   s => [s + 'つ'], 'potential'],
    ['ねる',   s => [s + 'ぬ'], 'potential'],
    ['べる',   s => [s + 'ぶ'], 'potential'],
    ['める',   s => [s + 'む'], 'potential'],
    ['れば',   s => shift(s + 'れ', E2U).concat([s + 'る']), 'conditional (ば)'],
    ['えば',   s => [s + 'う'], 'conditional (ば)'],
    ['けば',   s => [s + 'く'], 'conditional (ば)'],
    ['げば',   s => [s + 'ぐ'], 'conditional (ば)'],
    ['ねば',   s => [s + 'ぬ'], 'conditional (ば)'],
    ['せば',   s => [s + 'す'], 'conditional (ば)'],
    ['てば',   s => [s + 'つ'], 'conditional (ば)'],
    ['めば',   s => [s + 'む'], 'conditional (ば)'],
    ['べば',   s => [s + 'ぶ'], 'conditional (ば)'],
    ['ろ',     s => [], 'imperative', true],
    ['け', s => [s + 'く'], 'imperative'], ['げ', s => [s + 'ぐ'], 'imperative'],
    ['せ', s => [s + 'す'], 'imperative'], ['て', s => [s + 'つ'], 'imperative'],
    ['ね', s => [s + 'ぬ'], 'imperative'], ['べ', s => [s + 'ぶ'], 'imperative'],
    ['め', s => [s + 'む'], 'imperative'], ['れ', s => [s + 'る'], 'imperative'],
    ['え', s => [s + 'う'], 'imperative'],

    // --- たい conjugates like an い-adjective ---
    ['たくなかった', s => shift(s, I2U), 'want to (past neg)', true],
    ['たくない',     s => shift(s, I2U), 'want to (negative)', true],
    ['たかった',     s => shift(s, I2U), 'want to (past)', true],
    ['たい',         s => shift(s, I2U), 'want to', true],

    // --- progressive: ている and its spoken contraction てる ---
    ['ている', s => [s + 'る'], 'progressive', true],
    ['でいる', s => [s + 'る'], 'progressive', true],
    ['てる',   s => [s + 'る'], 'progressive (spoken)', true],
    ['でる',   s => [s + 'る'], 'progressive (spoken)', true],

    // --- compound する verbs: 案内しない → 案内する ---
    // Each rule offers the bare noun as well, because JMdict lists 勉強 tagged
    // "vs" rather than carrying a separate 勉強する headword.
    ['しませんでした', s => [s + 'する', s], 'polite past negative (する)'],
    ['しましょう', s => [s + 'する', s], 'polite volitional (する)'],
    ['しなかった', s => [s + 'する', s], 'past negative (する)'],
    ['しません',   s => [s + 'する', s], 'polite negative (する)'],
    ['しました',   s => [s + 'する', s], 'polite past (する)'],
    ['させられる', s => [s + 'する', s], 'causative-passive (する)'],
    ['しなければ', s => [s + 'する', s], 'negative conditional (する)'],
    ['したくない', s => [s + 'する', s], 'want to, negative (する)'],
    ['しています', s => [s + 'する', s], 'progressive (する)'],
    ['できる',     s => [s + 'する', s], 'potential (する)'],
    ['される',     s => [s + 'する', s], 'passive (する)'],
    ['させる',     s => [s + 'する', s], 'causative (する)'],
    ['すれば',     s => [s + 'する', s], 'conditional (する)'],
    ['しよう',     s => [s + 'する', s], 'volitional (する)'],
    ['したら',     s => [s + 'する', s], 'conditional たら (する)'],
    ['したい',     s => [s + 'する', s], 'want to (する)'],
    ['しない',     s => [s + 'する', s], 'negative (する)'],
    ['します',     s => [s + 'する', s], 'polite (する)'],
    ['しろ',       s => [s + 'する', s], 'imperative (する)'],
    ['して',       s => [s + 'する', s], 'て form (する)'],
    ['した',       s => [s + 'する', s], 'past (する)'],

    // --- い-adjectives ---
    ['くなかった', s => [s + 'い'], 'adj. past negative'],
    ['くない',     s => [s + 'い'], 'adj. negative'],
    ['かった',     s => [s + 'い'], 'adj. past'],
    ['ければ',     s => [s + 'い'], 'adj. conditional'],
    ['くて',       s => [s + 'い'], 'adj. て form'],
    ['く',         s => [s + 'い'], 'adj. adverbial']
  ];

  // The two irregulars can't be derived by rule, so they're listed outright.
  var IRREGULAR = {
    'する':'する','します':'する','した':'する','して':'する','しない':'する',
    'しよう':'する','しろ':'する','できる':'する','される':'する','させる':'する',
    'したい':'する','したら':'する','しなかった':'する','しましょう':'する',
    'すれば':'する','しません':'する','しました':'する','しています':'する',
    '来る':'来る','来ます':'来る','来た':'来る','来て':'来る','来ない':'来る',
    '来よう':'来る','来い':'来る','来られる':'来る','来させる':'来る','来れば':'来る',
    'くる':'来る','きます':'来る','きた':'来る','きて':'来る','こない':'来る',
    'こよう':'来る','こい':'来る','こられる':'来る','こさせる':'来る','くれば':'来る',
    'ある':'ある','あります':'ある','あった':'ある','あって':'ある','ない':'ある',
    '行って':'行く','行った':'行く','行ったら':'行く',
    'いって':'いく','いった':'いく','いったら':'いく',
    'きたい':'来る','きたら':'来る','きません':'来る','きました':'来る',
    'きましょう':'来る','こなかった':'来る','きたくない':'来る','きています':'来る',
    '来たい':'来る','来たら':'来る','来ません':'来る','来ました':'来る',
    '来なかった':'来る','来ましょう':'来る',
    'いい':'いい','よい':'いい','よかった':'いい','よくない':'いい','よくて':'いい',
    'です':'です','でした':'です','だった':'だ','じゃない':'だ','ではない':'だ'
  };

  // Breadth-first: every rule that matches spawns candidates, and any candidate
  // the dictionary recognises is an answer. Depth is capped because chains like
  // 食べさせられなかった only ever need a handful of steps.
  function deconjugate(word, exists, maxDepth) {
    maxDepth = maxDepth || 5;
    var out = [], seenWord = {}, seenOut = {};
    var queue = [{ w: word, path: [], d: 0 }];

    if (IRREGULAR[word] && exists(IRREGULAR[word])) {
      out.push({ word: IRREGULAR[word], path: ['irregular'] });
      seenOut[IRREGULAR[word]] = true;
    }

    while (queue.length) {
      var cur = queue.shift();
      if (cur.d >= maxDepth) continue;
      if (seenWord[cur.w]) continue;
      seenWord[cur.w] = true;

      for (var i = 0; i < RULES.length; i++) {
        var end = RULES[i][0], make = RULES[i][1],
            label = RULES[i][2], ichidan = RULES[i][3];
        if (cur.w.length <= end.length) continue;
        if (cur.w.slice(-end.length) !== end) continue;

        var stem = cur.w.slice(0, -end.length);
        var cands = make(stem) || [];
        if (ichidan) cands = cands.concat([stem + 'る']);

        for (var j = 0; j < cands.length; j++) {
          var c = cands[j];
          if (!c || c === cur.w) continue;
          var path = cur.path.concat([label]);
          if (exists(c) && !seenOut[c]) {
            seenOut[c] = true;
            out.push({ word: c, path: path });
          }
          var irr = IRREGULAR[c];
          if (irr && irr !== c && exists(irr) && !seenOut[irr]) {
            seenOut[irr] = true;
            out.push({ word: irr, path: path.concat(['irregular']) });
          }
          queue.push({ w: c, path: path, d: cur.d + 1 });
        }
      }
    }
    // shortest derivation first — it's almost always the right one
    out.sort(function (a, b) { return a.path.length - b.path.length; });
    return out;
  }

  return { deconjugate: deconjugate, IRREGULAR: IRREGULAR };
})();

if (typeof module !== 'undefined') module.exports = KA_Deconjugate;
