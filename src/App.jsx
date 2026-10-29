import { useEffect, useRef, useState } from "react";
import { LEVELS } from "./constants/levels";
import { loadActiveTopics, saveActiveTopic } from "./constants/activeTopics";
import { getAvailableTopics, isTopicAvailable } from "./constants/topicAvailability";
import { NavigationContext } from "./navigation/NavigationContext";
import { useTheme } from "./styles/useTheme";
import { scrollToAndHighlight } from "./constants/highlightMatch";
import ThemePicker from "./components/ThemePicker";
import GlobalSearch from "./components/GlobalSearch";
import VerbsSection       from "./features/verbs/VerbsSection";
import FruitsSection      from "./features/fruits/FruitsSection";
import PluralSection      from "./features/plural/PluralSection";
import NumbersSection     from "./features/numbers/NumbersSection";
import TimeSection        from "./features/time/TimeSection";
import DatesSection       from "./features/dates/DatesSection";
import CountriesSection   from "./features/countries/CountriesSection";
import FamilySection      from "./features/family/FamilySection";
import JobsSection        from "./features/jobs/JobsSection";
import ToBeSection        from "./features/tobe/ToBeSection";
import DemosSection       from "./features/demonstratives/DemosSection";
import PrepSection        from "./features/prepositions/PrepSection";
import ProgressiveSection from "./features/progressive/ProgressiveSection";
import QuizSection        from "./features/quiz/QuizSection";
import IrregularVerbsSection from "./features/irregularVerbs/IrregularVerbsSection";
import AdjectivesSection     from "./features/adjectives/AdjectivesSection";
import WhQuestionsSection    from "./features/whQuestions/WhQuestionsSection";
import ArticlesSection       from "./features/articles/ArticlesSection";
import PossessiveAdjectivesSection from "./features/possessiveAdjectives/PossessiveAdjectivesSection";
import PossessiveNounsSection      from "./features/possessiveNouns/PossessiveNounsSection";
import GerundsSection         from "./features/gerunds/GerundsSection";
import SimplePresentSection   from "./features/simplePresent/SimplePresentSection";
import VocabularySection      from "./features/vocabulary/VocabularySection";
import InOnAtSection          from "./features/inOnAt/InOnAtSection";
import SimplePresentAdvancedSection from "./features/simplePresentAdvanced/SimplePresentAdvancedSection";
import TopicsExamSection from "./features/topicsExam/TopicsExamSection";
import ExamReviewSection from "./features/examReview/ExamReviewSection";
import DirectionsSection from "./features/directions/DirectionsSection";
import BodyPartsSection from "./features/bodyParts/BodyPartsSection";
import CanSection from "./features/can/CanSection";
import CountableSection from "./features/countable/CountableSection";
import FoodGroupsSection from "./features/foodGroups/FoodGroupsSection";
import ExerciseWordsSection from "./features/exerciseWords/ExerciseWordsSection";
import AdverbsMannerSection from "./features/adverbsManner/AdverbsMannerSection";
import ModuleIVExamSection from "./features/moduleIVExam/ModuleIVExamSection";
import OctoberExamSection from "./features/octoberExam/OctoberExamSection";
import SimplePastSection from "./features/simplePast/SimplePastSection";
import GoingToSection from "./features/goingTo/GoingToSection";
import SocialCollocationsSection from "./features/socialCollocations/SocialCollocationsSection";
import MoneyCareerSection from "./features/moneyCareer/MoneyCareerSection";
import ComparativesSection from "./features/comparatives/ComparativesSection";
import ModuleVExamSection from "./features/moduleVExam/ModuleVExamSection";
import VerbFinderSection from "./features/verbFinder/VerbFinderSection";
import Footer              from "./components/Footer";
import BackToTop           from "./components/BackToTop";
import BackToBottom        from "./components/BackToBottom";
import BackToPrevious      from "./components/BackToPrevious";
import ModuleGuide from "./components/ModuleGuide";
import LessonFooter from "./components/LessonFooter";

