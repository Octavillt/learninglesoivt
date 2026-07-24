import { LEVELS } from "../constants/levels";
import { useNavigation } from "../navigation/NavigationContext";

// Chip clicable para saltar a otro tema relacionado (de este nivel o de otro).
// Uso: <RelatedTopic levelId="basico1" topicId="tobe" /> dentro de un RuleBox
// o cualquier bloque de texto que mencione un tema ya cubierto en otro lado.
export default function RelatedTopic({ levelId, topicId, label }) {
  const { goTo } = useNavigation();
  const level = LEVELS.find(l => l.id === levelId);
  const topic = level?.topics.find(t => t.id === topicId);

  if (!level || !topic) return null; // el tema fue renombrado/removido — no truena, solo no se muestra

  return (
    <button
      type="button"
      onClick={() => goTo(levelId, topicId)}
      style={{
        display: "inline-flex", alignItems: "center", gap: "5px",
        background: `${topic.color}22`, border: `1px solid ${topic.color}66`,
        color: topic.color, fontWeight: 700, fontSize: "12px",
        borderRadius: "20px", padding: "4px 11px", marginTop: "6px",
        cursor: "pointer",
      }}
    >
      🔗 {label ?? topic.label}
      <span style={{ opacity: 0.75, fontWeight: 500 }}>· {level.label}</span>
    </button>
  );
}
