import "@testing-library/jest-dom/vitest";
import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";

// jsdom no implementa estos métodos de scroll; la app los usa en efectos.
window.scrollTo = vi.fn();
Element.prototype.scrollIntoView = vi.fn();

afterEach(() => {
  cleanup();
});
