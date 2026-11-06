import { act, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import App from "../../App";
import { saveActiveTopic } from "../../constants/activeTopics";
import { NOVEMBER_EXAM_END, getAvailableTopics } from "../../constants/topicAvailability";
import { TOPICS_BASICO5 } from "../../constants/topics";
import { searchTopics } from "../../constants/searchIndex";
import { getByTopic } from "../quiz/questions";
import ReviewOfTensesSection from "./ReviewOfTensesSection";
import { DETECTOR, PRACTICE, SAME_VERB, TENSES, TRAPS } from "./data";

const LABEL = "🧭 Repaso de tiempos verbales";
const HEADING = "🧭 Repaso de tiempos verbales — Review of Tenses";

function openSection() {
  fireEvent.click(screen.getByRole("button", { name: "Básico V", exact: true }));
  fireEvent.click(within(screen.getByRole("navigation", { name: "Temas del módulo" })).getByRole("button", { name: LABEL, exact: true }));
}

describe("Review of Tenses — datos", () => {
  it("cubre los cuatro tiempos con sus time expressions del pizarrón", () => {
    expect(TENSES.map(tense => tense.name)).toEqual(["Simple Present", "Present Progressive", "Simple Past", "Going to"]);
    const board = Object.fromEntries(TENSES.map(tense => [tense.id, tense.boardExpressions.map(([en]) => en).join(" | ")]));
    expect(board.simplePresent).toMatch(/every day.*every week \/ every month.*today/);
    expect(board.presentProgressive).toBe("now | right now | at this moment");
    expect(board.simplePast).toMatch(/yesterday.*ago.*last night/);
    for (const tense of TENSES) {
      expect(tense.forms.map(([type]) => type)).toEqual(["Afirmativa", "Negativa", "Pregunta", "Pregunta WH"]);
      expect(tense.moreExpressions.length).toBeGreaterThan(0);
    }
  });

  it("el detector asigna cada expresión a un solo tiempo existente y el ejemplo la contiene", () => {
    const ids = new Set(TENSES.map(tense => tense.id));
    expect(new Set(DETECTOR.map(item => item.expression)).size).toBe(DETECTOR.length);
    for (const item of DETECTOR) {
      expect(ids.has(item.tense)).toBe(true);
      expect(item.example.toLowerCase()).toContain(item.expression.toLowerCase().replace("!", ""));
      expect(item.esp).toBeTruthy();
    }
    for (const tense of TENSES) expect(DETECTOR.some(item => item.tense === tense.id)).toBe(true);
  });

  it("el mismo verbo se conjuga en los cuatro tiempos con su expresión de tiempo", () => {
    expect(SAME_VERB.map(([tense]) => tense)).toEqual(TENSES.map(tense => tense.name));
    const [present, progressive, past, future] = SAME_VERB;
    expect(present[1]).toBe("Leslie studies English every day.");
    expect(progressive[1]).toBe("Leslie is studying English right now.");
    expect(past[2]).toBe("Leslie didn't study English yesterday.");
    expect(future[3]).toBe("Is Leslie going to study English tomorrow?");
  });

  it("la práctica tiene 20 reactivos únicos con una sola respuesta entre sus opciones", () => {
    expect(PRACTICE).toHaveLength(20);
    expect(new Set(PRACTICE.map(row => row.question)).size).toBe(PRACTICE.length);
    for (const row of PRACTICE) {
      expect(row.answers).toHaveLength(1);
      expect(row.options).toContain(row.answers[0]);
      expect(new Set(row.options).size).toBe(row.options.length);
      expect(row.explanation).toBeTruthy();
    }
  });

  it("explica las trampas de today, every day y last day", () => {
    const traps = TRAPS.map(trap => `${trap.title} ${trap.text}`).join(" ");
    expect(traps).toMatch(/Today puede ir con varios tiempos/);
    expect(traps).toMatch(/Every day se escribe separado/);
    expect(traps).toMatch(/last day significa «el último día»/);
    expect(traps).toMatch(/ago two weeks/);
  });
});

describe("Review of Tenses — disponibilidad temporal", () => {
  beforeEach(() => localStorage.clear());
  afterEach(() => vi.useRealTimers());

  it("vence el domingo 8 de noviembre a las 23:59 CDMX y sale de navegación, búsqueda y Quiz", () => {
    expect(new Date(NOVEMBER_EXAM_END).toISOString()).toBe("2026-11-09T05:59:00.000Z");
    for (const now of [NOVEMBER_EXAM_END - 1, NOVEMBER_EXAM_END, NOVEMBER_EXAM_END + 60000]) {
      const available = now < NOVEMBER_EXAM_END;
      const ids = getAvailableTopics(TOPICS_BASICO5, now).map(topic => topic.id);
      expect(ids.includes("reviewOfTenses")).toBe(available);
      expect(ids).toContain("naturalFeatures");
      expect(searchTopics("review of tenses", now).some(result => result.topicId === "reviewOfTenses")).toBe(available);
      expect(getByTopic("reviewOfTenses", "basico5", now)).toHaveLength(available ? 20 : 0);
      expect(getByTopic("mixed", "all", now).some(question => question.topic === "reviewOfTenses")).toBe(available);
    }
  });

  it("oculta la sección abierta al llegar la hora y regresa a un tema permanente", () => {
    vi.useFakeTimers();
    vi.setSystemTime(NOVEMBER_EXAM_END - 1);
    render(<App />);
    openSection();
    expect(screen.getByRole("heading", { level: 2, name: HEADING })).toBeInTheDocument();
    act(() => vi.advanceTimersByTime(1));
    expect(screen.queryByRole("heading", { level: 2, name: HEADING })).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: LABEL, exact: true })).not.toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: /Pasado simple/ })).toBeInTheDocument();
  }, 30000);

  it("ignora la sección vencida recordada en localStorage", () => {
    vi.useFakeTimers();
    vi.setSystemTime(NOVEMBER_EXAM_END + 1);
    saveActiveTopic("basico5", "reviewOfTenses");
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "Básico V", exact: true }));
    expect(screen.getByRole("heading", { level: 2, name: /Pasado simple/ })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: LABEL, exact: true })).not.toBeInTheDocument();
  }, 30000);
});

