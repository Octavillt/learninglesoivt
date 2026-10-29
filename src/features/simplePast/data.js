export const EXAMPLES = [
  ["I went to Puebla.", "Fui a Puebla."],
  ["He ate cemitas.", "Él comió cemitas."],
  ["She drank mezcal yesterday.", "Ella tomó mezcal ayer."],
  ["I slept early yesterday.", "Yo me dormí temprano ayer."],
  ["I cooked pasta.", "Cociné pasta."],
  ["I woke up at 7:00 a.m.", "Me desperté a las 7:00 a.m."],
  ["She did her homework.", "Ella hizo su tarea."],
  ["I did not go to Puebla.", "No fui a Puebla."],
  ["He didn't eat cemitas.", "Él no comió cemitas."],
  ["You didn't go to Acapulco.", "No fuiste a Acapulco."],
  ["He didn't study the verbs.", "Él no estudió los verbos."],
  ["She didn't do her homework.", "Ella no hizo su tarea."],
];

export const QUESTIONS = [
  ["Did Octa eat cemitas?", "No, he didn't.", "¿Octa comió cemitas? — No."],
  ["Did Leslie drink mezcal?", "Yes, she did.", "¿Leslie tomó mezcal? — Sí."],
  ["Did Leslie do yoga yesterday?", "No, she didn't.", "¿Leslie hizo yoga ayer? — No."],
  ["Didn't Eduardo eat a sandwich?", "No, he didn't. / Yes, he did.", "¿Eduardo no comió un sándwich? — No. / Sí."],
  ["What did you do yesterday?", "I worked.", "¿Qué hiciste ayer? — Trabajé."],
  ["What did Octa do last week?", "He worked.", "¿Qué hizo Octa la semana pasada? — Trabajó."],
  ["Where did he grow up?", "He grew up in Germany.", "¿Dónde creció él? — Creció en Alemania."],
  ["Who did they see?", "They saw their grandparents.", "¿A quién vieron? — Vieron a sus abuelos."],
  ["What did you talk about?", "I talked about you.", "¿De qué hablaste? — Hablé de ti."],
];

export const REGULAR_RULES = [
  ["work → worked", "Regla general: agrega -ed al verbo base."],
  ["love → loved, dance → danced", "Termina en -e: agrega solo -d."],
  ["study → studied", "Consonante + y: cambia la y por -ied."],
  ["play → played", "Vocal + y: conserva la y y agrega -ed."],
  ["stop → stopped, plan → planned", "Consonante-vocal-consonante en sílaba tónica: dobla la consonante final."],
];

export const IRREGULARS = [
  ["go → went", "ir → fue"],
  ["eat → ate", "comer → comió"],
  ["drink → drank", "beber → bebió"],
  ["wake up → woke up", "despertarse → se despertó"],
  ["do → did", "hacer → hizo"],
  ["sleep → slept", "dormir → durmió"],
  ["come → came", "venir → vino"],
  ["meet → met", "conocer → conoció"],
  ["get → got", "obtener → obtuvo"],
  ["have → had", "tener → tuvo"],
  ["buy → bought", "comprar → compró"],
  ["grow up → grew up", "crecer → creció"],
  ["see → saw", "ver → vio"],
  ["tell → told", "contar → contó"],
  ["give → gave", "dar → dio"],
  ["feel → felt", "sentir → sintió"],
  ["read → read", "leer → leyó (se pronuncia /red/)"],
  ["think → thought", "pensar → pensó"],
  ["forget → forgot", "olvidar → olvidó"],
  ["find → found", "encontrar → encontró"],
  ["take → took", "tomar → tomó"],
  ["make → made", "hacer → hizo"],
];

export const ED_PRONUNCIATION = [
  { sound: "/t/", after: "Después de los sonidos p, k, f, sh, ch, s (ss o c con sonido s) y x.", examples: ["helped", "worked", "laughed", "watched", "kissed", "washed", "danced", "fixed"] },
  { sound: "/d/", after: "Después de los sonidos l, n, r, g, v, z, m, b y de las vocales.", examples: ["called", "cleaned", "loved", "climbed", "answered", "hugged", "used", "seemed"] },
  { sound: "/ɪd/", after: "Después de los sonidos t y d; se agrega una sílaba.", examples: ["visited", "wanted", "needed"] },
];

export const TIME_EXPRESSIONS = [
  ["yesterday", "ayer"],
  ["last night", "anoche"],
  ["last week", "la semana pasada"],
  ["last weekend", "el fin de semana pasado"],
  ["in 1990", "en 1990"],
  ["two years later", "dos años después"],
  ["three days ago", "hace tres días"],
];

