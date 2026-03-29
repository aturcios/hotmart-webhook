import { useState } from "react";
import { PLATFORM_COLORS, MEMBERS } from "./data";

export default function TaskModal({ task, onClose, completed, onToggleComplete }) {
  const [stepsDone, setStepsDone] = useState({});
  if (!task) return null;

  const member = MEMBERS.find(m => m.id === task.member);
  const d = task.details || {};
  const platform = PLATFORM_COLORS[d.platform] || PLATFORM_COLORS.general;
  const steps = d.steps || [];
  const tools = d.tools || [];
  const isDone = !!completed[task.id];

  function toggleStep(i) {
    setStepsDone(prev => ({ ...prev, [i]: !prev[i] }));
  }

  const stepProgress = steps.length > 0
    ? Math.round((steps.filter((_, i) => stepsDone[i]).length / steps.length) * 100)
    : 0;

  return (
    <div
      onClick={onClose}
      style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 1000, display: "flex", justifyContent: "flex-end" }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{ width: "min(500px, 100vw)", height: "100%", background: "#fff", overflowY: "auto", padding: "1.5rem", display: "flex", flexDirection: "column", gap: 16, boxShadow: "-4px 0 24px rgba(0,0,0,0.12)" }}
      >
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: member?.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 600, color: member?.color, flexShrink: 0 }}>
              {member?.initials}
            </div>
            <div>
              <p style={{ margin: 0, fontSize: 12, color: "#888" }}>{member?.name} · {member?.role}</p>
            </div>
          </div>
          <button onClick={onClose} style={{ background: "none", border: "none", fontSize: 20, color: "#999", cursor: "pointer", padding: "0 4px", lineHeight: 1 }}>×</button>
        </div>

        {/* Task title */}
        <p style={{ margin: 0, fontSize: 15, fontWeight: 600, color: "#111", lineHeight: 1.4 }}>{task.task}</p>

        {/* Badges row */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
          <span style={{ fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 20, background: platform.bg, color: platform.color }}>
            {platform.label}
          </span>
          <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 20, background: "#f0f0f0", color: "#555", display: "flex", alignItems: "center", gap: 4 }}>
            ⏱ {d.estimatedTime || "?"} min
          </span>
          <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 20, background: task.type === "única" ? "#E6F1FB" : "#f0f0f0", color: task.type === "única" ? "#185FA5" : "#666" }}>
            {task.type === "única" ? "Tarea especial del día" : "Tarea recurrente"}
          </span>
        </div>

        {/* Tools */}
        {tools.length > 0 && (
          <div>
            <p style={{ margin: "0 0 6px", fontSize: 12, fontWeight: 600, color: "#555", textTransform: "uppercase", letterSpacing: 0.5 }}>Herramientas</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {tools.map(t => (
                <span key={t} style={{ fontSize: 12, padding: "3px 10px", borderRadius: 6, background: "#F0F4FA", color: "#185FA5", fontWeight: 500 }}>{t}</span>
              ))}
            </div>
          </div>
        )}

        {/* Steps */}
        {steps.length > 0 && (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <p style={{ margin: 0, fontSize: 12, fontWeight: 600, color: "#555", textTransform: "uppercase", letterSpacing: 0.5 }}>Pasos ({steps.filter((_, i) => stepsDone[i]).length}/{steps.length})</p>
              <span style={{ fontSize: 11, color: stepProgress === 100 ? "#1D9E75" : "#888" }}>{stepProgress}%</span>
            </div>
            <div style={{ height: 3, background: "#f0f0f0", borderRadius: 4, marginBottom: 10 }}>
              <div style={{ height: "100%", width: `${stepProgress}%`, background: stepProgress === 100 ? "#1D9E75" : "#185FA5", borderRadius: 4, transition: "width 0.3s" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {steps.map((step, i) => (
                <div key={i} onClick={() => toggleStep(i)} style={{ display: "flex", alignItems: "flex-start", gap: 10, cursor: "pointer" }}>
                  <div style={{ width: 22, height: 22, borderRadius: "50%", border: `2px solid ${stepsDone[i] ? "#1D9E75" : "#ddd"}`, background: stepsDone[i] ? "#1D9E75" : "#fff", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", marginTop: 1 }}>
                    {stepsDone[i] && <svg width="10" height="8" viewBox="0 0 10 8"><path d="M1 4l3 3 5-6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>}
                    {!stepsDone[i] && <span style={{ fontSize: 10, color: "#aaa", fontWeight: 600 }}>{i + 1}</span>}
                  </div>
                  <p style={{ margin: 0, fontSize: 13, color: stepsDone[i] ? "#aaa" : "#222", textDecoration: stepsDone[i] ? "line-through" : "none", lineHeight: 1.5 }}>{step}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Expected result */}
        {d.expectedResult && (
          <div>
            <p style={{ margin: "0 0 6px", fontSize: 12, fontWeight: 600, color: "#555", textTransform: "uppercase", letterSpacing: 0.5 }}>Resultado esperado</p>
            <p style={{ margin: 0, fontSize: 13, color: "#333", lineHeight: 1.5, padding: "10px 12px", background: "#F5F9F5", borderRadius: 8, borderLeft: "3px solid #1D9E75" }}>{d.expectedResult}</p>
          </div>
        )}

        {/* Content example */}
        {d.contentExample && (
          <div>
            <p style={{ margin: "0 0 6px", fontSize: 12, fontWeight: 600, color: "#555", textTransform: "uppercase", letterSpacing: 0.5 }}>Ejemplo de contenido</p>
            <p style={{ margin: 0, fontSize: 13, color: "#333", lineHeight: 1.5, padding: "10px 12px", background: "#FFFBEA", borderRadius: 8, borderLeft: "3px solid #F6C343" }}>{d.contentExample}</p>
          </div>
        )}

        {/* Complete button */}
        <button
          onClick={() => onToggleComplete(task.id)}
          style={{ marginTop: "auto", padding: "12px", fontSize: 14, fontWeight: 600, borderRadius: 8, border: "none", cursor: "pointer", background: isDone ? "#1D9E75" : "#185FA5", color: "#fff" }}
        >
          {isDone ? "✓ Tarea completada" : "Marcar como completada"}
        </button>
      </div>
    </div>
  );
}
