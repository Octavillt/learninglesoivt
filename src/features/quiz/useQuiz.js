import { useState } from "react";
import { checkAnswer, getByTopic, getRandom, questionKey } from "./questions";

export function useQuiz(initialSelection) {
  const [levelId, updateLevel] = useState(initialSelection?.levelId ?? "all");
  const [topic, updateTopic] = useState(initialSelection?.topicId ?? "mixed");
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer]     = useState("");
  const [feedback, setFeedback] = useState(null);
  const [score, setScore]       = useState({ correct: 0, total: 0 });
  const [started, setStarted]   = useState(false);
  // Claves de las preguntas que ya salieron en la ronda actual.
  const [history, setHistory]   = useState([]);
  // Claves de las preguntas respondidas bien: ya no vuelven a salir. Las que se
  // fallan regresan en la siguiente ronda hasta responderlas bien.
  const [mastered, setMastered] = useState([]);
  const [finished, setFinished] = useState(false);

  function reset() {
    setQuestion(null);
    setAnswer("");
    setFeedback(null);
    setScore({ correct: 0, total: 0 });
    setHistory([]);
    setMastered([]);
    setFinished(false);
    setStarted(false);
  }

  function setTopic(value) { updateTopic(value); reset(); }
  function setLevelId(value) { updateLevel(value); updateTopic("mixed"); reset(); }

  function nextQuestion() {
    const remaining = getByTopic(topic, levelId).filter(q => !mastered.includes(questionKey(q)));
    if (!remaining.length) {
      setQuestion(null);
      setFinished(true);
      return;
    }
    const pool = remaining.filter(q => !history.includes(questionKey(q)));
    // Al empezar otra ronda no se repite de inmediato la pregunta que acaba de salir.
    const candidates = pool.length ? pool : remaining.filter(q => remaining.length === 1 || questionKey(q) !== questionKey(question));
    const q = getRandom(candidates);
    setHistory(prev => pool.length ? [...prev, questionKey(q)] : [questionKey(q)]);
    setQuestion(q);
    setAnswer("");
    setFeedback(null);
    setStarted(true);
  }

  function submitAnswer() {
    if (!answer.trim() || !question || feedback) return;
    const correct = checkAnswer(answer, question.answers);
    setFeedback({ correct, explanation: question.explanation });
    setScore(prev => ({ correct: prev.correct + (correct ? 1 : 0), total: prev.total + 1 }));
    if (correct) setMastered(prev => [...prev, questionKey(question)]);
  }

  const questionCount = getByTopic(topic, levelId).length;
  const percentage = score.total > 0 ? Math.round((score.correct / score.total) * 100) : null;

  return {
    levelId, setLevelId,
    questionCount,
    masteredCount: mastered.length,
    remainingCount: questionCount - mastered.length,
    topic, setTopic,
    question,
    answer, setAnswer,
    feedback,
    score, percentage,
    started, finished,
    nextQuestion,
    submitAnswer,
    reset,
  };
}
