import TopicHeading from "../../components/TopicHeading";
import RelatedTopic from "../../components/RelatedTopic";
import RuleBox from "../../components/RuleBox";
import SectionTitle from "../../components/SectionTitle";
import { FEATURES, NAME_RULES, COUNTRY_EXAMPLES, COMPARE, IN_TENSES, EXTRA } from "./data";

const COLOR = "#84CC16";
const card = { background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" };
const text = { color: "#cbd5e1", fontSize: "14px", lineHeight: 1.8 };
const translation = { color: "#94a3b8", fontSize: "13px", marginTop: "4px" };

export default function NaturalFeaturesSection() {
  return (
    <div>
      <TopicHeading topicId="naturalFeatures" />
      <div style={{ ...card, ...text }}>
        💡 Aprende los ocho lugares naturales con un ejemplo de México. Después compáralos con{" "}
        <span lang="en">-er</span> o <span lang="en">more + than</span> y úsalos en los tiempos que ya conoces.
      </div>

      <SectionTitle color={COLOR}>🏞️ Los ocho lugares naturales</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "8px", marginBottom: "10px" }}>
        {FEATURES.map(([emoji, en, esp, example, exampleEsp]) => (
          <div key={en} style={{ ...card, borderLeft: `3px solid ${COLOR}`, marginBottom: 0 }}>
            <div style={{ fontSize: "26px" }} aria-hidden="true">{emoji}</div>
            <div lang="en" style={{ ...text, color: "#f8fafc", fontWeight: 800 }}>{en}</div>
            <div style={translation}>🇲🇽 {esp}</div>
            <div lang="en" style={{ ...translation, marginTop: "8px", paddingTop: "8px", borderTop: "1px solid #334155", fontStyle: "italic" }}>{example}</div>
            <div style={{ ...translation, fontSize: "12px" }}>{exampleEsp}</div>
          </div>
        ))}
      </div>
      <RuleBox icon="✍️" rule="Cómo se escriben los nombres" color={COLOR}>
        {NAME_RULES.map(([en, rule]) => (
          <div key={en} style={{ marginBottom: "8px" }}>
            <div lang="en" style={{ ...text, color: "#f8fafc", fontWeight: 700 }}>{en}</div>
            <div style={translation}>{rule}</div>
          </div>
        ))}
      </RuleBox>

      <SectionTitle color={COLOR}>🗣️ Da un ejemplo de tu país</SectionTitle>
      <p style={text}>
        Usa el patrón <span lang="en">An example of a ___ here in Mexico is ___.</span> para presentar un lugar natural
        de tu país.
      </p>
      {COUNTRY_EXAMPLES.map(([en, esp]) => (
        <div key={en} style={{ ...card, borderLeft: `3px solid ${COLOR}` }}>
          <div lang="en" style={{ ...text, color: "#f8fafc", fontWeight: 700 }}>{en}</div>
          <div style={translation}>🇲🇽 {esp}</div>
        </div>
      ))}

      <SectionTitle color={COLOR}>⚖️ Compara lugares naturales</SectionTitle>
      {COMPARE.map(([en, esp, rule]) => (
        <div key={en} style={{ ...card, borderLeft: `3px solid ${COLOR}` }}>
          <div lang="en" style={{ ...text, color: "#f8fafc", fontWeight: 700 }}>{en}</div>
          <div style={translation}>🇲🇽 {esp}</div>
          <div style={{ ...translation, display: "inline-block", background: `${COLOR}22`, border: `1px solid ${COLOR}66`, borderRadius: "20px", padding: "2px 10px", marginTop: "6px" }} lang="en">{rule}</div>
        </div>
      ))}
      <RelatedTopic levelId="basico5" topicId="comparatives" label="Repasar los comparativos" />

      <SectionTitle color={COLOR}>🧭 Lugares naturales en cada tiempo</SectionTitle>
      {IN_TENSES.map(([tense, en, esp]) => (
        <div key={tense} style={{ ...card, borderLeft: `3px solid ${COLOR}` }}>
          <div style={{ ...text, color: "#f8fafc", fontWeight: 700 }}>🕐 {tense}</div>
          <div lang="en" style={{ ...text, marginTop: "4px" }}>{en}</div>
          <div style={translation}>🇲🇽 {esp}</div>
        </div>
      ))}
      <RuleBox icon="🔗" rule="Conecta con lo que ya sabes" color={COLOR}>
        <p style={text}>
          Para contar una visita pasada usa el pasado simple (<span lang="en">We visited Basaseachi Falls last summer.</span>)
          y para un plan futuro, <span lang="en">going to</span> (<span lang="en">I'm going to climb a hill tomorrow.</span>).
        </p>
        <RelatedTopic levelId="basico5" topicId="simplePast" label="Repasar el pasado simple" />
        <RelatedTopic levelId="basico5" topicId="goingTo" label="Repasar los planes con going to" />
      </RuleBox>

      <SectionTitle color={COLOR}>➕ Para ampliar</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "8px", marginBottom: "10px" }}>
        {EXTRA.map(([en, esp]) => (
          <div key={en} style={{ ...card, borderLeft: `3px solid ${COLOR}`, marginBottom: 0 }}>
            <div lang="en" style={{ ...text, color: "#f8fafc", fontWeight: 700 }}>{en}</div>
            <div style={translation}>🇲🇽 {esp}</div>
          </div>
        ))}
      </div>

      <SectionTitle color={COLOR}>🎯 Practica lo aprendido</SectionTitle>
      <p style={text}>
        Escribe un ejemplo de México para tres lugares naturales usando{" "}
        <span lang="en">An example of a ___ here in Mexico is ___.</span> Después compara dos de esos lugares con{" "}
        <span lang="en">-er</span> o <span lang="en">more</span> + <span lang="en">than</span>, cuenta una visita pasada
        con un lugar natural y haz un plan para visitar otro. Usa el Quiz para repasar el vocabulario.
      </p>
    </div>
  );
}
