import { IPA_GROUPS } from "../features/irregularVerbs/data";

// Un grupo fonético del IPA: símbolo + palabra de ejemplo.
function IpaGroup({ icon, title, color, rows }) {
  return (
    <div style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 14px", borderLeft: `3px solid ${color}` }}>
      <div style={{ color, fontWeight: 800, fontSize: "13px", marginBottom: "10px" }}>
        {icon} {title}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "6px" }}>
        {rows.map(([symbol, example]) => (
          <div key={symbol} style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <span style={{
              color, background: `${color}22`, fontWeight: 800,
              padding: "2px 8px", borderRadius: "6px", fontSize: "14px", minWidth: "22px", textAlign: "center",
            }}>
              {symbol}
            </span>
            <span style={{ color: "#e2e8f0", fontSize: "13px" }}>{example}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Cuadrícula completa de símbolos de pronunciación, compartida por la lección
// de verbos irregulares y el módulo de consulta de verbos.
export default function IpaGroups() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "10px" }}>
      {IPA_GROUPS.map(g => (
        <IpaGroup key={g.title} icon={g.icon} title={g.title} color={g.color} rows={g.rows} />
      ))}
    </div>
  );
}
