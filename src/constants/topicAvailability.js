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
