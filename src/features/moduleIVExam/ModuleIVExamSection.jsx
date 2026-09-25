import { useEffect, useRef, useState } from "react";
import TopicHeading from "../../components/TopicHeading";
import RelatedTopic from "../../components/RelatedTopic";
import RuleBox from "../../components/RuleBox";
import { Practice, VocabGrid } from "../examReview/ExamReviewSection";
import { STUDY_TOPICS, PRACTICE, findStudyTab } from "./data";
import "../topicsExam/topicsExam.css";

const COLOR = "#EC4899";
const TABS = [{ id: "overview", title: "Guía" }, ...STUDY_TOPICS, { id: "practice", title: "Práctica" }];

function ExamPractice() {
  const [filter, setFilter] = useState("all");
  const questions = filter === "all" ? PRACTICE : PRACTICE.filter(item => item.topic === filter);
  return (
    <>
      <p>Responde sin mirar los apuntes. Cada respuesta muestra la solución y su explicación. Practica los 24 reactivos o elige uno de los seis temas.</p>
      <div className="exam-filters" role="group" aria-label="Filtrar preguntas por tema">
        {[{ id: "all", title: "Todos" }, ...STUDY_TOPICS].map(topic => (
          <button key={topic.id} type="button" className={`exam-chip${filter === topic.id ? " is-active" : ""}`} aria-pressed={filter === topic.id} onClick={() => setFilter(topic.id)}>{topic.title}</button>
        ))}
      </div>
      <Practice key={filter} questions={questions} />
    </>
  );
}

export default function ModuleIVExamSection({ highlightTerm, highlightSeq }) {
  const [active, setActive] = useState("overview");
  const tabsRef = useRef(null);
  const index = TABS.findIndex(tab => tab.id === active);
  const tab = TABS[index];

  useEffect(() => {
    const target = findStudyTab(highlightTerm);
    if (target) setActive(target);
  }, [highlightTerm, highlightSeq]);

  useEffect(() => {
    tabsRef.current?.querySelector(`#iv-exam-tab-${active}`)?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [active]);

  function onTabKeyDown(event) {
    let next;
    if (event.key === "ArrowRight") next = (index + 1) % TABS.length;
    if (event.key === "ArrowLeft") next = (index - 1 + TABS.length) % TABS.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = TABS.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    setActive(TABS[next].id);
    tabsRef.current?.querySelector(`#iv-exam-tab-${TABS[next].id}`)?.focus();
  }

  return (
    <div className="topics-exam">
      <TopicHeading topicId="moduleIVExam" />
      <div className="exam-header">
        <p>Repasa los seis temas del pizarrón: Can / Can't, Countable / Uncountable nouns, Food groups, Exercise words, Frequency adverbs y Adverbs of manner.</p>
        <div className="exam-header-meta"><span>⏳ Disponible hasta el domingo 27 de septiembre de 2026, 23:59 (Ciudad de México, UTC−6)</span></div>
      </div>
      <div className="exam-tabs" role="tablist" aria-label="Temas del examen de Módulo IV" ref={tabsRef} onKeyDown={onTabKeyDown}>
        {TABS.map(item => (
          <button key={item.id} id={`iv-exam-tab-${item.id}`} type="button" role="tab" aria-selected={active === item.id} aria-controls="iv-exam-panel" tabIndex={active === item.id ? 0 : -1} className={`exam-tab${active === item.id ? " is-active" : ""}`} onClick={() => setActive(item.id)}>{item.title}</button>
        ))}
      </div>
      <div id="iv-exam-panel" role="tabpanel" aria-labelledby={`iv-exam-tab-${active}`} className="exam-panel" key={active}>
        <h3 className="exam-panel-title" style={{ color: COLOR }}>{tab.title === "Guía" ? "Tu ruta de estudio" : tab.title}</h3>
        {active === "overview" ? (
          <>
            <p>En cada pestaña encontrarás reglas clave, vocabulario bilingüe, ejemplos traducidos, un error típico y un enlace a la lección completa.</p>
            <ol className="exam-steps">
              {STUDY_TOPICS.map((topic, topicIndex) => (
                <li key={topic.id}><span className="exam-step-number">{topicIndex + 1}</span><button type="button" className="exam-chip" onClick={() => setActive(topic.id)}>{topic.title}</button></li>
              ))}
            </ol>
            <RuleBox icon="🧠" rule="Tres preguntas para no confundir estructuras" color={COLOR}>
              <p><strong>¿Puede hacerlo?</strong> → Can she swim? — Yes, she can.</p>
              <p><strong>¿Con qué frecuencia?</strong> → How often does she swim? — Twice a week.</p>
              <p><strong>¿Cómo lo hace?</strong> → How does she swim? — She swims well.</p>
              <p>Puede nadar, nada dos veces por semana y nada bien: habilidad, frecuencia y modo son ideas diferentes.</p>
            </RuleBox>
            <RuleBox icon="✅" rule="Antes de terminar" color={COLOR}>
              <p>Comprueba que puedes: hacer una pregunta con can, elegir how many/how much, nombrar los cinco grupos de alimentos, reconocer los ocho movimientos y distinguir frecuencia de modo.</p>
              <p>Después responde el simulador, revisa los errores y repite solo los temas que necesites reforzar.</p>
            </RuleBox>
            <button type="button" className="exam-chip" onClick={() => setActive("practice")}>Abrir simulador de 24 preguntas</button>
          </>
        ) : active === "practice" ? <ExamPractice /> : (
          <>
            <RuleBox icon="📖" rule="Reglas que debes recordar" color={COLOR}><ul>{tab.rules.map(rule => <li key={rule}>{rule}</li>)}</ul></RuleBox>
            <h4>Vocabulario y formas clave</h4>
            <VocabGrid entries={tab.vocab} />
            <h4>Ejemplos con traducción</h4>
            <VocabGrid entries={tab.examples} />
            <RuleBox icon="🔎" rule="Evita este error" color="#F59E0B"><p>{tab.mistake}</p></RuleBox>
            <RelatedTopic levelId={tab.levelId} topicId={tab.topicId} label="Abrir la lección completa" />
          </>
        )}
      </div>
      <nav className="exam-pager" aria-label="Navegación entre temas del examen IV">
        <button type="button" className="exam-chip" disabled={index === 0} onClick={() => setActive(TABS[index - 1].id)}>← Anterior</button>
        <button type="button" className="exam-chip" disabled={index === TABS.length - 1} onClick={() => setActive(TABS[index + 1].id)}>Siguiente →</button>
      </nav>
    </div>
  );
}
