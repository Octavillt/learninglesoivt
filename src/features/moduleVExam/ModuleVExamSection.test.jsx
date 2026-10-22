import { act, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import App from "../../App";
import { saveActiveTopic } from "../../constants/activeTopics";
import { MODULE_V_EXAM_END, getAvailableTopics } from "../../constants/topicAvailability";
import { TOPICS_BASICO5 } from "../../constants/topics";
import { searchTopics } from "../../constants/searchIndex";
import { getByTopic } from "../quiz/questions";
import ModuleVExamSection from "./ModuleVExamSection";
import { PRACTICE, STUDY_TOPICS } from "./data";

const LABEL = "📝 Guía de examen — Módulo V";

function openGuide() {
  fireEvent.click(screen.getByRole("button", { name: "Básico V", exact: true }));
  fireEvent.click(within(screen.getByRole("navigation", { name: "Temas del módulo" })).getByRole("button", { name: LABEL, exact: true }));
}

describe("Guía temporal de examen del Módulo V", () => {
  beforeEach(() => localStorage.clear());
  afterEach(() => vi.useRealTimers());

  it("vence el domingo 25 a las 23:59 CDMX y excluye la guía de navegación, búsqueda y Quiz", () => {
    expect(new Date(MODULE_V_EXAM_END).toISOString()).toBe("2026-10-26T05:59:00.000Z");
    for (const now of [MODULE_V_EXAM_END - 1, MODULE_V_EXAM_END, MODULE_V_EXAM_END + 60000]) {
      const available = now < MODULE_V_EXAM_END;
      expect(getAvailableTopics(TOPICS_BASICO5, now).some(t => t.id === "moduleVExam")).toBe(available);
      expect(searchTopics("examen módulo v", now).some(t => t.topicId === "moduleVExam")).toBe(available);
      expect(getByTopic("moduleVExam", "basico5", now)).toHaveLength(available ? 30 : 0);
      expect(getByTopic("mixed", "all", now).some(q => q.topic === "moduleVExam")).toBe(available);
      expect(getAvailableTopics(TOPICS_BASICO5, now).map(t => t.id)).toEqual(expect.arrayContaining(["simplePast", "goingTo", "socialCollocations"]));
    }
  });

  it("cubre los tres temas del examen con diez reactivos cada uno y preguntas sin repetir", () => {
    expect(STUDY_TOPICS.map(topic => topic.title)).toEqual(["Simple Past", "Going to", "Vocabulary: Social Life Collocations"]);
    for (const topic of STUDY_TOPICS) expect(PRACTICE.filter(q => q.topic === topic.id)).toHaveLength(10);
    expect(new Set(PRACTICE.map(q => q.question)).size).toBe(PRACTICE.length);
    for (const row of PRACTICE) {
      expect(row.options[row.correct]).toBeTruthy();
      expect(row.explanation).toBeTruthy();
    }
  });

  it("oculta la guía abierta sin recargar al llegar la hora y regresa a un tema permanente", () => {
    vi.useFakeTimers();
    vi.setSystemTime(MODULE_V_EXAM_END - 1);
    render(<App />);
    openGuide();
    expect(screen.getByRole("heading", { level: 2, name: /Guía de examen — Módulo V/ })).toBeInTheDocument();
    act(() => vi.advanceTimersByTime(1));
    expect(screen.queryByRole("heading", { level: 2, name: /Guía de examen — Módulo V/ })).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: LABEL, exact: true })).not.toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: /Pasado simple/ })).toBeInTheDocument();
  }, 30000);

  it("ignora una guía vencida recordada en localStorage", () => {
    vi.useFakeTimers();
    vi.setSystemTime(MODULE_V_EXAM_END + 1);
    saveActiveTopic("basico5", "moduleVExam");
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "Básico V", exact: true }));
    expect(screen.getByRole("heading", { level: 2, name: /Pasado simple/ })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: LABEL, exact: true })).not.toBeInTheDocument();
  }, 30000);

  it("abre el tema buscado y admite navegación de pestañas con teclado", () => {
    const { rerender } = render(<ModuleVExamSection highlightTerm="gonna" highlightSeq={1} />);
    expect(screen.getByRole("tab", { name: "Going to" })).toHaveAttribute("aria-selected", "true");
    fireEvent.keyDown(screen.getByRole("tab", { name: "Going to" }), { key: "ArrowRight" });
    expect(screen.getByRole("tab", { name: "Vocabulary: Social Life Collocations" })).toHaveFocus();
    fireEvent.keyDown(screen.getByRole("tab", { name: "Vocabulary: Social Life Collocations" }), { key: "Home" });
    expect(screen.getByRole("tab", { name: "Guía" })).toHaveAttribute("aria-selected", "true");
    rerender(<ModuleVExamSection highlightTerm="gonna" highlightSeq={2} />);
    expect(screen.getByRole("tab", { name: "Going to" })).toHaveAttribute("aria-selected", "true");
  });

  it("explica el caso going to go en la pestaña de Going to", () => {
    render(<ModuleVExamSection />);
    fireEvent.click(screen.getByRole("tab", { name: "Going to" }));
    const panel = within(screen.getByRole("tabpanel"));
    expect(panel.getByText(/El caso going to go/)).toBeInTheDocument();
    expect(panel.getByText("I'm going to go to Acapulco in December.")).toBeInTheDocument();
    expect(panel.getByRole("button", { name: /Abrir la lección completa/ })).toBeInTheDocument();
  });

  it("filtra los diez reactivos de un tema, explica respuestas y reinicia", () => {
    render(<ModuleVExamSection />);
    fireEvent.click(screen.getByRole("tab", { name: "Práctica" }));
    expect(screen.getByText("🎯 Mini simulador — 30 preguntas")).toBeInTheDocument();
    fireEvent.click(within(screen.getByRole("group", { name: "Filtrar preguntas por tema" })).getByRole("button", { name: "Vocabulary: Social Life Collocations" }));
    expect(screen.getByText("🎯 Mini simulador — 10 preguntas")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "make a party", exact: true }));
    expect(screen.getByText(/Llevas 0 de 1 correctas/)).toBeInTheDocument();
    expect(screen.getByText(/Nunca make a party/)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "have a party", exact: true }));
    expect(screen.getByText(/Llevas 1 de 1 correctas/)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Reiniciar", exact: true }));
    expect(screen.getByText("Elige una respuesta para revisar tu progreso.")).toBeInTheDocument();
  });
});
