import { describe, expect, it } from "vitest";
import { VERB_BANK } from "./data";
import { lessonsFor, searchVerbs, verbPattern, PATTERNS } from "./verbSearch";
import { VERBS } from "../verbs/data";
import { IRREGULAR_VERBS } from "../irregularVerbs/data";
import { IRREGULARS, ED_PRONUNCIATION } from "../simplePast/data";
import { VERBS_ING } from "../gerunds/data";
import { EXERCISE_WORDS } from "../exerciseWords/data";

// Formas esperadas tal como se transcribieron de la lista del curso (más los
// verbos que ya usa la plataforma). Si alguien edita data.js por error, estas
// filas lo delatan.
// base|pasado|participio — las alternativas van separadas por " / ".
const IRREGULAR_ROWS = [
  "arise|arose|arisen", "awake|awoke|awoken", "be|was / were|been", "bear|bore|borne / born", "beat|beat|beaten",
  "become|became|become", "begin|began|begun", "bend|bent|bent", "bet|bet|bet", "bid|bid|bid", "bind|bound|bound",
  "bite|bit|bitten", "bleed|bled|bled", "blow|blew|blown", "break|broke|broken", "breed|bred|bred",
  "bring|brought|brought", "broadcast|broadcast|broadcast", "build|built|built",
  "burn|burned / burnt|burned / burnt", "burst|burst|burst", "buy|bought|bought", "cast|cast|cast",
  "catch|caught|caught", "choose|chose|chosen", "cling|clung|clung", "come|came|come", "cost|cost|cost",
  "creep|crept|crept", "cut|cut|cut", "deal|dealt|dealt", "dig|dug|dug", "do|did|done", "draw|drew|drawn",
  "dream|dreamed / dreamt|dreamed / dreamt", "drink|drank|drunk", "drive|drove|driven", "eat|ate|eaten",
  "fall|fell|fallen", "feed|fed|fed", "feel|felt|felt", "fight|fought|fought", "find|found|found",
  "flee|fled|fled", "fly|flew|flown", "forbid|forbade|forbidden", "forget|forgot|forgotten",
  "forgive|forgave|forgiven", "freeze|froze|frozen", "get|got|gotten / got", "give|gave|given", "go|went|gone",
  "grind|ground|ground", "grow|grew|grown", "hang|hung|hung", "have|had|had", "hear|heard|heard",
  "hide|hid|hidden", "hit|hit|hit", "hold|held|held", "hurt|hurt|hurt", "keep|kept|kept", "kneel|knelt|knelt",
  "knit|knit|knit", "know|knew|known", "lay|laid|laid", "lead|led|led", "lean|leaned / leant|leaned / leant",
  "leap|leaped / leapt|leaped / leapt", "learn|learned / learnt|learned / learnt", "leave|left|left",
  "lend|lent|lent", "let|let|let", "lie|lay|lain", "light|lit|lit", "lose|lost|lost", "make|made|made",
  "mean|meant|meant", "meet|met|met", "mistake|mistook|mistaken", "overcome|overcame|overcome", "pay|paid|paid",
  "put|put|put", "read|read|read", "ride|rode|ridden", "ring|rang|rung", "rise|rose|risen", "run|ran|run",
  "say|said|said", "see|saw|seen", "seek|sought|sought", "sell|sold|sold", "send|sent|sent", "set|set|set",
  "sew|sewed|sewn / sewed", "shake|shook|shaken", "shear|shore|shorn", "shine|shone|shone", "shoot|shot|shot",
  "show|showed|shown", "shrink|shrank|shrunk", "shut|shut|shut", "sing|sang|sung", "sink|sank|sunk", "sit|sat|sat",
  "sleep|slept|slept", "slide|slid|slid", "smell|smelled / smelt|smelled / smelt", "sow|sowed|sown / sowed",
  "speak|spoke|spoken", "speed|sped|sped", "spell|spelled / spelt|spelled / spelt", "spend|spent|spent",
  "spill|spilled / spilt|spilled / spilt", "spin|spun|spun", "spit|spat|spat", "split|split|split",
  "spoil|spoiled / spoilt|spoiled / spoilt", "spread|spread|spread", "spring|sprang|sprung", "stand|stood|stood",
  "steal|stole|stolen", "stick|stuck|stuck", "sting|stung|stung", "stink|stank / stunk|stunk",
  "stride|strode|stridden", "strike|struck|struck", "swear|swore|sworn", "sweat|sweat|sweat", "sweep|swept|swept",
  "swell|swelled|swollen", "swim|swam|swum", "swing|swung|swung", "take|took|taken", "teach|taught|taught",
  "tear|tore|torn", "tell|told|told", "think|thought|thought", "throw|threw|thrown", "thrust|thrust|thrust",
  "tread|trod|trodden", "understand|understood|understood", "undergo|underwent|undergone",
  "undertake|undertook|undertaken", "wake|woke|woken", "wear|wore|worn", "weave|wove|woven", "weep|wept|wept",
  "wet|wet|wet", "win|won|won", "wind|wound|wound", "withdraw|withdrew|withdrawn", "wring|wrung|wrung",
  "write|wrote|written",
];

