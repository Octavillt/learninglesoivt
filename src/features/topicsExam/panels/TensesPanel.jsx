import SectionTitle from "../../../components/SectionTitle";
import { Callout, COLOR, Guide, Mistakes, Pattern, SpellingRules, Table } from "../ui";
import {
  ING_RULES, PP_PERSONS, SP_PERSONS, S_RULES, STATE_VERBS,
  TENSE_DECISION, TENSE_MISTAKES, TENSE_PAIRS, TIME_EXPRESSIONS, FREQUENCY_ADVERBS, VERB_FORMS, WH_EXAMPLES,
} from "../data";

export default function TensesPanel() {
  return (
    <>
      <Callout icon="🎯" title="Qué te van a pedir en el examen">
        Elegir entre los dos tiempos según la pista de tiempo, conjugar bien la tercera persona (<strong>-s / -es</strong>), escribir el <strong>-ing</strong> correctamente y formar negativas, preguntas y respuestas cortas.
      </Callout>

      <SectionTitle color={COLOR}>Paso 1 — Decide cuál usar</SectionTitle>
      <p>Antes de escribir nada, hazte <strong>una sola pregunta</strong>: ¿esto pasa siempre o está pasando ahora?</p>
      <div className="exam-decision">
        {TENSE_DECISION.map(item => (
          <div key={item.title} className="exam-decision-card">
            <div className="exam-decision-head"><span aria-hidden="true">{item.icon}</span> {item.title}</div>
            <div className="exam-decision-sub">{item.subtitle}</div>
            <div className="exam-decision-ask">{item.ask}</div>
            <div className="exam-signals">
              {item.signals.map(signal => <span key={signal} className="exam-signal">{signal}</span>)}
            </div>
            <div className="exam-decision-example"><strong>{item.example}</strong><br /><span>🇲🇽 {item.esp}</span></div>
          </div>
        ))}
      </div>

      <SectionTitle color={COLOR}>Paso 2 — Las fórmulas del pizarrón</SectionTitle>
      <Callout icon="📖" title="Cómo leer la notación de la maestra">
        <strong>S</strong> = sujeto (el 🙂 del pizarrón) · <strong>C</strong> = complemento · <strong>t.e.</strong> = <em>time expression</em>, la expresión de tiempo · <strong>Freq. Adv.</strong> = adverbio de frecuencia.
      </Callout>
      <Pattern
        label="Simple present — rutinas"
        parts={[{ t: "S", r: "subject" }, { t: "verbo base (+ -s con he/she/it)", r: "verb" }, { t: "C", r: "prep" }, { t: "t.e.", r: "wh" }]}
        example="I go to English class every day." esp="Voy a clase de inglés todos los días."
      />
      <Pattern
        label="Simple present con adverbio de frecuencia"
        parts={[{ t: "S", r: "subject" }, { t: "Freq. Adv.", r: "aux" }, { t: "verbo", r: "verb" }, { t: "C", r: "prep" }]}
        example="She always studies English at night." esp="Ella siempre estudia inglés en la noche."
      />
      <Pattern
        label="Present progressive — lo que pasa ahora"
        parts={[{ t: "S", r: "subject" }, { t: "am / is / are", r: "verb_be" }, { t: "verbo", r: "verb" }, { t: "-ing", r: "ing" }, { t: "C", r: "prep" }, { t: "t.e.", r: "wh" }]}
        example="I am speaking to people at the moment." esp="Estoy hablando con la gente en este momento."
      />
      <Table headings={["Tiempo", "Expresiones de tiempo (t.e.)", "En español"]} rows={TIME_EXPRESSIONS} />
      <Guide title="Dónde va cada cosa en la oración" icon="📐">
        <p>La <strong>t.e.</strong> normalmente va <strong>al final</strong>: I study English <em>every day</em>. También puede ir al principio con coma: <em>Every day</em>, I study English.</p>
        <p>El <strong>adverbio de frecuencia</strong> va <strong>antes del verbo de acción</strong>: She <em>always</em> studies. Pero con el verbo <strong>be</strong> va <strong>después</strong>: She is <em>always</em> happy.</p>
      </Guide>
      <Table headings={["Adverbio", "En español", "Frecuencia orientativa"]} rows={FREQUENCY_ADVERBS} />

      <SectionTitle color={COLOR}>Paso 3 — Conjuga persona por persona</SectionTitle>
      <p>Simple present con el verbo <strong>work</strong> (trabajar):</p>
      <Table headings={["Sujeto", "Afirmativa", "Negativa", "Pregunta", "Respuesta corta"]} rows={SP_PERSONS} />
      <Callout icon="⚠️" title="Lo único que cambia es he / she / it" tone="warn">
        Con <strong>he, she, it</strong> el verbo lleva <strong>-s</strong> y el auxiliar es <strong>does / doesn't</strong>. Con todos los demás, verbo en base y <strong>do / don't</strong>.
        Y cuando aparece el auxiliar, <strong>la -s desaparece del verbo</strong>: Does he <em>work</em>? / He doesn't <em>work</em>.
      </Callout>
      <p>Present progressive con el mismo verbo:</p>
      <Table headings={["Sujeto", "Afirmativa", "Negativa", "Pregunta", "Respuesta corta"]} rows={PP_PERSONS} />
      <Callout icon="⚠️" title="Nunca se te olvide el verbo to be" tone="warn">
        El progresivo son <strong>dos piezas</strong>: am/is/are <strong>+</strong> verbo-ing. Si falta una, la oración está mal: ❌ She using a laptop. ❌ She is use a laptop. → ✅ She <strong>is using</strong> a laptop.
      </Callout>

      <SectionTitle color={COLOR}>Paso 4 — Ortografía de la -s / -es (he, she, it)</SectionTitle>
      <SpellingRules rules={S_RULES} />

      <SectionTitle color={COLOR}>Paso 5 — Ortografía del -ing</SectionTitle>
      <SpellingRules rules={ING_RULES} />

      <SectionTitle color={COLOR}>Paso 6 — Compara la misma idea en los dos tiempos</SectionTitle>
      <div className="exam-compare">
        {TENSE_PAIRS.map(([sp, spEsp, pp, ppEsp]) => (
          <div key={sp} className="exam-compare-row">
            <div className="exam-compare-cell"><span className="exam-tag exam-tag-sp">🔁 Rutina</span><strong>{sp}</strong><span>🇲🇽 {spEsp}</span></div>
            <div className="exam-compare-cell"><span className="exam-tag exam-tag-pp">⏱️ Ahora</span><strong>{pp}</strong><span>🇲🇽 {ppEsp}</span></div>
          </div>
        ))}
      </div>

      <SectionTitle color={COLOR}>Preguntas con WH</SectionTitle>
      <Pattern
        label="Simple present"
        parts={[{ t: "WH", r: "wh" }, { t: "do / does", r: "aux" }, { t: "S", r: "subject" }, { t: "verbo base", r: "verb" }, { t: "C", r: "prep" }]}
        example="Where does she work?" esp="¿Dónde trabaja ella?"
      />
      <Pattern
        label="Present progressive"
        parts={[{ t: "WH", r: "wh" }, { t: "am / is / are", r: "verb_be" }, { t: "S", r: "subject" }, { t: "verbo-ing", r: "ing" }, { t: "C", r: "prep" }]}
        example="What are you doing right now?" esp="¿Qué estás haciendo ahora mismo?"
      />
      <Table headings={["WH", "Simple present", "Traducción", "Present progressive", "Traducción"]} rows={WH_EXAMPLES} />

      <SectionTitle color={COLOR}>Verbos que casi nunca van en progresivo</SectionTitle>
      <p>Son verbos de <strong>estado</strong>, no de acción: describen lo que sientes, quieres o sabes, no algo que estás haciendo.</p>
      <div className="exam-pills">
        {STATE_VERBS.map(([word, esp]) => <span key={word} className="exam-pill"><b>{word}</b> · {esp}</span>)}
      </div>
      <p>✅ I <strong>want</strong> a smartphone. — Quiero un teléfono. ❌ I am wanting a smartphone.</p>

      <SectionTitle color={COLOR}>Formas del verbo: base — -ing — pasado — participio</SectionTitle>
      <p>En el pizarrón viene <strong>speak — speaking — spoke — spoken</strong>. Para este examen usas sobre todo las dos primeras, pero conviene reconocer las cuatro.</p>
      <Table headings={["Base", "-ing", "Pasado", "Participio", "Español"]} rows={VERB_FORMS} />
      <p>Los verbos regulares hacen el pasado y el participio con <strong>-ed</strong> (watch → watched → watched); los irregulares cambian por completo (speak → spoke → spoken). ❌ speaked → ✅ spoke.</p>

      <SectionTitle color={COLOR}>Errores típicos</SectionTitle>
      <Mistakes items={TENSE_MISTAKES} />
    </>
  );
}
