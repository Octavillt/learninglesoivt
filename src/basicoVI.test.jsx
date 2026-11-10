import { fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import App from "./App";
import { LEVELS } from "./constants/levels";
import { TOPICS_BASICO5, TOPICS_BASICO6 } from "./constants/topics";
import { LEARNING_GUIDE } from "./constants/learningGuide";
import { TOPIC_FORMULAS } from "./constants/topicFormulas";
import { getAvailableTopics } from "./constants/topicAvailability";
import { MODULE_QUESTIONS } from "./features/quiz/moduleQuestions";
import { QUIZ_LEVELS, checkAnswer, getByTopic } from "./features/quiz/questions";
import { PRACTICE, SUBJECTS, PP_AFF, PP_NEG, PP_INT, PP_WH, GUIDED_WAS_WERE, GUIDED_TRANSFORM, GUIDED_SCHEDULE, MISTAKES } from "./features/pastProgressive/data";

const LABEL = "⏳ Pasado progresivo";
const HEADING = "⏳ Pasado progresivo — Past Progressive / Continuous";
const sentence = pts => pts.map(part => typeof part === "string" ? part : part.t).join("");
const partsOf = row => row.pts ?? row.q;

function openBasicoVI() {
  fireEvent.click(screen.getByRole("button", { name: "Básico VI", exact: true }));
}

beforeEach(() => localStorage.clear());
afterEach(() => vi.useRealTimers());

describe("Básico VI — datos del módulo", () => {
  it("ubica Básico VI después de Básico V y antes de Verbos y el Quiz, con Pasado progresivo como sección", () => {
    const ids = LEVELS.map(level => level.id);
    expect(ids.indexOf("basico6")).toBe(ids.indexOf("basico5") + 1);
    expect(ids.indexOf("verbos")).toBe(ids.indexOf("basico6") + 1);
    expect(ids.at(-1)).toBe("quiz");
    expect(TOPICS_BASICO6.map(topic => topic.id)).toEqual(["pastProgressive"]);
    expect(TOPICS_BASICO6[0].availableUntil).toBeUndefined();
    const level = LEVELS.find(item => item.id === "basico6");
    expect(level).toMatchObject({ label: "Básico VI", available: true });
    expect(level.purpose && level.description && level.outcome).toBeTruthy();
    expect(level.bridge).toMatch(/seis módulos/);
    expect(LEVELS.find(item => item.id === "basico5").bridge).toMatch(/Básico VI/);
  });

  it("usa was con I/he/she/it y were con you/we/they, siempre con el verbo en -ing", () => {
    expect(SUBJECTS.map(group => [group.aux, group.negative])).toEqual([["was", "wasn't"], ["were", "weren't"]]);
    const auxFor = Object.fromEntries(SUBJECTS.flatMap(group => group.subjects.map(subject => [subject.toLowerCase(), group.aux])));
    for (const row of [...PP_AFF, ...PP_NEG, ...PP_INT, ...PP_WH]) {
      const parts = partsOf(row);
      const subject = parts.find(part => part.r === "subject").t.toLowerCase();
      const be = parts.find(part => part.r === "verb_be").t.toLowerCase();
      // Un nombre propio (Octa) es una sola persona: he → was.
      expect(be, sentence(parts)).toBe(auxFor[subject] ?? "was");
      const ing = parts.findIndex(part => part.r === "ing");
      expect(parts[ing - 1].r, sentence(parts)).toBe("verb");
      expect(row.esp).toBeTruthy();
    }
    for (const row of PP_NEG) expect(sentence(row.pts)).toMatch(/\b(was not|wasn't|weren't)\b/);
  });

  it("conserva las oraciones del pizarrón en cada estructura", () => {
    const board = rows => rows.filter(row => row.board).map(row => sentence(partsOf(row)));
    expect(board(PP_AFF)).toEqual(["I was watching TV.", "Octa was doing the chores.", "You were going shopping."]);
    expect(board(PP_NEG)).toEqual(["I was not watching TV.", "Octa wasn't doing the chores.", "You weren't going shopping."]);
    expect(board(PP_INT)).toEqual(["Was I watching TV?", "Were you going shopping?"]);
    expect(board(PP_WH)).toEqual(["What were you doing yesterday?"]);
    expect(PP_INT.find(row => row.board).a).toBe("Yes, I was. / No, I wasn't.");
  });

  it("la práctica guiada y los errores frecuentes traen respuestas coherentes", () => {
    for (const [prompt, answer] of GUIDED_WAS_WERE.rows) {
      expect([prompt.replace("___", "was"), prompt.replace("___", "were")]).toContain(answer);
    }
    for (const [, negative, question] of GUIDED_TRANSFORM.rows) {
      expect(negative).toMatch(/\b(wasn't|weren't)\b/);
      expect(question).toMatch(/^(Was|Were) .+\?$/);
    }
    for (const [time, activity, answer] of GUIDED_SCHEDULE.rows) {
      expect(time && activity).toBeTruthy();
      expect(answer).toMatch(/^She was \w+ing\b/);
    }
    for (const [wrong, right, why] of MISTAKES) {
      expect(wrong).not.toBe(right);
      expect(why).toBeTruthy();
    }
  });

  it("las preguntas de práctica están completas y llegan al Quiz de Básico VI", () => {
    expect(PRACTICE.length).toBeGreaterThanOrEqual(12);
    for (const row of PRACTICE) {
      expect(row.question && row.explanation).toBeTruthy();
      expect(row.answers.length).toBeGreaterThan(0);
    }
    expect(MODULE_QUESTIONS.filter(question => question.topic === "pastProgressive")).toHaveLength(PRACTICE.length);
    expect(QUIZ_LEVELS.map(level => level.id)).toContain("basico6");
    expect(getByTopic("pastProgressive", "basico6")).toHaveLength(PRACTICE.length);
    expect(getByTopic("mixed", "basico6").every(question => question.topic === "pastProgressive")).toBe(true);
  });

  it("acepta contracciones y formas completas, y rechaza los errores del tema", () => {
    const find = text => PRACTICE.find(row => row.question.includes(text));
    expect(checkAnswer("Octa was not doing the chores", find("negativa: Octa was doing").answers)).toBe(true);
    expect(checkAnswer("you weren't going shopping", find("negativa: You were going").answers)).toBe(true);
    expect(checkAnswer("No, he was not.", find("Was Octa doing the chores?").answers)).toBe(true);
    expect(checkAnswer("yes i was", find("Were you going shopping?").answers)).toBe(true);
    expect(checkAnswer("They was playing soccer.", find("Corrige: They was").answers)).toBe(false);
    expect(checkAnswer("What you were doing yesterday?", find("Ordena:").answers)).toBe(false);
  });
});

describe("Básico VI — contenido visible", () => {
  it("habilita Básico VI y abre Pasado progresivo como única sección del módulo", () => {
    render(<App />);
    expect(screen.getByRole("button", { name: "Básico VI", exact: true })).toBeEnabled();
    openBasicoVI();
    expect(screen.getByRole("heading", { level: 1, name: "🎓 English — Básico VI" })).toBeInTheDocument();
    const navigation = within(screen.getByRole("navigation", { name: "Temas del módulo" }));
    expect(navigation.getAllByRole("button").map(button => button.textContent)).toEqual([LABEL]);
    expect(screen.getByRole("heading", { level: 2, name: HEADING })).toBeInTheDocument();
  });

  it("explica was/were y las cuatro estructuras del pizarrón con sus fórmulas", () => {
    render(<App />);
    openBasicoVI();
    const main = screen.getByRole("main");
    for (const title of ["✅ Afirmación", "❌ Negación", "❓ Preguntas de sí o no", "🔎 Preguntas con palabras WH", "✍️ Escritura de -ing", "⏰ Expresiones de tiempo", "⚖️ Pasado simple o pasado progresivo", "⚠️ Errores frecuentes", "📘 Práctica guiada"]) {
      expect(screen.getByRole("heading", { level: 3, name: title })).toBeInTheDocument();
    }
    expect(main).toHaveTextContent("started in the past and continued for some time");
    for (const text of ["I was watching TV.", "Octa wasn't doing the chores.", "You weren't going shopping.", "Were you going shopping?", "What were you doing yesterday?", "Yes, I was. / No, I wasn't."]) {
      expect(main).toHaveTextContent(text);
    }
    const formulas = within(screen.getByRole("region", { name: "Fórmulas y patrones del tema" }));
    for (const row of TOPIC_FORMULAS.pastProgressive.rows) expect(formulas.getByText(row.pattern, { exact: true })).toBeInTheDocument();
    expect(screen.getByRole("region", { name: "Comprueba lo aprendido" })).toHaveTextContent(LEARNING_GUIDE.pastProgressive.task);
  });

  it("separa los ejemplos del pizarrón de los adicionales y reutiliza las reglas de -ing", () => {
    render(<App />);
    openBasicoVI();
    expect(screen.getAllByText("📋 Del pizarrón")).toHaveLength(4);
    expect(screen.getAllByText("➕ Más ejemplos")).toHaveLength(4);
    const main = screen.getByRole("main");
    for (const rule of ["play → playing", "come → coming", "run → running", "lie → lying"]) expect(main).toHaveTextContent(rule);
    expect(main).toHaveTextContent("I was watching TV when you called.");
  });

  it("incluye la práctica guiada con sus respuestas y no cita el libro", () => {
    render(<App />);
    openBasicoVI();
    const main = screen.getByRole("main");
    expect(screen.getAllByText("Ver las respuestas")).toHaveLength(3);
    expect(main).toHaveTextContent("What was Leslie doing at 1 p.m.? → She was having lunch with her friends.");
    expect(main).toHaveTextContent("They weren't playing soccer. / Were they playing soccer?");
    expect(main).not.toHaveTextContent(/\b(unit|lesson|page|página) \d/i);
  });
});

describe("Básico VI — navegación, búsqueda y Quiz", () => {
  it("continúa de Básico V a Básico VI desde el último tema disponible", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-11-09T12:00:00-06:00"));
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "Básico V", exact: true }));
    const last = getAvailableTopics(TOPICS_BASICO5).at(-1);
    const navigation = within(screen.getByRole("navigation", { name: "Temas del módulo" }));
    fireEvent.click(navigation.getByRole("button", { name: last.label, exact: true }));
    fireEvent.click(screen.getByRole("button", { name: "Continuar con Básico VI →" }));
    expect(screen.getByRole("heading", { level: 2, name: HEADING })).toBeInTheDocument();
  });

  it("cierra Básico VI con el puente del módulo y el repaso de todos los módulos", () => {
    render(<App />);
    openBasicoVI();
    expect(screen.getByRole("main")).toHaveTextContent(LEVELS.find(level => level.id === "basico6").outcome);
    expect(screen.getByRole("button", { name: "Repasar todos los módulos →" })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /Continuar con/ })).not.toBeInTheDocument();
  });

  it("enlaza con el presente progresivo de Básico I", () => {
    render(<App />);
    openBasicoVI();
    fireEvent.click(screen.getByRole("button", { name: /Repasar el presente progresivo/ }));
    expect(screen.getByRole("heading", { level: 1, name: "🎓 English — Básico I" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: /Presente progresivo/ })).toBeInTheDocument();
  });

  it("enlaza con el pasado simple de Básico V", () => {
    render(<App />);
    openBasicoVI();
    fireEvent.click(screen.getByRole("button", { name: /Repasar el pasado simple/ }));
    expect(screen.getByRole("heading", { level: 1, name: "🎓 English — Básico V" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: /Pasado simple/ })).toBeInTheDocument();
  });

  it.each(["past continuous", "pasado progresivo", "was watching", "qué estabas haciendo"])("el buscador lleva de '%s' a Pasado progresivo", async term => {
    const user = userEvent.setup();
    render(<App />);
    await user.type(screen.getByPlaceholderText("Buscar tema o palabra..."), term);
    await user.click(await screen.findByRole("option", { name: new RegExp(LABEL) }));
    expect(screen.getByRole("heading", { level: 1, name: "🎓 English — Básico VI" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: HEADING })).toBeInTheDocument();
  });

  it("practica Pasado progresivo en el Quiz y vuelve a su explicación", () => {
    render(<App />);
    openBasicoVI();
    fireEvent.click(screen.getByRole("button", { name: "Practicar este tema en el Quiz" }));
    expect(screen.getByLabelText("Módulo")).toHaveValue("basico6");
    expect(screen.getByLabelText("Sección")).toHaveValue("pastProgressive");
    fireEvent.click(screen.getByRole("button", { name: /Empezar Quiz/ }));
    fireEvent.change(screen.getByLabelText("Tu respuesta"), { target: { value: "repasar" } });
    fireEvent.click(screen.getByRole("button", { name: /Verificar respuesta/ }));
    fireEvent.click(screen.getByRole("button", { name: /Repasar la explicación/ }));
    expect(screen.getByRole("heading", { level: 2, name: HEADING })).toBeInTheDocument();
  });
});
