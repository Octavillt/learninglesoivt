import TopicHeading from "../../components/TopicHeading";
import RelatedTopic from "../../components/RelatedTopic";
import RuleBox from "../../components/RuleBox";
import SectionTitle from "../../components/SectionTitle";
import Legend from "../../components/Legend";
import Formula from "../../components/Formula";
import ExampleCard from "../../components/ExampleCard";
import Sentence from "../../components/Sentence";
import { ING_RULES } from "../progressive/data";
import {
  SUBJECTS, PP_AFF, PP_NEG, PP_INT, PP_WH, TIME_EXPRESSIONS, COMPARISON, WHEN_WHILE, MISTAKES,
  GUIDED_WAS_WERE, GUIDED_TRANSFORM, GUIDED_SCHEDULE,
} from "./data";

const COLOR = "#C084FC";
const TIME = "#fbbf24";
const card = { background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" };
const text = { color: "#cbd5e1", fontSize: "14px", lineHeight: 1.8 };
const translation = { color: "#94a3b8", fontSize: "13px", marginTop: "4px" };
const groupLabel = { ...translation, fontWeight: 700, margin: "10px 0 6px" };

// Separa los ejemplos del pizarrón de los que amplían el tema.
function Grouped({ items, render }) {
  const groups = [
    ["📋 Del pizarrón", items.filter(item => item.board)],
    ["➕ Más ejemplos", items.filter(item => !item.board)],
  ];
  return groups.filter(([, list]) => list.length > 0).map(([title, list]) => (
    <div key={title}>
      <p style={groupLabel}>{title}</p>
      {list.map(render)}
    </div>
  ));
}

const exampleCard = example => <ExampleCard key={example.esp} pts={example.pts} esp={example.esp} />;

const questionCard = ({ q, a, esp }) => (
  <div key={esp} style={card}>
    <div style={{ lineHeight: 2 }}><Sentence pts={q} /></div>
    <div lang="en" style={{ ...text, marginTop: "2px" }}>→ {a}</div>
    <div style={translation}>🇲🇽 {esp}</div>
  </div>
);

export default function PastProgressiveSection() {
  return (
    <div>
      <TopicHeading topicId="pastProgressive" />
      <div style={{ ...card, ...text }}>
        💡 El <strong>pasado progresivo</strong> describe una acción que <strong>empezó en el pasado y continuó por un tiempo</strong>
        {" "}(<span lang="en">started in the past and continued for some time</span>). Es el pasado de am/is/are + -ing:
        cambia a <strong>was / were</strong> y conserva el verbo en <strong>-ing</strong>.
        Por ejemplo: <span lang="en">I was watching TV</span> significa «Yo estaba viendo la televisión».
      </div>
      <Legend roles={["subject", "verb_be", "verb", "ing", "neg", "wh"]} />

      <RuleBox icon="🔑" rule="Was o were según el sujeto" color={COLOR}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "10px", marginBottom: "10px" }}>
          {SUBJECTS.map(group => (
            <div key={group.aux} style={{ ...card, marginBottom: 0, borderLeft: `3px solid ${COLOR}` }}>
              <div lang="en" style={{ color: "#f8fafc", fontWeight: 700, fontSize: "15px" }}>{group.subjects.join(" · ")}</div>
              <div style={text}>
                → <span lang="en" style={{ color: COLOR, fontWeight: 800 }}>{group.aux}</span>
                {" "}· negación: <span lang="en" style={{ fontWeight: 700 }}>{group.full} = {group.negative}</span>
              </div>
            </div>
          ))}
        </div>
        <ul style={{ ...text, paddingLeft: "20px" }}>
          <li>El nombre de una sola persona o cosa usa <strong>was</strong>: <span lang="en">Octa was doing the chores.</span></li>
          <li>El verbo principal siempre lleva <strong>-ing</strong>: ✗ I was watch TV → ✓ I was watching TV.</li>
          <li>Compara: <span lang="en">I am watching TV</span> (ahora) → <span lang="en">I was watching TV</span> (en un momento del pasado).</li>
        </ul>
        <RelatedTopic levelId="basico1" topicId="progressive" label="Repasar el presente progresivo" />
      </RuleBox>

      <SectionTitle color={COLOR}>✅ Afirmación</SectionTitle>
      <RuleBox icon="✅" rule="Sujeto + was / were + verbo-ing" color="#34d399">
        <Formula
          parts={[{ t: "Sujeto", r: "subject" }, { t: "was / were", r: "verb_be" }, { t: "verbo", r: "verb" }, { t: "ING", r: "ing" }, { t: "complemento" }, { t: "(expresión de tiempo)", color: TIME }]}
          example={[{ t: "I", r: "subject" }, { t: "was", r: "verb_be" }, { t: "watch", r: "verb" }, { t: "ing", r: "ing" }, { t: "TV." }]}
        />
      </RuleBox>
      <Grouped items={PP_AFF} render={exampleCard} />

      <SectionTitle color={COLOR}>❌ Negación</SectionTitle>
      <RuleBox icon="❌" rule="Agrega not después de was / were" color="#f87171">
        <Formula
          parts={[{ t: "Sujeto", r: "subject" }, { t: "wasn't / weren't", r: "neg" }, { t: "verbo", r: "verb" }, { t: "ING", r: "ing" }, { t: "complemento" }, { t: "(expresión de tiempo)", color: TIME }]}
          example={[{ t: "Octa", r: "subject" }, { t: "wasn't", r: "neg" }, { t: "do", r: "verb" }, { t: "ing", r: "ing" }, { t: "the chores." }]}
        />
        <div style={translation}>
          💡 Atajo: <strong style={{ color: "#f87171" }}>was not = wasn&apos;t</strong> &nbsp;|&nbsp; <strong style={{ color: "#f87171" }}>were not = weren&apos;t</strong>
        </div>
      </RuleBox>
      <Grouped items={PP_NEG} render={exampleCard} />

      <SectionTitle color={COLOR}>❓ Preguntas de sí o no</SectionTitle>
      <RuleBox icon="❓" rule="Was / were va al inicio" color="#60a5fa">
        <Formula
          parts={[{ t: "Was / Were", r: "verb_be" }, { t: "sujeto", r: "subject" }, { t: "verbo", r: "verb" }, { t: "ING", r: "ing" }, { t: "complemento" }, { t: "(expresión de tiempo)", color: TIME }, { t: "?", color: "#60a5fa" }]}
          example={[{ t: "Were", r: "verb_be" }, { t: "you", r: "subject" }, { t: "go", r: "verb" }, { t: "ing", r: "ing" }, { t: "shopping?" }]}
        />
        <ul style={{ ...text, paddingLeft: "20px" }}>
          <li>Responde con <strong>was / wasn&apos;t</strong> o <strong>were / weren&apos;t</strong>, sin repetir el verbo en -ing.</li>
          <li>La respuesta usa el sujeto de quien responde: a <span lang="en">Were you…?</span> contestas <span lang="en">Yes, I was</span> (tú solo) o <span lang="en">Yes, we were</span> (tú y otras personas).</li>
        </ul>
      </RuleBox>
      <Grouped items={PP_INT} render={questionCard} />

      <SectionTitle color={COLOR}>🔎 Preguntas con palabras WH</SectionTitle>
      <RuleBox icon="🔎" rule="Palabra WH + was / were + sujeto + verbo-ing" color="#22d3ee">
        <Formula
          parts={[{ t: "Palabra WH", r: "wh" }, { t: "was / were", r: "verb_be" }, { t: "sujeto", r: "subject" }, { t: "verbo", r: "verb" }, { t: "ING", r: "ing" }, { t: "complemento" }, { t: "(expresión de tiempo)", color: TIME }, { t: "?", color: "#22d3ee" }]}
          example={[{ t: "What", r: "wh" }, { t: "were", r: "verb_be" }, { t: "you", r: "subject" }, { t: "do", r: "verb" }, { t: "ing", r: "ing" }, { t: "yesterday?" }]}
        />
        <RelatedTopic levelId="basico2" topicId="whQuestions" label="Repasar el significado de las palabras WH" />
      </RuleBox>
      <Grouped items={PP_WH} render={questionCard} />

      <SectionTitle color={COLOR}>✍️ Escritura de -ing</SectionTitle>
      <RuleBox icon="🔤" rule="Las mismas reglas del presente progresivo" color={COLOR}>
        <ul style={{ ...text, paddingLeft: "20px" }}>
          {ING_RULES.map(rule => (
            <li key={rule.rule}>
              {rule.rule.replace(/^Regla \d+ — /, "")}:{" "}
              <span lang="en">{rule.words.slice(0, 3).map(([stem, suffix, original]) => `${original ?? stem} → ${stem}${suffix}`).join(", ")}</span>
            </li>
          ))}
        </ul>
        <RelatedTopic levelId="basico1" topicId="progressive" label="Ver todas las reglas de -ing" />
      </RuleBox>

      <SectionTitle color={COLOR}>⏰ Expresiones de tiempo</SectionTitle>
      <RuleBox icon="🗓️" rule="Ubican la acción en un momento del pasado" color={TIME}>
        <ul style={{ ...text, paddingLeft: "20px" }}>
          {TIME_EXPRESSIONS.map(([en, es]) => (
            <li key={en}><span lang="en">{en}</span> — {es}</li>
          ))}
        </ul>
        <p style={text}>La expresión de tiempo es opcional y puede ir al final o al inicio: <span lang="en">At 8 p.m. yesterday, I was watching TV.</span></p>
      </RuleBox>

      <SectionTitle color={COLOR}>⚖️ Pasado simple o pasado progresivo</SectionTitle>
      {COMPARISON.map(item => (
        <div key={item.tense} style={{ ...card, borderLeft: `3px solid ${COLOR}` }}>
          <div lang="en" style={{ color: COLOR, fontWeight: 800 }}>{item.tense}</div>
          <div style={text}>{item.use}</div>
          <div lang="en" style={{ ...text, color: "#f8fafc", fontWeight: 700 }}>{item.en}</div>
          <div style={translation}>🇲🇽 {item.esp}</div>
        </div>
      ))}
      <details className="lesson-extension" style={{ margin: "10px 0" }}>
        <summary>Para ir más allá: when y while</summary>
        {WHEN_WHILE.map(item => (
          <div key={item.en} style={{ marginTop: "8px" }}>
            <div lang="en" style={{ ...text, color: "#f8fafc", fontWeight: 700 }}>{item.en}</div>
            <div style={translation}>🇲🇽 {item.esp}</div>
            <div style={translation}>📝 {item.note}</div>
          </div>
        ))}
      </details>
      <RelatedTopic levelId="basico5" topicId="simplePast" label="Repasar el pasado simple" />

      <SectionTitle color={COLOR}>⚠️ Errores frecuentes</SectionTitle>
      {MISTAKES.map(([wrong, right, why]) => (
        <div key={wrong} style={{ ...card, borderLeft: "3px solid #f87171" }}>
          <div lang="en" style={text}>✗ <s>{wrong}</s></div>
          <div lang="en" style={{ ...text, color: "#f8fafc", fontWeight: 700 }}>✓ {right}</div>
          <div style={translation}>{why}</div>
        </div>
      ))}

      <SectionTitle color={COLOR}>📘 Práctica guiada</SectionTitle>
      <div style={{ ...card, borderLeft: `3px solid ${COLOR}`, marginBottom: "12px" }}>
        <div style={text}>✏️ {GUIDED_WAS_WERE.prompt}</div>
        <ol lang="en" style={{ ...text, paddingLeft: "20px", marginTop: "6px" }}>
          {GUIDED_WAS_WERE.rows.map(([prompt]) => <li key={prompt}>{prompt}</li>)}
        </ol>
        <details className="lesson-extension" style={{ margin: "10px 0 0" }}>
          <summary>Ver las respuestas</summary>
          <ol lang="en" style={{ ...text, paddingLeft: "20px" }}>
            {GUIDED_WAS_WERE.rows.map(([, answer]) => <li key={answer}>{answer}</li>)}
          </ol>
        </details>
      </div>
      <div style={{ ...card, borderLeft: `3px solid ${COLOR}`, marginBottom: "12px" }}>
        <div style={text}>🔄 {GUIDED_TRANSFORM.prompt}</div>
        <ol lang="en" style={{ ...text, paddingLeft: "20px", marginTop: "6px" }}>
          {GUIDED_TRANSFORM.rows.map(([sentence]) => <li key={sentence}>{sentence}</li>)}
        </ol>
        <details className="lesson-extension" style={{ margin: "10px 0 0" }}>
          <summary>Ver las respuestas</summary>
          <ol lang="en" style={{ ...text, paddingLeft: "20px" }}>
            {GUIDED_TRANSFORM.rows.map(([sentence, negative, question]) => <li key={sentence}>{negative} / {question}</li>)}
          </ol>
        </details>
      </div>
      <div style={{ ...card, borderLeft: `3px solid ${COLOR}`, marginBottom: "12px" }}>
        <div style={text}>🕒 {GUIDED_SCHEDULE.prompt}</div>
        <ul style={{ ...text, listStyle: "none", paddingLeft: 0, marginTop: "6px" }}>
          {GUIDED_SCHEDULE.rows.map(([time, activity]) => (
            <li key={time}><strong lang="en">{time}</strong> — <span lang="en">{activity}</span></li>
          ))}
        </ul>
        <details className="lesson-extension" style={{ margin: "10px 0 0" }}>
          <summary>Ver las respuestas</summary>
          <ul lang="en" style={{ ...text, listStyle: "none", paddingLeft: 0 }}>
            {GUIDED_SCHEDULE.rows.map(([time, , answer]) => <li key={time}>What was Leslie doing at {time}? → {answer}</li>)}
          </ul>
        </details>
      </div>

      <SectionTitle color={COLOR}>🎯 Practica lo aprendido</SectionTitle>
      <p style={text}>Escribe tres cosas que estabas haciendo ayer a diferentes horas y una que no estabas haciendo. Después pregunta a otra persona «What were you doing yesterday at 8 p.m.?» y responde con respuestas cortas. Usa el Quiz para practicar afirmaciones, negaciones y preguntas.</p>
    </div>
  );
}
