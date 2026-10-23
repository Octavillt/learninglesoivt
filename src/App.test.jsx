import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { act, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { EXAM_REVIEW_END } from "./constants/topicAvailability";

describe("App — selector de color y niveles", () => {
  beforeEach(() => localStorage.clear());
  afterEach(() => vi.useRealTimers());

  it("arranca en Básico I con el tema por defecto (Pizarra)", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: "🎓 English — Básico I" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /color/i })).toBeInTheDocument();
  });

  it("el selector de color muestra las 8 paletas al abrirlo", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: /color/i }));
    const menu = screen.getByRole("menu");
    for (const label of [/Pizarra/, /Grafito/, /Carbón cálido/, /Berenjena/, /Marino/, /Esmeralda/, /Vino tinto/, /Índigo/]) {
      expect(within(menu).getByText(label)).toBeInTheDocument();
    }
  });

  it("elegir un color persiste en localStorage y tiñe el fondo completo de la app", async () => {
    const user = userEvent.setup();
    const { container } = render(<App />);

    await user.click(screen.getByRole("button", { name: /color/i }));
    await user.click(screen.getByRole("menuitemradio", { name: /Vino tinto/ }));

    expect(localStorage.getItem("learningles.theme")).toBe("vino");
    // El contenedor raíz usa el fondo teñido del tema, no solo el header
    expect(container.firstChild).toHaveStyle({ background: "#1f040d" });
  });

  it("recuerda el color guardado al volver a montar la app", async () => {
    localStorage.setItem("learningles.theme", "berenjena");
    render(<App />);

    const user = userEvent.setup();
    await user.click(screen.getByRole("button", { name: /color/i }));
    const berenjena = screen.getByRole("menuitemradio", { name: /Berenjena/ });
    expect(berenjena).toHaveAttribute("aria-checked", "true");
  });

  it("muestra los cinco niveles en romano habilitados", () => {
    render(<App />);
    expect(screen.getByRole("button", { name: "Básico I" })).toBeEnabled();
    expect(screen.getByRole("button", { name: "Básico II" })).toBeEnabled();
    expect(screen.getByRole("button", { name: "Básico III" })).toBeEnabled();
    expect(screen.getByRole("button", { name: "Básico IV" })).toBeEnabled();
    expect(screen.getByRole("button", { name: "Básico V" })).toBeEnabled();
  });

  it("abre Partes del cuerpo al entrar a Básico IV", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "Básico IV" }));
    expect(screen.getByRole("heading", { name: "🧍 Partes del cuerpo — Body Parts" })).toBeInTheDocument();
    expect(screen.getByText("eyelashes")).toBeInTheDocument();
    expect(screen.getByText("dedo del pie")).toBeInTheDocument();
  });

  it("entrar a Básico II muestra la sección de Artículos", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: "Básico II" }));

    expect(screen.getByRole("heading", { name: "🎓 English — Básico II" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "📖 Artículos — A / An / The / Ø" })).toBeInTheDocument();
    expect(screen.queryByText(/estamos preparando/i)).not.toBeInTheDocument();
  });

  it("abre el tema de Simple Present desde la barra de Básico II", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: "Básico II" }));
    await user.click(within(screen.getByRole("navigation", { name: "Temas del módulo" })).getByRole("button", { name: /⏰ Presente simple/ }));

    expect(screen.getByRole("heading", { name: /Presente simple — Simple Present/ })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Interrogativo/ })).toBeInTheDocument();
    // El contenido avanzado ya no vive en Básico II
    expect(screen.queryByRole("heading", { name: /WH Questions con do \/ does/ })).not.toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: /Adverbios de frecuencia/ })).not.toBeInTheDocument();
  });

  it("entrar a Básico III muestra rutinas, preguntas y frecuencia", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: "Básico III" }));

    expect(screen.getByRole("heading", { name: "🎓 English — Básico III" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Rutinas, preguntas y frecuencia — Simple Present in context/ })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Adverbios de frecuencia/ })).toBeInTheDocument();
    expect(screen.queryByText(/estamos preparando/i)).not.toBeInTheDocument();
  });

  it("abre el tema de Simple Present Avanzado desde la barra de Básico III", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: "Básico III" }));
    await user.click(within(screen.getByRole("navigation", { name: "Temas del módulo" })).getByRole("button", { name: /🔁 Rutinas, preguntas y frecuencia/ }));

    expect(screen.getByRole("heading", { name: /Rutinas, preguntas y frecuencia/ })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /WH Questions con do \/ does/ })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Adverbios de frecuencia/ })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Simple Present vs\. Present Progressive/ })).toBeInTheDocument();
  });

  it("abre Giving Directions desde la barra de Básico III", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: "Básico III" }));
    await user.click(within(screen.getByRole("navigation", { name: "Temas del módulo" })).getByRole("button", { name: /Pedir y dar indicaciones/ }));

    expect(screen.getByRole("heading", { name: /Pedir y dar indicaciones — Asking for & Giving Directions/ })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Movimientos esenciales/ })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Practica con el mapa/ })).toBeInTheDocument();
    expect(screen.getByText("Go straight ahead", { selector: "div" })).toBeInTheDocument();
  });

  it("oculta el repaso temporal al llegar su hora límite", () => {
    vi.useFakeTimers();
    vi.setSystemTime(EXAM_REVIEW_END - 1);
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "Básico III" }));
    fireEvent.click(within(screen.getByRole("navigation", { name: "Temas del módulo" })).getByRole("button", { name: "📝 Repaso: rutinas y descripciones" }));
    expect(screen.getByRole("heading", { name: /Repaso: rutinas y descripciones/ })).toBeInTheDocument();

    act(() => vi.advanceTimersByTime(1));

    expect(screen.queryByRole("button", { name: "📝 Repaso: rutinas y descripciones" })).not.toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: /Repaso: rutinas y descripciones/ })).not.toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Rutinas, preguntas y frecuencia — Simple Present in context/ })).toBeInTheDocument();
  });

  it("volver de Básico II a Básico I restaura los temas", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: "Básico II" }));
    await user.click(screen.getByRole("button", { name: "Básico I" }));

    // Nombre exacto: la flecha de regreso también menciona el tema anterior
    expect(within(screen.getByRole("navigation", { name: "Temas del módulo" })).getByRole("button", { name: "🏃 Verbos de uso diario" })).toBeInTheDocument();
    expect(screen.queryByText(/estamos preparando/i)).not.toBeInTheDocument();
  });

  it("la barra de temas muestra los temas del nivel activo", () => {
    render(<App />);
    const topics = within(screen.getByRole("navigation", { name: "Temas del módulo" }));
    expect(topics.getByRole("button", { name: /🏃 Verbos/ })).toBeInTheDocument();
    expect(topics.queryByRole("button", { name: /Quiz/ })).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "🎯 Quiz" })).toBeInTheDocument();
  });

  it("Numbers & Letters incluye números, abecedario y vocales", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(within(screen.getByRole("navigation", { name: "Temas del módulo" })).getByRole("button", { name: /🔢 Números y abecedario/ }));

    expect(screen.getByRole("heading", { name: "🔢 Números y abecedario — Numbers & Letters" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Cardinal Numbers/ })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /The Alphabet/ })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Vowels/ })).toBeInTheDocument();
  });
});

