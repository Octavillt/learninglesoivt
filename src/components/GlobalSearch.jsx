import { useEffect, useId, useMemo, useRef, useState } from "react";
import { searchTopics } from "../constants/searchIndex";
import { LEVELS } from "../constants/levels";

// Derivado de LEVELS para que un nivel nuevo no quede sin etiqueta en los
// resultados (Básico III se mostraba vacío con el mapa escrito a mano).
const LEVEL_LABELS = Object.fromEntries(LEVELS.map(l => [l.id, l.label]));

export default function GlobalSearch({ onSelect }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const wrapRef = useRef(null);
  const inputRef = useRef(null);
  const listboxId = useId();

  const results = useMemo(() => searchTopics(query), [query]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    function onClickOutside(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  function pick(result) {
    if (!result) return;
    // El término a resaltar en la sección: la keyword de contenido que hizo
    // match, o si el match fue por título, lo que el usuario escribió.
    const term = result.matchedKeyword ?? query.trim();
    onSelect(result.levelId, result.topicId, term);
    setQuery("");
    setOpen(false);
    inputRef.current?.blur();
  }

  function onKeyDown(e) {
    if (!open || results.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex(i => (i + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex(i => (i - 1 + results.length) % results.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      pick(results[activeIndex]);
    } else if (e.key === "Escape") {
      setOpen(false);
      inputRef.current?.blur();
    }
  }

  return (
    <div ref={wrapRef} style={{ position: "relative", width: "100%", maxWidth: "360px", minWidth: 0 }}>
      <div style={{ position: "relative" }}>
        <span aria-hidden="true" style={{
          position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)",
          fontSize: "13px", opacity: 0.8, pointerEvents: "none",
        }}>
          🔎
        </span>
        <input
          ref={inputRef}
          className="search-input search-input--pill"
          type="search"
          role="combobox"
          autoComplete="off"
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
          aria-expanded={open && results.length > 0}
          aria-controls={listboxId}
          aria-autocomplete="list"
          value={query}
          placeholder="Buscar tema o palabra..."
          onChange={e => { setQuery(e.target.value); setOpen(true); }}
          onFocus={() => { if (query.trim()) setOpen(true); }}
          onKeyDown={onKeyDown}
          style={{
            width: "100%", boxSizing: "border-box",
            padding: "7px 10px 7px 28px", borderRadius: "20px",
            border: "1px solid rgba(255,255,255,0.35)",
            background: "rgba(255,255,255,0.12)",
            color: "#fff", outline: "none",
          }}
        />
      </div>

      {open && query.trim() && (
        <div
          id={listboxId}
          role="listbox"
          style={{
            position: "absolute", top: "calc(100% + 6px)", left: 0, right: 0, zIndex: 50,
            background: "#1e293b", border: "1px solid #334155", borderRadius: "12px",
            padding: "6px", maxHeight: "320px", overflowY: "auto",
            boxShadow: "0 8px 24px rgba(0,0,0,0.45)",
          }}
        >
          {results.length === 0 ? (
            <div style={{ padding: "10px", color: "#94a3b8", fontSize: "13px", textAlign: "center" }}>
              Sin resultados para "{query}"
            </div>
          ) : (
            results.map((r, i) => (
              <button
                key={`${r.levelId}-${r.topicId}`}
                role="option"
                aria-selected={i === activeIndex}
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => pick(r)}
                style={{
                  width: "100%", display: "flex", alignItems: "center", gap: "10px",
                  padding: "9px 10px", borderRadius: "8px", border: "none", cursor: "pointer",
                  background: i === activeIndex ? "#334155" : "transparent",
                  color: "#f8fafc", fontSize: "13px", fontWeight: 600, textAlign: "left",
                }}
              >
                <span aria-hidden="true" style={{
                  width: "8px", height: "8px", borderRadius: "50%", flex: "0 0 auto",
                  background: r.color,
                }} />
                <span style={{ flex: 1 }}>
                  {r.label}
                  {r.matchedKeyword && (
                    <span style={{ display: "block", fontWeight: 400, color: "#94a3b8", fontSize: "11px" }}>
                      {r.matchedKeyword}
                    </span>
                  )}
                </span>
                <span style={{ fontSize: "11px", fontWeight: 500, color: "#94a3b8" }}>
                  {LEVEL_LABELS[r.levelId]}
                </span>
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}
