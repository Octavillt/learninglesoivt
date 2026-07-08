export default function SectionTitle({ color, children }) {
  return (
    <h3 style={{
      color: color || "#94a3b8",
      borderLeft: `3px solid ${color || "#475569"}`,
      paddingLeft: "10px",
      margin: "22px 0 10px",
      fontSize: "15px",
      fontWeight: 700,
    }}>
      {children}
    </h3>
  );
}