describe("App — flecha para volver a la sección anterior", () => {
  beforeEach(() => localStorage.clear());

  const flecha = () => screen.queryByRole("button", { name: /^Volver a / });

  it("no aparece hasta que hay una sección anterior", () => {
    render(<App />);
    expect(flecha()).not.toBeInTheDocument();
  });

  it("regresa desde el módulo Quiz al tema anterior", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: /🎯 Quiz/ }));
    expect(screen.getByRole("heading", { name: "🎯 Quiz" })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Volver a 🔢 Números y abecedario · Básico I" }));

    expect(screen.getByRole("heading", { name: "🔢 Números y abecedario — Numbers & Letters" })).toBeInTheDocument();
    // Consumida la pila, la flecha deja de ofrecerse
    expect(flecha()).not.toBeInTheDocument();
  });

  it("regresa también al nivel anterior", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: "Básico II" }));
    expect(screen.getByRole("heading", { name: "📖 Artículos — A / An / The / Ø" })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Volver a 🔢 Números y abecedario · Básico I" }));

    expect(screen.getByRole("heading", { name: "🎓 English — Básico I" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "🔢 Números y abecedario — Numbers & Letters" })).toBeInTheDocument();
  });
});

describe("App — buscador global y resaltado", () => {
  beforeEach(() => localStorage.clear());

  async function buscarYElegir(user, termino) {
    await user.clear(screen.getByPlaceholderText("Buscar tema o palabra..."));
    await user.type(screen.getByPlaceholderText("Buscar tema o palabra..."), termino);
    // «dance» también abre una ficha en Verbos a la mano; esta prueba sigue
    // eligiendo la lección, cuyo nombre ya no es el único que contiene «Verbos».
    await user.click(await screen.findByRole("option", { name: /Verbos de uso diario/ }));
  }

  function resaltado() {
    return document.querySelector("main mark.search-highlight");
  }

  it("resalta la coincidencia al elegir un resultado del buscador", async () => {
    const user = userEvent.setup();
    render(<App />);

    await buscarYElegir(user, "dance");

    await waitFor(() => expect(resaltado()).toHaveTextContent("Dance"));
  });

  it("vuelve a resaltar cuando la segunda búsqueda cae en la sección ya abierta", async () => {
    const user = userEvent.setup();
    render(<App />);

    await buscarYElegir(user, "dance");
    await waitFor(() => expect(resaltado()).toHaveTextContent("Dance"));

    await buscarYElegir(user, "erase");

    await waitFor(() => expect(resaltado()).toHaveTextContent("Erase"));
    // El resaltado anterior se deshace: sin esto los <mark> se acumularían
    // porque la sección no se remonta al no cambiar de tema.
    expect(document.querySelectorAll("main mark.search-highlight")).toHaveLength(1);
  });

  it("salta a Numbers & Letters al buscar 'abecedario'", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(screen.getByPlaceholderText("Buscar tema o palabra..."), "abecedario");
    await user.click(await screen.findByRole("option", { name: /Números y abecedario/ }));

    expect(screen.getByRole("heading", { name: "🔢 Números y abecedario — Numbers & Letters" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /The Alphabet/ })).toBeInTheDocument();
  });
});
