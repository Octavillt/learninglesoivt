const su = t => ({ t, r: "subject" });
const vb = t => ({ t, r: "verb_be" });
const vv = t => ({ t, r: "verb" });
const ig = t => ({ t, r: "ing" });
const pr = t => ({ t, r: "prep" });
const inf = t => ({ t, r: "inf" });

// Los dos usos del -ING: como parte del progresivo (ya visto en Básico I)
// y como gerundio (el verbo funcionando como sustantivo).
export const TWO_USES = [
  {
    icon: "🌀", title: "1. Presente Progresivo", subtitle: "acción que pasa AHORA",
    formula: "sujeto + to be + verbo-ING",
    example: { pts: [su("She"), " ", vb("is"), " ", vv("swimm"), ig("ing"), " right now."], esp: "Ella está nadando ahora mismo." },
  },
  {
    icon: "📦", title: "2. Gerundio (verbo como sustantivo)", subtitle: "el nombre de la actividad",
    formula: "verbo-ING = 'el/la ...ar'",
    example: { pts: [su("Swimm"), ig("ing"), " is good for your health."], esp: "Nadar es bueno para tu salud." },
  },
];

// Repaso rápido de cómo se escribe el -ING (mismas 3 reglas de Básico I).
export const SPELLING_RULES = [
  {
    icon: "1️⃣", title: "Regla normal", desc: "La mayoría: solo agrega -ING", color: "#4ade80",
    words: [["work", "ing"], ["study", "ing"], ["read", "ing"], ["play", "ing"], ["talk", "ing"]],
  },
  {
    icon: "2️⃣", title: "Termina en -E", desc: "Quita la E y agrega -ING", color: "#fbbf24",
    words: [["danc", "ing", "dance"], ["writ", "ing", "write"], ["mak", "ing", "make"], ["driv", "ing", "drive"], ["tak", "ing", "take"]],
  },
  {
    icon: "3️⃣", title: "Patrón CVC", desc: "Consonante-vocal-consonante: dobla la última letra", color: "#f472b6",
    words: [["runn", "ing", "run"], ["swimm", "ing", "swim"], ["sitt", "ing", "sit"], ["stopp", "ing", "stop"], ["shopp", "ing", "shop"]],
  },
];

// Uso 1 del gerundio: como SUJETO de la oración.
export const AS_SUBJECT = [
  { pts: [su("Read"), ig("ing"), " is my favorite hobby."],        esp: "Leer es mi pasatiempo favorito." },
  { pts: [su("Cook"), ig("ing"), " takes a lot of time."],          esp: "Cocinar toma mucho tiempo." },
  { pts: [su("Learn"), ig("ing"), " English is important."],        esp: "Aprender inglés es importante." },
  { pts: [su("Smok"), ig("ing"), " is bad for your health."],       esp: "Fumar es malo para tu salud." },
  { pts: [su("Runn"), ig("ing"), " in the morning makes me happy."],esp: "Correr en la mañana me hace feliz." },
];

// Uso 2: después de ciertos verbos (gustos, inicio/fin, continuar...).
export const VERBS_ING = [
  {
    icon: "❤️", title: "Gustos y preferencias",
    verbs: ["like", "love", "enjoy", "hate", "don't mind", "prefer"],
    examples: [
      { pts: [su("I"), " ", vv("like"), " ", vv("danc"), ig("ing"), "."],            esp: "Me gusta bailar." },
      { pts: [su("She"), " ", vv("loves"), " ", vv("cook"), ig("ing"), "."],          esp: "A ella le encanta cocinar." },
      { pts: [su("They"), " ", vv("hate"), " ", vv("wait"), ig("ing"), "."],          esp: "Ellos odian esperar." },
      { pts: [su("We"), " ", vv("enjoy"), " ", vv("travel"), ig("ing"), "."],         esp: "Nosotros disfrutamos viajar." },
    ],
  },
  {
    icon: "🏁", title: "Empezar, terminar, continuar",
    verbs: ["start", "finish", "stop", "keep", "continue"],
    examples: [
      { pts: [su("He"), " ", vv("finished"), " ", vv("work"), ig("ing"), " at 6."],   esp: "Él terminó de trabajar a las 6." },
      { pts: ["Please ", vv("stop"), " ", vv("talk"), ig("ing"), "."],        esp: "Por favor deja de hablar." },
      { pts: [su("She"), " ", vv("keeps"), " ", vv("study"), ig("ing"), " every day."],esp: "Ella sigue estudiando todos los días." },
    ],
  },
  {
    icon: "🎯", title: "Otros verbos comunes",
    verbs: ["avoid", "practice", "suggest", "finish", "go"],
    examples: [
      { pts: [su("I"), " ", vv("practice"), " ", vv("speak"), ig("ing"), " English."], esp: "Practico hablar inglés." },
      { pts: [su("They"), " ", vv("avoid"), " ", vv("eat"), ig("ing"), " late."],      esp: "Ellos evitan comer tarde." },
      { pts: [su("We"), " ", vv("go"), " ", vv("shopp"), ig("ing"), " on Saturday."],  esp: "Vamos de compras el sábado." },
    ],
  },
];

