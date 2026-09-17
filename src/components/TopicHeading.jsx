import { LEVELS } from "../constants/levels";
import { TOPIC_BY_ID } from "../constants/topics";
import { LEARNING_GUIDE } from "../constants/learningGuide";
import RelatedTopic from "./RelatedTopic";

export default function TopicHeading({ topicId }) {
  const topic = TOPIC_BY_ID[topicId];
  const guide = LEARNING_GUIDE[topicId];

  return (
    <header className="lesson-heading" style={{ "--lesson-accent": topic.color }}>
      <p className="lesson-stage">{topic.stage}</p>
      <h2>{topic.label} — <span lang="en">{topic.english}</span></h2>
      <p className="lesson-goal"><strong>Objetivo:</strong> {guide.goal}</p>
      {guide.recall.length > 0 && (
        <details className="lesson-recall">
          <summary>Bases que te ayudan en este tema</summary>
          <div className="lesson-links">
            {guide.recall.map(id => (
              <RelatedTopic key={id} topicId={id} levelId={LEVELS.find(level => level.topics.some(item => item.id === id)).id} />
            ))}
          </div>
        </details>
      )}
    </header>
  );
}
