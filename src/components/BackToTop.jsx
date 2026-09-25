import { useEffect, useState } from "react";
import { floatingArrowStyle } from "./floatingArrowStyle";

// A partir de cuántos píxeles de scroll aparece la flecha. Un umbral bajo la
// haría parpadear con desplazamientos mínimos dentro de la barra de temas.
const SHOW_AFTER = 320;

export default function BackToTop({ theme }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function update() {
      setVisible(window.scrollY > SHOW_AFTER);
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Volver arriba"
      title="Volver arriba"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      style={floatingArrowStyle(theme, visible)}
    >
      <span aria-hidden="true">↑</span>
    </button>
  );
}
