import RuleBox from "../../components/RuleBox";
import SectionTitle from "../../components/SectionTitle";
import FamilyTree from "./FamilyTree";
import { FAMILY_GROUPS, FAMILY_OTHER } from "./data";

export default function FamilySection() {
  return (
    <div>
      <h2 style={{ color: "#fbbf24", marginTop: 0 }}>👪 Family Members</h2>
      <div style={{ background: "#1e293b", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 Los <strong style={{ color: "#f8fafc" }}>Family Members</strong> son los integrantes de la familia. Muchas palabras cambian según el género: <strong style={{ color: "#fbbf24" }}>-o</strong> (masculino) vs <strong style={{ color: "#fbbf24" }}>-a</strong> (femenino) en español, pero en inglés cada una tiene su propia palabra.
      </div>

      <RuleBox icon="📐" rule="Children y Parents — la relación básica" color="#34d399">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginTop: "6px" }}>
          {FAMILY_GROUPS.map((g) => (
            <div key={g.label} style={{ background: "#0f172a", borderRadius: "8px", padding: "12px", textAlign: "center" }}>
              <div style={{ color: g.color, fontWeight: 800, fontSize: "13px", marginBottom: "8px", textTransform: "uppercase" }}>{g.label}</div>
              {g.words.map((w) => (
                <div key={w} style={{ color: "#e2e8f0", fontSize: "13px", padding: "3px 0" }}>{w}</div>
              ))}
            </div>
          ))}
        </div>
      </RuleBox>

      <SectionTitle color="#fbbf24">🌳 Árbol genealógico</SectionTitle>
      <FamilyTree />

      <RuleBox icon="✨" rule="Otras palabras importantes" color="#c084fc">
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "6px" }}>
          {FAMILY_OTHER.map(([es, en]) => (
            <div key={es} style={{ background: "#0f172a", borderRadius: "8px", padding: "8px 14px", textAlign: "center" }}>
              <div style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "13px" }}>{es}</div>
              <div style={{ color: "#c084fc", fontWeight: 800, fontSize: "12px", marginTop: "2px" }}>{en}</div>
            </div>
          ))}
        </div>
        <div style={{ color: "#64748b", fontSize: "13px", marginTop: "10px" }}>
          <strong style={{ color: "#e2e8f0" }}>Godfather / Godmother</strong> (Padrino / Madrina) y <strong style={{ color: "#e2e8f0" }}>Novio / Novia</strong> (Boyfriend / Girlfriend) no son parientes de sangre, pero se consideran parte de la familia.
        </div>
      </RuleBox>
    </div>
  );
}
