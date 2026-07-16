import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App — selector de color y niveles", () => {
  beforeEach(() => localStorage.clear());

  it("arranca en Básico 1 con el tema por defecto (petróleo)", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: /english — básico 1/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /color/i })).toBeInTheDocument();
  });

  it("el selector de color muestra las 5 paletas al abrirlo", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: /color/i }));
    const menu = screen.getByRole("menu");
    for (const label of [/Esmeralda/, /Azul petróleo/, /Vino/, /Índigo/, /Claro/]) {
      expect(within(menu).getByText(label)).toBeInTheDocument();
    }
  });

  it("elegir un color aplica el degradado y persiste en localStorage", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: /color/i }));
    await user.click(screen.getByRole("menuitemradio", { name: /Vino/ }));

    expect(localStorage.getItem("learningles.theme")).toBe("vino");
  });

  it("recuerda el color guardado al volver a montar la app", async () => {
    localStorage.setItem("learningles.theme", "claro");
    render(<App />);

    const user = userEvent.setup();
    await user.click(screen.getByRole("button", { name: /color/i }));
    const claro = screen.getByRole("menuitemradio", { name: /Claro/ });
    expect(claro).toHaveAttribute("aria-checked", "true");
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
