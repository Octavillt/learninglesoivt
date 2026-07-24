// Recuerda, por nivel, cuál fue el último tema visitado — así al cambiar
// entre Básico I/II/III y volver, la app regresa a donde te quedaste.

const STORAGE_KEY = "learningles.activeTopics";

export function loadActiveTopics() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    const parsed = saved ? JSON.parse(saved) : null;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    // localStorage no disponible (modo privado, etc.) — usar mapa vacío
    return {};
  }
}

export function saveActiveTopic(levelId, topicId) {
  try {
    const current = loadActiveTopics();
    current[levelId] = topicId;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
  } catch {
    // Si no se puede persistir, la sesión actual sigue funcionando igual
  }
}
