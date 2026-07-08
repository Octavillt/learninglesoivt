export default function RuleBox({ icon, rule, color, children }) {
  return (
    <div style={{
      background: "#1e293b", borderRadius: "10px",
      padding: "14px 16px", marginBottom: "10px",
      borderLeft: `4px solid ${color || "#475569"}`,
    }}>
      <div style={{ color: color || "#94a3b8", fontWeight: 800, fontSize: "14px", marginBottom: "8px" }}>
        {icon} {rule}
      </div>
      {children}
    </div>
  );
}
