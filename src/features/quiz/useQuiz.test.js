import { describe, it, expect, vi, beforeEach } from "vitest";
import { act, renderHook, waitFor } from "@testing-library/react";
import { useQuiz } from "./useQuiz";
import * as api from "../../auth/api";

vi.mock("../../auth/api");

describe("useQuiz", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("empieza sin pregunta activa y sin puntuación", () => {
    const { result } = renderHook(() => useQuiz());
    expect(result.current.started).toBe(false);
    expect(result.current.question).toBeNull();
    expect(result.current.score).toEqual({ correct: 0, total: 0 });
    expect(result.current.percentage).toBeNull();
  });

  it("nextQuestion carga una pregunta del tema seleccionado", () => {
    const { result } = renderHook(() => useQuiz());

    act(() => {
      result.current.setTopic("numbers");
    });
    act(() => {
      result.current.nextQuestion();
    });

    expect(result.current.started).toBe(true);
    expect(result.current.question).not.toBeNull();
    expect(result.current.question.topic).toBe("numbers");
    expect(result.current.answer).toBe("");
    expect(result.current.feedback).toBeNull();
  });

  it("submitAnswer no hace nada si la respuesta está vacía", () => {
    const { result } = renderHook(() => useQuiz());
    act(() => result.current.nextQuestion());

    act(() => result.current.submitAnswer());

    expect(result.current.feedback).toBeNull();
    expect(result.current.score.total).toBe(0);
  });

  it("submitAnswer marca correcto y suma el puntaje con la respuesta esperada", () => {
    const { result } = renderHook(() => useQuiz());
    act(() => {
      result.current.setTopic("tobe");
      result.current.nextQuestion();
    });
    const expectedAnswer = result.current.question.answers[0];

    act(() => {
      result.current.setAnswer(expectedAnswer);
    });
    act(() => {
      result.current.submitAnswer();
    });

    expect(result.current.feedback.correct).toBe(true);
    expect(result.current.score).toEqual({ correct: 1, total: 1 });
    expect(result.current.percentage).toBe(100);
  });

  it("submitAnswer ignora mayúsculas y espacios en la respuesta", () => {
    const { result } = renderHook(() => useQuiz());
    act(() => {
      result.current.setTopic("tobe");
      result.current.nextQuestion();
    });
    const expectedAnswer = result.current.question.answers[0];

    act(() => {
      result.current.setAnswer(`  ${expectedAnswer.toUpperCase()}  `);
    });
    act(() => {
      result.current.submitAnswer();
    });

    expect(result.current.feedback.correct).toBe(true);
  });

  it("submitAnswer marca incorrecto con una respuesta equivocada y no rompe el puntaje", () => {
    const { result } = renderHook(() => useQuiz());
    act(() => {
      result.current.setTopic("tobe");
      result.current.nextQuestion();
    });

    act(() => {
      result.current.setAnswer("esto-nunca-es-correcto-xyz");
    });
    act(() => {
      result.current.submitAnswer();
    });

    expect(result.current.feedback.correct).toBe(false);
    expect(result.current.score).toEqual({ correct: 0, total: 1 });
    expect(result.current.percentage).toBe(0);
  });

  it("nextQuestion no repite pregunta hasta agotar el pool del tema", () => {
    const { result } = renderHook(() => useQuiz());
    act(() => result.current.setTopic("countries"));

    const seen = new Set();
    for (let i = 0; i < 5; i++) {
      act(() => result.current.nextQuestion());
      seen.add(result.current.question.question);
    }

    expect(seen.size).toBe(5);
  });

  it("saveScore no llama a la API si no hay preguntas respondidas", async () => {
    const { result } = renderHook(() => useQuiz());

    await act(async () => {
      await result.current.saveScore();
    });

    expect(api.saveResult).not.toHaveBeenCalled();
    expect(result.current.saveState).toBe("idle");
  });

  it("saveScore envía el tema y puntaje actuales, y marca 'saved'", async () => {
    api.saveResult.mockResolvedValue({ id: 1 });
    const { result } = renderHook(() => useQuiz());
    act(() => {
      result.current.setTopic("verbs");
      result.current.nextQuestion();
    });
    act(() => {
      result.current.setAnswer(result.current.question.answers[0]);
    });
    act(() => {
      result.current.submitAnswer();
    });

    act(() => {
      result.current.saveScore();
    });
    expect(result.current.saveState).toBe("saving");

    await waitFor(() => expect(result.current.saveState).toBe("saved"));
    expect(api.saveResult).toHaveBeenCalledWith({ topic: "verbs", correct: 1, total: 1 });
  });

  it("saveScore marca 'error' si la API falla", async () => {
    api.saveResult.mockRejectedValue(new Error("network down"));
    const { result } = renderHook(() => useQuiz());
    act(() => result.current.nextQuestion());
    act(() => result.current.setAnswer(result.current.question.answers[0]));
    act(() => result.current.submitAnswer());

    act(() => {
      result.current.saveScore();
    });

    await waitFor(() => expect(result.current.saveState).toBe("error"));
  });

  it("nextQuestion reinicia saveState a 'idle' para la siguiente ronda", async () => {
    api.saveResult.mockResolvedValue({ id: 1 });
    const { result } = renderHook(() => useQuiz());
    act(() => result.current.nextQuestion());
    act(() => result.current.setAnswer(result.current.question.answers[0]));
    act(() => result.current.submitAnswer());
    await act(async () => {
      await result.current.saveScore();
    });
    expect(result.current.saveState).toBe("saved");

    act(() => result.current.nextQuestion());

    expect(result.current.saveState).toBe("idle");
  });
});
