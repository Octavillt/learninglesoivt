import { describe, it, expect, beforeEach } from "vitest";
import { THEMES, THEME_ORDER, DEFAULT_THEME, loadThemeId, saveThemeId } from "./theme";

describe("theme catalog", () => {
  it("tiene las 5 paletas esperadas (A-D + claro) en orden", () => {
    expect(THEME_ORDER).toEqual(["esmeralda", "petroleo", "vino", "indigo", "claro"]);
    THEME_ORDER.forEach(id => expect(THEMES[id]).toBeDefined());
  });

  it("cada paleta define los tokens necesarios para pintar la UI", () => {
    THEME_ORDER.forEach(id => {
      const t = THEMES[id];
      for (const key of ["headerGradient", "buttonGradient", "accent", "bg", "surface", "text", "navPillIdle"]) {
        expect(t[key], `${id}.${key}`).toBeTruthy();
      }
    });
  });

  it("el tema claro usa fondo claro y texto oscuro (patrón invertido)", () => {
    expect(THEMES.claro.bg).toBe("#f1f5f9");
    expect(THEMES.claro.text).toBe("#0f172a");
  });

  it("los temas oscuros comparten el mismo fondo base", () => {
    ["esmeralda", "petroleo", "vino", "indigo"].forEach(id => {
      expect(THEMES[id].bg).toBe("#0f172a");
    });
  });
});

describe("persistencia del tema", () => {
  beforeEach(() => localStorage.clear());

  it("sin nada guardado devuelve el tema por defecto", () => {
    expect(loadThemeId()).toBe(DEFAULT_THEME);
  });

  it("guarda y recupera un tema válido", () => {
    saveThemeId("vino");
    expect(loadThemeId()).toBe("vino");
  });

  it("ignora un valor guardado inválido y cae al por defecto", () => {
    localStorage.setItem("learningles.theme", "no-existe");
    expect(loadThemeId()).toBe(DEFAULT_THEME);
  });
});
