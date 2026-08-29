// ============================================================
// I18N — Katsuyō Academy UI language layer (en / de / fr / zh-CN)
// German is the reviewed reference translation (Sie-form).
// ============================================================
var I18N = {
  en: {
    nav_home:'Home', nav_kana:'Kana', nav_learn:'Learn', nav_forms:'Forms', nav_verbs:'Verbs',
    nav_conjugator:'Conjugator', nav_kana_drill:'Kana Drill', nav_kanji_drill:'Kanji Drill',
    nav_dates:'Dates', nav_vocab:'Vocabulary', nav_kanji:'Kanji', nav_contact:'Contact',
    page_tag:'Interactive Practice', page_title:'Kana Drill',
    score:'Score', streak:'Streak', best:'Best',
    mode:'Mode', script:'Script', sets:'Sets', charts:'Charts',
    mode_k2r:'Kana → Rōmaji', mode_r2k:'Rōmaji → Kana', mixed:'Mixed',
    set_basic:'Basic (46)', set_dakuten:'Dakuten (25)', set_combos:'Combos (33)',
    sheet_h:'ひらがな Cheat Sheet', sheet_k:'カタカナ Cheat Sheet',
    hold_h:'Hold Alt+H to peek', hold_k:'Hold Alt+K to peek',
    tag_type_h:'Hiragana — type the reading', tag_type_k:'Katakana — type the reading',
    tag_pick_h:'Pick the hiragana', tag_pick_k:'Pick the katakana',
    placeholder:'Type the rōmaji…',
    check:'Check Answer', next:'Next Question →', skip:'Skip (show answer)', reset:'↺ Reset Score',
    fb_correct:'⭕ Correct!', fb_answer:'Answer:', fb_wrong:'❌ Not quite — the answer is:',
    missed_title:'📝 Missed this session — click to hear',
    click_hear:'Click to hear', hear_pron:'Hear pronunciation',
    cheat_hint:'Tap any kana to hear its pronunciation 🔊 &nbsp;·&nbsp; Hold Alt+H / Alt+K to peek',
    cheat_title_h:'Hiragana ひらがな', cheat_title_k:'Katakana カタカナ',
    cheat_basic:'Basic (46)', cheat_dakuten:'Dakuten & Handakuten (25)', cheat_combos:'Combos (33)',
    // ---- index ----
    hero_badge:'Japanese Study Toolkit',
    card_kana_t:"<span class=\"jp\" style=\"color: #d4786a;\">仮名</span> — Kana",
    card_kana_d:"Practice all <strong style=\"color: #d4786a;\">104 hiragana and katakana</strong> characters. Learn both Japanese writing systems side-by-side with <strong>audio pronunciation</strong>, clear charts for basic kana, dakuten (voiced sounds), and combination characters. Click any character to hear how it sounds.",
    card_kana_cta:"Learn Kana →",
    card_learn_t:"Learn",
    card_learn_d:"Clear, visual explanations of how Japanese verb conjugation actually works. Understand the <em>why</em> behind the patterns, not just the rules. Learn to identify verb types, understand the hiragana sound system, and see step-by-step walkthroughs of each conjugation type.",
    card_learn_cta:"Start Learning →",
    card_forms_t:"Forms",
    card_forms_d:"Comprehensive quick-reference conjugation charts covering 16 verb forms for all three verb types: Godan (五段), Ichidan (一段), and Suru (する). From basic forms (negative, polite, past) to advanced (passive, causative, conditional), color-coded tables show you exactly how each form is created. Perfect for quick lookups or comparing patterns side-by-side.",
    card_forms_cta:"View Forms →",
    card_verbs_t:"Verb List",
    card_verbs_d:"Browse all <strong>129 verbs</strong> in our database, organized by type (Godan, Ichidan, Suru) with kanji, hiragana, and English meanings. <strong>Search</strong> to find specific verbs instantly, or <strong>filter by JLPT level</strong> (N5, N4, N3) to focus on vocabulary appropriate for your level.",
    card_verbs_cta:"Browse Verbs →",
    card_conj_t:"The Conjugator",
    card_conj_d:"The heart of Katsuyō Academy. Practice conjugating verbs across <strong>16 different forms</strong> with instant feedback. Choose <strong>Random modes by difficulty</strong> (Basic/Intermediate/Advanced) or focus on specific forms. <strong>Filter by JLPT level</strong> to match your study goals. Get <strong>detailed hints</strong> showing exact rules and examples, plus <strong>error explanations</strong> when you make mistakes. <strong>Skip</strong> questions without penalty when stuck. Your <strong>progress saves automatically</strong>, and the <strong>Practice Report</strong> shows your statistics and weak areas.",
    card_conj_cta:"Start Practicing →",
    card_dojo_t:"<span class=\"jp\">日付</span> — Dates & Numbers",
    card_dojo_d:"Practice Japanese dates, weekdays, months, and numbers. Questions cover today's date, future/past calculations, relative days (<span class=\"jp\">きのう</span>, <span class=\"jp\">あした</span>), and large numbers. <strong style=\"color: #ff6b6b;\">Full sentence answers required</strong> — build proper grammar habits with です and でした endings. Includes a handy <strong style=\"color: #ff6b6b;\">reference chart</strong> for the tricky readings.",
    card_dojo_cta:"Enter the Dojo →",
    card_vocab_t:"<span class=\"jp\" style=\"color: #d4786a;\">単語</span> — Vocabulary",
    card_vocab_d:"Practice <strong style=\"color: #d4786a;\">496 essential Japanese words</strong> with intelligent flashcards. Study with <strong>hiragana, kanji, and katakana</strong> across <strong style=\"color: #d4786a;\">8 different learning modes</strong>. Toggle between Japanese→English or English→Japanese practice, show/hide kanji and katakana readings, and see both scripts side-by-side. <strong>Smart shuffle prioritizes unseen cards</strong>, progress tracking shows cards studied, and the beautiful vintage design makes learning engaging.",
    card_vocab_cta:"Start Learning Words →",
    card_kanji_t:"<span class=\"jp\" style=\"color: #e94560;\">漢字</span> — Kanji",
    card_kanji_d:"Practice <strong style=\"color: #e94560;\">2,300 kanji</strong> from the acclaimed <strong>Kodansha Learner's Course</strong>. Each card shows the kanji character, English keyword, <strong style=\"color: #ff6b6b;\">on'yomi</strong> and <strong style=\"color: #4ecdc4;\">kun'yomi</strong> readings, plus <strong>example vocabulary</strong> with meanings. Filter by level (Beginner, Intermediate, Advanced), <strong>shuffle cards</strong>, or <strong>jump to any KLC number</strong>. Keyboard shortcuts included!",
    card_kanji_cta:"Learn Kanji →",
    btn_start_kana:'Start with Kana', btn_explore_kanji:'Explore Kanji',
    btn_learn_basics:'Learn the Basics', btn_practice_conj:'Practice Conjugation',
    toolkit_title:'The Toolkit',
    toolkit_sub:'Six interconnected tools covering the foundations of Japanese',
    // ---- kanji drill ----
    kd_title:'Kanji Drill', mode_k2w:'Kanji → Keyword', mode_w2k:'Keyword → Kanji',
    range:'Range', kd_placeholder:'Type the keyword in English…', kd_missed:'📝 Missed this session',
    // ---- vocabulary ----
    show_romaji:'Show Rōmaji', show_en_first:'Show Translation First', show_kanji:'Show Kanji', show_katakana:'Show Katakana',
    prev_card:'← Previous', next_card:'Next →', shuffle:'🔀 Shuffle',
    cards_studied:'Cards Studied', total_cards:'Total Cards',
    // ---- kanji browser ----
    kanji_sub:"Practice 2,300 Kanji from the Kodansha Learner's Course",
    filter_all:'All (2300)', filter_beginner:'Beginner (1-500)',
    filter_intermediate:'Intermediate (501-1200)', filter_advanced:'Advanced (1201-2300)',
    onyomi:"On'yomi", kunyomi:"Kun'yomi",
    kanji_prev:'◀ Previous', kanji_next:'Next ▶', goto_klc:'📍 Go To KLC #',
    goto_placeholder:'Enter 1-2300', cancel:'Cancel', go:'Go',
    // ---- kana reference ----
    quick_guide:'📖 Quick Guide', basic_kana_h:'Basic Kana (五十音 Gojūon)',
    dakuten_h:'Dakuten (濁点) — Voiced Sounds', yoon_h:'Combination Sounds (拗音 Yōon)',
    // ---- learn / forms ----
    learn_tag:'Understanding Conjugation', learn_title:'How Japanese Verbs Work',
    forms_tag:'Quick Reference', forms_title:'Verb Forms & Adjectives',
    // ---- date dojo ----
    dojo_sub:'Date & Number Practice', today_q:"What is today's date?", review_h:'📋 復習 (Review)',
    // ---- about ----
    get_in_touch:'Get in Touch',
    proverb_tr:'"A journey of a thousand miles begins with a single step."',
    about_p1:'Hi, I\'m <strong style="color: #fff;">Brandon</strong>. I built this site because I wanted a clean, focused place to study Japanese without ads or distractions. Everything here is free and always will be.',
    about_p2:'This is an ongoing project, and your feedback helps make it better. If you run into any bugs, notice incorrect information, have ideas for new features, or just want to share your thoughts — please reach out. I genuinely appreciate hearing from people who use the site, whether it\'s a quick note or detailed feedback.',
    send_message_h:'Send a Message',
    your_name:'Your Name', your_email:'Your Email', subject:'Subject', message:'Message',
    opt_general:'General Question', opt_bug:'Bug Report', opt_feature:'Feature Request',
    opt_correction:'Content Correction', opt_other:'Other',
    msg_placeholder:'Your message...', send_btn:'Send Message', or_email:'Or email directly:',
    // ---- conjugator ----
    conj_title:'The Conjugator', view_report:'📊 View Report', reset_short:'↺ Reset',
    og_random:'🎲 Random Modes', og_basic:'📚 Basic Forms (N5)',
    og_intermediate:'🎯 Intermediate Forms (N4)', og_advanced:'🔥 Advanced Forms (N3+)',
    f_random:'Random (All Forms)', f_random_basic:'Random (Basic Only)',
    f_random_int:'Random (Intermediate)', f_random_adv:'Random (Advanced)',
    f_masu:'Polite (ます)', f_negative:'Negative (ない)', f_past:'Past (た)', f_te:'Te-form (て)',
    f_masen:'Polite Negative (ません)', f_mashita:'Polite Past (ました)', f_nakatta:'Negative Past (なかった)',
    f_tai:'Want to (たい)', f_potential:'Potential (られる/える)', f_volitional:'Volitional (よう/おう)',
    f_ba:'Conditional (ば)', f_tara:'Conditional (たら)', f_imperative:'Imperative (命令形)',
    f_passive:'Passive (られる/あれる)', f_causative:'Causative (させる/あせる)',
    f_caus_pass:'Causative-Passive (させられる)',
    jlpt_all:'All Levels', jlpt_n5:'N5 Only', jlpt_n4:'N4 Only', jlpt_n3:'N3 Only', jlpt_n54:'N5 + N4',
    show_hint:'💡 Show hint', hint_label:'💡 Hint',
    warn_try_again:'⚠️ Not quite — try again!', more_examples:'📚 Show More Examples'
  },
  de: {
    nav_home:'Start', nav_kana:'Kana', nav_learn:'Lernen', nav_forms:'Formen', nav_verbs:'Verben',
    nav_conjugator:'Konjugator', nav_kana_drill:'Kana-Drill', nav_kanji_drill:'Kanji-Drill',
    nav_dates:'Datum', nav_vocab:'Vokabeln', nav_kanji:'Kanji', nav_contact:'Kontakt',
    page_tag:'Interaktive Übung', page_title:'Kana-Drill',
    score:'Punkte', streak:'Serie', best:'Rekord',
    mode:'Modus', script:'Schrift', sets:'Gruppen', charts:'Tabellen',
    mode_k2r:'Kana → Rōmaji', mode_r2k:'Rōmaji → Kana', mixed:'Gemischt',
    set_basic:'Grundzeichen (46)', set_dakuten:'Dakuten (25)', set_combos:'Kombinationen (33)',
    sheet_h:'ひらがな Spickzettel', sheet_k:'カタカナ Spickzettel',
    hold_h:'Alt+H gedrückt halten für Schnellansicht', hold_k:'Alt+K gedrückt halten für Schnellansicht',
    tag_type_h:'Hiragana — Lesung eintippen', tag_type_k:'Katakana — Lesung eintippen',
    tag_pick_h:'Wählen Sie das Hiragana', tag_pick_k:'Wählen Sie das Katakana',
    placeholder:'Rōmaji eingeben …',
    check:'Antwort prüfen', next:'Nächste Frage →', skip:'Überspringen (Antwort zeigen)', reset:'↺ Punkte zurücksetzen',
    fb_correct:'⭕ Richtig!', fb_answer:'Antwort:', fb_wrong:'❌ Nicht ganz — die richtige Antwort ist:',
    missed_title:'📝 In dieser Runde verfehlt — zum Anhören klicken',
    click_hear:'Zum Anhören klicken', hear_pron:'Aussprache anhören',
    cheat_hint:'Klicken Sie ein Kana an, um die Aussprache zu hören 🔊 &nbsp;·&nbsp; Alt+H / Alt+K gedrückt halten für Schnellansicht',
    cheat_title_h:'Hiragana ひらがな', cheat_title_k:'Katakana カタカナ',
    cheat_basic:'Grundzeichen (46)', cheat_dakuten:'Dakuten & Handakuten (25)', cheat_combos:'Kombinationen (33)',
    hero_badge:'Japanisch-Lernwerkzeuge',
    card_kana_t:"<span class=\"jp\" style=\"color: #d4786a;\">仮名</span> — Kana",
    card_kana_d:"Üben Sie alle <strong style=\"color: #d4786a;\">104 Hiragana- und Katakana-Zeichen</strong>. Lernen Sie beide japanischen Schriftsysteme nebeneinander — mit <strong>Audio-Aussprache</strong> und übersichtlichen Tabellen für Grundzeichen, Dakuten (stimmhafte Laute) und Kombinationszeichen. Klicken Sie ein Zeichen an, um es zu hören.",
    card_kana_cta:"Kana lernen →",
    card_learn_t:"Lernen",
    card_learn_d:"Klare, visuelle Erklärungen, wie die japanische Verbkonjugation wirklich funktioniert. Verstehen Sie das <em>Warum</em> hinter den Mustern, nicht nur die Regeln. Lernen Sie, Verbtypen zu erkennen, verstehen Sie das Hiragana-Lautsystem und folgen Sie Schritt-für-Schritt-Anleitungen zu jeder Konjugationsart.",
    card_learn_cta:"Jetzt lernen →",
    card_forms_t:"Formen",
    card_forms_d:"Umfassende Schnellreferenz-Tabellen zu 16 Verbformen für alle drei Verbtypen: Godan (五段), Ichidan (一段) und Suru (する). Von Grundformen (Verneinung, Höflichkeitsform, Vergangenheit) bis zu fortgeschrittenen Formen (Passiv, Kausativ, Konditional) zeigen farbcodierte Tabellen genau, wie jede Form gebildet wird. Ideal zum schnellen Nachschlagen und Vergleichen.",
    card_forms_cta:"Formen ansehen →",
    card_verbs_t:"Verbliste",
    card_verbs_d:"Durchsuchen Sie alle <strong>129 Verben</strong> unserer Datenbank, geordnet nach Typ (Godan, Ichidan, Suru), mit Kanji, Hiragana und englischen Bedeutungen. Finden Sie Verben sofort per <strong>Suche</strong> oder <strong>filtern Sie nach JLPT-Stufe</strong> (N5, N4, N3), passend zu Ihrem Niveau.",
    card_verbs_cta:"Verben durchsuchen →",
    card_conj_t:"Der Konjugator",
    card_conj_d:"Das Herzstück der Katsuyō Academy. Üben Sie die Konjugation von Verben in <strong>16 verschiedenen Formen</strong> mit sofortigem Feedback. Wählen Sie <strong>Zufallsmodi nach Schwierigkeit</strong> (Grundstufe/Mittelstufe/Fortgeschritten) oder konzentrieren Sie sich auf einzelne Formen. <strong>Filtern Sie nach JLPT-Stufe</strong>, passend zu Ihren Lernzielen. Erhalten Sie <strong>ausführliche Hinweise</strong> mit Regeln und Beispielen sowie <strong>Fehlererklärungen</strong>, wenn etwas schiefgeht. <strong>Überspringen</strong> Sie Fragen ohne Abzug, wenn Sie feststecken. Ihr <strong>Fortschritt wird automatisch gespeichert</strong>, und der <strong>Übungsbericht</strong> zeigt Ihre Statistiken und Schwachstellen.",
    card_conj_cta:"Jetzt üben →",
    card_dojo_t:"<span class=\"jp\">日付</span> — Datum & Zahlen",
    card_dojo_d:"Üben Sie japanische Datumsangaben, Wochentage, Monate und Zahlen. Die Fragen umfassen das heutige Datum, Berechnungen in Zukunft und Vergangenheit, relative Tage (<span class=\"jp\">きのう</span>, <span class=\"jp\">あした</span>) und große Zahlen. <strong style=\"color: #ff6b6b;\">Antworten in ganzen Sätzen erforderlich</strong> — so trainieren Sie korrekte Grammatik mit です und でした. Mit praktischer <strong style=\"color: #ff6b6b;\">Referenztabelle</strong> für die kniffligen Lesungen.",
    card_dojo_cta:"Betreten Sie das Dōjō →",
    card_vocab_t:"<span class=\"jp\" style=\"color: #d4786a;\">単語</span> — Vokabeln",
    card_vocab_d:"Üben Sie <strong style=\"color: #d4786a;\">496 wichtige japanische Wörter</strong> mit intelligenten Karteikarten. Lernen Sie mit <strong>Hiragana, Kanji und Katakana</strong> in <strong style=\"color: #d4786a;\">8 verschiedenen Lernmodi</strong>. Wechseln Sie zwischen Japanisch→Englisch und Englisch→Japanisch, blenden Sie Kanji- und Katakana-Lesungen ein oder aus und sehen Sie beide Schriften nebeneinander. <strong>Intelligentes Mischen bevorzugt ungesehene Karten</strong>, die Fortschrittsanzeige zählt gelernte Karten, und das schöne Vintage-Design macht das Lernen ansprechend.",
    card_vocab_cta:"Vokabeln lernen →",
    card_kanji_t:"<span class=\"jp\" style=\"color: #e94560;\">漢字</span> — Kanji",
    card_kanji_d:"Üben Sie <strong style=\"color: #e94560;\">2.300 Kanji</strong> aus dem renommierten <strong>Kodansha Learner’s Course</strong>. Jede Karte zeigt das Kanji, das englische Schlüsselwort, die Lesungen <strong style=\"color: #ff6b6b;\">On’yomi</strong> und <strong style=\"color: #4ecdc4;\">Kun’yomi</strong> sowie <strong>Beispielvokabeln</strong> mit Bedeutungen. Filtern Sie nach Stufe (Anfänger, Mittelstufe, Fortgeschritten), <strong>mischen Sie die Karten</strong> oder <strong>springen Sie zu jeder KLC-Nummer</strong>. Inklusive Tastaturkürzel!",
    card_kanji_cta:"Kanji lernen →",
    btn_start_kana:'Mit Kana beginnen', btn_explore_kanji:'Kanji entdecken',
    btn_learn_basics:'Grundlagen lernen', btn_practice_conj:'Konjugation üben',
    toolkit_title:'Die Werkzeuge',
    toolkit_sub:'Sechs miteinander verbundene Werkzeuge für die Grundlagen des Japanischen',
    kd_title:'Kanji-Drill', mode_k2w:'Kanji → Schlüsselwort', mode_w2k:'Schlüsselwort → Kanji',
    range:'Bereich', kd_placeholder:'Schlüsselwort auf Englisch eingeben …', kd_missed:'📝 In dieser Runde verfehlt',
    show_romaji:'Rōmaji zeigen', show_en_first:'Zuerst Übersetzung zeigen', show_kanji:'Kanji zeigen', show_katakana:'Katakana zeigen',
    prev_card:'← Zurück', next_card:'Weiter →', shuffle:'🔀 Mischen',
    cards_studied:'Gelernte Karten', total_cards:'Karten gesamt',
    kanji_sub:'Üben Sie 2.300 Kanji aus dem Kodansha Learner\u2019s Course',
    filter_all:'Alle (2300)', filter_beginner:'Anfänger (1–500)',
    filter_intermediate:'Mittelstufe (501–1200)', filter_advanced:'Fortgeschritten (1201–2300)',
    onyomi:"On'yomi", kunyomi:"Kun'yomi",
    kanji_prev:'◀ Zurück', kanji_next:'Weiter ▶', goto_klc:'📍 Zu KLC-Nr.',
    goto_placeholder:'1–2300 eingeben', cancel:'Abbrechen', go:'Los',
    quick_guide:'📖 Kurzübersicht', basic_kana_h:'Grundzeichen (五十音 Gojūon)',
    dakuten_h:'Dakuten (濁点) — stimmhafte Laute', yoon_h:'Kombinationslaute (拗音 Yōon)',
    learn_tag:'Konjugation verstehen', learn_title:'So funktionieren japanische Verben',
    forms_tag:'Schnellreferenz', forms_title:'Verbformen & Adjektive',
    dojo_sub:'Datums- und Zahlenübung', today_q:'Welches Datum ist heute?', review_h:'📋 復習 (Wiederholung)',
    get_in_touch:'Kontakt aufnehmen',
    proverb_tr:'„Auch eine Reise von tausend Meilen beginnt mit dem ersten Schritt."',
    about_p1:'Hallo, ich bin <strong style="color: #fff;">Brandon</strong>. Ich habe diese Seite gebaut, weil ich einen aufgeräumten, fokussierten Ort zum Japanischlernen wollte — ohne Werbung und Ablenkung. Alles hier ist kostenlos und wird es immer bleiben.',
    about_p2:'Diese Seite ist ein fortlaufendes Projekt, und Ihr Feedback macht sie besser. Wenn Sie auf Fehler stoßen, falsche Informationen bemerken, Ideen für neue Funktionen haben oder einfach Ihre Gedanken teilen möchten — melden Sie sich gerne. Ich freue mich aufrichtig über Nachrichten von Menschen, die diese Seite nutzen, ob kurze Notiz oder ausführliches Feedback.',
    send_message_h:'Nachricht senden',
    your_name:'Ihr Name', your_email:'Ihre E-Mail', subject:'Betreff', message:'Nachricht',
    opt_general:'Allgemeine Frage', opt_bug:'Fehlermeldung', opt_feature:'Funktionswunsch',
    opt_correction:'Inhaltliche Korrektur', opt_other:'Sonstiges',
    msg_placeholder:'Ihre Nachricht …', send_btn:'Nachricht absenden', or_email:'Oder direkt per E-Mail:',
    conj_title:'Der Konjugator', view_report:'📊 Bericht ansehen', reset_short:'↺ Zurücksetzen',
    og_random:'🎲 Zufallsmodi', og_basic:'📚 Grundformen (N5)',
    og_intermediate:'🎯 Mittelstufe (N4)', og_advanced:'🔥 Fortgeschritten (N3+)',
    f_random:'Zufällig (alle Formen)', f_random_basic:'Zufällig (nur Grundformen)',
    f_random_int:'Zufällig (Mittelstufe)', f_random_adv:'Zufällig (Fortgeschritten)',
    f_masu:'Höflichkeitsform (ます)', f_negative:'Verneinung (ない)', f_past:'Vergangenheit (た)', f_te:'Te-Form (て)',
    f_masen:'Höfliche Verneinung (ません)', f_mashita:'Höfliche Vergangenheit (ました)', f_nakatta:'Verneinte Vergangenheit (なかった)',
    f_tai:'Wunschform (たい)', f_potential:'Potenzialform (られる/える)', f_volitional:'Volitionalform (よう/おう)',
    f_ba:'Konditional (ば)', f_tara:'Konditional (たら)', f_imperative:'Imperativ (命令形)',
    f_passive:'Passiv (られる/あれる)', f_causative:'Kausativ (させる/あせる)',
    f_caus_pass:'Kausativ-Passiv (させられる)',
    jlpt_all:'Alle Stufen', jlpt_n5:'Nur N5', jlpt_n4:'Nur N4', jlpt_n3:'Nur N3', jlpt_n54:'N5 + N4',
    show_hint:'💡 Hinweis zeigen', hint_label:'💡 Hinweis',
    warn_try_again:'⚠️ Nicht ganz — versuchen Sie es noch einmal!', more_examples:'📚 Mehr Beispiele zeigen'
  },
  fr: {
    nav_home:'Accueil', nav_kana:'Kana', nav_learn:'Apprendre', nav_forms:'Formes', nav_verbs:'Verbes',
    nav_conjugator:'Conjugueur', nav_kana_drill:'Drill kana', nav_kanji_drill:'Drill kanji',
    nav_dates:'Dates', nav_vocab:'Vocabulaire', nav_kanji:'Kanji', nav_contact:'Contact',
    page_tag:'Entraînement interactif', page_title:'Drill Kana',
    score:'Score', streak:'Série', best:'Record',
    mode:'Mode', script:'Écriture', sets:'Groupes', charts:'Tableaux',
    mode_k2r:'Kana → Rōmaji', mode_r2k:'Rōmaji → Kana', mixed:'Mixte',
    set_basic:'Base (46)', set_dakuten:'Dakuten (25)', set_combos:'Combinaisons (33)',
    sheet_h:'Aide-mémoire ひらがな', sheet_k:'Aide-mémoire カタカナ',
    hold_h:'Maintenez Alt+H pour afficher', hold_k:'Maintenez Alt+K pour afficher',
    tag_type_h:'Hiragana — tapez la lecture', tag_type_k:'Katakana — tapez la lecture',
    tag_pick_h:'Choisissez le hiragana', tag_pick_k:'Choisissez le katakana',
    placeholder:'Tapez le rōmaji…',
    check:'Vérifier', next:'Question suivante →', skip:'Passer (voir la réponse)', reset:'↺ Réinitialiser le score',
    fb_correct:'⭕ Correct !', fb_answer:'Réponse :', fb_wrong:'❌ Pas tout à fait — la réponse est :',
    missed_title:'📝 Manqués cette session — cliquez pour écouter',
    click_hear:'Cliquez pour écouter', hear_pron:'Écouter la prononciation',
    cheat_hint:'Touchez un kana pour entendre sa prononciation 🔊 &nbsp;·&nbsp; Maintenez Alt+H / Alt+K pour afficher',
    cheat_title_h:'Hiragana ひらがな', cheat_title_k:'Katakana カタカナ',
    cheat_basic:'Base (46)', cheat_dakuten:'Dakuten et handakuten (25)', cheat_combos:'Combinaisons (33)',
    hero_badge:'Boîte à outils pour le japonais',
    card_kana_t:"<span class=\"jp\" style=\"color: #d4786a;\">仮名</span> — Kana",
    card_kana_d:"Pratiquez les <strong style=\"color: #d4786a;\">104 caractères hiragana et katakana</strong>. Apprenez les deux systèmes d'écriture japonais côte à côte, avec <strong>prononciation audio</strong> et des tableaux clairs pour les kana de base, les dakuten (sons voisés) et les combinaisons. Cliquez sur un caractère pour l'écouter.",
    card_kana_cta:"Apprendre les kana →",
    card_learn_t:"Apprendre",
    card_learn_d:"Des explications claires et visuelles du fonctionnement réel de la conjugaison japonaise. Comprenez le <em>pourquoi</em> derrière les schémas, pas seulement les règles. Apprenez à identifier les types de verbes, comprenez le système sonore des hiragana et suivez chaque type de conjugaison pas à pas.",
    card_learn_cta:"Commencer →",
    card_forms_t:"Formes",
    card_forms_d:"Des tableaux de référence complets couvrant 16 formes verbales pour les trois types de verbes : Godan (五段), Ichidan (一段) et Suru (する). Des formes de base (négatif, poli, passé) aux formes avancées (passif, causatif, conditionnel), des tableaux en couleurs montrent exactement comment chaque forme se construit. Parfait pour une consultation rapide ou une comparaison côte à côte.",
    card_forms_cta:"Voir les formes →",
    card_verbs_t:"Liste de verbes",
    card_verbs_d:"Parcourez les <strong>129 verbes</strong> de notre base, classés par type (Godan, Ichidan, Suru) avec kanji, hiragana et sens en anglais. <strong>Recherchez</strong> un verbe instantanément ou <strong>filtrez par niveau JLPT</strong> (N5, N4, N3) pour travailler le vocabulaire de votre niveau.",
    card_verbs_cta:"Parcourir les verbes →",
    card_conj_t:"Le Conjugueur",
    card_conj_d:"Le cœur de Katsuyō Academy. Entraînez-vous à conjuguer sur <strong>16 formes différentes</strong> avec un retour instantané. Choisissez les <strong>modes aléatoires par difficulté</strong> (base/intermédiaire/avancé) ou ciblez des formes précises. <strong>Filtrez par niveau JLPT</strong> selon vos objectifs. Profitez d'<strong>indices détaillés</strong> avec règles et exemples, et d'<strong>explications des erreurs</strong> en cas de faute. <strong>Passez</strong> une question sans pénalité si vous bloquez. Votre <strong>progression est sauvegardée automatiquement</strong>, et le <strong>rapport d'entraînement</strong> montre vos statistiques et points faibles.",
    card_conj_cta:"Commencer à pratiquer →",
    card_dojo_t:"<span class=\"jp\">日付</span> — Dates et nombres",
    card_dojo_d:"Pratiquez les dates, jours de la semaine, mois et nombres japonais. Les questions couvrent la date du jour, les calculs futur/passé, les jours relatifs (<span class=\"jp\">きのう</span>, <span class=\"jp\">あした</span>) et les grands nombres. <strong style=\"color: #ff6b6b;\">Réponses en phrases complètes exigées</strong> — prenez de bonnes habitudes grammaticales avec です et でした. Avec un <strong style=\"color: #ff6b6b;\">tableau de référence</strong> pratique pour les lectures difficiles.",
    card_dojo_cta:"Entrez dans le dōjō →",
    card_vocab_t:"<span class=\"jp\" style=\"color: #d4786a;\">単語</span> — Vocabulaire",
    card_vocab_d:"Pratiquez <strong style=\"color: #d4786a;\">496 mots japonais essentiels</strong> avec des cartes intelligentes. Étudiez avec <strong>hiragana, kanji et katakana</strong> dans <strong style=\"color: #d4786a;\">8 modes d'apprentissage</strong>. Alternez entre japonais→anglais et anglais→japonais, affichez ou masquez les lectures en kanji et katakana, et visualisez les deux écritures côte à côte. <strong>Le mélange intelligent privilégie les cartes non vues</strong>, le suivi de progression compte les cartes étudiées, et le beau design vintage rend l'apprentissage agréable.",
    card_vocab_cta:"Apprendre du vocabulaire →",
    card_kanji_t:"<span class=\"jp\" style=\"color: #e94560;\">漢字</span> — Kanji",
    card_kanji_d:"Pratiquez <strong style=\"color: #e94560;\">2 300 kanji</strong> du célèbre <strong>Kodansha Learner’s Course</strong>. Chaque carte montre le kanji, le mot-clé en anglais, les lectures <strong style=\"color: #ff6b6b;\">on’yomi</strong> et <strong style=\"color: #4ecdc4;\">kun’yomi</strong>, ainsi que du <strong>vocabulaire d'exemple</strong> avec sa signification. Filtrez par niveau (débutant, intermédiaire, avancé), <strong>mélangez les cartes</strong> ou <strong>sautez à n'importe quel numéro KLC</strong>. Raccourcis clavier inclus !",
    card_kanji_cta:"Apprendre les kanji →",
    btn_start_kana:'Commencer par les kana', btn_explore_kanji:'Explorer les kanji',
    btn_learn_basics:'Apprendre les bases', btn_practice_conj:'Pratiquer la conjugaison',
    toolkit_title:'La boîte à outils',
    toolkit_sub:'Six outils complémentaires couvrant les bases du japonais',
    kd_title:'Drill Kanji', mode_k2w:'Kanji → mot-clé', mode_w2k:'Mot-clé → kanji',
    range:'Plage', kd_placeholder:'Tapez le mot-clé en anglais…', kd_missed:'📝 Manqués cette session',
    show_romaji:'Afficher les rōmaji', show_en_first:'Afficher la traduction d\u2019abord', show_kanji:'Afficher les kanji', show_katakana:'Afficher les katakana',
    prev_card:'← Précédent', next_card:'Suivant →', shuffle:'🔀 Mélanger',
    cards_studied:'Cartes étudiées', total_cards:'Total des cartes',
    kanji_sub:'Pratiquez 2 300 kanji du Kodansha Learner\u2019s Course',
    filter_all:'Tous (2300)', filter_beginner:'Débutant (1-500)',
    filter_intermediate:'Intermédiaire (501-1200)', filter_advanced:'Avancé (1201-2300)',
    onyomi:"On'yomi", kunyomi:"Kun'yomi",
    kanji_prev:'◀ Précédent', kanji_next:'Suivant ▶', goto_klc:'📍 Aller au n° KLC',
    goto_placeholder:'Entrez 1-2300', cancel:'Annuler', go:'Aller',
    quick_guide:'📖 Guide rapide', basic_kana_h:'Kana de base (五十音 Gojūon)',
    dakuten_h:'Dakuten (濁点) — sons voisés', yoon_h:'Sons combinés (拗音 Yōon)',
    learn_tag:'Comprendre la conjugaison', learn_title:'Le fonctionnement des verbes japonais',
    forms_tag:'Référence rapide', forms_title:'Formes verbales et adjectifs',
    dojo_sub:'Pratique des dates et des nombres', today_q:"Quelle est la date d'aujourd'hui ?", review_h:'📋 復習 (Révision)',
    get_in_touch:'Prendre contact',
    proverb_tr:'« Un voyage de mille lieues commence toujours par un premier pas. »',
    about_p1:'Bonjour, je suis <strong style="color: #fff;">Brandon</strong>. J\'ai créé ce site parce que je voulais un endroit épuré et sans distraction pour étudier le japonais, sans publicité. Tout ici est gratuit et le restera toujours.',
    about_p2:'Ce site est un projet en cours, et vos retours l\'améliorent. Si vous rencontrez un bug, remarquez une information incorrecte, avez des idées de nouvelles fonctionnalités ou souhaitez simplement partager votre avis — n\'hésitez pas à m\'écrire. J\'apprécie sincèrement les messages des personnes qui utilisent le site, qu\'il s\'agisse d\'un petit mot ou d\'un retour détaillé.',
    send_message_h:'Envoyer un message',
    your_name:'Votre nom', your_email:'Votre e-mail', subject:'Objet', message:'Message',
    opt_general:'Question générale', opt_bug:'Signalement de bug', opt_feature:'Suggestion de fonctionnalité',
    opt_correction:'Correction de contenu', opt_other:'Autre',
    msg_placeholder:'Votre message…', send_btn:'Envoyer', or_email:'Ou par e-mail directement :',
    conj_title:'Le Conjugueur', view_report:'📊 Voir le rapport', reset_short:'↺ Réinitialiser',
    og_random:'🎲 Modes aléatoires', og_basic:'📚 Formes de base (N5)',
    og_intermediate:'🎯 Formes intermédiaires (N4)', og_advanced:'🔥 Formes avancées (N3+)',
    f_random:'Aléatoire (toutes les formes)', f_random_basic:'Aléatoire (base seulement)',
    f_random_int:'Aléatoire (intermédiaire)', f_random_adv:'Aléatoire (avancé)',
    f_masu:'Forme polie (ます)', f_negative:'Forme négative (ない)', f_past:'Passé (た)', f_te:'Forme en te (て)',
    f_masen:'Négatif poli (ません)', f_mashita:'Passé poli (ました)', f_nakatta:'Passé négatif (なかった)',
    f_tai:'Désir (たい)', f_potential:'Potentiel (られる/える)', f_volitional:'Volitif (よう/おう)',
    f_ba:'Conditionnel (ば)', f_tara:'Conditionnel (たら)', f_imperative:'Impératif (命令形)',
    f_passive:'Passif (られる/あれる)', f_causative:'Causatif (させる/あせる)',
    f_caus_pass:'Causatif-passif (させられる)',
    jlpt_all:'Tous les niveaux', jlpt_n5:'N5 seulement', jlpt_n4:'N4 seulement', jlpt_n3:'N3 seulement', jlpt_n54:'N5 + N4',
    show_hint:"💡 Afficher l'indice", hint_label:'💡 Indice',
    warn_try_again:'⚠️ Pas tout à fait — réessayez !', more_examples:"📚 Plus d'exemples"
  },
  zh: {
    nav_home:'首页', nav_kana:'假名', nav_learn:'学习', nav_forms:'形式', nav_verbs:'动词',
    nav_conjugator:'变形器', nav_kana_drill:'假名练习', nav_kanji_drill:'汉字练习',
    nav_dates:'日期', nav_vocab:'词汇', nav_kanji:'汉字', nav_contact:'联系',
    page_tag:'互动练习', page_title:'假名练习',
    score:'得分', streak:'连击', best:'最高',
    mode:'模式', script:'字体', sets:'范围', charts:'对照表',
    mode_k2r:'假名 → 罗马音', mode_r2k:'罗马音 → 假名', mixed:'混合',
    set_basic:'清音 (46)', set_dakuten:'浊音 (25)', set_combos:'拗音 (33)',
    sheet_h:'平假名对照表', sheet_k:'片假名对照表',
    hold_h:'按住 Alt+H 快速查看', hold_k:'按住 Alt+K 快速查看',
    tag_type_h:'平假名 — 输入读音', tag_type_k:'片假名 — 输入读音',
    tag_pick_h:'选择对应的平假名', tag_pick_k:'选择对应的片假名',
    placeholder:'输入罗马音…',
    check:'检查答案', next:'下一题 →', skip:'跳过（显示答案）', reset:'↺ 重置得分',
    fb_correct:'⭕ 正确！', fb_answer:'答案：', fb_wrong:'❌ 不对 — 正确答案是：',
    missed_title:'📝 本次答错的假名 — 点击听发音',
    click_hear:'点击听发音', hear_pron:'听发音',
    cheat_hint:'点击任意假名可听发音 🔊 &nbsp;·&nbsp; 按住 Alt+H / Alt+K 快速查看',
    cheat_title_h:'平假名 ひらがな', cheat_title_k:'片假名 カタカナ',
    cheat_basic:'清音 (46)', cheat_dakuten:'浊音・半浊音 (25)', cheat_combos:'拗音 (33)',
    hero_badge:'日语学习工具箱',
    card_kana_t:"<span class=\"jp\" style=\"color: #d4786a;\">仮名</span> — 假名",
    card_kana_d:"练习全部 <strong style=\"color: #d4786a;\">104 个平假名和片假名</strong>。并排学习两套日语书写系统，配有<strong>发音音频</strong>，以及清音、浊音和拗音的清晰对照表。点击任意假名即可听发音。",
    card_kana_cta:"学习假名 →",
    card_learn_t:"学习",
    card_learn_d:"清晰直观地讲解日语动词变形的真正原理。理解规律背后的<em>为什么</em>，而不只是死记规则。学会辨别动词类型，理解平假名音系，并跟随每种变形的分步讲解。",
    card_learn_cta:"开始学习 →",
    card_forms_t:"形式速查",
    card_forms_d:"全面的速查变形表，涵盖三类动词（五段、一段、する动词）的 16 种形式。从基础形（否定、敬体、过去）到高级形（被动、使役、条件），彩色编码的表格清楚展示每种形式的构成方式。适合快速查阅或并排对比。",
    card_forms_cta:"查看形式 →",
    card_verbs_t:"动词表",
    card_verbs_d:"浏览数据库中的全部 <strong>129 个动词</strong>，按类型（五段、一段、する）分类，附汉字、平假名和英文释义。使用<strong>搜索</strong>即时查找动词，或<strong>按 JLPT 级别筛选</strong>（N5、N4、N3），专注于适合您水平的词汇。",
    card_verbs_cta:"浏览动词 →",
    card_conj_t:"动词变形器",
    card_conj_d:"Katsuyō Academy 的核心功能。练习 <strong>16 种不同形式</strong>的动词变形，即时反馈。可选择<strong>按难度随机</strong>（基础/中级/高级）或专攻特定形式，并<strong>按 JLPT 级别筛选</strong>以匹配学习目标。<strong>详细提示</strong>展示具体规则和例句，答错时还有<strong>错误讲解</strong>。卡住时可<strong>无惩罚跳过</strong>。<strong>进度自动保存</strong>，<strong>练习报告</strong>展示您的统计数据和薄弱环节。",
    card_conj_cta:"开始练习 →",
    card_dojo_t:"<span class=\"jp\">日付</span> — 日期与数字",
    card_dojo_d:"练习日语的日期、星期、月份和数字。题目涵盖今天的日期、未来/过去的推算、相对日期（<span class=\"jp\">きのう</span>、<span class=\"jp\">あした</span>）以及大数字。<strong style=\"color: #ff6b6b;\">要求完整句子作答</strong>——用 です 和 でした 结尾，培养正确的语法习惯。附带实用的<strong style=\"color: #ff6b6b;\">读法对照表</strong>，帮您攻克特殊读音。",
    card_dojo_cta:"进入道场 →",
    card_vocab_t:"<span class=\"jp\" style=\"color: #d4786a;\">単語</span> — 词汇",
    card_vocab_d:"用智能记忆卡练习 <strong style=\"color: #d4786a;\">496 个日语核心词汇</strong>。通过<strong>平假名、汉字和片假名</strong>，在 <strong style=\"color: #d4786a;\">8 种学习模式</strong>中学习。可在日→英、英→日之间切换，显示或隐藏汉字和片假名读法，并可两种文字并排显示。<strong>智能洗牌优先出现未学卡片</strong>，进度跟踪记录已学数量，复古精美的设计让学习更有乐趣。",
    card_vocab_cta:"开始学单词 →",
    card_kanji_t:"<span class=\"jp\" style=\"color: #e94560;\">漢字</span> — 汉字",
    card_kanji_d:"练习著名的《<strong>Kodansha Learner’s Course</strong>》中的 <strong style=\"color: #e94560;\">2300 个汉字</strong>。每张卡片展示汉字、英文关键词、<strong style=\"color: #ff6b6b;\">音读</strong>和<strong style=\"color: #4ecdc4;\">训读</strong>，以及带释义的<strong>例词</strong>。可按级别筛选（初级、中级、高级）、<strong>随机洗牌</strong>，或<strong>跳转到任意 KLC 编号</strong>。还支持键盘快捷键！",
    card_kanji_cta:"学习汉字 →",
    btn_start_kana:'从假名开始', btn_explore_kanji:'探索汉字',
    btn_learn_basics:'学习基础', btn_practice_conj:'练习动词变形',
    toolkit_title:'工具一览',
    toolkit_sub:'六个相互衔接的工具，涵盖日语基础',
    kd_title:'汉字练习', mode_k2w:'汉字 → 关键词', mode_w2k:'关键词 → 汉字',
    range:'范围', kd_placeholder:'输入英文关键词…', kd_missed:'📝 本次答错的汉字',
    show_romaji:'显示罗马音', show_en_first:'先显示译文', show_kanji:'显示汉字', show_katakana:'显示片假名',
    prev_card:'← 上一个', next_card:'下一个 →', shuffle:'🔀 随机',
    cards_studied:'已学卡片', total_cards:'卡片总数',
    kanji_sub:'练习《Kodansha Learner\u2019s Course》中的 2300 个汉字',
    filter_all:'全部 (2300)', filter_beginner:'初级 (1-500)',
    filter_intermediate:'中级 (501-1200)', filter_advanced:'高级 (1201-2300)',
    onyomi:'音读', kunyomi:'训读',
    kanji_prev:'◀ 上一个', kanji_next:'下一个 ▶', goto_klc:'📍 跳转到 KLC 编号',
    goto_placeholder:'输入 1-2300', cancel:'取消', go:'前往',
    quick_guide:'📖 快速指南', basic_kana_h:'清音（五十音 Gojūon）',
    dakuten_h:'浊音（濁点）', yoon_h:'拗音（拗音 Yōon）',
    learn_tag:'理解动词变形', learn_title:'日语动词的运作方式',
    forms_tag:'速查表', forms_title:'动词形式与形容词',
    dojo_sub:'日期与数字练习', today_q:'今天是几月几号？', review_h:'📋 復習（复习）',
    get_in_touch:'联系我',
    proverb_tr:'千里之行，始于足下。',
    about_p1:'你好，我是 <strong style="color: #fff;">Brandon</strong>。我创建这个网站，是因为想要一个干净、专注、没有广告和干扰的地方来学习日语。这里的一切都是免费的，并将永远免费。',
    about_p2:'这个网站是一个持续更新的项目，您的反馈会让它变得更好。如果您遇到 bug、发现错误信息、有新功能的想法，或者只是想分享您的看法——欢迎随时联系我。无论是简短的留言还是详细的反馈，我都由衷感谢每一位使用本站的朋友。',
    send_message_h:'发送留言',
    your_name:'您的姓名', your_email:'您的邮箱', subject:'主题', message:'留言内容',
    opt_general:'一般问题', opt_bug:'错误报告', opt_feature:'功能建议',
    opt_correction:'内容更正', opt_other:'其他',
    msg_placeholder:'请输入您的留言…', send_btn:'发送', or_email:'或直接发送邮件：',
    conj_title:'动词变形器', view_report:'📊 查看报告', reset_short:'↺ 重置',
    og_random:'🎲 随机模式', og_basic:'📚 基础形 (N5)',
    og_intermediate:'🎯 中级形 (N4)', og_advanced:'🔥 高级形 (N3+)',
    f_random:'随机（所有形式）', f_random_basic:'随机（仅基础）',
    f_random_int:'随机（中级）', f_random_adv:'随机（高级）',
    f_masu:'敬体 (ます)', f_negative:'否定形 (ない)', f_past:'过去形 (た)', f_te:'て形',
    f_masen:'敬体否定 (ません)', f_mashita:'敬体过去 (ました)', f_nakatta:'否定过去 (なかった)',
    f_tai:'愿望形 (たい)', f_potential:'可能形 (られる/える)', f_volitional:'意志形 (よう/おう)',
    f_ba:'条件形 (ば)', f_tara:'条件形 (たら)', f_imperative:'命令形',
    f_passive:'被动形 (られる/あれる)', f_causative:'使役形 (させる/あせる)',
    f_caus_pass:'使役被动形 (させられる)',
    jlpt_all:'所有级别', jlpt_n5:'仅 N5', jlpt_n4:'仅 N4', jlpt_n3:'仅 N3', jlpt_n54:'N5 + N4',
    show_hint:'💡 显示提示', hint_label:'💡 提示',
    warn_try_again:'⚠️ 不对——再试一次！', more_examples:'📚 更多例句'
  }
};

