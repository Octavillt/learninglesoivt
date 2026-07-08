import Token from "../../components/Token";
import ExampleCard from "../../components/ExampleCard";
import Formula from "../../components/Formula";
import Legend from "../../components/Legend";
import RuleBox from "../../components/RuleBox";
import Sentence from "../../components/Sentence";
import { TOBE_AFF, TOBE_NEG, TOBE_INT } from "./data";

const CONJUGATIONS = [
  { subj: "I (yo)",          form: "am",  esp: "soy / estoy",        color: "#f87171" },
  { subj: "He / She / It",   form: "is",  esp: "es / está",          color: "#60a5fa" },
  { subj: "You / We / They", form: "are", esp: "eres / somos / son", color: "#34d399" },
];

export default function ToBeSection() {
  return (
    <div>
      <h2 style={{ color: "#f87171", marginTop: 0 }}>✅ Verb To Be — Ser / Estar</h2>
      <div style={{ background: "#1e293b", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 En español usamos <strong style={{ color: "#f8fafc" }}>ser</strong> y <strong style={{ color: "#f8fafc" }}>estar</strong>. En inglés ambos se dicen con <Token t="am" r="verb_be" /> / <Token t="is" r="verb_be" /> / <Token t="are" r="verb_be" />
      </div>
      <Legend roles={["subject", "verb_be", "neg"]} />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px", marginBottom: "18px" }}>
        {CONJUGATIONS.map((r, i) => (
          <div key={i} style={{ background: "#1e293b", borderRadius: "10px", padding: "14px", textAlign: "center" }}>
            <div style={{ color: "#fbbf24", fontWeight: 800, fontSize: "13px" }}>{r.subj}</div>
            <div style={{ fontSize: "28px", fontWeight: 900, color: r.color, margin: "6px 0" }}>{r.form}</div>
            <div style={{ color: "#64748b", fontSize: "12px" }}>{r.esp}</div>
          </div>
        ))}
      </div>

      <RuleBox icon="✅" rule="Afirmativo — cómo decir que algo ES o ESTÁ" color="#34d399">
        <Formula
          parts={[{ t: "Sujeto", r: "subject" }, { t: "am / is / are", r: "verb_be" }, { t: "Complemento", color: "#e2e8f0" }]}
          example={[{ t: "She", r: "subject" }, { t: "is", r: "verb_be" }, { t: "a student.", color: "#94a3b8" }]}
        />
        <div style={{ color: "#64748b", fontSize: "13px" }}>🇲🇽 Ella <strong>es</strong> estudiante.</div>
      </RuleBox>
      {TOBE_AFF.map((ex, i) => <ExampleCard key={i} pts={ex.pts} esp={ex.esp} />)}

      <RuleBox icon="📖" rule={`¿Por qué se usa "a" o "an"? — El artículo (un / una)`} color="#fbbf24">
        <div style={{ color: "#94a3b8", fontSize: "13px", marginBottom: "10px", lineHeight: 1.7 }}>
          En español decimos <strong style={{ color: "#f8fafc" }}>"un"</strong> o <strong style={{ color: "#f8fafc" }}>"una"</strong> antes de una cosa. En inglés se usa <strong style={{ color: "#fbbf24" }}>a</strong> o <strong style={{ color: "#34d399" }}>an</strong>, pero depende de qué letra sigue:
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
          <div style={{ background: "#0f172a", borderRadius: "8px", padding: "12px" }}>
            <div style={{ color: "#fbbf24", fontWeight: 900, fontSize: "28px", marginBottom: "2px" }}>A</div>
            <div style={{ color: "#fbbf24", fontWeight: 700, fontSize: "13px", marginBottom: "6px" }}>Antes de CONSONANTE</div>
            {["a student → (s = consonante)","a teacher → (t = consonante)","a book → (b = consonante)","a car → (c = consonante)","a house → (h = consonante)"].map((ex, i) => (
              <div key={i} style={{ color: "#e2e8f0", fontSize: "13px", padding: "2px 0" }}>✅ {ex}</div>
            ))}
          </div>
          <div style={{ background: "#0f172a", borderRadius: "8px", padding: "12px" }}>
            <div style={{ color: "#34d399", fontWeight: 900, fontSize: "28px", marginBottom: "2px" }}>AN</div>
            <div style={{ color: "#34d399", fontWeight: 700, fontSize: "13px", marginBottom: "6px" }}>Antes de VOCAL</div>
            {["an apple → (a = vocal)","an orange → (o = vocal)","an umbrella → (u = vocal)","an egg → (e = vocal)","an ice cream → (i = vocal)"].map((ex, i) => (
              <div key={i} style={{ color: "#e2e8f0", fontSize: "13px", padding: "2px 0" }}>✅ {ex}</div>
            ))}
          </div>
        </div>
      </RuleBox>

      <RuleBox icon="❌" rule="Negativo — agrega NOT después de am/is/are" color="#f87171">
        <Formula
          parts={[{ t: "Sujeto", r: "subject" }, { t: "am / is / are", r: "verb_be" }, { t: "not", r: "neg" }, { t: "Complemento", color: "#e2e8f0" }]}
          example={[{ t: "She", r: "subject" }, { t: "is", r: "verb_be" }, { t: "not", r: "neg" }, { t: "happy.", color: "#94a3b8" }]}
        />
        <div style={{ color: "#64748b", fontSize: "13px" }}>
          💡 Atajo: <strong style={{ color: "#f87171" }}>is not = isn&apos;t</strong> &nbsp;|&nbsp; <strong style={{ color: "#f87171" }}>are not = aren&apos;t</strong>
        </div>
      </RuleBox>
      {TOBE_NEG.map((ex, i) => <ExampleCard key={i} pts={ex.pts} esp={ex.esp} />)}

      <RuleBox icon="❓" rule="Interrogativo — el verbo va AL INICIO de la pregunta" color="#60a5fa">
        <Formula
          parts={[{ t: "am / is / are", r: "verb_be" }, { t: "Sujeto", r: "subject" }, { t: "Complemento", color: "#e2e8f0" }, { t: "?", color: "#60a5fa" }]}
          example={[{ t: "Is", r: "verb_be" }, { t: "she", r: "subject" }, { t: "happy?", color: "#94a3b8" }]}
        />
        <div style={{ color: "#64748b", fontSize: "13px", marginTop: "6px" }}>🇲🇽 ¿Está ella feliz?</div>
      </RuleBox>
      {TOBE_INT.map(({ q, a, esp }, i) => (
        <div key={i} style={{ background: "#1e293b", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" }}>
          <div style={{ lineHeight: 2 }}><Sentence pts={q} /></div>
          <div style={{ color: "#64748b", fontSize: "13px", marginTop: "2px" }}>→ {a}</div>
          <div style={{ color: "#64748b", fontSize: "13px", paddingTop: "4px", borderTop: "1px solid #334155", marginTop: "4px" }}>🇲🇽 {esp}</div>
        </div>
      ))}
    </div>
  );
}
