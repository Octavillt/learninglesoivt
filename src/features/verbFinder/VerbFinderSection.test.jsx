import { act, fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import App from "../../App";
import { LEVELS } from "../../constants/levels";
import { scrollToAndHighlight } from "../../constants/highlightMatch";
import { VERB_BANK } from "./data";

const TOTAL = VERB_BANK.length;
const IRREGULAR = VERB_BANK.filter(verb => verb.kind === "irregular").length;
const REGULAR = VERB_BANK.filter(verb => verb.kind === "regular").length;

function openVerbFinder() {
  fireEvent.click(screen.getByRole("button", { name: "📒 Verbos", exact: true }));
}

function moduleSearch() {
  return screen.getByRole("searchbox", { name: "Buscar verbo" });
}

function card(base) {
  return screen.getByRole("article", { name: base });
}

function cardBases() {
  return screen.queryAllByRole("article").map(item => item.getAttribute("aria-label"));
}

function chip(name) {
  return screen.getByRole("button", { name });
}

beforeEach(() => localStorage.clear());
afterEach(() => {
  vi.useRealTimers();
  delete window.speechSynthesis;
  delete window.SpeechSynthesisUtterance;
});

describe("Verbos a la mano — lugar en la plataforma", () => {
  it("aparece como módulo independiente entre Básico V y el Quiz", () => {
    const ids = LEVELS.map(level => level.id);
    expect(ids.indexOf("verbos")).toBe(ids.indexOf("basico5") + 1);
    expect(ids.at(-1)).toBe("quiz");
    render(<App />);
    expect(screen.getByRole("button", { name: "📒 Verbos", exact: true })).toBeEnabled();
  });

  it("abre como herramienta de consulta, sin ruta de módulo ni autoevaluación", () => {
    render(<App />);
    openVerbFinder();
    expect(screen.getByRole("heading", { level: 1, name: "🎓 English — 📒 Verbos" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "📒 Verbos a la mano — Verb Finder" })).toBeInTheDocument();
    expect(screen.queryByRole("region", { name: "Comprueba lo aprendido" })).not.toBeInTheDocument();
    expect(screen.queryByText(/Ruta de/)).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Practicar este tema en el Quiz" })).not.toBeInTheDocument();
    expect(screen.getAllByRole("article")).toHaveLength(TOTAL);
  });

  it("no se mezcla con el Quiz", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "🎯 Quiz", exact: true }));
    const modules = within(screen.getByLabelText("Módulo")).getAllByRole("option").map(option => option.textContent);
    expect(modules).not.toContain("📒 Verbos");
    const sections = within(screen.getByLabelText("Sección")).getAllByRole("option").map(option => option.textContent);
    expect(sections.join(" ")).not.toMatch(/Verbos a la mano/);
  });

  it("al terminar Básico V sigue proponiendo repasar todos los módulos", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-11-01T12:00:00-06:00"));
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "Básico V", exact: true }));
    const navigation = within(screen.getByRole("navigation", { name: "Temas del módulo" }));
    const topics = navigation.getAllByRole("button");
    fireEvent.click(topics.at(-1));
    expect(screen.getByRole("button", { name: "Repasar todos los módulos →" })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /Continuar con 📒 Verbos/ })).not.toBeInTheDocument();
  });
});

