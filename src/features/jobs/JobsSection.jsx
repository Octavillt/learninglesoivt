import TopicHeading from "../../components/TopicHeading";
import RelatedTopic from "../../components/RelatedTopic";
import RuleBox from "../../components/RuleBox";
import SectionTitle from "../../components/SectionTitle";
import { JOB_CATEGORIES, WORKPLACES, JOB_ACTIONS, DIALOG_HE, DIALOG_SHE } from "./data";

const ChatBubble = ({ emoji, name, color, lines }) => (
  <div style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "12px", padding: "14px", border: `1px solid ${color}33` }}>
    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
      <span style={{ fontSize: "20px" }}>{emoji}</span>
      <span style={{ color, fontWeight: 800, fontSize: "13px" }}>{name}</span>
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {lines.map(({ q, qEsp, a, aEsp }) => (
        <div key={q}>
          <div style={{ color: "#94a3b8", fontSize: "12px", fontStyle: "italic" }}>{q}</div>
          <div style={{ color: "#94a3b8", fontSize: "11px", marginBottom: "4px" }}>🇲🇽 {qEsp}</div>
          <div style={{
            background: `${color}1a`, borderRadius: "10px", borderTopLeftRadius: "2px",
            padding: "7px 12px", color: "#f8fafc", fontWeight: 600, fontSize: "13px",
            display: "inline-block",
          }}>
            {a}
          </div>
          <div style={{ color: "#94a3b8", fontSize: "11px", marginTop: "3px" }}>🇲🇽 {aEsp}</div>
        </div>
      ))}
    </div>
  </div>
);

const FormulaRow = ({ step, label, color, esp, children }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "12px", background: "var(--surface-deep, #0f172a)", borderRadius: "10px", padding: "10px 14px" }}>
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
      <div style={{ color: "#94a3b8", fontSize: "11px", marginTop: "2px" }}>🇲🇽 {esp}</div>
    </div>
  </div>
);

export default function JobsSection() {
  return (
    <div>
      <TopicHeading topicId="jobs" />
      <div style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 Para hablar de oficios y profesiones se usan 3 preguntas clave: <strong style={{ color: "#f8fafc" }}>profesión</strong> (Verb To Be), <strong style={{ color: "#f8fafc" }}>lugar de trabajo</strong> (Simple Present) y <strong style={{ color: "#f8fafc" }}>qué hace ahora</strong> (Present Progressive).
      </div>

      <SectionTitle color="#4ade80">👷 Lista de oficios y profesiones</SectionTitle>
      {JOB_CATEGORIES.map((cat) => (
        <div key={cat.label} style={{ marginBottom: "14px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
            <span style={{ fontSize: "16px" }}>{cat.icon}</span>
            <span style={{ color: cat.color, fontWeight: 800, fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.5px" }}>{cat.label}</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "6px" }}>
            {cat.jobs.map(([en, es, place]) => (
              <div key={en} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "8px 12px", borderLeft: `3px solid ${cat.color}` }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "8px" }}>
                  <span style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "13px" }}>{en}</span>
                </div>
                <div style={{ color: "#94a3b8", fontSize: "11px", marginTop: "1px" }}>{es}</div>
                {place !== "-" && (
                  <div style={{ color: cat.color, fontSize: "11px", marginTop: "3px", opacity: 0.85 }}>📍 {place}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      <SectionTitle color="#60a5fa">🏢 Where does he/she work? — Workplaces</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))", gap: "6px", marginBottom: "16px" }}>
        {WORKPLACES.map(([en, es]) => (
          <div key={en} style={{ background: "#0c2a50", borderRadius: "8px", padding: "10px 8px", textAlign: "center" }}>
            <div style={{ color: "#60a5fa", fontWeight: 700, fontSize: "13px" }}>{en}</div>
            <div style={{ color: "#94a3b8", fontSize: "11px", marginTop: "2px" }}>{es}</div>
          </div>
        ))}
      </div>

      <RuleBox icon="💬" rule="Las 3 preguntas — He / She" color="#94a3b8">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: "12px", marginTop: "6px" }}>
          <ChatBubble emoji="👨" name="He — Doctor" color="#60a5fa" lines={DIALOG_HE} />
          <ChatBubble emoji="👩" name="She — Nurse" color="#f472b6" lines={DIALOG_SHE} />
        </div>
      </RuleBox>

      <RuleBox icon="📐" rule="Fórmulas paso a paso" color="#fbbf24">
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "6px" }}>
          <FormulaRow step="1" label="Profesión" color="#60a5fa" esp="Usa a o an según el sonido inicial del oficio: a doctor, an engineer.">
            What's his/her profession? → <strong>He/She is a/an</strong> + oficio.
          </FormulaRow>
          <FormulaRow step="2" label="Lugar de trabajo" color="#34d399" esp="La preposición depende de la expresión: at a hospital, in an office.">
            Where does he/she work? → <strong>He/She works</strong> + at/in + lugar.
          </FormulaRow>
          <FormulaRow step="3" label="Qué hace ahora" color="#f472b6" esp="Pregunta qué está haciendo ahora mismo y respondes con 'is' + verbo terminado en -ing">
            What is he/she doing? → <strong>He/She is</strong> + verbo<strong>-ing</strong>.
          </FormulaRow>
        </div>
      </RuleBox>

      <p style={{ color: "#94a3b8", lineHeight: 1.7 }}>La pregunta con does anticipa el presente simple de Básico II. Por ahora, practica el diálogo completo y distingue la profesión de lo que la persona hace en este momento.</p>
      <RelatedTopic levelId="basico2" topicId="simplePresent" label="Después: cómo preguntar por hábitos con do y does" />

      <SectionTitle color="#f472b6">⚡ What is he/she doing? — Verbo + ING</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 260px), 1fr))", gap: "8px" }}>
        {JOB_ACTIONS.map(([job, verb, obj, esp]) => (
          <div key={job} style={{ background: "#3b0764", borderRadius: "10px", padding: "12px 14px" }}>
            <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
              <span style={{ background: "var(--surface, #1e293b)", borderRadius: "6px", padding: "3px 10px", color: "#4ade80", fontWeight: 700, fontSize: "12px", whiteSpace: "nowrap" }}>The {job.toLowerCase()}</span>
              <span style={{ color: "#f8fafc", fontSize: "13px" }}>
                is <strong style={{ color: "#f472b6" }}>{verb}</strong> {obj}.
              </span>
            </div>
            <div style={{ color: "#c4b5fd", fontSize: "11px", marginTop: "5px", paddingLeft: "2px" }}>🇲🇽 {esp}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