describe("Review of Tenses — contenido visible", () => {
  beforeEach(() => localStorage.clear());
  afterEach(() => vi.useRealTimers());

  it("muestra el método, las cuatro tarjetas con sus expresiones y los ejemplos del pizarrón", () => {
    vi.useFakeTimers();
    vi.setSystemTime(NOVEMBER_EXAM_END - 60000);
    render(<App />);
    openSection();
    const main = screen.getByRole("main");
    expect(screen.getByRole("heading", { level: 3, name: /Método de tres pasos/ })).toBeInTheDocument();
    for (const name of ["Simple Present", "Present Progressive", "Simple Past", "Going to"]) {
      expect(within(main).getAllByText(name, { exact: true }).length).toBeGreaterThan(0);
    }
    for (const expression of ["every day", "right now", "at this moment", "yesterday", "two weeks ago", "last night", "tomorrow", "next week / next month / next year"]) {
      expect(within(main).getAllByText(expression, { exact: true }).length).toBeGreaterThan(0);
    }
    for (const sentence of ["Octa is paying attention.", "He went to Six Flags two weeks ago.", "Why does she work every day? — Because she likes money."]) {
      expect(main).toHaveTextContent(sentence);
    }
    expect(main).toHaveTextContent("23:59 (Ciudad de México, UTC−6)");
    expect(main).not.toHaveTextContent(/del libro|Lesson \d|Unit \d+|\bp\. ?\d+/);
  }, 30000);

  it("el detector indica el tiempo, el auxiliar y un ejemplo de la expresión elegida", () => {
    render(<ReviewOfTensesSection />);
    const group = within(screen.getByRole("group", { name: "Expresiones de tiempo" }));
    const status = screen.getByRole("status");
    expect(group.getAllByRole("button")).toHaveLength(DETECTOR.length);
    expect(status).toHaveTextContent("Toca una expresión para ver qué tiempo pide.");

    fireEvent.click(group.getByRole("button", { name: "two weeks ago" }));
    expect(group.getByRole("button", { name: "two weeks ago" })).toHaveAttribute("aria-pressed", "true");
    expect(status).toHaveTextContent("two weeks ago → Simple Past (Pasado simple)");
    expect(status).toHaveTextContent("did / didn't + verbo base");
    expect(status).toHaveTextContent("He went to Six Flags two weeks ago.");

    fireEvent.click(group.getByRole("button", { name: "right now" }));
    expect(group.getByRole("button", { name: "two weeks ago" })).toHaveAttribute("aria-pressed", "false");
    expect(status).toHaveTextContent("right now → Present Progressive (Presente progresivo)");

    fireEvent.click(group.getByRole("button", { name: "tomorrow" }));
    expect(status).toHaveTextContent("tomorrow → Going to (Futuro con going to)");
    fireEvent.click(group.getByRole("button", { name: "tomorrow" }));
    expect(status).toHaveTextContent("Toca una expresión para ver qué tiempo pide.");
  });

  it("compara el mismo verbo en una tabla y corrige los errores típicos", () => {
    render(<ReviewOfTensesSection />);
    expect(screen.getByRole("columnheader", { name: "Respuesta corta" })).toBeInTheDocument();
    expect(screen.getByRole("cell", { name: "Leslie is going to study English tomorrow." })).toBeInTheDocument();
    expect(screen.getByText("✗ I didn't ate pizza.")).toBeInTheDocument();
    expect(screen.getByText("✓ I didn't eat pizza.")).toBeInTheDocument();
  });

  it("el simulador califica, explica la pista de tiempo y reinicia", () => {
    render(<ReviewOfTensesSection />);
    expect(screen.getByText("🎯 Mini simulador — 20 preguntas")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "works", exact: true }));
    expect(screen.getByText(/Llevas 1 de 1 correctas/)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "fall", exact: true }));
    expect(screen.getByText(/Llevas 1 de 2 correctas/)).toBeInTheDocument();
    expect(screen.getByText(/La respuesta es “fell”/)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Reiniciar", exact: true }));
    expect(screen.getByText("Elige una respuesta para revisar tu progreso.")).toBeInTheDocument();
  });

  it("enlaza la lección completa de cada tiempo y la guía de noviembre", () => {
    vi.useFakeTimers();
    vi.setSystemTime(NOVEMBER_EXAM_END - 60000);
    render(<App />);
    openSection();
    expect(screen.getAllByRole("button", { name: /Abrir la lección completa/ })).toHaveLength(4);
    fireEvent.click(screen.getByRole("button", { name: /Abrir la guía de examen de noviembre/ }));
    expect(screen.getByRole("heading", { level: 2, name: /Guía de examen — Noviembre/ })).toBeInTheDocument();
  }, 30000);
});
