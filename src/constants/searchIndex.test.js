import { describe, it, expect } from "vitest";
import { searchTopics } from "./searchIndex";

describe("searchTopics", () => {
  it("devuelve vacío para query vacío o solo espacios", () => {
    expect(searchTopics("")).toEqual([]);
    expect(searchTopics("   ")).toEqual([]);
  });

  it("encuentra un tema por su label", () => {
    const results = searchTopics("Frutas");
    expect(results.some(r => r.topicId === "fruits")).toBe(true);
  });

  it("encuentra un tema por una palabra de su contenido (no en el label)", () => {
    const results = searchTopics("manzana");
    expect(results.some(r => r.topicId === "fruits")).toBe(true);
  });

  it("es insensible a mayúsculas y acentos", () => {
    const lower = searchTopics("preposiciones");
    const upperAccent = searchTopics("PREPOSICIÓN");
    expect(lower.some(r => r.topicId === "prepositions")).toBe(true);
    expect(upperAccent.some(r => r.topicId === "prepositions")).toBe(true);
  });

  it("encuentra temas de Básico II junto con los de Básico I", () => {
    const results = searchTopics("possessive");
    const ids = results.map(r => r.topicId);
    expect(ids).toEqual(expect.arrayContaining(["possessiveAdjectives", "possessiveNouns"]));
    expect(results.every(r => r.levelId === "basico2")).toBe(true);
  });

  it("encuentra el tema de Básico III por una expresión de su contenido", () => {
    const results = searchTopics("how often");
    const inOnAt = results.find(r => r.topicId === "inOnAt");
    expect(inOnAt).toBeDefined();
    expect(inOnAt.levelId).toBe("basico3");
  });

  it("prioriza coincidencias de label sobre coincidencias de contenido", () => {
    const results = searchTopics("time");
    expect(results[0].topicId).toBe("time");
  });

  it("no devuelve resultados para un query sin coincidencias", () => {
    expect(searchTopics("xyznotfound")).toEqual([]);
  });

  it("reparte el Simple Present entre Básico II (fundamentos) y Básico III (avanzado)", () => {
    const results = searchTopics("simple present");
    const basico = results.find(r => r.topicId === "simplePresent");
    const avanzado = results.find(r => r.topicId === "simplePresentAdvanced");
    expect(basico).toBeDefined();
    expect(avanzado).toBeDefined();
    expect(basico.levelId).toBe("basico2");
    expect(avanzado.levelId).toBe("basico3");
  });

  it("los adverbios de frecuencia ahora se buscan en el Simple Present de Básico III", () => {
    const results = searchTopics("adverbios de frecuencia");
    expect(results.some(r => r.topicId === "simplePresentAdvanced" && r.levelId === "basico3")).toBe(true);
    expect(results.some(r => r.topicId === "simplePresent")).toBe(false);
  it("encuentra Numbers & Letters por abecedario, vocales o deletreo", () => {
    for (const q of ["abecedario", "vocales", "deletrear", "letters"]) {
      const hit = searchTopics(q).find(r => r.topicId === "numbers");
      expect(hit, q).toBeDefined();
      expect(hit.levelId).toBe("basico1");
    }
  });
});
