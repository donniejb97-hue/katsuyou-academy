// ============================================================
// I18N — Katsuyō Academy UI language layer (en / de / fr / zh-CN)
// German is the reviewed reference translation (Sie-form).
// ============================================================
var I18N = {
  en: {
    nav_home:'Home', nav_kana:'Kana', nav_learn:'Learn', nav_group_learn:'Learn', nav_group_vocab:'Vocabulary', nav_group_practice:'Practice', nav_counters:'Counters', nav_new:'New', nav_adjectives:'Adjectives', nav_reference:'Reference', nav_conjugation:'Conjugation', nav_forms:'Forms', nav_verbs:'Verbs',
    nav_conjugator:'Conjugator', nav_kana_drill:'Kana Drill', nav_kanji_drill:'Kanji Drill', nav_talk:'Talk', nav_reading:'Reading',
    nav_dates:'Dates', nav_vocab:'Vocabulary',
    nav_vocab_quiz:'Vocab Quiz',
    vq_show:'Show me',
    vq_counts_missed:'counted as missed',
    vq_ask_katakana:'Answer in katakana',
    vq_mode_kana:'Hiragana — type youka for ようか',
    vq_mode_katakana:'Katakana — type juusu for ジュース',
    vq_mode_off:'Off — use your own Japanese keyboard',
    vq_ask_katakana:'Answer in katakana',
    vq_mode_kana:'Hiragana — type youka for ようか',
    vq_mode_katakana:'Katakana — type juusu for ジュース',
    vq_mode_off:'Off — use your own Japanese keyboard',
    vq_row_deck:'Deck',
    vq_row_ask:'Ask me',
    vq_row_serve:'Serve',
    vq_all_levels:'All levels',
    vq_no_level:'Above N3 / unlabelled',
    vq_in_round:'in play',
    vq_filters:'Filters',
    vq_all_topics:'All topics',
    vq_filters_note:'Leave these as they are and the quiz mixes everything, showing what you\'ve missed more often.',
    vocab_try_quiz:'Quiz yourself on these words →',
    vocab_search_ph:'Search — apple, ringo, りんご or 林檎',
    vocab_search_none:'Nothing matches',
    vocab_search_more:'more',
    vq_page_sub:'Vocabulary Quiz — meaning, reading, and saying it yourself',
    vq_practise:'Practise',
    vq_topics:'Topics — none selected means all',
    vq_check:'Check',
    vq_skip:'Skip',
    vq_next:'Next →',
    vq_to_cards:'← Back to the flashcards', nav_kanji:'Kanji', nav_contact:'Contact',
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
    check:'Check Answer', next:'Next Question →', skip:'Show me the answer', reset:'↺ Reset Score',
    fb_correct:'⭕ Correct!', fb_answer:'Answer:', fb_wrong:'❌ Not quite — the answer is:',
    missed_title:'📝 Missed this session — click to hear',
    click_hear:'Click to hear', hear_pron:'Hear pronunciation',
    cheat_hint:'Tap any kana to hear its pronunciation 🔊 &nbsp;·&nbsp; Hold Alt+H / Alt+K to peek',
    cheat_title_h:'Hiragana ひらがな', cheat_title_k:'Katakana カタカナ',
    cheat_basic:'Basic (46)', cheat_dakuten:'Dakuten & Handakuten (25)', cheat_combos:'Combos (33)',
    // ---- index ----
    hero_badge:'Japanese Study Toolkit',
    back_to_top:'Back to top',
    card_kana_t:"<span class=\"jp\">仮名</span> — Kana",
    card_kana_d:"Practice all <strong>104 hiragana and katakana</strong> characters. Learn both Japanese writing systems side-by-side with <strong>audio pronunciation</strong>, clear charts for basic kana, dakuten (voiced sounds), and combination characters. Click any character to hear how it sounds.",
    card_kana_cta:"Learn Kana →",
    card_kdrill_t:"<span class=\"jp\">仮名練習</span> — Kana Drill",
    card_kdrill_d:"Quiz yourself in both directions—<strong>kana → rōmaji</strong> by typing, or <strong>rōmaji → kana</strong> by picking the right character. Filter by script and by set, and watch your <strong>score, streak and personal best</strong> climb. Stuck? <strong>Hold Alt+H or Alt+K</strong> to peek at a cheat sheet without leaving the question. A <strong>progress chart</strong> shows every kana you've answered and how often you've missed it.",
    card_kdrill_cta:"Start Drilling →",
    card_kjdrill_t:"<span class=\"jp\">漢字練習</span> — Kanji Drill",
    card_kjdrill_d:"Test yourself on all <strong>2,300 KLC kanji</strong>, either character → keyword or keyword → character. <strong>Pick a range</strong> so you drill only the block you're studying rather than the whole course. Typed answers get <strong>three-tier feedback</strong>—correct, close enough to try again, or the answer revealed—and everything you miss collects in a <strong>review list</strong> at the bottom of the page.",
    card_kjdrill_cta:"Start Drilling →",
    card_learn_t:"<span class=\"jp\">学習</span> — Learn",
    card_learn_d:"Clear, visual explanations of how Japanese verb conjugation actually works. Understand the <em>why</em> behind the patterns, not just the rules. Learn to identify verb types, understand the hiragana sound system, and see step-by-step walkthroughs of each conjugation type.",
    card_learn_cta:"Start Learning →",
    card_forms_t:"<span class=\"jp\">活用形</span> — Forms",
    card_forms_d:"Comprehensive quick-reference conjugation charts covering 16 verb forms for all three verb types: Godan (五段), Ichidan (一段), and Suru (する). From basic forms (negative, polite, past) to advanced (passive, causative, conditional), color-coded tables show you exactly how each form is created. Perfect for quick lookups or comparing patterns side-by-side.",
    card_forms_cta:"View Forms →",
    card_verbs_t:"<span class=\"jp\">動詞</span> — Verb List",
    card_verbs_d:"Browse all <strong>129 verbs</strong> in our database, organized by type (Godan, Ichidan, Suru) with kanji, hiragana, and English meanings. <strong>Search</strong> to find specific verbs instantly, or <strong>filter by JLPT level</strong> (N5, N4, N3) to focus on vocabulary appropriate for your level.",
    card_verbs_cta:"Browse Verbs →",
    card_conj_t:"<span class=\"jp\">活用</span> — The Conjugator",
    card_conj_d:"The heart of Katsuyō Academy. Practice conjugating verbs across <strong>16 forms</strong> with instant feedback. <strong>No Japanese keyboard needed</strong>—type <em>ikanai</em> and it becomes いかない as you go, and kanji answers count just as much as kana. Choose a difficulty or a single form, filter by JLPT level, and work in <strong>rounds</strong> that end with a summary. Verbs you get wrong <strong>come back</strong> until you've got them twice, and every mistake is explained with the exact rule you needed.",
    card_conj_cta:"Start Practicing →",
    card_dojo_t:"<span class=\"jp\">日付</span> — Dates & Numbers",
    card_dojo_d:"Practice Japanese dates, weekdays, months, and numbers. Questions cover today's date, future/past calculations, relative days (<span class=\"jp\">きのう</span>, <span class=\"jp\">あした</span>), and large numbers. <strong>Full sentence answers required</strong> — build proper grammar habits with です and でした endings. Includes a handy <strong>reference chart</strong> for the tricky readings.",
    card_dojo_cta:"Enter the Dojo →",
    card_vocab_t:"<span class=\"jp\">単語</span> — Vocabulary",
    card_vocab_d:"Practice <strong>496 essential Japanese words</strong> with intelligent flashcards. Study with <strong>hiragana, kanji, and katakana</strong> across <strong>8 different learning modes</strong>. Toggle between Japanese→English or English→Japanese practice, show or hide readings, and see both scripts side-by-side. <strong>Smart shuffle prioritises unseen cards</strong>, and progress tracking shows how many you've studied.",
    card_vocab_cta:"Start Learning Words →",
    card_kanji_t:"<span class=\"jp\">漢字</span> — Kanji",
    card_kanji_d:"Practice <strong>2,300 kanji</strong> from the acclaimed <strong>Kodansha Learner's Course</strong>. Each card shows the kanji character, English keyword, <strong>on'yomi</strong> and <strong>kun'yomi</strong> readings, plus <strong>example vocabulary</strong> with meanings. Filter by level, <strong>shuffle cards</strong>, or <strong>jump to any KLC number</strong>. Keyboard shortcuts included!",
    card_kanji_cta:"Learn Kanji →",
    btn_start_kana:'Start with Kana', btn_explore_kanji:'Explore Kanji',
    btn_learn_basics:'Learn the Basics', btn_practice_conj:'Practice Conjugation',
    // ---- home: where to start + live demo strip ----
    tour_title:"Where to Start",
    tour_sub:"New to Japanese? This is the order that works. About an hour a day gets you through it.",
    tour_1_t:"Learn the kana",
    tour_1_d:"Both alphabets, 104 characters. A week or two, and everything after this gets easier.",
    tour_2_t:"Get the grammar basics",
    tour_2_d:"Particles, word order, the polite form — enough to build a sentence on purpose.",
    tour_3_t:"Drill the conjugations",
    tour_3_d:"Every form, on every verb type, until you stop having to think about them.",
    tour_4_t:"Hold a conversation",
    tour_4_d:"Order food, ask directions, get corrected as you go. This is what the rest was for.",
    demo_title:"See It Working",
    demo_sub:"Three of the tools, running right here. Nothing to install, no account.",
    demo_tab_kana:"Kana Drill",
    demo_tab_conj:"Conjugator",
    demo_tab_talk:"Talk",
    demo_kana_tag_hira:"HIRAGANA — TYPE THE READING",
    demo_kana_tag_kata:"KATAKANA — TYPE THE READING",
    demo_kana_ph:"Type the rōmaji…",
    demo_kana_right:"Correct.",
    demo_kana_listen_hint:"Hear it before you answer",
    demo_fix_show:"show",
    demo_fix_hide:"hide",
    demo_conj_ime:"Type rōmaji — it becomes kana as you go, exactly as it does in the drill.",
    demo_next:"Next →",
    demo_check:"Check",
    demo_conj_ph:"your answer",
    demo_conj_right:"Correct. Kanji spellings are accepted too — try 食べない.",
    demo_conj_kanji:"Correct — and note it took the kanji. The real drill accepts every valid spelling and variant form, not just one.",
    demo_conj_wrong:"Not quite.",
    demo_conj_answer:"Answer:",
    demo_talk_note:"A recorded exchange. The real thing answers live, stays in character, and speaks out loud.",
    demo_chat_1:"Welcome! Have you decided what to order?",
    demo_chat_2:"Certainly. One moment please.",
    demo_chat_fix:"お茶 works, but one more word makes it natural: お茶をひとつお願いします。",
    demo_cta_kana:"Open the full Kana Drill →",
    demo_cta_conj:"Open the full Conjugator →",
    demo_cta_talk:"Open Talk →",
    form_negative:"NEGATIVE (ない)",
    form_past:"PAST (た)",
    form_potential:"POTENTIAL (できる)",
    toolkit_title:'The Toolkit',
    toolkit_sub:"Ten interconnected tools covering the foundations of Japanese",
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
    warn_try_again:'⚠️ Not quite — try again!', more_examples:'📚 Show More Examples',
    talk_title:'Talk with Katsu',
    talk_intro:'Have a real back-and-forth in Japanese. Pick how you want to practice, chat with Katsu for as long as you like, then stop any time to get an assessment of how you did.',
    talk_step1:'1. Choose a practice mode', talk_step2:'2. Set the details',
    talk_mode_scenario_t:'Scenario Roleplay', talk_mode_scenario_d:'Katsu plays a character — order food, ask directions, check into a hotel.',
    talk_mode_freechat_t:'Free Chat', talk_mode_freechat_d:'Open conversation at your level, about whatever you like.',
    talk_mode_grammar_t:'Grammar-Targeted', talk_mode_grammar_d:'Katsu steers the conversation to draw out one specific form.',
    talk_scenario:'Scenario', talk_level:'Level', talk_form:'Form',
    talk_pick_mode_hint:'Pick a mode above to see its options.',
    talk_start:'Start Conversation', talk_stop:'Stop',
    talk_placeholder:'Type your reply in Japanese (or ask Katsu for help)…', talk_send:'Send',
    talk_correction_hint:'Katsu stays in character, and adds a short correction note when you make a mistake. Change how Japanese is shown any time — it re-renders instantly.',
    talk_show:'Show', talk_english:'English', talk_correction:'Correction',
    talk_scenario_custom:'✏️ Custom…', talk_custom:'Describe',
    talk_custom_placeholder:"e.g. returning a shirt that doesn't fit, at a department store",
    talk_ended:'That wraps up this situation. Would you like to keep the conversation going?',
    talk_keep_going:'Keep going', talk_continuing:'— continuing —',
    talk_script_furigana:'Furigana', talk_script_kanji:'Kanji', talk_script_kana:'Kana', talk_script_romaji:'Rōmaji',
    talk_stop_title:'Stop this conversation?', talk_stop_body:'You can get an assessment of this session, or just pick a different practice mode.',
    talk_get_assessment:'Get Assessment', talk_choose_different:'Choose Different Practice', talk_keep_talking:'Keep Talking',
    talk_assessment_title:'📊 Session Assessment',
    talk_download:'⬇ Download', talk_you:'You',
    talk_assess_loading:'putting your report together…',
    talk_assess_empty:'Not enough of a conversation yet to assess — say something first!',
    talk_assess_failed:'Couldn\u2019t generate an assessment right now — please try again in a moment.',
    talk_assess_summary:'Summary', talk_assess_well:'What you did well', talk_assess_improve:'What to work on',
    talk_assess_words:'Words & phrases to remember', talk_assess_next:'Next step',
    talk_assess_transcript:'Full conversation', talk_report_title:'Conversation Report',
    sensei_placeholder:'How do I say… in Japanese?', sensei_send:'Ask',
    sensei_greeting:'こんにちは！(Konnichiwa!) I’m Katsu. Ask me how to say something in Japanese, or any grammar question. 何でも聞いてください！(Nandemo kiite kudasai! — Ask me anything!)',
    sensei_error:'すみません (Sumimasen) — I couldn’t reach the server.', sensei_retry:'↻ Try again',
    sensei_proactive_label:'Let Katsu check in when I seem stuck', sensei_clear_history:'🗑 Clear chat', sensei_restore_chat:'↩ Show previous conversation', sensei_clear_mistakes:'🗑 Clear saved mistakes',
    // ---- Conjugator: input helper, streak, session, badges ----
    streak:'Streak', best_short:'best',
    answer_placeholder_romaji:'ikanai → いかない',
    answer_placeholder_kana:'\u3072\u3089\u304c\u306a\u3067\u5165\u529b...',
    romaji_on_title:'Romaji typing is on \u2014 type ikanai, get \u3044\u304b\u306a\u3044. Click to turn off.',
    romaji_off_title:'Romaji typing is off \u2014 type with your own Japanese keyboard. Click to turn on.',
    romaji_title:"\u26a0\ufe0f That didn't convert",
    romaji_msg:"Your answer is still in Latin letters, so it can't be checked as Japanese.",
    romaji_tip_on:'Romaji typing is switched on, so <strong>ikanai</strong> should turn into \u3044\u304b\u306a\u3044 as you type. If some of it stayed as letters, check the spelling \u2014 every syllable needs its vowel.',
    romaji_tip_off:'Romaji typing is switched off. Turn it back on with the <strong>\u3042/A</strong> button next to the answer box, or type with a Japanese keyboard.',
    opt_type_quiz:'Also ask me to name the verb type',
    badge_review:'\ud83d\udd01 Review \u2014 you missed this one before',
    badge_type_quiz:'First: which type of verb is this?',
    goal_10:'Round of 10', goal_20:'Round of 20', goal_50:'Round of 50', goal_none:'No limit',
    ai_thinking:'Conju is writing a fuller explanation\u2026',
    sess_done:'Round complete', sess_accuracy:'Accuracy', sess_correct:'Correct',
    sess_best_streak:'Best streak', sess_skipped:'Answers shown',
    sess_weakest:'Most missed this round:', sess_queue:'Queued to come back around:',
    sess_queue_clear:'Nothing outstanding \u2014 your review queue is clear.',
    sess_again:'Another round \u2192',
    ex_label:'e.g.',
    answer_placeholder_type:'godan / ichidan / suru / irregular',
    type_quiz_continue:'Now conjugate it \u2014 continuing in {n}s.',
    continue_in:'Continue ({n}) \u2192',
    continue_now:'Continue \u2192',
    conj_info_title:'Shortcuts & options',
    conj_info_sub:'Keyboard shortcuts and what the controls on this page do.',
    romaji_toast_on:'Romaji typing on \u2014 ikanai \u2192 \u3044\u304b\u306a\u3044',
    romaji_toast_off:'Romaji typing off \u2014 use your own Japanese keyboard',
    conj_info_rows:[
      ['Enter','Check your answer, then again to move to the next question.'],
      ['Alt+R','Turn romaji typing on or off \u2014 the same as the \u3042 / A button beside the answer box.'],
      ['Alt+H','Show or hide the hint for this question.'],
      ['Alt+S','Show me the answer. No penalty \u2014 it just breaks your streak.'],
      ['Alt+I (hold)','Hold to read this box; let go and it closes. The \u24d8 button opens it to stay \u2014 Esc or a click outside closes that.'],
      ['\u3042 / A button','Romaji typing. With it on, you type ikanai and get \u3044\u304b\u306a\u3044, so you don\u2019t need a Japanese keyboard. Turn it off if you already have one.'],
      ['Answers','Kana or kanji both count \u2014 \u884c\u304b\u306a\u3044 and \u3044\u304b\u306a\u3044 are equally right. Common alternatives like \u98df\u3079\u308c\u308b are accepted too, with a note about the textbook form.'],
      ['\ud83d\udd01 Review','A verb and form you got wrong before. Get it right twice and it stops coming back.'],
      ['Verb-type questions','The occasional \u201cwhat type is this verb?\u201d question. Switch it off with the checkbox if you only want conjugation.'],
      ['Round','How many questions before you get a summary. Set it to no limit to keep going.']
    ],
    sensei_review_btn:'📝 Go over my last mistakes',
    sensei_review_q:'What did I just get wrong, and why? Explain it simply.',
    sensei_nudge_1:'Looks like this one’s tricky — want a hint? 💡',
    sensei_nudge_2:'I noticed a few misses in a row — I’m here if you want to talk it through!',
    // ---- homepage ----
    hero_desc:"A free Japanese learning platform. Learn and drill kana, kanji, vocabulary and every verb form, then put it to use in conversation — all in one place. No account, nothing to install.",
    // ---- home: hero + closing ----
    hero_browse:"Browse the tools ↓",
    hero_browse_short:"Browse the tools",
    meta_kana:"kana, with audio",
    meta_kanji:"kanji from the KLC",
    meta_vocab:"vocabulary cards",
    meta_langs:"languages",
    demo_eyebrow:"Try it right here",
    demo_kana_hear:"Not sure? Hear it first.",
    creator_note_plain:"I built Katsuyō Academy because I needed it myself. Scattered textbook chapters, confusing online resources, flashcard apps that didn't quite work the way I wanted — I wanted everything in one place, designed the way I learn best. This is that place. If it helps you too, then it's done its job.",
    btn_practice_kana:"Practice Kana",
    btn_practice_kanji:"Practice Kanji",
    btn_practice_talk:"Practice Speaking",
    badge_new:"New",
    intro_title:"Your Complete Japanese Foundation",
    intro_p1:"Katsuyō Academy is a <strong>passion project built by a learner, for learners</strong>. It's not trying to replace a textbook or be the next language learning app. Instead, it's a focused set of interconnected tools that cover the foundational building blocks of Japanese—the things you'll reference and practice over and over again.",
    intro_p2:"No accounts, no sign-ups, no paywalls. Your scores, streaks, and flashcard progress live in your own browser and are never uploaded—the only features that reach a server are Katsu, the optional AI tutor, and conversation practice.",
    stat_kana_v:"104 Kana",
    stat_kana_n:"audio + drills",
    stat_kanji_v:"2,300 Kanji",
    stat_kanji_n:"KLC course + drill",
    stat_vocab_v:"496 Words",
    stat_vocab_n:"essential vocab",
    stat_forms_v:"16 Verb Forms",
    stat_forms_n:"129 verbs",
    intro_quote:"“A free Japanese study suite built by a learner for learners—covering kana, kanji, vocabulary, verb conjugation and conversation practice, with drills that track what you've learned, in one cohesive, beautifully designed package.”",
    card_talk_t:"<span class=\"jp\">会話</span> — Talk",
    card_talk_d:"Actually use what you've learned. Pick a <strong>scenario</strong>—ordering food, a doctor's visit, buying cinema tickets—or describe your own. Prefer something looser? <strong>Free chat</strong>, or drill <strong>one grammar form</strong> until it sticks. Set the level to <strong>N5, N4 or N3</strong> and read the Japanese in <strong>kanji, kana or rōmaji</strong>. Stop whenever you like for a <strong>written assessment</strong>: what went well, what to fix, the full transcript, and the words you met along the way.",
    card_talk_cta:"Start Talking →",
    card_reading_t:"<span class=\"jp\">読解</span> — Reading",
    card_reading_d:"Graded short stories from <strong>N5 to N1</strong>, five per level to start. Read in <strong>kana, with furigana, or kanji only</strong>, listen to the story read aloud, check the key words, then answer <strong>comprehension questions graded instantly</strong>. Missed one? <strong>Show in text</strong> points to the exact sentence with the answer.",
    card_reading_cta:"Start Reading →",
    why_title:"What Makes This Different",
    why_install_t:"Nothing to Install",
    why_install_d:"Fast, focused pages that open straight in your browser. No app to download, no account to create, nothing to configure—on your desktop, your tablet or your phone.",
    why_focus_t:"Focused Tools",
    why_focus_d:"Not a gamified app or a full curriculum. Just focused, interconnected reference and practice tools for the foundational building blocks you'll use every day.",
    why_understand_t:"Understanding Over Memorization",
    why_understand_d:"The Learn section explains <em>why</em> patterns work the way they do. When you understand the logic, conjugation becomes intuitive instead of a memory test.",
    why_feedback_t:"Helpful Feedback",
    why_feedback_d:"The Conjugator doesn't just say “wrong”—it shows the exact rule you needed and identifies your specific error, then brings that verb back later. Flashcards prioritise unseen cards, and the kana and kanji drills remember every character you've answered.",
    why_design_t:"Thoughtfully Designed",
    why_design_d:"Warm, aged-paper aesthetics with clean typography. It feels more like a well-crafted study journal than a typical language app. No ads, no clutter, no distractions.",
    why_langs_t:"Four Languages",
    why_langs_d:"The whole site—every page, every button, every explanation—reads in English, German, French or Simplified Chinese. Switch language from the menu at any time; your place is kept.",
    why_katsu_t:"Ask Katsu",
    why_katsu_d:"<span class=\"jp\">カツ先生</span>, an AI tutor, waits in the corner of every page. Ask why a conjugation works, what separates は from が, or anything that has you stuck—and get an answer in the language you're reading in. Katsu also notices the mistakes you make elsewhere on the site, and can talk you through them.",
    why_free_t:"Free Forever",
    why_free_d:"A passion project born from my own struggles learning Japanese. No paywalls, no premium tiers, no “sign up to continue.” Just free resources for anyone who wants to learn.",
    start_title:"Ready to Get Started?",
    start_desc:"Whether you're learning kana, drilling characters, studying verbs, building vocabulary or holding your first conversation—choose your path below.",
    start_kana:"Learn Kana",
    start_learn:"Learn the Basics",
    start_conj:"Start Practicing",
    start_talk:"Start Talking",
    start_kana_drill:"Practice Kana",
    start_forms:"View Form Charts",
    start_verbs:"Browse Verbs",
    start_vocab:"Vocabulary",
    start_kanji:"Learn Kanji",
    start_dates:"Dates & Numbers",
    start_kanji_drill:"Practice Kanji",
    creator_note:"<strong>A note from the creator:</strong><br>I built Katsuyō Academy because I needed it myself. Scattered textbook chapters, confusing online resources, flashcard apps that didn't quite work the way I wanted—I wanted everything in one place, designed the way I learn best. This is that place. If it helps you too, then it's done its job. <span class=\"jp\">頑張ってください！</span>",
    // ---- toolkit categories ----
    cat_reference:"Reference",
    cat_practice:"Practice",
    cat_conversation:"Conversation",
    legend_ref:"Reference — read and look up",
    legend_prac:"Practice — tracks what you get wrong",
    legend_conv:"Conversation — use it for real",
    // ---- talk: speech + romaji input ----
    talk_placeholder_romaji:"Reply in Japanese — type romaji, get kana",
    talk_read_aloud:"Read aloud",
    talk_read_aloud_hint:"Speak each of Katsu’s replies automatically",
    talk_listen:"Listen",
    // ---- talk: voice picker ----
    talk_voice:"Voice",
    talk_voice_preview:"▶ Preview",
    talk_mic_start:"Speak your reply (Alt+M)",
    talk_mic_stop:"Stop listening",
    talk_mic_denied:"Microphone access was blocked. Allow it in your browser\u2019s address bar to speak your replies.",
    talk_mic_unavailable:"Speech input is not available right now. You can still type.",
    talk_mic_error:"The microphone stopped unexpectedly. You can keep typing.",
    talk_mic_reconnect:"Reconnecting\u2026",
    talk_pron_label:"Pronunciation",
    talk_pron_accuracy:"accuracy",
    talk_pron_fluency:"fluency",
    talk_pron_hide:"Hide",
    talk_pron_show:"show",
    dojo_practise:"Practise",
    dojo_selected:"selected",
    dojo_scope_weak:"\u25ce Weak spots",
    dojo_scope_counters:"Counters",
    dojo_scope_datetime:"Dates & time",
    dojo_scope_numbers:"Numbers & years",
    dojo_answer_en:"Answer in English",
    dojo_type_en:"Type your answer\u2026",
    dojo_weak_tracked:"weak spots tracked",
    dojo_weak_none:"no weak spots yet \u2014 they appear as you miss things",
    dojo_weak_badge:"seen before",
    dojo_weak_added:"added to your weak spots",
    dojo_weak_cleared:"weak spot cleared",
    voice_female:"Female",
    voice_male:"Male",
    voice_neutral:"Neutral",
    voice_sample:"こんにちは。今日はいい天気ですね。",
    talk_audio:"Audio",
    // ---- talk: input modes + folded corrections ----
    talk_corrections:"Corrections",
    talk_corrections_hint:"Open every correction by default, instead of folding them away",
    talk_placeholder_katakana:"Katakana — juusu → ジュース",
    input_mode_kana:"Hiragana — type ikanai, get いかない. Alt+K for katakana.",
    input_mode_katakana:"Katakana — type ju-su for ジュース. Use - for the ー mark. Alt+H for hiragana.",
    input_mode_off:"Off — use your own Japanese keyboard.",
    input_mode_toast_kana:"ひらがな — hiragana input",
    input_mode_toast_katakana:"カタカナ — katakana input",
    input_mode_toast_off:"Romaji input off",
    // ---- talk: letting time pass ----
    talk_wait_idle:"Let time pass — skip ahead when there is nothing to say (Alt+W)",
    talk_wait_armed:"Nothing to answer — time skips ahead on its own. Start typing to stay here.",
    talk_time_passes:"— a few minutes later —",
    // ---- vocabulary: shortcuts dialog ----
    vocab_info_title:"Shortcuts & options",
    vocab_info_sub:"Keyboard shortcuts and what the controls on this page do.",
    vocab_info_rows:[
      ["← / →","Previous and next card."],
      ["Space","Hear the word read aloud."],
      ["Alt+F (hold)","Hold to flip the card; let go and it flips back. Click the card to flip it and keep it flipped."],
      ["Alt+E","Show the translation first, instead of the Japanese."],
      ["Alt+K","Show the kanji spelling."],
      ["Alt+T","Show the katakana spelling."],
      ["Alt+R","Show rōmaji under the word."],
      ["Alt+S","Shuffle the deck."],
      ["Alt+V","Open the voice options next to Listen."],
      ["Alt+I (hold)","Hold to read this box; let go and it closes. The ⓘ button opens it to stay — Esc or a click outside closes that."],
    ],
    // ---- talk: shortcuts dialog ----
    talk_info_title:"Shortcuts & options",
    talk_info_sub:"Keyboard shortcuts and what the controls on this page do.",
    talk_info_rows:[
      ["Enter","Send your reply."],
      ["Alt+M","Speak your reply instead of typing it, and see how your pronunciation scored."],
      ["Alt+H","Hiragana input — type ikanai, get いかない."],
      ["Alt+K","Katakana input — type ju-su, get ジュース. Use - for the ー mark."],
      ["Alt+L","Turn romaji input off and use your own Japanese keyboard."],
      ["Alt+W","Let time pass, when Katsu has stepped away and there is nothing to reply to."],
      ["Alt+I (hold)","Hold to read this box; let go and it closes. The ⓘ button opens it to stay — Esc or a click outside closes that."],
      ["あ / ア / A button","The same three input modes, by mouse. The button shows which one is on."],
      ["⏳ button","The same time skip, by mouse. It lights up and counts down when Katsu’s turn leaves nothing to answer — typing anything cancels it."],
      ["Furigana / Kanji / Kana / Rōmaji","How Katsu's Japanese is written. Changing it re-renders everything instantly."],
      ["+ Rōmaji / + English","Extra lines under the Japanese, rather than instead of it."],
      ["+ Corrections","Corrections start folded so they don't bury the conversation. This opens them all by default; you can also click any one to open it."],
      ["🔊 Read aloud","Speak each of Katsu's replies automatically. Listen under a message plays just that one."],
      ["Voice","Which Japanese voice speaks. Preview plays a sample — set it before you start, since the first reply speaks straight away."],
      ["Stop","Ends the conversation and offers a written assessment."],
    ],
  },
  de: {
    nav_home:'Start', nav_kana:'Kana', nav_learn:'Lernen', nav_group_learn:'Lernen', nav_group_vocab:'Vokabeln', nav_group_practice:'Üben', nav_counters:'Zählwörter', nav_new:'Neu', nav_adjectives:'Adjektive', nav_reference:'Referenz', nav_conjugation:'Konjugation', nav_forms:'Formen', nav_verbs:'Verben',
    nav_conjugator:'Konjugator', nav_kana_drill:'Kana-Drill', nav_kanji_drill:'Kanji-Drill', nav_talk:'Gespräch', nav_reading:'Lesen',
    nav_dates:'Datum', nav_vocab:'Vokabeln',
    nav_vocab_quiz:'Vokabelquiz',
    vq_show:'Zeig mir',
    vq_counts_missed:'gilt als nicht gewusst',
    vq_ask_katakana:'Antwort in Katakana',
    vq_mode_kana:'Hiragana — youka ergibt ようか',
    vq_mode_katakana:'Katakana — juusu ergibt ジュース',
    vq_mode_off:'Aus — eigene japanische Tastatur',
    vq_ask_katakana:'Antwort in Katakana',
    vq_mode_kana:'Hiragana — youka ergibt ようか',
    vq_mode_katakana:'Katakana — juusu ergibt ジュース',
    vq_mode_off:'Aus — eigene japanische Tastatur',
    vq_row_deck:'Deck',
    vq_row_ask:'Frag mich',
    vq_row_serve:'Zeigen',
    vq_all_levels:'Alle Stufen',
    vq_no_level:'Über N3 / ohne Stufe',
    vq_in_round:'im Spiel',
    vq_filters:'Filter',
    vq_all_topics:'Alle Themen',
    vq_filters_note:'Unverändert mischt das Quiz alles und zeigt häufiger, was du nicht konntest.',
    vocab_try_quiz:'Teste dich mit diesen Wörtern →',
    vocab_search_ph:'Suchen — apple, ringo, りんご oder 林檎',
    vocab_search_none:'Nichts gefunden für',
    vocab_search_more:'weitere',
    vq_page_sub:'Vokabelquiz — Bedeutung, Lesung und selbst sagen',
    vq_practise:'Üben',
    vq_topics:'Themen — keine Auswahl heißt alle',
    vq_check:'Prüfen',
    vq_skip:'Überspringen',
    vq_next:'Weiter →',
    vq_to_cards:'← Zurück zu den Karteikarten', nav_kanji:'Kanji', nav_contact:'Kontakt',
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
    check:'Antwort prüfen', next:'Nächste Frage →', skip:'Antwort zeigen', reset:'↺ Punkte zurücksetzen',
    fb_correct:'⭕ Richtig!', fb_answer:'Antwort:', fb_wrong:'❌ Nicht ganz — die richtige Antwort ist:',
    missed_title:'📝 In dieser Runde verfehlt — zum Anhören klicken',
    click_hear:'Zum Anhören klicken', hear_pron:'Aussprache anhören',
    cheat_hint:'Klicken Sie ein Kana an, um die Aussprache zu hören 🔊 &nbsp;·&nbsp; Alt+H / Alt+K gedrückt halten für Schnellansicht',
    cheat_title_h:'Hiragana ひらがな', cheat_title_k:'Katakana カタカナ',
    cheat_basic:'Grundzeichen (46)', cheat_dakuten:'Dakuten & Handakuten (25)', cheat_combos:'Kombinationen (33)',
    hero_badge:'Japanisch-Lernwerkzeuge',
    back_to_top:'Nach oben',
    card_kana_t:"<span class=\"jp\">仮名</span> — Kana",
    card_kana_d:"Üben Sie alle <strong>104 Hiragana- und Katakana-Zeichen</strong>. Lernen Sie beide japanischen Schriftsysteme nebeneinander — mit <strong>Audio-Aussprache</strong> und übersichtlichen Tabellen für Grundzeichen, Dakuten (stimmhafte Laute) und Kombinationszeichen. Klicken Sie ein Zeichen an, um es zu hören.",
    card_kana_cta:"Kana lernen →",
    card_kdrill_t:"<span class=\"jp\">仮名練習</span> — Kana-Drill",
    card_kdrill_d:"Prüfen Sie sich in beide Richtungen — <strong>Kana → Rōmaji</strong> durch Tippen oder <strong>Rōmaji → Kana</strong> durch Auswählen des richtigen Zeichens. Filtern Sie nach Schrift und nach Gruppe und sehen Sie zu, wie <strong>Punktzahl, Serie und Bestwert</strong> steigen. Hängen geblieben? <strong>Halten Sie Alt+H oder Alt+K</strong> gedrückt, um einen Blick auf die Tabelle zu werfen, ohne die Frage zu verlassen. Eine <strong>Fortschrittsübersicht</strong> zeigt jedes beantwortete Kana und wie oft Sie es verfehlt haben.",
    card_kdrill_cta:"Drill starten →",
    card_kjdrill_t:"<span class=\"jp\">漢字練習</span> — Kanji-Drill",
    card_kjdrill_d:"Testen Sie sich an allen <strong>2.300 KLC-Kanji</strong>, wahlweise Zeichen → Schlüsselwort oder Schlüsselwort → Zeichen. <strong>Wählen Sie einen Bereich</strong>, damit Sie nur den Block üben, den Sie gerade lernen, statt des ganzen Kurses. Getippte Antworten erhalten <strong>dreistufiges Feedback</strong> — richtig, nah genug für einen zweiten Versuch oder Antwort aufgedeckt — und alles, was Sie verfehlen, sammelt sich in einer <strong>Wiederholungsliste</strong> am Seitenende.",
    card_kjdrill_cta:"Drill starten →",
    card_learn_t:"<span class=\"jp\">学習</span> — Lernen",
    card_learn_d:"Klare, visuelle Erklärungen, wie die japanische Verbkonjugation wirklich funktioniert. Verstehen Sie das <em>Warum</em> hinter den Mustern, nicht nur die Regeln. Lernen Sie, Verbtypen zu erkennen, verstehen Sie das Hiragana-Lautsystem und folgen Sie Schritt-für-Schritt-Anleitungen zu jeder Konjugationsart.",
    card_learn_cta:"Jetzt lernen →",
    card_forms_t:"<span class=\"jp\">活用形</span> — Formen",
    card_forms_d:"Umfassende Schnellreferenz-Tabellen zu 16 Verbformen für alle drei Verbtypen: Godan (五段), Ichidan (一段) und Suru (する). Von Grundformen (Verneinung, Höflichkeitsform, Vergangenheit) bis zu fortgeschrittenen Formen (Passiv, Kausativ, Konditional) zeigen farbcodierte Tabellen genau, wie jede Form gebildet wird. Ideal zum schnellen Nachschlagen und Vergleichen.",
    card_forms_cta:"Formen ansehen →",
    card_verbs_t:"<span class=\"jp\">動詞</span> — Verbliste",
    card_verbs_d:"Durchsuchen Sie alle <strong>129 Verben</strong> unserer Datenbank, geordnet nach Typ (Godan, Ichidan, Suru), mit Kanji, Hiragana und englischen Bedeutungen. Finden Sie Verben sofort per <strong>Suche</strong> oder <strong>filtern Sie nach JLPT-Stufe</strong> (N5, N4, N3), passend zu Ihrem Niveau.",
    card_verbs_cta:"Verben durchsuchen →",
    card_conj_t:"<span class=\"jp\">活用</span> — Der Konjugator",
    card_conj_d:"Das Herzstück der Katsuyō Academy. Üben Sie die Konjugation über <strong>16 Formen</strong> hinweg, mit sofortiger Rückmeldung. <strong>Keine japanische Tastatur nötig</strong> — tippen Sie <em>ikanai</em>, und daraus wird beim Schreiben いかない; Antworten in Kanji zählen genauso wie in Kana. Wählen Sie eine Schwierigkeit oder eine einzelne Form, filtern Sie nach JLPT-Stufe und üben Sie in <strong>Runden</strong>, die mit einer Auswertung enden. Verben, die danebengingen, <strong>kommen wieder</strong>, bis Sie sie zweimal richtig hatten, und zu jedem Fehler wird genau die Regel erklärt, die gefehlt hat.",
    card_conj_cta:"Jetzt üben →",
    card_dojo_t:"<span class=\"jp\">日付</span> — Datum & Zahlen",
    card_dojo_d:"Üben Sie japanische Datumsangaben, Wochentage, Monate und Zahlen. Die Fragen umfassen das heutige Datum, Berechnungen in Zukunft und Vergangenheit, relative Tage (<span class=\"jp\">きのう</span>, <span class=\"jp\">あした</span>) und große Zahlen. <strong>Antworten in ganzen Sätzen erforderlich</strong> — so trainieren Sie korrekte Grammatik mit です und でした. Mit praktischer <strong>Referenztabelle</strong> für die kniffligen Lesungen.",
    card_dojo_cta:"Betreten Sie das Dōjō →",
    card_vocab_t:"<span class=\"jp\">単語</span> — Vokabeln",
    card_vocab_d:"Üben Sie <strong>496 wichtige japanische Wörter</strong> mit intelligenten Karteikarten. Lernen Sie mit <strong>Hiragana, Kanji und Katakana</strong> in <strong>8 verschiedenen Modi</strong>. Wechseln Sie zwischen Japanisch→Deutsch und Deutsch→Japanisch, blenden Sie Lesungen ein oder aus und sehen Sie beide Schriften nebeneinander. <strong>Das clevere Mischen bevorzugt ungesehene Karten</strong>, und die Fortschrittsanzeige zeigt, wie viele Sie schon gelernt haben.",
    card_vocab_cta:"Vokabeln lernen →",
    card_kanji_t:"<span class=\"jp\">漢字</span> — Kanji",
    card_kanji_d:"Üben Sie <strong>2.300 Kanji</strong> aus dem renommierten <strong>Kodansha Learner's Course</strong>. Jede Karte zeigt das Zeichen, das englische Stichwort, die <strong>On-Lesung</strong> und die <strong>Kun-Lesung</strong> sowie <strong>Beispielvokabeln</strong> mit Bedeutungen. Nach Stufe filtern, <strong>Karten mischen</strong> oder <strong>zu einer beliebigen KLC-Nummer springen</strong>. Tastenkürzel inklusive!",
    card_kanji_cta:"Kanji lernen →",
    btn_start_kana:'Mit Kana beginnen', btn_explore_kanji:'Kanji entdecken',
    btn_learn_basics:'Grundlagen lernen', btn_practice_conj:'Konjugation üben',
    // ---- home: where to start + live demo strip ----
    tour_title:"Wo Sie anfangen",
    tour_sub:"Neu im Japanischen? Das ist die Reihenfolge, die funktioniert. Mit etwa einer Stunde am Tag kommen Sie durch.",
    tour_1_t:"Die Kana lernen",
    tour_1_d:"Beide Silbenschriften, 104 Zeichen. Ein bis zwei Wochen — danach wird alles Weitere leichter.",
    tour_2_t:"Die Grammatik-Grundlagen",
    tour_2_d:"Partikel, Satzbau, die Höflichkeitsform — genug, um bewusst einen Satz zu bauen.",
    tour_3_t:"Konjugationen üben",
    tour_3_d:"Jede Form, bei jedem Verbtyp, bis Sie nicht mehr darüber nachdenken müssen.",
    tour_4_t:"Ein Gespräch führen",
    tour_4_d:"Essen bestellen, nach dem Weg fragen, unterwegs korrigiert werden. Dafür war der Rest da.",
    demo_title:"Einfach ausprobieren",
    demo_sub:"Drei der Werkzeuge, direkt hier lauffähig. Nichts zu installieren, kein Konto.",
    demo_tab_kana:"Kana-Drill",
    demo_tab_conj:"Konjugator",
    demo_tab_talk:"Gespräch",
    demo_kana_tag_hira:"HIRAGANA — LESUNG TIPPEN",
    demo_kana_tag_kata:"KATAKANA — LESUNG TIPPEN",
    demo_kana_ph:"Rōmaji tippen…",
    demo_kana_right:"Richtig.",
    demo_kana_listen_hint:"Anhören, bevor Sie antworten",
    demo_fix_show:"zeigen",
    demo_fix_hide:"ausblenden",
    demo_conj_ime:"Rōmaji tippen — es wird beim Schreiben zu Kana, genau wie in der Übung.",
    demo_next:"Weiter →",
    demo_check:"Prüfen",
    demo_conj_ph:"Ihre Antwort",
    demo_conj_right:"Richtig. Kanji-Schreibweisen werden ebenfalls akzeptiert — probieren Sie 食べない.",
    demo_conj_kanji:"Richtig — und beachten Sie: die Kanji-Schreibweise wurde akzeptiert. Die echte Übung nimmt jede gültige Schreibweise und Variante an, nicht nur eine.",
    demo_conj_wrong:"Nicht ganz.",
    demo_conj_answer:"Antwort:",
    demo_talk_note:"Ein aufgezeichneter Dialog. Das echte Gespräch antwortet live, bleibt in der Rolle und spricht laut.",
    demo_chat_1:"Willkommen! Haben Sie schon gewählt?",
    demo_chat_2:"Sehr gern. Einen Moment bitte.",
    demo_chat_fix:"お茶 geht, aber ein Wort mehr klingt natürlich: お茶をひとつお願いします。",
    demo_cta_kana:"Zum vollen Kana-Drill →",
    demo_cta_conj:"Zum vollen Konjugator →",
    demo_cta_talk:"Zum Gespräch →",
    form_negative:"VERNEINUNG (ない)",
    form_past:"VERGANGENHEIT (た)",
    form_potential:"POTENTIALIS (できる)",
    toolkit_title:'Die Werkzeuge',
    toolkit_sub:"Zehn miteinander verbundene Werkzeuge für die Grundlagen des Japanischen",
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
    warn_try_again:'⚠️ Nicht ganz — versuchen Sie es noch einmal!', more_examples:'📚 Mehr Beispiele zeigen',
    talk_title:'Gespräch mit Katsu',
    talk_intro:'Führen Sie ein echtes Hin und Her auf Japanisch. Wählen Sie, wie Sie üben möchten, unterhalten Sie sich so lange Sie wollen mit Katsu und beenden Sie das Gespräch jederzeit, um eine Auswertung zu erhalten.',
    talk_step1:'1. Übungsmodus wählen', talk_step2:'2. Details festlegen',
    talk_mode_scenario_t:'Rollenspiel-Szenario', talk_mode_scenario_d:'Katsu spielt eine Rolle — bestellen Sie Essen, fragen Sie nach dem Weg, checken Sie in ein Hotel ein.',
    talk_mode_freechat_t:'Freies Gespräch', talk_mode_freechat_d:'Offenes Gespräch auf Ihrem Niveau, über alles, was Sie möchten.',
    talk_mode_grammar_t:'Grammatik-Fokus', talk_mode_grammar_d:'Katsu lenkt das Gespräch so, dass eine bestimmte Form gezielt geübt wird.',
    talk_scenario:'Szenario', talk_level:'Niveau', talk_form:'Form',
    talk_pick_mode_hint:'Klicken Sie oben einen Modus an, um die Optionen zu sehen.',
    talk_start:'Gespräch starten', talk_stop:'Beenden',
    talk_placeholder:'Antworten Sie auf Japanisch (oder bitten Sie Katsu um Hilfe)…', talk_send:'Senden',
    talk_correction_hint:'Katsu bleibt in seiner Rolle und fügt bei Fehlern einen kurzen Korrekturhinweis hinzu. Sie können die Darstellung des Japanischen jederzeit ändern — sie wird sofort neu aufgebaut.',
    talk_show:'Anzeige', talk_english:'Englisch', talk_correction:'Korrektur',
    talk_scenario_custom:'✏️ Eigenes…', talk_custom:'Beschreiben',
    talk_custom_placeholder:'z. B. ein Hemd im Kaufhaus umtauschen, das nicht passt',
    talk_ended:'Damit ist diese Situation abgeschlossen. Möchten Sie das Gespräch fortsetzen?',
    talk_keep_going:'Weitermachen', talk_continuing:'— es geht weiter —',
    talk_script_furigana:'Furigana', talk_script_kanji:'Kanji', talk_script_kana:'Kana', talk_script_romaji:'Rōmaji',
    talk_stop_title:'Dieses Gespräch beenden?', talk_stop_body:'Sie können eine Auswertung dieser Sitzung erhalten oder einfach einen anderen Übungsmodus wählen.',
    talk_get_assessment:'Auswertung anzeigen', talk_choose_different:'Anderen Modus wählen', talk_keep_talking:'Weiter üben',
    talk_assessment_title:'📊 Auswertung der Sitzung',
    talk_download:'⬇ Herunterladen', talk_you:'Sie',
    talk_assess_loading:'Ihr Bericht wird erstellt…',
    talk_assess_empty:'Für eine Auswertung ist das Gespräch noch zu kurz — sagen Sie zuerst etwas!',
    talk_assess_failed:'Die Auswertung konnte gerade nicht erstellt werden — bitte versuchen Sie es gleich noch einmal.',
    talk_assess_summary:'Zusammenfassung', talk_assess_well:'Das haben Sie gut gemacht', talk_assess_improve:'Daran können Sie arbeiten',
    talk_assess_words:'Wörter & Wendungen zum Merken', talk_assess_next:'Nächster Schritt',
    talk_assess_transcript:'Das ganze Gespräch', talk_report_title:'Gesprächsbericht',
    sensei_placeholder:'Wie sagt man … auf Japanisch?', sensei_send:'Fragen',
    sensei_greeting:'こんにちは！(Konnichiwa!) Ich bin Katsu. Fragen Sie mich, wie man etwas auf Japanisch sagt, oder stellen Sie eine Grammatikfrage. 何でも聞いてください！(Nandemo kiite kudasai — fragen Sie mich einfach alles!)',
    sensei_error:'すみません (Sumimasen) — Der Server war nicht erreichbar.', sensei_retry:'↻ Erneut versuchen',
    sensei_proactive_label:'Katsu darf sich melden, wenn ich offenbar nicht weiterkomme', sensei_clear_history:'🗑 Chat löschen', sensei_restore_chat:'↩ Vorheriges Gespräch anzeigen', sensei_clear_mistakes:'🗑 Gespeicherte Fehler löschen',
    // ---- Konjugator: Eingabehilfe, Serie, Runde, Kennzeichnung ----
    streak:'Serie', best_short:'Beste',
    answer_placeholder_romaji:'ikanai → いかない',
    answer_placeholder_kana:'\u3072\u3089\u304c\u306a\u3067\u5165\u529b...',
    romaji_on_title:'Romaji-Eingabe ist an \u2014 tippen Sie ikanai, es wird \u3044\u304b\u306a\u3044. Zum Ausschalten klicken.',
    romaji_off_title:'Romaji-Eingabe ist aus \u2014 nutzen Sie Ihre eigene japanische Tastatur. Zum Einschalten klicken.',
    romaji_title:'\u26a0\ufe0f Das wurde nicht umgewandelt',
    romaji_msg:'Ihre Antwort steht noch in lateinischen Buchstaben und kann so nicht als Japanisch geprüft werden.',
    romaji_tip_on:'Die Romaji-Eingabe ist eingeschaltet, <strong>ikanai</strong> sollte also beim Tippen zu \u3044\u304b\u306a\u3044 werden. Wenn etwas als Buchstaben stehen bleibt, prüfen Sie die Schreibweise \u2014 jede Silbe braucht ihren Vokal.',
    romaji_tip_off:'Die Romaji-Eingabe ist ausgeschaltet. Schalten Sie sie mit der Schaltfläche <strong>\u3042/A</strong> neben dem Antwortfeld wieder ein, oder tippen Sie mit einer japanischen Tastatur.',
    opt_type_quiz:'Auch nach dem Verbtyp fragen',
    badge_review:'\ud83d\udd01 Wiederholung \u2014 das ging vorhin daneben',
    badge_type_quiz:'Zuerst: Was für ein Verb ist das?',
    goal_10:'Runde mit 10', goal_20:'Runde mit 20', goal_50:'Runde mit 50', goal_none:'Ohne Limit',
    ai_thinking:'Conju schreibt gerade eine ausführlichere Erklärung\u2026',
    sess_done:'Runde geschafft', sess_accuracy:'Trefferquote', sess_correct:'Richtig',
    sess_best_streak:'Beste Serie', sess_skipped:'Antworten gezeigt',
    sess_weakest:'Am häufigsten verfehlt:', sess_queue:'Kommt wieder dran:',
    sess_queue_clear:'Nichts offen \u2014 Ihre Wiederholungsliste ist leer.',
    sess_again:'Noch eine Runde \u2192',
    ex_label:'z. B.',
    answer_placeholder_type:'godan / ichidan / suru / unregelmäßig',
    type_quiz_continue:'Jetzt konjugieren \u2014 weiter in {n}s.',
    continue_in:'Weiter ({n}) \u2192',
    continue_now:'Weiter \u2192',
    conj_info_title:'Tastenkürzel & Optionen',
    conj_info_sub:'Tastenkürzel und was die Schaltflächen auf dieser Seite bewirken.',
    romaji_toast_on:'Romaji-Eingabe an \u2014 ikanai \u2192 \u3044\u304b\u306a\u3044',
    romaji_toast_off:'Romaji-Eingabe aus \u2014 bitte eigene japanische Tastatur verwenden',
    conj_info_rows:[
      ['Enter','Antwort prüfen, noch einmal für die nächste Frage.'],
      ['Alt+R','Romaji-Eingabe ein- oder ausschalten \u2014 dasselbe wie die Schaltfläche \u3042 / A neben dem Antwortfeld.'],
      ['Alt+H','Hinweis zu dieser Frage ein- oder ausblenden.'],
      ['Alt+S','Antwort zeigen. Ohne Abzug \u2014 nur die Serie reißt ab.'],
      ['Alt+I (halten)','Gedrückt halten, um hier zu lesen; loslassen schließt es. Die Schaltfläche \u24d8 öffnet es dauerhaft \u2014 Esc oder ein Klick daneben schließt es.'],
      ['Schaltfläche \u3042 / A','Romaji-Eingabe. Eingeschaltet tippen Sie ikanai und erhalten \u3044\u304b\u306a\u3044 \u2014 eine japanische Tastatur brauchen Sie dann nicht. Schalten Sie sie aus, wenn Sie bereits eine haben.'],
      ['Antworten','Kana und Kanji zählen gleichermaßen \u2014 \u884c\u304b\u306a\u3044 und \u3044\u304b\u306a\u3044 sind beide richtig. Gängige Varianten wie \u98df\u3079\u308c\u308b werden ebenfalls akzeptiert, mit einem Hinweis auf die Lehrbuchform.'],
      ['\ud83d\udd01 Wiederholung','Ein Verb samt Form, das vorhin danebenging. Zweimal richtig, und es taucht nicht mehr auf.'],
      ['Fragen zum Verbtyp','Gelegentlich die Frage „Was für ein Verb ist das?“. Mit dem Häkchen abschalten, wenn Sie nur konjugieren möchten.'],
      ['Runde','Wie viele Fragen bis zur Auswertung. Auf „Ohne Limit“ stellen, um durchzuspielen.']
    ],
    sensei_review_btn:'📝 Meine letzten Fehler durchgehen',
    sensei_review_q:'Was habe ich gerade falsch gemacht, und warum? Bitte einfach erklären.',
    sensei_nudge_1:'Das scheint kniffelig zu sein — möchten Sie einen Hinweis? 💡',
    sensei_nudge_2:'Mir ist aufgefallen, dass es gerade ein paar Fehler gab — ich bin da, falls Sie reden möchten!',
    // ---- homepage ----
    hero_desc:"Eine kostenlose Lernplattform für Japanisch. Lernen und üben Sie Kana, Kanji, Wortschatz und jede Verbform — und wenden Sie alles danach im Gespräch an. Ohne Konto, ohne Installation.",
    // ---- home: hero + closing ----
    hero_browse:"Werkzeuge ansehen ↓",
    hero_browse_short:"Werkzeuge ansehen",
    meta_kana:"Kana, mit Ton",
    meta_kanji:"Kanji aus dem KLC",
    meta_vocab:"Vokabelkarten",
    meta_langs:"Sprachen",
    demo_eyebrow:"Gleich hier ausprobieren",
    demo_kana_hear:"Unsicher? Erst anhören.",
    creator_note_plain:"Ich habe die Katsuyō Academy gebaut, weil ich sie selbst gebraucht habe. Verstreute Lehrbuchkapitel, unübersichtliche Online-Quellen, Karteikarten-Apps, die nie ganz so funktionierten, wie ich wollte — ich wollte alles an einem Ort, so gestaltet, wie ich am besten lerne. Das hier ist dieser Ort. Wenn er Ihnen auch hilft, hat er seinen Zweck erfüllt.",
    btn_practice_kana:"Kana üben",
    btn_practice_kanji:"Kanji üben",
    btn_practice_talk:"Sprechen üben",
    badge_new:"Neu",
    intro_title:"Ihr vollständiges japanisches Fundament",
    intro_p1:"Die Katsuyō Academy ist ein <strong>Herzensprojekt, von einem Lernenden für Lernende gebaut</strong>. Sie will kein Lehrbuch ersetzen und auch nicht die nächste Sprachlern-App sein. Sie ist vielmehr eine überschaubare Sammlung miteinander verbundener Werkzeuge für die Grundbausteine des Japanischen — genau die Dinge, die Sie immer wieder nachschlagen und üben.",
    intro_p2:"Keine Konten, keine Anmeldung, keine Bezahlschranken. Ihre Punkte, Serien und Karteikarten-Fortschritte bleiben in Ihrem eigenen Browser und werden nie hochgeladen — die einzigen Funktionen, die einen Server erreichen, sind Katsu, der optionale KI-Tutor, und das Gesprächstraining.",
    stat_kana_v:"104 Kana",
    stat_kana_n:"Audio + Übungen",
    stat_kanji_v:"2.300 Kanji",
    stat_kanji_n:"KLC-Kurs + Übung",
    stat_vocab_v:"496 Wörter",
    stat_vocab_n:"Grundwortschatz",
    stat_forms_v:"16 Verbformen",
    stat_forms_n:"129 Verben",
    intro_quote:"„Eine kostenlose japanische Lernsammlung, von einem Lernenden für Lernende gebaut — Kana, Kanji, Wortschatz, Verbkonjugation und Gesprächstraining, mit Übungen, die mitzählen, was Sie schon können, in einem stimmigen, schön gestalteten Paket.“",
    card_talk_t:"<span class=\"jp\">会話</span> — Gespräch",
    card_talk_d:"Wenden Sie an, was Sie gelernt haben. Wählen Sie ein <strong>Szenario</strong> — Essen bestellen, ein Arztbesuch, Kinokarten kaufen — oder beschreiben Sie Ihr eigenes. Lieber ungezwungen? <strong>Freies Gespräch</strong>, oder gezielt <strong>eine Grammatikform</strong> üben, bis sie sitzt. Stellen Sie das Niveau auf <strong>N5, N4 oder N3</strong> und lesen Sie das Japanische in <strong>Kanji, Kana oder Rōmaji</strong>. Hören Sie auf, wann Sie möchten, und erhalten Sie eine <strong>schriftliche Auswertung</strong>: was gut lief, was Sie verbessern können, das vollständige Gesprächsprotokoll und die Wörter, die Ihnen begegnet sind.",
    card_talk_cta:"Gespräch beginnen →",
    card_reading_t:"<span class=\"jp\">読解</span> — Lesen",
    card_reading_d:"Abgestufte Kurzgeschichten von <strong>N5 bis N1</strong>, zum Start fünf pro Niveau. Lesen Sie in <strong>Kana, mit Furigana oder nur mit Kanji</strong>, lassen Sie sich die Geschichte vorlesen, sehen Sie sich die wichtigsten Wörter an und beantworten Sie dann <strong>Verständnisfragen, die sofort ausgewertet werden</strong>. Etwas verfehlt? <strong>Im Text zeigen</strong> markiert genau den Satz mit der Antwort.",
    card_reading_cta:"Lesen beginnen →",
    why_title:"Was hier anders ist",
    why_install_t:"Nichts zu installieren",
    why_install_d:"Schnelle, aufgeräumte Seiten, die direkt im Browser aufgehen. Keine App zum Herunterladen, kein Konto, nichts einzurichten — auf dem Rechner, dem Tablet oder dem Telefon.",
    why_focus_t:"Klar umrissene Werkzeuge",
    why_focus_d:"Keine spielerisch aufgemachte App und kein vollständiger Lehrplan. Nur klar umrissene, miteinander verbundene Nachschlage- und Übungswerkzeuge für die Grundbausteine, die Sie täglich brauchen.",
    why_understand_t:"Verstehen statt Auswendiglernen",
    why_understand_d:"Der Lernbereich erklärt, <em>warum</em> die Muster so funktionieren, wie sie funktionieren. Wer die Logik versteht, für den wird Konjugation zur Intuition statt zur Gedächtnisprüfung.",
    why_feedback_t:"Rückmeldung, die weiterhilft",
    why_feedback_d:"Der Konjugator sagt nicht einfach „falsch“ — er zeigt genau die Regel, die gefehlt hat, benennt Ihren konkreten Fehler und legt Ihnen dasselbe Verb später noch einmal vor. Karteikarten bevorzugen ungesehene Karten, und die Kana- und Kanji-Übungen merken sich jedes Zeichen, das Sie beantwortet haben.",
    why_design_t:"Mit Sorgfalt gestaltet",
    why_design_d:"Warme Optik wie gealtertes Papier, dazu klare Typografie. Das Ganze fühlt sich eher nach einem sorgfältig gemachten Lernjournal an als nach einer üblichen Sprach-App. Keine Werbung, kein Wirrwarr, keine Ablenkung.",
    why_langs_t:"Vier Sprachen",
    why_langs_d:"Die gesamte Seite — jede Unterseite, jede Schaltfläche, jede Erklärung — liest sich auf Englisch, Deutsch, Französisch oder Chinesisch (vereinfacht). Die Sprache lässt sich jederzeit im Menü wechseln; Ihre Stelle bleibt erhalten.",
    why_katsu_t:"Fragen Sie Katsu",
    why_katsu_d:"<span class=\"jp\">カツ先生</span>, ein KI-Tutor, wartet in der Ecke jeder Seite. Fragen Sie, warum eine Konjugation so funktioniert, was は von が unterscheidet, oder was immer Sie gerade aufhält — und bekommen Sie die Antwort in der Sprache, in der Sie lesen. Katsu bemerkt außerdem die Fehler, die Sie anderswo auf der Seite machen, und geht sie mit Ihnen durch.",
    why_free_t:"Für immer kostenlos",
    why_free_d:"Ein Herzensprojekt, entstanden aus meinen eigenen Mühen beim Japanischlernen. Keine Bezahlschranken, keine Premium-Stufen, kein „Zum Weiterlesen anmelden“. Einfach kostenlose Materialien für alle, die lernen wollen.",
    start_title:"Bereit loszulegen?",
    start_desc:"Ob Sie Kana lernen, Zeichen üben, Verben durchgehen, Wortschatz aufbauen oder Ihr erstes Gespräch führen — wählen Sie unten Ihren Weg.",
    start_kana:"Kana lernen",
    start_learn:"Grundlagen lernen",
    start_conj:"Üben beginnen",
    start_talk:"Gespräch beginnen",
    start_kana_drill:"Kana üben",
    start_forms:"Formtabellen ansehen",
    start_verbs:"Verben durchsehen",
    start_vocab:"Wortschatz",
    start_kanji:"Kanji lernen",
    start_dates:"Daten & Zahlen",
    start_kanji_drill:"Kanji üben",
    creator_note:"<strong>Eine Anmerkung vom Macher:</strong><br>Ich habe die Katsuyō Academy gebaut, weil ich sie selbst gebraucht habe. Verstreute Lehrbuchkapitel, unübersichtliche Online-Quellen, Karteikarten-Apps, die nie ganz so funktionierten, wie ich wollte — ich wollte alles an einem Ort, so gestaltet, wie ich am besten lerne. Das hier ist dieser Ort. Wenn er Ihnen auch hilft, hat er seinen Zweck erfüllt. <span class=\"jp\">頑張ってください！</span>",
    // ---- toolkit categories ----
    cat_reference:"Nachschlagen",
    cat_practice:"Üben",
    cat_conversation:"Gespräch",
    legend_ref:"Nachschlagen — lesen und nachsehen",
    legend_prac:"Üben — merkt sich, was danebengeht",
    legend_conv:"Gespräch — im Ernstfall anwenden",
    // ---- talk: speech + romaji input ----
    talk_placeholder_romaji:"Auf Japanisch antworten — Romaji tippen, Kana erhalten",
    talk_read_aloud:"Vorlesen",
    talk_read_aloud_hint:"Jede Antwort von Katsu automatisch vorlesen",
    talk_listen:"Anhören",
    // ---- talk: voice picker ----
    talk_voice:"Stimme",
    talk_voice_preview:"▶ Anhören",
    talk_mic_start:"Antwort sprechen (Alt+M)",
    talk_mic_stop:"Aufnahme beenden",
    talk_mic_denied:"Der Mikrofonzugriff wurde blockiert. Erlaube ihn in der Adressleiste deines Browsers, um sprechen zu k\u00f6nnen.",
    talk_mic_unavailable:"Spracheingabe ist gerade nicht verf\u00fcgbar. Tippen geht weiterhin.",
    talk_mic_error:"Das Mikrofon hat unerwartet gestoppt. Du kannst weiter tippen.",
    talk_mic_reconnect:"Neu verbinden\u2026",
    talk_pron_label:"Aussprache",
    talk_pron_accuracy:"Genauigkeit",
    talk_pron_fluency:"Fluss",
    talk_pron_hide:"Ausblenden",
    talk_pron_show:"anzeigen",
    dojo_practise:"\u00dcben",
    dojo_selected:"ausgew\u00e4hlt",
    dojo_scope_weak:"\u25ce Schwachstellen",
    dojo_scope_counters:"Z\u00e4hlw\u00f6rter",
    dojo_scope_datetime:"Datum & Uhrzeit",
    dojo_scope_numbers:"Zahlen & Jahre",
    dojo_answer_en:"Auf Englisch antworten",
    dojo_type_en:"Antwort eingeben\u2026",
    dojo_weak_tracked:"Schwachstellen erfasst",
    dojo_weak_none:"noch keine Schwachstellen \u2014 sie entstehen durch Fehler",
    dojo_weak_badge:"schon mal da",
    dojo_weak_added:"zu deinen Schwachstellen hinzugef\u00fcgt",
    dojo_weak_cleared:"Schwachstelle beseitigt",
    voice_female:"weiblich",
    voice_male:"männlich",
    voice_neutral:"neutral",
    voice_sample:"こんにちは。今日はいい天気ですね。",
    talk_audio:"Audio",
    // ---- talk: input modes + folded corrections ----
    talk_corrections:"Korrekturen",
    talk_corrections_hint:"Alle Korrekturen standardmäßig aufklappen, statt sie einzuklappen",
    talk_placeholder_katakana:"Katakana — juusu → ジュース",
    input_mode_kana:"Hiragana — ikanai tippen, いかない erhalten. Alt+K für Katakana.",
    input_mode_katakana:"Katakana — ju-su tippen ergibt ジュース. Mit - entsteht das Zeichen ー. Alt+H für Hiragana.",
    input_mode_off:"Aus — nutzen Sie Ihre eigene japanische Tastatur.",
    input_mode_toast_kana:"ひらがな — Hiragana-Eingabe",
    input_mode_toast_katakana:"カタカナ — Katakana-Eingabe",
    input_mode_toast_off:"Romaji-Eingabe aus",
    // ---- talk: letting time pass ----
    talk_wait_idle:"Zeit vergehen lassen — weiterspringen, wenn es nichts zu sagen gibt (Alt+W)",
    talk_wait_armed:"Nichts zu beantworten — die Zeit springt von selbst weiter. Tippen Sie, um hier zu bleiben.",
    talk_time_passes:"— einige Minuten später —",
    // ---- vocabulary: shortcuts dialog ----
    vocab_info_title:"Tastenkürzel & Optionen",
    vocab_info_sub:"Tastenkürzel und was die Schaltflächen auf dieser Seite bewirken.",
    vocab_info_rows:[
      ["← / →","Vorherige und nächste Karte."],
      ["Leertaste","Das Wort vorlesen lassen."],
      ["Alt+F (halten)","Gedrückt halten, um die Karte umzudrehen; loslassen dreht sie zurück. Ein Klick auf die Karte dreht sie dauerhaft um."],
      ["Alt+E","Zuerst die Übersetzung zeigen statt des Japanischen."],
      ["Alt+K","Die Kanji-Schreibweise anzeigen."],
      ["Alt+T","Die Katakana-Schreibweise anzeigen."],
      ["Alt+R","Rōmaji unter dem Wort anzeigen."],
      ["Alt+S","Den Stapel mischen."],
      ["Alt+V","Die Stimmoptionen neben „Anhören“ öffnen."],
      ["Alt+I (halten)","Gedrückt halten, um hier zu lesen; loslassen schließt es. Die Schaltfläche ⓘ öffnet es dauerhaft — Esc oder ein Klick daneben schließt es."],
    ],
    // ---- talk: shortcuts dialog ----
    talk_info_title:"Tastenkürzel & Optionen",
    talk_info_sub:"Tastenkürzel und was die Schaltflächen auf dieser Seite bewirken.",
    talk_info_rows:[
      ["Enter","Antwort senden."],
      ["Alt+M","Antwort sprechen statt tippen \u2014 mit Bewertung der Aussprache."],
      ["Alt+H","Hiragana-Eingabe — ikanai tippen ergibt いかない."],
      ["Alt+K","Katakana-Eingabe — ju-su tippen ergibt ジュース. Mit - entsteht das Zeichen ー."],
      ["Alt+L","Romaji-Eingabe ausschalten und die eigene japanische Tastatur verwenden."],
      ["Alt+W","Zeit vergehen lassen, wenn Katsu weggegangen ist und es nichts zu antworten gibt."],
      ["Alt+I (halten)","Gedrückt halten, um hier zu lesen; loslassen schließt es. Die Schaltfläche ⓘ öffnet es dauerhaft — Esc oder ein Klick daneben schließt es."],
      ["Schaltfläche あ / ア / A","Dieselben drei Eingabemodi per Maus. Die Schaltfläche zeigt den aktiven an."],
      ["Schaltfläche ⏳","Derselbe Zeitsprung per Maus. Sie leuchtet auf und zählt herunter, wenn Katsus Beitrag nichts zu beantworten lässt — Tippen bricht das ab."],
      ["Furigana / Kanji / Kana / Rōmaji","Wie Katsus Japanisch geschrieben wird. Eine Änderung wird sofort neu dargestellt."],
      ["+ Rōmaji / + Englisch","Zusätzliche Zeilen unter dem Japanischen, nicht an dessen Stelle."],
      ["+ Korrekturen","Korrekturen sind eingeklappt, damit sie das Gespräch nicht überdecken. Hiermit sind sie standardmäßig offen; einzeln lassen sie sich ebenfalls aufklappen."],
      ["🔊 Vorlesen","Jede Antwort von Katsu automatisch vorlesen. „Anhören“ unter einer Nachricht liest nur diese vor."],
      ["Stimme","Welche japanische Stimme spricht. „Anhören“ spielt eine Probe — am besten vor dem Start wählen, da die erste Antwort sofort gesprochen wird."],
      ["Stopp","Beendet das Gespräch und bietet eine schriftliche Auswertung an."],
    ],
  },
  fr: {
    nav_home:'Accueil', nav_kana:'Kana', nav_learn:'Apprendre', nav_group_learn:'Apprendre', nav_group_vocab:'Vocabulaire', nav_group_practice:'Pratique', nav_counters:'Compteurs', nav_new:'Nouveau', nav_adjectives:'Adjectifs', nav_reference:'Référence', nav_conjugation:'Conjugaison', nav_forms:'Formes', nav_verbs:'Verbes',
    nav_conjugator:'Conjugueur', nav_kana_drill:'Drill kana', nav_kanji_drill:'Drill kanji', nav_talk:'Parler', nav_reading:'Lecture',
    nav_dates:'Dates', nav_vocab:'Vocabulaire',
    nav_vocab_quiz:'Quiz de vocabulaire',
    vq_show:'Montre-moi',
    vq_counts_missed:'compté comme raté',
    vq_ask_katakana:'Répondez en katakana',
    vq_mode_kana:'Hiragana — youka donne ようか',
    vq_mode_katakana:'Katakana — juusu donne ジュース',
    vq_mode_off:'Désactivé — votre propre clavier japonais',
    vq_ask_katakana:'Répondez en katakana',
    vq_mode_kana:'Hiragana — youka donne ようか',
    vq_mode_katakana:'Katakana — juusu donne ジュース',
    vq_mode_off:'Désactivé — votre propre clavier japonais',
    vq_row_deck:'Jeu',
    vq_row_ask:'Demande-moi',
    vq_row_serve:'Montrer',
    vq_all_levels:'Tous les niveaux',
    vq_no_level:'Au-dessus de N3 / non classé',
    vq_in_round:'en jeu',
    vq_filters:'Filtres',
    vq_all_topics:'Tous les thèmes',
    vq_filters_note:'Sans rien changer, le quiz mélange tout et revient plus souvent sur vos erreurs.',
    vocab_try_quiz:'Testez-vous sur ces mots →',
    vocab_search_ph:'Rechercher — apple, ringo, りんご ou 林檎',
    vocab_search_none:'Aucun résultat pour',
    vocab_search_more:'autres',
    vq_page_sub:'Quiz de vocabulaire — sens, lecture et production',
    vq_practise:'S’entraîner',
    vq_topics:'Thèmes — aucun choix signifie tous',
    vq_check:'Vérifier',
    vq_skip:'Passer',
    vq_next:'Suivant →',
    vq_to_cards:'← Retour aux cartes', nav_kanji:'Kanji', nav_contact:'Contact',
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
    check:'Vérifier', next:'Question suivante →', skip:'Voir la réponse', reset:'↺ Réinitialiser le score',
    fb_correct:'⭕ Correct !', fb_answer:'Réponse :', fb_wrong:'❌ Pas tout à fait — la réponse est :',
    missed_title:'📝 Manqués cette session — cliquez pour écouter',
    click_hear:'Cliquez pour écouter', hear_pron:'Écouter la prononciation',
    cheat_hint:'Touchez un kana pour entendre sa prononciation 🔊 &nbsp;·&nbsp; Maintenez Alt+H / Alt+K pour afficher',
    cheat_title_h:'Hiragana ひらがな', cheat_title_k:'Katakana カタカナ',
    cheat_basic:'Base (46)', cheat_dakuten:'Dakuten et handakuten (25)', cheat_combos:'Combinaisons (33)',
    hero_badge:'Boîte à outils pour le japonais',
    back_to_top:'Retour en haut',
    card_kana_t:"<span class=\"jp\">仮名</span> — Kana",
    card_kana_d:"Pratiquez les <strong>104 caractères hiragana et katakana</strong>. Apprenez les deux systèmes d'écriture japonais côte à côte, avec <strong>prononciation audio</strong> et des tableaux clairs pour les kana de base, les dakuten (sons voisés) et les combinaisons. Cliquez sur un caractère pour l'écouter.",
    card_kana_cta:"Apprendre les kana →",
    card_kdrill_t:"<span class=\"jp\">仮名練習</span> — Exercice de kana",
    card_kdrill_d:"Testez-vous dans les deux sens : <strong>kana → rōmaji</strong> en tapant, ou <strong>rōmaji → kana</strong> en choisissant le bon caractère. Filtrez par écriture et par série, et regardez grimper votre <strong>score, votre série et votre record</strong>. Bloqué ? <strong>Maintenez Alt+H ou Alt+K</strong> pour jeter un œil à la table sans quitter la question. Un <strong>tableau de progression</strong> montre chaque kana répondu et combien de fois vous l'avez manqué.",
    card_kdrill_cta:"Commencer l'exercice →",
    card_kjdrill_t:"<span class=\"jp\">漢字練習</span> — Exercice de kanji",
    card_kjdrill_d:"Testez-vous sur les <strong>2 300 kanji du KLC</strong>, au choix caractère → mot-clé ou mot-clé → caractère. <strong>Choisissez une plage</strong> pour ne travailler que le bloc que vous étudiez plutôt que le cours entier. Les réponses tapées reçoivent un <strong>retour à trois niveaux</strong> — correct, assez proche pour réessayer, ou réponse dévoilée — et tout ce que vous manquez s'accumule dans une <strong>liste de révision</strong> en bas de page.",
    card_kjdrill_cta:"Commencer l'exercice →",
    card_learn_t:"<span class=\"jp\">学習</span> — Apprendre",
    card_learn_d:"Des explications claires et visuelles du fonctionnement réel de la conjugaison japonaise. Comprenez le <em>pourquoi</em> derrière les schémas, pas seulement les règles. Apprenez à identifier les types de verbes, comprenez le système sonore des hiragana et suivez chaque type de conjugaison pas à pas.",
    card_learn_cta:"Commencer →",
    card_forms_t:"<span class=\"jp\">活用形</span> — Formes",
    card_forms_d:"Des tableaux de référence complets couvrant 16 formes verbales pour les trois types de verbes : Godan (五段), Ichidan (一段) et Suru (する). Des formes de base (négatif, poli, passé) aux formes avancées (passif, causatif, conditionnel), des tableaux en couleurs montrent exactement comment chaque forme se construit. Parfait pour une consultation rapide ou une comparaison côte à côte.",
    card_forms_cta:"Voir les formes →",
    card_verbs_t:"<span class=\"jp\">動詞</span> — Liste de verbes",
    card_verbs_d:"Parcourez les <strong>129 verbes</strong> de notre base, classés par type (Godan, Ichidan, Suru) avec kanji, hiragana et sens en anglais. <strong>Recherchez</strong> un verbe instantanément ou <strong>filtrez par niveau JLPT</strong> (N5, N4, N3) pour travailler le vocabulaire de votre niveau.",
    card_verbs_cta:"Parcourir les verbes →",
    card_conj_t:"<span class=\"jp\">活用</span> — Le Conjugateur",
    card_conj_d:"Le cœur de Katsuyō Academy. Entraînez-vous à conjuguer sur <strong>16 formes</strong>, avec un retour immédiat. <strong>Pas besoin de clavier japonais</strong> : tapez <em>ikanai</em> et cela devient いかない au fil de la frappe, et les réponses en kanji comptent autant que celles en kana. Choisissez un niveau de difficulté ou une forme précise, filtrez par niveau JLPT et travaillez par <strong>manches</strong> qui se terminent par un bilan. Les verbes ratés <strong>reviennent</strong> jusqu'à ce que vous les réussissiez deux fois, et chaque erreur est expliquée avec la règle qui vous manquait.",
    card_conj_cta:"Commencer à pratiquer →",
    card_dojo_t:"<span class=\"jp\">日付</span> — Dates et nombres",
    card_dojo_d:"Pratiquez les dates, jours de la semaine, mois et nombres japonais. Les questions couvrent la date du jour, les calculs futur/passé, les jours relatifs (<span class=\"jp\">きのう</span>, <span class=\"jp\">あした</span>) et les grands nombres. <strong>Réponses en phrases complètes exigées</strong> — prenez de bonnes habitudes grammaticales avec です et でした. Avec un <strong>tableau de référence</strong> pratique pour les lectures difficiles.",
    card_dojo_cta:"Entrez dans le dōjō →",
    card_vocab_t:"<span class=\"jp\">単語</span> — Vocabulaire",
    card_vocab_d:"Pratiquez <strong>496 mots japonais essentiels</strong> avec des cartes intelligentes. Étudiez en <strong>hiragana, kanji et katakana</strong> selon <strong>8 modes différents</strong>. Passez du japonais→français au français→japonais, affichez ou masquez les lectures, et voyez les deux écritures côte à côte. <strong>Le mélange intelligent privilégie les cartes jamais vues</strong>, et le suivi indique combien vous en avez travaillées.",
    card_vocab_cta:"Apprendre du vocabulaire →",
    card_kanji_t:"<span class=\"jp\">漢字</span> — Kanji",
    card_kanji_d:"Pratiquez <strong>2 300 kanji</strong> du célèbre <strong>Kodansha Learner's Course</strong>. Chaque carte affiche le caractère, le mot-clé anglais, les lectures <strong>on'yomi</strong> et <strong>kun'yomi</strong>, ainsi que du <strong>vocabulaire d'exemple</strong> avec les sens. Filtrez par niveau, <strong>mélangez les cartes</strong> ou <strong>sautez à n'importe quel numéro KLC</strong>. Raccourcis clavier inclus !",
    card_kanji_cta:"Apprendre les kanji →",
    btn_start_kana:'Commencer par les kana', btn_explore_kanji:'Explorer les kanji',
    btn_learn_basics:'Apprendre les bases', btn_practice_conj:'Pratiquer la conjugaison',
    // ---- home: where to start + live demo strip ----
    tour_title:"Par où commencer",
    tour_sub:"Vous débutez en japonais ? Voici l'ordre qui fonctionne. Environ une heure par jour suffit.",
    tour_1_t:"Apprendre les kana",
    tour_1_d:"Les deux syllabaires, 104 caractères. Une ou deux semaines, et tout le reste devient plus simple.",
    tour_2_t:"Les bases de la grammaire",
    tour_2_d:"Particules, ordre des mots, forme polie — de quoi construire une phrase délibérément.",
    tour_3_t:"Travailler les conjugaisons",
    tour_3_d:"Chaque forme, sur chaque type de verbe, jusqu'à ne plus avoir à y penser.",
    tour_4_t:"Tenir une conversation",
    tour_4_d:"Commander à manger, demander son chemin, être corrigé au passage. C'est à ça que servait le reste.",
    demo_title:"Essayez tout de suite",
    demo_sub:"Trois des outils, en fonctionnement ici même. Rien à installer, pas de compte.",
    demo_tab_kana:"Exercice de kana",
    demo_tab_conj:"Conjugateur",
    demo_tab_talk:"Conversation",
    demo_kana_tag_hira:"HIRAGANA — TAPEZ LA LECTURE",
    demo_kana_tag_kata:"KATAKANA — TAPEZ LA LECTURE",
    demo_kana_ph:"Tapez le rōmaji…",
    demo_kana_right:"Correct.",
    demo_kana_listen_hint:"Écoutez avant de répondre",
    demo_fix_show:"afficher",
    demo_fix_hide:"masquer",
    demo_conj_ime:"Tapez en rōmaji — le texte devient des kana au fil de la frappe, comme dans l'exercice.",
    demo_next:"Suivant →",
    demo_check:"Vérifier",
    demo_conj_ph:"votre réponse",
    demo_conj_right:"Correct. Les graphies en kanji sont acceptées aussi — essayez 食べない.",
    demo_conj_kanji:"Correct — et notez que le kanji a été accepté. L'exercice complet accepte toutes les graphies et variantes valides, pas une seule.",
    demo_conj_wrong:"Pas tout à fait.",
    demo_conj_answer:"Réponse :",
    demo_talk_note:"Un échange enregistré. Le vrai outil répond en direct, reste dans son rôle et parle à voix haute.",
    demo_chat_1:"Bienvenue ! Avez-vous choisi ?",
    demo_chat_2:"Très bien. Un instant, s'il vous plaît.",
    demo_chat_fix:"お茶 fonctionne, mais un mot de plus sonne naturel : お茶をひとつお願いします。",
    demo_cta_kana:"Ouvrir l'exercice de kana complet →",
    demo_cta_conj:"Ouvrir le conjugateur complet →",
    demo_cta_talk:"Ouvrir la conversation →",
    form_negative:"NÉGATIF (ない)",
    form_past:"PASSÉ (た)",
    form_potential:"POTENTIEL (できる)",
    toolkit_title:'La boîte à outils',
    toolkit_sub:"Dix outils complémentaires couvrant les bases du japonais",
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
    warn_try_again:'⚠️ Pas tout à fait — réessayez !', more_examples:"📚 Plus d'exemples",
    talk_title:'Discuter avec Katsu',
    talk_intro:"Ayez un véritable échange en japonais. Choisissez votre mode de pratique, discutez avec Katsu aussi longtemps que vous le souhaitez, puis arrêtez à tout moment pour obtenir une évaluation.",
    talk_step1:'1. Choisissez un mode de pratique', talk_step2:'2. Précisez les détails',
    talk_mode_scenario_t:'Jeu de rôle', talk_mode_scenario_d:"Katsu joue un personnage — commandez à manger, demandez votre chemin, enregistrez-vous à l'hôtel.",
    talk_mode_freechat_t:'Discussion libre', talk_mode_freechat_d:'Conversation ouverte à votre niveau, sur le sujet de votre choix.',
    talk_mode_grammar_t:'Grammaire ciblée', talk_mode_grammar_d:'Katsu oriente la conversation pour faire ressortir une forme grammaticale précise.',
    talk_scenario:'Scénario', talk_level:'Niveau', talk_form:'Forme',
    talk_pick_mode_hint:'Choisissez un mode ci-dessus pour voir ses options.',
    talk_start:'Démarrer la conversation', talk_stop:'Arrêter',
    talk_placeholder:"Répondez en japonais (ou demandez de l'aide à Katsu)…", talk_send:'Envoyer',
    talk_correction_hint:"Katsu reste dans son rôle et ajoute une brève note de correction en cas d'erreur. Vous pouvez changer l'affichage du japonais à tout moment — le rendu est instantané.",
    talk_show:'Afficher', talk_english:'Anglais', talk_correction:'Correction',
    talk_scenario_custom:'✏️ Personnalisé…', talk_custom:'Décrivez',
    talk_custom_placeholder:'ex. rapporter une chemise qui ne va pas, dans un grand magasin',
    talk_ended:'Cette situation est terminée. Voulez-vous poursuivre la conversation ?',
    talk_keep_going:'Continuer', talk_continuing:'— la suite —',
    talk_script_furigana:'Furigana', talk_script_kanji:'Kanji', talk_script_kana:'Kana', talk_script_romaji:'Rōmaji',
    talk_stop_title:'Arrêter cette conversation ?', talk_stop_body:'Vous pouvez obtenir une évaluation de cette session, ou simplement choisir un autre mode de pratique.',
    talk_get_assessment:'Obtenir une évaluation', talk_choose_different:'Choisir un autre mode', talk_keep_talking:'Continuer à discuter',
    talk_assessment_title:'📊 Évaluation de la session',
    talk_download:'⬇ Télécharger', talk_you:'Vous',
    talk_assess_loading:'préparation de votre rapport…',
    talk_assess_empty:"La conversation est encore trop courte pour être évaluée — dites d'abord quelque chose !",
    talk_assess_failed:"Impossible de générer l'évaluation pour le moment — réessayez dans un instant.",
    talk_assess_summary:'Résumé', talk_assess_well:'Ce que vous avez bien fait', talk_assess_improve:'À travailler',
    talk_assess_words:'Mots et expressions à retenir', talk_assess_next:'Prochaine étape',
    talk_assess_transcript:'Conversation complète', talk_report_title:'Rapport de conversation',
    sensei_placeholder:'Comment dit-on … en japonais ?', sensei_send:'Demander',
    sensei_greeting:"こんにちは！(Konnichiwa !) Je suis Katsu. Demandez-moi comment dire quelque chose en japonais, ou posez une question de grammaire. 何でも聞いてください！(Nandemo kiite kudasai — n'hésitez pas à tout me demander !)",
    sensei_error:'すみません (Sumimasen) — impossible de joindre le serveur.', sensei_retry:'↻ Réessayer',
    sensei_proactive_label:'Laisser Katsu intervenir si je semble bloqué(e)', sensei_clear_history:'🗑 Effacer la discussion', sensei_restore_chat:'↩ Afficher la discussion précédente', sensei_clear_mistakes:'🗑 Effacer les erreurs enregistrées',
    // ---- Conjugateur : aide à la saisie, série, manche, badges ----
    streak:'Série', best_short:'record',
    answer_placeholder_romaji:'ikanai → いかない',
    answer_placeholder_kana:'\u3072\u3089\u304c\u306a\u3067\u5165\u529b...',
    romaji_on_title:'Saisie en romaji activée \u2014 tapez ikanai, vous obtenez \u3044\u304b\u306a\u3044. Cliquez pour désactiver.',
    romaji_off_title:'Saisie en romaji désactivée \u2014 utilisez votre propre clavier japonais. Cliquez pour activer.',
    romaji_title:"\u26a0\ufe0f La conversion n'a pas eu lieu",
    romaji_msg:"Votre réponse est encore en lettres latines : elle ne peut pas être vérifiée comme du japonais.",
    romaji_tip_on:"La saisie en romaji est activée : <strong>ikanai</strong> devrait devenir \u3044\u304b\u306a\u3044 au fil de la frappe. S'il reste des lettres, vérifiez l'orthographe \u2014 chaque syllabe a besoin de sa voyelle.",
    romaji_tip_off:"La saisie en romaji est désactivée. Réactivez-la avec le bouton <strong>\u3042/A</strong> à côté du champ de réponse, ou tapez avec un clavier japonais.",
    opt_type_quiz:'Me demander aussi le type de verbe',
    badge_review:'\ud83d\udd01 Révision \u2014 vous vous étiez trompé ici',
    badge_type_quiz:'D\u2019abord : quel type de verbe est-ce ?',
    goal_10:'Manche de 10', goal_20:'Manche de 20', goal_50:'Manche de 50', goal_none:'Sans limite',
    ai_thinking:'Conju rédige une explication plus complète\u2026',
    sess_done:'Manche terminée', sess_accuracy:'Réussite', sess_correct:'Correct',
    sess_best_streak:'Meilleure série', sess_skipped:'Réponses affichées',
    sess_weakest:'Le plus souvent manqué :', sess_queue:'À revoir prochainement :',
    sess_queue_clear:'Rien en attente \u2014 votre liste de révision est vide.',
    sess_again:'Une autre manche \u2192',
    ex_label:'ex.',
    answer_placeholder_type:'godan / ichidan / suru / irrégulier',
    type_quiz_continue:'À vous de conjuguer \u2014 suite dans {n}s.',
    continue_in:'Continuer ({n}) \u2192',
    continue_now:'Continuer \u2192',
    conj_info_title:'Raccourcis et options',
    conj_info_sub:'Les raccourcis clavier et le rôle de chaque commande de cette page.',
    romaji_toast_on:'Saisie en romaji activée \u2014 ikanai \u2192 \u3044\u304b\u306a\u3044',
    romaji_toast_off:'Saisie en romaji désactivée \u2014 utilisez votre clavier japonais',
    conj_info_rows:[
      ['Entrée','Vérifier la réponse, puis à nouveau pour la question suivante.'],
      ['Alt+R','Activer ou désactiver la saisie en romaji \u2014 comme le bouton \u3042 / A à côté du champ de réponse.'],
      ['Alt+H','Afficher ou masquer l\u2019indice de cette question.'],
      ['Alt+S','Voir la réponse. Sans pénalité \u2014 seule la série s\u2019interrompt.'],
      ['Alt+I (maintenir)','Maintenez pour lire cette fenêtre ; relâchez et elle se ferme. Le bouton \u24d8 l\u2019ouvre durablement \u2014 Échap ou un clic à côté la ferme.'],
      ['Bouton \u3042 / A','Saisie en romaji. Activée, vous tapez ikanai et obtenez \u3044\u304b\u306a\u3044 : pas besoin de clavier japonais. Désactivez-la si vous en avez déjà un.'],
      ['Réponses','Kana et kanji comptent autant l\u2019un que l\u2019autre \u2014 \u884c\u304b\u306a\u3044 et \u3044\u304b\u306a\u3044 sont tous deux corrects. Les variantes courantes comme \u98df\u3079\u308c\u308b sont acceptées aussi, avec une note sur la forme du manuel.'],
      ['\ud83d\udd01 Révision','Un verbe et une forme que vous aviez manqués. Deux bonnes réponses et il ne revient plus.'],
      ['Questions sur le type','De temps en temps, la question « quel type de verbe ? ». Décochez la case si vous ne voulez que la conjugaison.'],
      ['Manche','Le nombre de questions avant le bilan. Choisissez « sans limite » pour enchaîner.']
    ],
    sensei_review_btn:'📝 Revoir mes dernières erreurs',
    sensei_review_q:"Qu'est-ce que je viens de rater, et pourquoi ? Explique-le simplement.",
    sensei_nudge_1:"Ça a l'air corsé — vous voulez un indice ? 💡",
    sensei_nudge_2:"J'ai remarqué plusieurs erreurs d'affilée — je suis là si vous voulez en discuter !",
    // ---- homepage ----
    hero_desc:"Une plateforme gratuite pour apprendre le japonais. Apprenez et travaillez les kana, les kanji, le vocabulaire et toutes les formes verbales, puis mettez le tout en pratique en conversation — le tout au même endroit. Sans compte, sans installation.",
    // ---- home: hero + closing ----
    hero_browse:"Voir les outils ↓",
    hero_browse_short:"Voir les outils",
    meta_kana:"kana, avec l'audio",
    meta_kanji:"kanji du KLC",
    meta_vocab:"cartes de vocabulaire",
    meta_langs:"langues",
    demo_eyebrow:"Essayez ici même",
    demo_kana_hear:"Un doute ? Écoutez d'abord.",
    creator_note_plain:"J'ai créé Katsuyō Academy parce que j'en avais besoin moi-même. Des chapitres de manuels éparpillés, des ressources en ligne confuses, des applis de cartes qui ne fonctionnaient jamais tout à fait comme je voulais — je voulais tout au même endroit, conçu comme j'apprends le mieux. C'est cet endroit. Si cela vous aide aussi, alors il a fait son travail.",
    btn_practice_kana:"S'entraîner aux kana",
    btn_practice_kanji:"S'entraîner aux kanji",
    btn_practice_talk:"S'entraîner à parler",
    badge_new:"Nouveau",
    intro_title:"Vos bases complètes en japonais",
    intro_p1:"Katsuyō Academy est un <strong>projet passionné, construit par un apprenant pour des apprenants</strong>. Il ne cherche ni à remplacer un manuel ni à devenir la prochaine application de langues. C'est plutôt un ensemble restreint d'outils reliés entre eux, consacrés aux briques fondamentales du japonais — celles que vous consulterez et travaillerez encore et encore.",
    intro_p2:"Pas de compte, pas d'inscription, pas de mur payant. Vos scores, vos séries et votre progression sur les cartes restent dans votre propre navigateur et ne sont jamais envoyés ailleurs — les seules fonctions qui contactent un serveur sont Katsu, le tuteur IA facultatif, et l'entraînement à la conversation.",
    stat_kana_v:"104 kana",
    stat_kana_n:"audio + exercices",
    stat_kanji_v:"2 300 kanji",
    stat_kanji_n:"cours KLC + exercice",
    stat_vocab_v:"496 mots",
    stat_vocab_n:"vocabulaire essentiel",
    stat_forms_v:"16 formes verbales",
    stat_forms_n:"129 verbes",
    intro_quote:"« Une suite d'apprentissage du japonais gratuite, construite par un apprenant pour des apprenants : kana, kanji, vocabulaire, conjugaison et entraînement à la conversation, avec des exercices qui retiennent ce que vous avez appris, le tout dans un ensemble cohérent et soigné. »",
    card_talk_t:"<span class=\"jp\">会話</span> — Conversation",
    card_talk_d:"Servez-vous enfin de ce que vous avez appris. Choisissez un <strong>scénario</strong> — commander à manger, une visite chez le médecin, acheter des places de cinéma — ou décrivez le vôtre. Envie de quelque chose de plus libre ? <strong>Discussion libre</strong>, ou travaillez <strong>une seule forme grammaticale</strong> jusqu'à ce qu'elle rentre. Réglez le niveau sur <strong>N5, N4 ou N3</strong> et lisez le japonais en <strong>kanji, kana ou rōmaji</strong>. Arrêtez quand vous voulez pour recevoir un <strong>bilan écrit</strong> : ce qui a bien marché, ce qu'il faut corriger, la transcription complète et les mots rencontrés en chemin.",
    card_talk_cta:"Commencer à parler →",
    card_reading_t:"<span class=\"jp\">読解</span> — Lecture",
    card_reading_d:"De courtes histoires graduées du <strong>N5 au N1</strong>, cinq par niveau pour commencer. Lisez <strong>en kana, avec furigana ou en kanji seuls</strong>, écoutez l'histoire lue à voix haute, consultez les mots clés, puis répondez à des <strong>questions de compréhension corrigées instantanément</strong>. Une erreur ? <strong>Voir dans le texte</strong> indique la phrase exacte qui contient la réponse.",
    card_reading_cta:"Commencer à lire →",
    why_title:"Ce qui change ici",
    why_install_t:"Rien à installer",
    why_install_d:"Des pages rapides et sobres qui s'ouvrent directement dans le navigateur. Aucune application à télécharger, aucun compte à créer, rien à configurer — sur ordinateur, tablette ou téléphone.",
    why_focus_t:"Des outils ciblés",
    why_focus_d:"Ni application gamifiée ni programme complet. Simplement des outils de référence et d'entraînement, ciblés et reliés entre eux, pour les briques de base dont vous vous servirez tous les jours.",
    why_understand_t:"Comprendre plutôt que mémoriser",
    why_understand_d:"La section Apprendre explique <em>pourquoi</em> les schémas fonctionnent ainsi. Quand la logique est claire, la conjugaison devient intuitive au lieu d'être un test de mémoire.",
    why_feedback_t:"Un retour utile",
    why_feedback_d:"Le Conjugateur ne se contente pas de dire « faux » : il montre la règle exacte qui manquait, nomme votre erreur précise, puis vous repropose ce verbe plus tard. Les cartes privilégient celles jamais vues, et les exercices de kana et de kanji retiennent chaque caractère auquel vous avez répondu.",
    why_design_t:"Conçu avec soin",
    why_design_d:"Une esthétique chaleureuse de papier vieilli et une typographie nette. On se croirait davantage devant un carnet d'étude soigné que devant une application de langues classique. Pas de publicité, pas d'encombrement, pas de distractions.",
    why_langs_t:"Quatre langues",
    why_langs_d:"Tout le site — chaque page, chaque bouton, chaque explication — se lit en anglais, allemand, français ou chinois simplifié. Changez de langue depuis le menu à tout moment ; vous ne perdez pas votre place.",
    why_katsu_t:"Demandez à Katsu",
    why_katsu_d:"<span class=\"jp\">カツ先生</span>, un tuteur IA, attend dans un coin de chaque page. Demandez pourquoi une conjugaison fonctionne ainsi, ce qui distingue は de が, ou tout ce qui vous bloque — et recevez la réponse dans la langue que vous lisez. Katsu remarque aussi les erreurs que vous faites ailleurs sur le site et peut les reprendre avec vous.",
    why_free_t:"Gratuit pour toujours",
    why_free_d:"Un projet passionné né de mes propres difficultés à apprendre le japonais. Pas de mur payant, pas d'offre premium, pas de « inscrivez-vous pour continuer ». Juste des ressources gratuites pour qui veut apprendre.",
    start_title:"Prêt à commencer ?",
    start_desc:"Que vous appreniez les kana, travailliez les caractères, étudiiez les verbes, enrichissiez votre vocabulaire ou teniez votre première conversation — choisissez votre voie ci-dessous.",
    start_kana:"Apprendre les kana",
    start_learn:"Apprendre les bases",
    start_conj:"Commencer à s'entraîner",
    start_talk:"Commencer à parler",
    start_kana_drill:"S'entraîner aux kana",
    start_forms:"Voir les tableaux",
    start_verbs:"Parcourir les verbes",
    start_vocab:"Vocabulaire",
    start_kanji:"Apprendre les kanji",
    start_dates:"Dates et nombres",
    start_kanji_drill:"S'entraîner aux kanji",
    creator_note:"<strong>Un mot du créateur :</strong><br>J'ai construit Katsuyō Academy parce que j'en avais besoin moi-même. Des chapitres de manuel éparpillés, des ressources en ligne confuses, des applications de cartes qui ne marchaient jamais tout à fait comme je voulais — je voulais tout au même endroit, pensé pour ma façon d'apprendre. Voilà cet endroit. S'il vous aide aussi, il aura fait son travail. <span class=\"jp\">頑張ってください！</span>",
    // ---- toolkit categories ----
    cat_reference:"Référence",
    cat_practice:"Entraînement",
    cat_conversation:"Conversation",
    legend_ref:"Référence — lire et consulter",
    legend_prac:"Entraînement — retient vos erreurs",
    legend_conv:"Conversation — passer à la pratique",
    // ---- talk: speech + romaji input ----
    talk_placeholder_romaji:"Répondez en japonais — tapez en romaji, obtenez des kana",
    talk_read_aloud:"Lecture à voix haute",
    talk_read_aloud_hint:"Lire automatiquement chaque réponse de Katsu",
    talk_listen:"Écouter",
    // ---- talk: voice picker ----
    talk_voice:"Voix",
    talk_voice_preview:"▶ Aperçu",
    talk_mic_start:"Dire votre r\u00e9ponse (Alt+M)",
    talk_mic_stop:"Arr\u00eater l\u2019\u00e9coute",
    talk_mic_denied:"L\u2019acc\u00e8s au microphone a \u00e9t\u00e9 bloqu\u00e9. Autorisez-le dans la barre d\u2019adresse de votre navigateur pour parler.",
    talk_mic_unavailable:"La saisie vocale n\u2019est pas disponible pour le moment. Vous pouvez toujours \u00e9crire.",
    talk_mic_error:"Le microphone s\u2019est arr\u00eat\u00e9 de mani\u00e8re inattendue. Vous pouvez continuer \u00e0 \u00e9crire.",
    talk_mic_reconnect:"Reconnexion\u2026",
    talk_pron_label:"Prononciation",
    talk_pron_accuracy:"pr\u00e9cision",
    talk_pron_fluency:"fluidit\u00e9",
    talk_pron_hide:"Masquer",
    talk_pron_show:"afficher",
    dojo_practise:"S\u2019entra\u00eener",
    dojo_selected:"s\u00e9lectionn\u00e9s",
    dojo_scope_weak:"\u25ce Points faibles",
    dojo_scope_counters:"Classificateurs",
    dojo_scope_datetime:"Dates & heure",
    dojo_scope_numbers:"Nombres & ann\u00e9es",
    dojo_answer_en:"R\u00e9pondez en anglais",
    dojo_type_en:"Saisissez votre r\u00e9ponse\u2026",
    dojo_weak_tracked:"points faibles suivis",
    dojo_weak_none:"aucun point faible \u2014 ils apparaissent avec les erreurs",
    dojo_weak_badge:"d\u00e9j\u00e0 vu",
    dojo_weak_added:"ajout\u00e9 \u00e0 vos points faibles",
    dojo_weak_cleared:"point faible corrig\u00e9",
    voice_female:"féminine",
    voice_male:"masculine",
    voice_neutral:"neutre",
    voice_sample:"こんにちは。今日はいい天気ですね。",
    talk_audio:"Audio",
    // ---- talk: input modes + folded corrections ----
    talk_corrections:"Corrections",
    talk_corrections_hint:"Ouvrir toutes les corrections par défaut, au lieu de les replier",
    talk_placeholder_katakana:"Katakana — juusu → ジュース",
    input_mode_kana:"Hiragana — tapez ikanai, obtenez いかない. Alt+K pour les katakana.",
    input_mode_katakana:"Katakana — tapez ju-su pour ジュース. Le tiret - donne le signe ー. Alt+H pour les hiragana.",
    input_mode_off:"Désactivé — utilisez votre propre clavier japonais.",
    input_mode_toast_kana:"ひらがな — saisie en hiragana",
    input_mode_toast_katakana:"カタカナ — saisie en katakana",
    input_mode_toast_off:"Saisie romaji désactivée",
    // ---- talk: letting time pass ----
    talk_wait_idle:"Laisser le temps passer — avancer quand il n’y a rien à dire (Alt+W)",
    talk_wait_armed:"Rien à répondre — le temps avance tout seul. Commencez à taper pour rester ici.",
    talk_time_passes:"— quelques minutes plus tard —",
    // ---- vocabulary: shortcuts dialog ----
    vocab_info_title:"Raccourcis et options",
    vocab_info_sub:"Les raccourcis clavier et le rôle de chaque commande de cette page.",
    vocab_info_rows:[
      ["← / →","Carte précédente et suivante."],
      ["Espace","Écouter le mot à voix haute."],
      ["Alt+F (maintenir)","Maintenez pour retourner la carte ; relâchez et elle revient. Un clic sur la carte la retourne durablement."],
      ["Alt+E","Afficher d'abord la traduction plutôt que le japonais."],
      ["Alt+K","Afficher la graphie en kanji."],
      ["Alt+T","Afficher la graphie en katakana."],
      ["Alt+R","Afficher le rōmaji sous le mot."],
      ["Alt+S","Mélanger le paquet."],
      ["Alt+V","Ouvrir les options de voix à côté d'« Écouter »."],
      ["Alt+I (maintenir)","Maintenez pour lire cette fenêtre ; relâchez et elle se ferme. Le bouton ⓘ l'ouvre durablement — Échap ou un clic à côté la ferme."],
    ],
    // ---- talk: shortcuts dialog ----
    talk_info_title:"Raccourcis et options",
    talk_info_sub:"Les raccourcis clavier et le rôle de chaque commande de cette page.",
    talk_info_rows:[
      ["Entrée","Envoyer votre réponse."],
      ["Alt+M","Dire votre réponse au lieu de l\u2019écrire, avec une note de prononciation."],
      ["Alt+H","Saisie en hiragana — tapez ikanai, obtenez いかない."],
      ["Alt+K","Saisie en katakana — tapez ju-su, obtenez ジュース. Le tiret - donne le signe ー."],
      ["Alt+L","Désactiver la saisie romaji et utiliser votre propre clavier japonais."],
      ["Alt+W","Laisser le temps passer, quand Katsu s’est absenté et qu’il n’y a rien à répondre."],
      ["Alt+I (maintenir)","Maintenez pour lire cette fenêtre ; relâchez et elle se ferme. Le bouton ⓘ l'ouvre durablement — Échap ou un clic à côté la ferme."],
      ["Bouton あ / ア / A","Les mêmes trois modes de saisie, à la souris. Le bouton indique lequel est actif."],
      ["Bouton ⏳","Le même saut dans le temps, à la souris. Il s’allume et décompte quand le tour de Katsu n’appelle aucune réponse — taper quoi que ce soit l’annule."],
      ["Furigana / Kanji / Kana / Rōmaji","Comment le japonais de Katsu est écrit. Le changement s'applique instantanément."],
      ["+ Rōmaji / + Anglais","Des lignes supplémentaires sous le japonais, et non à sa place."],
      ["+ Corrections","Les corrections sont repliées pour ne pas étouffer la conversation. Ceci les ouvre par défaut ; vous pouvez aussi en ouvrir une seule d'un clic."],
      ["🔊 Lecture à voix haute","Lire automatiquement chaque réponse de Katsu. « Écouter » sous un message ne lit que celui-là."],
      ["Voix","Quelle voix japonaise parle. « Aperçu » joue un échantillon — à régler avant de commencer, car la première réponse est lue aussitôt."],
      ["Arrêter","Termine la conversation et propose un bilan écrit."],
    ],
  },
  zh: {
    nav_home:'首页', nav_kana:'假名', nav_learn:'学习', nav_group_learn:'学习', nav_group_vocab:'词汇', nav_group_practice:'练习', nav_counters:'量词', nav_new:'新', nav_adjectives:'形容词', nav_reference:'语法参考', nav_conjugation:'动词变形', nav_forms:'形式', nav_verbs:'动词',
    nav_conjugator:'变形器', nav_kana_drill:'假名练习', nav_kanji_drill:'汉字练习', nav_talk:'对话', nav_reading:'阅读',
    nav_dates:'日期', nav_vocab:'词汇',
    nav_vocab_quiz:'词汇测验',
    vq_show:'给我看',
    vq_counts_missed:'计为答错',
    vq_ask_katakana:'用片假名作答',
    vq_mode_kana:'平假名 — 输入 youka 得 ようか',
    vq_mode_katakana:'片假名 — 输入 juusu 得 ジュース',
    vq_mode_off:'关闭 — 使用自己的日语输入法',
    vq_ask_katakana:'用片假名作答',
    vq_mode_kana:'平假名 — 输入 youka 得 ようか',
    vq_mode_katakana:'片假名 — 输入 juusu 得 ジュース',
    vq_mode_off:'关闭 — 使用自己的日语输入法',
    vq_row_deck:'词库',
    vq_row_ask:'考我',
    vq_row_serve:'出题范围',
    vq_all_levels:'全部级别',
    vq_no_level:'N3 以上 / 未标级',
    vq_in_round:'在题库中',
    vq_filters:'筛选',
    vq_all_topics:'全部主题',
    vq_filters_note:'保持原样，测验会混合出题，并更常出现你答错的词。',
    vocab_try_quiz:'用这些词测验自己 →',
    vocab_search_ph:'搜索 — apple、ringo、りんご 或 林檎',
    vocab_search_none:'没有匹配',
    vocab_search_more:'更多',
    vq_page_sub:'词汇测验 — 意思、读法与表达',
    vq_practise:'练习',
    vq_topics:'主题 — 不选即全部',
    vq_check:'检查',
    vq_skip:'跳过',
    vq_next:'下一个 →',
    vq_to_cards:'← 返回单词卡', nav_kanji:'汉字', nav_contact:'联系',
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
    check:'检查答案', next:'下一题 →', skip:'显示答案', reset:'↺ 重置得分',
    fb_correct:'⭕ 正确！', fb_answer:'答案：', fb_wrong:'❌ 不对 — 正确答案是：',
    missed_title:'📝 本次答错的假名 — 点击听发音',
    click_hear:'点击听发音', hear_pron:'听发音',
    cheat_hint:'点击任意假名可听发音 🔊 &nbsp;·&nbsp; 按住 Alt+H / Alt+K 快速查看',
    cheat_title_h:'平假名 ひらがな', cheat_title_k:'片假名 カタカナ',
    cheat_basic:'清音 (46)', cheat_dakuten:'浊音・半浊音 (25)', cheat_combos:'拗音 (33)',
    hero_badge:'日语学习工具箱',
    back_to_top:'回到顶部',
    card_kana_t:"<span class=\"jp\">仮名</span> — 假名",
    card_kana_d:"练习全部 <strong>104 个平假名和片假名</strong>。并排学习两套日语书写系统，配有<strong>发音音频</strong>，以及清音、浊音和拗音的清晰对照表。点击任意假名即可听发音。",
    card_kana_cta:"学习假名 →",
    card_kdrill_t:"<span class=\"jp\">仮名練習</span> — 假名练习",
    card_kdrill_d:"双向测试：输入<strong>假名 → 罗马音</strong>，或从选项中选出<strong>罗马音 → 假名</strong>。可按字体和分组筛选，看着<strong>得分、连对与个人最佳</strong>不断上升。卡住了？<strong>按住 Alt+H 或 Alt+K</strong> 即可查看对照表，不必离开当前题目。<strong>进度图</strong>会显示你答过的每个假名，以及错过多少次。",
    card_kdrill_cta:"开始练习 →",
    card_kjdrill_t:"<span class=\"jp\">漢字練習</span> — 汉字练习",
    card_kjdrill_d:"测试全部 <strong>2,300 个 KLC 汉字</strong>，可选字符 → 关键词或关键词 → 字符。<strong>选择范围</strong>，只练习你正在学的那一段，而不是整门课程。输入的答案会得到<strong>三级反馈</strong> — 正确、接近可再试一次、或直接公布答案 — 所有答错的字都会收入页面底部的<strong>复习列表</strong>。",
    card_kjdrill_cta:"开始练习 →",
    card_learn_t:"<span class=\"jp\">学習</span> — 学习",
    card_learn_d:"清晰直观地讲解日语动词变形的真正原理。理解规律背后的<em>为什么</em>，而不只是死记规则。学会辨别动词类型，理解平假名音系，并跟随每种变形的分步讲解。",
    card_learn_cta:"开始学习 →",
    card_forms_t:"<span class=\"jp\">活用形</span> — 变位形式",
    card_forms_d:"全面的速查变形表，涵盖三类动词（五段、一段、する动词）的 16 种形式。从基础形（否定、敬体、过去）到高级形（被动、使役、条件），彩色编码的表格清楚展示每种形式的构成方式。适合快速查阅或并排对比。",
    card_forms_cta:"查看形式 →",
    card_verbs_t:"<span class=\"jp\">動詞</span> — 动词表",
    card_verbs_d:"浏览数据库中的全部 <strong>129 个动词</strong>，按类型（五段、一段、する）分类，附汉字、平假名和英文释义。使用<strong>搜索</strong>即时查找动词，或<strong>按 JLPT 级别筛选</strong>（N5、N4、N3），专注于适合您水平的词汇。",
    card_verbs_cta:"浏览动词 →",
    card_conj_t:"<span class=\"jp\">活用</span> — 变位练习",
    card_conj_d:"Katsuyō Academy 的核心。练习 <strong>16 种形式</strong>的动词变位，即时给出反馈。<strong>无需日语键盘</strong>——输入 <em>ikanai</em> 就会边打边变成 いかない，用汉字作答同样算对。可以按难度或单一形式练习，按 JLPT 等级筛选，并以<strong>回合</strong>为单位练习，每回合结束给出小结。答错的动词会<strong>再次出现</strong>，直到你连对两次为止，每个错误都会附上你当时缺的那条规则。",
    card_conj_cta:"开始练习 →",
    card_dojo_t:"<span class=\"jp\">日付</span> — 日期与数字",
    card_dojo_d:"练习日语的日期、星期、月份和数字。题目涵盖今天的日期、未来/过去的推算、相对日期（<span class=\"jp\">きのう</span>、<span class=\"jp\">あした</span>）以及大数字。<strong>要求完整句子作答</strong>——用 です 和 でした 结尾，培养正确的语法习惯。附带实用的<strong>读法对照表</strong>，帮您攻克特殊读音。",
    card_dojo_cta:"进入道场 →",
    card_vocab_t:"<span class=\"jp\">単語</span> — 词汇",
    card_vocab_d:"用智能记忆卡练习 <strong>496 个日语核心词汇</strong>。可用<strong>平假名、汉字和片假名</strong>学习，共 <strong>8 种学习模式</strong>。在日→中与中→日之间切换，按需显示或隐藏读音，也可并排查看两种写法。<strong>智能乱序会优先安排没见过的卡片</strong>，进度统计则显示你已学了多少张。",
    card_vocab_cta:"开始学单词 →",
    card_kanji_t:"<span class=\"jp\">漢字</span> — 汉字",
    card_kanji_d:"练习著名的《<strong>Kodansha Learner's Course</strong>》中的 <strong>2,300 个汉字</strong>。每张卡片会显示汉字、英文关键词、<strong>音读</strong>与<strong>训读</strong>，以及带释义的<strong>例词</strong>。可按等级筛选、<strong>打乱卡片</strong>，或<strong>跳转到任意 KLC 编号</strong>。还支持键盘快捷键！",
    card_kanji_cta:"学习汉字 →",
    btn_start_kana:'从假名开始', btn_explore_kanji:'探索汉字',
    btn_learn_basics:'学习基础', btn_practice_conj:'练习动词变形',
    // ---- home: where to start + live demo strip ----
    tour_title:"从哪里开始",
    tour_sub:"初学日语？这是行之有效的顺序。每天约一小时就能走完。",
    tour_1_t:"先学假名",
    tour_1_d:"两套假名，104 个字符。一两周拿下，后面的一切都会变容易。",
    tour_2_t:"打好语法基础",
    tour_2_d:"助词、语序、敬体——足以有意识地造出一句话。",
    tour_3_t:"反复练变形",
    tour_3_d:"每一种变形、每一类动词，练到不用再想。",
    tour_4_t:"真正开口对话",
    tour_4_d:"点菜、问路，边说边被纠正。前面的一切都是为了这一步。",
    demo_title:"现在就试试",
    demo_sub:"其中三个工具，就在这里运行。无需安装，无需注册。",
    demo_tab_kana:"假名练习",
    demo_tab_conj:"变形练习",
   
    demo_tab_talk:"对话",
    demo_kana_tag_hira:"平假名 —— 输入读音",
    demo_kana_tag_kata:"片假名 —— 输入读音",
    demo_kana_ph:"输入罗马字…",
    demo_kana_right:"正确。",
    demo_kana_listen_hint:"先听一遍再作答",
    demo_fix_show:"展开",
    demo_fix_hide:"收起",
    demo_conj_ime:"输入罗马字——边打边变成假名，和练习里完全一样。",
    demo_next:"下一题 →",
    demo_check:"检查答案",
    demo_conj_ph:"你的答案",
    demo_conj_right:"正确。汉字写法同样接受——试试 食べない。",
    demo_conj_kanji:"正确——而且汉字写法也被接受了。完整的练习会接受每一种正确的写法和变体，而不只是一种。",
    demo_conj_wrong:"还差一点。",
    demo_conj_answer:"答案：",
    demo_talk_note:"这是一段录好的对话。真正的对话会实时回答、保持角色，并且能朗读出来。",
    demo_chat_1:"欢迎光临！您想好点什么了吗？",
    demo_chat_2:"好的。请稍等片刻。",
    demo_chat_fix:"お茶 可以，但再加一个词更自然：お茶をひとつお願いします。",
    demo_cta_kana:"打开完整的假名练习 →",
    demo_cta_conj:"打开完整的变形练习 →",
    demo_cta_talk:"打开对话 →",
    form_negative:"否定形（ない）",
    form_past:"过去形（た）",
    form_potential:"可能形（できる）",
    toolkit_title:'工具一览',
    toolkit_sub:"十个相互衔接的工具，涵盖日语基础",
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
    warn_try_again:'⚠️ 不对——再试一次！', more_examples:'📚 更多例句',
    talk_title:'和活先生对话',
    talk_intro:'用日语进行真正的双向对话。选择你想要的练习方式，与活先生尽情聊天，随时可以停止并获得本次表现的评估。',
    talk_step1:'1. 选择练习模式', talk_step2:'2. 设置细节',
    talk_mode_scenario_t:'情景角色扮演', talk_mode_scenario_d:'活先生扮演一个角色——点餐、问路、办理酒店入住。',
    talk_mode_freechat_t:'自由聊天', talk_mode_freechat_d:'按照你的水平进行开放式对话，话题不限。',
    talk_mode_grammar_t:'语法专项', talk_mode_grammar_d:'活先生会引导对话，让你专门练习某个语法形式。',
    talk_scenario:'情景', talk_level:'级别', talk_form:'形式',
    talk_pick_mode_hint:'在上方选择一个模式以查看选项。',
    talk_start:'开始对话', talk_stop:'结束',
    talk_placeholder:'用日语输入你的回复（也可以请活先生帮忙）…', talk_send:'发送',
    talk_correction_hint:'活先生会保持角色扮演，并在你出错时附上简短的纠正说明。日语的显示方式可随时切换，即时生效。',
    talk_show:'显示', talk_english:'英语', talk_correction:'纠正',
    talk_scenario_custom:'✏️ 自定义…', talk_custom:'描述',
    talk_custom_placeholder:'例如：在百货商店退换不合身的衬衫',
    talk_ended:'这个情景到此结束。要继续对话吗？',
    talk_keep_going:'继续', talk_continuing:'—— 继续 ——',
    talk_script_furigana:'注音假名', talk_script_kanji:'汉字', talk_script_kana:'假名', talk_script_romaji:'罗马音',
    talk_stop_title:'结束这次对话吗？', talk_stop_body:'你可以获取本次对话的评估，也可以直接选择其他练习模式。',
    talk_get_assessment:'获取评估', talk_choose_different:'选择其他练习', talk_keep_talking:'继续对话',
    talk_assessment_title:'📊 对话评估',
    talk_download:'⬇ 下载', talk_you:'你',
    talk_assess_loading:'正在生成你的报告…',
    talk_assess_empty:'对话还太短，无法评估——先说点什么吧！',
    talk_assess_failed:'目前无法生成评估——请稍后再试。',
    talk_assess_summary:'总结', talk_assess_well:'你做得好的地方', talk_assess_improve:'需要改进的地方',
    talk_assess_words:'值得记住的词与短语', talk_assess_next:'下一步',
    talk_assess_transcript:'完整对话', talk_report_title:'对话报告',
    sensei_placeholder:'用日语怎么说…？', sensei_send:'提问',
    sensei_greeting:'こんにちは！(Konnichiwa!) 我是活先生。想知道某个词用日语怎么说，或者有语法问题，都可以问我。何でも聞いてください！（Nandemo kiite kudasai —— 尽管问我吧！）',
    sensei_error:'すみません (Sumimasen) — 无法连接服务器。', sensei_retry:'↻ 重试',
    sensei_proactive_label:'当我似乎卡住时，允许活先生主动出现', sensei_clear_history:'🗑 清空对话', sensei_restore_chat:'↩ 显示上一次对话', sensei_clear_mistakes:'🗑 清除已保存的错误',
    // ---- 变位练习：输入辅助、连对、回合、标记 ----
    streak:'连对', best_short:'最高',
    answer_placeholder_romaji:'ikanai → いかない',
    answer_placeholder_kana:'\u3072\u3089\u304c\u306a\u3067\u5165\u529b...',
    romaji_on_title:'罗马字输入已开启 \u2014 输入 ikanai 会变成 \u3044\u304b\u306a\u3044。点击可关闭。',
    romaji_off_title:'罗马字输入已关闭 \u2014 请使用自己的日语键盘。点击可开启。',
    romaji_title:'\u26a0\ufe0f 没有转换成假名',
    romaji_msg:'您的答案仍是拉丁字母，无法作为日语来判断。',
    romaji_tip_on:'罗马字输入已开启，输入 <strong>ikanai</strong> 时应当变成 \u3044\u304b\u306a\u3044。如果有字母没有转换，请检查拼写 \u2014 每个音节都需要元音。',
    romaji_tip_off:'罗马字输入已关闭。可用答题框旁的 <strong>\u3042/A</strong> 按钮重新开启，或改用日语键盘输入。',
    opt_type_quiz:'也问我动词的类型',
    badge_review:'\ud83d\udd01 复习 \u2014 这道题您之前答错过',
    badge_type_quiz:'先回答：这是哪一类动词？',
    goal_10:'一轮 10 题', goal_20:'一轮 20 题', goal_50:'一轮 50 题', goal_none:'不限题数',
    ai_thinking:'Conju 正在写更详细的讲解\u2026',
    sess_done:'本轮完成', sess_accuracy:'正确率', sess_correct:'答对',
    sess_best_streak:'最高连对', sess_skipped:'查看答案',
    sess_weakest:'本轮错得最多：', sess_queue:'之后会再出现：',
    sess_queue_clear:'没有待复习的内容 \u2014 复习清单已清空。',
    sess_again:'再来一轮 \u2192',
    ex_label:'例如',
    answer_placeholder_type:'godan / ichidan / suru / 不规则',
    type_quiz_continue:'现在来变位 \u2014 {n} 秒后继续。',
    continue_in:'继续（{n}）\u2192',
    continue_now:'继续 \u2192',
    conj_info_title:'快捷键与选项',
    conj_info_sub:'本页的键盘快捷键，以及各个控件的作用。',
    romaji_toast_on:'罗马字输入已开启 \u2014 ikanai \u2192 \u3044\u304b\u306a\u3044',
    romaji_toast_off:'罗马字输入已关闭 \u2014 请使用自己的日语键盘',
    conj_info_rows:[
      ['Enter','检查答案，再按一次进入下一题。'],
      ['Alt+R','开启或关闭罗马字输入 \u2014 与答题框旁的 \u3042 / A 按钮相同。'],
      ['Alt+H','显示或隐藏本题提示。'],
      ['Alt+S','显示答案。不扣分 \u2014 只是连对中断。'],
      ['Alt+I（按住）','按住即可查看本窗口，松开自动关闭。点 \u24d8 按钮可让它保持打开 \u2014 按 Esc 或点击窗口外关闭。'],
      ['\u3042 / A 按钮','罗马字输入。开启后输入 ikanai 会得到 \u3044\u304b\u306a\u3044，无需日语键盘。若已有日语键盘，可将其关闭。'],
      ['答案','假名和汉字都算对 \u2014 \u884c\u304b\u306a\u3044 与 \u3044\u304b\u306a\u3044 同样正确。\u98df\u3079\u308c\u308b 这类常见说法也会被接受，并附上教科书形式的说明。'],
      ['\ud83d\udd01 复习','之前答错过的动词与形式。连续答对两次就不再出现。'],
      ['动词类型题','偶尔出现的「这是哪类动词？」。只想练变位的话，可取消勾选。'],
      ['回合','多少题之后给出小结。选择「不限题数」可一直练下去。']
    ],
    sensei_review_btn:'📝 复习我最近的错误',
    sensei_review_q:'我刚才错在哪里？为什么？请简单解释一下。',
    sensei_nudge_1:'这个看起来有点难——需要提示吗？💡',
    sensei_nudge_2:'我注意到你连续错了几次——需要聊聊吗？',
    // ---- homepage ----
    hero_desc:"免费的日语学习平台。学习并操练假名、汉字、词汇与每一种动词变形，再在对话中真正用起来——全都在一个地方。无需注册，无需安装。",
    // ---- home: hero + closing ----
    hero_browse:"浏览工具 ↓",
    hero_browse_short:"浏览工具",
    meta_kana:"假名，带发音",
    meta_kanji:"KLC 汉字",
    meta_vocab:"词汇卡片",
    meta_langs:"种语言",
    demo_eyebrow:"就在这里试试",
    demo_kana_hear:"不确定？先听一遍。",
    creator_note_plain:"我做 Katsuyō Academy，是因为我自己需要它。零散的教材章节、令人困惑的网络资源、总是不太合用的卡片应用——我想把一切放在一个地方，按照我最适应的方式设计。这里就是那个地方。如果它对你也有帮助，那它就完成了使命。",
    btn_practice_kana:"练习假名",
    btn_practice_kanji:"练习汉字",
    btn_practice_talk:"练习会话",
    badge_new:"新",
    intro_title:"打好日语的完整基础",
    intro_p1:"Katsuyō Academy 是一个<strong>由学习者为学习者打造的兴趣项目</strong>。它不打算取代教科书，也不想成为下一个语言学习应用，而是一组彼此衔接、专注于日语基础构件的工具——也就是你会反复查阅和练习的那些内容。",
    intro_p2:"无需注册账号，没有付费墙。你的得分、连对记录和卡片进度都保存在自己的浏览器里，绝不会被上传——唯二会联网的功能，是可选的 AI 导师活先生和会话练习。",
    stat_kana_v:"104 个假名",
    stat_kana_n:"发音 + 操练",
    stat_kanji_v:"2,300 个汉字",
    stat_kanji_n:"KLC 课程 + 操练",
    stat_vocab_v:"496 个词汇",
    stat_vocab_n:"核心词汇",
    stat_forms_v:"16 种动词形式",
    stat_forms_n:"129 个动词",
    intro_quote:"「一套由学习者为学习者打造的免费日语学习工具——涵盖假名、汉字、词汇、动词变位与会话练习，配有会记录你学习进度的操练，整合在一个连贯而精心设计的整体中。」",
    card_talk_t:"<span class=\"jp\">会話</span> — 会话",
    card_talk_d:"把学到的东西真正用起来。挑一个<strong>情景</strong>——点餐、看医生、买电影票——或者自己描述一个。想随意一些？可以<strong>自由聊天</strong>，也可以只针对<strong>某一个语法形式</strong>反复练到熟为止。把难度设为 <strong>N5、N4 或 N3</strong>，日语可以用<strong>汉字、假名或罗马字</strong>来读。随时可以停下，拿到一份<strong>书面评估</strong>：哪里做得好、哪里要改、完整对话记录，以及过程中遇到的词汇。",
    card_talk_cta:"开始对话 →",
    card_reading_t:"<span class=\"jp\">読解</span> — 阅读",
    card_reading_d:"从 <strong>N5 到 N1</strong> 的分级短篇故事，首批每级五篇。可以用<strong>假名、带注音或仅汉字</strong>阅读，收听故事朗读，查看重点词汇，然后回答<strong>即时评分的阅读理解题</strong>。答错了？<strong>在原文中显示</strong>会标出包含答案的那一句。",
    card_reading_cta:"开始阅读 →",
    why_title:"这里有什么不同",
    why_install_t:"无需安装",
    why_install_d:"页面轻快、专注，浏览器直接打开。不用下载应用，不用注册账号，也无需任何设置——电脑、平板、手机都一样。",
    why_focus_t:"专注的工具",
    why_focus_d:"这不是游戏化的应用，也不是完整课程，而是一组彼此衔接、目标明确的参考与练习工具，专门针对你每天都会用到的基础构件。",
    why_understand_t:"理解胜过死记",
    why_understand_d:"「学习」部分会解释这些规律<em>为什么</em>是这样。理解了背后的逻辑，变位就会变成直觉，而不是记忆力测验。",
    why_feedback_t:"真正有用的反馈",
    why_feedback_d:"变位练习不会只回一句「错了」——它会指出你当时缺的那条规则、说明你具体错在哪里，并在之后再次出这个动词。记忆卡会优先安排没见过的卡片，假名与汉字操练则会记住你答过的每一个字。",
    why_design_t:"用心的设计",
    why_design_d:"温暖的旧纸质感，配上干净的字体排印。它更像一本用心做出来的学习手账，而不是常见的语言应用。没有广告，不杂乱，也不分散注意力。",
    why_langs_t:"四种语言",
    why_langs_d:"整站内容——每个页面、每个按钮、每段讲解——都有英语、德语、法语和简体中文版本。可随时从菜单切换语言，进度不会丢失。",
    why_katsu_t:"问问活先生",
    why_katsu_d:"<span class=\"jp\">カツ先生</span>（活先生）是一位 AI 导师，守在每个页面的角落。你可以问某个变位为什么这样、は 和 が 有什么区别，或任何卡住你的问题——回答会用你正在阅读的语言给出。活先生还会注意到你在站内其他地方犯的错，并带你一起回顾。",
    why_free_t:"永久免费",
    why_free_d:"这是一个源自我自己学日语时的挫折的兴趣项目。没有付费墙，没有会员等级，也没有「注册后继续」。只是给想学的人的免费资源。",
    start_title:"准备好开始了吗？",
    start_desc:"无论你是在学假名、操练字符、研究动词、积累词汇，还是要进行第一次对话——都可以在下面选择你的起点。",
    start_kana:"学习假名",
    start_learn:"学习基础",
    start_conj:"开始练习",
    start_talk:"开始对话",
    start_kana_drill:"练习假名",
    start_forms:"查看形式表",
    start_verbs:"浏览动词",
    start_vocab:"词汇",
    start_kanji:"学习汉字",
    start_dates:"日期与数字",
    start_kanji_drill:"练习汉字",
    creator_note:"<strong>来自作者的话：</strong><br>我做 Katsuyō Academy，是因为我自己需要它。零散的课本章节、让人摸不着头脑的网上资料、总是差一点合用的记忆卡应用——我希望把这些都放在一处，按照最适合我自己的方式来设计。这里就是那个地方。如果它也能帮到你，那它就没白做。<span class=\"jp\">頑張ってください！</span>",
    // ---- toolkit categories ----
    cat_reference:"参考",
    cat_practice:"练习",
    cat_conversation:"会话",
    legend_ref:"参考——阅读与查阅",
    legend_prac:"练习——会记住你答错的地方",
    legend_conv:"会话——真正用起来",
    // ---- talk: speech + romaji input ----
    talk_placeholder_romaji:"用日语回复——输入罗马字，得到假名",
    talk_read_aloud:"朗读",
    talk_read_aloud_hint:"自动朗读活先生的每一句回复",
    talk_listen:"听",
    // ---- talk: voice picker ----
    talk_voice:"语音",
    talk_voice_preview:"▶ 试听",
    talk_mic_start:"\u8bf4\u51fa\u4f60\u7684\u56de\u7b54\uff08Alt+M\uff09",
    talk_mic_stop:"\u505c\u6b62\u5f55\u97f3",
    talk_mic_denied:"\u9ea6\u514b\u98ce\u6743\u9650\u88ab\u963b\u6b62\u3002\u8bf7\u5728\u6d4f\u89c8\u5668\u5730\u5740\u680f\u4e2d\u5141\u8bb8\u4f7f\u7528\u3002",
    talk_mic_unavailable:"\u8bed\u97f3\u8f93\u5165\u6682\u65f6\u4e0d\u53ef\u7528\uff0c\u4f60\u4ecd\u7136\u53ef\u4ee5\u6253\u5b57\u3002",
    talk_mic_error:"\u9ea6\u514b\u98ce\u610f\u5916\u505c\u6b62\uff0c\u4f60\u53ef\u4ee5\u7ee7\u7eed\u6253\u5b57\u3002",
    talk_mic_reconnect:"\u91cd\u65b0\u8fde\u63a5\u2026",
    talk_pron_label:"\u53d1\u97f3",
    talk_pron_accuracy:"\u51c6\u786e\u5ea6",
    talk_pron_fluency:"\u6d41\u5229\u5ea6",
    talk_pron_hide:"\u9690\u85cf",
    talk_pron_show:"\u663e\u793a",
    dojo_practise:"\u7ec3\u4e60",
    dojo_selected:"\u5df2\u9009",
    dojo_scope_weak:"\u25ce \u8584\u5f31\u70b9",
    dojo_scope_counters:"\u91cf\u8bcd",
    dojo_scope_datetime:"\u65e5\u671f\u3068\u6642\u9593",
    dojo_scope_numbers:"\u6570\u5b57\u3068\u5e74",
    dojo_answer_en:"\u7528\u82f1\u8bed\u56de\u7b54",
    dojo_type_en:"\u8f93\u5165\u7b54\u6848\u2026",
    dojo_weak_tracked:"\u4e2a\u8584\u5f31\u70b9",
    dojo_weak_none:"\u6682\u65e0\u8584\u5f31\u70b9 \u2014 \u7b54\u9519\u540e\u4f1a\u51fa\u73b0",
    dojo_weak_badge:"\u4e4b\u524d\u9519\u8fc7",
    dojo_weak_added:"\u5df2\u52a0\u5165\u8584\u5f31\u70b9",
    dojo_weak_cleared:"\u8584\u5f31\u70b9\u5df2\u6e05\u9664",
    voice_female:"女声",
    voice_male:"男声",
    voice_neutral:"中性",
    voice_sample:"こんにちは。今日はいい天気ですね。",
    talk_audio:"语音",
    // ---- talk: input modes + folded corrections ----
    talk_corrections:"订正",
    talk_corrections_hint:"默认展开所有订正，而不是折叠起来",
    talk_placeholder_katakana:"片假名 — juusu → ジュース",
    input_mode_kana:"平假名——输入 ikanai 得到 いかない。按 Alt+K 切换片假名。",
    input_mode_katakana:"片假名——输入 ju-su 得到 ジュース。用 - 输入长音符 ー。按 Alt+H 切换平假名。",
    input_mode_off:"已关闭——请使用自己的日语键盘。",
    input_mode_toast_kana:"ひらがな — 平假名输入",
    input_mode_toast_katakana:"カタカナ — 片假名输入",
    input_mode_toast_off:"罗马字输入已关闭",
    // ---- talk: letting time pass ----
    talk_wait_idle:"让时间流逝——无话可说时直接快进（Alt+W）",
    talk_wait_armed:"无需回答——时间会自动快进。开始输入即可留在这里。",
    talk_time_passes:"—— 几分钟后 ——",
    // ---- vocabulary: shortcuts dialog ----
    vocab_info_title:"快捷键与选项",
    vocab_info_sub:"本页的键盘快捷键，以及各个控件的作用。",
    vocab_info_rows:[
      ["← / →","上一张与下一张卡片。"],
      ["空格键","朗读这个词。"],
      ["Alt+F（按住）","按住翻面，松开自动翻回。点击卡片则会一直保持翻面。"],
      ["Alt+E","先显示译文，而不是日语。"],
      ["Alt+K","显示汉字写法。"],
      ["Alt+T","显示片假名写法。"],
      ["Alt+R","在词下方显示罗马字。"],
      ["Alt+S","打乱卡组。"],
      ["Alt+V","打开「听」旁边的语音选项。"],
      ["Alt+I（按住）","按住即可查看本窗口，松开自动关闭。点 ⓘ 按钮可让它保持打开 — 按 Esc 或点击窗口外关闭。"],
    ],
    // ---- talk: shortcuts dialog ----
    talk_info_title:"快捷键与选项",
    talk_info_sub:"本页的键盘快捷键，以及各个控件的作用。",
    talk_info_rows:[
      ["Enter","发送你的回复。"],
      ["Alt+M","用说的代替打字，并查看发音评分。"],
      ["Alt+H","平假名输入——输入 ikanai 得到 いかない。"],
      ["Alt+K","片假名输入——输入 ju-su 得到 ジュース。用 - 输入长音符 ー。"],
      ["Alt+L","关闭罗马字输入，改用自己的日语键盘。"],
      ["Alt+W","当活先生离开、你无话可回时，让时间快进。"],
      ["Alt+I（按住）","按住即可查看本窗口，松开自动关闭。点 ⓘ 按钮可让它保持打开 — 按 Esc 或点击窗口外关闭。"],
      ["あ / ア / A 按钮","用鼠标切换同样的三种输入模式，按钮会显示当前模式。"],
      ["⏳ 按钮","用鼠标做同样的时间快进。当活先生的回合无需回答时，它会亮起并开始倒数——输入任何内容都会取消。"],
      ["Furigana / Kanji / Kana / Rōmaji","活先生的日语以哪种方式显示，切换后立即重新排版。"],
      ["+ 罗马字 / + 英语","在日语下方附加的行，而不是取代日语。"],
      ["+ 订正","订正默认折叠，以免盖过对话本身。此项可让它们默认展开；也可以单独点开任意一条。"],
      ["🔊 朗读","自动朗读活先生的每一句回复。消息下方的「听」只朗读那一条。"],
      ["语音","由哪个日语语音朗读。「试听」可播放示例 — 建议开始前就选好，因为第一句回复会立刻朗读。"],
      ["停止","结束对话，并提供一份书面评估。"],
    ],
  }
};

