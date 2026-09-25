import TopicHeading from "../../components/TopicHeading";
import RuleBox from "../../components/RuleBox";
import SectionTitle from "../../components/SectionTitle";
import NumberStepper from "./NumberStepper";
import LettersPanel from "./LettersPanel";
import {
  NUMBERS_0_20,
  TEENS,
  NUMBERS_21_29,
  TENS,
  BIG_NUMBERS,
  COMPOUND_EXAMPLES,
  ROOM_NUMBERS,
} from "./data";

const NumberChip = ({ n, word, color, wide }) => (
  <div style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "8px 12px", display: "flex", flexWrap: wide ? "wrap" : "nowrap", justifyContent: "space-between", alignItems: "center", gap: "6px 10px" }}>
    <span style={{ color: color || "#64748b", fontWeight: 800, fontSize: "13px", minWidth: wide ? "auto" : "26px", whiteSpace: "nowrap" }}>{n}</span>
    <span style={{ color: "#e2e8f0", fontWeight: 600, fontSize: "14px", textAlign: "right" }}>
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
      <TopicHeading topicId="numbers" />
      <div style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 Los dos cimientos del inglés hablado: los <strong style={{ color: "#f8fafc" }}>numbers</strong> para contar, dar precios, horas o teléfonos, y las{" "}
        <strong style={{ color: "#f8fafc" }}>letters</strong> para deletrear tu nombre o cualquier palabra que no te entiendan.
      </div>

      <SectionTitle color="#f472b6">🔢 Cardinal Numbers — números para contar</SectionTitle>
      <div style={{ color: "#94a3b8", fontSize: "13px", marginBottom: "10px" }}>
        Los <strong style={{ color: "#e2e8f0" }}>cardinal numbers</strong> son los que usamos para contar (0, 1, 2, 3...). Del 13 al 19 comparten la terminación <strong style={{ color: "#fbbf24" }}>-teen</strong>.
      </div>

      <SectionTitle color="#f472b6">0 – 20</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 150px), 1fr))", gap: "6px", marginBottom: "16px" }}>
        {NUMBERS_0_20.map(([n, word]) => (
          <NumberChip key={n} n={n} word={word} color="#f472b6" />
        ))}
      </div>

      <SectionTitle color="#60a5fa">21 – 29 (decena + unidad, con guion)</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 150px), 1fr))", gap: "6px", marginBottom: "10px" }}>
        {NUMBERS_21_29.map(([n, word]) => (
          <NumberChip key={n} n={n} word={word} color="#60a5fa" />
        ))}
      </div>
      <div style={{ color: "#94a3b8", fontSize: "13px", marginBottom: "16px" }}>
        La misma lógica aplica del 31 al 99: <strong style={{ color: "#e2e8f0" }}>thirty-one, forty-five, ninety-nine…</strong>
      </div>

      <SectionTitle color="#34d399">Decenas (30 – 90)</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 150px), 1fr))", gap: "6px", marginBottom: "16px" }}>
        {TENS.map(([n, word]) => (
          <NumberChip key={n} n={n} word={word} color="#34d399" />
        ))}
      </div>

      <SectionTitle color="#c084fc">100 en adelante</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "6px", marginBottom: "16px" }}>
        {BIG_NUMBERS.map(([n, word]) => (
          <NumberChip key={n} n={n} word={word} color="#c084fc" wide />
        ))}
      </div>

      <RuleBox icon="📐" rule="Números compuestos — hundred + resto" color="#fbbf24">
        <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: 1.7 }}>Aquí usamos la lectura habitual estadounidense, sin and: two hundred fifty-two. En inglés británico es común two hundred and fifty-two; ambas formas son válidas.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "6px" }}>
          {COMPOUND_EXAMPLES.map(([n, word]) => (
            <div key={n} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "8px 12px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
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
            <div style={{ color: "#94a3b8", fontSize: "13px" }}>78 · seventy-eight</div>
          </div>
          <div style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "10px", padding: "10px 18px", textAlign: "center" }}>
            <div style={{ color: "#e2e8f0", fontWeight: 800, fontSize: "18px" }}>79</div>
            <div style={{ color: "#fb923c", fontSize: "13px", fontWeight: 700, marginTop: "2px" }}>seventy-nine</div>
            <div style={{ color: "#94a3b8", fontSize: "11px", marginTop: "2px" }}>🇲🇽 setenta y nueve</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ color: "#94a3b8", fontSize: "12px", fontWeight: 700, marginBottom: "4px" }}>After ➡️</div>
            <div style={{ color: "#94a3b8", fontSize: "13px" }}>80 · eighty</div>
          </div>
        </div>
        <div style={{ color: "#94a3b8", fontSize: "13px", marginTop: "10px", textAlign: "center" }}>
          Ej: el <strong style={{ color: "#e2e8f0" }}>after</strong> de 79 es 80 → <strong style={{ color: "#fb923c" }}>"it's eighty"</strong>
        </div>
      </RuleBox>

      <SectionTitle color="#94a3b8">📞 Cell Numbers / Room Numbers</SectionTitle>
      <div style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "14px 16px", marginBottom: "10px" }}>
        <div style={{ color: "#94a3b8", fontSize: "13px", marginBottom: "10px" }}>
          Para practicar, lee estos teléfonos y habitaciones <strong style={{ color: "#f8fafc" }}>dígito por dígito</strong> (las habitaciones también admiten otras lecturas). El <strong style={{ color: "#f8fafc" }}>0</strong> puede decirse <strong style={{ color: "#fbbf24" }}>"zero" u "oh"</strong> [oʊ].
        </div>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {ROOM_NUMBERS.map((r, i) => (
            <div key={i} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "10px 16px", textAlign: "center" }}>
              <div style={{ color: "#94a3b8", fontSize: "11px", marginBottom: "3px" }}>{r.label}</div>
              <div style={{ color: "#f472b6", fontWeight: 800, fontSize: "18px", letterSpacing: "2px" }}>{r.value}</div>
            </div>
          ))}
        </div>
      </div>

      <SectionTitle color="#f472b6">🕹️ Práctica interactiva</SectionTitle>
      <NumberStepper />

      <LettersPanel />
    </div>
  );
}
