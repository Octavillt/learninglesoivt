// Pasado progresivo: una acción que empezó en el pasado y continuó por un
// tiempo. Los ejemplos con board: true son los del pizarrón; los demás
// amplían el tema con las mismas estructuras.
const su = t => ({ t, r: "subject" });
const vb = t => ({ t, r: "verb_be" });
const vv = t => ({ t, r: "verb" });
const ig = t => ({ t, r: "ing" });
const no = t => ({ t, r: "neg" });
const wh = t => ({ t, r: "wh" });

export const SUBJECTS = [
  { aux: "was", negative: "wasn't", full: "was not", subjects: ["I", "he", "she", "it"] },
  { aux: "were", negative: "weren't", full: "were not", subjects: ["you", "we", "they"] },
];

export const PP_AFF = [
  { pts: [su("I"), " ", vb("was"), " ", vv("watch"), ig("ing"), " TV."], esp: "Yo estaba viendo la televisión.", board: true },
  { pts: [su("Octa"), " ", vb("was"), " ", vv("do"), ig("ing"), " the chores."], esp: "Octa estaba haciendo los quehaceres.", board: true },
  { pts: [su("You"), " ", vb("were"), " ", vv("go"), ig("ing"), " shopping."], esp: "Tú estabas yendo de compras.", board: true },
  { pts: [su("She"), " ", vb("was"), " ", vv("cook"), ig("ing"), " dinner at 8 p.m. yesterday."], esp: "Ella estaba cocinando la cena ayer a las 8 p. m." },
  { pts: [su("We"), " ", vb("were"), " ", vv("study"), ig("ing"), " English all morning."], esp: "Nosotros estábamos estudiando inglés toda la mañana." },
  { pts: [su("They"), " ", vb("were"), " ", vv("play"), ig("ing"), " soccer at that moment."], esp: "Ellos estaban jugando fútbol en ese momento." },
  { pts: [su("It"), " ", vb("was"), " ", vv("rain"), ig("ing"), " last night."], esp: "Estaba lloviendo anoche." },
];

export const PP_NEG = [
  { pts: [su("I"), " ", vb("was"), " ", no("not"), " ", vv("watch"), ig("ing"), " TV."], esp: "Yo no estaba viendo la televisión.", board: true },
  { pts: [su("Octa"), " ", vb("was"), no("n't"), " ", vv("do"), ig("ing"), " the chores."], esp: "Octa no estaba haciendo los quehaceres.", board: true },
  { pts: [su("You"), " ", vb("were"), no("n't"), " ", vv("go"), ig("ing"), " shopping."], esp: "Tú no estabas yendo de compras.", board: true },
  { pts: [su("He"), " ", vb("was"), no("n't"), " ", vv("sleep"), ig("ing"), " at 11 o'clock last night."], esp: "Él no estaba durmiendo anoche a las 11." },
  { pts: [su("We"), " ", vb("were"), no("n't"), " ", vv("work"), ig("ing"), " yesterday afternoon."], esp: "Nosotros no estábamos trabajando ayer en la tarde." },
];

export const PP_INT = [
  { q: [vb("Was"), " ", su("I"), " ", vv("watch"), ig("ing"), " TV?"], a: "Yes, I was. / No, I wasn't.", esp: "¿Yo estaba viendo la televisión? — Sí. / No.", board: true },
  { q: [vb("Were"), " ", su("you"), " ", vv("go"), ig("ing"), " shopping?"], a: "Yes, I was. / No, I wasn't.", esp: "¿Estabas yendo de compras? — Sí. / No.", board: true },
  { q: [vb("Was"), " ", su("Octa"), " ", vv("do"), ig("ing"), " the chores?"], a: "Yes, he was. / No, he wasn't.", esp: "¿Octa estaba haciendo los quehaceres? — Sí. / No." },
  { q: [vb("Were"), " ", su("they"), " ", vv("play"), ig("ing"), " soccer at 5 p.m.?"], a: "Yes, they were. / No, they weren't.", esp: "¿Ellos estaban jugando fútbol a las 5 p. m.? — Sí. / No." },
];

