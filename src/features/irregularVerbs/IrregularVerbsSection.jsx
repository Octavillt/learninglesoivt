import TopicHeading from "../../components/TopicHeading";
import { useState } from "react";
import Token from "../../components/Token";
import ExampleCard from "../../components/ExampleCard";
import FilterableList from "../../components/FilterableList";
import Formula from "../../components/Formula";
import Legend from "../../components/Legend";
import RuleBox from "../../components/RuleBox";
import SectionTitle from "../../components/SectionTitle";
import { C } from "../../styles/colors";
import { IRREGULAR_VERBS, IPA_GROUPS, PAST_SENTENCES, PERFECT_SENTENCES } from "./data";

const COLOR = "#7C3AED";

const COLUMNS = [
  { title: "Infinitive / Español", icon: "🌱", role: "verb" },
  { title: "Simple Past",          icon: "⏪", role: "past" },
  { title: "Past Participle",      icon: "✅", role: "participle" },
];
const GRID = "1.3fr 1fr 1fr";

function VerbTable({ rows }) {
  return (
    <div style={{ overflowX: "auto", borderRadius: "10px" }}>
      <div style={{ minWidth: "560px" }}>
        <div style={{ maxHeight: "60vh", overflowY: "auto", background: "var(--surface, #1e293b)", borderRadius: "10px" }}>
          <div style={{ display: "grid", gridTemplateColumns: GRID, gap: "8px", position: "sticky", top: 0, zIndex: 1 }}>
            {COLUMNS.map(col => (
              <div key={col.title} style={{
                background: C[col.role].bg, borderBottom: `2px solid ${C[col.role].fg}`,
                color: C[col.role].fg, fontWeight: 800, fontSize: "13px",
                padding: "9px 12px",
              }}>
                {col.icon} {col.title}
              </div>
            ))}
          </div>
          {rows.map(([inf, past, part, esp], i) => (
            <div key={inf} style={{
              display: "grid", gridTemplateColumns: GRID, gap: "8px",
              padding: "9px 12px", background: i % 2 === 0 ? "transparent" : "#172033",
            }}>
              <div>
                <Token t={inf} r="verb" />
                <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: "3px" }}>{esp}</div>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}><Token t={past} r="past" /></div>
              <div style={{ display: "flex", alignItems: "center" }}><Token t={part} r="participle" /></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function IpaGroup({ icon, title, color, rows }) {
  return (
    <div style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 14px", borderLeft: `3px solid ${color}` }}>
      <div style={{ color, fontWeight: 800, fontSize: "13px", marginBottom: "10px" }}>
        {icon} {title}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "6px" }}>
        {rows.map(([symbol, example]) => (
          <div key={symbol} style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <span style={{
              color, background: `${color}22`, fontWeight: 800,
              padding: "2px 8px", borderRadius: "6px", fontSize: "14px", minWidth: "22px", textAlign: "center",
            }}>
              {symbol}
            </span>
            <span style={{ color: "#e2e8f0", fontSize: "13px" }}>{example}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function IrregularVerbsSection() {
  const [filter, setFilter] = useState("");
  const q = filter.toLowerCase();
  const filtered = IRREGULAR_VERBS.filter(([inf, past, part, esp]) =>
    inf.includes(q) || past.includes(q) || part.includes(q) || esp.toLowerCase().includes(q)
  );

  return (
    <div>
      <TopicHeading topicId="irregularVerbs" />
      <div style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 Los verbos irregulares no siguen la regla de agregar <strong style={{ color: "#f8fafc" }}>-ed</strong> en pasado. Cada uno tiene su propia forma en <Token t="Simple Past" r="past" /> y en <Token t="Past Participle" r="participle" />, así que hay que memorizarlos.
      </div>
      <Legend roles={["verb", "past", "participle"]} />

      <RuleBox icon="📐" rule="Las tres formas de un verbo" color={COLOR}>
        <div style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 2.2 }}>
          <Token t="Infinitive" r="verb" /> → forma base (go, eat, write).<br />
          <Token t="Simple Past" r="past" /> → se usa para hablar del pasado (went, ate, wrote).<br />
          <Token t="Past Participle" r="participle" /> → se usa con have/has (present perfect) o en voz pasiva (gone, eaten, written).
        </div>
      </RuleBox>

      <SectionTitle color={COLOR}>📋 Lista de verbos irregulares</SectionTitle>
      <FilterableList
        placeholder="🔍 Busca: go, went, gone, ir..."
        value={filter}
        onChange={setFilter}
      >
        <VerbTable rows={filtered} />
      </FilterableList>

      <details className="lesson-extension">
        <summary>Ampliación: cómo se usan el pasado y el participio</summary>
        <p>Empieza por reconocer las tres columnas de la lista. Estos ejemplos muestran para qué sirven; no necesitas dominar todavía todos los usos del pasado y del presente perfecto.</p>
      <SectionTitle color={COLOR}>🔍 Simple Past — hablar del pasado</SectionTitle>
      <Formula
        parts={[{ t: "Sujeto", r: "subject" }, { t: "Simple Past", r: "past" }, { t: "Complemento", color: "#e2e8f0" }]}
        example={[{ t: "She", r: "subject" }, { t: "went", r: "past" }, { t: "home.", color: "#94a3b8" }]}
      />
      {PAST_SENTENCES.map((ex, i) => <ExampleCard key={i} pts={ex.pts} esp={ex.esp} />)}

      <SectionTitle color={COLOR}>✅ Present Perfect — have/has + Past Participle</SectionTitle>
      <Formula
        parts={[{ t: "Sujeto", r: "subject" }, { t: "have / has", color: "#e2e8f0" }, { t: "Past Participle", r: "participle" }]}
        example={[{ t: "She", r: "subject" }, { t: "has", color: "#94a3b8" }, { t: "written", r: "participle" }]}
      />
      {PERFECT_SENTENCES.map((ex, i) => <ExampleCard key={i} pts={ex.pts} esp={ex.esp} />)}

      </details>

      <SectionTitle color={COLOR}>🔤 Símbolos de pronunciación (IPA)</SectionTitle>
      <div style={{ color: "#94a3b8", fontSize: "13px", marginBottom: "10px" }}>
        Agrupados por tipo de sonido — vocales, diptongos y consonantes según su forma de pronunciarse.
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "10px" }}>
        {IPA_GROUPS.map(g => (
          <IpaGroup key={g.title} icon={g.icon} title={g.title} color={g.color} rows={g.rows} />
        ))}
      </div>
    </div>
  );
}
