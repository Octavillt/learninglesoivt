const su = t => ({ t, r: "subject" });
const vb = t => ({ t, r: "verb" });
const pp = t => ({ t, r: "prep" });
const wh = t => ({ t, r: "wh" });
const ax = t => ({ t, r: "aux" });

export const AT = "#f472b6";
export const ON = "#4ade80";
export const IN = "#60a5fa";

// La idea que ordena todo el tema: de lo más puntual (AT) a lo más amplio (IN)
export const ZOOM = [
  { prep: "AT", icon: "🎯", color: AT, size: "Un punto",   esp: "una hora exacta",       sample: "at 7:00 p.m." },
  { prep: "ON", icon: "📅", color: ON, size: "Un día",     esp: "un día o una fecha",    sample: "on Monday" },
  { prep: "IN", icon: "🗓️", color: IN, size: "Un periodo", esp: "meses, años, estaciones", sample: "in July" },
];

export const TIME_USES = [
  {
    prep: "AT", icon: "🎯", color: AT,
    tagline: "Horas y momentos puntuales",
    idea: "Imagina el reloj marcando un minuto exacto: eso es AT.",
    groups: [
      { title: "Horas",              items: ["at 10:00 a.m.", "at seven o'clock", "at 3:15"] },
      { title: "Momentos del reloj", items: ["at night", "at noon", "at midnight", "at dawn"] },
      { title: "Expresiones fijas",  items: ["at the moment", "at lunchtime", "at Christmas", "at the same time"] },
    ],
    note: "at night es la rara del grupo: las demás partes del día van con IN (in the morning), pero la noche siempre lleva AT.",
  },
  {
    prep: "ON", icon: "📅", color: ON,
    tagline: "Días y fechas del calendario",
    idea: "Si lo puedes señalar con el dedo en el calendario, es ON.",
    groups: [
      { title: "Días de la semana", items: ["on Monday", "on Wednesday", "on Fridays"] },
      { title: "Fechas específicas", items: ["on March 20th", "on January 1st", "on my birthday"] },
      { title: "Día + parte del día", items: ["on Monday morning", "on Saturday night", "on Sunday afternoon"] },
    ],
    note: "Cuando el día se junta con la parte del día, ON gana: no es in the morning sino on Monday morning.",
  },
  {
    prep: "IN", icon: "🗓️", color: IN,
    tagline: "Periodos largos",
    idea: "Todo lo que dura más de un día — y las partes del día (menos la noche).",
    groups: [
      { title: "Meses",           items: ["in January", "in March", "in December"] },
      { title: "Años y épocas",   items: ["in 2020", "in 1990", "in the 90s", "in the 21st century"] },
      { title: "Partes del día",  items: ["in the morning", "in the afternoon", "in the evening"] },
      { title: "Estaciones",      items: ["in summer", "in winter", "in the rainy season"] },
    ],
    note: "IN también sirve para el futuro cercano: in two hours = dentro de dos horas.",
  },
];

// La expresión de tiempo casi siempre se va al final de la oración
export const TIME_EXAMPLES = [
  { pts: [su("You"), " ", vb("watch"), " TV ", pp("at"), " night."],            esp: "Tú ves la tele en la noche." },
  { pts: [su("I"), " ", vb("relax"), " ", pp("in"), " the evening."],           esp: "Yo me relajo en la tarde-noche." },
  { pts: [su("You"), " ", vb("study"), " English ", pp("in"), " the morning."], esp: "Tú estudias inglés en la mañana." },
  { pts: [su("The class"), " ", vb("starts"), " ", pp("at"), " 8:00 a.m."],     esp: "La clase empieza a las 8:00 a.m." },
  { pts: [su("We"), " ", vb("have"), " a meeting ", pp("on"), " Tuesday."],     esp: "Tenemos una junta el martes." },
  { pts: [su("She"), " ", vb("was born"), " ", pp("in"), " 1995."],             esp: "Ella nació en 1995." },
  { pts: [su("My birthday"), " ", vb("is"), " ", pp("on"), " July 5th."],       esp: "Mi cumpleaños es el 5 de julio." },
  { pts: [su("They"), " ", vb("travel"), " ", pp("in"), " summer."],            esp: "Ellos viajan en verano." },
];

