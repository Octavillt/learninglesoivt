import { fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import App from "./App";
import { LEVELS } from "./constants/levels";
import { TOPICS_BASICO5 } from "./constants/topics";
import { MODULE_QUESTIONS } from "./features/quiz/moduleQuestions";
import { checkAnswer } from "./features/quiz/questions";
import { PRACTICE as SIMPLE_PAST } from "./features/simplePast/data";
import { PRACTICE as GOING_TO } from "./features/goingTo/data";
import { PRACTICE as SOCIAL_COLLOCATIONS } from "./features/socialCollocations/data";
import { PRACTICE as MONEY_CAREER } from "./features/moneyCareer/data";
import { PRACTICE as COMPARATIVES, ADJECTIVE_BANK, IRREGULARS, SHORT_EXAMPLES, LONG_EXAMPLES } from "./features/comparatives/data";
import { VERB_BANK } from "./features/verbFinder/data";
import { getAvailableTopics } from "./constants/topicAvailability";

const BASICO5_TOPICS = ["simplePast", "goingTo", "socialCollocations", "moneyCareer", "comparatives", "moduleVExam"];

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
  it("ubica Básico V después de Básico IV y antes del Quiz, con sus secciones en orden", () => {
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
    ["moneyCareer", MONEY_CAREER],
    ["comparatives", COMPARATIVES],
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

  it("cada comparativo de la tabla sigue la regla con la que está etiquetado", () => {
    const irregulars = Object.fromEntries(IRREGULARS.map(([base, comparative]) => [base, comparative]));
    const expected = {
      general: base => `${base}er`,
      e: base => `${base}r`,
      cvc: base => `${base}${base.at(-1)}er`,
      y: base => `${base.slice(0, -1)}ier`,
      long: base => `more ${base}`,
      irregular: base => irregulars[base],
    };
    expect(new Set(ADJECTIVE_BANK.map(([base]) => base)).size).toBe(ADJECTIVE_BANK.length);
    for (const [base, comparative, esp, rule] of ADJECTIVE_BANK) {
      expect(esp).toBeTruthy();
      expect(comparative).toBe(expected[rule](base));
    }
  });

  it("los ejemplos de comparativos forman oraciones completas con than", () => {
    const sentence = pts => pts.map(part => typeof part === "string" ? part : part.t).join("");
    expect(SHORT_EXAMPLES.map(row => sentence(row.pts))).toEqual(expect.arrayContaining([
      "A rabbit is bigger than a hamster.", "Snails are slower than ants.", "Dogs are better than birds.", "I am happier than you.",
    ]));
    expect(LONG_EXAMPLES.map(row => sentence(row.pts))).toEqual(expect.arrayContaining([
      "Crocodiles are more dangerous than panthers.", "A spider is more poisonous than a snake.",
    ]));
    for (const row of [...SHORT_EXAMPLES, ...LONG_EXAMPLES]) expect(sentence(row.pts)).toMatch(/ than /);
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

  it("Dinero y planes de carrera muestra los opuestos, las colocaciones de carrera y sus preposiciones", () => {
    render(<App />);
    openBasicoV();
    openTopic("💰 Dinero y planes de carrera");
    const main = screen.getByRole("main");
    expect(screen.getByRole("heading", { level: 2, name: /Dinero y planes de carrera/ })).toBeInTheDocument();
    for (const word of ["buy", "sell", "spend", "save", "rich", "poor"]) {
      expect(within(main).getAllByText(word, { exact: true }).length).toBeGreaterThan(0);
    }
    for (const phrase of ["work outdoors", "manage people", "work in an office", "start a business", "work from home", "work overseas"]) {
      expect(main).toHaveTextContent(phrase);
    }
    expect(main).toHaveTextContent("spend money on clothes");
    expect(main).toHaveTextContent(/earn money.*win/);
    expect(main).toHaveTextContent("I'm probably going to manage people.");
    expect(main).toHaveTextContent("Leslie is going to start a business next year.");
    expect(main).not.toHaveTextContent(/Lesson|Unit|libro/);
  });

  it("Comparativos distingue adjetivos cortos y largos, sus reglas de escritura y los irregulares", () => {
    render(<App />);
    openBasicoV();
    openTopic("⚖️ Comparativos");
    const main = screen.getByRole("main");
    expect(screen.getByRole("heading", { level: 2, name: /Comparativos — Comparatives/ })).toBeInTheDocument();
    expect(screen.getByText("Comparativo (-er / more / less / than)")).toBeInTheDocument();
    expect(screen.getByText("¿Corto o largo? Cuenta las sílabas")).toBeInTheDocument();
    for (const title of ["Regla general", "Termina en -e", "Termina en consonante + vocal + consonante (CVC)", "Dos sílabas que terminan en -y"]) {
      expect(screen.getByText(title)).toBeInTheDocument();
    }
    for (const pair of ["fast → faster", "cute → cuter", "big → bigger", "happy → happier", "good → better", "bad → worse", "far → farther / further"]) {
      expect(within(main).getAllByText(pair).length).toBeGreaterThan(0);
    }
    expect(main).toHaveTextContent("Crocodiles are more dangerous than panthers.");
    expect(main).toHaveTextContent("A rabbit is bigger than a hamster.");
    expect(main).toHaveTextContent("Israel is as tall as Eduardo.");
    expect(main).toHaveTextContent("Who is taller, Israel or Leslie?");
    expect(main).toHaveTextContent("Yesterday was hotter than today.");
    expect(main).toHaveTextContent(/more bigger.*bigger/);
    expect(main).not.toHaveTextContent(/Lesson|Unit \d+|del libro/);
  });

  it("la tabla de comparativos filtra en inglés o en español, sin acentos", async () => {
    const user = userEvent.setup();
    render(<App />);
    openBasicoV();
    openTopic("⚖️ Comparativos");
    const search = screen.getByPlaceholderText("🔍 Busca: big, happy, feliz, more...");
    // Los mismos pares aparecen en las reglas de escritura: se revisa solo la tabla.
    const table = within(document.querySelector(".filter-results"));
    expect(table.getByText("fast → faster")).toBeInTheDocument();
    await user.type(search, "facil");
    expect(table.getByText("easy → easier")).toBeInTheDocument();
    expect(table.queryByText("fast → faster")).not.toBeInTheDocument();
    await user.clear(search);
    await user.type(search, "worse");
    expect(table.getByText("bad → worse")).toBeInTheDocument();
    expect(table.queryByText("good → better")).not.toBeInTheDocument();
    await user.clear(search);
    await user.type(search, "zzz");
    expect(table.getByText("Sin resultados.")).toBeInTheDocument();
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
    ["ahorrar", "💰 Dinero y planes de carrera"],
    ["work from home", "💰 Dinero y planes de carrera"],
    ["happier", "⚖️ Comparativos"],
    ["mejor que", "⚖️ Comparativos"],
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

  it("Dinero y planes de carrera enlaza los opuestos con Adjetivos y los verbos nuevos llegan a Verbos a la mano", () => {
    render(<App />);
    openBasicoV();
    openTopic("💰 Dinero y planes de carrera");
    fireEvent.click(screen.getByRole("button", { name: /Repasar adjetivos y opuestos/ }));
    expect(screen.getByRole("heading", { level: 1, name: "🎓 English — Básico II" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: /Adjetivos y opuestos/ })).toBeInTheDocument();
    const bases = VERB_BANK.map(verb => verb.base);
    for (const verb of ["borrow", "buy", "earn", "manage", "save", "sell", "spend", "waste"]) expect(bases).toContain(verb);
  });

  it("Comparativos enlaza con Adjetivos de Básico II y con was/were de Pasado simple", () => {
    render(<App />);
    openBasicoV();
    openTopic("⚖️ Comparativos");
    fireEvent.click(screen.getByRole("button", { name: /Repasar was y were en Pasado simple/ }));
    expect(screen.getByRole("heading", { level: 2, name: "⏪ Pasado simple — Simple Past" })).toBeInTheDocument();
    openTopic("⚖️ Comparativos");
    fireEvent.click(screen.getByRole("button", { name: /Repasar adjetivos y opuestos/ }));
    expect(screen.getByRole("heading", { level: 1, name: "🎓 English — Básico II" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: /Adjetivos y opuestos/ })).toBeInTheDocument();
  });

  it("acepta en el Quiz las respuestas de Comparativos con o sin contracción", () => {
    const happier = COMPARATIVES.find(row => row.question === "Traduce: Yo estoy más feliz que tú.");
    expect(checkAnswer("I'm happier than you", happier.answers)).toBe(true);
    expect(checkAnswer("i am happier than you.", happier.answers)).toBe(true);
    expect(checkAnswer("I am more happy than you", happier.answers)).toBe(false);
    const far = COMPARATIVES.find(row => row.question === "Escribe un comparativo de far.");
    for (const answer of ["farther", "further"]) expect(checkAnswer(answer, far.answers)).toBe(true);
  });
});
