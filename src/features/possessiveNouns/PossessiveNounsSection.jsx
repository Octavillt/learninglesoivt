import Token from "../../components/Token";
import ExampleCard from "../../components/ExampleCard";
import Legend from "../../components/Legend";
import RelatedTopic from "../../components/RelatedTopic";
import RuleBox from "../../components/RuleBox";
import Sentence from "../../components/Sentence";
import SectionTitle from "../../components/SectionTitle";
import { GEN_RULES, OF_VS_GEN, EXAMPLE_SENTENCES, JOIN_EXERCISE } from "./data";

const COLOR = "#818cf8";

export default function PossessiveNounsSection() {
  return (
    <div>
      <h2 style={{ color: COLOR, marginTop: 0 }}>🔑 Possessive Nouns — 's / s'</h2>
      <div style={{ background: "#1e293b", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 En español decimos <strong style={{ color: "#f8fafc" }}>"la mochila de Leslie"</strong>. En inglés se invierte el orden y se agrega <Token t="'s" r="gen" />: <strong style={{ color: "#f8fafc" }}>Leslie's backpack</strong>.
      </div>
      <Legend roles={["gen", "poss"]} />

      <RuleBox icon="📐" rule="Tres reglas según el sustantivo" color={COLOR}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "10px" }}>
          {GEN_RULES.map(({ icon, title, formula, examples }) => (
            <div key={title} style={{ background: "#0f172a", borderRadius: "8px", padding: "12px", borderLeft: `3px solid ${COLOR}` }}>
              <div style={{ color: COLOR, fontWeight: 800, fontSize: "13px", marginBottom: "4px" }}>{icon} {title}</div>
              <div style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "13px", marginBottom: "8px" }}>{formula}</div>
              {examples.map(ex => (
                <div key={ex} style={{ color: "#94a3b8", fontSize: "12px", padding: "1px 0" }}>{ex}</div>
              ))}
            </div>
          ))}
        </div>
        <div style={{ color: "#64748b", fontSize: "12px", marginTop: "10px" }}>
          💡 Bonus: si un nombre propio singular ya termina en -s (Chris, James), también puedes agregar solo el apóstrofe: <strong style={{ color: "#f8fafc" }}>Chris' book</strong>.
        </div>
        <RelatedTopic levelId="basico2" topicId="articles" label="¿Qué es un sustantivo?" />
      </RuleBox>

      <SectionTitle color={COLOR}>📝 Ejemplos</SectionTitle>
      {EXAMPLE_SENTENCES.map((ex, i) => <ExampleCard key={i} pts={ex.pts} esp={ex.esp} />)}

      <RuleBox icon="🆚" rule={`'s o "of" — depende de qué es el dueño`} color={COLOR}>
        <div style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.8, marginBottom: "10px" }}>
          <Token t="'s" r="gen" /> se usa normalmente cuando el dueño es una <strong style={{ color: "#f8fafc" }}>persona, animal o tiempo</strong>. Cuando el dueño es un <strong style={{ color: "#f8fafc" }}>objeto o cosa sin vida</strong>, en inglés suena más natural usar <strong style={{ color: "#f8fafc" }}>"of"</strong> en vez de 's.
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "10px" }}>
          {OF_VS_GEN.map(({ icon, title, examples }) => (
            <div key={title} style={{ background: "#0f172a", borderRadius: "8px", padding: "12px" }}>
              <div style={{ color: COLOR, fontWeight: 800, fontSize: "13px", marginBottom: "8px" }}>{icon} {title}</div>
              {examples.map((ex, i) => (
                <div key={i} style={{ marginBottom: "6px" }}>
                  <div style={{ color: "#e2e8f0", fontSize: "13px" }}><Sentence pts={ex.pts} /></div>
                  <div style={{ color: "#64748b", fontSize: "11px" }}>{ex.esp}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </RuleBox>

      <SectionTitle color={COLOR}>✅ Ejercicio — unir dos oraciones con el posesivo</SectionTitle>
      {JOIN_EXERCISE.map((ex, i) => (
        <div key={i} style={{ background: "#1e293b", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" }}>
          <div style={{ color: "#64748b", fontSize: "12px", marginBottom: "6px" }}>{ex.a}</div>
          <div style={{ lineHeight: 2 }}><Sentence pts={ex.pts} /></div>
          <div style={{ color: "#64748b", fontSize: "13px", paddingTop: "4px", borderTop: "1px solid #334155", marginTop: "4px" }}>🇲🇽 {ex.esp}</div>
        </div>
      ))}

      <RuleBox icon="🙋" rule="Bonus — no confundir con Possessive Adjectives" color={COLOR}>
        <div style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.8 }}>
          <Token t="'s" r="gen" /> va sobre un sustantivo cuando dices EL NOMBRE del dueño (Israel's backpack). Cuando en vez del nombre usas my/your/his/her..., ya no es genitivo — es un <Token t="possessive adjective" r="poss" />.
        </div>
        <RelatedTopic levelId="basico2" topicId="possessiveAdjectives" />
      </RuleBox>
    </div>
  );
}
