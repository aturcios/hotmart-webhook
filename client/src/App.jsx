import { useState, useEffect } from "react";
import { MEMBERS, WEEK_TASKS, WEEKLY_GOALS, LINKS, SOCIAL, PLATFORM_COLORS } from "./data";
import TaskModal from "./TaskModal";
import ResourcesTab from "./ResourcesTab";

const API = "/api/sales";
const POLL_INTERVAL = 30000;
const PASSWORD = "22301938";
const LAUNCH_DATE = new Date("2026-04-01T00:00:00");

function useCountdown(target) {
  const [timeLeft, setTimeLeft] = useState(() => Math.max(0, target - Date.now()));
  useEffect(() => {
    if (timeLeft <= 0) return;
    const t = setInterval(() => setTimeLeft(Math.max(0, target - Date.now())), 1000);
    return () => clearInterval(t);
  }, [target, timeLeft]);
  const days  = Math.floor(timeLeft / 86400000);
  const hours = Math.floor((timeLeft % 86400000) / 3600000);
  const mins  = Math.floor((timeLeft % 3600000) / 60000);
  const secs  = Math.floor((timeLeft % 60000) / 1000);
  return { days, hours, mins, secs, launched: timeLeft <= 0 };
}

function getTasksForDay(dayNumber) {
  const weekIndex = Math.min(Math.floor((dayNumber - 1) / 7), 3);
  const week = WEEK_TASKS[weekIndex];
  const recurring = week.recurring.map((t, i) => ({
    ...t, id: `r-${weekIndex}-${i}-${dayNumber}`, type: "recurrente",
  }));
  const unique = week.unique.filter(t => t.day === dayNumber).map((t, i) => ({
    ...t, id: `u-${dayNumber}-${i}`, type: "única",
  }));
  return [...recurring, ...unique];
}

function fmt(date) {
  return date.toLocaleDateString("es-HN", { day: "2-digit", month: "short", year: "numeric" });
}

function addDays(date, n) {
  const d = new Date(date);
  d.setDate(d.getDate() + n);
  return d;
}

