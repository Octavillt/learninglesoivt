import { useState } from "react";
import { numberToWords, MAX_NUMBER } from "./numberToWords";

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

const clamp = (n) => Math.min(MAX_NUMBER, Math.max(0, n));

export default function NumberStepper() {
  const [value, setValue] = useState(47);
  const [text, setText] = useState("47");

  const commit = (n) => {
    const clamped = clamp(n);
    setValue(clamped);
    setText(String(clamped));
  };

  const change = (delta) => commit(value + delta);

  const handleTextChange = (e) => {
    const raw = e.target.value.replace(/[^\d]/g, "");
    setText(raw);
    if (raw !== "") commit(Number(raw));
  };

  const handleBlur = () => {
    if (text === "") commit(0);
  };

  const words = numberToWords(value);

  return (
    <div style={{ background: "#1e293b", borderRadius: "14px", padding: "18px", marginBottom: "14px", textAlign: "center" }}>
      <div style={{ color: "#64748b", fontSize: "12px", fontWeight: 700, marginBottom: "10px" }}>
        🔢 Escribe o ajusta el número (0 – {MAX_NUMBER.toLocaleString("en-US")}) y descubre cómo se dice
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "18px", marginBottom: "12px" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
          <StepperButton onClick={() => change(100)}>▲▲</StepperButton>
          <StepperButton onClick={() => change(1)}>▲</StepperButton>
          <input
            type="text"
            inputMode="numeric"
            value={text}
            onChange={handleTextChange}
            onBlur={handleBlur}
            style={{
              color: "#f8fafc", fontWeight: 800, fontSize: "28px", width: "220px",
              background: "transparent", border: "none", borderBottom: "2px solid #334155",
              textAlign: "center", outline: "none", padding: "4px 0",
            }}
          />
          <StepperButton onClick={() => change(-1)}>▼</StepperButton>
          <StepperButton onClick={() => change(-100)}>▼▼</StepperButton>
          <div style={{ color: "#475569", fontSize: "11px", fontWeight: 700 }}>NUMBER</div>
        </div>
      </div>

      <div style={{ background: "#0f172a", borderRadius: "10px", padding: "12px" }}>
        <div style={{ color: "#f8fafc", fontWeight: 700, fontSize: "17px" }}>{words}</div>
      </div>
    </div>
  );
}
