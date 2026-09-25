import { Fragment } from "react";
import TopicHeading from "../../components/TopicHeading";
import ExampleCard from "../../components/ExampleCard";
import Formula from "../../components/Formula";
import Legend from "../../components/Legend";
import RuleBox from "../../components/RuleBox";
import Sentence from "../../components/Sentence";
import SectionTitle from "../../components/SectionTitle";
import { DEMO_AFF, DEMO_QA, DEMO_TRANSFORM } from "./data";

export default function DemosSection() {
  return (
    <div>
      <TopicHeading topicId="demonstratives" />
      <div style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 Se usan para <strong style={{ color: "#f8fafc" }}>señalar cosas</strong>. Dependen de dos preguntas:<br />
        1️⃣ ¿<strong style={{ color: "#f8fafc" }}>Cuántas</strong> cosas? (1 o 2+) &nbsp;&nbsp; 2️⃣ ¿<strong style={{ color: "#f8fafc" }}>Dónde</strong> está? (cerca o lejos)
      </div>
      <Legend roles={["demo", "verb_be"]} />

      <RuleBox icon="📐" rule="Tabla de referencia rápida — ¿cuál usar?" color="#c084fc">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "6px", marginTop: "6px" }}>
          <div style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "10px", textAlign: "center" }}>
            <div style={{ color: "#94a3b8", fontSize: "11px", marginBottom: "4px", fontWeight: 700 }}>SITUACIÓN</div>
          </div>
          <div style={{ background: "#3d2000", borderRadius: "8px", padding: "10px", textAlign: "center" }}>
            <div style={{ color: "#fbbf24", fontSize: "12px", fontWeight: 800 }}>👇 CERCA (near)</div>
          </div>
          <div style={{ background: "#0c2a50", borderRadius: "8px", padding: "10px", textAlign: "center" }}>
            <div style={{ color: "#60a5fa", fontSize: "12px", fontWeight: 800 }}>👉 LEJOS (far)</div>
          </div>
          {[
            { label: "1 cosa",   near: "THIS + is",   far: "THAT + is" },
            { label: "2+ cosas", near: "THESE + are", far: "THOSE + are" },
          ].map((row, i) => (
            <Fragment key={i}>
              <div key={`l${i}`} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "10px", textAlign: "center" }}>
                <div style={{ color: "#94a3b8", fontSize: "13px", fontWeight: 700 }}>{row.label}</div>
              </div>
              <div key={`n${i}`} style={{ background: "#2e1065", borderRadius: "8px", padding: "10px", textAlign: "center" }}>
                <div style={{ color: "#c084fc", fontSize: "14px", fontWeight: 800 }}>{row.near}</div>
              </div>
              <div key={`f${i}`} style={{ background: "#2e1065", borderRadius: "8px", padding: "10px", textAlign: "center" }}>
                <div style={{ color: "#c084fc", fontSize: "14px", fontWeight: 800 }}>{row.far}</div>
              </div>
            </Fragment>
          ))}
        </div>
        <div style={{ marginTop: "10px" }}>
          <Formula
            label="Fórmula singular"
            parts={[{ t: "This / That", r: "demo" }, { t: "is", r: "verb_be" }, { t: "Cosa", color: "#e2e8f0" }]}
            example={[{ t: "This", r: "demo" }, { t: "is", r: "verb_be" }, { t: "my apple.", color: "#94a3b8" }]}
          />
          <div style={{ color: "#94a3b8", fontSize: "13px", margin: "-4px 0 10px" }}>🇲🇽 Ésta es mi manzana.</div>
          <Formula
            label="Fórmula plural"
            parts={[{ t: "These / Those", r: "demo" }, { t: "are", r: "verb_be" }, { t: "Cosas", color: "#e2e8f0" }]}
            example={[{ t: "These", r: "demo" }, { t: "are", r: "verb_be" }, { t: "my apples.", color: "#94a3b8" }]}
          />
          <div style={{ color: "#94a3b8", fontSize: "13px", marginTop: "-4px" }}>🇲🇽 Éstas son mis manzanas.</div>
        </div>
      </RuleBox>

      <SectionTitle color="#c084fc">📝 Ejemplos</SectionTitle>
      {DEMO_AFF.map((ex, i) => <ExampleCard key={i} pts={ex.pts} esp={ex.esp} />)}

      <SectionTitle color="#fbbf24">❓ Preguntas con demonstratives</SectionTitle>
      {DEMO_QA.map(({ q, a, esp }, i) => (
        <div key={i} style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", lineHeight: 2 }}>
            <Sentence pts={q} /> <span style={{ color: "#94a3b8" }}>→</span> <Sentence pts={a} />
          </div>
          <div style={{ color: "#94a3b8", fontSize: "13px", paddingTop: "4px", borderTop: "1px solid #334155", marginTop: "4px" }}>🇲🇽 {esp}</div>
        </div>
      ))}

      <SectionTitle color="#fbbf24">🔄 Singular → Plural (transformaciones)</SectionTitle>
      {DEMO_TRANSFORM.map((t, i) => (
        <div key={i} style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", lineHeight: 2 }}>
            <Sentence pts={t.s} /> <span style={{ color: "#94a3b8", fontSize: "18px" }}>→</span> <Sentence pts={t.p} />
          </div>
          <div style={{ color: "#94a3b8", fontSize: "13px", paddingTop: "4px", borderTop: "1px solid #334155", marginTop: "4px" }}>🇲🇽 {t.esp}</div>
        </div>
      ))}
    </div>
  );
}
