import { TOPICS, TOPICS_BASICO2, TOPICS_BASICO3, TOPICS_BASICO4, TOPICS_BASICO5, TOPICS_VERBOS, TOPICS_QUIZ } from "./topics";
import { BODY_WORDS } from "../features/bodyParts/data";
import { FOOD_GROUPS, FOOD_ADJECTIVES, EXTRA_WORDS } from "../features/foodGroups/data";
import { EXERCISE_WORDS } from "../features/exerciseWords/data";
import { FORMATION_RULES } from "../features/adverbsManner/data";
import { STUDY_TOPICS } from "../features/moduleIVExam/data";
import { STUDY_TOPICS as OCTOBER_STUDY_TOPICS } from "../features/octoberExam/data";
import { STUDY_TOPICS as MODULE_V_STUDY_TOPICS } from "../features/moduleVExam/data";
import { isTopicAvailable } from "./topicAvailability";

// Índice de búsqueda global: por cada tema, guardamos su label + un puñado
// de palabras clave (inglés/español) representativas de su contenido, para
// poder buscar por tema completo y saltar directo a él con goTo().
// Si se agrega contenido nuevo a un data.js, conviene sumar aquí sus
// palabras más relevantes (no hace falta ser exhaustivo).

const topicMeta = {};
[...TOPICS, ...TOPICS_BASICO2, ...TOPICS_BASICO3, ...TOPICS_BASICO4, ...TOPICS_BASICO5, ...TOPICS_VERBOS, ...TOPICS_QUIZ].forEach(t => { topicMeta[t.id] = t; });

