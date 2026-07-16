import { TOPICS } from "./topics";

// Cuando exista contenido de un nuevo nivel: crear su lista de topics,
// asignarla aquí y marcar available: true.
export const LEVELS = [
  { id: "basico1", label: "Básico 1", available: true, topics: TOPICS },
  { id: "basico2", label: "Básico 2", available: false, topics: [] },
  { id: "basico3", label: "Básico 3", available: false, topics: [] },
];