var LANG = 'en';
try { LANG = localStorage.getItem('katsuyoLang') || 'en'; } catch (e) {}
if (!I18N[LANG]) LANG = 'en';

function t(key) {
  return (I18N[LANG] && I18N[LANG][key]) || I18N.en[key] || key;
}

function applyI18n() {
  document.documentElement.lang = LANG === 'zh' ? 'zh-CN' : LANG;
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
    el.innerHTML = t(el.getAttribute('data-i18n-html'));
  });
  document.querySelectorAll('[data-i18n-label]').forEach(function (el) {
    el.label = t(el.getAttribute('data-i18n-label'));
  });
  document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
    el.title = t(el.getAttribute('data-i18n-title'));
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });
  var sel = document.getElementById('lang-select');
  if (sel) sel.value = LANG;
}


// ---------- content text-node translation ----------
// Map: exact English text (whitespace-collapsed) -> [de, fr, zh].
// Walks body text nodes, remembers originals, so switching languages
// back and forth is lossless. Strings absent from the map stay English.
var I18N_TEXT = {};
function I18N_addText(map) { for (var k in map) I18N_TEXT[k] = map[k]; }
var I18N_TEXT_IDX = { de: 0, fr: 1, zh: 2 };

function translateContent() {
  if (!document.body) return;
  var idx = I18N_TEXT_IDX[LANG];
  var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
  var n;
  while ((n = walker.nextNode())) {
    var p = n.parentNode;
    if (!p || p.nodeName === 'SCRIPT' || p.nodeName === 'STYLE') continue;
    if (n.__i18nOrig === undefined) {
      var probe = n.nodeValue.replace(/\s+/g, ' ').trim();
      if (!probe || !I18N_TEXT[probe]) continue;
      n.__i18nOrig = n.nodeValue;
    }
    var orig = n.__i18nOrig;
    if (idx === undefined) { if (n.nodeValue !== orig) n.nodeValue = orig; continue; }
    var tr = I18N_TEXT[orig.replace(/\s+/g, ' ').trim()];
    if (tr && tr[idx]) {
      var lead = orig.match(/^\s*/)[0], trail = orig.match(/\s*$/)[0];
      n.nodeValue = lead + tr[idx] + trail;
    } else if (n.nodeValue !== orig) n.nodeValue = orig;
  }
}

