import { LEVELS } from "../constants/levels";
import { LEARNING_GUIDE } from "../constants/learningGuide";
import { getAvailableTopics } from "../constants/topicAvailability";
import { useNavigation } from "../navigation/NavigationContext";

export default function LessonFooter({ level, topics, active, now, onPractice }) {
  const { goTo } = useNavigation();
  const guide = LEARNING_GUIDE[active];
  const index = topics.findIndex(topic => topic.id === active);
  const previous = topics[index - 1];
  const next = topics[index + 1];
  const nextLevel = LEVELS.slice(LEVELS.indexOf(level) + 1).find(item => item.available && item.id !== "quiz" && getAvailableTopics(item.topics, now).length);

  return (
    <footer className="lesson-footer">
      <section className="lesson-check" aria-label="Comprueba lo aprendido">
        <h3>Comprueba lo aprendido</h3>
        <p>{guide.task}</p>
        <details>
          <summary>Ver una respuesta modelo</summary>
          <p>{guide.answer}</p>
        </details>
        <button type="button" className="study-button study-button-primary" onClick={onPractice}>Practicar este tema en el Quiz</button>
      </section>
      {!next && (
        <div className="module-bridge">
          <h3>Al terminar este módulo</h3>
          <p>{level.outcome}</p>
          <p>{level.bridge}</p>
        </div>
      )}
      <nav className="lesson-pager" aria-label="Recorrido del módulo">
        {previous && <button type="button" className="study-button" onClick={() => goTo(level.id, previous.id)}><small>← Tema anterior</small>{previous.label}</button>}
        {next ? (
          <button type="button" className="study-button" onClick={() => goTo(level.id, next.id)}><small>Siguiente tema →</small>{next.label}</button>
        ) : nextLevel ? (
          <button type="button" className="study-button" onClick={() => goTo(nextLevel.id, getAvailableTopics(nextLevel.topics, now)[0].id)}>Continuar con {nextLevel.label} →</button>
        ) : (
          <button type="button" className="study-button" onClick={() => goTo("quiz", "quiz")}>Repasar todos los módulos →</button>
        )}
      </nav>
    </footer>
  );
}
