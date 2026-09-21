import sqlite3, json, gzip, os, re
from collections import defaultdict
c = sqlite3.connect('jamdict.db'); c.row_factory = sqlite3.Row

common = {r[0] for r in c.execute('''
  select distinct idseq from (
    select k.idseq from Kanji k join KJP p on p.kid=k.ID
    union select n.idseq from Kana n join KNP p on p.kid=n.ID)''')}
print('common entries:', len(common))

kanji, kana = defaultdict(list), defaultdict(list)
for r in c.execute('select idseq,text from Kanji order by ID'):
    if r[0] in common: kanji[r[0]].append(r[1])
for r in c.execute('select idseq,text from Kana order by ID'):
    if r[0] in common: kana[r[0]].append(r[1])

prio = defaultdict(set)
for r in c.execute('select k.idseq,p.text from Kanji k join KJP p on p.kid=k.ID'):
    prio[r[0]].add(r[1])
for r in c.execute('select n.idseq,p.text from Kana n join KNP p on p.kid=n.ID'):
    prio[r[0]].add(r[1])
# freq(): a learner-weighted frequency score, 0-100ish.
# ichi1 (the 10k most common words in general use) is the best signal for a
# learner dictionary; nfXX is newspaper frequency in bands of 500 and makes a
# good fine tie-break, but on its own it over-rates news vocabulary
# (喫する is nf18, 食べる only nf25).
import re as _re, math as _math
def freq(seq):
    t = prio.get(seq, set())
    s = 0
    # Ichimango — the 10,000 words most used in ordinary life — is the closest
    # thing JMdict has to "what a learner needs", so it carries the most weight.
    if 'ichi1' in t: s += 60
    if 'ichi2' in t: s += 25
    if 'spec1' in t: s += 12
    if 'spec2' in t: s += 6
    # Newspaper prominence, deliberately small. Weighted heavily it promotes
    # exactly the wrong words: 死亡 over 死ぬ for "die", 金銭 over お金 for
    # "money" — true of newsprint, useless to someone learning to speak.
    if 'news1' in t: s += 6
    if 'gai1'  in t: s += 4
    nf = [int(x[2:]) for x in t if _re.fullmatch(r'nf\d\d', x)]
    # nf bands are 500 words wide, so the scale must be logarithmic:
    # nf01 (top 500) is ~10x more frequent than nf11, not 20% more. It is a
    # tie-break between words that are already common, never the main term.
    if nf: s += max(0, round(40 - 9 * _math.log(min(nf))))
    return s

# badge: 2 = very common, 1 = common, 0 = marked but marginal
def rank_of(seq):
    t = prio.get(seq, set())
    if t & {'ichi1', 'news1', 'spec1'}: return 2
    if t & {'ichi2', 'news2', 'spec2', 'gai1'}: return 1
    return 0

sense_of = defaultdict(list)
for r in c.execute('select ID,idseq from Sense order by ID'):
    if r[1] in common: sense_of[r[1]].append(r[0])

glosses = defaultdict(list)
for r in c.execute("select sid,text from SenseGloss where lang='eng' order by rowid"):
    glosses[r[0]].append(r[1])
poss = defaultdict(list)
for r in c.execute('select sid,text from pos order by rowid'):
    poss[r[0]].append(r[1])

# Register. JMdict marks 食う as a male term and 召し上がる as honorific, while
# 食べる carries no marking at all. The first build discarded this, which is why
# a search for "eat" led with the rough word. It is worth keeping twice over:
# it decides the ranking below, and it belongs on screen — "to eat" with no
# warning that it is blunt and masculine is a bad thing to teach.
miscs = defaultdict(list)
for r in c.execute('select sid,text from misc order by rowid'):
    miscs[r[0]].append(r[1])

