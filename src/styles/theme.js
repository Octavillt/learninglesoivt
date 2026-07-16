// Paletas seleccionables por el usuario. Cada una define el degradado del
// header, el degradado de botones primarios, el acento, y los colores de
// superficie/fondo/texto (para que el tema "Claro" invierta toda la app).
//
// Los cuatro temas oscuros (A-D) comparten el mismo fondo/superficie oscuros
// y solo cambian el degradado del header y el acento. "Claro" (E) usa fondos
// claros con acentos análogos, manteniendo los mismos patrones de color.

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
  esmeralda: {
    id: "esmeralda",
    label: "Esmeralda",
    emoji: "🌿",
    headerGradient: "linear-gradient(135deg,#064e3b,#0f766e)",
    buttonGradient: "linear-gradient(135deg,#059669,#0d9488)",
    accent: "#0f766e",
    accentSolid: "#059669",
    ...DARK_SURFACE,
  },
  petroleo: {
    id: "petroleo",
    label: "Azul petróleo",
    emoji: "🌊",
    headerGradient: "linear-gradient(135deg,#082f49,#155e75)",
    buttonGradient: "linear-gradient(135deg,#0369a1,#0e7490)",
    accent: "#155e75",
    accentSolid: "#0369a1",
    ...DARK_SURFACE,
  },
  vino: {
    id: "vino",
    label: "Vino tinto",
    emoji: "🍷",
    headerGradient: "linear-gradient(135deg,#4c0519,#9f1239)",
    buttonGradient: "linear-gradient(135deg,#9f1239,#be123c)",
    accent: "#9f1239",
    accentSolid: "#be123c",
    ...DARK_SURFACE,
  },
  indigo: {
    id: "indigo",
    label: "Índigo",
    emoji: "🌌",
    headerGradient: "linear-gradient(135deg,#1e1b4b,#3730a3)",
    buttonGradient: "linear-gradient(135deg,#4338ca,#3730a3)",
    accent: "#3730a3",
    accentSolid: "#4338ca",
    ...DARK_SURFACE,
  },
  claro: {
    id: "claro",
    label: "Claro",
    emoji: "☀️",
    headerGradient: "linear-gradient(135deg,#0369a1,#0e7490)",
    buttonGradient: "linear-gradient(135deg,#0369a1,#0e7490)",
    accent: "#0e7490",
    accentSolid: "#0369a1",
    bg: "#f1f5f9",
    surface: "#ffffff",
    surfaceAlt: "#e2e8f0",
    border: "#cbd5e1",
    text: "#0f172a",
    textMuted: "#475569",
    navPillIdle: "#cbd5e1",
  },
};

export const THEME_ORDER = ["esmeralda", "petroleo", "vino", "indigo", "claro"];

export const DEFAULT_THEME = "petroleo";
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
