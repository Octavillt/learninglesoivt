import { C, LABELS } from "../styles/colors";

export default function Legend({ roles }) {
  return (
    <div style={{
      display: "flex", flexWrap: "wrap", gap: "5px",
      marginBottom: "14px", padding: "10px 14px",
      background: "#0f172a", borderRadius: "10px",
      border: "1px solid #1e293b",
    }}>
      <span style={{ color: "#475569", fontSize: "11px", fontWeight: 700, alignSelf: "center", marginRight: "4px" }}>
        COLORES
      </span>
      {roles.map(r => (
        <span key={r} style={{
          display: "inline-flex", alignItems: "center", gap: "4px",
          background: C[r].bg, border: `1px solid ${C[r].fg}55`,
          borderRadius: "20px", padding: "3px 9px",
        }}>
          <span style={{ width: "9px", height: "9px", borderRadius: "2px", background: C[r].fg, flexShrink: 0 }} />
          <span style={{ color: C[r].fg, fontSize: "11px", fontWeight: 700 }}>{LABELS[r]}</span>
        </span>
      ))}
    </div>
  );
}
