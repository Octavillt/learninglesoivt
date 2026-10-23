import { describe, it, expect, vi, afterEach } from "vitest";
import { act, render, renderHook, screen, fireEvent } from "@testing-library/react";
import { LEVELS } from "../../constants/levels";
import { searchTopics } from "../../constants/searchIndex";
import { QUESTIONS, checkAnswer, getByTopic, normalize, questionKey } from "./questions";
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
    for (const level of LEVELS.filter(l => l.id !== "quiz" && !l.reference)) {
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

  it("califica sin castigar acentos, comas, paréntesis ni símbolos difíciles de teclear", () => {
    expect(checkAnswer("como estas", ["¿Cómo estás?"])).toBe(true);
    expect(checkAnswer("Yes he is", ["Yes, he is."])).toBe(true);
    expect(checkAnswer("no, they CAN´T", ["No, they can't."])).toBe(true);
    expect(checkAnswer("buenas noches", ["Buenas noches (al llegar)."])).toBe(true);
    expect(checkAnswer("twenty one", ["twenty-one"])).toBe(true);
    expect(checkAnswer("/id/", ["/ɪd/"])).toBe(true);
    expect(checkAnswer("The movie starts at 8:00 pm", ["The movie starts at 8:00 p.m."])).toBe(true);
    expect(checkAnswer("No, he did.", ["No, he didn't."])).toBe(false);
    expect(checkAnswer("is", ["isn't", "is not"])).toBe(false);
    const article = QUESTIONS.find(q => q.topic === "articles" && q.answers.includes("Ø"));
    expect(checkAnswer("0", article.answers)).toBe(true);
    const negative = QUESTIONS.find(q => q.topic === "tobe" && /short form/.test(q.question));
    expect(negative.question).not.toMatch(/___ not/);
  });

  it("no repite la misma pregunta dentro de una mezcla aunque venga de dos secciones", () => {
    for (const levelId of ["all", ...LEVELS.filter(l => l.id !== "quiz" && !l.reference).map(l => l.id)]) {
      const keys = getByTopic("mixed", levelId, 0).map(questionKey);
      expect(new Set(keys).size).toBe(keys.length);
    }
    const negative = getByTopic("mixed", "basico5", 0).filter(q => q.question === "Convierte en negativa: We are going to travel this summer.");
    expect(negative).toHaveLength(1);
    expect(checkAnswer("We are not going to travel this summer.", negative[0].answers)).toBe(true);
    // Mismo enunciado con opciones distintas: son preguntas diferentes.
    expect(getByTopic("octoberExam", "basico4", 0).filter(q => q.question === "Elige la oración correcta.").length).toBeGreaterThan(1);
  });

  it("mantiene distinguibles las opciones al normalizar y la correcta está entre ellas", () => {
    for (const q of QUESTIONS.filter(item => item.options)) {
      const options = q.options.map(normalize);
      expect(new Set(options).size).toBe(options.length);
      expect(q.answers.every(a => options.includes(normalize(a)))).toBe(true);
    }
  });

  it("no vuelve a preguntar lo que se respondió bien, repite lo fallado y la puntuación cuadra", () => {
    vi.spyOn(Math, "random").mockReturnValue(0);
    const { result } = renderHook(() => useQuiz({ levelId: "basico3", topicId: "directions" }));
    const count = result.current.questionCount;
    const answered = [];
    let failed = null;
    for (let step = 0; step < count + 1; step++) {
      act(() => result.current.nextQuestion());
      const q = result.current.question;
      expect(answered).not.toContain(questionKey(q));
      const fail = step === 0;
      if (fail) failed = questionKey(q);
      if (step === count) expect(questionKey(q)).toBe(failed);
      act(() => result.current.setAnswer(fail ? "respuesta equivocada" : q.answers[0]));
      act(() => result.current.submitAnswer());
      expect(result.current.feedback.correct).toBe(!fail);
      if (!fail) answered.push(questionKey(q));
    }
    expect(result.current.score).toEqual({ correct: count, total: count + 1 });
    expect(result.current.remainingCount).toBe(0);
    act(() => result.current.nextQuestion());
    expect(result.current.finished).toBe(true);
    expect(result.current.question).toBeNull();
  });

  it("muestra el resultado al responder bien todas las preguntas y permite volver a empezar", () => {
    vi.spyOn(Math, "random").mockReturnValue(0);
    const pool = getByTopic("directions", "basico3");
    render(<QuizSection initialSelection={{ levelId: "basico3", topicId: "directions" }} />);
    fireEvent.click(screen.getByRole("button", { name: /Empezar Quiz/ }));
    for (let i = 0; i < pool.length; i++) {
      const q = pool.find(item => screen.queryByText(item.question));
      fireEvent.change(screen.getByLabelText("Tu respuesta"), { target: { value: q.answers[0] } });
      fireEvent.click(screen.getByRole("button", { name: /Verificar respuesta/ }));
      expect(screen.getByText(/Muy bien/)).toBeInTheDocument();
      fireEvent.click(screen.getByRole("button", { name: i === pool.length - 1 ? /Ver resultado/ : /Siguiente pregunta/ }));
    }
    expect(screen.getByText(/Completaste el Quiz/)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${pool.length} preguntas en ${pool.length} intentos`))).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /Volver a empezar/ }));
    expect(screen.getByRole("button", { name: /Empezar Quiz/ })).toBeInTheDocument();
    expect(screen.getByText(/Puntuación/).textContent).toMatch(/0\s*\/ 0/);
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
