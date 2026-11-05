import { useState } from "react";
import TopicHeading from "../../components/TopicHeading";
import RelatedTopic from "../../components/RelatedTopic";
import RuleBox from "../../components/RuleBox";
import SectionTitle from "../../components/SectionTitle";
import { Practice } from "../examReview/ExamReviewSection";
import { Table } from "../topicsExam/ui";
import { TENSES, STEPS, DETECTOR, TRAPS, SAME_VERB, SAME_VERB_WH, MISTAKES, PRACTICE } from "./data";
import "../topicsExam/topicsExam.css";

const COLOR = "#EAB308";

const card = { background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" };
const text = { color: "#cbd5e1", fontSize: "14px", lineHeight: 1.8 };
const translation = { color: "#94a3b8", fontSize: "13px", marginTop: "4px" };

function ExpressionChips({ expressions }) {
  return (
    <div className="exam-pills">
      {expressions.map(([en, esp]) => (
        <span key={en} className="exam-pill"><b lang="en">{en}</b> <span>· {esp}</span></span>
      ))}
    </div>
  );
}

function TenseCard({ tense }) {
  return (
    <div style={{ ...card, borderLeft: `3px solid ${tense.color}` }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: "8px", flexWrap: "wrap" }}>
        <span aria-hidden="true" style={{ fontSize: "20px" }}>{tense.icon}</span>
        <span lang="en" style={{ color: "#f8fafc", fontWeight: 800, fontSize: "16px" }}>{tense.name}</span>
        <span style={{ color: tense.color, fontSize: "13px", fontWeight: 700 }}>{tense.esp}</span>
      </div>
      <p style={{ ...text, margin: "8px 0 4px" }}>
        <span lang="en">{tense.use}</span> — {tense.useEsp}.
      </p>
      <p style={{ ...text, margin: "0 0 4px" }}><strong style={{ color: "#fbcfe8" }}>{tense.ask}</strong></p>
      <p style={{ ...text, margin: "0 0 8px" }}>Auxiliar: <span lang="en" style={{ color: tense.color, fontWeight: 700 }}>{tense.aux}</span></p>
      {tense.boardExpressions.length > 0 && (
        <>
          <p style={{ ...translation, fontWeight: 700 }}>Del pizarrón</p>
          <ExpressionChips expressions={tense.boardExpressions} />
        </>
      )}
      <p style={{ ...translation, fontWeight: 700 }}>Más expresiones</p>
      <ExpressionChips expressions={tense.moreExpressions} />
      <Table headings={["Tipo", "Fórmula", "Ejemplo", "Traducción"]} rows={tense.forms} />
      {tense.board.length > 0 && (
        <>
          <p style={{ ...translation, fontWeight: 700, marginTop: "10px" }}>Ejemplos del pizarrón</p>
          {tense.board.map(([en, esp]) => (
            <div key={en} style={{ marginBottom: "8px" }}>
              <div lang="en" style={{ ...text, color: "#f8fafc" }}>{en}</div>
              <div style={translation}>🇲🇽 {esp}</div>
            </div>
          ))}
        </>
      )}
      {tense.note && (
        <p style={{ ...translation, marginTop: "10px" }}>📝 {tense.note}</p>
      )}
      <RuleBox icon="⚠️" rule="Cuidado" color={tense.color}>
        <p style={{ ...text, margin: 0 }}>{tense.tip}</p>
      </RuleBox>
      <RelatedTopic levelId={tense.levelId} topicId={tense.topicId} label="Abrir la lección completa" />
    </div>
  );
}

function ExpressionDetector() {
  const [selected, setSelected] = useState(null);
  const entry = DETECTOR.find(item => item.expression === selected) ?? null;
  const tense = entry ? TENSES.find(item => item.id === entry.tense) : null;
  return (
    <>
      <div className="exam-pills" role="group" aria-label="Expresiones de tiempo">
        {DETECTOR.map(item => (
          <button
            key={item.expression}
            type="button"
            className={`exam-pill${selected === item.expression ? " is-active" : ""}`}
            aria-pressed={selected === item.expression}
            onClick={() => setSelected(previous => previous === item.expression ? null : item.expression)}
            style={{ cursor: "pointer" }}
          >
            <b lang="en">{item.expression}</b>
          </button>
        ))}
      </div>
      <div role="status" aria-live="polite" style={{ ...card, borderLeft: `3px solid ${tense?.color ?? COLOR}` }}>
        {!entry && <p style={{ ...text, margin: 0 }}>Toca una expresión para ver qué tiempo pide.</p>}
        {entry && tense && (
          <>
            <p style={{ ...text, margin: "0 0 6px" }}>
              <span lang="en" style={{ fontWeight: 800 }}>{entry.expression}</span>
              {" → "}
              <span lang="en" style={{ color: tense.color, fontWeight: 800 }}>{tense.name}</span> ({tense.esp})
            </p>
            <p style={{ ...text, margin: "0 0 6px" }}>Auxiliar: <span lang="en" style={{ color: tense.color, fontWeight: 700 }}>{tense.aux}</span></p>
            <p style={{ ...text, margin: 0 }}>
              <span lang="en">{entry.example}</span>
              <span style={translation}> 🇲🇽 {entry.esp}</span>
            </p>
          </>
        )}
      </div>
    </>
  );
}