export default function App() {
  const [auth, setAuth]       = useState(() => localStorage.getItem("dash_auth") === "1");
  const [pwInput, setPwInput] = useState("");
  const [pwError, setPwError] = useState(false);

  const [currentDay, setCurrentDay] = useState(() => {
    const diff = Math.floor((Date.now() - LAUNCH_DATE.getTime()) / 86400000);
    return Math.min(Math.max(diff + 1, 1), 30);
  });
  const [completed, setCompleted] = useState(() => {
    try { return JSON.parse(localStorage.getItem("dash_completed") || "{}"); }
    catch { return {}; }
  });
  const [view, setView]           = useState("day");
  const [modalTask, setModalTask] = useState(null);
  const [copied, setCopied]       = useState(null);

  const countdown = useCountdown(LAUNCH_DATE.getTime());
  const today = Math.min(Math.max(Math.floor((Date.now() - LAUNCH_DATE.getTime()) / 86400000) + 1, 1), 30);
  const isPastDay = currentDay < today;

  const [salesData, setSalesData]   = useState({ count: 0, totalRevenue: 0, totalCommission: 0, sales: [] });
  const [salesLoading, setSalesLoading] = useState(false);
  const [lastUpdated, setLastUpdated]   = useState(null);

  function submitPassword() {
    if (pwInput === PASSWORD) {
      localStorage.setItem("dash_auth", "1");
      setAuth(true);
    } else {
      setPwError(true);
      setTimeout(() => setPwError(false), 1500);
    }
  }

  function copyLink(text) {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(text);
      setTimeout(() => setCopied(null), 1500);
    });
  }

  function toggleTask(id) {
    setCompleted(prev => {
      const next = { ...prev, [id]: !prev[id] };
      localStorage.setItem("dash_completed", JSON.stringify(next));
      return next;
    });
  }

  useEffect(() => {
    if (!auth) return;
    let active = true;
    async function fetchSales() {
      setSalesLoading(true);
      try {
        const res = await fetch(API);
        if (res.ok && active) {
          setSalesData(await res.json());
          setLastUpdated(new Date());
        }
      } catch (_) {}
      finally { if (active) setSalesLoading(false); }
    }
    fetchSales();
    const interval = setInterval(fetchSales, POLL_INTERVAL);
    return () => { active = false; clearInterval(interval); };
  }, [auth]);

  const endDate  = addDays(LAUNCH_DATE, 29);
  const tasks    = getTasksForDay(currentDay);
  const weekIdx  = Math.min(Math.floor((currentDay - 1) / 7), 3);
  const weekGoal = WEEKLY_GOALS[weekIdx];

  const dayProgress = tasks.length > 0
    ? Math.round((tasks.filter(t => completed[t.id]).length / tasks.length) * 100)
    : 0;
  const overallProgress = Math.round(((today - 1) / 30) * 100);

  function getPastIncomplete() {
    const warnings = [];
    for (let d = 1; d < today; d++) {
      const dayTasks = getTasksForDay(d);
      const missed = dayTasks.filter(t => !completed[t.id]);
      if (missed.length > 0) {
        const byMember = MEMBERS.map(m => ({
          ...m, missed: missed.filter(t => t.member === m.id),
        })).filter(m => m.missed.length > 0);
        warnings.push({ day: d, date: addDays(LAUNCH_DATE, d - 1), byMember, total: missed.length });
      }
    }
    return warnings;
  }

  function memberProgress(memberId) {
    let total = 0, done = 0;
    for (let d = 1; d <= 30; d++) {
      getTasksForDay(d).filter(t => t.member === memberId).forEach(t => {
        total++;
        if (completed[t.id]) done++;
      });
    }
    return { total, done };
  }

  // ── LOGIN SCREEN ──────────────────────────────────────────────────────────
  if (!auth) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f0f4f9", padding: "1rem" }}>
        <div style={{ maxWidth: 460, width: "100%", background: "#fff", borderRadius: 14, padding: "2rem", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
          <div style={{ width: 52, height: 52, borderRadius: "50%", background: "#E6F1FB", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.2rem" }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#185FA5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <h1 style={{ margin: "0 0 6px", fontSize: 20, fontWeight: 600, color: "#111" }}>Dashboard Afiliados</h1>
          <p style={{ margin: "0 0 6px", fontSize: 15, fontWeight: 500, color: "#185FA5" }}>Mecánica de Motos VIP</p>
          <p style={{ margin: "0 0 1.5rem", fontSize: 13, color: "#666", lineHeight: 1.6 }}>
            Panel privado del equipo afiliado. Aquí coordinamos las tareas diarias de los 4 miembros durante los 30 días de campaña, hacemos seguimiento de ventas en tiempo real y accedemos a todos los enlaces y materiales del producto.
          </p>
          {!countdown.launched && (
            <div style={{ background: "#f0f4f9", borderRadius: 10, padding: "1rem", marginBottom: "1.5rem", textAlign: "center" }}>
              <p style={{ margin: "0 0 10px", fontSize: 12, color: "#888", textTransform: "uppercase", letterSpacing: 1 }}>Lanzamiento en</p>
              <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
                {[["días", countdown.days], ["horas", countdown.hours], ["min", countdown.mins], ["seg", countdown.secs]].map(([label, val]) => (
                  <div key={label} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 28, fontWeight: 700, color: "#185FA5", minWidth: 44, lineHeight: 1 }}>{String(val).padStart(2, "0")}</div>
                    <div style={{ fontSize: 11, color: "#999", marginTop: 3 }}>{label}</div>
                  </div>
                ))}
              </div>
              <p style={{ margin: "10px 0 0", fontSize: 12, color: "#aaa" }}>1 de abril de 2026</p>
            </div>
          )}
          <label style={{ fontSize: 13, color: "#555", display: "block", marginBottom: 6 }}>Contraseña de acceso</label>
          <input type="password" value={pwInput} onChange={e => setPwInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && submitPassword()} placeholder="••••••••"
            style={{ marginBottom: 10, borderColor: pwError ? "#e53e3e" : undefined }} />
          {pwError && <p style={{ margin: "0 0 8px", fontSize: 12, color: "#e53e3e" }}>Contraseña incorrecta</p>}
          <button onClick={submitPassword}
            style={{ width: "100%", padding: "10px", background: "#185FA5", color: "#fff", border: "none", borderRadius: 6, fontSize: 14, fontWeight: 500, cursor: "pointer" }}>
            Entrar
          </button>
        </div>
      </div>
    );
  }

  // ── MAIN DASHBOARD ────────────────────────────────────────────────────────
  const pastIncomplete = getPastIncomplete();

  return (
    <>
      <TaskModal
        task={modalTask}
        onClose={() => setModalTask(null)}
        completed={completed}
        onToggleComplete={(id) => { toggleTask(id); }}
      />

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "1rem" }}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem", flexWrap: "wrap", gap: 8 }}>
          <div>
            <h2 style={{ margin: 0, fontSize: 18, fontWeight: 500, color: "#111" }}>Mecánica de Motos VIP</h2>
            <p style={{ margin: "2px 0 0", fontSize: 13, color: "#666" }}>
              {fmt(LAUNCH_DATE)} → {fmt(endDate)} &nbsp;·&nbsp; Día {today} de 30
            </p>
          </div>
          <div style={{ fontSize: 12, color: "#aaa", textAlign: "right" }}>
            {salesLoading ? "Actualizando..." : lastUpdated ? `Actualizado ${lastUpdated.toLocaleTimeString("es-HN")}` : ""}
          </div>
        </div>

        {/* Overall progress */}
        <div style={{ background: "#f5f5f5", borderRadius: 8, padding: "12px 16px", marginBottom: "1rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "#666", marginBottom: 6 }}>
            <span>Progreso general de campaña</span><span>{overallProgress}%</span>
          </div>
          <div style={{ height: 6, background: "#e0e0e0", borderRadius: 4 }}>
            <div style={{ height: "100%", width: `${overallProgress}%`, background: "#185FA5", borderRadius: 4, transition: "width 0.3s" }} />
          </div>
        </div>

        {/* Metric cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0,1fr))", gap: 10, marginBottom: "1rem" }}>
          {[
            { label: "Día actual",      value: today },
            { label: "Ventas reales",   value: salesData.count },
            { label: "Ingresos totales",value: `$${salesData.totalRevenue.toFixed(2)}` },
            { label: "Mis comisiones",  value: `$${salesData.totalCommission.toFixed(2)}` },
          ].map(c => (
            <div key={c.label} style={{ background: "#f5f5f5", borderRadius: 8, padding: "10px 12px" }}>
              <p style={{ margin: 0, fontSize: 12, color: "#666" }}>{c.label}</p>
              <p style={{ margin: "4px 0 0", fontSize: 20, fontWeight: 500, color: "#111" }}>{c.value}</p>
            </div>
          ))}
        </div>

        {/* Past incomplete alerts */}
        {pastIncomplete.length > 0 && (
          <div style={{ background: "#FFF8E6", border: "1px solid #F6C343", borderRadius: 8, padding: "12px 16px", marginBottom: "1rem" }}>
            <p style={{ margin: "0 0 8px", fontSize: 13, fontWeight: 600, color: "#92600A" }}>
              ⚠ {pastIncomplete.reduce((s, w) => s + w.total, 0)} tarea(s) sin completar en días anteriores
            </p>
            {pastIncomplete.map(w => (
              <div key={w.day} style={{ marginBottom: 4 }}>
                <button onClick={() => { setCurrentDay(w.day); setView("day"); }}
                  style={{ fontSize: 12, fontWeight: 600, color: "#92600A", background: "none", border: "none", padding: 0, cursor: "pointer", textDecoration: "underline" }}>
                  Día {w.day} — {fmt(w.date)}
                </button>
                {w.byMember.map(m => (
                  <span key={m.id} style={{ marginLeft: 8, fontSize: 12, color: "#92600A" }}>{m.name}: {m.missed.length}</span>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* Recent sales */}
        {salesData.sales.length > 0 && (
          <div style={{ background: "#fff", border: "0.5px solid #e8e8e8", borderRadius: 10, padding: "14px 16px", marginBottom: "1rem" }}>
            <p style={{ margin: "0 0 10px", fontWeight: 500, fontSize: 14, color: "#111" }}>Ventas recientes</p>
            {salesData.sales.slice(0, 5).map(s => (
              <div key={s.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "7px 0", borderTop: "0.5px solid #e8e8e8", fontSize: 13 }}>
                <div>
                  <span style={{ color: "#111", fontWeight: 500 }}>{s.buyerName}</span>
                  <span style={{ color: "#aaa", marginLeft: 8 }}>{s.buyerCountry}</span>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span style={{ color: "#185FA5", fontWeight: 500 }}>{s.currency} {s.price}</span>
                  <span style={{ color: "#aaa", marginLeft: 8, fontSize: 11 }}>{new Date(s.date).toLocaleDateString("es-HN")}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: "1rem", flexWrap: "wrap" }}>
          {[["day","Vista diaria"],["overview","Vista equipo"],["links","Enlaces"],["social","Redes Sociales"],["recursos","Recursos"]].map(([v, label]) => (
            <button key={v} onClick={() => setView(v)}
              style={{ padding: "6px 14px", fontSize: 13, background: view === v ? "#185FA5" : "transparent", color: view === v ? "#fff" : "#666", border: `0.5px solid ${view === v ? "#185FA5" : "#ccc"}`, borderRadius: 6, cursor: "pointer" }}>
              {label}
            </button>
          ))}
        </div>

        {/* ── DAY VIEW ── */}
        {view === "day" && (
          <>
            {/* Past-day warning */}
            {isPastDay && tasks.some(t => !completed[t.id]) && (
              <div style={{ background: "#FFF8E6", border: "1px solid #F6C343", borderRadius: 8, padding: "10px 14px", marginBottom: "1rem" }}>
                <p style={{ margin: "0 0 6px", fontSize: 13, fontWeight: 600, color: "#92600A" }}>
                  ⚠ Tareas sin completar — Día {currentDay} ({fmt(addDays(LAUNCH_DATE, currentDay - 1))})
                </p>
                {MEMBERS.filter(m => tasks.some(t => t.member === m.id && !completed[t.id])).map(m => (
                  <p key={m.id} style={{ margin: "2px 0", fontSize: 12, color: "#92600A" }}>
                    · <strong>{m.name}</strong>: {tasks.filter(t => t.member === m.id && !completed[t.id]).length} tarea(s) pendiente(s)
                  </p>
                ))}
              </div>
            )}

            {/* Week goal card */}
            <div style={{ background: "#fff", border: `1px solid ${weekGoal.color}30`, borderLeft: `4px solid ${weekGoal.color}`, borderRadius: 8, padding: "10px 14px", marginBottom: "1rem" }}>
              <p style={{ margin: "0 0 4px", fontSize: 12, fontWeight: 700, color: weekGoal.color, textTransform: "uppercase", letterSpacing: 0.5 }}>Meta — {WEEK_TASKS[weekIdx].label}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 16, fontSize: 12, color: "#444" }}>
                <span>📈 {weekGoal.sales}</span>
                <span>👥 {weekGoal.followers}</span>
                <span>🎯 {weekGoal.milestone}</span>
              </div>
            </div>

            {/* Day navigator */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1rem" }}>
              <button onClick={() => setCurrentDay(d => Math.max(1, d - 1))} style={{ padding: "4px 12px" }}>←</button>
              <div style={{ flex: 1, textAlign: "center" }}>
                <span style={{ fontWeight: 500, fontSize: 15 }}>Día {currentDay} — {fmt(addDays(LAUNCH_DATE, currentDay - 1))}</span>
                {currentDay === today && <span style={{ marginLeft: 8, fontSize: 11, background: "#185FA5", color: "#fff", borderRadius: 10, padding: "1px 7px" }}>hoy</span>}
                {isPastDay && <span style={{ marginLeft: 8, fontSize: 11, background: "#F6C343", color: "#92600A", borderRadius: 10, padding: "1px 7px" }}>pasado</span>}
              </div>
              <button onClick={() => setCurrentDay(d => Math.min(30, d + 1))} style={{ padding: "4px 12px" }}>→</button>
            </div>

            {/* Day progress */}
            <div style={{ marginBottom: "1rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#666", marginBottom: 4 }}>
                <span>Tareas del día completadas</span><span>{dayProgress}%</span>
              </div>
              <div style={{ height: 4, background: "#e0e0e0", borderRadius: 4 }}>
                <div style={{ height: "100%", width: `${dayProgress}%`, background: dayProgress === 100 ? "#1D9E75" : "#185FA5", borderRadius: 4, transition: "width 0.3s" }} />
              </div>
            </div>

            {/* Tasks grouped by member */}
            {MEMBERS.map(m => {
              const mTasks = tasks.filter(t => t.member === m.id);
              if (mTasks.length === 0) return null;
              return (
                <div key={m.id} style={{ background: "#fff", border: "0.5px solid #e8e8e8", borderRadius: 10, padding: "14px 16px", marginBottom: 10 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                    <div style={{ width: 34, height: 34, borderRadius: "50%", background: m.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 500, color: m.color, flexShrink: 0 }}>{m.initials}</div>
                    <div>
                      <p style={{ margin: 0, fontWeight: 500, fontSize: 14, color: "#111" }}>{m.name}</p>
                      <p style={{ margin: 0, fontSize: 12, color: "#666" }}>{m.role}</p>
                    </div>
                  </div>
                  {mTasks.map(t => {
                    const plat = t.details?.platform ? PLATFORM_COLORS[t.details.platform] : null;
                    return (
                      <div key={t.id} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "8px 0", borderTop: "0.5px solid #e8e8e8" }}>
                        {/* Checkbox — toggles completion */}
                        <div onClick={() => toggleTask(t.id)}
                          style={{ width: 18, height: 18, borderRadius: 4, border: `1.5px solid ${completed[t.id] ? m.color : "#ccc"}`, background: completed[t.id] ? m.color : "transparent", flexShrink: 0, marginTop: 2, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                          {completed[t.id] && <svg width="10" height="8" viewBox="0 0 10 8"><path d="M1 4l3 3 5-6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>}
                        </div>
                        {/* Task text — opens modal */}
                        <div style={{ flex: 1, cursor: "pointer" }} onClick={() => setModalTask(t)}>
                          <p style={{ margin: 0, fontSize: 13, color: completed[t.id] ? "#aaa" : "#111", textDecoration: completed[t.id] ? "line-through" : "none", lineHeight: 1.5 }}>{t.task}</p>
                          <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 4 }}>
                            <span style={{ fontSize: 11, color: t.type === "única" ? "#185FA5" : "#999" }}>
                              {t.type === "única" ? "Tarea especial" : "Recurrente"}
                            </span>
                            {plat && (
                              <span style={{ fontSize: 11, padding: "1px 7px", borderRadius: 10, background: plat.bg, color: plat.color, fontWeight: 500 }}>{plat.label}</span>
                            )}
                            {t.details?.estimatedTime && (
                              <span style={{ fontSize: 11, color: "#aaa" }}>⏱ {t.details.estimatedTime} min</span>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </>
        )}

        {/* ── TEAM OVERVIEW ── */}
        {view === "overview" && (
          <div>
            {MEMBERS.map(m => {
              const prog = memberProgress(m.id);
              const pct = prog.total > 0 ? Math.round((prog.done / prog.total) * 100) : 0;
              return (
                <div key={m.id} style={{ background: "#fff", border: "0.5px solid #e8e8e8", borderRadius: 10, padding: "14px 16px", marginBottom: 10 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    <div style={{ width: 38, height: 38, borderRadius: "50%", background: m.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 500, color: m.color, flexShrink: 0 }}>{m.initials}</div>
                    <div style={{ flex: 1 }}>
                      <p style={{ margin: 0, fontWeight: 500, fontSize: 14, color: "#111" }}>{m.name}</p>
                      <p style={{ margin: 0, fontSize: 12, color: "#666" }}>{m.role}</p>
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 500, color: m.color }}>{prog.done}/{prog.total}</span>
                  </div>
                  <div style={{ marginBottom: 8 }}>
                    <div style={{ height: 5, background: "#e0e0e0", borderRadius: 4 }}>
                      <div style={{ height: "100%", width: `${pct}%`, background: m.color, borderRadius: 4, transition: "width 0.4s" }} />
                    </div>
                    <p style={{ margin: "4px 0 0", fontSize: 11, color: "#aaa" }}>{pct}% de tareas completadas en el mes</p>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {m.skills.map(s => (
                      <span key={s} style={{ fontSize: 11, padding: "2px 8px", background: m.bg, color: m.color, borderRadius: 20 }}>{s}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ── ENLACES ── */}
        {view === "links" && (
          <div>
            {LINKS.map(link => (
              <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#fff", border: `0.5px solid ${link.highlight ? "#185FA5" : "#e8e8e8"}`, borderRadius: 10, padding: "12px 16px", marginBottom: 8, textDecoration: "none", gap: 12 }}>
                <div>
                  <p style={{ margin: 0, fontSize: 13, fontWeight: link.highlight ? 500 : 400, color: link.highlight ? "#185FA5" : "#222" }}>{link.label}</p>
                  {link.note && <p style={{ margin: "2px 0 0", fontSize: 11, color: "#aaa" }}>{link.note}</p>}
                </div>
                <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                  <button onClick={e => { e.preventDefault(); copyLink(link.url); }}
                    style={{ padding: "4px 10px", fontSize: 11, background: copied === link.url ? "#1D9E75" : "#f0f0f0", color: copied === link.url ? "#fff" : "#555", border: "none", borderRadius: 4, cursor: "pointer" }}>
                    {copied === link.url ? "Copiado" : "Copiar"}
                  </button>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ alignSelf: "center" }}><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* ── REDES SOCIALES ── */}
        {view === "social" && (
          <div>
            {SOCIAL.map(s => (
              <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: s.bg, border: `0.5px solid ${s.color}30`, borderRadius: 10, padding: "14px 16px", marginBottom: 8, textDecoration: "none", gap: 12 }}>
                <span style={{ fontSize: 14, fontWeight: 500, color: s.color }}>{s.label}</span>
                <div style={{ display: "flex", gap: 6 }}>
                  <button onClick={e => { e.preventDefault(); copyLink(s.url); }}
                    style={{ padding: "4px 10px", fontSize: 11, background: copied === s.url ? "#1D9E75" : "#fff", color: copied === s.url ? "#fff" : "#555", border: "none", borderRadius: 4, cursor: "pointer" }}>
                    {copied === s.url ? "Copiado" : "Copiar"}
                  </button>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ alignSelf: "center" }}><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke={s.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* ── RECURSOS ── */}
        {view === "recursos" && (
          <ResourcesTab copied={copied} onCopy={copyLink} />
        )}

        <p style={{ textAlign: "center", fontSize: 11, color: "#aaa", marginTop: "1.5rem" }}>
          Clic en la tarea para ver detalles · clic en el checkbox para marcarla · ventas actualizadas cada 30s
        </p>
      </div>
    </>
  );
}
