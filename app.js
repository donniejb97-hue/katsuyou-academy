    // ============ DATA ============
    const verbs = {
      godan: [
        { kanji: '開く', hiragana: 'あく', romaji: 'aku', meaning: 'to open', jlpt: 'N5' },
        { kanji: '歩く', hiragana: 'あるく', romaji: 'aruku', meaning: 'to walk', jlpt: 'N5' },
        { kanji: '洗う', hiragana: 'あらう', romaji: 'arau', meaning: 'to wash', jlpt: 'N5' },
        { kanji: 'ある', hiragana: 'ある', romaji: 'aru', meaning: 'to exist', jlpt: 'N5' },
        { kanji: '遊ぶ', hiragana: 'あそぶ', romaji: 'asobu', meaning: 'to play', jlpt: 'N5' },
        { kanji: '会う', hiragana: 'あう', romaji: 'au', meaning: 'to meet', jlpt: 'N5' },
        { kanji: '違う', hiragana: 'ちがう', romaji: 'chigau', meaning: 'to differ', jlpt: 'N4' },
        { kanji: '選ぶ', hiragana: 'えらぶ', romaji: 'erabu', meaning: 'to choose', jlpt: 'N3' },
        { kanji: '降る', hiragana: 'ふる', romaji: 'furu', meaning: 'to fall (rain/snow)', jlpt: 'N5' },
        { kanji: '頑張る', hiragana: 'がんばる', romaji: 'ganbaru', meaning: "to do one's best", jlpt: 'N4' },
        { kanji: '入る', hiragana: 'はいる', romaji: 'hairu', meaning: 'to enter', jlpt: 'N5' },
        { kanji: '始まる', hiragana: 'はじまる', romaji: 'hajimaru', meaning: 'to begin', jlpt: 'N4' },
        { kanji: '話す', hiragana: 'はなす', romaji: 'hanasu', meaning: 'to speak', jlpt: 'N5' },
        { kanji: '走る', hiragana: 'はしる', romaji: 'hashiru', meaning: 'to run', jlpt: 'N5' },
        { kanji: '働く', hiragana: 'はたらく', romaji: 'hataraku', meaning: 'to work', jlpt: 'N5' },
        { kanji: '行く', hiragana: 'いく', romaji: 'iku', meaning: 'to go', jlpt: 'N5' },
        { kanji: '急ぐ', hiragana: 'いそぐ', romaji: 'isogu', meaning: 'to hurry', jlpt: 'N4' },
        { kanji: '言う', hiragana: 'いう', romaji: 'iu', meaning: 'to say', jlpt: 'N5' },
        { kanji: '帰る', hiragana: 'かえる', romaji: 'kaeru', meaning: 'to return', jlpt: 'N5' },
        { kanji: '返す', hiragana: 'かえす', romaji: 'kaesu', meaning: 'to return (something)', jlpt: 'N4' },
        { kanji: '書く', hiragana: 'かく', romaji: 'kaku', meaning: 'to write', jlpt: 'N5' },
        { kanji: '貸す', hiragana: 'かす', romaji: 'kasu', meaning: 'to lend', jlpt: 'N5' },
        { kanji: '買う', hiragana: 'かう', romaji: 'kau', meaning: 'to buy', jlpt: 'N5' },
        { kanji: '消す', hiragana: 'けす', romaji: 'kesu', meaning: 'to erase', jlpt: 'N5' },
        { kanji: '聞く', hiragana: 'きく', romaji: 'kiku', meaning: 'to listen', jlpt: 'N5' },
        { kanji: '切る', hiragana: 'きる', romaji: 'kiru', meaning: 'to cut', jlpt: 'N5' },
        { kanji: '困る', hiragana: 'こまる', romaji: 'komaru', meaning: 'to be troubled', jlpt: 'N4' },
        { kanji: '待つ', hiragana: 'まつ', romaji: 'matsu', meaning: 'to wait', jlpt: 'N5' },
        { kanji: '持つ', hiragana: 'もつ', romaji: 'motsu', meaning: 'to hold', jlpt: 'N5' },
        { kanji: '泣く', hiragana: 'なく', romaji: 'naku', meaning: 'to cry', jlpt: 'N4' },
        { kanji: '並ぶ', hiragana: 'ならぶ', romaji: 'narabu', meaning: 'to line up', jlpt: 'N3' },
        { kanji: 'なる', hiragana: 'なる', romaji: 'naru', meaning: 'to become', jlpt: 'N5' },
        { kanji: '飲む', hiragana: 'のむ', romaji: 'nomu', meaning: 'to drink', jlpt: 'N5' },
        { kanji: '乗る', hiragana: 'のる', romaji: 'noru', meaning: 'to ride', jlpt: 'N5' },
        { kanji: '脱ぐ', hiragana: 'ぬぐ', romaji: 'nugu', meaning: 'to take off', jlpt: 'N4' },
        { kanji: '起こす', hiragana: 'おこす', romaji: 'okosu', meaning: 'to wake someone up', jlpt: 'N3' },
        { kanji: '怒る', hiragana: 'おこる', romaji: 'okoru', meaning: 'to get angry', jlpt: 'N3' },
        { kanji: '置く', hiragana: 'おく', romaji: 'oku', meaning: 'to put', jlpt: 'N5' },
        { kanji: '送る', hiragana: 'おくる', romaji: 'okuru', meaning: 'to send', jlpt: 'N4' },
        { kanji: '思う', hiragana: 'おもう', romaji: 'omou', meaning: 'to think', jlpt: 'N4' },
        { kanji: '押す', hiragana: 'おす', romaji: 'osu', meaning: 'to push', jlpt: 'N4' },
        { kanji: '終わる', hiragana: 'おわる', romaji: 'owaru', meaning: 'to end', jlpt: 'N5' },
        { kanji: '泳ぐ', hiragana: 'およぐ', romaji: 'oyogu', meaning: 'to swim', jlpt: 'N5' },
        { kanji: '触る', hiragana: 'さわる', romaji: 'sawaru', meaning: 'to touch', jlpt: 'N3' },
        { kanji: '死ぬ', hiragana: 'しぬ', romaji: 'shinu', meaning: 'to die', jlpt: 'N4' },
        { kanji: '知る', hiragana: 'しる', romaji: 'shiru', meaning: 'to know', jlpt: 'N5' },
        { kanji: '住む', hiragana: 'すむ', romaji: 'sumu', meaning: 'to live', jlpt: 'N5' },
        { kanji: '座る', hiragana: 'すわる', romaji: 'suwaru', meaning: 'to sit', jlpt: 'N5' },
        { kanji: '立つ', hiragana: 'たつ', romaji: 'tatsu', meaning: 'to stand', jlpt: 'N5' },
        { kanji: '飛ぶ', hiragana: 'とぶ', romaji: 'tobu', meaning: 'to fly', jlpt: 'N4' },
        { kanji: '撮る', hiragana: 'とる', romaji: 'toru', meaning: 'to take (photo)', jlpt: 'N5' },
        { kanji: '使う', hiragana: 'つかう', romaji: 'tsukau', meaning: 'to use', jlpt: 'N5' },
        { kanji: '着く', hiragana: 'つく', romaji: 'tsuku', meaning: 'to arrive', jlpt: 'N5' },
        { kanji: '作る', hiragana: 'つくる', romaji: 'tsukuru', meaning: 'to make', jlpt: 'N5' },
        { kanji: '続く', hiragana: 'つづく', romaji: 'tsuzuku', meaning: 'to continue', jlpt: 'N3' },
        { kanji: '売る', hiragana: 'うる', romaji: 'uru', meaning: 'to sell', jlpt: 'N5' },
        { kanji: '歌う', hiragana: 'うたう', romaji: 'utau', meaning: 'to sing', jlpt: 'N5' },
        { kanji: 'わかる', hiragana: 'わかる', romaji: 'wakaru', meaning: 'to understand', jlpt: 'N5' },
        { kanji: '笑う', hiragana: 'わらう', romaji: 'warau', meaning: 'to laugh', jlpt: 'N4' },
        { kanji: '渡る', hiragana: 'わたる', romaji: 'wataru', meaning: 'to cross', jlpt: 'N4' },
        { kanji: '休む', hiragana: 'やすむ', romaji: 'yasumu', meaning: 'to rest', jlpt: 'N5' },
        { kanji: 'やる', hiragana: 'やる', romaji: 'yaru', meaning: 'to do', jlpt: 'N4' },
        { kanji: '呼ぶ', hiragana: 'よぶ', romaji: 'yobu', meaning: 'to call', jlpt: 'N5' },
        { kanji: '読む', hiragana: 'よむ', romaji: 'yomu', meaning: 'to read', jlpt: 'N5' }
      ],
      ichidan: [
        { kanji: 'あげる', hiragana: 'あげる', romaji: 'ageru', meaning: 'to give', jlpt: 'N5' },
        { kanji: '開ける', hiragana: 'あける', romaji: 'akeru', meaning: 'to open', jlpt: 'N5' },
        { kanji: '集める', hiragana: 'あつめる', romaji: 'atsumeru', meaning: 'to collect', jlpt: 'N3' },
        { kanji: 'できる', hiragana: 'できる', romaji: 'dekiru', meaning: 'to be able to', jlpt: 'N5' },
        { kanji: '出る', hiragana: 'でる', romaji: 'deru', meaning: 'to exit', jlpt: 'N5' },
        { kanji: '始める', hiragana: 'はじめる', romaji: 'hajimeru', meaning: 'to begin', jlpt: 'N4' },
        { kanji: '褒める', hiragana: 'ほめる', romaji: 'homeru', meaning: 'to praise', jlpt: 'N3' },
        { kanji: '生きる', hiragana: 'いきる', romaji: 'ikiru', meaning: 'to live', jlpt: 'N4' },
        { kanji: '入れる', hiragana: 'いれる', romaji: 'ireru', meaning: 'to put in', jlpt: 'N5' },
        { kanji: 'いる', hiragana: 'いる', romaji: 'iru', meaning: 'to exist', jlpt: 'N5' },
        { kanji: '変える', hiragana: 'かえる', romaji: 'kaeru', meaning: 'to change', jlpt: 'N4' },
        { kanji: '感じる', hiragana: 'かんじる', romaji: 'kanjiru', meaning: 'to feel', jlpt: 'N3' },
        { kanji: '考える', hiragana: 'かんがえる', romaji: 'kangaeru', meaning: 'to think', jlpt: 'N4' },
        { kanji: '借りる', hiragana: 'かりる', romaji: 'kariru', meaning: 'to borrow', jlpt: 'N5' },
        { kanji: '着る', hiragana: 'きる', romaji: 'kiru', meaning: 'to wear', jlpt: 'N5' },
        { kanji: '答える', hiragana: 'こたえる', romaji: 'kotaeru', meaning: 'to answer', jlpt: 'N4' },
        { kanji: '比べる', hiragana: 'くらべる', romaji: 'kuraberu', meaning: 'to compare', jlpt: 'N3' },
        { kanji: 'くれる', hiragana: 'くれる', romaji: 'kureru', meaning: 'to give (me)', jlpt: 'N5' },
        { kanji: '負ける', hiragana: 'まける', romaji: 'makeru', meaning: 'to lose', jlpt: 'N3' },
        { kanji: '見る', hiragana: 'みる', romaji: 'miru', meaning: 'to see', jlpt: 'N5' },
        { kanji: '見せる', hiragana: 'みせる', romaji: 'miseru', meaning: 'to show', jlpt: 'N5' },
        { kanji: '寝る', hiragana: 'ねる', romaji: 'neru', meaning: 'to sleep', jlpt: 'N5' },
        { kanji: '似る', hiragana: 'にる', romaji: 'niru', meaning: 'to resemble', jlpt: 'N3' },
        { kanji: '覚える', hiragana: 'おぼえる', romaji: 'oboeru', meaning: 'to memorize', jlpt: 'N5' },
        { kanji: '落ちる', hiragana: 'おちる', romaji: 'ochiru', meaning: 'to fall', jlpt: 'N4' },
        { kanji: '起きる', hiragana: 'おきる', romaji: 'okiru', meaning: 'to wake up', jlpt: 'N5' },
        { kanji: '教える', hiragana: 'おしえる', romaji: 'oshieru', meaning: 'to teach', jlpt: 'N5' },
        { kanji: '閉める', hiragana: 'しめる', romaji: 'shimeru', meaning: 'to close', jlpt: 'N5' },
        { kanji: '信じる', hiragana: 'しんじる', romaji: 'shinjiru', meaning: 'to believe', jlpt: 'N3' },
        { kanji: '調べる', hiragana: 'しらべる', romaji: 'shiraberu', meaning: 'to investigate', jlpt: 'N4' },
        { kanji: '捨てる', hiragana: 'すてる', romaji: 'suteru', meaning: 'to throw away', jlpt: 'N4' },
        { kanji: '食べる', hiragana: 'たべる', romaji: 'taberu', meaning: 'to eat', jlpt: 'N5' },
        { kanji: '助ける', hiragana: 'たすける', romaji: 'tasukeru', meaning: 'to help', jlpt: 'N4' },
        { kanji: '止める', hiragana: 'とめる', romaji: 'tomeru', meaning: 'to stop', jlpt: 'N4' },
        { kanji: '疲れる', hiragana: 'つかれる', romaji: 'tsukareru', meaning: 'to get tired', jlpt: 'N5' },
        { kanji: 'つける', hiragana: 'つける', romaji: 'tsukeru', meaning: 'to turn on', jlpt: 'N5' },
        { kanji: '伝える', hiragana: 'つたえる', romaji: 'tsutaeru', meaning: 'to convey', jlpt: 'N3' },
        { kanji: '続ける', hiragana: 'つづける', romaji: 'tsuzukeru', meaning: 'to continue', jlpt: 'N4' },
        { kanji: '受ける', hiragana: 'うける', romaji: 'ukeru', meaning: 'to receive', jlpt: 'N4' },
        { kanji: '忘れる', hiragana: 'わすれる', romaji: 'wasureru', meaning: 'to forget', jlpt: 'N5' }
      ],
      irregular: [
        { kanji: '来る', hiragana: 'くる', romaji: 'kuru', meaning: 'to come', jlpt: 'N5' }
      ],
      suru: [
        { kanji: '案内する', hiragana: 'あんないする', romaji: 'annai suru', meaning: 'to guide', jlpt: 'N3' },
        { kanji: '勉強する', hiragana: 'べんきょうする', romaji: 'benkyou suru', meaning: 'to study', jlpt: 'N5' },
        { kanji: '電話する', hiragana: 'でんわする', romaji: 'denwa suru', meaning: 'to phone', jlpt: 'N5' },
        { kanji: '準備する', hiragana: 'じゅんびする', romaji: 'junbi suru', meaning: 'to prepare', jlpt: 'N4' },
        { kanji: '買い物する', hiragana: 'かいものする', romaji: 'kaimono suru', meaning: 'to shop', jlpt: 'N5' },
        { kanji: '結婚する', hiragana: 'けっこんする', romaji: 'kekkon suru', meaning: 'to get married', jlpt: 'N4' },
        { kanji: '練習する', hiragana: 'れんしゅうする', romaji: 'renshuu suru', meaning: 'to practice', jlpt: 'N4' },
        { kanji: '連絡する', hiragana: 'れんらくする', romaji: 'renraku suru', meaning: 'to contact', jlpt: 'N3' },
        { kanji: '利用する', hiragana: 'りようする', romaji: 'riyou suru', meaning: 'to use', jlpt: 'N3' },
        { kanji: '旅行する', hiragana: 'りょこうする', romaji: 'ryokou suru', meaning: 'to travel', jlpt: 'N5' },
        { kanji: '料理する', hiragana: 'りょうりする', romaji: 'ryouri suru', meaning: 'to cook', jlpt: 'N5' },
        { kanji: '散歩する', hiragana: 'さんぽする', romaji: 'sanpo suru', meaning: 'to take a walk', jlpt: 'N5' },
        { kanji: '説明する', hiragana: 'せつめいする', romaji: 'setsumei suru', meaning: 'to explain', jlpt: 'N4' },
        { kanji: '仕事する', hiragana: 'しごとする', romaji: 'shigoto suru', meaning: 'to work', jlpt: 'N5' },
        { kanji: '心配する', hiragana: 'しんぱいする', romaji: 'shinpai suru', meaning: 'to worry', jlpt: 'N4' },
        { kanji: '質問する', hiragana: 'しつもんする', romaji: 'shitsumon suru', meaning: 'to ask a question', jlpt: 'N4' },
        { kanji: '紹介する', hiragana: 'しょうかいする', romaji: 'shoukai suru', meaning: 'to introduce', jlpt: 'N4' },
        { kanji: '相談する', hiragana: 'そうだんする', romaji: 'soudan suru', meaning: 'to consult', jlpt: 'N4' },
        { kanji: '掃除する', hiragana: 'そうじする', romaji: 'souji suru', meaning: 'to clean', jlpt: 'N5' },
        { kanji: 'する', hiragana: 'する', romaji: 'suru', meaning: 'to do', jlpt: 'N5' },
        { kanji: '運動する', hiragana: 'うんどうする', romaji: 'undou suru', meaning: 'to exercise', jlpt: 'N4' },
        { kanji: '運転する', hiragana: 'うんてんする', romaji: 'unten suru', meaning: 'to drive', jlpt: 'N4' },
        { kanji: '約束する', hiragana: 'やくそくする', romaji: 'yakusoku suru', meaning: 'to promise', jlpt: 'N4' },
        { kanji: '予約する', hiragana: 'よやくする', romaji: 'yoyaku suru', meaning: 'to reserve', jlpt: 'N4' }
      ]
    };

    const forms = [
      { 
        name: 'Negative', 
        key: 'negative', 
        hint: 'Think about what sound you need for negation. Which row of the hiragana chart will give you the right stem before adding the negative ending?',
        templates: [
          { text: '<strong>Negative Form (ない)</strong><br><span style="font-size: 0.9rem; color: var(--text-light);">食<ruby>べる<rt>たべる</rt></ruby> → 食<ruby>べない<rt>たべない</rt></ruby> | 書<ruby>く<rt>かく</rt></ruby> → 書<ruby>かない<rt>かかない</rt></ruby></span>', type: 'direct' },
          { text: '"doesn\'t {meaning}" →', type: 'phrase' }
        ]
      },
      { 
        name: 'Masu', 
        key: 'masu', 
        hint: 'For polite speech, you need a stem that ends in an い sound. Think about how the verb ending needs to change before adding the polite marker.',
        templates: [
          { text: '<strong>Polite Form (ます)</strong><br><span style="font-size: 0.9rem; color: var(--text-light);">食<ruby>べる<rt>たべる</rt></ruby> → 食<ruby>べます<rt>たべます</rt></ruby> | 書<ruby>く<rt>かく</rt></ruby> → 書<ruby>きます<rt>かきます</rt></ruby></span>', type: 'direct' },
          { text: '"{meaning}" (polite) →', type: 'phrase' }
        ]
      },
      { 
        name: 'Past', 
        key: 'past', 
        hint: 'Past tense has different patterns depending on verb type. Consider what the final sound of the verb is—that determines which past ending pattern to use.',
        templates: [
          { text: '<strong>Past Form (た)</strong><br><span style="font-size: 0.9rem; color: var(--text-light);">食<ruby>べる<rt>たべる</rt></ruby> → 食<ruby>べた<rt>たべた</rt></ruby> | 書<ruby>く<rt>かく</rt></ruby> → 書<ruby>いた<rt>かいた</rt></ruby></span>', type: 'direct' },
          { text: '"{meaning}" (past tense) →', type: 'phrase' }
        ]
      },
      { 
        name: 'Tai', 
        key: 'tai', 
        hint: 'When expressing "want to do," you need the ます-stem (い-row). What sound should come before たい?',
        templates: [
          { text: '<strong>Want To (たい)</strong><br><span style="font-size: 0.9rem; color: var(--text-light);">食<ruby>べる<rt>たべる</rt></ruby> → 食<ruby>べたい<rt>たべたい</rt></ruby> | 書<ruby>く<rt>かく</rt></ruby> → 書<ruby>きたい<rt>かきたい</rt></ruby></span>', type: 'direct' },
          { text: '"want to {meaning}" →', type: 'phrase' }
        ]
      },
      { 
        name: 'Potential', 
        key: 'potential', 
        hint: 'The potential form shows ability. Think about which sound before る will express "can do." Consider the verb type carefully—each has its own pattern.',
        templates: [
          { text: '<strong>Potential Form</strong><br><span style="font-size: 0.9rem; color: var(--text-light);">食<ruby>べる<rt>たべる</rt></ruby> → 食<ruby>べられる<rt>たべられる</rt></ruby> | 書<ruby>く<rt>かく</rt></ruby> → 書<ruby>ける<rt>かける</rt></ruby> | する → できる</span>', type: 'direct' },
          { text: '"can {meaning}" →', type: 'phrase' }
        ]
      },
      { 
        name: 'Volitional', 
        key: 'volitional', 
        hint: 'To suggest doing something together, you need a stem with an お sound for some verbs. What makes sense for this verb type?',
        templates: [
          { text: '<strong>Volitional Form</strong><br><span style="font-size: 0.9rem; color: var(--text-light);">食<ruby>べる<rt>たべる</rt></ruby> → 食<ruby>べよう<rt>たべよう</rt></ruby> | 書<ruby>く<rt>かく</rt></ruby> → 書<ruby>こう<rt>かこう</rt></ruby> | する → しよう</span>', type: 'direct' },
          { text: '"let\'s {meaning}" →', type: 'phrase' }
        ]
      },
      { 
        name: 'Te-form', 
        key: 'te', 
        hint: 'The て form uses the same sound changes as the past tense, but ends with て/で instead of た/だ. Think about what happened to the verb ending in past tense.',
        templates: [
          { text: '<strong>Te-form (て)</strong><br><span style="font-size: 0.9rem; color: var(--text-light);">食<ruby>べる<rt>たべる</rt></ruby> → 食<ruby>べて<rt>たべて</rt></ruby> | 書<ruby>く<rt>かく</rt></ruby> → 書<ruby>いて<rt>かいて</rt></ruby> | する → して</span>', type: 'direct' },
          { text: '"{meaning}" (te-form) →', type: 'phrase' }
        ]
      },
      { 
        name: 'Polite Negative', 
        key: 'masen', 
        hint: 'For polite negative, you need the same stem as ます form, but with ません ending instead.',
        templates: [
          { text: '<strong>Polite Negative (ません)</strong><br><span style="font-size: 0.9rem; color: var(--text-light);">食<ruby>べる<rt>たべる</rt></ruby> → 食<ruby>べません<rt>たべません</rt></ruby> | 書<ruby>く<rt>かく</rt></ruby> → 書<ruby>きません<rt>かきません</rt></ruby></span>', type: 'direct' },
          { text: '"doesn\'t {meaning}" (polite) →', type: 'phrase' }
        ]
      },
      { 
        name: 'Polite Past', 
        key: 'mashita', 
        hint: 'For polite past, use the same stem as ます form, but with ました ending instead.',
        templates: [
          { text: '<strong>Polite Past (ました)</strong><br><span style="font-size: 0.9rem; color: var(--text-light);">食<ruby>べる<rt>たべる</rt></ruby> → 食<ruby>べました<rt>たべました</rt></ruby> | 書<ruby>く<rt>かく</rt></ruby> → 書<ruby>きました<rt>かきました</rt></ruby></span>', type: 'direct' },
          { text: '"{meaning}" (polite, past tense) →', type: 'phrase' }
        ]
      },
      { 
        name: 'Negative Past', 
        key: 'nakatta', 
        hint: 'For negative past, start with the negative form (ない), drop the い, and add かった.',
        templates: [
          { text: '<strong>Negative Past (なかった)</strong><br><span style="font-size: 0.9rem; color: var(--text-light);">食<ruby>べる<rt>たべる</rt></ruby> → 食<ruby>べなかった<rt>たべなかった</rt></ruby> | 書<ruby>く<rt>かく</rt></ruby> → 書<ruby>かなかった<rt>かかなかった</rt></ruby></span>', type: 'direct' },
          { text: '"didn\'t {meaning}" →', type: 'phrase' }
        ]
      },
      { 
        name: 'Conditional (Ba)', 
        key: 'ba', 
        hint: 'For ば conditional, Godan verbs shift to え-row + ば. Ichidan drops る + れば. する→すれば.',
        templates: [
          { text: '<strong>Conditional (ば)</strong><br><span style="font-size: 0.9rem; color: var(--text-light);">食<ruby>べる<rt>たべる</rt></ruby> → 食<ruby>べれば<rt>たべれば</rt></ruby> | 書<ruby>く<rt>かく</rt></ruby> → 書<ruby>けば<rt>かけば</rt></ruby> | する → すれば</span>', type: 'direct' },
          { text: '"if {meaning}" →', type: 'phrase' }
        ]
      },
      { 
        name: 'Conditional (Tara)', 
        key: 'tara', 
        hint: 'For たら conditional, start with the past tense form and add ら.',
        templates: [
          { text: '<strong>Conditional (たら)</strong><br><span style="font-size: 0.9rem; color: var(--text-light);">食<ruby>べる<rt>たべる</rt></ruby> → 食<ruby>べたら<rt>たべたら</rt></ruby> | 書<ruby>く<rt>かく</rt></ruby> → 書<ruby>いたら<rt>かいたら</rt></ruby> | する → したら</span>', type: 'direct' },
          { text: '"if/when {meaning}" →', type: 'phrase' }
        ]
      },
      { 
        name: 'Passive', 
        key: 'passive', 
        hint: 'For passive, Godan shifts to あ-row + れる. Ichidan drops る + られる. する→される.',
        templates: [
          { text: '<strong>Passive Form</strong><br><span style="font-size: 0.9rem; color: var(--text-light);">食<ruby>べる<rt>たべる</rt></ruby> → 食<ruby>べられる<rt>たべられる</rt></ruby> | 書<ruby>く<rt>かく</rt></ruby> → 書<ruby>かれる<rt>かかれる</rt></ruby> | する → される</span>', type: 'direct' },
          { text: '"be {meaning}" (passive) →', type: 'phrase' }
        ]
      },
      { 
        name: 'Causative', 
        key: 'causative', 
        hint: 'For causative, Godan shifts to あ-row + せる. Ichidan drops る + させる. する→させる.',
        templates: [
          { text: '<strong>Causative Form</strong><br><span style="font-size: 0.9rem; color: var(--text-light);">食<ruby>べる<rt>たべる</rt></ruby> → 食<ruby>べさせる<rt>たべさせる</rt></ruby> | 書<ruby>く<rt>かく</rt></ruby> → 書<ruby>かせる<rt>かかせる</rt></ruby> | する → させる</span>', type: 'direct' },
          { text: '"make (someone) {meaning}" →', type: 'phrase' }
        ]
      },
      { 
        name: 'Causative-Passive', 
        key: 'causative-passive', 
        hint: 'For causative-passive, Godan: あ-row + される. Ichidan: drop る + させられる. する→させられる.',
        templates: [
          { text: '<strong>Causative-Passive</strong><br><span style="font-size: 0.9rem; color: var(--text-light);">食<ruby>べる<rt>たべる</rt></ruby> → 食<ruby>べさせられる<rt>たべさせられる</rt></ruby> | 書<ruby>く<rt>かく</rt></ruby> → 書<ruby>かせられる<rt>かかせられる</rt></ruby></span>', type: 'direct' },
          { text: '"be made to {meaning}" →', type: 'phrase' }
        ]
      },
      { 
        name: 'Imperative', 
        key: 'imperative', 
        hint: 'For commands, Godan shifts to え-row (書く→書け). Ichidan drops る + ろ/よ (食べる→食べろ). する→しろ.',
        templates: [
          { text: '<strong>Imperative (Command)</strong><br><span style="font-size: 0.9rem; color: var(--text-light);">食<ruby>べる<rt>たべる</rt></ruby> → 食<ruby>べろ<rt>たべろ</rt></ruby> | 書<ruby>く<rt>かく</rt></ruby> → 書<ruby>け<rt>かけ</rt></ruby> | する → しろ</span>', type: 'direct' },
          { text: '"{meaning}!" →', type: 'phrase' }
        ]
      }
    ];

    // ============ FORM DIFFICULTY CATEGORIES ============
    const formCategories = {
      basic: ['masu', 'negative', 'past', 'te', 'masen', 'mashita', 'nakatta'],
      intermediate: ['tai', 'potential', 'volitional', 'ba', 'tara', 'imperative'],
      advanced: ['passive', 'causative', 'causative-passive']
    };

    // ============ STATE ============
    let currentVerb = null;
    // A verb handed over from the Dictionary via /conjugator?v=… — while it is
    // set the drill stays on that one word. It is how the 30,000 words in the
    // dictionary become practisable, not just the 129 on this page's own list.
    let lockedVerb = null;
    let currentForm = null;
    let currentPrompt = null; // Track which prompt template we're using
    let showAnswer = false;
    let firstAttempt = true;
    let stats = { correct: 0, total: 0, skipped: 0 }; // Fresh session each time
    let hintVisible = false;
    let failureTracking = {}; // Track consecutive failures by form type: { 'godan-negative': 2, ... }
    let isTypeIdentificationQuiz = false; // Are we in verb type ID mode?
    let typeIdentificationAnswer = null; // What type did they guess?
    let questionSerial = 0;   // bumped per question, so a slow AI reply can't
                             // land on a question the learner has moved past
    let recentlyUsedVerbs = []; // Track recently used verbs to avoid repetition
    const MAX_RECENT_VERBS = 12; // Keep last 12 verbs in memory

    // ---- Session shape -----------------------------------------------------
    // Open-ended drilling has no finish line, which makes it hard to stay in.
    // A streak gives you something to protect; a session goal gives you a
    // place to stop.
    let streak = 0;
    let bestStreak = 0;
    let session = { answered: 0, correct: 0, skipped: 0, formMisses: {} };

    // ---- Weak spots --------------------------------------------------------
    // Verb + form combinations the learner has got wrong, so they come back
    // instead of vanishing into a 233-verb pool.
    let weakSpots = {};                  // "行く|negative" -> {misses,hits,kanji,type,form}
    const WEAK_REVISIT_CHANCE = 0.35;    // how often a question is a repeat offender
    const WEAK_RETIRE_HITS = 2;          // get it right twice and it's retired
    const WEAK_KEY = 'katsuyo-weakspots';
    const MISTAKES_KEY = 'katsuyo-mistakes';
    const BEST_STREAK_KEY = 'katsuyo-best-streak';
    const MAX_STORED_MISTAKES = 200;

    // ============ LOCALSTORAGE FUNCTIONS ============
    function loadStats() {
      try {
        const saved = localStorage.getItem('katsuyo-stats');
        if (saved) {
          return JSON.parse(saved);
        }
      } catch (e) {
        console.log('Could not load stats from localStorage');
      }
      return { correct: 0, total: 0 };
    }

    function saveStats() {
      try {
        localStorage.setItem('katsuyo-stats', JSON.stringify(stats));
      } catch (e) {
        console.log('Could not save stats to localStorage');
      }
    }

    // Weak spots, the mistake log and the best streak survive a refresh —
    // they're the parts that are worth anything tomorrow.
    function loadProgress() {
      try {
        const w = localStorage.getItem(WEAK_KEY);
        if (w) weakSpots = JSON.parse(w) || {};
      } catch (e) { weakSpots = {}; }
      try {
        const m = localStorage.getItem(MISTAKES_KEY);
        if (m) mistakeLog = JSON.parse(m) || [];
      } catch (e) { mistakeLog = []; }
      try {
        bestStreak = parseInt(localStorage.getItem(BEST_STREAK_KEY), 10) || 0;
      } catch (e) { bestStreak = 0; }
    }

    function saveProgress() {
      try {
        localStorage.setItem(WEAK_KEY, JSON.stringify(weakSpots));
        localStorage.setItem(MISTAKES_KEY, JSON.stringify(mistakeLog.slice(-MAX_STORED_MISTAKES)));
        localStorage.setItem(BEST_STREAK_KEY, String(bestStreak));
      } catch (e) {
        console.log('Could not save progress to localStorage');
      }
    }

    function weakKey(verb, formKey) { return verb.kanji + '|' + formKey; }

    function recordMiss(verb, formKey) {
      const k = weakKey(verb, formKey);
      const entry = weakSpots[k] || { misses: 0, hits: 0, kanji: verb.kanji, type: verb.type, form: formKey };
      entry.misses++;
      entry.hits = 0;                 // a fresh miss resets progress toward retirement
      entry.type = verb.type;
      entry.form = formKey;
      weakSpots[k] = entry;
      session.formMisses[formKey] = (session.formMisses[formKey] || 0) + 1;
      saveProgress();
    }

    function recordHit(verb, formKey) {
      const k = weakKey(verb, formKey);
      const entry = weakSpots[k];
      if (!entry) return;
      entry.hits++;
      if (entry.hits >= WEAK_RETIRE_HITS) delete weakSpots[k];
      saveProgress();
    }

    function resetStats() {
      stats = { correct: 0, total: 0, skipped: 0 };
      mistakeLog = [];
      weakSpots = {};
      streak = 0;
      bestStreak = 0;
      session = { answered: 0, correct: 0, skipped: 0, formMisses: {} };
      saveStats();
      saveProgress();
      updateScoreDisplay();
      updateReportButton();
    }

    function updateScoreDisplay() {
      document.getElementById('score-correct').textContent = stats.correct;
      document.getElementById('score-total').textContent = stats.total;
      const streakEl = document.getElementById('streak-value');
      if (streakEl) streakEl.textContent = streak;
      const bestEl = document.getElementById('streak-best');
      if (bestEl) bestEl.textContent = bestStreak;
      const flame = document.getElementById('streak-box');
      if (flame) flame.classList.toggle('hot', streak >= 5);
      const prog = document.getElementById('session-progress');
      if (prog) {
        const goal = sessionGoal();
        prog.textContent = goal ? (session.answered + ' / ' + goal) : String(session.answered);
      }
    }

    function sessionGoal() {
      const el = document.getElementById('session-goal');
      if (!el) return 0;
      const n = parseInt(el.value, 10);
      return isNaN(n) ? 0 : n;
    }

    function confirmResetStats() {
      if (stats.total === 0) {
        alert('Nothing to reset yet - answer some questions first!');
        return;
      }
      if (confirm(`Reset your score? This will clear your progress (${stats.correct}/${stats.total}) and mistake history.`)) {
        resetStats();
      }
    }

    // ============ NAVIGATION ============
    function showPage(pageName) {
      // Multi-page site: navigate to the page's own URL
      var url = PAGE_URLS[pageName] || '/';
      window.location.href = url;
    }

    var PAGE_URLS = {
      home: '/',
      kana: '/kana',
      learn: '/learn',
      forms: '/forms',
      verblist: '/verblist',
      conjugator: '/conjugator',
      datedojo: '/datedojo',
      vocabulary: '/vocabulary',
      kanji: '/kanji',
      about: '/about'
    };

     // Handle URL hash on page load and back/forward navigation
    function handleHashNavigation() {
      // Legacy support: old links like index.html#kanji redirect to kanji.html
      var hash = window.location.hash.slice(1);
      if (hash && PAGE_URLS[hash] && !document.getElementById('page-' + hash)) {
        window.location.replace(PAGE_URLS[hash]);
      }
    }

    window.addEventListener('DOMContentLoaded', handleHashNavigation);
    window.addEventListener('hashchange', handleHashNavigation);

    // ============ KANA AUDIO ============
    var kanaAudioMap = {
      // Vowels
      'あ': 'audio/あ.mp3', 'ア': 'audio/あ.mp3',
      'い': 'audio/い.mp3', 'イ': 'audio/い.mp3',
      'う': 'audio/う.mp3', 'ウ': 'audio/う.mp3',
      'え': 'audio/え.mp3', 'エ': 'audio/え.mp3',
      'お': 'audio/お.mp3', 'オ': 'audio/お.mp3',
      // K row
      'か': 'audio/か.mp3', 'カ': 'audio/か.mp3',
      'き': 'audio/き.mp3', 'キ': 'audio/き.mp3',
      'く': 'audio/く.mp3', 'ク': 'audio/く.mp3',
      'け': 'audio/け.mp3', 'ケ': 'audio/け.mp3',
      'こ': 'audio/こ.mp3', 'コ': 'audio/こ.mp3',
      // S row
      'さ': 'audio/さ.mp3', 'サ': 'audio/さ.mp3',
      'し': 'audio/し.mp3', 'シ': 'audio/し.mp3',
      'す': 'audio/す.mp3', 'ス': 'audio/す.mp3',
      'せ': 'audio/せ.mp3', 'セ': 'audio/せ.mp3',
      'そ': 'audio/そ.mp3', 'ソ': 'audio/そ.mp3',
      // T row
      'た': 'audio/た.mp3', 'タ': 'audio/た.mp3',
      'ち': 'audio/ち.mp3', 'チ': 'audio/ち.mp3',
      'つ': 'audio/つ.mp3', 'ツ': 'audio/つ.mp3',
      'て': 'audio/て.mp3', 'テ': 'audio/て.mp3',
      'と': 'audio/と.mp3', 'ト': 'audio/と.mp3',
      // N row
      'な': 'audio/な.mp3', 'ナ': 'audio/な.mp3',
      'に': 'audio/に.mp3', 'ニ': 'audio/に.mp3',
      'ぬ': 'audio/ぬ.mp3', 'ヌ': 'audio/ぬ.mp3',
      'ね': 'audio/ね.mp3', 'ネ': 'audio/ね.mp3',
      'の': 'audio/の.mp3', 'ノ': 'audio/の.mp3',
      // H row
      'は': 'audio/は.mp3', 'ハ': 'audio/は.mp3',
      'ひ': 'audio/ひ.mp3', 'ヒ': 'audio/ひ.mp3',
      'ふ': 'audio/ふ.mp3', 'フ': 'audio/ふ.mp3',
      'へ': 'audio/へ.mp3', 'ヘ': 'audio/へ.mp3',
      'ほ': 'audio/ほ.mp3', 'ホ': 'audio/ほ.mp3',
      // M row
      'ま': 'audio/ま.mp3', 'マ': 'audio/ま.mp3',
      'み': 'audio/み.mp3', 'ミ': 'audio/み.mp3',
      'む': 'audio/む.mp3', 'ム': 'audio/む.mp3',
      'め': 'audio/め.mp3', 'メ': 'audio/め.mp3',
      'も': 'audio/も.mp3', 'モ': 'audio/も.mp3',
      // Y row
      'や': 'audio/や.mp3', 'ヤ': 'audio/や.mp3',
      'ゆ': 'audio/ゆ.mp3', 'ユ': 'audio/ゆ.mp3',
      'よ': 'audio/よ.mp3', 'ヨ': 'audio/よ.mp3',
      // R row
      'ら': 'audio/ら.mp3', 'ラ': 'audio/ら.mp3',
      'り': 'audio/り.mp3', 'リ': 'audio/り.mp3',
      'る': 'audio/る.mp3', 'ル': 'audio/る.mp3',
      'れ': 'audio/れ.mp3', 'レ': 'audio/れ.mp3',
      'ろ': 'audio/ろ.mp3', 'ロ': 'audio/ろ.mp3',
      // W row + N
      'わ': 'audio/わ.mp3', 'ワ': 'audio/わ.mp3',
      'を': 'audio/を.mp3', 'ヲ': 'audio/を.mp3',
      'ん': 'audio/ん.mp3', 'ン': 'audio/ん.mp3',
      // Dakuten - G
      'が': 'audio/が.mp3', 'ガ': 'audio/が.mp3',
      'ぎ': 'audio/ぎ.mp3', 'ギ': 'audio/ぎ.mp3',
      'ぐ': 'audio/ぐ.mp3', 'グ': 'audio/ぐ.mp3',
      'げ': 'audio/げ.mp3', 'ゲ': 'audio/げ.mp3',
      'ご': 'audio/ご.mp3', 'ゴ': 'audio/ご.mp3',
      // Dakuten - Z
      'ざ': 'audio/ざ.mp3', 'ザ': 'audio/ざ.mp3',
      'じ': 'audio/じ.mp3', 'ジ': 'audio/じ.mp3',
      'ず': 'audio/ず.mp3', 'ズ': 'audio/ず.mp3',
      'ぜ': 'audio/ぜ.mp3', 'ゼ': 'audio/ぜ.mp3',
      'ぞ': 'audio/ぞ.mp3', 'ゾ': 'audio/ぞ.mp3',
      // Dakuten - D
      'だ': 'audio/だ.mp3', 'ダ': 'audio/だ.mp3',
      'ぢ': 'audio/ぢ.mp3', 'ヂ': 'audio/ぢ.mp3',
      'づ': 'audio/づ.mp3', 'ヅ': 'audio/づ.mp3',
      'で': 'audio/で.mp3', 'デ': 'audio/で.mp3',
      'ど': 'audio/ど.mp3', 'ド': 'audio/ど.mp3',
      // Dakuten - B
      'ば': 'audio/ば.mp3', 'バ': 'audio/ば.mp3',
      'び': 'audio/び.mp3', 'ビ': 'audio/び.mp3',
      'ぶ': 'audio/ぶ.mp3', 'ブ': 'audio/ぶ.mp3',
      'べ': 'audio/べ.mp3', 'ベ': 'audio/べ.mp3',
      'ぼ': 'audio/ぼ.mp3', 'ボ': 'audio/ぼ.mp3',
      // Handakuten - P
      'ぱ': 'audio/ぱ.mp3', 'パ': 'audio/ぱ.mp3',
      'ぴ': 'audio/ぴ.mp3', 'ピ': 'audio/ぴ.mp3',
      'ぷ': 'audio/ぷ.mp3', 'プ': 'audio/ぷ.mp3',
      'ぺ': 'audio/ぺ.mp3', 'ペ': 'audio/ぺ.mp3',
      'ぽ': 'audio/ぽ.mp3', 'ポ': 'audio/ぽ.mp3',
      // Combinations - K
      'きゃ': 'audio/きゃ.mp3', 'キャ': 'audio/きゃ.mp3',
      'きゅ': 'audio/きゅ.mp3', 'キュ': 'audio/きゅ.mp3',
      'きょ': 'audio/きょ.mp3', 'キョ': 'audio/きょ.mp3',
      // Combinations - S
      'しゃ': 'audio/しゃ.mp3', 'シャ': 'audio/しゃ.mp3',
      'しゅ': 'audio/しゅ.mp3', 'シュ': 'audio/しゅ.mp3',
      'しょ': 'audio/しょ.mp3', 'ショ': 'audio/しょ.mp3',
      // Combinations - C
      'ちゃ': 'audio/ちゃ.mp3', 'チャ': 'audio/ちゃ.mp3',
      'ちゅ': 'audio/ちゅ.mp3', 'チュ': 'audio/ちゅ.mp3',
      'ちょ': 'audio/ちょ.mp3', 'チョ': 'audio/ちょ.mp3',
      // Combinations - N
      'にゃ': 'audio/にゃ.mp3', 'ニャ': 'audio/にゃ.mp3',
      'にゅ': 'audio/にゅ.mp3', 'ニュ': 'audio/にゅ.mp3',
      'にょ': 'audio/にょ.mp3', 'ニョ': 'audio/にょ.mp3',
      // Combinations - H
      'ひゃ': 'audio/ひゃ.mp3', 'ヒャ': 'audio/ひゃ.mp3',
      'ひゅ': 'audio/ひゅ.mp3', 'ヒュ': 'audio/ひゅ.mp3',
      'ひょ': 'audio/ひょ.mp3', 'ヒョ': 'audio/ひょ.mp3',
      // Combinations - M
      'みゃ': 'audio/みゃ.mp3', 'ミャ': 'audio/みゃ.mp3',
      'みゅ': 'audio/みゅ.mp3', 'ミュ': 'audio/みゅ.mp3',
      'みょ': 'audio/みょ.mp3', 'ミョ': 'audio/みょ.mp3',
      // Combinations - R
      'りゃ': 'audio/りゃ.mp3', 'リャ': 'audio/りゃ.mp3',
      'りゅ': 'audio/りゅ.mp3', 'リュ': 'audio/りゅ.mp3',
      'りょ': 'audio/りょ.mp3', 'リョ': 'audio/りょ.mp3',
      // Combinations - G
      'ぎゃ': 'audio/ぎゃ.mp3', 'ギャ': 'audio/ぎゃ.mp3',
      'ぎゅ': 'audio/ぎゅ.mp3', 'ギュ': 'audio/ぎゅ.mp3',
      'ぎょ': 'audio/ぎょ.mp3', 'ギョ': 'audio/ぎょ.mp3',
      // Combinations - J
      'じゃ': 'audio/じゃ.mp3', 'ジャ': 'audio/じゃ.mp3',
      'じゅ': 'audio/じゅ.mp3', 'ジュ': 'audio/じゅ.mp3',
      'じょ': 'audio/じょ.mp3', 'ジョ': 'audio/じょ.mp3',
      // Combinations - B
      'びゃ': 'audio/びゃ.mp3', 'ビャ': 'audio/びゃ.mp3',
      'びゅ': 'audio/びゅ.mp3', 'ビュ': 'audio/びゅ.mp3',
      'びょ': 'audio/びょ.mp3', 'ビョ': 'audio/びょ.mp3',
      // Combinations - P
      'ぴゃ': 'audio/ぴゃ.mp3', 'ピャ': 'audio/ぴゃ.mp3',
      'ぴゅ': 'audio/ぴゅ.mp3', 'ピュ': 'audio/ぴゅ.mp3',
      'ぴょ': 'audio/ぴょ.mp3', 'ピョ': 'audio/ぴょ.mp3'
    };
    var currentAudio = null;
    
    function playKanaAudio(kana) {
      var audioSrc = kanaAudioMap[kana];
      if (audioSrc) {
        if (currentAudio) {
          currentAudio.pause();
          currentAudio.currentTime = 0;
        }
        currentAudio = new Audio(audioSrc);
        currentAudio.play().catch(function(e) {
          console.log('Audio play failed:', e, 'for kana:', kana, 'src:', audioSrc);
        });
      } else {
        console.log('No audio mapping for:', kana);
      }
    }

    function showTab(tabName) {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelector('.tab[data-tab="' + tabName + '"]').classList.add('active');
      
      document.querySelectorAll('.form-card').forEach(c => c.classList.remove('active'));
      document.getElementById('tab-' + tabName).classList.add('active');
      
      // Scroll to top of page
      window.scrollTo(0, 0);
    }

    

    // ============ MISTAKE TRACKING SYSTEM ============
    let mistakeLog = [];
    const MIN_ATTEMPTS_FOR_REPORT = 3; // Need at least 3 attempts to show report

    function logMistake(verb, form, userAnswer, correctAnswer) {
      mistakeLog.push({
        timestamp: Date.now(),
        verbType: verb.type,
        verbKanji: verb.kanji,
        verbHiragana: verb.hiragana,
        verbMeaning: verb.meaning,
        form: form,
        userAnswer: userAnswer,
        correctAnswer: correctAnswer
      });

      // Enable report button after enough attempts
      updateReportButton();
    }

    function updateReportButton() {
      const reportBtn = document.getElementById('report-btn');
      // Always enable the report button
      reportBtn.disabled = false;
      reportBtn.style.opacity = '1';
      reportBtn.style.cursor = 'pointer';
      reportBtn.title = 'View your practice report and mistake patterns';
    }

    function isLikelyIntentionalFailure(userAnswer, correctAnswer) {
      // Check if answer seems intentionally wrong (skipping)
      if (!userAnswer || userAnswer.length === 0) return true;
      if (userAnswer.length === 1 && userAnswer !== correctAnswer.charAt(0)) return true;
      if (userAnswer === 'a' || userAnswer === 'aa' || userAnswer === 'aaa') return true;
      if (/^(.)\1+$/.test(userAnswer)) return true; // Repeated single character
      
      // If answer has no hiragana at all (just random letters)
      const hasHiragana = /[\u3040-\u309f]/.test(userAnswer);
      if (!hasHiragana && correctAnswer.length > 3) return true;
      
      // Very short answer for long correct answer
      if (userAnswer.length <= 2 && correctAnswer.length >= 5) return true;
      
      return false;
    }

    function explainMistake(mistake) {
      const userAns = mistake.userAnswer;
      const correctAns = mistake.correctAnswer;
      const verb = mistake.verbKanji;
      const hiragana = mistake.verbHiragana;
      const form = mistake.form;
      const type = mistake.verbType;

      // Helper functions for styled text
      const red = (text) => `<span style="color: #d32f2f; font-weight: 600;">${text}</span>`;
      const green = (text) => `<span style="color: #2e7d32; font-weight: 600;">${text}</span>`;
      const orange = (text) => `<span style="color: #f57c00; font-weight: 600;">${text}</span>`;

      // Handle verb type identification mistakes
      if (form === 'type-identification') {
        const correctType = correctAns.split(' ')[0];
        let explanation = '';
        
        if (correctType === 'godan') {
          explanation = `<strong>Why it's Godan:</strong> ${verb} ends in ${orange(hiragana.slice(-1))}, an う-row sound. Godan verbs shift through 5 vowel rows when conjugating.`;
        } else if (correctType === 'ichidan') {
          explanation = `<strong>Why it's Ichidan:</strong> ${verb} ends in ${orange(hiragana.slice(-2))} (-eru/-iru pattern). Just drop る and add endings!`;
        } else if (correctType === 'suru') {
          explanation = `<strong>Why it's する:</strong> ${verb} = noun + する. The noun never changes, only する conjugates.`;
        } else if (correctType === 'irregular') {
          explanation = `<strong>Why it's Irregular:</strong> 来る doesn't follow standard patterns. Its stem changes: く→き→こ.`;
        }
        
        return `${explanation}<br><br>` +
          `<div style="background: #ffebee; padding: 0.75rem; border-left: 3px solid #c62828; border-radius: 4px;">` +
          `<strong>You wrote:</strong> ${red(userAns)}<br>` +
          `<strong>Correct:</strong> ${green(correctType)}</div>`;
      }

      // Check for skipped questions
      if (isLikelyIntentionalFailure(userAns, correctAns)) {
        return `<div style="background: #fff3e0; padding: 1rem; border-left: 3px solid #f57c00; border-radius: 4px;">` +
          `<strong>⚠️ Skipped Question</strong><br>Make your best guess — wrong answers teach more than skipping!</div>`;
      }

      // Get conjugation data based on verb type
      const stem = hiragana.slice(0, -1);
      const lastChar = hiragana.slice(-1);
      
      // Godan vowel rows
      const uRow = ['う', 'く', 'ぐ', 'す', 'つ', 'ぬ', 'ぶ', 'む', 'る'];
      const aRow = ['わ', 'か', 'が', 'さ', 'た', 'な', 'ば', 'ま', 'ら'];
      const iRow = ['い', 'き', 'ぎ', 'し', 'ち', 'に', 'び', 'み', 'り'];
      const eRow = ['え', 'け', 'げ', 'せ', 'て', 'ね', 'べ', 'め', 'れ'];
      const oRow = ['お', 'こ', 'ご', 'そ', 'と', 'の', 'ぼ', 'も', 'ろ'];
      const idx = uRow.indexOf(lastChar);

      let explanation = '';
      let error = '';
      let tip = '';

      // ========== GODAN VERBS ==========
      if (type === 'godan') {
        
        // Detect what the user likely did wrong
        const detectError = () => {
          // Check if they used a completely wrong form
          if (userAns.includes('ます') && form !== 'masu' && form !== 'masen' && form !== 'mashita') {
            return `You made the ます form, but this asked for a different form.`;
          }
          if (userAns.includes('ない') && form !== 'negative' && form !== 'nakatta') {
            return `You made the negative form, but this asked for a different form.`;
          }
          if (userAns.includes('たい') && form !== 'tai') {
            return `You made the たい form, but this asked for a different form.`;
          }
          
          // Check vowel row errors for regular forms
          if (['negative', 'nakatta', 'passive', 'causative', 'causative-passive'].includes(form)) {
            if (userAns.includes(iRow[idx])) return `You used い-row (${iRow[idx]}), but this form needs あ-row (${aRow[idx]}).`;
            if (userAns.includes(eRow[idx])) return `You used え-row (${eRow[idx]}), but this form needs あ-row (${aRow[idx]}).`;
            if (userAns.includes(oRow[idx])) return `You used お-row (${oRow[idx]}), but this form needs あ-row (${aRow[idx]}).`;
          }
          if (['masu', 'masen', 'mashita', 'tai'].includes(form)) {
            if (userAns.includes(aRow[idx])) return `You used あ-row (${aRow[idx]}), but this form needs い-row (${iRow[idx]}).`;
            if (userAns.includes(eRow[idx])) return `You used え-row (${eRow[idx]}), but this form needs い-row (${iRow[idx]}).`;
            if (userAns.includes(oRow[idx])) return `You used お-row (${oRow[idx]}), but this form needs い-row (${iRow[idx]}).`;
          }
          if (['potential', 'ba', 'imperative'].includes(form)) {
            if (userAns.includes(aRow[idx])) return `You used あ-row (${aRow[idx]}), but this form needs え-row (${eRow[idx]}).`;
            if (userAns.includes(iRow[idx])) return `You used い-row (${iRow[idx]}), but this form needs え-row (${eRow[idx]}).`;
            if (userAns.includes(oRow[idx])) return `You used お-row (${oRow[idx]}), but this form needs え-row (${eRow[idx]}).`;
          }
          if (form === 'volitional') {
            if (userAns.includes(aRow[idx])) return `You used あ-row (${aRow[idx]}), but volitional needs お-row (${oRow[idx]}).`;
            if (userAns.includes(iRow[idx])) return `You used い-row (${iRow[idx]}), but volitional needs お-row (${oRow[idx]}).`;
            if (userAns.includes(eRow[idx])) return `You used え-row (${eRow[idx]}), but volitional needs お-row (${oRow[idx]}).`;
          }
          
          // Check for missing endings
          if (form === 'negative' && !userAns.includes('ない')) return `Missing ない ending.`;
          if (form === 'masu' && !userAns.includes('ます')) return `Missing ます ending.`;
          if (form === 'tai' && !userAns.includes('たい')) return `Missing たい ending.`;
          if (form === 'potential' && !userAns.endsWith('る')) return `Potential form must end with る.`;
          if (form === 'volitional' && !userAns.endsWith('う')) return `Volitional form must end with う.`;
          
          return `Check the conjugation pattern carefully.`;
        };

        // Build explanation based on form
        if (form === 'negative') {
          explanation = `<strong>Rule:</strong> ${lastChar} → ${orange(aRow[idx])} + ない`;
          tip = `Negative always uses あ-row!`;
        } else if (form === 'masu') {
          explanation = `<strong>Rule:</strong> ${lastChar} → ${orange(iRow[idx])} + ます`;
          tip = `ます, ません, ました, たい all use the ます-stem (い-row)!`;
        } else if (form === 'past' || form === 'te') {
          const patterns = {
            'く': form === 'past' ? 'いた' : 'いて',
            'ぐ': form === 'past' ? 'いだ' : 'いで',
            'す': form === 'past' ? 'した' : 'して',
            'つ': form === 'past' ? 'った' : 'って',
            'る': form === 'past' ? 'った' : 'って',
            'う': form === 'past' ? 'った' : 'って',
            'む': form === 'past' ? 'んだ' : 'んで',
            'ぶ': form === 'past' ? 'んだ' : 'んで',
            'ぬ': form === 'past' ? 'んだ' : 'んで'
          };
          explanation = `<strong>Rule:</strong> ${lastChar}-verbs → ${orange(patterns[lastChar])}`;
          tip = form === 'te' ? `て form uses same changes as past, but て/で instead of た/だ.` : `Group by ending: く→いた, す→した, む/ぶ/ぬ→んだ, つ/る/う→った`;
        } else if (form === 'tai') {
          explanation = `<strong>Rule:</strong> ${lastChar} → ${orange(iRow[idx])} + たい (same stem as ます)`;
          tip = `If you know ます form, just swap ます for たい!`;
        } else if (form === 'potential') {
          explanation = `<strong>Rule:</strong> ${lastChar} → ${orange(eRow[idx])} + る`;
          tip = `Potential = え-row + る. Don't confuse with volitional (お-row + う)!`;
        } else if (form === 'volitional') {
          explanation = `<strong>Rule:</strong> ${lastChar} → ${orange(oRow[idx])} + う`;
          tip = `Volitional = お-row + う. "Let's do it!"`;
        } else if (form === 'masen') {
          explanation = `<strong>Rule:</strong> ${lastChar} → ${orange(iRow[idx])} + ません`;
          tip = `Same stem as ます, different ending!`;
        } else if (form === 'mashita') {
          explanation = `<strong>Rule:</strong> ${lastChar} → ${orange(iRow[idx])} + ました`;
          tip = `Same stem as ます, different ending!`;
        } else if (form === 'nakatta') {
          explanation = `<strong>Rule:</strong> ${lastChar} → ${orange(aRow[idx])} + なかった`;
          tip = `Think: negative (ない) → past of ない = なかった`;
        } else if (form === 'ba') {
          explanation = `<strong>Rule:</strong> ${lastChar} → ${orange(eRow[idx])} + ば`;
          tip = `ば conditional: "if you [verb]..."`;
        } else if (form === 'tara') {
          const pastEnd = {'く':'いた','ぐ':'いだ','す':'した','つ':'った','る':'った','う':'った','む':'んだ','ぶ':'んだ','ぬ':'んだ'}[lastChar];
          explanation = `<strong>Rule:</strong> Past form (${stem}${pastEnd}) + ら`;
          tip = `たら = past tense + ら. Easy if you know past form!`;
        } else if (form === 'passive') {
          explanation = `<strong>Rule:</strong> ${lastChar} → ${orange(aRow[idx])} + れる`;
          tip = `Passive and causative both use あ-row!`;
        } else if (form === 'causative') {
          explanation = `<strong>Rule:</strong> ${lastChar} → ${orange(aRow[idx])} + せる`;
          tip = `"Make/let someone do" = あ-row + せる`;
        } else if (form === 'causative-passive') {
          explanation = `<strong>Rule:</strong> ${lastChar} → ${orange(aRow[idx])} + せられる`;
          tip = `"Be made to do" = causative + passive combined`;
        } else if (form === 'imperative') {
          explanation = `<strong>Rule:</strong> ${lastChar} → ${orange(eRow[idx])} (no extra ending)`;
          tip = `Just shift to え-row. Short and commanding!`;
        }

        error = detectError();

      // ========== ICHIDAN VERBS ==========
      } else if (type === 'ichidan') {
        const endings = {
          'negative': 'ない', 'masu': 'ます', 'past': 'た', 'te': 'て',
          'tai': 'たい', 'potential': 'られる', 'volitional': 'よう',
          'masen': 'ません', 'mashita': 'ました', 'nakatta': 'なかった',
          'ba': 'れば', 'tara': 'たら', 'passive': 'られる',
          'causative': 'させる', 'causative-passive': 'させられる', 'imperative': 'ろ'
        };

        explanation = `<strong>Ichidan Rule:</strong> Drop る → ${orange(stem)} + ${orange(endings[form])}`;
        
        if (userAns.startsWith(hiragana)) {
          error = `You forgot to drop the る! Ichidan verbs remove る before adding endings.`;
        } else if (!userAns.startsWith(stem)) {
          error = `Wrong stem. Keep ${orange(stem)}, don't change it.`;
        } else {
          error = `Stem is correct, but ending should be ${orange(endings[form])}.`;
        }
        
        tip = `Ichidan is easy: stem never changes, just swap endings!`;

      // ========== SURU VERBS ==========
      } else if (type === 'suru') {
        const suruEndings = {
          'negative': 'しない', 'masu': 'します', 'past': 'した', 'te': 'して',
          'tai': 'したい', 'potential': 'できる', 'volitional': 'しよう',
          'masen': 'しません', 'mashita': 'しました', 'nakatta': 'しなかった',
          'ba': 'すれば', 'tara': 'したら', 'passive': 'される',
          'causative': 'させる', 'causative-passive': 'させられる', 'imperative': 'しろ'
        };
        
        const nounPart = hiragana.replace('する', '');
        explanation = `<strong>する Rule:</strong> ${orange(nounPart)} (unchanged) + ${orange(suruEndings[form])}`;
        
        if (!userAns.startsWith(nounPart)) {
          error = `Don't change the noun part! Keep ${orange(nounPart)} exactly as is.`;
        } else {
          error = `Noun is correct, but する → ${orange(suruEndings[form])} for this form.`;
        }
        
        if (form === 'potential') {
          tip = `Special: する potential = できる (not *せる)`;
        } else {
          tip = `The noun never changes — only する conjugates!`;
        }

      // ========== IRREGULAR (来る) ==========
      } else if (type === 'irregular') {
        const kuruForms = {
          'negative': 'こない', 'masu': 'きます', 'past': 'きた', 'te': 'きて',
          'tai': 'きたい', 'potential': 'こられる', 'volitional': 'こよう',
          'masen': 'きません', 'mashita': 'きました', 'nakatta': 'こなかった',
          'ba': 'くれば', 'tara': 'きたら', 'passive': 'こられる',
          'causative': 'こさせる', 'causative-passive': 'こさせられる', 'imperative': 'こい'
        };
        
        const stemUsed = kuruForms[form] ? kuruForms[form].charAt(0) : 'く';
        explanation = `<strong>来る (irregular):</strong> Stem changes to ${orange(stemUsed)} for this form`;
        error = `来る uses different stems: き (masu/past/te), こ (negative/potential), く (conditional).`;
        tip = `来る must be memorized — it's one of only two truly irregular verbs!`;
      }

      // Build final output
      return `${explanation}<br><br>` +
        `<div style="background: #fff8e1; padding: 0.75rem; border-left: 3px solid #f57c00; border-radius: 4px; margin-bottom: 0.75rem;">` +
        `<strong>❌ Error:</strong> ${error}</div>` +
        `<div style="background: #ffebee; padding: 0.75rem; border-left: 3px solid #c62828; border-radius: 4px; margin-bottom: 0.75rem;">` +
        `<strong>You wrote:</strong> ${red(userAns || '(empty)')}<br>` +
        `<strong>Correct:</strong> ${green(correctAns)}</div>` +
        `<div style="background: #e3f2fd; padding: 0.75rem; border-left: 3px solid #1976d2; border-radius: 4px;">` +
        `<strong>💡 Tip:</strong> ${tip}</div>`;
    }


    function calculateSimilarity(str1, str2) {
      if (str1 === str2) return 1.0;
      const longer = str1.length > str2.length ? str1 : str2;
      const shorter = str1.length > str2.length ? str2 : str1;
      if (longer.length === 0) return 1.0;
      
      let matches = 0;
      for (let i = 0; i < shorter.length; i++) {
        if (shorter[i] === longer[i]) matches++;
      }
      return matches / longer.length;
    }

    // ========================================================================
    // ROMAJI → KANA
    // ------------------------------------------------------------------------
    // So the Conjugator works without a Japanese IME installed. Typing
    // "ikanai" turns into いかない as you go. Anything already in kana or kanji
    // passes straight through, and an incomplete trailing syllable ("ik") is
    // left alone so you can keep typing.
    // ========================================================================

    const ROMAJI_MAP = (function () {
      const m = {
        a:'あ', i:'い', u:'う', e:'え', o:'お',
        ka:'か', ki:'き', ku:'く', ke:'け', ko:'こ',
        ga:'が', gi:'ぎ', gu:'ぐ', ge:'げ', go:'ご',
        sa:'さ', shi:'し', si:'し', su:'す', se:'せ', so:'そ',
        za:'ざ', ji:'じ', zi:'じ', zu:'ず', ze:'ぜ', zo:'ぞ',
        ta:'た', chi:'ち', tsu:'つ', tu:'つ', te:'て', to:'と',
        da:'だ', du:'づ', dzu:'づ', de:'で', "do":'ど',
        na:'な', ni:'に', nu:'ぬ', ne:'ね', no:'の',
        ha:'は', hi:'ひ', fu:'ふ', hu:'ふ', he:'へ', ho:'ほ',
        ba:'ば', bi:'び', bu:'ぶ', be:'べ', bo:'ぼ',
        pa:'ぱ', pi:'ぴ', pu:'ぷ', pe:'ぺ', po:'ぽ',
        ma:'ま', mi:'み', mu:'む', me:'め', mo:'も',
        ya:'や', yu:'ゆ', yo:'よ',
        ra:'ら', ri:'り', ru:'る', re:'れ', ro:'ろ',
        wa:'わ', wi:'うぃ', we:'うぇ', wo:'を',
        // digraphs
        kya:'きゃ', kyu:'きゅ', kyo:'きょ',
        gya:'ぎゃ', gyu:'ぎゅ', gyo:'ぎょ',
        sha:'しゃ', shu:'しゅ', sho:'しょ',
        sya:'しゃ', syu:'しゅ', syo:'しょ',
        ja:'じゃ', ju:'じゅ', jo:'じょ',
        jya:'じゃ', jyu:'じゅ', jyo:'じょ',
        zya:'じゃ', zyu:'じゅ', zyo:'じょ',
        cha:'ちゃ', chu:'ちゅ', cho:'ちょ',
        tya:'ちゃ', tyu:'ちゅ', tyo:'ちょ',
        nya:'にゃ', nyu:'にゅ', nyo:'にょ',
        hya:'ひゃ', hyu:'ひゅ', hyo:'ひょ',
        bya:'びゃ', byu:'びゅ', byo:'びょ',
        pya:'ぴゃ', pyu:'ぴゅ', pyo:'ぴょ',
        mya:'みゃ', myu:'みゅ', myo:'みょ',
        rya:'りゃ', ryu:'りゅ', ryo:'りょ',
        // Foreign sounds. These only exist in loanwords, which is exactly what
        // the katakana mode is for — without them ソファ, シェフ, ファックス
        // and パーティー simply cannot be typed.
        fa:'ふぁ', fi:'ふぃ', fe:'ふぇ', fo:'ふぉ',
        she:'しぇ', je:'じぇ', jye:'じぇ', zye:'じぇ', che:'ちぇ', tye:'ちぇ',
        tsa:'つぁ', tsi:'つぃ', tse:'つぇ', tso:'つぉ',
        va:'ゔぁ', vi:'ゔぃ', vu:'ゔ', ve:'ゔぇ', vo:'ゔぉ',
        // ti / di are ティ / ディ in Hepburn, which is the romanisation this
        // site teaches everywhere else — ち and ぢ remain chi and dji/di-less.
        // thi / dhi are the IME spellings and work too.
        ti:'てぃ', thi:'てぃ', di:'でぃ', dhi:'でぃ',
        twu:'とぅ', dwu:'どぅ',
        // ゐ and ゑ are archaic and appear in no modern word; うぃ / うぇ are
        // what wi and we mean in a loanword.
        wha:'うぁ', whi:'うぃ', whe:'うぇ', who:'うぉ',
        // small kana, IME-style
        xa:'ぁ', xi:'ぃ', xu:'ぅ', xe:'ぇ', xo:'ぉ',
        xya:'ゃ', xyu:'ゅ', xyo:'ょ', xtsu:'っ', xtu:'っ',
        // punctuation people actually type
        '-':'ー', '.':'。', ',':'、'
      };
      // Learners often write l where they mean r. Treat them the same.
      ['a','i','u','e','o','ya','yu','yo'].forEach(function (v) {
        if (m['r' + v]) m['l' + v] = m['r' + v];
      });
      return m;
    })();

    const ROMAJI_MAX_LEN = 4;

    // Consonants that double into a small っ when repeated (kk, tt, ssh…).
    const GEMINATE = /^[bcdfgjkmpqrstvwxyz]$/;

    // `final` = the learner has finished typing (they hit Check), so a
    // dangling "n" is committed to ん. While they're still typing it stays a
    // literal "n", because the next keystroke might make it な.
    function romajiToKana(text, final) {
      if (!text) return '';
      let out = '';
      let i = 0;
      while (i < text.length) {
        const ch = text[i];

        // Anything that isn't a plain Latin letter or mapped punctuation is
        // already kana/kanji — leave it exactly as it is.
        if (!/[a-zA-Z\-.,]/.test(ch)) { out += ch; i++; continue; }

        const lower = text.slice(i).toLowerCase();

        // ん: "n" before a consonant, "n'", or "nn".
        // "nn" + vowel is ん followed by a な-row syllable (konnichiwa →
        // こんにちわ), so only one n is consumed in that case.
        if (lower[0] === 'n') {
          if (lower[1] === "'") { out += 'ん'; i += 2; continue; }
          if (lower[1] === 'n') {
            // "nn" sitting at the very end while you are still typing: we
            // cannot yet know whether a vowel follows (konni → こんに) or not
            // (honn → ほん), and committing ん here throws the second n away —
            // which is why konnichiwa came out こんいちわ when typed letter by
            // letter but こんにちわ when converted in one go. Hold both back.
            if (lower.length === 2 && !final) { out += text.slice(i); break; }
            out += 'ん';
            i += /[aiueoy]/.test(lower[2] || '') ? 1 : 2;
            continue;
          }
          if (lower.length > 1 && !/[aiueoy]/.test(lower[1])) { out += 'ん'; i += 1; continue; }
          if (lower.length === 1 && final) { out += 'ん'; i += 1; continue; }
        }

        // っ: doubled consonant, e.g. kk → っk
        if (GEMINATE.test(lower[0]) && lower[1] === lower[0]) {
          out += 'っ'; i += 1; continue;
        }

        // Longest match wins: tsu before tu, kyo before ky.
        let matched = false;
        for (let len = Math.min(ROMAJI_MAX_LEN, lower.length); len >= 1; len--) {
          const chunk = lower.slice(0, len);
          if (ROMAJI_MAP[chunk]) {
            out += ROMAJI_MAP[chunk];
            i += len;
            matched = true;
            break;
          }
        }
        if (matched) continue;

        // No match — an unfinished syllable. Keep the raw letters so the
        // learner can carry on typing.
        out += ch;
        i++;
      }
      return out;
    }

    window.KA_toKana = romajiToKana;

    // ========================================================================
    // SHARED KANA INPUT
    // ------------------------------------------------------------------------
    // Every box on the site that takes romaji and gives back kana wants the
    // same four behaviours, and until now each one had its own copy — which is
    // why the Dojo learned to resolve a trailing ん on its own while Talk and
    // the Conjugator still made you type nnn, and why the Conjugator still
    // refused to convert anything unless the caret sat at the very end.
    //
    //   1. Convert behind the caret, leave the tail alone. Editing the middle
    //      of a sentence has to keep working — speech and paste both fill the
    //      box from nowhere near the end.
    //   2. Survive a stranded IME composition. compositionend does not always
    //      fire (focus leaving mid-word, an IME switched off, autofill or
    //      dictation firing compositionstart), and once stranded the converter
    //      was dead for the rest of the session. `isComposing === false` on an
    //      ordinary keystroke clears it.
    //   3. Guess a lone trailing "n" after a pause — and be willing to take the
    //      guess back. A trailing n is undecidable while the field is open:
    //      ni → に, nn → ん, nb → んb, and only the next character says which.
    //      Showing ん once you stop typing is good feedback, so it stays; what
    //      was wrong before was that the guess was never revisited. Typing
    //      slower than about two characters a second silently produced んい for
    //      "ni", こんんいちわ for "konnichiwa", かんんじ for "kannji" — with
    //      nothing in the box to say it had happened. Now the ん is provisional:
    //      if the next key is a vowel, y or another n, the ん is put back to an
    //      n and the pair resolves properly. Any other key confirms it.
    //   4. Commit on blur and on flush(), so leaving the box or pressing Check
    //      never strands a half-syllable — that is where a trailing n becomes ん.
    // ========================================================================
    var KANA_N_DELAY = 420;
    // The keys that prove a guessed ん wrong. Vowels and y continue into な行 or
    // にゃ; a following n means the pair was "nn", which is one ん, not two.
    var KANA_N_UNDO = /[aiueoyn]/i;

    function attachKanaInput(input, opts) {
      if (!input || !window.KA_toKana) return null;
      opts = opts || {};
      var enabled = opts.enabled || function () { return true; };
      // Talk overrides this, because katakana mode converts only the trailing
      // run of Latin letters rather than the whole head.
      var convert = opts.convert || function (t, final) { return romajiToKana(t, final); };
      var timer = null;
      // The exact field value right after this code guessed a ん. Null means
      // there is nothing to take back. Anything the user does that we cannot
      // account for character for character clears it.
      var guessed = null;

      function clearComposing() { delete input.dataset.composing; }
      function forget() { guessed = null; }

      function commit(speculative) {
        if (timer) { clearTimeout(timer); timer = null; }
        if (!enabled() || input.dataset.composing) return;
        // Only when the caret is at the end: committing behind a caret someone
        // has moved would rewrite text they are in the middle of editing.
        var caret = input.selectionStart;
        if (caret != null && caret !== input.value.length) return;
        var before = input.value;
        var done = convert(before, true);
        guessed = null;
        if (done === before) return;
        input.value = done;
        try { input.setSelectionRange(done.length, done.length); } catch (e) {}
        // A guess is revisable only when what changed was a trailing run of
        // Latin letters ending in n — "…n" → …ん, "…nn" → …ん. Never a larger
        // rewrite, and never on the blur path, where the learner has left and
        // there is no next key to judge the guess by.
        if (speculative && /n$/i.test(before)) {
          var i = 0;
          while (i < before.length && i < done.length && before.charAt(i) === done.charAt(i)) i++;
          if (/^[A-Za-z]+$/.test(before.slice(i))) guessed = { before: before, after: done };
        }
      }

      // Put a guessed ん back to an n when the key that follows proves it wrong,
      // so ん + i becomes に and "konnichiwa" survives a slow typist. Every
      // condition here is a guard: the text must be exactly what this code left
      // plus one appended character, and the caret must still be at the end, or
      // the user has been editing and nothing may be rewritten.
      function undoGuess(el) {
        var g = guessed;
        guessed = null;
        if (!g) return false;
        var v = el.value;
        if (v.length !== g.after.length + 1 || v.slice(0, g.after.length) !== g.after) return false;
        var caret = el.selectionStart;
        if (caret != null && caret !== v.length) return false;
        var next = v.charAt(v.length - 1);
        if (!KANA_N_UNDO.test(next)) return false;
        // Put the r\u014dmaji back exactly as it was and let the converter decide
        // again, now that it can see the character it was missing: "\u307fnn" + a
        // is \u307f\u3093\u306a, which no amount of patching the \u3093 itself would reach.
        el.value = g.before + next;
        try { el.setSelectionRange(el.value.length, el.value.length); } catch (e) {}
        return true;
      }

      function armN() {
        if (timer) { clearTimeout(timer); timer = null; }
        if (!/n$/i.test(input.value)) return;
        timer = setTimeout(function () { commit(true); }, KANA_N_DELAY);
      }

      input.addEventListener('compositionstart', function () { this.dataset.composing = '1'; forget(); });
      input.addEventListener('compositionend', clearComposing);
      input.addEventListener('focus', function () { clearComposing(); forget(); });
      input.addEventListener('blur', function () { clearComposing(); commit(); });
      // A click or an arrow key means the caret may have moved; the guess is
      // only safe while the user is still typing at the end of what we left.
      input.addEventListener('click', forget);
      input.addEventListener('keydown', function (e) {
        if (e && /^(Arrow|Home|End|Page)/.test(e.key || '')) forget();
      });

      input.addEventListener('input', function (e) {
        if (e && e.isComposing === false) clearComposing();
        if (enabled() && !(e && e.isComposing) && !this.dataset.composing) {
          undoGuess(this);
          var caret = this.selectionStart;
          if (caret == null) caret = this.value.length;
          var head = this.value.slice(0, caret);
          var tail = this.value.slice(caret);
          var converted = convert(head, false);
          if (converted !== head) {
            this.value = converted + tail;
            try { this.setSelectionRange(converted.length, converted.length); } catch (e2) {}
          }
          armN();
        } else {
          forget();
        }
        if (opts.onInput) opts.onInput.call(this, e);
      });

      return {
        // Force the pending syllable through — for Enter / Check / Send, where
        // the caret rule does not apply because the learner is done.
        flush: function () {
          if (timer) { clearTimeout(timer); timer = null; }
          guessed = null;
          if (!enabled()) return;
          var done = convert(input.value, true);
          if (done !== input.value) input.value = done;
        },
        commit: commit,
        cancel: function () { if (timer) { clearTimeout(timer); timer = null; } guessed = null; }
      };
    }

    // Katakana. Loanwords are written in it — バナナ, コーヒー, ジュース — and
    // 94 cards in the vocabulary deck have a katakana answer, so a converter
    // that only ever produces hiragana cannot type them.
    var KATAKANA_SHIFT = 0x60;
    function toKatakana(str) {
      return String(str).replace(/[\u3041-\u3096]/g, function (c) {
        return String.fromCharCode(c.charCodeAt(0) + KATAKANA_SHIFT);
      });
    }

    // Convert in one of three modes. Katakana converts only the TRAILING run of
    // Latin letters rather than the whole head, because converting everything
    // would rewrite kana already sitting in the box — りんご + juusu came out
    // リンゴジュウス instead of りんごジュース.
    // In katakana a repeated vowel is written with ー, not with the vowel kana:
    // ジュース, not ジュウス. Every kana's vowel, so the rule can be applied.
    var KANA_VOWEL = (function () {
      var map = {};
      // The small kana matter: ティ ends in ィ, so パーティー needs ィ to count
      // as an i-vowel or "paatii" comes out パーティイ.
      var rows = { a: 'アカサタナハマヤラワガザダバパャヮァ', i: 'イキシチニヒミリギジヂビピィ',
                   u: 'ウクスツヌフムユルグズヅブプュヴッゥ', e: 'エケセテネヘメレゲゼデベペェ',
                   o: 'オコソトノホモヨロヲゴゾドボポョォ' };
      Object.keys(rows).forEach(function (v) {
        rows[v].split('').forEach(function (c) { map[c] = v; });
      });
      return map;
    })();

    // `before` is the character already sitting in the box just ahead of this
    // fragment. Without it, typing j-u-u-s-u one key at a time converts the
    // second う on its own, with no preceding kana to be long against, and you
    // get ジュウス — which is how this read before the context was passed in.
    function katakanaLongVowels(str, before) {
      var out = '';
      for (var i = 0; i < str.length; i++) {
        var c = str[i];
        var prev = out.slice(-1) || before || '';
        // ウ after a う- or お-row kana, and any vowel kana after its own row,
        // is a long vowel. ー never starts a word.
        if (prev && KANA_VOWEL[prev]) {
          var v = KANA_VOWEL[prev];
          if ((c === 'ア' && v === 'a') || (c === 'イ' && v === 'i') ||
              (c === 'ウ' && (v === 'u' || v === 'o')) ||
              (c === 'エ' && v === 'e') || (c === 'オ' && v === 'o')) {
            out += 'ー'; continue;
          }
        }
        out += c;
      }
      return out;
    }

    function convertKana(text, final, mode) {
      if (mode === 'off') return text;
      if (mode !== 'katakana') return romajiToKana(text, final);
      var m = /[A-Za-z'\-]+$/.exec(text);
      if (!m) return text;
      var head = text.slice(0, m.index);
      return head + katakanaLongVowels(toKatakana(romajiToKana(m[0], final)), head.slice(-1));
    }

    window.KA_KanaInput = {
      attach: attachKanaInput,
      delay: KANA_N_DELAY,
      toKatakana: toKatakana,
      convert: convertKana
    };

    // ========================================================================
    // SHARED MEMORY
    // ------------------------------------------------------------------------
    // One store for everything the site knows about what you can and can't do.
    // Before this there were two — the Conjugator's and the Dojo's — and three
    // pages with none at all, so missing a word in Vocabulary taught the site
    // nothing and the Kanji page never heard about it.
    //
    // An entry is a THING plus a SKILL, because recognising 海 and producing
    // うみ are different abilities:
    //
    //   vocab:海|reading     conj:行く|negative     dojo:counter_匹_8
    //
    // Two clocks, deliberately. Vocabulary and kanji are memorisation, which is
    // what spaced repetition is for, so their intervals are measured in real
    // days: get a card right and it moves out 1 → 3 → 7 → 16 → 35. The Dojo and
    // the Conjugator drill rules you either apply or don't, where "come back in
    // a few questions" is the useful horizon and a backlog across days would be
    // meaningless. The clock is chosen by prefix, not by the caller.
    // ========================================================================
    var KA_Memory = (function () {
      var KEY = 'ka_memory_v1';
      var MIGRATED = 'ka_memory_migrated';
      var DAY = 86400000;
      // Streak → how many days until it is due again. Past the end, it stays
      // at the last interval rather than disappearing for a year.
      var INTERVALS = [1, 3, 7, 16, 35];
      var SESSION_GAP = [2, 4, 7];       // same idea, measured in questions
      var WEAK_AFTER = 1;                // one miss is enough to be weak
      var KNOWN_STREAK = 4;

      var store = {};
      var asked = 0;                     // questions this session, for the session clock
      var loaded = false;

      function today() { return Math.floor(Date.now() / DAY); }
      function clockFor(id) {
        return /^(vocab|kanji):/.test(id) ? 'days' : 'session';
      }

      function load() {
        if (loaded) return;
        loaded = true;
        try {
          var raw = localStorage.getItem(KEY);
          if (raw) store = JSON.parse(raw) || {};
        } catch (e) { store = {}; }
        migrate();
      }

      function save() {
        try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) {}
      }

      // ---- one-time import of the two stores that came before -------------
      function migrate() {
        try { if (localStorage.getItem(MIGRATED)) return; } catch (e) { return; }
        var moved = 0;
        // The Conjugator: "行く|negative" -> {misses, hits, ...}
        try {
          var w = JSON.parse(localStorage.getItem('katsuyo-weakspots') || '{}');
          Object.keys(w).forEach(function (k) {
            var e = w[k] || {};
            var id = 'conj:' + k;
            if (store[id]) return;
            store[id] = { s: (e.misses || 0) + (e.hits || 0), m: e.misses || 0,
                          k: e.hits || 0, d: 0, t: 0 };
            moved++;
          });
        } catch (e) {}
        // The Dojo: uniqueKey -> {misses, streak, due, q}
        try {
          var d = JSON.parse(localStorage.getItem('ka_dojo_weak') || '{}');
          Object.keys(d).forEach(function (k) {
            var e = d[k] || {};
            var id = 'dojo:' + k;
            if (store[id]) return;
            store[id] = { s: (e.misses || 0) + (e.streak || 0), m: e.misses || 0,
                          k: e.streak || 0, d: 0, t: 0 };
            moved++;
          });
        } catch (e) {}
        try { localStorage.setItem(MIGRATED, String(Date.now())); } catch (e) {}
        if (moved) save();
      }

      function get(id) { load(); return store[id] || null; }

      function state(id) {
        var e = get(id);
        if (!e || !e.s) return 'new';
        if (e.k >= KNOWN_STREAK) return 'known';
        if (e.m >= WEAK_AFTER && e.k < 2) return 'weak';
        return 'learning';
      }

      function isDue(id) {
        var e = get(id);
        if (!e || !e.s) return false;               // never seen is not "due"
        if (state(id) === 'known') return false;
        return clockFor(id) === 'days' ? e.d <= today() : e.d <= asked;
      }

      // Record an answer. Correct extends the interval, wrong resets it.
      function record(id, correct) {
        load();
        var e = store[id] || { s: 0, m: 0, k: 0, d: 0, t: 0 };
        e.s += 1;
        if (correct) {
          e.k += 1;
        } else {
          e.m += 1;
          e.k = 0;
        }
        var step = Math.min(e.k, INTERVALS.length) - 1;
        if (clockFor(id) === 'days') {
          e.d = today() + (correct ? INTERVALS[Math.max(step, 0)] : 1);
        } else {
          var gap = SESSION_GAP[Math.min(Math.max(e.k - 1, 0), SESSION_GAP.length - 1)];
          e.d = asked + (correct ? gap : 2);
        }
        e.t = Date.now();
        store[id] = e;
        save();
        return state(id);
      }

      function forget(id) { load(); delete store[id]; save(); }

      // Counts across one family of entries, for the scope row.
      function counts(prefix) {
        load();
        var out = { new: 0, learning: 0, weak: 0, known: 0, due: 0 };
        Object.keys(store).forEach(function (id) {
          if (id.indexOf(prefix) !== 0) return;
          out[state(id)] += 1;
          if (isDue(id)) out.due += 1;
        });
        return out;
      }

      function dueIds(prefix) {
        load();
        return Object.keys(store).filter(function (id) {
          return id.indexOf(prefix) === 0 && isDue(id);
        });
      }

      function tick() { asked += 1; }
      function askedCount() { return asked; }

      // Exposed for tests and for the eventual progress page.
      function all() { load(); return store; }

      return { get: get, state: state, isDue: isDue, record: record, forget: forget,
               counts: counts, dueIds: dueIds, tick: tick, asked: askedCount,
               all: all, clockFor: clockFor, KNOWN_STREAK: KNOWN_STREAK };
    })();

    window.KA_Memory = KA_Memory;

    // ========================================================================
    // JAPANESE SPEECH
    // ------------------------------------------------------------------------
    // Uses the browser's own speech synthesis — no server, no API key, no
    // per-character cost, and nothing leaves the machine. The catch is that it
    // needs a Japanese voice installed: macOS and iOS have Kyoko, Windows has
    // Haruka/Nanami, Android has Google 日本語. Where there's no ja voice we say
    // so rather than reading Japanese aloud in an English one, which is
    // unlistenable and teaches the wrong pronunciation.
    // ========================================================================

    var KA_Speech = (function () {
      var synth = window.speechSynthesis;
      var jaVoice = null;
      var ready = false;
      var listeners = [];

      function pickVoice() {
        if (!synth) return null;
        var voices = synth.getVoices() || [];
        var ja = voices.filter(function (v) { return /^ja(-|_|$)/i.test(v.lang || ''); });
        if (!ja.length) return null;
        // Prefer a local voice — network voices stall on a bad connection.
        var local = ja.filter(function (v) { return v.localService; });
        return (local[0] || ja[0]);
      }

      function refresh() {
        jaVoice = pickVoice();
        ready = true;
        listeners.splice(0).forEach(function (fn) { try { fn(); } catch (e) {} });
      }

      if (synth) {
        refresh();
        // Chrome populates the list asynchronously, so the first call is empty.
        if (typeof synth.addEventListener === 'function') {
          synth.addEventListener('voiceschanged', refresh);
        } else {
          synth.onvoiceschanged = refresh;
        }
      }

      // Chrome cuts an utterance off after roughly 15 seconds, so anything
      // long is split on sentence boundaries and queued piece by piece.
      function chunk(text) {
        var parts = String(text).split(/(?<=[。．！？!?\n])/);
        var out = [], buf = '';
        parts.forEach(function (p) {
          if ((buf + p).length > 120) { if (buf) out.push(buf); buf = p; }
          else buf += p;
        });
        if (buf.trim()) out.push(buf);
        return out.length ? out : [String(text)];
      }

      return {
        supported: function () { return !!synth; },
        available: function () { return !!synth && !!jaVoice; },
        voiceName: function () { return jaVoice ? jaVoice.name : null; },
        // Voices may not have loaded yet when a page first paints.
        onReady: function (fn) { ready ? fn() : listeners.push(fn); },

        speak: function (text, opts) {
          if (!synth || !jaVoice || !text) return false;
          opts = opts || {};
          synth.cancel();
          chunk(text).forEach(function (piece, i) {
            var u = new SpeechSynthesisUtterance(piece);
            u.voice = jaVoice;
            u.lang = jaVoice.lang || 'ja-JP';
            u.rate = opts.rate || 0.9;   // a touch under natural, for learners
            u.pitch = opts.pitch || 1;
            if (i === 0 && opts.onstart) u.onstart = opts.onstart;
            if (opts.onend) u.onend = function () {
              // only when the whole queue has drained
              if (!synth.pending && !synth.speaking) opts.onend();
            };
            synth.speak(u);
          });
          return true;
        },

        stop: function () { if (synth) synth.cancel(); },
        speaking: function () { return !!synth && (synth.speaking || synth.pending); }
      };
    })();

    // ------------------------------------------------------------------------
    // Azure Neural voices, with the browser voice underneath.
    // The Azure key lives on the server; this only ever talks to our own
    // /api/tts. If that is unreachable, misconfigured, rate-limited or simply
    // slow, the free browser voice takes over — audio never just stops.
    // ------------------------------------------------------------------------
    var KA_Azure = (function () {
      // Resolved lazily, NOT at load time: app.js is loaded before ai.js, where
      // VERCEL_BACKEND_URL is defined. Reading it here at parse time gives
      // undefined, and the relative '/api/tts' that falls out of that points at
      // the website rather than the backend — a 404 that looks exactly like
      // "Azure is down" and silently drops everyone to the browser voice.
      function endpoint() {
        var base = (typeof VERCEL_BACKEND_URL === 'string' && VERCEL_BACKEND_URL) ? VERCEL_BACKEND_URL : '';
        return base ? base.replace(/\/api\/claude$/, '/api/tts') : '/api/tts';
      }

      var VOICE_KEY = 'katsuyo-ja-voice';
      var audio = null;
      var voices = null;          // null = not asked yet, [] = none available
      var defaultVoice = 'ja-JP-NanamiNeural';
      var disabled = false;       // set once the backend says it isn't configured
      var cache = {};             // text|voice -> object URL, per page load

      function savedVoice() {
        try { return localStorage.getItem(VOICE_KEY) || ''; } catch (e) { return ''; }
      }
      function setVoice(name) {
        try { localStorage.setItem(VOICE_KEY, name || ''); } catch (e) {}
        cache = {};   // a new voice means new audio
      }
      function currentVoice() { return savedVoice() || defaultVoice; }

      function listVoices() {
        if (voices) return Promise.resolve(voices);
        if (disabled) return Promise.resolve([]);
        return fetch(endpoint() + '?voices=1')
          .then(function (r) {
            if (r.status === 503) { disabled = true; return { voices: [] }; }
            if (!r.ok) throw new Error('HTTP ' + r.status);
            return r.json();
          })
          .then(function (data) {
            voices = (data && data.voices) || [];
            if (data && data.default) defaultVoice = data.default;
            return voices;
          })
          .catch(function () { voices = []; return voices; });
      }

      function stop() {
        if (audio) { audio.pause(); audio.currentTime = 0; audio = null; }
      }

      // Resolves true when Azure played it, false to mean "you take it".
      function speak(text, opts) {
        opts = opts || {};
        if (disabled || !text) return Promise.resolve(false);

        var voice = currentVoice();
        var style = (typeof opts.style === 'string') ? opts.style : '';
        // Style changes the audio, so it has to be part of the cache key.
        var key = voice + '|' + style + '|' + text;
        stop();

        function play(url) {
          return new Promise(function (resolve) {
            audio = new Audio(url);
            audio.onplay = function () { if (opts.onstart) opts.onstart(); };
            audio.onended = function () { audio = null; if (opts.onend) opts.onend(); resolve(true); };
            audio.onerror = function () { audio = null; if (opts.onend) opts.onend(); resolve(false); };
            audio.play().catch(function () {
              // Autoplay blocked, usually because no gesture has happened yet.
              audio = null; if (opts.onend) opts.onend(); resolve(false);
            });
          });
        }

        if (cache[key]) return play(cache[key]);

        return fetch(endpoint(), {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: text, voice: voice, style: style })
        })
          .then(function (r) {
            if (r.status === 503) { disabled = true; return null; }
            if (!r.ok) return null;          // 429 included — fall back quietly
            return r.blob();
          })
          .then(function (blob) {
            if (!blob) return false;
            var url = URL.createObjectURL(blob);
            cache[key] = url;
            return play(url);
          })
          .catch(function () { return false; });
      }

      return {
        endpoint: endpoint,
        listVoices: listVoices,
        currentVoice: currentVoice,
        setVoice: setVoice,
        speak: speak,
        stop: stop,
        offline: function () { return disabled; },
        // Usable only once we've actually seen voices come back. Before that,
        // and after any failure, we can't promise audio — which matters when
        // there's no browser voice to fall back to, because then offering a
        // Listen button would offer a button that does nothing.
        usable: function () { return !disabled && !!voices && voices.length > 0; }
      };
    })();

    window.KA_Azure = KA_Azure;

    // One call site for the whole site: try the good voice, fall back to the
    // free one. Callers never need to know which they got.
    window.KA_Voice = {
      speak: function (text, opts) {
        opts = opts || {};
        KA_Speech.stop();
        return KA_Azure.speak(text, opts).then(function (played) {
          if (played) return 'azure';
          var ok = KA_Speech.speak(text, opts);
          return ok ? 'browser' : 'none';
        });
      },
      stop: function () { KA_Azure.stop(); KA_Speech.stop(); },
      // Something can actually speak if either path is proven open.
      available: function () { return KA_Azure.usable() || KA_Speech.available(); }
    };

    window.KA_Speech = KA_Speech;

    // ---------- shared "Listen" button ----------
    // One implementation for the flashcards, so a card anywhere on the site
    // speaks the same way and disappears the same way when nothing can speak.
    (function () {
      // 日[ひ]にち → ひにち. The kanji vocabulary carries its readings in
      // brackets, and a voice must be given the reading, never the bracket.
      var READING_RE = /([々〆一-龯豈-﫿]+)\[([^\]]+)\]/g;
      function toReading(s) { return String(s || '').replace(READING_RE, '$2'); }

      var playing = null;

      function stop() {
        if (window.KA_Voice) window.KA_Voice.stop();
        if (playing) { playing.classList.remove('playing'); playing = null; }
      }

      function speak(text, btn) {
        var say = toReading(text).trim();
        if (!say || !window.KA_Voice) return;
        // A second click stops it rather than queueing another clip.
        var wasSame = playing === btn;
        stop();
        if (wasSame) return;
        playing = btn || null;
        if (btn) btn.classList.add('playing');
        window.KA_Voice.speak(say).then(function (how) {
          if (how === 'none' && btn) { btn.classList.remove('playing'); playing = null; }
        }).catch(function () {
          if (btn) { btn.classList.remove('playing'); playing = null; }
        });
      }

      // ---------- the Audio popover ----------
      // Voice, preview, and room for more later. Hidden until the ▾ beside
      // Listen is pressed, because which voice reads your flashcards is a
      // once-a-month decision sitting next to a button you press all session.
      function wirePanel(ids) {
        var caret  = document.getElementById(ids.caret);
        var panel  = document.getElementById(ids.panel);
        var select = document.getElementById(ids.select);
        var prev   = document.getElementById(ids.preview);
        if (!caret || !panel) return;

        function setOpen(open) {
          panel.classList.toggle('open', open);
          panel.setAttribute('aria-hidden', open ? 'false' : 'true');
          caret.setAttribute('aria-expanded', open ? 'true' : 'false');
        }
        setOpen(false);

        caret.addEventListener('click', function (e) {
          e.stopPropagation();
          setOpen(!panel.classList.contains('open'));
        });
        // Clicking away closes it; clicking inside it does not.
        panel.addEventListener('click', function (e) { e.stopPropagation(); });
        document.addEventListener('click', function () { setOpen(false); });
        document.addEventListener('keydown', function (e) {
          if (e.key === 'Escape') setOpen(false);
        });

        if (prev && ids.preview) {
          prev.addEventListener('click', function (e) {
            e.stopPropagation();
            // Neutral line on purpose: this is about comparing voices.
            speak((typeof t === 'function' ? t('voice_sample') : '') ||
                  'こんにちは。今日はいい天気ですね。', prev);
          });
        }

        // A caller that fills its own picker (Talk does, to keep two selects in
        // step) passes no select id — then this is open/close only.
        if (!ids.select) return;
        // Only Azure exposes a choice of voices. With just a browser voice
        // there is nothing to pick, so the caret would open an empty box.
        if (!select || !window.KA_Azure) { caret.style.display = 'none'; return; }
        window.KA_Azure.listVoices().then(function (list) {
          if (!list || !list.length) { caret.style.display = 'none'; return; }
          caret.style.display = '';
          select.innerHTML = '';
          list.forEach(function (v) {
            var o = document.createElement('option');
            o.value = v.name;
            var g = v.gender ? (typeof t === 'function' ? t('voice_' + v.gender.toLowerCase()) : v.gender) : '';
            o.textContent = v.display + (g && g.indexOf('voice_') !== 0 ? ' — ' + g : '');
            select.appendChild(o);
          });
          select.value = window.KA_Azure.currentVoice() || list[0].name;
          // The same setting Talk writes, so a voice chosen anywhere is the
          // voice everywhere.
          select.onchange = function () { window.KA_Azure.setVoice(this.value); };
        }).catch(function () { caret.style.display = 'none'; });
      }

      window.KA_Listen = {
        available: function () { return !!(window.KA_Voice && window.KA_Voice.available()); },
        reading: toReading,
        speak: speak,
        stop: stop,
        wirePanel: wirePanel,
        // getText is read at click time, so the button keeps working as the
        // card behind it changes.
        attach: function (btn, getText) {
          if (!btn) return;
          btn.addEventListener('click', function (e) {
            e.stopPropagation();   // never flip the card
            e.preventDefault();
            speak(typeof getText === 'function' ? getText() : getText, btn);
          });
        },
        // Hidden entirely when nothing can speak — a Listen button that does
        // nothing is worse than no button.
        paint: function (el) {
          if (el) el.style.display = window.KA_Listen.available() ? '' : 'none';
        }
      };
    })();

    // t() returns the key itself when a translation is missing. ct() falls
    // back to readable English instead, so a missing key never ships as
    // "romaji_title" on the page.
    function ct(key, fallback) {
      var v = (typeof t === 'function') ? t(key) : key;
      return (v === key && fallback) ? fallback : v;
    }
    window.KA_ct = ct;

    function isRomaji(text) {
      // Check if text is primarily Latin alphabet (romaji)
      // Returns true if the text contains mostly Latin characters
      if (!text || text.length === 0) return false;
      
      // Check if it contains any hiragana, katakana, or kanji
      const hasJapanese = /[\u3040-\u309f\u30a0-\u30ff\u4e00-\u9faf]/.test(text);
      
      // Check if it contains Latin alphabet
      const hasLatin = /[a-zA-Z]/.test(text);
      
      // If it has Latin but no Japanese, it's romaji
      return hasLatin && !hasJapanese;
    }

    function analyzeMistakes() {
      const totalAttempts = parseInt(document.getElementById('score-total').textContent);
      const mistakeCount = mistakeLog.length;
      const accuracyRate = totalAttempts > 0 ? ((totalAttempts - mistakeCount) / totalAttempts * 100).toFixed(1) : 0;

      // Analyze by verb type
      const verbTypeErrors = {};
      mistakeLog.forEach(mistake => {
        verbTypeErrors[mistake.verbType] = (verbTypeErrors[mistake.verbType] || 0) + 1;
      });

      // Analyze by form
      const formErrors = {};
      mistakeLog.forEach(mistake => {
        formErrors[mistake.form] = (formErrors[mistake.form] || 0) + 1;
      });

      // Find most problematic verbs
      const verbErrors = {};
      mistakeLog.forEach(mistake => {
        const key = mistake.verbKanji;
        verbErrors[key] = verbErrors[key] || { count: 0, verb: mistake };
        verbErrors[key].count++;
      });

      const topProblematicVerbs = Object.values(verbErrors)
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);

      return {
        totalAttempts,
        mistakeCount,
        accuracyRate,
        verbTypeErrors,
        formErrors,
        topProblematicVerbs
      };
    }

    function generateAdvice(analysis) {
      const advice = [];

      // ========== ACCURACY-BASED FEEDBACK ==========
      if (analysis.totalAttempts >= 5) {
        if (analysis.accuracyRate < 40) {
          advice.push({
            title: "🌱 Take It Slow — You're Just Getting Started",
            text: "Your accuracy suggests you're still learning the basics, and that's completely okay! Here's what to do: (1) Switch to 'Random (Basic)' mode to focus only on negative, ます, past, and て forms. (2) Before answering, use the hint button to see the rule. (3) Don't rush — take time to understand each pattern before moving on. Consider reviewing the 'Learn' section to build a stronger foundation.",
            priority: 1
          });
        } else if (analysis.accuracyRate < 60) {
          advice.push({
            title: "📚 Building Your Foundation",
            text: "You're making progress! To improve further: (1) Focus on one form at a time using the dropdown instead of random mode. (2) When you get something wrong, really study the explanation before moving on. (3) Practice in shorter, more frequent sessions — 10 minutes daily beats one long session weekly. You're on the right track!",
            priority: 2
          });
        } else if (analysis.accuracyRate < 80) {
          advice.push({
            title: "📈 Good Progress — Keep Pushing",
            text: "You're developing solid skills! To reach the next level: (1) Try 'Random (Intermediate)' mode to add more variety. (2) Challenge yourself by trying to answer before looking at hints. (3) Pay attention to the patterns in your mistakes below — there may be specific rules you need to review.",
            priority: 3
          });
        } else if (analysis.accuracyRate < 95) {
          advice.push({
            title: "⭐ Strong Performance!",
            text: "You're doing really well! To achieve mastery: (1) Try 'Random (Advanced)' mode for passive, causative, and conditionals. (2) Work on speed — can you answer correctly without hesitation? (3) Look at your remaining mistakes below to eliminate any lingering weak spots.",
            priority: 4
          });
        } else {
          advice.push({
            title: "🏆 Excellent Mastery!",
            text: "Outstanding work! You've achieved near-perfect accuracy. Consider: (1) Trying harder JLPT levels if you haven't already. (2) Practicing without hints to build automatic recall. (3) Moving on to reading practice where you'll see these forms in context.",
            priority: 5
          });
        }
      }

      // ========== VERB TYPE ADVICE ==========
      const totalTypeErrors = Object.values(analysis.verbTypeErrors).reduce((a, b) => a + b, 0);
      
      if (analysis.verbTypeErrors.godan > (totalTypeErrors * 0.5) && totalTypeErrors >= 3) {
        advice.push({
          title: "🔴 Focus Area: Godan Verbs",
          text: "Most of your mistakes are with Godan (五段) verbs. The key concept: Godan verbs change their final sound based on a vowel row pattern. For example, 書く uses different stems: 書か (あ-row for negative), 書き (い-row for ます), 書け (え-row for potential). Try this: pick ONE Godan verb like 書く and conjugate it into every form until the pattern clicks.",
          priority: 6
        });
      }

      if (analysis.verbTypeErrors.ichidan > (totalTypeErrors * 0.5) && totalTypeErrors >= 3) {
        advice.push({
          title: "🟢 Focus Area: Ichidan Verbs",
          text: "You're struggling with Ichidan (一段) verbs, but these are actually the easiest! The rule is simple: drop る, add the ending. That's it — no stem changes. For 食べる: 食べ + ない = 食べない, 食べ + ます = 食べます. If you're making mistakes, you might be: (1) Forgetting to drop the る, or (2) Confusing Ichidan with Godan verbs that end in る (like 帰る).",
          priority: 6
        });
      }

      if (analysis.verbTypeErrors.suru > (totalTypeErrors * 0.5) && totalTypeErrors >= 3) {
        advice.push({
          title: "🔵 Focus Area: Suru Verbs",
          text: "する verbs are giving you trouble. Remember: the noun part (勉強, 運動, etc.) NEVER changes — only する conjugates. Memorize the する patterns: しない, します, した, して, etc. One exception: potential form uses できる, not せる. Practice with 勉強する through all forms to build the pattern.",
          priority: 6
        });
      }

      // ========== FORM-SPECIFIC ADVICE (all 16 forms) ==========
      const formAdvice = {
        'negative': {
          title: "Negative Form (ない) — Review Needed",
          text: "Negative form rules: Godan → change to あ-row + ない (書く→書かない). Ichidan → drop る + ない (食べる→食べない). する→しない. The most common mistake is using the wrong vowel row for Godan verbs. Remember: あ-row means あ, か, さ, た, な, は, ま, ら, わ.",
          forms: ['negative']
        },
        'masu': {
          title: "ます Form (Polite) — Review Needed",
          text: "ます form: Godan → change to い-row (ます-stem) + ます (書く→書きます). Ichidan → drop る + ます (食べる→食べます). する→します. The ます-stem (い-row) is also used for ません, ました, たい, ながら, and compound verbs — mastering this stem unlocks many forms!",
          forms: ['masu', 'masen', 'mashita', 'tai']
        },
        'past': {
          title: "Past Form (た) — Review Needed",
          text: "Past form has special sound changes for Godan verbs that must be memorized: く→いた, ぐ→いだ, す→した, つ/る/う→った, む/ぶ/ぬ→んだ. Ichidan is simple: drop る + た (食べた). Group these by pattern: the 'った' group (つ/る/う), the 'んだ' group (む/ぶ/ぬ).",
          forms: ['past']
        },
        'te': {
          title: "Te-form (て) — Review Needed",
          text: "Te-form uses the SAME sound changes as past tense, but with て/で instead of た/だ. If you know past form, you know te-form! く→いて, ぐ→いで, す→して, つ/る/う→って, む/ぶ/ぬ→んで. Practice them together to reinforce the pattern.",
          forms: ['te']
        },
        'tai': {
          title: "Want Form (たい) — Review Needed",
          text: "The たい form uses the ます-stem! Godan → い-row + たい (書く→書きたい). Ichidan → drop る + たい (食べる→食べたい). する→したい. If you can make the ます form, just swap ます for たい.",
          forms: ['tai']
        },
        'potential': {
          title: "Potential Form — Review Needed",
          text: "Potential ('can do'): Godan → change to え-row + る (書く→書ける). Ichidan → drop る + られる (食べる→食べられる). する→できる (special!). Common mistake: confusing え-row (potential) with お-row (volitional). Remember: 'E for Enabled/Can do'.",
          forms: ['potential']
        },
        'volitional': {
          title: "Volitional Form — Review Needed",
          text: "Volitional ('let's do'): Godan → change to お-row + う (書く→書こう). Ichidan → drop る + よう (食べる→食べよう). する→しよう. Remember: お-row PLUS う for Godan. This form expresses intention or suggestion.",
          forms: ['volitional']
        },
        'masen': {
          title: "Polite Negative (ません) — Review Needed",
          text: "ません uses the ます-stem (い-row). Godan: 書く→書きません. Ichidan: 食べる→食べません. する→しません. Same stem as ます, ました, and たい!",
          forms: ['masen']
        },
        'mashita': {
          title: "Polite Past (ました) — Review Needed",
          text: "ました uses the ます-stem (い-row). Godan: 書く→書きました. Ichidan: 食べる→食べました. する→しました. Same stem as ます, ません, and たい!",
          forms: ['mashita']
        },
        'nakatta': {
          title: "Negative Past (なかった) — Review Needed",
          text: "なかった is the past tense of ない. Use the same stem as negative form (あ-row for Godan), then add なかった. 書く→書かなかった. 食べる→食べなかった. Think: 'negative stem + past of ない'.",
          forms: ['nakatta']
        },
        'ba': {
          title: "Conditional ば Form — Review Needed",
          text: "The ば conditional ('if'): Godan → change to え-row + ば (書く→書けば). Ichidan → drop る + れば (食べる→食べれば). する→すれば. Same え-row as potential for Godan verbs!",
          forms: ['ba']
        },
        'tara': {
          title: "Conditional たら Form — Review Needed",
          text: "The たら conditional: take the past form and add ら. 書いた→書いたら, 食べた→食べたら, した→したら. If you know past form, this is easy — just add ら!",
          forms: ['tara']
        },
        'passive': {
          title: "Passive Form — Review Needed",
          text: "Passive ('be done to'): Godan → change to あ-row + れる (書く→書かれる). Ichidan → drop る + られる (食べる→食べられる). する→される. Same あ-row as negative, but with れる instead of ない.",
          forms: ['passive']
        },
        'causative': {
          title: "Causative Form — Review Needed",
          text: "Causative ('make/let do'): Godan → change to あ-row + せる (書く→書かせる). Ichidan → drop る + させる (食べる→食べさせる). する→させる. Same あ-row as passive, but with せる.",
          forms: ['causative']
        },
        'causative-passive': {
          title: "Causative-Passive Form — Review Needed",
          text: "Causative-passive ('be made to do'): combines both forms. Godan → あ-row + せられる (書く→書かせられる). Ichidan → drop る + させられる. する→させられる. This is the longest form — take it step by step.",
          forms: ['causative-passive']
        },
        'imperative': {
          title: "Imperative Form — Review Needed",
          text: "Imperative (command): Godan → change to え-row only, no ending (書く→書け). Ichidan → drop る + ろ (食べる→食べろ). する→しろ. This is the shortest form — just the え-row for Godan!",
          forms: ['imperative']
        },
        'type-identification': {
          title: "Verb Type Identification — Review Needed",
          text: "Identifying verb types is crucial! Godan: ends in う-row sound (く, す, む, etc.) — EXCEPT る verbs need checking. Ichidan: ends in る preceded by い or え sound (食べる, 見る). Suru: noun + する. Tricky ones: 帰る, 走る, 切る look like Ichidan but are Godan! When unsure, check if the vowel before る is い or え.",
          forms: ['type-identification']
        }
      };

      // Find most problematic forms and add specific advice
      const sortedForms = Object.entries(analysis.formErrors).sort((a, b) => b[1] - a[1]);
      const addedFormAdvice = new Set();
      
      sortedForms.slice(0, 3).forEach(([form, count]) => {
        if (count >= 2 && formAdvice[form] && !addedFormAdvice.has(form)) {
          advice.push({
            title: formAdvice[form].title,
            text: formAdvice[form].text,
            priority: 7
          });
          addedFormAdvice.add(form);
        }
      });

      // ========== DETECT COMMON ERROR PATTERNS ==========
      // Check if user consistently uses wrong vowel row
      let wrongRowCount = 0;
      mistakeLog.forEach(m => {
        if (m.verbType === 'godan' && m.userAnswer) {
          // Simple heuristic: check if they're using い-row when they should use あ-row, etc.
          const shouldUseA = ['negative', 'nakatta', 'passive', 'causative', 'causative-passive'].includes(m.form);
          const shouldUseI = ['masu', 'masen', 'mashita', 'tai'].includes(m.form);
          const shouldUseE = ['potential', 'ba', 'imperative'].includes(m.form);
          // This is a simplified check
          if (shouldUseA || shouldUseI || shouldUseE) wrongRowCount++;
        }
      });

      if (wrongRowCount >= 5) {
        advice.push({
          title: "📊 Pattern Detected: Vowel Row Confusion",
          text: "You may be mixing up which vowel row to use for Godan verbs. Here's a quick reference: あ-row (negative, passive, causative), い-row/ます-stem (ます, ません, ました, たい, ながら), え-row (potential, ば conditional, imperative), お-row (volitional). Try writing these groupings down and refer to them while practicing!",
          priority: 5
        });
      }

      // ========== SPECIFIC PROBLEMATIC VERB ADVICE ==========
      if (analysis.topProblematicVerbs.length > 0) {
        const topVerb = analysis.topProblematicVerbs[0];
        if (topVerb.count >= 3) {
          advice.push({
            title: `🎯 Focus Verb: ${topVerb.verb.verbKanji}`,
            text: `You've made ${topVerb.count} mistakes with ${topVerb.verb.verbKanji} (${topVerb.verb.verbHiragana}). Try this: conjugate this specific verb through ALL forms in one practice session. Write them down: negative, ます, past, て, potential, volitional. Repetition with one verb builds the pattern faster than jumping between many verbs.`,
            priority: 8
          });
        }
      }

      // ========== CHECK FOR SKIPPING ==========
      const intentionalFailures = mistakeLog.filter(m => 
        isLikelyIntentionalFailure(m.userAnswer, m.correctAnswer)
      ).length;
      
      if (intentionalFailures >= 3) {
        advice.unshift({
          title: "⚠️ Try Using Hints Instead of Skipping",
          text: `We noticed ${intentionalFailures} questions where you may have given up quickly. That's okay — everyone gets stuck! But instead of submitting a random answer, try: (1) Click 'Show Hint' to see the exact rule, (2) Use the 'Skip' button to see the answer without penalty, (3) Make your best guess — even wrong attempts help you learn. Each real attempt builds neural pathways that skipping doesn't!`,
          priority: 0
        });
      }

      // Sort by priority
      advice.sort((a, b) => (a.priority || 99) - (b.priority || 99));

      return advice;
    }

// ============================================================================
// CONJU'S FULLY AI-POWERED PRACTICE REPORT
// ============================================================================
// This replaces the old showMistakeReport function with a fully AI-generated report

async function showMistakeReport() {
  const analysis = analyzeMistakes();
  
  // If no attempts, show welcome message
  if (analysis.totalAttempts === 0) {
    let html = '<div class="report-section" style="text-align: center; padding: 3rem 2rem;">';
    html += '<div style="font-size: 3rem; margin-bottom: 1rem;">📚</div>';
    html += '<h3 style="font-size: 1.5rem; margin-bottom: 1rem; color: var(--ink);">No Practice Data Yet</h3>';
    html += '<p style="color: var(--text-light); max-width: 400px; margin: 0 auto 1.5rem;">Start practicing to see your statistics, mistake patterns, and personalized advice from Conju!</p>';
    html += '<button onclick="closeMistakeReport(); generateNewQuestion();" style="background: var(--sage); color: white; border: none; padding: 0.75rem 1.5rem; font-size: 1rem; font-weight: 600; border-radius: 4px; cursor: pointer; font-family: inherit;">Start Practicing →</button>';
    html += '</div>';
    
    document.getElementById('report-body-content').innerHTML = html;
    document.getElementById('mistake-report-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
    return;
  }
  
  // Show loading state with stats
  showReportLoadingState(analysis);
  
  // Generate full AI report
  await generateFullConjuReport(analysis, mistakeLog);
}

// Show initial loading state with basic stats
function showReportLoadingState(analysis) {
  const accuracyColor = analysis.accuracyRate >= 80 ? '#4a7c59' : analysis.accuracyRate >= 60 ? '#c9a227' : '#b85c38';
  
  let html = '<div class="report-section">';
  html += '<h3 class="report-section-title">📈 Quick Stats</h3>';
  html += '<div class="mistake-stats">';
  html += `<div class="mistake-stat">
            <div class="mistake-stat-value">${analysis.totalAttempts}</div>
            <div class="mistake-stat-label">Total Attempts</div>
          </div>`;
  html += `<div class="mistake-stat">
            <div class="mistake-stat-value" style="color: ${analysis.mistakeCount > 0 ? 'var(--accent)' : 'var(--sage)'}">${analysis.mistakeCount}</div>
            <div class="mistake-stat-label">Mistakes Made</div>
          </div>`;
  html += `<div class="mistake-stat">
            <div class="mistake-stat-value">${analysis.totalAttempts - analysis.mistakeCount}</div>
            <div class="mistake-stat-label">Correct Answers</div>
          </div>`;
  if (stats.skipped > 0) {
    html += `<div class="mistake-stat">
              <div class="mistake-stat-value" style="color: #f9a825;">${stats.skipped}</div>
              <div class="mistake-stat-label">Skipped</div>
            </div>`;
  }
  html += '</div>';
  
  // Accuracy bar
  html += `<div style="margin-top: 1.5rem;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
              <span style="font-weight: 600; color: var(--ink);">Accuracy Rate</span>
              <span style="font-weight: 700; color: ${accuracyColor};">${analysis.accuracyRate}%</span>
            </div>
            <div style="background: #e0e0e0; border-radius: 10px; height: 12px; overflow: hidden;">
              <div style="background: ${accuracyColor}; height: 100%; width: ${analysis.accuracyRate}%; border-radius: 10px; transition: width 0.5s ease;"></div>
            </div>
            <div style="display: flex; justify-content: space-between; margin-top: 0.25rem; font-size: 0.75rem; color: var(--text-light);">
              <span>0%</span>
              <span>50%</span>
              <span>100%</span>
            </div>
          </div>`;
  html += '</div>';
  
  // Loading state
  html += '<div class="report-section" id="conju-generating">';
  html += '<div style="text-align: center; padding: 3rem 2rem; background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); border-radius: 12px; border: 2px dashed #3b82f6;">';
  html += '<div style="font-size: 3rem; margin-bottom: 1.5rem; animation: pulse 2s ease-in-out infinite;">📚</div>';
  html += '<h3 style="font-size: 1.5rem; margin-bottom: 1rem; color: #1e40af; font-weight: 700;">Conju is analyzing your session...</h3>';
  html += '<p style="color: #64748b; font-size: 1rem; margin-bottom: 1.5rem;">Generating personalized insights, tips, and study recommendations</p>';
  html += '<div class="loading-bar" style="width: 200px; height: 4px; background: #cbd5e1; border-radius: 2px; margin: 0 auto; overflow: hidden;">';
  html += '<div style="height: 100%; background: #3b82f6; width: 0%; animation: loading 3s ease-in-out infinite;"></div>';
  html += '</div>';
  html += '</div></div>';
  
  // Add animation styles
  html += '<style>@keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.1); } }';
  html += '@keyframes loading { 0% { width: 0%; } 50% { width: 70%; } 100% { width: 100%; } }</style>';
  
  document.getElementById('report-body-content').innerHTML = html;
  document.getElementById('mistake-report-modal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Generate comprehensive AI report
async function generateFullConjuReport(analysis, mistakeLog) {
  if (VERCEL_BACKEND_URL.includes('YOUR-VERCEL-URL-HERE')) {
    console.log('⚠️ Backend not configured, showing basic report');
    // Fall back to showing basic stats only
    return;
  }

  const formNames = {
    negative: 'Negative (ない)',
    masu: 'Polite (ます)',
    past: 'Past (た)',
    tai: 'Want (たい)',
    potential: 'Potential',
    volitional: 'Volitional',
    te: 'Te-form (て)',
    masen: 'Polite Neg (ません)',
    mashita: 'Polite Past (ました)',
    nakatta: 'Neg Past (なかった)',
    ba: 'Conditional (ば)',
    tara: 'Conditional (たら)',
    passive: 'Passive',
    causative: 'Causative',
    'causative-passive': 'Caus-Passive',
    imperative: 'Imperative',
    'type-identification': 'Verb Type ID'
  };

  // Build comprehensive data for Conju
  const formErrorsList = Object.entries(analysis.formErrors || {})
    .sort((a, b) => b[1] - a[1])
    .map(([form, count]) => `${formNames[form] || form}: ${count} mistakes`)
    .join(', ');

  const verbTypeErrorsList = Object.entries(analysis.verbTypeErrors || {})
    .map(([type, count]) => `${type} verbs: ${count} mistakes`)
    .join(', ');

  const recentMistakes = mistakeLog.slice(-10).reverse().map(m => 
    `${m.verbKanji} (${m.verbHiragana}) - ${m.verbMeaning}: tried "${m.userAnswer}" but correct is "${m.correctAnswer}" [${formNames[m.form] || m.form}]`
  ).join('\n');

  const topProblematicVerbs = analysis.topProblematicVerbs?.slice(0, 5).map(item =>
    `${item.verb.verbKanji} (${item.verb.verbHiragana}) - ${item.verb.verbMeaning}: ${item.count} mistakes`
  ).join('\n') || 'none';

  // Create comprehensive prompt for Conju
  const prompt = `You are Conju, a friendly and expert Japanese conjugation coach. Generate a COMPREHENSIVE, DETAILED practice report for a student.

**STUDENT'S SESSION DATA:**
- Total attempts: ${analysis.totalAttempts}
- Mistakes: ${analysis.mistakeCount}
- Correct: ${analysis.totalAttempts - analysis.mistakeCount}
- Accuracy: ${analysis.accuracyRate}%
- Skipped: ${stats.skipped || 0}

**MISTAKES BY FORM:**
${formErrorsList || 'none'}

**MISTAKES BY VERB TYPE:**
${verbTypeErrorsList || 'none'}

**TOP PROBLEMATIC VERBS:**
${topProblematicVerbs}

**RECENT MISTAKES (most recent first):**
${recentMistakes || 'none'}

---

**GENERATE A COMPLETE REPORT** with the following sections. Use Markdown for formatting (**, ##, bullets, etc.):

## 📚 Overall Assessment
[2-3 paragraphs analyzing their overall performance. Be specific about what they did well and where they struggled. Mention specific patterns you notice.]

## 🎯 Main Challenges
[Detailed analysis of their biggest struggles. For each challenge:
- Identify the specific issue (e.g., "Ichidan verb te-form sound changes")
- Explain WHY they're making this mistake
- Give 2-3 concrete examples from their actual mistakes
- Provide a clear explanation of the correct rule]

## 💡 Verb Type Insights
[If they made verb type mistakes, explain:
- Which verb types are causing problems
- Common patterns in their errors
- Specific tips for each problematic verb type
- Memory tricks or patterns to remember]

## 📝 Form-by-Form Analysis
[For each form they struggled with:
- Brief explanation of what this form is used for
- The conjugation pattern/rule
- Why students commonly make mistakes here
- Specific examples using verbs from their mistakes
- A memory trick or mnemonic]

## ⚠️ Verbs to Practice
[List 3-5 specific verbs they should focus on, with:
- The verb (kanji, hiragana, meaning)
- Why it's tricky
- Which forms to practice
- Examples of correct conjugations]

## 🚀 Your Personalized Study Plan
[Create a specific, actionable 4-5 step plan:
1. [First priority with specific action]
2. [Second priority with specific action]
3. [Third priority]
4. [Fourth priority]
5. [Optional: advanced tip]]

## 💪 Encouragement & Next Steps
[1-2 paragraphs of genuine encouragement. Acknowledge their effort, highlight any improvements or strengths, and motivate them to continue. End with concrete next steps.]

---

**IMPORTANT:**
- Be VERY specific - reference actual verbs and forms from their mistakes
- Don't just say "practice more" - give concrete, actionable advice
- Use examples from their actual practice session
- Be warm and encouraging but honest about areas needing work
- Use simple, clear explanations
- Include Japanese text where relevant (in hiragana/kanji)
- Make it feel personal, not generic`;

  console.log('🤖 Conju: Generating comprehensive report...');

  try {
    const response = await fetch(VERCEL_BACKEND_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        prompt: prompt + (window.KA_aiLangSuffix ? window.KA_aiLangSuffix() : ''),
        maxTokens: 3000  // Longer report needs more tokens
      })
    });

    if (!response.ok) {
      console.error('❌ Conju report generation failed:', response.status);
      showReportError();
      return;
    }

    const result = await response.json();

    if (result.success) {
      console.log('✅ Conju: Full report generated!');
      console.log('📊 Tokens used:', result.usage);
      displayFullConjuReport(analysis, result.feedback);
    } else {
      console.error('❌ Conju report error:', result.error);
      showReportError();
    }
  } catch (error) {
    console.error('❌ Conju report network error:', error);
    showReportError();
  }
}

// Display the full AI-generated report
function displayFullConjuReport(analysis, conjuReport) {
  const accuracyColor = analysis.accuracyRate >= 80 ? '#4a7c59' : analysis.accuracyRate >= 60 ? '#c9a227' : '#b85c38';
  
  let html = '';
  
  // Keep the quick stats at top
  html += '<div class="report-section">';
  html += '<h3 class="report-section-title">📈 Quick Stats</h3>';
  html += '<div class="mistake-stats">';
  html += `<div class="mistake-stat">
            <div class="mistake-stat-value">${analysis.totalAttempts}</div>
            <div class="mistake-stat-label">Total Attempts</div>
          </div>`;
  html += `<div class="mistake-stat">
            <div class="mistake-stat-value" style="color: ${analysis.mistakeCount > 0 ? 'var(--accent)' : 'var(--sage)'}">${analysis.mistakeCount}</div>
            <div class="mistake-stat-label">Mistakes Made</div>
          </div>`;
  html += `<div class="mistake-stat">
            <div class="mistake-stat-value">${analysis.totalAttempts - analysis.mistakeCount}</div>
            <div class="mistake-stat-label">Correct Answers</div>
          </div>`;
  if (stats.skipped > 0) {
    html += `<div class="mistake-stat">
              <div class="mistake-stat-value" style="color: #f9a825;">${stats.skipped}</div>
              <div class="mistake-stat-label">Skipped</div>
            </div>`;
  }
  html += '</div>';
  html += `<div style="margin-top: 1.5rem;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
              <span style="font-weight: 600; color: var(--ink);">Accuracy Rate</span>
              <span style="font-weight: 700; color: ${accuracyColor};">${analysis.accuracyRate}%</span>
            </div>
            <div style="background: #e0e0e0; border-radius: 10px; height: 12px; overflow: hidden;">
              <div style="background: ${accuracyColor}; height: 100%; width: ${analysis.accuracyRate}%; border-radius: 10px;"></div>
            </div>
          </div>`;
  html += '</div>';
  
  // Display full Conju report
  html += '<div class="report-section">';
  html += '<div style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); padding: 2rem; border-radius: 12px; border-left: 4px solid #3b82f6;">';
  
  // Convert markdown-style formatting to HTML
  let formattedReport = conjuReport
    .replace(/^## (.*$)/gim, '<h3 style="font-size: 1.3rem; font-weight: 700; color: #1e40af; margin-top: 1.5rem; margin-bottom: 0.75rem;">$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, '<strong style="color: #1e40af;">$1</strong>')
    .replace(/^- (.*$)/gim, '<li style="margin-left: 1.5rem; margin-bottom: 0.5rem;">$1</li>')
    .replace(/\n\n/g, '<br><br>')
    .replace(/\n/g, '<br>');
  
  html += `<div style="color: #1e293b; line-height: 1.8; font-size: 0.95rem;">${formattedReport}</div>`;
  html += '</div></div>';
  
  document.getElementById('report-body-content').innerHTML = html;
  
  // Store the full report for download
  window.currentReportHTML = generateDownloadableReport(analysis, conjuReport);
}

// Show error if AI generation fails
function showReportError() {
  const generatingDiv = document.getElementById('conju-generating');
  if (generatingDiv) {
    generatingDiv.innerHTML = `
      <div style="text-align: center; padding: 2rem; background: #fee; border-radius: 8px; border-left: 4px solid #dc2626;">
        <p style="color: #991b1b; font-weight: 600; margin-bottom: 0.5rem;">⚠️ Could not generate AI report</p>
        <p style="color: #64748b; font-size: 0.9rem;">Please check your connection and try again</p>
      </div>
    `;
  }
}
// Generate downloadable HTML report with AI content
function generateDownloadableReport(analysis, conjuReport) {
  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  const accuracyColor = analysis.accuracyRate >= 80 ? '#4a7c59' : analysis.accuracyRate >= 60 ? '#c9a227' : '#b85c38';
  
  // Convert markdown to HTML properly for download
  let formattedReport = conjuReport
    .replace(/^## (.*$)/gim, '<h2 class="section-title">$1</h2>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/^- (.*$)/gim, '<li>$1</li>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br>');
  
  // Wrap lists properly
  formattedReport = formattedReport.replace(/(<li>.*?<\/li>)/gs, '<ul>$1</ul>');
  
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Practice Report - ${today}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap');
    
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      line-height: 1.6;
      color: #1a1a1a;
      background: #f8f8f6;
      padding: 2rem;
    }
    
    .jp { font-family: 'Noto Sans JP', sans-serif; }
    
    .container {
      max-width: 900px;
      margin: 0 auto;
      background: white;
      padding: 3rem;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    
    .header {
      text-align: center;
      margin-bottom: 3rem;
      padding-bottom: 2rem;
      border-bottom: 2px solid #e8e8e6;
    }
    
    .header h1 {
      font-size: 2rem;
      font-weight: 700;
      color: #2e2e2c;
      margin-bottom: 0.5rem;
    }
    
    .header .date {
      color: #6b7280;
      font-size: 1rem;
    }
    
    .header .conju-badge {
      display: inline-block;
      background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 600;
      margin-top: 0.5rem;
    }
    
    .section {
      margin-bottom: 2.5rem;
    }
    
    .section-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: #1e40af;
      margin-bottom: 1.25rem;
      margin-top: 1.5rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid #e0f2fe;
    }
    
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2rem;
    }
    
    .stat-card {
      background: #f0f9ff;
      padding: 1.5rem;
      border-radius: 8px;
      text-align: center;
      border-left: 4px solid #3b82f6;
    }
    
    .stat-value {
      font-size: 2rem;
      font-weight: 700;
      color: #1e40af;
      margin-bottom: 0.5rem;
    }
    
    .stat-label {
      color: #64748b;
      font-size: 0.95rem;
      font-weight: 500;
    }
    
    .ai-content {
      background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
      padding: 2rem;
      border-radius: 12px;
      border-left: 4px solid #3b82f6;
      line-height: 1.8;
    }
    
    .ai-content h2 {
      color: #1e40af;
      margin-top: 1.5rem;
      margin-bottom: 0.75rem;
    }
    
    .ai-content h2:first-child {
      margin-top: 0;
    }
    
    .ai-content strong {
      color: #1e40af;
    }
    
    .ai-content ul {
      margin: 1rem 0 1rem 1.5rem;
    }
    
    .ai-content li {
      margin-bottom: 0.5rem;
    }
    
    .ai-content p {
      margin-bottom: 1rem;
    }
    
    .accuracy-bar-container {
      margin-top: 1.5rem;
    }
    
    .accuracy-bar-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
      font-weight: 600;
    }
    
    .accuracy-bar {
      background: #e0e0e0;
      border-radius: 10px;
      height: 12px;
      overflow: hidden;
    }
    
    .accuracy-fill {
      height: 100%;
      border-radius: 10px;
    }
    
    .footer {
      margin-top: 3rem;
      padding-top: 2rem;
      border-top: 2px solid #e8e8e6;
      text-align: center;
      color: #6b7280;
      font-size: 0.9rem;
    }
    
    @media print {
      body { 
        background: white; 
        padding: 0; 
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      .container { 
        box-shadow: none; 
        max-width: 100%;
        padding: 1.5rem;
      }
      .section { page-break-inside: avoid; }
      .ai-content { 
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
        page-break-inside: avoid;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>📊 Your Practice Report</h1>
      <div class="date">${today}</div>
      <div class="conju-badge">📚 Powered by Conju AI</div>
    </div>

    <div class="section">
      <h2 style="font-size: 1.5rem; font-weight: 700; color: #2e2e2c; margin-bottom: 1.25rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e8e8e6;">📈 Quick Stats</h2>
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-value">${analysis.totalAttempts}</div>
          <div class="stat-label">Total Attempts</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${analysis.mistakeCount}</div>
          <div class="stat-label">Mistakes Made</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${analysis.totalAttempts - analysis.mistakeCount}</div>
          <div class="stat-label">Correct Answers</div>
        </div>
        ${stats.skipped > 0 ? `<div class="stat-card">
          <div class="stat-value">${stats.skipped}</div>
          <div class="stat-label">Skipped</div>
        </div>` : ''}
      </div>
      
      <div class="accuracy-bar-container">
        <div class="accuracy-bar-header">
          <span>Accuracy Rate</span>
          <span style="color: ${accuracyColor};">${analysis.accuracyRate}%</span>
        </div>
        <div class="accuracy-bar">
          <div class="accuracy-fill" style="background: ${accuracyColor}; width: ${analysis.accuracyRate}%;"></div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="ai-content">
        ${formattedReport}
      </div>
    </div>

    <div class="footer">
      <p><strong>Katsuyō Academy</strong> — Japanese Verb Conjugation Practice</p>
      <p style="margin-top: 0.5rem;">AI-Powered Report Generated by Conju on ${today}</p>
    </div>
  </div>
</body>
</html>`;

  return html;
}

// Download report function
function downloadPracticeReport() {
  if (!window.currentReportHTML) {
    alert('Please generate a report first!');
    return;
  }
  
  const today = new Date().toISOString().split('T')[0];
  const blob = new Blob([window.currentReportHTML], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Practice-Report-${today}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  
  console.log('📥 Report downloaded!');
}
    function showMistakeReport_OLD_DISABLED() {
      const analysis = analyzeMistakes();
      const advice = generateAdvice(analysis);
      
      // Define formNames at the top so it's available throughout
      const formNames = {
        negative: 'Negative (ない)',
        masu: 'Polite (ます)',
        past: 'Past (た)',
        tai: 'Want (たい)',
        potential: 'Potential',
        volitional: 'Volitional',
        te: 'Te-form (て)',
        masen: 'Polite Neg (ません)',
        mashita: 'Polite Past (ました)',
        nakatta: 'Neg Past (なかった)',
        ba: 'Conditional (ば)',
        tara: 'Conditional (たら)',
        passive: 'Passive',
        causative: 'Causative',
        'causative-passive': 'Caus-Passive',
        imperative: 'Imperative',
        'type-identification': 'Verb Type ID'
      };
      
      let html = '';

      // Welcome message if no attempts yet
      if (analysis.totalAttempts === 0) {
        html += '<div class="report-section" style="text-align: center; padding: 3rem 2rem;">';
        html += '<div style="font-size: 3rem; margin-bottom: 1rem;">📚</div>';
        html += '<h3 style="font-size: 1.5rem; margin-bottom: 1rem; color: var(--ink);">No Practice Data Yet</h3>';
        html += '<p style="color: var(--text-light); max-width: 400px; margin: 0 auto 1.5rem;">Start practicing to see your statistics, mistake patterns, and personalized advice!</p>';
        html += '<button onclick="closeMistakeReport(); generateNewQuestion();" style="background: var(--sage); color: white; border: none; padding: 0.75rem 1.5rem; font-size: 1rem; font-weight: 600; border-radius: 4px; cursor: pointer; font-family: inherit;">Start Practicing →</button>';
        html += '</div>';
        
        document.getElementById('report-body-content').innerHTML = html;
        document.getElementById('mistake-report-modal').classList.add('active');
        document.body.style.overflow = 'hidden';
        return;
      }
      
      // Perfect score message
      if (analysis.mistakeCount === 0 && analysis.totalAttempts > 0) {
        html += '<div class="report-section" style="text-align: center; padding: 2rem;">';
        html += '<div style="font-size: 3rem; margin-bottom: 1rem;">🎉</div>';
        html += '<h3 style="font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--sage);">Perfect Score!</h3>';
        html += `<p style="color: var(--text-light);">You've answered all ${analysis.totalAttempts} questions correctly. Amazing work!</p>`;
        html += '</div>';
      }

      // Statistics section with visual progress
      html += '<div class="report-section">';
      html += '<h3 class="report-section-title">📈 Your Statistics</h3>';
      html += '<div class="mistake-stats">';
      html += `<div class="mistake-stat">
                <div class="mistake-stat-value">${analysis.totalAttempts}</div>
                <div class="mistake-stat-label">Total Attempts</div>
              </div>`;
      html += `<div class="mistake-stat">
                <div class="mistake-stat-value" style="color: ${analysis.mistakeCount > 0 ? 'var(--accent)' : 'var(--sage)'}">${analysis.mistakeCount}</div>
                <div class="mistake-stat-label">Mistakes Made</div>
              </div>`;
      html += `<div class="mistake-stat">
                <div class="mistake-stat-value">${analysis.totalAttempts - analysis.mistakeCount}</div>
                <div class="mistake-stat-label">Correct Answers</div>
              </div>`;
      if (stats.skipped > 0) {
        html += `<div class="mistake-stat">
                  <div class="mistake-stat-value" style="color: #f9a825;">${stats.skipped}</div>
                  <div class="mistake-stat-label">Skipped</div>
                </div>`;
      }
      html += '</div>';
      
      // Visual accuracy bar
      const accuracyColor = analysis.accuracyRate >= 80 ? '#4a7c59' : analysis.accuracyRate >= 60 ? '#c9a227' : '#b85c38';
      html += `<div style="margin-top: 1.5rem;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                  <span style="font-weight: 600; color: var(--ink);">Accuracy Rate</span>
                  <span style="font-weight: 700; color: ${accuracyColor};">${analysis.accuracyRate}%</span>
                </div>
                <div style="background: #e0e0e0; border-radius: 10px; height: 12px; overflow: hidden;">
                  <div style="background: ${accuracyColor}; height: 100%; width: ${analysis.accuracyRate}%; border-radius: 10px; transition: width 0.5s ease;"></div>
                </div>
                <div style="display: flex; justify-content: space-between; margin-top: 0.25rem; font-size: 0.75rem; color: var(--text-light);">
                  <span>0%</span>
                  <span>50%</span>
                  <span>100%</span>
                </div>
              </div>`;
      html += '</div>';

      // Conju AI Analysis Section (if there are mistakes)
      if (analysis.mistakeCount > 0) {
        html += '<div class="report-section" id="conju-analysis-section">';
        html += '<h3 class="report-section-title">📚 Conju\'s Analysis</h3>';
        html += '<div class="mistake-card" style="background: #f0f9ff; border-left: 4px solid #3b82f6;">';
        html += '<div style="padding: 0.5rem; color: #64748b; font-style: italic;">🤔 Analyzing your practice session...</div>';
        html += '</div>';
        html += '</div>';
        
        // Generate AI analysis asynchronously
        generateConjuReportAnalysis(analysis, mistakeLog);
      }

      // Verb type breakdown
      if (Object.keys(analysis.verbTypeErrors).length > 0) {
        html += '<div class="report-section">';
        html += '<h3 class="report-section-title">🎯 Mistakes by Verb Type</h3>';
        html += '<div class="mistake-card">';
        html += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem;">';
        
        const typeNames = { godan: 'Godan (五段)', ichidan: 'Ichidan (一段)', suru: 'Suru (する)' };
        for (const [type, count] of Object.entries(analysis.verbTypeErrors)) {
          html += `<div style="text-align: center; padding: 1rem; background: white; border-radius: 4px;">
                    <div style="font-size: 1.75rem; font-weight: 700; color: var(--accent);">${count}</div>
                    <div style="font-size: 0.85rem; color: var(--text-light);">${typeNames[type]}</div>
                  </div>`;
        }
        html += '</div></div></div>';
      }

      // Form breakdown with improvement suggestions
      if (Object.keys(analysis.formErrors).length > 0) {
        html += '<div class="report-section">';
        html += '<h3 class="report-section-title">📝 Mistakes by Form</h3>';
        html += '<p style="color: var(--text-light); margin-bottom: 1rem; font-size: 0.9rem;">Forms are sorted by number of mistakes. Focus on forms with the most errors first.</p>';
        html += '<div class="mistake-card">';
        html += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 0.75rem;">';
        
        const sortedFormErrors = Object.entries(analysis.formErrors).sort((a, b) => b[1] - a[1]);
        sortedFormErrors.forEach(([form, count], index) => {
          const isTop = index < 3 && count >= 2;
          html += `<div style="text-align: center; padding: 0.75rem; background: ${isTop ? '#fff3e0' : 'white'}; border-radius: 4px; border: 1px solid ${isTop ? '#ffcc80' : 'rgba(0,0,0,0.06)'};">
                    <div style="font-size: 1.5rem; font-weight: 700; color: ${isTop ? '#e65100' : 'var(--accent)'}; margin-bottom: 0.25rem;">${count}</div>
                    <div style="font-size: 0.8rem; color: var(--text-light);">${formNames[form] || form}</div>
                    ${isTop ? '<div style="font-size: 0.7rem; color: #e65100; margin-top: 0.25rem;">⚠️ Focus here</div>' : ''}
                  </div>`;
        });
        html += '</div></div></div>';
      }

      // Recommended Study Plan (only show if there are mistakes)
      if (analysis.mistakeCount > 0) {
        html += '<div class="report-section">';
        html += '<h3 class="report-section-title">📋 Recommended Study Plan</h3>';
        html += '<div class="mistake-card" style="background: linear-gradient(135deg, #f5f7fa 0%, #f8f9fa 100%);">';
        
        // Determine recommendations based on performance
        let recommendations = [];
        
        if (analysis.accuracyRate < 50) {
          recommendations = [
            { step: '1', action: 'Switch to "Random (Basic)" mode', reason: 'Focus on just 4 fundamental forms' },
            { step: '2', action: 'Use hints on EVERY question', reason: 'Learn the rules before testing yourself' },
            { step: '3', action: 'Review the "Learn" section', reason: 'Build conceptual understanding' },
            { step: '4', action: 'Practice 10 min daily', reason: 'Consistency beats intensity' }
          ];
        } else if (analysis.accuracyRate < 70) {
          const topProblemForm = Object.entries(analysis.formErrors).sort((a, b) => b[1] - a[1])[0];
          recommendations = [
            { step: '1', action: `Practice "${formNames[topProblemForm?.[0]] || 'your weakest form'}" specifically`, reason: 'Target your biggest weakness' },
            { step: '2', action: 'Try answering before using hints', reason: 'Test your recall first' },
            { step: '3', action: 'Review mistakes in this report', reason: 'Understand your error patterns' },
            { step: '4', action: 'Aim for 20 correct in a row', reason: 'Build confidence with streaks' }
          ];
        } else {
          recommendations = [
            { step: '1', action: 'Try "Random (Advanced)" mode', reason: 'Challenge yourself with harder forms' },
            { step: '2', action: 'Practice without hints', reason: 'Build automatic recall' },
            { step: '3', action: 'Focus on speed', reason: 'Aim for instant recognition' },
            { step: '4', action: 'Try a harder JLPT level', reason: 'Expand your vocabulary' }
          ];
        }
        
        recommendations.forEach(rec => {
          html += `<div style="display: flex; gap: 1rem; padding: 0.75rem 0; border-bottom: 1px solid rgba(0,0,0,0.06);">
                    <div style="width: 28px; height: 28px; background: var(--ink); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.85rem; flex-shrink: 0;">${rec.step}</div>
                    <div>
                      <div style="font-weight: 600; color: var(--ink);">${rec.action}</div>
                      <div style="font-size: 0.85rem; color: var(--text-light);">${rec.reason}</div>
                    </div>
                  </div>`;
        });
        
        html += '</div></div>';
      }

      // Most problematic verbs
      if (analysis.topProblematicVerbs.length > 0) {
        html += '<div class="report-section">';
        html += '<h3 class="report-section-title">⚠️ Verbs to Practice More</h3>';
        analysis.topProblematicVerbs.forEach(item => {
          const verb = item.verb;
          html += `<div class="mistake-card">
                    <div class="mistake-card-title">
                      <span class="jp" style="font-size: 1.3rem;">${verb.verbKanji}</span>
                      <span style="color: var(--text-light); font-size: 0.95rem; margin-left: 0.5rem;">
                        (${verb.verbHiragana}) — ${verb.verbMeaning}
                      </span>
                    </div>
                    <div style="color: var(--text);">
                      <strong style="color: var(--accent);">${item.count}</strong> ${item.count === 1 ? 'mistake' : 'mistakes'} with this verb
                    </div>
                  </div>`;
        });
        html += '</div>';
      }

      // Detailed mistake breakdown
      if (mistakeLog.length > 0) {
        html += '<div class="report-section">';
        html += '<h3 class="report-section-title">📝 All Your Mistakes (Most Recent First)</h3>';
        html += '<p style="color: var(--text-light); margin-bottom: 1.5rem; font-size: 0.95rem;">Review each mistake to understand exactly where you went wrong and how to fix it.</p>';
        
        // Show mistakes in reverse order (most recent first)
        const recentMistakes = [...mistakeLog].reverse().slice(0, 15); // Show last 15 mistakes
        
        recentMistakes.forEach((mistake, index) => {
          const isIntentional = isLikelyIntentionalFailure(mistake.userAnswer, mistake.correctAnswer);
          const explanation = explainMistake(mistake);
          
          html += `<div class="mistake-card" style="${isIntentional ? 'border-left-color: #ff9800;' : ''}">
                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.75rem; flex-wrap: wrap; gap: 0.5rem;">
                      <div class="mistake-card-title" style="margin-bottom: 0;">
                        <span class="jp" style="font-size: 1.3rem;">${mistake.verbKanji}</span>
                        <span style="color: var(--text-light); font-size: 0.9rem; margin-left: 0.5rem;">
                          (${mistake.verbHiragana}) — ${mistake.verbMeaning}
                        </span>
                      </div>
                      <span style="background: var(--paper); padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.85rem; color: var(--text-light); white-space: nowrap;">
                        ${formNames[mistake.form] || mistake.form}
                      </span>
                    </div>
                    
                    <div style="background: white; padding: 1rem; border-radius: 4px; margin-bottom: 0.75rem;">
                      <div style="display: grid; gap: 0.75rem;">
                        <div>
                          <div style="font-size: 0.8rem; font-weight: 600; color: var(--text-light); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem;">
                            Your Answer:
                          </div>
                          <div class="jp" style="font-size: 1.2rem; color: #d32f2f; font-weight: 600;">
                            ${mistake.userAnswer || '(no answer)'}
                          </div>
                        </div>
                        <div>
                          <div style="font-size: 0.8rem; font-weight: 600; color: var(--text-light); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem;">
                            Correct Answer:
                          </div>
                          <div class="jp" style="font-size: 1.2rem; color: #2e7d32; font-weight: 600;">
                            ${mistake.correctAnswer}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div style="background: ${isIntentional ? '#fff3e0' : '#f5f5f3'}; padding: 0.75rem 1rem; border-radius: 4px; border-left: 3px solid ${isIntentional ? '#ff9800' : '#4a90a4'};">
                      <div style="font-weight: 600; color: ${isIntentional ? '#e65100' : '#357a8a'}; margin-bottom: 0.25rem; font-size: 0.9rem;">
                        ${isIntentional ? '⚠️ Skipped Question' : '💡 What Went Wrong:'}
                      </div>
                      <div style="color: var(--text); font-size: 0.95rem; line-height: 1.6;">
                        ${explanation}
                      </div>
                    </div>
                  </div>`;
        });
        
        if (mistakeLog.length > 15) {
          html += `<div style="text-align: center; margin-top: 1rem; color: var(--text-light); font-size: 0.9rem;">
                    Showing 15 most recent mistakes (you have ${mistakeLog.length} total)
                  </div>`;
        }
        
        html += '</div>';
      }

      // Personalized advice
      if (advice.length > 0) {
        html += '<div class="report-section">';
        html += '<h3 class="report-section-title">💡 Personalized Advice</h3>';
        advice.forEach(item => {
          const isWarning = item.title.includes('⚠️');
          const boxStyle = isWarning 
            ? 'background: #fff3e0; border-left-color: #ff9800;' 
            : '';
          const titleStyle = isWarning
            ? 'color: #e65100;'
            : '';
          
          html += `<div class="advice-box" style="${boxStyle}">
                    <div class="advice-title" style="${titleStyle}">${item.title}</div>
                    <div class="advice-text">${item.text}</div>
                  </div>`;
        });
        html += '</div>';
      }

      // If no mistakes
      if (analysis.mistakeCount === 0) {
        html = `<div class="no-mistakes">
                  <div class="no-mistakes-icon">🎉</div>
                  <h3 style="color: var(--ink); margin-bottom: 1rem;">Perfect Score!</h3>
                  <p style="max-width: 500px; margin: 0 auto;">
                    You haven't made any mistakes yet! Keep practicing to maintain your accuracy,
                    and this report will help you identify patterns as you work through more challenging forms.
                  </p>
                </div>`;
      }

      document.getElementById('report-body-content').innerHTML = html;
      document.getElementById('mistake-report-modal').classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeMistakeReport() {
      var modal = document.getElementById('mistake-report-modal');
      modal.classList.remove('active');
      modal.style.display = ''; // Clear any inline styles
      document.body.style.overflow = ''; // Restore scrolling
    }

    function downloadReport() {
      // Use the new AI-powered download function
      downloadPracticeReport();
    }

    // ============ CONJUGATOR LOGIC ============
    
    // Normalize and check verb type answer (accepts multiple formats)
    function checkVerbType(userInput, correctType) {
      const normalized = userInput.toLowerCase().trim();
      
      // Define all acceptable answers for each type
      const acceptableAnswers = {
        godan: ['godan', 'ごだん', '五段', 'godан', 'u-verb', 'group 1', 'group1', 'type 1', 'type1'],
        ichidan: ['ichidan', 'いちだん', '一段', 'ru-verb', 'group 2', 'group2', 'type 2', 'type2'],
        irregular: ['irregular', 'ふきそく', '不規則', 'irregular verb', 'kuru'],
        suru: ['suru', 'する', 'する動詞', 'group 3', 'group3', 'type 3', 'type3']
      };
      
      // Check if the user's answer matches any acceptable answer for the correct type
      return acceptableAnswers[correctType].some(answer => 
        normalized === answer || normalized.includes(answer)
      );
    }
    
    // Generate a step-by-step walkthrough for the current verb
    function generateWorkedExample(verb, form) {
      let steps = [];
      const correctAnswer = conjugateVerb(verb, form);
      
      if (verb.type === 'godan') {
        const lastChar = verb.hiragana.slice(-1);
        const stem = verb.hiragana.slice(0, -1);
        
        steps.push(`<strong>Step 1:</strong> Identify the verb type. ${verb.kanji} (${verb.hiragana}) is a <strong>godan verb</strong> because it ends in "${lastChar}".`);
        
        if (form.key === 'negative') {
          const u = ['く', 'ぐ', 'す', 'つ', 'ぬ', 'ぶ', 'む', 'る', 'う'];
          const a = ['か', 'が', 'さ', 'た', 'な', 'ば', 'ま', 'ら', 'わ'];
          const idx = u.indexOf(lastChar);
          const aRow = a[idx];
          steps.push(`<strong>Step 2:</strong> For negative form, shift "${lastChar}" to the あ-row: "${lastChar}" → "${aRow}".`);
          steps.push(`<strong>Step 3:</strong> Add ない: ${stem}${aRow} + ない = <strong class="jp">${correctAnswer}</strong>`);
        } else if (form.key === 'masu') {
          const u = ['く', 'ぐ', 'す', 'つ', 'ぬ', 'ぶ', 'む', 'る', 'う'];
          const i = ['き', 'ぎ', 'し', 'ち', 'に', 'び', 'み', 'り', 'い'];
          const idx = u.indexOf(lastChar);
          const iRow = i[idx];
          steps.push(`<strong>Step 2:</strong> For masu form, shift "${lastChar}" to the い-row: "${lastChar}" → "${iRow}".`);
          steps.push(`<strong>Step 3:</strong> Add ます: ${stem}${iRow} + ます = <strong class="jp">${correctAnswer}</strong>`);
        } else if (form.key === 'past') {
          steps.push(`<strong>Step 2:</strong> For past tense, godan verbs have special sound changes.`);
          if (lastChar === 'く') {
            steps.push(`<strong>Step 3:</strong> "${lastChar}" becomes "いた": ${stem} + いた = <strong class="jp">${correctAnswer}</strong>`);
          } else if (lastChar === 'ぐ') {
            steps.push(`<strong>Step 3:</strong> "${lastChar}" becomes "いだ": ${stem} + いだ = <strong class="jp">${correctAnswer}</strong>`);
          } else if (lastChar === 'す') {
            steps.push(`<strong>Step 3:</strong> "${lastChar}" becomes "した": ${stem} + した = <strong class="jp">${correctAnswer}</strong>`);
          } else if (['つ', 'る', 'う'].includes(lastChar)) {
            steps.push(`<strong>Step 3:</strong> "${lastChar}" becomes "った": ${stem} + った = <strong class="jp">${correctAnswer}</strong>`);
          } else if (['む', 'ぶ', 'ぬ'].includes(lastChar)) {
            steps.push(`<strong>Step 3:</strong> "${lastChar}" becomes "んだ": ${stem} + んだ = <strong class="jp">${correctAnswer}</strong>`);
          }
        } else if (form.key === 'tai') {
          const u = ['く', 'ぐ', 'す', 'つ', 'ぬ', 'ぶ', 'む', 'る', 'う'];
          const i = ['き', 'ぎ', 'し', 'ち', 'に', 'び', 'み', 'り', 'い'];
          const idx = u.indexOf(lastChar);
          const iRow = i[idx];
          steps.push(`<strong>Step 2:</strong> For たい form, shift "${lastChar}" to the い-row: "${lastChar}" → "${iRow}".`);
          steps.push(`<strong>Step 3:</strong> Add たい: ${stem}${iRow} + たい = <strong class="jp">${correctAnswer}</strong>`);
        } else if (form.key === 'potential') {
          const u = ['く', 'ぐ', 'す', 'つ', 'ぬ', 'ぶ', 'む', 'る', 'う'];
          const e = ['け', 'げ', 'せ', 'て', 'ね', 'べ', 'め', 'れ', 'え'];
          const idx = u.indexOf(lastChar);
          const eRow = e[idx];
          steps.push(`<strong>Step 2:</strong> For potential form, shift "${lastChar}" to the え-row: "${lastChar}" → "${eRow}".`);
          steps.push(`<strong>Step 3:</strong> Add る: ${stem}${eRow} + る = <strong class="jp">${correctAnswer}</strong>`);
        } else if (form.key === 'volitional') {
          const u = ['く', 'ぐ', 'す', 'つ', 'ぬ', 'ぶ', 'む', 'る', 'う'];
          const o = ['こ', 'ご', 'そ', 'と', 'の', 'ぼ', 'も', 'ろ', 'お'];
          const idx = u.indexOf(lastChar);
          const oRow = o[idx];
          steps.push(`<strong>Step 2:</strong> For volitional form, shift "${lastChar}" to the お-row: "${lastChar}" → "${oRow}".`);
          steps.push(`<strong>Step 3:</strong> Add う: ${stem}${oRow} + う = <strong class="jp">${correctAnswer}</strong>`);
        } else if (form.key === 'te') {
          steps.push(`<strong>Step 2:</strong> For te-form, godan verbs have special sound changes (same pattern as past tense).`);
          if (lastChar === 'く') {
            steps.push(`<strong>Step 3:</strong> "${lastChar}" becomes "いて": ${stem} + いて = <strong class="jp">${correctAnswer}</strong>`);
          } else if (lastChar === 'ぐ') {
            steps.push(`<strong>Step 3:</strong> "${lastChar}" becomes "いで": ${stem} + いで = <strong class="jp">${correctAnswer}</strong>`);
          } else if (lastChar === 'す') {
            steps.push(`<strong>Step 3:</strong> "${lastChar}" becomes "して": ${stem} + して = <strong class="jp">${correctAnswer}</strong>`);
          } else if (['つ', 'る', 'う'].includes(lastChar)) {
            steps.push(`<strong>Step 3:</strong> "${lastChar}" becomes "って": ${stem} + って = <strong class="jp">${correctAnswer}</strong>`);
          } else if (['む', 'ぶ', 'ぬ'].includes(lastChar)) {
            steps.push(`<strong>Step 3:</strong> "${lastChar}" becomes "んで": ${stem} + んで = <strong class="jp">${correctAnswer}</strong>`);
          }
        } else {
          // Generic fallback for other forms
          steps.push(`<strong>Step 2:</strong> Apply the ${form.name} conjugation pattern.`);
          steps.push(`<strong>Step 3:</strong> The correct answer is: <strong class="jp">${correctAnswer}</strong>`);
        }
      } else if (verb.type === 'ichidan') {
        const stem = verb.hiragana.slice(0, -1);
        steps.push(`<strong>Step 1:</strong> Identify the verb type. ${verb.kanji} (${verb.hiragana}) is an <strong>ichidan verb</strong>—it ends in -eru or -iru sound.`);
        steps.push(`<strong>Step 2:</strong> For ichidan verbs, the stem never changes. Drop the る: ${verb.hiragana} → ${stem}`);
        
        const endings = {
          negative: 'ない',
          masu: 'ます',
          past: 'た',
          tai: 'たい',
          potential: 'られる',
          volitional: 'よう',
          te: 'て',
          masen: 'ません',
          mashita: 'ました',
          nakatta: 'なかった',
          ba: 'れば',
          tara: 'たら',
          passive: 'られる',
          causative: 'させる',
          'causative-passive': 'させられる',
          imperative: 'ろ'
        };
        
        steps.push(`<strong>Step 3:</strong> Add ${endings[form.key]}: ${stem} + ${endings[form.key]} = <strong class="jp">${correctAnswer}</strong>`);
      } else if (verb.type === 'suru') {
        const prefix = verb.hiragana.replace('する', '');
        steps.push(`<strong>Step 1:</strong> Identify the verb type. ${verb.kanji} (${verb.hiragana}) is a <strong>suru verb</strong>—it's formed by adding する to a noun.`);
        
        const suruMap = {
          negative: 'しない',
          masu: 'します',
          past: 'した',
          tai: 'したい',
          potential: 'できる',
          volitional: 'しよう',
          te: 'して',
          masen: 'しません',
          mashita: 'しました',
          nakatta: 'しなかった',
          ba: 'すれば',
          tara: 'したら',
          passive: 'される',
          causative: 'させる',
          'causative-passive': 'させられる',
          imperative: 'しろ'
        };
        
        if (form.key === 'potential') {
          steps.push(`<strong>Step 2:</strong> For potential form, する becomes できる (special case).`);
          steps.push(`<strong>Step 3:</strong> Replace する with できる: ${prefix}する → <strong class="jp">${correctAnswer}</strong>`);
        } else {
          steps.push(`<strong>Step 2:</strong> For ${form.name} form, する becomes ${suruMap[form.key]}.`);
          steps.push(`<strong>Step 3:</strong> Replace する with ${suruMap[form.key]}: ${prefix}する → <strong class="jp">${correctAnswer}</strong>`);
        }
      }
      
      return '<div style="margin-top: 1rem; padding: 1rem; background: rgba(0,0,0,0.03); border-radius: 4px; text-align: left;">' +
             '<div style="font-weight: 600; margin-bottom: 0.75rem; color: var(--sage);">Let\'s work through this together:</div>' +
             steps.map(s => `<div style="margin-bottom: 0.5rem; line-height: 1.6;">${s}</div>`).join('') +
             '</div>';
    }
    
    // Check if the answer is close enough to warrant a retry
    function isAnswerInBallpark(userAnswer, correctAnswer) {
      // Remove spaces for comparison
      const user = userAnswer.trim();
      const correct = correctAnswer.trim();
      
      // If completely empty, not in ballpark
      if (!user) return false;
      
      // Kanji answers are accepted now, so a near-miss written in kanji has to
      // be able to earn the second chance too.
      const japaneseRegex = /^[ぁ-んァ-ヶ々一-龯ー]+$/;
      if (!japaneseRegex.test(user)) {
        return false; // Latin letters or symbols — probably way off
      }

      // Check length similarity (within 3 characters)
      if (Math.abs(user.length - correct.length) > 3) {
        return false;
      }
      
      // Check for any character overlap
      let overlapCount = 0;
      for (let char of user) {
        if (correct.includes(char)) overlapCount++;
      }
      
      // If at least 40% of characters are in the correct answer, it's close
      return (overlapCount / user.length) >= 0.4;
    }
    
    // Generate detailed error explanation
    function getErrorExplanation(userAnswer, correctAnswer, verb, form) {
      const user = userAnswer.trim();
      
      // Kanji is fine — only flag genuinely foreign characters.
      const japaneseRegex = /^[ぁ-んァ-ヶ々一-龯ー]+$/;
      if (!japaneseRegex.test(user)) {
        return "Your answer contains characters that aren't Japanese. Remember, we're conjugating the verb, not translating it — write the conjugated verb in kana or kanji.";
      }

      // Check if they forgot to conjugate
      if (user === verb.hiragana || user === verb.kanji) {
        return `You entered the dictionary form (${verb.hiragana}), but we need the <strong>${form.name}</strong> form. You need to change the verb ending.`;
      }
      
      // Type-specific hints
      if (verb.type === 'godan') {
        const lastChar = verb.hiragana.slice(-1);
        const userLast = user.slice(-1);
        
        if (form.key === 'negative' && !user.endsWith('ない')) {
          return `For godan negative, you need to end with <strong>ない</strong>. The last character of ${verb.hiragana} (${lastChar}) should shift to the あ-row, then add ない.`;
        }
        
        if (form.key === 'masu' && !user.endsWith('ます')) {
          return `For godan polite form, you need to end with <strong>ます</strong>. Shift ${lastChar} to the い-row, then add ます.`;
        }
        
        if (form.key === 'past' && !user.endsWith('た') && !user.endsWith('だ')) {
          return `For godan past tense, you need special endings like <strong>いた, いだ, した, った, or んだ</strong> depending on the verb ending. Check which pattern ${verb.hiragana} follows.`;
        }
        
        if (form.key === 'tai' && !user.endsWith('たい')) {
          return `For the たい form, shift to the い-row and add <strong>たい</strong>. Your answer should end with たい.`;
        }
        
        if (form.key === 'potential' && !user.endsWith('る')) {
          return `For godan potential, shift to the え-row and add <strong>る</strong>. Your answer should end with る.`;
        }
        
        if (form.key === 'volitional' && !user.endsWith('う')) {
          return `For godan volitional, shift to the お-row and add <strong>う</strong>. Your answer should end with う.`;
        }
        
        return `Remember, this is a <strong>godan verb</strong> that conjugates by shifting the final kana to different rows (あ、い、う、え、お). Check your conjugation pattern for the ${form.name} form.`;
      }
      
      if (verb.type === 'ichidan') {
        const stem = verb.hiragana.slice(0, -1);
        
        if (!user.startsWith(stem)) {
          return `For ichidan verbs, the stem <strong>never changes</strong>. Your answer should start with "${stem}". Just drop the る and add the correct ending.`;
        }
        
        if (form.key === 'negative' && !user.endsWith('ない')) {
          return `For ichidan negative: drop る and add <strong>ない</strong>. It should be ${stem}ない.`;
        }
        
        if (form.key === 'masu' && !user.endsWith('ます')) {
          return `For ichidan polite: drop る and add <strong>ます</strong>. It should be ${stem}ます.`;
        }
        
        if (form.key === 'past' && !user.endsWith('た')) {
          return `For ichidan past: drop る and add <strong>た</strong>. It should be ${stem}た.`;
        }
        
        if (form.key === 'tai' && !user.endsWith('たい')) {
          return `For ichidan desire form: drop る and add <strong>たい</strong>. It should be ${stem}たい.`;
        }
        
        if (form.key === 'potential' && !user.endsWith('られる')) {
          return `For ichidan potential: drop る and add <strong>られる</strong>. It should be ${stem}られる.`;
        }
        
        if (form.key === 'volitional' && !user.endsWith('よう')) {
          return `For ichidan volitional: drop る and add <strong>よう</strong>. It should be ${stem}よう.`;
        }
        
        return `Remember, this is an <strong>ichidan verb</strong>. The stem never changes—just drop る and add the ending for the ${form.name} form.`;
      }
      
      if (verb.type === 'suru') {
        const suruMap = { 
          negative: 'しない', 
          masu: 'します', 
          past: 'した', 
          tai: 'したい', 
          potential: 'できる', 
          volitional: 'しよう',
          te: 'して',
          masen: 'しません',
          mashita: 'しました',
          nakatta: 'しなかった',
          ba: 'すれば',
          tara: 'したら',
          passive: 'される',
          causative: 'させる',
          'causative-passive': 'させられる',
          imperative: 'しろ'
        };
        
        const expectedEnding = suruMap[form.key];
        const prefix = verb.hiragana.replace('する', '');
        
        if (form.key === 'potential') {
          return `For する verbs in potential form, する becomes <strong>できる</strong>. The answer should be ${prefix}できる.`;
        }
        
        return `For する verbs, replace する with <strong>${expectedEnding}</strong>. The answer should be ${prefix}${expectedEnding}.`;
      }
      
      return `Your answer doesn't match the correct conjugation pattern. Review how ${verb.type} verbs conjugate in the ${form.name} form.`;
    }
    
    // Pull up a verb + form the learner has actually got wrong, if one fits
    // the current filters. Without this, a verb you keep missing is no more
    // likely to reappear than one you've never seen.
    function pickWeakSpot() {
      const keys = Object.keys(weakSpots);
      if (!keys.length) return null;

      const jlptFilter = document.getElementById('jlpt-filter').value;
      const allowedLevels = jlptFilter === 'all' ? null
        : (jlptFilter === 'N5-N4' ? ['N5', 'N4'] : [jlptFilter]);
      const selectedForm = document.getElementById('form-select').value;

      function formAllowed(key) {
        if (selectedForm === 'random') return true;
        if (selectedForm === 'random-basic') return formCategories.basic.includes(key);
        if (selectedForm === 'random-intermediate') return formCategories.intermediate.includes(key);
        if (selectedForm === 'random-advanced') return formCategories.advanced.includes(key);
        return selectedForm === key;
      }

      const candidates = [];
      keys.forEach(function (k) {
        const w = weakSpots[k];
        if (!w || !w.form || w.form === 'type-identification') return;
        if (!formAllowed(w.form)) return;
        const list = verbs[w.type];
        if (!list) return;
        const verb = list.find(function (v) { return v.kanji === w.kanji; });
        if (!verb) return;
        if (allowedLevels && !allowedLevels.includes(verb.jlpt)) return;
        if (recentlyUsedVerbs.some(function (r) { return r.kanji === verb.kanji; })) return;
        const form = forms.find(function (f) { return f.key === w.form; });
        if (!form) return;
        // The more often it's been missed, the more tickets it gets.
        const tickets = Math.min(w.misses, 4);
        for (let i = 0; i < tickets; i++) candidates.push({ verb: verb, type: w.type, form: form });
      });

      if (!candidates.length) return null;
      const pick = candidates[Math.floor(Math.random() * candidates.length)];
      const template = pick.form.templates[Math.floor(Math.random() * pick.form.templates.length)];
      recentlyUsedVerbs.push(Object.assign({}, pick.verb, { type: pick.type }));
      if (recentlyUsedVerbs.length > MAX_RECENT_VERBS) recentlyUsedVerbs.shift();
      return Object.assign({}, pick.verb, { type: pick.type, form: pick.form, template: template, isReview: true });
    }

    function getRandomVerb() {
      // Roughly a third of questions revisit something you've missed — but not
      // while a verb is locked, where the whole point is to stay on that word.
      if (!lockedVerb && Math.random() < WEAK_REVISIT_CHANCE) {
        const weak = pickWeakSpot();
        if (weak) return weak;
      }

      const types = ['godan', 'ichidan', 'irregular', 'suru'];
      const weights = [5, 3, 1, 2]; // irregular gets weight of 1 (rare but possible)
      const weightedTypes = types.flatMap((type, i) => Array(weights[i]).fill(type));
      let type = weightedTypes[Math.floor(Math.random() * weightedTypes.length)];
      if (lockedVerb) type = lockedVerb.type;
      let verbList = verbs[type];
      
      // Apply JLPT filter
      const jlptFilter = document.getElementById('jlpt-filter').value;
      if (jlptFilter !== 'all') {
        const allowedLevels = jlptFilter === 'N5-N4' ? ['N5', 'N4'] : [jlptFilter];
        verbList = verbList.filter(v => allowedLevels.includes(v.jlpt));
        
        // If no verbs match the filter for this type, try another type
        if (verbList.length === 0) {
          for (const fallbackType of types) {
            const fallbackList = verbs[fallbackType].filter(v => allowedLevels.includes(v.jlpt));
            if (fallbackList.length > 0) {
              verbList = fallbackList;
              break;
            }
          }
        }
      }
      
      // Try to pick a verb that hasn't been used recently
      let availableVerbs = verbList.filter(v => 
        !recentlyUsedVerbs.some(recent => 
          recent.kanji === v.kanji && recent.type === type
        )
      );
      
      // If all verbs have been used recently, use the full list
      if (availableVerbs.length === 0) {
        availableVerbs = verbList;
      }
      
      const verb = lockedVerb || availableVerbs[Math.floor(Math.random() * availableVerbs.length)];
      
      const selectedForm = document.getElementById('form-select').value;
      let form;
      
      // Handle different random modes
      if (selectedForm === 'random') {
        form = forms[Math.floor(Math.random() * forms.length)];
      } else if (selectedForm === 'random-basic') {
        const basicForms = forms.filter(f => formCategories.basic.includes(f.key));
        form = basicForms[Math.floor(Math.random() * basicForms.length)];
      } else if (selectedForm === 'random-intermediate') {
        const intermediateForms = forms.filter(f => formCategories.intermediate.includes(f.key));
        form = intermediateForms[Math.floor(Math.random() * intermediateForms.length)];
      } else if (selectedForm === 'random-advanced') {
        const advancedForms = forms.filter(f => formCategories.advanced.includes(f.key));
        form = advancedForms[Math.floor(Math.random() * advancedForms.length)];
      } else {
        form = forms.find(f => f.key === selectedForm);
      }
      
      // Pick a random prompt template
      const template = form.templates[Math.floor(Math.random() * form.templates.length)];
      
      // Add to recently used list
      const verbWithType = { ...verb, type };
      recentlyUsedVerbs.push(verbWithType);
      
      // Keep only the last MAX_RECENT_VERBS
      if (recentlyUsedVerbs.length > MAX_RECENT_VERBS) {
        recentlyUsedVerbs.shift();
      }
      
      return { ...verb, type, form, template };
    }

    function conjugateVerb(verb, form) {
      if (!verb) return '';
      
      // Special handling for irregular verb 来る (kuru)
      if (verb.hiragana === 'くる') {
        const kuruMap = {
          negative: 'こない',
          masu: 'きます',
          past: 'きた',
          tai: 'きたい',
          potential: 'こられる',
          volitional: 'こよう',
          te: 'きて',
          masen: 'きません',
          mashita: 'きました',
          nakatta: 'こなかった',
          ba: 'くれば',
          tara: 'きたら',
          passive: 'こられる',
          causative: 'こさせる',
          'causative-passive': 'こさせられる',
          imperative: 'こい'
        };
        return kuruMap[form.key] || verb.hiragana;
      }
      
      // Special handling for 行く (iku) - irregular te/ta/tara forms
      if (verb.hiragana === 'いく') {
        const ikuMap = {
          te: 'いって',
          past: 'いった',
          tara: 'いったら'
        };
        if (ikuMap[form.key]) return ikuMap[form.key];
        // Fall through to regular godan handling for other forms
      }
      
      // Special handling for ある (aru) - irregular negative forms
      if (verb.hiragana === 'ある') {
        const aruMap = {
          negative: 'ない',
          nakatta: 'なかった',
          masen: 'ありません',
          ba: 'あれば'
        };
        if (aruMap[form.key]) return aruMap[form.key];
        // Fall through to regular godan handling for other forms
      }
      
      const stem = verb.hiragana.slice(0, -1);
      const last = verb.hiragana.slice(-1);
      
      if (verb.type === 'suru') {
        const map = { 
          negative: 'しない', 
          masu: 'します', 
          past: 'した', 
          tai: 'したい', 
          potential: 'できる', 
          volitional: 'しよう',
          te: 'して',
          masen: 'しません',
          mashita: 'しました',
          nakatta: 'しなかった',
          ba: 'すれば',
          tara: 'したら',
          passive: 'される',
          causative: 'させる',
          'causative-passive': 'させられる',
          imperative: 'しろ'
        };
        return verb.hiragana.replace('する', map[form.key]);
      } else if (verb.type === 'godan') {
        const u = ['く', 'ぐ', 'す', 'つ', 'ぬ', 'ぶ', 'む', 'る', 'う'];
        const a = ['か', 'が', 'さ', 'た', 'な', 'ば', 'ま', 'ら', 'わ'];
        const i = ['き', 'ぎ', 'し', 'ち', 'に', 'び', 'み', 'り', 'い'];
        const e = ['け', 'げ', 'せ', 'て', 'ね', 'べ', 'め', 'れ', 'え'];
        const o = ['こ', 'ご', 'そ', 'と', 'の', 'ぼ', 'も', 'ろ', 'お'];
        const idx = u.indexOf(last);
        
        if (form.key === 'negative') return stem + a[idx] + 'ない';
        if (form.key === 'masu') return stem + i[idx] + 'ます';
        if (form.key === 'tai') return stem + i[idx] + 'たい';
        if (form.key === 'potential') return stem + e[idx] + 'る';
        if (form.key === 'volitional') return stem + o[idx] + 'う';
        if (form.key === 'masen') return stem + i[idx] + 'ません';
        if (form.key === 'mashita') return stem + i[idx] + 'ました';
        if (form.key === 'nakatta') return stem + a[idx] + 'なかった';
        if (form.key === 'ba') return stem + e[idx] + 'ば';
        if (form.key === 'passive') return stem + a[idx] + 'れる';
        if (form.key === 'causative') return stem + a[idx] + 'せる';
        if (form.key === 'causative-passive') return stem + a[idx] + 'せられる';
        if (form.key === 'imperative') return stem + e[idx];
        
        // Te-form uses same sound changes as past
        if (form.key === 'te') {
          if (last === 'く') return stem + 'いて';
          if (last === 'ぐ') return stem + 'いで';
          if (last === 'す') return stem + 'して';
          if (['つ', 'る', 'う'].includes(last)) return stem + 'って';
          if (['む', 'ぶ', 'ぬ'].includes(last)) return stem + 'んで';
        }
        
        // Tara is past + ら
        if (form.key === 'tara') {
          if (last === 'く') return stem + 'いたら';
          if (last === 'ぐ') return stem + 'いだら';
          if (last === 'す') return stem + 'したら';
          if (['つ', 'る', 'う'].includes(last)) return stem + 'ったら';
          if (['む', 'ぶ', 'ぬ'].includes(last)) return stem + 'んだら';
        }
        
        // Past form
        if (form.key === 'past') {
          if (last === 'く') return stem + 'いた';
          if (last === 'ぐ') return stem + 'いだ';
          if (last === 'す') return stem + 'した';
          if (['つ', 'る', 'う'].includes(last)) return stem + 'った';
          if (['む', 'ぶ', 'ぬ'].includes(last)) return stem + 'んだ';
        }
      } else {
        // Ichidan
        const map = { 
          negative: 'ない', 
          masu: 'ます', 
          past: 'た', 
          tai: 'たい', 
          potential: 'られる', 
          volitional: 'よう',
          te: 'て',
          masen: 'ません',
          mashita: 'ました',
          nakatta: 'なかった',
          ba: 'れば',
          tara: 'たら',
          passive: 'られる',
          causative: 'させる',
          'causative-passive': 'させられる',
          imperative: 'ろ'
        };
        return stem + map[form.key];
      }
      return verb.hiragana;
    }

    // ========================================================================
    // ANSWER ACCEPTANCE
    // ------------------------------------------------------------------------
    // The Conjugator used to compare the typed answer against one generated
    // string. Anything that was right but not *that exact string* came back
    // "✗ Incorrect": kanji from a Japanese IME (行かない vs いかない), 食べれる,
    // 行かされる, a trailing space, a stray 。
    //
    // These helpers build the full set of answers that are genuinely correct
    // for a verb + form, each with an optional note so the app can say "yes,
    // that's right — and here's the textbook form too" instead of just "no".
    // ========================================================================

    // Verbs the list stores in kana, but which a learner may well type in
    // kanji because that's what their IME offers first.
    const KANJI_SPELLINGS = {
      'わかる': ['分かる', '解る', '判る'],
      'できる': ['出来る'],
      'ある':   ['有る', '在る'],
      'いる':   ['居る'],
      'なる':   ['成る'],
      'あげる': ['上げる'],
      'つける': ['付ける', '点ける'],
      'やる':   ['遣る']
    };

    function foldKatakana(s) {
      return String(s || '').replace(/[ァ-ヶ]/g, function (c) {
        return String.fromCharCode(c.charCodeAt(0) - 0x60);
      });
    }

    // Strip everything that isn't part of the answer: surrounding spaces,
    // sentence punctuation, full-width Latin characters from an IME.
    function normalizeAnswer(s) {
      if (!s) return '';
      return String(s)
        .replace(/[！-～]/g, function (c) {
          return String.fromCharCode(c.charCodeAt(0) - 0xfee0);
        })
        .replace(/　/g, ' ')
        .replace(/[。．、，！？\s]/g, '')
        .toLowerCase();
    }

    // Rebuild a conjugated kana string with the verb's kanji restored.
    //   行く / いく → okurigana く, reading prefix い
    //   いかない starts with い → 行かない
    function kanjiVariants(verb, kana) {
      const out = [];
      if (!kana) return out;

      // 来る is the odd one out: the kanji stays put and the reading under it
      // changes (こ / き / く), so the prefix trick doesn't apply.
      if (verb.hiragana === 'くる') {
        if (kana.length > 1) out.push('来' + kana.slice(1));
        return out;
      }

      function fromSpelling(spelling) {
        if (!/[々一-龯]/.test(spelling)) return;
        const okuri = (spelling.match(/[぀-ゟ]+$/) || [''])[0];
        const kanjiStem = spelling.slice(0, spelling.length - okuri.length);
        if (!kanjiStem || !okuri) return;
        if (!verb.hiragana.endsWith(okuri)) return;
        const readingPrefix = verb.hiragana.slice(0, verb.hiragana.length - okuri.length);
        if (!readingPrefix) return;
        if (kana.indexOf(readingPrefix) !== 0) return;   // reading changed — skip
        out.push(kanjiStem + kana.slice(readingPrefix.length));
      }

      fromSpelling(verb.kanji || '');
      (KANJI_SPELLINGS[verb.hiragana] || []).forEach(fromSpelling);
      return out;
    }

    // Alternatives beyond the textbook answer that are not mistakes.
    function alternateAnswers(verb, form) {
      const key = form.key;
      const type = verb.type;
      const hira = verb.hiragana;
      const stem = hira.slice(0, -1);
      const last = hira.slice(-1);
      const U = ['く', 'ぐ', 'す', 'つ', 'ぬ', 'ぶ', 'む', 'る', 'う'];
      const A = ['か', 'が', 'さ', 'た', 'な', 'ば', 'ま', 'ら', 'わ'];
      const idx = U.indexOf(last);
      const alts = [];
      function add(answer, note) {
        if (answer) alts.push({ answer: answer, note: note || '' });
      }
      // Quote the reference form the way the question showed it — kanji if the
      // verb has any, kana otherwise.
      function disp(kana) { return kanjiVariants(verb, kana)[0] || kana; }

      const RANUKI = 'That\'s the ら抜き (ra-nuki) form — everyday spoken Japanese, and understood everywhere. The textbook form is ';
      const SHORT_CAUS = 'That\'s the short causative — correct, and common in speech. The full form is ';
      const LITERARY_IMP = 'That\'s the literary/written imperative — also correct. The everyday form is ';

      // ── ら抜き potential: 食べれる for 食べられる ───────────────────────
      if (key === 'potential' && type === 'ichidan') {
        add(stem + 'れる', RANUKI + disp(stem + 'られる') + '。');
      }
      if (key === 'potential' && hira === 'くる') {
        add('これる', RANUKI + 'こられる。');
      }

      // ── short causative: 行かす / 食べさす / 勉強さす ──────────────────
      if (key === 'causative') {
        if (type === 'godan' && idx > -1) add(stem + A[idx] + 'す', SHORT_CAUS + disp(stem + A[idx] + 'せる') + '。');
        if (type === 'ichidan') add(stem + 'さす', SHORT_CAUS + disp(stem + 'させる') + '。');
        if (type === 'suru') add(hira.replace('する', 'さす'), SHORT_CAUS + disp(hira.replace('する', 'させる')) + '。');
        if (hira === 'くる') add('こさす', SHORT_CAUS + 'こさせる。');
      }

      // ── contracted causative-passive: 行かされる ──────────────────────
      // Not for す-ending godan verbs — ✕話さされる is not standard.
      if (key === 'causative-passive' && type === 'godan' && idx > -1 && last !== 'す') {
        add(stem + A[idx] + 'される',
            'That\'s the contracted causative-passive — the form most people actually say. The full form is ' +
            disp(stem + A[idx] + 'せられる') + '。');
      }

      // ── literary imperative: せよ / 食べよ / こよ ─────────────────────
      if (key === 'imperative') {
        if (type === 'suru') add(hira.replace('する', 'せよ'), LITERARY_IMP + disp(hira.replace('する', 'しろ')) + '。');
        if (type === 'ichidan') add(stem + 'よ', LITERARY_IMP + disp(stem + 'ろ') + '。');
        if (hira === 'くる') add('こよ', LITERARY_IMP + 'こい。');
      }

      // ── 〜ないです alongside 〜ません ──────────────────────────────────
      if (key === 'masen') {
        const plainNeg = conjugateVerb(verb, { key: 'negative' });
        add(plainNeg + 'です',
            '〜ないです is the colloquial polite negative and perfectly usable. 〜ません is the standard one.');
      }

      // ── 行く read as ゆく ─────────────────────────────────────────────
      // Skipped for te / past / tara: ゆく takes the regular sound change
      // (ゆいて), not 行く's irregular one, so those aren't simple swaps.
      if (hira === 'いく' && ['te', 'past', 'tara'].indexOf(key) === -1) {
        const canon = conjugateVerb(verb, form);
        if (canon.indexOf('い') === 0) {
          add('ゆ' + canon.slice(1), 'ゆく is an older reading of 行く — still correct, and common in announcements.');
        }
      }

      // ── ある's potential is really ありえる / ありうる ─────────────────
      if (hira === 'ある' && key === 'potential') {
        add('ありえる', 'ありえる／ありうる is the natural potential of ある.');
        add('ありうる', 'ありえる／ありうる is the natural potential of ある.');
      }

      return alts;
    }

    // Every answer that counts as correct, kana and kanji spellings alike.
    function acceptedAnswers(verb, form) {
      const list = [{ answer: conjugateVerb(verb, form), note: '' }];
      alternateAnswers(verb, form).forEach(function (a) { list.push(a); });

      const withKanji = [];
      list.forEach(function (entry) {
        kanjiVariants(verb, entry.answer).forEach(function (k) {
          withKanji.push({ answer: k, note: entry.note });
        });
      });
      return list.concat(withKanji);
    }

    // → { correct, canonical, note }
    function checkConjugation(userAnswer, verb, form) {
      const canonical = conjugateVerb(verb, form);
      const typed = normalizeAnswer(userAnswer);
      if (!typed) return { correct: false, canonical: canonical, note: '' };

      const accepted = acceptedAnswers(verb, form);

      for (let i = 0; i < accepted.length; i++) {
        if (normalizeAnswer(accepted[i].answer) === typed) {
          return { correct: true, canonical: canonical, note: accepted[i].note };
        }
      }

      // Second pass: the right answer, but typed in katakana.
      const folded = foldKatakana(typed);
      for (let i = 0; i < accepted.length; i++) {
        if (foldKatakana(normalizeAnswer(accepted[i].answer)) === folded) {
          return {
            correct: true,
            canonical: canonical,
            note: 'Right form — though verb endings are written in hiragana, not katakana.'
          };
        }
      }

      return { correct: false, canonical: canonical, note: '' };
    }

    // Exposed so the console (and any future test page) can check the set.
    window.ConjugatorAnswers = {
      check: checkConjugation,
      accepted: acceptedAnswers,
      normalize: normalizeAnswer
    };


// ============================================================================
// AI-POWERED PROGRESSIVE HINT SYSTEM
// ============================================================================

let currentHintLevel = 0;
let cachedHints = {};

async function generateAIHint(verb, form, level) {
  if (VERCEL_BACKEND_URL.includes('YOUR-VERCEL-URL-HERE')) {
    console.log('⚠️ Backend not configured, using fallback hints');
    return getFallbackHint(verb, form, level);
  }

  const cacheKey = `${verb.kanji}_${form.key}_${level}`;
  
  if (cachedHints[cacheKey]) {
    console.log(`✅ Using cached hint (Level ${level})`);
    return cachedHints[cacheKey];
  }

  const formNames = {
    negative: 'Negative (ない)', masu: 'Polite (ます)', past: 'Past (た)', tai: 'Want (たい)',
    potential: 'Potential', volitional: 'Volitional', te: 'Te-form (て)',
    masen: 'Polite Neg (ません)', mashita: 'Polite Past (ました)', nakatta: 'Neg Past (なかった)',
    ba: 'Conditional (ば)', tara: 'Conditional (たら)', passive: 'Passive',
    causative: 'Causative', 'causative-passive': 'Caus-Passive', imperative: 'Imperative'
  };

  const verbInfo = `${verb.kanji} (${verb.hiragana}) - ${verb.meaning}`;
  const verbType = verb.type;
  const formName = formNames[form.key] || form.key;

  let prompt = '';

  if (level === 1) {
    prompt = `You are a helpful Japanese tutor. A student is learning to conjugate verbs.

The student needs to conjugate: ${verbInfo}
Into: ${formName}
Verb type: ${verbType}

Give a GENERAL hint about this conjugation form. DO NOT give away the answer or show the exact conjugation pattern.

Guidelines:
- Explain WHAT this form is used for (1 sentence)
- Mention the general approach for ${verbType} verbs
- DO NOT mention specific endings or show the answer
- Keep it 2-3 sentences, friendly and encouraging
- DO NOT use the verb ${verb.kanji} in examples

Format: Just the hint text, no "Hint:" label.`;

  } else if (level === 2) {
    prompt = `You are a helpful Japanese tutor. A student needs a MORE SPECIFIC hint.

The student needs to conjugate: ${verbInfo}
Into: ${formName}
Verb type: ${verbType}

Give a MORE SPECIFIC hint, but STILL don't give away the complete answer.

Guidelines:
- Mention the conjugation rule for ${verbType} verbs in ${formName}
- You CAN mention patterns like "drop る and add..." or "change う-sound to..."
- But DO NOT show the exact answer for THIS verb
- You CAN use a DIFFERENT verb as an example (not ${verb.kanji})
- Keep it 3-4 sentences

Format: Just the hint text.`;

  } else if (level === 3) {
    prompt = `You are a helpful Japanese tutor. A student needs MAXIMUM help without seeing the answer.

The student needs to conjugate: ${verbInfo}
Into: ${formName}
Verb type: ${verbType}

Give a STEP-BY-STEP walkthrough, but make them figure out the final answer themselves.

Guidelines:
- Break down the conjugation into clear steps
- For each step, tell them WHAT to do
- Use a DIFFERENT verb as a complete example
- For THIS verb, guide them but don't complete it
- End with "Now you try!"

Format: Use steps or bullet points.`;
  }

  console.log(`🤖 Generating AI hint (Level ${level})...`);

  try {
    const response = await fetch(VERCEL_BACKEND_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: prompt + (window.KA_aiLangSuffix ? window.KA_aiLangSuffix() : ''), maxTokens: 300 })
    });

    if (!response.ok) {
      console.error('❌ AI hint generation failed:', response.status);
      return getFallbackHint(verb, form, level);
    }

    const result = await response.json();

    if (result.success) {
      console.log(`✅ AI hint generated (Level ${level})`);
      cachedHints[cacheKey] = result.feedback;
      return result.feedback;
    } else {
      console.error('❌ AI hint error:', result.error);
      return getFallbackHint(verb, form, level);
    }
  } catch (error) {
    console.error('❌ AI hint network error:', error);
    return getFallbackHint(verb, form, level);
  }
}

function getFallbackHint(verb, form, level) {
  const type = verb.type;
  const formKey = form.key;

  if (level === 1) {
    if (type === 'godan') {
      return "For godan verbs, the ending changes based on the last sound. Think about what sound this verb ends with!";
    } else if (type === 'ichidan') {
      return "For ichidan verbs, the stem never changes - you just swap the ending. Drop る and add the new ending!";
    } else if (type === 'suru') {
      return "する verbs follow a special pattern. The part before する stays the same!";
    }
  } else if (level === 2) {
    if (type === 'godan' && (formKey === 'te' || formKey === 'past')) {
      return "For godan verbs in this form, different endings have different sound changes. く→いて, す→して, う/つ/る→って. Check your verb's ending!";
    } else if (type === 'ichidan') {
      return `For ichidan verbs, drop る and add the appropriate ending. The stem stays exactly the same. Try it with ${verb.hiragana}!`;
    } else if (type === 'suru') {
      return `For する verbs, replace する with the conjugated form. The part before する doesn't change!`;
    }
  } else if (level === 3) {
    return `Let's think step by step:\n1. Identify the verb type (${type})\n2. Find the part that changes\n3. Apply the rule for ${formKey}\nTry working through each step!`;
  }

  return "Think about the conjugation pattern for this verb type!";
}

async function toggleHint() {
  const hintBox = document.getElementById('hint-box');
  const hintContent = document.getElementById('hint-content');
  const hintBtnText = document.getElementById('hint-btn-text');
  
  if (!hintVisible) {
    hintVisible = true;
    currentHintLevel = 1;
    hintBox.classList.add('visible');
    hintBtnText.textContent = '🙈 Hide hint';
    
    hintContent.innerHTML = '<div style="color: #666; font-style: italic;">🤔 Generating smart hint...</div>';
    
    const hint = await generateAIHint(currentVerb, currentVerb.form, 1);
    
    hintContent.innerHTML = `
      <div style="line-height: 1.7; margin-bottom: 1rem;">${hint.replace(/\n/g, '<br>')}</div>
      <div style="text-align: center; margin-top: 1rem;">
        <button onclick="getNextHintLevel()" style="background: #4a90a4; color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; font-size: 0.9rem;">
          💡 Need more help? (Level 2)
        </button>
      </div>
    `;
  } else {
    hintVisible = false;
    currentHintLevel = 0;
    hintBox.classList.remove('visible');
    hintBtnText.textContent = '💡 Show hint';
  }
}

async function getNextHintLevel() {
  if (currentHintLevel >= 3) return;
  
  currentHintLevel++;
  const hintContent = document.getElementById('hint-content');
  
  hintContent.innerHTML = '<div style="color: #666; font-style: italic;">🤔 Generating more detailed hint...</div>';
  
  const hint = await generateAIHint(currentVerb, currentVerb.form, currentHintLevel);
  
  const levelNames = ['', 'General', 'Detailed', 'Step-by-Step'];
  const nextLevelBtn = currentHintLevel < 3 ? `
    <div style="text-align: center; margin-top: 1rem;">
      <button onclick="getNextHintLevel()" style="background: #4a90a4; color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; font-size: 0.9rem;">
        💡 Even more help? (Level ${currentHintLevel + 1})
      </button>
    </div>
  ` : '<div style="text-align: center; margin-top: 1rem; color: #666; font-style: italic;">Maximum help reached! You got this! 💪</div>';
  
  hintContent.innerHTML = `
    <div style="background: #f0f9ff; padding: 0.75rem; border-radius: 4px; border-left: 3px solid #3b82f6; margin-bottom: 0.5rem;">
      <strong style="color: #1e40af;">Level ${currentHintLevel}: ${levelNames[currentHintLevel]} Hint</strong>
    </div>
    <div style="line-height: 1.7; margin-bottom: 1rem;">${hint.replace(/\n/g, '<br>')}</div>
    ${nextLevelBtn}
  `;
}

// Generate smart examples that hide the matching verb type
function generateSmartExamples(formKey, verbType) {
  console.log('🔍 Smart Examples - Form:', formKey, 'VerbType:', verbType);
  
  // Smart examples that exclude the current verb type
  const examples = {
    negative: {
      ichidan: '食<ruby>べる<rt>たべる</rt></ruby> → 食<ruby>べない<rt>たべない</rt></ruby>',
      godan: '書<ruby>く<rt>かく</rt></ruby> → 書<ruby>かない<rt>かかない</rt></ruby>',
      suru: 'する → しない'
    },
    masu: {
      ichidan: '食<ruby>べる<rt>たべる</rt></ruby> → 食<ruby>べます<rt>たべます</rt></ruby>',
      godan: '書<ruby>く<rt>かく</rt></ruby> → 書<ruby>きます<rt>かきます</rt></ruby>',
      suru: 'する → します'
    },
    past: {
      ichidan: '食<ruby>べる<rt>たべる</rt></ruby> → 食<ruby>べた<rt>たべた</rt></ruby>',
      godan: '書<ruby>く<rt>かく</rt></ruby> → 書<ruby>いた<rt>かいた</rt></ruby>',
      suru: 'する → した'
    },
    tai: {
      ichidan: '食<ruby>べる<rt>たべる</rt></ruby> → 食<ruby>べたい<rt>たべたい</rt></ruby>',
      godan: '書<ruby>く<rt>かく</rt></ruby> → 書<ruby>きたい<rt>かきたい</rt></ruby>',
      suru: 'する → したい'
    },
    potential: {
      ichidan: '食<ruby>べる<rt>たべる</rt></ruby> → 食<ruby>べられる<rt>たべられる</rt></ruby>',
      godan: '書<ruby>く<rt>かく</rt></ruby> → 書<ruby>ける<rt>かける</rt></ruby>',
      suru: 'する → できる'
    },
    volitional: {
      ichidan: '食<ruby>べる<rt>たべる</rt></ruby> → 食<ruby>べよう<rt>たべよう</rt></ruby>',
      godan: '書<ruby>く<rt>かく</rt></ruby> → 書<ruby>こう<rt>かこう</rt></ruby>',
      suru: 'する → しよう'
    },
    te: {
      ichidan: '食<ruby>べる<rt>たべる</rt></ruby> → 食<ruby>べて<rt>たべて</rt></ruby>',
      godan: '書<ruby>く<rt>かく</rt></ruby> → 書<ruby>いて<rt>かいて</rt></ruby>',
      suru: 'する → して'
    },
    masen: {
      ichidan: '食<ruby>べる<rt>たべる</rt></ruby> → 食<ruby>べません<rt>たべません</rt></ruby>',
      godan: '書<ruby>く<rt>かく</rt></ruby> → 書<ruby>きません<rt>かきません</rt></ruby>',
      suru: 'する → しません'
    },
    mashita: {
      ichidan: '食<ruby>べる<rt>たべる</rt></ruby> → 食<ruby>べました<rt>たべました</rt></ruby>',
      godan: '書<ruby>く<rt>かく</rt></ruby> → 書<ruby>きました<rt>かきました</rt></ruby>',
      suru: 'する → しました'
    },
    nakatta: {
      ichidan: '食<ruby>べる<rt>たべる</rt></ruby> → 食<ruby>べなかった<rt>たべなかった</rt></ruby>',
      godan: '書<ruby>く<rt>かく</rt></ruby> → 書<ruby>かなかった<rt>かかなかった</rt></ruby>',
      suru: 'する → しなかった'
    },
    ba: {
      ichidan: '食<ruby>べる<rt>たべる</rt></ruby> → 食<ruby>べれば<rt>たべれば</rt></ruby>',
      godan: '書<ruby>く<rt>かく</rt></ruby> → 書<ruby>けば<rt>かけば</rt></ruby>',
      suru: 'する → すれば'
    },
    tara: {
      ichidan: '食<ruby>べる<rt>たべる</rt></ruby> → 食<ruby>べたら<rt>たべたら</rt></ruby>',
      godan: '書<ruby>く<rt>かく</rt></ruby> → 書<ruby>いたら<rt>かいたら</rt></ruby>',
      suru: 'する → したら'
    },
    passive: {
      ichidan: '食<ruby>べる<rt>たべる</rt></ruby> → 食<ruby>べられる<rt>たべられる</rt></ruby>',
      godan: '書<ruby>く<rt>かく</rt></ruby> → 書<ruby>かれる<rt>かかれる</rt></ruby>',
      suru: 'する → される'
    },
    causative: {
      ichidan: '食<ruby>べる<rt>たべる</rt></ruby> → 食<ruby>べさせる<rt>たべさせる</rt></ruby>',
      godan: '書<ruby>く<rt>かく</rt></ruby> → 書<ruby>かせる<rt>かかせる</rt></ruby>',
      suru: 'する → させる'
    },
    'causative-passive': {
      ichidan: '食<ruby>べる<rt>たべる</rt></ruby> → 食<ruby>べさせられる<rt>たべさせられる</rt></ruby>',
      godan: '書<ruby>く<rt>かく</rt></ruby> → 書<ruby>かせられる<rt>かかせられる</rt></ruby>',
      suru: 'する → させられる'
    },
    imperative: {
      ichidan: '食<ruby>べる<rt>たべる</rt></ruby> → 食<ruby>べろ<rt>たべろ</rt></ruby>',
      godan: '書<ruby>く<rt>かく</rt></ruby> → 書<ruby>け<rt>かけ</rt></ruby>',
      suru: 'する → しろ'
    }
  };

  const formExamples = examples[formKey];
  if (!formExamples) return '';

  // Show examples for OTHER verb types (hide the current one)
  let exampleList = [];
  console.log('🔍 Filtering examples for verbType:', verbType);
  if (verbType !== 'ichidan') {
    console.log('  ✅ Adding ichidan example');
    exampleList.push(formExamples.ichidan);
  } else {
    console.log('  ❌ Hiding ichidan example (matching type)');
  }
  if (verbType !== 'godan') {
    console.log('  ✅ Adding godan example');
    exampleList.push(formExamples.godan);
  } else {
    console.log('  ❌ Hiding godan example (matching type)');
  }
  if (verbType !== 'suru') {
    console.log('  ✅ Adding suru example');
    exampleList.push(formExamples.suru);
  } else {
    console.log('  ❌ Hiding suru example (matching type)');
  }
  console.log('📝 Final example list:', exampleList);
  // For irregular (来る), show all three examples since it's unique

  // Just the worked examples — the form name and the question phrase are added
  // by buildPromptHtml(), which decides the order they're read in.
  return exampleList
    .map(function (e) { return '<span class="ex-item">' + e + '</span>'; })
    .join('<span class="ex-sep">\u00b7</span>');
}

// The form's name, in the same words the form dropdown uses — which means it
// follows the site language instead of always being English.
const FORM_I18N_KEY = {
  negative: 'f_negative', masu: 'f_masu', past: 'f_past', te: 'f_te',
  masen: 'f_masen', mashita: 'f_mashita', nakatta: 'f_nakatta', tai: 'f_tai',
  potential: 'f_potential', volitional: 'f_volitional', ba: 'f_ba', tara: 'f_tara',
  imperative: 'f_imperative', passive: 'f_passive', causative: 'f_causative',
  'causative-passive': 'f_caus_pass'
};

function formDisplayName(formKey) {
  const key = FORM_I18N_KEY[formKey];
  return key ? ct(key, formKey) : formKey;
}

// The question, in three clearly separated parts:
//   what form to make  →  the actual thing to translate  →  worked examples
// Examples come last because they're reference, not the question.
function buildPromptHtml(verb, opts) {
  const formKey = verb.form.key;
  const showExamples = !opts || opts.examples !== false;

  const tpl = verb.form.templates.find(function (t) { return t.type === 'phrase'; });
  const phrase = (window.KA_phrase && window.KA_phrase(formKey, verb.meaning))
    || (tpl ? tpl.text.replace('{meaning}', verb.meaning.replace('to ', '')) : '');

  let html = '<span class="prompt-task">' + formDisplayName(formKey) + '</span>';
  if (phrase) html += '<span class="prompt-phrase">' + phrase + '</span>';
  if (showExamples) {
    const examples = generateSmartExamples(formKey, verb.type);
    if (examples) {
      html += '<span class="prompt-examples"><span class="ex-label">' +
              ct('ex_label', 'e.g.') + '</span>' + examples + '</span>';
    }
  }
  return html;
}

// The check button's label can't come from data-i18n: the i18n
// MutationObserver re-applies that attribute a moment after any DOM change,
// which would wipe out a "Continue (7)" countdown. Painting it here is also
// what keeps it translated.
function paintCheckButton(secondsLeft) {
  const btn = document.getElementById('check-btn');
  if (!btn) return;
  const waitingToContinue = typeof typeIdentificationAnswer !== 'undefined' &&
    typeIdentificationAnswer && !isTypeIdentificationQuiz && showAnswer;
  if (waitingToContinue) {
    btn.textContent = (secondsLeft === undefined || secondsLeft === null)
      ? ct('continue_now', 'Continue \u2192')
      : ct('continue_in', 'Continue ({n}) \u2192').replace('{n}', secondsLeft);
  } else {
    btn.textContent = ct('check', 'Check Answer');
  }
}

// What the answer box should say it wants, for whichever mode is actually on.
function updateAnswerPlaceholder() {
  const el = document.getElementById('answer-input');
  if (!el) return;
  if (typeof isTypeIdentificationQuiz !== 'undefined' && isTypeIdentificationQuiz) {
    el.placeholder = ct('answer_placeholder_type', 'godan / ichidan / suru / irregular');
  } else if (romajiInputEnabled()) {
    el.placeholder = ct('answer_placeholder_romaji', 'ikanai → いかない');
  } else {
    el.placeholder = ct('answer_placeholder_kana', 'ひらがなで入力...');
  }
}

function clearHintCache() {
  currentHintLevel = 0;
  hintVisible = false;
}

// ============================================================================
// AI-POWERED CONJUGATION INSTRUCTIONS
// ============================================================================

let cachedInstructions = {};

async function generateConjugationInstruction(verb, form) {
  if (VERCEL_BACKEND_URL.includes('YOUR-VERCEL-URL-HERE')) {
    console.log('⚠️ Backend not configured, using default instructions');
    return getDefaultInstruction(form);
  }

  const cacheKey = `instruction_${form.key}_${verb.type}`;
  
  if (cachedInstructions[cacheKey]) {
    console.log(`✅ Using cached instruction for ${form.key}`);
    return cachedInstructions[cacheKey];
  }

  const formNames = {
    negative: 'Negative (ない)', masu: 'Polite (ます)', past: 'Past (た)', tai: 'Want (たい)',
    potential: 'Potential', volitional: 'Volitional', te: 'Te-form (て)',
    masen: 'Polite Negative (ません)', mashita: 'Polite Past (ました)',
    nakatta: 'Negative Past (なかった)', ba: 'Conditional (ば)', tara: 'Conditional (たら)',
    passive: 'Passive', causative: 'Causative', 'causative-passive': 'Causative-Passive',
    imperative: 'Imperative'
  };

  const formName = formNames[form.key] || form.key;
  const verbType = verb.type;

  const prompt = `You are a Japanese language tutor. Generate a brief, educational instruction for a conjugation exercise.

Student will conjugate: ${verbType} verbs
Into: ${formName}

Generate a SHORT instruction (2-3 sentences max) that:
1. States what form they're conjugating to
2. Gives a quick reminder of when/why this form is used
3. Gives a VERY brief hint about the conjugation pattern for ${verbType} verbs (but don't give away the answer!)

Guidelines:
- Keep it under 3 sentences
- Be encouraging and educational
- Mention the usage/purpose of this form
- Give a gentle hint about the pattern
- DO NOT show specific conjugation examples
- Use simple, clear language

Example output:
"Conjugate to <strong>Te-form (て)</strong>
The te-form connects actions and is used for making requests. For godan verbs, the ending changes based on the final sound."

Format: Plain text with HTML bold tags for the form name. No extra formatting.`;

  console.log(`🤖 Generating instruction for ${formName}...`);

  try {
    const response = await fetch(VERCEL_BACKEND_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: prompt + (window.KA_aiLangSuffix ? window.KA_aiLangSuffix() : ''), maxTokens: 200 })
    });

    if (!response.ok) {
      console.error('❌ Instruction generation failed:', response.status);
      return getDefaultInstruction(form);
    }

    const result = await response.json();

    if (result.success) {
      console.log(`✅ Instruction generated for ${formName}`);
      cachedInstructions[cacheKey] = result.feedback.trim();
      return result.feedback.trim();
    } else {
      console.error('❌ Instruction error:', result.error);
      return getDefaultInstruction(form);
    }
  } catch (error) {
    console.error('❌ Instruction network error:', error);
    return getDefaultInstruction(form);
  }
}

function getDefaultInstruction(form) {
  const defaults = {
    negative: 'Conjugate to: <strong>Negative (ない)</strong>',
    masu: 'Conjugate to: <strong>Polite (ます)</strong>',
    past: 'Conjugate to: <strong>Past (た)</strong>',
    tai: 'Conjugate to: <strong>Want to (たい)</strong>',
    potential: 'Conjugate to: <strong>Potential</strong>',
    volitional: 'Conjugate to: <strong>Volitional</strong>',
    te: 'Conjugate to: <strong>Te-form (て)</strong>',
    masen: 'Conjugate to: <strong>Polite Negative (ません)</strong>',
    mashita: 'Conjugate to: <strong>Polite Past (ました)</strong>',
    nakatta: 'Conjugate to: <strong>Negative Past (なかった)</strong>',
    ba: 'Conjugate to: <strong>Conditional (ば)</strong>',
    tara: 'Conjugate to: <strong>Conditional (たら)</strong>',
    passive: 'Conjugate to: <strong>Passive</strong>',
    causative: 'Conjugate to: <strong>Causative</strong>',
    'causative-passive': 'Conjugate to: <strong>Causative-Passive</strong>',
    imperative: 'Conjugate to: <strong>Imperative</strong>'
  };

  return defaults[form.key] || `Conjugate to: <strong>${form.key}</strong>`;
}

// Modified generateNewQuestion to use AI instructions
function typeQuizEnabled() {
  const el = document.getElementById('type-quiz-toggle');
  if (el) return el.checked;
  try { return localStorage.getItem('katsuyo-type-quiz') !== 'off'; } catch (e) { return true; }
}

function generateNewQuestionWithAI() {
  if (typeof stopTypeQuizCountdown === 'function') stopTypeQuizCountdown();

  // Reached the session goal? Stop and show what happened, rather than
  // rolling on forever.
  if (typeof sessionGoal === 'function') {
    const goal = sessionGoal();
    if (goal && session.answered >= goal) {
      showSessionSummary();
      return;
    }
  }

  questionSerial++;
  currentVerb = getRandomVerb();
  currentPrompt = currentVerb.template;
  showAnswer = false;
  firstAttempt = true;
  hintVisible = false;
  typeIdentificationAnswer = null;
  
  clearHintCache();
  
  // The verb-type quiz is a different kind of question, so it's opt-out and
  // it announces itself instead of silently swapping the prompt.
  isTypeIdentificationQuiz = typeQuizEnabled() && !currentVerb.isReview && Math.random() < 0.25;

  const reviewBadge = document.getElementById('review-badge');
  if (reviewBadge) reviewBadge.style.display = currentVerb.isReview ? 'inline-block' : 'none';

  const quizBadge = document.getElementById('type-quiz-badge');
  if (quizBadge) quizBadge.style.display = isTypeIdentificationQuiz ? 'inline-block' : 'none';

  const promptFormDiv = document.getElementById('prompt-form');

  if (isTypeIdentificationQuiz) {
    document.getElementById('verb-type').style.display = 'none';
    promptFormDiv.innerHTML = 'What type of verb is this?<br><span style="font-size: 0.85rem; font-weight: 400; color: var(--text-light); margin-top: 0.5rem; display: block; line-height: 1.8;">Enter: <strong>godan</strong> / ごだん / 五段<br>or <strong>ichidan</strong> / いちだん / 一段<br>or <strong>suru</strong> / する<br>or <strong>irregular</strong> / ふきそく / 不規則</span>';
  } else {
    document.getElementById('verb-type').style.display = 'block';
    document.getElementById('verb-type').textContent = 
      currentVerb.type === 'godan' ? 'Godan Verb' : 
      currentVerb.type === 'ichidan' ? 'Ichidan Verb' : 
      currentVerb.type === 'irregular' ? 'Irregular Verb' : 'Suru Verb';
    
    promptFormDiv.innerHTML = buildPromptHtml(currentVerb);
  }
  // Tag the question with its form, so tests and any future feature don't have
  // to reverse-engineer it from a translated label.
  promptFormDiv.dataset.formKey = isTypeIdentificationQuiz ? 'type-identification' : currentVerb.form.key;
  updateAnswerPlaceholder();
  paintCheckButton();
  
  document.getElementById('verb-kanji').textContent = currentVerb.kanji;
  document.getElementById('verb-hiragana').textContent = currentVerb.hiragana;
  document.getElementById('verb-meaning').textContent =
    (window.KA_meaning ? window.KA_meaning(currentVerb.meaning) : currentVerb.meaning);
  
  document.getElementById('answer-input').value = '';
  document.getElementById('answer-input').disabled = false;
  document.getElementById('hint-box').classList.remove('visible');
  document.getElementById('hint-btn-text').textContent = '💡 Show hint';
  document.getElementById('feedback-warning').classList.remove('visible');
  document.getElementById('feedback-result').classList.remove('visible', 'correct', 'incorrect');
  document.getElementById('feedback-result').style.background = '';
  document.getElementById('feedback-result').style.borderLeftColor = '';
  document.getElementById('check-btn').style.display = 'block';
  document.getElementById('check-btn').disabled = true;
  document.getElementById('skip-btn').style.display = 'block';
  document.getElementById('next-btn').style.display = 'none';
  
  document.getElementById('ai-examples').style.display = 'none';
  document.getElementById('ai-examples').innerHTML = '';
  document.getElementById('more-examples-btn').style.display = 'none';
  window.currentQuestionContext = null;
  
  document.getElementById('answer-input').focus();
}

// Re-render the current question's localized parts when the language changes.
window.refreshConjugatorI18n = function () {
  // applyI18n always writes the romaji placeholder; put back whichever one
  // matches the learner's actual setting, and relabel the toggle.
  if (typeof setRomajiInput === 'function') {
    setRomajiInput(romajiInputEnabled());
    paintRomajiToggle();
  }
  if (typeof currentVerb === 'undefined' || !currentVerb) return;
  var mEl = document.getElementById('verb-meaning');
  if (mEl) mEl.textContent = (window.KA_meaning ? window.KA_meaning(currentVerb.meaning) : currentVerb.meaning);
  var inTypeQuiz = (typeof isTypeIdentificationQuiz !== 'undefined' && isTypeIdentificationQuiz);
  var typeEl = document.getElementById('verb-type');
  // never reveal the type while the type-identification quiz is asking for it
  if (typeEl && currentVerb.type && !inTypeQuiz) {
    typeEl.textContent =
      currentVerb.type === 'godan' ? 'Godan Verb' :
      currentVerb.type === 'ichidan' ? 'Ichidan Verb' :
      currentVerb.type === 'irregular' ? 'Irregular Verb' : 'Suru Verb';
  }
  var promptDiv = document.getElementById('prompt-form');
  if (promptDiv && currentVerb.form && !inTypeQuiz) {
    // Past the type question, the examples have already served their purpose.
    promptDiv.innerHTML = buildPromptHtml(currentVerb, { examples: !typeIdentificationAnswer });
  }
  if (typeof updateAnswerPlaceholder === 'function') updateAnswerPlaceholder();
  if (typeof paintCheckButton === 'function') paintCheckButton();
};

// Wrapper function with standard name
function generateNewQuestion() {
  generateNewQuestionWithAI();
}

    function checkAnswer() {
      const answerEl = document.getElementById('answer-input');
      // Commit any half-finished romaji — a dangling "n" becomes ん — so the
      // learner is judged on what they meant, not on where they stopped.
      if (conjKana) conjKana.flush();
      const userAnswer = answerEl.value.trim();

      // Don't process empty answers (unless in continue/next mode)
      if (userAnswer === '' && !showAnswer) {
        return;
      }
      
      // Check if we're in "continue" mode after correct verb type identification
      if (showAnswer && typeIdentificationAnswer && !isTypeIdentificationQuiz) {
        // Transition to conjugation mode
        document.getElementById('verb-type').style.display = 'block';
        document.getElementById('verb-type').textContent = 
          currentVerb.type === 'godan' ? 'Godan Verb' : 
          currentVerb.type === 'ichidan' ? 'Ichidan Verb' : 
          currentVerb.type === 'irregular' ? 'Irregular Verb' : 'Suru Verb';
        
        // Rebuild the whole prompt, not just the phrase — otherwise the form
        // being asked for disappears. Examples are dropped here: they were
        // already on screen during the type question.
        const promptEl = document.getElementById('prompt-form');
        promptEl.innerHTML = buildPromptHtml(currentVerb, { examples: false });
        promptEl.dataset.formKey = currentVerb.form.key;

        // The verb-type badge belongs to the question we've just left.
        const leavingBadge = document.getElementById('type-quiz-badge');
        if (leavingBadge) leavingBadge.style.display = 'none';
        stopTypeQuizCountdown();
        updateAnswerPlaceholder();
        
        // Reset UI for conjugation
        document.getElementById('answer-input').value = '';
        document.getElementById('answer-input').disabled = false;
        document.getElementById('feedback-result').classList.remove('visible');
        paintCheckButton();
        document.getElementById('check-btn').classList.remove('continue');
        document.getElementById('check-btn').classList.add('primary');
        document.getElementById('check-btn').disabled = true;
        
        // Reset state
        showAnswer = false;
        firstAttempt = true;
        typeIdentificationAnswer = null;
        
        document.getElementById('answer-input').focus();
        return;
      }
      
      if (isTypeIdentificationQuiz) {
        // ===== VERB TYPE IDENTIFICATION MODE =====
        const correctType = currentVerb.type;
        const isCorrect = checkVerbType(userAnswer, correctType);
        
        if (isCorrect) {
          // Correct! Show success and change button to continue
          typeIdentificationAnswer = correctType;
          
          // Show success message
          const feedbackResult = document.getElementById('feedback-result');
          feedbackResult.classList.add('visible', 'correct');
          document.getElementById('feedback-title').textContent = '✓ Correct!';
          document.getElementById('feedback-answer').innerHTML = `This is a <strong>${correctType}</strong> verb.`;
          
          let typeExplanation = '';
          if (correctType === 'godan') {
            typeExplanation = 'Godan verbs conjugate by shifting through the five vowel rows (あ、い、う、え、お).';
          } else if (correctType === 'ichidan') {
            typeExplanation = 'Ichidan verbs have a stem that never changes—just drop る and add endings.';
          } else {
            typeExplanation = 'Suru verbs are formed by adding する to a noun and have irregular conjugations.';
          }
          
          document.getElementById('feedback-explanation').innerHTML =
            typeExplanation +
            '<div id="type-quiz-continue-note" style="margin-top:0.9rem;font-weight:600;color:var(--ink);"></div>';
          document.getElementById('feedback-explanation').style.display = 'block';
          
          // Disable input and change button to "Continue"
          document.getElementById('answer-input').disabled = true;
          document.getElementById('check-btn').classList.remove('primary');
          document.getElementById('check-btn').classList.add('continue');
          document.getElementById('check-btn').disabled = false;
          
          // Mark that we're waiting for continuation
          isTypeIdentificationQuiz = false;
          showAnswer = true; // Reuse this flag to indicate we're in "continue" state
          // Start the countdown last: its first paint reads showAnswer to
          // decide whether the button says "Check" or "Continue".
          startTypeQuizCountdown();
        } else {
          // Wrong type identification - this counts as a mistake!
          stats.total++;
          streak = 0;
          session.answered++;
          saveStats(); // Persist to localStorage
          updateScoreDisplay();
          
          // Log this mistake for the report
          const typeNames = {
            godan: '五段',
            ichidan: '一段',
            suru: 'する',
            irregular: '不規則'
          };
          logMistake(
            currentVerb,
            'type-identification',
            userAnswer,
            `${correctType} (${typeNames[correctType]})`
          );
          
          showAnswer = true;
          document.getElementById('answer-input').disabled = true;
          
          const feedbackResult = document.getElementById('feedback-result');
          feedbackResult.classList.add('visible');
          feedbackResult.classList.remove('correct');
          document.getElementById('feedback-title').textContent = '✗ Incorrect';
          document.getElementById('feedback-answer').innerHTML = `This is a <strong>${correctType}</strong> verb, not ${userAnswer}.`;
          
          // Generate detailed explanation
          let explanation = '';
          if (correctType === 'godan') {
            explanation = `<strong>Godan (五段) verbs</strong> end in one of nine う-sound syllables: く、ぐ、す、つ、ぬ、ぶ、む、る、or う. ` +
                         `${currentVerb.kanji} ends in "${currentVerb.hiragana.slice(-1)}", which is one of these endings. ` +
                         `They're called "five-step" verbs because they conjugate by moving through the five vowel rows (あ、い、う、え、お). ` +
                         `<br><br><strong>Watch out:</strong> Some verbs ending in る are godan, not ichidan (like 走る, 帰る, 知る).`;
          } else if (correctType === 'ichidan') {
            explanation = `<strong>Ichidan (一段) verbs</strong> typically end in -eru (える) or -iru (いる) sounds. ` +
                         `${currentVerb.kanji} (${currentVerb.hiragana}) follows this pattern. ` +
                         `They're called "one-step" verbs because the stem never changes—you just drop る and add endings. ` +
                         `<br><br><strong>Note:</strong> Not all verbs ending in -eru/-iru are ichidan (there are exceptions like 帰る、走る).`;
          } else {
            explanation = `<strong>Suru (する) verbs</strong> are formed by adding する to a noun. ` +
                         `${currentVerb.kanji} is "${currentVerb.meaning}" = [noun] + する. ` +
                         `These are irregular verbs with their own conjugation patterns. ` +
                         `Common examples: 勉強する (to study), 仕事する (to work), 料理する (to cook).`;
          }
          
          document.getElementById('feedback-explanation').innerHTML = explanation;
          document.getElementById('feedback-explanation').style.display = 'block';
          
          document.getElementById('check-btn').style.display = 'none';
          document.getElementById('skip-btn').style.display = 'none';
          document.getElementById('next-btn').style.display = 'block';
        }
        
        return;
      }
      
      // ===== NORMAL CONJUGATION MODE =====
      
      // Check if user wrote in romaji instead of hiragana
      if (isRomaji(userAnswer)) {
        // Show a helpful reminder
        const feedbackResult = document.getElementById('feedback-result');
        feedbackResult.classList.add('visible');
        feedbackResult.classList.remove('correct');
        document.getElementById('feedback-title').textContent = ct('romaji_title', "⚠️ That didn't convert");
        document.getElementById('feedback-answer').innerHTML = ct('romaji_msg',
          'Your answer is still in Latin letters, so it can\'t be checked as Japanese.');

        const explanation = romajiInputEnabled()
          ? ct('romaji_tip_on',
              'Romaji typing is switched on, so <strong>ikanai</strong> should turn into いかない as you type. ' +
              'If some of it stayed as letters, check the spelling — every syllable needs its vowel.')
          : ct('romaji_tip_off',
              'Romaji typing is switched off. Turn it back on with the <strong>あ/A</strong> button next to the answer box, ' +
              'or type with a Japanese keyboard.');

        document.getElementById('feedback-explanation').innerHTML = explanation;
        document.getElementById('feedback-explanation').style.display = 'block';
        
        return; // Don't check the answer
      }
      
      const answerCheck = checkConjugation(userAnswer, currentVerb, currentVerb.form);
      const correctAnswer = answerCheck.canonical;
      const isCorrect = answerCheck.correct;
      const failureKey = `${currentVerb.type}-${currentVerb.form.key}`;
      
      if (isCorrect) {
        // Correct answer!
        stats.total++;
        stats.correct++;
        streak++;
        if (streak > bestStreak) bestStreak = streak;
        session.answered++;
        session.correct++;
        recordHit(currentVerb, currentVerb.form.key);
        saveStats(); // Persist to localStorage
        saveProgress();
        updateScoreDisplay();
        
        // Update report button availability
        updateReportButton();
        
        // Reset failure tracking for this type-form combo
        failureTracking[failureKey] = 0;
        
        showAnswer = true;
        document.getElementById('answer-input').disabled = true;
        document.getElementById('feedback-warning').classList.remove('visible');
        
        const feedbackResult = document.getElementById('feedback-result');
        feedbackResult.classList.add('visible', 'correct');
        document.getElementById('feedback-title').textContent = '✓ Correct!';
        // A variant answer is still correct — show what they typed, and add a
        // short note about how it relates to the textbook form.
        if (answerCheck.note) {
          document.getElementById('feedback-answer').innerHTML =
            `<div>${userAnswer.trim()}</div>` +
            `<div style="margin-top:8px;font-size:0.9rem;font-weight:400;color:#475569;line-height:1.55;">` +
            `<strong style="color:#0f766e;">Also fine:</strong> ${answerCheck.note}</div>`;
        } else {
          document.getElementById('feedback-answer').textContent = correctAnswer;
        }

        // Show loading state immediately
        const explanationEl = document.getElementById('feedback-explanation');
        explanationEl.innerHTML = `
          <div style="background: #f0fdf4; border-left: 3px solid #22c55e; padding: 12px 16px; border-radius: 6px; margin-top: 10px;">
            <div style="font-weight: 600; color: #166534; margin-bottom: 6px;">📝 In context:</div>
            <div style="color: #9ca3af; font-style: italic;">Loading...</div>
          </div>
        `;
        explanationEl.style.display = 'block';
        
        // Generate context sentence
        const verbInfo = `${currentVerb.kanji} (${currentVerb.hiragana}) - ${currentVerb.meaning}`;
        const formName = currentVerb.form.name;
        
        console.log('📝 Calling generateContextSentence...');
        
        generateContextSentence(verbInfo, correctAnswer, formName)
          .then(contextSentence => {
            console.log('📝 Received sentence:', contextSentence);
            if (contextSentence && contextSentence.trim()) {
              explanationEl.innerHTML = `
                <div style="background: #f0fdf4; border-left: 3px solid #22c55e; padding: 12px 16px; border-radius: 6px; margin-top: 10px;">
                  <div style="font-weight: 600; color: #166534; margin-bottom: 6px;">📝 In context:</div>
                  <div style="color: #374151; line-height: 1.6; white-space: pre-line;">${contextSentence}</div>
                </div>
              `;
              console.log('✅ Context sentence displayed!');
            } else {
              console.error('❌ No sentence returned!');
              explanationEl.innerHTML = `
                <div style="background: #f0fdf4; border-left: 3px solid #22c55e; padding: 12px 16px; border-radius: 6px; margin-top: 10px;">
                  <div style="font-weight: 600; color: #166534; margin-bottom: 6px;">📝 In context:</div>
                  <div style="color: #374151; line-height: 1.6;">${correctAnswer}を使います。<br>(Use ${correctAnswer}.)</div>
                </div>
              `;
            }
          })
          .catch(error => {
            console.error('❌ Promise error:', error);
            explanationEl.innerHTML = `
              <div style="background: #f0fdf4; border-left: 3px solid #22c55e; padding: 12px 16px; border-radius: 6px; margin-top: 10px;">
                <div style="font-weight: 600; color: #166534; margin-bottom: 6px;">📝 In context:</div>
                <div style="color: #374151; line-height: 1.6;">${correctAnswer}を使います。<br>(Use ${correctAnswer}.)</div>
              </div>
            `;
          });
        
        document.getElementById('check-btn').style.display = 'none';
        document.getElementById('skip-btn').style.display = 'none';
        document.getElementById('next-btn').style.display = 'block';
      } else {
        // Wrong answer - check if it's in the ballpark of ANY accepted answer,
        // so a near-miss typed in kanji gets the same second chance as kana.
        const inBallpark = acceptedAnswers(currentVerb, currentVerb.form)
          .some(a => isAnswerInBallpark(userAnswer, a.answer));
        
        if (inBallpark && firstAttempt) {
          // Close enough - give them another try
          firstAttempt = false;
          document.getElementById('answer-input').value = '';
          document.getElementById('feedback-warning').classList.add('visible');
          document.getElementById('answer-input').focus();
        } else {
          // Either not in ballpark, or second attempt - mark as wrong
          stats.total++;
          streak = 0;
          session.answered++;
          recordMiss(currentVerb, currentVerb.form.key);
          saveStats(); // Persist to localStorage
          updateScoreDisplay();
          
          // Log this mistake for the report
          logMistake(currentVerb, currentVerb.form.key, userAnswer, correctAnswer);
          
          // Track consecutive failures
          failureTracking[failureKey] = (failureTracking[failureKey] || 0) + 1;
          const consecutiveFailures = failureTracking[failureKey];
          
          showAnswer = true;
          document.getElementById('answer-input').disabled = true;
          document.getElementById('feedback-warning').classList.remove('visible');
          
          const feedbackResult = document.getElementById('feedback-result');
          feedbackResult.classList.add('visible', 'incorrect');
          document.getElementById('feedback-title').textContent = '✗ Incorrect';
          document.getElementById('feedback-answer').textContent = correctAnswer;
          
          // Hide check/skip, show next button
          document.getElementById('check-btn').style.display = 'none';
          document.getElementById('skip-btn').style.display = 'none';
          document.getElementById('next-btn').style.display = 'block';
          
          // Reset examples section
          document.getElementById('ai-examples').style.display = 'none';
          document.getElementById('ai-examples').innerHTML = '';
          
          // Explain the mistake straight away from the rules, rather than
          // making the learner watch a spinner while the API answers. The AI
          // explanation replaces this in place when it arrives.
          const explanationEl = document.getElementById('feedback-explanation');
          explanationEl.innerHTML =
            `<div style="background:#fff7ed;border-left:4px solid #f59e0b;padding:16px 20px;border-radius:8px;margin:10px 0;line-height:1.7;color:#1e293b;">
               ${getErrorExplanation(userAnswer, correctAnswer, currentVerb, currentVerb.form)}
             </div>
             <div id="ai-pending" style="color:#94a3b8;font-size:0.85rem;margin-top:6px;">
               ${ct('ai_thinking', 'Conju is writing a fuller explanation…')}
             </div>`;
          explanationEl.style.display = 'block';
          
          // Store context for "Show More Examples" button
          window.currentQuestionContext = {
            verb: `${currentVerb.kanji} (${currentVerb.hiragana}) - ${currentVerb.meaning}`,
            form: currentVerb.form.text,
            correctAnswer: correctAnswer
          };
          
          // Try to get enhanced AI feedback
          const verbInfo = `${currentVerb.kanji} (${currentVerb.hiragana}) - ${currentVerb.meaning}`;
          const formName = currentVerb.form.name;
          const verbType = currentVerb.type;
          const verbHiragana = currentVerb.hiragana;
          
          console.log('📝 Requesting AI feedback for:', verbInfo, formName);
          
          const feedbackToken = questionSerial;
          getEnhancedAIFeedback(verbInfo, formName, userAnswer, correctAnswer, verbType, verbHiragana).then(aiFeedback => {
            if (feedbackToken !== questionSerial) return;   // learner already moved on
            let explanation;
            
            if (aiFeedback) {
              // Use AI-generated feedback with enhanced styling
              console.log('✅ Using AI feedback');
              explanation = `<div style="background: #f0f9ff; border-left: 4px solid #3b82f6; padding: 20px; border-radius: 8px; margin: 10px 0; line-height: 1.8; color: #1e293b;">
                <div style="font-size: 1.1rem; font-weight: 600; margin-bottom: 10px; color: #1e40af;">📚 Conju explains:</div>
                ${aiFeedback.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>')}
              </div>`;
              
              // Show "More Examples" button
              document.getElementById('more-examples-btn').style.display = 'inline-block';
            } else {
              // The rule-based explanation is already on screen; keep it and
              // just clear the "still writing" line.
              console.log('⚠️ AI not available, keeping rule-based explanation');
              document.getElementById('more-examples-btn').style.display = 'none';
              explanation = null;
            }

            const pending = document.getElementById('ai-pending');
            if (pending) pending.remove();

            // After 2-3 failures, show a worked example
            const worked = (consecutiveFailures >= 2 && Math.random() < 0.7)
              ? generateWorkedExample(currentVerb, currentVerb.form) : '';

            if (explanation) {
              explanationEl.innerHTML = explanation + worked;
            } else if (worked) {
              explanationEl.insertAdjacentHTML('beforeend', worked);
            }
          }).catch(error => {
            // If AI fails completely, the rule-based explanation is already
            // on screen — just drop the "still writing" line.
            console.error('❌ AI feedback error:', error);
            if (feedbackToken !== questionSerial) return;
            const pending = document.getElementById('ai-pending');
            if (pending) pending.remove();

            if (consecutiveFailures >= 2 && Math.random() < 0.7) {
              explanationEl.insertAdjacentHTML('beforeend', generateWorkedExample(currentVerb, currentVerb.form));
            }
            document.getElementById('more-examples-btn').style.display = 'none';
          });
        }
      }
    }

    function handleKeyPress(event) {
      if (event.key === 'Enter' && !showAnswer) {
        const input = document.getElementById('answer-input').value.trim();
        if (input === '') return; // Don't submit empty answers
        checkAnswer();
      }
    }

    // Once an answer has been checked the input is disabled, so Enter can't
    // reach it any more — listen at the document instead. This is what lets
    // you answer → Enter → answer → Enter without touching the mouse.
    if (document.getElementById('page-conjugator')) {
      document.addEventListener('keydown', function (e) {
        if (e.key !== 'Enter' || !showAnswer) return;
        // Don't hijack Enter while a dialog or the report modal is open.
        const modal = document.getElementById('mistake-report-modal');
        if (modal && modal.classList.contains('active')) return;
        const summary = document.getElementById('session-summary');
        if (summary && summary.style.display === 'block') return;
        if (typeof conjInfoOpen === 'function' && conjInfoOpen()) return;
        // Sitting on the verb-type checkpoint: Enter goes straight on to the
        // conjugation instead of waiting out the countdown.
        if (typeIdentificationAnswer && !isTypeIdentificationQuiz) {
          e.preventDefault();
          stopTypeQuizCountdown();
          checkAnswer();
          return;
        }
        const nextBtn = document.getElementById('next-btn');
        if (!nextBtn || nextBtn.style.display === 'none') return;
        e.preventDefault();
        generateNewQuestion();
      });
    }
    
    // ---- Verb-type question: carry on by itself ----------------------------
    // Getting the type right is a checkpoint, not a result worth sitting on.
    // It moves to the conjugation on its own after ten seconds; Enter or the
    // button gets there sooner.
    let typeQuizTimer = null;
    let typeQuizTick = null;
    const TYPE_QUIZ_SECONDS = 10;

    function stopTypeQuizCountdown() {
      if (typeQuizTimer) { clearTimeout(typeQuizTimer); typeQuizTimer = null; }
      if (typeQuizTick) { clearInterval(typeQuizTick); typeQuizTick = null; }
    }

    function startTypeQuizCountdown() {
      stopTypeQuizCountdown();
      let left = TYPE_QUIZ_SECONDS;

      function paint() {
        const note = document.getElementById('type-quiz-continue-note');
        if (note) {
          note.textContent = ct('type_quiz_continue', 'Now conjugate it — continuing in {n}s.')
            .replace('{n}', left);
        }
        paintCheckButton(left);
      }
      paint();

      typeQuizTick = setInterval(function () {
        left--;
        // Only stop counting — the advance itself is the timeout below.
        if (left <= 0) { clearInterval(typeQuizTick); typeQuizTick = null; return; }
        paint();
      }, 1000);

      typeQuizTimer = setTimeout(function () {
        stopTypeQuizCountdown();
        // Only advance if we're still sitting on the same checkpoint.
        if (showAnswer && typeIdentificationAnswer && !isTypeIdentificationQuiz) {
          checkAnswer();
        }
      }, TYPE_QUIZ_SECONDS * 1000);
    }

    // ---- Session summary ---------------------------------------------------
    function formLabel(key) {
      const f = forms.find(function (x) { return x.key === key; });
      return f ? f.name : key;
    }

    function statTile(value, label) {
      return '<div class="summary-tile"><div class="summary-value">' + value +
             '</div><div class="summary-label">' + label + '</div></div>';
    }

    function setQuestionAreaVisible(visible) {
      const area = document.getElementById('question-area');
      if (area) area.style.display = visible ? 'block' : 'none';
    }

    function showSessionSummary() {
      const panel = document.getElementById('session-summary');
      if (!panel) return;

      const answered = session.answered;
      const skipped = session.skipped;
      const scored = Math.max(answered - skipped, 0);
      // With nothing scored (a round of pure "show me"), a 0% is misleading.
      const pct = scored ? Math.round((session.correct / scored) * 100) : null;

      // Which form cost the most this session?
      let worstForm = null, worstCount = 0;
      Object.keys(session.formMisses).forEach(function (k) {
        if (session.formMisses[k] > worstCount) { worstCount = session.formMisses[k]; worstForm = k; }
      });

      const openWeak = Object.keys(weakSpots).length;

      let html = '<div class="summary-head">' + ct('sess_done', 'Session complete') + '</div>';
      html += '<div class="summary-grid">';
      html += statTile(pct === null ? '—' : pct + '%', ct('sess_accuracy', 'Accuracy'));
      html += statTile(session.correct + ' / ' + scored, ct('sess_correct', 'Correct'));
      html += statTile(String(bestStreak), ct('sess_best_streak', 'Best streak'));
      if (skipped) html += statTile(String(skipped), ct('sess_skipped', 'Answers shown'));
      html += '</div>';

      if (worstForm) {
        html += '<div class="summary-note">' + ct('sess_weakest', 'Most missed this session:') +
                ' <strong>' + formLabel(worstForm) + '</strong> (' + worstCount + ')</div>';
      }
      html += '<div class="summary-note">' +
              (openWeak
                ? ct('sess_queue', 'Queued to come back around:') + ' <strong>' + openWeak + '</strong>'
                : ct('sess_queue_clear', 'Nothing outstanding — your review queue is clear.')) +
              '</div>';
      html += '<div class="summary-actions">' +
              '<button class="check-btn primary" style="margin:0;" onclick="continueSession()">' +
                ct('sess_again', 'Another round →') + '</button>' +
              '<button class="skip-btn" style="margin:0;" onclick="showMistakeReport()">' +
                ct('view_report', '📊 View Report') + '</button>' +
              '</div>';

      panel.innerHTML = html;
      panel.style.display = 'block';
      setQuestionAreaVisible(false);
      showAnswer = true;   // keep Enter from jumping to a new question
    }

    function continueSession() {
      session = { answered: 0, correct: 0, skipped: 0, formMisses: {} };
      const panel = document.getElementById('session-summary');
      if (panel) { panel.style.display = 'none'; panel.innerHTML = ''; }
      setQuestionAreaVisible(true);
      updateScoreDisplay();
      generateNewQuestion();
    }

    function skipQuestion() {
      stopTypeQuizCountdown();
      // Track skipped questions. Skipping has never counted against your
      // score — it just breaks the streak and shows you the answer.
      stats.skipped++;
      session.skipped++;
      session.answered++;
      streak = 0;
      updateScoreDisplay();
      
      // Get correct answer - check if this is a type identification quiz
      let correctAnswer;
      if (isTypeIdentificationQuiz) {
        correctAnswer = currentVerb.type;
      } else {
        correctAnswer = conjugateVerb(currentVerb, currentVerb.form);
      }
      
      // Show feedback (no penalty - doesn't count as wrong)
      const feedbackResult = document.getElementById('feedback-result');
      feedbackResult.classList.remove('correct', 'incorrect');
      feedbackResult.classList.add('visible');
      feedbackResult.style.background = 'linear-gradient(135deg, #fff8e1 0%, #fffde7 100%)';
      feedbackResult.style.borderLeftColor = '#f9a825';
      
      document.getElementById('feedback-title').textContent = '⏭️ Skipped';
      document.getElementById('feedback-answer').textContent = correctAnswer;
      document.getElementById('feedback-explanation').innerHTML = 
        `<div style="color: var(--text-light); margin-top: 0.5rem;">` +
        `No penalty — review the answer and try similar questions to build confidence!</div>`;
      document.getElementById('feedback-explanation').style.display = 'block';
      
      // Disable input
      document.getElementById('answer-input').disabled = true;
      
      // Switch buttons
      document.getElementById('check-btn').style.display = 'none';
      document.getElementById('skip-btn').style.display = 'none';
      document.getElementById('next-btn').style.display = 'block';
      
      showAnswer = true;
    }

    // Enable/disable check button based on input, and convert romaji to kana
    // as it's typed so the Conjugator works without a Japanese IME.
    var answerInputEl = document.getElementById('answer-input');
    var conjKana = null;
    if (answerInputEl) {
      conjKana = attachKanaInput(answerInputEl, {
        // The verb-type quiz wants Latin words ("godan"), so leave it alone.
        enabled: function () { return !isTypeIdentificationQuiz && romajiInputEnabled(); },
        onInput: function () {
          var btn = document.getElementById('check-btn');
          if (btn) btn.disabled = this.value.trim() === '';
        }
      });
    }

    function toggleRomajiInput() {
      setRomajiInput(!romajiInputEnabled());
      paintRomajiToggle();
      const el = document.getElementById('answer-input');
      if (el && !el.disabled) el.focus();
    }

    function paintRomajiToggle() {
      const btn = document.getElementById('romaji-toggle');
      if (!btn) return;
      const on = romajiInputEnabled();
      btn.textContent = on ? 'あ' : 'A';
      btn.classList.toggle('off', !on);
      btn.title = (on
        ? ct('romaji_on_title', 'Romaji typing is on — type ikanai, get いかない. Click to turn off.')
        : ct('romaji_off_title', 'Romaji typing is off — type with your own Japanese keyboard. Click to turn on.'))
        + '  (Alt+R)';
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    }

    function setTypeQuiz(on) {
      try { localStorage.setItem('katsuyo-type-quiz', on ? 'on' : 'off'); } catch (e) {}
    }

    // ---- Shortcuts & options dialog ---------------------------------------
    // Same ⓘ chip and overlay the Kana Drill uses, so the two pages explain
    // themselves the same way.
    function conjInfoRows() {
      const rows = (typeof I18N !== 'undefined' && I18N[LANG] && I18N[LANG].conj_info_rows)
        || (typeof I18N !== 'undefined' && I18N.en && I18N.en.conj_info_rows);
      return Array.isArray(rows) ? rows : [];
    }

    // `peeking` = opened by holding Alt+I, so it closes again on release.
    // Opened from the chip instead, it stays until it's dismissed.
    let conjInfoPeeking = false;

    function openConjInfo(peeking) {
      const box = document.getElementById('conj-info-content');
      if (!box) return;
      conjInfoPeeking = !!peeking;
      document.getElementById('conj-info-title').textContent =
        ct('conj_info_title', 'Shortcuts & options');
      document.getElementById('conj-info-sub').textContent =
        ct('conj_info_sub', 'Keyboard shortcuts and what the controls on this page do.');
      box.innerHTML = '';
      conjInfoRows().forEach(function (row) {
        const r = document.createElement('div');
        r.className = 'info-row';
        const k = document.createElement('div');
        k.className = 'info-keys';
        k.textContent = row[0];
        const d = document.createElement('div');
        d.className = 'info-desc';
        d.textContent = row[1];
        r.appendChild(k); r.appendChild(d);
        box.appendChild(r);
      });
      document.getElementById('conj-info-overlay').classList.add('show');
    }

    function closeConjInfo() {
      const o = document.getElementById('conj-info-overlay');
      if (o) o.classList.remove('show');
      conjInfoPeeking = false;
    }

    function conjInfoOpen() {
      const o = document.getElementById('conj-info-overlay');
      return !!(o && o.classList.contains('show'));
    }

    if (document.getElementById('page-conjugator')) {
      // Close on click outside the card
      const infoOverlay = document.getElementById('conj-info-overlay');
      if (infoOverlay) {
        infoOverlay.addEventListener('click', function (e) {
          if (e.target === this) closeConjInfo();
        });
      }

      // Release either Alt or I and the peek ends. Window blur counts as a
      // release too — Alt-tabbing away must not leave the dialog stuck open.
      function endPeek() { if (conjInfoPeeking) closeConjInfo(); }
      document.addEventListener('keyup', function (e) {
        const k = (e.key || '').toLowerCase();
        if (k === 'i' || k === 'alt' || !e.altKey) endPeek();
      });
      window.addEventListener('blur', endPeek);

      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && conjInfoOpen()) { closeConjInfo(); return; }
        if (!e.altKey || e.ctrlKey || e.metaKey) return;

        const key = (e.key || '').toLowerCase();
        // Alt+I is hold-to-peek, like the Kana Drill's chart keys: hold to
        // read it, let go and it's gone. e.repeat guards the key-repeat storm
        // that holding a key produces.
        if (key === 'i') {
          e.preventDefault();
          if (!e.repeat && !conjInfoOpen()) openConjInfo(true);
          return;
        }
        if (conjInfoOpen()) return;   // the rest are for the question, not the dialog

        if (key === 'r') {
          e.preventDefault();
          toggleRomajiInput();
          showToast(romajiInputEnabled()
            ? ct('romaji_toast_on', 'Romaji typing on — ikanai → いかない')
            : ct('romaji_toast_off', 'Romaji typing off — use your own Japanese keyboard'), 'success');
        } else if (key === 'h') {
          e.preventDefault();
          if (typeof toggleHint === 'function' && !showAnswer) toggleHint();
        } else if (key === 's') {
          e.preventDefault();
          const skipBtn = document.getElementById('skip-btn');
          if (skipBtn && skipBtn.style.display !== 'none' && !showAnswer) skipQuestion();
        }
      });
    }

    // Learners with a real Japanese IME can switch the helper off.
    function romajiInputEnabled() {
      try { return localStorage.getItem('katsuyo-romaji-input') !== 'off'; }
      catch (e) { return true; }
    }

    function setRomajiInput(on) {
      try { localStorage.setItem('katsuyo-romaji-input', on ? 'on' : 'off'); } catch (e) {}
      // One place decides what the box says it wants — it has three modes,
      // and romaji on/off is only two of them.
      updateAnswerPlaceholder();
    }

    // ============ VERB LIST FUNCTIONS ============
    function showVerbList(type) {
      // Update tab buttons
      document.querySelectorAll('.verb-list-tab').forEach(tab => {
        tab.classList.remove('active');
      });
      document.getElementById('verb-tab-' + type).classList.add('active');
      
      // Update content
      document.querySelectorAll('.verb-list-content').forEach(content => {
        content.classList.remove('active');
      });
      document.getElementById('verb-list-' + type).classList.add('active');
      
      // Show/hide irregular explanation
      const irregularExplanation = document.getElementById('irregular-explanation');
      if (irregularExplanation) {
        irregularExplanation.style.display = (type === 'irregular') ? 'block' : 'none';
      }
    }

    // JLPT badge colors
    const jlptColors = {
      'N5': { bg: '#dcfce7', text: '#16a34a', border: '#22c55e' },
      'N4': { bg: '#fef3c7', text: '#d97706', border: '#f59e0b' },
      'N3': { bg: '#fee2e2', text: '#dc2626', border: '#ef4444' }
    };

    // Current filter state
    let currentJLPTFilter = 'all';
    let currentSearchTerm = '';

    function createVerbCard(verb) {
      const colors = jlptColors[verb.jlpt];
      return `
        <div class="verb-kanji jp">${verb.kanji}</div>
        <div class="verb-reading">${verb.hiragana} (${verb.romaji})</div>
        <div class="verb-meaning">${verb.meaning}</div>
        <div class="jlpt-badge" style="position: absolute; top: 0.75rem; right: 0.75rem; padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.7rem; font-weight: 700; background: ${colors.bg}; color: ${colors.text}; border: 1px solid ${colors.border};">${verb.jlpt}</div>
      `;
    }

    function populateVerbLists() {
      const types = ['godan', 'ichidan', 'suru', 'irregular'];
      
      types.forEach(type => {
        const container = document.getElementById('verb-list-' + type);
        container.innerHTML = '';
        
        verbs[type].forEach(verb => {
          const verbItem = document.createElement('div');
          verbItem.className = 'verb-item';
          verbItem.setAttribute('data-jlpt', verb.jlpt);
          verbItem.setAttribute('data-kanji', verb.kanji);
          verbItem.setAttribute('data-hiragana', verb.hiragana);
          verbItem.setAttribute('data-romaji', verb.romaji);
          verbItem.setAttribute('data-meaning', verb.meaning);
          verbItem.innerHTML = createVerbCard(verb);
          container.appendChild(verbItem);
        });
      });
    }

    function filterVerbs() {
      currentSearchTerm = document.getElementById('verb-search').value.toLowerCase().trim();
      applyFilters();
    }

    function filterByJLPT(level) {
      currentJLPTFilter = level;
      
      // Update button styles
      document.querySelectorAll('.jlpt-filter-btn').forEach(btn => {
        btn.classList.remove('active');
        const btnLevel = btn.id.replace('jlpt-filter-', '');
        if (btnLevel === 'all') {
          btn.style.background = 'white';
          btn.style.color = 'var(--ink)';
        } else {
          const colors = jlptColors[btnLevel];
          btn.style.background = 'white';
          btn.style.color = colors.border;
        }
      });
      
      const activeBtn = document.getElementById('jlpt-filter-' + level);
      activeBtn.classList.add('active');
      if (level === 'all') {
        activeBtn.style.background = 'var(--ink)';
        activeBtn.style.color = 'white';
      } else {
        const colors = jlptColors[level];
        activeBtn.style.background = colors.border;
        activeBtn.style.color = 'white';
      }
      
      applyFilters();
    }

    function applyFilters() {
      let totalVisible = 0;
      
      document.querySelectorAll('.verb-item').forEach(item => {
        const jlpt = item.getAttribute('data-jlpt');
        const kanji = item.getAttribute('data-kanji').toLowerCase();
        const hiragana = item.getAttribute('data-hiragana').toLowerCase();
        const romaji = item.getAttribute('data-romaji').toLowerCase();
        const meaning = item.getAttribute('data-meaning').toLowerCase();
        
        // Check JLPT filter
        const passesJLPT = currentJLPTFilter === 'all' || jlpt === currentJLPTFilter;
        
        // Check search filter
        const passesSearch = currentSearchTerm === '' || 
          kanji.includes(currentSearchTerm) ||
          hiragana.includes(currentSearchTerm) ||
          romaji.includes(currentSearchTerm) ||
          meaning.includes(currentSearchTerm);
        
        if (passesJLPT && passesSearch) {
          item.style.display = '';
          totalVisible++;
        } else {
          item.style.display = 'none';
        }
      });
      
      // Update results count
      const countEl = document.getElementById('search-results-count');
      if (currentSearchTerm || currentJLPTFilter !== 'all') {
        countEl.style.display = 'block';
        countEl.textContent = `Showing ${totalVisible} verb${totalVisible !== 1 ? 's' : ''}`;
      } else {
        countEl.style.display = 'none';
      }
    }

    function showToast(message, type) {
      var toast = document.getElementById('toast');
      toast.textContent = message;
      toast.className = 'toast ' + (type || '');
      toast.classList.add('visible');
      setTimeout(function() {
        toast.classList.remove('visible');
      }, 2000);
    }
    
    // ============ CONTACT FORM ============
    function handleContactSubmit(event) {
      event.preventDefault();
      var form = document.getElementById('contact-form');
      var formData = new FormData(form);
      var submitBtn = form.querySelector('button[type="submit"]');
      var originalText = submitBtn.textContent;
      
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
      
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        if (data.success) {
          showToast('✓ Message sent successfully!', 'success');
          form.reset();
        } else {
          showToast('Failed to send. Please try again.', 'warning');
        }
      })
      .catch(function(error) {
        showToast('Failed to send. Please try again.', 'warning');
      })
      .finally(function() {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      });
      
      return false;
    }
    
    function resetScoreNow() {
      if (stats.total === 0) {
        showToast('Nothing to reset!', 'warning');
        return;
      }
      // Reset the stats
      stats = { correct: 0, total: 0, skipped: 0 };
      mistakeLog = [];
      saveStats();
      updateScoreDisplay();
      updateReportButton();
      showToast('✓ Score reset!', 'success');
    }

    // ============ DATE DOJO SYSTEM ============
    // ---------- reading counters-data.js ----------
    // counters.html and the Date Dojo share one set of readings. These three
    // helpers shape that file into what the Dojo expects. If it has not been
    // loaded (any page other than the Dojo and the Counters page), they return
    // empty objects and the counter question type simply has nothing to draw.
    function dojoCounterSource() {
      return (typeof COUNTER_DATA !== 'undefined' && COUNTER_DATA) ? COUNTER_DATA : null;
    }

    function dojoNumbersFrom() {
      var D = dojoCounterSource();
      return D ? D.NUM : {};
    }

    // Every reading 1-10 for one counter, irregulars included.
    function dojoReadingsFrom(kanji) {
      var D = dojoCounterSource();
      if (!D) return {};
      var c = D.COUNTERS.filter(function (x) { return x.k === kanji; })[0];
      if (!c) return {};
      var out = {};
      for (var n = 1; n <= 10; n++) {
        out[n] = c.all ? c.all[n] : ((c.irr && c.irr[n]) || (D.NUM[n] + c.base));
      }
      return out;
    }

    function dojoCountersFrom() {
      var D = dojoCounterSource();
      if (!D) return {};
      var out = {};
      D.COUNTERS.forEach(function (c) {
        if (!c.dojo) return;
        out[c.k] = {
          base: c.base,
          en: c.what.en,
          example: c.dojo.noun,
          exampleKana: c.dojo.nounKana,
          exampleEn: c.dojo.nounEn,
          animate: !!c.dojo.animate,
          irr: c.irr || {}
        };
      });
      return out;
    }

    var dojoData = {
      dates: {
        1: 'ついたち', 2: 'ふつか', 3: 'みっか', 4: 'よっか', 5: 'いつか',
        6: 'むいか', 7: 'なのか', 8: 'ようか', 9: 'ここのか', 10: 'とおか',
        11: 'じゅういちにち', 12: 'じゅうににち', 13: 'じゅうさんにち', 
        14: 'じゅうよっか', 15: 'じゅうごにち', 16: 'じゅうろくにち',
        17: 'じゅうななにち', 18: 'じゅうはちにち', 19: 'じゅうくにち', 
        20: 'はつか', 21: 'にじゅういちにち', 22: 'にじゅうににち',
        23: 'にじゅうさんにち', 24: 'にじゅうよっか', 25: 'にじゅうごにち',
        26: 'にじゅうろくにち', 27: 'にじゅうななにち', 28: 'にじゅうはちにち',
        29: 'にじゅうくにち', 30: 'さんじゅうにち', 31: 'さんじゅういちにち'
      },
      months: {
        1: 'いちがつ', 2: 'にがつ', 3: 'さんがつ', 4: 'しがつ',
        5: 'ごがつ', 6: 'ろくがつ', 7: 'しちがつ', 8: 'はちがつ',
        9: 'くがつ', 10: 'じゅうがつ', 11: 'じゅういちがつ', 12: 'じゅうにがつ'
      },
      weekdays: {
        0: { jp: 'にちようび', kanji: '日曜日', en: 'Sunday', short: 'にち' },
        1: { jp: 'げつようび', kanji: '月曜日', en: 'Monday', short: 'げつ' },
        2: { jp: 'かようび', kanji: '火曜日', en: 'Tuesday', short: 'か' },
        3: { jp: 'すいようび', kanji: '水曜日', en: 'Wednesday', short: 'すい' },
        4: { jp: 'もくようび', kanji: '木曜日', en: 'Thursday', short: 'もく' },
        5: { jp: 'きんようび', kanji: '金曜日', en: 'Friday', short: 'きん' },
        6: { jp: 'どようび', kanji: '土曜日', en: 'Saturday', short: 'ど' }
      },
      relative: { '-2': 'おととい', '-1': 'きのう', '0': 'きょう', '1': 'あした', '2': 'あさって', '3': 'しあさって' },
      numbers: {
        100: 'ひゃく', 200: 'にひゃく', 300: 'さんびゃく', 400: 'よんひゃく',
        500: 'ごひゃく', 600: 'ろっぴゃく', 700: 'ななひゃく', 800: 'はっぴゃく',
        900: 'きゅうひゃく', 1000: 'せん', 2000: 'にせん', 3000: 'さんぜん',
        4000: 'よんせん', 5000: 'ごせん', 6000: 'ろくせん', 7000: 'ななせん',
        8000: 'はっせん', 9000: 'きゅうせん', 10000: 'いちまん', 20000: 'にまん',
        50000: 'ごまん', 100000: 'じゅうまん', 1000000: 'ひゃくまん', 100000000: 'いちおく'
      },
      // ---- counters --------------------------------------------------------
      // Derived from counters-data.js, which the Counters page also reads.
      // These used to be a second copy living here, free to drift out of step
      // with the reference page — fix a reading in one and the other silently
      // went on teaching the old one. Now there is one source.
      //
      // Only the counters carrying a `dojo` field come through, because the
      // Dojo needs a noun to build 鉛筆が三本あります around. Adding another is
      // one `dojo:` line in counters-data.js.
      counters: dojoCountersFrom(),
      // Counting 1-10 in the native series, used by 人 and as a fallback.
      plainCount: dojoNumbersFrom(),
      // 年 as a duration counter. Calendar years come from the number engine
      // and are perfectly regular; durations are not.
      yearCount: dojoReadingsFrom('年'),
      // Japanese era years. The offset is the year BEFORE the era began, so
      // 2026 - 2018 = 令和8年. Year 1 of any era is 元年, never 一年.
      //
      // Transition years are deliberately absent from the ranges below: 2019
      // was 平成31年 until April 30th and 令和元年 from May 1st, and 1989 was
      // 昭和64年 for seven days before becoming 平成元年. Asking about them
      // has two right answers, so the generator never picks one.
      eras: [
        { jp: '令和', en: 'Reiwa',  offset: 2018, from: 2020, to: 2035 },
        { jp: '平成', en: 'Heisei', offset: 1988, from: 1990, to: 2018 },
        { jp: '昭和', en: 'Showa',  offset: 1925, from: 1927, to: 1988 }
      ],
      // 時 goes to twelve on a clock; the shared data stops at ten, so the last
      // two are appended. They are perfectly regular.
      hours: (function () {
        var h = dojoReadingsFrom('時');
        h[11] = 'じゅういちじ'; h[12] = 'じゅうにじ';
        return h;
      })(),
      // 分 alternates between ふん and ぷん by the preceding sound.
      minuteUnits: dojoReadingsFrom('分'),
      questionTypes: {
        currentDate: { jp: '今日の日付', en: "Today's date" },
        currentMonth: { jp: '今の月', en: 'Current month' },
        currentWeekday: { jp: '今日の曜日', en: "Today's weekday" },
        futureDate: { jp: '未来の日付', en: 'Future date' },
        pastDate: { jp: '過去の日付', en: 'Past date' },
        futureWeekday: { jp: '未来の曜日', en: 'Future weekday' },
        pastWeekday: { jp: '過去の曜日', en: 'Past weekday' },
        relativeDay: { jp: '相対的な日', en: 'Relative day' },
        number: { jp: '数字', en: 'Number' },
        dateFromJapanese: { jp: '読み→日付', en: 'Reading to Date' },
        dateReading: { jp: '日付の読み', en: 'Date reading' },
        weekdayReading: { jp: '曜日の読み', en: 'Weekday reading' },
        numberReading: { jp: '数字の読み', en: 'Number reading' },
        weekdayName: { jp: '曜日の名前', en: 'Weekday name' },
        weekdayNameFull: { jp: '曜日（〜ようび）', en: 'Weekday (full)' },
        // New: the two topics the page is named after but never covered, plus
        // numbers that are actually worth practising.
        timeReading: { jp: '時間の読み', en: 'Time reading' },
        counterReading: { jp: '助数詞', en: 'Counters' },
        bigNumber: { jp: '大きい数字', en: 'Large numbers' },
        calendarYear: { jp: '西暦', en: 'Calendar year' },
        yearDuration: { jp: '〜年間', en: 'Years (duration)' },
        eraYear: { jp: '元号', en: 'Japanese era year' },
        dateToEnglish: { jp: '英語で（日付）', en: 'Date \u2192 English' },
        weekdayToEnglish: { jp: '英語で（曜日）', en: 'Weekday \u2192 English' }
      },
      // Which questions are the whole point. Weighted up, because everything
      // else in this page is mechanical once you know the pattern.
      irregularDates: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 20, 24],
      kanjiDict: {
        // Everything that can appear in a question, so nothing on screen is
        // unreadable. parseKanjiText matches longest-first up to 3 characters,
        // so compounds must be listed before their parts.
        '日本語': { reading: 'にほんご', en: 'Japanese (language)' },
        '英語': { reading: 'えいご', en: 'English (language)' },
        '読': { reading: 'よ', en: 'to read' },
        '何': { reading: 'なん', en: 'what' },
        '年': { reading: 'ねん', en: 'year' },
        '何年': { reading: 'なんねん', en: 'what year' },
        '時': { reading: 'じ', en: "o'clock" },
        '分': { reading: 'ふん', en: 'minute' },
        '何時': { reading: 'なんじ', en: 'what time' },
        '本': { reading: 'ほん', en: 'counter: long thin things' },
        '個': { reading: 'こ', en: 'counter: small round things' },
        '枚': { reading: 'まい', en: 'counter: flat things' },
        '人': { reading: 'にん', en: 'counter: people' },
        '匹': { reading: 'ひき', en: 'counter: small animals' },
        '冊': { reading: 'さつ', en: 'counter: bound things' },
        '台': { reading: 'だい', en: 'counter: machines and vehicles' },
        '車': { reading: 'くるま', en: 'car' },
        '杯': { reading: 'はい', en: 'counter: cups and glasses' },
        '鉛筆': { reading: 'えんぴつ', en: 'pencil' },
        '猫': { reading: 'ねこ', en: 'cat' },
        '紙': { reading: 'かみ', en: 'paper' },
        '学生': { reading: 'がくせい', en: 'student' },
        '西暦': { reading: 'せいれき', en: 'Western calendar year' },
        '令和': { reading: 'れいわ', en: 'Reiwa era (2019\u2013)' },
        '平成': { reading: 'へいせい', en: 'Heisei era (1989\u20132019)' },
        '昭和': { reading: 'しょうわ', en: 'Showa era (1926\u20131989)' },
        '元年': { reading: 'がんねん', en: 'first year of an era' },
        '間': { reading: 'かん', en: 'duration' },
        '勉強': { reading: 'べんきょう', en: 'study' },
        // Words that only ever appear in the verdict and hint boxes — the one
        // place on the page where kanji had no tooltip at all.
        '期待': { reading: 'きたい', en: 'expected' },
        '答え': { reading: 'こたえ', en: 'answer' },
        '正しい': { reading: 'ただしい', en: 'correct' },
        '正解': { reading: 'せいかい', en: 'correct!' },
        'ざんねん': { reading: 'ざんねん', en: 'not quite' },
        '惜しい': { reading: 'おしい', en: 'so close' },
        '現在': { reading: 'げんざい', en: 'present' },
        '過去': { reading: 'かこ', en: 'past' },
        '惜': { reading: 'お', en: 'so close' },
        '過去形': { reading: 'かこけい', en: 'past tense' },
        '現在形': { reading: 'げんざいけい', en: 'present tense' },
        '日付': { reading: 'ひづけ', en: 'date' },
        '読み方': { reading: 'よみかた', en: 'reading' },
        '不要': { reading: 'ふよう', en: 'not needed' },
        '今日': { reading: 'きょう', en: 'today' },
        '何日': { reading: 'なんにち', en: 'what day' },
        '何月': { reading: 'なんがつ', en: 'what month' },
        '何曜日': { reading: 'なんようび', en: 'what weekday' },
        '日後': { reading: 'にちご', en: 'days later' },
        '日前': { reading: 'にちまえ', en: 'days ago' },
        '日付': { reading: 'ひづけ', en: 'date' },
        '曜日': { reading: 'ようび', en: 'weekday' },
        '未来': { reading: 'みらい', en: 'future' },
        '過去': { reading: 'かこ', en: 'past' },
        '数字': { reading: 'すうじ', en: 'number' },
        '今': { reading: 'いま', en: 'now' },
        '日': { reading: 'にち', en: 'day' },
        '何': { reading: 'なに', en: 'what' },
        '月': { reading: 'がつ', en: 'month' },
        '曜': { reading: 'よう', en: 'weekday' },
        '前': { reading: 'まえ', en: 'before' },
        '後': { reading: 'あと', en: 'after' }
      }
    };

    // Build hiragana dictionary for tooltips
    var dojoHiraganaDict = {};
    Object.keys(dojoData.dates).forEach(function(k) {
      var suffix = k == 1 ? 'st' : k == 2 ? 'nd' : k == 3 ? 'rd' : 'th';
      dojoHiraganaDict[dojoData.dates[k]] = k + suffix;
    });
    var monthNames = ['','January','February','March','April','May','June','July','August','September','October','November','December'];
    Object.keys(dojoData.months).forEach(function(k) {
      dojoHiraganaDict[dojoData.months[k]] = monthNames[k];
    });
    Object.keys(dojoData.weekdays).forEach(function(k) {
      dojoHiraganaDict[dojoData.weekdays[k].jp] = dojoData.weekdays[k].en;
      dojoHiraganaDict[dojoData.weekdays[k].short] = dojoData.weekdays[k].en; // Also add short forms
    });
    var relativeLabels = {'-2': '2 days ago', '-1': 'yesterday', '0': 'today', '1': 'tomorrow', '2': 'day after tomorrow', '3': '3 days from now'};
    Object.keys(dojoData.relative).forEach(function(k) {
      dojoHiraganaDict[dojoData.relative[k]] = relativeLabels[k];
    });
    Object.keys(dojoData.numbers).forEach(function(k) {
      dojoHiraganaDict[dojoData.numbers[k]] = Number(k).toLocaleString();
    });

    // =====================================================================
    // Numbers, generated rather than listed.
    //
    // The old pool was 24 hard-coded round numbers — 100, 500, 10000 — which
    // is both too small to stay interesting and too easy to be worth drilling.
    // Nobody struggles with ひゃく. The difficulty is in the sound changes:
    // 300 is さんびゃく not さんひゃく, 600 ろっぴゃく, 800 はっぴゃく,
    // 3000 さんぜん, 8000 はっせん. Building the reading from the digits gives
    // every number up to 99,999 with those rules applied exactly once, here.
    // =====================================================================
    // =====================================================================
    // Question shapes.
    //
    // The old prompts trailed off — "100,000,000 は？" never says whether to
    // read it, say it, or translate it. Every question now ends in one of four
    // fixed patterns, so after a couple of questions you stop reading the
    // wrapper and just answer.
    // =====================================================================
    function dojoAskRead(subject) {           // 〜は何と読みますか？
      return subject + 'は何と読みますか？';
    }
    function dojoAskInJapanese(subject) {     // 〜は日本語で何ですか？
      return subject + 'は日本語で何ですか？';
    }
    function dojoAskInEnglish(subject) {      // 〜は英語で何ですか？
      return subject + 'は英語で何ですか？';
    }

    // =====================================================================
    // Dates that carry their own premise.
    //
    // "5日後は何日ですか？" needs you to already know today's date, so it tests
    // calendar arithmetic as much as Japanese — and the answer cannot be
    // checked from the question alone. Stating the premise fixes both, and
    // frees the premise from being today: any of the 366 possible dates works,
    // which takes the pool from 14 questions to over ten thousand.
    // =====================================================================
    var DOJO_MONTH_EN = ['January','February','March','April','May','June',
                         'July','August','September','October','November','December'];

    function dojoDaysInMonth(year, month) {   // month is 1-12
      // Day 0 of the next month is the last day of this one — which is also
      // what keeps 2月30日 from ever being generated, and makes leap years
      // fall out for free.
      return new Date(year, month, 0).getDate();
    }

    // A random real date. The year matters only so February has the right
    // length; it is never shown.
    function dojoRandomDate() {
      var year = 2028;                        // a leap year, so 2月29日 is reachable
      var month = 1 + Math.floor(Math.random() * 12);
      var day = 1 + Math.floor(Math.random() * dojoDaysInMonth(year, month));
      return new Date(year, month - 1, day);
    }

    function dojoShiftDate(date, days) {
      var d = new Date(date.getTime());
      d.setDate(d.getDate() + days);          // rolls months and years correctly
      return d;
    }

    function dojoPlural(n, word) { return n + ' ' + word + (n === 1 ? '' : 's'); }

    function dojoOrdinal(n) {
      if (n % 100 >= 11 && n % 100 <= 13) return 'th';
      return ['th','st','nd','rd'][n % 10] || 'th';
    }

    function dojoDateJp(d) {
      return (d.getMonth() + 1) + '月' + d.getDate() + '日';
    }
    function dojoDateEn(d) {
      return DOJO_MONTH_EN[d.getMonth()] + ' ' + d.getDate();
    }

    var DOJO_DIGITS = ['', 'いち', 'に', 'さん', 'よん', 'ご', 'ろく', 'なな', 'はち', 'きゅう'];
    var DOJO_HUNDREDS = { 1:'ひゃく', 2:'にひゃく', 3:'さんびゃく', 4:'よんひゃく', 5:'ごひゃく',
                          6:'ろっぴゃく', 7:'ななひゃく', 8:'はっぴゃく', 9:'きゅうひゃく' };
    var DOJO_THOUSANDS = { 1:'せん', 2:'にせん', 3:'さんぜん', 4:'よんせん', 5:'ごせん',
                           6:'ろくせん', 7:'ななせん', 8:'はっせん', 9:'きゅうせん' };

    function dojoNumberToKana(n) {
      n = Math.floor(Number(n) || 0);
      if (n === 0) return 'ゼロ';
      if (n < 0) return '';
      var out = '';
      var man = Math.floor(n / 10000);
      if (man) { out += dojoUnder10000(man) + 'まん'; n -= man * 10000; }
      out += dojoUnder10000(n);
      return out;
    }

    function dojoUnder10000(n) {
      var out = '';
      var th = Math.floor(n / 1000); n %= 1000;
      var hu = Math.floor(n / 100);  n %= 100;
      var te = Math.floor(n / 10);   var on = n % 10;
      if (th) out += DOJO_THOUSANDS[th];
      if (hu) out += DOJO_HUNDREDS[hu];
      // じゅう is bare at 10-19: 15 is じゅうご, never いちじゅうご.
      if (te) out += (te === 1 ? '' : DOJO_DIGITS[te]) + 'じゅう';
      if (on) out += DOJO_DIGITS[on];
      return out;
    }

    // Counters: the counter's own irregular reading if it has one, otherwise
    // the plain number plus the base.
    function dojoCounterReading(n, mark) {
      var c = dojoData.counters[mark];
      if (!c) return '';
      if (c.irr[n]) return c.irr[n];
      if (n <= 10 && dojoData.plainCount[n]) return dojoData.plainCount[n] + c.base;
      return dojoNumberToKana(n) + c.base;
    }

    function dojoTimeReading(h, m) {
      var out = dojoData.hours[h] || '';
      if (m === 0) return out;
      var tens = Math.floor(m / 10), ones = m % 10;
      // The 分 sound change is decided by the last digit group, so 30分 is
      // さんじゅっぷん and 47分 is よんじゅうななふん.
      if (m <= 10) return out + dojoData.minuteUnits[m];
      // A round ten always takes じゅっぷん: 20分 にじゅっぷん, 30分 さんじゅっぷん.
      if (ones === 0) return out + (tens === 1 ? '' : DOJO_DIGITS[tens]) + 'じゅっぷん';
      out += (tens === 1 ? 'じゅう' : DOJO_DIGITS[tens] + 'じゅう');
      return out + dojoData.minuteUnits[ones];
    }

    // =====================================================================
    // Scope and weak spots.
    //
    // Fifteen question types shuffled at random is a slot machine, not a dojo:
    // you cannot repeat the thing you are bad at, which is the only reason to
    // practise. Scopes group the types into things a learner would actually
    // choose between, and weak spots re-serve what you have missed.
    // =====================================================================
    // Three topics, not ten. The previous version listed every question type as
    // its own chip, which is the same failure the page already had — a wall of
    // choices nobody reads — just moved into a nicer box.
    //
    // English-answer questions are deliberately NOT a chip. If you can see one
    // coming you stop reading the question, and reading the question is the
    // whole point of giving every question a fixed shape. They are mixed into
    // the topic they belong to and arrive unannounced.
    var DOJO_SCOPES = {
      datetime: ['currentDate', 'currentMonth', 'currentWeekday',
                 'futureDate', 'pastDate', 'futureWeekday', 'pastWeekday',
                 'relativeDay', 'dateFromJapanese', 'dateReading',
                 'weekdayReading', 'weekdayName', 'weekdayNameFull',
                 'timeReading',
                 'dateToEnglish', 'weekdayToEnglish'],
      counters: ['counterReading'],
      numbers:  ['bigNumber', 'number', 'numberReading',
                 'calendarYear', 'yearDuration', 'eraYear']
    };
    var DOJO_SCOPE_KEY = 'ka_dojo_scopes';
    var DOJO_WEAK_KEY  = 'ka_dojo_weak';

    var dojoScopes = { datetime: true, counters: true, numbers: true };
    var dojoWeakOnly = true;     // the default; falls back gracefully when empty
    var dojoWeak = {};           // uniqueKey -> { misses, q, due }
    var dojoAsked = 0;

    function dojoLoadPrefs() {
      try {
        var raw = localStorage.getItem(DOJO_SCOPE_KEY);
        if (raw) {
          var p = JSON.parse(raw);
          if (p && p.scopes) dojoScopes = p.scopes;
          if (typeof p.weakOnly === 'boolean') dojoWeakOnly = p.weakOnly;
        }
        var w = localStorage.getItem(DOJO_WEAK_KEY);
        if (w) dojoWeak = JSON.parse(w) || {};
      } catch (e) { /* private mode, cleared storage — defaults are fine */ }
    }

    function dojoSavePrefs() {
      try {
        localStorage.setItem(DOJO_SCOPE_KEY,
          JSON.stringify({ scopes: dojoScopes, weakOnly: dojoWeakOnly }));
        localStorage.setItem(DOJO_WEAK_KEY, JSON.stringify(dojoWeak));
      } catch (e) {}
    }

    // The types allowed by the current chip selection. Never returns empty:
    // deselecting everything would leave the page with nothing to ask.
    function dojoActiveTypes() {
      var out = [];
      Object.keys(DOJO_SCOPES).forEach(function (scope) {
        if (dojoScopes[scope]) out = out.concat(DOJO_SCOPES[scope]);
      });
      out = out.filter(function (t) { return !!dojoData.questionTypes[t]; });
      return out.length ? out : Object.keys(dojoData.questionTypes);
    }

    function dojoWeakList() {
      var active = dojoActiveTypes();
      return Object.keys(dojoWeak).filter(function (k) {
        var e = dojoWeak[k];
        return e && e.q && active.indexOf(e.q.type) !== -1 && dojoAsked >= (e.due || 0);
      });
    }

    // Missed items come back within a few questions rather than being filed in
    // a list nobody opens. Three clean answers and it leaves.
    function dojoMarkWrong(q) {
      if (!q || !q.uniqueKey) return;
      var e = dojoWeak[q.uniqueKey] || { misses: 0, streak: 0 };
      e.misses += 1;
      e.streak = 0;
      // Keep the whole question, not a hand-picked subset. The subset was a
      // standing bug: every field added later was silently dropped on the way
      // back out, so a re-served counter lost its spoken sentence and a
      // re-served English question lost answerLang and was then marked against
      // the Japanese reading. Every field on a question is a string or a
      // boolean, so this survives localStorage intact.
      e.q = {};
      Object.keys(q).forEach(function (k) { if (k !== 'fromWeak') e.q[k] = q[k]; });
      e.due = dojoAsked + 2 + Math.floor(Math.random() * 3);
      dojoWeak[q.uniqueKey] = e;
      dojoSavePrefs();
    }

    function dojoMarkRight(q) {
      if (!q || !q.uniqueKey) return false;
      var e = dojoWeak[q.uniqueKey];
      if (!e) return false;
      e.streak = (e.streak || 0) + 1;
      if (e.streak >= 3) { delete dojoWeak[q.uniqueKey]; dojoSavePrefs(); return true; }
      e.due = dojoAsked + 3 + Math.floor(Math.random() * 4);
      dojoSavePrefs();
      return false;
    }

    function dojoWeakCount() {
      return Object.keys(dojoWeak).length;
    }

    var dojoQuestion = null;
    var dojoScore = { correct: 0, total: 0 };
    var dojoStreak = 0;
    var dojoMistakeLog = [];
    var dojoShowHint = false;
    var dojoPartialFeedback = null;
    var dojoQuestionHistory = []; // Track recent questions to avoid repeats
    var dojoTypeHistory = []; // Track recent question types for better variety
    var dojoMaxHistory = 5; // Remember last 5 questions
    var dojoMaxTypeHistory = 3; // Don't repeat same type within 3 questions

    function dojoEscape(str) {
      return String(str == null ? '' : str)
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    }

    // Verdict and hint text gets the same hoverable treatment as the question.
    // Without it, the green box under the answer box was the one place on the
    // page where kanji were unreadable with no way to check them.
    function dojoTip(text) {
      return parseKanjiText(dojoEscape(text));
    }

    function parseKanjiText(text) {
      var result = '';
      var remaining = text;
      while (remaining.length > 0) {
        var matched = false;
        for (var len = 3; len >= 1; len--) {
          if (remaining.length >= len) {
            var substr = remaining.slice(0, len);
            if (dojoData.kanjiDict[substr]) {
              var k = dojoData.kanjiDict[substr];
              result += '<span class="dojo-kanji-tip" data-reading="' + k.reading + '" data-en="' + k.en + '">' + substr + '</span>';
              remaining = remaining.slice(len);
              matched = true;
              break;
            }
          }
        }
        if (!matched) {
          result += remaining[0];
          remaining = remaining.slice(1);
        }
      }
      return result;
    }

    // =====================================================================
    // Rōmaji → kana in the answer box.
    //
    // This page never loaded romaji.js at all, so answering required a real
    // Japanese IME — while every other drill on the site converts as you type.
    // Same behaviour and same あ toggle as the Conjugator and Talk, including
    // the composition self-heal that stops a stranded IME flag killing it.
    // =====================================================================
    var dojoRomajiOn = true;
    var dojoEnglishMode = false;   // set per question; overrides the toggle
    var DOJO_ROMAJI_KEY = 'ka_dojo_romaji';

    // The converter runs only when the learner wants it AND the question is
    // asking for Japanese.
    function dojoConverting() { return dojoRomajiOn && !dojoEnglishMode; }

    function toggleDojoRomaji() {
      if (dojoEnglishMode) return;   // nothing to toggle on an English answer
      dojoRomajiOn = !dojoRomajiOn;
      try { localStorage.setItem(DOJO_ROMAJI_KEY, dojoRomajiOn ? '1' : '0'); } catch (e) {}
      paintDojoRomajiToggle();
      var input = document.getElementById('dojo-answer-input');
      if (input) input.focus();
    }

    function paintDojoRomajiToggle() {
      var btn = document.getElementById('dojo-kana-toggle');
      if (!btn) return;
      var on = dojoConverting();
      btn.classList.toggle('off', !on);
      btn.disabled = dojoEnglishMode;
      btn.title = dojoEnglishMode ? 'This answer is in English'
                : on ? 'Rōmaji → kana is on' : 'Rōmaji → kana is off';
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    }

    var dojoKana = null;

    function wireDojoRomaji() {
      var input = document.getElementById('dojo-answer-input');
      if (!input || !window.KA_toKana) return;
      try {
        var saved = localStorage.getItem(DOJO_ROMAJI_KEY);
        if (saved !== null) dojoRomajiOn = saved === '1';
      } catch (e) {}
      paintDojoRomajiToggle();

      // Caret-aware conversion, IME self-heal, the idle-ん commit and the
      // commit on blur all live in the shared helper now — see attachKanaInput.
      dojoKana = attachKanaInput(input, { enabled: dojoConverting });
    }

    // Commit a half-typed syllable before checking — "youka" with a pending
    // "ka" should be ようか when you press Enter, not ようka.
    function dojoCommitRomaji() {
      if (dojoKana) dojoKana.flush();
    }

    // ---- scope chips ----------------------------------------------------
    var DOJO_SCOPE_LABELS = [
      { key: 'weak',     i18n: 'dojo_scope_weak',     en: '\u25ce Weak spots', weak: true },
      { key: 'datetime', i18n: 'dojo_scope_datetime', en: 'Dates & time' },
      { key: 'counters', i18n: 'dojo_scope_counters', en: 'Counters' },
      { key: 'numbers',  i18n: 'dojo_scope_numbers',  en: 'Numbers & years' }
    ];

    function buildDojoScopeChips() {
      var wrap = document.getElementById('dojo-scope-chips');
      if (!wrap) return;
      wrap.innerHTML = '';
      DOJO_SCOPE_LABELS.forEach(function (sc) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'dojo-chip' + (sc.weak ? ' weak' : '');
        b.dataset.scope = sc.key;
        b.textContent = ct(sc.i18n, sc.en);
        b.addEventListener('click', function () {
          if (sc.weak) dojoWeakOnly = !dojoWeakOnly;
          else dojoScopes[sc.key] = !dojoScopes[sc.key];
          dojoSavePrefs();
          paintDojoScopeChips();
          generateDojoQuestion();
        });
        wrap.appendChild(b);
      });
      paintDojoScopeChips();
    }

    function paintDojoScopeChips() {
      var wrap = document.getElementById('dojo-scope-chips');
      if (!wrap) return;
      Array.prototype.forEach.call(wrap.querySelectorAll('.dojo-chip'), function (b) {
        var k = b.dataset.scope;
        b.classList.toggle('on', k === 'weak' ? dojoWeakOnly : !!dojoScopes[k]);
      });
      var sub = document.getElementById('dojo-scope-sub');
      if (!sub) return;
      var picked = Object.keys(DOJO_SCOPES).filter(function (k) { return dojoScopes[k]; }).length;
      var weak = dojoWeakCount();
      // Honest about the empty state: on a first visit there is nothing to
      // re-serve, and saying so beats a chip that silently does nothing.
      var weakTxt = weak
        ? weak + ' ' + ct('dojo_weak_tracked', 'weak spots tracked')
        : ct('dojo_weak_none', 'no weak spots yet — they appear as you miss things');
      sub.textContent = picked + ' ' + ct('dojo_selected', 'selected') + ' \u00b7 ' + weakTxt;
    }

    var dojoExtrasReady = false;
    function initDojoExtras() {
      if (dojoExtrasReady) return;
      dojoExtrasReady = true;

      // Showing a verdict disables the answer box, so a keypress handler bound
      // to that field stops firing exactly when you want Enter to mean "next".
      document.addEventListener('keydown', function (e) {
        if (e.key !== 'Enter' || e.altKey || e.ctrlKey || e.metaKey) return;
        if (!document.getElementById('dojo-answer-input')) return;
        var tag = (e.target && e.target.tagName || '').toLowerCase();
        if (tag === 'textarea' || (tag === 'input' && e.target.id !== 'dojo-answer-input')) return;
        var nextRow = document.getElementById('dojo-next-btn-row');
        if (nextRow && nextRow.style.display !== 'none') { e.preventDefault(); generateDojoQuestion(); }
      });

      dojoLoadPrefs();
      buildDojoScopeChips();
      wireDojoRomaji();
      // The voice list arrives after first paint, so repaint the speaker once
      // we actually know whether anything can speak.
      if (window.KA_Speech) window.KA_Speech.onReady(paintDojoQuestionExtras);
      if (window.KA_Azure && window.KA_Azure.listVoices) {
        window.KA_Azure.listVoices().then(paintDojoQuestionExtras).catch(function () {});
      }
    }

    function generateDojoQuestion() {
      dojoAsked++;

      // A due weak spot outranks a fresh question — that is the point of
      // tracking them. Roughly every third question when any are due, so the
      // session still moves forward instead of grinding on the same six items.
      var due = dojoWeakList();
      if (due.length && (dojoWeakOnly ? Math.random() < 0.7 : Math.random() < 0.35)) {
        var pick = dojoWeak[due[Math.floor(Math.random() * due.length)]];
        if (pick && pick.q) {
          var revived = {};
          Object.keys(pick.q).forEach(function (k) { revived[k] = pick.q[k]; });
          revived.fromWeak = true;
          dojoQuestion = revived;
          dojoShowHint = false;
          dojoPartialFeedback = null;
          renderDojoQuestion();
          return;
        }
      }

      var types = dojoActiveTypes();
      var today = new Date();
      var q = null;
      var attempts = 0;
      var maxAttempts = 30;

      // Keep trying until we get a unique question with good variety
      while (attempts < maxAttempts) {
        attempts++;
        var type = types[Math.floor(Math.random() * types.length)];

        // Skip if this type was used recently (for better variety)
        if (dojoTypeHistory.indexOf(type) !== -1 && attempts < maxAttempts - 5) {
          continue;
        }
        // "Today's date" and friends give the same answer all day, so they are
        // a fine opener and a poor drill item. Weighted down, not removed.
        if (attempts < 12 &&
            ['currentDate', 'currentMonth', 'currentWeekday'].indexOf(type) !== -1 &&
            Math.random() < 0.75) {
          continue;
        }

        q = { type: type, requiresFullSentence: true };

        switch (type) {
          case 'currentDate':
            var day = today.getDate();
            q.prompt = '今日は何日ですか？';
            q.promptEn = "What is today's date?";
            q.coreAnswer = dojoData.dates[day];
            q.fullAnswer = dojoData.dates[day] + 'です';
            q.hint = 'Today is the ' + day + (day === 1 ? 'st' : day === 2 ? 'nd' : day === 3 ? 'rd' : 'th') + ' — Answer with です';
            q.uniqueKey = 'currentDate';
            break;
          case 'currentMonth':
            var month = today.getMonth() + 1;
            q.prompt = '今は何月ですか？';
            q.promptEn = 'What month is it now?';
            q.coreAnswer = dojoData.months[month];
            q.fullAnswer = dojoData.months[month] + 'です';
            q.hint = "It's month #" + month + " (" + monthNames[month] + ") — Answer with です";
            q.uniqueKey = 'currentMonth';
            break;
          case 'currentWeekday':
            var weekday = today.getDay();
            q.prompt = '今日は何曜日ですか？';
            q.promptEn = 'What day of the week is today?';
            q.coreAnswer = dojoData.weekdays[weekday].jp;
            q.fullAnswer = dojoData.weekdays[weekday].jp + 'です';
            q.kanjiAnswer = dojoData.weekdays[weekday].kanji + 'です';
            q.hint = 'Today is ' + dojoData.weekdays[weekday].en + ' — Answer with です';
            q.uniqueKey = 'currentWeekday';
            break;
          case 'futureDate': {
            // The premise is stated, so the question is self-contained and the
            // answer is checkable from what is on screen. It also no longer has
            // to be today, which is what turns 14 possible questions into
            // 366 premises x 14 offsets.
            var base = dojoRandomDate();
            var daysAhead = Math.floor(Math.random() * 14) + 1;
            var target = dojoShiftDate(base, daysAhead);
            var day = target.getDate();
            q.prompt = '今日は' + dojoDateJp(base) + 'です。' + daysAhead + '日後は何日ですか？';
            q.promptEn = 'Today is ' + dojoDateEn(base) + '. What date is it in ' + dojoPlural(daysAhead, 'day') + '?';
            q.coreAnswer = dojoData.dates[day];
            q.fullAnswer = dojoData.dates[day] + 'です';
            q.hint = 'It lands on the ' + day + dojoOrdinal(day) + ' \u2014 answer with です';
            // The key carries the premise, so a stored weak spot keeps the same
            // answer tomorrow. 'futureDate_5' would not.
            q.uniqueKey = 'futureDate_' + dojoDateJp(base) + '_+' + daysAhead;
            break;
          }
          case 'pastDate': {
            var base = dojoRandomDate();
            var daysAgo = Math.floor(Math.random() * 14) + 1;
            var target = dojoShiftDate(base, -daysAgo);
            var day = target.getDate();
            q.prompt = '今日は' + dojoDateJp(base) + 'です。' + daysAgo + '日前は何日でしたか？';
            q.promptEn = 'Today is ' + dojoDateEn(base) + '. What date was it ' + dojoPlural(daysAgo, 'day') + ' ago?';
            q.coreAnswer = dojoData.dates[day];
            q.fullAnswer = dojoData.dates[day] + 'でした';
            q.hint = 'It was the ' + day + dojoOrdinal(day) + ' \u2014 answer with でした (past)';
            q.uniqueKey = 'pastDate_' + dojoDateJp(base) + '_-' + daysAgo;
            break;
          }
          case 'futureWeekday': {
            var base = dojoRandomDate();
            var daysAhead = Math.floor(Math.random() * 7) + 1;
            var futureDate = dojoShiftDate(base, daysAhead);
            var weekday = futureDate.getDay();
            // The premise names the weekday, not the date — counting forward
            // from "Tuesday" is the skill; counting from a calendar date is
            // arithmetic.
            q.prompt = '今日は' + dojoData.weekdays[base.getDay()].kanji + 'です。' +
                       daysAhead + '日後は何曜日ですか？';
            q.promptEn = 'Today is ' + dojoData.weekdays[base.getDay()].en +
                         '. What day will it be in ' + dojoPlural(daysAhead, 'day') + '?';
            q.coreAnswer = dojoData.weekdays[weekday].jp;
            q.fullAnswer = dojoData.weekdays[weekday].jp + 'です';
            q.kanjiAnswer = dojoData.weekdays[weekday].kanji + 'です';
            q.hint = 'It will be ' + dojoData.weekdays[weekday].en + ' \u2014 answer with です';
            q.uniqueKey = 'futureWeekday_' + base.getDay() + '_+' + daysAhead;
            break;
          }
          case 'pastWeekday': {
            var base = dojoRandomDate();
            var daysAgo = Math.floor(Math.random() * 7) + 1;
            var pastDate = dojoShiftDate(base, -daysAgo);
            var weekday = pastDate.getDay();
            q.prompt = '今日は' + dojoData.weekdays[base.getDay()].kanji + 'です。' +
                       daysAgo + '日前は何曜日でしたか？';
            q.promptEn = 'Today is ' + dojoData.weekdays[base.getDay()].en +
                         '. What day was it ' + dojoPlural(daysAgo, 'day') + ' ago?';
            q.coreAnswer = dojoData.weekdays[weekday].jp;
            q.fullAnswer = dojoData.weekdays[weekday].jp + 'でした';
            q.kanjiAnswer = dojoData.weekdays[weekday].kanji + 'でした';
            q.hint = 'It was ' + dojoData.weekdays[weekday].en + ' \u2014 answer with でした (past)';
            q.uniqueKey = 'pastWeekday_' + base.getDay() + '_-' + daysAgo;
            break;
          }
          case 'relativeDay': {
            var base = dojoRandomDate();
            var offsets = Object.keys(dojoData.relative).map(Number);
            var offset = offsets[Math.floor(Math.random() * offsets.length)];
            var targetDate = dojoShiftDate(base, offset);
            var day = targetDate.getDate();
            var relativeTerm = dojoData.relative[offset.toString()];
            q.prompt = '今日は' + dojoDateJp(base) + 'です。「' + relativeTerm + '」は何日ですか？';
            q.promptEn = 'Today is ' + dojoDateEn(base) + '. What date is "' + relativeTerm + '"?';
            q.coreAnswer = dojoData.dates[day];
            q.fullAnswer = dojoData.dates[day] + 'です';
            q.hint = relativeTerm + ' = ' + relativeLabels[offset.toString()] + ' \u2014 answer with です';
            q.uniqueKey = 'relativeDay_' + dojoDateJp(base) + '_' + offset;
            break;
          }
          case 'number':
            var numbers = Object.keys(dojoData.numbers).map(Number);
            var num = numbers[Math.floor(Math.random() * numbers.length)];
            q.prompt = dojoAskInJapanese(num.toLocaleString());
            q.promptEn = 'How do you say ' + num.toLocaleString() + '?';
            q.coreAnswer = dojoData.numbers[num];
            q.fullAnswer = dojoData.numbers[num] + 'です';
            q.hint = 'Think about the counter pattern... Answer with です';
            q.uniqueKey = 'number_' + num;
            break;
          case 'dateFromJapanese':
            var dates = Object.entries(dojoData.dates);
            var entry = dates[Math.floor(Math.random() * dates.length)];
            var day = entry[0];
            var reading = entry[1];
            q.prompt = dojoAskInJapanese('「' + reading + '」') ;
            q.promptEn = 'What number date is "' + reading + '"?';
            q.coreAnswer = day + '日';
            q.fullAnswer = day + '日です';
            q.hint = 'Listen to the reading pattern... Answer with 日です';
            q.uniqueKey = 'dateFromJapanese_' + day;
            break;
          
          // NEW: Reading-only questions (no です required)
          case 'dateReading':
            var day = Math.floor(Math.random() * 10) + 1; // 1-10 for special readings
            q.prompt = dojoAskRead(day + '日');
            q.promptEn = 'How do you read ' + day + '日?';
            q.coreAnswer = dojoData.dates[day];
            q.fullAnswer = dojoData.dates[day]; // No です needed
            q.hint = 'Just the reading — no です needed';
            q.uniqueKey = 'dateReading_' + day;
            q.requiresFullSentence = false;
            break;
          case 'weekdayReading':
            var weekday = Math.floor(Math.random() * 7);
            var dayKanji = ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'][weekday];
            q.prompt = dojoAskRead('「' + dayKanji + '」');
            q.promptEn = 'How do you read "' + dayKanji + '"?';
            q.coreAnswer = dojoData.weekdays[weekday].jp;
            q.fullAnswer = dojoData.weekdays[weekday].jp; // No です needed
            q.hint = 'Just the reading — no です needed';
            q.uniqueKey = 'weekdayReading_' + weekday;
            q.requiresFullSentence = false;
            break;
          case 'numberReading':
            var numbers = Object.keys(dojoData.numbers).map(Number);
            var num = numbers[Math.floor(Math.random() * numbers.length)];
            q.prompt = dojoAskRead(num.toLocaleString());
            q.promptEn = 'How do you read ' + num.toLocaleString() + '?';
            q.coreAnswer = dojoData.numbers[num];
            q.fullAnswer = dojoData.numbers[num]; // No です needed
            q.hint = 'Just the reading — no です needed';
            q.uniqueKey = 'numberReading_' + num;
            q.requiresFullSentence = false;
            break;
          
          // Weekday name questions
          case 'weekdayName':
            var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            var weekday = Math.floor(Math.random() * 7);
            q.prompt = dojoAskInJapanese(dayNames[weekday]);
            q.promptEn = 'What is ' + dayNames[weekday] + ' in Japanese?';
            // Accept short form (にち, げつ, etc.) or full form
            q.coreAnswer = dojoData.weekdays[weekday].short;
            q.fullAnswer = dojoData.weekdays[weekday].short;
            q.altAnswer = dojoData.weekdays[weekday].jp; // Also accept full ようび form
            q.hint = 'Short form is fine (e.g., げつ) or full form (げつようび)';
            q.uniqueKey = 'weekdayName_' + weekday;
            q.requiresFullSentence = false;
            break;
          case 'weekdayNameFull':
            var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            var weekday = Math.floor(Math.random() * 7);
            q.prompt = dojoAskInJapanese(dayNames[weekday]);
            q.promptEn = 'What is ' + dayNames[weekday] + ' in Japanese? (include ようび)';
            q.coreAnswer = dojoData.weekdays[weekday].jp;
            q.fullAnswer = dojoData.weekdays[weekday].jp;
            q.hint = 'Must include ようび (e.g., げつようび)';
            q.uniqueKey = 'weekdayNameFull_' + weekday;
            q.requiresFullSentence = false;
            break;

          // ---- the three new types ----------------------------------------
          case 'timeReading':
            var h = 1 + Math.floor(Math.random() * 12);
            var mn = Math.floor(Math.random() * 60);
            q.prompt = dojoAskRead(h + '時' + (mn ? mn + '分' : ''));
            q.promptEn = 'How do you read ' + h + ':' + (mn < 10 ? '0' : '') + mn + '?';
            q.coreAnswer = dojoTimeReading(h, mn);
            q.fullAnswer = q.coreAnswer;
            q.speakText = q.coreAnswer;
            q.answerSpeech = q.coreAnswer + 'です';
            q.hint = (h === 4 ? '4時 is よじ, never しじ. ' : h === 7 ? '7時 is しちじ. ' : h === 9 ? '9時 is くじ. ' : '') +
                     (mn ? '分 is ふん or ぷん depending on the sound before it.' : 'Just the hour.');
            q.uniqueKey = 'time_' + h + '_' + mn;
            q.requiresFullSentence = false;
            q.irregular = (h === 4 || h === 7 || h === 9 ||
                           [1, 3, 4, 6, 8, 10].indexOf(mn % 10 || 10) !== -1);
            break;

          case 'counterReading':
            var marks = Object.keys(dojoData.counters);
            var mark = marks[Math.floor(Math.random() * marks.length)];
            var cinfo = dojoData.counters[mark];
            // Weight the low numbers, because that is where every sound change
            // lives — 17本 is regular and teaches nothing.
            var cn = Math.random() < 0.75
              ? 1 + Math.floor(Math.random() * 10)
              : 11 + Math.floor(Math.random() * 20);
            q.prompt = cinfo.example + 'が' + cn + mark + (cinfo.animate ? 'います' : 'あります') +
                       '。' + dojoAskRead('「' + cn + mark + '」');
            q.promptEn = 'How do you read ' + cn + mark + ' (' + cinfo.en + ')?';
            q.coreAnswer = dojoCounterReading(cn, mark);
            q.fullAnswer = q.coreAnswer;
            q.speakText = q.coreAnswer;
            // Hearing the counter alone teaches half of it — さんぼん means
            // little until you hear えんぴつがさんぼんあります. The verdict
            // speaker says the whole sentence; the answer stays just the
            // counter, because that is what you were asked for.
            q.answerSpeech = cinfo.exampleKana + 'が' + dojoCounterReading(cn, mark) +
                             (cinfo.animate ? 'います' : 'あります');
            q.hint = mark + ' counts ' + cinfo.en + ' — base reading ' + cinfo.base +
                     (cinfo.irr[cn] ? '. This one is irregular.' : '.');
            q.uniqueKey = 'counter_' + mark + '_' + cn;
            q.requiresFullSentence = false;
            q.irregular = !!cinfo.irr[cn];
            break;

          case 'bigNumber':
            // Bias toward numbers that exercise a sound change rather than
            // uniformly across 1-99999, most of which are mechanical.
            var bn;
            var roll = Math.random();
            if (roll < 0.3)      bn = [300, 600, 800, 3000, 8000][Math.floor(Math.random() * 5)];
            else if (roll < 0.6) bn = 101 + Math.floor(Math.random() * 899);
            else if (roll < 0.85) bn = 1001 + Math.floor(Math.random() * 8999);
            else                 bn = 10001 + Math.floor(Math.random() * 89999);
            q.prompt = dojoAskRead(bn.toLocaleString());
            q.promptEn = 'How do you read ' + bn.toLocaleString() + '?';
            q.coreAnswer = dojoNumberToKana(bn);
            q.fullAnswer = q.coreAnswer;
            q.speakText = q.coreAnswer;
            q.hint = '300 さんびゃく · 600 ろっぴゃく · 800 はっぴゃく · 3000 さんぜん · 8000 はっせん';
            q.uniqueKey = 'bignum_' + bn;
            q.requiresFullSentence = false;
            q.irregular = [3, 6, 8].indexOf(Math.floor(bn / 100) % 10) !== -1 ||
                          [3, 8].indexOf(Math.floor(bn / 1000) % 10) !== -1;
            break;

          // ---- years -------------------------------------------------------
          case 'calendarYear': {
            // Free: calendar years are perfectly regular, so the number engine
            // already knows them. 2000年 is にせんねん, not にせんゼロねん.
            var cy = 1900 + Math.floor(Math.random() * 136);
            q.prompt = dojoAskRead(cy + '年');
            q.promptEn = 'How do you read the year ' + cy + '?';
            q.coreAnswer = dojoNumberToKana(cy) + 'ねん';
            q.fullAnswer = q.coreAnswer;
            q.speakText = q.coreAnswer;
            q.hint = 'Read the number, then ねん. Calendar years take no irregulars.';
            q.uniqueKey = 'calYear_' + cy;
            q.requiresFullSentence = false;
            break;
          }

          case 'yearDuration': {
            // Durations are a counter, and they do have irregulars: よねん not
            // しねん, きゅうねん not くねん.
            var yd = Math.random() < 0.7
              ? 1 + Math.floor(Math.random() * 10)
              : 11 + Math.floor(Math.random() * 20);
            q.prompt = '日本語を' + yd + '年勉強しました。「' + yd + '年」は何と読みますか？';
            q.promptEn = 'I studied Japanese for ' + dojoPlural(yd, 'year') + '. How do you read ' + yd + '年?';
            q.coreAnswer = dojoData.yearCount[yd] || (dojoNumberToKana(yd) + 'ねん');
            q.fullAnswer = q.coreAnswer;
            q.speakText = q.coreAnswer;
            q.altAnswer = (yd === 7) ? 'しちねん' : null;   // 7年 goes both ways
            q.hint = 'Watch 4年 (よねん) and 9年 (きゅうねん).';
            q.uniqueKey = 'yearDur_' + yd;
            q.requiresFullSentence = false;
            q.irregular = [4, 7, 9].indexOf(yd) !== -1;
            break;
          }

          case 'eraYear': {
            var era = dojoData.eras[Math.floor(Math.random() * dojoData.eras.length)];
            var wy = era.from + Math.floor(Math.random() * (era.to - era.from + 1));
            var en = wy - era.offset;
            // Year 1 of an era is 元年 — がんねん — never 一年.
            var eraJp = era.jp + (en === 1 ? '元年' : en + '年');
            q.prompt = dojoAskInJapanese(wy + '年');
            q.promptEn = 'What is ' + wy + ' in the Japanese era calendar?';
            q.coreAnswer = eraJp;
            q.fullAnswer = eraJp;
            q.speakText = era.jp + (en === 1 ? 'がんねん' : dojoNumberToKana(en) + 'ねん');
            q.hint = era.jp + ' (' + era.en + ') = Western year \u2212 ' + era.offset + '.';
            q.uniqueKey = 'era_' + wy;
            q.requiresFullSentence = false;
            break;
          }

          // ---- answer in English ------------------------------------------
          case 'dateToEnglish': {
            var ed = 1 + Math.floor(Math.random() * 31);
            q.prompt = dojoAskInEnglish('「' + dojoData.dates[ed] + '」');
            q.promptEn = 'What is ' + dojoData.dates[ed] + ' in English?';
            q.coreAnswer = ed + dojoOrdinal(ed);
            q.fullAnswer = q.coreAnswer;
            q.speakText = dojoData.dates[ed];
            q.answerLang = 'en';
            q.altAnswer = String(ed);
            q.hint = 'Which day of the month is it?';
            q.uniqueKey = 'dateEn_' + ed;
            q.requiresFullSentence = false;
            q.irregular = dojoData.irregularDates.indexOf(ed) !== -1;
            break;
          }

          case 'weekdayToEnglish': {
            var ew = Math.floor(Math.random() * 7);
            q.prompt = dojoAskInEnglish('「' + dojoData.weekdays[ew].jp + '」');
            q.promptEn = 'What is ' + dojoData.weekdays[ew].jp + ' in English?';
            q.coreAnswer = dojoData.weekdays[ew].en;
            q.fullAnswer = q.coreAnswer;
            q.speakText = dojoData.weekdays[ew].jp;
            q.answerLang = 'en';
            q.hint = 'The ' + dojoData.weekdays[ew].short + ' in ' + dojoData.weekdays[ew].jp + ' is the clue.';
            q.uniqueKey = 'weekdayEn_' + ew;
            q.requiresFullSentence = false;
            break;
          }
        }
        
        // Check if this question was asked recently
        if (dojoQuestionHistory.indexOf(q.uniqueKey) === -1) {
          break; // Found a unique question
        }
      }
      
      // Add to history
      dojoQuestionHistory.push(q.uniqueKey);
      if (dojoQuestionHistory.length > dojoMaxHistory) {
        dojoQuestionHistory.shift(); // Remove oldest
      }
      
      // Track type history for better variety
      dojoTypeHistory.push(q.type);
      if (dojoTypeHistory.length > dojoMaxTypeHistory) {
        dojoTypeHistory.shift();
      }
      
      // Set the display answer (what we show as correct)
      q.answer = q.fullAnswer;
      
      dojoQuestion = q;
      dojoShowHint = false;
      dojoPartialFeedback = null;
      renderDojoQuestion();
    }

    // Split out of the generator so a revived weak spot renders through exactly
    // the same path as a fresh question — two drawing routines would drift.
    function renderDojoQuestion() {
      var q = dojoQuestion;
      if (!q) return;
      var typeInfo = dojoData.questionTypes[q.type];
      document.getElementById('dojo-question-type').innerHTML = parseKanjiText(typeInfo.jp);
      document.getElementById('dojo-question-type').title = typeInfo.en;
      document.getElementById('dojo-question-text').innerHTML = parseKanjiText(q.prompt);
      document.getElementById('dojo-question-text-en').textContent = q.promptEn;
      document.getElementById('dojo-answer-input').value = '';
      document.getElementById('dojo-answer-input').disabled = false;
      document.getElementById('dojo-answer-input').focus();
      
      // Update input hint based on whether full sentence is required
      var hintEl = document.getElementById('dojo-input-hint');
      var wantsEnglish = q.answerLang === 'en';
      if (wantsEnglish) {
        hintEl.innerHTML = dojoTip(ct('dojo_answer_en', 'Answer in English'));
      } else if (q.requiresFullSentence === false) {
        hintEl.innerHTML = dojoTip('読み方だけでOK！（です不要）');
      } else {
        hintEl.innerHTML = dojoTip('フルセンテンスで答えてね！（〜です / 〜でした）');
      }
      // Typing kana into an English answer is pure friction, so the converter
      // switches itself off rather than making people notice and toggle it.
      dojoEnglishMode = wantsEnglish;
      paintDojoRomajiToggle();
      var inputEl = document.getElementById('dojo-answer-input');
      if (inputEl) {
        inputEl.classList.toggle('en-mode', wantsEnglish);
        // A Japanese placeholder over an English answer box is a small lie
        // about what the field wants.
        inputEl.placeholder = wantsEnglish
          ? ct('dojo_type_en', 'Type your answer…')
          : '答えを入力...';
      }
      
      document.getElementById('dojo-hint-box').style.display = 'none';
      document.getElementById('dojo-hint-btn').innerHTML = '🔒 <span class="dojo-tip" data-reading="ヒント" data-en="Hint">ヒント</span>';
      document.getElementById('dojo-hint-btn').classList.remove('active');
      document.getElementById('dojo-feedback').style.display = 'none';
      document.getElementById('dojo-partial-feedback').style.display = 'none';
      document.getElementById('dojo-btn-row').style.display = 'flex';
      document.getElementById('dojo-next-btn-row').style.display = 'none';
      paintDojoQuestionExtras();
    }

    // Listen on the question, and a badge when this one came back because you
    // missed it — otherwise a repeat just looks like the generator glitching.
    function paintDojoQuestionExtras() {
      var q = dojoQuestion;
      var spk = document.getElementById('dojo-speak');
      if (spk) {
        var canSpeak = !!(window.KA_Listen && window.KA_Listen.available()) && !!dojoSpeakText(q);
        spk.style.display = canSpeak ? '' : 'none';
        spk.classList.remove('playing');
      }
      var badge = document.getElementById('dojo-weak-badge');
      if (badge) badge.style.display = (q && q.fromWeak) ? '' : 'none';
    }

    // The speaker on the QUESTION reads the question, because a counter in
    // context is the thing being learned — hearing only the answer skips the
    // sentence it lives in. The speaker on the VERDICT reads just the answer.
    //
    // The prompt is written for the eye, so strip what would be read wrong:
    // the quoting brackets, and the digits that have a kana reading beside
    // them already.
    function dojoQuestionSpeech(q) {
      if (!q || !q.prompt) return '';
      return String(q.prompt)
        .replace(/[「」]/g, '')
        .replace(/,/g, '')
        .trim();
    }

    // What the verdict speaker says: the answer as it would actually be spoken,
    // which for a counter means the sentence it lives in rather than the bare
    // word. Falls back through the full answer to the core one.
    function dojoSpeakText(q) {
      if (!q) return '';
      return q.answerSpeech || q.fullAnswer || q.speakText || q.coreAnswer || '';
    }

    function speakDojoQuestion() {
      var text = dojoQuestionSpeech(dojoQuestion);
      if (!text || !window.KA_Listen) return;
      window.KA_Listen.speak(text, document.getElementById('dojo-speak'));
    }

    function speakDojoAnswer() {
      var text = dojoSpeakText(dojoQuestion);
      if (!text || !window.KA_Listen) return;
      window.KA_Listen.speak(text, document.getElementById('dojo-speak'));
    }

    // =====================================================================
    // Answer normalisation.
    //
    // The old version was an exact string match plus seven hardcoded kanji
    // substitutions, so a correct answer in the wrong register was simply
    // marked wrong — the most demoralising thing a drill can do. This folds
    // away everything that is not the actual skill: script, spacing,
    // punctuation, katakana vs hiragana, and the reading pairs Japanese
    // genuinely accepts either way.
    // =====================================================================
    var DOJO_KANJI_READINGS = [
      ['日曜日','にちようび'], ['月曜日','げつようび'], ['火曜日','かようび'],
      ['水曜日','すいようび'], ['木曜日','もくようび'], ['金曜日','きんようび'],
      ['土曜日','どようび'],
      ['一昨日','おととい'], ['明後日','あさって'], ['今日','きょう'],
      ['昨日','きのう'], ['明日','あした']
    ];

    function dojoKatakanaToHiragana(str) {
      return String(str).replace(/[\u30a1-\u30f6]/g, function (ch) {
        return String.fromCharCode(ch.charCodeAt(0) - 0x60);
      });
    }

    function dojoNormalize(str) {
      var out = String(str || '').trim();
      DOJO_KANJI_READINGS.forEach(function (pair) {
        out = out.split(pair[0]).join(pair[1]);
      });
      out = dojoKatakanaToHiragana(out)
        .replace(/\s+/g, '')
        .replace(/[。、.,!?！？]/g, '')
        // Long vowels written with ー rather than a repeated kana.
        .replace(/ー/g, '');
      return out;
    }

    // Readings Japanese accepts either way. Both sides are folded to one form
    // before comparing, so なな and しち are the same answer — because they are.
    var DOJO_EQUIVALENTS = [
      [/しち/g, 'なな'],
      [/(?<![きじ])く(?=じ|にち|がつ)/g, 'きゅう'],
      [/よ(?=じ)/g, 'よん'],
      [/し(?=がつ)/g, 'よん'],
      [/じっ/g, 'じゅっ']
    ];

    function dojoFold(str) {
      var out = dojoNormalize(str);
      DOJO_EQUIVALENTS.forEach(function (rule) {
        try { out = out.replace(rule[0], rule[1]); } catch (e) { /* older browsers, no lookbehind */ }
      });
      return out;
    }

    // English answers are compared loosely: case, articles and punctuation are
    // not the skill being tested. "Friday", "friday" and "the 8th" all pass.
    function dojoNormalizeEnglish(str) {
      return String(str || '').toLowerCase().trim()
        .replace(/[.,!?'"]/g, '')
        .replace(/^(the|a|an)\s+/, '')
        .replace(/\s+/g, ' ');
    }

    function dojoSameEnglish(a, b) {
      if (!a || !b) return false;
      var x = dojoNormalizeEnglish(a), y = dojoNormalizeEnglish(b);
      if (x === y) return true;
      // "8" for "8th", and the other way round.
      return x.replace(/(st|nd|rd|th)$/, '') === y.replace(/(st|nd|rd|th)$/, '');
    }

    // 0 is the one place katakana is conventional on this page, so all three
    // spellings are the same answer.
    var DOJO_ZERO = ['ゼロ', 'ぜろ', 'れい', '零'];

    // True when two answers are the same reading in different clothes.
    //
    // `lang` is passed in rather than read from the current question: a
    // comparator that silently changes behaviour depending on global state is
    // one that works in the app and lies in a test.
    function dojoSameReading(a, b, lang) {
      if (!a || !b) return false;
      if (lang === 'en') return dojoSameEnglish(a, b);
      var na = dojoNormalize(a), nb = dojoNormalize(b);
      if (na === nb) return true;
      if (DOJO_ZERO.indexOf(na) !== -1 && DOJO_ZERO.indexOf(nb) !== -1) return true;
      return dojoFold(a) === dojoFold(b);
    }

    function checkDojoAnswer() {
      if (!dojoQuestion) return;
      dojoCommitRomaji();
      var userAnswer = document.getElementById('dojo-answer-input').value.trim();
      if (!userAnswer) return;

      // An English answer must not be folded through the kana normaliser.
      var normalizedAnswer = (dojoQuestion.answerLang === 'en')
        ? userAnswer.trim()
        : dojoNormalize(userAnswer);
      var fullAnswer = dojoQuestion.fullAnswer.replace(/\s+/g, '');
      var kanjiAnswer = dojoQuestion.kanjiAnswer ? dojoQuestion.kanjiAnswer.replace(/\s+/g, '') : null;
      var coreAnswer = dojoQuestion.coreAnswer.replace(/\s+/g, '');
      var altAnswer = dojoQuestion.altAnswer ? dojoQuestion.altAnswer.replace(/\s+/g, '') : null;
      var questionRequiresFullSentence = dojoQuestion.requiresFullSentence !== false; // Default true
      
      // Check if answer is correct (must include です/でした for full sentence questions)
      var isCorrect = false;
      var needsFullSentence = false;
      var hasWrongSpelling = false;
      
      // Check for exact match with full answer or alt answer
      var answerLang = dojoQuestion.answerLang || 'jp';
      if (dojoSameReading(normalizedAnswer, fullAnswer, answerLang) ||
          (kanjiAnswer && dojoSameReading(normalizedAnswer, kanjiAnswer, answerLang)) ||
          (altAnswer && dojoSameReading(normalizedAnswer, altAnswer, answerLang))) {
        isCorrect = true;
      }
      // Check if they got the core answer right
      else if (dojoSameReading(normalizedAnswer, coreAnswer, answerLang) ||
               (dojoQuestion.kanjiAnswer && dojoSameReading(normalizedAnswer,
                  dojoQuestion.kanjiAnswer.replace('です', '').replace('でした', ''), answerLang))) {
        // For reading-only questions, core answer is sufficient
        if (!questionRequiresFullSentence) {
          isCorrect = true;
        } else {
          needsFullSentence = true;
        }
      }
      // Check if answer contains the correct core but may have spelling issues
      else {
        // Check if they included です/でした
        var hasDesu = normalizedAnswer.indexOf('です') !== -1;
        var hasDeshita = normalizedAnswer.indexOf('でした') !== -1;
        var hasSentenceEnding = hasDesu || hasDeshita;
        
        // Extract what they wrote before です/でした
        var userCore = normalizedAnswer.replace(/です$/, '').replace(/でした$/, '');
        
        if (dojoSameReading(userCore, coreAnswer, answerLang) ||
            (altAnswer && dojoSameReading(userCore, altAnswer, answerLang))) {
          // Core is right
          if (!questionRequiresFullSentence) {
            // Reading-only question - accept with or without です
            isCorrect = true;
          } else {
            // Full sentence question - check if they used the right ending
            var needsPast = dojoQuestion.type === 'pastDate' || dojoQuestion.type === 'pastWeekday';
            if (needsPast && hasDesu && !hasDeshita) {
              // They used です but should have used でした
              hasWrongSpelling = true;
            } else if (!needsPast && hasDeshita && !hasDesu) {
              // They used でした but should have used です
              hasWrongSpelling = true;
            } else if (hasSentenceEnding) {
              isCorrect = true;
            } else {
              needsFullSentence = true;
            }
          }
        } else if (hasSentenceEnding) {
          // They have sentence ending but core is wrong - check for spelling errors
          hasWrongSpelling = true;
        } else {
          // No sentence ending and wrong core
          if (questionRequiresFullSentence) {
            needsFullSentence = true;
          } else {
            hasWrongSpelling = true; // Just wrong answer for reading questions
          }
        }
      }

      // Check for partial answers (gave date when asked for weekday, or vice versa)
      if (!isCorrect && !dojoPartialFeedback && !needsFullSentence && !hasWrongSpelling) {
        var isWeekdayQuestion = dojoQuestion.type === 'currentWeekday' || dojoQuestion.type === 'futureWeekday' || dojoQuestion.type === 'pastWeekday';
        var isDateQuestion = dojoQuestion.type === 'currentDate' || dojoQuestion.type === 'futureDate' || dojoQuestion.type === 'pastDate' || dojoQuestion.type === 'relativeDay';
        
        if (isWeekdayQuestion) {
          var dateValues = Object.values(dojoData.dates);
          var gaveDate = dateValues.some(function(date) { return normalizedAnswer.indexOf(date) !== -1; });
          if (gaveDate) {
            dojoPartialFeedback = true;
            document.getElementById('dojo-partial-message').innerHTML = dojoTip('その日付は合ってるかも！でも曜日は？');
            document.getElementById('dojo-partial-message-en').textContent = "That date might be right! But what's the weekday?";
            document.getElementById('dojo-partial-feedback').style.display = 'block';
            document.getElementById('dojo-answer-input').value = '';
            document.getElementById('dojo-answer-input').focus();
            return;
          }
        }
        
        if (isDateQuestion) {
          var weekdayValues = Object.values(dojoData.weekdays).map(function(w) { return w.jp; });
          var gaveWeekday = weekdayValues.some(function(day) { return normalizedAnswer.indexOf(day) !== -1; });
          if (gaveWeekday) {
            dojoPartialFeedback = true;
            document.getElementById('dojo-partial-message').innerHTML = dojoTip('その曜日は合ってるかも！でも日付は？');
            document.getElementById('dojo-partial-message-en').textContent = "That weekday might be right! But what's the date?";
            document.getElementById('dojo-partial-feedback').style.display = 'block';
            document.getElementById('dojo-answer-input').value = '';
            document.getElementById('dojo-answer-input').focus();
            return;
          }
        }
      }

      // Handle "needs full sentence" feedback
      if (needsFullSentence && !dojoPartialFeedback) {
        dojoPartialFeedback = true;
        var needsPast = dojoQuestion.type === 'pastDate' || dojoQuestion.type === 'pastWeekday';
        document.getElementById('dojo-partial-message').innerHTML = dojoTip('惜しい！フルセンテンスで答えて！');
        document.getElementById('dojo-partial-message-en').textContent = needsPast ? 'Almost! Add でした for past tense!' : 'Almost! Add です to complete your answer!';
        document.getElementById('dojo-partial-feedback').style.display = 'block';
        document.getElementById('dojo-answer-input').value = '';
        document.getElementById('dojo-answer-input').focus();
        return;
      }

      // Handle wrong spelling/tense feedback
      if (hasWrongSpelling && !dojoPartialFeedback) {
        dojoPartialFeedback = true;
        var needsPast = dojoQuestion.type === 'pastDate' || dojoQuestion.type === 'pastWeekday';
        if (needsPast && normalizedAnswer.indexOf('です') !== -1 && normalizedAnswer.indexOf('でした') === -1) {
          document.getElementById('dojo-partial-message').innerHTML = dojoTip('過去形で！');
          document.getElementById('dojo-partial-message-en').textContent = 'Use past tense! でした not です';
        } else if (!needsPast && normalizedAnswer.indexOf('でした') !== -1) {
          document.getElementById('dojo-partial-message').innerHTML = dojoTip('現在形で！');
          document.getElementById('dojo-partial-message-en').textContent = 'Use present tense! です not でした';
        } else {
          document.getElementById('dojo-partial-message').innerHTML = dojoTip('もう一度！');
          document.getElementById('dojo-partial-message-en').textContent = 'Not quite — have another look.';
        }
        document.getElementById('dojo-partial-feedback').style.display = 'block';
        // Keep what they wrote and select it, rather than wiping it. You cannot
        // learn from a mistake you are not allowed to look at, and "check your
        // spelling" on an answer that has been deleted is just baffling.
        var retryInput = document.getElementById('dojo-answer-input');
        retryInput.focus();
        retryInput.select();
        return;
      }

      // Show final feedback
      dojoScore.total++;
      var clearedWeak = false;
      if (isCorrect) {
        dojoScore.correct++;
        dojoStreak++;
        clearedWeak = dojoMarkRight(dojoQuestion);
      } else {
        dojoStreak = 0;
        // Missing it schedules it to come back, rather than only filing it in
        // a list behind a button.
        dojoMarkWrong(dojoQuestion);
        dojoMistakeLog.push({
          question: dojoQuestion.prompt,
          type: dojoQuestion.type,
          userAnswer: userAnswer,
          correctAnswer: dojoQuestion.answer,
          hint: dojoQuestion.hint
        });
      }

      updateDojoDisplay();
      
      var feedback = document.getElementById('dojo-feedback');
      feedback.style.display = 'block';
      feedback.className = 'dojo-feedback ' + (isCorrect ? 'correct' : 'incorrect');
      document.getElementById('dojo-feedback-title').innerHTML =
        (isCorrect ? '✨ ' : '✗ ') + dojoTip(isCorrect ? '正解！' : 'ざんねん...');
      document.getElementById('dojo-feedback-label').innerHTML = dojoTip(isCorrect ? '期待した答え' : '正しい答え');

      // Say why this one is coming back, or that it has finally gone away.
      var note = document.getElementById('dojo-weak-note');
      if (note) {
        if (clearedWeak) {
          note.textContent = ct('dojo_weak_cleared', 'weak spot cleared');
          note.className = 'dojo-weak-note cleared';
          note.style.display = '';
        } else if (!isCorrect) {
          note.textContent = ct('dojo_weak_added', 'added to your weak spots');
          note.className = 'dojo-weak-note';
          note.style.display = '';
        } else {
          note.style.display = 'none';
        }
      }
      var ansSpk = document.getElementById('dojo-answer-speak');
      if (ansSpk) {
        ansSpk.style.display = (window.KA_Listen && window.KA_Listen.available() &&
                                dojoSpeakText(dojoQuestion)) ? '' : 'none';
      }
      
      var answerEl = document.getElementById('dojo-feedback-answer');
      var displayAnswer = dojoQuestion.answer;
      // For weekdayName questions, show both acceptable answers
      if (dojoQuestion.altAnswer && dojoQuestion.type === 'weekdayName') {
        displayAnswer = dojoQuestion.coreAnswer + ' or ' + dojoQuestion.altAnswer;
      }
      var tip = dojoHiraganaDict[dojoQuestion.coreAnswer] || '';
      if (tip && !dojoQuestion.altAnswer) {
        answerEl.innerHTML = '<span class="dojo-answer-tip" data-en="' + tip + '">' + displayAnswer + '</span>';
      } else {
        answerEl.textContent = displayAnswer;
      }

      document.getElementById('dojo-partial-feedback').style.display = 'none';
      document.getElementById('dojo-answer-input').disabled = true;
      document.getElementById('dojo-btn-row').style.display = 'none';
      document.getElementById('dojo-next-btn-row').style.display = 'flex';
    }

    function toggleDojoHint() {
      dojoShowHint = !dojoShowHint;
      var hintBox = document.getElementById('dojo-hint-box');
      var hintBtn = document.getElementById('dojo-hint-btn');
      
      if (dojoShowHint) {
        document.getElementById('dojo-hint-content').innerHTML = dojoTip(dojoQuestion.hint);
        hintBox.style.display = 'block';
        hintBtn.innerHTML = '🔓 <span class="dojo-tip" data-reading="ヒント" data-en="Hint">ヒント</span>';
        hintBtn.classList.add('active');
      } else {
        hintBox.style.display = 'none';
        hintBtn.innerHTML = '🔒 <span class="dojo-tip" data-reading="ヒント" data-en="Hint">ヒント</span>';
        hintBtn.classList.remove('active');
      }
    }

    function handleDojoKeyPress(event) {
      if (event.key !== 'Enter') return;
      // Enter carries you all the way through. It used to advance only when
      // the main feedback box was showing, so the partial-credit and
      // needs-です paths dumped you back on the mouse mid-drill.
      var feedback = document.getElementById('dojo-feedback');
      var nextRow = document.getElementById('dojo-next-btn-row');
      var showingVerdict = (feedback && feedback.style.display === 'block') ||
                           (nextRow && nextRow.style.display !== 'none');
      if (showingVerdict) generateDojoQuestion();
      else checkDojoAnswer();
    }

    function updateDojoDisplay() {
      document.getElementById('dojo-score').textContent = dojoScore.correct + '/' + dojoScore.total;
      var accuracy = dojoScore.total > 0 ? Math.round((dojoScore.correct / dojoScore.total) * 100) : 0;
      document.getElementById('dojo-accuracy').textContent = accuracy + '%';
      
      var streakEl = document.getElementById('dojo-streak');
      if (dojoStreak >= 3) {
        streakEl.innerHTML = '<span class="dojo-streak-fire">🔥</span> ' + dojoStreak;
        streakEl.style.color = '#f97316';
      } else {
        streakEl.textContent = dojoStreak;
        streakEl.style.color = '#fff';
      }
      
      var countEl = document.getElementById('dojo-mistake-count');
      if (dojoMistakeLog.length > 0) {
        countEl.textContent = dojoMistakeLog.length;
        countEl.style.color = '#c41e3a';
      } else {
        countEl.textContent = '';
      }
      
      document.getElementById('dojo-reset-btn').style.display = dojoScore.total > 0 ? 'block' : 'none';
    }

    function resetDojoScore() {
      if (dojoScore.total === 0) {
        showToast('Nothing to reset!', 'warning');
        return;
      }
      dojoScore = { correct: 0, total: 0 };
      dojoStreak = 0;
      dojoMistakeLog = [];
      dojoQuestionHistory = []; // Clear question history too
      dojoTypeHistory = []; // Clear type history for better variety
      updateDojoDisplay();
      showToast('✓ Score reset!', 'success');
    }

    function showDojoReview() {
      var modal = document.getElementById('dojo-review-modal');
      var body = document.getElementById('dojo-review-body');
      
      var accuracy = dojoScore.total > 0 ? Math.round((dojoScore.correct / dojoScore.total) * 100) : 0;
      
      // Build category breakdown
      var mistakesByType = {};
      dojoMistakeLog.forEach(function(m) {
        mistakesByType[m.type] = (mistakesByType[m.type] || 0) + 1;
      });
      
      var html = '<div class="dojo-stats-grid">' +
        '<div class="dojo-stats-grid-item"><div class="value" style="color: #22c55e;">' + dojoScore.correct + '</div><div class="label">正解</div></div>' +
        '<div class="dojo-stats-grid-item"><div class="value" style="color: #ef4444;">' + dojoMistakeLog.length + '</div><div class="label">間違い</div></div>' +
        '<div class="dojo-stats-grid-item"><div class="value" style="color: #60a5fa;">' + accuracy + '%</div><div class="label">精度</div></div>' +
      '</div>';
      
      // Category breakdown
      if (Object.keys(mistakesByType).length > 0) {
        html += '<div class="dojo-section-title">⚠️ カテゴリ別</div><div class="dojo-category-tags">';
        var sorted = Object.entries(mistakesByType).sort(function(a, b) { return b[1] - a[1]; });
        sorted.forEach(function(item) {
          var typeLabel = dojoData.questionTypes[item[0]] ? dojoData.questionTypes[item[0]].jp : item[0];
          html += '<div class="dojo-category-tag">' + typeLabel + ': <strong>' + item[1] + '</strong></div>';
        });
        html += '</div>';
      }
      
      html += '<div class="dojo-section-title">📝 すべての間違い</div>';
      
      if (dojoMistakeLog.length > 0) {
        dojoMistakeLog.slice().reverse().forEach(function(mistake) {
          var typeLabel = dojoData.questionTypes[mistake.type] ? dojoData.questionTypes[mistake.type].jp : mistake.type;
          html += '<div class="dojo-mistake-entry">' +
            '<div class="dojo-mistake-type">' + typeLabel + '</div>' +
            '<div class="dojo-mistake-question">' + mistake.question + '</div>' +
            '<div class="dojo-mistake-answers">' +
              '<div><div class="dojo-mistake-label">Your Answer</div><div style="color: #ef4444;">' + (mistake.userAnswer || '(empty)') + '</div></div>' +
              '<div><div class="dojo-mistake-label">Correct</div><div style="color: #22c55e;">' + mistake.correctAnswer + '</div></div>' +
            '</div>' +
            '<div class="dojo-mistake-hint">💡 ' + mistake.hint + '</div>' +
          '</div>';
        });
      } else {
        html += '<div class="dojo-empty-state"><div style="font-size: 2rem; margin-bottom: 1rem;">🎉</div><div>まだ間違いがない！</div></div>';
      }
      
      body.innerHTML = html;
      modal.classList.add('visible');
    }

    function closeDojoReview() {
      document.getElementById('dojo-review-modal').classList.remove('visible');
    }

    function populateDojoReference() {
      // Dates 1-10
      var datesRef = document.getElementById('dojo-ref-dates');
      if (datesRef) {
        var html = '';
        for (var i = 1; i <= 10; i++) {
          var tip = dojoHiraganaDict[dojoData.dates[i]] || i;
          html += '<div class="dojo-reference-item"><span class="num">' + i + '日</span><span class="dojo-answer-tip" data-en="' + tip + '">' + dojoData.dates[i] + '</span></div>';
        }
        datesRef.innerHTML = html;
      }
      
      // Weekdays - simpler format without kanji to prevent wrapping
      var weekdaysRef = document.getElementById('dojo-ref-weekdays');
      if (weekdaysRef) {
        var html = '';
        var dayAbbrev = ['日', '月', '火', '水', '木', '金', '土'];
        for (var i = 0; i < 7; i++) {
          html += '<div class="dojo-reference-item"><span class="num">' + dayAbbrev[i] + '</span><span class="dojo-answer-tip" data-en="' + dojoData.weekdays[i].en + '">' + dojoData.weekdays[i].jp + '</span> <span style="color: rgba(255,255,255,0.4); font-size: 0.75em;">(' + dojoData.weekdays[i].short + ')</span></div>';
        }
        weekdaysRef.innerHTML = html;
      }
      
      // Relative days
      var relativeRef = document.getElementById('dojo-ref-relative');
      if (relativeRef) {
        var html = '';
        var orderedKeys = ['-2', '-1', '0', '1', '2', '3'];
        orderedKeys.forEach(function(k) {
          html += '<div class="dojo-reference-item"><span class="dojo-answer-tip" data-en="' + relativeLabels[k] + '">' + dojoData.relative[k] + '</span></div>';
        });
        relativeRef.innerHTML = html;
      }
    }

    // Hook into page navigation
    var originalShowPage = showPage;
    showPage = function(pageName) {
      originalShowPage(pageName);
      if (pageName === 'datedojo' && !dojoQuestion) {
        initDojoExtras();
        generateDojoQuestion();
        populateDojoReference();
      }
    };

    // Close modal on background click
    document.addEventListener('click', function(e) {
      if (e.target.classList.contains('dojo-modal-overlay')) {
        closeDojoReview();
      }
    });

    // ============ VOCABULARY BUILDER ============
    const vocabDataList = [
      // Every card carries a topic. "general" is the original deck, which
      // predates topics; the themed sets below can be drilled on their own.

      { japanese: "にちようび", kanji: "日曜日", katakana: null, english: "Sunday", category: "noun", topic: "general", level: "N5" },
      { japanese: "げつようび", kanji: "月曜日", katakana: null, english: "Monday", category: "noun", topic: "general", level: "N5" },
      { japanese: "かようび", kanji: "火曜日", katakana: null, english: "Tuesday", category: "noun", topic: "general", level: "N5" },
      { japanese: "すいようび", kanji: "水曜日", katakana: null, english: "Wednesday", category: "noun", topic: "general", level: "N5" },
      { japanese: "もくようび", kanji: "木曜日", katakana: null, english: "Thursday", category: "noun", topic: "general", level: "N5" },
      { japanese: "きんようび", kanji: "金曜日", katakana: null, english: "Friday", category: "noun", topic: "general", level: "N5" },
      { japanese: "どようび", kanji: "土曜日", katakana: null, english: "Saturday", category: "noun", topic: "general", level: "N5" },
      { japanese: "あか", kanji: "赤", katakana: null, english: "Red (colour)", category: "noun", topic: "general", level: "N5" },
      { japanese: "あお", kanji: "青", katakana: null, english: "Blue (colour)", category: "noun", topic: "general", level: "N5" },
      { japanese: "きいろ", kanji: "黄色", katakana: null, english: "Yellow", category: "noun", topic: "general", level: "N5" },
      { japanese: "みどり", kanji: "緑", katakana: null, english: "Green", category: "noun", topic: "general", level: "N5" },
      { japanese: "ちゃいろ", kanji: "茶色", katakana: null, english: "Brown", category: "noun", topic: "general", level: "N5" },
      { japanese: "しろ", kanji: "白", katakana: null, english: "White", category: "noun", topic: "general", level: "N5" },
      { japanese: "くろ", kanji: "黒", katakana: null, english: "Black", category: "noun", topic: "general", level: "N5" },
      { japanese: "あい", kanji: "愛", katakana: null, english: "Love", category: "noun", topic: "general", level: null },
      { japanese: "あいさつ", kanji: null, katakana: null, english: "Greeting", category: "noun", topic: "general", level: null },
      { japanese: "あせ", kanji: "汗", katakana: null, english: "Sweat", category: "noun", topic: "general", level: null },
      { japanese: "あたま", kanji: "頭", katakana: null, english: "Head", category: "noun", topic: "general", level: "N5" },
      { japanese: "あに", kanji: "兄", katakana: null, english: "Older Brother", category: "noun", topic: "general", level: "N5" },
      { japanese: "あね", kanji: "姉", katakana: null, english: "Older Sister", category: "noun", topic: "general", level: "N5" },
      { japanese: "あめ", kanji: "雨", katakana: null, english: "Rain", category: "noun", topic: "general", level: "N5" },
      { japanese: "いえ", kanji: "家", katakana: null, english: "House", category: "noun", topic: "general", level: "N5" },
      { japanese: "いき", kanji: "息", katakana: null, english: "Breath", category: "noun", topic: "general", level: null },
      { japanese: "いきもの", kanji: "生き物", katakana: null, english: "Living Thing", category: "noun", topic: "general", level: null },
      { japanese: "いけ", kanji: "池", katakana: null, english: "Pond", category: "noun", topic: "general", level: null },
      { japanese: "いざかや", kanji: "居酒屋", katakana: null, english: "Bar", category: "noun", topic: "general", level: null },
      { japanese: "いしき", kanji: "意識", katakana: null, english: "Consciousness", category: "noun", topic: "general", level: null },
      { japanese: "いそうろう", kanji: "居候", katakana: null, english: "Freeloader", category: "noun", topic: "general", level: null },
      { japanese: "いちば", kanji: "市場", katakana: null, english: "Market", category: "noun", topic: "general", level: null },
      { japanese: "いなか", kanji: "田舎", katakana: null, english: "Countryside", category: "noun", topic: "general", level: null },
      { japanese: "いのち", kanji: "命", katakana: null, english: "Life (the living force)", category: "noun", topic: "general", level: null },
      { japanese: "いりぐち", kanji: "入口", katakana: null, english: "Entrance", category: "noun", topic: "general", level: null },
      { japanese: "うさぎ", kanji: "兎", katakana: null, english: "Rabbit", category: "noun", topic: "general", level: null },
      { japanese: "うし", kanji: "牛", katakana: null, english: "Cow", category: "noun", topic: "general", level: null },
      { japanese: "うそ", kanji: "嘘", katakana: null, english: "Lie", category: "noun", topic: "general", level: null },
      { japanese: "うた", kanji: "歌", katakana: null, english: "Song", category: "noun", topic: "general", level: null },
      { japanese: "うちがわ", kanji: "内側", katakana: null, english: "Inner Side", category: "noun", topic: "general", level: null },
      { japanese: "うみ", kanji: "海", katakana: null, english: "Sea", category: "noun", topic: "general", level: "N5" },
      { japanese: "うめ", kanji: "梅", katakana: null, english: "Plum", category: "noun", topic: "general", level: null },
      { japanese: "うんどう", kanji: "運動", katakana: null, english: "Exercise", category: "noun", topic: "general", level: "N4" },
      { japanese: "うんてん", kanji: "運転", katakana: null, english: "Driving", category: "noun", topic: "general", level: null },
      { japanese: "えいが", kanji: "映画", katakana: null, english: "Movie", category: "noun", topic: "general", level: "N5" },
      { japanese: "えいご", kanji: "英語", katakana: null, english: "English", category: "noun", topic: "general", level: "N5" },
      { japanese: "えいよう", kanji: "栄養", katakana: null, english: "Nutrition", category: "noun", topic: "general", level: null },
      { japanese: "えがお", kanji: "笑顔", katakana: null, english: "Smile", category: "noun", topic: "general", level: null },
      { japanese: "えき", kanji: "駅", katakana: null, english: "Station", category: "noun", topic: "general", level: "N5" },
      { japanese: "おうえん", kanji: "応援", katakana: null, english: "Cheering", category: "noun", topic: "general", level: null },
      { japanese: "おうさま", kanji: "王様", katakana: null, english: "King", category: "noun", topic: "general", level: null },
      { japanese: "おうじ", kanji: "王子", katakana: null, english: "Prince", category: "noun", topic: "general", level: null },
      { japanese: "おおあめ", kanji: "大雨", katakana: null, english: "Heavy Rain", category: "noun", topic: "general", level: null },
      { japanese: "おかあさん", kanji: "お母さん", katakana: null, english: "Mother (someone else's)", category: "noun", topic: "general", level: "N5" },
      { japanese: "おかし", kanji: "お菓子", katakana: null, english: "Sweets", category: "noun", topic: "general", level: "N5" },
      { japanese: "おかね", kanji: "お金", katakana: null, english: "Money", category: "noun", topic: "general", level: "N5" },
      { japanese: "おく", kanji: "億", katakana: null, english: "100 Million", category: "noun", topic: "general", level: "N4" },
      { japanese: "おくさん", kanji: "奥さん", katakana: null, english: "Wife (someone else's)", category: "noun", topic: "general", level: "N4" },
      { japanese: "おくりもの", kanji: "贈り物", katakana: null, english: "Gift", category: "noun", topic: "general", level: null },
      { japanese: "おさけ", kanji: "お酒", katakana: null, english: "Alcohol", category: "noun", topic: "general", level: "N5" },
      { japanese: "おじさん", kanji: "叔父さん", katakana: null, english: "Uncle", category: "noun", topic: "general", level: null },
      { japanese: "おそうじ", kanji: "お掃除", katakana: null, english: "Cleaning (polite)", category: "noun", topic: "general", level: null },
      { japanese: "おそれ", kanji: "恐れ", katakana: null, english: "Fear", category: "noun", topic: "general", level: null },
      { japanese: "おとうさん", kanji: "お父さん", katakana: null, english: "Father (someone else's)", category: "noun", topic: "general", level: "N5" },
      { japanese: "おとこ", kanji: "男", katakana: null, english: "Man", category: "noun", topic: "general", level: "N5" },
      { japanese: "おとな", kanji: "大人", katakana: null, english: "Adult", category: "noun", topic: "general", level: "N5" },
      { japanese: "おとうと", kanji: "弟", katakana: null, english: "Younger Brother", category: "noun", topic: "general", level: "N5" },
      { japanese: "おとめ", kanji: "乙女", katakana: null, english: "Maiden", category: "noun", topic: "general", level: null },
      { japanese: "おにぎり", kanji: "お握り", katakana: null, english: "Rice Ball", category: "noun", topic: "general", level: null },
      { japanese: "おばあさん", kanji: "お婆さん", katakana: null, english: "Grandmother", category: "noun", topic: "general", level: "N5" },
      { japanese: "おべんとう", kanji: "お弁当", katakana: null, english: "Boxed Lunch", category: "noun", topic: "general", level: null },
      { japanese: "おまわりさん", kanji: "お巡りさん", katakana: null, english: "Police Officer", category: "noun", topic: "general", level: null },
      { japanese: "おみやげ", kanji: "お土産", katakana: null, english: "Souvenir", category: "noun", topic: "general", level: null },
      { japanese: "おもいで", kanji: "思い出", katakana: null, english: "Memories", category: "noun", topic: "general", level: null },
      { japanese: "おもちゃ", kanji: "玩具", katakana: null, english: "Toy", category: "noun", topic: "general", level: null },
      { japanese: "おや", kanji: "親", katakana: null, english: "Parent", category: "noun", topic: "general", level: "N4" },
      { japanese: "おり", kanji: "檻", katakana: null, english: "Cage", category: "noun", topic: "general", level: null },
      { japanese: "おんがく", kanji: "音楽", katakana: null, english: "Music", category: "noun", topic: "general", level: "N5" },
      { japanese: "おんせん", kanji: "温泉", katakana: null, english: "Hot Spring", category: "noun", topic: "general", level: null },
      { japanese: "がいこく", kanji: "外国", katakana: null, english: "Foreign Country", category: "noun", topic: "general", level: "N4" },
      { japanese: "がくせい", kanji: "学生", katakana: null, english: "Student (college)", category: "noun", topic: "general", level: "N5" },
      { japanese: "がくじゅつ", kanji: "学術", katakana: null, english: "Academic", category: "noun", topic: "general", level: null },
      { japanese: "がんめん", kanji: "顔面", katakana: null, english: "Face", category: "noun", topic: "general", level: null },
      { japanese: "かいがい", kanji: "海外", katakana: null, english: "Overseas", category: "noun", topic: "general", level: null },
      { japanese: "かいぎ", kanji: "会議", katakana: null, english: "Meeting (business)", category: "noun", topic: "general", level: null },
      { japanese: "かいしゃ", kanji: "会社", katakana: null, english: "Company", category: "noun", topic: "general", level: null },
      { japanese: "かいだん", kanji: "階段", katakana: null, english: "Stairs", category: "noun", topic: "general", level: null },
      { japanese: "かいもの", kanji: "買い物", katakana: null, english: "Shopping", category: "noun", topic: "general", level: "N5" },
      { japanese: "かがく", kanji: "科学", katakana: null, english: "Science", category: "noun", topic: "general", level: "N4" },
      { japanese: "かげ", kanji: "影", katakana: null, english: "Shadow", category: "noun", topic: "general", level: null },
      { japanese: "かぎ", kanji: "鍵", katakana: null, english: "Key", category: "noun", topic: "general", level: "N5" },
      { japanese: "かさ", kanji: "傘", katakana: null, english: "Umbrella", category: "noun", topic: "general", level: "N5" },
      { japanese: "かぞく", kanji: "家族", katakana: null, english: "Family", category: "noun", topic: "general", level: "N5" },
      { japanese: "かた", kanji: "肩", katakana: null, english: "Shoulder", category: "noun", topic: "general", level: "N4" },
      { japanese: "かど", kanji: "角", katakana: null, english: "Corner", category: "noun", topic: "general", level: null },
      { japanese: "かなしみ", kanji: "悲しみ", katakana: null, english: "Sadness", category: "noun", topic: "general", level: null },
      { japanese: "かね", kanji: "鐘", katakana: null, english: "Bell", category: "noun", topic: "general", level: null },
      { japanese: "かばん", kanji: null, katakana: "カバン", english: "Bag", category: "noun", topic: "general", level: "N5" },
      { japanese: "かべ", kanji: "壁", katakana: null, english: "Wall", category: "noun", topic: "general", level: null },
      { japanese: "かみ", kanji: "紙", katakana: null, english: "Paper", category: "noun", topic: "general", level: "N5" },
      { japanese: "かみさま", kanji: "神様", katakana: null, english: "God", category: "noun", topic: "general", level: null },
      { japanese: "かめ", kanji: "亀", katakana: null, english: "Turtle", category: "noun", topic: "general", level: null },
      { japanese: "かれし", kanji: "彼氏", katakana: null, english: "Boyfriend", category: "noun", topic: "general", level: null },
      { japanese: "かわ", kanji: "川", katakana: null, english: "River", category: "noun", topic: "general", level: "N5" },
      { japanese: "かんがえ", kanji: "考え", katakana: null, english: "Thought", category: "noun", topic: "general", level: null },
      { japanese: "かんけい", kanji: "関係", katakana: null, english: "Relationship", category: "noun", topic: "general", level: "N3" },
      { japanese: "かんこく", kanji: "韓国", katakana: null, english: "South Korea", category: "noun", topic: "general", level: "N5" },
      { japanese: "きおん", kanji: "気温", katakana: null, english: "Temperature", category: "noun", topic: "general", level: "N4" },
      { japanese: "きかい", kanji: "機械", katakana: null, english: "Machine", category: "noun", topic: "general", level: null },
      { japanese: "きけん", kanji: "危険", katakana: null, english: "Danger", category: "noun", topic: "general", level: null },
      { japanese: "きぶん", kanji: "気分", katakana: null, english: "Mood / How One Feels", category: "noun", topic: "general", level: "N3" },
      { japanese: "きぼう", kanji: "希望", katakana: null, english: "Hope", category: "noun", topic: "general", level: "N3" },
      { japanese: "きもち", kanji: "気持ち", katakana: null, english: "Feeling / Sentiment", category: "noun", topic: "general", level: "N3" },
      { japanese: "きゃく", kanji: "客", katakana: null, english: "Guest", category: "noun", topic: "general", level: null },
      { japanese: "きゃくせん", kanji: "客船", katakana: null, english: "Passenger Ship", category: "noun", topic: "general", level: null },
      { japanese: "きゃくほん", kanji: "脚本", katakana: null, english: "Script", category: "noun", topic: "general", level: null },
      { japanese: "きゃたつ", kanji: "脚立", katakana: null, english: "Stepladder", category: "noun", topic: "general", level: null },
      { japanese: "きゅうか", kanji: "休暇", katakana: null, english: "Holiday", category: "noun", topic: "general", level: null },
      { japanese: "きゅうきゅうしゃ", kanji: "救急車", katakana: null, english: "Ambulance", category: "noun", topic: "general", level: null },
      { japanese: "きゅうり", kanji: null, katakana: "キュウリ", english: "Cucumber", category: "noun", topic: "general", level: "N4" },
      { japanese: "きゅうよ", kanji: "給与", katakana: null, english: "Salary", category: "noun", topic: "general", level: null },
      { japanese: "きょう", kanji: "今日", katakana: null, english: "Today", category: "noun", topic: "general", level: "N5" },
      { japanese: "きょうかしょ", kanji: "教科書", katakana: null, english: "Textbook", category: "noun", topic: "general", level: "N4" },
      { japanese: "きょうしつ", kanji: "教室", katakana: null, english: "Classroom", category: "noun", topic: "general", level: "N5" },
      { japanese: "きょういん", kanji: "教員", katakana: null, english: "Teaching Staff", category: "noun", topic: "general", level: null },
      { japanese: "きょうみ", kanji: "興味", katakana: null, english: "Interest", category: "noun", topic: "general", level: null },
      { japanese: "きらい", kanji: "嫌い", katakana: null, english: "Dislike", category: "noun", topic: "general", level: null },
      { japanese: "きろく", kanji: "記録", katakana: null, english: "Record", category: "noun", topic: "general", level: null },
      { japanese: "ぎいん", kanji: "議員", katakana: null, english: "Legislator", category: "noun", topic: "general", level: null },
      { japanese: "ぎじゅつ", kanji: "技術", katakana: null, english: "Technology", category: "noun", topic: "general", level: "N3" },
      { japanese: "ぎもん", kanji: "疑問", katakana: null, english: "Question", category: "noun", topic: "general", level: null },
      { japanese: "ぎむ", kanji: "義務", katakana: null, english: "Duty", category: "noun", topic: "general", level: null },
      { japanese: "ぎゃく", kanji: "逆", katakana: null, english: "Reverse", category: "noun", topic: "general", level: null },
      { japanese: "ぎゅうにく", kanji: "牛肉", katakana: null, english: "Beef", category: "noun", topic: "general", level: "N5" },
      { japanese: "ぎゅうにゅう", kanji: "牛乳", katakana: null, english: "Milk", category: "noun", topic: "general", level: "N5" },
      { japanese: "ぎょうぎ", kanji: "行儀", katakana: null, english: "Manners", category: "noun", topic: "general", level: null },
      { japanese: "ぎょうしゃ", kanji: "業者", katakana: null, english: "Merchant", category: "noun", topic: "general", level: null },
      { japanese: "ぎょうじ", kanji: "行事", katakana: null, english: "Event (function)", category: "noun", topic: "general", level: null },
      { japanese: "ぎょぎょう", kanji: "漁業", katakana: null, english: "Fishery Industry", category: "noun", topic: "general", level: null },
      { japanese: "ぎろん", kanji: "議論", katakana: null, english: "Argument", category: "noun", topic: "general", level: null },
      { japanese: "ぐうぜん", kanji: "偶然", katakana: null, english: "By Chance", category: "noun", topic: "general", level: null },
      { japanese: "ぐち", kanji: "愚痴", katakana: null, english: "Complaint", category: "noun", topic: "general", level: null },
      { japanese: "ぐんたい", kanji: "軍隊", katakana: null, english: "Military", category: "noun", topic: "general", level: null },
      { japanese: "ぐんて", kanji: "軍手", katakana: null, english: "Work Gloves", category: "noun", topic: "general", level: null },
      { japanese: "くうき", kanji: "空気", katakana: null, english: "Air", category: "noun", topic: "general", level: null },
      { japanese: "くさ", kanji: "草", katakana: null, english: "Grass", category: "noun", topic: "general", level: null },
      { japanese: "くだもの", kanji: "果物", katakana: null, english: "Fruit", category: "noun", topic: "general", level: "N5" },
      { japanese: "くつ", kanji: "靴", katakana: null, english: "Shoes", category: "noun", topic: "general", level: "N5" },
      { japanese: "くつした", kanji: "靴下", katakana: null, english: "Socks", category: "noun", topic: "general", level: "N5" },
      { japanese: "くび", kanji: "首", katakana: null, english: "Neck", category: "noun", topic: "general", level: "N5" },
      { japanese: "くも", kanji: "雲", katakana: null, english: "Cloud", category: "noun", topic: "general", level: null },
      { japanese: "くるま", kanji: "車", katakana: null, english: "Car", category: "noun", topic: "general", level: "N5" },
      { japanese: "けいかく", kanji: "計画", katakana: null, english: "Plan / Project", category: "noun", topic: "general", level: null },
      { japanese: "けいさん", kanji: "計算", katakana: null, english: "Calculation", category: "noun", topic: "general", level: null },
      { japanese: "けいざい", kanji: "経済", katakana: null, english: "Economics", category: "noun", topic: "general", level: "N3" },
      { japanese: "けが", kanji: "怪我", katakana: null, english: "Injury", category: "noun", topic: "general", level: null },
      { japanese: "げき", kanji: "劇", katakana: null, english: "Theater Play", category: "noun", topic: "general", level: null },
      { japanese: "けしき", kanji: "景色", katakana: null, english: "Scenery", category: "noun", topic: "general", level: null },
      { japanese: "けしょう", kanji: "化粧", katakana: null, english: "Makeup", category: "noun", topic: "general", level: null },
      { japanese: "けっか", kanji: "結果", katakana: null, english: "Result", category: "noun", topic: "general", level: "N3" },
      { japanese: "けっこん", kanji: "結婚", katakana: null, english: "Marriage", category: "noun", topic: "general", level: null },
      { japanese: "げっきゅう", kanji: "月給", katakana: null, english: "Monthly Salary", category: "noun", topic: "general", level: null },
      { japanese: "げつまつ", kanji: "月末", katakana: null, english: "End of Month", category: "noun", topic: "general", level: null },
      { japanese: "けむり", kanji: "煙", katakana: null, english: "Smoke", category: "noun", topic: "general", level: null },
      { japanese: "けんきゅう", kanji: "研究", katakana: null, english: "Research", category: "noun", topic: "general", level: null },
      { japanese: "けんこう", kanji: "健康", katakana: null, english: "Health", category: "noun", topic: "general", level: null },
      { japanese: "こいびと", kanji: "恋人", katakana: null, english: "Lover", category: "noun", topic: "general", level: null },
      { japanese: "こうこく", kanji: "広告", katakana: null, english: "Advertisement", category: "noun", topic: "general", level: null },
      { japanese: "こうさてん", kanji: "交差点", katakana: null, english: "Intersection", category: "noun", topic: "general", level: "N5" },
      { japanese: "こうじょう", kanji: "工場", katakana: null, english: "Factory", category: "noun", topic: "general", level: null },
      { japanese: "こうちゃ", kanji: "紅茶", katakana: null, english: "Black Tea", category: "noun", topic: "general", level: null },
      { japanese: "こうつう", kanji: "交通", katakana: null, english: "Traffic", category: "noun", topic: "general", level: null },
      { japanese: "ごうかく", kanji: "合格", katakana: null, english: "Pass Exam", category: "noun", topic: "general", level: null },
      { japanese: "ごうけい", kanji: "合計", katakana: null, english: "Total", category: "noun", topic: "general", level: null },
      { japanese: "ごうとう", kanji: "強盗", katakana: null, english: "Robber", category: "noun", topic: "general", level: null },
      { japanese: "こえ", kanji: "声", katakana: null, english: "Voice", category: "noun", topic: "general", level: null },
      { japanese: "こころ", kanji: "心", katakana: null, english: "Heart", category: "noun", topic: "general", level: null },
      { japanese: "ことば", kanji: "言葉", katakana: null, english: "Words", category: "noun", topic: "general", level: "N5" },
      { japanese: "こども", kanji: "子供", katakana: null, english: "Child", category: "noun", topic: "general", level: "N5" },
      { japanese: "ごはん", kanji: "ご飯", katakana: null, english: "Rice", category: "noun", topic: "general", level: "N5" },
      { japanese: "ごま", kanji: "胡麻", katakana: null, english: "Sesame", category: "noun", topic: "general", level: null },
      { japanese: "ごみ", kanji: null, katakana: "ゴミ", english: "Garbage", category: "noun", topic: "general", level: null },
      { japanese: "こめ", kanji: "米", katakana: null, english: "Uncooked Rice", category: "noun", topic: "general", level: null },
      { japanese: "ざいさん", kanji: "財産", katakana: null, english: "Property", category: "noun", topic: "general", level: null },
      { japanese: "ざいもく", kanji: "材木", katakana: null, english: "Timber", category: "noun", topic: "general", level: null },
      { japanese: "ざっし", kanji: "雑誌", katakana: null, english: "Magazine", category: "noun", topic: "general", level: "N5" },
      { japanese: "さかな", kanji: "魚", katakana: null, english: "Fish", category: "noun", topic: "general", level: "N5" },
      { japanese: "さくぶん", kanji: "作文", katakana: null, english: "Composition", category: "noun", topic: "general", level: null },
      { japanese: "さくら", kanji: "桜", katakana: null, english: "Cherry Blossoms", category: "noun", topic: "general", level: null },
      { japanese: "さけ", kanji: "鮭", katakana: null, english: "Salmon", category: "noun", topic: "general", level: null },
      { japanese: "さとう", kanji: "砂糖", katakana: null, english: "Sugar", category: "noun", topic: "general", level: "N5" },
      { japanese: "さら", kanji: "皿", katakana: null, english: "Plate", category: "noun", topic: "general", level: null },
      { japanese: "しお", kanji: "塩", katakana: null, english: "Salt", category: "noun", topic: "general", level: "N5" },
      { japanese: "しき", kanji: "四季", katakana: null, english: "Four Seasons", category: "noun", topic: "general", level: null },
      { japanese: "じかい", kanji: "次回", katakana: null, english: "Next Time", category: "noun", topic: "general", level: null },
      { japanese: "じかん", kanji: "時間", katakana: null, english: "Time", category: "noun", topic: "general", level: "N5" },
      { japanese: "しけん", kanji: "試験", katakana: null, english: "Exam", category: "noun", topic: "general", level: "N4" },
      { japanese: "じけん", kanji: "事件", katakana: null, english: "Incident", category: "noun", topic: "general", level: null },
      { japanese: "じこ", kanji: "事故", katakana: null, english: "Accident", category: "noun", topic: "general", level: null },
      { japanese: "しごと", kanji: "仕事", katakana: null, english: "Work", category: "noun", topic: "general", level: "N5" },
      { japanese: "じさつ", kanji: "自殺", katakana: null, english: "Suicide", category: "noun", topic: "general", level: null },
      { japanese: "じしん", kanji: "地震", katakana: null, english: "Earthquake", category: "noun", topic: "general", level: null },
      { japanese: "しずか", kanji: "静か", katakana: null, english: "Quiet", category: "noun", topic: "general", level: "N5" },
      { japanese: "した", kanji: "下", katakana: null, english: "Below", category: "noun", topic: "general", level: "N5" },
      { japanese: "じてんしゃ", kanji: "自転車", katakana: null, english: "Bicycle", category: "noun", topic: "general", level: "N5" },
      { japanese: "じぶん", kanji: "自分", katakana: null, english: "Self", category: "noun", topic: "general", level: null },
      { japanese: "じゃどう", kanji: "邪道", katakana: null, english: "Wrong Way", category: "noun", topic: "general", level: null },
      { japanese: "じゃっかん", kanji: "若干", katakana: null, english: "Somewhat (formal)", category: "noun", topic: "general", level: null },
      { japanese: "じゃま", kanji: "邪魔", katakana: null, english: "Hindrance", category: "noun", topic: "general", level: null },
      { japanese: "じゃんけん", kanji: null, katakana: "ジャンケン", english: "Rock Paper Scissors", category: "noun", topic: "general", level: null },
      { japanese: "しゃかい", kanji: "社会", katakana: null, english: "Society", category: "noun", topic: "general", level: "N3" },
      { japanese: "しゃしん", kanji: "写真", katakana: null, english: "Photo", category: "noun", topic: "general", level: "N5" },
      { japanese: "しゃちょう", kanji: "社長", katakana: null, english: "President", category: "noun", topic: "general", level: null },
      { japanese: "しゃっきん", kanji: "借金", katakana: null, english: "Debt", category: "noun", topic: "general", level: null },
      { japanese: "しゅうかい", kanji: "集会", katakana: null, english: "Gathering / Assembly", category: "noun", topic: "general", level: null },
      { japanese: "しゅうかん", kanji: "習慣", katakana: null, english: "Habit", category: "noun", topic: "general", level: "N3" },
      { japanese: "しゅうきょう", kanji: "宗教", katakana: null, english: "Religion", category: "noun", topic: "general", level: null },
      { japanese: "しゅうごう", kanji: "集合", katakana: null, english: "Meeting Up / Assembling", category: "noun", topic: "general", level: null },
      { japanese: "しゅくだい", kanji: "宿題", katakana: null, english: "Homework", category: "noun", topic: "general", level: "N4" },
      { japanese: "しゅみ", kanji: "趣味", katakana: null, english: "Hobby", category: "noun", topic: "general", level: "N4" },
      { japanese: "じゅうしょ", kanji: "住所", katakana: null, english: "Address", category: "noun", topic: "general", level: null },
      { japanese: "じゅうしょう", kanji: "重傷", katakana: null, english: "Severe Injury", category: "noun", topic: "general", level: null },
      { japanese: "じゅうたい", kanji: "渋滞", katakana: null, english: "Traffic Jam", category: "noun", topic: "general", level: null },
      { japanese: "じゅうどう", kanji: "柔道", katakana: null, english: "Judo", category: "noun", topic: "general", level: "N4" },
      { japanese: "しょうが", kanji: "生姜", katakana: null, english: "Ginger", category: "noun", topic: "general", level: null },
      { japanese: "しょうがっこう", kanji: "小学校", katakana: null, english: "Elementary School", category: "noun", topic: "general", level: null },
      { japanese: "しょうがつ", kanji: "正月", katakana: null, english: "New Year", category: "noun", topic: "general", level: null },
      { japanese: "しょうか", kanji: "消化", katakana: null, english: "Digestion", category: "noun", topic: "general", level: null },
      { japanese: "しょうき", kanji: "正気", katakana: null, english: "Sanity", category: "noun", topic: "general", level: null },
      { japanese: "しょうせつ", kanji: "小説", katakana: null, english: "Novel", category: "noun", topic: "general", level: null },
      { japanese: "しょうたい", kanji: "招待", katakana: null, english: "Invitation", category: "noun", topic: "general", level: null },
      { japanese: "じょうおう", kanji: "女王", katakana: null, english: "Queen", category: "noun", topic: "general", level: null },
      { japanese: "じょうけん", kanji: "条件", katakana: null, english: "Condition", category: "noun", topic: "general", level: null },
      { japanese: "じょうきょう", kanji: "状況", katakana: null, english: "Situation", category: "noun", topic: "general", level: "N3" },
      { japanese: "じょうしき", kanji: "常識", katakana: null, english: "Common Sense", category: "noun", topic: "general", level: null },
      { japanese: "しんぶん", kanji: "新聞", katakana: null, english: "Newspaper", category: "noun", topic: "general", level: "N5" },
      { japanese: "すいえい", kanji: "水泳", katakana: null, english: "Swimming", category: "noun", topic: "general", level: "N4" },
      { japanese: "すうがく", kanji: "数学", katakana: null, english: "Math", category: "noun", topic: "general", level: "N4" },
      { japanese: "すうじ", kanji: "数字", katakana: null, english: "Number", category: "noun", topic: "general", level: null },
      { japanese: "すし", kanji: "寿司", katakana: null, english: "Sushi", category: "noun", topic: "general", level: null },
      { japanese: "すな", kanji: "砂", katakana: null, english: "Sand", category: "noun", topic: "general", level: null },
      { japanese: "ずいひつ", kanji: "随筆", katakana: null, english: "Essay", category: "noun", topic: "general", level: null },
      { japanese: "ずかん", kanji: "図鑑", katakana: null, english: "Picture Dictionary", category: "noun", topic: "general", level: null },
      { japanese: "ずつう", kanji: "頭痛", katakana: null, english: "Headache", category: "noun", topic: "general", level: null },
      { japanese: "せいかつ", kanji: "生活", katakana: null, english: "Life (daily living)", category: "noun", topic: "general", level: "N3" },
      { japanese: "せいこう", kanji: "成功", katakana: null, english: "Success", category: "noun", topic: "general", level: null },
      { japanese: "せいじ", kanji: "政治", katakana: null, english: "Politics", category: "noun", topic: "general", level: "N3" },
      { japanese: "せいと", kanji: "生徒", katakana: null, english: "Pupil (school)", category: "noun", topic: "general", level: "N4" },
      { japanese: "ぜいきん", kanji: "税金", katakana: null, english: "Tax", category: "noun", topic: "general", level: null },
      { japanese: "ぜいたく", kanji: "贅沢", katakana: null, english: "Luxury", category: "noun", topic: "general", level: null },
      { japanese: "ぜいにく", kanji: "贅肉", katakana: null, english: "Flab", category: "noun", topic: "general", level: null },
      { japanese: "せなか", kanji: "背中", katakana: null, english: "Back (of the body)", category: "noun", topic: "general", level: "N4" },
      { japanese: "せんせい", kanji: "先生", katakana: null, english: "Teacher / Sensei", category: "noun", topic: "general", level: "N5" },
      { japanese: "せんたく", kanji: "洗濯", katakana: null, english: "Laundry", category: "noun", topic: "general", level: "N5" },
      { japanese: "ぜっけい", kanji: "絶景", katakana: null, english: "Spectacular Scenery", category: "noun", topic: "general", level: null },
      { japanese: "そつぎょう", kanji: "卒業", katakana: null, english: "Graduation", category: "noun", topic: "general", level: "N4" },
      { japanese: "そうじ", kanji: "掃除", katakana: null, english: "Cleaning", category: "noun", topic: "general", level: "N5" },
      { japanese: "ぞう", kanji: "象", katakana: null, english: "Elephant", category: "noun", topic: "general", level: null },
      { japanese: "ぞうか", kanji: "増加", katakana: null, english: "Increase", category: "noun", topic: "general", level: null },
      { japanese: "ぞうせん", kanji: "造船", katakana: null, english: "Shipbuilding", category: "noun", topic: "general", level: null },
      { japanese: "ぞくご", kanji: "俗語", katakana: null, english: "Slang", category: "noun", topic: "general", level: null },
      { japanese: "そと", kanji: "外", katakana: null, english: "Outside", category: "noun", topic: "general", level: "N5" },
      { japanese: "そば", kanji: "蕎麦", katakana: null, english: "Buckwheat Noodles", category: "noun", topic: "general", level: "N4" },
      { japanese: "そふ", kanji: "祖父", katakana: null, english: "Grandfather", category: "noun", topic: "general", level: "N5" },
      { japanese: "そら", kanji: "空", katakana: null, english: "Sky", category: "noun", topic: "general", level: "N5" },
      { japanese: "だいがく", kanji: "大学", katakana: null, english: "University", category: "noun", topic: "general", level: "N5" },
      { japanese: "だいどころ", kanji: "台所", katakana: null, english: "Kitchen", category: "noun", topic: "general", level: "N5" },
      { japanese: "たいいく", kanji: "体育", katakana: null, english: "Physical Education", category: "noun", topic: "general", level: null },
      { japanese: "たいじゅう", kanji: "体重", katakana: null, english: "Body Weight", category: "noun", topic: "general", level: null },
      { japanese: "たから", kanji: "宝", katakana: null, english: "Treasure", category: "noun", topic: "general", level: null },
      { japanese: "たけ", kanji: "竹", katakana: null, english: "Bamboo", category: "noun", topic: "general", level: null },
      { japanese: "だます", kanji: "騙す", katakana: null, english: "To Deceive", category: "verb", topic: "general", level: null },
      { japanese: "だんせい", kanji: "男性", katakana: null, english: "Male", category: "noun", topic: "general", level: null },
      { japanese: "たてもの", kanji: "建物", katakana: null, english: "Building", category: "noun", topic: "general", level: null },
      { japanese: "たび", kanji: "旅", katakana: null, english: "Travel", category: "noun", topic: "general", level: null },
      { japanese: "ちか", kanji: "地下", katakana: null, english: "Underground", category: "noun", topic: "general", level: null },
      { japanese: "ちこく", kanji: "遅刻", katakana: null, english: "Late", category: "noun", topic: "general", level: null },
      { japanese: "ちしき", kanji: "知識", katakana: null, english: "Knowledge", category: "noun", topic: "general", level: "N3" },
      { japanese: "ちち", kanji: "父", katakana: null, english: "Father (one's own)", category: "noun", topic: "general", level: "N5" },
      { japanese: "ちゃ", kanji: "茶", katakana: null, english: "Tea", category: "noun", topic: "general", level: null },
      { japanese: "ちゃくもく", kanji: "着目", katakana: null, english: "Focus", category: "noun", topic: "general", level: null },
      { japanese: "ちゃわん", kanji: "茶碗", katakana: null, english: "Tea Bowl", category: "noun", topic: "general", level: null },
      { japanese: "ちゅうい", kanji: "注意", katakana: null, english: "Caution", category: "noun", topic: "general", level: null },
      { japanese: "ちゅうがっこう", kanji: "中学校", katakana: null, english: "Middle School", category: "noun", topic: "general", level: null },
      { japanese: "ちゅうこ", kanji: "中古", katakana: null, english: "Second Hand", category: "noun", topic: "general", level: null },
      { japanese: "ちゅうし", kanji: "中止", katakana: null, english: "Cancellation", category: "noun", topic: "general", level: null },
      { japanese: "ちゅうしゃ", kanji: "注射", katakana: null, english: "Injection", category: "noun", topic: "general", level: null },
      { japanese: "ちゅうしょく", kanji: "昼食", katakana: null, english: "Lunch", category: "noun", topic: "general", level: null },
      { japanese: "ちゅうねん", kanji: "中年", katakana: null, english: "Middle Aged", category: "noun", topic: "general", level: null },
      { japanese: "ちょうかん", kanji: "朝刊", katakana: null, english: "Morning Newspaper", category: "noun", topic: "general", level: null },
      { japanese: "ちょうさ", kanji: "調査", katakana: null, english: "Investigation", category: "noun", topic: "general", level: null },
      { japanese: "ちょうしょ", kanji: "長所", katakana: null, english: "Strong Point", category: "noun", topic: "general", level: null },
      { japanese: "ちょきん", kanji: "貯金", katakana: null, english: "Savings", category: "noun", topic: "general", level: null },
      { japanese: "ちょしゃ", kanji: "著者", katakana: null, english: "Author (of a work)", category: "noun", topic: "general", level: null },
      { japanese: "ちょうみりょう", kanji: "調味料", katakana: null, english: "Condiment", category: "noun", topic: "general", level: "N4" },
      { japanese: "ちず", kanji: "地図", katakana: null, english: "Map", category: "noun", topic: "general", level: null },
      { japanese: "つき", kanji: "月", katakana: null, english: "Moon", category: "noun", topic: "general", level: null },
      { japanese: "つくえ", kanji: "机", katakana: null, english: "Desk", category: "noun", topic: "general", level: "N5" },
      { japanese: "つま", kanji: "妻", katakana: null, english: "Wife (one's own)", category: "noun", topic: "general", level: "N5" },
      { japanese: "つみ", kanji: "罪", katakana: null, english: "Crime", category: "noun", topic: "general", level: null },
      { japanese: "つめ", kanji: "爪", katakana: null, english: "Fingernail", category: "noun", topic: "general", level: "N4" },
      { japanese: "てがみ", kanji: "手紙", katakana: null, english: "Letter", category: "noun", topic: "general", level: "N5" },
      { japanese: "てき", kanji: "敵", katakana: null, english: "Enemy", category: "noun", topic: "general", level: null },
      { japanese: "できごと", kanji: "出来事", katakana: null, english: "Event / Occurrence", category: "noun", topic: "general", level: null },
      { japanese: "でぐち", kanji: "出口", katakana: null, english: "Exit", category: "noun", topic: "general", level: null },
      { japanese: "てら", kanji: "寺", katakana: null, english: "Temple", category: "noun", topic: "general", level: null },
      { japanese: "てんき", kanji: "天気", katakana: null, english: "Weather", category: "noun", topic: "general", level: "N5" },
      { japanese: "でんき", kanji: "電気", katakana: null, english: "Electricity", category: "noun", topic: "general", level: "N5" },
      { japanese: "でんしゃ", kanji: "電車", katakana: null, english: "Train", category: "noun", topic: "general", level: "N5" },
      { japanese: "でんち", kanji: "電池", katakana: null, english: "Battery", category: "noun", topic: "general", level: null },
      { japanese: "でんわ", kanji: "電話", katakana: null, english: "Phone", category: "noun", topic: "general", level: "N5" },
      { japanese: "といれ", kanji: null, katakana: "トイレ", english: "Toilet", category: "noun", topic: "general", level: "N5" },
      { japanese: "とけい", kanji: "時計", katakana: null, english: "Clock", category: "noun", topic: "general", level: "N5" },
      { japanese: "ところ", kanji: "所", katakana: null, english: "Place / Spot", category: "noun", topic: "general", level: null },
      { japanese: "とし", kanji: "年", katakana: null, english: "Year", category: "noun", topic: "general", level: null },
      { japanese: "としょかん", kanji: "図書館", katakana: null, english: "Library", category: "noun", topic: "general", level: "N5" },
      { japanese: "どうぐ", kanji: "道具", katakana: null, english: "Tool", category: "noun", topic: "general", level: null },
      { japanese: "どうし", kanji: "動詞", katakana: null, english: "Verb", category: "noun", topic: "general", level: null },
      { japanese: "どうぶつ", kanji: "動物", katakana: null, english: "Animal", category: "noun", topic: "general", level: null },
      { japanese: "どりょく", kanji: "努力", katakana: null, english: "Effort", category: "noun", topic: "general", level: null },
      { japanese: "とり", kanji: "鳥", katakana: null, english: "Bird", category: "noun", topic: "general", level: "N5" },
      { japanese: "なかま", kanji: "仲間", katakana: null, english: "Companion / Peer", category: "noun", topic: "general", level: null },
      { japanese: "なつ", kanji: "夏", katakana: null, english: "Summer", category: "noun", topic: "general", level: "N5" },
      { japanese: "なべ", kanji: "鍋", katakana: null, english: "Pot", category: "noun", topic: "general", level: "N4" },
      { japanese: "なまえ", kanji: "名前", katakana: null, english: "Name", category: "noun", topic: "general", level: "N5" },
      { japanese: "なみだ", kanji: "涙", katakana: null, english: "Tears", category: "noun", topic: "general", level: null },
      { japanese: "におい", kanji: "匂い", katakana: null, english: "Smell", category: "noun", topic: "general", level: null },
      { japanese: "にく", kanji: "肉", katakana: null, english: "Meat", category: "noun", topic: "general", level: "N5" },
      { japanese: "にし", kanji: "西", katakana: null, english: "West", category: "noun", topic: "general", level: "N5" },
      { japanese: "にほん", kanji: "日本", katakana: null, english: "Japan", category: "noun", topic: "general", level: "N5" },
      { japanese: "にゅうがく", kanji: "入学", katakana: null, english: "School Admission", category: "noun", topic: "general", level: "N4" },
      { japanese: "にゅうがん", kanji: "乳癌", katakana: null, english: "Breast Cancer", category: "noun", topic: "general", level: null },
      { japanese: "にゅうじょう", kanji: "入場", katakana: null, english: "Admission to Place", category: "noun", topic: "general", level: null },
      { japanese: "にゅうしゃ", kanji: "入社", katakana: null, english: "Joining a Company", category: "noun", topic: "general", level: null },
      { japanese: "にゅういん", kanji: "入院", katakana: null, english: "Hospitalization", category: "noun", topic: "general", level: null },
      { japanese: "にんげん", kanji: "人間", katakana: null, english: "Human", category: "noun", topic: "general", level: null },
      { japanese: "にんぎょう", kanji: "人形", katakana: null, english: "Doll", category: "noun", topic: "general", level: null },
      { japanese: "にわ", kanji: "庭", katakana: null, english: "Garden", category: "noun", topic: "general", level: "N5" },
      { japanese: "にょう", kanji: "尿", katakana: null, english: "Urine", category: "noun", topic: "general", level: null },
      { japanese: "にょうぼう", kanji: "女房", katakana: null, english: "Wife (old-fashioned)", category: "noun", topic: "general", level: null },
      { japanese: "にゃんこ", kanji: null, katakana: "ニャンコ", english: "Kitty", category: "noun", topic: "general", level: null },
      { japanese: "ぬう", kanji: "縫う", katakana: null, english: "To Sew", category: "verb", topic: "general", level: null },
      { japanese: "ぬすむ", kanji: "盗む", katakana: null, english: "To Steal", category: "verb", topic: "general", level: null },
      { japanese: "ぬの", kanji: "布", katakana: null, english: "Fabric", category: "noun", topic: "general", level: null },
      { japanese: "ねこ", kanji: "猫", katakana: null, english: "Cat", category: "noun", topic: "general", level: "N5" },
      { japanese: "ねだん", kanji: "値段", katakana: null, english: "Price", category: "noun", topic: "general", level: null },
      { japanese: "ねつ", kanji: "熱", katakana: null, english: "Fever", category: "noun", topic: "general", level: null },
      { japanese: "のど", kanji: "喉", katakana: null, english: "Throat", category: "noun", topic: "general", level: "N4" },
      { japanese: "のみもの", kanji: "飲み物", katakana: null, english: "Drink", category: "noun", topic: "general", level: "N5" },
      { japanese: "のり", kanji: "海苔", katakana: null, english: "Seaweed", category: "noun", topic: "general", level: null },
      { japanese: "のりもの", kanji: "乗り物", katakana: null, english: "Vehicle", category: "noun", topic: "general", level: null },
      { japanese: "はいしゃ", kanji: "歯医者", katakana: null, english: "Dentist", category: "noun", topic: "general", level: "N4" },
      { japanese: "はか", kanji: "墓", katakana: null, english: "Grave", category: "noun", topic: "general", level: null },
      { japanese: "はがき", kanji: "葉書", katakana: null, english: "Postcard", category: "noun", topic: "general", level: "N5" },
      { japanese: "はこ", kanji: "箱", katakana: null, english: "Box", category: "noun", topic: "general", level: null },
      { japanese: "はくぶつかん", kanji: "博物館", katakana: null, english: "Museum", category: "noun", topic: "general", level: null },
      { japanese: "ばいきん", kanji: "黴菌", katakana: null, english: "Germ", category: "noun", topic: "general", level: null },
      { japanese: "ばい", kanji: "倍", katakana: null, english: "Double", category: "noun", topic: "general", level: null },
      { japanese: "はな", kanji: "花", katakana: null, english: "Flower", category: "noun", topic: "general", level: "N5" },
      { japanese: "はは", kanji: "母", katakana: null, english: "Mother (one's own)", category: "noun", topic: "general", level: "N5" },
      { japanese: "はる", kanji: "春", katakana: null, english: "Spring", category: "noun", topic: "general", level: "N5" },
      { japanese: "ばしょ", kanji: "場所", katakana: null, english: "Location / Venue", category: "noun", topic: "general", level: null },
      { japanese: "ひがし", kanji: "東", katakana: null, english: "East", category: "noun", topic: "general", level: "N5" },
      { japanese: "ひかり", kanji: "光", katakana: null, english: "Light", category: "noun", topic: "general", level: null },
      { japanese: "ひこうき", kanji: "飛行機", katakana: null, english: "Airplane", category: "noun", topic: "general", level: "N5" },
      { japanese: "ひふ", kanji: "皮膚", katakana: null, english: "Skin", category: "noun", topic: "general", level: null },
      { japanese: "ひゃっかじてん", kanji: "百科事典", katakana: null, english: "Encyclopedia", category: "noun", topic: "general", level: null },
      { japanese: "びゃくや", kanji: "白夜", katakana: null, english: "The Midnight Sun", category: "noun", topic: "general", level: null },
      { japanese: "びよう", kanji: "美容", katakana: null, english: "Beauty", category: "noun", topic: "general", level: null },
      { japanese: "びょう", kanji: "秒", katakana: null, english: "Second", category: "noun", topic: "general", level: "N4" },
      { japanese: "びょうき", kanji: "病気", katakana: null, english: "Illness", category: "noun", topic: "general", level: null },
      { japanese: "びょういん", kanji: "病院", katakana: null, english: "Hospital", category: "noun", topic: "general", level: "N5" },
      { japanese: "びょうどう", kanji: "平等", katakana: null, english: "Equality", category: "noun", topic: "general", level: null },
      { japanese: "ひょう", kanji: "表", katakana: null, english: "Chart", category: "noun", topic: "general", level: null },
      { japanese: "ひょうか", kanji: "評価", katakana: null, english: "Evaluation", category: "noun", topic: "general", level: null },
      { japanese: "ひょうげん", kanji: "表現", katakana: null, english: "Expression", category: "noun", topic: "general", level: null },
      { japanese: "ひょうし", kanji: "表紙", katakana: null, english: "Book Cover", category: "noun", topic: "general", level: null },
      { japanese: "ひょうじゅん", kanji: "標準", katakana: null, english: "Standard", category: "noun", topic: "general", level: null },
      { japanese: "びじゅつかん", kanji: "美術館", katakana: null, english: "Art Museum", category: "noun", topic: "general", level: null },
      { japanese: "びちく", kanji: "備蓄", katakana: null, english: "Stock", category: "noun", topic: "general", level: null },
      { japanese: "びん", kanji: "瓶", katakana: null, english: "Jar", category: "noun", topic: "general", level: null },
      { japanese: "ふうせん", kanji: "風船", katakana: null, english: "Balloon", category: "noun", topic: "general", level: null },
      { japanese: "ぶき", kanji: "武器", katakana: null, english: "Weapon", category: "noun", topic: "general", level: null },
      { japanese: "ふく", kanji: "服", katakana: null, english: "Clothes", category: "noun", topic: "general", level: "N5" },
      { japanese: "ぶじ", kanji: "無事", katakana: null, english: "Safety", category: "noun", topic: "general", level: null },
      { japanese: "ぶた", kanji: "豚", katakana: null, english: "Pig", category: "noun", topic: "general", level: null },
      { japanese: "ふたご", kanji: "双子", katakana: null, english: "Twins", category: "noun", topic: "general", level: null },
      { japanese: "ぶどう", kanji: "葡萄", katakana: null, english: "Grape", category: "noun", topic: "general", level: null },
      { japanese: "ふね", kanji: "船", katakana: null, english: "Boat", category: "noun", topic: "general", level: "N5" },
      { japanese: "ぶんか", kanji: "文化", katakana: null, english: "Culture", category: "noun", topic: "general", level: "N3" },
      { japanese: "ふゆ", kanji: "冬", katakana: null, english: "Winter", category: "noun", topic: "general", level: "N5" },
      { japanese: "ふろ", kanji: "風呂", katakana: null, english: "Bath", category: "noun", topic: "general", level: null },
      { japanese: "べっそう", kanji: "別荘", katakana: null, english: "Holiday House", category: "noun", topic: "general", level: null },
      { japanese: "べんきょう", kanji: "勉強", katakana: null, english: "Study", category: "noun", topic: "general", level: null },
      { japanese: "べんごし", kanji: "弁護士", katakana: null, english: "Lawyer", category: "noun", topic: "general", level: "N4" },
      { japanese: "べんとう", kanji: "弁当", katakana: null, english: "Lunch Box", category: "noun", topic: "general", level: "N5" },
      { japanese: "へいじつ", kanji: "平日", katakana: null, english: "Weekday", category: "noun", topic: "general", level: "N4" },
      { japanese: "へいわ", kanji: "平和", katakana: null, english: "Peace", category: "noun", topic: "general", level: null },
      { japanese: "へんじ", kanji: "返事", katakana: null, english: "Response", category: "noun", topic: "general", level: null },
      { japanese: "へや", kanji: "部屋", katakana: null, english: "Room", category: "noun", topic: "general", level: "N5" },
      { japanese: "ぼうえき", kanji: "貿易", katakana: null, english: "Trade", category: "noun", topic: "general", level: null },
      { japanese: "ぼうけん", kanji: "冒険", katakana: null, english: "Adventure", category: "noun", topic: "general", level: null },
      { japanese: "ぼうし", kanji: "帽子", katakana: null, english: "Hat", category: "noun", topic: "general", level: "N5" },
      { japanese: "ほうこく", kanji: "報告", katakana: null, english: "Report", category: "noun", topic: "general", level: "N3" },
      { japanese: "ほうせき", kanji: "宝石", katakana: null, english: "Gem", category: "noun", topic: "general", level: null },
      { japanese: "ほうちょう", kanji: "包丁", katakana: null, english: "Kitchen Knife", category: "noun", topic: "general", level: null },
      { japanese: "ほうほう", kanji: "方法", katakana: null, english: "Method", category: "noun", topic: "general", level: "N3" },
      { japanese: "ぼくじょう", kanji: "牧場", katakana: null, english: "Farm", category: "noun", topic: "general", level: null },
      { japanese: "ほん", kanji: "本", katakana: null, english: "Book", category: "noun", topic: "general", level: "N5" },
      { japanese: "まくら", kanji: "枕", katakana: null, english: "Pillow", category: "noun", topic: "general", level: "N4" },
      { japanese: "まち", kanji: "町", katakana: null, english: "Town", category: "noun", topic: "general", level: "N5" },
      { japanese: "まど", kanji: "窓", katakana: null, english: "Window", category: "noun", topic: "general", level: "N5" },
      { japanese: "まめ", kanji: "豆", katakana: null, english: "Bean", category: "noun", topic: "general", level: null },
      { japanese: "みず", kanji: "水", katakana: null, english: "Water", category: "noun", topic: "general", level: "N5" },
      { japanese: "みせ", kanji: "店", katakana: null, english: "Shop", category: "noun", topic: "general", level: "N5" },
      { japanese: "みち", kanji: "道", katakana: null, english: "Road", category: "noun", topic: "general", level: "N5" },
      { japanese: "むし", kanji: "虫", katakana: null, english: "Bug", category: "noun", topic: "general", level: null },
      { japanese: "むすこ", kanji: "息子", katakana: null, english: "Son", category: "noun", topic: "general", level: "N4" },
      { japanese: "むすめ", kanji: "娘", katakana: null, english: "Daughter", category: "noun", topic: "general", level: "N4" },
      { japanese: "むら", kanji: "村", katakana: null, english: "Village", category: "noun", topic: "general", level: null },
      { japanese: "むりょう", kanji: "無料", katakana: null, english: "Free of Charge", category: "noun", topic: "general", level: null },
      { japanese: "め", kanji: "目", katakana: null, english: "Eye", category: "noun", topic: "general", level: "N5" },
      { japanese: "めいれい", kanji: "命令", katakana: null, english: "Order", category: "noun", topic: "general", level: null },
      { japanese: "めがね", kanji: "眼鏡", katakana: null, english: "Glasses", category: "noun", topic: "general", level: "N5" },
      { japanese: "めんせつ", kanji: "面接", katakana: null, english: "Interview", category: "noun", topic: "general", level: null },
      { japanese: "もち", kanji: "餅", katakana: null, english: "Rice Cake", category: "noun", topic: "general", level: null },
      { japanese: "もめん", kanji: "木綿", katakana: null, english: "Cotton", category: "noun", topic: "general", level: null },
      { japanese: "もの", kanji: "物", katakana: null, english: "Thing", category: "noun", topic: "general", level: null },
      { japanese: "もんだい", kanji: "問題", katakana: null, english: "Problem", category: "noun", topic: "general", level: null },
      { japanese: "もり", kanji: "森", katakana: null, english: "Forest", category: "noun", topic: "general", level: null },
      { japanese: "やくそく", kanji: "約束", katakana: null, english: "Promise", category: "noun", topic: "general", level: "N3" },
      { japanese: "やくわり", kanji: "役割", katakana: null, english: "Role", category: "noun", topic: "general", level: null },
      { japanese: "やさい", kanji: "野菜", katakana: null, english: "Vegetable", category: "noun", topic: "general", level: "N5" },
      { japanese: "やすみ", kanji: "休み", katakana: null, english: "Break", category: "noun", topic: "general", level: "N5" },
      { japanese: "やま", kanji: "山", katakana: null, english: "Mountain", category: "noun", topic: "general", level: "N5" },
      { japanese: "ゆうじん", kanji: "友人", katakana: null, english: "Friend (formal)", category: "noun", topic: "general", level: null },
      { japanese: "ゆうひ", kanji: "夕日", katakana: null, english: "Sunset", category: "noun", topic: "general", level: null },
      { japanese: "ゆき", kanji: "雪", katakana: null, english: "Snow", category: "noun", topic: "general", level: "N5" },
      { japanese: "よてい", kanji: "予定", katakana: null, english: "Schedule / Plans", category: "noun", topic: "general", level: null },
      { japanese: "よほう", kanji: "予報", katakana: null, english: "Forecast", category: "noun", topic: "general", level: null },
      { japanese: "よやく", kanji: "予約", katakana: null, english: "Reservation", category: "noun", topic: "general", level: "N3" },
      { japanese: "よる", kanji: "夜", katakana: null, english: "Night", category: "noun", topic: "general", level: "N5" },
      { japanese: "らいげつ", kanji: "来月", katakana: null, english: "Next Month", category: "noun", topic: "general", level: "N5" },
      { japanese: "らくがき", kanji: "落書き", katakana: null, english: "Graffiti", category: "noun", topic: "general", level: null },
      { japanese: "らくてんか", kanji: "楽天家", katakana: null, english: "Optimist", category: "noun", topic: "general", level: null },
      { japanese: "りえき", kanji: "利益", katakana: null, english: "Benefit", category: "noun", topic: "general", level: null },
      { japanese: "りこん", kanji: "離婚", katakana: null, english: "Divorce", category: "noun", topic: "general", level: null },
      { japanese: "りゃくご", kanji: "略語", katakana: null, english: "Abbreviation", category: "noun", topic: "general", level: null },
      { japanese: "りゅう", kanji: "流", katakana: null, english: "School of Thought", category: "noun", topic: "general", level: null },
      { japanese: "りゅうがえ", kanji: "両替", katakana: null, english: "Currency Exchange", category: "noun", topic: "general", level: null },
      { japanese: "りゅうがく", kanji: "留学", katakana: null, english: "Studying Abroad", category: "noun", topic: "general", level: null },
      { japanese: "りゅうこう", kanji: "流行", katakana: null, english: "Trend", category: "noun", topic: "general", level: null },
      { japanese: "りゆう", kanji: "理由", katakana: null, english: "Reason", category: "noun", topic: "general", level: "N3" },
      { japanese: "りょうし", kanji: "漁師", katakana: null, english: "Fisherman", category: "noun", topic: "general", level: null },
      { japanese: "りょうしん", kanji: "両親", katakana: null, english: "Parents", category: "noun", topic: "general", level: "N4" },
      { japanese: "りょうほう", kanji: "両方", katakana: null, english: "Both", category: "noun", topic: "general", level: null },
      { japanese: "りょうり", kanji: "料理", katakana: null, english: "Cooking", category: "noun", topic: "general", level: null },
      { japanese: "りょかん", kanji: "旅館", katakana: null, english: "Japanese Inn", category: "noun", topic: "general", level: null },
      { japanese: "りょこう", kanji: "旅行", katakana: null, english: "Trip", category: "noun", topic: "general", level: "N5" },
      { japanese: "りんご", kanji: "林檎", katakana: null, english: "Apple", category: "noun", topic: "general", level: "N5" },
      { japanese: "るいじ", kanji: "類似", katakana: null, english: "Similarity", category: "noun", topic: "general", level: null },
      { japanese: "るす", kanji: "留守", katakana: null, english: "Absence from Home", category: "noun", topic: "general", level: null },
      { japanese: "れいぎ", kanji: "礼儀", katakana: null, english: "Courtesy", category: "noun", topic: "general", level: null },
      { japanese: "れいぞうこ", kanji: "冷蔵庫", katakana: null, english: "Refrigerator", category: "noun", topic: "general", level: "N4" },
      { japanese: "れきし", kanji: "歴史", katakana: null, english: "History", category: "noun", topic: "general", level: "N3" },
      { japanese: "れんしゅう", kanji: "練習", katakana: null, english: "Practice", category: "noun", topic: "general", level: null },
      { japanese: "ろうか", kanji: "廊下", katakana: null, english: "Hallway", category: "noun", topic: "general", level: "N4" },
      { japanese: "ろうじん", kanji: "老人", katakana: null, english: "Elderly People", category: "noun", topic: "general", level: null },
      { japanese: "ろうそく", kanji: "蝋燭", katakana: null, english: "Candle", category: "noun", topic: "general", level: null },
      { japanese: "ろうどう", kanji: "労働", katakana: null, english: "Labor", category: "noun", topic: "general", level: null },
      { japanese: "わき", kanji: "脇", katakana: null, english: "Armpit", category: "noun", topic: "general", level: null },
      { japanese: "わりびき", kanji: "割引", katakana: null, english: "Discount", category: "noun", topic: "general", level: null },
      { japanese: "わるぐち", kanji: "悪口", katakana: null, english: "Insult", category: "noun", topic: "general", level: null },
      { japanese: "あかい", kanji: "赤い", katakana: null, english: "Red (adjective)", category: "i-adjective", topic: "general", level: "N5" },
      { japanese: "あおい", kanji: "青い", katakana: null, english: "Blue (adjective)", category: "i-adjective", topic: "general", level: "N5" },
      { japanese: "おおきい", kanji: "大きい", katakana: null, english: "Big", category: "i-adjective", topic: "general", level: "N5" },
      { japanese: "ちいさい", kanji: "小さい", katakana: null, english: "Small", category: "i-adjective", topic: "general", level: "N5" },
      { japanese: "たかい", kanji: "高い", katakana: null, english: "High", category: "i-adjective", topic: "general", level: "N5" },
      { japanese: "やすい", kanji: "安い", katakana: null, english: "Cheap", category: "i-adjective", topic: "general", level: "N5" },
      { japanese: "ながい", kanji: "長い", katakana: null, english: "Long", category: "i-adjective", topic: "general", level: "N5" },
      { japanese: "ねむい", kanji: "眠い", katakana: null, english: "Sleepy", category: "i-adjective", topic: "general", level: null },
      { japanese: "ぬるい", kanji: "温い", katakana: null, english: "Lukewarm", category: "i-adjective", topic: "general", level: null },
      { japanese: "ずうずうしい", kanji: "図々しい", katakana: null, english: "Cheeky", category: "i-adjective", topic: "general", level: null },
      { japanese: "わかい", kanji: "若い", katakana: null, english: "Young", category: "i-adjective", topic: "general", level: null },
      { japanese: "きれい", kanji: "綺麗", katakana: null, english: "Beautiful", category: "na-adjective", topic: "general", level: "N5" },
      { japanese: "たいせつ", kanji: "大切", katakana: null, english: "Important", category: "na-adjective", topic: "general", level: null },
      { japanese: "とくべつ", kanji: "特別", katakana: null, english: "Special", category: "na-adjective", topic: "general", level: null },
      { japanese: "ざんねん", kanji: "残念", katakana: null, english: "Regrettable", category: "na-adjective", topic: "general", level: null },
      { japanese: "ばか", kanji: "馬鹿", katakana: null, english: "Stupid", category: "na-adjective", topic: "general", level: null },
      { japanese: "らく", kanji: "楽", katakana: null, english: "Easy", category: "na-adjective", topic: "general", level: null },
      { japanese: "ゆうめい", kanji: "有名", katakana: null, english: "Famous", category: "na-adjective", topic: "general", level: "N5" },
      { japanese: "ふあん", kanji: "不安", katakana: null, english: "Anxiety", category: "na-adjective", topic: "general", level: null },
      { japanese: "たべる", kanji: "食べる", katakana: null, english: "To Eat", category: "verb", topic: "general", level: null },
      { japanese: "のむ", kanji: "飲む", katakana: null, english: "To Drink", category: "verb", topic: "general", level: null },
      { japanese: "うえ", kanji: "上", katakana: null, english: "Above / Up", category: "noun", topic: "location", level: "N5" },
      { japanese: "まえ", kanji: "前", katakana: null, english: "Front / Before", category: "noun", topic: "location", level: "N5" },
      { japanese: "うしろ", kanji: "後ろ", katakana: null, english: "Behind / Back", category: "noun", topic: "location", level: "N5" },
      { japanese: "なか", kanji: "中", katakana: null, english: "Inside / Middle", category: "noun", topic: "location", level: "N5" },
      { japanese: "みぎ", kanji: "右", katakana: null, english: "Right", category: "noun", topic: "location", level: "N5" },
      { japanese: "ひだり", kanji: "左", katakana: null, english: "Left", category: "noun", topic: "location", level: "N5" },
      { japanese: "よこ", kanji: "横", katakana: null, english: "Side", category: "noun", topic: "location", level: "N5" },
      { japanese: "となり", kanji: "隣", katakana: null, english: "Next Door / Next To", category: "noun", topic: "location", level: "N5" },
      { japanese: "ちかく", kanji: "近く", katakana: null, english: "Nearby", category: "noun", topic: "location", level: "N5" },
      { japanese: "まわり", kanji: "周り", katakana: null, english: "Around / Surroundings", category: "noun", topic: "location", level: "N4" },
      { japanese: "むかい", kanji: "向かい", katakana: null, english: "Across From", category: "noun", topic: "location", level: "N4" },
      { japanese: "むこう", kanji: "向こう", katakana: null, english: "Over There / Other Side", category: "noun", topic: "location", level: "N4" },
      { japanese: "てまえ", kanji: "手前", katakana: null, english: "This Side", category: "noun", topic: "location", level: "N4" },
      { japanese: "あいだ", kanji: "間", katakana: null, english: "Between", category: "noun", topic: "location", level: "N5" },
      { japanese: "きた", kanji: "北", katakana: null, english: "North", category: "noun", topic: "location", level: "N5" },
      { japanese: "みなみ", kanji: "南", katakana: null, english: "South", category: "noun", topic: "location", level: "N5" },
      { japanese: "ここ", kanji: null, katakana: null, english: "Here", category: "noun", topic: "location", level: "N5" },
      { japanese: "そこ", kanji: null, katakana: null, english: "There", category: "noun", topic: "location", level: "N5" },
      { japanese: "あそこ", kanji: null, katakana: null, english: "Over There (away from both)", category: "noun", topic: "location", level: "N5" },
      { japanese: "どこ", kanji: null, katakana: null, english: "Where", category: "noun", topic: "location", level: "N5" },
      { japanese: "バナナ", kanji: null, katakana: null, english: "Banana", category: "noun", topic: "food", level: "N4" },
      { japanese: "ビール", kanji: null, katakana: null, english: "Beer", category: "noun", topic: "food", level: "N5" },
      { japanese: "あさごはん", kanji: "朝ご飯", katakana: null, english: "Breakfast", category: "noun", topic: "food", level: "N5" },
      { japanese: "パン", kanji: null, katakana: null, english: "Bread", category: "noun", topic: "food", level: "N5" },
      { japanese: "キャベツ", kanji: null, katakana: null, english: "Cabbage", category: "noun", topic: "food", level: "N4" },
      { japanese: "ケーキ", kanji: null, katakana: null, english: "Cake", category: "noun", topic: "food", level: "N5" },
      { japanese: "にんじん", kanji: "人参", katakana: null, english: "Carrot", category: "noun", topic: "food", level: "N4" },
      { japanese: "チーズ", kanji: null, katakana: null, english: "Cheese", category: "noun", topic: "food", level: "N4" },
      { japanese: "とりにく", kanji: "鶏肉", katakana: null, english: "Chicken (meat)", category: "noun", topic: "food", level: "N5" },
      { japanese: "コーヒー", kanji: null, katakana: null, english: "Coffee", category: "noun", topic: "food", level: "N5" },
      { japanese: "コーラ", kanji: null, katakana: null, english: "Cola", category: "noun", topic: "food", level: "N4" },
      { japanese: "かに", kanji: "蟹", katakana: null, english: "Crab", category: "noun", topic: "food", level: "N4" },
      { japanese: "カレー", kanji: null, katakana: null, english: "Curry", category: "noun", topic: "food", level: "N4" },
      { japanese: "デザート", kanji: null, katakana: null, english: "Dessert", category: "noun", topic: "food", level: "N4" },
      { japanese: "ばんごはん", kanji: "晩ご飯", katakana: null, english: "Dinner", category: "noun", topic: "food", level: "N5" },
      { japanese: "たまご", kanji: "卵", katakana: null, english: "Egg", category: "noun", topic: "food", level: "N5" },
      { japanese: "たべもの", kanji: "食べ物", katakana: null, english: "Food", category: "noun", topic: "food", level: "N5" },
      { japanese: "れいとうしょくひん", kanji: "冷凍食品", katakana: null, english: "Frozen Food", category: "noun", topic: "food", level: "N4" },
      { japanese: "ピーマン", kanji: null, katakana: null, english: "Bell Pepper", category: "noun", topic: "food", level: "N4" },
      { japanese: "ねぎ", kanji: "葱", katakana: null, english: "Green Onion", category: "noun", topic: "food", level: "N4" },
      { japanese: "おゆ", kanji: "お湯", katakana: null, english: "Hot Water", category: "noun", topic: "food", level: "N4" },
      { japanese: "アイスクリーム", kanji: null, katakana: null, english: "Ice Cream", category: "noun", topic: "food", level: "N4" },
      { japanese: "わしょく", kanji: "和食", katakana: null, english: "Japanese Cuisine", category: "noun", topic: "food", level: "N4" },
      { japanese: "ジュース", kanji: null, katakana: null, english: "Juice", category: "noun", topic: "food", level: "N5" },
      { japanese: "ケチャップ", kanji: null, katakana: null, english: "Ketchup", category: "noun", topic: "food", level: "N4" },
      { japanese: "レタス", kanji: null, katakana: null, english: "Lettuce", category: "noun", topic: "food", level: "N4" },
      { japanese: "ひるごはん", kanji: "昼ご飯", katakana: null, english: "Lunch (casual)", category: "noun", topic: "food", level: "N5" },
      { japanese: "マヨネーズ", kanji: null, katakana: null, english: "Mayonnaise", category: "noun", topic: "food", level: "N4" },
      { japanese: "しょくじ", kanji: "食事", katakana: null, english: "Meal / Dining", category: "noun", topic: "food", level: "N4" },
      { japanese: "メロン", kanji: null, katakana: null, english: "Melon", category: "noun", topic: "food", level: "N4" },
      { japanese: "みそしる", kanji: "味噌汁", katakana: null, english: "Miso Soup", category: "noun", topic: "food", level: "N4" },
      { japanese: "めんるい", kanji: "麺類", katakana: null, english: "Noodles", category: "noun", topic: "food", level: "N4" },
      { japanese: "たまねぎ", kanji: "玉ねぎ", katakana: null, english: "Onion", category: "noun", topic: "food", level: "N4" },
      { japanese: "オレンジ", kanji: null, katakana: null, english: "Orange (fruit)", category: "noun", topic: "food", level: "N4" },
      { japanese: "もも", kanji: "桃", katakana: null, english: "Peach", category: "noun", topic: "food", level: "N4" },
      { japanese: "なし", kanji: "梨", katakana: null, english: "Pear", category: "noun", topic: "food", level: "N4" },
      { japanese: "こしょう", kanji: "胡椒", katakana: null, english: "Pepper (spice)", category: "noun", topic: "food", level: "N4" },
      { japanese: "パイナップル", kanji: null, katakana: null, english: "Pineapple", category: "noun", topic: "food", level: "N4" },
      { japanese: "ぶたにく", kanji: "豚肉", katakana: null, english: "Pork", category: "noun", topic: "food", level: "N5" },
      { japanese: "ラーメン", kanji: null, katakana: null, english: "Ramen", category: "noun", topic: "food", level: "N4" },
      { japanese: "サラダ", kanji: null, katakana: null, english: "Salad", category: "noun", topic: "food", level: "N4" },
      { japanese: "ソース", kanji: null, katakana: null, english: "Sauce", category: "noun", topic: "food", level: "N4" },
      { japanese: "かい", kanji: "貝", katakana: null, english: "Shellfish", category: "noun", topic: "food", level: "N4" },
      { japanese: "えび", kanji: "海老", katakana: null, english: "Shrimp", category: "noun", topic: "food", level: "N4" },
      { japanese: "おやつ", kanji: null, katakana: null, english: "Snack", category: "noun", topic: "food", level: "N4" },
      { japanese: "しょうゆ", kanji: "醤油", katakana: null, english: "Soy Sauce", category: "noun", topic: "food", level: "N4" },
      { japanese: "スパゲッティ", kanji: null, katakana: null, english: "Spaghetti", category: "noun", topic: "food", level: "N4" },
      { japanese: "ほうれんそう", kanji: "ほうれん草", katakana: null, english: "Spinach", category: "noun", topic: "food", level: "N4" },
      { japanese: "いか", kanji: "烏賊", katakana: null, english: "Squid", category: "noun", topic: "food", level: "N4" },
      { japanese: "いちご", kanji: "苺", katakana: null, english: "Strawberry", category: "noun", topic: "food", level: "N4" },
      { japanese: "てんぷら", kanji: "天ぷら", katakana: null, english: "Tempura", category: "noun", topic: "food", level: "N4" },
      { japanese: "トマト", kanji: null, katakana: null, english: "Tomato", category: "noun", topic: "food", level: "N4" },
      { japanese: "まぐろ", kanji: "鮪", katakana: null, english: "Tuna", category: "noun", topic: "food", level: "N4" },
      { japanese: "うどん", kanji: null, katakana: null, english: "Udon Noodles", category: "noun", topic: "food", level: "N4" },
      { japanese: "すいか", kanji: "西瓜", katakana: null, english: "Watermelon", category: "noun", topic: "food", level: "N4" },
      { japanese: "みかん", kanji: "蜜柑", katakana: null, english: "Mandarin Orange", category: "noun", topic: "food", level: "N5" },
      { japanese: "チョコレート", kanji: null, katakana: null, english: "Chocolate", category: "noun", topic: "food", level: "N4" },
      { japanese: "バター", kanji: null, katakana: null, english: "Butter", category: "noun", topic: "food", level: "N4" },
      { japanese: "あぶら", kanji: "油", katakana: null, english: "Oil", category: "noun", topic: "food", level: "N4" },
      { japanese: "にがい", kanji: "苦い", katakana: null, english: "Bitter", category: "i-adjective", topic: "taste", level: "N4" },
      { japanese: "つめたい", kanji: "冷たい", katakana: null, english: "Cold (to the touch)", category: "i-adjective", topic: "taste", level: "N5" },
      { japanese: "おいしい", kanji: "美味しい", katakana: null, english: "Delicious", category: "i-adjective", topic: "taste", level: "N5" },
      { japanese: "しんせん", kanji: "新鮮", katakana: null, english: "Fresh (food)", category: "na-adjective", topic: "taste", level: "N4" },
      { japanese: "かたい", kanji: "硬い", katakana: null, english: "Hard", category: "i-adjective", topic: "taste", level: "N4" },
      { japanese: "あつい", kanji: "熱い", katakana: null, english: "Hot (to the touch)", category: "i-adjective", topic: "taste", level: "N5" },
      { japanese: "あたらしい", kanji: "新しい", katakana: null, english: "New / Fresh", category: "i-adjective", topic: "taste", level: "N5" },
      { japanese: "まずい", kanji: "不味い", katakana: null, english: "Not Tasty", category: "i-adjective", topic: "taste", level: "N5" },
      { japanese: "ふるい", kanji: "古い", katakana: null, english: "Old", category: "i-adjective", topic: "taste", level: "N5" },
      { japanese: "しおからい", kanji: "塩辛い", katakana: null, english: "Salty", category: "i-adjective", topic: "taste", level: "N4" },
      { japanese: "やわらかい", kanji: "柔らかい", katakana: null, english: "Soft", category: "i-adjective", topic: "taste", level: "N4" },
      { japanese: "すっぱい", kanji: "酸っぱい", katakana: null, english: "Sour", category: "i-adjective", topic: "taste", level: "N4" },
      { japanese: "からい", kanji: "辛い", katakana: null, english: "Spicy / Hot", category: "i-adjective", topic: "taste", level: "N5" },
      { japanese: "あまい", kanji: "甘い", katakana: null, english: "Sweet", category: "i-adjective", topic: "taste", level: "N5" },
      { japanese: "いちがつ", kanji: "一月", katakana: null, english: "January", category: "noun", topic: "time", level: "N5" },
      { japanese: "にがつ", kanji: "二月", katakana: null, english: "February", category: "noun", topic: "time", level: "N5" },
      { japanese: "さんがつ", kanji: "三月", katakana: null, english: "March", category: "noun", topic: "time", level: "N5" },
      { japanese: "しがつ", kanji: "四月", katakana: null, english: "April", category: "noun", topic: "time", level: "N5" },
      { japanese: "ごがつ", kanji: "五月", katakana: null, english: "May", category: "noun", topic: "time", level: "N5" },
      { japanese: "ろくがつ", kanji: "六月", katakana: null, english: "June", category: "noun", topic: "time", level: "N5" },
      { japanese: "しちがつ", kanji: "七月", katakana: null, english: "July", category: "noun", topic: "time", level: "N5" },
      { japanese: "はちがつ", kanji: "八月", katakana: null, english: "August", category: "noun", topic: "time", level: "N5" },
      { japanese: "くがつ", kanji: "九月", katakana: null, english: "September", category: "noun", topic: "time", level: "N5" },
      { japanese: "じゅうがつ", kanji: "十月", katakana: null, english: "October", category: "noun", topic: "time", level: "N5" },
      { japanese: "じゅういちがつ", kanji: "十一月", katakana: null, english: "November", category: "noun", topic: "time", level: "N5" },
      { japanese: "じゅうにがつ", kanji: "十二月", katakana: null, english: "December", category: "noun", topic: "time", level: "N5" },
      { japanese: "おととい", kanji: "一昨日", katakana: null, english: "Day Before Yesterday", category: "noun", topic: "time", level: "N5" },
      { japanese: "きのう", kanji: "昨日", katakana: null, english: "Yesterday", category: "noun", topic: "time", level: "N5" },
      { japanese: "あした", kanji: "明日", katakana: null, english: "Tomorrow", category: "noun", topic: "time", level: "N5" },
      { japanese: "あさって", kanji: "明後日", katakana: null, english: "Day After Tomorrow", category: "noun", topic: "time", level: "N5" },
      { japanese: "せんしゅう", kanji: "先週", katakana: null, english: "Last Week", category: "noun", topic: "time", level: "N5" },
      { japanese: "こんしゅう", kanji: "今週", katakana: null, english: "This Week", category: "noun", topic: "time", level: "N5" },
      { japanese: "らいしゅう", kanji: "来週", katakana: null, english: "Next Week", category: "noun", topic: "time", level: "N5" },
      { japanese: "せんげつ", kanji: "先月", katakana: null, english: "Last Month", category: "noun", topic: "time", level: "N5" },
      { japanese: "こんげつ", kanji: "今月", katakana: null, english: "This Month", category: "noun", topic: "time", level: "N5" },
      { japanese: "きょねん", kanji: "去年", katakana: null, english: "Last Year", category: "noun", topic: "time", level: "N5" },
      { japanese: "ことし", kanji: "今年", katakana: null, english: "This Year", category: "noun", topic: "time", level: "N5" },
      { japanese: "らいねん", kanji: "来年", katakana: null, english: "Next Year", category: "noun", topic: "time", level: "N5" },
      { japanese: "けさ", kanji: "今朝", katakana: null, english: "This Morning", category: "noun", topic: "time", level: "N5" },
      { japanese: "こんばん", kanji: "今晩", katakana: null, english: "Tonight", category: "noun", topic: "time", level: "N5" },
      { japanese: "ひるま", kanji: "昼間", katakana: null, english: "Daytime", category: "noun", topic: "time", level: "N4" },
      { japanese: "ゆうがた", kanji: "夕方", katakana: null, english: "Early Evening", category: "noun", topic: "time", level: "N4" },
      { japanese: "ごぜんちゅう", kanji: "午前中", katakana: null, english: "During the Morning", category: "noun", topic: "time", level: "N4" },
      { japanese: "ごご", kanji: "午後", katakana: null, english: "Afternoon / PM", category: "noun", topic: "time", level: "N5" },
      { japanese: "ごぜん", kanji: "午前", katakana: null, english: "AM / Before Noon", category: "noun", topic: "time", level: "N5" },
      { japanese: "あさ", kanji: "朝", katakana: null, english: "Morning", category: "noun", topic: "time", level: "N5" },
      { japanese: "ばん", kanji: "晩", katakana: null, english: "Evening", category: "noun", topic: "time", level: "N5" },
      { japanese: "しゅうまつ", kanji: "週末", katakana: null, english: "Weekend", category: "noun", topic: "time", level: "N4" },
      { japanese: "きゅうじつ", kanji: "休日", katakana: null, english: "Day Off", category: "noun", topic: "time", level: "N4" },
      { japanese: "なんようび", kanji: "何曜日", katakana: null, english: "What Day of the Week", category: "noun", topic: "time", level: "N5" },
      { japanese: "なんにち", kanji: "何日", katakana: null, english: "What Day of the Month", category: "noun", topic: "time", level: "N5" },
      { japanese: "ふん", kanji: "分", katakana: null, english: "Minute", category: "noun", topic: "time", level: "N5" },
      { japanese: "いつも", kanji: null, katakana: null, english: "Always", category: "adverb", topic: "frequency", level: "N5" },
      { japanese: "まいあさ", kanji: "毎朝", katakana: null, english: "Every Morning", category: "adverb", topic: "frequency", level: "N5" },
      { japanese: "まいばん", kanji: "毎晩", katakana: null, english: "Every Night", category: "adverb", topic: "frequency", level: "N5" },
      { japanese: "まいにち", kanji: "毎日", katakana: null, english: "Every Day", category: "adverb", topic: "frequency", level: "N5" },
      { japanese: "まいしゅう", kanji: "毎週", katakana: null, english: "Every Week", category: "adverb", topic: "frequency", level: "N5" },
      { japanese: "まいつき", kanji: "毎月", katakana: null, english: "Every Month", category: "adverb", topic: "frequency", level: "N5" },
      { japanese: "まいとし", kanji: "毎年", katakana: null, english: "Every Year", category: "adverb", topic: "frequency", level: "N5" },
      { japanese: "よく", kanji: null, katakana: null, english: "Often", category: "adverb", topic: "frequency", level: "N5" },
      { japanese: "たいてい", kanji: null, katakana: null, english: "Usually", category: "adverb", topic: "frequency", level: "N5" },
      { japanese: "ときどき", kanji: "時々", katakana: null, english: "Sometimes", category: "adverb", topic: "frequency", level: "N5" },
      { japanese: "たまに", kanji: null, katakana: null, english: "Once In A While", category: "adverb", topic: "frequency", level: "N4" },
      { japanese: "あまり", kanji: null, katakana: null, english: "Not Very Often (with negative)", category: "adverb", topic: "frequency", level: "N5" },
      { japanese: "ほとんど", kanji: null, katakana: null, english: "Hardly Ever (with negative)", category: "adverb", topic: "frequency", level: "N4" },
      { japanese: "ぜんぜん", kanji: "全然", katakana: null, english: "Not At All (with negative)", category: "adverb", topic: "frequency", level: "N5" },
      { japanese: "とても", kanji: null, katakana: null, english: "Very", category: "adverb", topic: "degree", level: "N5" },
      { japanese: "かなり", kanji: null, katakana: null, english: "Quite / Fairly", category: "adverb", topic: "degree", level: "N4" },
      { japanese: "まあまあ", kanji: null, katakana: null, english: "So-So", category: "adverb", topic: "degree", level: "N4" },
      { japanese: "すこし", kanji: "少し", katakana: null, english: "A Little / Slightly", category: "adverb", topic: "degree", level: "N5" },
      { japanese: "ちょっと", kanji: null, katakana: null, english: "A Bit / A Moment", category: "adverb", topic: "degree", level: "N5" },
      { japanese: "もっと", kanji: null, katakana: null, english: "More", category: "adverb", topic: "degree", level: "N4" },
      { japanese: "いちばん", kanji: "一番", katakana: null, english: "Most / Number One", category: "adverb", topic: "degree", level: "N4" },
      { japanese: "だいたい", kanji: "大体", katakana: null, english: "Roughly / About", category: "adverb", topic: "degree", level: "N4" },
      { japanese: "ほんとうに", kanji: "本当に", katakana: null, english: "Really", category: "adverb", topic: "degree", level: "N4" },
      { japanese: "すごく", kanji: null, katakana: null, english: "Extremely", category: "adverb", topic: "degree", level: "N4" },
      { japanese: "ブラウス", kanji: null, katakana: null, english: "Blouse", category: "noun", topic: "clothing", level: "N4" },
      { japanese: "ふだんぎ", kanji: "普段着", katakana: null, english: "Casual Wear", category: "noun", topic: "clothing", level: "N4" },
      { japanese: "ハイヒール", kanji: null, katakana: null, english: "High Heels", category: "noun", topic: "clothing", level: "N4" },
      { japanese: "ジャケット", kanji: null, katakana: null, english: "Jacket", category: "noun", topic: "clothing", level: "N4" },
      { japanese: "きもの", kanji: "着物", katakana: null, english: "Kimono", category: "noun", topic: "clothing", level: "N4" },
      { japanese: "ジーンズ", kanji: null, katakana: null, english: "Jeans", category: "noun", topic: "clothing", level: "N4" },
      { japanese: "せびろ", kanji: "背広", katakana: null, english: "Men's Suit", category: "noun", topic: "clothing", level: "N4" },
      { japanese: "ネクタイ", kanji: null, katakana: null, english: "Necktie", category: "noun", topic: "clothing", level: "N4" },
      { japanese: "ワンピース", kanji: null, katakana: null, english: "One-Piece Dress", category: "noun", topic: "clothing", level: "N4" },
      { japanese: "コート", kanji: null, katakana: null, english: "Coat", category: "noun", topic: "clothing", level: "N4" },
      { japanese: "パジャマ", kanji: null, katakana: null, english: "Pajamas", category: "noun", topic: "clothing", level: "N4" },
      { japanese: "サンダル", kanji: null, katakana: null, english: "Sandals", category: "noun", topic: "clothing", level: "N4" },
      { japanese: "シャツ", kanji: null, katakana: null, english: "Shirt", category: "noun", topic: "clothing", level: "N5" },
      { japanese: "スカート", kanji: null, katakana: null, english: "Skirt", category: "noun", topic: "clothing", level: "N4" },
      { japanese: "スニーカー", kanji: null, katakana: null, english: "Sneakers", category: "noun", topic: "clothing", level: "N4" },
      { japanese: "ストッキング", kanji: null, katakana: null, english: "Stockings", category: "noun", topic: "clothing", level: "N4" },
      { japanese: "スーツ", kanji: null, katakana: null, english: "Suit", category: "noun", topic: "clothing", level: "N4" },
      { japanese: "セーター", kanji: null, katakana: null, english: "Sweater", category: "noun", topic: "clothing", level: "N4" },
      { japanese: "ズボン", kanji: null, katakana: null, english: "Trousers", category: "noun", topic: "clothing", level: "N5" },
      { japanese: "Tシャツ", kanji: null, katakana: null, english: "T-Shirt", category: "noun", topic: "clothing", level: null },
      { japanese: "したぎ", kanji: "下着", katakana: null, english: "Underwear", category: "noun", topic: "clothing", level: "N4" },
      { japanese: "ようふく", kanji: "洋服", katakana: null, english: "Western-Style Clothes", category: "noun", topic: "clothing", level: "N4" },
      { japanese: "てぶくろ", kanji: "手袋", katakana: null, english: "Gloves", category: "noun", topic: "clothing", level: "N4" },
      { japanese: "マフラー", kanji: null, katakana: null, english: "Scarf", category: "noun", topic: "clothing", level: "N4" },
      { japanese: "ゆびわ", kanji: "指輪", katakana: null, english: "Ring", category: "noun", topic: "clothing", level: "N4" },
      { japanese: "さいふ", kanji: "財布", katakana: null, english: "Wallet", category: "noun", topic: "clothing", level: "N4" },
      { japanese: "はれ", kanji: "晴れ", katakana: null, english: "Clear Weather", category: "noun", topic: "weather", level: "N5" },
      { japanese: "きこう", kanji: "気候", katakana: null, english: "Climate", category: "noun", topic: "weather", level: "N4" },
      { japanese: "くもり", kanji: "曇り", katakana: null, english: "Cloudy Weather", category: "noun", topic: "weather", level: "N5" },
      { japanese: "さむい", kanji: "寒い", katakana: null, english: "Cold (weather)", category: "i-adjective", topic: "weather", level: "N5" },
      { japanese: "すずしい", kanji: "涼しい", katakana: null, english: "Cool", category: "i-adjective", topic: "weather", level: "N4" },
      { japanese: "あき", kanji: "秋", katakana: null, english: "Autumn", category: "noun", topic: "weather", level: "N5" },
      { japanese: "あつい", kanji: "暑い", katakana: null, english: "Hot (weather)", category: "i-adjective", topic: "weather", level: "N5" },
      { japanese: "むしあつい", kanji: "蒸し暑い", katakana: null, english: "Hot And Humid", category: "i-adjective", topic: "weather", level: "N4" },
      { japanese: "しつど", kanji: "湿度", katakana: null, english: "Humidity", category: "noun", topic: "weather", level: "N4" },
      { japanese: "おだやか", kanji: "穏やか", katakana: null, english: "Mild / Calm", category: "na-adjective", topic: "weather", level: "N4" },
      { japanese: "つゆ", kanji: "梅雨", katakana: null, english: "Rainy Season", category: "noun", topic: "weather", level: "N4" },
      { japanese: "きせつ", kanji: "季節", katakana: null, english: "Season", category: "noun", topic: "weather", level: "N4" },
      { japanese: "あらし", kanji: "嵐", katakana: null, english: "Storm", category: "noun", topic: "weather", level: "N4" },
      { japanese: "かみなり", kanji: "雷", katakana: null, english: "Thunder", category: "noun", topic: "weather", level: "N4" },
      { japanese: "たいふう", kanji: "台風", katakana: null, english: "Typhoon", category: "noun", topic: "weather", level: "N4" },
      { japanese: "いや", kanji: "嫌", katakana: null, english: "Unpleasant", category: "na-adjective", topic: "weather", level: "N4" },
      { japanese: "あたたかい", kanji: "暖かい", katakana: null, english: "Warm", category: "i-adjective", topic: "weather", level: "N5" },
      { japanese: "てんきよほう", kanji: "天気予報", katakana: null, english: "Weather Forecast", category: "noun", topic: "weather", level: "N4" },
      { japanese: "かぜ", kanji: "風", katakana: null, english: "Wind", category: "noun", topic: "weather", level: "N5" },
      { japanese: "きり", kanji: "霧", katakana: null, english: "Fog", category: "noun", topic: "weather", level: "N4" },
      { japanese: "にじ", kanji: "虹", katakana: null, english: "Rainbow", category: "noun", topic: "weather", level: "N4" },
      { japanese: "けんばいき", kanji: "券売機", katakana: null, english: "Ticket Vending Machine", category: "noun", topic: "transport", level: "N3" },
      { japanese: "のりば", kanji: "乗り場", katakana: null, english: "Boarding Place", category: "noun", topic: "transport", level: "N3" },
      { japanese: "しんかんせん", kanji: "新幹線", katakana: null, english: "Bullet Train", category: "noun", topic: "transport", level: "N4" },
      { japanese: "バス", kanji: null, katakana: null, english: "Bus", category: "noun", topic: "transport", level: "N5" },
      { japanese: "いきさき", kanji: "行き先", katakana: null, english: "Destination", category: "noun", topic: "transport", level: "N3" },
      { japanese: "ちょっこうびん", kanji: "直行便", katakana: null, english: "Direct Flight", category: "noun", topic: "transport", level: "N3" },
      { japanese: "きゅうこう", kanji: "急行", katakana: null, english: "Express Train", category: "noun", topic: "transport", level: "N4" },
      { japanese: "あんないじょ", kanji: "案内所", katakana: null, english: "Information Desk", category: "noun", topic: "transport", level: "N3" },
      { japanese: "とっきゅう", kanji: "特急", katakana: null, english: "Limited Express", category: "noun", topic: "transport", level: "N4" },
      { japanese: "かくえきていしゃ", kanji: "各駅停車", katakana: null, english: "Local Train", category: "noun", topic: "transport", level: "N3" },
      { japanese: "バイク", kanji: null, katakana: null, english: "Motorbike", category: "noun", topic: "transport", level: "N4" },
      { japanese: "ごうしゃ", kanji: "号車", katakana: null, english: "Car Number (train)", category: "noun", topic: "transport", level: "N3" },
      { japanese: "ツアー", kanji: null, katakana: null, english: "Package Tour", category: "noun", topic: "transport", level: "N4" },
      { japanese: "ばんせん", kanji: "番線", katakana: null, english: "Platform Number", category: "noun", topic: "transport", level: "N3" },
      { japanese: "おうふく", kanji: "往復", katakana: null, english: "Round Trip", category: "noun", topic: "transport", level: "N4" },
      { japanese: "かんこうバス", kanji: "観光バス", katakana: null, english: "Sightseeing Bus", category: "noun", topic: "transport", level: null },
      { japanese: "しんだいしゃ", kanji: "寝台車", katakana: null, english: "Sleeping Car", category: "noun", topic: "transport", level: "N3" },
      { japanese: "ちかてつ", kanji: "地下鉄", katakana: null, english: "Subway", category: "noun", topic: "transport", level: "N5" },
      { japanese: "タクシー", kanji: null, katakana: null, english: "Taxi", category: "noun", topic: "transport", level: "N5" },
      { japanese: "きっぷ", kanji: "切符", katakana: null, english: "Ticket", category: "noun", topic: "transport", level: "N5" },
      { japanese: "じょうしゃけん", kanji: "乗車券", katakana: null, english: "Passenger Ticket", category: "noun", topic: "transport", level: "N3" },
      { japanese: "きっぷうりば", kanji: "切符売り場", katakana: null, english: "Ticket Window", category: "noun", topic: "transport", level: "N4" },
      { japanese: "じこくひょう", kanji: "時刻表", katakana: null, english: "Timetable", category: "noun", topic: "transport", level: "N4" },
      { japanese: "のりかえ", kanji: "乗り換え", katakana: null, english: "Transfer / Change Trains", category: "noun", topic: "transport", level: "N4" },
      { japanese: "くうこう", kanji: "空港", katakana: null, english: "Airport", category: "noun", topic: "transport", level: "N5" },
      { japanese: "ほどう", kanji: "歩道", katakana: null, english: "Sidewalk", category: "noun", topic: "transport", level: "N4" },
      { japanese: "しんごう", kanji: "信号", katakana: null, english: "Traffic Light", category: "noun", topic: "transport", level: "N4" },
      { japanese: "むらさき", kanji: "紫", katakana: null, english: "Purple", category: "noun", topic: "colors", level: "N4" },
      { japanese: "ピンク", kanji: null, katakana: null, english: "Pink", category: "noun", topic: "colors", level: "N4" },
      { japanese: "はいいろ", kanji: "灰色", katakana: null, english: "Grey", category: "noun", topic: "colors", level: "N4" },
      { japanese: "きんいろ", kanji: "金色", katakana: null, english: "Gold (color)", category: "noun", topic: "colors", level: "N4" },
      { japanese: "ぎんいろ", kanji: "銀色", katakana: null, english: "Silver (color)", category: "noun", topic: "colors", level: "N4" },
      { japanese: "みずいろ", kanji: "水色", katakana: null, english: "Light Blue", category: "noun", topic: "colors", level: "N4" },

      // ---- OCCUPATIONS (26) ----
      { japanese: "かいけいし", kanji: "会計士", katakana: null, english: "Accountant", category: "noun", topic: "jobs", level: "N4" },
      { japanese: "がか", kanji: "画家", katakana: null, english: "Painter (artist)", category: "noun", topic: "jobs", level: "N4" },
      { japanese: "さっか", kanji: "作家", katakana: null, english: "Writer / Novelist", category: "noun", topic: "jobs", level: "N4" },
      { japanese: "ぎんこういん", kanji: "銀行員", katakana: null, english: "Bank Employee", category: "noun", topic: "jobs", level: "N4" },
      { japanese: "シェフ", kanji: null, katakana: null, english: "Chef", category: "noun", topic: "jobs", level: "N4" },
      { japanese: "まんがか", kanji: "漫画家", katakana: null, english: "Manga Artist", category: "noun", topic: "jobs", level: "N4" },
      { japanese: "かいしゃいん", kanji: "会社員", katakana: null, english: "Company Employee", category: "noun", topic: "jobs", level: "N4" },
      { japanese: "サラリーマン", kanji: null, katakana: null, english: "Office Worker", category: "noun", topic: "jobs", level: "N4" },
      { japanese: "ぎし", kanji: "技師", katakana: null, english: "Engineer", category: "noun", topic: "jobs", level: "N4" },
      { japanese: "こうむいん", kanji: "公務員", katakana: null, english: "Government Employee", category: "noun", topic: "jobs", level: "N4" },
      { japanese: "びようし", kanji: "美容師", katakana: null, english: "Hairdresser", category: "noun", topic: "jobs", level: "N4" },
      { japanese: "しゅふ", kanji: "主婦", katakana: null, english: "Homemaker", category: "noun", topic: "jobs", level: "N4" },
      { japanese: "インストラクター", kanji: null, katakana: null, english: "Instructor", category: "noun", topic: "jobs", level: "N4" },
      { japanese: "かんごし", kanji: "看護師", katakana: null, english: "Nurse", category: "noun", topic: "jobs", level: "N4" },
      { japanese: "いしゃ", kanji: "医者", katakana: null, english: "Doctor / Physician", category: "noun", topic: "jobs", level: "N4" },
      { japanese: "せいじか", kanji: "政治家", katakana: null, english: "Politician", category: "noun", topic: "jobs", level: "N4" },
      { japanese: "せんしゅ", kanji: "選手", katakana: null, english: "Athlete / Player", category: "noun", topic: "jobs", level: "N4" },
      { japanese: "てんいん", kanji: "店員", katakana: null, english: "Shop Assistant", category: "noun", topic: "jobs", level: "N4" },
      { japanese: "きょうし", kanji: "教師", katakana: null, english: "Teacher (profession)", category: "noun", topic: "jobs", level: "N4" },
      { japanese: "じゅうい", kanji: "獣医", katakana: null, english: "Veterinarian", category: "noun", topic: "jobs", level: "N4" },
      { japanese: "ウェイター", kanji: null, katakana: null, english: "Waiter", category: "noun", topic: "jobs", level: "N4" },
      { japanese: "ウェイトレス", kanji: null, katakana: null, english: "Waitress", category: "noun", topic: "jobs", level: "N4" },
      { japanese: "りょうりにん", kanji: "料理人", katakana: null, english: "Cook", category: "noun", topic: "jobs", level: "N4" },
      { japanese: "うんてんしゅ", kanji: "運転手", katakana: null, english: "Driver", category: "noun", topic: "jobs", level: "N4" },
      { japanese: "パイロット", kanji: null, katakana: null, english: "Pilot", category: "noun", topic: "jobs", level: "N4" },
      { japanese: "えきいん", kanji: "駅員", katakana: null, english: "Station Attendant", category: "noun", topic: "jobs", level: "N4" },

      // ---- BODY & DESCRIBING IT (32) ----
      { japanese: "あしくび", kanji: "足首", katakana: null, english: "Ankle", category: "noun", topic: "body", level: "N4" },
      { japanese: "うで", kanji: "腕", katakana: null, english: "Arm", category: "noun", topic: "body", level: "N4" },
      { japanese: "おしり", kanji: "お尻", katakana: null, english: "Buttocks / Hip", category: "noun", topic: "body", level: "N4" },
      { japanese: "ほほ", kanji: "頬", katakana: null, english: "Cheek", category: "noun", topic: "body", level: "N4" },
      { japanese: "むね", kanji: "胸", katakana: null, english: "Chest", category: "noun", topic: "body", level: "N4" },
      { japanese: "あご", kanji: "顎", katakana: null, english: "Chin / Jaw", category: "noun", topic: "body", level: "N4" },
      { japanese: "みみ", kanji: "耳", katakana: null, english: "Ear", category: "noun", topic: "body", level: "N5" },
      { japanese: "ひじ", kanji: "肘", katakana: null, english: "Elbow", category: "noun", topic: "body", level: "N4" },
      { japanese: "まゆげ", kanji: "眉毛", katakana: null, english: "Eyebrow", category: "noun", topic: "body", level: "N4" },
      { japanese: "まつげ", kanji: "睫毛", katakana: null, english: "Eyelash", category: "noun", topic: "body", level: "N4" },
      { japanese: "ゆび", kanji: "指", katakana: null, english: "Finger", category: "noun", topic: "body", level: "N5" },
      { japanese: "ひたい", kanji: "額", katakana: null, english: "Forehead", category: "noun", topic: "body", level: "N4" },
      { japanese: "かみのけ", kanji: "髪の毛", katakana: null, english: "Hair (on the head)", category: "noun", topic: "body", level: "N4" },
      { japanese: "て", kanji: "手", katakana: null, english: "Hand", category: "noun", topic: "body", level: "N5" },
      { japanese: "かかと", kanji: "踵", katakana: null, english: "Heel", category: "noun", topic: "body", level: "N4" },
      { japanese: "ひざ", kanji: "膝", katakana: null, english: "Knee", category: "noun", topic: "body", level: "N4" },
      { japanese: "あし", kanji: "足", katakana: null, english: "Leg / Foot", category: "noun", topic: "body", level: "N5" },
      { japanese: "くちびる", kanji: "唇", katakana: null, english: "Lip", category: "noun", topic: "body", level: "N4" },
      { japanese: "くち", kanji: "口", katakana: null, english: "Mouth", category: "noun", topic: "body", level: "N5" },
      { japanese: "はな", kanji: "鼻", katakana: null, english: "Nose", category: "noun", topic: "body", level: "N5" },
      { japanese: "は", kanji: "歯", katakana: null, english: "Tooth", category: "noun", topic: "body", level: "N5" },
      { japanese: "した", kanji: "舌", katakana: null, english: "Tongue", category: "noun", topic: "body", level: "N5" },
      { japanese: "どう", kanji: "胴", katakana: null, english: "Torso", category: "noun", topic: "body", level: "N4" },
      { japanese: "こし", kanji: "腰", katakana: null, english: "Waist / Lower Back", category: "noun", topic: "body", level: "N4" },
      { japanese: "おなか", kanji: "お腹", katakana: null, english: "Stomach / Belly", category: "noun", topic: "body", level: "N4" },
      { japanese: "ゆびさき", kanji: "指先", katakana: null, english: "Fingertip", category: "noun", topic: "body", level: "N4" },
      { japanese: "せ", kanji: "背", katakana: null, english: "Height / Stature", category: "noun", topic: "body", level: "N4" },
      { japanese: "みじかい", kanji: "短い", katakana: null, english: "Short (length)", category: "i-adjective", topic: "body", level: "N5" },
      { japanese: "まるい", kanji: "丸い", katakana: null, english: "Round", category: "i-adjective", topic: "body", level: "N4" },
      { japanese: "ほそながい", kanji: "細長い", katakana: null, english: "Long And Narrow", category: "i-adjective", topic: "body", level: "N3" },
      { japanese: "ふとい", kanji: "太い", katakana: null, english: "Thick / Fat", category: "i-adjective", topic: "body", level: "N4" },
      { japanese: "ほそい", kanji: "細い", katakana: null, english: "Thin / Slender", category: "i-adjective", topic: "body", level: "N4" },

      // ---- THE HOME (29) ----
      { japanese: "とこのま", kanji: "床の間", katakana: null, english: "Display Alcove", category: "noun", topic: "home", level: "N4" },
      { japanese: "るすばんでんわ", kanji: "留守番電話", katakana: null, english: "Answering Machine", category: "noun", topic: "home", level: "N4" },
      { japanese: "ベッド", kanji: null, katakana: null, english: "Bed", category: "noun", topic: "home", level: "N5" },
      { japanese: "しんしつ", kanji: "寝室", katakana: null, english: "Bedroom", category: "noun", topic: "home", level: "N4" },
      { japanese: "けいたい", kanji: "携帯", katakana: null, english: "Mobile Phone", category: "noun", topic: "home", level: "N4" },
      { japanese: "おはし", kanji: "お箸", katakana: null, english: "Chopsticks", category: "noun", topic: "home", level: "N4" },
      { japanese: "おしいれ", kanji: "押し入れ", katakana: null, english: "Closet", category: "noun", topic: "home", level: "N4" },
      { japanese: "ざぶとん", kanji: "座布団", katakana: null, english: "Floor Cushion", category: "noun", topic: "home", level: "N4" },
      { japanese: "でんきスタンド", kanji: "電気スタンド", katakana: "電気スタンド", english: "Desk Lamp", category: "noun", topic: "home", level: null },
      { japanese: "ダイニング", kanji: null, katakana: null, english: "Dining Room", category: "noun", topic: "home", level: "N3" },
      { japanese: "ファックス", kanji: null, katakana: null, english: "Fax", category: "noun", topic: "home", level: "N4" },
      { japanese: "ふとん", kanji: "布団", katakana: null, english: "Futon Bedding", category: "noun", topic: "home", level: "N4" },
      { japanese: "わしつ", kanji: "和室", katakana: null, english: "Japanese-Style Room", category: "noun", topic: "home", level: "N4" },
      { japanese: "いま", kanji: "居間", katakana: null, english: "Living Room", category: "noun", topic: "home", level: "N5" },
      { japanese: "でんしれんじ", kanji: "電子レンジ", katakana: null, english: "Microwave", category: "noun", topic: "home", level: "N4" },
      { japanese: "かがみ", kanji: "鏡", katakana: null, english: "Mirror", category: "noun", topic: "home", level: "N4" },
      { japanese: "かみそり", kanji: "剃刀", katakana: null, english: "Razor", category: "noun", topic: "home", level: "N4" },
      { japanese: "おてあらい", kanji: "お手洗い", katakana: null, english: "Restroom", category: "noun", topic: "home", level: "N4" },
      { japanese: "せっけん", kanji: "石鹸", katakana: null, english: "Soap", category: "noun", topic: "home", level: "N5" },
      { japanese: "ソファ", kanji: null, katakana: null, english: "Sofa", category: "noun", topic: "home", level: "N4" },
      { japanese: "テーブル", kanji: null, katakana: null, english: "Table", category: "noun", topic: "home", level: "N4" },
      { japanese: "ティッシュ", kanji: null, katakana: null, english: "Tissue Paper", category: "noun", topic: "home", level: "N3" },
      { japanese: "はブラシ", kanji: "歯ブラシ", katakana: null, english: "Toothbrush", category: "noun", topic: "home", level: "N4" },
      { japanese: "はみがきこ", kanji: "歯磨き粉", katakana: null, english: "Toothpaste", category: "noun", topic: "home", level: "N4" },
      { japanese: "ようま", kanji: "洋間", katakana: null, english: "Western-Style Room", category: "noun", topic: "home", level: "N4" },
      { japanese: "いす", kanji: "椅子", katakana: null, english: "Chair", category: "noun", topic: "home", level: "N5" },
      { japanese: "カーテン", kanji: null, katakana: null, english: "Curtain", category: "noun", topic: "home", level: "N4" },
      { japanese: "そうじき", kanji: "掃除機", katakana: null, english: "Vacuum Cleaner", category: "noun", topic: "home", level: "N4" },
      { japanese: "せんたくき", kanji: "洗濯機", katakana: null, english: "Washing Machine", category: "noun", topic: "home", level: "N4" },

      // ---- HOBBIES, ACTIVITIES & SPORTS (34) ----
      { japanese: "エアロビクス", kanji: null, katakana: null, english: "Aerobics", category: "noun", topic: "hobbies", level: "N3" },
      { japanese: "あいきどう", kanji: "合気道", katakana: null, english: "Aikido", category: "noun", topic: "hobbies", level: "N4" },
      { japanese: "アニメ", kanji: null, katakana: null, english: "Anime", category: "noun", topic: "hobbies", level: "N4" },
      { japanese: "やきゅう", kanji: "野球", katakana: null, english: "Baseball", category: "noun", topic: "hobbies", level: "N4" },
      { japanese: "バスケットボール", kanji: null, katakana: null, english: "Basketball", category: "noun", topic: "hobbies", level: "N4" },
      { japanese: "しょどう", kanji: "書道", katakana: null, english: "Calligraphy", category: "noun", topic: "hobbies", level: "N4" },
      { japanese: "キャンプ", kanji: null, katakana: null, english: "Camping", category: "noun", topic: "hobbies", level: "N4" },
      { japanese: "クラシックおんがく", kanji: "クラシック音楽", katakana: "クラシック音楽", english: "Classical Music", category: "noun", topic: "hobbies", level: null },
      { japanese: "まんが", kanji: "漫画", katakana: null, english: "Comic Books / Manga", category: "noun", topic: "hobbies", level: "N4" },
      { japanese: "ダンス", kanji: null, katakana: null, english: "Dance", category: "noun", topic: "hobbies", level: "N4" },
      { japanese: "びじゅつ", kanji: "美術", katakana: null, english: "Fine Arts", category: "noun", topic: "hobbies", level: "N4" },
      { japanese: "さかなつり", kanji: "魚釣り", katakana: null, english: "Fishing", category: "noun", topic: "hobbies", level: "N4" },
      { japanese: "いけばな", kanji: "生け花", katakana: null, english: "Flower Arrangement", category: "noun", topic: "hobbies", level: "N4" },
      { japanese: "フットボール", kanji: null, katakana: null, english: "Football", category: "noun", topic: "hobbies", level: "N3" },
      { japanese: "えんげい", kanji: "園芸", katakana: null, english: "Gardening", category: "noun", topic: "hobbies", level: "N4" },
      { japanese: "ハイキング", kanji: null, katakana: null, english: "Hiking", category: "noun", topic: "hobbies", level: "N4" },
      { japanese: "ジャズ", kanji: null, katakana: null, english: "Jazz", category: "noun", topic: "hobbies", level: "N4" },
      { japanese: "ジョギング", kanji: null, katakana: null, english: "Jogging", category: "noun", topic: "hobbies", level: "N4" },
      { japanese: "カラオケ", kanji: null, katakana: null, english: "Karaoke", category: "noun", topic: "hobbies", level: "N4" },
      { japanese: "からて", kanji: "空手", katakana: null, english: "Karate", category: "noun", topic: "hobbies", level: "N4" },
      { japanese: "けんどう", kanji: "剣道", katakana: null, english: "Kendo", category: "noun", topic: "hobbies", level: "N4" },
      { japanese: "パーティー", kanji: null, katakana: null, english: "Party", category: "noun", topic: "hobbies", level: "N4" },
      { japanese: "パソコン", kanji: null, katakana: null, english: "Personal Computer", category: "noun", topic: "hobbies", level: "N4" },
      { japanese: "ピアノ", kanji: null, katakana: null, english: "Piano", category: "noun", topic: "hobbies", level: "N4" },
      { japanese: "どくしょ", kanji: "読書", katakana: null, english: "Reading Books", category: "noun", topic: "hobbies", level: "N4" },
      { japanese: "ロック", kanji: null, katakana: null, english: "Rock Music", category: "noun", topic: "hobbies", level: "N4" },
      { japanese: "サッカー", kanji: null, katakana: null, english: "Soccer", category: "noun", topic: "hobbies", level: "N4" },
      { japanese: "スポーツ", kanji: null, katakana: null, english: "Sports", category: "noun", topic: "hobbies", level: "N5" },
      { japanese: "さどう", kanji: "茶道", katakana: null, english: "Tea Ceremony", category: "noun", topic: "hobbies", level: "N4" },
      { japanese: "テニス", kanji: null, katakana: null, english: "Tennis", category: "noun", topic: "hobbies", level: "N4" },
      { japanese: "ビデオゲーム", kanji: null, katakana: null, english: "Video Game", category: "noun", topic: "hobbies", level: "N4" },
      { japanese: "バイオリン", kanji: null, katakana: null, english: "Violin", category: "noun", topic: "hobbies", level: "N4" },
      { japanese: "ギター", kanji: null, katakana: null, english: "Guitar", category: "noun", topic: "hobbies", level: "N4" },
      { japanese: "さんぽ", kanji: "散歩", katakana: null, english: "A Walk / Stroll", category: "noun", topic: "hobbies", level: "N5" },

      // ---- COUNTRY, PEOPLE, LANGUAGE (23) ----
      { japanese: "アメリカ", kanji: null, katakana: null, english: "America", category: "noun", topic: "countries", level: "N5" },
      { japanese: "あめりかじん", kanji: null, katakana: "アメリカ人", english: "American (person)", category: "noun", topic: "countries", level: "N4" },
      { japanese: "ブラジル", kanji: null, katakana: null, english: "Brazil", category: "noun", topic: "countries", level: "N4" },
      { japanese: "ぽるとがるご", kanji: null, katakana: "ポルトガル語", english: "Portuguese (language)", category: "noun", topic: "countries", level: "N4" },
      { japanese: "ちゅうごく", kanji: "中国", katakana: null, english: "China", category: "noun", topic: "countries", level: "N5" },
      { japanese: "ちゅうごくじん", kanji: "中国人", katakana: null, english: "Chinese (person)", category: "noun", topic: "countries", level: "N4" },
      { japanese: "ちゅうごくご", kanji: "中国語", katakana: null, english: "Chinese (language)", category: "noun", topic: "countries", level: "N4" },
      { japanese: "イギリス", kanji: null, katakana: null, english: "England / Britain", category: "noun", topic: "countries", level: "N4" },
      { japanese: "いぎりすじん", kanji: null, katakana: "イギリス人", english: "British (person)", category: "noun", topic: "countries", level: "N4" },
      { japanese: "ドイツ", kanji: null, katakana: null, english: "Germany", category: "noun", topic: "countries", level: "N4" },
      { japanese: "どいつじん", kanji: null, katakana: "ドイツ人", english: "German (person)", category: "noun", topic: "countries", level: "N4" },
      { japanese: "どいつご", kanji: null, katakana: "ドイツ語", english: "German (language)", category: "noun", topic: "countries", level: "N4" },
      { japanese: "にほんじん", kanji: "日本人", katakana: null, english: "Japanese (person)", category: "noun", topic: "countries", level: "N5" },
      { japanese: "にほんご", kanji: "日本語", katakana: null, english: "Japanese (language)", category: "noun", topic: "countries", level: "N5" },
      { japanese: "かんこくじん", kanji: "韓国人", katakana: null, english: "Korean (person)", category: "noun", topic: "countries", level: "N4" },
      { japanese: "かんこくご", kanji: "韓国語", katakana: null, english: "Korean (language)", category: "noun", topic: "countries", level: "N4" },
      { japanese: "メキシコ", kanji: null, katakana: null, english: "Mexico", category: "noun", topic: "countries", level: "N4" },
      { japanese: "めきしこじん", kanji: null, katakana: "メキシコ人", english: "Mexican (person)", category: "noun", topic: "countries", level: "N4" },
      { japanese: "すぺいんご", kanji: null, katakana: "スペイン語", english: "Spanish (language)", category: "noun", topic: "countries", level: "N4" },
      { japanese: "フランス", kanji: null, katakana: null, english: "France", category: "noun", topic: "countries", level: "N4" },
      { japanese: "ふらんすじん", kanji: null, katakana: "フランス人", english: "French (person)", category: "noun", topic: "countries", level: "N4" },
      { japanese: "ふらんすご", kanji: null, katakana: "フランス語", english: "French (language)", category: "noun", topic: "countries", level: "N4" },
      { japanese: "くに", kanji: "国", katakana: null, english: "Country", category: "noun", topic: "countries", level: "N5" },

      // ---- WORDS AT SCHOOL (30) ----
      { japanese: "がくぶ", kanji: "学部", katakana: null, english: "Academic Department", category: "noun", topic: "school", level: "N4" },
      { japanese: "こうどう", kanji: "講堂", katakana: null, english: "Auditorium", category: "noun", topic: "school", level: "N4" },
      { japanese: "カフェテリア", kanji: null, katakana: null, english: "Cafeteria", category: "noun", topic: "school", level: "N3" },
      { japanese: "チョーク", kanji: null, katakana: null, english: "Chalk", category: "noun", topic: "school", level: "N4" },
      { japanese: "こくばん", kanji: "黒板", katakana: null, english: "Blackboard", category: "noun", topic: "school", level: "N4" },
      { japanese: "クラス", kanji: null, katakana: null, english: "Class (group)", category: "noun", topic: "school", level: "N4" },
      { japanese: "じゅぎょう", kanji: "授業", katakana: null, english: "Class / Lesson", category: "noun", topic: "school", level: "N4" },
      { japanese: "だいがくせい", kanji: "大学生", katakana: null, english: "University Student", category: "noun", topic: "school", level: "N4" },
      { japanese: "コンピューター", kanji: null, katakana: null, english: "Computer", category: "noun", topic: "school", level: "N4" },
      { japanese: "じむしつ", kanji: "事務室", katakana: null, english: "Office (administrative)", category: "noun", topic: "school", level: "N4" },
      { japanese: "じしょ", kanji: "辞書", katakana: null, english: "Dictionary", category: "noun", topic: "school", level: "N5" },
      { japanese: "りょう", kanji: "寮", katakana: null, english: "Dormitory", category: "noun", topic: "school", level: "N4" },
      { japanese: "けしゴム", kanji: "消しゴム", katakana: null, english: "Eraser", category: "noun", topic: "school", level: "N4" },
      { japanese: "いちねんせい", kanji: "一年生", katakana: null, english: "First-Year Student", category: "noun", topic: "school", level: "N4" },
      { japanese: "にねんせい", kanji: "二年生", katakana: null, english: "Second-Year Student", category: "noun", topic: "school", level: "N4" },
      { japanese: "さんねんせい", kanji: "三年生", katakana: null, english: "Third-Year Student", category: "noun", topic: "school", level: "N4" },
      { japanese: "よねんせい", kanji: "四年生", katakana: null, english: "Fourth-Year Student", category: "noun", topic: "school", level: "N4" },
      { japanese: "せいせき", kanji: "成績", katakana: null, english: "Grade / Marks", category: "noun", topic: "school", level: "N4" },
      { japanese: "だいがくいん", kanji: "大学院", katakana: null, english: "Graduate School", category: "noun", topic: "school", level: "N4" },
      { japanese: "だいがくいんせい", kanji: "大学院生", katakana: null, english: "Graduate Student", category: "noun", topic: "school", level: "N4" },
      { japanese: "たいいくかん", kanji: "体育館", katakana: null, english: "Gymnasium", category: "noun", topic: "school", level: "N4" },
      { japanese: "こうこう", kanji: "高校", katakana: null, english: "High School", category: "noun", topic: "school", level: "N4" },
      { japanese: "こうこうせい", kanji: "高校生", katakana: null, english: "High School Student", category: "noun", topic: "school", level: "N4" },
      { japanese: "りゅうがくせい", kanji: "留学生", katakana: null, english: "International Student", category: "noun", topic: "school", level: "N4" },
      { japanese: "せんこう", kanji: "専攻", katakana: null, english: "Major (field)", category: "noun", topic: "school", level: "N4" },
      { japanese: "ノート", kanji: null, katakana: null, english: "Notebook", category: "noun", topic: "school", level: "N5" },
      { japanese: "ペン", kanji: null, katakana: null, english: "Pen", category: "noun", topic: "school", level: "N5" },
      { japanese: "えんぴつ", kanji: "鉛筆", katakana: null, english: "Pencil", category: "noun", topic: "school", level: "N5" },
      { japanese: "けんきゅうしつ", kanji: "研究室", katakana: null, english: "Professor's Office", category: "noun", topic: "school", level: "N4" },
      { japanese: "テレビ", kanji: null, katakana: null, english: "Television", category: "noun", topic: "school", level: "N5" },

      // ---- ACADEMIC SUBJECTS (16) ----
      { japanese: "かいけいがく", kanji: "会計学", katakana: null, english: "Accounting", category: "noun", topic: "subjects", level: "N4" },
      { japanese: "せいぶつがく", kanji: "生物学", katakana: null, english: "Biology", category: "noun", topic: "subjects", level: "N4" },
      { japanese: "かがく", kanji: "化学", katakana: null, english: "Chemistry", category: "noun", topic: "subjects", level: "N4" },
      { japanese: "けいざいがく", kanji: "経済学", katakana: null, english: "Economics (study)", category: "noun", topic: "subjects", level: "N4" },
      { japanese: "こうがく", kanji: "工学", katakana: null, english: "Engineering", category: "noun", topic: "subjects", level: "N4" },
      { japanese: "ざいせいがく", kanji: "財政学", katakana: null, english: "Finance (study)", category: "noun", topic: "subjects", level: "N4" },
      { japanese: "がいこくご", kanji: "外国語", katakana: null, english: "Foreign Language", category: "noun", topic: "subjects", level: "N4" },
      { japanese: "れきしがく", kanji: "歴史学", katakana: null, english: "History (study)", category: "noun", topic: "subjects", level: "N4" },
      { japanese: "ほうがく", kanji: "法学", katakana: null, english: "Law (study)", category: "noun", topic: "subjects", level: "N4" },
      { japanese: "ぶんがく", kanji: "文学", katakana: null, english: "Literature", category: "noun", topic: "subjects", level: "N4" },
      { japanese: "てつがく", kanji: "哲学", katakana: null, english: "Philosophy", category: "noun", topic: "subjects", level: "N4" },
      { japanese: "せいじがく", kanji: "政治学", katakana: null, english: "Political Science", category: "noun", topic: "subjects", level: "N4" },
      { japanese: "しんりがく", kanji: "心理学", katakana: null, english: "Psychology", category: "noun", topic: "subjects", level: "N4" },
      { japanese: "ぶつりがく", kanji: "物理学", katakana: null, english: "Physics", category: "noun", topic: "subjects", level: "N4" },
      { japanese: "いがく", kanji: "医学", katakana: null, english: "Medicine (study)", category: "noun", topic: "subjects", level: "N4" },
      { japanese: "にほんぶんか", kanji: "日本文化", katakana: null, english: "Japanese Culture", category: "noun", topic: "subjects", level: "N4" },

      // ---- FAMILY TERMS (25) ----
      { japanese: "おにいさん", kanji: "お兄さん", katakana: null, english: "Older Brother (someone else's)", category: "noun", topic: "family", level: "N5" },
      { japanese: "おねえさん", kanji: "お姉さん", katakana: null, english: "Older Sister (someone else's)", category: "noun", topic: "family", level: "N5" },
      { japanese: "おとうとさん", kanji: "弟さん", katakana: null, english: "Younger Brother (someone else's)", category: "noun", topic: "family", level: "N4" },
      { japanese: "いもうと", kanji: "妹", katakana: null, english: "Younger Sister (one's own)", category: "noun", topic: "family", level: "N5" },
      { japanese: "いもうとさん", kanji: "妹さん", katakana: null, english: "Younger Sister (someone else's)", category: "noun", topic: "family", level: "N4" },
      { japanese: "おじいさん", kanji: "お祖父さん", katakana: null, english: "Grandfather (someone else's)", category: "noun", topic: "family", level: "N5" },
      { japanese: "そぼ", kanji: "祖母", katakana: null, english: "Grandmother (one's own)", category: "noun", topic: "family", level: "N5" },
      { japanese: "おじ", kanji: "叔父", katakana: null, english: "Uncle (one's own)", category: "noun", topic: "family", level: "N5" },
      { japanese: "おば", kanji: "叔母", katakana: null, english: "Aunt (one's own)", category: "noun", topic: "family", level: "N5" },
      { japanese: "おばさん", kanji: "叔母さん", katakana: null, english: "Aunt (someone else's)", category: "noun", topic: "family", level: "N4" },
      { japanese: "おっと", kanji: "夫", katakana: null, english: "Husband (one's own)", category: "noun", topic: "family", level: "N5" },
      { japanese: "ごしゅじん", kanji: "ご主人", katakana: null, english: "Husband (someone else's)", category: "noun", topic: "family", level: "N4" },
      { japanese: "むすこさん", kanji: "息子さん", katakana: null, english: "Son (someone else's)", category: "noun", topic: "family", level: "N4" },
      { japanese: "むすめさん", kanji: "娘さん", katakana: null, english: "Daughter (someone else's)", category: "noun", topic: "family", level: "N4" },
      { japanese: "ごかぞく", kanji: "ご家族", katakana: null, english: "Family (someone else's)", category: "noun", topic: "family", level: "N4" },
      { japanese: "ごりょうしん", kanji: "ご両親", katakana: null, english: "Parents (someone else's)", category: "noun", topic: "family", level: "N4" },
      { japanese: "きょうだい", kanji: "兄弟", katakana: null, english: "Siblings (one's own)", category: "noun", topic: "family", level: "N4" },
      { japanese: "ごきょうだい", kanji: "ご兄弟", katakana: null, english: "Siblings (someone else's)", category: "noun", topic: "family", level: "N4" },
      { japanese: "まご", kanji: "孫", katakana: null, english: "Grandchild (one's own)", category: "noun", topic: "family", level: "N4" },
      { japanese: "おまごさん", kanji: "お孫さん", katakana: null, english: "Grandchild (someone else's)", category: "noun", topic: "family", level: "N4" },
      { japanese: "おい", kanji: "甥", katakana: null, english: "Nephew", category: "noun", topic: "family", level: "N4" },
      { japanese: "めい", kanji: "姪", katakana: null, english: "Niece", category: "noun", topic: "family", level: "N4" },
      { japanese: "いとこ", kanji: "従兄弟", katakana: null, english: "Cousin", category: "noun", topic: "family", level: "N4" },
      { japanese: "しんせき", kanji: "親戚", katakana: null, english: "Relative", category: "noun", topic: "family", level: "N4" },
      { japanese: "こどもさん", kanji: "子供さん", katakana: null, english: "Children (someone else's)", category: "noun", topic: "family", level: "N5" },

    ];

    let currentIndexVocab = 0;
    let filteredCardsVocab = [];
    let studiedCardsVocab = new Set();
    let seenCardIndicesVocab = new Set();
    let isFlippedVocab = false;
    let showReverseVocab = false;  // false = Japanese→English, true = English→Japanese  
    let showKanjiVocab = false;    // false = hide kanji, true = show kanji
    let showKatakanaVocab = false; // false = hide katakana, true = show katakana
    let showRomajiVocab = false;   // false = hide romaji, true = show romaji

    // Shuffle array using Fisher-Yates algorithm
    function shuffleArrayVocab(array) {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    }
    
    // Toggle reverse mode (English first vs Japanese first)
    function toggleReverseVocab() {
      showReverseVocab = document.getElementById('toggle-reverse-vocab').checked;
      loadCardVocab();  // Reload current card with new mode
    }
    
    // Toggle kanji display
    function toggleKanjiVocab() {
      showKanjiVocab = document.getElementById('toggle-kanji-vocab').checked;
      loadCardVocab();  // Reload current card with kanji
    }
    
    // Toggle katakana display
    function toggleKatakanaVocab() {
      showKatakanaVocab = document.getElementById('toggle-katakana-vocab').checked;
      loadCardVocab();  // Reload current card with katakana
    }

    function toggleRomajiVocab() {
      showRomajiVocab = document.getElementById('toggle-romaji-vocab').checked;
      loadCardVocab();  // Reload current card with romaji
    }

    // ========================================================================
    // VOCABULARY SEARCH
    // ------------------------------------------------------------------------
    // 941 cards with no way to find one. Searches both directions at once —
    // English, kana, kanji, katakana — and converts rōmaji as it goes, so
    // "ringo", "りんご", "林檎" and "apple" all land on the same card. There is
    // no separate mode to choose: the query is matched against everything.
    // ========================================================================
    var vsHits = [];
    var vsIndex = -1;

    // Vowel of each hiragana, so ー can be expanded into the sound it stands
    // for. Dropping ー instead does not work: ジュース folds to じゅす while
    // "juusu" gives じゅうす, and the two never meet.
    var VS_VOWEL = (function () {
      var map = {};
      var rows = { 'あ': 'あかさたなはまやらわがざだばぱゃゎぁ', 'い': 'いきしちにひみりぎじぢびぴぃ',
                   'う': 'うくすつぬふむゆるぐずづぶぷゅゔっぅ', 'え': 'えけせてねへめれげぜでべぺぇ',
                   'お': 'おこそとのほもよろをごぞどぼぽょぉ' };
      Object.keys(rows).forEach(function (v) {
        rows[v].split('').forEach(function (c) { map[c] = v; });
      });
      return map;
    })();

    function vsFold(str) {
      var s = String(str || '').toLowerCase().trim()
        .replace(/[ァ-ヶ]/g, function (c) { return String.fromCharCode(c.charCodeAt(0) - 0x60); })
        // Spaces are kept, not stripped: "heavy rain" has to stay two words or
        // the word-boundary ranking below has nothing to find. Japanese fields
        // have no spaces in them anyway.
        .replace(/\s+/g, ' ');
      var out = '';
      for (var i = 0; i < s.length; i++) {
        var c = s[i];
        if (c === 'ー') {
          // An お-row kana lengthens with う, exactly as the spelling does.
          var v = VS_VOWEL[out.slice(-1)];
          out += (v === 'お' ? 'う' : (v || ''));
        } else {
          out += c;
        }
      }
      return out;
    }

    // What the query could mean. A Latin query is also tried as rōmaji, so
    // "ringo" finds りんご without the learner switching anything on.
    function vsQueries(raw) {
      var q = String(raw || '').trim();
      if (!q) return [];
      var out = [vsFold(q)];
      if (/^[a-zA-Z' \-]+$/.test(q) && window.KA_toKana) {
        var kana = vsFold(window.KA_toKana(q, true));
        if (kana && out.indexOf(kana) === -1) out.push(kana);
      }
      return out.filter(Boolean);
    }

    function vsSearch(raw) {
      var qs = vsQueries(raw);
      if (!qs.length) return [];
      var deck = (typeof vocabDataList !== 'undefined') ? vocabDataList : [];
      var scored = [];
      deck.forEach(function (card, i) {
        var fields = [card.english, card.japanese, card.kanji, card.katakana];
        var best = 0;
        qs.forEach(function (q) {
          fields.forEach(function (f) {
            if (!f) return;
            var v = vsFold(f);
            if (!v) return;
            // Exact beats starts-with beats contains, so "apple" puts Apple
            // above Pineapple.
            if (v === q) best = Math.max(best, 4);
            else if (v.indexOf(q) === 0) best = Math.max(best, 3);
            // A match at the start of a word beats one buried inside another
            // word, so "rain" puts Heavy Rain above Bullet Train.
            else if (v.indexOf(' ' + q) !== -1) best = Math.max(best, 2);
            else if (v.indexOf(q) !== -1) best = Math.max(best, 1);
          });
        });
        if (best) scored.push({ card: card, rank: best });
      });
      scored.sort(function (a, b) {
        if (b.rank !== a.rank) return b.rank - a.rank;
        return a.card.english.localeCompare(b.card.english);
      });
      return scored.map(function (s) { return s.card; });
    }

    function vsRender(raw) {
      var box = document.getElementById('vocab-search-results');
      if (!box) return;
      vsHits = vsSearch(raw);
      vsIndex = -1;
      if (!String(raw || '').trim()) { box.style.display = 'none'; box.innerHTML = ''; return; }

      if (!vsHits.length) {
        box.style.display = 'block';
        box.innerHTML = '<div class="vocab-search-empty">' +
          ct('vocab_search_none', 'Nothing matches') + ' “' + dojoEscape(raw) + '”</div>';
        return;
      }
      var shown = vsHits.slice(0, 25);
      box.innerHTML = shown.map(function (c, i) {
        var written = c.kanji || c.katakana || '';
        return '<button type="button" class="vocab-search-hit" data-i="' + i + '">' +
          '<span class="vs-jp jp">' + dojoEscape(c.japanese) + '</span>' +
          (written ? '<span class="vs-kj jp">' + dojoEscape(written) + '</span>' : '<span class="vs-kj"></span>') +
          '<span class="vs-en">' + dojoEscape(c.english) + '</span>' +
          (c.level ? '<span class="vs-lv">' + c.level + '</span>' : '') +
          '</button>';
      }).join('') + (vsHits.length > shown.length
        ? '<div class="vocab-search-more">' + (vsHits.length - shown.length) + ' ' +
          ct('vocab_search_more', 'more') + '</div>' : '');
      box.style.display = 'block';
      Array.prototype.forEach.call(box.querySelectorAll('.vocab-search-hit'), function (b) {
        b.addEventListener('click', function () { vsGoTo(shown[Number(b.dataset.i)]); });
      });
    }

    // Jump the deck to a card. It may not be in the current shuffled order at
    // all if a filter is on, so it gets put in front rather than searched for.
    function vsGoTo(card) {
      if (!card) return;
      var at = filteredCardsVocab.indexOf(card);
      if (at === -1) {
        filteredCardsVocab = [card].concat(filteredCardsVocab);
        at = 0;
      }
      currentIndexVocab = at;
      isFlippedVocab = false;
      loadCardVocab();
      updateProgressVocab();
      vsClose();
      var card1 = document.getElementById('flashcard-vocab');
      if (card1 && card1.scrollIntoView) card1.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function vsClose() {
      var box = document.getElementById('vocab-search-results');
      var input = document.getElementById('vocab-search');
      if (box) { box.style.display = 'none'; box.innerHTML = ''; }
      if (input) input.value = '';
      vsHits = []; vsIndex = -1;
    }

    function vsMove(delta) {
      var box = document.getElementById('vocab-search-results');
      if (!box) return;
      var btns = box.querySelectorAll('.vocab-search-hit');
      if (!btns.length) return;
      vsIndex = (vsIndex + delta + btns.length) % btns.length;
      Array.prototype.forEach.call(btns, function (b, i) { b.classList.toggle('on', i === vsIndex); });
      btns[vsIndex].scrollIntoView({ block: 'nearest' });
    }

    function wireVocabSearch() {
      var input = document.getElementById('vocab-search');
      if (!input) return;
      var t = null;
      input.addEventListener('input', function () {
        clearTimeout(t);
        var v = this.value;
        t = setTimeout(function () { vsRender(v); }, 90);
      });
      input.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') { vsClose(); this.blur(); return; }
        if (e.key === 'ArrowDown') { e.preventDefault(); vsMove(1); return; }
        if (e.key === 'ArrowUp') { e.preventDefault(); vsMove(-1); return; }
        if (e.key === 'Enter') {
          e.preventDefault();
          var pick = vsIndex >= 0 ? vsHits[vsIndex] : vsHits[0];
          if (pick) vsGoTo(pick);
        }
      });
      // Clicking away closes it, but clicking a result must not.
      document.addEventListener('click', function (e) {
        var box = document.getElementById('vocab-search-results');
        if (!box || box.style.display === 'none') return;
        if (e.target === input || box.contains(e.target)) return;
        box.style.display = 'none';
      });
    }

    // Initialize vocabulary
    function initVocab() {
      filteredCardsVocab = shuffleArrayVocab(vocabDataList);
      loadCardVocab();
      updateProgressVocab();
      wireVocabListen();
      wireVocabKeys();
      wireVocabSearch();
      openVocabQuery();
    }

    // /vocabulary?q=食べる — the Dictionary links here, so the search should
    // already be showing what it sent. One hit goes straight to the card.
    function openVocabQuery() {
      var q;
      try { q = new URLSearchParams(location.search).get('q'); } catch (e) { return; }
      if (!q) return;
      var input = document.getElementById('vocab-search');
      if (!input) return;
      input.value = q;
      vsRender(q);
      if (vsHits.length === 1) vsGoTo(vsHits[0]);
      else input.focus();
    }

    // Always speak the hiragana reading: it is the one field that is never
    // ambiguous. 海 alone could be かい or うみ; card.japanese never is.
    function currentVocabReading() {
      var card = filteredCardsVocab[currentIndexVocab];
      return card ? (card.japanese || card.katakana || card.kanji || '') : '';
    }

    function wireVocabListen() {
      if (!window.KA_Listen) return;
      var btn = document.getElementById('vocab-listen');
      var split = document.getElementById('vocab-listen-split');
      if (!btn || !split) return;
      window.KA_Listen.attach(btn, currentVocabReading);
      window.KA_Listen.wirePanel({
        caret: 'vocab-audio-caret',
        panel: 'vocab-audio-panel',
        select: 'vocab-voice-select',
        preview: 'vocab-voice-preview'
      });
      var paint = function () {
        split.style.display = window.KA_Listen.available() ? '' : 'none';
      };
      paint();
      // Browser voices arrive late in Chrome, and Azure's list is a fetch.
      if (window.KA_Speech) window.KA_Speech.onReady(paint);
      if (window.KA_Azure) window.KA_Azure.listVoices().then(paint).catch(paint);
    }

    // ---------- vocabulary: keyboard ----------
    // Same conventions as the Kana Drill and Talk: Alt+I holds open the help,
    // Alt+letter toggles a setting, arrows move.
    var VOCAB_INFO_ROWS_FALLBACK = [
      ['← / →', 'Previous and next card.'],
      ['Space', 'Hear the word read aloud.'],
      ['Alt+F (hold)', 'Hold to flip the card; let go and it flips back. Click the card to flip it and keep it flipped.'],
      ['Alt+E', 'Show the translation first, instead of the Japanese.'],
      ['Alt+K', 'Show the kanji spelling.'],
      ['Alt+T', 'Show the katakana spelling.'],
      ['Alt+R', 'Show rōmaji under the word.'],
      ['Alt+S', 'Shuffle the deck.'],
      ['Alt+V', 'Open the voice options next to Listen.'],
      ['Alt+I (hold)', 'Hold to read this box; let go and it closes. The ⓘ button opens it to stay — Esc or a click outside closes that.']
    ];

    function vocabInfoRows() {
      var rows = (typeof I18N !== 'undefined' && I18N[LANG] && I18N[LANG].vocab_info_rows)
        || (typeof I18N !== 'undefined' && I18N.en && I18N.en.vocab_info_rows);
      return Array.isArray(rows) ? rows : VOCAB_INFO_ROWS_FALLBACK;
    }

    var vocabInfoPeeking = false;
    var vocabFlipPeeking = false;

    function vocabInfoOpen() {
      var o = document.getElementById('vocab-info-overlay');
      return !!o && o.classList.contains('show');
    }

    function openVocabInfo(peeking) {
      var box = document.getElementById('vocab-info-content');
      if (!box) return;
      vocabInfoPeeking = !!peeking;
      var ct = window.KA_ct || function (k, f) { return f; };
      document.getElementById('vocab-info-title').textContent = ct('vocab_info_title', 'Shortcuts & options');
      document.getElementById('vocab-info-sub').textContent =
        ct('vocab_info_sub', 'Keyboard shortcuts and what the controls on this page do.');
      box.innerHTML = '';
      vocabInfoRows().forEach(function (row) {
        var r = document.createElement('div'); r.className = 'info-row';
        var k = document.createElement('div'); k.className = 'info-keys'; k.textContent = row[0];
        var d = document.createElement('div'); d.className = 'info-desc'; d.textContent = row[1];
        r.appendChild(k); r.appendChild(d); box.appendChild(r);
      });
      document.getElementById('vocab-info-overlay').classList.add('show');
    }

    function closeVocabInfo() {
      var o = document.getElementById('vocab-info-overlay');
      if (o) o.classList.remove('show');
      vocabInfoPeeking = false;
    }

    // Typing somewhere? Then the keys belong to that field, not to us.
    // Text-entry controls only. The earlier version treated every <input> as
    // typing, which quietly killed the whole keyboard layer: the toggles are
    // checkboxes, so clicking one leaves focus on it, and from that moment
    // Alt+R (and Alt+K, Space, the arrows — everything) did nothing until you
    // clicked elsewhere on the page. Rōmaji is the toggle people notice it on,
    // because it is the one you flick on, look at, and try to flick back off
    // from the keyboard.
    var VOCAB_TEXT_INPUTS = /^(text|search|email|url|tel|password|number)$/;

    function vocabTyping(e) {
      var el = e.target;
      if (!el) return false;
      if (el.isContentEditable) return true;
      var tag = (el.tagName || '').toLowerCase();
      if (tag === 'textarea') return true;
      // A <select> keeps its own arrow-key behaviour, so leave it alone.
      if (tag === 'select') return true;
      if (tag !== 'input') return false;
      return VOCAB_TEXT_INPUTS.test((el.type || 'text').toLowerCase());
    }

    // Focus sitting on something Space is supposed to activate — a checkbox or
    // a button. Space must keep toggling it natively there, so the Listen
    // shortcut stands down rather than stealing the key.
    function vocabSpaceTarget(e) {
      var el = e.target;
      if (!el) return false;
      var tag = (el.tagName || '').toLowerCase();
      if (tag === 'button') return true;
      return tag === 'input' && /^(checkbox|radio|button|submit|reset)$/.test((el.type || '').toLowerCase());
    }

    // Alt changes what e.key reports on some keyboard layouts, and AltGr
    // (Ctrl+Alt on German layouts) changes it again. e.code names the physical
    // key, so Alt+R is Alt+R wherever you are — the Kana Drill already does
    // this; the vocabulary layer did not.
    function vocabLetter(e) {
      var code = e.code || '';
      if (/^Key[A-Z]$/.test(code)) return code.slice(3).toLowerCase();
      return (e.key || '').toLowerCase();
    }

    function vocabToggle(id) {
      var el = document.getElementById(id);
      if (!el) return;
      el.checked = !el.checked;
      // Fire the same path a real click takes, so the handler runs.
      el.dispatchEvent(new Event('change'));
    }

    var VOCAB_TOGGLE_KEYS = {
      e: 'toggle-reverse-vocab',
      k: 'toggle-kanji-vocab',
      t: 'toggle-katakana-vocab',
      r: 'toggle-romaji-vocab'
    };

    function wireVocabKeys() {
      if (document.body.getAttribute('data-vocab-keys') === '1') return;
      document.body.setAttribute('data-vocab-keys', '1');

      var chip = document.getElementById('vocab-info-chip');
      if (chip) chip.addEventListener('click', function () { openVocabInfo(false); });
      var close = document.getElementById('vocab-info-close');
      if (close) close.addEventListener('click', closeVocabInfo);
      var overlay = document.getElementById('vocab-info-overlay');
      if (overlay) overlay.addEventListener('click', function (e) {
        if (e.target === this) closeVocabInfo();
      });

      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') { closeVocabInfo(); return; }
        if (vocabTyping(e) || e.ctrlKey || e.metaKey) return;

        // ---- no modifier ----
        if (!e.altKey) {
          if (vocabInfoOpen()) return;
          if (e.key === 'ArrowRight') { e.preventDefault(); nextCardVocab(); return; }
          if (e.key === 'ArrowLeft')  { e.preventDefault(); previousCardVocab(); return; }
          if (e.key === ' ' || e.key === 'Spacebar') {
            // Space would otherwise scroll the page, or re-press whichever
            // button was last clicked. But when focus is on a toggle or a
            // button, Space belongs to that control — taking it would break
            // keyboard operation of the very switches this page is built on.
            if (vocabSpaceTarget(e)) return;
            e.preventDefault();
            var listen = document.getElementById('vocab-listen');
            if (listen && listen.offsetParent !== null) listen.click();
            return;
          }
          return;
        }

        // ---- Alt+… ----
        var key = vocabLetter(e);
        if (key === 'i') {
          e.preventDefault();
          if (!e.repeat && !vocabInfoOpen()) openVocabInfo(true);
          return;
        }
        if (vocabInfoOpen()) return;   // the rest belong to the cards

        if (key === 'f') {
          e.preventDefault();
          if (e.repeat) return;
          var card = document.getElementById('flashcard-vocab');
          if (!card) return;
          // Peek: remember how it was, so releasing restores it rather than
          // blindly flipping back to the front.
          if (!vocabFlipPeeking) {
            vocabFlipPeeking = card.classList.contains('flipped') ? 'back' : 'front';
            flipCardVocab();
          }
          return;
        }
        if (key === 's') { e.preventDefault(); shuffleCardsVocab(); return; }
        if (key === 'v') {
          e.preventDefault();
          var caret = document.getElementById('vocab-audio-caret');
          if (caret && caret.offsetParent !== null) caret.click();
          return;
        }
        if (VOCAB_TOGGLE_KEYS[key]) { e.preventDefault(); vocabToggle(VOCAB_TOGGLE_KEYS[key]); return; }
      });

      function endPeeks(e) {
        // Same layout-proof key reading as the keydown side — otherwise a hold
        // could be started by Alt+F and never released by letting F go.
        var k = e ? vocabLetter(e) : '';
        var altGone = !e || k === 'alt' || (e && e.key || '').toLowerCase() === 'alt' || !e.altKey;
        if (vocabInfoPeeking && (k === 'i' || altGone)) closeVocabInfo();
        if (vocabFlipPeeking && (k === 'f' || altGone)) {
          var card = document.getElementById('flashcard-vocab');
          var wantFlipped = vocabFlipPeeking === 'back';
          vocabFlipPeeking = false;
          if (card && card.classList.contains('flipped') !== wantFlipped) flipCardVocab();
        }
      }
      document.addEventListener('keyup', endPeeks);
      // Alt+Tab away mid-hold and no keyup ever arrives.
      window.addEventListener('blur', function () { endPeeks(null); });
    }

    window.KA_VocabInfo = { open: openVocabInfo, close: closeVocabInfo };

    // Load current card (updated for reverse mode, kanji, katakana, and improved display)
    function loadCardVocab() {
      if (filteredCardsVocab.length === 0) return;
      if (window.KA_Listen) window.KA_Listen.stop();   // never talk over the next card

      const card = filteredCardsVocab[currentIndexVocab];
      
      // Get elements
      const japaneseEl = document.getElementById('card-japanese-vocab');
      const englishEl = document.getElementById('card-english-vocab');
      const categoryEl = document.getElementById('card-category-vocab');
      
      // Front script container
      const scriptContainerFront = document.getElementById('script-container-vocab');
      const kanjiFront = document.getElementById('card-kanji-vocab');
      const katakanaFront = document.getElementById('card-katakana-vocab');
      
      // Back script container
      const scriptContainerBack = document.getElementById('script-container-vocab-back');
      const kanjiBack = document.getElementById('card-kanji-vocab-back');
      const katakanaBack = document.getElementById('card-katakana-vocab-back');
      
      // Helper function to update script container (null-safe)
      const updateScriptContainer = (container, kanjiEl, katakanaEl, showKanji, showKatakana) => {
        if (!container || !kanjiEl || !katakanaEl) {
          console.warn('Script container or elements not found');
          return;
        }
        
        const hasKanji = card.kanji !== null;
        const hasKatakana = card.katakana !== null;
        const shouldShowKanji = showKanji && hasKanji;
        const shouldShowKatakana = showKatakana && hasKatakana;
        
        // Show container if we have at least one script to display
        if (shouldShowKanji || shouldShowKatakana) {
          container.style.display = 'flex';
          
          // Update kanji
          if (shouldShowKanji) {
            kanjiEl.textContent = card.kanji;
            kanjiEl.style.display = 'block';
          } else {
            kanjiEl.style.display = 'none';
          }
          
          // Update katakana
          if (shouldShowKatakana) {
            katakanaEl.textContent = card.katakana;
            katakanaEl.style.display = 'block';
          } else {
            katakanaEl.style.display = 'none';
          }
        } else {
          // Hide container if nothing to show
          container.style.display = 'none';
        }
      };
      
      if (showReverseVocab) {
        // REVERSE MODE: English on FRONT, Japanese on BACK
        
        // FRONT: Show English (smaller)
        japaneseEl.textContent = card.english;
        japaneseEl.classList.add('english-front');
        
        // BACK: Show Japanese hiragana
        englishEl.textContent = card.japanese;
        englishEl.classList.remove('english-front');
        
        // FRONT: Hide all scripts
        if (scriptContainerFront) scriptContainerFront.style.display = 'none';
        
        // BACK: Show kanji/katakana if toggles are on
        updateScriptContainer(
          scriptContainerBack, 
          kanjiBack, 
          katakanaBack, 
          showKanjiVocab, 
          showKatakanaVocab
        );
        
      } else {
        // NORMAL MODE: Japanese on FRONT, English on BACK
        
        // FRONT: Show Japanese hiragana
        japaneseEl.textContent = card.japanese;
        japaneseEl.classList.remove('english-front');
        
        // BACK: Show English
        englishEl.textContent = card.english;
        englishEl.classList.remove('english-front');
        
        // FRONT: Show kanji/katakana if toggles are on
        updateScriptContainer(
          scriptContainerFront, 
          kanjiFront, 
          katakanaFront, 
          showKanjiVocab, 
          showKatakanaVocab
        );
        
        // BACK: Hide scripts
        if (scriptContainerBack) scriptContainerBack.style.display = 'none';
      }
      
      // --- romaji line (display only; generated from the kana) ---
      var romajiFront = document.getElementById('card-romaji-vocab');
      var romajiBack = document.getElementById('card-romaji-vocab-back');
      var romajiText = (showRomajiVocab && window.toRomaji) ? window.toRomaji(card.japanese) : '';
      // the Japanese sits on the back in reverse mode, on the front otherwise
      var romajiTarget = showReverseVocab ? romajiBack : romajiFront;
      var romajiOther = showReverseVocab ? romajiFront : romajiBack;
      if (romajiOther) romajiOther.style.display = 'none';
      if (romajiTarget) {
        romajiTarget.textContent = romajiText;
        romajiTarget.style.display = romajiText ? 'block' : 'none';
      }

      categoryEl.textContent = getCategoryLabelVocab(card.category);
      
      // Reset flip state
      const flashcard = document.getElementById('flashcard-vocab');
      flashcard.classList.remove('flipped');
      isFlippedVocab = false;
      
      // Mark as studied in current session
      studiedCardsVocab.add(currentIndexVocab);
      
      // Track this card as seen globally
      seenCardIndicesVocab.add(card.japanese);
      
      updateStatsVocab();
    }

    // Get category label
    function getCategoryLabelVocab(category) {
      const labels = {
        'noun': 'Noun',
        'i-adjective': 'い Adjective',
        'na-adjective': 'な Adjective',
        'verb': 'Verb'
      };
      return labels[category] || category;
    }

    // Flip card
    function flipCardVocab() {
      document.getElementById('flashcard-vocab').classList.toggle('flipped');
      isFlippedVocab = !isFlippedVocab;
    }

    // Next card
    function nextCardVocab() {
      if (isFlippedVocab) {
        showToast('Please flip the card back first!');
        return;
      }
      if (currentIndexVocab < filteredCardsVocab.length - 1) {
        currentIndexVocab++;
        loadCardVocab();
        updateProgressVocab();
      }
    }

    // Previous card
    function previousCardVocab() {
      if (isFlippedVocab) {
        showToast('Please flip the card back first!');
        return;
      }
      if (currentIndexVocab > 0) {
        currentIndexVocab--;
        loadCardVocab();
        updateProgressVocab();
      }
    }

    // Shuffle cards - prioritizes unseen cards first
    function shuffleCardsVocab() {
      // Separate cards into seen and unseen
      const unseenCards = filteredCardsVocab.filter(card => !seenCardIndicesVocab.has(card.japanese));
      const seenCards = filteredCardsVocab.filter(card => seenCardIndicesVocab.has(card.japanese));
      
      // Shuffle both groups independently
      const shuffledUnseen = shuffleArrayVocab(unseenCards);
      const shuffledSeen = shuffleArrayVocab(seenCards);
      
      // Combine: unseen cards first, then seen cards
      filteredCardsVocab = [...shuffledUnseen, ...shuffledSeen];
      
      // Reset to start
      currentIndexVocab = 0;
      studiedCardsVocab.clear();
      loadCardVocab();
      updateProgressVocab();
      
      if (unseenCards.length > 0) {
        showToast('Deck shuffled! ' + unseenCards.length + ' unseen card' + (unseenCards.length !== 1 ? 's' : '') + ' first.');
      } else {
        showToast('Deck shuffled!');
      }
    }

    // Update progress
    function updateProgressVocab() {
      const progressEl = document.getElementById('progress-vocab');
      const totalEl = document.getElementById('total-cards-vocab');
      const prevBtn = document.getElementById('prev-btn-vocab');
      const nextBtn = document.getElementById('next-btn-vocab');
      
      if (progressEl) progressEl.textContent = (currentIndexVocab + 1) + ' / ' + filteredCardsVocab.length;
      if (prevBtn) prevBtn.disabled = currentIndexVocab === 0;
      if (nextBtn) nextBtn.disabled = currentIndexVocab === filteredCardsVocab.length - 1;
      if (totalEl) totalEl.textContent = filteredCardsVocab.length;
      
      console.log('Progress updated: Card ' + (currentIndexVocab + 1) + ' of ' + filteredCardsVocab.length);
    }

    // Update stats (enhanced)
    function updateStatsVocab() {
      const studiedEl = document.getElementById('cards-studied-vocab');
      if (studiedEl) {
        studiedEl.textContent = studiedCardsVocab.size;
      }
      console.log('Stats updated: ' + studiedCardsVocab.size + ' cards studied');
    }


    // Initialize
    if (document.getElementById('page-verblist')) {
      populateVerbLists();
    }
    if (document.getElementById('page-conjugator')) {
      loadProgress();       // weak spots, mistake log and best streak
      restoreConjugatorOptions();
      updateScoreDisplay();
      updateReportButton();
      readLockedVerb();     // /conjugator?v=… from the Dictionary
      generateNewQuestion();
    }

    // ---- a verb handed over from the Dictionary --------------------------
    // The link carries the word, its reading, its class and its meaning,
    // because the dictionary knows all four and this page's own verb list
    // holds only 129 words. The engine never needed more than that.
    function readLockedVerb() {
      let q;
      try { q = new URLSearchParams(location.search); } catch (e) { return; }
      const kanji = q.get('v'), kana = q.get('k'), type = q.get('t');
      const OK = { godan: 1, ichidan: 1, suru: 1, irregular: 1 };
      if (!kanji || !kana || !OK[type]) return;
      // A 'noun + する' headword is the bare noun; the drill needs the verb.
      const isSuru = type === 'suru';
      lockedVerb = {
        kanji: isSuru && kanji.slice(-2) !== 'する' ? kanji + 'する' : kanji,
        hiragana: isSuru && kana.slice(-2) !== 'する' ? kana + 'する' : kana,
        meaning: (q.get('m') || '').slice(0, 80),
        jlpt: 'N5',
        type: type
      };
      paintLock();
    }

    function paintLock() {
      const badge = document.getElementById('lock-badge');
      if (!badge) return;
      badge.style.display = lockedVerb ? 'inline-block' : 'none';
      if (!lockedVerb) return;
      const say = (typeof t === 'function' && t('conj_locked') !== 'conj_locked')
        ? t('conj_locked') : 'Practising {w} only';
      document.getElementById('lock-text').textContent = say.replace('{w}', lockedVerb.kanji);
      const off = document.getElementById('lock-off');
      off.textContent = (typeof t === 'function' && t('conj_unlock') !== 'conj_unlock')
        ? t('conj_unlock') : 'Unlock';
      off.onclick = function () {
        lockedVerb = null;
        paintLock();
        try { history.replaceState(null, '', location.pathname); } catch (e) {}
        generateNewQuestion();
      };
    }

    // Put the practice options back the way the learner left them.
    function restoreConjugatorOptions() {
      paintRomajiToggle();
      setRomajiInput(romajiInputEnabled());   // also sets the right placeholder
      const quiz = document.getElementById('type-quiz-toggle');
      if (quiz) {
        let saved = 'on';
        try { saved = localStorage.getItem('katsuyo-type-quiz') || 'on'; } catch (e) {}
        quiz.checked = saved !== 'off';
      }
      const goal = document.getElementById('session-goal');
      if (goal) {
        try {
          const saved = localStorage.getItem('katsuyo-session-goal');
          if (saved !== null) goal.value = saved;
        } catch (e) {}
        goal.addEventListener('change', function () {
          try { localStorage.setItem('katsuyo-session-goal', this.value); } catch (e) {}
        });
      }
    }
    
    // Back to top button
    // Guarded: this runs at the top level of app.js, so on a page without the
    // button it used to throw and take every line of app.js after it with it —
    // which is a whole page of dead features because of one missing <button>.
    (function() {
      var backToTop = document.getElementById('back-to-top');
      if (!backToTop) return;

      window.addEventListener('scroll', function() {
        if (window.scrollY > 400) {
          backToTop.classList.add('visible');
        } else {
          backToTop.classList.remove('visible');
        }
      });

      backToTop.addEventListener('click', function() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    })();
    

        // Populate Kana Grids
    function populateKanaGrids() {
      const kanaData = {
        basic: [
          { romaji: 'a', hiragana: 'あ', katakana: 'ア' },
          { romaji: 'i', hiragana: 'い', katakana: 'イ' },
          { romaji: 'u', hiragana: 'う', katakana: 'ウ' },
          { romaji: 'e', hiragana: 'え', katakana: 'エ' },
          { romaji: 'o', hiragana: 'お', katakana: 'オ' },
          { romaji: 'ka', hiragana: 'か', katakana: 'カ' },
          { romaji: 'ki', hiragana: 'き', katakana: 'キ' },
          { romaji: 'ku', hiragana: 'く', katakana: 'ク' },
          { romaji: 'ke', hiragana: 'け', katakana: 'ケ' },
          { romaji: 'ko', hiragana: 'こ', katakana: 'コ' },
          { romaji: 'sa', hiragana: 'さ', katakana: 'サ' },
          { romaji: 'shi', hiragana: 'し', katakana: 'シ' },
          { romaji: 'su', hiragana: 'す', katakana: 'ス' },
          { romaji: 'se', hiragana: 'せ', katakana: 'セ' },
          { romaji: 'so', hiragana: 'そ', katakana: 'ソ' },
          { romaji: 'ta', hiragana: 'た', katakana: 'タ' },
          { romaji: 'chi', hiragana: 'ち', katakana: 'チ' },
          { romaji: 'tsu', hiragana: 'つ', katakana: 'ツ' },
          { romaji: 'te', hiragana: 'て', katakana: 'テ' },
          { romaji: 'to', hiragana: 'と', katakana: 'ト' },
          { romaji: 'na', hiragana: 'な', katakana: 'ナ' },
          { romaji: 'ni', hiragana: 'に', katakana: 'ニ' },
          { romaji: 'nu', hiragana: 'ぬ', katakana: 'ヌ' },
          { romaji: 'ne', hiragana: 'ね', katakana: 'ネ' },
          { romaji: 'no', hiragana: 'の', katakana: 'ノ' },
          { romaji: 'ha', hiragana: 'は', katakana: 'ハ' },
          { romaji: 'hi', hiragana: 'ひ', katakana: 'ヒ' },
          { romaji: 'fu', hiragana: 'ふ', katakana: 'フ' },
          { romaji: 'he', hiragana: 'へ', katakana: 'ヘ' },
          { romaji: 'ho', hiragana: 'ほ', katakana: 'ホ' },
          { romaji: 'ma', hiragana: 'ま', katakana: 'マ' },
          { romaji: 'mi', hiragana: 'み', katakana: 'ミ' },
          { romaji: 'mu', hiragana: 'む', katakana: 'ム' },
          { romaji: 'me', hiragana: 'め', katakana: 'メ' },
          { romaji: 'mo', hiragana: 'も', katakana: 'モ' },
          { romaji: 'ya', hiragana: 'や', katakana: 'ヤ' },
          { romaji: 'yu', hiragana: 'ゆ', katakana: 'ユ' },
          { romaji: 'yo', hiragana: 'よ', katakana: 'ヨ' },
          { romaji: 'ra', hiragana: 'ら', katakana: 'ラ' },
          { romaji: 'ri', hiragana: 'り', katakana: 'リ' },
          { romaji: 'ru', hiragana: 'る', katakana: 'ル' },
          { romaji: 're', hiragana: 'れ', katakana: 'レ' },
          { romaji: 'ro', hiragana: 'ろ', katakana: 'ロ' },
          { romaji: 'wa', hiragana: 'わ', katakana: 'ワ' },
          { romaji: 'wo', hiragana: 'を', katakana: 'ヲ' },
          { romaji: 'n', hiragana: 'ん', katakana: 'ン' }
        ],
        dakuten: [
          { romaji: 'ga', hiragana: 'が', katakana: 'ガ' },
          { romaji: 'gi', hiragana: 'ぎ', katakana: 'ギ' },
          { romaji: 'gu', hiragana: 'ぐ', katakana: 'グ' },
          { romaji: 'ge', hiragana: 'げ', katakana: 'ゲ' },
          { romaji: 'go', hiragana: 'ご', katakana: 'ゴ' },
          { romaji: 'za', hiragana: 'ざ', katakana: 'ザ' },
          { romaji: 'ji', hiragana: 'じ', katakana: 'ジ' },
          { romaji: 'zu', hiragana: 'ず', katakana: 'ズ' },
          { romaji: 'ze', hiragana: 'ぜ', katakana: 'ゼ' },
          { romaji: 'zo', hiragana: 'ぞ', katakana: 'ゾ' },
          { romaji: 'da', hiragana: 'だ', katakana: 'ダ' },
          { romaji: 'ji', hiragana: 'ぢ', katakana: 'ヂ' },
          { romaji: 'zu', hiragana: 'づ', katakana: 'ヅ' },
          { romaji: 'de', hiragana: 'で', katakana: 'デ' },
          { romaji: 'do', hiragana: 'ど', katakana: 'ド' },
          { romaji: 'ba', hiragana: 'ば', katakana: 'バ' },
          { romaji: 'bi', hiragana: 'び', katakana: 'ビ' },
          { romaji: 'bu', hiragana: 'ぶ', katakana: 'ブ' },
          { romaji: 'be', hiragana: 'べ', katakana: 'ベ' },
          { romaji: 'bo', hiragana: 'ぼ', katakana: 'ボ' },
          { romaji: 'pa', hiragana: 'ぱ', katakana: 'パ' },
          { romaji: 'pi', hiragana: 'ぴ', katakana: 'ピ' },
          { romaji: 'pu', hiragana: 'ぷ', katakana: 'プ' },
          { romaji: 'pe', hiragana: 'ぺ', katakana: 'ペ' },
          { romaji: 'po', hiragana: 'ぽ', katakana: 'ポ' }
        ],
        combinations: [
          { romaji: 'kya', hiragana: 'きゃ', katakana: 'キャ' },
          { romaji: 'kyu', hiragana: 'きゅ', katakana: 'キュ' },
          { romaji: 'kyo', hiragana: 'きょ', katakana: 'キョ' },
          { romaji: 'sha', hiragana: 'しゃ', katakana: 'シャ' },
          { romaji: 'shu', hiragana: 'しゅ', katakana: 'シュ' },
          { romaji: 'sho', hiragana: 'しょ', katakana: 'ショ' },
          { romaji: 'cha', hiragana: 'ちゃ', katakana: 'チャ' },
          { romaji: 'chu', hiragana: 'ちゅ', katakana: 'チュ' },
          { romaji: 'cho', hiragana: 'ちょ', katakana: 'チョ' },
          { romaji: 'nya', hiragana: 'にゃ', katakana: 'ニャ' },
          { romaji: 'nyu', hiragana: 'にゅ', katakana: 'ニュ' },
          { romaji: 'nyo', hiragana: 'にょ', katakana: 'ニョ' },
          { romaji: 'hya', hiragana: 'ひゃ', katakana: 'ヒャ' },
          { romaji: 'hyu', hiragana: 'ひゅ', katakana: 'ヒュ' },
          { romaji: 'hyo', hiragana: 'ひょ', katakana: 'ヒョ' },
          { romaji: 'mya', hiragana: 'みゃ', katakana: 'ミャ' },
          { romaji: 'myu', hiragana: 'みゅ', katakana: 'ミュ' },
          { romaji: 'myo', hiragana: 'みょ', katakana: 'ミョ' },
          { romaji: 'rya', hiragana: 'りゃ', katakana: 'リャ' },
          { romaji: 'ryu', hiragana: 'りゅ', katakana: 'リュ' },
          { romaji: 'ryo', hiragana: 'りょ', katakana: 'リョ' },
          { romaji: 'gya', hiragana: 'ぎゃ', katakana: 'ギャ' },
          { romaji: 'gyu', hiragana: 'ぎゅ', katakana: 'ギュ' },
          { romaji: 'gyo', hiragana: 'ぎょ', katakana: 'ギョ' },
          { romaji: 'ja', hiragana: 'じゃ', katakana: 'ジャ' },
          { romaji: 'ju', hiragana: 'じゅ', katakana: 'ジュ' },
          { romaji: 'jo', hiragana: 'じょ', katakana: 'ジョ' },
          { romaji: 'bya', hiragana: 'びゃ', katakana: 'ビャ' },
          { romaji: 'byu', hiragana: 'びゅ', katakana: 'ビュ' },
          { romaji: 'byo', hiragana: 'びょ', katakana: 'ビョ' },
          { romaji: 'pya', hiragana: 'ぴゃ', katakana: 'ピャ' },
          { romaji: 'pyu', hiragana: 'ぴゅ', katakana: 'ピュ' },
          { romaji: 'pyo', hiragana: 'ぴょ', katakana: 'ピョ' }
        ]
      };
      
      // Helper function to create kana cell
      function createKanaCell(kana) {
        return `
          <div class="kana-cell" onclick="playKanaAudio('${kana.hiragana}')" style="cursor: pointer;" title="Click to hear pronunciation">
            <div class="kana-romaji">${kana.romaji}</div>
            <div class="kana-hiragana jp">${kana.hiragana}</div>
            <div class="kana-katakana jp">${kana.katakana}</div>
          </div>
        `;
      }
      
      // Populate basic kana
      const basicGrid = document.getElementById('basic-kana-grid');
      if (basicGrid) {
        basicGrid.innerHTML = kanaData.basic.map(createKanaCell).join('');
      }
      
      // Populate dakuten
      const dakutenGrid = document.getElementById('dakuten-kana-grid');
      if (dakutenGrid) {
        dakutenGrid.innerHTML = kanaData.dakuten.map(createKanaCell).join('');
      }
      
      // Populate combinations
      const comboGrid = document.getElementById('combo-kana-grid');
      if (comboGrid) {
        comboGrid.innerHTML = kanaData.combinations.map(createKanaCell).join('');
      }
      
      // Add click handlers to main kana chart table cells
      document.querySelectorAll('.kana-grid-cell').forEach(function(cell) {
        var hiraganaEl = cell.querySelector('.jp');
        if (hiraganaEl) {
          var kana = hiraganaEl.textContent.trim();
          if (kanaAudioMap[kana]) {
            cell.style.cursor = 'pointer';
            cell.title = 'Click to hear pronunciation';
            cell.addEventListener('click', function() {
              playKanaAudio(kana);
            });
          }
        }
      });
    }
    
    // Initialize kana grids when page loads
    if (document.getElementById('page-kana')) {
      populateKanaGrids();
    }

    // ============ KANJI FLASHCARDS ============
    // Kanji data will be loaded here
    let kanjiDataList = [];
    let filteredKanjiCards = [];
    let currentKanjiIndex = 0;
    let seenKanjiIndices = new Set();
    let kanjiIsFlipped = false;
    let currentKanjiLevel = 'all';

    // Load kanji data from embedded JSON
    // The data is loaded via a separate script tag or fetch
    
    function initKanji() {
      if (kanjiDataList.length === 0) {
        console.log('Kanji data not loaded yet');
        return;
      }
      filterKanjiLevel('all');

      // Voices arrive after the first render — browser ones late in Chrome,
      // Azure's as a fetch — so redraw the card once we know if it can speak.
      if (window.KA_Listen) {
        window.KA_Listen.wirePanel({
          caret: 'kanji-audio-caret',
          panel: 'kanji-audio-panel',
          select: 'kanji-voice-select',
          preview: 'kanji-voice-preview'
        });
        // The main half speaks the card's readings; the caret opens the voice
        // panel. It used to open the panel from both halves, on the reasoning
        // that a bare kanji has no single pronunciation — true, but it left a
        // speaker icon that made no sound, which is worse than choosing.
        // Reading the readings aloud is the honest answer to "how does this
        // sound": 日 is ニチ、ジツ、ひ, and hearing all three is the point.
        var open = document.getElementById('kanji-audio-open');
        var caret = document.getElementById('kanji-audio-caret');
        if (open) open.addEventListener('click', function (e) {
          e.stopPropagation();
          var card = currentKanjiCard();
          var text = card ? kanjiReadingSpeech(card) : '';
          if (text) window.KA_Listen.speak(text, open);
        });

        // settled: the voice list has come back, so we can finally say whether
        // there is a choice to offer. Before that the control stays hidden
        // rather than appearing and then vanishing.
        var redraw = function (settled) {
          var split = document.getElementById('kanji-audio-split');
          if (split && settled) {
            // Show it whenever anything can speak. It used to also require a
            // voice worth choosing between, which made sense when both halves
            // only opened the picker — now the main half speaks, so a browser
            // voice alone is reason enough to offer it.
            split.style.display = window.KA_Listen.available() ? '' : 'none';
          }
          if (kanjiIsFlipped) return;   // redrawing would flip it back
          var had = !!document.querySelector('#kanji-vocab-list .ka-listen');
          if (had !== window.KA_Listen.available()) showKanjiCard();
        };
        if (window.KA_Speech) window.KA_Speech.onReady(function () { redraw(false); });
        if (window.KA_Azure) {
          window.KA_Azure.listVoices()
            .then(function () { redraw(true); })
            .catch(function () { redraw(true); });
        }
      }
    }
    
    function filterKanjiLevel(level) {
      currentKanjiLevel = level;
      
      // Update filter button states
      document.querySelectorAll('.kanji-filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase().includes(level) || 
            (level === 'all' && btn.textContent.includes('All'))) {
          btn.classList.add('active');
        }
      });
      
      // Filter cards based on level
      if (level === 'all') {
        filteredKanjiCards = [...kanjiDataList];
      } else if (level === 'beginner') {
        filteredKanjiCards = kanjiDataList.filter(k => k.id >= 1 && k.id <= 500);
      } else if (level === 'intermediate') {
        filteredKanjiCards = kanjiDataList.filter(k => k.id >= 501 && k.id <= 1200);
      } else if (level === 'advanced') {
        filteredKanjiCards = kanjiDataList.filter(k => k.id >= 1201 && k.id <= 2300);
      }
      
      currentKanjiIndex = 0;
      seenKanjiIndices.clear();
      kanjiIsFlipped = false;
      
      // Update total cards display
      const totalEl = document.getElementById('kanji-total-cards');
      if (totalEl) totalEl.textContent = filteredKanjiCards.length;
      
      showKanjiCard();
    }
    
    function currentKanjiCard() {
      return filteredKanjiCards.length ? filteredKanjiCards[currentKanjiIndex] : null;
    }

    // The readings, cleaned up enough to be spoken. The data carries dictionary
    // notation the voice would read literally: "-び" marks a reading that takes
    // a prefix, and "ひと.つ" separates the kanji's own reading from its
    // okurigana. Strip the markers, keep the sound.
    function kanjiReadingSpeech(card) {
      if (!card) return '';
      var parts = [];
      (card.onyomi || []).forEach(function (o) {
        var s = String(o).replace(/-/g, '').trim();
        if (s) parts.push(s);
      });
      String(card.kunyomi || '').split(/[・,、]/).forEach(function (k) {
        var s = String(k).replace(/-/g, '').replace(/\./g, '').trim();
        if (s) parts.push(s);
      });
      var seen = {}, out = [];
      parts.forEach(function (p) { if (!seen[p]) { seen[p] = 1; out.push(p); } });
      // Four is plenty. 生 has a dozen readings, and reciting them all is a
      // lecture, not an answer.
      return out.slice(0, 4).join('、');
    }

    function showKanjiCard() {
      if (filteredKanjiCards.length === 0) return;
      if (window.KA_Listen) window.KA_Listen.stop();   // never talk over the next card

      const card = filteredKanjiCards[currentKanjiIndex];
      
      // Unflip the card
      const flashcard = document.getElementById('kanji-flashcard');
      if (flashcard) {
        flashcard.classList.remove('flipped');
        kanjiIsFlipped = false;
      }
      
      // Update front
      document.getElementById('kanji-klc-id').textContent = '#' + card.id;
      document.getElementById('kanji-character').textContent = card.kanji;
      
      // Update back
      document.getElementById('kanji-keyword').textContent = card.keyword;
      document.getElementById('kanji-onyomi').textContent = card.onyomi ? card.onyomi.join(', ') : '—';
      document.getElementById('kanji-kunyomi').textContent = card.kunyomi || '—';
      
      // Update vocabulary
      const vocabList = document.getElementById('kanji-vocab-list');
      if (vocabList && card.vocabulary && card.vocabulary.length > 0) {
        // A bare kanji has no single pronunciation — 日 is にち, じつ, ひ and か.
        // The example words do, so the speaker goes on each of those.
        const canHear = !!(window.KA_Listen && window.KA_Listen.available());
        vocabList.innerHTML = card.vocabulary.slice(0, 4).map((v, i) => `
          <div class="kanji-vocab-item">
            ${canHear ? `<button type="button" class="ka-listen on-dark is-mini" data-say="${i}" aria-label="Listen">🔊</button> ` : ''}
            <span class="kanji-vocab-word jp">${v.word}</span>
            <span class="kanji-vocab-meaning"> — ${v.meaning}</span>
          </div>
        `).join('');
        if (canHear) {
          vocabList.querySelectorAll('.ka-listen').forEach(function (b) {
            const v = card.vocabulary[Number(b.getAttribute('data-say'))];
            window.KA_Listen.attach(b, function () { return v ? v.word : ''; });
          });
        }
      } else if (vocabList) {
        vocabList.innerHTML = '<div class="kanji-vocab-item" style="text-align: center; color: #8892b0;">No vocabulary examples</div>';
      }
      
      // Track seen cards
      seenKanjiIndices.add(card.id);
      
      updateKanjiProgress();
    }
    
    function flipKanjiCard() {
      const flashcard = document.getElementById('kanji-flashcard');
      if (flashcard) {
        flashcard.classList.toggle('flipped');
        kanjiIsFlipped = !kanjiIsFlipped;
      }
    }
    
    function nextKanjiCard() {
      if (currentKanjiIndex < filteredKanjiCards.length - 1) {
        currentKanjiIndex++;
        showKanjiCard();
      }
    }
    
    function prevKanjiCard() {
      if (currentKanjiIndex > 0) {
        currentKanjiIndex--;
        showKanjiCard();
      }
    }
    
    function shuffleKanjiCards() {
      // Fisher-Yates shuffle
      for (let i = filteredKanjiCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [filteredKanjiCards[i], filteredKanjiCards[j]] = [filteredKanjiCards[j], filteredKanjiCards[i]];
      }
      currentKanjiIndex = 0;
      showKanjiCard();
      
      // Show toast notification
      showToast('Cards shuffled!', 'success');
    }
    
    function updateKanjiProgress() {
      const progressEl = document.getElementById('kanji-progress');
      const prevBtn = document.getElementById('kanji-prev-btn');
      const nextBtn = document.getElementById('kanji-next-btn');
      const studiedEl = document.getElementById('kanji-cards-studied');
      
      if (progressEl) progressEl.textContent = (currentKanjiIndex + 1) + ' / ' + filteredKanjiCards.length;
      if (prevBtn) prevBtn.disabled = currentKanjiIndex === 0;
      if (nextBtn) nextBtn.disabled = currentKanjiIndex === filteredKanjiCards.length - 1;
      if (studiedEl) studiedEl.textContent = seenKanjiIndices.size;
    }
    
    function showKanjiGotoModal() {
      const modal = document.getElementById('kanji-goto-modal');
      const input = document.getElementById('kanji-goto-input');
      if (modal) {
        modal.classList.add('active');
        if (input) {
          input.value = '';
          input.focus();
        }
      }
    }
    
    function hideKanjiGotoModal() {
      const modal = document.getElementById('kanji-goto-modal');
      if (modal) modal.classList.remove('active');
    }
    
    function gotoKanjiCard() {
      const input = document.getElementById('kanji-goto-input');
      if (!input) return;
      
      const targetId = parseInt(input.value);
      if (isNaN(targetId) || targetId < 1 || targetId > 2300) {
        showToast('Please enter a number between 1 and 2300', 'warning');
        return;
      }
      
      // Find the card in the current filtered list
      const idx = filteredKanjiCards.findIndex(k => k.id === targetId);
      if (idx === -1) {
        showToast('Kanji #' + targetId + ' is not in the current filter. Try "All" filter.', 'warning');
        return;
      }
      
      currentKanjiIndex = idx;
      hideKanjiGotoModal();
      showKanjiCard();
      showToast('Jumped to KLC #' + targetId, 'success');
    }
    
    // Keyboard shortcuts for kanji page
    document.addEventListener('keydown', function(e) {
      // Only handle if kanji page is active
      const kanjiPage = document.getElementById('page-kanji');
      if (!kanjiPage || kanjiPage.style.display === 'none') return;
      
      // Check if modal is open
      const modal = document.getElementById('kanji-goto-modal');
      if (modal && modal.classList.contains('active')) {
        if (e.key === 'Enter') {
          gotoKanjiCard();
        } else if (e.key === 'Escape') {
          hideKanjiGotoModal();
        }
        return;
      }
      
      if (e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault();
        flipKanjiCard();
      } else if (e.key === 'ArrowRight') {
        nextKanjiCard();
      } else if (e.key === 'ArrowLeft') {
        prevKanjiCard();
      } else if (e.key === 's' || e.key === 'S') {
        shuffleKanjiCards();
      } else if (e.key === 'g' || e.key === 'G') {
        showKanjiGotoModal();
      }
    });
    
    // Close modal on outside click
    document.getElementById('kanji-goto-modal')?.addEventListener('click', function(e) {
      if (e.target === this) {
        hideKanjiGotoModal();
      }
    });


    // ========================================================================
    // VOCABULARY QUIZ
    // ------------------------------------------------------------------------
    // The flashcard page shows you both sides and asks you to be honest with
    // yourself. This makes you produce the answer, which is the part that
    // actually tests anything, and it writes what happened to KA_Memory so the
    // rest of the site knows about it.
    //
    // Three shapes, three different abilities, three separate memory entries:
    //
    //   meaning   日曜日 (にちようび)  -> "Sunday"          recognition, JP -> EN
    //   reading   日曜日              -> にちようび         can you read the kanji
    //   produce   "Sunday"            -> にちようび         recall, EN -> JP
    //
    // A card with no kanji has nothing to read, so it only gets two.
    // ========================================================================
    var VQ_PREFS_KEY = 'ka_vq_prefs';
    var VQ_SKILLS = ['meaning', 'reading', 'produce'];

    // Everything is in play by default. Due and weak come up MORE often through
    // the weighting in vqPick, which is the right way to prioritise them — an
    // earlier version gated the pool on them instead, so a profile with one
    // weak card served that card and nothing else, forever.
    var vqScopes  = { due: true, weak: true, learning: true, fresh: true };
    var vqTopics  = {};             // empty object = every topic
    var vqLevel   = '';             // '' = every level
    // Which directions to ask. All three unless you turn one off.
    var vqSkillsOn = { meaning: true, reading: true, produce: true };
    var vqQuestion = null;
    var vqKana = null;
    var vqAnswered = false;
    // 'kana' | 'katakana' | 'off'. Set per question from the shape of the
    // expected answer — 94 cards answer in katakana — and overridable by the
    // あ / ア / A key for anyone using their own IME.
    var vqKanaMode = 'kana';
    var vqKanaModeForced = null;   // what the learner last chose, if anything
    var vqRecent = [];              // ids served lately, so nothing repeats immediately
    var vqSession = { asked: 0, right: 0, streak: 0, best: 0, cleared: 0 };

    // A card's identity has to survive the deck being reordered or added to,
    // so it is the word itself rather than its index.
    function vqCardId(card) {
      return (card.japanese || '') + '/' + (card.kanji || '');
    }
    function vqId(card, skill) { return 'vocab:' + vqCardId(card) + '|' + skill; }

    function vqSkillsFor(card) {
      // A card with no kanji has nothing to read, so it only gets two.
      var list = card.kanji ? VQ_SKILLS : ['meaning', 'produce'];
      var on = list.filter(function (k) { return vqSkillsOn[k]; });
      // Never leave nothing to ask — an all-off row falls back to the full set.
      return on.length ? on : list;
    }

    function vqCardIn(card) {
      if (!vqTopicOn(card.topic)) return false;
      if (vqLevel && (card.level || 'none') !== vqLevel) return false;
      return true;
    }

    function vqDeck() {
      return (typeof vocabDataList !== 'undefined') ? vocabDataList : [];
    }

    function vqTopicList() {
      var seen = {};
      vqDeck().forEach(function (c) { if (c.topic) seen[c.topic] = (seen[c.topic] || 0) + 1; });
      return seen;
    }

    function vqTopicOn(topic) {
      var any = Object.keys(vqTopics).some(function (k) { return vqTopics[k]; });
      return !any || !!vqTopics[topic];
    }

    // ---- preferences ------------------------------------------------------
    function vqSavePrefs() {
      try {
        localStorage.setItem(VQ_PREFS_KEY, JSON.stringify({
          scopes: vqScopes, topics: vqTopics, level: vqLevel, skills: vqSkillsOn }));
      } catch (e) {}
    }
    function vqLoadPrefs() {
      try {
        var raw = JSON.parse(localStorage.getItem(VQ_PREFS_KEY) || 'null');
        if (raw && raw.scopes) vqScopes = raw.scopes;
        if (raw && raw.topics) vqTopics = raw.topics;
        if (raw && typeof raw.level === 'string') vqLevel = raw.level;
        if (raw && raw.skills) vqSkillsOn = raw.skills;
      } catch (e) {}
    }

    // ---- what is eligible right now ---------------------------------------
    // Returns [{card, skill, id, state, due}] for everything the current scope
    // allows. Deliberately rebuilt per question: answering changes the pool.
    function vqPool() {
      var out = [];
      var wantFresh = vqScopes.fresh;
      vqDeck().forEach(function (card) {
        if (!vqCardIn(card)) return;
        vqSkillsFor(card).forEach(function (skill) {
          var id = vqId(card, skill);
          var st = KA_Memory.state(id);
          var due = KA_Memory.isDue(id);
          var ok = (vqScopes.due && due) ||
                   (vqScopes.weak && st === 'weak') ||
                   (vqScopes.learning && st === 'learning') ||
                   (wantFresh && st === 'new');
          if (ok) out.push({ card: card, skill: skill, id: id, state: st, due: due });
        });
      });
      return out;
    }

    // Everything, ignoring scope — the fallback when a scope is empty, which
    // it always is on a first visit.
    function vqPoolAll() {
      var out = [];
      vqDeck().forEach(function (card) {
        if (!vqCardIn(card)) return;
        vqSkillsFor(card).forEach(function (skill) {
          var id = vqId(card, skill);
          out.push({ card: card, skill: skill, id: id,
                     state: KA_Memory.state(id), due: KA_Memory.isDue(id) });
        });
      });
      return out;
    }

    function vqCounts() {
      var c = { due: 0, weak: 0, learning: 0, fresh: 0, total: 0 };
      vqPoolAll().forEach(function (q) {
        c.total++;
        if (q.due) c.due++;
        if (q.state === 'weak') c.weak++;
        else if (q.state === 'learning') c.learning++;
        else if (q.state === 'new') c.fresh++;
      });
      return c;
    }

    // ---- choosing the next question ---------------------------------------
    function vqPick() {
      var pool = vqPool();
      var usedFallback = false;
      if (!pool.length) { pool = vqPoolAll(); usedFallback = true; }
      if (!pool.length) return null;

      // Never serve the same word twice running, under any skill. If the scope
      // is so narrow that everything in it was just asked, top up from the full
      // deck rather than repeating — a quiz that shows one card forever is
      // broken whatever the filters say.
      var notJustAsked = function (q) {
        return vqRecent.indexOf(q.id) === -1 && vqRecent.indexOf(vqCardId(q.card)) === -1;
      };
      var fresh = pool.filter(notJustAsked);
      if (!fresh.length) {
        fresh = vqPoolAll().filter(notJustAsked);
        usedFallback = true;
      }
      if (fresh.length) pool = fresh;

      // Weight: due beats weak beats everything else. Sampling rather than
      // sorting, so a session doesn't march through the same order every time.
      var weighted = [];
      pool.forEach(function (q) {
        var w = q.due ? 5 : q.state === 'weak' ? 4 : q.state === 'learning' ? 2 : 1;
        for (var i = 0; i < w; i++) weighted.push(q);
      });
      var chosen = weighted[Math.floor(Math.random() * weighted.length)];
      chosen.fallback = usedFallback;
      return chosen;
    }

    // ---- building the question --------------------------------------------
    // The accepted answers for the English direction. A gloss like
    // "Chin / Jaw" should take either, and "Father (one's own)" should take
    // "father" too — the parenthetical is there to tell two cards apart on
    // screen, not to be typed out.
    // A card carries one English gloss, but most words have several correct
    // translations — 飲み物 is a drink AND a beverage, and marking "beverage"
    // wrong teaches nothing except that the quiz is arbitrary. Rather than
    // editing 941 glosses, equivalent words are grouped once here and any
    // member of a group is accepted for any other.
    var VQ_EN_SYNONYMS = [
      ['drink', 'beverage'], ['car', 'automobile', 'auto'], ['bicycle', 'bike'],
      ['photo', 'photograph', 'picture'], ['movie', 'film'], ['shop', 'store'],
      ['doctor', 'physician'], ['restroom', 'toilet', 'bathroom', 'washroom', 'lavatory'],
      ['trousers', 'pants'], ['sneakers', 'trainers'], ['jumper', 'sweater', 'pullover'],
      ['spectacles', 'glasses', 'eyeglasses'], ['purse', 'wallet'], ['sofa', 'couch'],
      ['pot', 'pan', 'saucepan'], ['plate', 'dish'], ['cupboard', 'closet', 'wardrobe'],
      ['refrigerator', 'fridge'], ['television', 'tv'], ['telephone', 'phone'],
      ['mobile phone', 'cellphone', 'cell phone', 'mobile'],
      ['underground', 'subway', 'metro'], ['aeroplane', 'airplane', 'plane'],
      ['boat', 'ship'], ['taxi', 'cab'], ['ticket', 'fare ticket'],
      ['autumn', 'fall'], ['soccer', 'football'], ['post', 'mail'],
      ['postcard', 'post card'], ['newspaper', 'paper'], ['notebook', 'note book'],
      ['rubber', 'eraser'], ['university', 'college'], ['pupil', 'student'],
      ['teacher', 'instructor'], ['company', 'firm'], ['salary', 'wage', 'pay'],
      ['shopping', 'errands'], ['journey', 'trip', 'travel'], ['holiday', 'vacation'],
      ['garbage', 'rubbish', 'trash'], ['flat', 'apartment'], ['lift', 'elevator'],
      ['tap', 'faucet'], ['biscuit', 'cookie'], ['sweets', 'candy', 'confectionery'],
      ['prawn', 'shrimp'], ['maize', 'corn'], ['aubergine', 'eggplant'],
      ['courgette', 'zucchini'], ['coriander', 'cilantro'], ['jam', 'preserve'],
      ['cooker', 'stove'], ['hob', 'stovetop'], ['torch', 'flashlight'],
      ['lorry', 'truck'], ['motorbike', 'motorcycle'], ['pavement', 'sidewalk'],
      ['queue', 'line'], ['timetable', 'schedule'], ['nappy', 'diaper'],
      ['grey', 'gray'], ['colour', 'color'], ['centre', 'center'],
      ['favourite', 'favorite'], ['neighbour', 'neighbor'], ['practise', 'practice'],
      ['grandfather', 'grandpa'], ['grandmother', 'grandma'],
      ['father', 'dad'], ['mother', 'mum', 'mom'],
      ['stomach', 'belly', 'tummy'], ['illness', 'sickness', 'disease'],
      ['delicious', 'tasty'], ['pretty', 'beautiful'], ['big', 'large'],
      ['small', 'little'], ['quick', 'fast'], ['happy', 'glad'],
      ['tired', 'sleepy'], ['difficult', 'hard'], ['easy', 'simple'],
      ['cheap', 'inexpensive'], ['expensive', 'costly'], ['clever', 'smart'],
      ['noon', 'midday'], ['evening', 'night'], ['weekday', 'working day'],
      ['work', 'job'], ['meeting', 'conference'], ['answer', 'reply', 'response'],
      ['question', 'query'], ['reason', 'cause'], ['method', 'way'],
      ['seaweed', 'nori'], ['rice ball', 'onigiri'], ['boxed lunch', 'bento'],
      ['soy sauce', 'soya sauce'], ['green onion', 'spring onion', 'scallion'],
      ['bell pepper', 'green pepper', 'capsicum'], ['mandarin orange', 'mandarin', 'tangerine'],
      ['watermelon', 'water melon'], ['squid', 'cuttlefish'],
      ['stairs', 'staircase', 'steps'], ['road', 'street'], ['town', 'city'],
      ['forest', 'woods'], ['sea', 'ocean'],
      ['weather forecast', 'forecast'], ['typhoon', 'hurricane'],
      ['thunder', 'lightning'], ['air temperature', 'temperature']
    ];

    // A group is only safe when the deck does not already hold two of its words
    // as separate cards. ['soccer','football'] is a fine equivalence in general
    // and a bug here, because サッカー and フットボール are both in the deck —
    // accepting either for either would mark a genuinely wrong answer right.
    // Worked out from the deck rather than curated by hand, so it stays correct
    // as words are added.
    var VQ_SYN_INDEX = null;

    function vqBuildSynonyms() {
      var deck = (typeof vocabDataList !== 'undefined') ? vocabDataList : [];
      // Which words are some card's own stated gloss.
      var claimed = {};
      deck.forEach(function (c) {
        String(c.english || '').split('/').forEach(function (part) {
          // The FULL gloss, parenthetical included. "Father (one's own)" and
          // "Father (someone else's)" are two cards but one English word, so
          // neither of them claims plain "father" — otherwise the father/dad
          // group would be dropped for a clash that isn't one.
          var k = dojoNormalizeEnglish(part);
          if (!k) return;
          (claimed[k] = claimed[k] || []).push(c.japanese);
        });
      });
      var idx = {};
      var dropped = [];
      VQ_EN_SYNONYMS.forEach(function (group) {
        var owners = {};
        group.forEach(function (w) {
          (claimed[w] || []).forEach(function (jp) { owners[jp] = 1; });
        });
        if (Object.keys(owners).length > 1) { dropped.push(group.join('/')); return; }
        group.forEach(function (w) {
          idx[w] = (idx[w] || []).concat(group.filter(function (x) { return x !== w; }));
        });
      });
      VQ_SYN_INDEX = idx;
      VQ_SYN_INDEX.__dropped = dropped;
      return idx;
    }

    function vqSynonymsFor(word) {
      if (!VQ_SYN_INDEX) vqBuildSynonyms();
      return VQ_SYN_INDEX[word] || [];
    }

    function vqEnglishAnswers(gloss) {
      var set = [];
      var push = function (v) { if (v && set.indexOf(v) === -1) set.push(v); };
      String(gloss || '').split('/').forEach(function (part) {
        var p = part.trim();
        if (!p) return;
        push(p);
        // "Father (one's own)" should also take plain "father": the
        // parenthetical is there to tell two cards apart on screen, not to type.
        var bare = p.replace(/\s*\([^)]*\)\s*/g, ' ').replace(/\s+/g, ' ').trim();
        push(bare);
      });
      // ...and anything that means the same thing. The table is singular, so a
      // plural gloss ("Colours") is looked up in the singular and the matching
      // synonyms are pluralised back.
      set.slice().forEach(function (v) {
        var k = dojoNormalizeEnglish(v);
        vqSynonymsFor(k).forEach(push);
        if (/s$/.test(k)) {
          vqSynonymsFor(k.replace(/s$/, '')).forEach(function (w) {
            push(w); push(w + 's');
          });
        }
      });
      return set;
    }

    function vqBuild(pick) {
      var c = pick.card;
      var written = c.kanji || c.katakana || c.japanese;
      var q = { card: c, skill: pick.skill, id: pick.id, state: pick.state,
                due: pick.due, fallback: !!pick.fallback, topic: c.topic };

      if (pick.skill === 'meaning') {
        q.promptMain = written;
        q.promptSub  = (written !== c.japanese) ? c.japanese : '';
        q.ask        = ct('vq_ask_meaning', 'Type the meaning in English');
        q.answerLang = 'en';
        q.answers    = vqEnglishAnswers(c.english);
        q.shown      = c.english;
        q.speak      = c.japanese;
      } else if (pick.skill === 'reading') {
        q.promptMain = written;
        q.promptSub  = '';
        q.ask        = ct('vq_ask_reading', 'Type the reading in Japanese');
        q.answerLang = 'jp';
        q.answers    = [c.japanese];
        q.shown      = c.japanese;
        q.speak      = c.japanese;
      } else {
        q.promptMain = c.english;
        q.promptSub  = '';
        q.ask        = ct('vq_ask_produce', 'Say it in Japanese — kana');
        q.answerLang = 'jp';
        q.answers    = [c.japanese];
        if (c.kanji) q.answers.push(c.kanji);
        q.shown      = c.japanese + (c.kanji ? '  ' + c.kanji : '');
        q.speak      = c.japanese;
      }
      return q;
    }

    var VQ_KATAKANA_ONLY = /^[\u30a1-\u30f6ー]+$/;

    // A katakana answer wants a katakana keyboard. Anything the learner has
    // explicitly chosen wins, because they may be running their own IME.
    function vqModeFor(q) {
      if (vqKanaModeForced) return vqKanaModeForced;
      if (q.answerLang !== 'jp') return 'kana';
      return VQ_KATAKANA_ONLY.test(q.answers[0] || '') ? 'katakana' : 'kana';
    }

    function vqNext() {
      var pick = vqPick();
      if (!pick) { vqRenderEmpty(); return; }
      vqQuestion = vqBuild(pick);
      vqKanaMode = vqModeFor(vqQuestion);
      vqAnswered = false;
      vqRecent.unshift(pick.id);
      vqRecent.unshift(vqCardId(pick.card));
      if (vqRecent.length > 14) vqRecent.length = 14;
      vqRender();
    }

    // ---- checking ---------------------------------------------------------
    function vqCheck() {
      if (!vqQuestion || vqAnswered) return;
      if (vqKana) vqKana.flush();
      var input = document.getElementById('vq-input');
      var given = (input.value || '').trim();
      if (!given) return;

      var lang = vqQuestion.answerLang;
      var right = vqQuestion.answers.some(function (a) {
        return dojoSameReading(given, a, lang);
      });

      vqAnswered = true;
      vqSession.asked++;
      KA_Memory.tick();
      var before = KA_Memory.state(vqQuestion.id);
      if (right) {
        vqSession.right++;
        vqSession.streak++;
        if (vqSession.streak > vqSession.best) vqSession.best = vqSession.streak;
      } else {
        vqSession.streak = 0;
      }
      var after = KA_Memory.record(vqQuestion.id, right);
      if (right && after === 'known' && before !== 'known') vqSession.cleared++;
      vqRenderVerdict(right, before, after, given);
    }

    // Show me. Deliberately counted as a miss: you did not know it, and a
    // reveal that costs nothing would let the scheduler be talked out of ever
    // asking again, which is the one thing it is for. Skip stays neutral, so
    // there is still a way to pass on a card without being marked for it.
    function vqReveal() {
      if (!vqQuestion || vqAnswered) return;
      vqAnswered = true;
      vqSession.asked++;
      vqSession.streak = 0;
      KA_Memory.tick();
      var before = KA_Memory.state(vqQuestion.id);
      var after = KA_Memory.record(vqQuestion.id, false);
      vqRenderVerdict(false, before, after, '', true);
    }

    // How long until this comes back, in words rather than a date.
    function vqWhenBack(id) {
      var e = KA_Memory.get(id);
      if (!e) return '';
      if (KA_Memory.state(id) === 'known') return ct('vq_retired', 'retired — you know this one');
      if (KA_Memory.clockFor(id) === 'days') {
        var days = e.d - Math.floor(Date.now() / 86400000);
        if (days <= 0) return ct('vq_again_now', 'again this session');
        if (days === 1) return ct('vq_again_tomorrow', 'back tomorrow');
        return ct('vq_again_days', 'back in {n} days').replace('{n}', days);
      }
      return ct('vq_again_soon', 'back shortly');
    }

    // ---- rendering --------------------------------------------------------
    var VQ_SKILL_LABEL = {
      meaning: { i18n: 'vq_skill_meaning', jp: '意味', en: 'meaning' },
      reading: { i18n: 'vq_skill_reading', jp: '読み', en: 'reading' },
      produce: { i18n: 'vq_skill_produce', jp: '日本語で', en: 'produce it' }
    };
    var VQ_STATE_LABEL = {
      new:      { i18n: 'vq_state_new',      en: 'new' },
      learning: { i18n: 'vq_state_learning', en: 'learning' },
      weak:     { i18n: 'vq_state_weak',     en: 'weak' },
      known:    { i18n: 'vq_state_known',    en: 'known' }
    };

    function vqEl(id) { return document.getElementById(id); }

    function vqRenderEmpty() {
      vqQuestion = null;
      var main = vqEl('vq-prompt-main');
      if (!main) return;
      main.textContent = 'やった！';
      vqEl('vq-prompt-sub').textContent = '';
      vqEl('vq-ask').textContent = ct('vq_all_done',
        'Nothing is due. Widen the scope above, or come back tomorrow.');
      vqEl('vq-input-row').style.display = 'none';
      vqEl('vq-btn-row').style.display = 'none';
      vqEl('vq-feedback').style.display = 'none';
    }

    function vqRender() {
      var q = vqQuestion;
      if (!q) return;
      var main = vqEl('vq-prompt-main');
      if (!main) return;

      // The Japanese side gets the serif face; an English prompt must not.
      var jpSide = (q.skill !== 'produce');
      main.className = 'vq-prompt-main' + (jpSide ? ' jp' : ' en');
      main.innerHTML = jpSide ? parseKanjiText(dojoEscape(q.promptMain)) : dojoEscape(q.promptMain);
      var sub = vqEl('vq-prompt-sub');
      sub.className = 'vq-prompt-sub jp';
      sub.textContent = q.promptSub || '';
      sub.style.display = q.promptSub ? '' : 'none';
      vqEl('vq-ask').textContent = q.ask;

      var chip = vqEl('vq-skill');
      var lab = VQ_SKILL_LABEL[q.skill];
      chip.innerHTML = '<span class="jp">' + lab.jp + '</span> · ' + ct(lab.i18n, lab.en);

      var st = vqEl('vq-state');
      var sl = VQ_STATE_LABEL[q.state] || VQ_STATE_LABEL.new;
      st.textContent = ct(sl.i18n, sl.en);
      st.className = 'vq-pill vq-' + q.state;
      st.style.display = (q.state === 'new' && !q.due) ? 'none' : '';

      // English answers want a Latin keyboard, so the kana converter steps
      // aside rather than fighting the person typing "Sunday".
      var input = vqEl('vq-input');
      var toKana = (q.answerLang === 'jp');
      input.value = '';
      input.className = 'vq-input' + (toKana ? ' jp' : ' en-mode');
      input.placeholder = toKana ? ct('vq_ph_kana', 'rōmaji converts as you type')
                                 : ct('vq_ph_en', 'in English');
      // Green means type Japanese, blue means type English. The band, the box
      // border and the あ key all say the same thing at once, because inferring
      // it from a grey line of prose was the single most confusing thing here.
      var band = vqEl('vq-lang');
      band.className = 'vq-lang ' + (toKana ? 'jp' : 'en');
      var kata = toKana && vqKanaMode === 'katakana';
      var tag = vqEl('vq-lang-tag');
      tag.className = 'vq-lang-tag' + (toKana ? ' jp' : '');
      tag.textContent = toKana ? (kata ? 'ア' : 'あ') : 'EN';
      if (toKana && q.skill !== 'meaning') {
        // Say which script, because バナナ in hiragana is not wrong here but it
        // is not how the word is written either.
        vqEl('vq-ask').textContent = kata
          ? ct('vq_ask_katakana', 'Answer in katakana')
          : q.ask;
      }
      vqPaintKanaKey();

      vqEl('vq-input-row').style.display = '';
      vqEl('vq-btn-row').style.display = '';
      vqEl('vq-feedback').style.display = 'none';
      vqEl('vq-next-row').style.display = 'none';
      vqEl('vq-check-row').style.display = 'flex';

      var speak = vqEl('vq-speak');
      if (speak) {
        // Never offer to read the answer out before it has been given.
        var canHear = q.skill !== 'produce' && window.KA_Listen && KA_Listen.available();
        speak.style.display = canHear ? '' : 'none';
      }
      vqPaintScopeRow();
      try { input.focus(); } catch (e) {}
    }

    function vqRenderVerdict(right, before, after, given, shown) {
      var q = vqQuestion;
      var box = vqEl('vq-feedback');
      box.style.display = 'block';
      box.className = 'vq-feedback ' + (shown ? 'revealed' : right ? 'correct' : 'incorrect');
      // The title is rewritten wholesale, so the "when" chip is rebuilt with it.
      vqEl('vq-verdict-title').innerHTML =
        (shown ? '👁 ' : right ? '✨ ' : '✗ ') +
        dojoTip(shown ? '答え' : right ? '正解！' : 'ざんねん...') +
        '<span class="vq-when" id="vq-verdict-when"></span>';

      var ansEl = vqEl('vq-verdict-answer');
      ansEl.className = 'vq-verdict-answer' + (q.answerLang === 'en' ? '' : ' jp');
      ansEl.innerHTML = q.answerLang === 'en' ? dojoEscape(q.shown)
                                              : parseKanjiText(dojoEscape(q.shown));

      var yours = vqEl('vq-verdict-yours');
      if (!right && given && !shown) {
        yours.style.display = '';
        yours.innerHTML = ct('vq_you_wrote', 'You wrote') + ' <b>' + dojoEscape(given) + '</b>';
      } else {
        yours.style.display = 'none';
      }

      // The whole point of the two clocks is that they are visible.
      var when = vqEl('vq-verdict-when');
      // Say plainly that a reveal is counted, rather than letting it be a
      // penalty you only discover later.
      when.textContent = (shown ? ct('vq_counts_missed', 'counted as missed') + ' · ' : '') +
                         vqWhenBack(q.id);
      when.className = 'vq-when' + (after === 'known' ? ' cleared' : right ? ' ok' : ' no');

      var gloss = vqEl('vq-verdict-gloss');
      if (gloss) {
        // Fill in the side of the card they were NOT shown and did NOT answer,
        // so each question still teaches the whole word — without repeating
        // what is already on screen two lines above.
        var c = q.card;
        var bits = [];
        if (q.skill === 'meaning') {
          // They saw the written form and gave the English; the reading is
          // the part still missing — but only if it isn't what they were shown.
          if (c.kanji || c.katakana) bits.push('<span class="jp">' + dojoEscape(c.japanese) + '</span>');
        } else if (q.skill === 'reading') {
          // They read it. They may still have no idea what it means.
          bits.push(dojoEscape(c.english));
        }
        // 'produce' already prints the kana and the kanji, and the English was
        // the question itself, so there is nothing left to add.
        gloss.innerHTML = bits.join(' · ');
        gloss.style.display = bits.length ? '' : 'none';
      }

      vqEl('vq-check-row').style.display = 'none';
      vqEl('vq-next-row').style.display = 'flex';
      var ansSpk = vqEl('vq-answer-speak');
      if (ansSpk) ansSpk.style.display = (window.KA_Listen && KA_Listen.available()) ? '' : 'none';
      vqPaintStats();
      vqPaintScopeRow();
      try { vqEl('vq-next-btn').focus(); } catch (e) {}
    }

    var VQ_MODE_FACE = { kana: 'あ', katakana: 'ア', off: 'A' };
    var VQ_MODE_NEXT = { kana: 'katakana', katakana: 'off', off: 'kana' };

    function vqPaintKanaKey() {
      var btn = vqEl('vq-kana-toggle');
      if (!btn) return;
      var jp = vqQuestion && vqQuestion.answerLang === 'jp';
      btn.disabled = !jp;
      btn.textContent = jp ? VQ_MODE_FACE[vqKanaMode] : 'あ';
      btn.classList.toggle('off', !jp || vqKanaMode === 'off');
      btn.classList.toggle('kata', jp && vqKanaMode === 'katakana');
      btn.title = !jp ? ct('vq_kana_off', 'This answer is in English')
        : vqKanaMode === 'katakana' ? ct('vq_mode_katakana', 'Katakana — type juusu for ジュース')
        : vqKanaMode === 'off' ? ct('vq_mode_off', 'Off — use your own Japanese keyboard')
        : ct('vq_mode_kana', 'Hiragana — type youka for ようか');
      btn.setAttribute('aria-pressed', vqKanaMode === 'off' ? 'false' : 'true');
    }

    function vqCycleKanaMode() {
      if (!vqQuestion || vqQuestion.answerLang !== 'jp') return;
      vqKanaMode = VQ_MODE_NEXT[vqKanaMode];
      vqKanaModeForced = vqKanaMode;
      vqPaintKanaKey();
      var input = vqEl('vq-input');
      if (input) try { input.focus(); } catch (e) {}
    }

    function vqSpeakPrompt() {
      if (!vqQuestion || !window.KA_Listen) return;
      KA_Listen.speak(vqQuestion.speak);
    }
    function vqSpeakAnswer() {
      if (!vqQuestion || !window.KA_Listen) return;
      KA_Listen.speak(vqQuestion.card.japanese);
    }

    // ---- scope row --------------------------------------------------------
    var VQ_SCOPE_CHIPS = [
      { key: 'due',      i18n: 'vq_scope_due',      en: '◷ Due now', gold: true },
      { key: 'weak',     i18n: 'vq_scope_weak',     en: 'Weak' },
      { key: 'learning', i18n: 'vq_scope_learning', en: 'Learning' },
      { key: 'fresh',    i18n: 'vq_scope_new',      en: 'New' }
    ];

    function vqBuildScopeChips() {
      var wrap = vqEl('vq-scope-chips');
      if (!wrap) return;
      wrap.innerHTML = '';
      VQ_SCOPE_CHIPS.forEach(function (sc) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'vq-chip' + (sc.gold ? ' gold' : '');
        b.dataset.scope = sc.key;
        b.textContent = ct(sc.i18n, sc.en);
        b.addEventListener('click', function () {
          vqScopes[sc.key] = !vqScopes[sc.key];
          // Turning everything off would leave nothing to ask.
          if (!VQ_SCOPE_CHIPS.some(function (x) { return vqScopes[x.key]; })) vqScopes[sc.key] = true;
          vqSavePrefs(); vqPaintScopeRow(); vqNext();
        });
        wrap.appendChild(b);
      });

      // One dropdown rather than nineteen chips. The wall of chips took up more
      // room than the question did, which is the opposite of what a quiz page
      // should look like.
      var sel = vqEl('vq-topic-select');
      if (sel) {
        sel.innerHTML = '';
        var counts = vqTopicList();
        var total = Object.keys(counts).reduce(function (n, k) { return n + counts[k]; }, 0);
        var all = document.createElement('option');
        all.value = '';
        all.textContent = ct('vq_all_topics', 'All topics') + '  (' + total + ')';
        sel.appendChild(all);
        Object.keys(counts).sort(function (a, b) {
          return vqTopicName(a).localeCompare(vqTopicName(b));
        }).forEach(function (t) {
          var o = document.createElement('option');
          o.value = t;
          o.textContent = ct('vq_topic_' + t, vqTopicName(t)) + '  (' + counts[t] + ')';
          sel.appendChild(o);
        });
        sel.value = Object.keys(vqTopics).filter(function (k) { return vqTopics[k]; })[0] || '';
        sel.addEventListener('change', function () {
          vqTopics = {};
          if (this.value) vqTopics[this.value] = true;
          vqSavePrefs(); vqPaintScopeRow(); vqNext();
        });
      }

      // Level. Unlabelled is an honest option, not a gap: the official JLPT
      // vocabulary lists were discontinued in 2010, so N5 and N4 are safe,
      // N3 is patchy, and anything above it would be invented.
      var lsel = vqEl('vq-level-select');
      if (lsel) {
        lsel.innerHTML = '';
        var lc = vqLevelCounts();
        [['', ct('vq_all_levels', 'All levels'), lc.total],
         ['N5', 'N5', lc.N5], ['N4', 'N4', lc.N4], ['N3', 'N3', lc.N3],
         ['none', ct('vq_no_level', 'Above N3 / unlabelled'), lc.none]].forEach(function (row) {
          if (row[0] && !row[2]) return;
          var o = document.createElement('option');
          o.value = row[0];
          o.textContent = row[1] + '  (' + row[2] + ')';
          lsel.appendChild(o);
        });
        lsel.value = vqLevel;
        lsel.addEventListener('change', function () {
          vqLevel = this.value;
          vqSavePrefs(); vqPaintScopeRow(); vqNext();
        });
      }

      // Ask me — the directions. You could not switch one off before.
      var skw = vqEl('vq-skill-chips');
      if (skw) {
        skw.innerHTML = '';
        [['meaning', ct('vq_skill_meaning', 'Meaning')],
         ['reading', ct('vq_skill_reading', 'Reading')],
         ['produce', ct('vq_skill_produce', 'Say it in Japanese')]].forEach(function (row) {
          var b = document.createElement('button');
          b.type = 'button';
          b.className = 'vq-chip';
          b.dataset.skill = row[0];
          b.textContent = row[1];
          b.addEventListener('click', function () {
            vqSkillsOn[row[0]] = !vqSkillsOn[row[0]];
            // All three off would leave nothing to ask.
            if (!VQ_SKILLS.some(function (k) { return vqSkillsOn[k]; })) vqSkillsOn[row[0]] = true;
            vqSavePrefs(); vqPaintScopeRow(); vqNext();
          });
          skw.appendChild(b);
        });
      }

      // The scope chips fold away, and stay folded unless you opened them.
      var fbtn = vqEl('vq-filter-btn');
      var fpanel = vqEl('vq-filters');
      if (fbtn && fpanel) {
        var open = false;
        try { open = localStorage.getItem('ka_vq_filters_open') === '1'; } catch (e) {}
        var paint = function () {
          fpanel.style.display = open ? '' : 'none';
          fbtn.setAttribute('aria-expanded', open ? 'true' : 'false');
          vqEl('vq-bar').classList.toggle('open', open);
        };
        paint();
        fbtn.addEventListener('click', function () {
          open = !open;
          try { localStorage.setItem('ka_vq_filters_open', open ? '1' : '0'); } catch (e) {}
          paint();
        });
      }
      vqPaintScopeRow();
    }

    function vqLevelCounts() {
      var c = { N5: 0, N4: 0, N3: 0, none: 0, total: 0 };
      vqDeck().forEach(function (card) {
        if (!vqTopicOn(card.topic)) return;
        c.total++;
        c[card.level || 'none'] += 1;
      });
      return c;
    }

    var VQ_TOPIC_NAMES = {
      general: 'General', location: 'Location', food: 'Food & drink', taste: 'Taste',
      time: 'Time', frequency: 'Frequency', degree: 'Degree', clothing: 'Clothing',
      weather: 'Weather', transport: 'Transport', colors: 'Colours', jobs: 'Jobs',
      body: 'Body', home: 'Home', hobbies: 'Hobbies', countries: 'Countries',
      school: 'School', subjects: 'Subjects', family: 'Family'
    };
    function vqTopicName(t) { return VQ_TOPIC_NAMES[t] || t; }

    function vqPaintScopeRow() {
      var wrap = vqEl('vq-scope-chips');
      if (wrap) Array.prototype.forEach.call(wrap.querySelectorAll('.vq-chip'), function (b) {
        b.classList.toggle('on', !!vqScopes[b.dataset.scope]);
      });
      var skw = vqEl('vq-skill-chips');
      if (skw) Array.prototype.forEach.call(skw.querySelectorAll('.vq-chip'), function (b) {
        b.classList.toggle('on', !!vqSkillsOn[b.dataset.skill]);
      });
      var tsel = vqEl('vq-topic-select');
      if (tsel) tsel.value = Object.keys(vqTopics).filter(function (k) { return vqTopics[k]; })[0] || '';
      var lsel = vqEl('vq-level-select');
      if (lsel) {
        // The counts are per-topic, so they go stale the moment the topic
        // changes — "N5 (265)" while Food & drink is selected is a lie.
        var lc = vqLevelCounts();
        Array.prototype.forEach.call(lsel.options, function (o) {
          var n = o.value === '' ? lc.total : lc[o.value] || 0;
          o.textContent = o.textContent.replace(/\s*\(\d+\)\s*$/, '') + '  (' + n + ')';
        });
        lsel.value = vqLevel;
      }

      var main = vqEl('vq-bar-main');
      if (!main) return;

      // The closed line has to show, at a glance, whether anything is narrowing
      // the deck. Not doing that is how a pool of one card looked like a bug in
      // the quiz rather than a filter doing its job.
      var topic = Object.keys(vqTopics).filter(function (k) { return vqTopics[k]; })[0];
      var parts = [ topic ? ct('vq_topic_' + topic, vqTopicName(topic))
                          : ct('vq_all_topics', 'All topics') ];
      parts.push(vqLevel ? (vqLevel === 'none' ? ct('vq_no_level', 'Above N3 / unlabelled') : vqLevel)
                         : ct('vq_all_levels', 'All levels'));
      var skillsOff = VQ_SKILLS.filter(function (k) { return !vqSkillsOn[k]; }).length;
      var scopesOff = ['due', 'weak', 'learning', 'fresh'].filter(function (k) { return !vqScopes[k]; }).length;
      var narrowed = !!topic || !!vqLevel || skillsOff > 0 || scopesOff > 0;
      var inPlay = vqPool().length;

      var html = dojoEscape(parts.join(' \u00b7 '));
      if (narrowed) html += '<span class="flag">' + ct('vq_filtered', 'filtered') + '</span>';
      html += '<span class="muted"> \u00b7 ' + inPlay + ' ' + ct('vq_in_round', 'in play') + '</span>';

      var c = vqCounts();
      var bits = [];
      if (c.due) bits.push(c.due + ' ' + ct('vq_due', 'due'));
      if (c.weak) bits.push(c.weak + ' ' + ct('vq_weak', 'weak'));
      if (bits.length) html += '<span class="muted"> \u00b7 ' + bits.join(' \u00b7 ') + '</span>';
      main.innerHTML = html;
    }

    function vqPaintStats() {
      var el = vqEl('vq-stats');
      if (!el) return;
      var pct = vqSession.asked ? Math.round(vqSession.right / vqSession.asked * 100) : 0;
      el.textContent = vqSession.right + '/' + vqSession.asked +
        (vqSession.asked ? '  ·  ' + pct + '%' : '') +
        (vqSession.streak > 1 ? '  ·  🔥 ' + vqSession.streak : '');
    }

    // ---- init -------------------------------------------------------------
    function initVocabQuiz() {
      vqLoadPrefs();
      vqBuildScopeChips();
      var input = vqEl('vq-input');
      if (input && window.KA_KanaInput) {
        vqKana = KA_KanaInput.attach(input, {
          enabled: function () {
            return vqQuestion && vqQuestion.answerLang === 'jp' && vqKanaMode !== 'off';
          },
          convert: function (text, final) {
            return KA_KanaInput.convert(text, final, vqKanaMode);
          }
        });
      }
      var kanaBtn = vqEl('vq-kana-toggle');
      if (kanaBtn) kanaBtn.addEventListener('click', vqCycleKanaMode);

      // Enter checks, then Enter moves on. The verdict steals focus to the
      // Next button, so this listens on the document rather than the field.
      document.addEventListener('keydown', function (e) {
        if (e.key !== 'Enter' || e.altKey || e.ctrlKey || e.metaKey) return;
        if (!vqEl('vq-input')) return;
        var tag = (e.target && e.target.tagName || '').toLowerCase();
        if (tag === 'textarea') return;
        e.preventDefault();
        if (vqAnswered) vqNext(); else vqCheck();
      });

      if (window.KA_Speech) KA_Speech.onReady(function () { if (vqQuestion) vqRender(); });
      vqNext();
      vqPaintStats();
    }

    // ============ MULTI-PAGE INIT ============
    // These used to run when showPage() switched tabs; now each page
    // initializes itself on load.
    document.addEventListener('DOMContentLoaded', function() {
      if (document.getElementById('page-vocabulary') && typeof initVocab === 'function') {
        initVocab();
      }
      if (document.getElementById('page-kanji') && typeof initKanji === 'function' &&
          typeof kanjiDataList !== 'undefined' && kanjiDataList.length > 0) {
        initKanji();
      }
      if (document.getElementById('page-vocabquiz') && typeof initVocabQuiz === 'function') {
        initVocabQuiz();
      }
      if (document.getElementById('page-datedojo') && typeof generateDojoQuestion === 'function') {
        initDojoExtras();
        generateDojoQuestion();
        populateDojoReference();
      }
    });
