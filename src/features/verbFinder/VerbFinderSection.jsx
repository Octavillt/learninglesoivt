import { memo, useEffect, useMemo, useState } from "react";
import FilterableList from "../../components/FilterableList";
import IpaGroups from "../../components/IpaGroups";
import Legend from "../../components/Legend";
import RelatedTopic from "../../components/RelatedTopic";
import Token from "../../components/Token";
import { TOPIC_BY_ID } from "../../constants/topics";
import { C } from "../../styles/colors";
import { ED_PRONUNCIATION, REGULAR_RULES } from "../simplePast/data";
import { VERB_BANK } from "./data";
import { PATTERNS, PATTERN_BY_ID, lessonsFor, searchVerbs, verbPattern } from "./verbSearch";
import "./verbFinder.css";

const FAVORITES_KEY = "learningles.favoriteVerbs";
const BASES = new Set(VERB_BANK.map(verb => verb.base));
const LETTERS = Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index));
const TOPIC = TOPIC_BY_ID.verbFinder;

const HIDE_OPTIONS = [
  { id: "none", label: "Nada" },
  { id: "past", label: "Pasado" },
  { id: "participle", label: "Participio" },
  { id: "es", label: "Español" },
];

const KIND_OPTIONS = [
  { id: "all", label: "Todos" },
  { id: "irregular", label: "Irregulares" },
  { id: "regular", label: "Regulares" },
  { id: "favorites", label: "★ Mis verbos" },
];

function loadFavorites() {
  try {
    const saved = localStorage.getItem(FAVORITES_KEY);
    const parsed = saved ? JSON.parse(saved) : [];
    return Array.isArray(parsed) ? parsed.filter(base => BASES.has(base)) : [];
  } catch {
    // localStorage no disponible: la sesión sigue, solo que no recuerda favoritos
    return [];
  }
}

function saveFavorites(bases) {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(bases));
  } catch {
    // Si no se puede persistir, los favoritos viven igual en memoria
  }
}

function exactBase(term) {
  if (!term) return null;
  const base = term.trim().toLowerCase();
  return BASES.has(base) ? base : null;
}

function countLabel(count, rawQuery) {
  if (count === 0) return "Sin resultados";
  const nouns = count === 1 ? "1 verbo" : `${count} verbos`;
  const q = rawQuery.trim();
  return q ? `${nouns} para «${q}»` : nouns;
}

function groupByLetter(items) {
  const groups = [];
  for (const item of items) {
    const letter = item.verb.base[0].toUpperCase();
    const current = groups[groups.length - 1];
    if (current?.letter === letter) current.items.push(item);
    else groups.push({ letter, items: [item] });
  }
  return groups;
}

function MatchHint({ verb, matchedForm, matchedField }) {
  if (matchedField === "past") {
    return (
      <p className="vf-hint">
        <span lang="en">{matchedForm}</span> es el pasado de <span lang="en">{verb.base}</span>
      </p>
    );
  }
  if (matchedField === "participle") {
    return (
      <p className="vf-hint">
        <span lang="en">{matchedForm}</span> es el participio de <span lang="en">{verb.base}</span>
      </p>
    );
  }
  if (matchedField === "es") {
    return (
      <p className="vf-hint">
        <span lang="es">{matchedForm}</span> → <span lang="en">{verb.base}</span>
      </p>
    );
  }
  if (matchedField === "esPast") {
    return (
      <p className="vf-hint">
        <span lang="es">{matchedForm}</span>
        {" → "}
        <span lang="en">{verb.past[0]}</span>
        {" (pasado de "}
        <span lang="en">{verb.base}</span>
        )
      </p>
    );
  }
  return null;
}

function PracticeCell({ hidden, label, base, onReveal, children }) {
  if (!hidden) return children;
  return (
    <button type="button" className="vf-reveal" aria-label={`Mostrar ${label} de ${base}`} onClick={onReveal}>
      • • •
    </button>
  );
}

