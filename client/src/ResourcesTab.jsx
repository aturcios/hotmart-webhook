const HASHTAGS = [
  { platform: "Facebook",  color: "#1877F2", bg: "#E7F0FD", tags: "#motos #mecanicamotos #motociclismo #tallerdemotos #mantenimientomoto #aprendemecanica #moteros #motocicletas #motolife #bikers" },
  { platform: "Instagram", color: "#E1306C", bg: "#FCE8F0", tags: "#mecanicamotos #motos #motolife #moteros #tutorial #aprendeeninstagram #mecanicoamateur #mantenimiento #motociclismo #reels" },
  { platform: "TikTok",    color: "#000000", bg: "#F0F0F0", tags: "#mecanicamotos #aprendeentiktok #motos #fyp #parati #tutorial #tipsmotos #moto #mecánica #viral" },
  { platform: "Pinterest", color: "#E60023", bg: "#FCE8EA", tags: "mecánica de motos · mantenimiento moto · tips motos · aprender mecánica · moto bricolaje · motor moto · reparación moto" },
  { platform: "YouTube",   color: "#FF0000", bg: "#FFE8E8", tags: "mecánica de motos para principiantes · cómo arreglar moto · mantenimiento moto · tutorial mecánica · aprender mecánica" },
];

const SCRIPTS = [
  {
    title: "DM frío (Instagram / TikTok)",
    color: "#E1306C",
    text: `Hola [nombre]! Vi que te interesan las motos 🏍️
¿Tienes moto actualmente o estás pensando en comprar una?
Te pregunto porque tengo algo que podría ayudarte mucho 👇`,
  },
  {
    title: "DM después de interacción",
    color: "#185FA5",
    text: `Hola! Vi tu comentario en mi video sobre [tema] 🔧
¿Sabes cuánto gastas al año en el taller?
La mayoría de esas reparaciones las puedes hacer tú mismo.
¿Te mando más info?`,
  },
  {
    title: "Mensaje WhatsApp grupos (sin spam)",
    color: "#25D366",
    text: `Buenas! Comparto este recurso que encontré para los que quieren aprender mecánica de motos desde casa 🔧
[link VSL]
A mí me parece muy completo, por si les interesa.`,
  },
  {
    title: "Respuesta a objeción: 'muy caro'",
    color: "#854F0B",
    text: `Entiendo! Por eso existe el plan de $29 que te da acceso completo.
Es literalmente lo que cobran en el taller por una revisión básica, pero esto te enseña a hacerlo TÚ para siempre 💪
[link plan $29]`,
  },
];

const CONTENT_IDEAS = [
  { week: 1, color: "#185FA5", ideas: ["Configuración de cuentas y primeras publicaciones", "Video: '¿Por qué aprender mecánica de motos?'", "Comparativa: costo taller vs aprender en casa", "Tutorial: mantenimiento básico para principiantes", "Post de presentación del equipo/canal", "Infografía: errores comunes que dañan tu moto"] },
  { week: 2, color: "#0F6E56", ideas: ["Live/Masterclass: Mecánica básica para principiantes", "Serie de videos: '7 días aprendiendo mecánica'", "Carrusel: '5 cosas que aprenderás en el curso'", "Video: testimonios y resultados de otros alumnos", "Dueto con videos virales de motos", "Infografía: herramientas básicas para tu taller en casa"] },
  { week: 3, color: "#854F0B", ideas: ["Campaña urgencia: banner 85% descuento", "Video: '5 objeciones para NO comprar (y por qué están mal)'", "Prueba social: capturas de comentarios positivos", "Reto: '¿Puedes hacer esto con tu moto?'", "Video: resultados de alumnos que ya tomaron el curso", "Live de preguntas y respuestas sobre mecánica"] },
  { week: 4, color: "#993556", ideas: ["Cuenta regresiva diaria en stories y posts", "Video final: 'Última oportunidad para unirte'", "DMs personalizados a quienes mostraron interés", "Activar plan $29 como downsell", "Video de resultados honestos de la campaña", "Reunión y planificación del mes 2"] },
];

export default function ResourcesTab({ copied, onCopy }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

      {/* Hashtags */}
      <section>
        <h3 style={{ margin: "0 0 10px", fontSize: 14, fontWeight: 600, color: "#111" }}>Hashtags por red social</h3>
        {HASHTAGS.map(h => (
          <div key={h.platform} style={{ background: h.bg, borderRadius: 10, padding: "10px 14px", marginBottom: 8 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: h.color }}>{h.platform}</span>
              <button onClick={() => onCopy(h.tags)}
                style={{ padding: "2px 8px", fontSize: 11, background: copied === h.tags ? "#1D9E75" : "#fff", color: copied === h.tags ? "#fff" : "#555", border: "none", borderRadius: 4, cursor: "pointer" }}>
                {copied === h.tags ? "Copiado" : "Copiar"}
              </button>
            </div>
            <p style={{ margin: 0, fontSize: 12, color: "#555", lineHeight: 1.6 }}>{h.tags}</p>
          </div>
        ))}
      </section>

      {/* Scripts */}
      <section>
        <h3 style={{ margin: "0 0 10px", fontSize: 14, fontWeight: 600, color: "#111" }}>Scripts de mensajes</h3>
        {SCRIPTS.map(s => (
          <div key={s.title} style={{ background: "#fff", border: "0.5px solid #e8e8e8", borderRadius: 10, padding: "12px 14px", marginBottom: 8 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: s.color }}>{s.title}</span>
              <button onClick={() => onCopy(s.text)}
                style={{ padding: "2px 8px", fontSize: 11, background: copied === s.text ? "#1D9E75" : "#f0f0f0", color: copied === s.text ? "#fff" : "#555", border: "none", borderRadius: 4, cursor: "pointer" }}>
                {copied === s.text ? "Copiado" : "Copiar"}
              </button>
            </div>
            <pre style={{ margin: 0, fontSize: 12, color: "#444", whiteSpace: "pre-wrap", lineHeight: 1.6, fontFamily: "inherit", background: "#FFFBEA", padding: "8px 10px", borderRadius: 6 }}>{s.text}</pre>
          </div>
        ))}
      </section>

      {/* Content ideas */}
      <section>
        <h3 style={{ margin: "0 0 10px", fontSize: 14, fontWeight: 600, color: "#111" }}>Ideas de contenido por semana</h3>
        {CONTENT_IDEAS.map(w => (
          <div key={w.week} style={{ background: "#fff", border: `0.5px solid ${w.color}40`, borderRadius: 10, padding: "12px 14px", marginBottom: 8 }}>
            <p style={{ margin: "0 0 8px", fontSize: 13, fontWeight: 600, color: w.color }}>Semana {w.week}</p>
            {w.ideas.map((idea, i) => (
              <p key={i} style={{ margin: "4px 0", fontSize: 12, color: "#444" }}>· {idea}</p>
            ))}
          </div>
        ))}
      </section>

    </div>
  );
}
