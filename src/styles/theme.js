// Paletas seleccionables por el usuario.
//
// Cada paleta tiñe TODA la app (fondo, superficies, navegación y header)
// con el mismo matiz, siempre en tonos oscuros para que los 14 colores de
// las pills de temas y los tokens del contenido sigan contrastando bien.
// glowA/glowB son el par de colores de los degradados de las lecciones
// (elegidos para armonizar con cada paleta) y highlight, el tono de los
// textos interactivos: resúmenes desplegables, pistas y marcadores.

export const THEMES = {
  pizarra: {
    id: "pizarra",
    label: "Pizarra",
    headerGradient: "linear-gradient(135deg,#0f172a,#334155)",
    buttonGradient: "linear-gradient(135deg,#334155,#475569)",
    accent: "#334155",
    accentSolid: "#475569",
    bg: "#0f172a",
    surface: "#1e293b",
    surfaceAlt: "#334155",
    border: "#334155",
    text: "#f8fafc",
    textMuted: "#94a3b8",
    navPillIdle: "#334155",
    glowA: "#60a5fa",
    glowB: "#a78bfa",
    highlight: "#93c5fd",
  },
  grafito: {
    id: "grafito",
    label: "Grafito",
    headerGradient: "linear-gradient(135deg,#111827,#1f2937)",
    buttonGradient: "linear-gradient(135deg,#374151,#4b5563)",
    accent: "#1f2937",
    accentSolid: "#4b5563",
    bg: "#030712",
    surface: "#111827",
    surfaceAlt: "#1f2937",
    border: "#1f2937",
    text: "#f8fafc",
    textMuted: "#9ca3af",
    navPillIdle: "#374151",
    glowA: "#22d3ee",
    glowB: "#818cf8",
    highlight: "#a5f3fc",
  },
  carbon: {
    id: "carbon",
    label: "Carbón cálido",
    headerGradient: "linear-gradient(135deg,#1c1917,#292524)",
    buttonGradient: "linear-gradient(135deg,#44403c,#57534e)",
    accent: "#292524",
    accentSolid: "#57534e",
    bg: "#0c0a09",
    surface: "#1c1917",
    surfaceAlt: "#292524",
    border: "#292524",
    text: "#fafaf9",
    textMuted: "#a8a29e",
    navPillIdle: "#44403c",
    glowA: "#f59e0b",
    glowB: "#f97316",
    highlight: "#fcd34d",
  },
  berenjena: {
    id: "berenjena",
    label: "Berenjena",
    headerGradient: "linear-gradient(135deg,#1e1b2e,#312e4a)",
    buttonGradient: "linear-gradient(135deg,#4c4870,#5b5688)",
    accent: "#312e4a",
    accentSolid: "#5b5688",
    bg: "#151221",
    surface: "#221e33",
    surfaceAlt: "#322c4a",
    border: "#322c4a",
    text: "#f8fafc",
    textMuted: "#a09cb8",
    navPillIdle: "#443d63",
    glowA: "#c084fc",
    glowB: "#f472b6",
    highlight: "#e9d5ff",
  },
  marino: {
    id: "marino",
    label: "Marino",
    headerGradient: "linear-gradient(135deg,#0c1e3a,#1e3a5f)",
    buttonGradient: "linear-gradient(135deg,#1e3a5f,#2d5075)",
    accent: "#1e3a5f",
    accentSolid: "#2d5075",
    bg: "#081525",
    surface: "#12263f",
    surfaceAlt: "#1e3a5f",
    border: "#1e3a5f",
    text: "#f8fafc",
    textMuted: "#93a8c4",
    navPillIdle: "#2d5075",
    glowA: "#38bdf8",
    glowB: "#2dd4bf",
    highlight: "#7dd3fc",
  },
  esmeralda: {
    id: "esmeralda",
    label: "Esmeralda",
    headerGradient: "linear-gradient(135deg,#064e3b,#0f766e)",
    buttonGradient: "linear-gradient(135deg,#059669,#0d9488)",
    accent: "#0f766e",
    accentSolid: "#059669",
    bg: "#04231c",
    surface: "#06392d",
    surfaceAlt: "#0b5741",
    border: "#0b5741",
    text: "#f0fdf4",
    textMuted: "#86b8a5",
    navPillIdle: "#0f5c49",
    glowA: "#34d399",
    glowB: "#a3e635",
    highlight: "#6ee7b7",
  },
  vino: {
    id: "vino",
    label: "Vino tinto",
    headerGradient: "linear-gradient(135deg,#4c0519,#9f1239)",
    buttonGradient: "linear-gradient(135deg,#9f1239,#be123c)",
    accent: "#9f1239",
    accentSolid: "#be123c",
    bg: "#1f040d",
    surface: "#360816",
    surfaceAlt: "#4c0519",
    border: "#4c0519",
    text: "#fff1f2",
    textMuted: "#c9919e",
    navPillIdle: "#5f0a23",
    glowA: "#fb7185",
    glowB: "#fbbf24",
    highlight: "#fecdd3",
  },
  indigo: {
    id: "indigo",
    label: "Índigo",
    headerGradient: "linear-gradient(135deg,#1e1b4b,#3730a3)",
    buttonGradient: "linear-gradient(135deg,#4338ca,#3730a3)",
    accent: "#3730a3",
    accentSolid: "#4338ca",
    bg: "#100e26",
    surface: "#1c1840",
    surfaceAlt: "#2e2a63",
    border: "#2e2a63",
    text: "#eef2ff",
    textMuted: "#9ca3d4",
    navPillIdle: "#3730a3",
    glowA: "#818cf8",
    glowB: "#22d3ee",
    highlight: "#c7d2fe",
  },
};

export const THEME_ORDER = ["pizarra", "grafito", "carbon", "berenjena", "marino", "esmeralda", "vino", "indigo"];

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
