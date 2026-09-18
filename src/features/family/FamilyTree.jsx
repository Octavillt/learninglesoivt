import { FAMILY_TREE } from "./data";

const MemberCard = ({ es, en, color, big }) => (
  <div style={{
    background: "#0f172a", border: `1px solid ${color}55`, borderRadius: "10px",
    padding: big ? "10px 14px" : "8px 12px", textAlign: "center", minWidth: big ? "110px" : "96px",
  }}>
    <div style={{ color: "#e2e8f0", fontWeight: 700, fontSize: big ? "14px" : "12px" }}>{es}</div>
    <div style={{ color, fontWeight: 800, fontSize: big ? "13px" : "11px", marginTop: "2px" }}>{en}</div>
  </div>
);

const Connector = () => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <div style={{ width: "2px", height: "16px", background: "#334155" }} />
  </div>
);

export default function FamilyTree() {
  return (
    <div style={{ background: "#1e293b", borderRadius: "14px", padding: "18px 12px", marginBottom: "14px", overflowX: "auto" }}>
      <div style={{ color: "#94a3b8", fontSize: "12px", fontWeight: 700, textAlign: "center", marginBottom: "14px" }}>
        🌳 Árbol genealógico — de arriba (mayores) a abajo (menores)
      </div>
      <div style={{ minWidth: "640px" }}>
        {FAMILY_TREE.map((level, i) => (
          <div key={level.gen}>
            {i > 0 && <Connector />}
            <div style={{
              textAlign: "center", color: level.color, fontWeight: 800, fontSize: "12px",
              textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "8px",
            }}>
              {level.gen}
            </div>
            <div style={{
              display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "8px",
              marginBottom: "6px",
              ...(level.highlight ? {
                background: "#3d2000", borderRadius: "12px", padding: "12px 8px", border: "1px dashed #fbbf2455",
              } : {}),
            }}>
              {level.members.map(([es, en]) => (
                <MemberCard key={es} es={es} en={en} color={level.color} big={level.highlight} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
