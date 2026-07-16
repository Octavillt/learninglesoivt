import { useState } from "react";
import { THEMES, loadThemeId, saveThemeId } from "./theme";

export function useTheme() {
  const [themeId, setThemeId] = useState(loadThemeId);

  function selectTheme(id) {
    if (!THEMES[id]) return;
    setThemeId(id);
    saveThemeId(id);
  }

  return { theme: THEMES[themeId], themeId, selectTheme };
}