MISC_LABEL = [
  ('vulgar',                 'vulgar',      -46),
  ('slang',                  'slang',       -40),
  ('derogatory',             'derogatory',  -46),
  ('male term',              'masculine',   -30),
  ('female term',            'feminine',    -30),
  ('colloquialism',          'colloquial',  -22),
  ('familiar language',      'familiar',    -20),
  ("children's language",    "children's",  -22),
  ('archaism',               'archaic',     -44),
  ('obsolete term',          'obsolete',    -46),
  ('obscure term',           'obscure',     -40),
  ('rare term',              'rare',        -38),
  ('rarely-used kanji',      '',              0),
  ('dated term',             'dated',       -34),
  ('honorific or respectful','honorific',   -18),
  ('humble',                 'humble',      -18),
  ('polite (teineigo)',      'polite',        0),
  ('idiomatic expression',   'idiom',        -8),
  ('onomatopoeic',           'onomatopoeic', -6),
  ('abbreviation',           'abbreviation', -14),
  ('yojijukugo',             '',              0),
  ('proverb',                'proverb',     -10),
]
def misc_of(sid):
    """(labels to show, penalty to apply) for one sense."""
    out, pen = [], 0
    for raw in miscs.get(sid, []):
        low = raw.lower()
        for key, label, cost in MISC_LABEL:
            if low.startswith(key):
                if label and label not in out: out.append(label)
                pen = min(pen, cost)      # the harshest marking decides
                break
    return out, pen

MISC, misc_ix = [], {}
def mid(label):
    if label not in misc_ix: misc_ix[label] = len(MISC); MISC.append(label)
    return misc_ix[label]

# shorten the very verbose JMdict POS labels
SHORT = [
 (r'^noun \(common\).*',            'n'),      (r'^adverbial noun.*','n-adv'),
 (r'^noun or participle.*',         'vs-n'),   (r'^noun, used as a suffix','n-suf'),
 (r'^noun, used as a prefix','n-pref'),        (r'^proper noun','n-pr'),
 (r'^Godan verb.*',                 'v5'),     (r'^Ichidan verb.*','v1'),
 (r'^suru verb.*',                  'vs'),     (r'^Kuru verb.*','vk'),
 (r'^intransitive verb',            'vi'),     (r'^transitive verb','vt'),
 (r'^adjective \(keiyoushi\)',      'adj-i'),  (r'^adjectival nouns.*','adj-na'),
 (r"^nouns which may take.*",       'adj-no'), (r'^pre-noun adjectival.*','adj-pn'),
 (r'^adverb.*',                     'adv'),    (r'^expressions? .*','exp'),
 (r'^particle','prt'),   (r'^conjunction','conj'), (r'^interjection.*','int'),
 (r'^pronoun','pn'),     (r'^prefix','pref'),      (r'^suffix','suf'),
 (r'^counter','ctr'),    (r'^numeric','num'),      (r'^auxiliary.*','aux'),
 (r'^unclassified','')
]
def short(p):
    for pat, s in SHORT:
        if re.match(pat, p): return s
    return p
# The labels the site shows. JMdict's own abbreviations (v5, vt, adj-no) are
# written for dictionary editors; these use the words the Forms and Learn pages
# already teach. Interned in one table, so the longer text costs nothing.
LABELS = {
  'v5':'Godan','v1':'Ichidan','vs':'する verb','vk':'来る verb','vs-n':'noun + する',
  'verb unspecified':'verb','su verb - precursor to the modern suru':'archaic す verb',
  'irregular nu verb':'irregular ぬ verb',
  'irregular ru verb, plain form ends with -ri':'irregular る verb',
  'vt':'transitive','vi':'intransitive',
  'adj-i':'い-adj','adj-na':'な-adj','adj-no':'の-adj','adj-pn':'prenominal',
  "'taru' adjective":'たる-adj','noun or verb acting prenominally':'prenominal',
  'n':'noun','n-suf':'noun suffix','n-pref':'noun prefix','adv':'adverb',
  'exp':'expression','prt':'particle','suf':'suffix','pref':'prefix',
  'int':'interjection','pn':'pronoun','ctr':'counter','conj':'conjunction',
  'aux':'auxiliary','num':'number','copula':'copula'
}

POS, pos_ix = [], {}
def pid(p):
    s = short(p)
    s = LABELS.get(s, s)
    if not s: return None
    if s not in pos_ix: pos_ix[s] = len(POS); POS.append(s)
    return pos_ix[s]

# Katsuyo Academy's own vocabulary, verb list and story glossaries — about
# 1,900 headwords. JMdict can say which word is frequent; only this can say
# which word this site's learners have been taught, and for a synonym pair
# (水 / 水分, 本 / 書籍) that is the better question. Re-run this build after
# adding vocabulary so the list stays in step.
TAUGHT = set(json.load(open('taught.json', encoding='utf-8')))
print('taught headwords:', len(TAUGHT))

