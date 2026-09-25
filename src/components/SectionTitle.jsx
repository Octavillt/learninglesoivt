export default function SectionTitle({ color, children }) {
  return (
    <h3 className="section-title" style={{ "--section-accent": color || "#64748b" }}>
      {children}
    </h3>
  );
}
