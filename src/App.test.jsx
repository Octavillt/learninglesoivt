import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App — selector de color y niveles", () => {
  beforeEach(() => localStorage.clear());

  it("arranca en Básico 1 con el tema por defecto (Pizarra)", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: /english — básico 1/i })).toBeInTheDocument();
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

  it("muestra el selector de niveles con Básico 1 activo y 2/3 bloqueados", () => {
    render(<App />);
    expect(screen.getByRole("button", { name: "Básico 1" })).toBeEnabled();
    expect(screen.getByRole("button", { name: /Básico 2/ })).toBeDisabled();
    expect(screen.getByRole("button", { name: /Básico 3/ })).toBeDisabled();
  });

  it("la barra de temas muestra los temas del nivel activo", () => {
    render(<App />);
    expect(screen.getByRole("button", { name: /🏃 Verbos/ })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /🎯 Quiz/ })).toBeInTheDocument();
  });
});
