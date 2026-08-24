import { useEffect, useState } from "react";

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
      style={{
        position: "fixed",
        right: "max(18px, env(safe-area-inset-right))",
        bottom: "calc(18px + env(safe-area-inset-bottom))",
        zIndex: 60,
        width: "46px",
        height: "46px",
        borderRadius: "50%",
        border: `1px solid ${theme?.border ?? "#334155"}`,
        background: theme?.buttonGradient ?? "linear-gradient(135deg,#334155,#475569)",
        color: "#fff",
        fontSize: "20px",
        lineHeight: 1,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 6px 18px rgba(0,0,0,0.45)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(12px) scale(0.8)",
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.2s ease, transform 0.2s ease",
      }}
    >
      <span aria-hidden="true">↑</span>
    </button>
  );
}
