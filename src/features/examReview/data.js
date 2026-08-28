export const WH_QUESTIONS = [
  { word: "What", use: "cosas, acciones o información", example: "What do you do on weekends?" },
  { word: "Where", use: "lugares", example: "Where does your brother work?" },
  { word: "When / What time", use: "día, momento u hora", example: "What time does Jerry get up?" },
  { word: "Who", use: "personas", example: "Who do you see on weekends?" },
  { word: "Why", use: "razones", example: "Why do you study English?" },
  { word: "How", use: "manera; How often = frecuencia", example: "How often does she exercise?" },
];

export const FREQUENCY_ADVERBS = [
  ["always", "siempre", "100%"],
  ["usually", "normalmente", "80%"],
  ["often", "a menudo", "60%"],
  ["sometimes", "a veces", "40%"],
  ["rarely", "rara vez", "10%"],
  ["never", "nunca", "0%"],
];

export const ED_ING_PAIRS = [
  ["amazed", "amazing", "The game is amazing. I am amazed."],
  ["bored", "boring", "The class is boring. We are bored."],
  ["excited", "exciting", "The new toy is exciting. My brother is excited."],
  ["tired", "tiring", "The trip is tiring. They are tired."],
  ["confused", "confusing", "Math is confusing. I am confused."],
  ["disappointed", "disappointing", "The test score is disappointing. She is disappointed."],
];

export const DAILY_BLOG_VOCAB = [
  ["start work", "empezar a trabajar", "I start work at 8:00 a.m."],
  ["walk your dog", "pasear a tu perro", "I walk my dog in the morning."],
  ["have coffee", "tomar café", "She has coffee before work."],
  ["get ready for work", "prepararse para el trabajo", "He gets ready for work at 7:00."],
  ["take the subway", "tomar el metro", "Jerry takes the subway to work."],
  ["make phone calls", "hacer llamadas telefónicas", "I make phone calls at work."],
  ["go home", "ir a casa", "They go home in the evening."],
  ["have dinner", "cenar", "We have dinner at 8:00 p.m."],
];

export const FREQUENCY_AND_TIME = [
  ["once a day", "una vez al día"],
  ["twice a week", "dos veces a la semana"],
  ["three times a month", "tres veces al mes"],
  ["every day / week / month", "todos los días / cada semana / cada mes"],
  ["at 7:00 p.m.", "a las 7:00 p. m."],
  ["on Mondays", "los lunes"],
  ["in 2020 / in August", "en 2020 / en agosto"],
];

export const PLACES_WE_LIVE = [
  ["home", "hogar / casa"],
  ["house", "casa (edificio)"],
  ["apartment", "departamento"],
  ["neighborhood", "colonia / vecindario"],
  ["café", "cafetería"],
  ["restaurant", "restaurante"],
  ["city", "ciudad"],
  ["quiet", "tranquilo"],
  ["lively", "animado / con mucha vida"],
  ["busy", "muy concurrido / ocupado"],
  ["noisy", "ruidoso"],
  ["expensive", "caro"],
  ["exciting", "emocionante"],
  ["popular", "popular"],
];

export const PRACTICE = [
  {
    question: "___ does Jerry get up? — At about 6:30 a.m.",
    options: ["What", "What time", "Who"],
    correct: 1,
    explanation: "Usa What time para preguntar la hora.",
  },
  {
    question: "Where ___ your brother work?",
    options: ["do", "does", "is"],
    correct: 1,
    explanation: "Con he / she / it usamos does + verbo en forma base.",
  },
  {
    question: "She ___ drinks coffee in the morning.",
    options: ["always", "is always", "always is"],
    correct: 0,
    explanation: "El adverbio va antes del verbo principal: always drinks.",
  },
  {
    question: "The movie is ___. I am ___.",
    options: ["boring / bored", "bored / boring", "bored / bored"],
    correct: 0,
    explanation: "-ing describe la cosa que causa la sensación; -ed describe cómo se siente la persona.",
  },
  {
    question: "Before work, Jerry ___ coffee.",
    options: ["has", "does", "makes"],
    correct: 0,
    explanation: "La expresión del blog es have coffee; con Jerry cambia a has coffee.",
  },
  {
    question: "Jerry ___ the subway to work.",
    options: ["takes", "goes", "does"],
    correct: 0,
    explanation: "Take the subway significa tomar el metro.",
  },
  {
    question: "I go to bed ___ 10:00 p.m.",
    options: ["in", "on", "at"],
    correct: 2,
    explanation: "Usa at con una hora exacta.",
  },
  {
    question: "We have English class ___ Mondays.",
    options: ["at", "on", "in"],
    correct: 1,
    explanation: "Usa on con los días de la semana.",
  },
  {
    question: "They visit their grandparents ___ a month.",
    options: ["twice", "every", "on"],
    correct: 0,
    explanation: "Twice a month = dos veces al mes.",
  },
  {
    question: "This is an ___ neighborhood.",
    options: ["excited", "exciting", "excite"],
    correct: 1,
    explanation: "El vecindario causa la emoción, por eso usa exciting.",
  },
  {
    question: "Who ___ you go to the movies with on weekends?",
    options: ["do", "does", "are"],
    correct: 0,
    explanation: "Con you usamos do + verbo en forma base: Who do you go ... with?",
  },
  {
    question: "My parents ___ late on Sundays because they relax at home.",
    options: ["never are", "are never", "never is"],
    correct: 1,
    explanation: "Con el verbo to be, el adverbio va después: They are never late.",
  },
  {
    question: "The homework is ___. The students are ___.",
    options: ["confusing / confused", "confused / confusing", "confuse / confused"],
    correct: 0,
    explanation: "La tarea causa la confusión (confusing); los estudiantes sienten la confusión (confused).",
  },
  {
    question: "After work, Jerry goes home, walks his dog again, and then ___.",
    options: ["has dinner", "takes the subway", "gets ready for work"],
    correct: 0,
    explanation: "En The Daily Blog, después de llegar a casa Jerry has dinner.",
  },
  {
    question: "I study English ___ the evening and I have class ___ Thursday.",
    options: ["on / at", "in / on", "at / in"],
    correct: 1,
    explanation: "Usa in the evening y on Thursday.",
  },
  {
    question: "My neighborhood has many cafés and restaurants. It is very ___.",
    options: ["lively", "tired", "bored"],
    correct: 0,
    explanation: "Lively describe un lugar animado, con mucha vida y actividad.",
  },
];