function setLang(lang) {
  if (!I18N[lang]) return;
  LANG = lang;
  try { localStorage.setItem('katsuyoLang', lang); } catch (e) {}
  applyI18n();
  translateContent();
  if (window.refreshDrillI18n) window.refreshDrillI18n();
  if (window.refreshConjugatorI18n) window.refreshConjugatorI18n();
  if (window.refreshLangSwitch) window.refreshLangSwitch();
}

// Selector styling — injected here so every page gets it without touching styles.css
(function () {
  var css = [
    /* hide the plain <select> fallback once the widget takes over */
    '.lang-select{display:none;}',
    '.lang-switch{position:relative;display:inline-block;margin-left:0.9rem;vertical-align:middle;font-family:inherit;}',
    '.lang-btn{display:flex;align-items:center;gap:0.45rem;background:rgba(255,255,255,0.12);color:#faf9f7;',
    '  border:1px solid rgba(255,255,255,0.4);border-radius:999px;padding:0.34rem 0.8rem;font-family:inherit;',
    '  font-size:0.88rem;font-weight:700;letter-spacing:0.05em;cursor:pointer;line-height:1;',
    '  transition:background 0.16s ease,border-color 0.16s ease,transform 0.16s ease;}',
    '.lang-btn:hover{background:var(--accent,#c45c4a);border-color:var(--accent,#c45c4a);color:#fff;}',
    '.lang-btn:active{transform:scale(0.97);}',
    '.lang-btn .globe{font-size:1rem;line-height:1;opacity:1;}',
    '.lang-btn .cur{color:#fff;}',
    '.lang-btn .chev{font-size:0.62rem;opacity:0.85;transition:transform 0.18s ease;}',
    '.lang-switch.open .lang-btn{background:var(--accent,#c45c4a);border-color:var(--accent,#c45c4a);color:#fff;}',
    '.lang-switch.open .lang-btn .chev{transform:rotate(180deg);}',
    '.lang-menu{position:absolute;top:calc(100% + 0.5rem);right:0;min-width:11rem;background:var(--paper,#faf9f7);',
    '  border:1px solid rgba(0,0,0,0.1);border-radius:10px;box-shadow:0 10px 30px rgba(0,0,0,0.22);',
    '  padding:0.3rem;margin:0;list-style:none;z-index:1300;opacity:0;visibility:hidden;transform:translateY(-6px);',
    '  transition:opacity 0.16s ease,transform 0.16s ease,visibility 0.16s;}',
    '.lang-switch.open .lang-menu{opacity:1;visibility:visible;transform:translateY(0);}',
    '.lang-menu li{margin:0;}',
    '.lang-menu button{display:flex;align-items:center;justify-content:space-between;gap:0.6rem;width:100%;',
    '  background:none;border:none;border-radius:7px;padding:0.5rem 0.6rem;font-family:inherit;font-size:0.88rem;',
    '  color:var(--ink,#1a1a2e);text-align:left;cursor:pointer;transition:background 0.13s ease;}',
    '.lang-menu button:hover{background:var(--paper-warm,#f1eee8);}',
    '.lang-menu button .native{font-weight:600;}',
    '.lang-menu button .code{font-size:0.72rem;letter-spacing:0.06em;opacity:0.5;text-transform:uppercase;}',
    '.lang-menu button[aria-current="true"]{background:rgba(196,92,74,0.1);color:var(--accent,#c45c4a);}',
    '.lang-menu button[aria-current="true"] .code{opacity:0.75;}',
    '@media (max-width:640px){.lang-menu{right:auto;left:0;}}'
  ].join('');
  var s = document.createElement('style');
  s.textContent = css;
  document.head.appendChild(s);

  // ---------- header layout: keep translated labels on one line ----------
  var navCss = [
    /* German/French labels are longer than English — never break a link */
    '.nav-links .nav-link{white-space:nowrap;}',
    '.nav-links{display:flex;align-items:center;flex-wrap:nowrap;gap:0.05rem;}',
    /* tighten the gaps so the longer labels still fit before wrapping */
    '.nav-links .nav-link{padding-left:0.55rem;padding-right:0.55rem;}',
    /* the | separators: thinner, quieter, evenly spaced */
    '.nav-links > span{padding:0 0.25rem !important;font-size:1.05rem !important;opacity:0.45 !important;}',
    /* push the language switch to the far right, away from Contact */
    '.nav-inner{position:relative;}',
    '.nav-inner > .lang-switch{margin-left:auto;flex:0 0 auto;}',
    /* narrow screens: let the bar scroll sideways instead of stacking */
    '@media (max-width:1400px){',
    '  .nav-links{overflow-x:auto;overflow-y:hidden;-webkit-overflow-scrolling:touch;scrollbar-width:none;}',
    '  .nav-links::-webkit-scrollbar{display:none;}',
    '  .nav-links .nav-link{padding-left:0.45rem;padding-right:0.45rem;font-size:0.9rem;}',
    '}',
    /* narrow screens: pin it to the top-right of the bar so it is always tappable */
    '@media (max-width:900px){',
    '  .nav-inner > .lang-switch{position:absolute;top:0.55rem;right:0.75rem;z-index:1400;margin-left:0;}',
    '  .nav-links{padding-right:5.5rem;}',
    '  .lang-btn{padding:0.4rem 0.7rem;font-size:0.85rem;}',
    '  .lang-menu{right:0;left:auto;min-width:10rem;}',
    '  .lang-menu button{padding:0.7rem 0.7rem;font-size:0.95rem;}',
    '}'
  ].join('');
  var navStyle = document.createElement('style');
  navStyle.textContent = navCss;
  document.head.appendChild(navStyle);


  // ---------- replace the <select> with a nicer dropdown ----------
  var LANG_INFO = [
    { code: 'en', native: 'English',  label: 'EN' },
    { code: 'de', native: 'Deutsch',  label: 'DE' },
    { code: 'fr', native: 'Français', label: 'FR' },
    { code: 'zh', native: '中文',      label: '中文' }
  ];

  function buildLangSwitch() {
    var sel = document.getElementById('lang-select');
    if (!sel || document.querySelector('.lang-switch')) return;

    var wrap = document.createElement('div');
    wrap.className = 'lang-switch';

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'lang-btn';
    btn.setAttribute('aria-haspopup', 'true');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', 'Language');

    var menu = document.createElement('ul');
    menu.className = 'lang-menu';

    function currentInfo() {
      for (var i = 0; i < LANG_INFO.length; i++) {
        if (LANG_INFO[i].code === LANG) return LANG_INFO[i];
      }
      return LANG_INFO[0];
    }
    function paintButton() {
      var c = currentInfo();
      btn.innerHTML = '<span class="globe">🌐</span><span class="cur">' + c.label +
                      '</span><span class="chev">▼</span>';
    }
    function paintMenu() {
      menu.innerHTML = '';
      LANG_INFO.forEach(function (info) {
        var li = document.createElement('li');
        var b = document.createElement('button');
        b.type = 'button';
        b.innerHTML = '<span class="native">' + info.native + '</span>' +
                      '<span class="code">' + info.code + '</span>';
        if (info.code === LANG) b.setAttribute('aria-current', 'true');
        b.addEventListener('click', function () {
          setLang(info.code);
          paintButton();
          paintMenu();
          close();
          btn.focus();
        });
        li.appendChild(b);
        menu.appendChild(li);
      });
    }
    function open() {
      wrap.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
    function close() {
      wrap.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      wrap.classList.contains('open') ? close() : open();
    });
    document.addEventListener('click', function (e) {
      if (!wrap.contains(e.target)) close();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });

    paintButton();
    paintMenu();
    wrap.appendChild(btn);
    wrap.appendChild(menu);
    // Place it in .nav-inner rather than inside .nav-links: on narrow screens
    // .nav-links scrolls sideways, which pushed the switch off-screen.
    var host = document.querySelector('.nav-inner') || sel.parentNode;
    host.appendChild(wrap);

    // keep the button label in sync if the language changes elsewhere
    window.refreshLangSwitch = function () { paintButton(); paintMenu(); };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildLangSwitch);
  } else {
    buildLangSwitch();
  }
})();

