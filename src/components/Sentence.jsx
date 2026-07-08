import Token from "./Token";

export default function Sentence({ pts }) {
  return (
    <span>
      {pts.map((x, i) =>
        typeof x === "string"
          ? <span key={i} style={{ fontSize: "15px" }}>{x}</span>
          : <Token key={i} t={x.t} r={x.r} />
      )}
    </span>
  );
}
