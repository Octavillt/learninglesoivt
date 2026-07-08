import Sentence from "./Sentence";

export default function ExampleCard({ pts, esp }) {
  return (
    <div style={{
      background: "#1e293b", borderRadius: "10px",
      padding: "12px 16px", marginBottom: "8px",
    }}>
      <div style={{ lineHeight: 2 }}>
        <Sentence pts={pts} />
      </div>
      {esp && (
        <div style={{
          color: "#64748b", fontSize: "13px",
          marginTop: "4px", paddingTop: "6px",
          borderTop: "1px solid #334155",
        }}>
          🇲🇽 <em>{esp}</em>
        </div>
      )}
    </div>
  );
}
