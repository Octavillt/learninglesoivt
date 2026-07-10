import RuleBox from "../../components/RuleBox";
import SectionTitle from "../../components/SectionTitle";
import NumberStepper from "./NumberStepper";
import {
  NUMBERS_0_20,
  TEENS,
  NUMBERS_21_29,
  TENS,
  BIG_NUMBERS,
  COMPOUND_EXAMPLES,
  ROOM_NUMBERS,
} from "./data";

const NumberChip = ({ n, word, color }) => (
  <div style={{ background: "#0f172a", borderRadius: "8px", padding: "8px 12px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
    <span style={{ color: color || "#64748b", fontWeight: 800, fontSize: "13px", minWidth: "26px" }}>{n}</span>
    <span style={{ color: "#e2e8f0", fontWeight: 600, fontSize: "14px" }}>
      {TEENS.includes(word) ? (
        <>
          {word.replace(/teen$/, "")}
          <strong style={{ color: "#fbbf24" }}>teen</strong>
        </>
      ) : word}
    </span>
  </div>
);

export default function NumbersSection() {
  return (
    <div>
      <h2 style={{ color: "#f472b6", marginTop: 0 }}>🔢 Cardinal Numbers</h2>
      <div style={{ background: "#1e293b", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 Los <strong style={{ color: "#f8fafc" }}>cardinal numbers</strong> son los números que usamos para contar (0, 1, 2, 3...). Del 13 al 19 comparten la terminación <strong style={{ color: "#fbbf24" }}>-teen</strong>.
      </div>

      <SectionTitle color="#f472b6">0 – 20</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "6px", marginBottom: "16px" }}>
        {NUMBERS_0_20.map(([n, word]) => (
          <NumberChip key={n} n={n} word={word} color="#f472b6" />
        ))}
      </div>

      <SectionTitle color="#60a5fa">21 – 29 (decena + unidad, con guion)</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "6px", marginBottom: "10px" }}>
        {NUMBERS_21_29.map(([n, word]) => (
          <NumberChip key={n} n={n} word={word} color="#60a5fa" />
        ))}
      </div>
      <div style={{ color: "#64748b", fontSize: "13px", marginBottom: "16px" }}>
        La misma lógica aplica del 31 al 99: <strong style={{ color: "#e2e8f0" }}>thirty-one, forty-five, ninety-nine…</strong>
      </div>

      <SectionTitle color="#34d399">Decenas (30 – 90)</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "6px", marginBottom: "16px" }}>
        {TENS.map(([n, word]) => (
          <NumberChip key={n} n={n} word={word} color="#34d399" />
        ))}
      </div>

      <SectionTitle color="#c084fc">100 en adelante</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "6px", marginBottom: "16px" }}>
        {BIG_NUMBERS.map(([n, word]) => (
          <NumberChip key={n} n={n} word={word} color="#c084fc" />
        ))}
      </div>

      <RuleBox icon="📐" rule="Números compuestos — hundred + resto (sin 'and')" color="#fbbf24">
        <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "6px" }}>
          {COMPOUND_EXAMPLES.map(([n, word]) => (
            <div key={n} style={{ background: "#0f172a", borderRadius: "8px", padding: "8px 12px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
              <span style={{ color: "#fbbf24", fontWeight: 800, fontSize: "13px" }}>{n}</span>
              <span style={{ color: "#e2e8f0", fontWeight: 600, fontSize: "14px" }}>{word}</span>
            </div>
          ))}
        </div>
      </RuleBox>

      <RuleBox icon="🔁" rule="Before / After — el número anterior y el siguiente" color="#fb923c">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "18px", marginTop: "6px", flexWrap: "wrap" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ color: "#94a3b8", fontSize: "12px", fontWeight: 700, marginBottom: "4px" }}>⬅️ Before</div>
            <div style={{ color: "#64748b", fontSize: "13px" }}>número anterior</div>
          </div>
          <div style={{ background: "#0f172a", borderRadius: "10px", padding: "10px 18px", textAlign: "center" }}>
            <div style={{ color: "#e2e8f0", fontWeight: 800, fontSize: "18px" }}>79</div>
            <div style={{ color: "#fb923c", fontSize: "13px", fontWeight: 700, marginTop: "2px" }}>→ it's eighty</div>
            <div style={{ color: "#64748b", fontSize: "11px", marginTop: "2px" }}>🇲🇽 es ochenta</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ color: "#94a3b8", fontSize: "12px", fontWeight: 700, marginBottom: "4px" }}>After ➡️</div>
            <div style={{ color: "#64748b", fontSize: "13px" }}>número siguiente</div>
          </div>
        </div>
        <div style={{ color: "#64748b", fontSize: "13px", marginTop: "10px", textAlign: "center" }}>
          Ej: el <strong style={{ color: "#e2e8f0" }}>after</strong> de 79 es 80 → <strong style={{ color: "#fb923c" }}>"it's eighty"</strong>
        </div>
      </RuleBox>

      <SectionTitle color="#94a3b8">📞 Cell Numbers / Room Numbers</SectionTitle>
      <div style={{ background: "#1e293b", borderRadius: "10px", padding: "14px 16px", marginBottom: "10px" }}>
        <div style={{ color: "#94a3b8", fontSize: "13px", marginBottom: "10px" }}>
          Los números de teléfono, celular o habitación se dicen <strong style={{ color: "#f8fafc" }}>dígito por dígito</strong> (no como cantidad completa). El <strong style={{ color: "#f8fafc" }}>0</strong> se dice <strong style={{ color: "#fbbf24" }}>"oh"</strong> [oʊ].
        </div>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {ROOM_NUMBERS.map((r, i) => (
            <div key={i} style={{ background: "#0f172a", borderRadius: "8px", padding: "10px 16px", textAlign: "center" }}>
              <div style={{ color: "#475569", fontSize: "11px", marginBottom: "3px" }}>{r.label}</div>
              <div style={{ color: "#f472b6", fontWeight: 800, fontSize: "18px", letterSpacing: "2px" }}>{r.value}</div>
            </div>
          ))}
        </div>
      </div>

      <SectionTitle color="#f472b6">🕹️ Práctica interactiva</SectionTitle>
      <NumberStepper />
    </div>
  );
}
