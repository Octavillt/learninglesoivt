import { describe, it, expect, beforeEach } from "vitest";
import { THEMES, THEME_ORDER, DEFAULT_THEME, loadThemeId, saveThemeId } from "./theme";

describe("theme catalog", () => {
  it("tiene las 8 paletas esperadas en orden", () => {
    expect(THEME_ORDER).toEqual([
      "pizarra", "grafito", "carbon", "berenjena", "marino", "esmeralda", "vino", "indigo",
    ]);
    THEME_ORDER.forEach(id => expect(THEMES[id]).toBeDefined());
  });

  it("cada paleta define los tokens necesarios para pintar la UI completa", () => {
    THEME_ORDER.forEach(id => {
      const t = THEMES[id];
      for (const key of ["headerGradient", "buttonGradient", "accent", "bg", "surface", "surfaceAlt", "border", "text", "textMuted", "navPillIdle"]) {
        expect(t[key], `${id}.${key}`).toBeTruthy();
      }
    });
  });

  it("cada paleta tiñe el fondo con su propio matiz (bg distinto por tema)", () => {
    const backgrounds = THEME_ORDER.map(id => THEMES[id].bg);
    expect(new Set(backgrounds).size).toBe(THEME_ORDER.length);
  });

  it("todos los fondos son oscuros para no competir con los colores del contenido", () => {
    // Un fondo oscuro tiene los tres canales RGB bajos (< 0x60)
    THEME_ORDER.forEach(id => {
      const hex = THEMES[id].bg.replace("#", "");
      const [r, g, b] = [0, 2, 4].map(i => parseInt(hex.slice(i, i + 2), 16));
      expect(Math.max(r, g, b), `${id}.bg=${THEMES[id].bg}`).toBeLessThan(0x60);
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
    saveThemeId("vino");
    expect(loadThemeId()).toBe("vino");
  });

  it("ignora un valor guardado inválido y cae al por defecto", () => {
    localStorage.setItem("learningles.theme", "no-existe");
    expect(loadThemeId()).toBe(DEFAULT_THEME);
  });
});
