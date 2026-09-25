import { act, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import App from "../../App";
import { saveActiveTopic } from "../../constants/activeTopics";
import { MODULE_IV_EXAM_END, getAvailableTopics } from "../../constants/topicAvailability";
import { TOPICS_BASICO4 } from "../../constants/topics";
import { searchTopics } from "../../constants/searchIndex";
import { getByTopic } from "../quiz/questions";
import ModuleIVExamSection from "./ModuleIVExamSection";
import { PRACTICE, STUDY_TOPICS } from "./data";

const LABEL = "📝 Guía de examen — Módulo IV";

function openGuide() {
  fireEvent.click(screen.getByRole("button", { name: "Básico IV", exact: true }));
  fireEvent.click(within(screen.getByRole("navigation", { name: "Temas del módulo" })).getByRole("button", { name: LABEL, exact: true }));
}

describe("Guía temporal de examen IV", () => {
  beforeEach(() => localStorage.clear());
  afterEach(() => vi.useRealTimers());

  it("vence el domingo 27 a las 23:59 CDMX y excluye la guía de navegación, búsqueda y Quiz", () => {
    expect(new Date(MODULE_IV_EXAM_END).toISOString()).toBe("2026-09-28T05:59:00.000Z");
    for (const now of [MODULE_IV_EXAM_END - 1, MODULE_IV_EXAM_END, MODULE_IV_EXAM_END + 60000]) {
      const available = now < MODULE_IV_EXAM_END;
      expect(getAvailableTopics(TOPICS_BASICO4, now).some(t => t.id === "moduleIVExam")).toBe(available);
      expect(searchTopics("guía de examen", now).some(t => t.topicId === "moduleIVExam")).toBe(available);
      expect(getByTopic("moduleIVExam", "basico4", now)).toHaveLength(available ? 24 : 0);
      expect(getByTopic("mixed", "all", now).some(q => q.topic === "moduleIVExam")).toBe(available);
      expect(getAvailableTopics(TOPICS_BASICO4, now).some(t => t.id === "adverbsManner")).toBe(true);
    }
    for (const topic of STUDY_TOPICS) expect(PRACTICE.filter(q => q.topic === topic.id)).toHaveLength(4);
  });

  it("oculta la guía abierta sin recargar al llegar la hora y regresa a un tema permanente", () => {
    vi.useFakeTimers();
    vi.setSystemTime(MODULE_IV_EXAM_END - 1);
    render(<App />);
    openGuide();
    expect(screen.getByRole("heading", { level: 2, name: /Guía de examen — Módulo IV/ })).toBeInTheDocument();
    act(() => vi.advanceTimersByTime(1));
    expect(screen.queryByRole("heading", { level: 2, name: /Guía de examen — Módulo IV/ })).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: LABEL, exact: true })).not.toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: /Partes del cuerpo/ })).toBeInTheDocument();
  }, 30000);

  it("retira la guía del Quiz abierto al vencer y permite continuar practicando", () => {
    vi.useFakeTimers();
    vi.setSystemTime(MODULE_IV_EXAM_END - 1);
    render(<App />);
    openGuide();
    fireEvent.click(screen.getByRole("button", { name: "Practicar este tema en el Quiz" }));
    expect(screen.getByLabelText("Sección")).toHaveValue("moduleIVExam");
    act(() => vi.advanceTimersByTime(1));
    expect(screen.getByLabelText("Módulo")).toHaveValue("basico4");
    expect(screen.getByLabelText("Sección")).toHaveValue("mixed");
    expect(screen.queryByRole("option", { name: LABEL })).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Empezar Quiz/ })).toBeEnabled();
  }, 30000);

  it("ignora una guía vencida recordada en localStorage", () => {
    vi.useFakeTimers();
    vi.setSystemTime(MODULE_IV_EXAM_END + 1);
    saveActiveTopic("basico4", "moduleIVExam");
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "Básico IV", exact: true }));
    expect(screen.getByRole("heading", { level: 2, name: /Partes del cuerpo/ })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: LABEL, exact: true })).not.toBeInTheDocument();
  }, 30000);

  it("abre el tema buscado y admite navegación de pestañas con teclado", () => {
    const { rerender } = render(<ModuleIVExamSection highlightTerm="hardly ever" highlightSeq={1} />);
    expect(screen.getByRole("tab", { name: "Frequency adverbs" })).toHaveAttribute("aria-selected", "true");
    expect(within(screen.getByRole("tabpanel")).getByText("hardly ever")).toBeInTheDocument();
    fireEvent.keyDown(screen.getByRole("tab", { name: "Frequency adverbs" }), { key: "ArrowRight" });
    expect(screen.getByRole("tab", { name: "Adverbs of manner" })).toHaveFocus();
    fireEvent.keyDown(screen.getByRole("tab", { name: "Adverbs of manner" }), { key: "Home" });
    expect(screen.getByRole("tab", { name: "Guía" })).toHaveAttribute("aria-selected", "true");
    rerender(<ModuleIVExamSection highlightTerm="hardly ever" highlightSeq={2} />);
    expect(screen.getByRole("tab", { name: "Frequency adverbs" })).toHaveAttribute("aria-selected", "true");
  });

  it("filtra los cuatro reactivos de un tema, explica respuestas y reinicia", () => {
    render(<ModuleIVExamSection />);
    fireEvent.click(screen.getByRole("tab", { name: "Práctica" }));
    expect(screen.getByText("🎯 Mini simulador — 24 preguntas")).toBeInTheDocument();
    fireEvent.click(within(screen.getByRole("group", { name: "Filtrar preguntas por tema" })).getByRole("button", { name: "Can / Can't" }));
    expect(screen.getByText("🎯 Mini simulador — 4 preguntas")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "swims", exact: true }));
    expect(screen.getByText(/Llevas 0 de 1 correctas/)).toBeInTheDocument();
    expect(screen.getByText(/Después de can se usa el verbo base: swim/)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "swim", exact: true }));
    expect(screen.getByText(/Llevas 1 de 1 correctas/)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Reiniciar", exact: true }));
    expect(screen.getByText("Elige una respuesta para revisar tu progreso.")).toBeInTheDocument();
  });
});
