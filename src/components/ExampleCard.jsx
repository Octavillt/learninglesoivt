import Sentence from "./Sentence";

export default function ExampleCard({ pts, esp }) {
  return (
    <div className="example-card">
      <div style={{ lineHeight: 2 }}>
        <Sentence pts={pts} />
      </div>
      {esp && (
        <div className="example-card-translation">
          🇲🇽 <em>{esp}</em>
        </div>
      )}
    </div>
  );
}
