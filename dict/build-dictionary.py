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
    if 'ichi1' in t: s += 40
    if 'news1' in t: s += 12
    if 'spec1' in t: s += 10
    if 'gai1'  in t: s += 4
    nf = [int(x[2:]) for x in t if _re.fullmatch(r'nf\d\d', x)]
    # nf bands are 500 words wide, so the scale must be logarithmic:
    # nf01 (top 500) is ~10x more frequent than nf11, not 20% more.
    if nf: s += max(0, round(100 - 22 * _math.log(min(nf))))
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

entries, idx, eidx, escore = [], defaultdict(list), defaultdict(list), {}
STOP = set('a an the to of for with be is are in on at as by or and not from that this it its one'.split())
for seq in sorted(common):
    ks, ns = kanji.get(seq, []), kana.get(seq, [])
    if not ns: continue
    senses = []
    for sid in sense_of.get(seq, []):
        g = glosses.get(sid, [])
        if not g: continue
        p = [x for x in (pid(q) for q in poss.get(sid, [])) if x is not None]
        senses.append([p, g[:6]])
    if not senses: continue
    i = len(entries)
    entries.append([ks, ns, senses[:8], rank_of(seq), freq(seq)])
    for w in ks + ns: idx[w].append(i)
    for si, s in enumerate(senses[:4]):
        for gi, g in enumerate(s[1][:4]):
            gl = g.lower().strip()
            base = gl[3:] if gl.startswith('to ') else gl
            for w in re.findall(r"[a-z']+", gl):
                if len(w) < 3 or w in STOP: continue
                sc = 0
                if base == w:
                    sc = 55                       # the gloss IS the word
                    if si == 0 and gi == 0: sc += 20   # ...and it's the headline sense
                elif base.startswith(w + ' '): sc = 38
                elif gl.startswith(w): sc = 30
                # the headline sense is what the word *means*; a match buried in
                # sense 4 (使う → "to speak (a language)") must not outrank it
                sc += (30, 10, 0, -18)[min(si, 3)] + (6 - gi * 2)
                sc -= min(len(base) // 12, 4)      # prefer concise glosses
                sc += freq(seq)                   # frequency carries equal weight
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
tot  = dump('entries.json', {'p': POS, 'e': entries})
tot += dump('index-jp.json', idx)
tot += dump('index-en.json', eidx)
print(f'  TOTAL over the wire: {tot/1048576:.2f} MB gzipped')
