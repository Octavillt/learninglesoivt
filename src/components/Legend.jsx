import { C, LABELS } from "../styles/colors";

const ROW_LABEL = {
  color: "var(--text-muted, #94a3b8)",
  fontSize: "11px",
  fontWeight: 700,
  letterSpacing: "0.6px",
  alignSelf: "center",
  marginRight: "4px",
};

export default function Legend({ roles, symbols }) {
  return (
    <div style={{
      display: "flex", flexWrap: "wrap", gap: "5px",
      marginBottom: "14px", padding: "10px 14px",
      background: "var(--surface-deep, #0f172a)", borderRadius: "12px",
      border: "1px solid var(--border, #1e293b)",
    }}>
      <span style={ROW_LABEL}>
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
      {symbols?.length > 0 && (
        <div style={{
          display: "flex", flexWrap: "wrap", gap: "5px", alignItems: "center",
          flexBasis: "100%", minWidth: 0,
        }}>
          <span style={ROW_LABEL}>
            SÍMBOLOS
          </span>
          {symbols.map(symbol => (
            <span key={`${symbol.icon} ${symbol.label}`} style={{
              display: "inline-flex", alignItems: "center", gap: "4px",
              maxWidth: "100%", minWidth: 0,
              background: "color-mix(in srgb, var(--highlight, #93c5fd) 18%, var(--surface-deep, #0f172a))",
              border: "1px solid color-mix(in srgb, var(--highlight, #93c5fd) 33%, transparent)",
              borderRadius: "20px", padding: "3px 9px",
            }}>
              <span style={{ color: "var(--highlight, #93c5fd)", fontSize: "11px", fontWeight: 700, flexShrink: 0 }}>{symbol.icon}</span>
              <span style={{ color: "var(--highlight, #93c5fd)", fontSize: "11px", fontWeight: 700 }}>{symbol.label}</span>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