const SEARCH_KEYWORDS = {
  octoberExam: ["guía de examen de octubre", "examen octubre", "october exam", "cooking", "clothes", "tourism", "collocations", "could", "should", "gerund", "infinitive", ...OCTOBER_STUDY_TOPICS.flatMap(topic => [topic.title, ...topic.rules, ...topic.vocab.flat(), ...topic.examples.flat()])],
  moduleVExam: ["guía de examen módulo v", "examen módulo v", "examen basico v", "examen básico v", "simple past", "pasado simple", "going to", "collocations", "social life", "vida social", "simulador", ...MODULE_V_STUDY_TOPICS.flatMap(topic => [topic.title, ...topic.rules, ...topic.vocab.flat(), ...topic.examples.flat()])],
  moduleIVExam: ["guía de examen", "examen módulo iv", "exam study guide", "simulador", ...STUDY_TOPICS.flatMap(topic => [topic.title, ...topic.rules, ...topic.vocab.flat(), ...topic.examples.flat()])],
  adverbsManner: ["adverbs of manner", "adverbios de modo", "adjetivos", "cómo", "how", "good", "well", "fast", "hard", "hardly", "little", "lately", "friendly", "beautifully", "quickly", "carefully", "slowly", "happily", "easily", "gently", "can", ...FORMATION_RULES.flatMap(rule => [rule.title, rule.description, ...rule.examples.flat()])],
  exerciseWords: ["exercise words", "exercising", "ejercicio", "movimientos", "instrucciones", "imperativo", "pesas", "warm up", "cool down", "work out", "stand up", "stand still", ...EXERCISE_WORDS.flatMap(word => [word.en, word.es, word.ing, word.instruction, word.meaning, word.note])],
  foodGroups: ["food groups", "food grups", "grupos de alimentos", "comida", "sabores", "gustos", "contables", "incontables", ...FOOD_GROUPS.flatMap(group => [group.name, group.translation, ...group.foods.flat()]), ...FOOD_ADJECTIVES.flat(), ...EXTRA_WORDS.flat()],
  countable: ["countable", "uncountable", "uncontable", "contables", "incontables", "sustantivos", "noun", "how many", "how much", "some", "any", "many", "much", "a few", "a little", "a lot of", "cuantificadores", "cantidades", "water", "juice", "rice", "spaghetti", "lentils", "noodles", "money", "bills", "coins", "cake", "slice", "bottle", "broccoli", "tacos", "guavas"],
  can: ["can", "can't", "cannot", "habilidades", "abilities", "skills", "verbo modal", "poder", "saber", "sing", "dance", "bark", "meow", "purr", "climb", "swim", "Bad Bunny"],
  verbs: [
    "answer","ask","be","break","buy","carry","clean","close","cook","come","cry","cut",
    "dance","do","draw","drink","drive","eat","erase","find","fly","get up","give","go",
    "have","help","jump","learn","listen to","live","look up","make","open","paint","pay",
    "push","play","read","run","see","sell","sing","sit","sleep","speak","swim","study",
    "take","teach","think","visit","want","walk","wake up","wash","watch","work","write",
    "contestar","preguntar","romper","comprar","limpiar","cocinar","llorar","cortar",
    "bailar","hacer","dibujar","beber","manejar","comer","borrar","encontrar","volar",
    "levantarse","dar","ir","tener","ayudar","saltar","aprender","escuchar","vivir",
    "buscar","abrir","pintar","pagar","jugar","leer","correr","ver","vender","cantar",
    "sentarse","dormir","hablar","nadar","estudiar","tomar","enseñar","pensar","visitar",
    "querer","caminar","despertarse","lavar","trabajar","escribir","verbos",
  ],
  fruits: [
    "apple","banana","orange","strawberry","grape","watermelon","pineapple","mango",
    "pear","cherry","peach","lemon","coconut","melon","kiwi","blueberry","avocado",
    "tomato","lime","pomegranate",
    "manzana","plátano","naranja","fresa","uva","sandía","piña","mango","pera","cereza",
    "durazno","limón","coco","melón","kiwi","arándano","aguacate","jitomate","lima",
    "granada","frutas",
    "vegetables","carrot","broccoli","lettuce","cucumber","onion","garlic","potato",
    "sweet potato","corn","chili","bell pepper","mushroom","eggplant","peas","beans",
    "pumpkin","olive","ginger","salad","tomatillo","green tomato","nopales","cactus paddles",
    "verduras","vegetales","zanahoria","brócoli","lechuga","pepino","cebolla","ajo","papa",
    "camote","elote","maíz","chile","pimiento","champiñón","hongo","berenjena","chícharos",
    "frijoles","calabaza","aceituna","jengibre","ensalada","tomate","tomate verde","nopal",
    "cactus",
  ],
  plural: [
    "plural","cat","book","car","dog","apple","box","watch","bus","dish","cherry",
    "city","baby","boy","toy","day","potato","tomato","shampoo","radio","wolf","wife",
    "leaf","cliff","fish","sheep","deer","man","men","woman","women","child","children",
    "tooth","teeth","foot","feet","mouse","mice","gato","libro","carro","perro","manzana",
    "caja","reloj","autobús","plato","cereza","ciudad","bebé","niño","juguete","día",
    "papa","irregular",
  ],
  numbers: [
    "numbers","zero","one","two","three","four","five","six","seven","eight","nine","ten",
    "eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen",
    "nineteen","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety",
    "hundred","thousand","million","billion","números","cero","uno","dos","tres","cuatro",
    "cinco","room number","cell",
    "letters","letras","alphabet","abecedario","alfabeto","abc","vowels","vocales",
    "consonants","consonantes","spelling","deletrear","how do you spell","double l",
    "sonido largo","sonido corto","long vowel","short vowel","a e i o u",
    "nombre de las letras","letter names",
  ],
  time: [
    "time","clock","o'clock","past","to","half past","quarter past","quarter to","hour",
    "minute","digital","analog","hora","reloj","minutos","cuarto","media",
  ],
  dates: [
    "dates","days","months","monday","tuesday","wednesday","thursday","friday","saturday",
    "sunday","january","february","march","april","may","june","july","august","september",
    "october","november","december","ordinal","first","second","third","season","spring",
    "summer","fall","autumn","winter","fechas","días","meses","lunes","martes","miércoles",
    "jueves","viernes","sábado","domingo","enero","febrero","marzo","abril","mayo","junio",
    "julio","agosto","septiembre","octubre","noviembre","diciembre","estaciones","primavera",
    "verano","otoño","invierno","weekday","weekend",
  ],
  countries: [
    "countries","country","nationality","mexico","united states","canada","brazil",
    "argentina","colombia","spain","france","italy","germany","united kingdom","portugal",
    "russia","china","japan","south korea","india","australia","switzerland","netherlands",
    "greece","turkey","egypt","cuba","peru","chile","venezuela","mexican","american",
    "canadian","brazilian","spanish","french","italian","german","british","where are you from",
    "países","méxico","nacionalidad","ciudad","city","cities",
  ],
  family: [
    "family","mom","mother","dad","father","brother","sister","siblings","grandma",
    "grandmother","grandpa","grandfather","aunt","uncle","cousin","son","daughter",
    "husband","wife","nephew","niece","stepfather","stepmother","stepson","stepdaughter",
    "son-in-law","daughter-in-law","brother-in-law","sister-in-law","mother-in-law",
    "father-in-law","godfather","godmother","boyfriend","girlfriend","grandson",
    "granddaughter","grandchildren","pet","familia","mamá","papá","hermano","hermana",
    "abuela","abuelo","tía","tío","primo","prima","hijo","hija","esposo","esposa",
    "sobrino","sobrina","padrastro","madrastra","yerno","nuera","cuñado","cuñada","suegra",
    "suegro","padrino","madrina","novio","novia","nieto","nieta","mascota",
  ],
  jobs: [
    "jobs","profession","doctor","nurse","dentist","surgeon","veterinarian","cleaner",
    "maid","housewife","delivery man","mail man","mail carrier","barber","hairdresser","cashier",
    "director","producer","singer","ballerina","clown","drummer","photographer","musician",
    "actor","actress","carpenter","builder","civil engineer","electrician","electricista","engineer",
    "technician","mechanic","firefighter","police officer","pilot","lawyer","judge",
    "accountant","programmer","journalist","teacher","athlete","chef","cook","waiter",
    "waitress","farmer","hospital","court","stadium","school","office","restaurant",
    "construction site","studio","police station","fire station","airport","farm",
    "trabajos","profesión","doctor","enfermero","dentista","veterinario","limpiador",
    "cartero","cajero","bombero","policía","abogado","juez","contador","maestro","chef",
    "granjero","hospital","escuela","oficina","restaurante",
  ],
  tobe: [
    "to be","am","is","are","verb to be","soy","eres","es","somos","son","estoy","está",
    "estamos","están","afirmativo","negativo","pregunta","isn't","aren't",
  ],
  demonstratives: [
    "this","that","these","those","demonstratives","near","far","este","esta","estos",
    "estas","ese","esa","esos","esas","cerca","lejos",
  ],
  prepositions: [
    "prepositions","in","on","under","behind","in front of","next to","between","above",
    "preposiciones","dentro","encima","sobre","debajo","detrás","enfrente","al lado",
    "entre","por encima",
  ],
  progressive: [
    "progressive","-ing","present progressive","gerund","playing","eating","reading",
    "running","dancing","writing","sitting","swimming","progresivo","gerundio",
    "está jugando","está comiendo",
  ],
  bodyParts: ["body parts", "partes del cuerpo", "little finger", ...BODY_WORDS.flat().filter(Boolean)],
  simplePast: [
    "simple past", "pasado simple", "past activities", "past routines", "past habits", "short actions",
    "did", "didn't", "did not", "respuestas cortas", "short answers", "yes i did", "no he didn't",
    "went", "ate", "drank", "woke up", "slept", "grew up", "cooked", "worked", "regular verbs",
    "verbos regulares", "verbos en pasado", "-ed", "pronunciación de -ed", "ed pronunciation",
    "yesterday", "last night", "last week", "last weekend", "in 1990", "two years later", "three days ago",
    "ayer", "anoche", "la semana pasada", "el fin de semana pasado", "hace tres días",
    "what did you do", "where did he grow up", "qué hiciste",
  ],
  goingTo: [
    "going to", "gonna", "going to go", "futuro", "future", "future plans", "plans", "intentions",
    "planes", "intenciones", "predictions", "predicciones", "voy a", "va a",
    "tomorrow", "tonight", "after the class", "this weekend", "this summer", "next week", "next winter",
    "in december", "later on", "mañana", "esta noche", "este fin de semana", "este verano",
    "la próxima semana", "el próximo invierno", "en diciembre", "más tarde",
    "seafood", "mariscos", "visit", "visitar", "take a nap", "tomar una siesta",
  ],
  socialCollocations: [
    "collocations", "colocaciones", "social life", "vida social",
    "go out dancing", "visit family", "have a party", "go on a date", "hang out", "hang out with friends",
    "go to a concert", "see a movie", "eat out", "eat out at a restaurant",
    "get upset", "get lost", "get married", "have an argument", "have fun",
    "make a mistake", "make a new friend", "make a decision",
    "salir a bailar", "visitar a la familia", "hacer una fiesta", "salir en una cita", "pasar el rato",
    "ir a un concierto", "ver una película", "comer fuera", "enojarse", "perderse", "casarse",
    "discutir", "divertirse", "cometer un error", "hacer un nuevo amigo", "tomar una decisión",
  ],
  quiz: ["quiz","test","questions","practice","examen","práctica","preguntas"],

  verbFinder: [
    "verbos", "verbs", "lista de verbos", "verb list", "diccionario de verbos",
    "buscador de verbos", "verbos irregulares", "verbos regulares",
    "irregular verbs", "regular verbs", "mis verbos", "conjugar",
  ],

  irregularVerbs: [
    "irregular verbs","past","participle","simple past","was","were","been","became",
    "began","broke","brought","built","bought","caught","chose","came","cost","cut","did",
    "drew","drank","drove","ate","fell","fed","felt","found","flew","got","gave","went",
    "grew","hung","had","heard","hit","held","hurt","kept","knew","left","let","lost",
    "made","met","paid","put","read","rode","rang","rose","ran","said","saw","sold","sent",
    "set","sang","sat","spoke","stood","stuck","took","taught","told","thought","threw",
    "understood","woke","wore","won","wrote","phonetics","ipa","pronunciation","vowels",
    "consonants","diphthongs","verbos irregulares","pasado","participio","fonética",
    "pronunciación",
  ],
  adjectives: [
    "adjectives","big","small","tall","short","long","wide","narrow","thick","thin",
    "heavy","light","young","old","new","beautiful","ugly","clean","dirty","bright","dark",
    "straight","curly","neat","messy","kind","mean","friendly","funny","serious","smart",
    "silly","brave","cowardly","honest","dishonest","patient","impatient","generous",
    "selfish","polite","rude","happy","sad","excited","bored","calm","nervous","proud",
    "ashamed","tired","energetic","confident","shy","hot","cold","warm","cool","sunny",
    "cloudy","wet","dry","windy","fast","slow","easy","difficult","simple","complicated",
    "quiet","loud","good","bad","cheap","expensive","strong","weak","full","empty","rich",
    "poor","safe","dangerous","soft","hard","adjetivos","grande","pequeño","alto","bajo",
    "feliz","triste","caliente","frío","fácil","difícil","calificativos",
  ],
  whQuestions: [
    "wh questions","what","where","why","how","when","who","which","whose","qué","dónde",
    "por qué","cómo","cuándo","quién","cuál","de quién",
  ],
  articles: [
    "articles","a","an","the","zero article","university","hour","european","honest",
    "artículos","sustantivos","incontables",
  ],
  possessiveAdjectives: [
    "possessive adjectives","my","your","his","her","its","our","their","adjetivos posesivos",
    "mi","tu","su","nuestro","its vs it's",
  ],
  possessiveNouns: [
    "possessive nouns","'s","genitive","apostrophe","of","posesivo de sustantivos",
    "genitivo","apóstrofe",
  ],
  gerunds: [
    "ing","gerund","gerundio","uso del ing","verbo como sustantivo","swimming","reading",
    "cooking","dancing","running","shopping","like","love","enjoy","hate","don't mind",
    "prefer","start","finish","stop","keep","continue","avoid","practice","suggest",
    "go shopping","good at","interested in","afraid of","without","before","after",
    "instead of","thank you for","infinitivo","to + verbo","want","need","decide","hope",
    "plan","ing vs to","gerundio vs infinitivo","cvc","doblar consonante","spelling",
    "preposición + ing","sujeto","errores comunes",
  ],
  simplePresent: [
    "simple present","presente simple","present simple","do","does","don't","doesn't",
    "do not","does not","auxiliar","tercera persona","third person","he she it","-s","-es",
    "-ies","works","studies","watches","goes","has","have","rutina","routine","habits",
    "hábitos","every day","todos los días","horarios","hechos","afirmativo","negativo",
    "interrogativo","short answers","yes i do","no he doesn't","conjugación",
  ],
  vocabulary: [
    "vocabulary","greetings","hello","hi","good morning","good afternoon","good evening",
    "how are you","introductions","my name is","nice to meet you","goodbyes","bye",
    "goodbye","see you later","business","employee","employer","manager","product",
    "service","price","discount","invoice","profit","loss","income","expense","salary",
    "budget","investment","tax","office","warehouse","meeting","contract","deadline",
    "report","schedule","email","vocabulario","saludos","despedidas","presentaciones",
    "negocios",
  ],

  inOnAt: [
    "in on at","in","on","at","time expressions","expresiones de tiempo","at night","at noon",
    "at midnight","at the moment","at lunchtime","at christmas","o'clock","in the morning",
    "in the afternoon","in the evening","in january","in 1990","in 2020","in summer",
    "in winter","in the 90s","on monday","on friday","on march 20th","on january 1st",
    "on my birthday","on monday morning","on the weekend","at the weekend","at home","at work",
    "at school","at the bus stop","on the table","on the wall","on main street",
    "on the second floor","on the bus","in the box","in the kitchen","in the car","in mexico",
    "on time","in time","on tv","on the phone","in the end","at the end of","in english",
    "on foot","how often","how often do you","once","twice","three times","four times",
    "several times","once a week","twice a year","three times a day","every day","every week",
    "every month","every year","every sunday","frecuencia","frequency","cada cuánto",
    "una vez","dos veces","varias veces","todos los días","preposiciones de tiempo",
    "preposiciones de lugar","en la mañana","en la noche","en punto","fechas","días",
    "meses","años","estaciones",
  ],
  simplePresentAdvanced: [
    "simple present avanzado","presente simple avanzado","simple present ii",
    "wh questions con do","wh questions con does","preguntas de información",
    "what do you do","where does she live","when do they start","why does he study",
    "how often","cada cuánto","adverbios de frecuencia","frequency adverbs",
    "always","usually","often","sometimes","rarely","never","siempre","normalmente",
    "a menudo","a veces","rara vez","nunca","porcentaje de frecuencia",
    "simple present vs progressive","presente simple vs progresivo","present progressive",
    "progresivo","ahora mismo","right now","now","at the moment","today","marcadores de tiempo",
  ],
  directions: [
    "giving directions","directions","dar indicaciones","pedir indicaciones","cómo llegar",
    "go straight ahead","turn left","turn right","turn around","go over the bridge",
    "go past","take the first left","take the first right","take the second left",
    "take the second right","on the corner","next to","across from","between",
    "traffic light","intersection","where is","how do i get to","excuse me",
    "sigue derecho","todo recto","izquierda","derecha","puente","esquina","semáforo",
    "main street","park avenue","river street","gym","hospital","high school","coffee shop",
  ],
  topicsExam: [
    "topics exam", "exam topics", "examen", "repaso", "there is", "there are", "hay",
    "simple present", "present progressive", "present continuous", "directions", "indicaciones",
    "technology equipment", "tecnología", "teclado", "keyboard", "mouse", "ratón", "monitor", "microphone", "micrófono",
    "headphones", "audífonos", "smartphone", "teléfono inteligente", "social media", "redes sociales",
    "sentimientos", "embarrassed", "apenado", "avergonzado", "angry", "enojado", "sad", "triste", "ed ing",
    "orden de adjetivos", "adjective order", "quality", "opinion", "size", "age", "shape", "color", "origin", "material",
    "formas verbales", "participio", "participle", "spoke", "spoken", "speak speaking",
    "expresiones de tiempo", "time expression", "adverbios de frecuencia", "frequency adverbs", "verbos en -es", "tercera persona",
  ],
  examReview: [
    "repaso","examen","exam review","simple present wh questions","wh questions",
    "frequency adverbs","adverbios de frecuencia","always","usually","often","sometimes","never",
    "adjectives ed ing","adjetivos ed ing","bored boring","excited exciting","tired tiring",
    "daily routine","rutina diaria","start work","walk your dog","have coffee","get ready for work",
    "take the subway","make phone calls","go home","have dinner","frequency expressions",
    "once twice","every day","places we live","neighborhood","lively","noisy",
  ],
};

