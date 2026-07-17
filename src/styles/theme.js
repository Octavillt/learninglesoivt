// Paletas seleccionables por el usuario para el header.
//
// Todas son NEUTRAS y OSCURAS a propósito: el contenido ya usa 14 colores
// saturados (las pills de temas) + 8 tokens de color, así que el header debe
// enmarcar ese contenido en lugar de competir con él. Cada paleta es un
// neutro profundo con un leve sesgo de matiz distinto. Comparten el mismo
// fondo/superficie oscuros; solo cambian el degradado del header, el de los
// botones primarios y el acento.

const DARK_SURFACE = {
  bg: "#0f172a",
  surface: "#1e293b",
  surfaceAlt: "#334155",
  border: "#334155",
  text: "#f8fafc",
  textMuted: "#94a3b8",
  navPillIdle: "#334155",
};

export const THEMES = {
  pizarra: {
    id: "pizarra",
    label: "Pizarra",
    emoji: "🌑",
    headerGradient: "linear-gradient(135deg,#0f172a,#334155)",
    buttonGradient: "linear-gradient(135deg,#334155,#475569)",
    accent: "#334155",
    accentSolid: "#475569",
    ...DARK_SURFACE,
  },
  grafito: {
    id: "grafito",
    label: "Grafito",
    emoji: "🪨",
    headerGradient: "linear-gradient(135deg,#111827,#1f2937)",
    buttonGradient: "linear-gradient(135deg,#374151,#4b5563)",
    accent: "#1f2937",
    accentSolid: "#4b5563",
    ...DARK_SURFACE,
  },
  carbon: {
    id: "carbon",
    label: "Carbón cálido",
    emoji: "🌰",
    headerGradient: "linear-gradient(135deg,#1c1917,#292524)",
    buttonGradient: "linear-gradient(135deg,#44403c,#57534e)",
    accent: "#292524",
    accentSolid: "#57534e",
    ...DARK_SURFACE,
  },
  berenjena: {
    id: "berenjena",
    label: "Berenjena",
    emoji: "🍆",
    headerGradient: "linear-gradient(135deg,#1e1b2e,#312e4a)",
    buttonGradient: "linear-gradient(135deg,#4c4870,#5b5688)",
    accent: "#312e4a",
    accentSolid: "#5b5688",
    ...DARK_SURFACE,
  },
  marino: {
    id: "marino",
    label: "Marino",
    emoji: "🌊",
    headerGradient: "linear-gradient(135deg,#0c1e3a,#1e3a5f)",
    buttonGradient: "linear-gradient(135deg,#1e3a5f,#2d5075)",
    accent: "#1e3a5f",
    accentSolid: "#2d5075",
    ...DARK_SURFACE,
  },
};

export const THEME_ORDER = ["pizarra", "grafito", "carbon", "berenjena", "marino"];

export const DEFAULT_THEME = "pizarra";
const STORAGE_KEY = "learningles.theme";

export function loadThemeId() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && THEMES[saved]) return saved;
  } catch {
    // localStorage no disponible (modo privado, etc.) — usar el predeterminado
  }
  return DEFAULT_THEME;
}

export function saveThemeId(id) {
  try {
    localStorage.setItem(STORAGE_KEY, id);
  } catch {
    // Si no se puede persistir, el tema sigue funcionando en la sesión actual
  }
}