const SECTIONS = {
  verbs:          VerbsSection,
  irregularVerbs: IrregularVerbsSection,
  adjectives:     AdjectivesSection,
  whQuestions:    WhQuestionsSection,
  articles:       ArticlesSection,
  possessiveAdjectives: PossessiveAdjectivesSection,
  possessiveNouns:      PossessiveNounsSection,
  gerunds:        GerundsSection,
  simplePresent:  SimplePresentSection,
  vocabulary:     VocabularySection,
  inOnAt:         InOnAtSection,
  simplePresentAdvanced: SimplePresentAdvancedSection,
  examReview: ExamReviewSection,
  topicsExam: TopicsExamSection,
  directions: DirectionsSection,
  bodyParts: BodyPartsSection,
  can: CanSection,
  countable: CountableSection,
  foodGroups: FoodGroupsSection,
  exerciseWords: ExerciseWordsSection,
  adverbsManner: AdverbsMannerSection,
  moduleIVExam: ModuleIVExamSection,
  octoberExam: OctoberExamSection,
  simplePast: SimplePastSection,
  goingTo: GoingToSection,
  socialCollocations: SocialCollocationsSection,
  moneyCareer: MoneyCareerSection,
  comparatives: ComparativesSection,
  moduleVExam: ModuleVExamSection,
  verbFinder: VerbFinderSection,
  fruits:         FruitsSection,
  plural:         PluralSection,
  numbers:        NumbersSection,
  time:           TimeSection,
  dates:          DatesSection,
  countries:      CountriesSection,
  family:         FamilySection,
  jobs:           JobsSection,
  tobe:           ToBeSection,
  demonstratives: DemosSection,
  prepositions:   PrepSection,
  progressive:    ProgressiveSection,
  quiz:           QuizSection,
};

function activeFor(level, map, now = Date.now()) {
  const topics = getAvailableTopics(level.topics, now);
  return topics.find(t => t.id === map[level.id])?.id ?? topics[0]?.id ?? null;
}

function topicLabel(levelId, topicId, now = Date.now()) {
  const level = LEVELS.find(l => l.id === levelId);
  const topic = level?.topics.find(t => t.id === topicId);
  if (!topic || !isTopicAvailable(topic, now)) return null;
  return `${topic.label} · ${level.label}`;
}

