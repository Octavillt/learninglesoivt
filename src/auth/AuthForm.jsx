import { useState } from "react";
import { useAuth } from "./AuthContext";
import { THEME } from "../styles/theme";

const inputStyle = {
  width: "100%", padding: "11px 14px", borderRadius: "10px", border: "2px solid #334155",
  background: "#0f172a", color: "#fff", fontSize: "14px", boxSizing: "border-box",
  marginBottom: "10px", outline: "none",
};

export default function AuthForm({ onSuccess }) {
  const { login, register } = useAuth();
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);
  const [busy, setBusy] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setBusy(true);
    try {
      if (mode === "login") {
        await login({ email, password });
      } else {
        await register({ email, password, displayName });
      }
      onSuccess?.();
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <h2 style={{ margin: "0 0 16px", color: "#fff", fontSize: "20px" }}>
        {mode === "login" ? "🔑 Iniciar sesión" : "✨ Crear cuenta"}
      </h2>

      <form onSubmit={handleSubmit}>
        {mode === "register" && (
          <input
            placeholder="Tu nombre"
            value={displayName}
            onChange={e => setDisplayName(e.target.value)}
            required
            style={inputStyle}
          />
        )}
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          minLength={8}
          style={inputStyle}
        />

        {error && (
          <div style={{ color: "#f87171", fontSize: "13px", marginBottom: "10px" }}>{error}</div>
        )}

        <button
          type="submit"
          disabled={busy}
          style={{ width: "100%", padding: "13px", borderRadius: "10px", border: "none", background: THEME.buttonGradient, color: "#fff", fontSize: "15px", fontWeight: 700, cursor: busy ? "not-allowed" : "pointer", opacity: busy ? 0.7 : 1 }}
        >
          {busy ? "Un momento..." : mode === "login" ? "Iniciar sesión" : "Crear cuenta"}
        </button>
      </form>

      <button
        onClick={() => { setMode(m => m === "login" ? "register" : "login"); setError(null); }}
        style={{ width: "100%", marginTop: "12px", padding: "8px", background: "none", border: "none", color: "#94a3b8", fontSize: "13px", cursor: "pointer" }}
      >
        {mode === "login" ? "¿No tienes cuenta? Regístrate" : "¿Ya tienes cuenta? Inicia sesión"}
      </button>
    </>
  );
}