export default function ReviewOfTensesSection() {
  return (
    <div style={{ "--exam-accent": COLOR }}>
      <TopicHeading topicId="reviewOfTenses" />
      <div style={{ ...card, ...text }}>
        💡 En el examen la pista está en la expresión de tiempo (<span lang="en">time expression</span>):
        encuéntrala, decide el tiempo y revisa su auxiliar.
        <br />
        <span style={{ ...translation, marginTop: "6px" }}>⏳ Disponible hasta el domingo 8 de noviembre de 2026, 23:59 (Ciudad de México, UTC−6)</span>
      </div>

      <SectionTitle color={COLOR}>🧭 Método de tres pasos</SectionTitle>
      {STEPS.map(step => (
        <div key={step.title} style={{ ...card, borderLeft: `3px solid ${COLOR}` }}>
          <div style={{ ...text, color: "#f8fafc", fontWeight: 700 }}>{step.title}</div>
          <div style={translation}>{step.text}</div>
        </div>
      ))}

      <SectionTitle color={COLOR}>🗂️ Los cuatro tiempos y sus pistas</SectionTitle>
      {TENSES.map(tense => <TenseCard key={tense.id} tense={tense} />)}

      <SectionTitle color={COLOR}>🔎 Detector de expresiones de tiempo</SectionTitle>
      <ExpressionDetector />

      <SectionTitle color={COLOR}>⚠️ Expresiones que engañan</SectionTitle>
      {TRAPS.map(trap => (
        <div key={trap.expression} style={{ ...card, borderLeft: "3px solid #F59E0B" }}>
          <div style={{ ...text, color: "#f8fafc", fontWeight: 700 }}>{trap.title}</div>
          <div style={{ ...translation, marginTop: "4px" }}>{trap.text}</div>
          {trap.examples.map(([en, esp]) => (
            <div key={en} style={{ marginTop: "8px" }}>
              <div lang="en" style={{ ...text, color: "#f8fafc" }}>{en}</div>
              <div style={translation}>🇲🇽 {esp}</div>
            </div>
          ))}
        </div>
      ))}

      <SectionTitle color={COLOR}>🔁 El mismo verbo en los cuatro tiempos</SectionTitle>
      <Table headings={["Tiempo", "Afirmativa", "Negativa", "Pregunta", "Respuesta corta"]} rows={SAME_VERB} />
      <div style={card}>
        {SAME_VERB_WH.map(([en, esp]) => (
          <div key={en} style={{ marginBottom: "8px" }}>
            <div lang="en" style={{ ...text, color: "#f8fafc" }}>{en}</div>
            <div style={translation}>🇲🇽 {esp}</div>
          </div>
        ))}
      </div>

      <SectionTitle color={COLOR}>❌ Errores típicos</SectionTitle>
      {MISTAKES.map(([wrong, right, why]) => (
        <div key={wrong} style={{ ...card, borderLeft: "3px solid #F87171" }}>
          <div lang="en" style={{ ...text, color: "#fca5a5" }}>✗ {wrong}</div>
          <div lang="en" style={{ ...text, color: "#86efac", marginTop: "3px" }}>✓ {right}</div>
          <div style={translation}>💡 {why}</div>
        </div>
      ))}

      <SectionTitle color={COLOR}>🎯 Identifica el tiempo</SectionTitle>
      <Practice questions={PRACTICE.map(row => ({ ...row, correct: row.options.indexOf(row.answers[0]) }))} />

      <RelatedTopic levelId="basico5" topicId="novemberExam" label="Abrir la guía de examen de noviembre" />
    </div>
  );
}