// ---------- keep translations applied to JS-rendered content ----------
// app.js / sensei.js rebuild parts of the DOM (new questions, feedback,
// resetting the hint button). A MutationObserver re-applies translations
// after those rewrites. The guard flag prevents our own edits from
// re-triggering the observer.
var I18N_APPLYING = false;
var I18N_PENDING = false;
function I18N_reapply() {
  if (I18N_APPLYING) return;
  I18N_APPLYING = true;
  try { applyI18n(); translateContent(); }
  finally {
    // let our own mutations flush before listening again
    setTimeout(function () { I18N_APPLYING = false; }, 0);
  }
}
function I18N_observe() {
  if (!window.MutationObserver || !document.body) return;
  var obs = new MutationObserver(function () {
    if (I18N_APPLYING || I18N_PENDING) return;
    I18N_PENDING = true;
    setTimeout(function () { I18N_PENDING = false; I18N_reapply(); }, 30);
  });
  obs.observe(document.body, { childList: true, subtree: true, characterData: true });
}

document.addEventListener('DOMContentLoaded', function () {
  applyI18n();
  translateContent();
  I18N_observe();
});

// ---------- site-wide content translations (all pages except forms) ----------
I18N_addText({
"A clear, visual guide to understanding Japanese verb conjugation patterns. Learn the logic behind the forms so you can conjugate any verb with confidence.": [
"Ein klarer, visueller Leitfaden zu den japanischen Konjugationsmustern. Lernen Sie die Logik hinter den Formen, damit Sie jedes Verb sicher konjugieren können.",
"Un guide clair et visuel pour comprendre les schémas de conjugaison japonais. Apprenez la logique derrière les formes pour conjuguer n'importe quel verbe avec assurance.",
"清晰直观的日语动词变形指南。理解形式背后的逻辑，让您能自信地变形任何动词。"
],
"Every Japanese verb falls into one of three categories. Understanding which type you're working with is the first step.": [
"Jedes japanische Verb gehört zu einer von drei Kategorien. Zu wissen, mit welchem Typ Sie es zu tun haben, ist der erste Schritt.",
"Chaque verbe japonais appartient à l'une de trois catégories. Identifier le type auquel vous avez affaire est la première étape.",
"每个日语动词都属于三种类型之一。判断动词类型是变形的第一步。"
],
"In Japanese, verbs change their form to express time (past/present), politeness, negation, desire, ability, and more. Unlike English where we add helper words (\"I": [
"Im Japanischen ändern Verben ihre Form, um Zeit (Vergangenheit/Gegenwart), Höflichkeit, Verneinung, Wunsch, Fähigkeit und mehr auszudrücken. Anders als im Englischen, wo Hilfswörter ergänzt werden („I",
"En japonais, les verbes changent de forme pour exprimer le temps (passé/présent), la politesse, la négation, le désir, la capacité, etc. Contrairement à l'anglais qui ajoute des mots auxiliaires (« I",
"在日语中，动词通过变形来表达时态（过去/现在）、礼貌程度、否定、愿望、能力等。不像英语靠添加辅助词（\"I"
],
"go\"), Japanese transforms the verb itself.": [
"go“), verändert das Japanische das Verb selbst.",
"go »), le japonais transforme le verbe lui-même.",
"go\"），日语直接改变动词本身。"
],
"Notice how each column keeps the same consonant sound (k-, s-, t-, etc.), but the vowel changes (a, i, u, e, o). When we conjugate godan verbs, we're moving": [
"Beachten Sie: Jede Spalte behält denselben Konsonanten (k-, s-, t- usw.), aber der Vokal wechselt (a, i, u, e, o). Beim Konjugieren von Godan-Verben bewegen wir uns",
"Remarquez que chaque colonne garde la même consonne (k-, s-, t-, etc.) tandis que la voyelle change (a, i, u, e, o). Conjuguer un verbe godan, c'est se déplacer",
"注意：每一列保持相同的辅音（k-、s-、t- 等），而元音在变化（a、i、u、e、o）。五段动词的变形，就是在这些列中"
],
"up and down these columns": [
"in diesen Spalten auf und ab",
"de haut en bas dans ces colonnes",
"上下移动"
],
"to create different forms.": [
", um verschiedene Formen zu bilden.",
"pour créer les différentes formes.",
"，从而构成不同的形式。"
],
"Past tense is the one exception to the row-shift pattern. Instead, godan verbs use special endings based on the final sound:": [
"Die Vergangenheitsform ist die einzige Ausnahme vom Reihenwechsel-Muster. Stattdessen verwenden Godan-Verben besondere Endungen je nach Endlaut:",
"Le passé est la seule exception au schéma de changement de rangée. Les verbes godan utilisent des terminaisons spéciales selon leur son final :",
"过去形是段位移动规律的唯一例外。五段动词根据词尾读音使用特殊的词尾："
],
"instead of following the regular pattern. This is why suru verbs are considered \"irregular\" - they have their own special rules!": [
"statt dem regulären Muster zu folgen. Deshalb gelten Suru-Verben als „unregelmäßig“ — sie haben ihre eigenen Regeln!",
"au lieu de suivre le schéma régulier. C'est pourquoi les verbes suru sont dits « irréguliers » — ils ont leurs propres règles !",
"而不遵循常规规律。这就是为什么 する动词被视为\"不规则\"——它们有自己的一套规则！"
],
"\"Five-step\" verbs that conjugate by shifting through": [
"„Fünf-Stufen“-Verben — sie konjugieren durch Wechsel zwischen",
"Verbes « à cinq crans » qui se conjuguent en passant par",
"\"五段\"动词——变形时会经过"
],
"5 vowel rows": [
"5 Vokalreihen",
"5 rangées de voyelles",
"5 个元音段"
],
"\"One-step\" verbs with a": [
"„Ein-Stufen“-Verben mit einem",
"Verbes « à un cran » avec un",
"\"一段\"动词，具有"
],
"stem that never changes": [
"Stamm, der sich nie ändert",
"radical qui ne change jamais",
"永不变化的词干"
],
"(benkyou suru - to study)": [
"(benkyou suru – lernen)",
"(benkyou suru – étudier)",
"(benkyou suru – 学习)"
],
"(hanasu - to speak) as our example:": [
"(hanasu – sprechen) als Beispiel:",
"(hanasu – parler) comme exemple :",
"（hanasu – 说话）为例："
],
"(tabemasu) = eat (polite)": [
"(tabemasu) = essen (höflich)",
"(tabemasu) = manger (poli)",
"(tabemasu) = 吃（敬体）"
],
"(tabenai) = don't eat": [
"(tabenai) = nicht essen",
"(tabenai) = ne pas manger",
"(tabenai) = 不吃"
],
"(taberu - to eat)": [
"(taberu – essen)",
"(taberu – manger)",
"(taberu – 吃)"
],
"(taberu) = to eat": [
"(taberu) = essen",
"(taberu) = manger",
"(taberu) = 吃"
],
"(tabeta) = ate": [
"(tabeta) = aß",
"(tabeta) = a mangé",
"(tabeta) = 吃了"
],
"(tabetai) = want to eat": [
"(tabetai) = essen wollen",
"(tabetai) = vouloir manger",
"(tabetai) = 想吃"
],
"- this is in the": [
"— es steht in der",
"— il se trouve dans la",
"——它位于"
],
"- to know [GODAN]": [
"– kennen [GODAN]",
"– connaître [GODAN]",
"– 知道【五段】"
],
"- to return [GODAN]": [
"– zurückkehren [GODAN]",
"– rentrer [GODAN]",
"– 回去【五段】"
],
"- to run [GODAN]": [
"– laufen [GODAN]",
"– courir [GODAN]",
"– 跑【五段】"
],
". Godan verbs work by shifting between these rows:": [
". Godan-Verben funktionieren durch Wechsel zwischen diesen Reihen:",
". Les verbes godan fonctionnent en passant d'une rangée à l'autre :",
"。五段动词就是在这些段之间移动："
],
". You simply drop る and add endings.": [
". Sie lassen einfach る weg und hängen Endungen an.",
". Il suffit d'enlever る et d'ajouter les terminaisons.",
"。只需去掉 る，再加上词尾。"
],
"Add the ending: はな": [
"Ergänzen Sie die Endung: はな",
"Ajoutez la terminaison : はな",
"加上词尾：はな"
],
"Apply the Pattern": [
"Muster anwenden",
"Appliquez le schéma",
"应用规律"
],
"DICTIONARY (う)": [
"WÖRTERBUCHFORM (う)",
"FORME DU DICTIONNAIRE (う)",
"辞书形 (う)"
],
"Ends in: く、ぐ、す、つ、ぬ、ぶ、む、る、う": [
"Endet auf: く、ぐ、す、つ、ぬ、ぶ、む、る、う",
"Se termine par : く、ぐ、す、つ、ぬ、ぶ、む、る、う",
"以 く、ぐ、す、つ、ぬ、ぶ、む、る、う 结尾"
],
"Example:": [
"Beispiel:",
"Exemple :",
"例："
],
"Examples:": [
"Beispiele:",
"Exemples :",
"例："
],
"Examples: する、勉強する、散歩する": [
"Beispiele: する、勉強する、散歩する",
"Exemples : する、勉強する、散歩する",
"例：する、勉強する、散歩する"
],
"Examples: 行く (iku), 話す (hanasu), 飲む (nomu), 買う (kau)": [
"Beispiele: 行く (iku), 話す (hanasu), 飲む (nomu), 買う (kau)",
"Exemples : 行く (iku), 話す (hanasu), 飲む (nomu), 買う (kau)",
"例：行く (iku)、話す (hanasu)、飲む (nomu)、買う (kau)"
],
"Examples: 食べる (taberu), 見る (miru), 起きる (okiru)": [
"Beispiele: 食べる (taberu), 見る (miru), 起きる (okiru)",
"Exemples : 食べる (taberu), 見る (miru), 起きる (okiru)",
"例：食べる (taberu)、見る (miru)、起きる (okiru)"
],
"Find it in the chart: Look in the": [
"In der Tabelle finden: Schauen Sie in die",
"Repérez-le dans le tableau : cherchez dans la",
"在表中查找：找到"
],
"First, figure out if your verb is godan, ichidan, or suru": [
"Bestimmen Sie zuerst, ob Ihr Verb godan, ichidan oder suru ist",
"Déterminez d'abord si votre verbe est godan, ichidan ou suru",
"首先判断动词是五段、一段还是 する动词"
],
"Form": [
"Form",
"Forme",
"形式"
],
"Foundation: The Hiragana Sound System": [
"Grundlage: das Hiragana-Lautsystem",
"Fondation : le système sonore des hiragana",
"基础：平假名音系"
],
"Godan Verbs: The Five-Row System": [
"Godan-Verben: das Fünf-Reihen-System",
"Verbes godan : le système à cinq rangées",
"五段动词：五段系统"
],
"Godan verbs work by": [
"Godan-Verben funktionieren durch",
"Les verbes godan fonctionnent en",
"五段动词的原理是"
],
"How to Identify Verb Types": [
"So erkennen Sie den Verbtyp",
"Comment identifier le type de verbe",
"如何判断动词类型"
],
"Ichidan Verbs: The Simple Pattern": [
"Ichidan-Verben: das einfache Muster",
"Verbes ichidan : le schéma simple",
"一段动词：简单的规律"
],
"Ichidan verbs are called \"one-step\" because the stem": [
"Ichidan-Verben heißen „Ein-Stufen“-Verben, weil der Stamm",
"Les verbes ichidan sont dits « à un cran » parce que le radical",
"一段动词被称为\"一段\"，是因为词干"
],
"Identify the Type": [
"Typ bestimmen",
"Identifiez le type",
"判断类型"
],
"Identify the final sound:": [
"Endlaut bestimmen:",
"Identifiez le son final :",
"判断词尾读音："
],
"Irregular verbs": [
"Unregelmäßige Verben",
"Verbes irréguliers",
"不规则动词"
],
"Japanese sounds are organized in": [
"Japanische Laute sind organisiert in",
"Les sons japonais sont organisés en",
"日语的音节排列为"
],
"NEGATIVE (あ)": [
"VERNEINUNG (あ)",
"NÉGATIF (あ)",
"否定形 (あ)"
],
"NO → Continue to Step 2": [
"NEIN → Weiter zu Schritt 2",
"NON → Passez à l'étape 2",
"否 → 进入第 2 步"
],
"Negative": [
"Verneinung",
"Négatif",
"否定形"
],
"Notice that the potential form uses": [
"Beachten Sie, dass die Potenzialform verwendet:",
"Remarquez que la forme potentielle utilise",
"注意：可能形使用的是"
],
"Now that you understand the patterns, here's your strategy for success:": [
"Jetzt, da Sie die Muster verstehen, hier Ihre Strategie zum Erfolg:",
"Maintenant que vous comprenez les schémas, voici votre stratégie :",
"理解了这些规律之后，您的成功策略如下："
],
"POTENTIAL (え)": [
"POTENZIAL (え)",
"POTENTIEL (え)",
"可能形 (え)"
],
"Past": [
"Vergangenheit",
"Passé",
"过去形"
],
"Polite": [
"Höflichkeitsform",
"Forme polie",
"敬体"
],
"Potential": [
"Potenzialform",
"Potentiel",
"可能形"
],
"Practice, Practice!": [
"Üben, üben!",
"Pratiquez, pratiquez !",
"练习，练习！"
],
"Probably": [
"Wahrscheinlich",
"Probablement",
"大概"
],
"Process": [
"Vorgehen",
"Processus",
"步骤"
],
"Putting It All Together": [
"Alles zusammenfügen",
"Récapitulons",
"融会贯通"
],
"Result": [
"Ergebnis",
"Résultat",
"结果"
],
"Row": [
"Reihe",
"Rangée",
"段"
],
"Some verbs": [
"Manche Verben",
"Certains verbes",
"有些动词"
],
"Start Practicing with The Conjugator →": [
"Jetzt üben mit dem Konjugator →",
"Commencez à pratiquer avec le Conjugueur →",
"用动词变形器开始练习 →"
],
"Start with the dictionary form:": [
"Beginnen Sie mit der Wörterbuchform:",
"Partez de la forme du dictionnaire :",
"从辞书形开始："
],
"Stem": [
"Stamm",
"Radical",
"词干"
],
"Step 1: Does it end in する?": [
"Schritt 1: Endet es auf する?",
"Étape 1 : se termine-t-il par する ?",
"第 1 步：是否以 する 结尾？"
],
"Step 2: Does it end in -eru (える) or -iru (いる)?": [
"Schritt 2: Endet es auf -eru (える) oder -iru (いる)?",
"Étape 2 : se termine-t-il par -eru (える) ou -iru (いる) ?",
"第 2 步：是否以 -eru (える) 或 -iru (いる) 结尾？"
],
"Step 3: Everything else": [
"Schritt 3: Alles andere",
"Étape 3 : tout le reste",
"第 3 步：其余所有动词"
],
"Step-by-Step Process": [
"Schritt-für-Schritt-Vorgehen",
"Processus pas à pas",
"分步流程"
],
"Suru Verbs: The Irregular Pattern": [
"Suru-Verben: das unregelmäßige Muster",
"Verbes suru : le schéma irrégulier",
"する动词：不规则的规律"
],
"Suru verb": [
"Suru-Verb",
"Verbe suru",
"する动词"
],
"Suru verbs are formed by adding": [
"Suru-Verben entstehen durch Anhängen von",
"Les verbes suru se forment en ajoutant",
"する动词的构成是在名词后加上"
],
"The Formula": [
"Die Formel",
"La formule",
"公式"
],
"The Three Verb Types": [
"Die drei Verbtypen",
"Les trois types de verbes",
"三种动词类型"
],
"To make negative: Move to the": [
"Für die Verneinung: Wechseln Sie zur",
"Pour le négatif : passez à la",
"构成否定形：移动到"
],
"Use The Conjugator to drill until it becomes automatic": [
"Üben Sie mit dem Konjugator, bis es automatisch sitzt",
"Entraînez-vous avec le Conjugueur jusqu'à l'automatisme",
"用动词变形器反复练习，直到形成本能"
],
"Use the right conjugation method for that verb type": [
"Verwenden Sie die passende Konjugationsmethode für diesen Verbtyp",
"Utilisez la bonne méthode de conjugaison pour ce type de verbe",
"对该动词类型使用正确的变形方法"
],
"VOLITIONAL (お)": [
"VOLITIONAL (お)",
"VOLITIF (お)",
"意志形 (お)"
],
"Volitional": [
"Volitionalform",
"Volitif",
"意志形"
],
"Want to": [
"Wollen",
"Vouloir",
"想要"
],
"Watch the Transformation": [
"Verfolgen Sie die Umwandlung",
"Observez la transformation",
"观察变化过程"
],
"Why Conjugation Matters": [
"Warum Konjugation wichtig ist",
"Pourquoi la conjugaison est importante",
"为什么变形很重要"
],
"With ichidan verbs, once you memorize the endings (ない, ます, た, たい, られる, よう), you can conjugate": [
"Bei Ichidan-Verben gilt: Sobald Sie die Endungen (ない, ます, た, たい, られる, よう) auswendig können, konjugieren Sie",
"Avec les verbes ichidan, une fois les terminaisons mémorisées (ない, ます, た, たい, られる, よう), vous pouvez conjuguer",
"对于一段动词，只要记住词尾（ない、ます、た、たい、られる、よう），就能变形"
],
"YES → It's a": [
"JA → Es ist ein",
"OUI → C'est un",
"是 → 它是"
],
"YES →": [
"JA →",
"OUI →",
"是 →"
],
"and": [
"und",
"et",
"和"
],
"any": [
"jedes beliebige",
"n'importe quel",
"任何"
],
"can": [
"können",
"pouvoir",
"能"
],
"changing the final sound": [
"Ändern des Endlauts",
"changeant le son final",
"改变词尾读音"
],
"columns": [
"Spalten",
"colonnes",
"列"
],
"conjugates, you can apply it to all suru verbs.": [
"konjugiert wird, können Sie es auf alle Suru-Verben anwenden.",
"se conjugue, vous pouvez l'appliquer à tous les verbes suru.",
"如何变形，就能应用到所有 する动词上。"
],
"ending": [
"Endung",
"terminaison",
"词尾"
],
"formed by adding する to nouns": [
"gebildet durch Anhängen von する an Nomen",
"formés en ajoutant する à des noms",
"由名词加 する 构成"
],
"ichidan verb. No row-shifting, no special rules, no exceptions!": [
"Ichidan-Verb. Kein Reihenwechsel, keine Sonderregeln, keine Ausnahmen!",
"verbe ichidan. Pas de changement de rangée, pas de règles spéciales, pas d'exceptions !",
"一段动词。没有段位移动，没有特殊规则，没有例外！"
],
"in the same column: す →": [
"in derselben Spalte: す →",
"dans la même colonne : す →",
"在同一列中：す →"
],
"like ichidan but are actually godan:": [
"wie Ichidan aussehen, aber tatsächlich Godan sind:",
"ressemblent à des ichidan mais sont en réalité des godan :",
"看起来像一段动词，实际上是五段动词："
],
"look": [
"sehen aus",
"ressemblent",
"看起来"
],
"never changes": [
"sich nie ändert",
"ne change jamais",
"永不变化"
],
"rows": [
"Reihen",
"rangées",
"段"
],
"s-column": [
"s-Spalte",
"colonne s",
"s 列"
],
"to a different row. Let's use": [
"zu einer anderen Reihe. Nehmen wir",
"vers une autre rangée. Prenons",
"移到不同的段。我们以"
],
"to a noun. They're irregular, but once you learn how": [
"an ein Nomen. Sie sind unregelmäßig, aber sobald Sie wissen, wie",
"à un nom. Ils sont irréguliers, mais une fois que vous savez comment",
"。虽然不规则，但只要掌握了"
],
"will": [
"werden",
"futur",
"将会"
],
"⚠️ Past Tense: Special Sound Changes": [
"⚠️ Vergangenheit: besondere Lautänderungen",
"⚠️ Passé : changements de sons particuliers",
"⚠️ 过去形：特殊音变"
],
"⚠️ Watch Out for Exceptions!": [
"⚠️ Achtung, Ausnahmen!",
"⚠️ Attention aux exceptions !",
"⚠️ 小心例外！"
],
"あ-row": [
"あ-Reihe",
"rangée あ",
"あ段"
],
"う-row": [
"う-Reihe",
"rangée う",
"う段"
],
"する becomes...": [
"する wird zu …",
"する devient…",
"する 变为…"
],
"ます-STEM (い)": [
"ます-STAMM (い)",
"RADICAL ます (い)",
"ます词干 (い)"
],
"💡 Key Insight:": [
"💡 Kernidee:",
"💡 Idée clé :",
"💡 关键要点："
],
"💡 Special Note:": [
"💡 Besonderer Hinweis:",
"💡 Remarque particulière :",
"💡 特别说明："
],
"💡 Why It's Easy:": [
"💡 Warum es leicht ist:",
"💡 Pourquoi c'est facile :",
"💡 为什么很简单："
],
"(dakuten) to voice consonants (K→G, S→Z, T→D, H→B), or a circle": [
"(Dakuten), um Konsonanten stimmhaft zu machen (K→G, S→Z, T→D, H→B), oder einen kleinen Kreis",
"(dakuten) pour voiser les consonnes (K→G, S→Z, T→D, H→B), ou un petit cercle",
"（浊点）使辅音浊化（K→G、S→Z、T→D、H→B），或加一个小圆圈"
],
"(handakuten) for H→P": [
"(Handakuten) für H→P",
"(handakuten) pour H→P",
"（半浊点）表示 H→P"
],
"(kōhī / coffee)": [
"(kōhī / Kaffee)",
"(kōhī / café)",
"(kōhī / 咖啡)"
],
"25 CHARACTERS": [
"25 ZEICHEN",
"25 CARACTÈRES",
"25 个字符"
],
"33 CHARACTERS": [
"33 ZEICHEN",
"33 CARACTÈRES",
"33 个字符"
],
"46 CHARACTERS": [
"46 ZEICHEN",
"46 CARACTÈRES",
"46 个字符"
],
"Add two dots": [
"Fügen Sie zwei Punkte hinzu",
"Ajoutez deux points",
"加上两点"
],
"Angular, sharp script for foreign words, emphasis, and technical terms. Example:": [
"Eckige, markante Schrift für Fremdwörter, Betonung und Fachbegriffe. Beispiel:",
"Écriture anguleuse et nette pour les mots étrangers, l'emphase et les termes techniques. Exemple :",
"棱角分明的字体，用于外来词、强调和专业术语。例如："
],
"Combine characters with small や, ゆ, よ to create new sounds like kya, shu, cho": [
"Kombinieren Sie Zeichen mit kleinem や, ゆ, よ zu neuen Lauten wie kya, shu, cho",
"Combinez les caractères avec un petit や, ゆ, よ pour créer de nouveaux sons comme kya, shu, cho",
"将假名与小写的 や、ゆ、よ 组合，构成 kya、shu、cho 等新音"
],
"Curvy, flowing script for native Japanese words, particles, and verb endings. Example:": [
"Runde, fließende Schrift für japanische Wörter, Partikeln und Verbendungen. Beispiel:",
"Écriture ronde et fluide pour les mots japonais natifs, les particules et les terminaisons verbales. Exemple :",
"圆润流畅的字体，用于日语固有词、助词和动词词尾。例如："
],
"Each row shares a consonant (k, s, t, etc.). Each column shares a vowel (a, i, u, e, o). Combine them: k + a = か/カ (ka)": [
"Jede Reihe teilt einen Konsonanten (k, s, t usw.), jede Spalte einen Vokal (a, i, u, e, o). Kombiniert: k + a = か/カ (ka)",
"Chaque rangée partage une consonne (k, s, t, etc.), chaque colonne une voyelle (a, i, u, e, o). Combinez-les : k + a = か/カ (ka)",
"每一行共享一个辅音（k、s、t 等），每一列共享一个元音（a、i、u、e、o）。组合起来：k + a = か/カ (ka)"
],
"Hiragana (ひらがな)": [
"Hiragana (ひらがな)",
"Hiragana (ひらがな)",
"平假名（ひらがな）"
],
"Katakana (カタカナ)": [
"Katakana (カタカナ)",
"Katakana (カタカナ)",
"片假名（カタカナ）"
],
"LEGEND:": [
"LEGENDE:",
"LÉGENDE :",
"图例："
],
"Practice with Flashcards →": [
"Mit Karteikarten üben →",
"Pratiquez avec les cartes →",
"用记忆卡练习 →"
],
"Pronunciation": [
"Aussprache",
"Prononciation",
"发音"
],
"Reading the Charts": [
"So lesen Sie die Tabellen",
"Lire les tableaux",
"如何阅读对照表"
],
"Ready to practice reading Japanese?": [
"Bereit, japanisches Lesen zu üben?",
"Prêt à vous entraîner à lire le japonais ?",
"准备好练习日语阅读了吗？"
],
"The 46 fundamental sounds of Japanese. Practice these first!": [
"Die 46 Grundlaute des Japanischen. Üben Sie diese zuerst!",
"Les 46 sons fondamentaux du japonais. Commencez par ceux-ci !",
"日语的 46 个基本音。请先练习这些！"
],
"romaji": [
"Rōmaji",
"rōmaji",
"罗马音"
],
"vowels": [
"Vokale",
"voyelles",
"元音"
],
"\"A free, offline-capable Japanese study suite built by a learner for learners—covering kana, kanji, vocabulary, and verb conjugation in one cohesive, beautifully designed package.\"": [
"„Ein kostenloses, offline nutzbares Japanisch-Lernpaket, von einem Lernenden für Lernende gebaut — Kana, Kanji, Vokabeln und Konjugation in einem stimmigen, schön gestalteten Ganzen.“",
"« Une suite d'étude du japonais gratuite et utilisable hors ligne, créée par un apprenant pour les apprenants — kana, kanji, vocabulaire et conjugaison dans un ensemble cohérent et soigné. »",
"\"一个免费、可离线使用的日语学习套件，由学习者为学习者打造——将假名、汉字、词汇和动词变形融为一个精心设计的整体。\""
],
". It's not trying to replace a textbook or be the next language learning app. Instead, it's a focused set of interconnected tools that cover the foundational building blocks of Japanese—the things you'll reference and practice over and over again.": [
". Sie will kein Lehrbuch ersetzen und nicht die nächste Sprachlern-App sein, sondern ist ein fokussiertes Set miteinander verbundener Werkzeuge für die Grundbausteine des Japanischen — die Dinge, die Sie immer wieder nachschlagen und üben.",
". Il ne cherche pas à remplacer un manuel ni à devenir la prochaine appli de langues. C'est un ensemble ciblé d'outils interconnectés couvrant les éléments fondamentaux du japonais — ce que vous consulterez et pratiquerez encore et encore.",
"。它不想取代教材，也不想成为下一个语言学习 App，而是一套专注、相互衔接的工具，涵盖日语的基础模块——那些您会反复查阅和练习的内容。"
],
"A free, self-contained Japanese learning platform. Practice kana, kanji, vocabulary, and verb conjugation—all in one beautifully designed toolkit.": [
"Eine kostenlose, eigenständige Japanisch-Lernplattform. Üben Sie Kana, Kanji, Vokabeln und Konjugation — alles in einem schön gestalteten Werkzeugkasten.",
"Une plateforme d'apprentissage du japonais gratuite et autonome. Pratiquez kana, kanji, vocabulaire et conjugaison — le tout dans une boîte à outils soigneusement conçue.",
"一个免费、独立的日语学习平台。练习假名、汉字、词汇和动词变形——尽在一个精心设计的工具箱中。"
],
"A note from the creator:": [
"Eine Notiz vom Entwickler:",
"Un mot du créateur :",
"来自开发者的话："
],
"A passion project born from my own struggles learning Japanese. No paywalls, no premium tiers, no \"sign up to continue.\" Just free resources for anyone who wants to learn.": [
"Ein Herzensprojekt, entstanden aus meinen eigenen Mühen beim Japanischlernen. Keine Paywalls, keine Premium-Stufen, kein „Registrieren, um fortzufahren“. Nur freie Ressourcen für alle, die lernen möchten.",
"Un projet passion né de mes propres difficultés à apprendre le japonais. Pas de paywall, pas d'offre premium, pas de « inscrivez-vous pour continuer ». Juste des ressources gratuites pour qui veut apprendre.",
"一个源于我自己日语学习挫折的热情项目。没有付费墙，没有会员分级，没有\"注册后继续\"。只有献给所有学习者的免费资源。"
],
"Everything runs locally in your browser. No accounts, no tracking, no servers. Just open it and learn.": [
"Alles läuft lokal in Ihrem Browser. Keine Konten, kein Tracking, keine Server. Einfach öffnen und lernen.",
"Tout fonctionne localement dans votre navigateur. Pas de compte, pas de suivi, pas de serveur. Ouvrez et apprenez.",
"一切都在您的浏览器中本地运行。无需账号，没有跟踪，没有服务器。打开即学。"
],
"I built Katsuyō Academy because I needed it myself. Scattered textbook chapters, confusing online resources, flashcard apps that didn't quite work the way I wanted—I wanted everything in one place, designed the way I learn best. This is that place. If it helps you too, then it's done its job.": [
"Ich habe die Katsuyō Academy gebaut, weil ich sie selbst brauchte. Verstreute Lehrbuchkapitel, verwirrende Online-Ressourcen, Karteikarten-Apps, die nie ganz so funktionierten, wie ich wollte — ich wollte alles an einem Ort, gestaltet so, wie ich am besten lerne. Das ist dieser Ort. Wenn er auch Ihnen hilft, hat er seinen Zweck erfüllt.",
"J'ai créé Katsuyō Academy parce que j'en avais besoin moi-même. Des chapitres de manuels éparpillés, des ressources en ligne confuses, des applis de cartes qui ne fonctionnaient jamais tout à fait comme je le voulais — je voulais tout au même endroit, conçu comme j'apprends le mieux. C'est cet endroit. S'il vous aide aussi, il a rempli sa mission.",
"我创建 Katsuyō Academy，是因为我自己需要它。零散的教材章节、混乱的网络资源、总是差点意思的记忆卡 App——我想要一个把一切集中在一处、按我最有效的学习方式设计的地方。这里就是那个地方。如果它也能帮到您，它就完成了使命。"
],
"Not a gamified app or a full curriculum. Just focused, interconnected reference and practice tools for the foundational building blocks you'll use every day.": [
"Keine Gamification-App, kein vollständiger Lehrplan. Nur fokussierte, miteinander verbundene Nachschlage- und Übungswerkzeuge für die Grundbausteine, die Sie täglich brauchen.",
"Ni appli gamifiée ni cursus complet. Juste des outils de référence et de pratique ciblés et interconnectés pour les fondamentaux dont vous vous servez chaque jour.",
"不是游戏化 App，也不是完整课程。只是一套专注、相互衔接的参考与练习工具，服务于您每天都要用到的基础内容。"
],
"One HTML file. No installation, no accounts, no internet required after loading. Save it locally and study anywhere—on a plane, in a café, wherever you learn best.": [
"Eine HTML-Datei. Keine Installation, keine Konten, nach dem Laden kein Internet nötig. Speichern Sie sie lokal und lernen Sie überall — im Flugzeug, im Café, wo immer Sie am besten lernen.",
"Un seul fichier HTML. Pas d'installation, pas de compte, pas d'internet requis après le chargement. Enregistrez-le localement et étudiez partout — en avion, au café, où vous apprenez le mieux.",
"一个 HTML 文件。无需安装，无需账号，加载后无需网络。保存到本地，随处学习——在飞机上、在咖啡馆，任何最适合您学习的地方。"
],
"The Conjugator doesn't just say \"wrong\"—it shows the exact rule you needed and identifies your specific error. Flashcards track your progress and prioritize unseen cards.": [
"Der Konjugator sagt nicht bloß „falsch“ — er zeigt die Regel, die Sie gebraucht hätten, und benennt Ihren konkreten Fehler. Karteikarten verfolgen Ihren Fortschritt und bevorzugen ungesehene Karten.",
"Le Conjugueur ne dit pas seulement « faux » — il montre la règle exacte qu'il vous fallait et identifie votre erreur précise. Les cartes suivent votre progression et privilégient celles non vues.",
"动词变形器不只说\"错了\"——它会展示您需要的具体规则，指出您的具体错误。记忆卡会跟踪您的进度，并优先出现未学过的卡片。"
],
"The Learn section explains": [
"Der Bereich „Lernen“ erklärt,",
"La section Apprendre explique",
"\"学习\"板块讲解"
],
"Warm, aged-paper aesthetics with clean typography. It feels more like a well-crafted study journal than a typical language app. No ads, no clutter, no distractions.": [
"Warme Alt-Papier-Ästhetik mit klarer Typografie. Es fühlt sich eher wie ein liebevoll gestaltetes Studienjournal an als wie eine typische Sprach-App. Keine Werbung, kein Durcheinander, keine Ablenkung.",
"Une esthétique chaleureuse de papier ancien avec une typographie soignée. On se croirait dans un beau journal d'étude plutôt que dans une appli de langues classique. Pas de pub, pas de fouillis, pas de distraction.",
"温暖的复古纸张美学，搭配简洁的排版。它更像一本精心制作的学习手账，而非普通的语言 App。没有广告，没有杂乱，没有干扰。"
],
"Whether you're learning kana, mastering kanji, studying verbs, building vocabulary, or practicing dates—choose your path below.": [
"Ob Sie Kana lernen, Kanji meistern, Verben studieren, Vokabeln aufbauen oder Datumsangaben üben — wählen Sie unten Ihren Weg.",
"Que vous appreniez les kana, maîtrisiez les kanji, étudiiez les verbes, enrichissiez votre vocabulaire ou pratiquiez les dates — choisissez votre voie ci-dessous.",
"无论您是在学假名、攻克汉字、研究动词、积累词汇，还是练习日期——请在下方选择您的路径。"
],
"Your Complete Japanese Foundation": [
"Ihr komplettes Japanisch-Fundament",
"Votre base complète de japonais",
"您完整的日语基础"
],
"patterns work the way they do. When you understand the logic, conjugation becomes intuitive instead of a memory test.": [
"Muster so funktionieren, wie sie es tun. Wenn Sie die Logik verstehen, wird Konjugation intuitiv statt zur Gedächtnisprüfung.",
"pourquoi les schémas fonctionnent ainsi. Quand on comprend la logique, la conjugaison devient intuitive au lieu d'un test de mémoire.",
"规律为何如此运作。理解了逻辑，变形就会变得直觉自然，而不再是记忆测验。"
],
"why": [
"warum",
"pourquoi",
"为什么"
],
"What Makes This Different": [
"Was diese Seite anders macht",
"Ce qui rend ce site différent",
"本站的与众不同之处"
],
"Ready to Get Started?": [
"Bereit loszulegen?",
"Prêt à commencer ?",
"准备好开始了吗？"
],
"Katsuyō Academy is a": [
"Die Katsuyō Academy ist ein",
"Katsuyō Academy est un",
"Katsuyō Academy 是一个"
],
"passion project built by a learner, for learners": [
"Herzensprojekt, gebaut von einem Lernenden für Lernende",
"projet passion créé par un apprenant, pour les apprenants",
"由学习者为学习者打造的热情项目"
],
"104 Kana": [
"104 Kana",
"104 kana",
"104 个假名"
],
"129 verbs": [
"129 Verben",
"129 verbes",
"129 个动词"
],
"16 Verb Forms": [
"16 Verbformen",
"16 formes verbales",
"16 种动词形式"
],
"2,300 Kanji": [
"2.300 Kanji",
"2 300 kanji",
"2300 个汉字"
],
"496 Words": [
"496 Wörter",
"496 mots",
"496 个单词"
],
"KLC course": [
"KLC-Kurs",
"cours KLC",
"KLC 课程"
],
"essential vocab": [
"Kernvokabular",
"vocabulaire essentiel",
"核心词汇"
],
"with audio": [
"mit Audio",
"avec audio",
"带音频"
],
"✏️ Start Practicing": [
"✏️ Jetzt üben",
"✏️ Commencer à pratiquer",
"✏️ 开始练习"
],
"あ Learn Kana": [
"あ Kana lernen",
"あ Apprendre les kana",
"あ 学习假名"
],
"🆓 Free Forever": [
"🆓 Für immer kostenlos",
"🆓 Gratuit pour toujours",
"🆓 永久免费"
],
"🎨 Thoughtfully Designed": [
"🎨 Durchdacht gestaltet",
"🎨 Conçu avec soin",
"🎨 用心设计"
],
"🎯 Focused Tools": [
"🎯 Fokussierte Werkzeuge",
"🎯 Outils ciblés",
"🎯 专注的工具"
],
"🎴 Vocabulary": [
"🎴 Vokabeln",
"🎴 Vocabulaire",
"🎴 词汇"
],
"💡 Helpful Feedback": [
"💡 Hilfreiches Feedback",
"💡 Retours utiles",
"💡 有用的反馈"
],
"📅 Dates & Numbers": [
"📅 Datum & Zahlen",
"📅 Dates et nombres",
"📅 日期与数字"
],
"📋 Browse Verbs": [
"📋 Verben durchsuchen",
"📋 Parcourir les verbes",
"📋 浏览动词"
],
"📖 View Form Charts": [
"📖 Formentabellen ansehen",
"📖 Voir les tableaux",
"📖 查看形式表"
],
"📚 Learn the Basics": [
"📚 Grundlagen lernen",
"📚 Apprendre les bases",
"📚 学习基础"
],
"📦 Self-Contained": [
"📦 Eigenständig",
"📦 Autonome",
"📦 独立运行"
],
"🧠 Understanding Over Memorization": [
"🧠 Verstehen statt Auswendiglernen",
"🧠 Comprendre plutôt que mémoriser",
"🧠 理解胜于死记"
],
"Learn Kanji": [
"Kanji lernen",
"Apprendre les kanji",
"学习汉字"
],
"数字 — Numbers": [
"数字 — Zahlen",
"数字 — Nombres",
"数字"
],
"日付 — Dates (1-10)": [
"日付 — Datum (1–10)",
"日付 — Dates (1-10)",
"日付 — 日期 (1-10)"
],
"曜日 — Weekdays": [
"曜日 — Wochentage",
"曜日 — Jours de la semaine",
"曜日 — 星期"
],
"相対的な日 — Relative Days": [
"相対的な日 — Relative Tage",
"相対的な日 — Jours relatifs",
"相対的な日 — 相对日期"
],
"📚 参考表 (Reference Chart)": [
"📚 参考表 (Referenztabelle)",
"📚 参考表 (Tableau de référence)",
"📚 参考表（对照表）"
],
"Click to flip back": [
"Zum Zurückdrehen klicken",
"Cliquez pour retourner",
"点击翻回"
],
"Vocabulary Flashcards": [
"Vokabel-Karteikarten",
"Cartes de vocabulaire",
"词汇记忆卡"
],
"Click or press Space to reveal": [
"Klicken oder Leertaste drücken zum Aufdecken",
"Cliquez ou appuyez sur Espace pour révéler",
"点击或按空格键显示"
],
"Example Vocabulary": [
"Beispielvokabeln",
"Vocabulaire d'exemple",
"例词"
],
"Go to KLC Number": [
"Zu KLC-Nummer springen",
"Aller au numéro KLC",
"跳转到 KLC 编号"
],
"Kanji Flashcards": [
"Kanji-Karteikarten",
"Cartes de kanji",
"汉字记忆卡"
],
"SUN ・ DAY ・ JAPAN": [
"SONNE ・ TAG ・ JAPAN",
"SOLEIL ・ JOUR ・ JAPON",
"太阳・日・日本"
],
"🎯 Quiz yourself — Kanji Drill →": [
"🎯 Testen Sie sich — Kanji-Drill →",
"🎯 Testez-vous — Drill kanji →",
"🎯 自我测验 — 汉字练习 →"
],
"Download": [
"Herunterladen",
"Télécharger",
"下载"
],
"Godan Verb": [
"Godan-Verb",
"Verbe godan",
"五段动词"
],
"📊 Your Practice Report": [
"📊 Ihr Übungsbericht",
"📊 Votre rapport d'entraînement",
"📊 您的练习报告"
],
"What is the keyword?": [
"Wie lautet das Schlüsselwort?",
"Quel est le mot-clé ?",
"关键词是什么？"
]
});

