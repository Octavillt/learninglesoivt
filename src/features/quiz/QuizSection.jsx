import { useQuiz } from "./useQuiz";

import { getAvailableTopics } from "../../constants/topicAvailability";
import { LEVELS } from "../../constants/levels";
import RelatedTopic from "../../components/RelatedTopic";

const STUDY_LEVELS = LEVELS.filter(level => level.id !== "quiz");

export default function QuizSection({ initialSelection }) {
  const initialLevel = STUDY_LEVELS.find(level => level.id === initialSelection?.levelId);
  const initialTopic = initialLevel && getAvailableTopics(initialLevel.topics).find(item => item.id === initialSelection?.topicId);
  const {
    levelId, setLevelId, questionCount,
    topic, setTopic,
    question, answer, setAnswer,
    feedback,
    score, percentage,
    started,
    nextQuestion, submitAnswer,
  } = useQuiz({ levelId: initialLevel?.id ?? "all", topicId: initialTopic?.id ?? "mixed" });
  const questionLevel = question && STUDY_LEVELS.find(level => level.topics.some(item => item.id === question.topic));

  return (
    <div>
      <h2 style={{ color: "#fff", marginTop: 0 }}>🎯 Quiz</h2>
      <p style={{ color: "#94a3b8", lineHeight: 1.6 }}>Repasa las secciones disponibles de Básico I a IV. Elige un módulo, practica un tema o combina todos. Responde, lee la explicación y vuelve a la lección si necesitas reforzarla.</p>

      {/* Puntuación */}
      <div style={{ background: "var(--surface, #1e293b)", borderRadius: "12px", padding: "14px 18px", marginBottom: "14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ color: "#94a3b8" }}>
          Puntuación: <strong style={{ color: "#34d399", fontSize: "20px" }}>{score.correct}</strong>
          <span style={{ color: "#94a3b8" }}> / {score.total}</span>
        </span>
        {percentage !== null && (
          <span style={{ color: percentage >= 70 ? "#34d399" : percentage >= 40 ? "#fbbf24" : "#f87171", fontWeight: 700 }}>
            {percentage}% {percentage >= 70 ? "🌟" : percentage >= 40 ? "💪" : "📚"}
          </span>
        )}
      </div>

      <label htmlFor="quiz-level" style={{ color: "#cbd5e1", display: "block", marginBottom: 6 }}>Módulo</label>
      <select id="quiz-level" value={levelId} onChange={e => setLevelId(e.target.value)} style={{ width: "100%", padding: 11, borderRadius: 10, background: "var(--surface, #1e293b)", color: "#fff", fontSize: 16, marginBottom: 12 }}>
        <option value="all">Todos los módulos</option>
        {STUDY_LEVELS.map(level => <option key={level.id} value={level.id}>{level.label}</option>)}
      </select>
      <label htmlFor="quiz-topic" style={{ color: "#cbd5e1", display: "block", marginBottom: 6 }}>Sección</label>
      <select
        id="quiz-topic"
        value={topic}
        onChange={e => setTopic(e.target.value)}
        style={{ width: "100%", padding: "11px", borderRadius: "10px", border: "none", background: "var(--surface, #1e293b)", color: "#fff", fontSize: "14px", marginBottom: "12px" }}
      >
        <option value="mixed">🎲 {levelId === "all" ? "Mezcla de todos los temas" : "Todos los temas de este módulo"}</option>
        {STUDY_LEVELS.filter(level => levelId === "all" || level.id === levelId).map(level => (
          <optgroup key={level.id} label={level.label}>
            {getAvailableTopics(level.topics).map(item => <option key={item.id} value={item.id}>{item.label}</option>)}
          </optgroup>
        ))}
      </select>

      <p style={{ color: "#94a3b8", fontSize: 13 }}>{questionCount} preguntas disponibles. Cambiar el módulo o la sección reinicia la puntuación.</p>

      {/* Pantalla inicial */}
      {!started && (
        <button
          onClick={nextQuestion}
          disabled={questionCount === 0}
          style={{ width: "100%", padding: "16px", borderRadius: "12px", border: "none", background: "linear-gradient(135deg,#7c3aed,#2563eb)", color: "#fff", fontSize: "18px", fontWeight: 700, cursor: "pointer" }}
        >
          🚀 ¡Empezar Quiz!
        </button>
      )}

      {/* Tarjeta de pregunta */}
      {started && question && (
        <div style={{ background: "var(--surface, #1e293b)", borderRadius: "14px", padding: "22px" }}>
          <div style={{ fontSize: "19px", fontWeight: 700, color: "#f8fafc", lineHeight: 1.6, marginBottom: "10px" }}>
            {question.question}
          </div>

          <p style={{ color: "#94a3b8", fontSize: 13 }}>{STUDY_LEVELS.flatMap(level => level.topics.map(item => ({ ...item, levelLabel: level.label }))).filter(item => item.id === question.topic).map(item => item.levelLabel + " · " + item.label).join("")}</p>
          {question.options && <p style={{ color: "#cbd5e1" }}>Escribe una opción: {question.options.join(" | ")}</p>}
          {question.hint && (
            <div style={{ color: "#94a3b8", fontSize: "13px", marginBottom: "14px", padding: "8px 12px", background: "var(--surface-deep, #0f172a)", borderRadius: "8px" }}>
              💡 {question.hint}
            </div>
          )}

          {!feedback && (
            <>
              <input
                aria-label="Tu respuesta"
                placeholder="Escribe tu respuesta aquí..."
                value={answer}
                onChange={e => setAnswer(e.target.value)}
                onKeyDown={e => e.key === "Enter" && answer.trim() && submitAnswer()}
                autoFocus
                style={{ width: "100%", padding: "13px 16px", borderRadius: "10px", border: "2px solid #334155", background: "var(--surface-deep, #0f172a)", color: "#fff", fontSize: "16px", boxSizing: "border-box", marginBottom: "10px", outline: "none" }}
              />
              <button
                onClick={submitAnswer}
                disabled={!answer.trim()}
                style={{ width: "100%", padding: "13px", borderRadius: "10px", border: "none", background: answer.trim() ? "#2563eb" : "#334155", color: "#fff", fontSize: "15px", fontWeight: 700, cursor: answer.trim() ? "pointer" : "not-allowed", transition: "background 0.2s" }}
              >
                ✔️ Verificar respuesta
              </button>
            </>
          )}

          {feedback && (
            <>
              <div style={{ background: feedback.correct ? "#052e16" : "#450a0a", border: `1px solid ${feedback.correct ? "#34d399" : "#f87171"}33`, borderRadius: "10px", padding: "16px", textAlign: "center", marginBottom: "14px" }}>
                <div style={{ fontWeight: 800, fontSize: "24px", color: feedback.correct ? "#4ade80" : "#f87171", marginBottom: "8px" }}>
                  {feedback.correct ? "✅ ¡Muy bien!" : "❌ ¡Casi!"}
                </div>
                {!feedback.correct && (
                  <div style={{ color: "#94a3b8", fontSize: "13px", marginBottom: "6px" }}>
                    Respuesta correcta: <strong style={{ color: "#fbbf24" }}>{question.answers[0]}</strong>
                  </div>
                )}
                <div style={{ color: "#e2e8f0", fontSize: "14px", lineHeight: 1.6 }}>
                  {feedback.explanation}
                </div>
              </div>
              {questionLevel && <RelatedTopic levelId={questionLevel.id} topicId={question.topic} label="Repasar la explicación de este tema" />}
              <button
                onClick={nextQuestion}
                style={{ width: "100%", padding: "14px", borderRadius: "10px", border: "none", background: "linear-gradient(135deg,#7c3aed,#2563eb)", color: "#fff", fontSize: "16px", fontWeight: 700, cursor: "pointer" }}
              >
                ➡️ Siguiente pregunta
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