entries, idx, eidx, escore = [], defaultdict(list), defaultdict(list), {}
def strip_notes(text):
    """Drop parenthetical usage notes, counting brackets so that nested ones
    come out whole. A regex could not: "dog (Canis (lupus) familiaris)" came
    back as "dog familiaris)", so 犬 never matched "dog" exactly and lost the
    word to ワン子."""
    out, depth = [], 0
    for ch in text:
        if ch == '(': depth += 1
        elif ch == ')':
            if depth: depth -= 1
        elif depth == 0:
            out.append(ch)
    return ' '.join(''.join(out).split())

STOP = set('a an the to of for with be is are in on at as by or and not from that this it its one'.split())
for seq in sorted(common):
    ks, ns = kanji.get(seq, []), kana.get(seq, [])
    if not ns: continue
    senses, pens = [], []
    for sid in sense_of.get(seq, []):
        g = glosses.get(sid, [])
        if not g: continue
        p = [x for x in (pid(q) for q in poss.get(sid, [])) if x is not None]
        labels, pen = misc_of(sid)
        senses.append([p, g[:6], [mid(x) for x in labels]])
        pens.append(pen)
    if not senses: continue
    i = len(entries)
    taught = any(w in TAUGHT for w in ks + ns)
    entries.append([ks, ns, senses[:8], rank_of(seq), freq(seq)])
    for w in ks + ns: idx[w].append(i)
    for si, s in enumerate(senses[:4]):
        for gi, g in enumerate(s[1][:4]):
            gl = g.lower().strip()
            base = gl[3:] if gl.startswith('to ') else gl
            # A parenthetical is a usage note, not part of the meaning. Leaving
            # it in meant 来る ("to come (spatially or temporally)") never
            # matched "come" exactly, and lost to verbs that merely list it.
            bare = strip_notes(base)
            for w in re.findall(r"[a-z']+", gl):
                # "go" and "do" are among the first verbs anyone learns; the
                # old floor of three letters made them unsearchable.
                if len(w) < 2 or w in STOP: continue
                # Match quality comes in tiers, set far enough apart that no
                # amount of frequency can lift one tier above another. A gloss
                # of "to come together" does not mean "come", and used to score
                # within a few points of 来る's "to come" — which is how 合う
                # ended up above it.
                if base == w or bare == w:
                    if si == 0:   sc = 400 if gi == 0 else 330
                    elif si == 1: sc = 260
                    else:         sc = 200
                elif bare.startswith(w + ' '):     # phrasal: "come together"
                    sc = 120 - si * 20
                elif gl.startswith(w):
                    sc = 100 - si * 20
                else:                              # merely mentioned somewhere
                    sc = 60 - si * 20

                # Inside a tier the tie-breaks decide: how prominent the gloss
                # is, how concise it is, how common the word is, whether this
                # site teaches it, and whether the sense is register-marked.
                # 食べる beats 食う here: same tier, but only 食う is marked.
                sc += max(0, 6 - gi * 2)
                sc -= min(len(base) // 12, 4)
                sc += freq(seq)
                sc += pens[si] if si < len(pens) else 0
                # The syllabus bonus settles ties between words that are both
                # plain — 本 over 書籍, 家 over 家屋, 行く over 囲碁 ("go", the
                # board game). It does not rescue a register-marked sense,
                # which is what kept 遣る (colloquial) above する.
                if taught: sc += 45 if (si < len(pens) and pens[si] == 0) else 10
                prev = escore.get((w, i))
                if prev is None or sc > prev:
                    escore[(w, i)] = sc

os.makedirs('out', exist_ok=True)
def dump(name, obj):
    s = json.dumps(obj, ensure_ascii=False, separators=(',', ':'))
    open(f'out/{name}', 'w', encoding='utf-8').write(s)
    gz = len(gzip.compress(s.encode()))
    print(f'  {name:22s} {len(s.encode())/1048576:6.2f} MB raw   {gz/1048576:6.2f} MB gzip')
    return gz

print('entries:', len(entries), '| jp keys:', len(idx), '| en keys:', len(eidx))
from collections import defaultdict as _dd
_by = _dd(list)
for (w, i), sc in escore.items(): _by[w].append((sc, i))
eidx = {w: [i for _, i in sorted(v, key=lambda x: (-x[0], x[1]))[:50]] for w, v in _by.items()}
tot  = dump('entries.json', {'p': POS, 'm': MISC, 'e': entries})
tot += dump('index-jp.json', idx)
tot += dump('index-en.json', eidx)
print(f'  TOTAL over the wire: {tot/1048576:.2f} MB gzipped')
