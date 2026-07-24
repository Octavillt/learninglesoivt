import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App — selector de color y niveles", () => {
  beforeEach(() => localStorage.clear());

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

  it("muestra los niveles en romano: I y II habilitados, III bloqueado", () => {
    render(<App />);
    expect(screen.getByRole("button", { name: "Básico I" })).toBeEnabled();
    expect(screen.getByRole("button", { name: "Básico II" })).toBeEnabled();
    expect(screen.getByRole("button", { name: /Básico III/ })).toBeDisabled();
  });

  it("entrar a Básico II muestra la sección de Verbos Irregulares", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: "Básico II" }));

    expect(screen.getByRole("heading", { name: "🎓 English — Básico II" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "🏃 Verbos Irregulares" })).toBeInTheDocument();
    expect(screen.queryByText(/estamos preparando/i)).not.toBeInTheDocument();
  });

  it("volver de Básico II a Básico I restaura los temas", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: "Básico II" }));
    await user.click(screen.getByRole("button", { name: "Básico I" }));

    expect(screen.getByRole("button", { name: /🏃 Verbos/ })).toBeInTheDocument();
    expect(screen.queryByText(/estamos preparando/i)).not.toBeInTheDocument();
  });

  it("la barra de temas muestra los temas del nivel activo", () => {
    render(<App />);
    expect(screen.getByRole("button", { name: /🏃 Verbos/ })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /🎯 Quiz/ })).toBeInTheDocument();
  });
});