function VerbCard({
  verb, matchedForm, matchedField, hide, revealed, onReveal,
  open, onToggle, favorite, onFavorite,
}) {
  const moreId = `vf-more-${verb.base.replaceAll(" ", "-")}`;
  const pattern = PATTERN_BY_ID[verbPattern(verb)];
  const lessons = open ? lessonsFor(verb) : [];
  const pastHidden = hide === "past" && !revealed.has(`${verb.base}:past`);
  const partHidden = hide === "participle" && !revealed.has(`${verb.base}:participle`);
  const esHidden = hide === "es" && !revealed.has(`${verb.base}:es`);
  const esPastHidden = hide === "es" && !revealed.has(`${verb.base}:esPast`);

  return (
    <article className="vf-card" data-open={open ? "true" : "false"} aria-label={verb.base}>
      <div className="vf-card-row">
        <div className="vf-identity">
          <div className="vf-base">
            <Token t={verb.base} r="verb" />
            {verb.note && (
              <button
                type="button"
                className="vf-note"
                aria-label={`Ver la nota de ${verb.base}`}
                aria-expanded={open}
                aria-controls={moreId}
                title="Tiene una nota: tócalo para leerla"
                onClick={onToggle}
              >
                ⓘ
              </button>
            )}
          </div>
          <PracticeCell
            hidden={esHidden}
            label="significado"
            base={verb.base}
            onReveal={() => onReveal(`${verb.base}:es`)}
          >
            <p className="vf-es" lang="es">{verb.es}</p>
          </PracticeCell>
          <MatchHint verb={verb} matchedForm={matchedForm} matchedField={matchedField} />
        </div>

        <div className="vf-forms">
          <div className="vf-form vf-form--past">
            <span className="vf-mini">PASADO</span>
            <PracticeCell
              hidden={pastHidden}
              label="pasado"
              base={verb.base}
              onReveal={() => onReveal(`${verb.base}:past`)}
            >
              <>
                <Token t={verb.past.join(" / ")} r="past" />
                <PracticeCell
                  hidden={esPastHidden}
                  label="pasado en español"
                  base={verb.base}
                  onReveal={() => onReveal(`${verb.base}:esPast`)}
                >
                  <p className="vf-es" lang="es">{verb.esPast}</p>
                </PracticeCell>
              </>
            </PracticeCell>
          </div>
          <div className="vf-form vf-form--part">
            <span className="vf-mini">PARTICIPIO</span>
            <PracticeCell
              hidden={partHidden}
              label="participio"
              base={verb.base}
              onReveal={() => onReveal(`${verb.base}:participle`)}
            >
              <Token t={verb.participle.join(" / ")} r="participle" />
            </PracticeCell>
          </div>
        </div>

        <div className="vf-actions">
          <button
            type="button"
            className="vf-icon"
            aria-pressed={favorite}
            aria-label={favorite ? `Quitar ${verb.base} de Mis verbos` : `Guardar ${verb.base} en Mis verbos`}
            onClick={() => onFavorite(verb.base)}
          >
            {favorite ? "★" : "☆"}
          </button>
          <button
            type="button"
            className="vf-icon"
            aria-expanded={open}
            aria-controls={moreId}
            onClick={onToggle}
          >
            Más <span aria-hidden="true">{open ? "▴" : "▾"}</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="vf-more" id={moreId}>
          <p>
            {pattern
              ? <>{pattern.label} · <span className="vf-en" lang="en">{pattern.example}</span></>
              : <>Regular · <span className="vf-en" lang="en">{verb.base} → {verb.past[0]}</span></>}
          </p>
          {verb.note && <p><strong>Nota:</strong> {verb.note}</p>}
          {verb.ed && (
            <p>-ed se pronuncia <span className="vf-en" lang="en">{verb.ed}</span></p>
          )}
          {lessons.length > 0 && (
            <div>
              <p>Aparece en:</p>
              <div className="vf-lessons">
                {lessons.map(lesson => (
                  <RelatedTopic key={`${lesson.levelId}-${lesson.topicId}`} levelId={lesson.levelId} topicId={lesson.topicId} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </article>
  );
}

// El resaltado del buscador global envuelve un nodo de texto fuera de React.
// Si el padre se vuelve a renderizar (el reloj de disponibilidad, el scroll),
// esta sección no debe reconciliar y borrar esa marca mientras sigue en pantalla.
function VerbFinderSection({ highlightTerm, highlightSeq }) {
  const [query, setQuery] = useState(() => highlightTerm ?? "");
  const [kind, setKind] = useState("all");
  const [pattern, setPattern] = useState("all");
  const [hide, setHide] = useState("none");
  const [revealed, setRevealed] = useState(() => new Set());
  const [expanded, setExpanded] = useState(() => exactBase(highlightTerm));
  const [favorites, setFavorites] = useState(loadFavorites);
  const [appliedSeq, setAppliedSeq] = useState(highlightSeq);

  // El resaltado del buscador global corre en un efecto del padre, a veces sin
  // espera. Aplicar el término durante el render deja la tarjeta en el DOM
  // antes de ese efecto; un efecto propio llegaría tarde.
  if (highlightTerm && appliedSeq !== highlightSeq) {
    setAppliedSeq(highlightSeq);
    setQuery(highlightTerm);
    setKind("all");
    setPattern("all");
    setExpanded(exactBase(highlightTerm));
  }

  useEffect(() => {
    saveFavorites(favorites);
  }, [favorites]);

  const favoriteSet = useMemo(() => new Set(favorites), [favorites]);
  const trimmed = query.trim();
  const searched = useMemo(() => (trimmed ? searchVerbs(trimmed) : null), [trimmed]);
  const universe = useMemo(
    () => (searched ? searched.map(item => item.verb) : VERB_BANK),
    [searched],
  );

  const counts = useMemo(() => {
    let irregular = 0;
    let regular = 0;
    let saved = 0;
    const byPattern = Object.fromEntries(PATTERNS.map(item => [item.id, 0]));
    for (const verb of universe) {
      if (verb.kind === "irregular") {
        irregular += 1;
        const id = verbPattern(verb);
        if (byPattern[id] !== undefined) byPattern[id] += 1;
      } else {
        regular += 1;
      }
      if (favoriteSet.has(verb.base)) saved += 1;
    }
    return { all: universe.length, irregular, regular, favorites: saved, byPattern };
  }, [universe, favoriteSet]);

  const visible = useMemo(() => {
    const source = searched ?? VERB_BANK.map(verb => ({ verb, matchedForm: verb.base, matchedField: "base" }));
    return source.filter(({ verb }) => {
      if (kind === "favorites" && !favoriteSet.has(verb.base)) return false;
      if (kind === "irregular" && verb.kind !== "irregular") return false;
      if (kind === "regular" && verb.kind !== "regular") return false;
      if (kind === "irregular" && pattern !== "all" && verbPattern(verb) !== pattern) return false;
      return true;
    });
  }, [searched, kind, pattern, favoriteSet]);

  const lettersPresent = useMemo(
    () => new Set(visible.map(item => item.verb.base[0].toUpperCase())),
    [visible],
  );

  function chooseKind(next) {
    setKind(next);
    if (next !== "irregular") setPattern("all");
  }

  function chooseHide(next) {
    if (next === hide) return;
    setHide(next);
    setRevealed(new Set());
  }

  function toggleFavorite(base) {
    setFavorites(prev => (
      prev.includes(base) ? prev.filter(item => item !== base) : [...prev, base]
    ));
  }

  function scrollToLetter(letter) {
    document.getElementById(`vf-letter-${letter}`)?.scrollIntoView?.({ behavior: "smooth", block: "start" });
  }

  const noFavoritesYet = kind === "favorites" && favorites.length === 0;
  const groups = trimmed ? null : groupByLetter(visible);

  function renderCard(item) {
    return (
      <VerbCard
        key={item.verb.base}
        verb={item.verb}
        matchedForm={item.matchedForm}
        matchedField={trimmed ? item.matchedField : "base"}
        hide={hide}
        revealed={revealed}
        onReveal={key => setRevealed(prev => {
          const next = new Set(prev);
          next.add(key);
          return next;
        })}
        open={expanded === item.verb.base}
        onToggle={() => setExpanded(current => (current === item.verb.base ? null : item.verb.base))}
        favorite={favoriteSet.has(item.verb.base)}
        onFavorite={toggleFavorite}
      />
    );
  }

  return (
    <div className="vf">
      <header className="lesson-heading" style={{ "--lesson-accent": TOPIC.color }} data-search-skip>
        <p className="lesson-stage"><span>{TOPIC.stage}</span></p>
        <h2>{TOPIC.label} — <span lang="en">{TOPIC.english}</span></h2>
        <p className="lesson-goal">
          Busca en inglés o en español, en cualquier forma: go, went, gone o ir. {VERB_BANK.length} verbos.
        </p>
      </header>

      <FilterableList
        label="Buscar verbo"
        placeholder="🔍 Busca: bring, brought, traer…"
        value={query}
        onChange={setQuery}
      >
        <div className="vf-controls" data-search-skip>
          <div className="vf-chips" role="group" aria-label="Tipo de verbo">
            {KIND_OPTIONS.map(option => (
              <button
                key={option.id}
                type="button"
                className="vf-chip"
                aria-pressed={kind === option.id}
                onClick={() => chooseKind(option.id)}
              >
                {option.label} ({counts[option.id]})
              </button>
            ))}
          </div>

          {kind === "irregular" && (
            <div className="vf-chips" role="group" aria-label="Patrón del verbo irregular">
              <button
                type="button"
                className="vf-chip"
                aria-pressed={pattern === "all"}
                onClick={() => setPattern("all")}
              >
                Todos los patrones ({counts.irregular})
              </button>
              {PATTERNS.map(item => (
                <button
                  key={item.id}
                  type="button"
                  className="vf-chip"
                  aria-pressed={pattern === item.id}
                  onClick={() => setPattern(item.id)}
                >
                  {item.label} · {item.example} ({counts.byPattern[item.id]})
                </button>
              ))}
            </div>
          )}

          <div className="vf-chips" role="group" aria-label="Modo práctica: ocultar columna">
            <span className="vf-practice-label">Ocultar:</span>
            {HIDE_OPTIONS.map(option => (
              <button
                key={option.id}
                type="button"
                className="vf-chip"
                aria-pressed={hide === option.id}
                onClick={() => chooseHide(option.id)}
              >
                {option.label}
              </button>
            ))}
          </div>

          {!trimmed && (
            <nav className="vf-index" aria-label="Índice alfabético">
              {LETTERS.map(letter => (
                <button
                  key={letter}
                  type="button"
                  className="vf-letter-btn"
                  disabled={!lettersPresent.has(letter)}
                  onClick={() => scrollToLetter(letter)}
                >
                  {letter}
                </button>
              ))}
            </nav>
          )}

          <p className="vf-count" aria-live="polite">{countLabel(visible.length, query)}</p>
          <Legend
            roles={["verb", "past", "participle"]}
            symbols={[{ icon: "ⓘ", label: "Nota: el verbo tiene una aclaración; tócalo para leerla" }]}
          />
          <p className="vf-past-note" lang="es" data-search-skip>
            El pasado en español va en 3.ª persona (él / ella): <span lang="en">asked</span> → preguntó. Según el contexto también puede traducirse como copretérito: <span lang="en">wanted</span> → quería, <span lang="en">was</span> → era / estaba.
          </p>
        </div>

        {noFavoritesYet ? (
          <div className="vf-empty">
            <p>Aún no guardas verbos. Toca ☆ en cualquier verbo para tenerlo a la mano aquí.</p>
          </div>
        ) : visible.length === 0 ? (
          <div className="vf-empty">
            {trimmed ? (
              <>
                <p>No encontramos «{trimmed}».</p>
                <p>Prueba con otra forma o búscalo en español.</p>
                <p>Si es un verbo regular, su pasado se forma con -ed (work → worked).</p>
                <RelatedTopic levelId="basico5" topicId="simplePast" />
              </>
            ) : (
              <p>Sin resultados.</p>
            )}
          </div>
        ) : (
          <div className="vf-list">
            <div className="vf-cols" data-search-skip aria-hidden="true">
              <span style={{ color: C.verb.fg }}>Base</span>
              <span style={{ color: C.past.fg }}>Pasado</span>
              <span style={{ color: C.participle.fg }}>Participio</span>
              <span />
            </div>
            {groups
              ? groups.map(group => (
                <section key={group.letter}>
                  <h3 id={`vf-letter-${group.letter}`} className="vf-letter" data-search-skip>{group.letter}</h3>
                  {group.items.map(renderCard)}
                </section>
              ))
              : visible.map(renderCard)}
          </div>
        )}

        <div data-search-skip>
          <details className="lesson-extension">
            <summary>🔤 Símbolos de pronunciación (IPA)</summary>
            <IpaGroups />
          </details>
          <details className="lesson-extension">
            <summary>📐 Pasado de los verbos regulares</summary>
            <ul className="vf-rules">
              {REGULAR_RULES.map(([forms, rule]) => (
                <li key={forms}>
                  <span className="vf-en" lang="en">{forms}</span> — {rule}
                </li>
              ))}
            </ul>
            {ED_PRONUNCIATION.map(group => (
              <p key={group.sound}>
                <span className="vf-en" lang="en">{group.sound}</span> {group.after}{" "}
                Ejemplos: <span lang="en">{group.examples.join(", ")}</span>.
              </p>
            ))}
            <RelatedTopic levelId="basico5" topicId="simplePast" />
          </details>
        </div>
      </FilterableList>
    </div>
  );
}

export default memo(VerbFinderSection);
