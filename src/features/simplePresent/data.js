const su = t => ({ t, r: "subject" });
const vb = t => ({ t, r: "verb" });
const s3 = t => ({ t, r: "s3" });
const ax = t => ({ t, r: "aux" });
const no = t => ({ t, r: "neg" });
const wh = t => ({ t, r: "wh" });

// Para qué sirve el tiempo — cada uso con su ejemplo modelo
export const SP_USES = [
  {
    icon: "🔁", title: "Rutinas y hábitos",
    subtitle: "Lo que haces todos los días, cada semana, siempre",
    example: { pts: [su("I"), " ", vb("get"), " up at 6 a.m. every day."], esp: "Me levanto a las 6 a.m. todos los días." },
  },
  {
    icon: "🌎", title: "Hechos y verdades generales",
    subtitle: "Cosas que son ciertas siempre, no solo hoy",
    example: { pts: [su("Water"), " ", vb("freeze"), s3("s"), " at 0 degrees."], esp: "El agua se congela a 0 grados." },
  },
  {
    icon: "❤️", title: "Gustos, opiniones y estados",
    subtitle: "like, love, hate, want, need, think, know...",
    example: { pts: [su("She"), " ", vb("like"), s3("s"), " coffee."], esp: "A ella le gusta el café." },
  },
  {
    icon: "🕐", title: "Horarios fijos",
    subtitle: "Tiendas, clases, transporte — lo que pasa a una hora establecida",
    example: { pts: [su("The store"), " ", vb("open"), s3("s"), " at nine."], esp: "La tienda abre a las nueve." },
  },
];

export const SP_AFF = [
  { pts: [su("I"), " ", vb("work"), " in an office."],                esp: "Yo trabajo en una oficina." },
  { pts: [su("You"), " ", vb("study"), " English every day."],        esp: "Tú estudias inglés todos los días." },
  { pts: [su("He"), " ", vb("work"), s3("s"), " at a hospital."],     esp: "Él trabaja en un hospital." },
  { pts: [su("She"), " ", vb("stud"), s3("ies"), " at night."],       esp: "Ella estudia en la noche." },
  { pts: [su("It"), " ", vb("rain"), s3("s"), " a lot in June."],     esp: "Llueve mucho en junio." },
  { pts: [su("We"), " ", vb("live"), " in Mexico City."],             esp: "Nosotros vivimos en la Ciudad de México." },
  { pts: [su("They"), " ", vb("play"), " soccer on Sundays."],        esp: "Ellos juegan futbol los domingos." },
  { pts: [su("My brother"), " ", vb("watch"), s3("es"), " TV after dinner."], esp: "Mi hermano ve tele después de cenar." },
];

// Ortografía de la -s de he/she/it — [base, terminación, palabra original]
export const THIRD_PERSON_RULES = [
  {
    rule: "1. Regla general → + S", color: "#4ade80",
    desc: "La mayoría de los verbos solo agregan una S al final.",
    words: [["work", "s"], ["play", "s"], ["live", "s"], ["eat", "s"], ["read", "s"]],
  },
  {
    rule: "2. Termina en s, sh, ch, x, z → + ES", color: "#60a5fa",
    desc: "Una S sola no se podría pronunciar ahí, así que se agrega ES.",
    words: [["watch", "es"], ["wash", "es"], ["fix", "es"], ["kiss", "es"], ["teach", "es"]],
  },
  {
    rule: "3. Consonante + Y → quita la Y, pon IES", color: "#f472b6",
    desc: "Igual que en los plurales: study → studies.",
    words: [["stud", "ies", "study"], ["cr", "ies", "cry"], ["fl", "ies", "fly"], ["carr", "ies", "carry"]],
  },
  {
    rule: "4. Vocal + Y → solo agrega S", color: "#fbbf24",
    desc: "Si antes de la Y hay una vocal, la Y no se toca.",
    words: [["play", "s"], ["say", "s"], ["buy", "s"], ["enjoy", "s"]],
  },
  {
    rule: "5. Termina en O → + ES", color: "#fb923c",
    desc: "Son pocos, pero son de los más usados.",
    words: [["go", "es"], ["do", "es"]],
  },
  {
    rule: "6. Irregular — HAVE cambia a HAS", color: "#f87171",
    desc: "Es el único verbo que cambia por completo en la tercera persona.",
    words: [["ha", "s", "have"]],
  },
];

export const SP_NEG = [
  { pts: [su("I"), " ", ax("do"), no("n't"), " ", vb("work"), " on Sundays."],      esp: "Yo no trabajo los domingos." },
  { pts: [su("You"), " ", ax("do"), no("n't"), " ", vb("like"), " coffee."],        esp: "A ti no te gusta el café." },
  { pts: [su("He"), " ", ax("does"), no("n't"), " ", vb("work"), " here."],         esp: "Él no trabaja aquí." },
  { pts: [su("She"), " ", ax("does"), no("n't"), " ", vb("study"), " French."],     esp: "Ella no estudia francés." },
  { pts: [su("It"), " ", ax("does"), no("n't"), " ", vb("rain"), " in May."],       esp: "No llueve en mayo." },
  { pts: [su("We"), " ", ax("do"), no("n't"), " ", vb("live"), " in Monterrey."],   esp: "Nosotros no vivimos en Monterrey." },
  { pts: [su("They"), " ", ax("do"), no("n't"), " ", vb("play"), " tennis."],       esp: "Ellos no juegan tenis." },
];

