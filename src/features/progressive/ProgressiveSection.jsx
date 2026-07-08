import ExampleCard from "../../components/ExampleCard";
import Formula from "../../components/Formula";
import Legend from "../../components/Legend";
import RuleBox from "../../components/RuleBox";
import Sentence from "../../components/Sentence";
import SectionTitle from "../../components/SectionTitle";
import { PROG_AFF, PROG_NEG, PROG_INT, ING_RULES } from "./data";

export default function ProgressiveSection() {
  return (
    <div>
      <h2 style={{ color: "#f472b6", marginTop: 0 }}>⚡ Present Progressive — Estar + haciendo</h2>
      <div style={{ background: "#1e293b", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 Se usa para decir lo que <strong style={{ color: "#f8fafc" }}>estás haciendo AHORA MISMO</strong>.<br />
        🇲🇽 <em>Ella está comiendo.</em> → 🇺🇸 <em>She is eating.</em>
      </div>
      <Legend roles={["subject", "verb_be", "verb", "ing", "neg"]} />

      <RuleBox icon="✅" rule="Afirmativo — lo que estás haciendo AHORA" color="#34d399">
        <Formula
          parts={[{ t: "Sujeto", r: "subject" }, { t: "am / is / are", r: "verb_be" }, { t: "verbo", r: "verb" }, { t: "ING", r: "ing" }, { t: "now / right now", color: "#fbbf24" }]}
          example={[{ t: "She", r: "subject" }, { t: "is", r: "verb_be" }, { t: "eat", r: "verb" }, { t: "ing", r: "ing" }, { t: "right now.", color: "#94a3b8" }]}
        />
        <div style={{ color: "#64748b", fontSize: "13px" }}>🇲🇽 Ella está <strong>comiendo</strong> ahora mismo.</div>
      </RuleBox>
      {PROG_AFF.map((ex, i) => <ExampleCard key={i} pts={ex.pts} esp={ex.esp} />)}

      <RuleBox icon="❌" rule="Negativo — agrega NOT después de am/is/are" color="#f87171">
        <Formula
          parts={[{ t: "Sujeto", r: "subject" }, { t: "am / is / are", r: "verb_be" }, { t: "not", r: "neg" }, { t: "verbo", r: "verb" }, { t: "ING", r: "ing" }]}
          example={[{ t: "She", r: "subject" }, { t: "is", r: "verb_be" }, { t: "not", r: "neg" }, { t: "eat", r: "verb" }, { t: "ing", r: "ing" }, { t: ".", color: "#94a3b8" }]}
        />
        <div style={{ color: "#64748b", fontSize: "13px" }}>
          💡 Atajo: <strong style={{ color: "#f87171" }}>is not = isn&apos;t</strong> &nbsp;|&nbsp; <strong style={{ color: "#f87171" }}>are not = aren&apos;t</strong>
        </div>
      </RuleBox>
      {PROG_NEG.map((ex, i) => <ExampleCard key={i} pts={ex.pts} esp={ex.esp} />)}

      <RuleBox icon="❓" rule="Interrogativo — am/is/are va AL INICIO" color="#60a5fa">
        <Formula
          parts={[{ t: "am / is / are", r: "verb_be" }, { t: "Sujeto", r: "subject" }, { t: "verbo", r: "verb" }, { t: "ING", r: "ing" }, { t: "?", color: "#60a5fa" }]}
          example={[{ t: "Is", r: "verb_be" }, { t: "she", r: "subject" }, { t: "eat", r: "verb" }, { t: "ing", r: "ing" }, { t: "?", color: "#60a5fa" }]}
        />
        <div style={{ color: "#64748b", fontSize: "13px", marginTop: "6px" }}>🇲🇽 ¿Está ella comiendo?</div>
      </RuleBox>
      {PROG_INT.map(({ q, a, esp }, i) => (
        <div key={i} style={{ background: "#1e293b", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" }}>
          <div style={{ lineHeight: 2 }}><Sentence pts={q} /></div>
          <div style={{ color: "#64748b", fontSize: "13px", marginTop: "2px" }}>→ {a}</div>
          <div style={{ color: "#64748b", fontSize: "13px", paddingTop: "4px", borderTop: "1px solid #334155", marginTop: "4px" }}>🇲🇽 {esp}</div>
        </div>
      ))}

      <SectionTitle color="#f472b6">📐 Reglas del -ING</SectionTitle>
      <RuleBox icon="🔤" rule="Recordatorio: vocal vs consonante" color="#94a3b8">
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "4px" }}>
          <div>
            <span style={{ color: "#34d399", fontWeight: 800 }}>VOCALES: </span>
            <span style={{ color: "#34d399", fontWeight: 700, letterSpacing: "3px" }}>A · E · I · O · U</span>
          </div>
          <div>
            <span style={{ color: "#f87171", fontWeight: 800 }}>CONSONANTES: </span>
            <span style={{ color: "#f87171" }}>todo lo demás (b, c, d, f, g, r, n...)</span>
          </div>
        </div>
      </RuleBox>
      {ING_RULES.map((rule, i) => (
        <div key={i} style={{ background: "#1e293b", borderRadius: "12px", padding: "14px", marginBottom: "10px", borderLeft: `4px solid ${rule.color}` }}>
          <div style={{ fontWeight: 700, color: rule.color, marginBottom: "4px", fontSize: "14px" }}>{rule.rule}</div>
          <div style={{ color: "#64748b", fontSize: "13px", marginBottom: "10px" }}>{rule.desc}</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {rule.words.map(([base, suf, orig], j) => (
              <div key={j} style={{ background: "#0f172a", borderRadius: "8px", padding: "8px 14px", textAlign: "center" }}>
                {orig && <div style={{ color: "#475569", fontSize: "11px", marginBottom: "2px" }}>{orig} →</div>}
                <span style={{ color: "#4ade80", fontWeight: 700, fontSize: "16px" }}>{base}</span>
                <span style={{ color: "#f472b6", fontWeight: 800, background: "#3b0764", borderRadius: "4px", padding: "1px 5px", fontSize: "16px" }}>{suf}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
