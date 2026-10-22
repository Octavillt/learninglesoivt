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
  ["Did Karen drink mezcal?", "Yes, she did.", "¿Karen tomó mezcal? — Sí."],
  ["Did Karen do yoga yesterday?", "No, she didn't.", "¿Karen hizo yoga ayer? — No."],
  ["Didn't Miguel eat a sandwich?", "No, he didn't. / Yes, he did.", "¿Miguel no comió un sándwich? — No. / Sí."],
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
  { sound: "/t/", after: "Después de los sonidos p, k, f, sh, ch, s (ss o c con sonido s) y x.", examples: "helped, worked, laughed, watched, kissed, washed, danced, fixed" },
  { sound: "/d/", after: "Después de los sonidos l, n, r, g, v, z, m, b y de las vocales.", examples: "called, cleaned, loved, climbed, answered, hugged, used, seemed" },
  { sound: "/ɪd/", after: "Después de los sonidos t y d; se agrega una sílaba.", examples: "visited, wanted, needed" },
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

export const PRACTICE = [
  { question: "Escribe el pasado simple de work.", answers: ["worked"], explanation: "work → worked. Verbo regular: solo agrega -ed." },
  { question: "Escribe el pasado simple de study.", answers: ["studied"], explanation: "study → studied. Consonante + y: cambia la y por -ied." },
  { question: "Escribe el pasado simple de stop.", answers: ["stopped"], explanation: "stop → stopped. Consonante-vocal-consonante: dobla la consonante final." },
  { question: "Completa: She ___ (drink) mezcal yesterday.", answers: ["drank"], explanation: "She drank mezcal yesterday. Drink es irregular: drink → drank." },
  { question: "Convierte en negativa: He went to Puebla.", answers: ["He didn't go to Puebla.", "He did not go to Puebla."], explanation: "He didn't go to Puebla. Didn't ya marca el pasado, así que el verbo vuelve a su forma base." },
  { question: "Convierte en pregunta: Karen did yoga yesterday.", answers: ["Did Karen do yoga yesterday?"], explanation: "Did Karen do yoga yesterday? Usa did + sujeto + verbo base." },
  { question: "Responde negativamente con una respuesta corta: Did Octa eat cemitas?", answers: ["No, he didn't.", "No, he did not."], explanation: "No, he didn't. Las respuestas cortas usan did o didn't, sin repetir el verbo principal." },
  { question: "Ordena: did / What / do / you / yesterday / ?", answers: ["What did you do yesterday?"], explanation: "What + did + sujeto + verbo base + expresión de tiempo: What did you do yesterday?" },
  { question: "Corrige: He didn't went to Acapulco.", answers: ["He didn't go to Acapulco.", "He did not go to Acapulco."], explanation: "He didn't go to Acapulco. Después de didn't el verbo va en forma base, no went." },
  { question: "Traduce: ¿Dónde creció él?", answers: ["Where did he grow up?"], explanation: "Where did he grow up? Grow up es irregular: su pasado es grew up." },
];