var LANG = 'en';
try { LANG = localStorage.getItem('katsuyoLang') || 'en'; } catch (e) {}
if (!I18N[LANG]) LANG = 'en';

function t(key) {
  return (I18N[LANG] && I18N[LANG][key]) || I18N.en[key] || key;
}

// The language Katsu explains in. The language being *learned* is always
// Japanese; this is the one explanations, translations and corrections come
// back in, and it follows whatever the visitor picked in the nav.
var EXPLAIN_LANGUAGE = {
  en: 'English',
  de: 'German',
  fr: 'French',
  zh: 'Simplified Chinese'
};
function explainLanguage() {
  return EXPLAIN_LANGUAGE[LANG] || 'English';
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
  // The "New" badge is a ::after on the link, fed from a CSS variable. A
  // pseudo-element survives the textContent rewrite above, which a real child
  // element would not — the loop over [data-i18n] would wipe it every time.
  try {
    document.documentElement.style.setProperty('--nav-new-label', JSON.stringify(t('nav_new')));
  } catch (e) {}
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
  if (window.refreshSenseiI18n) window.refreshSenseiI18n();
  if (window.refreshTalkI18n) window.refreshTalkI18n();
  if (window.refreshReadingI18n) window.refreshReadingI18n();
  if (window.refreshLangSwitch) window.refreshLangSwitch();
  if (window.refreshNavGroups) window.refreshNavGroups();
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
    /* fixed, not absolute: the nav bar is a horizontal scroller with
       overflow-y:hidden, which would otherwise clip this menu away.
       Coordinates are set in JS when the menu opens. */
    '.lang-menu{position:fixed;min-width:11rem;background:var(--paper,#faf9f7);',
    '  border:1px solid rgba(0,0,0,0.1);border-radius:10px;box-shadow:0 10px 30px rgba(0,0,0,0.22);',
    '  padding:0.3rem;margin:0;list-style:none;z-index:1300;opacity:0;visibility:hidden;transform:translateY(-6px);',
    '  transition:opacity 0.16s ease,transform 0.16s ease,visibility 0.16s;}',
    '.lang-menu.open{opacity:1;visibility:visible;transform:translateY(0);}',
    '.lang-menu li{margin:0;}',
    '.lang-menu button{display:flex;align-items:center;justify-content:space-between;gap:0.6rem;width:100%;',
    '  background:none;border:none;border-radius:7px;padding:0.5rem 0.6rem;font-family:inherit;font-size:0.88rem;',
    '  color:var(--ink,#1a1a2e);text-align:left;cursor:pointer;transition:background 0.13s ease;}',
    '.lang-menu button:hover{background:var(--paper-warm,#f1eee8);}',
    '.lang-menu button .native{font-weight:600;}',
    '.lang-menu button .code{font-size:0.72rem;letter-spacing:0.06em;opacity:0.5;text-transform:uppercase;}',
    '.lang-menu button[aria-current="true"]{background:rgba(196,92,74,0.1);color:var(--accent,#c45c4a);}',
    '.lang-menu button[aria-current="true"] .code{opacity:0.75;}',

    /* ---------- grouped nav dropdown ---------- */
    '.nav-group{display:inline-flex;align-items:center;flex:0 0 auto;}',
    /* no colour here on purpose — the button also carries .nav-link, so it
       picks up the bar's paper colour, 0.7 opacity and hover/active states.
       Setting color:inherit here made it inherit the dark body text instead. */
    '.nav-group-btn{display:inline-flex;align-items:center;gap:0.35rem;background:none;border:none;',
    '  font-family:inherit;font-size:inherit;cursor:pointer;white-space:nowrap;}',
    '.nav-group-btn .chev{font-size:0.6em;opacity:0.75;transition:transform 0.18s;}',
    '.nav-group.open .nav-group-btn .chev{transform:rotate(180deg);}',
    '.nav-group-menu{position:fixed;min-width:12rem;background:var(--paper,#faf9f7);',
    '  border:1px solid rgba(0,0,0,0.1);border-radius:10px;box-shadow:0 10px 30px rgba(0,0,0,0.22);',
    '  padding:0.3rem;z-index:1300;opacity:0;visibility:hidden;transform:translateY(-6px);',
    '  transition:opacity 0.16s ease,transform 0.16s ease,visibility 0.16s;}',
    '.nav-group-menu.open{opacity:1;visibility:visible;transform:translateY(0);}',
    /* opacity:1 — .nav-link dims to 0.7 for the dark bar, which reads as
       greyed-out against the menu's light background */
    '.nav-group-menu a.nav-link{display:block;width:auto;padding:0.5rem 0.7rem;margin:0;border:none;',
    '  border-radius:7px;color:var(--ink,#1a1a2e);opacity:1;text-decoration:none;font-size:0.9rem;white-space:nowrap;}',
    '.nav-group-menu a.nav-link:hover{background:var(--paper-warm,#f1eee8);color:var(--ink,#1a1a2e);}',
    '.nav-group-menu a.nav-link.active{background:rgba(196,92,74,0.1);color:var(--accent,#c45c4a);font-weight:600;}',
    '.nav-group-menu a.nav-link::after{display:none;}',

    /* ---------- phones ----------
       Last in the sheet on purpose: these override the rules above, and a
       media query does not raise specificity, so order is what decides.
       The nav wraps — logo and the language button share the top row, the
       links scroll on their own row underneath. Ordering rather than DOM
       order, so the desktop bar keeps logo | links | language. */
    '@media (max-width: 600px){',
    '  .nav-inner{flex-wrap:wrap;}',
    '  .lang-switch{order:2;margin-left:auto;}',
    '  .nav-links{order:3;width:100%;}',
    '  .lang-btn{padding:0.5rem 0.9rem;}',
    '  .lang-menu{min-width:12.5rem;}',
    '  .lang-menu button{padding:0.75rem 0.7rem;font-size:0.95rem;}',
    '  .nav-group-menu a.nav-link{padding:0.75rem 0.7rem;font-size:0.95rem;}',
    '}'
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
    /* One size at every desktop width. .nav-inner is capped at 1200px, so a
       1920px screen gives the bar not one pixel more room than a 1366px one —
       the wider padding this used to have above 1400px bought nothing and cost
       the last link. */
    '.nav-links .nav-link{padding-left:0.45rem;padding-right:0.45rem;font-size:0.9rem;}',
    /* the | separators: thinner, quieter, evenly spaced */
    '.nav-links > span{padding:0 0.25rem !important;font-size:1.05rem !important;opacity:0.45 !important;}',
    /* push the language switch to the far right, away from Contact */
    '.nav-links .lang-switch{margin-left:auto;padding-left:1rem;flex:0 0 auto;}',
    /* The bar always scrolls sideways rather than clipping. .nav-inner is capped
       at 1200px, so with the full set of links the row cannot fit at any viewport
       width — without this the last links (Kanji, Contact) run off the edge. */
    '.nav-links{overflow-x:auto;overflow-y:hidden;-webkit-overflow-scrolling:touch;scrollbar-width:none;}',
    '.nav-links::-webkit-scrollbar{display:none;}',
    /* the switch rides along on the right; it needs the bar colour behind it so
       links don't show through as they scroll underneath */
    '.nav-links .lang-switch{position:sticky;right:0;background:var(--ink,#1a1a2e);}',
    /* "New" badge on a recently added page. Set isNew:false in EXTRA_LINKS
       above to retire it everywhere at once. */
    '.nav-link[data-nav-new]{position:relative;}',
    /* The active-page underline is also an ::after on .nav-link, so on the
       badged page itself its position/height/inset land on the badge and turn
       it into a 2px bar across the row. Reset them explicitly — being more
       specific only wins the properties actually declared here. */
    '.nav-link[data-nav-new]::after{content:var(--nav-new-label,"New");display:inline-block;margin-left:0.4rem;',
    '  position:static;left:auto;right:auto;bottom:auto;height:auto;width:auto;',
    '  font-family:Outfit,sans-serif;font-size:0.58rem;font-weight:700;letter-spacing:0.08em;',
    '  text-transform:uppercase;vertical-align:0.35em;color:#2a2109;background:var(--gold,#c9a962);',
    '  padding:0.1rem 0.32rem;border-radius:4px;}',
    /* The rule above this one kills ::after inside a dropdown, because that is
       how the active underline is hidden there. It has to be undone by name or
       the badge vanishes the moment Counters moves into the Learn menu.
       The row also becomes a flex line: as an inline badge it wrapped onto a
       second line and sat on top of the item underneath. */
    '.nav-group-menu a.nav-link[data-nav-new]{display:flex;align-items:center;gap:0.5rem;white-space:nowrap;}',
    '.nav-group-menu a.nav-link[data-nav-new]::after{display:inline-block;margin-left:auto;vertical-align:baseline;}',
    '@media (max-width:1400px){',
    '  .nav-links .lang-switch{margin-left:0.5rem;}',
    '}',
    /* Nothing is hidden from the nav any more. Date Dojo and Kanji Drill were,
       back when the top level had run out of room; they are in the Practice ▾
       group now, which is what NAV_GROUPS below is for. */
    ''
  ].join('');
  var navStyle = document.createElement('style');
  navStyle.textContent = navCss;
  document.head.appendChild(navStyle);


  // Menus inside the nav have to be position:fixed — the bar is a horizontal
  // scroller with overflow-y:hidden, which clips anything hanging below it.
  // This puts a menu under its trigger and keeps it on screen.
  function placeMenu(trigger, menu, alignRight) {
    var r = trigger.getBoundingClientRect();
    menu.style.right = 'auto';
    menu.style.top = Math.round(r.bottom + 8) + 'px';
    menu.style.left = '0px';                       // measure at a known origin
    var w = menu.offsetWidth;
    var left = alignRight ? r.right - w : r.left;
    left = Math.min(left, window.innerWidth - w - 8);
    menu.style.left = Math.round(Math.max(8, left)) + 'px';
  }

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
      menu.classList.add('open');           // menu sits on <body>, so it toggles itself
      btn.setAttribute('aria-expanded', 'true');
      placeMenu(btn, menu, true);   // right-aligned, as before
    }
    function close() {
      wrap.classList.remove('open');
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
    // the bar can scroll under the menu, so follow the button while open
    window.addEventListener('resize', function () {
      if (wrap.classList.contains('open')) placeMenu(btn, menu, true);
    });
    var bar = document.querySelector('.nav-links');
    if (bar) bar.addEventListener('scroll', function () {
      if (wrap.classList.contains('open')) placeMenu(btn, menu, true);
    });

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      wrap.classList.contains('open') ? close() : open();
    });
    document.addEventListener('click', function (e) {
      // The menu lives on <body> now, so it is not inside wrap any more.
      if (!wrap.contains(e.target) && !menu.contains(e.target)) close();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });

    paintButton();
    paintMenu();
    wrap.appendChild(btn);
    // The menu goes on <body>, exactly as the nav-group menus do. position:fixed
    // does NOT escape an ancestor with -webkit-overflow-scrolling:touch on iOS —
    // it gets positioned and clipped by that scroller instead, which is why the
    // menu opened into nothing on a phone.
    document.body.appendChild(menu);
    // The button itself leaves the scrolling link bar too, so it can never be
    // scrolled out of reach or end up sitting on top of the links.
    var inner = document.querySelector('.nav-inner');
    if (inner) inner.appendChild(wrap);
    else sel.parentNode.insertBefore(wrap, sel.nextSibling);

    // keep the button label in sync if the language changes elsewhere
    window.refreshLangSwitch = function () { paintButton(); paintMenu(); };
  }

  // ---------- fold related nav links into a dropdown ----------
  // The bar carries more links than fit, so related pages collapse into one
  // menu. Add a group here and it applies to every page — the links are moved
  // out of the existing nav, so they keep their data-i18n and active state.
  var NAV_GROUPS = [
    // Counters sits second on purpose: first is the course itself, and second is
    // the slot the eye reaches next. Further down it would disappear into the
    // run of Conjugation / Forms / Verbs, which it has nothing to do with.
    { key: 'nav_group_learn', fallback: 'Learn',
      pages: ['learn', 'counters', 'adjectives', 'reference', 'conjugation', 'forms', 'verblist'] },
    // The cards and the quiz are the same subject, and the bar was already at
    // its limit — grouping them keeps the top level exactly as wide as before.
    { key: 'nav_group_vocab', fallback: 'Vocabulary',
      pages: ['vocabulary', 'vocabquiz'] },
    // Four drills, one idea. Adding Reading pushed the bar past its width and
    // the last item was being clipped; these four collapse to one and leave
    // headroom for the longer German and French labels.
    { key: 'nav_group_practice', fallback: 'Practice',
      pages: ['conjugator', 'kana-drill', 'kanji-drill', 'datedojo'] }
  ];

  function buildNavGroups() {
    var bar = document.querySelector('.nav-links');
    if (!bar || bar.querySelector('.nav-group')) return;
    var painters = [];
    // One reference shared by every group. Each dropdown used to know only how
    // to close itself, on a click outside itself — and the click that opens a
    // sibling is outside, but fires on the sibling, so the first menu stayed up
    // and the two overlapped. Opening now shuts whatever was open first.
    var openGroup = null;

    NAV_GROUPS.forEach(function (group) {
      var links = [];
      group.pages.forEach(function (page) {
        var a = bar.querySelector('.nav-link[data-page="' + page + '"]');
        if (a) links.push(a);
      });
      if (links.length < 2) return;      // nothing worth collapsing

      var wrap = document.createElement('div');
      wrap.className = 'nav-group';

      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'nav-group-btn nav-link';
      btn.setAttribute('aria-haspopup', 'true');
      btn.setAttribute('aria-expanded', 'false');

      var menu = document.createElement('div');
      menu.className = 'nav-group-menu';

      bar.insertBefore(wrap, links[0]);
      links.forEach(function (a) { menu.appendChild(a); });

      // the trigger reads as current when the page you're on lives inside it
      for (var i = 0; i < links.length; i++) {
        if (links[i].classList.contains('active')) { btn.classList.add('active'); break; }
      }

      function paint() {
        var label = (typeof t === 'function') ? t(group.key) : group.key;
        if (!label || label === group.key) label = group.fallback;
        btn.textContent = label;
        var chev = document.createElement('span');
        chev.className = 'chev';
        chev.textContent = '▼';
        btn.appendChild(chev);
      }
      painters.push(paint);
      paint();

      function open()  {
        if (openGroup && openGroup !== close) openGroup();   // shut the other one first
        openGroup = close;
        wrap.classList.add('open');
        menu.classList.add('open');           // menu sits on <body>, so it toggles itself
        btn.setAttribute('aria-expanded', 'true');
        placeMenu(btn, menu);
      }
      function close() {
        if (openGroup === close) openGroup = null;
        wrap.classList.remove('open');
        menu.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }

      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        wrap.classList.contains('open') ? close() : open();
      });
      document.addEventListener('click', function (e) {
        if (!wrap.contains(e.target) && !menu.contains(e.target)) close();
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') close();
      });
      window.addEventListener('resize', function () {
        if (wrap.classList.contains('open')) placeMenu(btn, menu);
      });
      bar.addEventListener('scroll', function () {
        if (wrap.classList.contains('open')) placeMenu(btn, menu);
      });

      wrap.appendChild(btn);
      document.body.appendChild(menu);   // outside the scroller, so nothing clips it
    });

    window.refreshNavGroups = function () {
      painters.forEach(function (fn) { fn(); });
    };
  }

  // ---------- pages added since the nav was last copied into the HTML -------
  // Every page carries its own copy of the nav, so rather than editing all
  // eighteen files whenever a page is added, the link is inserted here. Each
  // entry says which existing link to sit after; NAV_GROUPS then decides
  // whether it stays on the top level or moves inside a dropdown.
  //
  // `isNew` puts a small badge on the link while the page is still news.
  // Empty the flag and the badge is gone everywhere — one edit.
  var EXTRA_LINKS = [
    { page: 'reading',  key: 'nav_reading',  href: '/reading',  after: 'talk' },
    { page: 'counters', key: 'nav_counters', href: '/counters', after: 'learn', isNew: true }
  ];

  function addExtraLinks() {
    var bar = document.querySelector('.nav-links');
    if (!bar) return;
    EXTRA_LINKS.forEach(function (spec) {
      if (bar.querySelector('.nav-link[data-page="' + spec.page + '"]')) return;
      var a = document.createElement('a');
      a.className = 'nav-link';
      a.setAttribute('data-page', spec.page);
      a.setAttribute('data-i18n', spec.key);
      a.href = spec.href;
      a.textContent = t(spec.key);
      if (spec.isNew) a.setAttribute('data-nav-new', '1');
      if (document.body.getAttribute('data-page') === spec.page) a.classList.add('active');
      var anchor = bar.querySelector('.nav-link[data-page="' + spec.after + '"]');
      if (anchor && anchor.parentNode) anchor.parentNode.insertBefore(a, anchor.nextSibling);
      else bar.appendChild(a);
    });
  }

  function initNav() {
    addExtraLinks();
    buildLangSwitch();
    buildNavGroups();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNav);
  } else {
    initNav();
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

// ---------- index: strings added after the first translation pass ----------
I18N_addText({
"A free Japanese learning platform. Learn and drill kana, kanji, vocabulary, dates, and verb conjugation\u2014all in one beautifully designed toolkit.": [
"Eine kostenlose Japanisch-Lernplattform. Lernen und \u00fcben Sie Kana, Kanji, Vokabeln, Datumsangaben und Verbkonjugation \u2014 alles in einem sch\u00f6n gestalteten Werkzeugkasten.",
"Une plateforme gratuite d'apprentissage du japonais. Apprenez et travaillez les kana, les kanji, le vocabulaire, les dates et la conjugaison des verbes \u2014 le tout dans une bo\u00eete \u00e0 outils au design soign\u00e9.",
"\u514d\u8d39\u7684\u65e5\u8bed\u5b66\u4e60\u5e73\u53f0\u3002\u5b66\u4e60\u5e76\u7ec3\u4e60\u5047\u540d\u3001\u6c49\u5b57\u3001\u8bcd\u6c47\u3001\u65e5\u671f\u548c\u52a8\u8bcd\u53d8\u4f4d \u2014 \u5168\u90e8\u96c6\u4e2d\u5728\u4e00\u4e2a\u7cbe\u5fc3\u8bbe\u8ba1\u7684\u5de5\u5177\u5305\u91cc\u3002"
],
"Practice Kana": [
"Kana \u00fcben",
"S'exercer aux kana",
"\u7ec3\u4e60\u5047\u540d"
],
"Practice Kanji": [
"Kanji \u00fcben",
"S'exercer aux kanji",
"\u7ec3\u4e60\u6c49\u5b57"
],
"\u270d\ufe0f Practice Kana": [
"\u270d\ufe0f Kana \u00fcben",
"\u270d\ufe0f S'exercer aux kana",
"\u270d\ufe0f \u7ec3\u4e60\u5047\u540d"
],
"\ud83c\udfaf Practice Kanji": [
"\ud83c\udfaf Kanji \u00fcben",
"\ud83c\udfaf S'exercer aux kanji",
"\ud83c\udfaf \u7ec3\u4e60\u6c49\u5b57"
],
"No accounts, no sign-ups, no paywalls. Your scores, streaks, and flashcard progress live in your own browser and are never uploaded\u2014the only feature that reaches a server is Katsu, the optional AI tutor.": [
"Keine Konten, keine Anmeldung, keine Bezahlschranken. Ihre Punktzahlen, Serien und Karteikarten-Fortschritte bleiben in Ihrem eigenen Browser und werden nie hochgeladen \u2014 die einzige Funktion, die einen Server erreicht, ist Katsu, der optionale KI-Tutor.",
"Pas de compte, pas d'inscription, pas de paywall. Vos scores, vos s\u00e9ries et votre progression sur les cartes restent dans votre propre navigateur et ne sont jamais envoy\u00e9s \u2014 la seule fonction qui atteint un serveur est Katsu, le tuteur IA facultatif.",
"\u65e0\u9700\u8d26\u53f7\u3001\u65e0\u9700\u6ce8\u518c\u3001\u6ca1\u6709\u4ed8\u8d39\u5899\u3002\u4f60\u7684\u5f97\u5206\u3001\u8fde\u80dc\u548c\u5361\u7247\u8fdb\u5ea6\u90fd\u4fdd\u5b58\u5728\u4f60\u81ea\u5df1\u7684\u6d4f\u89c8\u5668\u91cc\uff0c\u4ece\u4e0d\u4e0a\u4f20 \u2014 \u552f\u4e00\u4f1a\u8fde\u63a5\u670d\u52a1\u5668\u7684\u529f\u80fd\u662f\u53ef\u9009\u7684 AI \u5bfc\u5e08 Katsu\u3002"
],
"audio + drills": [
"Audio + \u00dcbungen",
"audio + exercices",
"\u8bed\u97f3 + \u7ec3\u4e60"
],
"KLC course + drill": [
"KLC-Kurs + \u00dcbung",
"cours KLC + exercice",
"KLC \u8bfe\u7a0b + \u7ec3\u4e60"
],
"\"A free Japanese study suite built by a learner for learners\u2014covering kana, kanji, vocabulary, dates and verb conjugation, with drills that track what you've learned, in one cohesive, beautifully designed package.\"": [
"\u201eEine kostenlose Japanisch-Lernsuite, gebaut von einem Lernenden f\u00fcr Lernende \u2014 Kana, Kanji, Vokabeln, Datumsangaben und Verbkonjugation, mit \u00dcbungen, die mitverfolgen, was Sie gelernt haben, in einem stimmigen, sch\u00f6n gestalteten Paket.\u201c",
"\u00ab Une suite d'\u00e9tude du japonais gratuite, con\u00e7ue par un apprenant pour les apprenants \u2014 kana, kanji, vocabulaire, dates et conjugaison des verbes, avec des exercices qui suivent ce que vous avez appris, dans un ensemble coh\u00e9rent au design soign\u00e9. \u00bb",
"\u201c\u4e00\u5957\u514d\u8d39\u7684\u65e5\u8bed\u5b66\u4e60\u5957\u4ef6\uff0c\u7531\u5b66\u4e60\u8005\u4e3a\u5b66\u4e60\u8005\u800c\u5efa \u2014 \u6db5\u76d6\u5047\u540d\u3001\u6c49\u5b57\u3001\u8bcd\u6c47\u3001\u65e5\u671f\u548c\u52a8\u8bcd\u53d8\u4f4d\uff0c\u914d\u6709\u80fd\u8bb0\u5f55\u5b66\u4e60\u60c5\u51b5\u7684\u7ec3\u4e60\uff0c\u96c6\u6210\u4e3a\u4e00\u4e2a\u8fde\u8d2f\u800c\u7cbe\u7f8e\u7684\u6574\u4f53\u3002\u201d"
],
"\ud83d\udce6 Nothing to Install": [
"\ud83d\udce6 Nichts zu installieren",
"\ud83d\udce6 Rien \u00e0 installer",
"\ud83d\udce6 \u65e0\u9700\u5b89\u88c5"
],
"Ten fast, focused pages that open straight in your browser. No app to download, no account to create, nothing to configure\u2014on your desktop, your tablet or your phone.": [
"Zehn schnelle, fokussierte Seiten, die direkt im Browser \u00f6ffnen. Keine App zum Herunterladen, kein Konto zum Anlegen, nichts zu konfigurieren \u2014 auf dem Desktop, dem Tablet oder dem Handy.",
"Dix pages rapides et cibl\u00e9es qui s'ouvrent directement dans votre navigateur. Aucune application \u00e0 t\u00e9l\u00e9charger, aucun compte \u00e0 cr\u00e9er, rien \u00e0 configurer \u2014 sur votre ordinateur, votre tablette ou votre t\u00e9l\u00e9phone.",
"\u5341\u4e2a\u5feb\u901f\u3001\u4e13\u6ce8\u7684\u9875\u9762\uff0c\u76f4\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\u3002\u65e0\u9700\u4e0b\u8f7d\u5e94\u7528\u3001\u65e0\u9700\u521b\u5efa\u8d26\u53f7\u3001\u65e0\u9700\u914d\u7f6e \u2014 \u5728\u7535\u8111\u3001\u5e73\u677f\u6216\u624b\u673a\u4e0a\u90fd\u4e00\u6837\u3002"
],
"The Conjugator doesn't just say \"wrong\"\u2014it shows the exact rule you needed and identifies your specific error. Flashcards prioritise unseen cards, and the kana and kanji drills remember every character you've answered so you can see exactly what's left to learn.": [
"Der Konjugator sagt nicht einfach \u201efalsch\u201c \u2014 er zeigt genau die Regel, die Sie gebraucht h\u00e4tten, und benennt Ihren konkreten Fehler. Karteikarten bevorzugen ungesehene Karten, und die Kana- und Kanji-Drills merken sich jedes beantwortete Zeichen, sodass Sie genau sehen, was noch zu lernen bleibt.",
"Le Conjugueur ne se contente pas de dire \u00ab faux \u00bb : il montre la r\u00e8gle exacte qu'il vous fallait et identifie votre erreur pr\u00e9cise. Les cartes privil\u00e9gient celles que vous n'avez pas encore vues, et les exercices de kana et de kanji retiennent chaque caract\u00e8re auquel vous avez r\u00e9pondu, pour que vous voyiez exactement ce qu'il reste \u00e0 apprendre.",
"\u53d8\u4f4d\u5668\u4e0d\u53ea\u662f\u8bf4\u201c\u9519\u4e86\u201d \u2014 \u5b83\u4f1a\u5c55\u793a\u4f60\u9700\u8981\u7684\u90a3\u6761\u89c4\u5219\uff0c\u5e76\u6307\u51fa\u4f60\u5177\u4f53\u9519\u5728\u54ea\u91cc\u3002\u5361\u7247\u4f1a\u4f18\u5148\u5b89\u6392\u672a\u89c1\u8fc7\u7684\uff0c\u5047\u540d\u548c\u6c49\u5b57\u7ec3\u4e60\u4f1a\u8bb0\u4f4f\u4f60\u7b54\u8fc7\u7684\u6bcf\u4e2a\u5b57\u7b26\uff0c\u8ba9\u4f60\u6e05\u695a\u770b\u5230\u8fd8\u5269\u4ec0\u4e48\u8981\u5b66\u3002"
],
"\ud83c\udf10 Four Languages": [
"\ud83c\udf10 Vier Sprachen",
"\ud83c\udf10 Quatre langues",
"\ud83c\udf10 \u56db\u79cd\u8bed\u8a00"
],
"The whole site\u2014every page, every button, every explanation\u2014reads in English, German, French or Simplified Chinese. Switch language from the menu at any time; your place is kept.": [
"Die ganze Website \u2014 jede Seite, jede Schaltfl\u00e4che, jede Erkl\u00e4rung \u2014 liest sich auf Englisch, Deutsch, Franz\u00f6sisch oder in vereinfachtem Chinesisch. Wechseln Sie die Sprache jederzeit \u00fcber das Men\u00fc; Ihre Stelle bleibt erhalten.",
"Tout le site \u2014 chaque page, chaque bouton, chaque explication \u2014 se lit en anglais, allemand, fran\u00e7ais ou chinois simplifi\u00e9. Changez de langue depuis le menu \u00e0 tout moment ; votre position est conserv\u00e9e.",
"\u6574\u4e2a\u7f51\u7ad9 \u2014 \u6bcf\u4e00\u9875\u3001\u6bcf\u4e2a\u6309\u94ae\u3001\u6bcf\u6bb5\u8bf4\u660e \u2014 \u90fd\u53ef\u4ee5\u7528\u82f1\u8bed\u3001\u5fb7\u8bed\u3001\u6cd5\u8bed\u6216\u7b80\u4f53\u4e2d\u6587\u9605\u8bfb\u3002\u968f\u65f6\u4ece\u83dc\u5355\u5207\u6362\u8bed\u8a00\uff0c\u4f60\u6240\u5728\u7684\u4f4d\u7f6e\u4f1a\u4fdd\u7559\u3002"
],
"\ud83e\udd16 Ask Katsu": [
"\ud83e\udd16 Katsu fragen",
"\ud83e\udd16 Demandez \u00e0 Katsu",
"\ud83e\udd16 \u95ee\u95ee Katsu"
],
", an AI tutor, waits in the corner of every page. Ask why a conjugation works, what separates \u306f from \u304c, or anything that has you stuck\u2014and get an answer in the language you're reading in.": [
", ein KI-Tutor, wartet in der Ecke jeder Seite. Fragen Sie, warum eine Konjugation funktioniert, was \u306f von \u304c unterscheidet, oder was immer Sie gerade aufh\u00e4lt \u2014 und erhalten Sie die Antwort in der Sprache, in der Sie gerade lesen.",
", un tuteur IA, attend dans le coin de chaque page. Demandez pourquoi une conjugaison fonctionne, ce qui distingue \u306f de \u304c, ou tout ce qui vous bloque \u2014 et recevez la r\u00e9ponse dans la langue que vous lisez.",
"\uff08AI \u5bfc\u5e08\uff09\u5c31\u7b49\u5728\u6bcf\u4e00\u9875\u7684\u89d2\u843d\u3002\u95ee\u95ee\u67d0\u4e2a\u53d8\u4f4d\u4e3a\u4ec0\u4e48\u8fd9\u6837\u3001\u306f \u548c \u304c \u6709\u4f55\u533a\u522b\uff0c\u6216\u4efb\u4f55\u8ba9\u4f60\u5361\u4f4f\u7684\u95ee\u9898 \u2014 \u5e76\u7528\u4f60\u6b63\u5728\u9605\u8bfb\u7684\u8bed\u8a00\u5f97\u5230\u7b54\u6848\u3002"
],
"Whether you're learning kana, drilling characters, studying verbs, or building vocabulary\u2014choose your path below.": [
"Ob Sie Kana lernen, Zeichen \u00fcben, Verben studieren oder Vokabeln aufbauen \u2014 w\u00e4hlen Sie unten Ihren Weg.",
"Que vous appreniez les kana, travailliez les caract\u00e8res, \u00e9tudiiez les verbes ou construisiez votre vocabulaire \u2014 choisissez votre parcours ci-dessous.",
"\u65e0\u8bba\u4f60\u662f\u5728\u5b66\u5047\u540d\u3001\u7ec3\u5b57\u7b26\u3001\u5b66\u52a8\u8bcd\u8fd8\u662f\u79ef\u7d2f\u8bcd\u6c47 \u2014 \u5728\u4e0b\u9762\u9009\u62e9\u4f60\u7684\u8def\u5f84\u3002"
]
});
