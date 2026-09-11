import SectionTitle from "../../../components/SectionTitle";
import { VocabGrid } from "../../examReview/ExamReviewSection";
import { Callout, COLOR, Guide, Table } from "../ui";
import { SOCIAL_MEDIA, TECHNOLOGY } from "../data";

export function TechnologyPanel() {
  return (
    <>
      <Callout icon="🎯" title="Qué te van a pedir en el examen">
        Relacionar cada aparato con su traducción o con su imagen, y usarlo dentro de una oración con <strong>There is / There are</strong> o con los dos tiempos presentes.
      </Callout>
      <SectionTitle color={COLOR}>Equipo de tecnología</SectionTitle>
      <VocabGrid entries={TECHNOLOGY} />
      <Guide title="Detalles que suelen preguntarse" icon="🔍">
        <p><strong>Headphones</strong> casi siempre va en plural: <em>a pair of headphones</em> = un par de audífonos. Por eso: <strong>There are</strong> headphones / <strong>Are there</strong> any headphones?</p>
        <p><strong>Monitor</strong> es el aparato completo; <strong>screen</strong> es la pantalla. <strong>Mouse</strong> tiene plural irregular: one mouse → two <strong>mice</strong>.</p>
        <p><strong>Equipment</strong> es incontable: ❌ two equipments → ✅ <em>two pieces of equipment</em>, y siempre <strong>There is</strong> some equipment.</p>
      </Guide>
      <SectionTitle color={COLOR}>Úsalo con los otros temas</SectionTitle>
      <Table
        headings={["Con There is / There are", "Con Simple present", "Con Present progressive"]}
        rows={[
          ["There is a printer next to the monitor.", "I use my laptop every day.", "She is charging her smartphone now."],
          ["There are two speakers on the desk.", "He doesn't use headphones at work.", "They are testing the webcam right now."],
          ["Is there a charger in your bag?", "Does she use a mouse or the touchpad?", "Is he using the microphone at the moment?"],
        ]}
      />
    </>
  );
}

export function SocialMediaPanel() {
  return (
    <>
      <Callout icon="🎯" title="Qué te van a pedir en el examen">
        Traducir vocabulario de redes sociales y usarlo en oraciones. Varias palabras son <strong>sustantivo y verbo a la vez</strong>: esa es la parte que suelen calificar.
      </Callout>
      <SectionTitle color={COLOR}>Redes sociales</SectionTitle>
      <VocabGrid entries={SOCIAL_MEDIA} />
      <Guide title="La misma palabra, dos funciones" icon="🔁">
        <Table
          headings={["Palabra", "Como sustantivo", "Como verbo"]}
          rows={[
            ["post", "a post = una publicación", "to post = publicar"],
            ["like", "a like = un me gusta", "to like = darle me gusta"],
            ["comment", "a comment = un comentario", "to comment = comentar"],
            ["share", "—", "to share = compartir"],
            ["message", "a message = un mensaje", "to message = enviar un mensaje"],
          ]}
        />
        <p><strong>Upload</strong> sube algo de tu dispositivo a internet; <strong>download</strong> lo baja de internet a tu dispositivo.</p>
        <p><strong>Log in</strong> = iniciar sesión; <strong>log out</strong> = cerrar sesión; <strong>sign up</strong> = crear una cuenta.</p>
      </Guide>
      <SectionTitle color={COLOR}>Úsalo con los otros temas</SectionTitle>
      <Table
        headings={["Con There is / There are", "Con Simple present", "Con Present progressive"]}
        rows={[
          ["There is a new notification.", "I check social media every morning.", "I am uploading a video right now."],
          ["There are ten comments on my post.", "She doesn't share her password.", "They are commenting on the photo now."],
          ["Are there any messages?", "Do you follow her profile?", "Is he posting a story at the moment?"],
        ]}
      />
    </>
  );
}
