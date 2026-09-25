// El repaso es una sección temporal. La hora se guarda en UTC para que todos
// los navegadores la interpreten igual: 30 de agosto de 2026, 23:59 en Ciudad
// de México (UTC-6) = 31 de agosto, 05:59 UTC.
export const EXAM_REVIEW_END = Date.UTC(2026, 7, 31, 5, 59, 0);

export function isTopicAvailable(topic, now = Date.now()) {
  return !topic.availableUntil || now < topic.availableUntil;
}

export function getAvailableTopics(topics, now = Date.now()) {
  return topics.filter(topic => isTopicAvailable(topic, now));
}

// Domingo 13 de septiembre, 23:59 en Ciudad de México (UTC-6).
export const TOPICS_EXAM_END = Date.parse("2026-09-13T23:59:00-06:00");

// Domingo 27 de septiembre de 2026, 23:59 en Ciudad de México (UTC-6).
export const MODULE_IV_EXAM_END = Date.parse("2026-09-27T23:59:00-06:00");