// base|pasado (= participio)|sonido de -ed
const REGULAR_ROWS = [
  "answer|answered|/d/", "ask|asked|/t/", "avoid|avoided|/ɪd/", "bark|barked|/t/", "call|called|/d/",
  "carry|carried|/d/", "clean|cleaned|/d/", "climb|climbed|/d/", "close|closed|/d/", "continue|continued|/d/",
  "cook|cooked|/t/", "cry|cried|/d/", "dance|danced|/t/", "decide|decided|/ɪd/", "enjoy|enjoyed|/d/",
  "erase|erased|/t/", "finish|finished|/t/", "fix|fixed|/t/", "hate|hated|/ɪd/", "help|helped|/t/",
  "hope|hoped|/t/", "hug|hugged|/d/", "jump|jumped|/t/", "kiss|kissed|/t/", "laugh|laughed|/t/",
  "lift|lifted|/ɪd/", "like|liked|/t/", "live|lived|/d/", "love|loved|/d/", "meow|meowed|/d/", "mind|minded|/ɪd/",
  "move|moved|/d/", "need|needed|/ɪd/", "open|opened|/d/", "paint|painted|/ɪd/", "plan|planned|/d/",
  "play|played|/d/", "practice|practiced|/t/", "prefer|preferred|/d/", "pull|pulled|/d/", "purr|purred|/d/",
  "push|pushed|/t/", "seem|seemed|/d/", "start|started|/ɪd/", "stop|stopped|/t/", "stretch|stretched|/t/",
  "study|studied|/d/", "suggest|suggested|/ɪd/", "talk|talked|/t/", "travel|traveled|/d/", "turn|turned|/d/",
  "twist|twisted|/ɪd/", "use|used|/d/", "visit|visited|/ɪd/", "wait|waited|/ɪd/", "walk|walked|/t/",
  "want|wanted|/ɪd/", "wash|washed|/t/", "watch|watched|/t/", "work|worked|/t/",
];

// base|pasado|participio|tipo
const PHRASAL_ROWS = [
  "eat out|ate out|eaten out|irregular", "get up|got up|gotten up|irregular", "go out|went out|gone out|irregular",
  "grow up|grew up|grown up|irregular", "hang out|hung out|hung out|irregular",
  "listen to|listened to|listened to|regular", "look up|looked up|looked up|regular",
  "stand up|stood up|stood up|irregular", "wake up|woke up|woken up|irregular",
];

const BY_BASE = Object.fromEntries(VERB_BANK.map(verb => [verb.base, verb]));
const split = forms => forms.split(" / ");
const firstResult = query => searchVerbs(query)[0];