// site-wide: practice report + vocabulary card categories
I18N_addText({
"Start practicing to see your statistics, mistake patterns, and personalized advice from Conju!": [
"Fangen Sie an zu üben, um Ihre Statistiken, Fehlermuster und persönliche Tipps von Conju zu sehen!",
"Commencez à pratiquer pour voir vos statistiques, vos erreurs récurrentes et les conseils personnalisés de Conju !",
"开始练习后，即可查看您的统计数据、错误规律，以及来自 Conju 的个性化建议！"
],
"Start Practicing →": [
"Jetzt üben →",
"Commencer à pratiquer →",
"开始练习 →"
],
"noun": [
"Substantiv",
"nom",
"名词"
],
"NOUN": [
"SUBSTANTIV",
"NOM",
"名词"
],
"verb": [
"Verb",
"verbe",
"动词"
],
"VERB": [
"VERB",
"VERBE",
"动词"
],
"adjective": [
"Adjektiv",
"adjectif",
"形容词"
],
"ADJECTIVE": [
"ADJEKTIV",
"ADJECTIF",
"形容词"
],
"adverb": [
"Adverb",
"adverbe",
"副词"
],
"ADVERB": [
"ADVERB",
"ADVERBE",
"副词"
],
"particle": [
"Partikel",
"particule",
"助词"
],
"PARTICLE": [
"PARTIKEL",
"PARTICULE",
"助词"
],
"phrase": [
"Wendung",
"expression",
"短语"
],
"PHRASE": [
"WENDUNG",
"EXPRESSION",
"短语"
],
"pronoun": [
"Pronomen",
"pronom",
"代词"
],
"PRONOUN": [
"PRONOMEN",
"PRONOM",
"代词"
],
"number": [
"Zahlwort",
"numéral",
"数词"
],
"NUMBER": [
"ZAHLWORT",
"NUMÉRAL",
"数词"
],
"counter": [
"Zählwort",
"spécificatif",
"量词"
],
"COUNTER": [
"ZÄHLWORT",
"SPÉCIFICATIF",
"量词"
],
"expression": [
"Ausdruck",
"expression",
"表达"
],
"EXPRESSION": [
"AUSDRUCK",
"EXPRESSION",
"表达"
],
"conjunction": [
"Konjunktion",
"conjonction",
"连词"
],
"CONJUNCTION": [
"KONJUNKTION",
"CONJONCTION",
"连词"
],
"interjection": [
"Interjektion",
"interjection",
"感叹词"
],
"INTERJECTION": [
"INTERJEKTION",
"INTERJECTION",
"感叹词"
]
});
