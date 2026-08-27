import { useState } from "react";
import Token from "../../components/Token";
import ExampleCard from "../../components/ExampleCard";
import FilterableList from "../../components/FilterableList";
import Formula from "../../components/Formula";
import Legend from "../../components/Legend";
import RuleBox from "../../components/RuleBox";
import SectionTitle from "../../components/SectionTitle";
import { VERBS, VERB_SENTENCES } from "./data";

export default function VerbsSection() {
  const [filter, setFilter] = useState("");
  const filtered = VERBS.filter(([en, es]) =>
    en.toLowerCase().includes(filter.toLowerCase()) ||
    es.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2 style={{ color: "#a78bfa", marginTop: 0 }}>📝 Verbos</h2>
      <div style={{ background: "#1e293b", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 Un <Token t="verbo" r="verb" /> describe la <strong style={{ color: "#f8fafc" }}>acción</strong> que realiza el <Token t="sujeto" r="subject" />.
      </div>
      <Legend roles={["subject", "verb"]} />

      <RuleBox icon="📐" rule="Fórmula básica de una oración" color="#a78bfa">
        <Formula
          parts={[{ t: "Sujeto", r: "subject" }, { t: "Verbo", r: "verb" }, { t: "Complemento", color: "#e2e8f0" }]}
          example={[{ t: "She", r: "subject" }, { t: "reads", r: "verb" }, { t: "a book.", color: "#94a3b8" }]}
        />
        <div style={{ color: "#64748b", fontSize: "13px", marginTop: "6px" }}>
          💬 El <strong style={{ color: "#fbbf24" }}>sujeto</strong> es quien hace la acción. El <strong style={{ color: "#4ade80" }}>verbo</strong> es la acción. El complemento es el resto.
        </div>
        <div style={{ color: "#64748b", fontSize: "13px", marginTop: "4px" }}>🇲🇽 Ella lee un libro.</div>
      </RuleBox>

      <SectionTitle color="#a78bfa">🔍 Verbos en oraciones simples</SectionTitle>
      {VERB_SENTENCES.map((ex, i) => <ExampleCard key={i} pts={ex.pts} esp={ex.esp} />)}

      <SectionTitle color="#a78bfa">📋 Lista de todos los verbos</SectionTitle>
      <FilterableList
        placeholder="🔍 Busca: eat, comer, run..."
        value={filter}
        onChange={setFilter}
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "5px" }}>
          {filtered.map(([en, es]) => (
            <div key={en} style={{ background: "#1e293b", borderRadius: "7px", padding: "9px 13px", borderLeft: "3px solid #7c3aed", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ color: "#4ade80", fontWeight: 700 }}>{en}</span>
              <span style={{ color: "#94a3b8", fontSize: "13px" }}>{es}</span>
            </div>
          ))}
        </div>
      </FilterableList>
    </div>
  );
}
