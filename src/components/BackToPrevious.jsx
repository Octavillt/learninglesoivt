// Flecha flotante para volver al tema visitado justo antes, sin tener que
// buscarlo otra vez en la barra de temas (útil sobre todo en móvil, donde la
// barra hay que desplazarla). Vive abajo a la izquierda para no chocar con
// la flecha de "volver arriba", que está abajo a la derecha.
export default function BackToPrevious({ theme, label, onClick }) {
  if (!label) return null;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Volver a ${label}`}
      title={`Volver a ${label}`}
      style={{
        position: "fixed",
        left: "max(18px, env(safe-area-inset-left))",
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
        transition: "opacity 0.2s ease, transform 0.2s ease",
      }}
    >
      <span aria-hidden="true">←</span>
    </button>
  );
}
