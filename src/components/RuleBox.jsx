export default function RuleBox({ icon, rule, color, children }) {
  return (
    <div className="rule-box" style={{ "--rule-accent": color || "#64748b" }}>
      <div className="rule-box-title">
        {icon && <span className="rule-box-icon" aria-hidden="true">{icon}</span>}
        <span>{rule}</span>
      </div>
      {children}
    </div>
  );
}