// La misma palabra cambia de preposición según qué tan específico seas
export const SAME_WORD = [
  {
    word: "La mañana",
    rows: [
      { prep: "in", color: IN, phrase: "in the morning",        esp: "en la mañana (en general)" },
      { prep: "on", color: ON, phrase: "on Monday morning",     esp: "el lunes en la mañana (día exacto)" },
      { prep: "at", color: AT, phrase: "at 8 in the morning",   esp: "a las 8 de la mañana (hora exacta)" },
    ],
  },
  {
    word: "Diciembre / Navidad",
    rows: [
      { prep: "in", color: IN, phrase: "in December",           esp: "en diciembre (todo el mes)" },
      { prep: "on", color: ON, phrase: "on December 25th",      esp: "el 25 de diciembre (fecha)" },
      { prep: "at", color: AT, phrase: "at Christmas",          esp: "en Navidad (la temporada, expresión fija)" },
    ],
  },
  {
    word: "El fin de semana",
    rows: [
      { prep: "on", color: ON, phrase: "on the weekend",        esp: "el fin de semana (inglés americano 🇺🇸)" },
      { prep: "at", color: AT, phrase: "at the weekend",        esp: "el fin de semana (inglés británico 🇬🇧)" },
      { prep: "on", color: ON, phrase: "on Saturday",           esp: "el sábado (un día concreto)" },
    ],
  },
];

// Las mismas tres preposiciones, ahora aplicadas al espacio
export const PLACE_USES = [
  {
    prep: "AT", icon: "📌", color: AT,
    tagline: "Un punto en el mapa",
    idea: "El lugar visto como una dirección o un punto donde estás, sin importar si es adentro o afuera.",
    items: ["at home", "at work", "at school", "at the bus stop", "at the party", "at 25 Main Street"],
  },
  {
    prep: "ON", icon: "🛣️", color: ON,
    tagline: "Sobre una superficie o una línea",
    idea: "Algo que toca una superficie, o un lugar que se piensa como línea (calles, pisos, transporte público).",
    items: ["on the table", "on the wall", "on Main Street", "on the second floor", "on the bus", "on the plane"],
  },
  {
    prep: "IN", icon: "📦", color: IN,
    tagline: "Dentro de un espacio",
    idea: "Adentro de algo cerrado — y también ciudades, países y continentes, porque estás dentro de ellos.",
    items: ["in the box", "in the kitchen", "in the car", "in Mexico", "in Monterrey", "in Latin America"],
  },
];

export const TRANSPORT_NOTE = [
  { right: "in the car / in a taxi",           esp: "Vehículos pequeños en los que te metes: IN." },
  { right: "on the bus / on the train / on the plane", esp: "Transporte donde puedes caminar de pie: ON." },
];

// Expresiones que se aprenden de memoria: no siguen ninguna lógica
export const FIXED = [
  { phrase: "at home",        esp: "en casa" },
  { phrase: "at work",        esp: "en el trabajo" },
  { phrase: "at night",       esp: "en la noche" },
  { phrase: "at the moment",  esp: "en este momento" },
  { phrase: "on time",        esp: "puntual, a la hora exacta" },
  { phrase: "in time",        esp: "con tiempo de sobra" },
  { phrase: "on TV",          esp: "en la tele" },
  { phrase: "on the phone",   esp: "al teléfono" },
  { phrase: "in the end",     esp: "al final (después de todo)" },
  { phrase: "at the end of",  esp: "al final de (algo concreto)" },
  { phrase: "in English",     esp: "en inglés" },
  { phrase: "on foot",        esp: "a pie, caminando" },
];

