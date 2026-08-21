import "@testing-library/jest-dom/vitest";
import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";

// jsdom no implementa estos métodos de scroll; la app los usa en efectos.
window.scrollTo = vi.fn();
Element.prototype.scrollIntoView = vi.fn();

// Node 26 expone un localStorage global propio que sólo funciona con la flag
// --localstorage-file, y bajo vitest deja en undefined tanto el suyo como el
// de jsdom. Sin esto la app cae siempre por el catch de "storage no disponible"
// y no se puede probar la persistencia.
if (!globalThis.localStorage) {
  const store = new Map();
  const memoryStorage = {
    getItem: key => (store.has(String(key)) ? store.get(String(key)) : null),
    setItem: (key, value) => { store.set(String(key), String(value)); },
    removeItem: key => { store.delete(String(key)); },
    clear: () => { store.clear(); },
    key: i => [...store.keys()][i] ?? null,
    get length() { return store.size; },
  };
  const descriptor = { value: memoryStorage, configurable: true, writable: true };
  Object.defineProperty(globalThis, "localStorage", descriptor);
  Object.defineProperty(window, "localStorage", descriptor);
}

afterEach(() => {
  cleanup();
});