describe("Verbos a la mano — datos", () => {
  it("reúne 223 verbos ordenados alfabéticamente y sin bases repetidas", () => {
    expect(VERB_BANK).toHaveLength(223);
    const bases = VERB_BANK.map(verb => verb.base);
    expect(new Set(bases).size).toBe(bases.length);
    expect(bases).toEqual([...bases].sort((a, b) => a.localeCompare(b)));
  });

  it.each(IRREGULAR_ROWS)("conserva las formas del irregular %s", row => {
    const [base, past, participle] = row.split("|");
    const verb = BY_BASE[base];
    expect(verb, base).toBeDefined();
    expect(verb.kind).toBe("irregular");
    expect(verb.phrasal ?? false).toBe(false);
    expect(verb.past).toEqual(split(past));
    expect(verb.participle).toEqual(split(participle));
    expect(verb.ed).toBeUndefined();
  });

  it.each(REGULAR_ROWS)("conserva las formas del regular %s", row => {
    const [base, past, ed] = row.split("|");
    const verb = BY_BASE[base];
    expect(verb, base).toBeDefined();
    expect(verb.kind).toBe("regular");
    expect(verb.past).toEqual([past]);
    expect(verb.participle).toEqual([past]);
    expect(verb.ed).toBe(ed);
  });

  it.each(PHRASAL_ROWS)("conserva las formas del verbo frasal %s", row => {
    const [base, past, participle, kind] = row.split("|");
    const verb = BY_BASE[base];
    expect(verb, base).toBeDefined();
    expect(verb.phrasal).toBe(true);
    expect(verb.kind).toBe(kind);
    expect(verb.past).toEqual([past]);
    expect(verb.participle).toEqual([participle]);
  });

  it("cada verbo trae significado en español en minúsculas y notas solo cuando aportan", () => {
    for (const verb of VERB_BANK) {
      expect(verb.es, verb.base).toMatch(/\S/);
      expect(verb.es, verb.base).toBe(verb.es.toLowerCase());
      if (verb.note !== undefined) expect(verb.note.length, verb.base).toBeGreaterThan(10);
    }
    expect(BY_BASE.lie.note).toMatch(/lied/);
    expect(BY_BASE.read.note).toMatch(/red/);
    expect(BY_BASE.get.note).toMatch(/gotten/);
    expect(BY_BASE.bring.es).toMatch(/traer/);
    expect(BY_BASE.go.es).toMatch(/\bir\b/);
  });
});

describe("Verbos a la mano — coherencia con las lecciones", () => {
  it("incluye todos los verbos de uso diario de Básico I", () => {
    for (const [en] of VERBS) expect(BY_BASE[en.toLowerCase()], en).toBeDefined();
  });

  it("usa las mismas formas que la lista de irregulares de Básico II", () => {
    for (const [base, past, participle] of IRREGULAR_VERBS) {
      const verb = BY_BASE[base];
      expect(verb, base).toBeDefined();
      for (const form of past.split("/")) expect(verb.past, base).toContain(form.trim());
      expect(verb.participle, base).toContain(participle);
    }
  });

  it("usa los mismos pasados que la lista de irregulares de Pasado simple", () => {
    for (const [pair] of IRREGULARS) {
      const [base, past] = pair.split(" → ");
      expect(BY_BASE[base]?.past, base).toContain(past);
    }
  });

  it("clasifica el sonido de -ed igual que la lección de Pasado simple", () => {
    for (const { sound, examples } of ED_PRONUNCIATION) {
      for (const past of examples) {
        const verb = VERB_BANK.find(item => item.kind === "regular" && item.past.includes(past));
        expect(verb, past).toBeDefined();
        expect(verb.ed, past).toBe(sound);
      }
    }
  });

  it("incluye los verbos de gerundios y de ejercicio", () => {
    const gerundVerbs = VERBS_ING.flatMap(group => group.verbs).map(verb => verb.replace("don't ", ""));
    for (const base of [...gerundVerbs, ...EXERCISE_WORDS.map(word => word.en)]) {
      expect(BY_BASE[base], base).toBeDefined();
    }
  });
});

