import { describe, it, expect, beforeEach, vi } from "vitest";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BackToTop from "./BackToTop";

function scrollTo(y) {
  window.scrollY = y;
  act(() => { window.dispatchEvent(new Event("scroll")); });
}

describe("BackToTop", () => {
  beforeEach(() => {
    window.scrollY = 0;
    vi.mocked(window.scrollTo).mockClear();
  });

  it("permanece oculto mientras la página está arriba", () => {
    render(<BackToTop />);
    expect(screen.queryByRole("button", { name: "Volver arriba" })).not.toBeInTheDocument();
  });

  it("aparece al bajar y devuelve la página al inicio al tocarlo", async () => {
    const user = userEvent.setup();
    render(<BackToTop />);

    scrollTo(600);
    await user.click(screen.getByRole("button", { name: "Volver arriba" }));

    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });
  });

  it("vuelve a ocultarse al regresar arriba", () => {
    render(<BackToTop />);

    scrollTo(600);
    expect(screen.getByRole("button", { name: "Volver arriba" })).toBeInTheDocument();

    scrollTo(0);
    expect(screen.queryByRole("button", { name: "Volver arriba" })).not.toBeInTheDocument();
  });
});
