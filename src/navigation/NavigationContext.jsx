import { createContext, useContext } from "react";

// Permite que cualquier sección salte a otro tema (incluso de otro nivel)
// sin tener que pasar props manualmente por todo el árbol. App.jsx provee
// el valor real; goTo por defecto no hace nada si algo se renderiza fuera
// del Provider (no debería pasar, pero evita un crash).
export const NavigationContext = createContext({ goTo: () => {} });

export function useNavigation() {
  return useContext(NavigationContext);
}
