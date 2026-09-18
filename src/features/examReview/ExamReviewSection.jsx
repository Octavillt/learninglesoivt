import TopicHeading from "../../components/TopicHeading";
import { useMemo, useState } from "react";
import Formula from "../../components/Formula";
import Legend from "../../components/Legend";
import RelatedTopic from "../../components/RelatedTopic";
import RuleBox from "../../components/RuleBox";
import SectionTitle from "../../components/SectionTitle";
import Token from "../../components/Token";
import {
  DAILY_BLOG_VOCAB,
  ED_ING_PAIRS,
  FREQUENCY_ADVERBS,
  FREQUENCY_AND_TIME,
  PLACES_WE_LIVE,
  PRACTICE,
  WH_QUESTIONS,
} from "./data";

const COLOR = "#ec4899";

export function VocabGrid({ entries, columns = 2 }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(auto-fit, minmax(${columns === 3 ? "170px" : "230px"}, 1fr))`, gap: "8px", marginBottom: "10px" }}>
      {entries.map(([word, esp, example]) => (
        <div key={word} style={{ background: "#1e293b", borderRadius: "10px", padding: "11px 13px" }}>
          <div style={{ color: "#f8fafc", fontWeight: 800, fontSize: "14px" }}>{word}</div>
          <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: "3px" }}>🇲🇽 {esp}</div>
          {example && <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: "7px", paddingTop: "7px", borderTop: "1px solid #334155", fontStyle: "italic" }}>{example}</div>}
        </div>
      ))}
    </div>
  );
}

export function Practice({ questions = PRACTICE }) {
  const [answers, setAnswers] = useState(() => Array(questions.length).fill(null));
  const attempted = answers.filter(answer => answer !== null).length;
  const correct = answers.reduce((total, answer, index) => total + (answer === questions[index].correct ? 1 : 0), 0);
  const message = useMemo(() => {
    if (attempted === 0) return "Elige una respuesta para revisar tu progreso.";
    if (attempted < questions.length) return `Llevas ${correct} de ${attempted} correctas.`;
    return correct === questions.length
      ? "¡Excelente! Llegas muy preparado/a al examen."
      : `Resultado final: ${correct}/${questions.length}. Revisa las explicaciones y vuelve a intentarlo.`;
  }, [attempted, correct, questions.length]);

  function choose(questionIndex, optionIndex) {
    setAnswers(previous => previous.map((answer, index) => index === questionIndex ? optionIndex : answer));
  }

  return (
    <div style={{ background: "#1e293b", borderRadius: "12px", padding: "15px", marginBottom: "10px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", alignItems: "center", flexWrap: "wrap", marginBottom: "12px" }}>
        <div>
          <div style={{ color: COLOR, fontWeight: 800 }}>🎯 Mini simulador — {questions.length} preguntas</div>
          <div aria-live="polite" style={{ color: "#94a3b8", fontSize: "13px", marginTop: "3px" }}>{message}</div>
        </div>
        <button
          type="button"
          onClick={() => setAnswers(Array(questions.length).fill(null))}
          style={{ background: "#334155", border: "none", borderRadius: "20px", color: "#e2e8f0", cursor: "pointer", fontSize: "12px", fontWeight: 700, padding: "7px 12px" }}
        >
          Reiniciar
        </button>
      </div>

      {questions.map((item, index) => {
        const answer = answers[index];
        const answered = answer !== null;
        const isCorrect = answer === item.correct;
        return (
          <div key={item.question} style={{ background: "#0f172a", borderRadius: "10px", padding: "13px", marginBottom: "9px", border: answered ? `1px solid ${isCorrect ? "#22c55e66" : "#ef444466"}` : "1px solid #334155" }}>
            <div style={{ color: "#f8fafc", fontWeight: 700, fontSize: "14px", lineHeight: 1.55, marginBottom: "9px" }}>{index + 1}. {item.question}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
              {item.options.map((option, optionIndex) => {
                const selected = answer === optionIndex;
                const optionIsCorrect = optionIndex === item.correct;
                const background = answered && optionIsCorrect
                  ? "#14532d"
                  : selected
                    ? "#450a0a"
                    : "#1e293b";
                const border = answered && optionIsCorrect
                  ? "#4ade80"
                  : selected
                    ? "#f87171"
                    : "#475569";
                return (
                  <button
                    type="button"
                    key={option}
                    onClick={() => choose(index, optionIndex)}
                    style={{ background, border: `1px solid ${border}`, borderRadius: "8px", color: "#e2e8f0", cursor: "pointer", fontSize: "13px", padding: "7px 10px" }}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            {answered && (
              <div style={{ color: isCorrect ? "#86efac" : "#fca5a5", fontSize: "12px", lineHeight: 1.55, marginTop: "9px" }}>
                {isCorrect ? "✅ Correcto. " : `❌ La respuesta es “${item.options[item.correct]}”. `}{item.explanation}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function ExamReviewSection() {
  return (
    <div>
      <TopicHeading topicId="examReview" />
      <div style={{ background: "linear-gradient(135deg, #3b0764, #1e293b)", border: "1px solid #ec489955", borderRadius: "12px", padding: "15px 16px", color: "#e2e8f0", fontSize: "14px", lineHeight: 1.8, marginBottom: "14px" }}>
        <strong style={{ color: "#f9a8d4" }}>Tu ruta rápida de estudio:</strong> repasa las fórmulas, memoriza el vocabulario de <em>The Daily Blog</em> (p. 38) y <em>Places We Live</em> (p. 49), y termina con el mini simulador.
        <br />
        <span style={{ color: "#fbcfe8", fontSize: "12px" }}>⏳ Esta sección estará disponible hasta el domingo 30 de agosto de 2026 a las 23:59 (hora de Ciudad de México).</span>
      </div>
      <Legend roles={["subject", "verb", "aux", "wh", "adj", "verb_be", "prep"]} />

      <RuleBox icon="🗺️" rule="Cómo aprovechar este repaso" color={COLOR}>
        <div style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.8 }}>
          No intentes memorizar oraciones aisladas. En cada tema identifica primero <strong style={{ color: "#f8fafc" }}>qué quieres comunicar</strong> (información, rutina, sentimiento, horario o descripción de un lugar), después usa la fórmula y, por último, di en voz alta el ejemplo. Así podrás reconocer la regla aunque cambien las palabras del examen.
        </div>
      </RuleBox>

      <SectionTitle color={COLOR}>1. ❓ Simple present WH-questions</SectionTitle>
      <div style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.8, marginBottom: "10px" }}>
        Usa estas preguntas cuando una respuesta de <em>yes</em> o <em>no</em> no es suficiente. La palabra WH indica el tipo de dato que necesitas: una persona, un lugar, una hora, una razón o una actividad. Como preguntas sobre rutinas, trabajo, casa o fines de semana, se forman con <Token t="do / does" r="aux" /> y el verbo principal se queda en forma base.
      </div>
      <Formula
        label="La fórmula que debes recordar"
        parts={[{ t: "WH word", r: "wh" }, { t: "do / does", r: "aux" }, { t: "sujeto", r: "subject" }, { t: "verbo base", r: "verb" }, { t: "?", color: COLOR }]}
        example={[{ t: "Where", r: "wh" }, { t: "does", r: "aux" }, { t: "Jerry", r: "subject" }, { t: "work?", r: "verb" }]}
        color={COLOR}
      />
      <RuleBox icon="⚠️" rule="Does ya lleva la -s: el verbo vuelve a su forma base" color="#fbbf24">
        <div style={{ color: "#f87171", fontSize: "13px" }}>❌ Where does she <strong>lives</strong>?</div>
        <div style={{ color: "#4ade80", fontSize: "13px", marginTop: "3px" }}>✅ Where does she <strong>live</strong>?</div>
        <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: "7px" }}>Piensa que <strong>does</strong> ya hace el trabajo de la tercera persona (he / she / it). Por eso no se repite la <strong>-s</strong> en <em>live</em>, <em>work</em>, <em>study</em> o <em>go</em>.</div>
      </RuleBox>
      <VocabGrid entries={WH_QUESTIONS.map(({ word, use, example }) => [word, use, example])} columns={3} />
      <RelatedTopic levelId="basico3" topicId="simplePresentAdvanced" label="Ver el tema completo" />

      <SectionTitle color={COLOR}>2. 🔁 Frequency adverbs</SectionTitle>
      <div style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.8, marginBottom: "10px" }}>
        Los adverbios de frecuencia expresan <strong style={{ color: "#f8fafc" }}>qué tan habitual</strong> es una acción: no dicen la hora, sino la regularidad. Son muy comunes al hablar de la rutina diaria: <em>I usually have coffee</em>, <em>She never takes the subway</em>. En el orden más habitual, fíjate primero en el verbo: si es un verbo de acción, el adverbio va antes; si es <em>am / is / are</em>, va después.
      </div>
      <RuleBox icon="📍" rule="Posición: antes del verbo principal; después de am / is / are" color="#38bdf8">
        <div style={{ color: "#4ade80", fontSize: "13px" }}>✅ She <strong>always drinks</strong> coffee. &nbsp; ✅ She <strong>is always</strong> late.</div>
        <div style={{ color: "#f87171", fontSize: "13px", marginTop: "3px" }}>❌ She drinks always coffee. &nbsp; ❌ She are always late.</div>
      </RuleBox>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: "8px", marginBottom: "10px" }}>
        {FREQUENCY_ADVERBS.map(([word, esp, percent]) => (
          <div key={word} style={{ background: "#1e293b", borderRadius: "10px", padding: "10px 12px" }}>
            <div style={{ color: "#f8fafc", fontWeight: 800 }}>{word}</div>
            <div style={{ color: "#94a3b8", fontSize: "12px" }}>{esp}</div>
            <div style={{ color: COLOR, fontSize: "12px", fontWeight: 800, marginTop: "4px" }}>{percent}</div>
          </div>
        ))}
      </div>

      <p style={{ color: "#94a3b8", fontSize: "13px" }}>Los porcentajes son orientativos, no equivalencias exactas. El orden puede cambiar para dar énfasis.</p>
      <SectionTitle color={COLOR}>3. 🎭 Adjectives: -ed / -ing</SectionTitle>
      <div style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.8, marginBottom: "10px" }}>
        Estas dos terminaciones usan palabras parecidas, pero cuentan dos partes diferentes de la misma situación. El adjetivo <strong style={{ color: "#f9a8d4" }}>-ed</strong> describe la reacción o el sentimiento de una persona; el adjetivo <strong style={{ color: "#67e8f9" }}>-ing</strong> describe la cosa, persona o situación que produce esa reacción. Pregúntate: <em>¿quién siente algo?</em> → <strong>-ed</strong>; <em>¿qué lo provoca?</em> → <strong>-ing</strong>.
      </div>
      <RuleBox icon="🧩" rule="-ED = cómo se siente alguien · -ING = qué causa esa sensación" color="#2dd4bf">
        <div style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.7 }}>
          People feel <Token t="bored" r="adj" />. Things are <Token t="boring" r="adj" />.
        </div>
      </RuleBox>
      <div style={{ overflowX: "auto", marginBottom: "10px" }}>
        <table style={{ width: "100%", minWidth: "540px", borderCollapse: "separate", borderSpacing: "0 6px" }}>
          <thead>
            <tr style={{ color: "#94a3b8", fontSize: "12px", textAlign: "left" }}><th style={{ padding: "0 10px" }}>-ED: persona</th><th style={{ padding: "0 10px" }}>-ING: cosa / situación</th><th style={{ padding: "0 10px" }}>Ejemplo</th></tr>
          </thead>
          <tbody>
            {ED_ING_PAIRS.map(([ed, ing, example]) => (
              <tr key={ed} style={{ background: "#1e293b" }}>
                <td style={{ color: "#f9a8d4", fontWeight: 800, padding: "10px" }}>{ed}</td>
                <td style={{ color: "#67e8f9", fontWeight: 800, padding: "10px" }}>{ing}</td>
                <td style={{ color: "#94a3b8", fontSize: "12px", padding: "10px" }}>{example}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <RelatedTopic levelId="basico2" topicId="adjectives" label="Repasar adjetivos" />

      <SectionTitle color={COLOR}>4. 📰 Vocabulary — The Daily Blog (p. 38)</SectionTitle>
      <div style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.7, marginBottom: "10px" }}>
        El blog trabaja con una <strong style={{ color: "#f8fafc" }}>secuencia de rutina</strong>: qué hace Jerry al comenzar el día, cómo llega al trabajo, qué hace durante la jornada y cómo termina la tarde. Aprende las expresiones completas — no solo <em>subway</em> o <em>dinner</em> — porque en inglés se usan como combinaciones: <em>take the subway</em>, <em>have dinner</em>, <em>make phone calls</em>. En el examen pueden pedir el significado, completar un verbo o ubicar la acción en el orden del día.
      </div>
      <VocabGrid entries={DAILY_BLOG_VOCAB} />

      <SectionTitle color={COLOR}>5. 🕐 Frequency expressions and time</SectionTitle>
      <div style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.8, marginBottom: "10px" }}>
        Aquí respondes <Token t="How often" r="wh" /> con una cantidad de veces y un periodo: <em>once a day</em>, <em>twice a week</em> o <em>three times a month</em>. Las expresiones de tiempo, en cambio, dicen <strong style={{ color: "#f8fafc" }}>cuándo</strong> sucede la rutina. Usa <Token t="at" r="prep" /> para una hora exacta, <Token t="on" r="prep" /> para días y fechas, e <Token t="in" r="prep" /> para meses, años y partes del día. Esto evita confundir <em>at 7:00</em> con <em>on Monday</em> o <em>in August</em>.
      </div>
      <Formula
        label="Para responder How often"
        parts={[{ t: "once / twice / three times", color: "#f8fafc" }, { t: "a", r: "prep" }, { t: "day / week / month", color: "#f8fafc" }]}
        example={[{ t: "I exercise", color: "#94a3b8" }, { t: "twice a week.", r: "prep" }]}
        color="#fb923c"
      />
      <VocabGrid entries={FREQUENCY_AND_TIME} columns={3} />
      <RelatedTopic levelId="basico3" topicId="inOnAt" label="Repasar at / on / in" />

      <SectionTitle color={COLOR}>6. 🏙️ Vocabulary — Places We Live (p. 49)</SectionTitle>
      <div style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.8, marginBottom: "10px" }}>
        Este vocabulario sirve para hablar de dónde vives y cómo es el lugar. Primero nombra el espacio — <em>house</em>, <em>apartment</em>, <em>neighborhood</em> o <em>city</em> — y luego agrega un adjetivo que lo describa. Recuerda que los adjetivos van después de <Token t="is / are" r="verb_be" />: <em>My apartment is expensive</em>; o antes del sustantivo: <em>an exciting neighborhood</em>. El objetivo es poder describir tu casa, colonia y lugares cercanos con oraciones completas.
      </div>
      <RuleBox icon="🏠" rule="Describe tu casa o vecindario con un lugar + un adjetivo" color="#a78bfa">
        <div style={{ color: "#e2e8f0", fontSize: "13px" }}>My neighborhood is <strong style={{ color: "#67e8f9" }}>lively</strong>, but my street is <strong style={{ color: "#67e8f9" }}>quiet</strong>.</div>
        <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: "7px" }}>La idea de contraste (<em>but</em>) te ayuda a dar una descripción más completa: un vecindario puede ser animado en general, pero tu calle puede ser tranquila.</div>
      </RuleBox>
      <VocabGrid entries={PLACES_WE_LIVE} columns={3} />

      <SectionTitle color={COLOR}>7. ✅ Comprueba lo que sabes</SectionTitle>
      <Practice />
    </div>
  );
}
