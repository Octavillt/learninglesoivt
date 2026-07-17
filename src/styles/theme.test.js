import { describe, it, expect, beforeEach } from "vitest";
import { THEMES, THEME_ORDER, DEFAULT_THEME, loadThemeId, saveThemeId } from "./theme";

describe("theme catalog", () => {
  it("tiene las 5 paletas neutras esperadas en orden", () => {
    expect(THEME_ORDER).toEqual(["pizarra", "grafito", "carbon", "berenjena", "marino"]);
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

  it("todas las paletas comparten el mismo fondo oscuro (son neutras, no compiten con el contenido)", () => {
    THEME_ORDER.forEach(id => {
      expect(THEMES[id].bg).toBe("#0f172a");
      expect(THEMES[id].surface).toBe("#1e293b");
    });
  });

  it("el tema por defecto es Pizarra", () => {
    expect(DEFAULT_THEME).toBe("pizarra");
    expect(THEMES[DEFAULT_THEME]).toBeDefined();
  });
});

describe("persistencia del tema", () => {
  beforeEach(() => localStorage.clear());

  it("sin nada guardado devuelve el tema por defecto", () => {
    expect(loadThemeId()).toBe(DEFAULT_THEME);
  });

  it("guarda y recupera un tema válido", () => {
    saveThemeId("marino");
    expect(loadThemeId()).toBe("marino");
  });

  it("ignora un valor guardado inválido y cae al por defecto", () => {
    localStorage.setItem("learningles.theme", "no-existe");
    expect(loadThemeId()).toBe(DEFAULT_THEME);
  });
});
