import AuthForm from "./AuthForm";
import { THEME } from "../styles/theme";

export default function LoginGate() {
  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", minHeight: "100vh", background: "#0f172a", color: "#f8fafc", display: "flex", flexDirection: "column" }}>
      <div style={{ background: THEME.headerGradient, padding: "18px 20px", textAlign: "center" }}>
        <h1 style={{ margin: 0, fontSize: "22px", fontWeight: 800 }}>🎓 English</h1>
        <p style={{ margin: "5px 0 0", opacity: 0.75, fontSize: "13px" }}>Inicia sesión para acceder al contenido</p>
      </div>

      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
        <div style={{ background: "#1e293b", borderRadius: "16px", padding: "24px", width: "100%", maxWidth: "360px" }}>
          <AuthForm />
        </div>
      </div>
    </div>
  );
}
