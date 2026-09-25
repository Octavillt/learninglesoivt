import TopicHeading from "../../components/TopicHeading";
import Token from "../../components/Token";
import ExampleCard from "../../components/ExampleCard";
import Legend from "../../components/Legend";
import RelatedTopic from "../../components/RelatedTopic";
import RuleBox from "../../components/RuleBox";
import Sentence from "../../components/Sentence";
import SectionTitle from "../../components/SectionTitle";
import {
  SP_RECAP, SP_WH, FREQUENCY_ADVERBS, FREQUENCY_EXAMPLES,
  SP_VS_PROG, SP_ADV_MISTAKES, SP_ADV_EXERCISE,
} from "./data";

const COLOR = "#0ea5e9";

// Misma tarjeta de pregunta/respuesta que usa el Simple Present de Básico II.
// Se duplica a propósito: cada feature define sus tarjetas locales.
function QaCard({ q, a, esp }) {
  return (
    <div style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" }}>
      <div style={{ lineHeight: 2 }}><Sentence pts={q} /></div>
      <div style={{ color: "#94a3b8", fontSize: "13px", marginTop: "2px" }}>→ {a}</div>
      <div style={{ color: "#94a3b8", fontSize: "13px", paddingTop: "4px", borderTop: "1px solid #334155", marginTop: "4px" }}>🇲🇽 {esp}</div>
    </div>
  );
}

