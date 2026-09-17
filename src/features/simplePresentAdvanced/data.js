const su = t => ({ t, r: "subject" });
const vb = t => ({ t, r: "verb" });
const s3 = t => ({ t, r: "s3" });
const ax = t => ({ t, r: "aux" });
const no = t => ({ t, r: "neg" });
const wh = t => ({ t, r: "wh" });
const be = t => ({ t, r: "verb_be" });
const ing = t => ({ t, r: "ing" });

// Recordatorio express — repite a propósito las tres formas que ya se vieron
// en Básico II, para que este tema se pueda leer sin salir a repasar.
export const SP_RECAP = [
  { label: "Afirmativo", color: "#4ade80", pts: [su("She"), " ", vb("work"), s3("s"), " here."], esp: "Ella trabaja aquí." },
  { label: "Negativo", color: "#f87171", pts: [su("She"), " ", ax("does"), no("n't"), " ", vb("work"), " here."], esp: "Ella no trabaja aquí." },
  { label: "Interrogativo", color: "#60a5fa", pts: [ax("Does"), " ", su("she"), " ", vb("work"), " here?"], esp: "¿Ella trabaja aquí?" },
];

export const SP_WH = [
  { q: [wh("What"), " ", ax("do"), " ", su("you"), " ", vb("do"), "?"], a: "I'm a teacher.", esp: "¿A qué te dedicas?" },
  { q: [wh("Where"), " ", ax("does"), " ", su("she"), " ", vb("live"), "?"], a: "She lives in Puebla.", esp: "¿Dónde vive ella?" },
  { q: [wh("When"), " ", ax("do"), " ", su("they"), " ", vb("start"), "?"], a: "They start at 8 a.m.", esp: "¿Cuándo empiezan?" },
  { q: [wh("Why"), " ", ax("does"), " ", su("he"), " ", vb("study"), " English?"], a: "Because he wants a better job.", esp: "¿Por qué estudia inglés?" },
  { q: [wh("How often"), " ", ax("do"), " ", su("you"), " ", vb("exercise"), "?"], a: "Three times a week.", esp: "¿Cada cuánto haces ejercicio?" },
];

// [adverbio, español, frecuencia aproximada]
export const FREQUENCY_ADVERBS = [
  ["always", "siempre", "100%"],
  ["usually", "normalmente", "80%"],
  ["often", "a menudo", "60%"],
  ["sometimes", "a veces", "40%"],
  ["rarely", "rara vez", "10%"],
  ["never", "nunca", "0%"],
];

export const FREQUENCY_EXAMPLES = [
  { pts: [su("She"), " always ", vb("drink"), s3("s"), " coffee in the morning."], esp: "Ella siempre toma café en la mañana." },
  { pts: [su("I"), " never ", vb("eat"), " fast food."], esp: "Yo nunca como comida rápida." },
  { pts: [su("They"), " sometimes ", vb("work"), " on Saturdays."], esp: "Ellos a veces trabajan los sábados." },
];

export const SP_VS_PROG = [
  {
    icon: "⏰", title: "Simple Present", subtitle: "Siempre / en general",
    when: "Rutinas, hábitos y hechos. No importa qué pasa en este momento.",
    markers: ["every day", "usually", "on Mondays", "always", "never"],
    example: { pts: [su("I"), " ", vb("work"), " in a bank."], esp: "Trabajo en un banco (es mi trabajo, todos los días)." },
  },
  {
    icon: "🌀", title: "Present Progressive", subtitle: "Ahora mismo",
    when: "Lo que está pasando en este instante, aunque no sea lo de siempre.",
    markers: ["now", "right now", "at the moment", "today"],
    example: { pts: [su("I"), " am ", vb("work"), ing("ing"), " right now."], esp: "Estoy trabajando ahora mismo." },
  },
];

export const SP_ADV_MISTAKES = [
  { wrong: "He is work every day.", right: "He works every day.", esp: "Work en presente simple va sin be: He works. Be sí tiene presente simple: He is a teacher." },
  { wrong: "Where she lives?", right: "Where does she live?", esp: "La pregunta WH también necesita el auxiliar, y el verbo va sin -s." },
  { wrong: "What does he does?", right: "What does he do?", esp: "Does ya carga la -s; el verbo do se queda en su forma base." },
  { wrong: "She drinks always coffee.", right: "She always drinks coffee.", esp: "El adverbio de frecuencia va ANTES del verbo principal." },
  { wrong: "She are always late.", right: "She is always late.", esp: "Con she usa is. La posición habitual de always con be es después del verbo." },
  { wrong: "I working here every day.", right: "I work here every day.", esp: "Para una rutina estable usa presente simple. El progresivo también puede expresar una rutina temporal: I am working here every day this week." },
];

export const SP_ADV_EXERCISE = [
  { q: "(start) What time ___ the class ___?", pts: [wh("What time"), " ", ax("does"), " ", su("the class"), " ", vb("start"), "?"], esp: "¿A qué hora empieza la clase?" },
  { q: "(live) Where ___ your parents ___?", pts: [wh("Where"), " ", ax("do"), " ", su("your parents"), " ", vb("live"), "?"], esp: "¿Dónde viven tus papás?" },
  { q: "(do) What ___ she ___ on weekends?", pts: [wh("What"), " ", ax("does"), " ", su("she"), " ", vb("do"), " on weekends?"], esp: "¿Qué hace ella los fines de semana?" },
  { q: "(study) Why ___ he ___ English?", pts: [wh("Why"), " ", ax("does"), " ", su("he"), " ", vb("study"), " English?"], esp: "¿Por qué estudia inglés?" },
  { q: "(always / arrive) She ___ early.", pts: [su("She"), " always ", vb("arrive"), s3("s"), " early."], esp: "Ella siempre llega temprano." },
  { q: "(never / drink) They ___ soda.", pts: [su("They"), " never ", vb("drink"), " soda."], esp: "Ellos nunca toman refresco." },
  { q: "(usually / be) He ___ late.", pts: [su("He"), " ", be("is"), " usually late."], esp: "Normalmente llega tarde." },
  { q: "(sleep) The baby ___ now.", pts: [su("The baby"), " is ", vb("sleep"), ing("ing"), " now."], esp: "El bebé está durmiendo ahora." },
  { q: "(sleep) My baby ___ eight hours every night.", pts: [su("My baby"), " ", vb("sleep"), s3("s"), " eight hours every night."], esp: "Mi bebé duerme ocho horas cada noche." },
];
