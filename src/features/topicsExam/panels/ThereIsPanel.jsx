import { useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import { Callout, COLOR, Guide, Mistakes, Pattern, Steps, Table } from "../ui";
import { THERE_IS_DRILL, THERE_IS_MISTAKES, THERE_IS_STEPS, THERE_IS_TABLE } from "../data";

function Drill() {
  const [picked, setPicked] = useState(() => THERE_IS_DRILL.map(() => null));

  return (
    <div className="exam-drill">
      {THERE_IS_DRILL.map((item, index) => {
        const choice = picked[index];
        const isCorrect = choice === item.answer;
        return (
          <div key={item.sentence} className={`exam-drill-card${choice ? (isCorrect ? " is-right" : " is-wrong") : ""}`}>
            <p className="exam-drill-sentence">{index + 1}. {item.sentence}</p>
            <div className="exam-drill-options">
              {item.options.map(option => (
                <button
                  key={option}
                  type="button"
                  className={`exam-chip${choice === option ? (isCorrect ? " is-right" : " is-wrong") : ""}`}
                  aria-pressed={choice === option}
                  onClick={() => setPicked(previous => previous.map((value, i) => i === index ? option : value))}
                >
                  {option}
                </button>
              ))}
            </div>
            {choice && (
              <div className="exam-drill-feedback">
                <div>{isCorrect ? "✅ Correcto." : `❌ Casi. La respuesta es “${item.answer}”.`} Sustantivo clave: <strong>{item.noun}</strong>.</div>
                <div>{item.why}</div>
                <div className="exam-drill-esp">🇲🇽 {item.esp}</div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function ThereIsPanel() {
  return (
    <>
      <Callout icon="🎯" title="Qué te van a pedir en el examen">
        Completar oraciones con <strong>There is</strong> o <strong>There are</strong>, escribirlas en negativo, hacer preguntas y responderlas. Casi siempre con objetos de un lugar: el salón, la casa, la calle.
      </Callout>

      <SectionTitle color={COLOR}>Qué significa exactamente</SectionTitle>
      <p><strong>There is</strong> y <strong>There are</strong> significan las dos lo mismo: <strong>hay</strong>. Sirven para decir que algo <strong>existe</strong> en un lugar. La única diferencia es la cantidad.</p>
      <Callout icon="🔑" title="La confusión más común" tone="warn">
        Aquí <strong>there</strong> no significa “allí”. Compara:<br />
        <strong>There is a bank on Main Street.</strong> — Hay un banco en Main Street. (existe, lo estoy presentando)<br />
        <strong>The bank is next to the park.</strong> — El banco está junto al parque. (ya sabemos cuál es, digo dónde está)<br />
        Y nunca se traduce con have: ❌ <em>There have a bank</em> → ✅ <strong>There is a bank</strong>.
      </Callout>

      <SectionTitle color={COLOR}>Cómo decidir en 4 pasos</SectionTitle>
      <Steps items={THERE_IS_STEPS} />

      <SectionTitle color={COLOR}>Las fórmulas</SectionTitle>
      <Pattern
        label="Singular — una sola cosa"
        parts={[{ t: "There is", r: "verb_be" }, { t: "a / an", r: "art" }, { t: "sustantivo singular", r: "subject" }, { t: "lugar", r: "prep" }]}
        example="There is a keyboard on the desk." esp="Hay un teclado sobre el escritorio."
      />
      <Pattern
        label="Plural — dos o más"
        parts={[{ t: "There are", r: "verb_be" }, { t: "número / some / Ø", r: "art" }, { t: "sustantivo plural", r: "subject" }, { t: "lugar", r: "prep" }]}
        example="There are two monitors in the classroom." esp="Hay dos monitores en el salón."
      />
      <Pattern
        label="Incontable — no se puede contar (water, money, equipment)"
        parts={[{ t: "There is", r: "verb_be" }, { t: "some / any", r: "art" }, { t: "sustantivo incontable", r: "subject" }]}
        example="There is some water in the bottle." esp="Hay algo de agua en la botella."
      />

      <SectionTitle color={COLOR}>Las nueve formas completas</SectionTitle>
      <Table
        headings={["Tipo", "Fórmula", "Ejemplo", "Traducción"]}
        rows={THERE_IS_TABLE}
        caption="Afirmativa (+), negativa (−) y pregunta (?) para singular, plural e incontable."
      />

      <Guide title="Cómo preguntar y cómo responder" icon="❓">
        <p>Para preguntar solo <strong>intercambias el orden</strong>: <em>There is</em> → <strong>Is there…?</strong> · <em>There are</em> → <strong>Are there…?</strong></p>
        <ul>
          <li><strong>Is there a monitor?</strong> — ¿Hay un monitor? → Yes, there is. / No, there isn't.</li>
          <li><strong>Are there any speakers?</strong> — ¿Hay bocinas? → Yes, there are. / No, there aren't.</li>
          <li><strong>How many monitors are there?</strong> — ¿Cuántos monitores hay? → There are three.</li>
          <li><strong>Is there any water?</strong> — ¿Hay agua? → Yes, there is. / No, there isn't.</li>
        </ul>
        <p>Fíjate que en la respuesta corta <strong>siempre repites there</strong>: ❌ Yes, it is. → ✅ Yes, there is.</p>
      </Guide>

      <Guide title="A / an, some y any — cuál va con cuál" icon="🔤">
        <p><strong>a</strong> antes de sonido consonante (a keyboard, a mouse) y <strong>an</strong> antes de sonido vocal (an apple, an hour). Solo con singulares contables.</p>
        <p><strong>some</strong> = algunos/as, algo de. Se usa sobre todo en afirmativas: There are some speakers. / There is some water.</p>
        <p><strong>any</strong> aparece en negativas y preguntas: There aren't any speakers. / Are there any speakers? En español muchas veces ni se traduce.</p>
        <p>También puedes no poner nada: <strong>There are monitors in the room</strong> — Hay monitores en el salón.</p>
      </Guide>

      <Guide title="Oraciones largas: no te pierdas" icon="🔍">
        <p>En el examen las oraciones traen información extra después del sustantivo (<em>in front of the school, that barks every time…</em>). Esa parte <strong>no cambia nada</strong>.</p>
        <p>Truco: tapa con el dedo todo lo que va después del sustantivo y quédate con lo mínimo: <em>___ a beautiful garden</em> → garden es uno → <strong>There is</strong>.</p>
      </Guide>

      <SectionTitle color={COLOR}>Practica con las oraciones del pizarrón</SectionTitle>
      <p>Son las mismas del salón. Elige y te explico por qué.</p>
      <Drill />

      <SectionTitle color={COLOR}>Errores típicos</SectionTitle>
      <Mistakes items={THERE_IS_MISTAKES} />
    </>
  );
}