describe("Verbos a la mano — patrones", () => {
  it.each([
    ["cut", "AAA"], ["put", "AAA"], ["read", "AAA"],
    ["buy", "ABB"], ["bring", "ABB"], ["learn", "ABB"],
    ["come", "ABA"], ["run", "ABA"], ["become", "ABA"],
    ["go", "ABC"], ["be", "ABC"], ["write", "ABC"],
    ["work", "regular"], ["look up", "regular"], ["wake up", "ABC"],
  ])("%s sigue el patrón %s", (base, pattern) => {
    expect(verbPattern(BY_BASE[base])).toBe(pattern);
  });

  it("describe los cuatro patrones irregulares en orden con su ejemplo", () => {
    const list = Array.isArray(PATTERNS) ? PATTERNS : Object.entries(PATTERNS).map(([id, meta]) => ({ id, ...meta }));
    expect(list.map(pattern => pattern.id)).toEqual(["AAA", "ABB", "ABA", "ABC"]);
    expect(JSON.stringify(list)).toMatch(/cut · cut · cut/);
    expect(JSON.stringify(list)).toMatch(/go · went · gone/);
  });
});

describe("Verbos a la mano — búsqueda", () => {
  it("encuentra el verbo desde cualquier forma y dice cuál coincidió", () => {
    expect(firstResult("went")).toMatchObject({ verb: { base: "go" }, matchedField: "past" });
    expect(firstResult("gotten")).toMatchObject({ verb: { base: "get" }, matchedField: "participle" });
    expect(firstResult("brought").verb.base).toBe("bring");
    expect(firstResult("bought").verb.base).toBe("buy");
    expect(firstResult("written").verb.base).toBe("write");
  });

  it("busca en español sin importar acentos ni mayúsculas", () => {
    expect(firstResult("ir")).toMatchObject({ verb: { base: "go" }, matchedField: "es" });
    expect(firstResult("traer").verb.base).toBe("bring");
    expect(firstResult("oir").verb.base).toBe("hear");
    expect(firstResult("OÍR").verb.base).toBe("hear");
    expect(firstResult("Ir").verb.base).toBe("go");
  });

  it("no mezcla coincidencias a mitad de palabra en español", () => {
    const bases = searchVerbs("ir").map(result => result.verb.base);
    expect(bases).not.toContain("write");
    expect(bases).not.toContain("lead");
  });

  it("prioriza la base exacta y luego las que la contienen", () => {
    const bases = searchVerbs("take").map(result => result.verb.base);
    expect(bases[0]).toBe("take");
    expect(bases).toEqual(expect.arrayContaining(["mistake", "undertake"]));
  });

  it("acepta el infinitivo con to y respeta el límite", () => {
    expect(firstResult("to go").verb.base).toBe("go");
    expect(searchVerbs("s", { limit: 4 }).length).toBeLessThanOrEqual(4);
    expect(searchVerbs("   ")).toEqual([]);
    expect(searchVerbs("zzzz")).toEqual([]);
  });

  it("devuelve cada verbo una sola vez", () => {
    const bases = searchVerbs("read").map(result => result.verb.base);
    expect(new Set(bases).size).toBe(bases.length);
  });
});

describe("Verbos a la mano — lecciones donde aparece", () => {
  const ids = base => lessonsFor(BY_BASE[base]).map(lesson => `${lesson.levelId}/${lesson.topicId}`);

  it("calcula las lecciones a partir de los datos de cada tema", () => {
    expect(ids("go")).toEqual(expect.arrayContaining(["basico1/verbs", "basico2/irregularVerbs", "basico5/simplePast", "basico2/gerunds"]));
    expect(ids("get up")).toContain("basico1/verbs");
    expect(ids("stretch")).toContain("basico4/exerciseWords");
    expect(ids("help")).toContain("basico5/simplePast");
    expect(ids("mind")).toContain("basico2/gerunds");
  });

  it("no inventa lecciones para verbos que solo están en la lista del curso", () => {
    expect(ids("arise")).toEqual([]);
  });
});
