import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BackToPrevious from "./BackToPrevious";

describe("BackToPrevious", () => {
  it("no se muestra cuando no hay sección anterior", () => {
    render(<BackToPrevious label={null} onClick={() => {}} />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("nombra el destino y avisa al pulsarla", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<BackToPrevious label="🔢 Numbers & Letters · Básico I" onClick={onClick} />);

    await user.click(screen.getByRole("button", { name: "Volver a 🔢 Numbers & Letters · Básico I" }));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
