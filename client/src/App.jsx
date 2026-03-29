import { useState, useEffect } from "react";

const API = "/api/sales";
const POLL_INTERVAL = 30000; // 30 seconds

const LINKS = [
  { label: "VSL — Público frío (recomendado)", url: "https://go.hotmart.com/D105102229U?ap=5050", highlight: true },
  { label: "Página de ventas", url: "https://go.hotmart.com/D105102229U" },
  { label: "Checkout personalizado", url: "https://go.hotmart.com/D105102229U?ap=bbb0" },
  { label: "Checkout 85% descuento", url: "https://go.hotmart.com/D105102229U?ap=0c9d" },
  { label: "Checkout limpio", url: "https://go.hotmart.com/D105102229U?ap=4d3f" },
  { label: "Plan $29 (downsell)", url: "https://go.hotmart.com/D105102229U?ap=34a5", note: "Solo si vio la oferta principal y no compró" },
  { label: "Testimonios", url: "https://go.hotmart.com/D105102229U?ap=307b" },
  { label: "Contenido detallado", url: "https://go.hotmart.com/D105102229U?ap=c186" },
  { label: "Paneo plataforma", url: "https://go.hotmart.com/D105102229U?ap=7b13" },
  { label: "Página de producto", url: "https://go.hotmart.com/D105102229U?dp=1" },
  { label: "Materiales promocionales (Drive)", url: "https://drive.google.com/drive/folders/10mnoll5hXgQjtp1id8jHRHHQjRYxEHhf", highlight: true },
];

const MEMBERS = [
  {
    id: 0, name: "Líder", initials: "LI", color: "#185FA5", bg: "#E6F1FB",
    role: "Estratega & Creador Principal",
    skills: ["Marketing", "Redes sociales", "Diseño", "Video", "IA", "Canva"]
  },
  {
    id: 1, name: "Miembro 2", initials: "M2", color: "#0F6E56", bg: "#E1F5EE",
    role: "Diseño & Edición",
    skills: ["Canva", "Edición de video/imagen", "Computadora avanzada"]
  },
  {
    id: 2, name: "Miembro 3", initials: "M3", color: "#854F0B", bg: "#FAEEDA",
    role: "Ejecutor de Tareas",
    skills: ["Videojuegos", "Seguir instrucciones", "PC/Teléfono básico"]
  },
  {
    id: 3, name: "Miembro 4", initials: "M4", color: "#993556", bg: "#FBEAF0",
    role: "Promotor en Redes",
    skills: ["Redes sociales", "Mucho tiempo disponible"]
  }
];

