// counters-data.js — the Counters page's reference data (counters.html).
//
// The page is really a page about SOUND CHANGES. Number + counter is trivial;
// what has to be learned is that 一本 is いっぽん and 三本 is さんぼん. So each
// counter lists ONLY the readings that deviate, in `irr`. Everything else is
// generated: the plain number plus `base`. A counter with an empty `irr` is
// genuinely regular, and the page says so rather than printing ten cells that
// all look the same.
//
// `all` replaces `irr` for the two counters that use the native series
// throughout (つ and 日) — there, every reading is its own word.
//
// T(en, de, fr, zh) for anything the reader has to understand.
//
// This file is also the Date Dojo's source for counter questions. Eight of the
// counters carry a `dojo` field — a plain noun to build a sentence around — and
// app.js derives dojoData.counters, plainCount, yearCount, hours and
// minuteUnits from here rather than keeping its own copy. Fix a reading once
// and both the Counters page and the Dojo change together.

var COUNTER_DATA = (function () {
  function T(en, de, fr, zh) { return { en: en, de: de, fr: fr, zh: zh }; }

  // The Sino-Japanese numbers that sit in front of a regular counter.
  var NUM = { 1:'いち', 2:'に', 3:'さん', 4:'よん', 5:'ご',
              6:'ろく', 7:'なな', 8:'はち', 9:'きゅう', 10:'じゅう' };
  var KANJI_NUM = { 1:'一', 2:'二', 3:'三', 4:'四', 5:'五',
                    6:'六', 7:'七', 8:'八', 9:'九', 10:'十',
                    11:'十一', 12:'十二' };

  // The teens, kept apart from NUM on purpose. NUM is what the Date Dojo reads
  // to build its plain-number answers, and that drill runs 1–10; widening NUM
  // would quietly widen the drill too. Only the grid needs these, and only for
  // the one counter that runs past ten (月).
  var NUM_HI = { 11:'じゅういち', 12:'じゅうに' };

  var GROUPS = [
    { id: 'things',  label: T('Everyday things', 'Alltagsdinge', 'Objets du quotidien', '日常物品') },
    { id: 'living',  label: T('People and animals', 'Menschen und Tiere', 'Personnes et animaux', '人和动物') },
    { id: 'time',    label: T('Time and frequency', 'Zeit und Häufigkeit', 'Temps et fréquence', '时间和次数') },
    { id: 'duration', label: T('How long it lasts', 'Wie lange etwas dauert', 'Combien de temps ça dure', '持续多久') },
    { id: 'order',   label: T('Places and order', 'Orte und Reihenfolge', 'Lieux et ordre', '位置和顺序') }
  ];

  var COUNTERS = [
    {
      k: 'つ', base: '', group: 'things',
      what: T('general counter, 1–10', 'Allzweckzähler, 1–10', 'compteur général, 1–10', '通用量词，1–10'),
      eg: [
        { jp: 'りんご{みっつ}', g: T('three apples', 'drei Äpfel', 'trois pommes', '三个苹果') },
        { jp: 'いす{ふたつ}', g: T('two chairs', 'zwei Stühle', 'deux chaises', '两把椅子') }
      ],
      all: { 1:'ひとつ', 2:'ふたつ', 3:'みっつ', 4:'よっつ', 5:'いつつ',
             6:'むっつ', 7:'ななつ', 8:'やっつ', 9:'ここのつ', 10:'とお' },
      ask: 'いくつ', askForm: 'いくつ',
      rule: T('A series of its own — no number in front, and it stops at とお. Reach for it when you do not know the right counter; for objects it is almost never wrong.',
              'Eine eigene Reihe — keine Zahl davor, und sie endet bei とお. Greifen Sie darauf zurück, wenn Sie den richtigen Zähler nicht kennen; bei Gegenständen ist er fast nie falsch.',
              'Une série à part — aucun nombre devant, et elle s’arrête à とお. Utilisez-la quand vous ne connaissez pas le bon compteur ; pour les objets, elle est presque toujours acceptable.',
              '自成一套 — 前面不加数字，到 とお 为止。不知道该用哪个量词时就用它；数物品几乎不会错。'),
      note: T('From eleven on you switch to the Sino-Japanese numbers: 十一、十二…',
              'Ab elf wechselt man zu den sinojapanischen Zahlen: 十一、十二…',
              'À partir de onze, on passe aux nombres sino-japonais : 十一、十二…',
              '从十一开始改用汉语数词：十一、十二…')
    },
    {
      k: '個', base: 'こ', group: 'things',
      what: T('small, roundish things', 'kleine, runde Dinge', 'petits objets ronds', '小而圆的东西'),
      // used by the Date Dojo to build a sentence: りんごが三個あります
      dojo: { noun: 'りんご', nounKana: 'りんご', nounEn: 'apples', animate: false },
      eg: [
        { jp: 'たまご{三個}', g: T('three eggs', 'drei Eier', 'trois œufs', '三个鸡蛋') },
        { jp: 'おにぎり{一個}', g: T('one rice ball', 'ein Reisball', 'une boulette de riz', '一个饭团') }
      ],
      irr: { 1:'いっこ', 6:'ろっこ', 8:'はっこ', 10:'じゅっこ' }, ask: 'なんこ',
      rule: T('A k- counter: the number doubles the consonant after {1, 6, 8, 10}. Nothing happens at 3.',
              'Ein k-Zähler: Die Zahl verdoppelt den Konsonanten nach {1, 6, 8, 10}. Bei 3 passiert nichts.',
              'Compteur en k- : le nombre double la consonne après {1, 6, 8, 10}. Rien ne change à 3.',
              'k 开头的量词：在 {1、6、8、10} 后辅音变促音。3 不变。')
    },
    {
      k: '本', base: 'ほん', group: 'things',
      what: T('long, thin things', 'lange, dünne Dinge', 'objets longs et fins', '细长的东西'),
      // used by the Date Dojo to build a sentence: 鉛筆が三本あります
      dojo: { noun: '鉛筆', nounKana: 'えんぴつ', nounEn: 'pencils', animate: false },
      eg: [
        { jp: '鉛筆{二本}', g: T('two pencils', 'zwei Bleistifte', 'deux crayons', '两支铅笔') },
        { jp: 'ビール{一本}', g: T('a bottle of beer', 'eine Flasche Bier', 'une bouteille de bière', '一瓶啤酒') }
      ],
      irr: { 1:'いっぽん', 3:'さんぼん', 6:'ろっぽん', 8:'はっぽん', 10:'じゅっぽん' }, ask: 'なんぼん',
      rule: T('An h- counter: {ほ → ぽ} after 1, 6, 8, 10, and {ほ → ぼ} after 3 — and after 何.',
              'Ein h-Zähler: {ほ → ぽ} nach 1, 6, 8, 10 und {ほ → ぼ} nach 3 — und nach 何.',
              'Compteur en h- : {ほ → ぽ} après 1, 6, 8, 10, et {ほ → ぼ} après 3 — et après 何.',
              'h 开头的量词：1、6、8、10 后 {ほ → ぽ}，3 后 {ほ → ぼ}，何 后也一样。'),
      note: T('Also used for films, phone calls and train services — anything that runs in a line.',
              'Auch für Filme, Telefonate und Zugverbindungen — alles, was in einer Linie verläuft.',
              'Sert aussi pour les films, les appels et les trains — tout ce qui se déroule en ligne.',
              '也用于电影、电话和班次 — 凡是“一条线”进行的事物。')
    },
    {
      k: '枚', base: 'まい', group: 'things',
      what: T('flat, thin things', 'flache, dünne Dinge', 'objets plats et fins', '扁平的东西'),
      // used by the Date Dojo to build a sentence: 紙が三枚あります
      dojo: { noun: '紙', nounKana: 'かみ', nounEn: 'sheets of paper', animate: false },
      eg: [
        { jp: '紙{五枚}', g: T('five sheets of paper', 'fünf Blatt Papier', 'cinq feuilles de papier', '五张纸') },
        { jp: 'シャツ{二枚}', g: T('two shirts', 'zwei Hemden', 'deux chemises', '两件衬衫') }
      ],
      irr: {}, ask: 'なんまい',
      rule: T('Completely regular — number + {まい}, every time. One of the easiest counters there is.',
              'Völlig regelmäßig — Zahl + {まい}, jedes Mal. Einer der einfachsten Zähler überhaupt.',
              'Parfaitement régulier — nombre + {まい}, à chaque fois. L’un des compteurs les plus simples.',
              '完全规则 — 数字 + {まい}，从不变化。最好记的量词之一。')
    },
    {
      k: '冊', base: 'さつ', group: 'things',
      what: T('bound things', 'gebundene Dinge', 'objets reliés', '装订成册的东西'),
      // used by the Date Dojo to build a sentence: 本が三冊あります
      dojo: { noun: '本', nounKana: 'ほん', nounEn: 'books', animate: false },
      eg: [
        { jp: '本{三冊}', g: T('three books', 'drei Bücher', 'trois livres', '三本书') },
        { jp: 'ノート{一冊}', g: T('one notebook', 'ein Heft', 'un cahier', '一本笔记本') }
      ],
      irr: { 1:'いっさつ', 8:'はっさつ', 10:'じゅっさつ' }, ask: 'なんさつ',
      rule: T('An s- counter: the consonant doubles after {1, 8, 10}. Nothing happens at 3 or 6.',
              'Ein s-Zähler: Der Konsonant verdoppelt sich nach {1, 8, 10}. Bei 3 und 6 passiert nichts.',
              'Compteur en s- : la consonne double après {1, 8, 10}. Rien à 3 ni à 6.',
              's 开头的量词：{1、8、10} 后辅音变促音。3 和 6 不变。')
    },
    {
      k: '台', base: 'だい', group: 'things',
      what: T('machines and vehicles', 'Maschinen und Fahrzeuge', 'machines et véhicules', '机器和车辆'),
      // used by the Date Dojo to build a sentence: 車が三台あります
      dojo: { noun: '車', nounKana: 'くるま', nounEn: 'cars', animate: false },
      eg: [
        { jp: '車{二台}', g: T('two cars', 'zwei Autos', 'deux voitures', '两辆车') },
        { jp: 'パソコン{一台}', g: T('one computer', 'ein Computer', 'un ordinateur', '一台电脑') }
      ],
      irr: {}, ask: 'なんだい',
      rule: T('Regular throughout — {だ} already starts voiced, so there is nothing left to change.',
              'Durchgehend regelmäßig — {だ} ist bereits stimmhaft, es bleibt nichts zu ändern.',
              'Régulier partout — {だ} est déjà voisé, il n’y a plus rien à changer.',
              '全部规则 — {だ} 本来就是浊音，无从再变。')
    },
    {
      k: '杯', base: 'はい', group: 'things',
      what: T('cupfuls and glassfuls', 'Tassen und Gläser voll', 'tasses et verres', '杯'),
      // used by the Date Dojo to build a sentence: コーヒーが三杯あります
      dojo: { noun: 'コーヒー', nounKana: 'コーヒー', nounEn: 'cups of coffee', animate: false },
      eg: [
        { jp: 'コーヒー{一杯}', g: T('a cup of coffee', 'eine Tasse Kaffee', 'une tasse de café', '一杯咖啡') },
        { jp: 'ビール{三杯}', g: T('three glasses of beer', 'drei Gläser Bier', 'trois verres de bière', '三杯啤酒') }
      ],
      irr: { 1:'いっぱい', 3:'さんばい', 6:'ろっぱい', 8:'はっぱい', 10:'じゅっぱい' }, ask: 'なんばい',
      rule: T('The same h- pattern as 本: {は → ぱ} after 1, 6, 8, 10, and {は → ば} after 3.',
              'Dasselbe h-Muster wie bei 本: {は → ぱ} nach 1, 6, 8, 10 und {は → ば} nach 3.',
              'Le même schéma en h- que 本 : {は → ぱ} après 1, 6, 8, 10, et {は → ば} après 3.',
              '与 本 相同的 h 模式：1、6、8、10 后 {は → ぱ}，3 后 {は → ば}。'),
      note: T('Counts what is in the cup, not the cup itself — an empty cup is 個.',
              'Zählt den Inhalt, nicht die Tasse — eine leere Tasse ist 個.',
              'Compte le contenu, pas la tasse — une tasse vide se compte avec 個.',
              '数的是杯中之物，不是杯子 — 空杯子用 個。')
    },
    {
      k: '軒', base: 'けん', group: 'things',
      what: T('houses and shops', 'Häuser und Läden', 'maisons et boutiques', '房屋和店铺'),
      eg: [
        { jp: '家{二軒}', g: T('two houses', 'zwei Häuser', 'deux maisons', '两栋房子') },
        { jp: '店{三軒}', g: T('three shops', 'drei Läden', 'trois boutiques', '三家店') }
      ],
      irr: { 1:'いっけん', 3:'さんげん', 6:'ろっけん', 8:'はっけん', 10:'じゅっけん' }, ask: 'なんげん',
      rule: T('A k- counter that also voices at 3: {さんげん}, not さんけん. Watch that one.',
              'Ein k-Zähler, der bei 3 zusätzlich stimmhaft wird: {さんげん}, nicht さんけん. Darauf achten.',
              'Compteur en k- qui se voise aussi à 3 : {さんげん}, pas さんけん. Attention à celui-là.',
              'k 开头，且在 3 后浊化：{さんげん}，不是 さんけん。要特别记住。')
    },
    {
      k: '足', base: 'そく', group: 'things',
      what: T('pairs of footwear', 'Paar Schuhe', 'paires de chaussures', '双（鞋袜）'),
      eg: [
        { jp: '靴{一足}', g: T('a pair of shoes', 'ein Paar Schuhe', 'une paire de chaussures', '一双鞋') },
        { jp: '靴下{三足}', g: T('three pairs of socks', 'drei Paar Socken', 'trois paires de chaussettes', '三双袜子') }
      ],
      irr: { 1:'いっそく', 3:'さんぞく', 8:'はっそく', 10:'じゅっそく' }, ask: 'なんぞく',
      rule: T('Counts the pair, never the single shoe. Doubles after {1, 8, 10} and voices to {ぞ} after 3.',
              'Zählt das Paar, nie den einzelnen Schuh. Verdoppelt nach {1, 8, 10} und wird nach 3 zu {ぞ}.',
              'Compte la paire, jamais la chaussure seule. Double après {1, 8, 10} et se voise en {ぞ} après 3.',
              '数的是一双，不是一只。{1、8、10} 后变促音，3 后浊化为 {ぞ}。')
    },
    {
      k: '着', base: 'ちゃく', group: 'things',
      what: T('suits and outfits', 'Anzüge und Outfits', 'costumes et tenues', '套（衣服）'),
      eg: [
        { jp: 'スーツ{一着}', g: T('one suit', 'ein Anzug', 'un costume', '一套西装') },
        { jp: '着物{二着}', g: T('two kimono', 'zwei Kimono', 'deux kimonos', '两件和服') }
      ],
      irr: { 1:'いっちゃく', 8:'はっちゃく', 10:'じゅっちゃく' }, ask: 'なんちゃく',
      rule: T('For clothing worn as a whole outfit. A shirt on its own takes {枚}.',
              'Für Kleidung, die als ganzes Outfit getragen wird. Ein einzelnes Hemd nimmt {枚}.',
              'Pour un vêtement porté comme tenue complète. Une chemise seule prend {枚}.',
              '用于成套穿着的衣物。单件衬衫用 {枚}。')
    },

    {
      k: '人', base: 'にん', group: 'living',
      what: T('people', 'Menschen', 'personnes', '人'),
      // used by the Date Dojo to build a sentence: 学生が三人あります
      dojo: { noun: '学生', nounKana: 'がくせい', nounEn: 'students', animate: true },
      eg: [
        { jp: '学生{三人}', g: T('three students', 'drei Studierende', 'trois étudiants', '三名学生') },
        { jp: '{一人}で', g: T('by myself, alone', 'allein', 'tout seul', '独自一人') }
      ],
      irr: { 1:'ひとり', 2:'ふたり', 4:'よにん', 7:'しちにん' }, ask: 'なんにん',
      rule: T('One and two break the pattern completely — {ひとり} and {ふたり} come from the native series. From three on it is regular apart from {よにん}.',
              'Eins und zwei fallen ganz aus dem Muster — {ひとり} und {ふたり} stammen aus der japanischen Reihe. Ab drei ist alles regelmäßig außer {よにん}.',
              'Un et deux sortent complètement du schéma — {ひとり} et {ふたり} viennent de la série japonaise. À partir de trois, tout est régulier sauf {よにん}.',
              '一和二完全不规则 — {ひとり} 和 {ふたり} 来自和语数词。三以后除 {よにん} 外都规则。'),
      note: T('七人 is usually しちにん, though ななにん is also heard.',
              '七人 ist meist しちにん, ななにん kommt aber ebenfalls vor.',
              '七人 se dit surtout しちにん, mais ななにん s’entend aussi.',
              '七人 多读 しちにん，也能听到 ななにん。')
    },
    {
      k: '匹', base: 'ひき', group: 'living',
      what: T('small animals', 'kleine Tiere', 'petits animaux', '小动物'),
      // used by the Date Dojo to build a sentence: 猫が三匹あります
      dojo: { noun: '猫', nounKana: 'ねこ', nounEn: 'cats', animate: true },
      eg: [
        { jp: '猫{二匹}', g: T('two cats', 'zwei Katzen', 'deux chats', '两只猫') },
        { jp: '魚{三匹}', g: T('three fish', 'drei Fische', 'trois poissons', '三条鱼') }
      ],
      irr: { 1:'いっぴき', 3:'さんびき', 6:'ろっぴき', 8:'はっぴき', 10:'じゅっぴき' }, ask: 'なんびき',
      rule: T('The h- pattern again: {ひ → ぴ} after 1, 6, 8, 10, and {ひ → び} after 3.',
              'Wieder das h-Muster: {ひ → ぴ} nach 1, 6, 8, 10 und {ひ → び} nach 3.',
              'Encore le schéma en h- : {ひ → ぴ} après 1, 6, 8, 10, et {ひ → び} après 3.',
              '又是 h 模式：1、6、8、10 后 {ひ → ぴ}，3 后 {ひ → び}。'),
      note: T('Roughly, anything you could pick up. A horse or a cow takes 頭 instead.',
              'Grob: alles, was man hochheben könnte. Pferd oder Kuh nehmen stattdessen 頭.',
              'En gros, tout ce qu’on pourrait soulever. Un cheval ou une vache prennent 頭.',
              '大致是抱得起来的动物。马、牛则用 頭。')
    },
    {
      k: '頭', base: 'とう', group: 'living',
      what: T('large animals', 'große Tiere', 'grands animaux', '大型动物'),
      eg: [
        { jp: '牛{二頭}', g: T('two cows', 'zwei Kühe', 'deux vaches', '两头牛') },
        { jp: 'ぞう{一頭}', g: T('one elephant', 'ein Elefant', 'un éléphant', '一头大象') }
      ],
      irr: { 1:'いっとう', 8:'はっとう', 10:'じゅっとう' }, ask: 'なんとう',
      rule: T('Roughly, animals bigger than you. A t- counter, so it doubles after {1, 8, 10}.',
              'Grob: Tiere, die größer sind als Sie. Ein t-Zähler, verdoppelt also nach {1, 8, 10}.',
              'En gros, les animaux plus grands que vous. Compteur en t-, il double donc après {1, 8, 10}.',
              '大致是比人还大的动物。t 开头，{1、8、10} 后变促音。')
    },

    {
      k: '回', base: 'かい', group: 'time',
      what: T('times, occurrences', 'Male, Vorkommen', 'fois, occurrences', '次'),
      eg: [
        { jp: '週に{三回}', g: T('three times a week', 'dreimal pro Woche', 'trois fois par semaine', '一周三次') },
        { jp: 'もう{一回}', g: T('one more time', 'noch einmal', 'encore une fois', '再来一次') }
      ],
      irr: { 1:'いっかい', 6:'ろっかい', 8:'はっかい', 10:'じゅっかい' }, ask: 'なんかい',
      rule: T('A k- counter, doubling after {1, 6, 8, 10}. Unlike 階 it never voices at 3.',
              'Ein k-Zähler, verdoppelt nach {1, 6, 8, 10}. Anders als 階 wird er bei 3 nie stimmhaft.',
              'Compteur en k-, qui double après {1, 6, 8, 10}. Contrairement à 階, il ne se voise jamais à 3.',
              'k 开头，{1、6、8、10} 后变促音。与 階 不同，3 后从不浊化。')
    },
    {
      k: '歳', base: 'さい', group: 'time',
      what: T('years of age', 'Lebensjahre', 'ans (âge)', '岁'),
      eg: [
        { jp: '{五歳}です', g: T('I am five years old', 'Ich bin fünf Jahre alt', 'J’ai cinq ans', '我五岁') },
        { jp: '{二十歳}', g: T('twenty (read はたち)', 'zwanzig (gelesen はたち)', 'vingt (lu はたち)', '二十岁（读 はたち）') }
      ],
      irr: { 1:'いっさい', 8:'はっさい', 10:'じゅっさい' }, ask: 'なんさい',
      rule: T('An s- counter: doubles after {1, 8, 10}.',
              'Ein s-Zähler: verdoppelt nach {1, 8, 10}.',
              'Compteur en s- : double après {1, 8, 10}.',
              's 开头：{1、8、10} 后变促音。'),
      note: T('二十歳 is read はたち, not にじゅっさい. Often written 才 on forms.',
              '二十歳 wird はたち gelesen, nicht にじゅっさい. Auf Formularen oft 才 geschrieben.',
              '二十歳 se lit はたち, pas にじゅっさい. Souvent écrit 才 sur les formulaires.',
              '二十歳 读作 はたち，不读 にじゅっさい。表格上常写作 才。')
    },
    {
      k: '時', base: 'じ', group: 'time',
      what: T("o'clock", 'Uhr (Uhrzeit)', 'heures (horaire)', '点钟'),
      eg: [
        { jp: '{四時}に', g: T('at four', 'um vier', 'à quatre heures', '四点') },
        { jp: '{九時}から', g: T('from nine', 'ab neun', 'à partir de neuf heures', '从九点起') }
      ],
      irr: { 4:'よじ', 7:'しちじ', 9:'くじ' }, ask: 'なんじ',
      rule: T('Three fixed readings to learn: {よじ、しちじ、くじ}. Never よんじ, ななじ or きゅうじ.',
              'Drei feste Lesungen zu lernen: {よじ、しちじ、くじ}. Niemals よんじ, ななじ oder きゅうじ.',
              'Trois lectures fixes à apprendre : {よじ、しちじ、くじ}. Jamais よんじ, ななじ ni きゅうじ.',
              '三个固定读法要记：{よじ、しちじ、くじ}。绝不说 よんじ、ななじ、きゅうじ。')
    },
    {
      k: '分', base: 'ふん', group: 'time',
      what: T('minutes', 'Minuten', 'minutes', '分钟'),
      eg: [
        { jp: '{五分}ぐらい', g: T('about five minutes', 'etwa fünf Minuten', 'environ cinq minutes', '大约五分钟') },
        { jp: '{十分}後', g: T('in ten minutes', 'in zehn Minuten', 'dans dix minutes', '十分钟后') }
      ],
      irr: { 1:'いっぷん', 3:'さんぷん', 4:'よんぷん', 6:'ろっぷん', 8:'はっぷん', 10:'じゅっぷん' }, ask: 'なんぷん',
      rule: T('The messiest counter here: {ふ → ぷ} after 1, 3, 4, 6, 8 and 10. Only 2, 5, 7 and 9 stay {ふん}.',
              'Der unregelmäßigste Zähler hier: {ふ → ぷ} nach 1, 3, 4, 6, 8 und 10. Nur 2, 5, 7 und 9 bleiben {ふん}.',
              'Le compteur le plus irrégulier d’ici : {ふ → ぷ} après 1, 3, 4, 6, 8 et 10. Seuls 2, 5, 7 et 9 gardent {ふん}.',
              '本页最不规则的量词：1、3、4、6、8、10 后 {ふ → ぷ}。只有 2、5、7、9 保持 {ふん}。')
    },
    {
      // The one counter that runs past ten, hence `max`. 11 and 12 are
      // perfectly regular, so they are built from NUM_HI like any other cell.
      k: '月', base: 'がつ', group: 'time', max: 12,
      what: T('months of the year', 'Monate des Jahres', 'mois de l’année', '月份'),
      eg: [
        { jp: '{四月}から', g: T('from April', 'ab April', 'à partir d’avril', '从四月起') },
        { jp: '{七月}七日', g: T('the seventh of July', 'der siebte Juli', 'le sept juillet', '七月七日') }
      ],
      irr: { 4:'しがつ', 7:'しちがつ', 9:'くがつ' }, ask: 'なんがつ', askForm: '何月',
      rule: T('Month names rather than a count — the number only labels the month. Three break the pattern: {しがつ}, {しちがつ} and {くがつ}, never よんがつ, ながつ or きゅうがつ.',
              'Monatsnamen, keine Anzahl — die Zahl benennt nur den Monat. Drei fallen aus dem Muster: {しがつ}, {しちがつ} und {くがつ}, niemals よんがつ, ながつ oder きゅうがつ.',
              'Des noms de mois, pas un décompte — le nombre ne fait que désigner le mois. Trois sortent du schéma : {しがつ}, {しちがつ} et {くがつ}, jamais よんがつ, ながつ ni きゅうがつ.',
              '这是月份名称，不是数量 — 数字只是给月份命名。三个例外：{しがつ}、{しちがつ}、{くがつ}，绝不说 よんがつ、ながつ、きゅうがつ。'),
      note: T('Not to be confused with か月, which counts months: 三月 is March, 三か月 is three months long. 何月 asks which month, 何か月 asks how many.',
              'Nicht mit か月 verwechseln, das Monate zählt: 三月 ist der März, 三か月 sind drei Monate. 何月 fragt nach welchem Monat, 何か月 nach wie vielen.',
              'À ne pas confondre avec か月, qui compte les mois : 三月 c’est mars, 三か月 c’est une durée de trois mois. 何月 demande quel mois, 何か月 combien.',
              '不要与计数的 か月 混淆：三月 是三月份，三か月 是三个月。何月 问几月，何か月 问几个月。')
    },

    {
      k: '日', base: 'にち', group: 'duration',
      what: T('days', 'Tage', 'jours', '天、日'),
      eg: [
        { jp: '{三日}かかる', g: T('it takes three days', 'es dauert drei Tage', 'cela prend trois jours', '要花三天') },
        { jp: '{八日}に', g: T('on the eighth', 'am achten', 'le huit', '八号') }
      ],
      all: { 1:'ついたち', 2:'ふつか', 3:'みっか', 4:'よっか', 5:'いつか',
             6:'むいか', 7:'なのか', 8:'ようか', 9:'ここのか', 10:'とおか' },
      // Past ten the days are regular with three exceptions, and はつか is the
      // one that catches everybody. `extra` puts them in the grid as their own
      // cells rather than stretching it to twenty-four mostly-regular ones.
      extra: [
        { n: 14, form: '十四日', read: 'じゅうよっか' },
        { n: 20, form: '二十日', read: 'はつか' },
        { n: 24, form: '二十四日', read: 'にじゅうよっか' }
      ],
      ask: 'なんにち', askForm: '何日',
      rule: T('Days 1–10 use the native series and have to be learned as words. From 11 on it is regular: {じゅういちにち}.',
              'Die Tage 1–10 folgen der japanischen Reihe und müssen als Wörter gelernt werden. Ab 11 ist es regelmäßig: {じゅういちにち}.',
              'Les jours 1 à 10 suivent la série japonaise et s’apprennent comme des mots. À partir de 11, c’est régulier : {じゅういちにち}.',
              '1–10 日使用和语数词，须当作单词记。从 11 起规则：{じゅういちにち}。'),
      note: T('一日 is ついたち for the first of the month, but いちにち when you mean "one day". Past ten a few keep the native reading — 十四日, 二十日 and 二十四日 are in the grid. Add 〜間 to make it a stretch of time: 三日間, three days long.',
              '一日 ist ついたち für den Monatsersten, aber いちにち, wenn „ein Tag“ gemeint ist. Über zehn hinaus behalten einige die japanische Lesung — 十四日, 二十日 und 二十四日 stehen im Raster. Mit 〜間 wird ein Zeitraum daraus: 三日間, drei Tage lang.',
              '一日 se lit ついたち pour le premier du mois, mais いちにち au sens de « une journée ». Au-delà de dix, quelques-uns gardent la lecture japonaise — 十四日, 二十日 et 二十四日 figurent dans la grille. Ajoutez 〜間 pour en faire une durée : 三日間, pendant trois jours.',
              '一日 指“一号”时读 ついたち，指“一天”时读 いちにち。十以后仍有几个保留和语读音 — 表格中的 十四日、二十日、二十四日。加 〜間 表示时长：三日間，为期三天。')
    },

    {
      k: '秒', base: 'びょう', group: 'duration',
      what: T('seconds', 'Sekunden', 'secondes', '秒'),
      eg: [
        { jp: '{三十秒}待って', g: T('wait thirty seconds', 'warte dreißig Sekunden', 'attends trente secondes', '等三十秒') },
        { jp: 'あと{十秒}', g: T('ten seconds to go', 'noch zehn Sekunden', 'encore dix secondes', '还有十秒') }
      ],
      irr: {}, ask: 'なんびょう',
      rule: T('Regular all the way through — number + {びょう}. Rare among the time counters in having nothing to learn.',
              'Durchgehend regelmäßig — Zahl + {びょう}. Unter den Zeitzählern selten: Es gibt nichts zu lernen.',
              'Régulier de bout en bout — nombre + {びょう}. Rare parmi les compteurs de temps : rien à apprendre.',
              '从头到尾都规则 — 数字 + {びょう}。在时间量词里少见地毫无例外。')
    },
    {
      k: '時間', base: 'じかん', group: 'duration',
      what: T('hours (how long)', 'Stunden (Dauer)', 'heures (durée)', '小时（时长）'),
      eg: [
        { jp: '{三時間}かかる', g: T('it takes three hours', 'es dauert drei Stunden', 'cela prend trois heures', '要三个小时') },
        { jp: '{四時間}ねた', g: T('slept for four hours', 'vier Stunden geschlafen', 'j’ai dormi quatre heures', '睡了四个小时') }
      ],
      irr: { 4:'よじかん' }, ask: 'なんじかん',
      rule: T('Almost regular — only 4 is fixed: {よじかん}, never よんじかん.',
              'Fast regelmäßig — nur die 4 ist festgelegt: {よじかん}, niemals よんじかん.',
              'Presque régulier — seul le 4 est fixe : {よじかん}, jamais よんじかん.',
              '几乎规则 — 只有 4 是固定的：{よじかん}，绝不说 よんじかん。'),
      note: T('Do not confuse it with 時 on its own, which is a point on the clock: 四時 is four o’clock, 四時間 is four hours long. 7 and 9 accept either しち／なな and く／きゅう.',
              'Nicht mit dem bloßen 時 verwechseln, das einen Zeitpunkt angibt: 四時 ist vier Uhr, 四時間 sind vier Stunden. Bei 7 und 9 sind しち／なな bzw. く／きゅう beide möglich.',
              'À ne pas confondre avec 時 seul, qui indique une heure précise : 四時 c’est quatre heures, 四時間 c’est une durée de quatre heures. À 7 et 9, しち／なな et く／きゅう sont tous deux admis.',
              '不要与单独的 時 混淆：四時 是四点钟，四時間 是四个小时。7 和 9 可读 しち／なな、く／きゅう。')
    },
    {
      k: '週間', base: 'しゅうかん', group: 'duration',
      what: T('weeks', 'Wochen', 'semaines', '周'),
      eg: [
        { jp: '{一週間}に一回', g: T('once a week', 'einmal pro Woche', 'une fois par semaine', '一周一次') },
        { jp: '{二週間}後', g: T('two weeks later', 'zwei Wochen später', 'deux semaines plus tard', '两周后') }
      ],
      irr: { 1:'いっしゅうかん', 8:'はっしゅうかん', 10:'じゅっしゅうかん' }, ask: 'なんしゅうかん',
      rule: T('An s- counter like 冊: doubles after {1, 8, 10} and leaves 3 and 6 alone.',
              'Ein s-Zähler wie 冊: verdoppelt nach {1, 8, 10}, 3 und 6 bleiben unverändert.',
              'Compteur en s- comme 冊 : double après {1, 8, 10}, et laisse 3 et 6 tranquilles.',
              '和 冊 一样是 s 开头：{1、8、10} 后变促音，3 和 6 不变。')
    },
    {
      k: 'か月', base: 'かげつ', group: 'duration',
      what: T('months', 'Monate', 'mois', '个月'),
      eg: [
        { jp: '{三か月}前', g: T('three months ago', 'vor drei Monaten', 'il y a trois mois', '三个月前') },
        { jp: '{六か月}かかった', g: T('it took six months', 'es hat sechs Monate gedauert', 'cela a pris six mois', '花了六个月') }
      ],
      irr: { 1:'いっかげつ', 6:'ろっかげつ', 8:'はっかげつ', 10:'じゅっかげつ' }, ask: 'なんかげつ',
      rule: T('A k- counter: doubles after {1, 6, 8, 10} — the same shape as 個 and 回.',
              'Ein k-Zähler: verdoppelt nach {1, 6, 8, 10} — dasselbe Muster wie bei 個 und 回.',
              'Compteur en k- : double après {1, 6, 8, 10} — le même schéma que 個 et 回.',
              'k 开头：{1、6、8、10} 后变促音 — 与 個、回 同型。'),
      note: T('Written か月, ヶ月 or 箇月 — all read かげつ. 何月 with no か is a different question: which month, not how many.',
              'Geschrieben か月, ヶ月 oder 箇月 — alle werden かげつ gelesen. 何月 ohne か fragt etwas anderes: welcher Monat, nicht wie viele.',
              'Écrit か月, ヶ月 ou 箇月 — tous se lisent かげつ. 何月 sans か pose une autre question : quel mois, et non combien.',
              '写作 か月、ヶ月 或 箇月，都读 かげつ。不带 か 的 何月 问的是“几月”，不是“几个月”。')
    },
    {
      k: '年', base: 'ねん', group: 'duration',
      what: T('years', 'Jahre', 'ans, années', '年'),
      eg: [
        { jp: '{三年}住んだ', g: T('lived there three years', 'drei Jahre dort gewohnt', 'j’y ai vécu trois ans', '住了三年') },
        { jp: '{四年}かかる', g: T('it takes four years', 'es dauert vier Jahre', 'cela prend quatre ans', '要四年') }
      ],
      irr: { 4:'よねん' }, ask: 'なんねん',
      rule: T('Almost regular — 4 is {よねん}, never よんねん. The same trap as 時間 and 人.',
              'Fast regelmäßig — die 4 ist {よねん}, niemals よんねん. Dieselbe Falle wie bei 時間 und 人.',
              'Presque régulier — le 4 est {よねん}, jamais よんねん. Le même piège que 時間 et 人.',
              '几乎规则 — 4 是 {よねん}，绝不说 よんねん。和 時間、人 是同一个陷阱。'),
      note: T('For a stretch of time you can also say 年間 — 三年間, three years long. Calendar years are perfectly regular: 1995年 is せんきゅうひゃくきゅうじゅうごねん.',
              'Für einen Zeitraum kann man auch 年間 sagen — 三年間, drei Jahre lang. Kalenderjahre sind völlig regelmäßig: 1995年 ist せんきゅうひゃくきゅうじゅうごねん.',
              'Pour une durée on peut aussi dire 年間 — 三年間, pendant trois ans. Les années du calendrier sont parfaitement régulières : 1995年 se lit せんきゅうひゃくきゅうじゅうごねん.',
              '表示时间跨度也可说 年間 — 三年間，长达三年。历法年份完全规则：1995年 读作 せんきゅうひゃくきゅうじゅうごねん。')
    },

    {
      k: '階', base: 'かい', group: 'order',
      what: T('floors of a building', 'Stockwerke', 'étages', '层、楼'),
      eg: [
        { jp: '{三階}です', g: T('it is on the third floor', 'es ist im dritten Stock', 'c’est au troisième étage', '在三楼') },
        { jp: '地下{一階}', g: T('first basement level', 'erstes Untergeschoss', 'premier sous-sol', '地下一层') }
      ],
      irr: { 1:'いっかい', 3:'さんがい', 6:'ろっかい', 8:'はっかい', 10:'じゅっかい' }, ask: 'なんがい',
      rule: T('Identical to 回 except at 3, where it voices: {さんがい}. That one difference is the whole trap.',
              'Identisch mit 回, außer bei 3, wo es stimmhaft wird: {さんがい}. Dieser eine Unterschied ist die ganze Falle.',
              'Identique à 回 sauf à 3, où il se voise : {さんがい}. Toute la difficulté tient à cette seule différence.',
              '与 回 完全相同，只有 3 浊化为 {さんがい}。整个陷阱就在这一处。')
    },
    {
      k: '番', base: 'ばん', group: 'order',
      what: T('number in a sequence', 'Nummer in einer Reihenfolge', 'numéro dans un ordre', '号、第…'),
      eg: [
        { jp: '{一番}いい', g: T('the best', 'am besten', 'le meilleur', '最好') },
        { jp: '{三番}ホーム', g: T('platform three', 'Gleis drei', 'voie trois', '三号站台') }
      ],
      irr: {}, ask: 'なんばん',
      rule: T('Regular throughout. {一番} in front of an adjective makes a superlative — 一番高い, the most expensive.',
              'Durchgehend regelmäßig. {一番} vor einem Adjektiv bildet den Superlativ — 一番高い, am teuersten.',
              'Régulier partout. {一番} devant un adjectif forme le superlatif — 一番高い, le plus cher.',
              '全部规则。{一番} 放在形容词前构成最高级 — 一番高い，最贵的。')
    }
  ];

  return { NUM: NUM, NUM_HI: NUM_HI, KANJI_NUM: KANJI_NUM,
           GROUPS: GROUPS, COUNTERS: COUNTERS };
})();
