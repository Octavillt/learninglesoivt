import { act, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import App from "../../App";
import { saveActiveTopic } from "../../constants/activeTopics";
import { NOVEMBER_EXAM_END, getAvailableTopics } from "../../constants/topicAvailability";
import { TOPICS_BASICO5 } from "../../constants/topics";
import { searchTopics } from "../../constants/searchIndex";
import { getByTopic } from "../quiz/questions";
import NovemberExamSection from "./NovemberExamSection";
import { PRACTICE, STUDY_TOPICS } from "./data";

const LABEL = "📝 Guía de examen — Noviembre";
const TITLES = ["Comparatives", "Review of Tenses", "Vocabulary: Money", "Vocabulary: Natural Features"];

function openGuide() {
  fireEvent.click(screen.getByRole("button", { name: "Básico V", exact: true }));
  fireEvent.click(within(screen.getByRole("navigation", { name: "Temas del módulo" })).getByRole("button", { name: LABEL, exact: true }));
}

describe("Guía temporal de examen de noviembre", () => {
  beforeEach(() => localStorage.clear());
  afterEach(() => vi.useRealTimers());

  it("vence el domingo 8 a las 23:59 CDMX y excluye la guía de navegación, búsqueda y Quiz", () => {
    for (const now of [NOVEMBER_EXAM_END - 1, NOVEMBER_EXAM_END, NOVEMBER_EXAM_END + 60000]) {
      const available = now < NOVEMBER_EXAM_END;
      expect(getAvailableTopics(TOPICS_BASICO5, now).some(t => t.id === "novemberExam")).toBe(available);
      expect(searchTopics("examen noviembre", now).some(t => t.topicId === "novemberExam")).toBe(available);
      expect(getByTopic("novemberExam", "basico5", now)).toHaveLength(available ? 40 : 0);
      expect(getByTopic("mixed", "all", now).some(q => q.topic === "novemberExam")).toBe(available);
      expect(getAvailableTopics(TOPICS_BASICO5, now).map(t => t.id)).toEqual(expect.arrayContaining(["comparatives", "moneyCareer", "naturalFeatures"]));
    }
  });

  it("cubre los cuatro temas del examen con diez reactivos cada uno, sin repetir y con la respuesta en distintas posiciones", () => {
    expect(STUDY_TOPICS.map(topic => topic.title)).toEqual(TITLES);
    expect(STUDY_TOPICS.map(topic => topic.topicId)).toEqual(["comparatives", "reviewOfTenses", "moneyCareer", "naturalFeatures"]);
    for (const topic of STUDY_TOPICS) {
      expect(PRACTICE.filter(q => q.topic === topic.id)).toHaveLength(10);
      expect(topic.rules.length).toBeGreaterThanOrEqual(8);
      expect(topic.vocab.length).toBeGreaterThanOrEqual(10);
      expect(topic.examples.length).toBeGreaterThanOrEqual(6);
      expect(topic.mistake).toBeTruthy();
    }
    expect(PRACTICE).toHaveLength(40);
    expect(new Set(PRACTICE.map(q => q.question)).size).toBe(PRACTICE.length);
    expect(new Set(PRACTICE.map(q => q.correct))).toEqual(new Set([0, 1, 2]));
    for (const row of PRACTICE) {
      expect(row.options).toHaveLength(3);
      expect(row.options[row.correct]).toBeTruthy();
      expect(row.explanation).toBeTruthy();
    }
  });

  it("no marca como error la grafía volcanos, que también es correcta", () => {
    const wrongOptions = PRACTICE.flatMap(row => row.options.filter((_, index) => index !== row.correct));
    expect(wrongOptions).not.toContain("volcanos");
    const naturalFeatures = STUDY_TOPICS.find(topic => topic.id === "naturalFeatures");
    expect(naturalFeatures.mistake).not.toMatch(/No:[^→]*volcanos/);
  });

  it("no cita el libro en el contenido de la guía", () => {
    const content = JSON.stringify([STUDY_TOPICS, PRACTICE]);
    expect(content).not.toMatch(/del libro|Lesson \d|Unit \d+|\bp\. ?\d+/);
  });

  it("oculta la guía abierta sin recargar al llegar la hora y regresa a un tema permanente", () => {
    vi.useFakeTimers();
    vi.setSystemTime(NOVEMBER_EXAM_END - 1);
    render(<App />);
    openGuide();
    expect(screen.getByRole("heading", { level: 2, name: /Guía de examen — Noviembre/ })).toBeInTheDocument();
    expect(screen.getByText(/Disponible hasta el domingo 8 de noviembre de 2026, 23:59/)).toBeInTheDocument();
    act(() => vi.advanceTimersByTime(1));
    expect(screen.queryByRole("heading", { level: 2, name: /Guía de examen — Noviembre/ })).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: LABEL, exact: true })).not.toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: /Pasado simple/ })).toBeInTheDocument();
  }, 30000);

  it("ignora una guía vencida recordada en localStorage", () => {
    vi.useFakeTimers();
    vi.setSystemTime(NOVEMBER_EXAM_END + 1);
    saveActiveTopic("basico5", "novemberExam");
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "Básico V", exact: true }));
    expect(screen.getByRole("heading", { level: 2, name: /Pasado simple/ })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: LABEL, exact: true })).not.toBeInTheDocument();
  }, 30000);

  it("abre el tema buscado y admite navegación de pestañas con teclado", () => {
    const { rerender } = render(<NovemberExamSection highlightTerm="Popocatépetl" highlightSeq={1} />);
    expect(screen.getByRole("tab", { name: "Vocabulary: Natural Features" })).toHaveAttribute("aria-selected", "true");
    fireEvent.keyDown(screen.getByRole("tab", { name: "Vocabulary: Natural Features" }), { key: "ArrowLeft" });
    expect(screen.getByRole("tab", { name: "Vocabulary: Money" })).toHaveFocus();
    fireEvent.keyDown(screen.getByRole("tab", { name: "Vocabulary: Money" }), { key: "End" });
    expect(screen.getByRole("tab", { name: "Práctica" })).toHaveAttribute("aria-selected", "true");
    rerender(<NovemberExamSection highlightTerm="right now" highlightSeq={2} />);
    expect(screen.getByRole("tab", { name: "Review of Tenses" })).toHaveAttribute("aria-selected", "true");
  });

  it("cada pestaña de tema enlaza a su lección completa", () => {
    vi.useFakeTimers();
    vi.setSystemTime(NOVEMBER_EXAM_END - 60000);
    render(<App />);
    openGuide();
    for (const title of TITLES) {
      fireEvent.click(screen.getByRole("tab", { name: title }));
      const panel = within(screen.getByRole("tabpanel"));
      expect(panel.getByRole("heading", { name: title })).toBeInTheDocument();
      expect(panel.getByRole("button", { name: /Abrir la lección completa/ })).toBeInTheDocument();
    }
  }, 30000);

  it("filtra los diez reactivos de un tema, explica respuestas y reinicia", () => {
    render(<NovemberExamSection />);
    fireEvent.click(screen.getByRole("tab", { name: "Práctica" }));
    expect(screen.getByText("🎯 Mini simulador — 40 preguntas")).toBeInTheDocument();
    fireEvent.click(within(screen.getByRole("group", { name: "Filtrar preguntas por tema" })).getByRole("button", { name: "Vocabulary: Money" }));
    expect(screen.getByText("🎯 Mini simulador — 10 preguntas")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "win money", exact: true }));
    expect(screen.getByText(/Llevas 0 de 1 correctas/)).toBeInTheDocument();
    expect(screen.getByText(/La respuesta es “earn money”/)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "sold", exact: true }));
    expect(screen.getByText(/Llevas 1 de 2 correctas/)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Reiniciar", exact: true }));
    expect(screen.getByText("Elige una respuesta para revisar tu progreso.")).toBeInTheDocument();
  });
});
