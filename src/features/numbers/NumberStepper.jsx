import { useState } from "react";
import { numberToWords } from "./numberToWords";

const StepperButton = ({ onClick, children }) => (
  <button
    onClick={onClick}
    style={{
      width: "34px", height: "34px", borderRadius: "8px", border: "none",
      background: "#334155", color: "#f8fafc", fontSize: "16px", fontWeight: 700,
      cursor: "pointer", lineHeight: 1,
    }}
  >
    {children}
  </button>
);

export default function NumberStepper() {
  const [value, setValue] = useState(47);

  const change = (delta) => setValue((v) => Math.min(999, Math.max(0, v + delta)));

  const words = numberToWords(value);

  return (
    <div style={{ background: "#1e293b", borderRadius: "14px", padding: "18px", marginBottom: "14px", textAlign: "center" }}>
      <div style={{ color: "#64748b", fontSize: "12px", fontWeight: 700, marginBottom: "10px" }}>
        🔢 Ajusta el número y descubre cómo se dice
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "18px", marginBottom: "12px" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
          <StepperButton onClick={() => change(10)}>▲▲</StepperButton>
          <StepperButton onClick={() => change(1)}>▲</StepperButton>
          <div style={{ color: "#f8fafc", fontWeight: 800, fontSize: "34px", width: "100px" }}>
            {value}
          </div>
          <StepperButton onClick={() => change(-1)}>▼</StepperButton>
          <StepperButton onClick={() => change(-10)}>▼▼</StepperButton>
          <div style={{ color: "#475569", fontSize: "11px", fontWeight: 700 }}>NUMBER</div>
        </div>
      </div>

      <div style={{ background: "#0f172a", borderRadius: "10px", padding: "12px" }}>
        <div style={{ color: "#f8fafc", fontWeight: 700, fontSize: "17px" }}>{words}</div>
      </div>
    </div>
  );
}
