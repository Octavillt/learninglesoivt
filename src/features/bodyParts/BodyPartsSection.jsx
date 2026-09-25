import TopicHeading from "../../components/TopicHeading";
import RelatedTopic from "../../components/RelatedTopic";
import RuleBox from "../../components/RuleBox";
import SectionTitle from "../../components/SectionTitle";
import { BODY_GROUPS, EXAMPLES } from "./data";
import BodyPartIcon from "./BodyPartIcon";

const COLOR = "#14b8a6";
const card = { background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px" };

export default function BodyPartsSection() {
  return (
    <div>
      <TopicHeading topicId="bodyParts" />
      <div style={{ ...card, color: "#94a3b8", fontSize: "14px", lineHeight: 1.8 }}>
        Aprende a nombrar las partes del cuerpo en inglés. Cada tarjeta muestra su traducción y su plural para hablar de una o varias partes. La zona resaltada en turquesa te ayuda a identificar cada parte.
      </div>

      {BODY_GROUPS.map(group => (
        <section key={group.title}>
          <SectionTitle color={COLOR}>{group.icon} {group.title}</SectionTitle>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "8px" }}>
            {group.words.map(([en, es, plural]) => (
              <div key={en} style={{ ...card, borderLeft: `3px solid ${COLOR}` }}>
                <div style={{ display: "flex", justifyContent: "center", background: "#f3f6ef", borderRadius: "12px", padding: "10px", marginBottom: "12px" }}>
                  <BodyPartIcon part={en} />
                </div>
                <div lang="en" style={{ color: "#f8fafc", fontWeight: 800, fontSize: "16px" }}>{en}</div>
                <div style={{ color: "#94a3b8", fontSize: "13px", marginTop: "4px" }}>{es}</div>
                <div style={{ color: COLOR, fontSize: "12px", marginTop: "8px" }}>
                  {plural ? <>Plural: <span lang="en">{plural}</span></> : "Incontable al hablar del cabello en conjunto"}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      <SectionTitle color={COLOR}>➕ Singular y plural</SectionTitle>
      <RuleBox icon="💡" rule="La mayoría agrega -s, pero hay excepciones" color={COLOR}>
        <ul style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: 1.9, paddingLeft: "20px" }}>
          <li>hand → hands · arm → arms · knee → knees</li>
          <li>eyelash → eyelashes: agrega <strong>-es</strong> después de -sh.</li>
          <li>body → bodies · pinky → pinkies: cambia la y por <strong>-ies</strong> después de consonante.</li>
          <li>foot → <strong>feet</strong> · tooth → <strong>teeth</strong>: son irregulares.</li>
          <li><strong>Hair</strong> se usa sin plural para el cabello en conjunto: “She has long hair” (Ella tiene el cabello largo). “Hairs” se refiere a pelos individuales.</li>
        </ul>
      </RuleBox>
      <RelatedTopic levelId="basico1" topicId="plural" label="Repasar las reglas del plural" />

      <RuleBox icon="✋" rule="Finger y toe no son lo mismo" color={COLOR}>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: 1.8 }}>
          <strong>Finger</strong> es un dedo de la mano; <strong>toe</strong> es un dedo del pie.
          El pulgar es <strong>thumb</strong>. El meñique también se llama <strong>little finger</strong>.
          Recuerda: <strong>hand</strong> significa mano y <strong>arm</strong> significa brazo.
        </p>
      </RuleBox>

      <SectionTitle color={COLOR}>📖 Ejemplos con traducción</SectionTitle>
      {EXAMPLES.map(([en, es]) => (
        <div key={en} style={{ ...card, marginBottom: "8px" }}>
          <div lang="en" style={{ color: "#f8fafc", fontSize: "14px", fontWeight: 700 }}>{en}</div>
          <div style={{ color: "#94a3b8", fontSize: "13px", marginTop: "4px" }}>{es}</div>
        </div>
      ))}
      <RelatedTopic levelId="basico2" topicId="possessiveAdjectives" label="Repasar my, your, his y her" />
      <SectionTitle color={COLOR}>🎯 Practica lo aprendido</SectionTitle>
      <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: 1.8 }}>
        Señala una parte de tu cuerpo y di su nombre en inglés. Después intenta decir su plural.
        Usa el botón de práctica al final para repasar traducciones y plurales de esta sección.
      </p>
    </div>
  );
}
