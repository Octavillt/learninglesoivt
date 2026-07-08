import ExampleCard from "../../components/ExampleCard";
import Formula from "../../components/Formula";
import Legend from "../../components/Legend";
import RuleBox from "../../components/RuleBox";
import SectionTitle from "../../components/SectionTitle";
import { PREP_LIST, PREP_EX } from "./data";

export default function PrepSection() {
  return (
    <div>
      <h2 style={{ color: "#60a5fa", marginTop: 0 }}>📍 Preposiciones de lugar</h2>
      <div style={{ background: "#1e293b", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 Las preposiciones de lugar nos dicen <strong style={{ color: "#f8fafc" }}>DÓNDE está algo</strong>.
      </div>
      <Legend roles={["subject", "verb_be", "prep"]} />

      <RuleBox icon="📐" rule="Fórmula — siempre la misma estructura" color="#fb923c">
        <Formula
          parts={[{ t: "Sujeto", r: "subject" }, { t: "is / are", r: "verb_be" }, { t: "preposición", r: "prep" }, { t: "Lugar", color: "#e2e8f0" }]}
          example={[{ t: "The cat", r: "subject" }, { t: "is", r: "verb_be" }, { t: "in", r: "prep" }, { t: "the box.", color: "#94a3b8" }]}
        />
        <div style={{ color: "#64748b", fontSize: "13px" }}>🇲🇽 El gato está <strong>dentro de</strong> la caja.</div>
      </RuleBox>

      <SectionTitle color="#fb923c">📋 Lista de preposiciones</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(175px, 1fr))", gap: "7px", marginBottom: "16px" }}>
        {PREP_LIST.map((p, i) => (
          <div key={i} style={{ background: "#1e293b", borderRadius: "8px", padding: "10px 13px", borderLeft: "3px solid #fb923c" }}>
            <div style={{ color: "#fb923c", fontWeight: 800, fontSize: "14px" }}>{p.icon} {p.prep}</div>
            <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: "3px" }}>{p.esp}</div>
          </div>
        ))}
      </div>

      <SectionTitle color="#fb923c">📖 Ejemplos con traducción</SectionTitle>
      {PREP_EX.map((ex, i) => <ExampleCard key={i} pts={ex.pts} esp={ex.esp} />)}
    </div>
  );
}
