import TopicHeading from "../../components/TopicHeading";
import RelatedTopic from "../../components/RelatedTopic";
import RuleBox from "../../components/RuleBox";
import SectionTitle from "../../components/SectionTitle";
import { EXAMPLES, QUESTIONS, REGULAR_RULES, IRREGULARS, ED_PRONUNCIATION, TIME_EXPRESSIONS, BOOK_STORY, BOOK_NEGATIVES, BOOK_CONVERSATION } from "./data";

const COLOR = "#FB7185";
const card = { background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" };
const text = { color: "#cbd5e1", fontSize: "14px", lineHeight: 1.8 };
const translation = { color: "#94a3b8", fontSize: "13px", marginTop: "4px" };

export default function SimplePastSection() {
  return (
    <div>
      <TopicHeading topicId="simplePast" />
      <div style={{ ...card, ...text }}>
        💡 El <strong>pasado simple</strong> cuenta lo que ya ocurrió: actividades pasadas (<span lang="en">past activities</span>),
        rutinas y hábitos pasados (<span lang="en">past routines, past habits</span>) y acciones cortas o terminadas
        (<span lang="en">short actions</span>). Por ejemplo: <span lang="en">I went to Puebla</span> significa «Fui a Puebla».
      </div>

      <RuleBox icon="🔑" rule="did ya marca el pasado: el verbo vuelve a su forma base" color={COLOR}>
        <ul style={{ ...text, paddingLeft: "20px" }}>
          <li>En negaciones y preguntas, <strong>did / did not / didn't</strong> ya indica el pasado: ✗ He didn't went → ✓ He didn't go; ✗ Did she ate? → ✓ Did she eat?</li>
          <li>El pasado simple tiene la misma forma para todos los sujetos: I went, he went, they went. No agregues -s con he/she/it.</li>
          <li>Las respuestas cortas usan <strong>did / didn't</strong>: Yes, she did. / No, he didn't.</li>
        </ul>
        <RelatedTopic levelId="basico2" topicId="simplePresent" label="Comparar con do/does del presente simple" />
      </RuleBox>

      <SectionTitle color={COLOR}>✍️ Verbos regulares: cómo escribir -ed</SectionTitle>
      {REGULAR_RULES.map(([forms, rule]) => (
        <div key={forms} style={{ ...card, borderLeft: `3px solid ${COLOR}` }}>
          <div lang="en" style={{ ...text, fontWeight: 700 }}>{forms}</div>
          <div style={translation}>{rule}</div>
        </div>
      ))}

      <RuleBox icon="🏃" rule="Los verbos irregulares se aprenden de memoria" color={COLOR}>
        <p style={text}>No siguen la regla de -ed; repasa su lista completa y apréndelos en pares:</p>
        <ul style={{ ...text, listStyle: "none", paddingLeft: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "10px 18px" }}>
          {IRREGULARS.map(([forms, meaning]) => (
            <li key={forms}>
              <div lang="en" style={{ color: "#f8fafc", fontWeight: 700, fontSize: "14px" }}>{forms}</div>
              <div style={translation}>{meaning}</div>
            </li>
          ))}
        </ul>
        <RelatedTopic levelId="basico2" topicId="irregularVerbs" label="Repasar la lista de verbos irregulares" />
      </RuleBox>

      <SectionTitle color={COLOR}>🗣️ Pronunciación de -ed</SectionTitle>
      <RuleBox icon="👂" rule="La regla depende del sonido final del verbo, no de la letra" color={COLOR}>
        <p style={text}>La terminación -ed se pronuncia de tres maneras según el último sonido del verbo base:</p>
      </RuleBox>
      {ED_PRONUNCIATION.map(({ sound, after, examples }) => (
        <div key={sound} style={{ ...card, borderLeft: `3px solid ${COLOR}` }}>
          <div style={{ color: COLOR, fontSize: "15px", fontWeight: 700 }}>{sound}</div>
          <div style={text}>{after}</div>
          <div style={{ ...text, marginTop: "4px" }}>
            Ejemplos:{" "}
            {examples.map((word, i) => (
              <span key={word}>
                {i > 0 && ", "}
                <span lang="en" style={{ color: "#f8fafc", fontWeight: 700 }}>
                  {word.slice(0, -2)}<strong style={{ color: COLOR }}>{word.slice(-2)}</strong>
                </span>
              </span>
            ))}
          </div>
        </div>
      ))}

      <SectionTitle color={COLOR}>📖 Ejemplos con traducción</SectionTitle>
      {EXAMPLES.map(([en, es]) => (
        <div key={en} style={{ ...card, borderLeft: `3px solid ${COLOR}` }}>
          <div lang="en" style={{ color: "#f8fafc", fontSize: "14px", fontWeight: 700 }}>{en}</div>
          <div style={translation}>🇲🇽 {es}</div>
        </div>
      ))}

      <SectionTitle color={COLOR}>❓ Preguntas y respuestas</SectionTitle>
      <RuleBox icon="💬" rule="Preguntas con did y respuestas cortas" color={COLOR}>
        <p style={text}>Para preguntar, coloca <strong>did</strong> antes del sujeto y conserva el verbo en forma base: <span lang="en">Did Octa eat cemitas?</span>. Responde con <strong>Yes, sujeto + did</strong> o <strong>No, sujeto + didn't</strong>.</p>
        <p style={text}>Para pedir información, coloca la palabra WH al principio: <span lang="en">What did you do yesterday?</span> (¿Qué hiciste ayer?). También existe la pregunta negativa: <span lang="en">Didn't Miguel eat a sandwich?</span></p>
        <RelatedTopic levelId="basico2" topicId="whQuestions" label="Repasar el significado de las palabras WH" />
      </RuleBox>
      {QUESTIONS.map(([q, a, es]) => (
        <div key={q} style={card}>
          <div lang="en" style={{ color: COLOR, fontSize: "14px", fontWeight: 700 }}>{q}</div>
          <div lang="en" style={text}>→ {a}</div>
          <div style={translation}>🇲🇽 {es}</div>
        </div>
      ))}

      <SectionTitle color={COLOR}>⏰ Expresiones de tiempo pasado</SectionTitle>
      <RuleBox icon="🗓️" rule="Ubican la acción en el pasado" color={COLOR}>
        <ul style={{ ...text, paddingLeft: "20px" }}>
          {TIME_EXPRESSIONS.map(([en, es]) => (
            <li key={en}><span lang="en">{en}</span> — {es}</li>
          ))}
        </ul>
        <p style={text}>Ojo: se dice <span lang="en">last week</span>, sin «the»; y <span lang="en">in December</span>, con la preposición in.</p>
      </RuleBox>

      <SectionTitle color={COLOR}>📘 Práctica del libro</SectionTitle>
      <div style={{ ...card, borderLeft: `3px solid ${COLOR}`, marginBottom: "12px" }}>
        <div style={text}>📝 {BOOK_STORY.prompt}</div>
        <p lang="en" style={{ ...text, marginTop: "6px" }}>{BOOK_STORY.text}</p>
        <details className="lesson-extension" style={{ margin: "10px 0 0" }}>
          <summary>Ver la historia completa</summary>
          <p lang="en" style={text}>{BOOK_STORY.solution}</p>
          <div style={translation}>Repaso: {BOOK_STORY.answers.map(([base, past]) => `${base} → ${past}`).join(", ")}</div>
        </details>
      </div>
      <div style={{ ...card, borderLeft: `3px solid ${COLOR}`, marginBottom: "12px" }}>
        <div style={text}>✏️ {BOOK_NEGATIVES.prompt}</div>
        <ol style={{ ...text, paddingLeft: "20px", marginTop: "6px" }}>
          {BOOK_NEGATIVES.rows.map(([prompt]) => <li key={prompt} lang="en">{prompt}</li>)}
        </ol>
        <details className="lesson-extension" style={{ margin: "10px 0 0" }}>
          <summary>Ver las negaciones</summary>
          <ol style={{ ...text, paddingLeft: "20px" }}>
            {BOOK_NEGATIVES.rows.map(([, answer]) => <li key={answer} lang="en">{answer}</li>)}
          </ol>
        </details>
      </div>
      <div style={{ ...card, borderLeft: `3px solid ${COLOR}`, marginBottom: "12px" }}>
        <div style={text}>💬 {BOOK_CONVERSATION.prompt}</div>
        <div lang="en" style={{ ...text, marginTop: "6px" }}>
          {BOOK_CONVERSATION.blanks.map(line => <div key={line}>{line}</div>)}
        </div>
        <details className="lesson-extension" style={{ margin: "10px 0 0" }}>
          <summary>Ver la conversación completa</summary>
          <div lang="en" style={text}>
            {BOOK_CONVERSATION.answers.map(line => <div key={line}>{line}</div>)}
          </div>
        </details>
      </div>

      <SectionTitle color={COLOR}>🎯 Practica lo aprendido</SectionTitle>
      <p style={text}>Escribe dos cosas que hiciste ayer y una que no hiciste. Después pregunta a otra persona «What did you do yesterday?» y responde con respuestas cortas. Usa el Quiz para practicar afirmaciones, negaciones y preguntas.</p>
    </div>
  );
}
