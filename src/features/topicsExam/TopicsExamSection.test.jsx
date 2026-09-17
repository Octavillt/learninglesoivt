import { act, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import App from "../../App";
import TopicsExamSection from "./TopicsExamSection";
import { TOPICS_EXAM_END } from "../../constants/topicAvailability";
import { searchTopics } from "../../constants/searchIndex";
import { getByTopic } from "../quiz/questions";
import { findTabForTerm } from "./tabSearch";

describe("Topics Exam temporal", () => {
  beforeEach(() => localStorage.clear());
  afterEach(() => vi.useRealTimers());
  it("vence el domingo a las 23:59 de Ciudad de México y sale de búsqueda y quiz", () => {
    expect(new Date(TOPICS_EXAM_END).toISOString()).toBe("2026-09-14T05:59:00.000Z");
    expect(searchTopics("teclado", TOPICS_EXAM_END - 1).some(t => t.topicId === "topicsExam")).toBe(true);
    expect(searchTopics("teclado", TOPICS_EXAM_END).some(t => t.topicId === "topicsExam")).toBe(false);
    expect(getByTopic("topicsExam", "all", TOPICS_EXAM_END - 1)).toHaveLength(32);
    expect(getByTopic("topicsExam", "all", TOPICS_EXAM_END)).toHaveLength(0);
  });
  it("oculta el módulo abierto y sus opciones sin recargar", () => {
    vi.useFakeTimers();
    vi.setSystemTime(TOPICS_EXAM_END - 1);
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "Básico III" }));
    fireEvent.click(within(screen.getByRole("navigation", { name: "Temas del módulo" })).getByRole("button", { name: "📝 Guía de examen por temas" }));
    expect(screen.getByRole("heading", { name: /Guía de examen por temas —/ })).toBeInTheDocument();
    act(() => vi.advanceTimersByTime(1));
    expect(screen.queryByRole("heading", { name: /Guía de examen por temas —/ })).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "📝 Guía de examen por temas" })).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "🎯 Quiz", exact: true }));
    expect(screen.queryByRole("option", { name: "📝 Guía de examen por temas" })).not.toBeInTheDocument();
  });
  it("mantiene el Quiz utilizable si vence el tema con el que se abrió", () => {
    vi.useFakeTimers();
    vi.setSystemTime(TOPICS_EXAM_END - 1);
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "Básico III", exact: true }));
    fireEvent.click(within(screen.getByRole("navigation", { name: "Temas del módulo" })).getByRole("button", { name: "📝 Guía de examen por temas" }));
    fireEvent.click(screen.getByRole("button", { name: "Practicar este tema en el Quiz" }));
    expect(screen.getByLabelText("Sección")).toHaveValue("topicsExam");
    act(() => vi.advanceTimersByTime(1));
    expect(screen.getByLabelText("Módulo")).toHaveValue("basico3");
    expect(screen.getByLabelText("Sección")).toHaveValue("mixed");
    expect(screen.getByRole("button", { name: /Empezar Quiz/ })).toBeEnabled();
  });
  it("muestra un tema a la vez y navega entre pestañas", () => {
    render(<TopicsExamSection />);
    expect(screen.getByRole("tab", { name: /Guía/ })).toHaveAttribute("aria-selected", "true");
    fireEvent.click(screen.getByRole("tab", { name: /There is \/ are/ }));
    expect(screen.getByText(/La confusión más común/)).toBeInTheDocument();
    expect(screen.queryByText(/Decide cuál usar/)).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /Presentes →/ }));
    expect(screen.getByRole("tab", { name: /Presentes/ })).toHaveAttribute("aria-selected", "true");
    expect(screen.getByText(/Paso 1 — Decide cuál usar/)).toBeInTheDocument();
  });
  it("explica las oraciones de There is / There are del pizarrón", () => {
    render(<TopicsExamSection />);
    fireEvent.click(screen.getByRole("tab", { name: /There is \/ are/ }));
    fireEvent.click(screen.getAllByRole("button", { name: "There are" })[0]);
    expect(screen.getByText(/Casi. La respuesta es “There is”/)).toBeInTheDocument();
    fireEvent.click(screen.getAllByRole("button", { name: "There is" })[0]);
    expect(screen.getByText(/✅ Correcto\./)).toBeInTheDocument();
  });
  it("recorre la ruta del mapa de Directions paso a paso", () => {
    render(<TopicsExamSection />);
    fireEvent.click(screen.getByRole("tab", { name: /Directions/ }));
    expect(screen.getByText("Paso 1 de 5")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /Siguiente/ }));
    expect(screen.getByText("Paso 2 de 5")).toBeInTheDocument();
  });
  it("filtra la práctica por tema y reinicia el simulador", () => {
    render(<TopicsExamSection />);
    fireEvent.click(screen.getByRole("tab", { name: /Práctica/ }));
    expect(screen.getByText(/🎯 Mini simulador — 32 preguntas/)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /^Directions/ }));
    expect(screen.getByText(/🎯 Mini simulador — 4 preguntas/)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /^Todas/ }));
    fireEvent.click(screen.getAllByRole("button", { name: "There are", exact: true })[0]);
    expect(screen.getByText(/La respuesta es “There is”/)).toBeInTheDocument();
    expect(screen.getByText("Llevas 0 de 1 correctas.")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Reiniciar" }));
    expect(screen.getByText("Elige una respuesta para revisar tu progreso.")).toBeInTheDocument();
  });

  it("abre la pestaña del término que llega del buscador global", () => {
    expect(findTabForTerm("teclado")).toBe("technology");
    expect(findTabForTerm("hashtag")).toBe("social");
    expect(findTabForTerm("sigue derecho")).toBe("directions");
    expect(findTabForTerm("there are")).toBe("there");
    expect(findTabForTerm("present progressive")).toBe("tenses");
    render(<TopicsExamSection highlightTerm="teclado" highlightSeq={1} />);
    expect(screen.getByRole("tab", { name: /Technology/ })).toHaveAttribute("aria-selected", "true");
    expect(screen.getByText("keyboard")).toBeInTheDocument();
  });
});
