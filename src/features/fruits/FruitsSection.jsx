import ExampleCard from "../../components/ExampleCard";
import SectionTitle from "../../components/SectionTitle";
import { FRUITS, FRUIT_SENTENCES } from "./data";

export default function FruitsSection() {
  return (
    <div>
      <h2 style={{ color: "#f97316", marginTop: 0 }}>🍎 Fruits — Las Frutas</h2>
      <div style={{ background: "#1e293b", borderRadius: "10px", padding: "14px 16px", marginBottom: "18px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 Aprende el nombre de cada fruta en inglés y en español. Toca cada tarjeta para practicar.
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
        gap: "10px",
        marginBottom: "28px",
      }}>
        {FRUITS.map(fruit => (
          <FruitCard key={fruit.name} fruit={fruit} />
        ))}
      </div>

      <SectionTitle color="#f97316">📖 Frutas en oraciones</SectionTitle>
      {FRUIT_SENTENCES.map((ex, i) => <ExampleCard key={i} pts={ex.pts} esp={ex.esp} />)}

      <SectionTitle color="#f97316">🔤 A / AN con frutas</SectionTitle>
      <div style={{ background: "#1e293b", borderRadius: "10px", padding: "14px 16px", marginBottom: "8px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        Recuerda: usa <strong style={{ color: "#fbbf24" }}>A</strong> antes de consonante y <strong style={{ color: "#34d399" }}>AN</strong> antes de vocal.
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
        <div style={{ background: "#1e293b", borderRadius: "10px", padding: "14px" }}>
          <div style={{ color: "#fbbf24", fontWeight: 800, fontSize: "15px", marginBottom: "10px" }}>A + consonante</div>
          {["a banana 🍌","a mango 🥭","a pear 🍐","a grape 🍇","a coconut 🥥","a watermelon 🍉"].map(ex => (
            <div key={ex} style={{ color: "#e2e8f0", fontSize: "13px", padding: "4px 0", borderBottom: "1px solid #334155" }}>{ex}</div>
          ))}
        </div>
        <div style={{ background: "#1e293b", borderRadius: "10px", padding: "14px" }}>
          <div style={{ color: "#34d399", fontWeight: 800, fontSize: "15px", marginBottom: "10px" }}>AN + vocal</div>
          {["an apple 🍎","an orange 🍊","an avocado 🥑"].map(ex => (
            <div key={ex} style={{ color: "#e2e8f0", fontSize: "13px", padding: "4px 0", borderBottom: "1px solid #334155" }}>{ex}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FruitCard({ fruit }) {
  return (
    <div style={{
      background: "#1e293b",
      borderRadius: "14px",
      padding: "18px 10px 14px",
      textAlign: "center",
      borderBottom: `3px solid ${fruit.color}`,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "8px",
      transition: "transform 0.15s",
      cursor: "default",
    }}
      onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
      onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
    >
      <span style={{ fontSize: "52px", lineHeight: 1 }}>{fruit.emoji}</span>
      <span style={{ color: fruit.color, fontWeight: 800, fontSize: "14px" }}>{fruit.name}</span>
      <span style={{ color: "#64748b", fontSize: "12px" }}>{fruit.esp}</span>
    </div>
  );
}
