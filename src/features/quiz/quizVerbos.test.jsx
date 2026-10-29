import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, fireEvent, within } from "@testing-library/react";
import App from "../../App";
import { TOPIC_BY_ID } from "../../constants/topics";
import { VERB_BANK } from "../verbFinder/data";
import { QUESTIONS, QUIZ_LEVELS, checkAnswer, getByTopic, questionKey } from "./questions";
import QuizSection from "./QuizSection";

afterEach(() => vi.restoreAllMocks());

const VERB_TOPICS = ["verbPast", "verbParticiple", "verbMeaning"];
const TOTAL = VERB_BANK.length;

function verbQuestion(topic, base) {
  return QUESTIONS.find(q => q.topic === topic && q.verb === base);
}

describe("Quiz — módulo Verbos", () => {
  it("suma el módulo Verbos después de Básico V con una sección por tipo de pregunta", () => {
    const ids = QUIZ_LEVELS.map(level => level.id);
    expect(ids.indexOf("verbos")).toBe(ids.indexOf("basico5") + 1);
    expect(ids).not.toContain("quiz");
    const verbos = QUIZ_LEVELS.find(level => level.id === "verbos");
    expect(verbos.quizTopics.map(topic => topic.id)).toEqual(VERB_TOPICS);
    expect(verbos.quizTopics.every(topic => topic.lesson === "verbFinder")).toBe(true);
    // Son secciones del Quiz, no lecciones: no entran a la navegación de temas.
    expect(verbos.topics.map(topic => topic.id)).toEqual(["verbFinder"]);
    for (const id of VERB_TOPICS) expect(TOPIC_BY_ID[id]).toBeUndefined();
  });

  it("genera una pregunta de cada tipo por verbo del banco, sin repetir dentro de la mezcla", () => {
    for (const topic of VERB_TOPICS) {
      const pool = getByTopic(topic, "verbos", 0);
      expect(pool).toHaveLength(TOTAL);
      expect(pool.map(q => q.verb)).toEqual(VERB_BANK.map(verb => verb.base));
    }
    const mixed = getByTopic("mixed", "verbos", 0);
    expect(mixed).toHaveLength(TOTAL * 3);
    expect(new Set(mixed.map(questionKey)).size).toBe(mixed.length);
    for (const q of mixed) expect(new Set(q.answers).size).toBe(q.answers.length);
  });

  it("deja la mezcla general solo con Básico I a V, pero permite elegir una sección de verbos desde Todos los módulos", () => {
    const general = getByTopic("mixed", "all", 0);
    expect(general.length).toBeGreaterThan(0);
    expect(general.some(q => VERB_TOPICS.includes(q.topic))).toBe(false);
    expect(general.some(q => q.topic === "irregularVerbs")).toBe(true);
    expect(getByTopic("verbMeaning", "all", 0)).toHaveLength(TOTAL);
    expect(getByTopic("verbPast", "basico2", 0)).toHaveLength(0);
    expect(getByTopic("irregularVerbs", "verbos", 0)).toHaveLength(0);
  });

  it("acepta cualquiera de las formas del pasado y del participio", () => {
    const be = verbQuestion("verbPast", "be");
    expect(be.question).toBe("Escribe el pasado simple de be.");
    for (const answer of ["was", "were", "was / were", "WAS/WERE"]) expect(checkAnswer(answer, be.answers)).toBe(true);
    expect(checkAnswer("been", be.answers)).toBe(false);
    const burn = verbQuestion("verbPast", "burn");
    expect(checkAnswer("burned", burn.answers) && checkAnswer("burnt", burn.answers)).toBe(true);
    const get = verbQuestion("verbParticiple", "get");
    expect(get.question).toBe("Escribe el participio pasado de get.");
    expect(checkAnswer("gotten", get.answers) && checkAnswer("got", get.answers)).toBe(true);
    expect(checkAnswer("got up", verbQuestion("verbPast", "get up").answers)).toBe(true);
    expect(checkAnswer("seen", verbQuestion("verbParticiple", "see").answers)).toBe(true);
    expect(checkAnswer("saw", verbQuestion("verbParticiple", "see").answers)).toBe(false);
  });

  it("acepta un solo significado, sin acentos ni la aclaración entre paréntesis", () => {
    const ride = verbQuestion("verbMeaning", "ride");
    expect(ride.question).toBe("¿Qué significa ride?");
    expect(ride.answers[0]).toBe("montar, andar en (bici, caballo)");
    for (const answer of ["montar", "andar en", "andar en (bici, caballo)", "montar, andar en (bici, caballo)"]) {
      expect(checkAnswer(answer, ride.answers)).toBe(true);
    }
    expect(checkAnswer("caballo", ride.answers)).toBe(false);
    expect(checkAnswer("esperar", verbQuestion("verbMeaning", "hope").answers)).toBe(true);
    expect(checkAnswer("reir", verbQuestion("verbMeaning", "laugh").answers)).toBe(true);
    expect(checkAnswer("responder", verbQuestion("verbMeaning", "answer").answers)).toBe(true);
    expect(verbQuestion("verbMeaning", "answer").hint).toBe("Basta con escribir uno de sus significados.");
    expect(verbQuestion("verbMeaning", "avoid").hint).toBeUndefined();
  });

  it("explica cada respuesta con el significado y la nota del verbo", () => {
    const go = verbQuestion("verbPast", "go");
    expect(go.hint).toBe("Significa «ir».");
    expect(go.explanation).toBe("go → went = fue. En presente, con he/she/it: goes.");
    expect(verbQuestion("verbParticiple", "eat").explanation).toBe("eat → ate → eaten.");
    expect(verbQuestion("verbParticiple", "ask").explanation).toBe("ask → asked → asked. En los regulares, el participio es igual al pasado.");
    expect(verbQuestion("verbMeaning", "earn").explanation).toMatch(/^earn = ganar \(dinero\)\. Earn es ganar dinero/);
    for (const q of QUESTIONS.filter(item => VERB_TOPICS.includes(item.topic))) {
      expect(q.explanation.trim()).not.toBe("");
      expect(VERB_BANK.some(verb => verb.base === q.verb)).toBe(true);
    }
  });

  it("muestra el módulo y sus secciones en los selectores del Quiz", () => {
    render(<QuizSection />);
    const levelSelect = screen.getByLabelText("Módulo", { exact: true });
    expect(within(levelSelect).getByRole("option", { name: "Todos los módulos (Básico I a V)" })).toHaveValue("all");
    expect(within(levelSelect).getByRole("option", { name: "📒 Verbos" })).toHaveValue("verbos");
    expect(screen.getByText(/Básico I a V y los verbos de Verbos a la mano/)).toBeInTheDocument();
    fireEvent.change(levelSelect, { target: { value: "verbos" } });
    const sections = within(screen.getByLabelText("Sección", { exact: true })).getAllByRole("option").map(option => option.textContent);
    expect(sections).toEqual(["🎲 Todos los temas de este módulo", "2️⃣ Pasado simple", "3️⃣ Participio pasado", "💬 Significado"]);
    expect(screen.getByText(new RegExp(`^${TOTAL * 3} preguntas disponibles`))).toBeInTheDocument();
  });

  it("practica una sección de verbos y abre el verbo en Verbos a la mano", () => {
    vi.spyOn(Math, "random").mockReturnValue(0);
    const first = VERB_BANK[0];
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "🎯 Quiz" }));
    fireEvent.change(screen.getByLabelText("Módulo", { exact: true }), { target: { value: "verbos" } });
    fireEvent.change(screen.getByLabelText("Sección", { exact: true }), { target: { value: "verbPast" } });
    expect(screen.getByText(new RegExp(`^${TOTAL} preguntas disponibles`))).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /Empezar Quiz/ }));
    expect(screen.getByText(`Escribe el pasado simple de ${first.base}.`)).toBeInTheDocument();
    expect(screen.getByText("📒 Verbos · 2️⃣ Pasado simple")).toBeInTheDocument();
    fireEvent.change(screen.getByLabelText("Tu respuesta"), { target: { value: first.past[0] } });
    fireEvent.click(screen.getByRole("button", { name: /Verificar respuesta/ }));
    expect(screen.getByText(/Muy bien/)).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /Repasar la explicación/ })).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: new RegExp(`Ver «${first.base}» en Verbos a la mano`) }));
    expect(screen.getByRole("heading", { level: 2, name: /Verbos a la mano/ })).toBeInTheDocument();
    expect(screen.getByRole("searchbox", { name: "Buscar verbo" })).toHaveValue(first.base);
    expect(screen.getByRole("article", { name: first.base })).toBeInTheDocument();
  });

  it("conserva el enlace a la lección en las preguntas de los módulos de estudio", () => {
    vi.spyOn(Math, "random").mockReturnValue(0);
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "🎯 Quiz" }));
    fireEvent.change(screen.getByLabelText("Módulo", { exact: true }), { target: { value: "basico2" } });
    fireEvent.change(screen.getByLabelText("Sección", { exact: true }), { target: { value: "irregularVerbs" } });
    fireEvent.click(screen.getByRole("button", { name: /Empezar Quiz/ }));
    fireEvent.change(screen.getByLabelText("Tu respuesta"), { target: { value: "no sé" } });
    fireEvent.click(screen.getByRole("button", { name: /Verificar respuesta/ }));
    expect(screen.queryByRole("button", { name: /en Verbos a la mano/ })).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /Repasar la explicación/ }));
    expect(screen.getByRole("heading", { level: 2, name: /Verbos irregulares/ })).toBeInTheDocument();
  });
});