export const BOOK_STORY = {
  prompt: "Escribe el pasado simple del verbo entre paréntesis.",
  text: "Look at this picture of my parents. My father was born in Mexico. He ___ (come) to the US in 1990. He ___ (work) in Texas for many years. He ___ (meet) my mother in 1995. They ___ (get) married two years later. They ___ (start) a family and ___ (have) me in 1999. Later they ___ (move) to California and ___ (open) a small restaurant. They ___ (buy) their first home in 2007.",
  solution: "Look at this picture of my parents. My father was born in Mexico. He came to the US in 1990. He worked in Texas for many years. He met my mother in 1995. They got married two years later. They started a family and had me in 1999. Later they moved to California and opened a small restaurant. They bought their first home in 2007.",
  answers: [["come", "came"], ["work", "worked"], ["meet", "met"], ["get", "got"], ["start", "started"], ["have", "had"], ["move", "moved"], ["open", "opened"], ["buy", "bought"]],
};

export const BOOK_NEGATIVES = {
  prompt: "Reescribe cada oración en negativo con el adjetivo opuesto.",
  rows: [
    ["They woke up early.", "They didn't wake up late."],
    ["We felt very cold.", "We didn't feel very hot."],
    ["She had a big family.", "She didn't have a small family."],
    ["It seemed like a good idea.", "It didn't seem like a bad idea."],
    ["I lived in a noisy neighborhood.", "I didn't live in a quiet neighborhood."],
    ["He gave a short speech.", "He didn't give a long speech."],
    ["We bought an old house.", "We didn't buy a new house."],
    ["I read an interesting book.", "I didn't read a boring book."],
  ],
};

export const BOOK_CONVERSATION = {
  prompt: "Completa la conversación entre Israel y Eduardo con el pasado simple.",
  blanks: [
    "Israel: ___ your family ___ (come) to visit you last weekend?",
    "Eduardo: Yes, they ___. I ___ (show) them around the city.",
    "Israel: Where ___ you ___ (go)?",
    "Eduardo: To the beach. But they ___ (not enjoy) it much.",
    "Israel: ___ you ___ (take) them to eat out?",
    "Eduardo: No, I ___. They ___ (want) to cook for me. I ___ (not mind)!",
  ],
  answers: [
    "Israel: Did your family come to visit you last weekend?",
    "Eduardo: Yes, they did. I showed them around the city.",
    "Israel: Where did you go?",
    "Eduardo: To the beach. But they didn't enjoy it much.",
    "Israel: Did you take them to eat out?",
    "Eduardo: No, I didn't. They wanted to cook for me. I didn't mind!",
  ],
};

export const PRACTICE = [
  { question: "Escribe el pasado simple de work.", answers: ["worked"], explanation: "work → worked. Verbo regular: solo agrega -ed." },
  { question: "Escribe el pasado simple de study.", answers: ["studied"], explanation: "study → studied. Consonante + y: cambia la y por -ied." },
  { question: "Escribe el pasado simple de stop.", answers: ["stopped"], explanation: "stop → stopped. Consonante-vocal-consonante: dobla la consonante final." },
  { question: "Completa: She ___ (drink) mezcal yesterday.", answers: ["drank"], explanation: "She drank mezcal yesterday. Drink es irregular: drink → drank." },
  { question: "Convierte en negativa: He went to Puebla.", answers: ["He didn't go to Puebla.", "He did not go to Puebla."], explanation: "He didn't go to Puebla. Didn't ya marca el pasado, así que el verbo vuelve a su forma base." },
  { question: "Convierte en pregunta: Leslie did yoga yesterday.", answers: ["Did Leslie do yoga yesterday?"], explanation: "Did Leslie do yoga yesterday? Usa did + sujeto + verbo base." },
  { question: "Responde negativamente con una respuesta corta: Did Octa eat cemitas?", answers: ["No, he didn't.", "No, he did not."], explanation: "No, he didn't. Las respuestas cortas usan did o didn't, sin repetir el verbo principal." },
  { question: "Ordena: did / What / do / you / yesterday / ?", answers: ["What did you do yesterday?"], explanation: "What + did + sujeto + verbo base + expresión de tiempo: What did you do yesterday?" },
  { question: "Corrige: He didn't went to Acapulco.", answers: ["He didn't go to Acapulco.", "He did not go to Acapulco."], explanation: "He didn't go to Acapulco. Después de didn't el verbo va en forma base, no went." },
  { question: "Traduce: ¿Dónde creció él?", answers: ["Where did he grow up?"], explanation: "Where did he grow up? Grow up es irregular: su pasado es grew up." },
  { question: "Completa la historia: He ___ (come) to the US in 1990.", answers: ["came"], explanation: "He came to the US in 1990. Come es irregular: come → came." },
  { question: "Completa la historia: They ___ (buy) their first home in 2007.", answers: ["bought"], explanation: "They bought their first home in 2007. Buy es irregular: buy → bought." },
  { question: "Completa con la negación y el opuesto: They woke up early. → They didn't wake up ___.", answers: ["late"], explanation: "They didn't wake up late. Después de didn't el verbo vuelve a su forma base: wake up." },
];
