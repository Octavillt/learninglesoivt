import { useEffect, useState } from "react";
import { floatingArrowStyle } from "./floatingArrowStyle";

// Distancia al final de la página a partir de la cual la flecha se oculta:
// cerca del pie ya no aporta y solo taparía el contenido.
const HIDE_WITHIN = 320;

function remainingScroll() {
  const doc = document.documentElement;
  return doc.scrollHeight - (window.scrollY + window.innerHeight);
}

export default function BackToBottom({ theme }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function update() {
      setVisible(remainingScroll() > HIDE_WITHIN);
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    // Al abrir otra lección el alto de la página cambia sin que haya scroll.
    const observer = typeof ResizeObserver === "function" ? new ResizeObserver(update) : null;
    observer?.observe(document.body);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      observer?.disconnect();
    };
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" })}
      aria-label="Ir al final"
      title="Ir al final"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      style={floatingArrowStyle(theme, visible)}
    >
      <span aria-hidden="true">↓</span>
    </button>
  );
}