export const PP_WH = [
  { q: [wh("What"), " ", vb("were"), " ", su("you"), " ", vv("do"), ig("ing"), " yesterday?"], a: "I was doing my homework.", esp: "¿Qué estabas haciendo ayer? — Estaba haciendo mi tarea.", board: true },
  { q: [wh("What"), " ", vb("was"), " ", su("Octa"), " ", vv("do"), ig("ing"), " at 9 p.m.?"], a: "He was doing the chores.", esp: "¿Qué estaba haciendo Octa a las 9 p. m.? — Estaba haciendo los quehaceres." },
  { q: [wh("Where"), " ", vb("was"), " ", su("she"), " ", vv("go"), ig("ing"), " at 7 a.m.?"], a: "She was going to work.", esp: "¿A dónde iba ella a las 7 a. m.? — Iba al trabajo." },
  { q: [wh("Who"), " ", vb("were"), " ", su("you"), " ", vv("talk"), ig("ing"), " to?"], a: "I was talking to my mom.", esp: "¿Con quién estabas hablando? — Estaba hablando con mi mamá." },
  { q: [wh("Why"), " ", vb("were"), " ", su("they"), " ", vv("runn"), ig("ing"), "?"], a: "Because they were late.", esp: "¿Por qué estaban corriendo? — Porque iban tarde." },
];

export const TIME_EXPRESSIONS = [
  ["yesterday", "ayer"],
  ["last night", "anoche"],
  ["at 8 p.m. yesterday", "ayer a las 8 p. m."],
  ["at 10 o'clock last night", "anoche a las 10"],
  ["at this time yesterday", "ayer a esta hora"],
  ["at that moment", "en ese momento"],
  ["all day yesterday", "todo el día de ayer"],
  ["all morning / all afternoon", "toda la mañana / toda la tarde"],
  ["from 6 to 8 last night", "anoche de 6 a 8"],
];

export const COMPARISON = [
  { tense: "Simple Past", use: "Acción terminada: cuenta lo que hiciste.", en: "I watched TV yesterday.", esp: "Vi la televisión ayer." },
  { tense: "Past Progressive", use: "Acción en curso: describe lo que estabas haciendo en un momento del pasado.", en: "I was watching TV at 8 p.m. yesterday.", esp: "Estaba viendo la televisión ayer a las 8 p. m." },
];

export const WHEN_WHILE = [
  { en: "I was watching TV when you called.", esp: "Estaba viendo la televisión cuando llamaste.", note: "La acción larga va en pasado progresivo; la acción corta que la interrumpe, en pasado simple (when + pasado simple)." },
  { en: "While Octa was doing the chores, you were going shopping.", esp: "Mientras Octa hacía los quehaceres, tú ibas de compras.", note: "While une dos acciones largas que ocurrían al mismo tiempo." },
];

export const MISTAKES = [
  ["They was playing soccer.", "They were playing soccer.", "Con you / we / they usa were."],
  ["I was watch TV.", "I was watching TV.", "Después de was / were, el verbo lleva -ing."],
  ["Octa wasn't do the chores.", "Octa wasn't doing the chores.", "La negación también lleva el verbo en -ing."],
  ["What you were doing?", "What were you doing?", "En la pregunta, was / were va antes del sujeto."],
  ["Were you going shopping? — Yes, I were.", "Were you going shopping? — Yes, I was.", "La respuesta usa el sujeto de quien responde: I → was."],
];

export const GUIDED_WAS_WERE = {
  prompt: "Completa con was o were.",
  rows: [
    ["I ___ watching TV.", "I was watching TV."],
    ["Octa ___ doing the chores.", "Octa was doing the chores."],
    ["You ___ going shopping.", "You were going shopping."],
    ["We ___ studying at 9 p.m.", "We were studying at 9 p.m."],
    ["It ___ raining last night.", "It was raining last night."],
    ["My friends ___ playing soccer.", "My friends were playing soccer."],
  ],
};

