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
    let currentForm = null;
    let currentPrompt = null; // Track which prompt template we're using
    let showAnswer = false;
    let firstAttempt = true;
    let stats = { correct: 0, total: 0, skipped: 0 }; // Fresh session each time
    let hintVisible = false;
    let failureTracking = {}; // Track consecutive failures by form type: { 'godan-negative': 2, ... }
    let isTypeIdentificationQuiz = false; // Are we in verb type ID mode?
    let typeIdentificationAnswer = null; // What type did they guess?
    let recentlyUsedVerbs = []; // Track recently used verbs to avoid repetition
    const MAX_RECENT_VERBS = 12; // Keep last 12 verbs in memory

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

    function resetStats() {
      stats = { correct: 0, total: 0, skipped: 0 };
      mistakeLog = [];
      saveStats();
      updateScoreDisplay();
      updateReportButton();
    }
    
    function updateScoreDisplay() {
      document.getElementById('score-correct').textContent = stats.correct;
      document.getElementById('score-total').textContent = stats.total;
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
      
      // Check if it's all hiragana (basic validation)
      const hiraganaRegex = /^[ぁ-ん]+$/;
      if (!hiraganaRegex.test(user)) {
        return false; // Contains non-hiragana, probably way off
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
      
      // Check for non-hiragana
      const hiraganaRegex = /^[ぁ-ん]+$/;
      if (!hiraganaRegex.test(user)) {
        return "Your answer contains characters that aren't hiragana. Remember, we're conjugating the verb, not translating it. Write your answer in hiragana only.";
      }
      
      // Check if they forgot to conjugate
      if (user === verb.hiragana) {
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
    
    function getRandomVerb() {
      const types = ['godan', 'ichidan', 'irregular', 'suru'];
      const weights = [5, 3, 1, 2]; // irregular gets weight of 1 (rare but possible)
      const weightedTypes = types.flatMap((type, i) => Array(weights[i]).fill(type));
      const type = weightedTypes[Math.floor(Math.random() * weightedTypes.length)];
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
      
      const verb = availableVerbs[Math.floor(Math.random() * availableVerbs.length)];
      
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

  const formNames = {
    negative: 'Negative Form (ない)',
    masu: 'Polite Form (ます)',
    past: 'Past Form (た)',
    tai: 'Want To (たい)',
    potential: 'Potential Form',
    volitional: 'Volitional Form',
    te: 'Te-form (て)',
    masen: 'Polite Negative (ません)',
    mashita: 'Polite Past (ました)',
    nakatta: 'Negative Past (なかった)',
    ba: 'Conditional (ば)',
    tara: 'Conditional (たら)',
    passive: 'Passive Form',
    causative: 'Causative Form',
    'causative-passive': 'Causative-Passive',
    imperative: 'Imperative (Command)'
  };

  return `<strong>${formNames[formKey] || formKey}</strong><br><span style="font-size: 0.9rem; color: var(--text-light);">${exampleList.join(' | ')}</span>`;
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
function generateNewQuestionWithAI() {
  currentVerb = getRandomVerb();
  currentPrompt = currentVerb.template;
  showAnswer = false;
  firstAttempt = true;
  hintVisible = false;
  typeIdentificationAnswer = null;
  
  clearHintCache();
  
  isTypeIdentificationQuiz = Math.random() < 0.25;
  
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
    
    // Generate smart examples (hide matching verb type)
    console.log('🎯 Current verb:', currentVerb.kanji, 'Type:', currentVerb.type);
    const smartExamples = generateSmartExamples(currentVerb.form.key, currentVerb.type);
    
    // Get phrase prompt
    const phraseTemplate = currentVerb.form.templates.find(t => t.type === 'phrase');
    const phraseText = (window.KA_phrase && window.KA_phrase(currentVerb.form.key, currentVerb.meaning))
      || (phraseTemplate ? phraseTemplate.text.replace('{meaning}', currentVerb.meaning.replace('to ', '')) : '');
    
    // Display both examples AND phrase
    promptFormDiv.innerHTML = smartExamples + (phraseText ? '<br><span style="font-size: 1rem; color: var(--accent); margin-top: 0.5rem; display: block;">' + phraseText + '</span>' : '');
  }
  
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
    var examples = generateSmartExamples(currentVerb.form.key, currentVerb.type);
    var tpl = currentVerb.form.templates.find(function (t) { return t.type === 'phrase'; });
    var phrase = (window.KA_phrase && window.KA_phrase(currentVerb.form.key, currentVerb.meaning))
      || (tpl ? tpl.text.replace('{meaning}', currentVerb.meaning.replace('to ', '')) : '');
    promptDiv.innerHTML = examples + (phrase ? '<br><span style="font-size: 1rem; color: var(--accent); margin-top: 0.5rem; display: block;">' + phrase + '</span>' : '');
  }
};

// Wrapper function with standard name
function generateNewQuestion() {
  generateNewQuestionWithAI();
}

    function checkAnswer() {
      const userAnswer = document.getElementById('answer-input').value.trim();
      
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
        
        let promptText = (window.KA_phrase && window.KA_phrase(currentVerb.form.key, currentVerb.meaning))
          || currentPrompt.text.replace('{meaning}', currentVerb.meaning.replace('to ', ''));
        document.getElementById('prompt-form').innerHTML = promptText;
        
        // Reset UI for conjugation
        document.getElementById('answer-input').value = '';
        document.getElementById('answer-input').disabled = false;
        document.getElementById('feedback-result').classList.remove('visible');
        document.getElementById('check-btn').textContent = 'Check Answer';
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
          
          document.getElementById('feedback-explanation').innerHTML = typeExplanation + '<br><br><strong>Click "Continue" when ready to conjugate this verb.</strong>';
          document.getElementById('feedback-explanation').style.display = 'block';
          
          // Disable input and change button to "Continue"
          document.getElementById('answer-input').disabled = true;
          document.getElementById('check-btn').textContent = 'Continue →';
          document.getElementById('check-btn').classList.remove('primary');
          document.getElementById('check-btn').classList.add('continue');
          document.getElementById('check-btn').disabled = false;
          
          // Mark that we're waiting for continuation
          isTypeIdentificationQuiz = false;
          showAnswer = true; // Reuse this flag to indicate we're in "continue" state
        } else {
          // Wrong type identification - this counts as a mistake!
          stats.total++;
          document.getElementById('score-total').textContent = stats.total;
          saveStats(); // Persist to localStorage
          
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
        document.getElementById('feedback-title').textContent = '⚠️ Use Hiragana';
        document.getElementById('feedback-answer').innerHTML = `Please type your answer in <strong>hiragana</strong> (ひらがな), not romaji.`;
        
        const explanation = `<strong>Tip:</strong> If you don't have a Japanese keyboard enabled, you can:<br>
                             • <strong>Windows:</strong> Press Windows + Space to switch keyboards, or install Japanese IME from Settings<br>
                             • <strong>Mac:</strong> Go to System Preferences → Keyboard → Input Sources → Add Japanese<br>
                             • <strong>Mobile:</strong> Add Japanese keyboard in your device settings<br><br>
                             Once enabled, you can type in romaji and it will convert to hiragana automatically!`;
        
        document.getElementById('feedback-explanation').innerHTML = explanation;
        document.getElementById('feedback-explanation').style.display = 'block';
        
        return; // Don't check the answer
      }
      
      const correctAnswer = conjugateVerb(currentVerb, currentVerb.form);
      const isCorrect = userAnswer.toLowerCase() === correctAnswer;
      const failureKey = `${currentVerb.type}-${currentVerb.form.key}`;
      
      if (isCorrect) {
        // Correct answer!
        stats.total++;
        stats.correct++;
        document.getElementById('score-correct').textContent = stats.correct;
        document.getElementById('score-total').textContent = stats.total;
        saveStats(); // Persist to localStorage
        
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
        document.getElementById('feedback-answer').textContent = correctAnswer;
        
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
        // Wrong answer - check if it's in the ballpark
        const inBallpark = isAnswerInBallpark(userAnswer, correctAnswer);
        
        if (inBallpark && firstAttempt) {
          // Close enough - give them another try
          firstAttempt = false;
          document.getElementById('answer-input').value = '';
          document.getElementById('feedback-warning').classList.add('visible');
          document.getElementById('answer-input').focus();
        } else {
          // Either not in ballpark, or second attempt - mark as wrong
          stats.total++;
          document.getElementById('score-correct').textContent = stats.correct;
          document.getElementById('score-total').textContent = stats.total;
          saveStats(); // Persist to localStorage
          
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
          
          // Show loading state while AI generates feedback
          const explanationEl = document.getElementById('feedback-explanation');
          explanationEl.innerHTML = '<div style="color: #666; font-style: italic; padding: 10px; background: #f5f5f5; border-radius: 6px;">🤔 Generating detailed feedback with examples...</div>';
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
          
          getEnhancedAIFeedback(verbInfo, formName, userAnswer, correctAnswer, verbType, verbHiragana).then(aiFeedback => {
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
              // Fall back to original explanation
              console.log('⚠️ AI not available, using fallback');
              explanation = getErrorExplanation(userAnswer, correctAnswer, currentVerb, currentVerb.form);
              
              // Hide "More Examples" button
              document.getElementById('more-examples-btn').style.display = 'none';
            }
            
            // After 2-3 failures, show a worked example
            if (consecutiveFailures >= 2 && Math.random() < 0.7) {
              explanation += generateWorkedExample(currentVerb, currentVerb.form);
            }
            
            explanationEl.innerHTML = explanation;
          }).catch(error => {
            // If AI fails completely, use original explanation
            console.error('❌ AI feedback error:', error);
            let explanation = getErrorExplanation(userAnswer, correctAnswer, currentVerb, currentVerb.form);
            
            if (consecutiveFailures >= 2 && Math.random() < 0.7) {
              explanation += generateWorkedExample(currentVerb, currentVerb.form);
            }
            
            explanationEl.innerHTML = explanation;
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
    
    function skipQuestion() {
      // Track skipped questions
      stats.skipped++;
      
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

    // Enable/disable check button based on input
    var answerInputEl = document.getElementById('answer-input');
    if (answerInputEl) {
      answerInputEl.addEventListener('input', function() {
        document.getElementById('check-btn').disabled = this.value.trim() === '';
      });
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
        weekdayNameFull: { jp: '曜日（〜ようび）', en: 'Weekday (full)' }
      },
      kanjiDict: {
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

    function generateDojoQuestion() {
      var types = Object.keys(dojoData.questionTypes);
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
          case 'futureDate':
            var daysAhead = Math.floor(Math.random() * 14) + 1;
            var futureDate = new Date(today);
            futureDate.setDate(today.getDate() + daysAhead);
            var day = futureDate.getDate();
            q.prompt = daysAhead + '日後は何日ですか？';
            q.promptEn = 'What date will it be in ' + daysAhead + ' days?';
            q.coreAnswer = dojoData.dates[day];
            q.fullAnswer = dojoData.dates[day] + 'です';
            q.hint = 'It will be the ' + day + (day === 1 ? 'st' : day === 2 ? 'nd' : day === 3 ? 'rd' : 'th') + ' — Answer with です';
            q.uniqueKey = 'futureDate_' + daysAhead;
            break;
          case 'pastDate':
            var daysAgo = Math.floor(Math.random() * 14) + 1;
            var pastDate = new Date(today);
            pastDate.setDate(today.getDate() - daysAgo);
            var day = pastDate.getDate();
            q.prompt = daysAgo + '日前は何日でしたか？';
            q.promptEn = 'What date was it ' + daysAgo + ' days ago?';
            q.coreAnswer = dojoData.dates[day];
            q.fullAnswer = dojoData.dates[day] + 'でした';
            q.hint = 'It was the ' + day + (day === 1 ? 'st' : day === 2 ? 'nd' : day === 3 ? 'rd' : 'th') + ' — Answer with でした (past)';
            q.uniqueKey = 'pastDate_' + daysAgo;
            break;
          case 'futureWeekday':
            var daysAhead = Math.floor(Math.random() * 7) + 1;
            var futureDate = new Date(today);
            futureDate.setDate(today.getDate() + daysAhead);
            var weekday = futureDate.getDay();
            q.prompt = daysAhead + '日後は何曜日ですか？';
            q.promptEn = 'What day will it be in ' + daysAhead + ' days?';
            q.coreAnswer = dojoData.weekdays[weekday].jp;
            q.fullAnswer = dojoData.weekdays[weekday].jp + 'です';
            q.kanjiAnswer = dojoData.weekdays[weekday].kanji + 'です';
            q.hint = 'It will be ' + dojoData.weekdays[weekday].en + ' — Answer with です';
            q.uniqueKey = 'futureWeekday_' + daysAhead;
            break;
          case 'pastWeekday':
            var daysAgo = Math.floor(Math.random() * 7) + 1;
            var pastDate = new Date(today);
            pastDate.setDate(today.getDate() - daysAgo);
            var weekday = pastDate.getDay();
            q.prompt = daysAgo + '日前は何曜日でしたか？';
            q.promptEn = 'What day was it ' + daysAgo + ' days ago?';
            q.coreAnswer = dojoData.weekdays[weekday].jp;
            q.fullAnswer = dojoData.weekdays[weekday].jp + 'でした';
            q.kanjiAnswer = dojoData.weekdays[weekday].kanji + 'でした';
            q.hint = 'It was ' + dojoData.weekdays[weekday].en + ' — Answer with でした (past)';
            q.uniqueKey = 'pastWeekday_' + daysAgo;
            break;
          case 'relativeDay':
            var offsets = Object.keys(dojoData.relative).map(Number);
            var offset = offsets[Math.floor(Math.random() * offsets.length)];
            var targetDate = new Date(today);
            targetDate.setDate(today.getDate() + offset);
            var day = targetDate.getDate();
            var relativeTerm = dojoData.relative[offset.toString()];
            q.prompt = '「' + relativeTerm + '」は何日ですか？';
            q.promptEn = 'What date is "' + relativeTerm + '"?';
            q.coreAnswer = dojoData.dates[day];
            q.fullAnswer = dojoData.dates[day] + 'です';
            q.hint = relativeTerm + ' = ' + relativeLabels[offset.toString()] + ' — Answer with です';
            q.uniqueKey = 'relativeDay_' + offset;
            break;
          case 'number':
            var numbers = Object.keys(dojoData.numbers).map(Number);
            var num = numbers[Math.floor(Math.random() * numbers.length)];
            q.prompt = num.toLocaleString() + ' は？';
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
            q.prompt = '「' + reading + '」は何日？';
            q.promptEn = 'What number date is "' + reading + '"?';
            q.coreAnswer = day + '日';
            q.fullAnswer = day + '日です';
            q.hint = 'Listen to the reading pattern... Answer with 日です';
            q.uniqueKey = 'dateFromJapanese_' + day;
            break;
          
          // NEW: Reading-only questions (no です required)
          case 'dateReading':
            var day = Math.floor(Math.random() * 10) + 1; // 1-10 for special readings
            q.prompt = day + '日の読み方は？';
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
            q.prompt = '「' + dayKanji + '」の読み方は？';
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
            q.prompt = num.toLocaleString() + ' の読み方は？';
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
            q.prompt = dayNames[weekday] + ' は日本語で何？';
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
            q.prompt = dayNames[weekday] + ' は日本語で何ようび？';
            q.promptEn = 'What is ' + dayNames[weekday] + ' in Japanese? (include ようび)';
            q.coreAnswer = dojoData.weekdays[weekday].jp;
            q.fullAnswer = dojoData.weekdays[weekday].jp;
            q.hint = 'Must include ようび (e.g., げつようび)';
            q.uniqueKey = 'weekdayNameFull_' + weekday;
            q.requiresFullSentence = false;
            break;
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
      
      // Update UI
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
      if (q.requiresFullSentence === false) {
        hintEl.textContent = '読み方だけでOK！（です不要）';
      } else {
        hintEl.textContent = 'フルセンテンスで答えてね！（〜です / 〜でした）';
      }
      
      document.getElementById('dojo-hint-box').style.display = 'none';
      document.getElementById('dojo-hint-btn').innerHTML = '🔒 <span class="dojo-tip" data-reading="ヒント" data-en="Hint">ヒント</span>';
      document.getElementById('dojo-hint-btn').classList.remove('active');
      document.getElementById('dojo-feedback').style.display = 'none';
      document.getElementById('dojo-partial-feedback').style.display = 'none';
      document.getElementById('dojo-btn-row').style.display = 'flex';
      document.getElementById('dojo-next-btn-row').style.display = 'none';
    }

    function checkDojoAnswer() {
      if (!dojoQuestion) return;
      var userAnswer = document.getElementById('dojo-answer-input').value.trim();
      if (!userAnswer) return;

      // Normalize the answer
      var normalizedAnswer = userAnswer
        .replace(/\s+/g, '')
        .replace(/。$/g, '')
        .replace(/日曜日/g, 'にちようび')
        .replace(/月曜日/g, 'げつようび')
        .replace(/火曜日/g, 'かようび')
        .replace(/水曜日/g, 'すいようび')
        .replace(/木曜日/g, 'もくようび')
        .replace(/金曜日/g, 'きんようび')
        .replace(/土曜日/g, 'どようび');

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
      if (normalizedAnswer === fullAnswer || (kanjiAnswer && normalizedAnswer === kanjiAnswer) || (altAnswer && normalizedAnswer === altAnswer)) {
        isCorrect = true;
      }
      // Check if they got the core answer right
      else if (normalizedAnswer === coreAnswer || 
               (dojoQuestion.kanjiAnswer && normalizedAnswer === dojoQuestion.kanjiAnswer.replace('です', '').replace('でした', ''))) {
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
        
        if (userCore === coreAnswer || (altAnswer && userCore === altAnswer)) {
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
            document.getElementById('dojo-partial-message').textContent = 'その日付は合ってるかも！でも曜日は？';
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
            document.getElementById('dojo-partial-message').textContent = 'その曜日は合ってるかも！でも日付は？';
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
        document.getElementById('dojo-partial-message').textContent = '惜しい！フルセンテンスで答えて！';
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
          document.getElementById('dojo-partial-message').textContent = '過去形で！';
          document.getElementById('dojo-partial-message-en').textContent = 'Use past tense! でした not です';
        } else if (!needsPast && normalizedAnswer.indexOf('でした') !== -1) {
          document.getElementById('dojo-partial-message').textContent = '現在形で！';
          document.getElementById('dojo-partial-message-en').textContent = 'Use present tense! です not でした';
        } else {
          document.getElementById('dojo-partial-message').textContent = 'スペルをチェック！';
          document.getElementById('dojo-partial-message-en').textContent = 'Check your spelling!';
        }
        document.getElementById('dojo-partial-feedback').style.display = 'block';
        document.getElementById('dojo-answer-input').value = '';
        document.getElementById('dojo-answer-input').focus();
        return;
      }

      // Show final feedback
      dojoScore.total++;
      if (isCorrect) {
        dojoScore.correct++;
        dojoStreak++;
      } else {
        dojoStreak = 0;
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
      document.getElementById('dojo-feedback-title').innerHTML = (isCorrect ? '✨ ' : '✗ ') + (isCorrect ? '正解！' : 'ざんねん...');
      document.getElementById('dojo-feedback-label').textContent = isCorrect ? '期待した答え' : '正しい答え';
      
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
        document.getElementById('dojo-hint-content').textContent = dojoQuestion.hint;
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
      if (event.key === 'Enter') {
        var feedback = document.getElementById('dojo-feedback');
        if (feedback.style.display === 'block') {
          generateDojoQuestion();
        } else {
          checkDojoAnswer();
        }
      }
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
      // DAYS OF THE WEEK
      { japanese: "にちようび", kanji: "日曜日", katakana: null, english: "Sunday", category: "noun" },
      { japanese: "げつようび", kanji: "月曜日", katakana: null, english: "Monday", category: "noun" },
      { japanese: "かようび", kanji: "火曜日", katakana: null, english: "Tuesday", category: "noun" },
      { japanese: "すいようび", kanji: "水曜日", katakana: null, english: "Wednesday", category: "noun" },
      { japanese: "もくようび", kanji: "木曜日", katakana: null, english: "Thursday", category: "noun" },
      { japanese: "きんようび", kanji: "金曜日", katakana: null, english: "Friday", category: "noun" },
      { japanese: "どようび", kanji: "土曜日", katakana: null, english: "Saturday", category: "noun" },
      
      // COLORS
      { japanese: "あか", kanji: "赤", katakana: null, english: "Red", category: "noun" },
      { japanese: "あお", kanji: "青", katakana: null, english: "Blue", category: "noun" },
      { japanese: "きいろ", kanji: "黄色", katakana: null, english: "Yellow", category: "noun" },
      { japanese: "みどり", kanji: "緑", katakana: null, english: "Green", category: "noun" },
      { japanese: "ちゃいろ", kanji: "茶色", katakana: null, english: "Brown", category: "noun" },
      { japanese: "しろ", kanji: "白", katakana: null, english: "White", category: "noun" },
      { japanese: "くろ", kanji: "黒", katakana: null, english: "Black", category: "noun" },
      
      // VOCABULARY
      { japanese: "あい", kanji: "愛", katakana: null, english: "Love", category: "noun" },
      { japanese: "あいさつ", kanji: null, katakana: null, english: "Greeting", category: "noun" },
      { japanese: "あせ", kanji: "汗", katakana: null, english: "Sweat", category: "noun" },
      { japanese: "あたま", kanji: "頭", katakana: null, english: "Head", category: "noun" },
      { japanese: "あに", kanji: "兄", katakana: null, english: "Older Brother", category: "noun" },
      { japanese: "あね", kanji: "姉", katakana: null, english: "Older Sister", category: "noun" },
      { japanese: "あめ", kanji: "雨", katakana: null, english: "Rain", category: "noun" },
      { japanese: "いえ", kanji: "家", katakana: null, english: "House", category: "noun" },
      { japanese: "いき", kanji: "息", katakana: null, english: "Breath", category: "noun" },
      { japanese: "いきもの", kanji: "生き物", katakana: null, english: "Living Thing", category: "noun" },
      { japanese: "いけ", kanji: "池", katakana: null, english: "Pond", category: "noun" },
      { japanese: "いざかや", kanji: "居酒屋", katakana: null, english: "Bar", category: "noun" },
      { japanese: "いしき", kanji: "意識", katakana: null, english: "Consciousness", category: "noun" },
      { japanese: "いそうろう", kanji: "居候", katakana: null, english: "Freeloader", category: "noun" },
      { japanese: "いちば", kanji: "市場", katakana: null, english: "Market", category: "noun" },
      { japanese: "いなか", kanji: "田舎", katakana: null, english: "Countryside", category: "noun" },
      { japanese: "いのち", kanji: "命", katakana: null, english: "Life", category: "noun" },
      { japanese: "いりぐち", kanji: "入口", katakana: null, english: "Entrance", category: "noun" },
      { japanese: "うさぎ", kanji: "兎", katakana: null, english: "Rabbit", category: "noun" },
      { japanese: "うし", kanji: "牛", katakana: null, english: "Cow", category: "noun" },
      { japanese: "うそ", kanji: "嘘", katakana: null, english: "Lie", category: "noun" },
      { japanese: "うた", kanji: "歌", katakana: null, english: "Song", category: "noun" },
      { japanese: "うちがわ", kanji: "内側", katakana: null, english: "Inside", category: "noun" },
      { japanese: "うみ", kanji: "海", katakana: null, english: "Sea", category: "noun" },
      { japanese: "うめ", kanji: "梅", katakana: null, english: "Plum", category: "noun" },
      { japanese: "うんどう", kanji: "運動", katakana: null, english: "Exercise", category: "noun" },
      { japanese: "うんてん", kanji: "運転", katakana: null, english: "Driving", category: "noun" },
      { japanese: "えいが", kanji: "映画", katakana: null, english: "Movie", category: "noun" },
      { japanese: "えいご", kanji: "英語", katakana: null, english: "English", category: "noun" },
      { japanese: "えいよう", kanji: "栄養", katakana: null, english: "Nutrition", category: "noun" },
      { japanese: "えがお", kanji: "笑顔", katakana: null, english: "Smile", category: "noun" },
      { japanese: "えき", kanji: "駅", katakana: null, english: "Station", category: "noun" },
      { japanese: "おうえん", kanji: "応援", katakana: null, english: "Cheering", category: "noun" },
      { japanese: "おうさま", kanji: "王様", katakana: null, english: "King", category: "noun" },
      { japanese: "おうじ", kanji: "王子", katakana: null, english: "Prince", category: "noun" },
      { japanese: "おおあめ", kanji: "大雨", katakana: null, english: "Heavy Rain", category: "noun" },
      { japanese: "おかあさん", kanji: "お母さん", katakana: null, english: "Mother", category: "noun" },
      { japanese: "おかし", kanji: "お菓子", katakana: null, english: "Sweets", category: "noun" },
      { japanese: "おかね", kanji: "お金", katakana: null, english: "Money", category: "noun" },
      { japanese: "おく", kanji: "億", katakana: null, english: "100 Million", category: "noun" },
      { japanese: "おくさん", kanji: "奥さん", katakana: null, english: "Wife", category: "noun" },
      { japanese: "おくりもの", kanji: "贈り物", katakana: null, english: "Gift", category: "noun" },
      { japanese: "おさけ", kanji: "お酒", katakana: null, english: "Alcohol", category: "noun" },
      { japanese: "おじさん", kanji: "叔父さん", katakana: null, english: "Uncle", category: "noun" },
      { japanese: "おそうじ", kanji: "お掃除", katakana: null, english: "Cleaning", category: "noun" },
      { japanese: "おそれ", kanji: "恐れ", katakana: null, english: "Fear", category: "noun" },
      { japanese: "おとうさん", kanji: "お父さん", katakana: null, english: "Father", category: "noun" },
      { japanese: "おとこ", kanji: "男", katakana: null, english: "Man", category: "noun" },
      { japanese: "おとな", kanji: "大人", katakana: null, english: "Adult", category: "noun" },
      { japanese: "おとうと", kanji: "弟", katakana: null, english: "Younger Brother", category: "noun" },
      { japanese: "おとめ", kanji: "乙女", katakana: null, english: "Maiden", category: "noun" },
      { japanese: "おにぎり", kanji: "お握り", katakana: null, english: "Rice Ball", category: "noun" },
      { japanese: "おばあさん", kanji: "お婆さん", katakana: null, english: "Grandmother", category: "noun" },
      { japanese: "おべんとう", kanji: "お弁当", katakana: null, english: "Boxed Lunch", category: "noun" },
      { japanese: "おまわりさん", kanji: "お巡りさん", katakana: null, english: "Police Officer", category: "noun" },
      { japanese: "おみやげ", kanji: "お土産", katakana: null, english: "Souvenir", category: "noun" },
      { japanese: "おもいで", kanji: "思い出", katakana: null, english: "Memories", category: "noun" },
      { japanese: "おもちゃ", kanji: "玩具", katakana: null, english: "Toy", category: "noun" },
      { japanese: "おや", kanji: "親", katakana: null, english: "Parent", category: "noun" },
      { japanese: "おり", kanji: "檻", katakana: null, english: "Cage", category: "noun" },
      { japanese: "おんがく", kanji: "音楽", katakana: null, english: "Music", category: "noun" },
      { japanese: "おんせん", kanji: "温泉", katakana: null, english: "Hot Spring", category: "noun" },
      { japanese: "がいこく", kanji: "外国", katakana: null, english: "Foreign Country", category: "noun" },
      { japanese: "がくせい", kanji: "学生", katakana: null, english: "Student", category: "noun" },
      { japanese: "がくじゅつ", kanji: "学術", katakana: null, english: "Academic", category: "noun" },
      { japanese: "がんめん", kanji: "顔面", katakana: null, english: "Face", category: "noun" },
      { japanese: "かいがい", kanji: "海外", katakana: null, english: "Overseas", category: "noun" },
      { japanese: "かいぎ", kanji: "会議", katakana: null, english: "Meeting", category: "noun" },
      { japanese: "かいしゃ", kanji: "会社", katakana: null, english: "Company", category: "noun" },
      { japanese: "かいだん", kanji: "階段", katakana: null, english: "Stairs", category: "noun" },
      { japanese: "かいもの", kanji: "買い物", katakana: null, english: "Shopping", category: "noun" },
      { japanese: "かがく", kanji: "科学", katakana: null, english: "Science", category: "noun" },
      { japanese: "かげ", kanji: "影", katakana: null, english: "Shadow", category: "noun" },
      { japanese: "かぎ", kanji: "鍵", katakana: null, english: "Key", category: "noun" },
      { japanese: "かさ", kanji: "傘", katakana: null, english: "Umbrella", category: "noun" },
      { japanese: "かぞく", kanji: "家族", katakana: null, english: "Family", category: "noun" },
      { japanese: "かた", kanji: "肩", katakana: null, english: "Shoulder", category: "noun" },
      { japanese: "かど", kanji: "角", katakana: null, english: "Corner", category: "noun" },
      { japanese: "かなしみ", kanji: "悲しみ", katakana: null, english: "Sadness", category: "noun" },
      { japanese: "かね", kanji: "鐘", katakana: null, english: "Bell", category: "noun" },
      { japanese: "かばん", kanji: null, katakana: "カバン", english: "Bag", category: "noun" },
      { japanese: "かべ", kanji: "壁", katakana: null, english: "Wall", category: "noun" },
      { japanese: "かみ", kanji: "紙", katakana: null, english: "Paper", category: "noun" },
      { japanese: "かみさま", kanji: "神様", katakana: null, english: "God", category: "noun" },
      { japanese: "かめ", kanji: "亀", katakana: null, english: "Turtle", category: "noun" },
      { japanese: "かれし", kanji: "彼氏", katakana: null, english: "Boyfriend", category: "noun" },
      { japanese: "かわ", kanji: "川", katakana: null, english: "River", category: "noun" },
      { japanese: "かんがえ", kanji: "考え", katakana: null, english: "Thought", category: "noun" },
      { japanese: "かんけい", kanji: "関係", katakana: null, english: "Relationship", category: "noun" },
      { japanese: "かんこく", kanji: "韓国", katakana: null, english: "South Korea", category: "noun" },
      { japanese: "きおん", kanji: "気温", katakana: null, english: "Temperature", category: "noun" },
      { japanese: "きかい", kanji: "機械", katakana: null, english: "Machine", category: "noun" },
      { japanese: "きけん", kanji: "危険", katakana: null, english: "Danger", category: "noun" },
      { japanese: "きぶん", kanji: "気分", katakana: null, english: "Feeling", category: "noun" },
      { japanese: "きぼう", kanji: "希望", katakana: null, english: "Hope", category: "noun" },
      { japanese: "きもち", kanji: "気持ち", katakana: null, english: "Feeling", category: "noun" },
      { japanese: "きゃく", kanji: "客", katakana: null, english: "Guest", category: "noun" },
      { japanese: "きゃくせん", kanji: "客船", katakana: null, english: "Passenger Ship", category: "noun" },
      { japanese: "きゃくほん", kanji: "脚本", katakana: null, english: "Script", category: "noun" },
      { japanese: "きゃたつ", kanji: "脚立", katakana: null, english: "Stepladder", category: "noun" },
      { japanese: "きゅうか", kanji: "休暇", katakana: null, english: "Holiday", category: "noun" },
      { japanese: "きゅうきゅうしゃ", kanji: "救急車", katakana: null, english: "Ambulance", category: "noun" },
      { japanese: "きゅうり", kanji: null, katakana: "キュウリ", english: "Cucumber", category: "noun" },
      { japanese: "きゅうよ", kanji: "給与", katakana: null, english: "Salary", category: "noun" },
      { japanese: "きょう", kanji: "今日", katakana: null, english: "Today", category: "noun" },
      { japanese: "きょうかしょ", kanji: "教科書", katakana: null, english: "Textbook", category: "noun" },
      { japanese: "きょうしつ", kanji: "教室", katakana: null, english: "Classroom", category: "noun" },
      { japanese: "きょういん", kanji: "教員", katakana: null, english: "Teacher", category: "noun" },
      { japanese: "きょうみ", kanji: "興味", katakana: null, english: "Interest", category: "noun" },
      { japanese: "きらい", kanji: "嫌い", katakana: null, english: "Dislike", category: "noun" },
      { japanese: "きろく", kanji: "記録", katakana: null, english: "Record", category: "noun" },
      { japanese: "ぎいん", kanji: "議員", katakana: null, english: "Legislator", category: "noun" },
      { japanese: "ぎじゅつ", kanji: "技術", katakana: null, english: "Technology", category: "noun" },
      { japanese: "ぎもん", kanji: "疑問", katakana: null, english: "Question", category: "noun" },
      { japanese: "ぎむ", kanji: "義務", katakana: null, english: "Duty", category: "noun" },
      { japanese: "ぎゃく", kanji: "逆", katakana: null, english: "Reverse", category: "noun" },
      { japanese: "ぎゅうにく", kanji: "牛肉", katakana: null, english: "Beef", category: "noun" },
      { japanese: "ぎゅうにゅう", kanji: "牛乳", katakana: null, english: "Milk", category: "noun" },
      { japanese: "ぎょうぎ", kanji: "行儀", katakana: null, english: "Manners", category: "noun" },
      { japanese: "ぎょうしゃ", kanji: "業者", katakana: null, english: "Merchant", category: "noun" },
      { japanese: "ぎょうじ", kanji: "行事", katakana: null, english: "Event", category: "noun" },
      { japanese: "ぎょぎょう", kanji: "漁業", katakana: null, english: "Fishery Industry", category: "noun" },
      { japanese: "ぎろん", kanji: "議論", katakana: null, english: "Argument", category: "noun" },
      { japanese: "ぐうぜん", kanji: "偶然", katakana: null, english: "By Chance", category: "noun" },
      { japanese: "ぐち", kanji: "愚痴", katakana: null, english: "Complaint", category: "noun" },
      { japanese: "ぐんたい", kanji: "軍隊", katakana: null, english: "Military", category: "noun" },
      { japanese: "ぐんて", kanji: "軍手", katakana: null, english: "Work Gloves", category: "noun" },
      { japanese: "くうき", kanji: "空気", katakana: null, english: "Air", category: "noun" },
      { japanese: "くさ", kanji: "草", katakana: null, english: "Grass", category: "noun" },
      { japanese: "くだもの", kanji: "果物", katakana: null, english: "Fruit", category: "noun" },
      { japanese: "くつ", kanji: "靴", katakana: null, english: "Shoes", category: "noun" },
      { japanese: "くつした", kanji: "靴下", katakana: null, english: "Socks", category: "noun" },
      { japanese: "くび", kanji: "首", katakana: null, english: "Neck", category: "noun" },
      { japanese: "くも", kanji: "雲", katakana: null, english: "Cloud", category: "noun" },
      { japanese: "くるま", kanji: "車", katakana: null, english: "Car", category: "noun" },
      { japanese: "けいかく", kanji: "計画", katakana: null, english: "Plan", category: "noun" },
      { japanese: "けいさん", kanji: "計算", katakana: null, english: "Calculation", category: "noun" },
      { japanese: "けいざい", kanji: "経済", katakana: null, english: "Economics", category: "noun" },
      { japanese: "けが", kanji: "怪我", katakana: null, english: "Injury", category: "noun" },
      { japanese: "げき", kanji: "劇", katakana: null, english: "Theater Play", category: "noun" },
      { japanese: "けしき", kanji: "景色", katakana: null, english: "Scenery", category: "noun" },
      { japanese: "けしょう", kanji: "化粧", katakana: null, english: "Makeup", category: "noun" },
      { japanese: "けっか", kanji: "結果", katakana: null, english: "Result", category: "noun" },
      { japanese: "けっこん", kanji: "結婚", katakana: null, english: "Marriage", category: "noun" },
      { japanese: "げっきゅう", kanji: "月給", katakana: null, english: "Monthly Salary", category: "noun" },
      { japanese: "げつまつ", kanji: "月末", katakana: null, english: "End of Month", category: "noun" },
      { japanese: "けむり", kanji: "煙", katakana: null, english: "Smoke", category: "noun" },
      { japanese: "けんきゅう", kanji: "研究", katakana: null, english: "Research", category: "noun" },
      { japanese: "けんこう", kanji: "健康", katakana: null, english: "Health", category: "noun" },
      { japanese: "こいびと", kanji: "恋人", katakana: null, english: "Lover", category: "noun" },
      { japanese: "こうこく", kanji: "広告", katakana: null, english: "Advertisement", category: "noun" },
      { japanese: "こうさてん", kanji: "交差点", katakana: null, english: "Intersection", category: "noun" },
      { japanese: "こうじょう", kanji: "工場", katakana: null, english: "Factory", category: "noun" },
      { japanese: "こうちゃ", kanji: "紅茶", katakana: null, english: "Black Tea", category: "noun" },
      { japanese: "こうつう", kanji: "交通", katakana: null, english: "Traffic", category: "noun" },
      { japanese: "ごうかく", kanji: "合格", katakana: null, english: "Pass Exam", category: "noun" },
      { japanese: "ごうけい", kanji: "合計", katakana: null, english: "Total", category: "noun" },
      { japanese: "ごうとう", kanji: "強盗", katakana: null, english: "Robber", category: "noun" },
      { japanese: "こえ", kanji: "声", katakana: null, english: "Voice", category: "noun" },
      { japanese: "こころ", kanji: "心", katakana: null, english: "Heart", category: "noun" },
      { japanese: "ことば", kanji: "言葉", katakana: null, english: "Words", category: "noun" },
      { japanese: "こども", kanji: "子供", katakana: null, english: "Child", category: "noun" },
      { japanese: "ごはん", kanji: "ご飯", katakana: null, english: "Rice", category: "noun" },
      { japanese: "ごま", kanji: "胡麻", katakana: null, english: "Sesame", category: "noun" },
      { japanese: "ごみ", kanji: null, katakana: "ゴミ", english: "Garbage", category: "noun" },
      { japanese: "こめ", kanji: "米", katakana: null, english: "Uncooked Rice", category: "noun" },
      { japanese: "ざいさん", kanji: "財産", katakana: null, english: "Property", category: "noun" },
      { japanese: "ざいもく", kanji: "材木", katakana: null, english: "Timber", category: "noun" },
      { japanese: "ざっし", kanji: "雑誌", katakana: null, english: "Magazine", category: "noun" },
      { japanese: "さかな", kanji: "魚", katakana: null, english: "Fish", category: "noun" },
      { japanese: "さくぶん", kanji: "作文", katakana: null, english: "Composition", category: "noun" },
      { japanese: "さくら", kanji: "桜", katakana: null, english: "Cherry Blossoms", category: "noun" },
      { japanese: "さけ", kanji: "鮭", katakana: null, english: "Salmon", category: "noun" },
      { japanese: "さとう", kanji: "砂糖", katakana: null, english: "Sugar", category: "noun" },
      { japanese: "さら", kanji: "皿", katakana: null, english: "Plate", category: "noun" },
      { japanese: "しお", kanji: "塩", katakana: null, english: "Salt", category: "noun" },
      { japanese: "しき", kanji: "四季", katakana: null, english: "Four Seasons", category: "noun" },
      { japanese: "じかい", kanji: "次回", katakana: null, english: "Next Time", category: "noun" },
      { japanese: "じかん", kanji: "時間", katakana: null, english: "Time", category: "noun" },
      { japanese: "しけん", kanji: "試験", katakana: null, english: "Exam", category: "noun" },
      { japanese: "じけん", kanji: "事件", katakana: null, english: "Incident", category: "noun" },
      { japanese: "じこ", kanji: "事故", katakana: null, english: "Accident", category: "noun" },
      { japanese: "しごと", kanji: "仕事", katakana: null, english: "Work", category: "noun" },
      { japanese: "じさつ", kanji: "自殺", katakana: null, english: "Suicide", category: "noun" },
      { japanese: "じしん", kanji: "地震", katakana: null, english: "Earthquake", category: "noun" },
      { japanese: "しずか", kanji: "静か", katakana: null, english: "Quiet", category: "noun" },
      { japanese: "した", kanji: "下", katakana: null, english: "Below", category: "noun" },
      { japanese: "じてんしゃ", kanji: "自転車", katakana: null, english: "Bicycle", category: "noun" },
      { japanese: "じぶん", kanji: "自分", katakana: null, english: "Self", category: "noun" },
      { japanese: "じゃどう", kanji: "邪道", katakana: null, english: "Wrong Way", category: "noun" },
      { japanese: "じゃっかん", kanji: "若干", katakana: null, english: "A Little", category: "noun" },
      { japanese: "じゃま", kanji: "邪魔", katakana: null, english: "Hindrance", category: "noun" },
      { japanese: "じゃんけん", kanji: null, katakana: "ジャンケン", english: "Rock Paper Scissors", category: "noun" },
      { japanese: "しゃかい", kanji: "社会", katakana: null, english: "Society", category: "noun" },
      { japanese: "しゃしん", kanji: "写真", katakana: null, english: "Photo", category: "noun" },
      { japanese: "しゃちょう", kanji: "社長", katakana: null, english: "President", category: "noun" },
      { japanese: "しゃっきん", kanji: "借金", katakana: null, english: "Debt", category: "noun" },
      { japanese: "しゅうかい", kanji: "集会", katakana: null, english: "Meeting", category: "noun" },
      { japanese: "しゅうかん", kanji: "習慣", katakana: null, english: "Habit", category: "noun" },
      { japanese: "しゅうきょう", kanji: "宗教", katakana: null, english: "Religion", category: "noun" },
      { japanese: "しゅうごう", kanji: "集合", katakana: null, english: "Gathering", category: "noun" },
      { japanese: "しゅくだい", kanji: "宿題", katakana: null, english: "Homework", category: "noun" },
      { japanese: "しゅみ", kanji: "趣味", katakana: null, english: "Hobby", category: "noun" },
      { japanese: "じゅうしょ", kanji: "住所", katakana: null, english: "Address", category: "noun" },
      { japanese: "じゅうしょう", kanji: "重傷", katakana: null, english: "Severe Injury", category: "noun" },
      { japanese: "じゅうたい", kanji: "渋滞", katakana: null, english: "Traffic Jam", category: "noun" },
      { japanese: "じゅうどう", kanji: "柔道", katakana: null, english: "Judo", category: "noun" },
      { japanese: "しょうが", kanji: "生姜", katakana: null, english: "Ginger", category: "noun" },
      { japanese: "しょうがっこう", kanji: "小学校", katakana: null, english: "Elementary School", category: "noun" },
      { japanese: "しょうがつ", kanji: "正月", katakana: null, english: "New Year", category: "noun" },
      { japanese: "しょうか", kanji: "消化", katakana: null, english: "Digestion", category: "noun" },
      { japanese: "しょうき", kanji: "正気", katakana: null, english: "Sanity", category: "noun" },
      { japanese: "しょうせつ", kanji: "小説", katakana: null, english: "Novel", category: "noun" },
      { japanese: "しょうたい", kanji: "招待", katakana: null, english: "Invitation", category: "noun" },
      { japanese: "じょうおう", kanji: "女王", katakana: null, english: "Queen", category: "noun" },
      { japanese: "じょうけん", kanji: "条件", katakana: null, english: "Condition", category: "noun" },
      { japanese: "じょうきょう", kanji: "状況", katakana: null, english: "Situation", category: "noun" },
      { japanese: "じょうしき", kanji: "常識", katakana: null, english: "Common Sense", category: "noun" },
      { japanese: "しんぶん", kanji: "新聞", katakana: null, english: "Newspaper", category: "noun" },
      { japanese: "すいえい", kanji: "水泳", katakana: null, english: "Swimming", category: "noun" },
      { japanese: "すうがく", kanji: "数学", katakana: null, english: "Math", category: "noun" },
      { japanese: "すうじ", kanji: "数字", katakana: null, english: "Number", category: "noun" },
      { japanese: "すし", kanji: "寿司", katakana: null, english: "Sushi", category: "noun" },
      { japanese: "すな", kanji: "砂", katakana: null, english: "Sand", category: "noun" },
      { japanese: "ずいひつ", kanji: "随筆", katakana: null, english: "Essay", category: "noun" },
      { japanese: "ずかん", kanji: "図鑑", katakana: null, english: "Picture Dictionary", category: "noun" },
      { japanese: "ずつう", kanji: "頭痛", katakana: null, english: "Headache", category: "noun" },
      { japanese: "せいかつ", kanji: "生活", katakana: null, english: "Life", category: "noun" },
      { japanese: "せいこう", kanji: "成功", katakana: null, english: "Success", category: "noun" },
      { japanese: "せいじ", kanji: "政治", katakana: null, english: "Politics", category: "noun" },
      { japanese: "せいと", kanji: "生徒", katakana: null, english: "Student", category: "noun" },
      { japanese: "ぜいきん", kanji: "税金", katakana: null, english: "Tax", category: "noun" },
      { japanese: "ぜいたく", kanji: "贅沢", katakana: null, english: "Luxury", category: "noun" },
      { japanese: "ぜいにく", kanji: "贅肉", katakana: null, english: "Flab", category: "noun" },
      { japanese: "せなか", kanji: "背中", katakana: null, english: "Back", category: "noun" },
      { japanese: "せんせい", kanji: "先生", katakana: null, english: "Teacher", category: "noun" },
      { japanese: "せんたく", kanji: "洗濯", katakana: null, english: "Laundry", category: "noun" },
      { japanese: "ぜっけい", kanji: "絶景", katakana: null, english: "Spectacular Scenery", category: "noun" },
      { japanese: "そつぎょう", kanji: "卒業", katakana: null, english: "Graduation", category: "noun" },
      { japanese: "そうじ", kanji: "掃除", katakana: null, english: "Cleaning", category: "noun" },
      { japanese: "ぞう", kanji: "象", katakana: null, english: "Elephant", category: "noun" },
      { japanese: "ぞうか", kanji: "増加", katakana: null, english: "Increase", category: "noun" },
      { japanese: "ぞうせん", kanji: "造船", katakana: null, english: "Shipbuilding", category: "noun" },
      { japanese: "ぞくご", kanji: "俗語", katakana: null, english: "Slang", category: "noun" },
      { japanese: "そと", kanji: "外", katakana: null, english: "Outside", category: "noun" },
      { japanese: "そば", kanji: "蕎麦", katakana: null, english: "Buckwheat Noodles", category: "noun" },
      { japanese: "そふ", kanji: "祖父", katakana: null, english: "Grandfather", category: "noun" },
      { japanese: "そら", kanji: "空", katakana: null, english: "Sky", category: "noun" },
      { japanese: "だいがく", kanji: "大学", katakana: null, english: "University", category: "noun" },
      { japanese: "だいどころ", kanji: "台所", katakana: null, english: "Kitchen", category: "noun" },
      { japanese: "たいいく", kanji: "体育", katakana: null, english: "Physical Education", category: "noun" },
      { japanese: "たいじゅう", kanji: "体重", katakana: null, english: "Body Weight", category: "noun" },
      { japanese: "たから", kanji: "宝", katakana: null, english: "Treasure", category: "noun" },
      { japanese: "たけ", kanji: "竹", katakana: null, english: "Bamboo", category: "noun" },
      { japanese: "だます", kanji: "騙す", katakana: null, english: "To Deceive", category: "verb" },
      { japanese: "だんせい", kanji: "男性", katakana: null, english: "Male", category: "noun" },
      { japanese: "たてもの", kanji: "建物", katakana: null, english: "Building", category: "noun" },
      { japanese: "たび", kanji: "旅", katakana: null, english: "Travel", category: "noun" },
      { japanese: "ちか", kanji: "地下", katakana: null, english: "Underground", category: "noun" },
      { japanese: "ちこく", kanji: "遅刻", katakana: null, english: "Late", category: "noun" },
      { japanese: "ちしき", kanji: "知識", katakana: null, english: "Knowledge", category: "noun" },
      { japanese: "ちち", kanji: "父", katakana: null, english: "Father", category: "noun" },
      { japanese: "ちゃ", kanji: "茶", katakana: null, english: "Tea", category: "noun" },
      { japanese: "ちゃくもく", kanji: "着目", katakana: null, english: "Focus", category: "noun" },
      { japanese: "ちゃわん", kanji: "茶碗", katakana: null, english: "Tea Bowl", category: "noun" },
      { japanese: "ちゅうい", kanji: "注意", katakana: null, english: "Caution", category: "noun" },
      { japanese: "ちゅうがっこう", kanji: "中学校", katakana: null, english: "Middle School", category: "noun" },
      { japanese: "ちゅうこ", kanji: "中古", katakana: null, english: "Second Hand", category: "noun" },
      { japanese: "ちゅうし", kanji: "中止", katakana: null, english: "Cancellation", category: "noun" },
      { japanese: "ちゅうしゃ", kanji: "注射", katakana: null, english: "Injection", category: "noun" },
      { japanese: "ちゅうしょく", kanji: "昼食", katakana: null, english: "Lunch", category: "noun" },
      { japanese: "ちゅうねん", kanji: "中年", katakana: null, english: "Middle Aged", category: "noun" },
      { japanese: "ちょうかん", kanji: "朝刊", katakana: null, english: "Morning Newspaper", category: "noun" },
      { japanese: "ちょうさ", kanji: "調査", katakana: null, english: "Investigation", category: "noun" },
      { japanese: "ちょうしょ", kanji: "長所", katakana: null, english: "Strong Point", category: "noun" },
      { japanese: "ちょきん", kanji: "貯金", katakana: null, english: "Savings", category: "noun" },
      { japanese: "ちょしゃ", kanji: "著者", katakana: null, english: "Author", category: "noun" },
      { japanese: "ちょうみりょう", kanji: "調味料", katakana: null, english: "Condiment", category: "noun" },
      { japanese: "ちず", kanji: "地図", katakana: null, english: "Map", category: "noun" },
      { japanese: "つき", kanji: "月", katakana: null, english: "Moon", category: "noun" },
      { japanese: "つくえ", kanji: "机", katakana: null, english: "Desk", category: "noun" },
      { japanese: "つま", kanji: "妻", katakana: null, english: "Wife", category: "noun" },
      { japanese: "つみ", kanji: "罪", katakana: null, english: "Crime", category: "noun" },
      { japanese: "つめ", kanji: "爪", katakana: null, english: "Fingernail", category: "noun" },
      { japanese: "てがみ", kanji: "手紙", katakana: null, english: "Letter", category: "noun" },
      { japanese: "てき", kanji: "敵", katakana: null, english: "Enemy", category: "noun" },
      { japanese: "できごと", kanji: "出来事", katakana: null, english: "Event", category: "noun" },
      { japanese: "でぐち", kanji: "出口", katakana: null, english: "Exit", category: "noun" },
      { japanese: "てら", kanji: "寺", katakana: null, english: "Temple", category: "noun" },
      { japanese: "てんき", kanji: "天気", katakana: null, english: "Weather", category: "noun" },
      { japanese: "でんき", kanji: "電気", katakana: null, english: "Electricity", category: "noun" },
      { japanese: "でんしゃ", kanji: "電車", katakana: null, english: "Train", category: "noun" },
      { japanese: "でんち", kanji: "電池", katakana: null, english: "Battery", category: "noun" },
      { japanese: "でんわ", kanji: "電話", katakana: null, english: "Phone", category: "noun" },
      { japanese: "といれ", kanji: null, katakana: "トイレ", english: "Toilet", category: "noun" },
      { japanese: "とけい", kanji: "時計", katakana: null, english: "Clock", category: "noun" },
      { japanese: "ところ", kanji: "所", katakana: null, english: "Place", category: "noun" },
      { japanese: "とし", kanji: "年", katakana: null, english: "Year", category: "noun" },
      { japanese: "としょかん", kanji: "図書館", katakana: null, english: "Library", category: "noun" },
      { japanese: "どうぐ", kanji: "道具", katakana: null, english: "Tool", category: "noun" },
      { japanese: "どうし", kanji: "動詞", katakana: null, english: "Verb", category: "noun" },
      { japanese: "どうぶつ", kanji: "動物", katakana: null, english: "Animal", category: "noun" },
      { japanese: "どりょく", kanji: "努力", katakana: null, english: "Effort", category: "noun" },
      { japanese: "とり", kanji: "鳥", katakana: null, english: "Bird", category: "noun" },
      { japanese: "なかま", kanji: "仲間", katakana: null, english: "Friend", category: "noun" },
      { japanese: "なつ", kanji: "夏", katakana: null, english: "Summer", category: "noun" },
      { japanese: "なべ", kanji: "鍋", katakana: null, english: "Pot", category: "noun" },
      { japanese: "なまえ", kanji: "名前", katakana: null, english: "Name", category: "noun" },
      { japanese: "なみだ", kanji: "涙", katakana: null, english: "Tears", category: "noun" },
      { japanese: "におい", kanji: "匂い", katakana: null, english: "Smell", category: "noun" },
      { japanese: "にく", kanji: "肉", katakana: null, english: "Meat", category: "noun" },
      { japanese: "にし", kanji: "西", katakana: null, english: "West", category: "noun" },
      { japanese: "にほん", kanji: "日本", katakana: null, english: "Japan", category: "noun" },
      { japanese: "にゅうがく", kanji: "入学", katakana: null, english: "School Admission", category: "noun" },
      { japanese: "にゅうがん", kanji: "乳癌", katakana: null, english: "Breast Cancer", category: "noun" },
      { japanese: "にゅうじょう", kanji: "入場", katakana: null, english: "Admission to Place", category: "noun" },
      { japanese: "にゅうしゃ", kanji: "入社", katakana: null, english: "Joining a Company", category: "noun" },
      { japanese: "にゅういん", kanji: "入院", katakana: null, english: "Hospitalization", category: "noun" },
      { japanese: "にんげん", kanji: "人間", katakana: null, english: "Human", category: "noun" },
      { japanese: "にんぎょう", kanji: "人形", katakana: null, english: "Doll", category: "noun" },
      { japanese: "にわ", kanji: "庭", katakana: null, english: "Garden", category: "noun" },
      { japanese: "にょう", kanji: "尿", katakana: null, english: "Urine", category: "noun" },
      { japanese: "にょうぼう", kanji: "女房", katakana: null, english: "Wife", category: "noun" },
      { japanese: "にゃんこ", kanji: null, katakana: "ニャンコ", english: "Kitty", category: "noun" },
      { japanese: "ぬう", kanji: "縫う", katakana: null, english: "To Sew", category: "verb" },
      { japanese: "ぬすむ", kanji: "盗む", katakana: null, english: "To Steal", category: "verb" },
      { japanese: "ぬの", kanji: "布", katakana: null, english: "Fabric", category: "noun" },
      { japanese: "ねこ", kanji: "猫", katakana: null, english: "Cat", category: "noun" },
      { japanese: "ねだん", kanji: "値段", katakana: null, english: "Price", category: "noun" },
      { japanese: "ねつ", kanji: "熱", katakana: null, english: "Fever", category: "noun" },
      { japanese: "のど", kanji: "喉", katakana: null, english: "Throat", category: "noun" },
      { japanese: "のみもの", kanji: "飲み物", katakana: null, english: "Drink", category: "noun" },
      { japanese: "のり", kanji: "海苔", katakana: null, english: "Seaweed", category: "noun" },
      { japanese: "のりもの", kanji: "乗り物", katakana: null, english: "Vehicle", category: "noun" },
      { japanese: "はいしゃ", kanji: "歯医者", katakana: null, english: "Dentist", category: "noun" },
      { japanese: "はか", kanji: "墓", katakana: null, english: "Grave", category: "noun" },
      { japanese: "はがき", kanji: "葉書", katakana: null, english: "Postcard", category: "noun" },
      { japanese: "はこ", kanji: "箱", katakana: null, english: "Box", category: "noun" },
      { japanese: "はくぶつかん", kanji: "博物館", katakana: null, english: "Museum", category: "noun" },
      { japanese: "ばいきん", kanji: "黴菌", katakana: null, english: "Germ", category: "noun" },
      { japanese: "ばい", kanji: "倍", katakana: null, english: "Double", category: "noun" },
      { japanese: "はな", kanji: "花", katakana: null, english: "Flower", category: "noun" },
      { japanese: "はは", kanji: "母", katakana: null, english: "Mother", category: "noun" },
      { japanese: "はる", kanji: "春", katakana: null, english: "Spring", category: "noun" },
      { japanese: "ばしょ", kanji: "場所", katakana: null, english: "Place", category: "noun" },
      { japanese: "ひがし", kanji: "東", katakana: null, english: "East", category: "noun" },
      { japanese: "ひかり", kanji: "光", katakana: null, english: "Light", category: "noun" },
      { japanese: "ひこうき", kanji: "飛行機", katakana: null, english: "Airplane", category: "noun" },
      { japanese: "ひふ", kanji: "皮膚", katakana: null, english: "Skin", category: "noun" },
      { japanese: "ひゃっかじてん", kanji: "百科事典", katakana: null, english: "Encyclopedia", category: "noun" },
      { japanese: "びゃくや", kanji: "白夜", katakana: null, english: "The Midnight Sun", category: "noun" },
      { japanese: "びよう", kanji: "美容", katakana: null, english: "Beauty", category: "noun" },
      { japanese: "びょう", kanji: "秒", katakana: null, english: "Second", category: "noun" },
      { japanese: "びょうき", kanji: "病気", katakana: null, english: "Illness", category: "noun" },
      { japanese: "びょういん", kanji: "病院", katakana: null, english: "Hospital", category: "noun" },
      { japanese: "びょうどう", kanji: "平等", katakana: null, english: "Equality", category: "noun" },
      { japanese: "ひょう", kanji: "表", katakana: null, english: "Chart", category: "noun" },
      { japanese: "ひょうか", kanji: "評価", katakana: null, english: "Evaluation", category: "noun" },
      { japanese: "ひょうげん", kanji: "表現", katakana: null, english: "Expression", category: "noun" },
      { japanese: "ひょうし", kanji: "表紙", katakana: null, english: "Book Cover", category: "noun" },
      { japanese: "ひょうじゅん", kanji: "標準", katakana: null, english: "Standard", category: "noun" },
      { japanese: "びじゅつかん", kanji: "美術館", katakana: null, english: "Art Museum", category: "noun" },
      { japanese: "びちく", kanji: "備蓄", katakana: null, english: "Stock", category: "noun" },
      { japanese: "びん", kanji: "瓶", katakana: null, english: "Jar", category: "noun" },
      { japanese: "ふうせん", kanji: "風船", katakana: null, english: "Balloon", category: "noun" },
      { japanese: "ぶき", kanji: "武器", katakana: null, english: "Weapon", category: "noun" },
      { japanese: "ふく", kanji: "服", katakana: null, english: "Clothes", category: "noun" },
      { japanese: "ぶじ", kanji: "無事", katakana: null, english: "Safety", category: "noun" },
      { japanese: "ぶた", kanji: "豚", katakana: null, english: "Pig", category: "noun" },
      { japanese: "ふたご", kanji: "双子", katakana: null, english: "Twins", category: "noun" },
      { japanese: "ぶどう", kanji: "葡萄", katakana: null, english: "Grape", category: "noun" },
      { japanese: "ふね", kanji: "船", katakana: null, english: "Boat", category: "noun" },
      { japanese: "ぶんか", kanji: "文化", katakana: null, english: "Culture", category: "noun" },
      { japanese: "ふゆ", kanji: "冬", katakana: null, english: "Winter", category: "noun" },
      { japanese: "ふろ", kanji: "風呂", katakana: null, english: "Bath", category: "noun" },
      { japanese: "べっそう", kanji: "別荘", katakana: null, english: "Holiday House", category: "noun" },
      { japanese: "べんきょう", kanji: "勉強", katakana: null, english: "Study", category: "noun" },
      { japanese: "べんごし", kanji: "弁護士", katakana: null, english: "Lawyer", category: "noun" },
      { japanese: "べんとう", kanji: "弁当", katakana: null, english: "Lunch Box", category: "noun" },
      { japanese: "へいじつ", kanji: "平日", katakana: null, english: "Weekday", category: "noun" },
      { japanese: "へいわ", kanji: "平和", katakana: null, english: "Peace", category: "noun" },
      { japanese: "へんじ", kanji: "返事", katakana: null, english: "Response", category: "noun" },
      { japanese: "へや", kanji: "部屋", katakana: null, english: "Room", category: "noun" },
      { japanese: "ぼうえき", kanji: "貿易", katakana: null, english: "Trade", category: "noun" },
      { japanese: "ぼうけん", kanji: "冒険", katakana: null, english: "Adventure", category: "noun" },
      { japanese: "ぼうし", kanji: "帽子", katakana: null, english: "Hat", category: "noun" },
      { japanese: "ほうこく", kanji: "報告", katakana: null, english: "Report", category: "noun" },
      { japanese: "ほうせき", kanji: "宝石", katakana: null, english: "Gem", category: "noun" },
      { japanese: "ほうちょう", kanji: "包丁", katakana: null, english: "Kitchen Knife", category: "noun" },
      { japanese: "ほうほう", kanji: "方法", katakana: null, english: "Method", category: "noun" },
      { japanese: "ぼくじょう", kanji: "牧場", katakana: null, english: "Farm", category: "noun" },
      { japanese: "ほん", kanji: "本", katakana: null, english: "Book", category: "noun" },
      { japanese: "まくら", kanji: "枕", katakana: null, english: "Pillow", category: "noun" },
      { japanese: "まち", kanji: "町", katakana: null, english: "Town", category: "noun" },
      { japanese: "まど", kanji: "窓", katakana: null, english: "Window", category: "noun" },
      { japanese: "まめ", kanji: "豆", katakana: null, english: "Bean", category: "noun" },
      { japanese: "みず", kanji: "水", katakana: null, english: "Water", category: "noun" },
      { japanese: "みせ", kanji: "店", katakana: null, english: "Shop", category: "noun" },
      { japanese: "みち", kanji: "道", katakana: null, english: "Road", category: "noun" },
      { japanese: "むし", kanji: "虫", katakana: null, english: "Bug", category: "noun" },
      { japanese: "むすこ", kanji: "息子", katakana: null, english: "Son", category: "noun" },
      { japanese: "むすめ", kanji: "娘", katakana: null, english: "Daughter", category: "noun" },
      { japanese: "むら", kanji: "村", katakana: null, english: "Village", category: "noun" },
      { japanese: "むりょう", kanji: "無料", katakana: null, english: "Free of Charge", category: "noun" },
      { japanese: "め", kanji: "目", katakana: null, english: "Eye", category: "noun" },
      { japanese: "めいれい", kanji: "命令", katakana: null, english: "Order", category: "noun" },
      { japanese: "めがね", kanji: "眼鏡", katakana: null, english: "Glasses", category: "noun" },
      { japanese: "めんせつ", kanji: "面接", katakana: null, english: "Interview", category: "noun" },
      { japanese: "もち", kanji: "餅", katakana: null, english: "Rice Cake", category: "noun" },
      { japanese: "もめん", kanji: "木綿", katakana: null, english: "Cotton", category: "noun" },
      { japanese: "もの", kanji: "物", katakana: null, english: "Thing", category: "noun" },
      { japanese: "もんだい", kanji: "問題", katakana: null, english: "Problem", category: "noun" },
      { japanese: "もり", kanji: "森", katakana: null, english: "Forest", category: "noun" },
      { japanese: "やくそく", kanji: "約束", katakana: null, english: "Promise", category: "noun" },
      { japanese: "やくわり", kanji: "役割", katakana: null, english: "Role", category: "noun" },
      { japanese: "やさい", kanji: "野菜", katakana: null, english: "Vegetable", category: "noun" },
      { japanese: "やすみ", kanji: "休み", katakana: null, english: "Break", category: "noun" },
      { japanese: "やま", kanji: "山", katakana: null, english: "Mountain", category: "noun" },
      { japanese: "ゆうじん", kanji: "友人", katakana: null, english: "Friend", category: "noun" },
      { japanese: "ゆうひ", kanji: "夕日", katakana: null, english: "Sunset", category: "noun" },
      { japanese: "ゆき", kanji: "雪", katakana: null, english: "Snow", category: "noun" },
      { japanese: "よてい", kanji: "予定", katakana: null, english: "Plan", category: "noun" },
      { japanese: "よほう", kanji: "予報", katakana: null, english: "Forecast", category: "noun" },
      { japanese: "よやく", kanji: "予約", katakana: null, english: "Reservation", category: "noun" },
      { japanese: "よる", kanji: "夜", katakana: null, english: "Night", category: "noun" },
      { japanese: "らいげつ", kanji: "来月", katakana: null, english: "Next Month", category: "noun" },
      { japanese: "らくがき", kanji: "落書き", katakana: null, english: "Graffiti", category: "noun" },
      { japanese: "らくてんか", kanji: "楽天家", katakana: null, english: "Optimist", category: "noun" },
      { japanese: "りえき", kanji: "利益", katakana: null, english: "Benefit", category: "noun" },
      { japanese: "りこん", kanji: "離婚", katakana: null, english: "Divorce", category: "noun" },
      { japanese: "りゃくご", kanji: "略語", katakana: null, english: "Abbreviation", category: "noun" },
      { japanese: "りゅう", kanji: "流", katakana: null, english: "School of Thought", category: "noun" },
      { japanese: "りゅうがえ", kanji: "両替", katakana: null, english: "Currency Exchange", category: "noun" },
      { japanese: "りゅうがく", kanji: "留学", katakana: null, english: "Studying Abroad", category: "noun" },
      { japanese: "りゅうこう", kanji: "流行", katakana: null, english: "Trend", category: "noun" },
      { japanese: "りゆう", kanji: "理由", katakana: null, english: "Reason", category: "noun" },
      { japanese: "りょうし", kanji: "漁師", katakana: null, english: "Fisherman", category: "noun" },
      { japanese: "りょうしん", kanji: "両親", katakana: null, english: "Parents", category: "noun" },
      { japanese: "りょうほう", kanji: "両方", katakana: null, english: "Both", category: "noun" },
      { japanese: "りょうり", kanji: "料理", katakana: null, english: "Cooking", category: "noun" },
      { japanese: "りょかん", kanji: "旅館", katakana: null, english: "Japanese Inn", category: "noun" },
      { japanese: "りょこう", kanji: "旅行", katakana: null, english: "Trip", category: "noun" },
      { japanese: "りんご", kanji: "林檎", katakana: null, english: "Apple", category: "noun" },
      { japanese: "るいじ", kanji: "類似", katakana: null, english: "Similarity", category: "noun" },
      { japanese: "るす", kanji: "留守", katakana: null, english: "Absence from Home", category: "noun" },
      { japanese: "れいぎ", kanji: "礼儀", katakana: null, english: "Courtesy", category: "noun" },
      { japanese: "れいぞうこ", kanji: "冷蔵庫", katakana: null, english: "Refrigerator", category: "noun" },
      { japanese: "れきし", kanji: "歴史", katakana: null, english: "History", category: "noun" },
      { japanese: "れんしゅう", kanji: "練習", katakana: null, english: "Practice", category: "noun" },
      { japanese: "ろうか", kanji: "廊下", katakana: null, english: "Hallway", category: "noun" },
      { japanese: "ろうじん", kanji: "老人", katakana: null, english: "Elderly People", category: "noun" },
      { japanese: "ろうそく", kanji: "蝋燭", katakana: null, english: "Candle", category: "noun" },
      { japanese: "ろうどう", kanji: "労働", katakana: null, english: "Labor", category: "noun" },
      { japanese: "わき", kanji: "脇", katakana: null, english: "Armpit", category: "noun" },
      { japanese: "わりびき", kanji: "割引", katakana: null, english: "Discount", category: "noun" },
      { japanese: "わるぐち", kanji: "悪口", katakana: null, english: "Insult", category: "noun" },
      
      // i-adjectives
      { japanese: "あかい", kanji: "赤い", katakana: null, english: "Red", category: "i-adjective" },
      { japanese: "あおい", kanji: "青い", katakana: null, english: "Blue", category: "i-adjective" },
      { japanese: "おおきい", kanji: "大きい", katakana: null, english: "Big", category: "i-adjective" },
      { japanese: "ちいさい", kanji: "小さい", katakana: null, english: "Small", category: "i-adjective" },
      { japanese: "たかい", kanji: "高い", katakana: null, english: "High", category: "i-adjective" },
      { japanese: "やすい", kanji: "安い", katakana: null, english: "Cheap", category: "i-adjective" },
      { japanese: "ながい", kanji: "長い", katakana: null, english: "Long", category: "i-adjective" },
      { japanese: "ねむい", kanji: "眠い", katakana: null, english: "Sleepy", category: "i-adjective" },
      { japanese: "ぬるい", kanji: "温い", katakana: null, english: "Lukewarm", category: "i-adjective" },
      { japanese: "ずうずうしい", kanji: "図々しい", katakana: null, english: "Cheeky", category: "i-adjective" },
      { japanese: "わかい", kanji: "若い", katakana: null, english: "Young", category: "i-adjective" },
      
      // na-adjectives
      { japanese: "きれい", kanji: "綺麗", katakana: null, english: "Beautiful", category: "na-adjective" },
      { japanese: "たいせつ", kanji: "大切", katakana: null, english: "Important", category: "na-adjective" },
      { japanese: "とくべつ", kanji: "特別", katakana: null, english: "Special", category: "na-adjective" },
      { japanese: "ざんねん", kanji: "残念", katakana: null, english: "Regrettable", category: "na-adjective" },
      { japanese: "ばか", kanji: "馬鹿", katakana: null, english: "Stupid", category: "na-adjective" },
      { japanese: "らく", kanji: "楽", katakana: null, english: "Easy", category: "na-adjective" },
      { japanese: "ゆうめい", kanji: "有名", katakana: null, english: "Famous", category: "na-adjective" },
      { japanese: "ふあん", kanji: "不安", katakana: null, english: "Anxiety", category: "na-adjective" },
      
      // verbs
      { japanese: "たべる", kanji: "食べる", katakana: null, english: "To Eat", category: "verb" },
      { japanese: "のむ", kanji: "飲む", katakana: null, english: "To Drink", category: "verb" }
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

    // Initialize vocabulary
    function initVocab() {
      filteredCardsVocab = shuffleArrayVocab(vocabDataList);
      loadCardVocab();
      updateProgressVocab();
    }

    // Load current card (updated for reverse mode, kanji, katakana, and improved display)
    function loadCardVocab() {
      if (filteredCardsVocab.length === 0) return;
      
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
      updateScoreDisplay(); // Load saved stats
      updateReportButton();
      generateNewQuestion();
    }
    
    // Back to top button
    (function() {
      var backToTop = document.getElementById('back-to-top');
      
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
    
    function showKanjiCard() {
      if (filteredKanjiCards.length === 0) return;
      
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
        vocabList.innerHTML = card.vocabulary.slice(0, 4).map(v => `
          <div class="kanji-vocab-item">
            <span class="kanji-vocab-word jp">${v.word}</span>
            <span class="kanji-vocab-meaning"> — ${v.meaning}</span>
          </div>
        `).join('');
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
      if (document.getElementById('page-datedojo') && typeof generateDojoQuestion === 'function') {
        generateDojoQuestion();
        populateDojoReference();
      }
    });
