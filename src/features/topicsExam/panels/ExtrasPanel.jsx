import SectionTitle from "../../../components/SectionTitle";
import { VocabGrid } from "../../examReview/ExamReviewSection";
import { Callout, COLOR, Guide, Mistakes, Table } from "../ui";
import { ADJECTIVE_ORDER, FEELINGS } from "../data";

export default function ExtrasPanel() {
  return (
    <>
      <Callout icon="🎯" title="Por qué está aquí">
        Estos dos temas no aparecen en la lista de <em>Exam topics</em>, pero sí están escritos en el salón: los adjetivos <strong>-ed / -ing</strong> en el pizarrón y el <strong>orden de adjetivos</strong> en la cinta verde de arriba. Vale la pena repasarlos.
      </Callout>

      <SectionTitle color={COLOR}>Sentimientos: cómo decir cómo te sientes</SectionTitle>
      <p>Dos formas, las dos correctas: <strong>sujeto + am/is/are + adjetivo</strong> o <strong>sujeto + feel/feels + adjetivo</strong>. <em>I am sad / I feel sad</em> = Estoy triste / Me siento triste. Para preguntar: <strong>How do you feel?</strong> — ¿Cómo te sientes?</p>
      <VocabGrid entries={FEELINGS} />
      <Guide title="“Apenado” depende del contexto" icon="😳">
        <p><strong>embarrassed</strong>: pena por una situación incómoda. <strong>ashamed</strong>: vergüenza por algo que consideras malo. <strong>sorry</strong>: pesar o disculpa. <strong>shy</strong>: timidez de carácter.</p>
        <p>⚠️ <strong>Embarrassed</strong> no significa “embarazada”. Embarazada se dice <strong>pregnant</strong>.</p>
      </Guide>

      <SectionTitle color={COLOR}>Adjetivos -ed / -ing</SectionTitle>
      <p><strong>-ed</strong> describe <em>cómo te sientes</em>. <strong>-ing</strong> describe <em>lo que provoca</em> ese sentimiento.</p>
      <Table
        headings={["Sentimiento (-ed)", "Lo que lo provoca (-ing)", "Ejemplo traducido"]}
        rows={[
          ["interested — interesado", "interesting — interesante", "I am interested. The topic is interesting."],
          ["bored — aburrido", "boring — aburrido / tedioso", "I am bored. The video is boring."],
          ["excited — emocionado", "exciting — emocionante", "I am excited. The trip is exciting."],
          ["embarrassed — avergonzado", "embarrassing — vergonzoso", "I am embarrassed. It is embarrassing."],
          ["tired — cansado", "tiring — cansado (que cansa)", "I am tired. The class is tiring."],
        ]}
      />
      <Callout icon="⚠️" title="No todo lo que termina en -ing es progresivo" tone="warn">
        <strong>She is speaking</strong> → speaking es un verbo de acción: present progressive.<br />
        <strong>She is interesting</strong> → interesting es un adjetivo: significa “Ella es interesante”, no que esté haciendo algo.<br />
        Una persona puede provocar el sentimiento: <strong>He is boring</strong> = Él es aburrido (aburre a los demás) ≠ <strong>He is bored</strong> = Él está aburrido.
      </Callout>

      <SectionTitle color={COLOR}>Orden de adjetivos — la cinta verde</SectionTitle>
      <p>Cuando pones <strong>varios adjetivos antes de un sustantivo</strong>, el inglés sigue siempre este orden. Además, en inglés el adjetivo va <strong>antes</strong> del sustantivo: en español “un carro rojo”, en inglés <strong>a red car</strong>.</p>
      <div className="exam-order">
        {ADJECTIVE_ORDER.map(([label, what]) => (
          <span key={label} className="exam-order-chip"><b>{label.replace(/^\d+\.\s/, "")}</b><span>{what}</span></span>
        ))}
      </div>
      <Table headings={["Posición", "Qué describe", "Ejemplos"]} rows={ADJECTIVE_ORDER} />
      <Guide title="Cómo armar la frase paso a paso" icon="🧩">
        <ol>
          <li>Escribe el sustantivo al final: <strong>… car</strong>.</li>
          <li>Clasifica cada adjetivo: <em>nice</em> = opinión, <em>big</em> = tamaño, <em>new</em> = edad.</li>
          <li>Acomódalos en el orden de la cinta: <strong>a nice big new car</strong> — un carro bonito, grande y nuevo.</li>
        </ol>
        <p><strong>a small old Mexican wooden box</strong> — Size → Age → Origin → Material.<br /><strong>a beautiful round black Italian table</strong> — Opinion → Shape → Color → Origin.</p>
        <p>Entre estos adjetivos <strong>no van comas ni and</strong>: ❌ a big, new car / ❌ a big and new car → ✅ a big new car. Con dos o tres basta; nadie usa los siete juntos.</p>
      </Guide>
      <Mistakes items={[
        { wrong: "a red big car", right: "a big red car", note: "Size va antes que Color." },
        { wrong: "a car red", right: "a red car", note: "En inglés el adjetivo va antes del sustantivo." },
        { wrong: "two beautifuls gardens", right: "two beautiful gardens", note: "Los adjetivos en inglés nunca llevan plural." },
      ]} />
    </>
  );
}
