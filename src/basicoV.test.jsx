import { fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import App from "./App";
import { LEVELS } from "./constants/levels";
import { TOPICS_BASICO5 } from "./constants/topics";
import { MODULE_QUESTIONS } from "./features/quiz/moduleQuestions";
import { PRACTICE as SIMPLE_PAST } from "./features/simplePast/data";
import { PRACTICE as GOING_TO } from "./features/goingTo/data";
import { PRACTICE as SOCIAL_COLLOCATIONS } from "./features/socialCollocations/data";
import { getAvailableTopics } from "./constants/topicAvailability";

const BASICO5_TOPICS = ["simplePast", "goingTo", "socialCollocations", "moduleVExam"];

function openTopic(label) {
  const navigation = within(screen.getByRole("navigation", { name: "Temas del módulo" }));
  fireEvent.click(navigation.getByRole("button", { name: label, exact: true }));
}

function openBasicoV() {
  fireEvent.click(screen.getByRole("button", { name: "Básico V", exact: true }));
}

beforeEach(() => localStorage.clear());
afterEach(() => vi.useRealTimers());

describe("Básico V — datos del módulo", () => {
  it("ubica Básico V después de Básico IV y antes del Quiz, con sus tres secciones en orden", () => {
    const ids = LEVELS.map(level => level.id);
    expect(ids.indexOf("basico5")).toBe(ids.indexOf("basico4") + 1);
    expect(ids.at(-1)).toBe("quiz");
    expect(TOPICS_BASICO5.map(topic => topic.id)).toEqual(BASICO5_TOPICS);
    expect(LEVELS.find(level => level.id === "basico4").bridge).toMatch(/Básico V/);
  });

  it.each([
    ["simplePast", SIMPLE_PAST],
    ["goingTo", GOING_TO],
    ["socialCollocations", SOCIAL_COLLOCATIONS],
  ])("las preguntas de práctica de %s están completas y llegan al Quiz", (topic, practice) => {
    expect(practice.length).toBeGreaterThanOrEqual(8);
    for (const row of practice) {
      expect(row.question).toBeTruthy();
      expect(row.answers.length).toBeGreaterThan(0);
      expect(row.explanation).toBeTruthy();
      if (row.options) for (const answer of row.answers) expect(row.options).toContain(answer);
    }
    expect(MODULE_QUESTIONS.filter(question => question.topic === topic)).toHaveLength(practice.length);
  });
});

describe("Básico V — contenido visible", () => {
  it("abre el módulo en Pasado simple y muestra las tres secciones en la barra", () => {
    render(<App />);
    openBasicoV();
    expect(screen.getByRole("heading", { level: 1, name: "🎓 English — Básico V" })).toBeInTheDocument();
    const navigation = within(screen.getByRole("navigation", { name: "Temas del módulo" }));
    expect(navigation.getAllByRole("button").map(button => button.textContent))
      .toEqual(getAvailableTopics(TOPICS_BASICO5).map(topic => topic.label));
    expect(screen.getByRole("heading", { level: 2, name: "⏪ Pasado simple — Simple Past" })).toBeInTheDocument();
  });

  it("Pasado simple explica did + verbo base, las tres pronunciaciones de -ed y corrige el pizarrón", () => {
    render(<App />);
    openBasicoV();
    const main = screen.getByRole("main");
    expect(main).toHaveTextContent("He didn't go");
    for (const sound of ["/t/", "/d/", "/ɪd/"]) expect(within(main).getAllByText(sound).length).toBeGreaterThan(0);
    for (const verb of ["helped", "called", "visited", "needed"]) expect(main).toHaveTextContent(verb);
    expect(main).toHaveTextContent("What did Octa do last week?");
    expect(main).not.toHaveTextContent(/the last week/i);
  });

  it("Pasado simple usa nombres del grupo con su pronombre en las preguntas con did", () => {
    render(<App />);
    openBasicoV();
    const main = screen.getByRole("main");
    expect(main).toHaveTextContent("Did Leslie drink mezcal?");
    expect(main).toHaveTextContent("Did Leslie do yoga yesterday?");
    expect(main).toHaveTextContent("Didn't Eduardo eat a sandwich?");
    expect(main).not.toHaveTextContent(/\b(Karen|Miguel)\b/);
  });

  it("Pasado simple incluye la práctica guiada con sus respuestas, sin referencias al libro", () => {
    render(<App />);
    openBasicoV();
    const main = screen.getByRole("main");
    expect(screen.getByRole("heading", { level: 3, name: "📘 Práctica guiada" })).toBeInTheDocument();
    expect(main).toHaveTextContent("Look at this picture of my parents");
    for (const answer of ["came", "met", "bought", "didn't wake up late", "didn't buy a new house"]) {
      expect(main).toHaveTextContent(answer);
    }
    expect(main).toHaveTextContent("Completa la conversación entre Israel y Eduardo con el pasado simple.");
    expect(main).toHaveTextContent("Israel: Did your family come to visit you last weekend?");
    expect(main).toHaveTextContent("Eduardo: Yes, they did. I showed them around the city.");
    expect(main).not.toHaveTextContent(/del libro|Grammar Reference|Unit \d+|\bp\. \d+/);
    expect(main).not.toHaveTextContent(/Diego|José/);
  });

  it("Going to separa going to de go, explica gonna e incluye la práctica guiada sin referencias al libro", () => {
    render(<App />);
    openBasicoV();
    openTopic("🗓️ Futuro con going to");
    const main = screen.getByRole("main");
    expect(screen.getByText("Going to go: la repetición es correcta")).toBeInTheDocument();
    expect(main).toHaveTextContent("Gonna");
    expect(main).toHaveTextContent("I am going to go to Acapulco in December.");
    expect(main).not.toHaveTextContent(/on December/);
    for (const answer of ["are you going to do", "'s going to rain", "isn't going to work", "aren't going to have"]) {
      expect(main).toHaveTextContent(answer);
    }
    expect(screen.getByRole("heading", { level: 3, name: "📘 Práctica guiada" })).toBeInTheDocument();
    expect(main).toHaveTextContent("Leslie isn't going to work on the project with me.");
    expect(main).toHaveTextContent("Are you and Argelia going to get married?");
    expect(main).not.toHaveTextContent(/del libro|Unit \d+|\bp\. \d+/);
    expect(main).not.toHaveTextContent(/\b(Gina|Rex)\b/);
  });

  it("Vida social y colocaciones agrupa get, have y make y clasifica la experiencia", () => {
    render(<App />);
    openBasicoV();
    openTopic("🎉 Vida social y colocaciones");
    const main = screen.getByRole("main");
    for (const phrase of ["Go out dancing", "Go on a date", "Hang out with friends", "Eat out at a restaurant"]) {
      expect(main).toHaveTextContent(new RegExp(phrase, "i"));
    }
    for (const verb of ["get", "have", "make"]) expect(screen.getByText(`Colocaciones con ${verb}`)).toBeInTheDocument();
    expect(main).toHaveTextContent(/make a decision.*positiva o negativa/i);
    expect(main).not.toHaveTextContent(/conjúg/);
  });

  it("Vida social y colocaciones muestra la conversación de ejemplo con nombres del grupo", () => {
    render(<App />);
    openBasicoV();
    openTopic("🎉 Vida social y colocaciones");
    const main = screen.getByRole("main");
    expect(screen.getByRole("heading", { level: 3, name: "💬 Conversación de ejemplo" })).toBeInTheDocument();
    expect(main).toHaveTextContent("But at first Octavio and I went to the wrong place!");
    expect(main).toHaveTextContent("¡Pero al principio Octavio y yo fuimos al lugar equivocado!");
    expect(main).toHaveTextContent("I thought Octavio knew the location.");
    expect(main).not.toHaveTextContent(/del libro|\bZac\b/);
  });
});

describe("Básico V — navegación, búsqueda y Quiz", () => {
  it("enlaza Pasado simple con los verbos irregulares de Básico II", () => {
    render(<App />);
    openBasicoV();
    fireEvent.click(screen.getByRole("button", { name: /Repasar la lista de verbos irregulares/ }));
    expect(screen.getByRole("heading", { level: 1, name: "🎓 English — Básico II" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: /Verbos irregulares/ })).toBeInTheDocument();
  });

  it("continúa de Básico IV a Básico V desde el último tema disponible", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-10-22T12:00:00-06:00"));
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "Básico IV", exact: true }));
    openTopic("🎶 Adverbios de modo");
    fireEvent.click(screen.getByRole("button", { name: "Continuar con Básico V →" }));
    expect(screen.getByRole("heading", { level: 2, name: "⏪ Pasado simple — Simple Past" })).toBeInTheDocument();
  });

  it.each([
    ["get lost", "🎉 Vida social y colocaciones"],
    ["gonna", "🗓️ Futuro con going to"],
    ["didn't", "⏪ Pasado simple"],
  ])("el buscador lleva de '%s' a su sección", async (term, label) => {
    const user = userEvent.setup();
    render(<App />);
    await user.type(screen.getByPlaceholderText("Buscar tema o palabra..."), term);
    await user.click(await screen.findByRole("option", { name: new RegExp(label) }));
    expect(screen.getByRole("heading", { level: 2, name: new RegExp(label) })).toBeInTheDocument();
  });

  it("practica un tema de Básico V en el Quiz y vuelve a su explicación", () => {
    render(<App />);
    openBasicoV();
    openTopic("🗓️ Futuro con going to");
    fireEvent.click(screen.getByRole("button", { name: "Practicar este tema en el Quiz" }));
    expect(screen.getByLabelText("Módulo")).toHaveValue("basico5");
    expect(screen.getByLabelText("Sección")).toHaveValue("goingTo");
    fireEvent.click(screen.getByRole("button", { name: /Empezar Quiz/ }));
    fireEvent.change(screen.getByLabelText("Tu respuesta"), { target: { value: "repasar" } });
    fireEvent.click(screen.getByRole("button", { name: /Verificar respuesta/ }));
    fireEvent.click(screen.getByRole("button", { name: /Repasar la explicación/ }));
    expect(screen.getByRole("heading", { level: 2, name: /Futuro con going to/ })).toBeInTheDocument();
  });
});
