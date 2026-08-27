import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SpellingBox from "./SpellingBox";
import { spellWord } from "./spellWord";

describe("spellWord", () => {
  it("da el nombre de cada letra", () => {
    expect(spellWord("cat")).toEqual([
      { letter: "C", say: "si" },
      { letter: "A", say: "ei" },
      { letter: "T", say: "ti" },
    ]);
  });

  it("agrupa las letras repetidas con 'double'", () => {
    expect(spellWord("hello")).toEqual([
      { letter: "H", say: "eich" },
      { letter: "E", say: "i" },
      { letter: "LL", say: "double el" },
      { letter: "O", say: "ou" },
    ]);
  });

  it("ignora espacios, acentos y signos que no son letras del abecedario", () => {
    expect(spellWord("¡ana!").map(l => l.letter)).toEqual(["A", "N", "A"]);
    expect(spellWord("ñ 123")).toEqual([]);
  });
});

describe("SpellingBox", () => {
  it("deletrea la palabra que escribe el usuario", async () => {
    const user = userEvent.setup();
    render(<SpellingBox />);

    const input = screen.getByLabelText(/Escribe una palabra o tu nombre/);
    await user.clear(input);
    await user.type(input, "ana");

    expect(screen.getByText("N")).toBeInTheDocument();
    expect(screen.getAllByText("ei")).toHaveLength(2);
  });
});