const WEEK_TASKS = [
  {
    week: 1, label: "Semana 1 – Preparación y lanzamiento",
    recurring: [
      { member: 0, task: "Revisar métricas del día anterior y ajustar estrategia" },
      { member: 1, task: "Crear 1 imagen/gráfico promocional diario en Canva" },
      { member: 2, task: "Compartir los posts del equipo en grupos de Facebook/WhatsApp (lista provista)" },
      { member: 3, task: "Publicar 2 stories en Instagram/TikTok usando materiales del productor" }
    ],
    unique: [
      { day: 1, member: 0, task: "Configurar todas las cuentas: TikTok, Instagram, Facebook Page, canal YouTube" },
      { day: 1, member: 1, task: "Diseñar plantillas base en Canva: stories, posts, banners" },
      { day: 1, member: 2, task: "Crear lista de 30 grupos de Facebook y WhatsApp relacionados a motos" },
      { day: 1, member: 3, task: "Seguir 50 cuentas relacionadas a motos en Instagram/TikTok" },
      { day: 2, member: 0, task: "Crear el primer video VSL adaptado con IA para TikTok/Reels" },
      { day: 2, member: 1, task: "Editar y exportar el video del Líder con subtítulos" },
      { day: 3, member: 0, task: "Escribir los primeros 3 copies de anuncio (para frío, tibio y caliente)" },
      { day: 3, member: 3, task: "Enviar el primer mensaje de presentación a 20 amigos/contactos moteros" },
      { day: 4, member: 0, task: "Publicar el primer video en YouTube + TikTok + Reels" },
      { day: 5, member: 1, task: "Crear carrusel de '5 cosas que puedes aprender en Mecánica de Motos VIP'" },
      { day: 6, member: 0, task: "Grabar video de testimonio/review del producto" },
      { day: 7, member: 2, task: "Reportar resultados de la semana: grupos donde se compartió, reacciones recibidas" }
    ]
  },
  {
    week: 2, label: "Semana 2 – Contenido y engagement",
    recurring: [
      { member: 0, task: "Revisar métricas y responder comentarios en todos los canales" },
      { member: 1, task: "Crear 1 pieza visual diaria (alternar: post, story, carrusel)" },
      { member: 2, task: "Compartir contenido del equipo en grupos + comentar 5 posts de motos por día" },
      { member: 3, task: "Publicar 3 stories diarias + responder DMs con el link de afiliado" }
    ],
    unique: [
      { day: 8, member: 0, task: "Crear video '¿Cuánto cuesta reparar una moto en taller vs aprenderlo tú mismo?'" },
      { day: 9, member: 1, task: "Diseñar infografía comparativa: costo taller vs. precio del curso" },
      { day: 10, member: 3, task: "Crear TikTok/Reel de 30 seg usando materiales del productor" },
      { day: 11, member: 0, task: "Publicar en Facebook con el link de testimonios para audiencia tibia" },
      { day: 12, member: 2, task: "Buscar y reportar 10 nuevos grupos activos de motos (Telegram, Facebook)" },
      { day: 13, member: 0, task: "Crear un hilo de Twitter/X o post largo en Facebook sobre mecánica básica" },
      { day: 14, member: 1, task: "Editar video resumen de la semana con mejores momentos/métricas" }
    ]
  },
  {
    week: 3, label: "Semana 3 – Escalado y prueba social",
    recurring: [
      { member: 0, task: "Analizar qué contenido tuvo más clics/ventas y duplicarlo" },
      { member: 1, task: "Crear variaciones de los mejores posts de la semana 2" },
      { member: 2, task: "Aumentar a 40 grupos diarios donde compartir contenido" },
      { member: 3, task: "Publicar 4 stories diarias + 1 video corto propio de motos" }
    ],
    unique: [
      { day: 15, member: 0, task: "Lanzar campaña de '7 días aprendiendo mecánica' en TikTok/Reels (serie)" },
      { day: 16, member: 1, task: "Crear banner especial con oferta del checkout al 85% de descuento" },
      { day: 17, member: 3, task: "Publicar el checkout con descuento en todos los grupos y stories con urgencia" },
      { day: 18, member: 0, task: "Grabar video respondiendo las 5 objeciones más comunes de compra" },
      { day: 19, member: 2, task: "Recolectar y documentar comentarios positivos para usarlos como prueba social" },
      { day: 20, member: 0, task: "Publicar contenido con los testimonios recolectados" },
      { day: 21, member: 1, task: "Crear kit de stories para que Miembro 3 y Miembro 4 usen los próximos 10 días" }
    ]
  },
  {
    week: 4, label: "Semana 4 – Cierre y urgencia",
    recurring: [
      { member: 0, task: "Publicar recordatorio diario de la oferta con cuenta regresiva" },
      { member: 1, task: "Actualizar gráficos con el precio y fecha límite de la campaña" },
      { member: 2, task: "Responder comentarios y consultas en grupos con script de respuesta provisto" },
      { member: 3, task: "Publicar 5 stories diarias con urgencia de cierre de campaña" }
    ],
    unique: [
      { day: 22, member: 0, task: "Lanzar video final 'Última oportunidad para unirte a Mecánica de Motos VIP'" },
      { day: 23, member: 1, task: "Diseñar gráfico de cuenta regresiva para stories (7 días restantes)" },
      { day: 24, member: 3, task: "Enviar mensaje personalizado a todos los que interactuaron pero no compraron" },
      { day: 25, member: 0, task: "Activar link de plan $29 para quienes no compraron la oferta principal" },
      { day: 26, member: 2, task: "Compartir el link del plan $29 en todos los grupos con mensaje diferente" },
      { day: 27, member: 0, task: "Publicar video de resultados de la campaña + agradecimiento a la comunidad" },
      { day: 28, member: 1, task: "Crear reporte visual del mes: alcance, clics, ventas estimadas" },
      { day: 29, member: 0, task: "Reunión de equipo: analizar qué funcionó, qué mejorar para el próximo mes" },
      { day: 30, member: 3, task: "Último push: compartir en todas las redes con mensaje de cierre definitivo" }
    ]
  }
];