export const MISTAKES = [
  { wrong: "I wake up in 6 a.m.",            right: "I wake up at 6 a.m.",            esp: "Las horas exactas siempre van con AT." },
  { wrong: "She was born on 1995.",          right: "She was born in 1995.",          esp: "Los años son periodos largos: IN." },
  { wrong: "We have a class in Monday.",     right: "We have a class on Monday.",     esp: "Los días de la semana van con ON." },
  { wrong: "I study English in the night.",  right: "I study English at night.",      esp: "La noche es la excepción: at night, nunca in the night." },
  { wrong: "My birthday is in July 5th.",    right: "My birthday is on July 5th.",    esp: "Con el día del mes ya es una fecha: ON." },
  { wrong: "He arrives at Monday morning.",  right: "He arrives on Monday morning.",  esp: "Si hay día de la semana, manda ON aunque diga morning." },
  { wrong: "I live at Mexico.",              right: "I live in Mexico.",              esp: "Países y ciudades van con IN." },
  { wrong: "The keys are at the table.",     right: "The keys are on the table.",     esp: "Encima de una superficie: ON." },
];

export const EXERCISE = [
  { q: "The movie starts ___ 8:00 p.m.",        pts: [su("The movie"), " ", vb("starts"), " ", pp("at"), " 8:00 p.m."],           esp: "La película empieza a las 8:00 p.m." },
  { q: "I go to the gym ___ Mondays.",          pts: [su("I"), " ", vb("go"), " to the gym ", pp("on"), " Mondays."],             esp: "Voy al gimnasio los lunes." },
  { q: "It rains a lot ___ June.",              pts: [su("It"), " ", vb("rains"), " a lot ", pp("in"), " June."],                 esp: "Llueve mucho en junio." },
  { q: "She reads ___ the evening.",            pts: [su("She"), " ", vb("reads"), " ", pp("in"), " the evening."],               esp: "Ella lee en la tarde-noche." },
  { q: "My sister works ___ night.",            pts: [su("My sister"), " ", vb("works"), " ", pp("at"), " night."],               esp: "Mi hermana trabaja en la noche." },
  { q: "We celebrate ___ December 24th.",       pts: [su("We"), " ", vb("celebrate"), " ", pp("on"), " December 24th."],          esp: "Celebramos el 24 de diciembre." },
  { q: "They moved to Canada ___ 2018.",        pts: [su("They"), " ", vb("moved"), " to Canada ", pp("in"), " 2018."],           esp: "Se mudaron a Canadá en 2018." },
  { q: "The kids are ___ school right now.",    pts: [su("The kids"), " ", vb("are"), " ", pp("at"), " school right now."],       esp: "Los niños están en la escuela ahora mismo." },
  { q: "Your phone is ___ the table.",          pts: [su("Your phone"), " ", vb("is"), " ", pp("on"), " the table."],             esp: "Tu teléfono está sobre la mesa." },
  { q: "I have a meeting ___ Friday morning.",  pts: [su("I"), " ", vb("have"), " a meeting ", pp("on"), " Friday morning."],     esp: "Tengo una junta el viernes en la mañana." },
];

// Del mismo pizarrón: cómo preguntar y responder cada cuánto pasa algo
export const HOW_OFTEN = [
  { q: [wh("How often"), " ", ax("do"), " ", su("you"), " ", vb("take"), " a taxi?"],  a: "Once a year.",        esp: "¿Cada cuánto tomas un taxi?" },
  { q: [wh("How often"), " ", ax("do"), " ", su("they"), " ", vb("travel"), "?"],      a: "Twice a year.",       esp: "¿Cada cuánto viajan?" },
  { q: [wh("How often"), " ", ax("does"), " ", su("she"), " ", vb("go"), " to the gym?"], a: "Three times a week.", esp: "¿Cada cuánto va ella al gimnasio?" },
];

export const FREQUENCY_WORDS = [
  { word: "Once",              esp: "una vez" },
  { word: "Twice",             esp: "dos veces" },
  { word: "Three times",       esp: "tres veces" },
  { word: "Four times",        esp: "cuatro veces" },
  { word: "Several times",     esp: "varias veces" },
];

export const EVERY_WORDS = ["every day", "every week", "every month", "every year", "every Sunday"];

export const FREQUENCY_EXAMPLES = [
  { pts: [su("I"), " ", vb("take"), " the taxi once a week."],           esp: "Tomo el taxi una vez por semana." },
  { pts: [su("He"), " ", vb("brushes"), " his teeth three times a day."], esp: "Él se lava los dientes tres veces al día." },
  { pts: [su("We"), " ", vb("visit"), " my grandma every Sunday."],       esp: "Visitamos a mi abuela todos los domingos." },
];
