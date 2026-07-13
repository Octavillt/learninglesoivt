import { useState } from "react";
import { getByTopic, getRandom } from "./questions";

function checkAnswer(userAnswer, acceptedAnswers) {
  const normalized = userAnswer.trim().toLowerCase();
  return acceptedAnswers.some(a => a.toLowerCase() === normalized);
}

export function useQuiz() {
  const [topic, setTopic]       = useState("mixed");
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer]     = useState("");
  const [feedback, setFeedback] = useState(null);
  const [score, setScore]       = useState({ correct: 0, total: 0 });
  const [started, setStarted]   = useState(false);
  const [history, setHistory]   = useState([]);

  function nextQuestion() {
    const pool = getByTopic(topic).filter(q => !history.includes(q));
    const remaining = pool.length > 0 ? pool : getByTopic(topic);
    const q = getRandom(remaining);
    setHistory(prev => (remaining === getByTopic(topic) ? [q] : [...prev, q]));
    setQuestion(q);
    setAnswer("");
    setFeedback(null);
    setStarted(true);
  }

  function submitAnswer() {
    if (!answer.trim() || !question) return;
    const correct = checkAnswer(answer, question.answers);
    setFeedback({ correct, explanation: question.explanation });
    setScore(prev => ({ correct: prev.correct + (correct ? 1 : 0), total: prev.total + 1 }));
  }

  const percentage = score.total > 0 ? Math.round((score.correct / score.total) * 100) : null;

  return {
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
