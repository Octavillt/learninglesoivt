import { useState } from "react";
import { THEMES, THEME_ORDER } from "../styles/theme";

export default function ThemePicker({ themeId, onSelect }) {
  const [open, setOpen] = useState(false);
  const current = THEMES[themeId];

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={() => setOpen(o => !o)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label="Cambiar color del tema"
        title="Cambiar color del tema"
        style={{
          display: "inline-flex", alignItems: "center", gap: "5px",
          padding: "4px 8px 4px 4px", borderRadius: "20px",
          border: "1px solid rgba(255,255,255,0.45)",
          background: "rgba(255,255,255,0.12)",
          cursor: "pointer",
        }}
      >
        <span
          aria-hidden="true"
          style={{
            width: "22px", height: "22px", borderRadius: "50%",
            background: current.headerGradient,
            border: "2px solid rgba(255,255,255,0.85)",
            boxShadow: "0 0 6px rgba(0,0,0,0.35)",
            display: "inline-block",
          }}
        />
        <span aria-hidden="true" style={{ color: "#fff", fontSize: "9px" }}>{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <>
          <div
            onClick={() => setOpen(false)}
            style={{ position: "fixed", inset: 0, zIndex: 40 }}
          />
          <div
            role="menu"
            style={{
              position: "absolute", top: "calc(100% + 6px)", right: 0, zIndex: 50,
              background: current.surface, border: `1px solid ${current.border}`, borderRadius: "12px",
              padding: "6px", minWidth: "175px", boxShadow: "0 8px 24px rgba(0,0,0,0.45)",
            }}
          >
            {THEME_ORDER.map(id => {
              const t = THEMES[id];
              const selected = id === themeId;
              return (
                <button
                  key={id}
                  role="menuitemradio"
                  aria-checked={selected}
                  onClick={() => { onSelect(id); setOpen(false); }}
                  style={{
                    width: "100%", display: "flex", alignItems: "center", gap: "10px",
                    padding: "9px 10px", borderRadius: "8px", border: "none", cursor: "pointer",
                    background: selected ? current.surfaceAlt : "transparent",
                    color: current.text, fontSize: "13px", fontWeight: selected ? 700 : 500,
                    textAlign: "left",
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      width: "20px", height: "20px", borderRadius: "50%",
                      background: t.headerGradient, flex: "0 0 auto",
                      border: "1px solid rgba(255,255,255,0.3)",
                    }}
                  />
                  <span style={{ flex: 1 }}>{t.label}</span>
                  {selected && <span style={{ color: "#4ade80" }}>✓</span>}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
