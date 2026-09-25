import { TOPIC_FORMULAS } from "../constants/topicFormulas";

export default function TopicFormulas({ topicId }) {
  const formulas = TOPIC_FORMULAS[topicId];
  if (!formulas) return null;

  return (
    <section className="topic-formulas" aria-label="Fórmulas y patrones del tema">
      <h3>📐 {formulas.title ?? "Fórmulas del tema"}</h3>
      <p className="formula-key">El signo + indica el orden de las partes; no se escribe en la oración. Los paréntesis indican una parte opcional.</p>
      <div className="topic-formula-grid">
        {formulas.rows.map(({ label, pattern, example, translation }) => (
          <div className="topic-formula" key={label}>
            <h4>{label}</h4>
            <p className="formula-pattern">{pattern}</p>
            <p className="formula-example"><strong>Ejemplo:</strong> <span lang="en">{example}</span></p>
            <p className="formula-translation">{translation}</p>
          </div>
        ))}
      </div>
      {formulas.note && <p className="formula-note">💡 {formulas.note}</p>}
    </section>
  );
}
