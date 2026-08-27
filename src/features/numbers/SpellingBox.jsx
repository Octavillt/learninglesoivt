import { useMemo, useState } from "react";
import { spellWord } from "./spellWord";

export default function SpellingBox() {
  const [word, setWord] = useState("Hello");
  const spelled = useMemo(() => spellWord(word), [word]);

  return (
    <div style={{ background: "#1e293b", borderRadius: "14px", padding: "18px", marginBottom: "14px", textAlign: "center" }}>
      <label htmlFor="spelling-word" style={{ display: "block", color: "#64748b", fontSize: "12px", fontWeight: 700, marginBottom: "10px" }}>
        🔤 Escribe una palabra o tu nombre y mira cómo se deletrea en inglés
      </label>

      <input
        id="spelling-word"
        className="search-input"
        type="text"
        autoComplete="off"
        autoCapitalize="none"
        autoCorrect="off"
        spellCheck={false}
        value={word}
        onChange={e => setWord(e.target.value)}
        placeholder="Hello"
        style={{
          color: "#f8fafc", fontWeight: 800, width: "100%", maxWidth: "260px",
          background: "transparent", border: "none", borderBottom: "2px solid #334155",
          textAlign: "center", outline: "none", padding: "4px 0", marginBottom: "14px",
        }}
      />

      {spelled.length === 0 ? (
        <div style={{ color: "#475569", fontSize: "13px" }}>Escribe letras de la A a la Z 🙂</div>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", justifyContent: "center" }}>
          {spelled.map(({ letter, say }, i) => (
            <div key={`${letter}-${i}`} style={{ background: "#0f172a", borderRadius: "8px", padding: "7px 10px", minWidth: "48px" }}>
              <div style={{ color: "#f472b6", fontWeight: 800, fontSize: "16px" }}>{letter}</div>
              <div style={{ color: "#94a3b8", fontSize: "11px" }}>{say}</div>
            </div>
          ))}
        </div>
      )}

      <div style={{ color: "#64748b", fontSize: "12px", marginTop: "12px" }}>
        Se dicen una por una, separadas por un pequeño silencio.
      </div>
    </div>
  );
}
