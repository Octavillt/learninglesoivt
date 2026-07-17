export default function Footer({ theme }) {
  return (
    <footer
      style={{
        padding: "16px 20px",
        textAlign: "center",
        background: theme?.surface ?? "#1e293b",
        borderTop: `1px solid ${theme?.border ?? "#334155"}`,
        color: theme?.textMuted ?? "#94a3b8",
        fontSize: "13px",
      }}
    >
      <p style={{ margin: 0 }}>
        Sitio desarrollado por{" "}
        <strong style={{ color: theme?.text ?? "#f8fafc" }}>© Octavio Villafranco</strong>
        {" "}| Todos los derechos reservados
      </p>
    </footer>
  );
}
