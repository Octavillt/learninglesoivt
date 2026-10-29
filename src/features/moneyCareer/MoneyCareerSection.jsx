import TopicHeading from "../../components/TopicHeading";
import RelatedTopic from "../../components/RelatedTopic";
import RuleBox from "../../components/RuleBox";
import SectionTitle from "../../components/SectionTitle";
import { MONEY_OPPOSITES, MONEY_EXTRA, MONEY_PREPOSITIONS, CAREER_PLANS, CAREER_EXTRA, FUTURE_EXAMPLES } from "./data";

const COLOR = "#10B981";
const card = { background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" };
const text = { color: "#cbd5e1", fontSize: "14px", lineHeight: 1.8 };
const translation = { color: "#94a3b8", fontSize: "13px", marginTop: "4px" };

const side = { flex: "1 1 120px", textAlign: "center", minWidth: 0 };

function OppositePair({ pair }) {
  const [a, b, example] = [pair.a, pair.b, pair.example];
  return (
    <div style={{ ...card, borderLeft: `3px solid ${COLOR}` }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap", gap: "6px 10px" }}>
        <div style={side}>
          <div lang="en" style={{ ...text, color: "#f8fafc", fontWeight: 700 }}>{a[0]}</div>
          <div style={translation}>🇲🇽 {a[1]}</div>
        </div>
        <div aria-hidden="true" style={{ color: COLOR, fontSize: "18px", fontWeight: 800 }}>↔</div>
        <div style={side}>
          <div lang="en" style={{ ...text, color: "#f8fafc", fontWeight: 700 }}>{b[0]}</div>
          <div style={translation}>🇲🇽 {b[1]}</div>
        </div>
      </div>
      <div lang="en" style={{ ...text, marginTop: "10px" }}>{example[0]}</div>
      <div style={translation}>🇲🇽 {example[1]}</div>
    </div>
  );
}

export default function MoneyCareerSection() {
  return (
    <div>
      <TopicHeading topicId="moneyCareer" />
      <div style={{ ...card, ...text }}>
        💡 Este vocabulario te sirve para hablar de dinero y de tus planes de trabajo. Aprende las palabras en pares
        de opuestos y las colocaciones de carrera como una sola unidad; después úsalas con{" "}
        <span lang="en">going to</span> para contar tus planes.
      </div>

      <SectionTitle color={COLOR}>💵 El dinero en pares de opuestos</SectionTitle>
      <p style={text}>Cada palabra tiene su opuesto: apréndelas juntas.</p>
      {MONEY_OPPOSITES.map(pair => <OppositePair key={pair.a[0]} pair={pair} />)}
      <RuleBox icon="🔁" rule="Tres de estos verbos son irregulares" color={COLOR}>
        <p style={text}>
          <span lang="en">buy → bought</span>, <span lang="en">sell → sold</span>, <span lang="en">spend → spent</span>.{" "}
          <span lang="en">Save</span> es regular: <span lang="en">save → saved</span> (sonido /d/).
          No confundas <span lang="en">bought</span> (de <span lang="en">buy</span>) con <span lang="en">brought</span> (de <span lang="en">bring</span>).
        </p>
        <RelatedTopic levelId="verbos" topicId="verbFinder" label="Consultar los verbos en Verbos a la mano" />
        <RelatedTopic levelId="basico2" topicId="adjectives" label="Repasar adjetivos y opuestos" />
      </RuleBox>

      <SectionTitle color={COLOR}>➕ Más palabras para hablar de dinero</SectionTitle>
      {MONEY_EXTRA.map(([en, es]) => (
        <div key={en} style={{ ...card, borderLeft: `3px solid ${COLOR}` }}>
          <div lang="en" style={{ ...text, fontWeight: 700 }}>{en}</div>
          <div style={translation}>🇲🇽 {es}</div>
        </div>
      ))}
      <RuleBox icon="⚠️" rule="Las preposiciones cambian el sentido" color={COLOR}>
        {MONEY_PREPOSITIONS.map(([en, es]) => (
          <div key={en} style={{ marginBottom: "10px" }}>
            <div lang="en" style={{ ...text, fontWeight: 700 }}>{en}</div>
            <div style={translation}>🇲🇽 {es}</div>
          </div>
        ))}
        <p style={text}>
          Ojo con «ganar»: <span lang="en">earn money</span> es ganar dinero trabajando; <span lang="en">win</span> es
          ganar un juego, un premio o la lotería (<span lang="en">win the lottery</span>).
        </p>
      </RuleBox>

      <SectionTitle color={COLOR}>💼 Planes de carrera: colocaciones</SectionTitle>
      <p style={text}>Estas colocaciones describen cómo quieres trabajar en el futuro.</p>
      {CAREER_PLANS.map(([emoji, en, es]) => (
        <div key={en} style={{ ...card, borderLeft: `3px solid ${COLOR}` }}>
          <div lang="en" style={{ ...text, fontWeight: 700 }}>{emoji} {en}</div>
          <div style={translation}>🇲🇽 {es}</div>
        </div>
      ))}
      <SectionTitle color={COLOR}>➕ Más colocaciones de trabajo</SectionTitle>
      {CAREER_EXTRA.map(([en, es]) => (
        <div key={en} style={{ ...card, borderLeft: `3px solid ${COLOR}` }}>
          <div lang="en" style={{ ...text, fontWeight: 700 }}>{en}</div>
          <div style={translation}>🇲🇽 {es}</div>
        </div>
      ))}
      <RuleBox icon="⚠️" rule="Cuidado con las preposiciones" color={COLOR}>
        <p style={text}>
          <span lang="en">Outdoors</span> y <span lang="en">overseas</span> no llevan preposición:{" "}
          <span lang="en">work outdoors</span>, <span lang="en">work overseas</span> (✗ <span lang="en">work in outdoors</span>, ✗{" "}
          <span lang="en">work in overseas</span>). Desde casa es <span lang="en">from home</span> (✗{" "}
          <span lang="en">work in home</span>). Para la empresa usa <span lang="en">for</span> (<span lang="en">work for a large company</span>){" "}
          y para la profesión usa <span lang="en">as</span> (<span lang="en">work as a nurse</span>).
        </p>
        <RelatedTopic levelId="basico1" topicId="jobs" label="Repasar oficios y profesiones" />
      </RuleBox>

      <SectionTitle color={COLOR}>🗓️ Habla de tus planes con going to</SectionTitle>
      <RuleBox icon="🔗" rule="Probably y want to" color={COLOR}>
        <p style={text}>
          Para un plan probable, <span lang="en">probably</span> va entre <span lang="en">am/is/are</span> y{" "}
          <span lang="en">going to</span>: <span lang="en">I'm probably going to manage people.</span> En negativa va
          antes de <span lang="en">isn't/aren't</span>: <span lang="en">She probably isn't going to work overseas.</span>{" "}
          Para un deseo usa <span lang="en">want to</span> + verbo base: <span lang="en">I want to work for a large company.</span>
        </p>
        <RelatedTopic levelId="basico5" topicId="goingTo" label="Repasar los planes con going to" />
      </RuleBox>
      {FUTURE_EXAMPLES.map(([en, es]) => (
        <div key={en} style={{ ...card, borderLeft: `3px solid ${COLOR}` }}>
          <div lang="en" style={{ color: "#f8fafc", fontSize: "14px", fontWeight: 700 }}>{en}</div>
          <div style={translation}>🇲🇽 {es}</div>
        </div>
      ))}

      <SectionTitle color={COLOR}>🎯 Practica lo aprendido</SectionTitle>
      <p style={text}>
        Escribe tres oraciones sobre tu futuro: un plan de carrera con <span lang="en">going to</span>, algo para lo que
        vas a ahorrar y algo en lo que no quieres gastar. Después pregúntale a otra persona:{" "}
        <span lang="en">What are you going to do in your future career?</span> Usa el Quiz para repasar el vocabulario.
      </p>
    </div>
  );
}
