import TopicHeading from "../../components/TopicHeading";
import Legend from "../../components/Legend";
import RuleBox from "../../components/RuleBox";
import SectionTitle from "../../components/SectionTitle";
import { PLURAL_RULES, IRREG_SAME, IRREG_DIFF } from "./data";

const QUICK_GUIDE = [
  { cond: "La mayoría de palabras",  result: "+ S",      ex: "cat → cats",          color: "#34d399" },
  { cond: "s, sh, ch, x, z",   result: "+ ES",     ex: "box → boxes",         color: "#60a5fa" },
  { cond: "Consonante + Y",     result: "- Y + IES",ex: "baby → babies",       color: "#f472b6" },
  { cond: "Vocal + Y",          result: "+ S",      ex: "boy → boys",          color: "#fbbf24" },
  { cond: "Algunos con -O",     result: "+ ES",     ex: "potato → potatoes",   color: "#fb923c" },
  { cond: "Vocal + O",          result: "+ S",      ex: "shampoo → shampoos",  color: "#c084fc" },
  { cond: "Algunos con -F / -FE", result: "→ VES",    ex: "wolf → wolves",       color: "#f87171" },
  { cond: "ff",                 result: "+ S",      ex: "cliff → cliffs",      color: "#94a3b8" },
];

export default function PluralSection() {
  return (
    <div>
      <TopicHeading topicId="plural" />
      <div style={{ background: "#1e293b", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 <strong style={{ color: "#f8fafc" }}>Singular</strong> = una unidad. <strong style={{ color: "#f8fafc" }}>Plural</strong> = varias unidades; también se usa con cero: zero apples. Estas reglas se aplican a sustantivos contables.
      </div>
      <Legend roles={["ending"]} />

      <RuleBox icon="🔤" rule="Primero: ¿qué es vocal y qué es consonante?" color="#fbbf24">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginTop: "6px" }}>
          <div style={{ background: "#0f172a", borderRadius: "8px", padding: "14px", textAlign: "center" }}>
            <div style={{ color: "#34d399", fontWeight: 900, fontSize: "22px", letterSpacing: "6px", marginBottom: "6px" }}>A E I O U</div>
            <div style={{ color: "#34d399", fontWeight: 700, fontSize: "13px", marginBottom: "4px" }}>VOCALES (Vowels)</div>
            <div style={{ color: "#94a3b8", fontSize: "12px" }}>Estas cinco letras representan distintos sonidos; Y también puede tener sonido vocal.</div>
          </div>
          <div style={{ background: "#0f172a", borderRadius: "8px", padding: "14px", textAlign: "center" }}>
            <div style={{ color: "#f87171", fontWeight: 900, fontSize: "12px", letterSpacing: "1px", marginBottom: "6px", lineHeight: 1.6 }}>B C D F G H J K L M<br/>N P Q R S T V W X Y Z</div>
            <div style={{ color: "#f87171", fontWeight: 700, fontSize: "13px", marginBottom: "4px" }}>CONSONANTES (Consonants)</div>
            <div style={{ color: "#94a3b8", fontSize: "12px" }}>Son todas las demás letras.</div>
          </div>
        </div>
      </RuleBox>

      <RuleBox icon="📐" rule="¿Cómo saber qué regla usar? — Mira la última letra" color="#34d399">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px", marginTop: "4px" }}>
          {QUICK_GUIDE.map((r, i) => (
            <div key={i} style={{ background: "#0f172a", borderRadius: "8px", padding: "8px 12px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px" }}>
              <span style={{ color: "#94a3b8", fontSize: "12px" }}><strong style={{ color: "#e2e8f0" }}>{r.cond}</strong></span>
              <span style={{ color: r.color, fontWeight: 800, fontSize: "13px", whiteSpace: "nowrap" }}>{r.result}</span>
            </div>
          ))}
        </div>
      </RuleBox>

      <SectionTitle color="#34d399">📋 Reglas con ejemplos</SectionTitle>
      {PLURAL_RULES.map((r, i) => (
        <div key={i} style={{ background: "#1e293b", borderRadius: "12px", padding: "14px", marginBottom: "9px", borderLeft: `4px solid ${r.color}` }}>
          <div style={{ fontWeight: 700, color: r.color, marginBottom: "10px", fontSize: "14px" }}>{r.rule}</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {r.words.map(([base, suf, label], j) => (
              <div key={j} style={{ background: "#0f172a", borderRadius: "8px", padding: "8px 14px", textAlign: "center" }}>
                {label && <div style={{ color: "#94a3b8", fontSize: "11px", marginBottom: "3px" }}>{label}</div>}
                <span style={{ color: "#e2e8f0", fontWeight: 600, fontSize: "16px" }}>{base}</span>
                <span style={{ color: "#34d399", fontWeight: 800, background: "#022c22", borderRadius: "4px", padding: "1px 5px", fontSize: "16px" }}>{suf}</span>
              </div>
            ))}
          </div>
        </div>
      ))}

      <SectionTitle color="#34d399">⚠️ Irregulares — hay que memorizarlos</SectionTitle>
      <RuleBox icon="💡" rule="O y F/FE tienen excepciones" color="#fbbf24">
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: 1.8 }}>Photo → photos, piano → pianos, roof → roofs y chef → chefs usan -s. No conviertas todas las palabras en -o a -es ni todas las de -f a -ves. Consulta cada palabra si tienes dudas.</p>
      </RuleBox>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
        <div style={{ background: "#1e293b", borderRadius: "10px", padding: "14px" }}>
          <div style={{ color: "#fbbf24", fontWeight: 700, marginBottom: "10px", fontSize: "13px" }}>✅ No cambian</div>
          {IRREG_SAME.map(([en, es]) => (
            <div key={en} style={{ padding: "6px 0", borderBottom: "1px solid #334155" }}>
              <div style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "14px" }}>{en}</div>
              <div style={{ color: "#94a3b8", fontSize: "12px" }}>{es}</div>
            </div>
          ))}
        </div>
        <div style={{ background: "#1e293b", borderRadius: "10px", padding: "14px" }}>
          <div style={{ color: "#f87171", fontWeight: 700, marginBottom: "10px", fontSize: "13px" }}>⚠️ Cambian completamente</div>
          {IRREG_DIFF.map(([en, es]) => (
            <div key={en} style={{ padding: "6px 0", borderBottom: "1px solid #334155" }}>
              <div style={{ color: "#f87171", fontWeight: 700, fontSize: "13px" }}>{en}</div>
              <div style={{ color: "#94a3b8", fontSize: "12px" }}>{es}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
