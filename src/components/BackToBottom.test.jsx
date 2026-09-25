import { describe, it, expect, beforeEach, vi } from "vitest";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BackToBottom from "./BackToBottom";

function setPage({ height, y }) {
  Object.defineProperty(document.documentElement, "scrollHeight", { configurable: true, value: height });
  window.scrollY = y;
  act(() => { window.dispatchEvent(new Event("scroll")); });
}

describe("BackToBottom", () => {
  beforeEach(() => {
    window.scrollY = 0;
    Object.defineProperty(window, "innerHeight", { configurable: true, value: 800 });
    vi.mocked(window.scrollTo).mockClear();
  });

  it("permanece oculto si la página no tiene más contenido abajo", () => {
    render(<BackToBottom />);
    setPage({ height: 900, y: 0 });
    expect(screen.queryByRole("button", { name: "Ir al final" })).not.toBeInTheDocument();
  });

  it("aparece con contenido abajo y lleva la página al final al tocarlo", async () => {
    const user = userEvent.setup();
    render(<BackToBottom />);

    setPage({ height: 4000, y: 0 });
    await user.click(screen.getByRole("button", { name: "Ir al final" }));

    expect(window.scrollTo).toHaveBeenCalledWith({ top: 4000, behavior: "smooth" });
  });

  it("se oculta al llegar cerca del final", () => {
    render(<BackToBottom />);

    setPage({ height: 4000, y: 0 });
    expect(screen.getByRole("button", { name: "Ir al final" })).toBeInTheDocument();

    setPage({ height: 4000, y: 3100 });
    expect(screen.queryByRole("button", { name: "Ir al final" })).not.toBeInTheDocument();
  });
});
