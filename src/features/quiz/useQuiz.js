import { useState } from "react";
import { getByTopic, getRandom } from "./questions";

function checkAnswer(userAnswer, acceptedAnswers) {
  const normalize = value => value.trim().toLowerCase().replace(/[’‘]/g, "'").replace(/[.!?¿¡]+/g, "").replace(/\s+/g, " ").trim();
  return acceptedAnswers.some(a => normalize(a) === normalize(userAnswer));
}

export function useQuiz() {
  const [levelId, updateLevel] = useState("all");
  const [topic, updateTopic] = useState("mixed");
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer]     = useState("");
  const [feedback, setFeedback] = useState(null);
  const [score, setScore]       = useState({ correct: 0, total: 0 });
  const [started, setStarted]   = useState(false);
  const [history, setHistory]   = useState([]);

  function reset() {
    setQuestion(null);
    setAnswer("");
    setFeedback(null);
    setScore({ correct: 0, total: 0 });
    setHistory([]);
    setStarted(false);
  }

  function setTopic(value) { updateTopic(value); reset(); }
  function setLevelId(value) { updateLevel(value); updateTopic("mixed"); reset(); }

  function nextQuestion() {
    const all = getByTopic(topic, levelId);
    const pool = all.filter(q => !history.includes(q));
    const q = getRandom(pool.length ? pool : all);
    if (!q) return;
    setHistory(prev => pool.length ? [...prev, q] : [q]);
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
  }

  const percentage = score.total > 0 ? Math.round((score.correct / score.total) * 100) : null;

  return {
    levelId, setLevelId,
    questionCount: getByTopic(topic, levelId).length,
    topic, setTopic,
    question,
    answer, setAnswer,
    feedback,
    score, percentage,
    started,
    nextQuestion,
    submitAnswer,
  };
}