export default function SimplePresentAdvancedSection() {
  return (
    <div>
      <TopicHeading topicId="simplePresentAdvanced" />
      <div style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 Ya sabes armar frases en Simple Present: afirmar, negar y preguntar sí/no. Aquí damos el siguiente paso: <strong style={{ color: "#f8fafc" }}>pedir información</strong> con <Token t="WH" r="wh" /> + <Token t="do" r="aux" /> / <Token t="does" r="aux" />, decir <strong style={{ color: "#f8fafc" }}>cada cuánto</strong> pasa algo con los adverbios de frecuencia, y distinguir cuándo toca Simple Present y cuándo Present Progressive.<br />
        🇲🇽 <em>¿Dónde vive ella?</em> → 🇺🇸 <em>Where does she live?</em>
      </div>
      <Legend roles={["subject", "verb", "s3", "aux", "neg", "wh", "ing", "verb_be"]} />
      <RelatedTopic levelId="basico2" topicId="simplePresent" label="Repasar el Simple Present básico" />

      <RuleBox icon="🧠" rule="Recordatorio express — las tres formas de Básico II" color={COLOR}>
        {SP_RECAP.map(r => (
          <div key={r.label} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "10px", padding: "10px 12px", marginBottom: "6px" }}>
            <div style={{ color: r.color, fontWeight: 800, fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.5px" }}>{r.label}</div>
            <div style={{ lineHeight: 2 }}><Sentence pts={r.pts} /></div>
            <div style={{ color: "#94a3b8", fontSize: "12px" }}>🇲🇽 {r.esp}</div>
          </div>
        ))}
        <div style={{ color: "#94a3b8", fontSize: "13px", marginTop: "4px" }}>
          💡 La regla que no cambia: cuando aparece <Token t="do" r="aux" /> / <Token t="does" r="aux" />, el verbo principal vuelve a su forma base (sin <Token t="s" r="s3" />).
        </div>
      </RuleBox>

      <SectionTitle color={COLOR}>🔎 WH Questions con do / does</SectionTitle>
      <div style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.8, marginBottom: "8px" }}>
        Si quieres pedir información (no un sí/no), la palabra <Token t="WH" r="wh" /> se pone antes del auxiliar y todo lo demás se queda igual. 📐 <strong style={{ color: "#f8fafc" }}>WH word + do/does + sujeto + verbo?</strong>
      </div>
      {SP_WH.map((ex, i) => <QaCard key={i} q={ex.q} a={ex.a} esp={ex.esp} />)}
      <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.7 }}>Si who es el sujeto, no necesitas do/does: <strong>Who works here?</strong> (¿Quién trabaja aquí?). Con be, conserva <strong>Where is she?</strong></p>
      <RelatedTopic levelId="basico2" topicId="whQuestions" />

      <SectionTitle color={COLOR}>🔁 Adverbios de frecuencia</SectionTitle>
      <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.7 }}>Los porcentajes intermedios son una guía visual aproximada; usually u often no representan cantidades exactas.</p>
      <RuleBox icon="📍" rule="Van ANTES del verbo principal (pero después de am / is / are)" color={COLOR}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "8px", marginBottom: "10px" }}>
          {FREQUENCY_ADVERBS.map(([word, esp, pct]) => (
            <div key={word} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "10px 12px" }}>
              <div style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "14px" }}>{word}</div>
              <div style={{ color: "#94a3b8", fontSize: "12px" }}>{esp}</div>
              <div style={{ color: COLOR, fontSize: "11px", fontWeight: 700, marginTop: "2px" }}>{pct}</div>
            </div>
          ))}
        </div>
        <div style={{ color: "#4ade80", fontSize: "13px" }}>✅ She <strong>always</strong> drinks coffee.</div>
        <div style={{ color: "#4ade80", fontSize: "13px" }}>✅ She is <strong>always</strong> late.</div>
        <div style={{ color: "#f87171", fontSize: "13px" }}>❌ She drinks always coffee.</div>
      </RuleBox>
      {FREQUENCY_EXAMPLES.map((ex, i) => <ExampleCard key={i} pts={ex.pts} esp={ex.esp} />)}

      <SectionTitle color={COLOR}>🆚 Simple Present vs. Present Progressive</SectionTitle>
      <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.7 }}>Decide por el significado, no solo por una palabra como today. El progresivo también describe situaciones temporales; verbos de estado como know o want normalmente usan presente simple.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "10px" }}>
        {SP_VS_PROG.map(({ icon, title, subtitle, when, markers, example }) => (
          <div key={title} style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "14px 16px" }}>
            <div style={{ color: COLOR, fontWeight: 800, fontSize: "14px" }}>{icon} {title}</div>
            <div style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "8px" }}>{subtitle}</div>
            <div style={{ color: "#94a3b8", fontSize: "12px", lineHeight: 1.7, marginBottom: "8px" }}>{when}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "8px" }}>
              {markers.map(m => (
                <span key={m} style={{ background: "var(--surface-deep, #0f172a)", border: "1px solid #334155", borderRadius: "20px", padding: "3px 10px", color: "#e2e8f0", fontSize: "12px", fontWeight: 700 }}>{m}</span>
              ))}
            </div>
            <div style={{ lineHeight: 2 }}><Sentence pts={example.pts} /></div>
            <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: "4px" }}>🇲🇽 {example.esp}</div>
          </div>
        ))}
      </div>
      <RelatedTopic levelId="basico1" topicId="progressive" label="Repasar el Presente Progresivo" />

      <SectionTitle color={COLOR}>⚠️ Errores típicos</SectionTitle>
      {SP_ADV_MISTAKES.map((m, i) => (
        <div key={i} style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" }}>
          <div style={{ color: "#f87171", fontSize: "14px" }}>❌ {m.wrong}</div>
          <div style={{ color: "#4ade80", fontSize: "14px", marginTop: "2px" }}>✅ {m.right}</div>
          <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: "6px", paddingTop: "6px", borderTop: "1px solid #334155" }}>💡 {m.esp}</div>
        </div>
      ))}

      <SectionTitle color={COLOR}>✅ Ejercicio resuelto — WH questions, frecuencia y contraste</SectionTitle>
      {SP_ADV_EXERCISE.map((ex, i) => (
        <div key={i} style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" }}>
          <div style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "6px" }}>{ex.q}</div>
          <div style={{ lineHeight: 2 }}><Sentence pts={ex.pts} /></div>
          <div style={{ color: "#94a3b8", fontSize: "13px", paddingTop: "4px", borderTop: "1px solid #334155", marginTop: "4px" }}>🇲🇽 {ex.esp}</div>
        </div>
      ))}
    </div>
  );
}
