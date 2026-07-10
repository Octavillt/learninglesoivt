import RuleBox from "../../components/RuleBox";
import SectionTitle from "../../components/SectionTitle";
import { COUNTRIES, CITIES, ORIGIN_DIALOG, OTHERS_DIALOG, FORMULA_STEPS } from "./data";

const ChatBubble = ({ emoji, name, color, lines }) => (
  <div style={{ background: "#0f172a", borderRadius: "12px", padding: "14px", border: `1px solid ${color}33` }}>
    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
      <span style={{ fontSize: "20px" }}>{emoji}</span>
      <span style={{ color, fontWeight: 800, fontSize: "13px" }}>{name}</span>
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {lines.map(({ q, qEsp, a, aEsp }) => (
        <div key={q}>
          <div style={{ color: "#64748b", fontSize: "12px", fontStyle: "italic" }}>{q}</div>
          <div style={{ color: "#475569", fontSize: "11px", marginBottom: "4px" }}>🇲🇽 {qEsp}</div>
          <div style={{
            background: `${color}1a`, borderRadius: "10px", borderTopLeftRadius: "2px",
            padding: "7px 12px", color: "#f8fafc", fontWeight: 600, fontSize: "13px",
            display: "inline-block",
          }}>
            {a}
          </div>
          <div style={{ color: "#64748b", fontSize: "11px", marginTop: "3px" }}>🇲🇽 {aEsp}</div>
        </div>
      ))}
    </div>
  </div>
);

const FormulaRow = ({ step, label, color, esp, children }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "12px", background: "#0f172a", borderRadius: "10px", padding: "10px 14px" }}>
    <div style={{
      width: "26px", height: "26px", borderRadius: "50%", background: color, color: "#0f172a",
      display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "13px",
      flexShrink: 0,
    }}>
      {step}
    </div>
    <div>
      <div style={{ color, fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "2px" }}>{label}</div>
      <div style={{ color: "#e2e8f0", fontSize: "13px", lineHeight: 1.6 }}>{children}</div>
      <div style={{ color: "#64748b", fontSize: "11px", marginTop: "2px" }}>🇲🇽 {esp}</div>
    </div>
  </div>
);

export default function CountriesSection() {
  return (
    <div>
      <h2 style={{ color: "#38bdf8", marginTop: 0 }}>🌎 Countries & Nationalities</h2>
      <div style={{ background: "#1e293b", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 Para hablar de <strong style={{ color: "#f8fafc" }}>origen</strong> y <strong style={{ color: "#f8fafc" }}>nacionalidad</strong> se usa el Verb To Be: <strong style={{ color: "#f8fafc" }}>I'm from</strong> + país, o <strong style={{ color: "#f8fafc" }}>I'm</strong> + nacionalidad.
      </div>

      <RuleBox icon="📐" rule="Fórmulas paso a paso" color="#fbbf24">
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "6px" }}>
          {FORMULA_STEPS.map(f => (
            <FormulaRow key={f.step} step={f.step} label={f.label} color={f.color} esp={f.esp}>
              {f.en}
            </FormulaRow>
          ))}
        </div>
      </RuleBox>

      <SectionTitle color="#38bdf8">🌍 Países más comunes</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: "6px", marginBottom: "16px" }}>
        {COUNTRIES.map(c => (
          <div key={c.en} style={{ background: "#0f172a", borderRadius: "8px", padding: "8px 12px", display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "22px", flexShrink: 0 }}>{c.flag}</span>
            <div style={{ minWidth: 0, flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                <span style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "13px" }}>{c.en}</span>
                <span style={{ color: "#64748b", fontSize: "11px" }}>{c.es}</span>
              </div>
              <div style={{ color: "#38bdf8", fontSize: "11px", marginTop: "2px", opacity: 0.9 }}>
                {c.nationalityEn} <span style={{ color: "#64748b" }}>· {c.nationalityEs}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <SectionTitle color="#34d399">🏙️ Ciudades — Where do you live?</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "6px", marginBottom: "16px" }}>
        {CITIES.map(([en, es]) => (
          <div key={en} style={{ background: "#052e16", borderRadius: "8px", padding: "8px 12px", textAlign: "center" }}>
            <div style={{ color: "#4ade80", fontWeight: 700, fontSize: "13px" }}>{en}</div>
            <div style={{ color: "#64748b", fontSize: "11px", marginTop: "2px" }}>{es}</div>
          </div>
        ))}
      </div>

      <SectionTitle color="#c084fc">💬 Preguntas y respuestas — Sobre ti</SectionTitle>
      <RuleBox icon="🙋" rule="I / You" color="#c084fc">
        <ChatBubble emoji="🙋" name="I — Yo" color="#c084fc" lines={ORIGIN_DIALOG} />
      </RuleBox>

      <SectionTitle color="#f472b6">💬 Preguntas y respuestas — Sobre otras personas</SectionTitle>
      <RuleBox icon="👥" rule="He / She / They" color="#f472b6">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "10px", marginTop: "6px" }}>
          <ChatBubble emoji="👨" name="He" color="#60a5fa" lines={[OTHERS_DIALOG[0]]} />
          <ChatBubble emoji="👩" name="She" color="#f472b6" lines={[OTHERS_DIALOG[1]]} />
          <ChatBubble emoji="👫" name="They" color="#4ade80" lines={[OTHERS_DIALOG[2]]} />
        </div>
      </RuleBox>
    </div>
  );
}
