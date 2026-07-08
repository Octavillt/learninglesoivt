import { C } from "../styles/colors";

export default function Token({ t, r }) {
  if (!r) return <span style={{ fontSize: "15px" }}>{t}</span>;
  return (
    <span style={{
      color: C[r].fg,
      background: C[r].bg,
      fontWeight: 800,
      padding: "2px 7px",
      borderRadius: "6px",
      margin: "0 1px",
      fontSize: "15px",
    }}>
      {t}
    </span>
  );
}
