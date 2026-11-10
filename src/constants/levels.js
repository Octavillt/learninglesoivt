import { TOPICS, TOPICS_BASICO2, TOPICS_BASICO3, TOPICS_BASICO4, TOPICS_BASICO5, TOPICS_BASICO6, TOPICS_VERBOS, QUIZ_TOPICS_VERBOS, TOPICS_QUIZ } from "./topics";

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
    purpose: "Describir el cuerpo, expresar habilidades y hablar de cantidades",
    description: "Aplica los plurales, los adjetivos, los posesivos y los imperativos a las partes del cuerpo. Después usa can para expresar habilidades, distingue contables e incontables y aprende los grupos de alimentos para hablar de cantidades, sabores y gustos. Combina verbos de ejercicio con adverbios de modo para dar instrucciones y explicar cómo se realiza una acción.",
    bridge: "En Básico V usarás el pasado simple para contar lo que hiciste y going to para hablar de tus planes.",
    outcome: "Puedes nombrar partes del cuerpo, dar y seguir instrucciones de movimiento, expresar habilidades, preguntar por cantidades, describir alimentos y explicar cómo se realiza una acción.",
  },
  {
    id: "basico5", label: "Básico V", available: true, topics: TOPICS_BASICO5,
    purpose: "Contar experiencias pasadas y hacer planes",
    description: "Retoma los verbos irregulares de Básico II y el presente simple para contar lo que pasó. Usa el pasado simple en afirmación, negación y preguntas, repasa la escritura de los verbos con -ed y practica going to para planes y predicciones. Sigue con colocaciones de vida social y con get, have y make, habla de dinero y de tus planes de carrera, y cierra comparando personas, animales y cosas. Además nombra y compara lugares naturales con ejemplos de México.",
    bridge: "En Básico VI usarás el pasado progresivo para contar lo que estaba pasando en un momento del pasado.",
    outcome: "Puedes contar lo que hiciste, preguntar por el pasado, hablar de tus planes, describir experiencias sociales con colocaciones, hablar de dinero y de tus planes de trabajo, comparar dos personas, animales o cosas y nombrar y comparar lugares naturales.",
  },
  {
    id: "basico6", label: "Básico VI", available: true, topics: TOPICS_BASICO6,
    purpose: "Contar lo que estaba pasando en el pasado",
    description: "Retoma el presente progresivo de Básico I y el pasado simple de Básico V para describir acciones que estaban en curso en un momento del pasado. Usa was y were con el verbo en -ing para afirmar, negar, hacer preguntas de sí o no y preguntas con palabras WH.",
    bridge: "Al terminar, practica Básico VI o combina los seis módulos en el Quiz.",
    outcome: "Puedes contar lo que estabas haciendo en un momento del pasado, negarlo y preguntar qué estaba haciendo otra persona.",
  },
  // Nivel de referencia: herramienta de consulta, no una lección que se cursa.
  // quizTopics: secciones con que el Quiz practica este módulo de consulta.
  {
    id: "verbos", label: "📒 Verbos", available: true, topics: TOPICS_VERBOS, quizTopics: QUIZ_TOPICS_VERBOS, reference: true,
    purpose: "Consulta rápida de verbos: formas, significado y pronunciación",
  },
  { id: "quiz", label: "🎯 Quiz", available: true, topics: TOPICS_QUIZ },
];