export const GUIDED_TRANSFORM = {
  prompt: "Convierte cada oración en negativa y en pregunta.",
  rows: [
    ["She was cooking dinner.", "She wasn't cooking dinner.", "Was she cooking dinner?"],
    ["They were playing soccer.", "They weren't playing soccer.", "Were they playing soccer?"],
    ["Octa was doing the chores.", "Octa wasn't doing the chores.", "Was Octa doing the chores?"],
  ],
};

export const GUIDED_SCHEDULE = {
  prompt: "Esta fue la agenda de Leslie ayer. Responde: What was Leslie doing at …?",
  rows: [
    ["7 a.m.", "take a shower", "She was taking a shower."],
    ["9 a.m.", "work at the office", "She was working at the office."],
    ["1 p.m.", "have lunch with her friends", "She was having lunch with her friends."],
    ["6 p.m.", "go shopping", "She was going shopping."],
    ["9 p.m.", "watch TV", "She was watching TV."],
  ],
};

export const PRACTICE = [
  { question: "Completa: I ___ watching TV. (was / were)", answers: ["was"], explanation: "I was watching TV. Con I usa was." },
  { question: "Completa: You ___ going shopping. (was / were)", answers: ["were"], explanation: "You were going shopping. Con you usa were." },
  { question: "Completa: Octa ___ doing the chores. (was / were)", answers: ["was"], explanation: "Octa was doing the chores. Octa es una sola persona (he), así que usa was." },
  { question: "Completa: They ___ (play) soccer at 5 p.m. yesterday.", answers: ["were playing"], explanation: "They were playing soccer at 5 p.m. yesterday. They → were + verbo-ing." },
  { question: "Completa: We were ___ (swim) in the river.", answers: ["swimming"], explanation: "We were swimming in the river. Swim termina en vocal corta + consonante: duplica la m y agrega -ing." },
  { question: "Completa: She was ___ (have) lunch with her friends.", answers: ["having"], explanation: "She was having lunch with her friends. Have termina en -e: quita la e y agrega -ing." },
  { question: "Convierte en negativa: Octa was doing the chores.", answers: ["Octa wasn't doing the chores.", "Octa was not doing the chores."], explanation: "Octa wasn't doing the chores. Agrega not después de was: was not = wasn't." },
  { question: "Convierte en negativa: You were going shopping.", answers: ["You weren't going shopping.", "You were not going shopping."], explanation: "You weren't going shopping. Agrega not después de were: were not = weren't." },
  { question: "Convierte en pregunta: She was cooking dinner.", answers: ["Was she cooking dinner?"], explanation: "Was she cooking dinner? Coloca was antes del sujeto." },
  { question: "Responde afirmativamente, hablando de ti, con una respuesta corta: Were you going shopping?", answers: ["Yes, I was."], explanation: "Yes, I was. Quien responde habla de sí mismo: I → was." },
  { question: "Responde negativamente con una respuesta corta: Was Octa doing the chores?", answers: ["No, he wasn't.", "No, he was not."], explanation: "No, he wasn't. Las respuestas cortas usan was / wasn't, sin repetir el verbo en -ing." },
  { question: "Ordena: were / What / doing / you / yesterday / ?", answers: ["What were you doing yesterday?"], explanation: "Palabra WH + were + sujeto + verbo-ing + expresión de tiempo: What were you doing yesterday?" },
  { question: "Corrige: They was playing soccer.", answers: ["They were playing soccer."], explanation: "They were playing soccer. Con you / we / they usa were." },
  { question: "Corrige: I was watch TV.", answers: ["I was watching TV."], explanation: "I was watching TV. Después de was / were, el verbo lleva -ing." },
  { question: "Traduce: Ella estaba durmiendo.", answers: ["She was sleeping."], explanation: "She was sleeping. Estaba + -iendo = was + verbo-ing." },
  { question: "Completa: I ___ (watch) TV when you called.", answers: ["was watching"], explanation: "I was watching TV when you called. La acción larga va en pasado progresivo y la que la interrumpe (called) va en pasado simple." },
];
