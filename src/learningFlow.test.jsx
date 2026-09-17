import { act, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import App from "./App";
import { LEVELS } from "./constants/levels";
import { LEARNING_GUIDE } from "./constants/learningGuide";
import { scrollToAndHighlight } from "./constants/highlightMatch";

const membership = {
  basico1: "verbs fruits plural numbers time dates countries family jobs tobe demonstratives prepositions progressive",
  basico2: "irregularVerbs adjectives whQuestions articles possessiveAdjectives possessiveNouns gerunds simplePresent vocabulary",
  basico3: "inOnAt simplePresentAdvanced directions topicsExam examReview",
  basico4: "bodyParts",
};

beforeEach(() => localStorage.clear());
afterEach(() => vi.useRealTimers());

describe("Recorrido de aprendizaje", () => {
  it("conserva todas las secciones en su módulo y enlaza bases anteriores", () => {
    const seen = new Set();
    for (const level of LEVELS.filter(level => level.id !== "quiz")) {
      expect(level.topics.map(t => t.id).sort()).toEqual(membership[level.id].split(" ").sort());
      for (const topic of level.topics) {
        expect(seen.has(topic.id)).toBe(false);
        const guide = LEARNING_GUIDE[topic.id];
        expect(guide.goal).toBeTruthy();
        expect(guide.task).toBeTruthy();
        expect(guide.answer).toBeTruthy();
        for (const prerequisite of guide.recall) expect(seen.has(prerequisite)).toBe(true);
        seen.add(topic.id);
      }
    }
    expect(seen.size).toBe(28);
  });

  it.each(LEVELS.filter(level => level.id !== "quiz"))("abre cada sección y su autoevaluación en $label", level => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-08-01T12:00:00Z"));
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: level.label, exact: true }));
    for (const topic of level.topics) {
      const navigation = within(screen.getByRole("navigation", { name: "Temas del módulo" }));
      fireEvent.click(navigation.getByRole("button", { name: topic.label, exact: true }));
      expect(screen.getByRole("heading", { level: 2, name: `${topic.label} — ${topic.english}` })).toBeInTheDocument();
      expect(screen.getByRole("region", { name: "Comprueba lo aprendido" })).toHaveTextContent(LEARNING_GUIDE[topic.id].task);
    }
  });

  it("avanza dentro del módulo y cruza al siguiente desde el último tema", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: /Siguiente tema.*Verbo to be/ }));
    expect(screen.getByRole("heading", { level: 2, name: /Verbo to be/ })).toBeInTheDocument();
    fireEvent.click(within(screen.getByRole("navigation", { name: "Temas del módulo" })).getByRole("button", { name: /Oficios y profesiones/ }));
    fireEvent.click(screen.getByRole("button", { name: "Continuar con Básico II →" }));
    expect(screen.getByRole("heading", { level: 2, name: /Artículos/ })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Básico I", exact: true }));
    expect(screen.getByRole("heading", { level: 2, name: /Oficios y profesiones/ })).toBeInTheDocument();
  });

  it("abre el Quiz con el tema actual y permite volver a su explicación", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "Básico IV", exact: true }));
    fireEvent.click(screen.getByRole("button", { name: "Practicar este tema en el Quiz" }));
    expect(screen.getByLabelText("Módulo")).toHaveValue("basico4");
    expect(screen.getByLabelText("Sección")).toHaveValue("bodyParts");
    fireEvent.click(screen.getByRole("button", { name: /Empezar Quiz/ }));
    fireEvent.change(screen.getByLabelText("Tu respuesta"), { target: { value: "repasar" } });
    fireEvent.click(screen.getByRole("button", { name: /Verificar respuesta/ }));
    fireEvent.click(screen.getByRole("button", { name: /Repasar la explicación/ }));
    expect(screen.getByRole("heading", { level: 2, name: /Partes del cuerpo/ })).toBeInTheDocument();
  });

  it("abre ampliaciones plegadas al buscar y omite la ruta duplicada", () => {
    vi.useFakeTimers();
    render(<main><details className="module-guide"><summary>Ruta</summary>gone</details><details><summary>Ampliación</summary><p>gone</p></details></main>);
    scrollToAndHighlight("gone", { delay: 0 });
    act(() => vi.advanceTimersByTime(1));
    const mark = document.querySelector("mark.search-highlight");
    expect(mark.closest("details")).toHaveAttribute("open");
    expect(document.querySelector(".module-guide")).not.toHaveAttribute("open");
    act(() => vi.advanceTimersByTime(3200));
    expect(document.querySelector("mark")).toBeNull();
  });
});
