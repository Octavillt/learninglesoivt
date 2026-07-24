import Token from "../../components/Token";
import ExampleCard from "../../components/ExampleCard";
import Formula from "../../components/Formula";
import Legend from "../../components/Legend";
import RuleBox from "../../components/RuleBox";
import SectionTitle from "../../components/SectionTitle";
import { PRONOUN_TO_POSSESSIVE, EXAMPLE_SENTENCES, POSSESSIVE_EXERCISE } from "./data";

const COLOR = "#e879f9";

export default function PossessiveAdjectivesSection() {
  return (
    <div>
      <h2 style={{ color: COLOR, marginTop: 0 }}>🙋 Possessive Adjectives</h2>
      <div style={{ background: "#1e293b", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 Los <Token t="Possessive Adjectives" r="poss" /> se colocan <strong style={{ color: "#f8fafc" }}>antes de un sustantivo</strong> para mostrar de quién es algo: <Token t="my" r="poss" />, <Token t="your" r="poss" />, <Token t="his" r="poss" />, <Token t="her" r="poss" />, <Token t="its" r="poss" />, <Token t="our" r="poss" />, <Token t="their" r="poss" />.
      </div>
      <Legend roles={["poss", "subject"]} />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))", gap: "8px", marginBottom: "18px" }}>
        {PRONOUN_TO_POSSESSIVE.map((r, i) => (
          <div key={i} style={{ background: "#1e293b", borderRadius: "10px", padding: "12px", textAlign: "center" }}>
            <div style={{ color: "#fbbf24", fontWeight: 800, fontSize: "12px" }}>{r.subj}</div>
            <div style={{ fontSize: "22px", fontWeight: 900, color: r.color, margin: "4px 0" }}>{r.form}</div>
            <div style={{ color: "#64748b", fontSize: "11px" }}>{r.esp}</div>
          </div>
        ))}
      </div>

      <RuleBox icon="📐" rule="Fórmula — nunca cambia, sin importar el sustantivo" color={COLOR}>
        <Formula
          parts={[{ t: "Possessive Adjective", r: "poss" }, { t: "Sustantivo", color: "#e2e8f0" }]}
          example={[{ t: "her", r: "poss" }, { t: "books", color: "#94a3b8" }]}
        />
        <div style={{ color: "#64748b", fontSize: "13px" }}>
          💡 A diferencia de otros adjetivos en inglés, estos <strong style={{ color: "#f8fafc" }}>siempre van pegados al sustantivo</strong> — nunca solos.
        </div>
      </RuleBox>

      <SectionTitle color={COLOR}>📝 Ejemplos</SectionTitle>
      {EXAMPLE_SENTENCES.map((ex, i) => <ExampleCard key={i} pts={ex.pts} esp={ex.esp} />)}

      <SectionTitle color={COLOR}>✅ Ejercicio resuelto</SectionTitle>
      {POSSESSIVE_EXERCISE.map((ex, i) => <ExampleCard key={i} pts={ex.pts} esp={ex.esp} />)}

      <RuleBox icon="🔑" rule="Bonus — no confundir con Whose" color={COLOR}>
        <div style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.8 }}>
          <Token t="Whose" r="wh" /> pregunta de quién es algo; la respuesta casi siempre usa un <Token t="posesivo" r="gen" /> con <strong style={{ color: "#f8fafc" }}>'s</strong>, no un possessive adjective.
        </div>
        <div style={{ color: "#e2e8f0", fontSize: "13px", marginTop: "8px" }}>Whose is that backpack? → It's Israel's.</div>
        <div style={{ color: "#64748b", fontSize: "12px" }}>🇲🇽 ¿De quién es esa mochila? → Es de Israel. (mira el tema de Posesivos con 's)</div>
      </RuleBox>
    </div>
  );
}