function getTasksForDay(dayNumber) {
  const weekIndex = Math.min(Math.floor((dayNumber - 1) / 7), 3);
  const week = WEEK_TASKS[weekIndex];
  const recurring = week.recurring.map((t, i) => ({
    ...t, id: `r-${weekIndex}-${i}-${dayNumber}`, type: "recurrente"
  }));
  const unique = week.unique.filter(t => t.day === dayNumber).map((t, i) => ({
    ...t, id: `u-${dayNumber}-${i}`, type: "única"
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
  const [startDate, setStartDate] = useState("");
  const [started, setStarted] = useState(false);
  const [currentDay, setCurrentDay] = useState(1);
  const [completed, setCompleted] = useState({});
  const [view, setView] = useState("day");

  // Live sales data from API
  const [salesData, setSalesData] = useState({ count: 0, totalRevenue: 0, totalCommission: 0, sales: [] });
  const [salesLoading, setSalesLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [copied, setCopied] = useState(null);

  function copyLink(url) {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(url);
      setTimeout(() => setCopied(null), 1500);
    });
  }

  useEffect(() => {
    if (!started) return;
    let active = true;

    async function fetchSales() {
      setSalesLoading(true);
      try {
        const res = await fetch(API);
        if (res.ok) {
          const data = await res.json();
          if (active) {
            setSalesData(data);
            setLastUpdated(new Date());
          }
        }
      } catch (_) {
        // server may be cold-starting, silently ignore
      } finally {
        if (active) setSalesLoading(false);
      }
    }

    fetchSales();
    const interval = setInterval(fetchSales, POLL_INTERVAL);
    return () => { active = false; clearInterval(interval); };
  }, [started]);

  const endDate = startDate ? addDays(new Date(startDate), 29) : null;
  const today = startDate ? (() => {
    const diff = Math.floor((Date.now() - new Date(startDate).getTime()) / 86400000);
    return Math.min(Math.max(diff + 1, 1), 30);
  })() : 1;

  const tasks = started ? getTasksForDay(currentDay) : [];

  function toggleTask(id) {
    setCompleted(prev => ({ ...prev, [id]: !prev[id] }));
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

  const dayProgress = tasks.length > 0
    ? Math.round((tasks.filter(t => completed[t.id]).length / tasks.length) * 100)
    : 0;

  const overallProgress = Math.round(((currentDay - 1) / 30) * 100);

  if (!started) {
    return (
      <div style={{ maxWidth: 480, margin: "2rem auto", padding: "0 1rem" }}>
        <div style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-lg)", padding: "2rem" }}>
          <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#E6F1FB", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#185FA5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <h2 style={{ margin: "0 0 4px", fontSize: 18, fontWeight: 500, color: "var(--color-text-primary)" }}>Dashboard de Campaña</h2>
          <p style={{ margin: "0 0 1.5rem", fontSize: 14, color: "var(--color-text-secondary)" }}>Mecánica de Motos VIP — Equipo Afiliado</p>
          <label style={{ fontSize: 13, color: "var(--color-text-secondary)", display: "block", marginBottom: 6 }}>Fecha de inicio de la campaña</label>
          <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} style={{ marginBottom: "1rem" }} />
          <button onClick={() => { if (startDate) setStarted(true); }}
            style={{ width: "100%", padding: "10px", background: "#185FA5", color: "#fff", border: "none", borderRadius: "var(--border-radius-md)", fontSize: 14, fontWeight: 500 }}>
            Iniciar campaña
          </button>
        </div>
      </div>
    );
  }

  const start = new Date(startDate);

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "1rem" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem", flexWrap: "wrap", gap: 8 }}>
        <div>
          <h2 style={{ margin: 0, fontSize: 18, fontWeight: 500, color: "var(--color-text-primary)" }}>Mecánica de Motos VIP</h2>
          <p style={{ margin: "2px 0 0", fontSize: 13, color: "var(--color-text-secondary)" }}>
            {fmt(start)} → {fmt(endDate)} &nbsp;·&nbsp; Día {today} de 30
          </p>
        </div>
        <div style={{ fontSize: 12, color: "var(--color-text-tertiary)", textAlign: "right" }}>
          {salesLoading ? "Actualizando..." : lastUpdated ? `Actualizado ${lastUpdated.toLocaleTimeString("es-HN")}` : ""}
        </div>
      </div>

      {/* Overall progress */}
      <div style={{ background: "var(--color-background-secondary)", borderRadius: "var(--border-radius-md)", padding: "12px 16px", marginBottom: "1rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "var(--color-text-secondary)", marginBottom: 6 }}>
          <span>Progreso general de campaña</span><span>{overallProgress}%</span>
        </div>
        <div style={{ height: 6, background: "var(--color-border-tertiary)", borderRadius: 4 }}>
          <div style={{ height: "100%", width: `${overallProgress}%`, background: "#185FA5", borderRadius: 4, transition: "width 0.3s" }} />
        </div>
      </div>

      {/* Metric cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0,1fr))", gap: 10, marginBottom: "1rem" }}>
        {[
          { label: "Día actual", value: currentDay },
          { label: "Ventas reales", value: salesData.count },
          { label: "Ingresos totales", value: `$${salesData.totalRevenue.toFixed(2)}` },
          { label: "Mis comisiones", value: `$${salesData.totalCommission.toFixed(2)}` }
        ].map(c => (
          <div key={c.label} style={{ background: "var(--color-background-secondary)", borderRadius: "var(--border-radius-md)", padding: "10px 12px" }}>
            <p style={{ margin: 0, fontSize: 12, color: "var(--color-text-secondary)" }}>{c.label}</p>
            <p style={{ margin: "4px 0 0", fontSize: 20, fontWeight: 500, color: "var(--color-text-primary)" }}>{c.value}</p>
          </div>
        ))}
      </div>

      {/* Recent sales */}
      {salesData.sales.length > 0 && (
        <div style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-lg)", padding: "14px 16px", marginBottom: "1rem" }}>
          <p style={{ margin: "0 0 10px", fontWeight: 500, fontSize: 14, color: "var(--color-text-primary)" }}>Ventas recientes</p>
          {salesData.sales.slice(0, 5).map(s => (
            <div key={s.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "7px 0", borderTop: "0.5px solid var(--color-border-tertiary)", fontSize: 13 }}>
              <div>
                <span style={{ color: "var(--color-text-primary)", fontWeight: 500 }}>{s.buyerName}</span>
                <span style={{ color: "var(--color-text-tertiary)", marginLeft: 8 }}>{s.buyerCountry}</span>
              </div>
              <div style={{ textAlign: "right" }}>
                <span style={{ color: "#185FA5", fontWeight: 500 }}>{s.currency} {s.price}</span>
                <span style={{ color: "var(--color-text-tertiary)", marginLeft: 8, fontSize: 11 }}>
                  {new Date(s.date).toLocaleDateString("es-HN")}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* View toggle */}
      <div style={{ display: "flex", gap: 8, marginBottom: "1rem" }}>
        {[["day", "Vista diaria"], ["overview", "Vista equipo"], ["links", "Links"]].map(([v, label]) => (
          <button key={v} onClick={() => setView(v)}
            style={{ padding: "6px 16px", fontSize: 13, background: view === v ? "#185FA5" : "transparent", color: view === v ? "#fff" : "var(--color-text-secondary)", border: `0.5px solid ${view === v ? "#185FA5" : "var(--color-border-secondary)"}`, borderRadius: "var(--border-radius-md)" }}>
            {label}
          </button>
        ))}
      </div>

      {view === "day" && (
        <>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1rem" }}>
            <button onClick={() => setCurrentDay(d => Math.max(1, d - 1))} style={{ padding: "4px 12px" }}>←</button>
            <div style={{ flex: 1, textAlign: "center" }}>
              <span style={{ fontWeight: 500, fontSize: 15 }}>Día {currentDay} — {fmt(addDays(start, currentDay - 1))}</span>
              <span style={{ marginLeft: 8, fontSize: 12, color: "var(--color-text-secondary)" }}>
                {WEEK_TASKS[Math.min(Math.floor((currentDay - 1) / 7), 3)].label}
              </span>
            </div>
            <button onClick={() => setCurrentDay(d => Math.min(30, d + 1))} style={{ padding: "4px 12px" }}>→</button>
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--color-text-secondary)", marginBottom: 4 }}>
              <span>Tareas del día completadas</span><span>{dayProgress}%</span>
            </div>
            <div style={{ height: 4, background: "var(--color-border-tertiary)", borderRadius: 4 }}>
              <div style={{ height: "100%", width: `${dayProgress}%`, background: dayProgress === 100 ? "#1D9E75" : "#185FA5", borderRadius: 4, transition: "width 0.3s" }} />
            </div>
          </div>

          {MEMBERS.map(m => {
            const mTasks = tasks.filter(t => t.member === m.id);
            if (mTasks.length === 0) return null;
            return (
              <div key={m.id} style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-lg)", padding: "14px 16px", marginBottom: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <div style={{ width: 34, height: 34, borderRadius: "50%", background: m.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 500, color: m.color, flexShrink: 0 }}>{m.initials}</div>
                  <div>
                    <p style={{ margin: 0, fontWeight: 500, fontSize: 14, color: "var(--color-text-primary)" }}>{m.name}</p>
                    <p style={{ margin: 0, fontSize: 12, color: "var(--color-text-secondary)" }}>{m.role}</p>
                  </div>
                </div>
                {mTasks.map(t => (
                  <div key={t.id} onClick={() => toggleTask(t.id)}
                    style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "8px 0", borderTop: "0.5px solid var(--color-border-tertiary)", cursor: "pointer" }}>
                    <div style={{ width: 18, height: 18, borderRadius: 4, border: `1.5px solid ${completed[t.id] ? m.color : "var(--color-border-secondary)"}`, background: completed[t.id] ? m.color : "transparent", flexShrink: 0, marginTop: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {completed[t.id] && <svg width="10" height="8" viewBox="0 0 10 8"><path d="M1 4l3 3 5-6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>}
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ margin: 0, fontSize: 13, color: completed[t.id] ? "var(--color-text-tertiary)" : "var(--color-text-primary)", textDecoration: completed[t.id] ? "line-through" : "none", lineHeight: 1.5 }}>{t.task}</p>
                      <span style={{ fontSize: 11, color: t.type === "única" ? "#185FA5" : "var(--color-text-tertiary)", marginTop: 2, display: "inline-block" }}>{t.type === "única" ? "Tarea especial del día" : "Tarea recurrente"}</span>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </>
      )}

      {view === "overview" && (
        <div>
          {MEMBERS.map(m => {
            const prog = memberProgress(m.id);
            const pct = prog.total > 0 ? Math.round((prog.done / prog.total) * 100) : 0;
            return (
              <div key={m.id} style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-lg)", padding: "14px 16px", marginBottom: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <div style={{ width: 38, height: 38, borderRadius: "50%", background: m.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 500, color: m.color, flexShrink: 0 }}>{m.initials}</div>
                  <div style={{ flex: 1 }}>
                    <p style={{ margin: 0, fontWeight: 500, fontSize: 14, color: "var(--color-text-primary)" }}>{m.name}</p>
                    <p style={{ margin: 0, fontSize: 12, color: "var(--color-text-secondary)" }}>{m.role}</p>
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 500, color: m.color }}>{prog.done}/{prog.total}</span>
                </div>
                <div style={{ marginBottom: 8 }}>
                  <div style={{ height: 5, background: "var(--color-border-tertiary)", borderRadius: 4 }}>
                    <div style={{ height: "100%", width: `${pct}%`, background: m.color, borderRadius: 4, transition: "width 0.4s" }} />
                  </div>
                  <p style={{ margin: "4px 0 0", fontSize: 11, color: "var(--color-text-tertiary)" }}>{pct}% de tareas completadas en el mes</p>
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

      {view === "links" && (
        <div>
          {LINKS.map(link => (
            <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer"
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "var(--color-background-primary)", border: `0.5px solid ${link.highlight ? "#185FA5" : "var(--color-border-tertiary)"}`, borderRadius: "var(--border-radius-lg)", padding: "12px 16px", marginBottom: 8, textDecoration: "none", gap: 12 }}>
              <div>
                <p style={{ margin: 0, fontSize: 13, fontWeight: link.highlight ? 500 : 400, color: link.highlight ? "#185FA5" : "var(--color-text-primary)" }}>{link.label}</p>
                {link.note && <p style={{ margin: "2px 0 0", fontSize: 11, color: "var(--color-text-tertiary)" }}>{link.note}</p>}
              </div>
              <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                <button onClick={e => { e.preventDefault(); copyLink(link.url); }}
                  style={{ padding: "4px 10px", fontSize: 11, background: copied === link.url ? "#1D9E75" : "#f0f0f0", color: copied === link.url ? "#fff" : "#555", border: "none", borderRadius: 4 }}>
                  {copied === link.url ? "Copiado" : "Copiar"}
                </button>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ alignSelf: "center" }}><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </a>
          ))}
        </div>
      )}

      <p style={{ textAlign: "center", fontSize: 11, color: "var(--color-text-tertiary)", marginTop: "1.5rem" }}>
        Haz clic en las tareas para marcarlas como completadas · ventas actualizadas cada 30s
      </p>
    </div>
  );
}
