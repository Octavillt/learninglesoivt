// Estilo común de las flechas flotantes de scroll (subir / bajar). Viven
// apiladas en .scroll-arrows (abajo a la derecha): la que no aplica se
// colapsa a alto 0 para que la otra quede siempre pegada al borde inferior.
export function floatingArrowStyle(theme, visible) {
  return {
    width: "46px",
    height: visible ? "46px" : "0px",
    margin: visible ? "5px 0" : "0",
    borderRadius: "50%",
    border: visible ? `1px solid ${theme?.border ?? "#334155"}` : "0",
    background: theme?.buttonGradient ?? "linear-gradient(135deg,#334155,#475569)",
    color: "#fff",
    fontSize: "20px",
    lineHeight: 1,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    boxShadow: visible ? "0 6px 18px rgba(0,0,0,0.45)" : "none",
    opacity: visible ? 1 : 0,
    transform: visible ? "scale(1)" : "scale(0.8)",
    pointerEvents: visible ? "auto" : "none",
    transition: "opacity 0.2s ease, transform 0.2s ease, height 0.2s ease, margin 0.2s ease",
  };
}
