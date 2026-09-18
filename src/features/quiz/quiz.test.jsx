import { describe, it, expect, vi, afterEach } from "vitest";
import { act, render, renderHook, screen, fireEvent } from "@testing-library/react";
import { LEVELS } from "../../constants/levels";
import { searchTopics } from "../../constants/searchIndex";
import { QUESTIONS, getByTopic } from "./questions";
import { useQuiz } from "./useQuiz";
import QuizSection from "./QuizSection";

afterEach(() => vi.restoreAllMocks());

describe("Quiz general", () => {
  it("busca y practica Conversación y vocabulario en Básico I", () => {
    expect(searchTopics("greetings").find(topic => topic.topicId === "vocabulary")?.levelId).toBe("basico1");
    expect(getByTopic("vocabulary", "basico1").length).toBeGreaterThan(0);
    expect(getByTopic("vocabulary", "basico2")).toHaveLength(0);
    render(<QuizSection initialSelection={{ levelId: "basico1", topicId: "vocabulary" }} />);
    expect(screen.getByLabelText("Módulo")).toHaveValue("basico1");
    expect(screen.getByLabelText("Sección")).toHaveValue("vocabulary");
    expect(screen.getByRole("button", { name: /Empezar Quiz/ })).toBeEnabled();
  });
  it("vive fuera de Básico I y el buscador lleva al módulo Quiz", () => {
    expect(LEVELS[0].topics.some(t => t.id === "quiz")).toBe(false);
    expect(LEVELS.find(l => l.id === "quiz").topics[0].id).toBe("quiz");
    expect(searchTopics("quiz").find(t => t.topicId === "quiz").levelId).toBe("quiz");
  });

  it("cubre cada sección de todos los módulos y filtra sin mezclar niveles", () => {
    for (const level of LEVELS.filter(l => l.id !== "quiz")) {
      const pool = getByTopic("mixed", level.id, 0);
      expect(pool.length).toBeGreaterThan(0);
      expect(pool.every(q => level.topics.some(t => t.id === q.topic))).toBe(true);
      for (const topic of level.topics) expect(getByTopic(topic.id, level.id, 0).length).toBeGreaterThan(0);
    }
    for (const q of QUESTIONS) {
      expect(q.question.trim()).not.toBe("");
      expect(q.answers.length).toBeGreaterThan(0);
      expect(q.answers.every(a => typeof a === "string" && a.trim())).toBe(true);
      expect(q.explanation.trim()).not.toBe("");
    }
  });

  it("reinicia al cambiar filtros y no repite preguntas hasta agotar cada ronda", () => {
    vi.spyOn(Math, "random").mockReturnValue(0);
    const { result } = renderHook(() => useQuiz());
    act(() => result.current.setLevelId("basico3"));
    act(() => result.current.setTopic("directions"));
    const count = getByTopic("directions").length;
    for (let round = 0; round < 2; round++) {
      const seen = new Set();
      for (let i = 0; i < count; i++) {
        act(() => result.current.nextQuestion());
        expect(seen.has(result.current.question)).toBe(false);
        seen.add(result.current.question);
      }
    }
    act(() => result.current.setAnswer(result.current.question.answers[0].toUpperCase()));
    act(() => result.current.submitAnswer());
    act(() => result.current.submitAnswer());
    expect(result.current.score).toEqual({ correct: 1, total: 1 });
    act(() => result.current.setLevelId("basico2"));
    expect(result.current.started).toBe(false);
    expect(result.current.topic).toBe("mixed");
    expect(result.current.question).toBeNull();
    expect(result.current.score.total).toBe(0);
  });

  it("ofrece filtros accesibles e inicia una pregunta de la sección elegida", () => {
    render(<QuizSection />);
    fireEvent.change(screen.getByLabelText("Módulo"), { target: { value: "basico3" } });
    fireEvent.change(screen.getByLabelText("Sección"), { target: { value: "directions" } });
    fireEvent.click(screen.getByRole("button", { name: /Empezar Quiz/ }));
    expect(screen.getByText(/Traduce al inglés:/)).toBeInTheDocument();
    expect(screen.getByText(/Básico III ·/)).toBeInTheDocument();
  });
});
