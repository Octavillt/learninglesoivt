import { TOPICS, TOPICS_BASICO2, TOPICS_BASICO3, TOPICS_BASICO4, TOPICS_QUIZ } from "./topics";

// Cuando exista contenido de un nuevo nivel: crear su lista de topics,
// asignarla aquí y marcar available: true. Un nivel disponible sin topics
// muestra la pantalla de "en construcción".
export const LEVELS = [
  {
    id: "basico1", label: "Básico I", available: true, topics: TOPICS,
    purpose: "Presentarte y describir tu entorno",
    description: "Empieza con letras, números y to be. Después nombra personas y objetos, ubícalos y describe lo que ocurre ahora. Cierra con una conversación breve que reúna lo aprendido.",
    bridge: "Estas bases te preparan para describir con más detalle y hablar de hábitos en Básico II.",
    outcome: "Puedes saludar, presentarte y despedirte, identificar objetos, decir la hora y describir una acción en curso.",
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
    purpose: "Describir el cuerpo y expresar habilidades",
    description: "Aplica los plurales, los adjetivos, los posesivos y los imperativos a las partes del cuerpo. Después usa can para expresar habilidades y preguntar qué sabe hacer alguien.",
    bridge: "Al terminar, practica Básico IV o combina los cuatro módulos en el Quiz.",
    outcome: "Puedes nombrar partes del cuerpo, seguir instrucciones y expresar lo que puedes o no puedes hacer con can y can't.",
  },
  { id: "quiz", label: "🎯 Quiz", available: true, topics: TOPICS_QUIZ },
];
