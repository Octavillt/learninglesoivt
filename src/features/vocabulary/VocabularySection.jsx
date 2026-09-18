import TopicHeading from "../../components/TopicHeading";
import RelatedTopic from "../../components/RelatedTopic";
import RuleBox from "../../components/RuleBox";
import SectionTitle from "../../components/SectionTitle";
import {
  GREETINGS, INTRODUCTIONS, GOODBYES, SAMPLE_DIALOGUE,
  BUSINESS_CATEGORIES, JOBS_SUMMARY, FAMILY_SUMMARY,
  TAG_COLORS, TAG_LABELS,
} from "./data";

const COLOR = "#fb923c";

function PhraseGrid({ items }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "8px", marginBottom: "16px" }}>
      {items.map(([phrase, esp, tag]) => (
        <div key={phrase} style={{ background: "#1e293b", borderRadius: "10px", padding: "10px 12px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "6px" }}>
            <span style={{ color: "#f8fafc", fontWeight: 700, fontSize: "13px" }}>{phrase}</span>
            <span style={{
              color: TAG_COLORS[tag], background: `${TAG_COLORS[tag]}22`, fontWeight: 700,
              padding: "1px 7px", borderRadius: "20px", fontSize: "10px", whiteSpace: "nowrap", textTransform: "uppercase",
            }}>
              {TAG_LABELS[tag]}
            </span>
          </div>
          <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: "3px" }}>{esp}</div>
        </div>
      ))}
    </div>
  );
}

function MiniWordGrid({ items, color }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "6px" }}>
      {items.map(([en, es]) => (
        <div key={en} style={{ background: "#0f172a", borderRadius: "8px", padding: "9px 10px", borderLeft: `3px solid ${color}` }}>
          <div style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "13px" }}>{en}</div>
          <div style={{ color: "#94a3b8", fontSize: "11px", marginTop: "1px" }}>{es}</div>
        </div>
      ))}
    </div>
  );
}

export default function VocabularySection() {
  return (
    <div>
      <TopicHeading topicId="vocabulary" />
      <div style={{ background: "#1e293b", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 Cierra Básico I con una conversación: saluda, di tu nombre, presenta a alguien y despídete. Conecta estas frases con el vocabulario de oficios y familia que ya conoces. Aprende los saludos y las despedidas como expresiones completas.
      </div>

      <SectionTitle color="#fbbf24">👋 Greetings — Saludos</SectionTitle>
      <PhraseGrid items={GREETINGS} />

      <SectionTitle color="#34d399">🙋 Introductions — Presentaciones</SectionTitle>
      <PhraseGrid items={INTRODUCTIONS} />

      <SectionTitle color="#f472b6">👋 Goodbyes — Despedidas</SectionTitle>
      <PhraseGrid items={GOODBYES} />

      <RuleBox icon="💬" rule="Conversación de ejemplo" color={COLOR}>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {SAMPLE_DIALOGUE.map((d, i) => (
            <div key={i}>
              <div style={{ fontSize: "13px" }}>
                <strong style={{ color: COLOR }}>{d.who}:</strong> <span style={{ color: "#e2e8f0" }}>{d.line}</span>
              </div>
              <div style={{ color: "#94a3b8", fontSize: "12px" }}>🇲🇽 {d.esp}</div>
            </div>
          ))}
        </div>
      </RuleBox>

      <SectionTitle color="#60a5fa">💼 Business — Vocabulario de negocios</SectionTitle>
      {BUSINESS_CATEGORIES.map(cat => (
        <div key={cat.label} style={{ marginBottom: "14px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
            <span style={{ fontSize: "16px" }}>{cat.icon}</span>
            <span style={{ color: cat.color, fontWeight: 800, fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.5px" }}>{cat.label}</span>
          </div>
          <MiniWordGrid items={cat.words} color={cat.color} />
        </div>
      ))}

      <SectionTitle color="#4ade80">👷 Resumen — Jobs más comunes</SectionTitle>
      <div style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "8px" }}>
        Amplía el vocabulario de profesiones en el tema <strong style={{ color: "#f8fafc" }}>Oficios y profesiones</strong> de Básico I.
      </div>
      <MiniWordGrid items={JOBS_SUMMARY} color="#4ade80" />
      <RelatedTopic levelId="basico1" topicId="jobs" />

      <SectionTitle color="#c084fc">👪 Resumen — Family más comunes</SectionTitle>
      <div style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "8px" }}>
        Árbol familiar completo en el tema <strong style={{ color: "#f8fafc" }}>La familia</strong> de Básico I.
      </div>
      <MiniWordGrid items={FAMILY_SUMMARY} color="#c084fc" />
      <RelatedTopic levelId="basico1" topicId="family" />
    </div>
  );
}
