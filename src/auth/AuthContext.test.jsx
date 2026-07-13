import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { AuthProvider, useAuth } from "./AuthContext";
import * as api from "./api";

vi.mock("./api");

function Probe() {
  const { user, loading } = useAuth();
  if (loading) return <div>cargando</div>;
  return <div>{user ? `sesión: ${user.displayName}` : "sin sesión"}</div>;
}

describe("AuthProvider", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("muestra 'cargando' mientras resuelve la sesión inicial", () => {
    api.fetchMe.mockReturnValue(new Promise(() => {}));
    render(<AuthProvider><Probe /></AuthProvider>);
    expect(screen.getByText("cargando")).toBeInTheDocument();
  });

  it("queda sin usuario si fetchMe falla (no hay cookie / 401)", async () => {
    api.fetchMe.mockRejectedValue(new Error("No autenticado"));
    render(<AuthProvider><Probe /></AuthProvider>);
    await waitFor(() => expect(screen.getByText("sin sesión")).toBeInTheDocument());
  });

  it("queda con usuario si fetchMe resuelve (cookie válida)", async () => {
    api.fetchMe.mockResolvedValue({ id: 1, email: "a@b.com", displayName: "Alice" });
    render(<AuthProvider><Probe /></AuthProvider>);
    await waitFor(() => expect(screen.getByText("sesión: Alice")).toBeInTheDocument());
  });

  it("useAuth lanza si se usa fuera de AuthProvider", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    expect(() => render(<Probe />)).toThrow(/useAuth debe usarse dentro de AuthProvider/);
    spy.mockRestore();
  });
});
