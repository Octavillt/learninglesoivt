import { EXAM_REVIEW_END, TOPICS_EXAM_END, MODULE_IV_EXAM_END } from "./topicAvailability";

// El orden define la ruta sugerida dentro de cada módulo. Los ids conservan
// su módulo original y se comparten con navegación, búsqueda, enlaces y Quiz.
export const TOPICS = [
  { id: "numbers", label: "🔢 Números y abecedario", english: "Numbers & Letters", color: "#DB2777", stage: "Primeras bases" },
  { id: "tobe", label: "✅ Verbo to be", english: "To be: am / is / are", color: "#DC2626", stage: "Primeras bases" },
  { id: "countries", label: "🌎 Países y nacionalidades", english: "Countries & Nationalities", color: "#0EA5E9", stage: "Hablar de ti y de otras personas" },
  { id: "family", label: "👪 La familia", english: "Family Members", color: "#CA8A04", stage: "Hablar de ti y de otras personas" },
  { id: "plural", label: "➕ Singular y plural", english: "Singular & Plural", color: "#059669", stage: "Nombrar y ubicar cosas" },
  { id: "demonstratives", label: "👉 Demostrativos", english: "This / That / These / Those", color: "#D97706", stage: "Nombrar y ubicar cosas" },
  { id: "fruits", label: "🍎 Frutas y verduras", english: "Fruits & Vegetables", color: "#ea580c", stage: "Nombrar y ubicar cosas" },
  { id: "prepositions", label: "📍 Preposiciones de lugar", english: "Prepositions of place", color: "#2563EB", stage: "Nombrar y ubicar cosas" },
  { id: "time", label: "🕐 La hora", english: "Telling the time", color: "#0284C7", stage: "Ubicarte en el tiempo" },
  { id: "dates", label: "📅 Días, meses y fechas", english: "Days, Months & Dates", color: "#22D3EE", stage: "Ubicarte en el tiempo" },
  { id: "verbs", label: "🏃 Verbos de uso diario", english: "Everyday verbs", color: "#7C3AED", stage: "Describir acciones" },
  { id: "progressive", label: "🌀 Presente progresivo", english: "Present Progressive / Continuous", color: "#9333EA", stage: "Describir acciones" },
  { id: "jobs", label: "👷 Oficios y profesiones", english: "Jobs & Professions", color: "#16A34A", stage: "Describir acciones" },
  { id: "vocabulary", label: "🗣️ Conversación y vocabulario", english: "Greetings, introductions & work", color: "#FB923C", stage: "Integrar lo aprendido" },
];

export const TOPICS_BASICO2 = [
  { id: "articles", label: "📖 Artículos", english: "A / An / The / Ø", color: "#A3E635", stage: "Describir y expresar pertenencia" },
  { id: "adjectives", label: "🎨 Adjetivos y opuestos", english: "Adjectives & Opposites", color: "#0D9488", stage: "Describir y expresar pertenencia" },
  { id: "possessiveAdjectives", label: "🙋 Adjetivos y pronombres posesivos", english: "My / Mine, Your / Yours…", color: "#E879F9", stage: "Describir y expresar pertenencia" },
  { id: "possessiveNouns", label: "🔑 Posesión con 's y s'", english: "Possessive Nouns", color: "#818CF8", stage: "Describir y expresar pertenencia" },
  { id: "whQuestions", label: "❓ Preguntas con WH", english: "WH Questions with to be", color: "#22D3EE", stage: "Preguntar y hablar de hábitos" },
  { id: "simplePresent", label: "⏰ Presente simple", english: "Simple Present", color: "#38BDF8", stage: "Preguntar y hablar de hábitos" },
  { id: "gerunds", label: "🔄 Gerundios e infinitivos", english: "-ing / To + verb", color: "#F472B6", stage: "Ampliar tus recursos" },
  { id: "irregularVerbs", label: "🏃 Verbos irregulares", english: "Base / Past / Past Participle", color: "#7C3AED", stage: "Ampliar tus recursos" },
];

export const TOPICS_BASICO3 = [
  { id: "simplePresentAdvanced", label: "🔁 Rutinas, preguntas y frecuencia", english: "Simple Present in context", color: "#0EA5E9", stage: "Conectar lo aprendido" },
  { id: "inOnAt", label: "📍 In, on y at: tiempo y lugar", english: "Time & Place", color: "#FB923C", stage: "Conectar lo aprendido" },
  { id: "directions", label: "🗺️ Pedir y dar indicaciones", english: "Asking for & Giving Directions", color: "#14B8A6", stage: "Usar el inglés en la ciudad" },
  { id: "examReview", label: "📝 Repaso: rutinas y descripciones", english: "Exam Review", color: "#EC4899", stage: "Repasos de clase", availableUntil: EXAM_REVIEW_END },
  { id: "topicsExam", label: "📝 Guía de examen por temas", english: "Topics Exam", color: "#EC4899", stage: "Repasos de clase", availableUntil: TOPICS_EXAM_END },
];

export const TOPICS_BASICO4 = [
  { id: "bodyParts", label: "🧍 Partes del cuerpo", english: "Body Parts", color: "#14B8A6", stage: "Describir el cuerpo y sus movimientos" },
  { id: "can", label: "💪 Uso de CAN", english: "Can / Can't — Abilities", color: "#38BDF8", stage: "Expresar habilidades" },
  { id: "countable", label: "🧺 Contables e incontables", english: "Countable & Uncountable", color: "#F59E0B", stage: "Hablar de alimentos y cantidades" },
  { id: "foodGroups", label: "🍽️ Grupos de alimentos", english: "Food Groups", color: "#22C55E", stage: "Hablar de alimentos y cantidades" },
  { id: "exerciseWords", label: "🏋️ Vocabulario de ejercicio", english: "Exercise Words", color: "#A78BFA", stage: "Describir movimientos y dar instrucciones" },
  { id: "adverbsManner", label: "🎶 Adverbios de modo", english: "Adverbs of Manner", color: "#F472B6", stage: "Explicar cómo se realiza una acción" },
  { id: "moduleIVExam", label: "📝 Guía de examen — Módulo IV", english: "Exam Study Guide", color: "#EC4899", stage: "Repaso de los seis temas del examen", availableUntil: MODULE_IV_EXAM_END },
];

export const TOPICS_QUIZ = [
  { id: "quiz", label: "🎯 Práctica general", english: "Quiz", color: "#EAB308" },
];

export const TOPIC_BY_ID = Object.fromEntries(
  [...TOPICS, ...TOPICS_BASICO2, ...TOPICS_BASICO3, ...TOPICS_BASICO4, ...TOPICS_QUIZ].map(topic => [topic.id, topic]),
);