// Uso 3: después de una preposición SIEMPRE va -ING (nunca el infinitivo).
export const AFTER_PREP = [
  { pts: [su("She"), " is good ", pr("at"), " ", vv("draw"), ig("ing"), "."],              esp: "Ella es buena dibujando." },
  { pts: [su("I"), " am interested ", pr("in"), " ", vv("learn"), ig("ing"), " Italian."], esp: "Estoy interesado en aprender italiano." },
  { pts: [su("He"), " left ", pr("without"), " ", vv("say"), ig("ing"), " goodbye."],      esp: "Él se fue sin decir adiós." },
  { pts: ["Thank you ", pr("for"), " ", vv("help"), ig("ing"), " me."],            esp: "Gracias por ayudarme." },
  { pts: ["Brush your teeth ", pr("after"), " ", vv("eat"), ig("ing"), "."],       esp: "Lávate los dientes después de comer." },
  { pts: [su("I"), " called her ", pr("before"), " ", vv("leav"), ig("ing"), "."],         esp: "La llamé antes de salir." },
  { pts: [su("We"), " watched a movie ", pr("instead of"), " ", vv("study"), ig("ing"), "."], esp: "Vimos una película en vez de estudiar." },
];

// Gerundio (-ING) vs Infinitivo (to + verbo).
export const ING_VS_TO = {
  ing: {
    icon: "🔄", title: "Piden -ING",
    verbs: ["like", "love", "enjoy", "hate", "finish", "stop", "keep", "avoid", "practice", "suggest"],
    examples: [
      { pts: [su("I"), " ", vv("enjoy"), " ", vv("swimm"), ig("ing"), "."],  esp: "Disfruto nadar." },
      { pts: [su("She"), " ", vv("finished"), " ", vv("read"), ig("ing"), "."], esp: "Ella terminó de leer." },
    ],
  },
  to: {
    icon: "➡️", title: "Piden to + verbo",
    verbs: ["want", "need", "decide", "hope", "plan", "learn", "would like"],
    examples: [
      { pts: [su("I"), " ", vv("want"), " ", inf("to eat"), " pizza."],      esp: "Quiero comer pizza." },
      { pts: [su("They"), " ", vv("decided"), " ", inf("to travel"), "."],   esp: "Ellos decidieron viajar." },
    ],
  },
  both: [
    { pts: [su("I"), " ", vv("like"), " ", vv("runn"), ig("ing"), " = ", su("I"), " ", vv("like"), " ", inf("to run"), "."], esp: "Me gusta correr (las dos formas son correctas)." },
    { pts: [su("It"), " ", vv("started"), " ", vv("rain"), ig("ing"), " = ", su("It"), " ", vv("started"), " ", inf("to rain"), "."], esp: "Empezó a llover (las dos formas son correctas)." },
  ],
};

// Errores típicos de hispanohablantes con el -ING.
export const COMMON_MISTAKES = [
  { wrong: "She likes cook.", right: "She likes cooking.", esp: "Después de like, love, enjoy o hate, el segundo verbo lleva -ING." },
  { wrong: "She is good at draw.", right: "She is good at drawing.", esp: "Después de una preposición (at, in, for, without...) SIEMPRE va -ING." },
  { wrong: "To read is my favorite hobby.", right: "Reading is my favorite hobby.", esp: "Cuando el verbo es el sujeto de la oración, se usa -ING." },
  { wrong: "I want going to the party.", right: "I want to go to the party.", esp: "want, need, decide y hope piden 'to + verbo', no -ING." },
  { wrong: "He is study right now.", right: "He is studying right now.", esp: "En el progresivo, el verbo principal siempre lleva -ING." },
];

// Ejercicio: completar con la forma correcta.
export const EXERCISE = [
  { q: "I enjoy ______ (listen) to music.",          pts: [su("I"), " enjoy ", vv("listen"), ig("ing"), " to music."],        esp: "Disfruto escuchar música." },
  { q: "She is afraid of ______ (fly).",             pts: [su("She"), " is afraid ", pr("of"), " ", vv("fly"), ig("ing"), "."], esp: "Ella tiene miedo de volar." },
  { q: "______ (dance) is fun.",                     pts: [su("Danc"), ig("ing"), " is fun."],                                 esp: "Bailar es divertido." },
  { q: "They want ______ (buy) a new car.",          pts: [su("They"), " want ", inf("to buy"), " a new car."], esp: "Ellos quieren comprar un carro nuevo." },
  { q: "We finished ______ (clean) the house.",      pts: [su("We"), " finished ", vv("clean"), ig("ing"), " the house."],      esp: "Terminamos de limpiar la casa." },
  { q: "He went to work without ______ (eat).",      pts: [su("He"), " went to work ", pr("without"), " ", vv("eat"), ig("ing"), "."], esp: "Él se fue a trabajar sin comer." },
  { q: "My mom is ______ (cook) dinner right now.",  pts: [su("My mom"), " ", vb("is"), " ", vv("cook"), ig("ing"), " dinner right now."], esp: "Mi mamá está cocinando la cena ahora mismo." },
  { q: "I need ______ (study) for the exam.",        pts: [su("I"), " need ", inf("to study"), " for the exam."], esp: "Necesito estudiar para el examen." },
];
