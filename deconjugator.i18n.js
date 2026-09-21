// deconjugator.i18n.js — UI strings for the reverse-conjugation drill.
// Loaded after i18n.js. German is the reviewed reference (Sie-form).
(function () {
  var S = {
    en: { dj_tag:'Practice', dj_title:'Find the Dictionary Form',
      dj_desc:'The Conjugator in reverse. You get a conjugated verb; you give the plain form it came from. Every answer shows the derivation, step by step.',
      dj_level:'Level', dj_forms:'Forms', dj_all:'All', dj_basic:'Basic',
      dj_inter:'Intermediate', dj_adv:'Advanced', dj_mixed:'Mixed',
      dj_hide:'Hide the form name', dj_ask:'What is the dictionary form?',
      dj_check:'Check', dj_next:'Next →', dj_right:'Correct', dj_wrong:'Not quite',
      dj_correct:'correct', dj_asked:'asked', dj_streak:'streak' },
    de: { dj_tag:'Üben', dj_title:'Die Wörterbuchform finden',
      dj_desc:'Der Konjugator rückwärts. Sie bekommen eine konjugierte Form und nennen die Grundform, aus der sie stammt. Jede Antwort zeigt die Herleitung Schritt für Schritt.',
      dj_level:'Niveau', dj_forms:'Formen', dj_all:'Alle', dj_basic:'Grundformen',
      dj_inter:'Mittelstufe', dj_adv:'Fortgeschritten', dj_mixed:'Gemischt',
      dj_hide:'Formnamen ausblenden', dj_ask:'Wie lautet die Wörterbuchform?',
      dj_check:'Prüfen', dj_next:'Weiter →', dj_right:'Richtig', dj_wrong:'Nicht ganz',
      dj_correct:'richtig', dj_asked:'gestellt', dj_streak:'Serie' },
    fr: { dj_tag:'Pratique', dj_title:'Retrouver la forme du dictionnaire',
      dj_desc:'Le conjugueur à l’envers. On vous donne une forme conjuguée, vous donnez la forme neutre dont elle vient. Chaque réponse montre la dérivation, étape par étape.',
      dj_level:'Niveau', dj_forms:'Formes', dj_all:'Toutes', dj_basic:'Base',
      dj_inter:'Intermédiaire', dj_adv:'Avancé', dj_mixed:'Mélangé',
      dj_hide:'Masquer le nom de la forme', dj_ask:'Quelle est la forme du dictionnaire ?',
      dj_check:'Vérifier', dj_next:'Suivant →', dj_right:'Correct', dj_wrong:'Pas tout à fait',
      dj_correct:'correct', dj_asked:'posées', dj_streak:'série' },
    zh: { dj_tag:'练习', dj_title:'还原词典形',
      dj_desc:'把变位工具反过来用。给你一个变化形，你说出它的原形。每道题都会逐步显示还原过程。',
      dj_level:'级别', dj_forms:'形式', dj_all:'全部', dj_basic:'基础',
      dj_inter:'中级', dj_adv:'高级', dj_mixed:'混合',
      dj_hide:'隐藏形式名称', dj_ask:'词典形是什么？',
      dj_check:'检查', dj_next:'下一题 →', dj_right:'正确', dj_wrong:'不对',
      dj_correct:'正确', dj_asked:'题数', dj_streak:'连对' }
  };
  for (var lang in S) {
    if (!I18N[lang]) I18N[lang] = {};
    for (var k in S[lang]) I18N[lang][k] = S[lang][k];
  }
})();