function buildIndex() {
  const entries = [];
  [
    { levelId: "basico1", topics: TOPICS },
    { levelId: "basico2", topics: TOPICS_BASICO2 },
    { levelId: "basico3", topics: TOPICS_BASICO3 },
    { levelId: "basico4", topics: TOPICS_BASICO4 },
    { levelId: "basico5", topics: TOPICS_BASICO5 },
    { levelId: "verbos", topics: TOPICS_VERBOS },
    { levelId: "quiz", topics: TOPICS_QUIZ },
  ].forEach(({ levelId, topics }) => {
    topics.forEach(t => {
      entries.push({
        levelId,
        topicId: t.id,
        label: t.label,
        english: t.english,
        color: t.color,
        availableUntil: t.availableUntil,
        keywords: [t.english, ...(SEARCH_KEYWORDS[t.id] ?? [])].filter(Boolean),
      });
    });
  });
  return entries;
}

export const SEARCH_INDEX = buildIndex();

function normalize(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

// Busca temas cuyo label o keywords contengan el query. Prioriza coincidencias
// en el label del tema y luego las que matchean por contenido/keyword.
export function searchTopics(query, now = Date.now()) {
  const q = normalize(query.trim());
  if (!q) return [];

  const results = [];
  for (const entry of SEARCH_INDEX) {
    if (!isTopicAvailable(entry, now)) continue;
    const label = normalize(entry.label);
    const labelMatch = label.includes(q) || normalize(entry.english ?? "").includes(q);
    const matchedKeyword = !labelMatch
      ? entry.keywords.find(k => normalize(k).includes(q))
      : null;

    if (labelMatch || matchedKeyword) {
      results.push({
        ...entry,
        matchedKeyword,
        priority: labelMatch ? 0 : 1,
      });
    }
  }

  results.sort((a, b) => a.priority - b.priority || a.label.localeCompare(b.label));
  return results;
}