export const SP_INT = [
  { q: [ax("Do"), " ", su("you"), " ", vb("work"), " here?"],          a: "Yes, I do. / No, I don't.",         esp: "¿Trabajas aquí?" },
  { q: [ax("Do"), " ", su("they"), " ", vb("live"), " in Mexico?"],    a: "Yes, they do. / No, they don't.",   esp: "¿Ellos viven en México?" },
  { q: [ax("Does"), " ", su("he"), " ", vb("speak"), " English?"],     a: "Yes, he does. / No, he doesn't.",   esp: "¿Él habla inglés?" },
  { q: [ax("Does"), " ", su("she"), " ", vb("like"), " pizza?"],       a: "Yes, she does. / No, she doesn't.", esp: "¿A ella le gusta la pizza?" },
  { q: [ax("Does"), " ", su("it"), " ", vb("cost"), " a lot?"],        a: "Yes, it does. / No, it doesn't.",   esp: "¿Cuesta mucho?" },
  { q: [ax("Do"), " ", su("we"), " ", vb("need"), " a ticket?"],       a: "Yes, we do. / No, we don't.",       esp: "¿Necesitamos un boleto?" },
];

export const SP_WH = [
  { q: [wh("What"), " ", ax("do"), " ", su("you"), " ", vb("do"), "?"],                a: "I'm a teacher.",              esp: "¿A qué te dedicas?" },
  { q: [wh("Where"), " ", ax("does"), " ", su("she"), " ", vb("live"), "?"],           a: "She lives in Puebla.",        esp: "¿Dónde vive ella?" },
  { q: [wh("When"), " ", ax("do"), " ", su("they"), " ", vb("start"), "?"],            a: "They start at 8 a.m.",        esp: "¿Cuándo empiezan?" },
  { q: [wh("Why"), " ", ax("does"), " ", su("he"), " ", vb("study"), " English?"],     a: "Because he wants a better job.", esp: "¿Por qué estudia inglés?" },
  { q: [wh("How often"), " ", ax("do"), " ", su("you"), " ", vb("exercise"), "?"],     a: "Three times a week.",         esp: "¿Cada cuánto haces ejercicio?" },
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
  { pts: [su("I"), " never ", vb("eat"), " fast food."],                            esp: "Yo nunca como comida rápida." },
  { pts: [su("They"), " sometimes ", vb("work"), " on Saturdays."],                 esp: "Ellos a veces trabajan los sábados." },
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
    example: { pts: [su("I"), " am ", vb("work"), { t: "ing", r: "ing" }, " right now."], esp: "Estoy trabajando ahora mismo." },
  },
];

export const COMMON_MISTAKES = [
  { wrong: "He work in a bank.",      right: "He works in a bank.",      esp: "Con he / she / it el verbo SIEMPRE lleva -s." },
  { wrong: "She doesn't works here.", right: "She doesn't work here.",   esp: "La -s ya está en doesn't — el verbo se queda en su forma base." },
  { wrong: "Does he works here?",     right: "Does he work here?",       esp: "Mismo caso: Does ya carga la -s de la tercera persona." },
  { wrong: "I no like coffee.",       right: "I don't like coffee.",     esp: "El inglés no niega con un simple no: necesita don't / doesn't." },
  { wrong: "Do she like pizza?",      right: "Does she like pizza?",     esp: "Con he / she / it el auxiliar es Does, no Do." },
  { wrong: "He is work every day.",   right: "He works every day.",      esp: "El Simple Present no usa am / is / are — ese es el progresivo." },
];

export const EXERCISE = [
  { q: "(work) He ___ in a hospital.",           pts: [su("He"), " ", vb("work"), s3("s"), " in a hospital."],                 esp: "Él trabaja en un hospital." },
  { q: "(study) They ___ English on Mondays.",   pts: [su("They"), " ", vb("study"), " English on Mondays."],                  esp: "Ellos estudian inglés los lunes." },
  { q: "(watch) My sister ___ TV at night.",     pts: [su("My sister"), " ", vb("watch"), s3("es"), " TV at night."],          esp: "Mi hermana ve tele en la noche." },
  { q: "(have) Carlos ___ two dogs.",            pts: [su("Carlos"), " ", vb("ha"), s3("s"), " two dogs."],                    esp: "Carlos tiene dos perros." },
  { q: "(go) She ___ to the gym every day.",     pts: [su("She"), " ", vb("go"), s3("es"), " to the gym every day."],          esp: "Ella va al gimnasio todos los días." },
  { q: "(cry) The baby ___ at night.",           pts: [su("The baby"), " ", vb("cr"), s3("ies"), " at night."],                esp: "El bebé llora en la noche." },
  { q: "(not / like) I ___ horror movies.",      pts: [su("I"), " ", ax("do"), no("n't"), " ", vb("like"), " horror movies."], esp: "No me gustan las películas de terror." },
  { q: "(not / eat) He ___ meat.",               pts: [su("He"), " ", ax("does"), no("n't"), " ", vb("eat"), " meat."],        esp: "Él no come carne." },
  { q: "(not / open) The bank ___ on Sundays.",  pts: [su("The bank"), " ", ax("does"), no("n't"), " ", vb("open"), " on Sundays."], esp: "El banco no abre los domingos." },
  { q: "(speak) ___ you ___ Spanish?",           pts: [ax("Do"), " ", su("you"), " ", vb("speak"), " Spanish?"],               esp: "¿Hablas español?" },
  { q: "(live) ___ your brother ___ here?",      pts: [ax("Does"), " ", su("your brother"), " ", vb("live"), " here?"],        esp: "¿Tu hermano vive aquí?" },
  { q: "(start) What time ___ the class ___?",   pts: [wh("What time"), " ", ax("does"), " ", su("the class"), " ", vb("start"), "?"], esp: "¿A qué hora empieza la clase?" },
];
