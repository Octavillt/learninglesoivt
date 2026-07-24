import { useState } from "react";
import Token from "../../components/Token";
import ExampleCard from "../../components/ExampleCard";
import Formula from "../../components/Formula";
import Legend from "../../components/Legend";
import RuleBox from "../../components/RuleBox";
import SectionTitle from "../../components/SectionTitle";
import { C } from "../../styles/colors";
import { ADJECTIVES, ADJECTIVE_CATEGORIES, BEFORE_NOUN_SENTENCES, AFTER_VERB_SENTENCES } from "./data";

const COLOR = "#0D9488";

const CATEGORY_BY_KEY = Object.fromEntries(ADJECTIVE_CATEGORIES.map(cat => [cat.key, cat]));

const COLUMNS = [
  { title: "Adjetivo",  icon: "🔤", role: "adj" },
  { title: "Contrario",  icon: "🔁", role: "adjOpp" },
  { title: "Categoría",  icon: "🏷️" },
];
const GRID = "1.1fr 1.1fr 1fr";

function AdjectiveTable({ rows }) {
  return (
    <div style={{ overflowX: "auto", borderRadius: "10px" }}>
      <div style={{ minWidth: "620px" }}>
        <div style={{ maxHeight: "60vh", overflowY: "auto", background: "#1e293b", borderRadius: "10px" }}>
          <div style={{ display: "grid", gridTemplateColumns: GRID, gap: "8px", position: "sticky", top: 0, zIndex: 1 }}>
            {COLUMNS.map(col => (
              <div key={col.title} style={{
                background: col.role ? C[col.role].bg : "#0f172a",
                borderBottom: `2px solid ${col.role ? C[col.role].fg : "#475569"}`,
                color: col.role ? C[col.role].fg : "#94a3b8", fontWeight: 800, fontSize: "13px",
                padding: "9px 12px",
              }}>
                {col.icon} {col.title}
              </div>
            ))}
          </div>
          {rows.map(([word, esp, opp, oppEsp, catKey], i) => {
            const cat = CATEGORY_BY_KEY[catKey];
            return (
              <div key={`${word}-${opp}`} style={{
                display: "grid", gridTemplateColumns: GRID, gap: "8px",
                padding: "9px 12px", background: i % 2 === 0 ? "transparent" : "#172033",
              }}>
                <div>
                  <Token t={word} r="adj" />
                  <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: "3px" }}>{esp}</div>
                </div>
                <div>
                  <Token t={opp} r="adjOpp" />
                  <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: "3px" }}>{oppEsp}</div>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span style={{
                    color: cat.color, background: `${cat.color}22`, fontWeight: 700,
                    padding: "3px 9px", borderRadius: "20px", fontSize: "12px", whiteSpace: "nowrap",
                  }}>
                    {cat.icon} {cat.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function AdjectivesSection() {
  const [filter, setFilter] = useState("");
  const q = filter.toLowerCase();
  const filtered = ADJECTIVES.filter(([word, esp, opp, oppEsp]) =>
    word.includes(q) || opp.includes(q) || esp.toLowerCase().includes(q) || oppEsp.toLowerCase().includes(q)
  );

  return (
    <div>
      <h2 style={{ color: COLOR, marginTop: 0 }}>🎨 Adjetivos Calificativos</h2>
      <div style={{ background: "#1e293b", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 Los <Token t="Adjetivos Calificativos" r="adj" /> describen cualidades del sustantivo — tamaño, apariencia, personalidad, sentimientos, etc. A diferencia del español, en inglés <strong style={{ color: "#f8fafc" }}>no cambian</strong> de forma: no llevan -s en plural ni varían por género (<Token t="a happy boy" r="adj" /> / <Token t="happy girls" r="adj" />).
      </div>
      <Legend roles={["adj", "adjOpp", "subject", "verb_be"]} />

      <RuleBox icon="📐" rule="Dos posiciones para el adjetivo" color={COLOR}>
        <div style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 2.2 }}>
          <Token t="Antes del sustantivo" r="adj" /> → a/an/the + <Token t="adjetivo" r="adj" /> + sustantivo (a red car).<br />
          <Token t="Después de to be" r="verb_be" /> → sujeto + <Token t="am/is/are/was/were" r="verb_be" /> + <Token t="adjetivo" r="adj" /> (The car is red).
        </div>
      </RuleBox>

      <SectionTitle color={COLOR}>🔍 Adjetivo antes del sustantivo</SectionTitle>
      <Formula
        parts={[{ t: "a / an / the", color: "#e2e8f0" }, { t: "Adjetivo", r: "adj" }, { t: "Sustantivo", color: "#e2e8f0" }]}
        example={[{ t: "a", color: "#94a3b8" }, { t: "red", r: "adj" }, { t: "car.", color: "#94a3b8" }]}
      />
      {BEFORE_NOUN_SENTENCES.map((ex, i) => <ExampleCard key={i} pts={ex.pts} esp={ex.esp} />)}

      <SectionTitle color={COLOR}>✅ Adjetivo después de To Be</SectionTitle>
      <Formula
        parts={[{ t: "Sujeto", r: "subject" }, { t: "am / is / are / was / were", r: "verb_be" }, { t: "Adjetivo", r: "adj" }]}
        example={[{ t: "The car", r: "subject" }, { t: "is", r: "verb_be" }, { t: "red.", r: "adj" }]}
      />
      {AFTER_VERB_SENTENCES.map((ex, i) => <ExampleCard key={i} pts={ex.pts} esp={ex.esp} />)}

      <SectionTitle color={COLOR}>📋 Lista de adjetivos más comunes</SectionTitle>
      <input
        placeholder="🔍 Busca: big, happy, feliz, contrario..."
        value={filter}
        onChange={e => setFilter(e.target.value)}
        style={{ width: "100%", padding: "11px 15px", borderRadius: "10px", border: "none", background: "#1e293b", color: "#fff", fontSize: "15px", marginBottom: "10px", boxSizing: "border-box" }}
      />
      <AdjectiveTable rows={filtered} />
    </div>
  );
}
