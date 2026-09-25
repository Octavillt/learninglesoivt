import { useCallback, useRef, useState } from "react";
import { timeToWords, formatDigitalClock } from "./timeToWords";

const SIZE = 220;
const CENTER = SIZE / 2;
const HOUR_R = 55;
const MIN_R = 85;

function angleFromCenter(cx, cy, x, y) {
  const deg = (Math.atan2(y - cy, x - cx) * 180) / Math.PI + 90;
  return (deg + 360) % 360;
}

export default function AnalogClock() {
  const [hour, setHour] = useState(9);
  const [minute, setMinute] = useState(36);
  const svgRef = useRef(null);
  const dragging = useRef(null);

  const pointFromEvent = useCallback((e) => {
    const rect = svgRef.current.getBoundingClientRect();
    const scale = SIZE / rect.width;
    const x = (e.clientX - rect.left) * scale;
    const y = (e.clientY - rect.top) * scale;
    return angleFromCenter(CENTER, CENTER, x, y);
  }, []);

  const applyAngle = useCallback((hand, angle) => {
    if (hand === "minute") {
      const m = Math.round(angle / 6) % 60;
      setMinute(m);
    } else {
      const h12 = angle / 30;
      const wholeHour = Math.floor(h12) % 12;
      setHour(wholeHour === 0 ? 12 : wholeHour);
    }
  }, []);

  const handleMove = useCallback((e) => {
    if (!dragging.current) return;
    applyAngle(dragging.current, pointFromEvent(e));
  }, [pointFromEvent, applyAngle]);

  const startDrag = (hand) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    dragging.current = hand;
    e.currentTarget.setPointerCapture?.(e.pointerId);
    applyAngle(hand, pointFromEvent(e));

    const move = (ev) => {
      ev.preventDefault();
      handleMove(ev);
    };
    const up = () => {
      dragging.current = null;
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
    };
    window.addEventListener("pointermove", move, { passive: false });
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
  };

  const hourAngle = ((hour % 12) + minute / 60) * 30;
  const minuteAngle = minute * 6;

  const hourEnd = {
    x: CENTER + HOUR_R * Math.sin((hourAngle * Math.PI) / 180),
    y: CENTER - HOUR_R * Math.cos((hourAngle * Math.PI) / 180),
  };
  const minuteEnd = {
    x: CENTER + MIN_R * Math.sin((minuteAngle * Math.PI) / 180),
    y: CENTER - MIN_R * Math.cos((minuteAngle * Math.PI) / 180),
  };

  const phrase = timeToWords(hour, minute);

  return (
    <div style={{ background: "var(--surface, #1e293b)", borderRadius: "14px", padding: "18px", marginBottom: "14px", textAlign: "center", touchAction: "none" }}>
      <div style={{ color: "#94a3b8", fontSize: "12px", fontWeight: 700, marginBottom: "10px" }}>
        🖱️ Arrastra las manecillas
      </div>
      <svg
        ref={svgRef}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        width={SIZE}
        height={SIZE}
        style={{ touchAction: "none", userSelect: "none", WebkitUserSelect: "none" }}
      >
        <circle cx={CENTER} cy={CENTER} r={CENTER - 6} fill="#0f172a" stroke="#334155" strokeWidth="3" />
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * 30 * Math.PI) / 180;
          const x1 = CENTER + (CENTER - 16) * Math.sin(a);
          const y1 = CENTER - (CENTER - 16) * Math.cos(a);
          const x2 = CENTER + (CENTER - 24) * Math.sin(a);
          const y2 = CENTER - (CENTER - 24) * Math.cos(a);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#475569" strokeWidth="2" />;
        })}
        {Array.from({ length: 12 }).map((_, i) => {
          const n = i === 0 ? 12 : i;
          const a = (i * 30 * Math.PI) / 180;
          const x = CENTER + (CENTER - 36) * Math.sin(a);
          const y = CENTER - (CENTER - 36) * Math.cos(a);
          return (
            <text key={i} x={x} y={y + 4} textAnchor="middle" fontSize="12" fontWeight="700" fill="#94a3b8">
              {n}
            </text>
          );
        })}

        <line x1={CENTER} y1={CENTER} x2={hourEnd.x} y2={hourEnd.y} stroke="#38bdf8" strokeWidth="6" strokeLinecap="round" />
        <line x1={CENTER} y1={CENTER} x2={minuteEnd.x} y2={minuteEnd.y} stroke="#fb923c" strokeWidth="4" strokeLinecap="round" />
        <circle cx={CENTER} cy={CENTER} r="5" fill="#f8fafc" />

        {/* minute hand grab area drawn first so the (longer) hour hand wins overlap near the center */}
        <line
          x1={CENTER} y1={CENTER} x2={minuteEnd.x} y2={minuteEnd.y}
          stroke="transparent" strokeWidth="30" strokeLinecap="round"
          style={{ cursor: "grab", touchAction: "none" }}
          onPointerDown={startDrag("minute")}
        />
        <line
          x1={CENTER} y1={CENTER} x2={hourEnd.x} y2={hourEnd.y}
          stroke="transparent" strokeWidth="30" strokeLinecap="round"
          style={{ cursor: "grab", touchAction: "none" }}
          onPointerDown={startDrag("hour")}
        />
      </svg>

      <div style={{ display: "flex", justifyContent: "center", gap: "14px", marginTop: "8px", fontSize: "11px" }}>
        <span style={{ color: "#38bdf8", fontWeight: 700 }}>● hour hand</span>
        <span style={{ color: "#fb923c", fontWeight: 700 }}>● minute hand</span>
      </div>

      <div style={{ marginTop: "14px", background: "var(--surface-deep, #0f172a)", borderRadius: "10px", padding: "12px" }}>
        <div style={{ color: "#94a3b8", fontWeight: 800, fontSize: "16px", marginBottom: "6px" }}>
          {formatDigitalClock(hour, minute)}
        </div>
        <div style={{ color: "#f8fafc", fontWeight: 700, fontSize: "17px" }}>
          {phrase}
        </div>
      </div>
    </div>
  );
}
