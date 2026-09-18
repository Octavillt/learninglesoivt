import { useNavigation } from "../navigation/NavigationContext";

export default function ModuleGuide({ level, topics, active }) {
  const { goTo } = useNavigation();
  const stages = [...new Set(topics.map(topic => topic.stage))];
  const position = topics.findIndex(topic => topic.id === active) + 1;

  return (
    <details className="module-guide">
      <summary>
        <span className="module-guide-label">Ruta de {level.label} · Tema {position} de {topics.length}</span>
        <strong>{level.purpose}</strong>
        <span className="module-guide-hint">Ver orden sugerido y objetivos</span>
      </summary>
      <div className="module-guide-body">
        <p>{level.description}</p>
        <p>Puedes seguir este orden o abrir directamente el tema que necesites repasar.</p>
        <div className="module-stages">
          {stages.map(stage => (
            <section key={stage}>
              <h3>{stage}</h3>
              <ol start={topics.findIndex(topic => topic.stage === stage) + 1}>
                {topics.filter(topic => topic.stage === stage).map(topic => (
                  <li key={topic.id}>
                    <button type="button" aria-current={topic.id === active ? "step" : undefined} onClick={() => goTo(level.id, topic.id)}>
                      {topic.label}
                    </button>
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>
        <p><strong>Al terminar:</strong> {level.outcome}</p>
        <p>{level.bridge}</p>
      </div>
    </details>
  );
}
