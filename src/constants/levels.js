import { TOPICS } from "./topics";

// Cuando exista contenido de un nuevo nivel: crear su lista de topics,
// asignarla aquí y marcar available: true. Un nivel disponible sin topics
// muestra la pantalla de "en construcción".
export const LEVELS = [
  { id: "basico1", label: "Básico I", available: true, topics: TOPICS },
  { id: "basico2", label: "Básico II", available: true, topics: [] },
  { id: "basico3", label: "Básico III", available: false, topics: [] },
];
