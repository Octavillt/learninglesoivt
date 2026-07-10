export default function Footer() {
  return (
    <footer
      style={{
        padding: "16px 20px",
        textAlign: "center",
        background: "#1e293b",
        borderTop: "1px solid #334155",
        color: "#94a3b8",
        fontSize: "13px",
      }}
    >
      <p style={{ margin: 0 }}>
        Sitio desarrollado por{" "}
        <strong style={{ color: "#f8fafc" }}>© Octavio Villafranco</strong>
        {" "}| Todos los derechos reservados
      </p>
    </footer>
  );
}
