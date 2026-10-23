import { useEffect, useId, useMemo, useRef, useState } from "react";
import { searchTopics } from "../constants/searchIndex";
import { LEVELS } from "../constants/levels";
import { searchVerbs } from "../features/verbFinder/verbSearch";
import { C } from "../styles/colors";

// Derivado de LEVELS para que un nivel nuevo no quede sin etiqueta en los
// resultados (Básico III se mostraba vacío con el mapa escrito a mano).
const LEVEL_LABELS = Object.fromEntries(LEVELS.map(l => [l.id, l.label]));

export default function GlobalSearch({ onSelect, now }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const wrapRef = useRef(null);
  const inputRef = useRef(null);
  const listboxId = useId();

  const results = useMemo(() => searchTopics(query, now), [query, now]);
  // Con 2+ caracteres, las fichas de verbo van arriba de los temas y comparten
  // el mismo índice de teclado (flechas y Enter).
  const verbHits = useMemo(
    () => (query.trim().length >= 2 ? searchVerbs(query, { limit: 4 }) : []),
    [query],
  );
  const items = useMemo(() => [
    ...verbHits.map(hit => ({ type: "verb", hit })),
    ...results.map(result => ({ type: "topic", result })),
  ], [verbHits, results]);

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

  function pick(item) {
    if (!item) return;
    if (item.type === "verb") {
      onSelect("verbos", "verbFinder", item.hit.verb.base);
    } else {
      // El término a resaltar en la sección: la keyword de contenido que hizo
      // match, o si el match fue por título, lo que el usuario escribió.
      const term = item.result.matchedKeyword ?? query.trim();
      onSelect(item.result.levelId, item.result.topicId, term);
    }
    setQuery("");
    setOpen(false);
    inputRef.current?.blur();
  }

  function onKeyDown(e) {
    if (!open || items.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex(i => (i + 1) % items.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex(i => (i - 1 + items.length) % items.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      pick(items[activeIndex]);
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
          aria-expanded={open && items.length > 0}
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
            background: "var(--surface, #1e293b)", border: "1px solid #334155", borderRadius: "12px",
            padding: "6px", maxHeight: "320px", overflowY: "auto",
            boxShadow: "0 8px 24px rgba(0,0,0,0.45)",
          }}
        >
          {items.length === 0 ? (
            <div style={{ padding: "10px", color: "#94a3b8", fontSize: "13px", textAlign: "center" }}>
              Sin resultados para "{query}"
            </div>
          ) : (
            items.map((item, i) => item.type === "verb" ? (
              <button
                key={`verb-${item.hit.verb.base}`}
                type="button"
                role="option"
                aria-selected={i === activeIndex}
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => pick(item)}
                style={{
                  width: "100%", display: "flex", alignItems: "center", gap: "10px",
                  padding: "9px 10px", borderRadius: "8px", border: "none", cursor: "pointer",
                  background: i === activeIndex ? "#334155" : "transparent",
                  color: "#f8fafc", fontSize: "13px", fontWeight: 600, textAlign: "left",
                }}
              >
                <span aria-hidden="true" style={{ flex: "0 0 auto" }}>📒</span>
                <span style={{ flex: 1, minWidth: 0 }}>
                  <span lang="en" style={{ display: "block", overflowWrap: "anywhere" }}>
                    <span style={{ color: C.verb.fg }}>{item.hit.verb.base}</span>
                    {" · "}
                    <span style={{ color: C.past.fg }}>{item.hit.verb.past.join(" / ")}</span>
                    {" · "}
                    <span style={{ color: C.participle.fg }}>{item.hit.verb.participle.join(" / ")}</span>
                  </span>
                  <span style={{ display: "block", fontWeight: 400, color: "var(--text-muted, #94a3b8)", fontSize: "11px" }}>
                    {item.hit.verb.es}
                  </span>
                </span>
                <span style={{ fontSize: "11px", fontWeight: 500, color: "#94a3b8", flex: "0 0 auto" }}>
                  Verbos
                </span>
              </button>
            ) : (
              <button
                key={`${item.result.levelId}-${item.result.topicId}`}
                role="option"
                aria-selected={i === activeIndex}
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => pick(item)}
                style={{
                  width: "100%", display: "flex", alignItems: "center", gap: "10px",
                  padding: "9px 10px", borderRadius: "8px", border: "none", cursor: "pointer",
                  background: i === activeIndex ? "#334155" : "transparent",
                  color: "#f8fafc", fontSize: "13px", fontWeight: 600, textAlign: "left",
                }}
              >
                <span aria-hidden="true" style={{
                  width: "8px", height: "8px", borderRadius: "50%", flex: "0 0 auto",
                  background: item.result.color,
                }} />
                <span style={{ flex: 1 }}>
                  {item.result.label}
                  {item.result.matchedKeyword && (
                    <span style={{ display: "block", fontWeight: 400, color: "#94a3b8", fontSize: "11px" }}>
                      {item.result.matchedKeyword}
                    </span>
                  )}
                </span>
                <span style={{ fontSize: "11px", fontWeight: 500, color: "#94a3b8" }}>
                  {LEVEL_LABELS[item.result.levelId]}
                </span>
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}
