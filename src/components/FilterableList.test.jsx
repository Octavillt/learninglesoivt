import { describe, it, expect, beforeEach, vi } from "vitest";
import { useState } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FilterableList from "./FilterableList";

const VERBS = ["eat", "run", "sleep"];

function Harness() {
  const [value, setValue] = useState("");
  return (
    <FilterableList placeholder="🔍 Busca..." value={value} onChange={setValue}>
      <ul>
        {VERBS.filter(v => v.includes(value)).map(v => <li key={v}>{v}</li>)}
      </ul>
    </FilterableList>
  );
}

describe("FilterableList", () => {
  beforeEach(() => {
    vi.mocked(window.scrollTo).mockClear();
  });

  it("no mueve el scroll al montarse", () => {
    render(<Harness />);
    expect(window.scrollTo).not.toHaveBeenCalled();
  });

  it("filtra y reposiciona la vista en el campo, para no perder los resultados de vista", async () => {
    const user = userEvent.setup();
    render(<Harness />);

    await user.type(screen.getByPlaceholderText("🔍 Busca..."), "eat");

    expect(screen.getByRole("listitem")).toHaveTextContent("eat");
    expect(window.scrollTo).toHaveBeenCalledWith({ top: expect.any(Number), behavior: "smooth" });
  });

  it("reserva alto solo mientras hay filtro, para que el navegador pueda subir al campo", async () => {
    const user = userEvent.setup();
    const { container } = render(<Harness />);
    const results = () => container.querySelector(".filter-results");

    expect(results()).not.toHaveClass("filter-results--room");

    await user.type(screen.getByPlaceholderText("🔍 Busca..."), "eat");
    expect(results()).toHaveClass("filter-results--room");

    await user.clear(screen.getByPlaceholderText("🔍 Busca..."));
    expect(results()).not.toHaveClass("filter-results--room");
  });

  it("no toca el scroll si el filtro cambia sin que el campo tenga el foco", () => {
    const { rerender } = render(
      <FilterableList placeholder="🔍 Busca..." value="" onChange={() => {}}>
        <ul />
      </FilterableList>
    );
    rerender(
      <FilterableList placeholder="🔍 Busca..." value="eat" onChange={() => {}}>
        <ul />
      </FilterableList>
    );
    expect(window.scrollTo).not.toHaveBeenCalled();
  });
});
