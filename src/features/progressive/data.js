const su = t => ({ t, r: "subject" });
const vb = t => ({ t, r: "verb_be" });
const vv = t => ({ t, r: "verb" });
const ig = t => ({ t, r: "ing" });
const no = t => ({ t, r: "neg" });

export const PROG_AFF = [
  { pts: [su("He"), " ", vb("is"), " ", vv("play"), ig("ing"), " now."],        esp: "Él está jugando ahora." },
  { pts: [su("She"), " ", vb("is"), " ", vv("read"), ig("ing"), " now."],       esp: "Ella está leyendo ahora." },
  { pts: [su("I"), " ", vb("am"), " ", vv("eat"), ig("ing"), " right now."],    esp: "Yo estoy comiendo ahora mismo." },
  { pts: [su("They"), " ", vb("are"), " ", vv("study"), ig("ing"), " now."],    esp: "Ellos están estudiando ahora." },
  { pts: [su("We"), " ", vb("are"), " ", vv("swimm"), ig("ing"), " now."],      esp: "Nosotros estamos nadando ahora." },
  { pts: [su("The dog"), " ", vb("is"), " ", vv("runn"), ig("ing"), " now."],   esp: "El perro está corriendo ahora." },
  { pts: [su("She"), " ", vb("is"), " ", vv("danc"), ig("ing"), " right now."], esp: "Ella está bailando ahora mismo." },
];

export const PROG_NEG = [
  { pts: [su("He"), " ", vb("is"), " ", no("not"), " ", vv("play"), ig("ing"), "."],  esp: "Él no está jugando." },
  { pts: [su("She"), " is", no("n't"), " ", vv("read"), ig("ing"), "."],              esp: "Ella no está leyendo." },
  { pts: [su("I"), " ", vb("am"), " ", no("not"), " ", vv("eat"), ig("ing"), "."],    esp: "Yo no estoy comiendo." },
  { pts: [su("They"), " are", no("n't"), " ", vv("study"), ig("ing"), "."],           esp: "Ellos no están estudiando." },
  { pts: [su("We"), " are", no("n't"), " ", vv("swimm"), ig("ing"), "."],             esp: "Nosotros no estamos nadando." },
];

export const PROG_INT = [
  { q: [vb("Is"), " ", su("he"), " ", vv("play"), ig("ing"), "?"],   a: "Yes, he is. / No, he isn't.",    esp: "¿Está él jugando?" },
  { q: [vb("Is"), " ", su("she"), " ", vv("read"), ig("ing"), "?"],  a: "Yes, she is. / No, she isn't.",  esp: "¿Está ella leyendo?" },
  { q: [vb("Am"), " ", su("I"), " ", vv("eat"), ig("ing"), "?"],     a: "Yes, you are. / No, you aren't.",esp: "¿Estoy comiendo?" },
  { q: [vb("Are"), " ", su("they"), " ", vv("study"), ig("ing"), "?"],a: "Yes, they are. / No, they aren't.",esp: "¿Están ellos estudiando?" },
];

export const ING_RULES = [
  {
    rule: "Regla 1 — Solo agrega ING", color: "#4ade80",
    desc: "La mayoría de verbos: solo pones -ING al final 😊",
    words: [["play","ing"],["eat","ing"],["read","ing"],["sleep","ing"],["talk","ing"],["go","ing"]],
  },
  {
    rule: "Regla 2 — Termina en E: quita la E y pon ING", color: "#fbbf24",
    desc: "Normalmente se elimina la -e final muda. En -ee se conserva: see → seeing. También se conserva en be → being.",
    words: [["com","ing","come"],["hav","ing","have"],["tak","ing","take"],["danc","ing","dance"],["smil","ing","smile"],["writ","ing","write"]],
  },
  {
    rule: "Regla 3 — Consonante final después de vocal corta", color: "#f472b6",
    desc: "En verbos de una sílaba como run, duplica la consonante final. No dupliques w, x ni y: snowing, fixing, playing. Con varias sílabas, importa el acento: begin → beginning, visit → visiting.",
    words: [["runn","ing","run"],["cutt","ing","cut"],["swimm","ing","swim"],["sitt","ing","sit"],["stopp","ing","stop"]],
  },
  {
    rule: "Regla 4 — IE cambia a Y antes de ING", color: "#c084fc",
    desc: "En verbos terminados en -ie, cambia esas dos letras por y: lie → lying.",
    words: [["ly", "ing", "lie"], ["dy", "ing", "die"], ["ty", "ing", "tie"]],
  },
];
