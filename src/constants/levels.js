import { TOPICS, TOPICS_BASICO2, TOPICS_BASICO3, TOPICS_BASICO4, TOPICS_QUIZ } from "./topics";

// Cuando exista contenido de un nuevo nivel: crear su lista de topics,
// asignarla aquí y marcar available: true. Un nivel disponible sin topics
// muestra la pantalla de "en construcción".
export const LEVELS = [
  {
    id: "basico1", label: "Básico I", available: true, topics: TOPICS,
    purpose: "Presentarte y describir tu entorno",
    description: "Empieza con letras, números y to be. Después nombra personas y objetos, ubícalos y describe lo que ocurre ahora.",
    bridge: "Estas bases te preparan para describir con más detalle y hablar de hábitos en Básico II.",
    outcome: "Puedes presentarte, identificar objetos, decir la hora y describir una acción en curso.",
  },
  {
    id: "basico2", label: "Básico II", available: true, topics: TOPICS_BASICO2,
    purpose: "Describir, preguntar y hablar de hábitos",
    description: "Retoma to be, el plural y el progresivo de Básico I. Añade artículos, adjetivos y posesivos; después construye preguntas y rutinas.",
    bridge: "En Básico III combinarás estas estructuras para preguntar por horarios, frecuencia y lugares.",
    outcome: "Puedes describir personas, expresar pertenencia y afirmar, negar y preguntar sobre rutinas.",
  },
  {
    id: "basico3", label: "Básico III", available: true, topics: TOPICS_BASICO3,
    purpose: "Conectar rutinas, tiempo y lugares",
    description: "Amplía el presente simple de Básico II con preguntas y frecuencia. Conecta horas, fechas y preposiciones para orientarte en la ciudad.",
    bridge: "En Básico IV aplicarás las descripciones, los posesivos y las instrucciones al vocabulario del cuerpo.",
    outcome: "Puedes explicar cuándo y con qué frecuencia haces algo, y pedir o dar indicaciones.",
  },
  {
    id: "basico4", label: "Básico IV", available: true, topics: TOPICS_BASICO4,
    purpose: "Describir el cuerpo y seguir instrucciones",
    description: "Aplica los plurales de Básico I, los adjetivos y posesivos de Básico II y los imperativos de Básico III a las partes del cuerpo.",
    bridge: "Actualmente este módulo contiene una sección. Al terminar, practica Básico IV o combina los cuatro módulos en el Quiz.",
    outcome: "Puedes nombrar partes del cuerpo, usar sus plurales y entender instrucciones como Raise your arms.",
  },
  { id: "quiz", label: "🎯 Quiz", available: true, topics: TOPICS_QUIZ },
];
