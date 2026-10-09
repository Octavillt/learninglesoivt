import { act, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import App from "../../App";
import { saveActiveTopic } from "../../constants/activeTopics";
import { OCTOBER_EXAM_END, getAvailableTopics } from "../../constants/topicAvailability";
import { TOPICS_BASICO4 } from "../../constants/topics";
import { searchTopics } from "../../constants/searchIndex";
import { getByTopic } from "../quiz/questions";
import OctoberExamSection from "./OctoberExamSection";
import { PRACTICE, STUDY_TOPICS } from "./data";

const LABEL = "📝 Guía de examen — Octubre";

function openGuide() {
  fireEvent.click(screen.getByRole("button", { name: "Básico IV", exact: true }));
  fireEvent.click(within(screen.getByRole("navigation", { name: "Temas del módulo" })).getByRole("button", { name: LABEL, exact: true }));
}

describe("Guía temporal de examen de octubre", () => {
  beforeEach(() => localStorage.clear());
  afterEach(() => vi.useRealTimers());

  it("vence el domingo 11 a las 23:59 CDMX y excluye la guía de navegación, búsqueda y Quiz", () => {
    expect(new Date(OCTOBER_EXAM_END).toISOString()).toBe("2026-10-12T05:59:00.000Z");
    for (const now of [OCTOBER_EXAM_END - 1, OCTOBER_EXAM_END, OCTOBER_EXAM_END + 60000]) {
      const available = now < OCTOBER_EXAM_END;
      expect(getAvailableTopics(TOPICS_BASICO4, now).some(t => t.id === "octoberExam")).toBe(available);
      expect(searchTopics("examen octubre", now).some(t => t.topicId === "octoberExam")).toBe(available);
      expect(getByTopic("octoberExam", "basico4", now)).toHaveLength(available ? 24 : 0);
      expect(getByTopic("mixed", "all", now).some(q => q.topic === "octoberExam")).toBe(available);
      expect(getAvailableTopics(TOPICS_BASICO4, now).some(t => t.id === "adverbsManner")).toBe(true);
    }
    for (const topic of STUDY_TOPICS) expect(PRACTICE.filter(q => q.topic === topic.id)).toHaveLength(4);
  });

  it("oculta la guía abierta sin recargar al llegar la hora y regresa a un tema permanente", () => {
    vi.useFakeTimers();
    vi.setSystemTime(OCTOBER_EXAM_END - 1);
    render(<App />);
    openGuide();
    expect(screen.getByRole("heading", { level: 2, name: /Guía de examen — Octubre/ })).toBeInTheDocument();
    act(() => vi.advanceTimersByTime(1));
    expect(screen.queryByRole("heading", { level: 2, name: /Guía de examen — Octubre/ })).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: LABEL, exact: true })).not.toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: /Partes del cuerpo/ })).toBeInTheDocument();
  }, 30000);

  it("ignora una guía vencida recordada en localStorage", () => {
    vi.useFakeTimers();
    vi.setSystemTime(OCTOBER_EXAM_END + 1);
    saveActiveTopic("basico4", "octoberExam");
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "Básico IV", exact: true }));
    expect(screen.getByRole("heading", { level: 2, name: /Partes del cuerpo/ })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: LABEL, exact: true })).not.toBeInTheDocument();
  }, 30000);

  it("abre el tema buscado y admite navegación de pestañas con teclado", () => {
    const { rerender } = render(<OctoberExamSection highlightTerm="stay hydrated" highlightSeq={1} />);
    expect(screen.getByRole("tab", { name: "Vocabulary: Tourism collocations" })).toHaveAttribute("aria-selected", "true");
    expect(within(screen.getByRole("tabpanel")).getByText("stay hydrated")).toBeInTheDocument();
    fireEvent.keyDown(screen.getByRole("tab", { name: "Vocabulary: Tourism collocations" }), { key: "ArrowRight" });
    expect(screen.getByRole("tab", { name: "Vocabulary: Clothes" })).toHaveFocus();
    fireEvent.keyDown(screen.getByRole("tab", { name: "Vocabulary: Clothes" }), { key: "Home" });
    expect(screen.getByRole("tab", { name: "Guía" })).toHaveAttribute("aria-selected", "true");
    rerender(<OctoberExamSection highlightTerm="stay hydrated" highlightSeq={2} />);
    expect(screen.getByRole("tab", { name: "Vocabulary: Tourism collocations" })).toHaveAttribute("aria-selected", "true");
  });

  it("filtra los cuatro reactivos de un tema, explica respuestas y reinicia", () => {
    render(<OctoberExamSection />);
    fireEvent.click(screen.getByRole("tab", { name: "Práctica" }));
    expect(screen.getByText("🎯 Mini simulador — 24 preguntas")).toBeInTheDocument();
    fireEvent.click(within(screen.getByRole("group", { name: "Filtrar preguntas por tema" })).getByRole("button", { name: "Could / Should" }));
    expect(screen.getByText("🎯 Mini simulador — 4 preguntas")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "obligación", exact: true }));
    expect(screen.getByText(/Llevas 0 de 1 correctas/)).toBeInTheDocument();
    expect(screen.getByText(/Could = possibility/)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "posibilidad", exact: true }));
    expect(screen.getByText(/Llevas 1 de 1 correctas/)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Reiniciar", exact: true }));
    expect(screen.getByText("Elige una respuesta para revisar tu progreso.")).toBeInTheDocument();
  });
});
