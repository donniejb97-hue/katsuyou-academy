// dictionary.i18n.js — UI strings for the Dictionary page (dictionary.html).
// Loaded after i18n.js. German is the reviewed reference (Sie-form).
// The dictionary entries themselves come from JMdict and are English-only.
(function () {
  var S = {
    en: {
      dc_tag: 'Reference',
      dc_title: 'Dictionary',
      dc_desc: 'Thirty thousand common words, searchable in Japanese or English. Type a conjugated verb and it works backwards to the dictionary form, showing every step it took.',
      dc_placeholder: '食べる · たべる · to eat · 食べさせられなかった',
      dc_clear: 'Clear',
      dc_try: 'Try',
      dc_decon_h: 'Conjugated form — traced back',
      dc_loading: 'Loading the dictionary…',
      dc_prompt: 'Search for a word in Japanese or English.',
      dc_none: 'Nothing found. The dictionary covers about 30,000 common words, so rarer vocabulary may be missing.',
      dc_failed: 'The dictionary could not be loaded. Check your connection and try again.',
      dc_common: 'Common',
      dc_also: 'also',
      dc_conjugate: 'Conjugate this verb →',
      dc_allforms: 'See all forms →',
      dc_invocab: 'Find in vocabulary →',
      dc_results_one: '1 result',
      dc_results_many: '{n} results'
    },
    de: {
      dc_tag: 'Referenz',
      dc_title: 'Wörterbuch',
      dc_desc: 'Dreißigtausend gebräuchliche Wörter, auf Japanisch oder Englisch durchsuchbar. Geben Sie ein konjugiertes Verb ein, und es wird bis zur Wörterbuchform zurückverfolgt — mit jedem einzelnen Schritt.',
      dc_placeholder: '食べる · たべる · to eat · 食べさせられなかった',
      dc_clear: 'Leeren',
      dc_try: 'Probieren Sie',
      dc_decon_h: 'Konjugierte Form — zurückverfolgt',
      dc_loading: 'Wörterbuch wird geladen …',
      dc_prompt: 'Suchen Sie ein Wort auf Japanisch oder Englisch.',
      dc_none: 'Nichts gefunden. Das Wörterbuch umfasst rund 30.000 gebräuchliche Wörter; selteneres Vokabular kann fehlen.',
      dc_failed: 'Das Wörterbuch konnte nicht geladen werden. Bitte prüfen Sie Ihre Verbindung.',
      dc_common: 'Häufig',
      dc_also: 'auch',
      dc_conjugate: 'Dieses Verb konjugieren →',
      dc_allforms: 'Alle Formen ansehen →',
      dc_invocab: 'Im Wortschatz suchen →',
      dc_results_one: '1 Treffer',
      dc_results_many: '{n} Treffer'
    },
    fr: {
      dc_tag: 'Référence',
      dc_title: 'Dictionnaire',
      dc_desc: 'Trente mille mots courants, consultables en japonais ou en anglais. Saisissez un verbe conjugué et il est ramené à sa forme du dictionnaire, étape par étape.',
      dc_placeholder: '食べる · たべる · to eat · 食べさせられなかった',
      dc_clear: 'Effacer',
      dc_try: 'Essayez',
      dc_decon_h: 'Forme conjuguée — remontée à la source',
      dc_loading: 'Chargement du dictionnaire…',
      dc_prompt: 'Cherchez un mot en japonais ou en anglais.',
      dc_none: 'Aucun résultat. Le dictionnaire couvre environ 30 000 mots courants ; le vocabulaire plus rare peut manquer.',
      dc_failed: 'Le dictionnaire n’a pas pu être chargé. Vérifiez votre connexion.',
      dc_common: 'Courant',
      dc_also: 'aussi',
      dc_conjugate: 'Conjuguer ce verbe →',
      dc_allforms: 'Voir toutes les formes →',
      dc_invocab: 'Chercher dans le vocabulaire →',
      dc_results_one: '1 résultat',
      dc_results_many: '{n} résultats'
    },
    zh: {
      dc_tag: '参考',
      dc_title: '词典',
      dc_desc: '三万个常用词，可用日语或英语检索。输入一个变化形，它会一步步还原到词典形。',
      dc_placeholder: '食べる · たべる · to eat · 食べさせられなかった',
      dc_clear: '清除',
      dc_try: '试试',
      dc_decon_h: '变化形 — 还原过程',
      dc_loading: '正在加载词典…',
      dc_prompt: '用日语或英语搜索一个词。',
      dc_none: '没有找到。本词典收录约三万个常用词，较生僻的词汇可能没有收录。',
      dc_failed: '词典加载失败，请检查网络连接。',
      dc_common: '常用',
      dc_also: '又作',
      dc_conjugate: '变位这个动词 →',
      dc_allforms: '查看全部形式 →',
      dc_invocab: '在词汇表中查找 →',
      dc_results_one: '1 个结果',
      dc_results_many: '{n} 个结果'
    }
  };
  for (var lang in S) {
    if (!I18N[lang]) I18N[lang] = {};
    for (var k in S[lang]) I18N[lang][k] = S[lang][k];
  }
})();
