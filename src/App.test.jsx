import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import * as api from "./auth/api";

vi.mock("./auth/api");

describe("App — gate de acceso", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("sin sesión activa, muestra la pantalla de login y no el contenido", async () => {
    api.fetchMe.mockRejectedValue(new Error("No autenticado"));
    render(<App />);

    await waitFor(() => expect(screen.getByRole("heading", { name: /iniciar sesión/i })).toBeInTheDocument());
    expect(screen.queryByText(/verb to be/i)).not.toBeInTheDocument();
    expect(screen.getByPlaceholderText(/correo electrónico/i)).toBeInTheDocument();
  });

  it("con sesión activa (cookie válida ya presente), muestra el contenido directamente", async () => {
    api.fetchMe.mockResolvedValue({ id: 1, email: "alice@example.com", displayName: "Alice" });
    render(<App />);

    await waitFor(() => expect(screen.getByText(/👋 Alice/)).toBeInTheDocument());
    expect(screen.getByRole("button", { name: /cerrar sesión/i })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: /iniciar sesión/i })).not.toBeInTheDocument();
  });

  it("completar el login desbloquea el contenido sin recargar la página", async () => {
    const user = userEvent.setup();
    api.fetchMe.mockRejectedValue(new Error("No autenticado"));
    api.login.mockResolvedValue({ id: 2, email: "bob@example.com", displayName: "Bob" });

    render(<App />);
    await waitFor(() => expect(screen.getByPlaceholderText(/correo electrónico/i)).toBeInTheDocument());

    await user.type(screen.getByPlaceholderText(/correo electrónico/i), "bob@example.com");
    await user.type(screen.getByPlaceholderText(/^contraseña$/i), "password123");
    await user.click(screen.getByRole("button", { name: /^iniciar sesión$/i }));

    await waitFor(() => expect(screen.getByText(/👋 Bob/)).toBeInTheDocument());
    expect(api.login).toHaveBeenCalledWith({ email: "bob@example.com", password: "password123" });
  });

  it("cerrar sesión vuelve a mostrar el gate de login", async () => {
    const user = userEvent.setup();
    api.fetchMe.mockResolvedValue({ id: 1, email: "alice@example.com", displayName: "Alice" });
    api.logout.mockResolvedValue(null);

    render(<App />);
    await waitFor(() => expect(screen.getByText(/👋 Alice/)).toBeInTheDocument());

    await user.click(screen.getByRole("button", { name: /cerrar sesión/i }));

    await waitFor(() => expect(screen.getByRole("heading", { name: /iniciar sesión/i })).toBeInTheDocument());
    expect(api.logout).toHaveBeenCalled();
  });

  it("muestra el selector de niveles con Básico 1 activo y los futuros bloqueados", async () => {
    api.fetchMe.mockResolvedValue({ id: 1, email: "alice@example.com", displayName: "Alice" });
    render(<App />);
    await waitFor(() => expect(screen.getByText(/👋 Alice/)).toBeInTheDocument());

    expect(screen.getByRole("heading", { name: /english — básico 1/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Básico 1" })).toBeEnabled();
    expect(screen.getByRole("button", { name: /Básico 2/ })).toBeDisabled();
    expect(screen.getByRole("button", { name: /Básico 3/ })).toBeDisabled();
  });

  it("hacer clic en un nivel bloqueado no cambia el contenido", async () => {
    const user = userEvent.setup();
    api.fetchMe.mockResolvedValue({ id: 1, email: "alice@example.com", displayName: "Alice" });
    render(<App />);
    await waitFor(() => expect(screen.getByText(/👋 Alice/)).toBeInTheDocument());

    await user.click(screen.getByRole("button", { name: /Básico 2/ }));

    expect(screen.getByRole("heading", { name: /english — básico 1/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /🏃 Verbos/ })).toBeInTheDocument();
  });

  it("la barra de temas muestra los temas del nivel activo (Básico 1)", async () => {
    api.fetchMe.mockResolvedValue({ id: 1, email: "alice@example.com", displayName: "Alice" });
    render(<App />);
    await waitFor(() => expect(screen.getByText(/👋 Alice/)).toBeInTheDocument());

    expect(screen.getByRole("button", { name: /🏃 Verbos/ })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /🎯 Quiz/ })).toBeInTheDocument();
  });

  it("muestra el error del servidor si el login falla y no desbloquea el contenido", async () => {
    const user = userEvent.setup();
    api.fetchMe.mockRejectedValue(new Error("No autenticado"));
    api.login.mockRejectedValue(new Error("Correo o contraseña incorrectos"));

    render(<App />);
    await waitFor(() => expect(screen.getByPlaceholderText(/correo electrónico/i)).toBeInTheDocument());

    await user.type(screen.getByPlaceholderText(/correo electrónico/i), "bob@example.com");
    await user.type(screen.getByPlaceholderText(/^contraseña$/i), "wrongpass1");
    await user.click(screen.getByRole("button", { name: /^iniciar sesión$/i }));

    await waitFor(() => expect(screen.getByText(/correo o contraseña incorrectos/i)).toBeInTheDocument());
    expect(screen.queryByText(/👋/)).not.toBeInTheDocument();
  });
});