describe("Verbos a la mano — consulta", () => {
  it("muestra el índice A–Z y deshabilita las letras sin verbos", () => {
    render(<App />);
    openVerbFinder();
    const index = within(screen.getByRole("navigation", { name: "Índice alfabético" }));
    expect(index.getByRole("button", { name: "A" })).toBeEnabled();
    expect(index.getByRole("button", { name: "W" })).toBeEnabled();
    expect(index.getByRole("button", { name: "Q" })).toBeDisabled();
    expect(screen.getByRole("heading", { level: 3, name: "A" })).toBeInTheDocument();
    fireEvent.click(index.getByRole("button", { name: "W" }));
    expect(Element.prototype.scrollIntoView).toHaveBeenCalled();
  });

  it("encuentra el verbo desde su pasado, explica la coincidencia y oculta el índice", async () => {
    const user = userEvent.setup();
    render(<App />);
    openVerbFinder();
    await user.type(moduleSearch(), "went");
    expect(cardBases()[0]).toBe("go");
    expect(cardBases()).toContain("undergo");
    expect(card("go")).toHaveTextContent("went es el pasado de go");
    expect(screen.queryByRole("navigation", { name: "Índice alfabético" })).not.toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${cardBases().length} verbos? para`))).toBeInTheDocument();
  });

  it("busca en español y sin acentos", async () => {
    const user = userEvent.setup();
    render(<App />);
    openVerbFinder();
    await user.type(moduleSearch(), "oir");
    expect(cardBases()[0]).toBe("hear");
    await user.clear(moduleSearch());
    await user.type(moduleSearch(), "traer");
    expect(cardBases()[0]).toBe("bring");
  });

  it("propone qué hacer cuando no hay resultados", async () => {
    const user = userEvent.setup();
    render(<App />);
    openVerbFinder();
    await user.type(moduleSearch(), "zzzz");
    expect(screen.queryAllByRole("article")).toHaveLength(0);
    expect(screen.getByText(/No encontramos/)).toBeInTheDocument();
    fireEvent.click(screen.getAllByRole("button", { name: /Pasado simple/ })[0]);
    expect(screen.getByRole("heading", { level: 2, name: "⏪ Pasado simple — Simple Past" })).toBeInTheDocument();
  });

  it("filtra por tipo y, en irregulares, por patrón", () => {
    render(<App />);
    openVerbFinder();
    expect(chip(new RegExp(`^Todos \\(${TOTAL}\\)`))).toHaveAttribute("aria-pressed", "true");
    expect(screen.queryByRole("button", { name: /Las tres iguales/ })).not.toBeInTheDocument();

    fireEvent.click(chip(new RegExp(`^Regulares \\(${REGULAR}\\)`)));
    expect(screen.getAllByRole("article")).toHaveLength(REGULAR);
    expect(cardBases()).toContain("work");
    expect(cardBases()).not.toContain("go");

    fireEvent.click(chip(new RegExp(`^Irregulares \\(${IRREGULAR}\\)`)));
    expect(screen.getAllByRole("article")).toHaveLength(IRREGULAR);
    fireEvent.click(chip(/Las tres iguales/));
    expect(cardBases()).toEqual(expect.arrayContaining(["cut", "put", "hit"]));
    expect(cardBases()).not.toContain("go");
    expect(cardBases()).not.toContain("buy");
  });

  it("expande un verbo con su patrón, su nota y las lecciones donde aparece", () => {
    render(<App />);
    openVerbFinder();
    const read = within(card("read"));
    const more = read.getByRole("button", { name: /Más/ });
    expect(more).toHaveAttribute("aria-expanded", "false");
    fireEvent.click(more);
    expect(more).toHaveAttribute("aria-expanded", "true");
    expect(read.getByText(/Las tres iguales/)).toBeInTheDocument();
    expect(read.getByText(/\/rɛd\//)).toBeInTheDocument();
    expect(read.getByText(/Aparece en/)).toBeInTheDocument();
    fireEvent.click(read.getByRole("button", { name: /Verbos irregulares/ }));
    expect(screen.getByRole("heading", { level: 2, name: /Verbos irregulares/ })).toBeInTheDocument();
  });

  it("muestra el sonido de -ed en los regulares", () => {
    render(<App />);
    openVerbFinder();
    const want = within(card("want"));
    fireEvent.click(want.getByRole("button", { name: /Más/ }));
    expect(want.getByText(/\/ɪd\//)).toBeInTheDocument();
  });
});

describe("Verbos a la mano — Mis verbos, práctica y audio", () => {
  it("guarda verbos en Mis verbos y los recuerda al volver", async () => {
    const user = userEvent.setup();
    const { unmount } = render(<App />);
    openVerbFinder();
    fireEvent.click(chip(/^★ Mis verbos/));
    expect(screen.getByText(/Aún no guardas verbos/)).toBeInTheDocument();
    fireEvent.click(chip(/^Todos/));

    await user.type(moduleSearch(), "bring");
    const save = within(card("bring")).getByRole("button", { name: "Guardar bring en Mis verbos" });
    fireEvent.click(save);
    expect(within(card("bring")).getByRole("button", { name: "Quitar bring de Mis verbos" })).toHaveAttribute("aria-pressed", "true");
    expect(JSON.parse(localStorage.getItem("learningles.favoriteVerbs"))).toEqual(["bring"]);
    unmount();

    render(<App />);
    openVerbFinder();
    fireEvent.click(chip(/^★ Mis verbos \(1\)/));
    expect(cardBases()).toEqual(["bring"]);
  });

  it("sigue funcionando si localStorage falla", () => {
    const setItem = vi.spyOn(localStorage, "setItem").mockImplementation(() => { throw new Error("bloqueado"); });
    const getItem = vi.spyOn(localStorage, "getItem").mockImplementation(() => { throw new Error("bloqueado"); });
    render(<App />);
    openVerbFinder();
    fireEvent.click(within(card("go")).getByRole("button", { name: "Guardar go en Mis verbos" }));
    expect(within(card("go")).getByRole("button", { name: "Quitar go de Mis verbos" })).toBeInTheDocument();
    setItem.mockRestore();
    getItem.mockRestore();
  });

  it("modo práctica oculta una columna y revela cada celda al tocarla", () => {
    render(<App />);
    openVerbFinder();
    const practice = within(screen.getByRole("group", { name: "Modo práctica: ocultar columna" }));
    fireEvent.click(practice.getByRole("button", { name: "Pasado" }));
    const go = within(card("go"));
    expect(go.queryByText("went")).not.toBeInTheDocument();
    expect(go.getByText("gone")).toBeInTheDocument();
    fireEvent.click(go.getByRole("button", { name: "Mostrar pasado de go" }));
    expect(go.getByText("went")).toBeInTheDocument();
    expect(within(card("eat")).queryByText("ate")).not.toBeInTheDocument();

    fireEvent.click(practice.getByRole("button", { name: "Español" }));
    expect(within(card("go")).getByText("went")).toBeInTheDocument();
    expect(within(card("go")).getByRole("button", { name: "Mostrar significado de go" })).toBeInTheDocument();
    fireEvent.click(practice.getByRole("button", { name: "Nada" }));
    expect(within(card("go")).queryByRole("button", { name: /Mostrar/ })).not.toBeInTheDocument();
  });

  it("pronuncia las tres formas en inglés americano", () => {
    const speak = vi.fn();
    const cancel = vi.fn();
    window.speechSynthesis = { speak, cancel };
    window.SpeechSynthesisUtterance = class { constructor(text) { this.text = text; } };
    render(<App />);
    openVerbFinder();
    fireEvent.click(within(card("go")).getByRole("button", { name: "Escuchar go, went, gone" }));
    expect(cancel).toHaveBeenCalled();
    expect(speak).toHaveBeenCalledTimes(1);
    const utterance = speak.mock.calls[0][0];
    expect(utterance.text).toMatch(/go.*went.*gone/);
    expect(utterance.lang).toBe("en-US");
  });

  it("no muestra el botón de audio si el navegador no puede hablar", () => {
    render(<App />);
    openVerbFinder();
    expect(within(card("go")).queryByRole("button", { name: /Escuchar/ })).not.toBeInTheDocument();
  });
});

describe("Verbos a la mano — buscador global y enlaces", () => {
  it("responde al instante con las tres formas y abre el verbo", async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.type(screen.getByPlaceholderText("Buscar tema o palabra..."), "went");
    const first = (await screen.findAllByRole("option"))[0];
    expect(first).toHaveTextContent(/go.*went.*gone/);
    expect(first).toHaveTextContent(/ir/);
    await user.click(first);
    expect(screen.getByRole("heading", { level: 2, name: "📒 Verbos a la mano — Verb Finder" })).toBeInTheDocument();
    expect(moduleSearch()).toHaveValue("go");
    expect(cardBases()[0]).toBe("go");
    expect(within(card("go")).getByRole("button", { name: /Más/ })).toHaveAttribute("aria-expanded", "true");
  });

  it("limita las respuestas de verbos a cuatro y conserva los temas", async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.type(screen.getByPlaceholderText("Buscar tema o palabra..."), "sp");
    const options = await screen.findAllByRole("option");
    expect(options.filter(option => /Verbos$/.test(option.textContent))).toHaveLength(4);
  });

  it("navega con el teclado entre respuestas de verbos y temas", async () => {
    const user = userEvent.setup();
    render(<App />);
    const input = screen.getByPlaceholderText("Buscar tema o palabra...");
    await user.type(input, "traer");
    await user.keyboard("{Enter}");
    expect(moduleSearch()).toHaveValue("bring");
  });

  it("al cambiar de verbo desde el buscador con el módulo abierto actualiza la búsqueda", async () => {
    const user = userEvent.setup();
    render(<App />);
    openVerbFinder();
    const global = screen.getByPlaceholderText("Buscar tema o palabra...");
    await user.type(global, "traer");
    await user.keyboard("{Enter}");
    expect(moduleSearch()).toHaveValue("bring");
    await user.type(global, "bought");
    await user.keyboard("{Enter}");
    expect(moduleSearch()).toHaveValue("buy");
    expect(within(card("buy")).getByRole("button", { name: /Más/ })).toHaveAttribute("aria-expanded", "true");
  });

  it("vuelve a la lección desde la que se buscó el verbo", async () => {
    const user = userEvent.setup();
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "Básico V", exact: true }));
    await user.type(screen.getByPlaceholderText("Buscar tema o palabra..."), "bought");
    await user.keyboard("{Enter}");
    fireEvent.click(screen.getByRole("button", { name: /Volver a ⏪ Pasado simple/ }));
    expect(screen.getByRole("heading", { level: 2, name: "⏪ Pasado simple — Simple Past" })).toBeInTheDocument();
  });

  it.each([
    ["Básico I", "🏃 Verbos de uso diario"],
    ["Básico II", "🏃 Verbos irregulares"],
  ])("enlaza %s · %s con el módulo, también cuando su lista no tiene el verbo", async (levelLabel, topicLabel) => {
    const user = userEvent.setup();
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: levelLabel, exact: true }));
    fireEvent.click(within(screen.getByRole("navigation", { name: "Temas del módulo" })).getByRole("button", { name: topicLabel }));
    expect(screen.getByRole("button", { name: new RegExp(`Consulta los ${TOTAL} verbos`) })).toBeInTheDocument();

    await user.type(screen.getByPlaceholderText(/Busca:/), "arise");
    expect(screen.getByText("No está en esta lista.")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: /Buscar «arise» en Verbos a la mano/ }));
    expect(moduleSearch()).toHaveValue("arise");
    expect(cardBases()[0]).toBe("arise");
  });

  it("enlaza Pasado simple con el módulo", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "Básico V", exact: true }));
    fireEvent.click(screen.getAllByRole("button", { name: /Verbos a la mano|Consulta los/ })[0]);
    expect(screen.getByRole("heading", { level: 2, name: "📒 Verbos a la mano — Verb Finder" })).toBeInTheDocument();
  });
});

describe("Resaltado del buscador global", () => {
  it("ignora el texto marcado con data-search-skip", () => {
    vi.useFakeTimers();
    const main = document.createElement("main");
    main.innerHTML = `<header data-search-skip><p>go, went, gone</p></header><article><span>go</span></article>`;
    document.body.appendChild(main);
    scrollToAndHighlight("go", { root: main, delay: 0 });
    act(() => { vi.advanceTimersByTime(1); });
    expect(main.querySelector("header mark")).toBeNull();
    expect(main.querySelector("article mark")).not.toBeNull();
    main.remove();
  });
});
