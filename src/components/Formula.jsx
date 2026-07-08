import Token from "./Token";

export default function Formula({ label, parts, color, example }) {
  return (
    <div style={{
      background: "#0f172a",
      border: `1px solid ${color || "#334155"}`,
      borderRadius: "10px", padding: "14px 16px", marginBottom: "10px",
    }}>
      {label && (
        <div style={{
          color: color || "#94a3b8", fontWeight: 700, fontSize: "12px",
          marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.5px",
        }}>
          {label}
        </div>
      )}
      <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "6px", lineHeight: 2 }}>
        {parts.map((p, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
            {i > 0 && <span style={{ color: "#475569", fontWeight: 700 }}>+</span>}
            {p.r
              ? <Token t={p.t} r={p.r} />
              : <span style={{ color: p.color || "#f8fafc", fontWeight: 700, fontSize: "15px" }}>{p.t}</span>
            }
          </span>
        ))}
      </div>
      {example && (
        <div style={{
          marginTop: "8px", paddingTop: "8px", borderTop: "1px solid #1e293b",
          display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap", lineHeight: 2,
        }}>
          <span style={{ color: "#475569", fontSize: "12px", fontWeight: 700 }}>Ej:</span>
          {example.map((p, i) => (
            <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              {i > 0 && <span style={{ color: "#475569" }}>+</span>}
              {p.r
                ? <Token t={p.t} r={p.r} />
                : <span style={{ color: "#94a3b8", fontSize: "14px" }}>{p.t}</span>
              }
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