export default function App() {
  const { theme, themeId, selectTheme } = useTheme();
  // Esta actualización también corre mientras la página está abierta: así el
  // repaso no necesita un reload para desaparecer justo a la hora acordada.
  const [now, setNow] = useState(() => Date.now());
  // activeMap es la fuente de verdad en memoria (funciona aunque localStorage
  // esté roto/bloqueado); loadActiveTopics/saveActiveTopic solo la sincronizan
  // con localStorage como bonus para sobrevivir a un reload de la página.
  const [activeMap, setActiveMap] = useState(() => loadActiveTopics());
  const [levelId, setLevelId] = useState(LEVELS[0].id);
  const [quizSelection, setQuizSelection] = useState(null);
  const [active, setActive] = useState(() => activeFor(LEVELS[0], loadActiveTopics()));
  const level = LEVELS.find(l => l.id === levelId);
  const visibleTopics = getAvailableTopics(level.topics, now);
  // Evita que una sección vencida se pinte siquiera durante el render que
  // ocurre al llegar la hora límite; el efecto de abajo sincroniza el estado.
  const resolvedActive = visibleTopics.some(t => t.id === active)
    ? active
    : activeFor(level, activeMap, now);
  const Section = SECTIONS[resolvedActive];
  // Módulos de estudio: los niveles de referencia (Verbos) y el Quiz no son
  // lecciones que se cursan, así que no llevan guía ni autoevaluación.
  const isStudyLevel = level.id !== "quiz" && !level.reference;
  const navRef = useRef(null);
  const navWrapRef = useRef(null);
  const btnRefs = useRef({});
  // Término a resaltar en la sección tras saltar ahí desde el buscador
  // global; se consume una sola vez en el useEffect de navegación.
  const pendingHighlightRef = useRef(null);
  // El mismo término, pero como estado: las secciones que muestran su
  // contenido por pestañas (Topics Exam) necesitan abrir la que lo contiene
  // antes de que corra el resaltado.
  const [highlightTerm, setHighlightTerm] = useState(null);
  // `active` no basta como disparador: si el resultado elegido pertenece a la
  // sección que ya está abierta, setActive recibe el mismo valor y React no
  // vuelve a ejecutar el efecto, así que el término nunca se resaltaba. Este
  // contador cambia en cada navegación y garantiza que el efecto corra.
  const [navSeq, setNavSeq] = useState(0);
  // Pila de temas visitados para la flecha de "volver a la sección anterior".
  // Se limita a los últimos saltos: es un atajo de vuelta rápida, no un
  // historial completo de la sesión.
  const [backStack, setBackStack] = useState([]);
  const previous = backStack[backStack.length - 1] ?? null;

  // Aplica la navegación sin tocar la pila: la usan tanto goToTopic (que sí
  // apila el tema que se deja atrás) como goBack (que la consume).
  function applyNavigation(targetLevel, resolved, highlightTerm) {
    pendingHighlightRef.current = highlightTerm
      ? { term: highlightTerm, sameSection: targetLevel.id === levelId && resolved === active }
      : null;
    setHighlightTerm(highlightTerm ?? null);
    setNavSeq(n => n + 1);
    if (targetLevel.id !== levelId) setLevelId(targetLevel.id);
    setActive(resolved);
    setActiveMap(prev => ({ ...prev, [targetLevel.id]: resolved }));
    saveActiveTopic(targetLevel.id, resolved);
  }

  // Fuente única para cambiar de tema: la usan tanto los botones de la barra
  // de navegación (mismo nivel) como los enlaces <RelatedTopic> que pueden
  // saltar a otro nivel (ej. Articles en Básico II → Verb To Be en Básico I)
  // y el buscador global, que además puede pedir resaltar un término.
  function goToTopic(targetLevelId, topicId, highlightTerm, practiceSelection = null) {
    const targetLevel = LEVELS.find(l => l.id === targetLevelId);
    if (!targetLevel || !targetLevel.available) return;
    const availableTopics = getAvailableTopics(targetLevel.topics, now);
    const resolved = availableTopics.some(t => t.id === topicId)
      ? topicId
      : activeFor(targetLevel, activeMap, now);
    if (!resolved) return;
    if (targetLevelId === "quiz") setQuizSelection(practiceSelection);
    // Volver a buscar algo dentro del tema abierto no es un salto: apilarlo
    // dejaría la flecha apuntando a la sección donde ya estamos.
    const isJump = targetLevel.id !== levelId || resolved !== active;
    if (isJump && active) {
      setBackStack(prev => [...prev, { levelId, topicId: active }].slice(-10));
    }
    applyNavigation(targetLevel, resolved, highlightTerm);
  }

  function goBack() {
    if (!previous) return;
    const targetLevel = LEVELS.find(l => l.id === previous.levelId);
    if (!targetLevel) return;
    setBackStack(prev => prev.slice(0, -1));
    const availableTopics = getAvailableTopics(targetLevel.topics, now);
    const resolved = availableTopics.some(t => t.id === previous.topicId)
      ? previous.topicId
      : activeFor(targetLevel, activeMap, now);
    if (resolved) applyNavigation(targetLevel, resolved, null);
  }

  function selectLevel(l) {
    if (!l.available || l.id === levelId) return;
    goToTopic(l.id, activeFor(l, activeMap, now));
  }

  function selectTopic(topicId) {
    goToTopic(levelId, topicId);
  }

  useEffect(() => {
    function refreshAvailability() {
      setNow(Date.now());
    }

    const deadlines = LEVELS.flatMap(item => item.topics)
      .map(topic => topic.availableUntil).filter(deadline => deadline > Date.now());
    const remaining = deadlines.length ? Math.min(...deadlines) - Date.now() : 0;
    const timer = remaining > 0
      ? window.setTimeout(refreshAvailability, Math.min(remaining, 2147483647))
      : undefined;
    window.addEventListener("focus", refreshAvailability);
    document.addEventListener("visibilitychange", refreshAvailability);
    return () => {
      if (timer) window.clearTimeout(timer);
      window.removeEventListener("focus", refreshAvailability);
      document.removeEventListener("visibilitychange", refreshAvailability);
    };
  }, [now]);

  useEffect(() => {
    const currentLevel = LEVELS.find(item => item.id === levelId);
    const currentTopics = currentLevel ? getAvailableTopics(currentLevel.topics, now) : [];
    if (currentTopics.some(topic => topic.id === active)) return;
    const fallback = currentTopics[0]?.id;
    if (!fallback || !currentLevel) return;
    setNavSeq(sequence => sequence + 1);
    setActive(fallback);
    setActiveMap(previousMap => ({ ...previousMap, [currentLevel.id]: fallback }));
    saveActiveTopic(currentLevel.id, fallback);
  }, [now, levelId, active]);

  useEffect(() => {
    const pending = pendingHighlightRef.current;
    pendingHighlightRef.current = null;
    if (pending) {
      // scrollToAndHighlight hace su propio scroll hasta la coincidencia. Al
      // quedarnos en la sección abierta evitamos el salto previo al inicio
      // (se vería como un parpadeo) y el retardo que espera al nuevo render.
      if (!pending.sameSection) window.scrollTo({ top: 0, behavior: "auto" });
      scrollToAndHighlight(pending.term, pending.sameSection ? { delay: 0 } : undefined);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [active, navSeq]);

  useEffect(() => {
    const btn = btnRefs.current[resolvedActive];
    if (btn) {
      btn.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }, [resolvedActive]);

  // En iOS, al enfocar un buscador el zoom visual puede dejar scrollX > 0 y
  // la pantalla se ve "corrida" a la izquierda. Recolocamos en 0 sin tocar el
  // scroll vertical (el usuario no pidió anular el zoom, solo el descuadre).
  useEffect(() => {
    function realignX() {
      if (window.scrollX !== 0) window.scrollTo(0, window.scrollY);
    }
    window.addEventListener("scroll", realignX, { passive: true });
    window.visualViewport?.addEventListener("scroll", realignX);
    window.visualViewport?.addEventListener("resize", realignX);
    return () => {
      window.removeEventListener("scroll", realignX);
      window.visualViewport?.removeEventListener("scroll", realignX);
      window.visualViewport?.removeEventListener("resize", realignX);
    };
  }, []);

  // Los buscadores de lista se pegan justo debajo de la barra de temas, así
  // que necesitan su alto (cambia si las pills se acomodan en varias filas) y
  // el fondo del tema activo para tapar lo que pasa por detrás.
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--page-bg", theme.bg);
    // Las tarjetas de cada sección toman estas superficies para que el tema
    // elegido tiña también el contenido, no solo el header y la navegación.
    root.style.setProperty("--surface", theme.surface);
    root.style.setProperty("--surface-deep", theme.bg);
    root.style.setProperty("--surface-alt", theme.surfaceAlt);
    root.style.setProperty("--border", theme.border);
    root.style.setProperty("--text-muted", theme.textMuted);
    root.style.setProperty("--glow-a", theme.glowA);
    root.style.setProperty("--glow-b", theme.glowB);
    root.style.setProperty("--highlight", theme.highlight);

    const wrap = navWrapRef.current;
    if (!wrap) {
      root.style.setProperty("--nav-h", "0px");
      return;
    }
    const measure = () => {
      root.style.setProperty("--nav-h", `${Math.round(wrap.getBoundingClientRect().height)}px`);
    };
    measure();
    if (typeof ResizeObserver !== "function") return;
    const observer = new ResizeObserver(measure);
    observer.observe(wrap);
    return () => observer.disconnect();
  }, [theme, levelId]);

  return (
    <NavigationContext.Provider value={{ goTo: goToTopic }}>
    <div style={{ fontFamily: "'Segoe UI', sans-serif", minHeight: "100vh", background: theme.bg, color: theme.text }}>
      <div style={{ background: theme.headerGradient, padding: "18px 20px", textAlign: "center", position: "relative" }}>
        <div className="app-theme-control" style={{ position: "absolute", top: "14px", right: "16px" }}>
          <ThemePicker themeId={themeId} onSelect={selectTheme} />
        </div>

        <h1 style={{ margin: 0, fontSize: "22px", fontWeight: 800, color: "#fff" }}>🎓 English — {level.label}</h1>
        <p style={{ margin: "5px 0 0", opacity: 0.8, fontSize: "13px", color: "#fff" }}>{level.purpose ?? "Practica a tu ritmo y vuelve a la explicación cuando lo necesites"}</p>

        <div style={{ marginTop: "12px", display: "flex", justifyContent: "center", minWidth: 0, width: "100%" }}>
          <GlobalSearch onSelect={goToTopic} now={now} />
        </div>

        <div style={{ marginTop: "12px", display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap" }}>
          {LEVELS.map(l => (
            <button
              key={l.id}
              onClick={() => selectLevel(l)}
              disabled={!l.available}
              aria-pressed={l.id === levelId}
              title={l.available ? l.label : "Próximamente"}
              style={{
                padding: "6px 14px", borderRadius: "20px",
                border: l.id === levelId ? "1px solid rgba(255,255,255,0.9)" : "1px solid rgba(255,255,255,0.3)",
                background: l.id === levelId ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.06)",
                color: "#fff", fontSize: "12px", fontWeight: l.id === levelId ? 700 : 500,
                cursor: l.available ? "pointer" : "not-allowed",
                opacity: l.available ? 1 : 0.45,
              }}
            >
              {l.label}{!l.available && " 🔒"}
            </button>
          ))}
        </div>
      </div>

      {visibleTopics.length > 0 && (
        <div ref={navWrapRef} className="nav-wrap" style={{ position: "sticky", top: 0, zIndex: 10, background: theme.surface, borderBottom: `1px solid ${theme.border}` }}>
          <nav ref={navRef} className="nav-scroller" aria-label="Temas del módulo" style={{ display: "flex", flexWrap: "nowrap", gap: "6px", padding: "10px 14px", overflowX: "auto" }}>
            {visibleTopics.map(t => (
              <button
                key={t.id}
                ref={el => { btnRefs.current[t.id] = el; }}
                onClick={() => selectTopic(t.id)}
                aria-current={resolvedActive === t.id ? "page" : undefined}
                style={{
                  flex: "0 0 auto", scrollSnapAlign: "center",
                  padding: "7px 12px", borderRadius: "20px", border: "none", cursor: "pointer",
                  fontSize: "13px", fontWeight: 600, whiteSpace: "nowrap",
                  background: resolvedActive === t.id ? `${t.color}33` : theme.navPillIdle,
                  color: "#fff",
                  boxShadow: resolvedActive === t.id ? `inset 0 0 0 2px ${t.color}` : "none",
                  transform: resolvedActive === t.id ? "scale(1.04)" : "scale(1)",
                  transition: "all 0.15s",
                }}
              >
                {t.label}
              </button>
            ))}
          </nav>
        </div>
      )}

      <main key={resolvedActive ?? level.id} className="section-transition" style={{ padding: "20px", maxWidth: "860px", margin: "0 auto" }}>
        {Section && isStudyLevel && <ModuleGuide level={level} topics={visibleTopics} active={resolvedActive} />}
        {Section ? (
          <Section
            key={resolvedActive === "quiz" ? `${LEVELS.flatMap(item => getAvailableTopics(item.topics, now)).map(item => item.id).join(",")}:${quizSelection?.levelId ?? "all"}:${quizSelection?.topicId ?? "mixed"}` : resolvedActive}
            highlightTerm={highlightTerm}
            highlightSeq={navSeq}
            initialSelection={quizSelection}
          />
        ) : (
          <div style={{ textAlign: "center", padding: "60px 20px" }}>
            <div style={{ fontSize: "52px", marginBottom: "14px" }}>🚧</div>
            <h2 style={{ margin: "0 0 8px", color: theme.text }}>Estamos preparando {level.label}</h2>
            <p style={{ margin: 0, color: theme.textMuted, fontSize: "14px" }}>
              Muy pronto encontrarás aquí nuevos temas para seguir avanzando.
            </p>
          </div>
        )}
        {Section && isStudyLevel && (
          <LessonFooter
            level={level}
            topics={visibleTopics}
            active={resolvedActive}
            now={now}
            onPractice={() => goToTopic("quiz", "quiz", null, { levelId: level.id, topicId: resolvedActive })}
          />
        )}
      </main>

      <Footer theme={theme} />
      <BackToPrevious
        theme={theme}
        label={previous ? topicLabel(previous.levelId, previous.topicId, now) : null}
        onClick={goBack}
      />
      <div className="scroll-arrows">
        <BackToTop theme={theme} />
        <BackToBottom theme={theme} />
      </div>
    </div>
    </NavigationContext.Provider>
  );
}
