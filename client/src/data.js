export const PLATFORM_COLORS = {
  facebook:  { label: "Facebook",  color: "#1877F2", bg: "#E7F0FD" },
  instagram: { label: "Instagram", color: "#E1306C", bg: "#FCE8F0" },
  tiktok:    { label: "TikTok",    color: "#000000", bg: "#F0F0F0" },
  pinterest: { label: "Pinterest", color: "#E60023", bg: "#FCE8EA" },
  whatsapp:  { label: "WhatsApp",  color: "#25D366", bg: "#E8F8EE" },
  youtube:   { label: "YouTube",   color: "#FF0000", bg: "#FFE8E8" },
  general:   { label: "General",   color: "#185FA5", bg: "#E6F1FB" },
};

export const MEMBERS = [
  { id: 0, name: "Líder",     initials: "LI", color: "#185FA5", bg: "#E6F1FB", role: "Estratega & Creador Principal", skills: ["Marketing","Redes sociales","Diseño","Video","IA","Canva"] },
  { id: 1, name: "Miembro 2", initials: "M2", color: "#0F6E56", bg: "#E1F5EE", role: "Diseño & Edición",              skills: ["Canva","Edición de video/imagen","Computadora avanzada"] },
  { id: 2, name: "Miembro 3", initials: "M3", color: "#854F0B", bg: "#FAEEDA", role: "Ejecutor de Tareas",            skills: ["Videojuegos","Seguir instrucciones","PC/Teléfono básico"] },
  { id: 3, name: "Miembro 4", initials: "M4", color: "#993556", bg: "#FBEAF0", role: "Promotor en Redes",            skills: ["Redes sociales","Mucho tiempo disponible"] },
];

export const WEEKLY_GOALS = [
  { week: 1, color: "#185FA5", sales: "0 ventas (semana de setup)", followers: "200 seguidores / leads", milestone: "Todas las cuentas configuradas y primeros contenidos publicados" },
  { week: 2, color: "#0F6E56", sales: "2–3 ventas esperadas",       followers: "400 seguidores / leads", milestone: "Masterclass realizada y primer video viral intentado" },
  { week: 3, color: "#854F0B", sales: "4–6 ventas esperadas",       followers: "600 seguidores / leads", milestone: "Campaña de urgencia iniciada, segundo ciclo de contenido" },
  { week: 4, color: "#993556", sales: "3–5 ventas (cierre)",        followers: "Meta: 10+ ventas totales acumuladas", milestone: "Oferta de cierre activa en todas las plataformas" },
];

export const LINKS = [
  { label: "VSL — Público frío (recomendado)", url: "https://go.hotmart.com/D105102229U?ap=5050", highlight: true },
  { label: "Página de ventas",                 url: "https://go.hotmart.com/D105102229U" },
  { label: "Checkout personalizado",           url: "https://go.hotmart.com/D105102229U?ap=bbb0" },
  { label: "Checkout 85% descuento",           url: "https://go.hotmart.com/D105102229U?ap=0c9d" },
  { label: "Checkout limpio",                  url: "https://go.hotmart.com/D105102229U?ap=4d3f" },
  { label: "Plan $29 (downsell)",              url: "https://go.hotmart.com/D105102229U?ap=34a5", note: "Solo si vio la oferta principal y no compró" },
  { label: "Testimonios",                      url: "https://go.hotmart.com/D105102229U?ap=307b" },
  { label: "Contenido detallado",              url: "https://go.hotmart.com/D105102229U?ap=c186" },
  { label: "Paneo plataforma",                 url: "https://go.hotmart.com/D105102229U?ap=7b13" },
  { label: "Página de producto",               url: "https://go.hotmart.com/D105102229U?dp=1" },
  { label: "Materiales promocionales (Drive)", url: "https://drive.google.com/drive/folders/10mnoll5hXgQjtp1id8jHRHHQjRYxEHhf", highlight: true },
];

export const SOCIAL = [
  { label: "Facebook",  url: "https://www.facebook.com/MotoRPMPro",    color: "#1877F2", bg: "#E7F0FD" },
  { label: "Instagram", url: "https://www.instagram.com/motorpmpro/",  color: "#E1306C", bg: "#FCE8F0" },
  { label: "TikTok",    url: "https://www.tiktok.com/@motorpmpro",     color: "#000000", bg: "#F0F0F0" },
  { label: "YouTube",   url: "https://www.youtube.com/@MotoRPMPro",    color: "#FF0000", bg: "#FFE8E8" },
  { label: "Pinterest", url: "https://www.pinterest.com/motorpmpro/",  color: "#E60023", bg: "#FCE8EA" },
];

export const WEEK_TASKS = [
  // ─────────────── WEEK 1 ───────────────
  {
    week: 1, label: "Semana 1 – Preparación y lanzamiento",
    recurring: [
      {
        member: 0, task: "Revisar métricas del día anterior y ajustar estrategia",
        details: { platform: "general", estimatedTime: 20, tools: ["Facebook Insights","TikTok Analytics","Instagram Insights","Google Sheets"], expectedResult: "Lista de ajustes concretos para el contenido del día basada en datos reales", contentExample: "Ayer el video de '¿cuánto cobra el taller?' tuvo 3× más views → hoy replicar ese hook con otro problema común de motos.", steps: ["Abrir Facebook Insights, TikTok Analytics e Instagram Insights","Anotar: alcance, clics en enlace y comentarios del día anterior","Identificar el post con mejor rendimiento","Decidir qué formato repetir hoy","Ajustar el copy o el hook si el CTR fue bajo"] }
      },
      {
        member: 1, task: "Crear 1 imagen/gráfico promocional diario en Canva",
        details: { platform: "instagram", estimatedTime: 25, tools: ["Canva","ChatGPT"], expectedResult: "1 imagen lista para publicar en Instagram y Facebook (1080×1080)", contentExample: "Tip del día: 'Si tu moto vibra al frenar, revisa los discos de freno. Aprende a hacerlo tú mismo 👇 [link en bio]'", steps: ["Abrir Canva → buscar plantilla 'post Instagram mecánica'","Cambiar colores a la paleta de marca (azul/naranja)","Escribir un tip de mecánica como titular","Agregar logo y URL del curso al pie","Exportar JPG 1080×1080 para IG y 1200×628 para Facebook"] }
      },
      {
        member: 2, task: "Compartir los posts del equipo en grupos de Facebook/WhatsApp (lista provista)",
        details: { platform: "facebook", estimatedTime: 25, tools: ["Facebook","WhatsApp"], expectedResult: "El contenido del día publicado en al menos 5 grupos activos de motos", contentExample: "'¿Gastas demasiado en el taller? Este curso te enseña mecánica desde cero. Miles ya lo aprovechan 👉 [link VSL]'", steps: ["Abrir la lista de grupos de Facebook asignada","Copiar el post del día (imagen + copy) preparado por el Líder","Publicar en los primeros 5 grupos de la lista","Hacer lo mismo en los grupos de WhatsApp activos","Anotar cualquier grupo que haya rechazado el post"] }
      },
      {
        member: 3, task: "Publicar 3 Stories en Instagram con sticker de enlace al curso",
        details: { platform: "instagram", estimatedTime: 20, tools: ["Instagram","Canva"], expectedResult: "3 stories activas con el sticker de enlace apuntando al VSL", contentExample: "Story 1: imagen del tip del día. Story 2: encuesta '¿Cambias el aceite tú mismo?'. Story 3: CTA 'Mira lo que dicen quienes ya tomaron el curso 👆'", steps: ["Abrir Instagram → ícono de cámara arriba a la izquierda","Story 1: subir la imagen del tip del día + sticker 'Ver más' → VSL","Story 2: sticker de encuesta con pregunta sobre motos","Story 3: texto CTA directo + sticker enlace → Testimonios","Verificar que los tres enlaces funcionen correctamente"] }
      },
      {
        member: 2, task: "Publicar 3 pines en Pinterest con infografías de mecánica",
        details: { platform: "pinterest", estimatedTime: 30, tools: ["Canva","Pinterest"], expectedResult: "3 pines publicados en el tablero correcto con descripciones SEO", contentExample: "'Guía visual: Cambio de aceite paso a paso 🔧 Aprende mecánica desde casa. #mecanicamotos #motos #mantenimiento'", steps: ["Abrir Canva → plantilla Pinterest 1000×1500 px","Diseñar infografía con tip de mecánica visual","Exportar JPG y subir a Pinterest","Título y descripción con palabras clave: 'mecánica motos', 'mantenimiento moto'","Agregar al tablero correspondiente + 10 hashtags"] }
      },
      {
        member: 2, task: "Unirse a 5 grupos de motos en Facebook y compartir 1 post",
        details: { platform: "facebook", estimatedTime: 25, tools: ["Facebook"], expectedResult: "Miembro de 5 nuevos grupos + 1 publicación en grupos donde ya eres miembro", contentExample: "'¿Gastas demasiado en el taller? Este curso te enseña mecánica desde cero 👉 [link VSL]'", steps: ["Buscar en Facebook: 'motos [país]', 'mecánica motos', 'motociclistas'","Solicitar unirse a 5 grupos activos (>1000 miembros)","En grupos donde ya eres miembro, publicar el contenido del día","Responder cualquier comentario en las primeras 2 horas","Anotar los grupos donde la publicación tuvo más engagement"] }
      },
      {
        member: 3, task: "Publicar 1 video corto en TikTok con tip de mecánica (30–60 seg)",
        details: { platform: "tiktok", estimatedTime: 40, tools: ["CapCut","TikTok"], expectedResult: "1 video publicado en TikTok entre 6–9 pm con CTA al link en bio", contentExample: "'¿Por qué tu moto NO arranca en las mañanas? 3 causas reales 🔧 #mecanicamotos #tipsmotos'", steps: ["Grabar o reutilizar clip de moto (máx 60 seg)","Editar en CapCut: agregar texto en pantalla con el tip","Poner audio trending de TikTok de fondo","Caption: hook + tip + CTA 'Link en bio para aprender más'","Publicar entre 6–9 pm hora local"] }
      },
    ],
    unique: [
      {
        day: 1, member: 0, task: "Configurar todas las cuentas: TikTok, Instagram, Facebook Page, canal YouTube",
        details: { platform: "general", estimatedTime: 60, tools: ["TikTok","Instagram","Facebook","YouTube"], expectedResult: "Las 4 plataformas con perfil completo, foto de portada, bio con link del VSL y primer post de bienvenida", contentExample: "Bio Instagram: '🔧 Aprende mecánica de motos desde cero | Ahorra en talleres | Curso completo 👇' + link VSL", steps: ["Crear/actualizar foto de perfil igual en todas las redes (logo MotoRPMPro)","Escribir bio uniforme con emoji de llave + propuesta de valor + link VSL","Configurar el link en bio (Linktree o directo al VSL)","Subir foto de portada en Facebook y YouTube (diseñada en Canva)","Publicar post de bienvenida en cada plataforma"] }
      },
      {
        day: 1, member: 1, task: "Diseñar plantillas base en Canva: stories, posts, banners",
        details: { platform: "general", estimatedTime: 90, tools: ["Canva"], expectedResult: "Kit de 5 plantillas reutilizables: post cuadrado, story, carrusel, thumbnail YouTube, banner Facebook", contentExample: "Paleta de colores: azul #185FA5 + naranja #F6A623 + blanco. Tipografía: Montserrat Bold para títulos, Open Sans para cuerpo.", steps: ["Abrir Canva → crear proyecto 'Kit MotoRPMPro'","Plantilla 1: Post Instagram 1080×1080 con franja de color y espacio para tip","Plantilla 2: Story 1080×1920 con sticker de enlace pre-posicionado","Plantilla 3: Carrusel (10 slides) con portada y slides internos","Plantilla 4: Thumbnail YouTube 1280×720 con cara + texto grande","Plantilla 5: Banner Facebook 1640×856","Guardar como plantillas de marca en Canva"] }
      },
      {
        day: 1, member: 2, task: "Crear lista de 30 grupos de Facebook y WhatsApp relacionados a motos",
        details: { platform: "facebook", estimatedTime: 30, tools: ["Facebook","Google Sheets"], expectedResult: "Hoja de cálculo con 30 grupos (nombre, miembros, frecuencia de posts, estado de membresía)", contentExample: "Buscar: 'Motociclistas Honduras', 'Mecánica Motos Latinoamérica', 'Bikers [país]', 'Motos usadas [ciudad]'", steps: ["Buscar en Facebook los términos: 'motos', 'mecánica', 'motociclistas', 'bikers'","Filtrar por grupos con >500 miembros y actividad reciente","Registrar en Google Sheets: nombre, URL, cantidad de miembros, frecuencia","Solicitar unirse a todos los grupos en que aún no estás","Marcar con colores: verde = miembro activo, amarillo = pendiente, rojo = rechazado"] }
      },
      {
        day: 1, member: 3, task: "Seguir 50 cuentas relacionadas a motos en Instagram/TikTok",
        details: { platform: "instagram", estimatedTime: 30, tools: ["Instagram","TikTok"], expectedResult: "50 cuentas seguidas en Instagram y 50 en TikTok en el nicho de motos y mecánica", contentExample: "Buscar: #mecanicamotos #motos #motociclismo #bikers → seguir cuentas con engagement real (no bots)", steps: ["En Instagram buscar #mecanicamotos → seguir las primeras 25 cuentas activas","Buscar #motociclismo → seguir 25 más","Repetir en TikTok con búsquedas 'mecánica motos' y 'tips motos'","Dar like a los últimos 3 posts de cada cuenta seguida","Comentar algo genuino en 10 de ellas para activar el algoritmo"] }
      },
      {
        day: 2, member: 0, task: "Crear el primer video VSL adaptado con IA para TikTok/Reels",
        details: { platform: "tiktok", estimatedTime: 60, tools: ["CapCut","ChatGPT","TikTok","Instagram"], expectedResult: "Video de 45–60 seg publicado en TikTok y Reels con hook fuerte y CTA al link en bio", contentExample: "Hook: '¿Sabes cuánto te cobra el taller por algo que puedes hacer en 10 minutos?' → Demostración rápida → CTA: 'El curso completo está en mi bio'", steps: ["Usar ChatGPT para generar el script: 'Escríbeme un video de 60 seg sobre [tip de mecánica] con hook, desarrollo y CTA'","Grabar el video siguiendo el script (no leer, actuar natural)","Editar en CapCut: subtítulos automáticos, música trending, texto en pantalla","Publicar en TikTok con caption: hook + hashtags (#mecanicamotos #fyp #motos)","Compartir el mismo video en Instagram Reels"] }
      },
      {
        day: 2, member: 1, task: "Editar y exportar el video del Líder con subtítulos",
        details: { platform: "tiktok", estimatedTime: 30, tools: ["CapCut"], expectedResult: "Video final con subtítulos, música y texto en pantalla listo para publicar", contentExample: "Subtítulos en blanco sobre fondo negro, fuente gruesa. Texto de apoyo en pantalla al momento del CTA.", steps: ["Recibir el video bruto del Líder por WhatsApp o Drive","Abrir CapCut → importar video","Agregar subtítulos automáticos y corregir errores","Añadir texto en pantalla en los momentos clave","Ajustar música de fondo al 20% de volumen","Exportar en 1080p y enviar al Líder para revisión"] }
      },
      {
        day: 3, member: 0, task: "Escribir los primeros 3 copies de anuncio (para frío, tibio y caliente)",
        details: { platform: "general", estimatedTime: 45, tools: ["ChatGPT","Google Docs"], expectedResult: "3 copies listos para usar: uno para tráfico frío (VSL), uno para tibio (testimonios) y uno para caliente (checkout)", contentExample: "Frío: '¿Gastas una fortuna en el taller? Este curso te enseña a hacerlo tú mismo.' | Tibio: 'Mira lo que dicen quienes ya aprendieron mecánica en casa 👇' | Caliente: 'Última oportunidad: acceso completo hoy con 85% de descuento'", steps: ["Abrir ChatGPT: 'Escríbeme 3 copies para promover un curso de mecánica de motos: uno para público frío (no me conoce), uno tibio (me siguió pero no compró) y uno caliente (está listo para comprar)'","Adaptar los copies al tono informal y directo de la marca","Guardar los 3 en Google Docs con sus respectivos links","Compartir con el equipo en WhatsApp","Asignar qué copy usa cada miembro"] }
      },
      {
        day: 3, member: 3, task: "Enviar el primer mensaje de presentación a 20 amigos/contactos moteros",
        details: { platform: "whatsapp", estimatedTime: 30, tools: ["WhatsApp"], expectedResult: "20 mensajes personalizados enviados, al menos 5 respuestas obtenidas", contentExample: "'Hola [nombre]! Sé que te gustan las motos 🏍️ Encontré un curso que enseña mecánica desde cero. ¿Lo conoces? Te mando más info si te interesa'", steps: ["Hacer lista de 20 contactos que tienen moto o les gustan","Personalizar el mensaje con el nombre de cada uno","Enviar mensajes de forma escalonada (no todos a la vez)","Anotar quién respondió y qué dijo","A quienes respondieron con interés: enviar el link de testimonios"] }
      },
      {
        day: 3, member: 0, task: "Enviar primer mensaje de valor al grupo de WhatsApp",
        details: { platform: "whatsapp", estimatedTime: 15, tools: ["WhatsApp","ChatGPT"], expectedResult: "Primer mensaje de valor enviado sin vender, construyendo confianza", contentExample: "'Hola a todos! 👋 Este grupo es para moteros que quieren aprender mecánica y ahorrar en talleres. Tip #1: ¿Cada cuánto debes cambiar el aceite? La respuesta te sorprenderá...'", steps: ["Redactar mensaje de bienvenida + presentación del grupo","Compartir un tip exclusivo de mecánica sin vender nada","Preguntar al grupo: '¿Cuál es su mayor duda sobre mecánica?'","NO enviar link de compra en este primer mensaje","Responder a todos los que comenten"] }
      },
      {
        day: 4, member: 0, task: "Publicar el primer video en YouTube + TikTok + Reels",
        details: { platform: "youtube", estimatedTime: 30, tools: ["YouTube Studio","TikTok","Instagram"], expectedResult: "El mismo video publicado en las 3 plataformas con títulos y descripciones adaptadas a cada una", contentExample: "YouTube: 'Cómo cambiar el aceite de tu moto SIN mecánico (Paso a paso) 🔧' | TikTok: hook directo en los primeros 3 segundos | Reels: mismo video con música trending", steps: ["Subir el video editado a YouTube con título SEO, descripción larga y thumbnail","Publicar en TikTok (el mismo video sin marca de agua de otra plataforma)","Compartir en Instagram Reels con audio y caption adaptado","Notificar al equipo por WhatsApp para que den like y compartan","Monitorear comentarios en las 2 primeras horas"] }
      },
      {
        day: 5, member: 1, task: "Crear carrusel de '5 cosas que puedes aprender en Mecánica de Motos VIP'",
        details: { platform: "instagram", estimatedTime: 45, tools: ["Canva","Instagram"], expectedResult: "Carrusel de 8 slides publicado en Instagram con al menos 30 guardados en 24h", contentExample: "Slide 1: '5 cosas que aprenderás en el curso de Mecánica de Motos VIP 🔧' | Slides 2-6: cada habilidad con icono | Slide 7: precio vs valor | Slide 8: CTA con link", steps: ["Abrir plantilla de carrusel en Canva","Slide 1: portada con hook visual llamativo","Slides 2–6: una habilidad por slide con ícono y descripción breve","Slide 7: comparación precio taller vs costo del curso","Slide 8: CTA 'Aprende más → link en bio'","Publicar en Instagram con caption: pregunta + hashtags"] }
      },
      {
        day: 5, member: 0, task: "Publicar primer Reel en Instagram con tip de mecánica",
        details: { platform: "instagram", estimatedTime: 45, tools: ["CapCut","Instagram"], expectedResult: "Reel publicado con al menos 200 views en 24 horas", contentExample: "'El ERROR #1 que mata tu moto 🏍️ — Si tu cadena está así de suelta, PARA ahora mismo. Aprende a revisarla en 2 minutos 👇 #mecanicamotos'", steps: ["Grabar clip de 15–30 seg sobre un tip de mecánica básico","Editar en CapCut: subtítulos, música trending, texto en pantalla","Caption: hook + tip + 3–5 hashtags + CTA 'Link en bio'","Publicar entre 7–9 pm","Responder todos los comentarios en las primeras 2 horas"] }
      },
      {
        day: 6, member: 0, task: "Grabar video de testimonio/review del producto",
        details: { platform: "youtube", estimatedTime: 45, tools: ["CapCut","YouTube","TikTok"], expectedResult: "Video de revisión honesta del curso publicado en YouTube y recortado para TikTok/Reels", contentExample: "'Revisé el curso Mecánica de Motos VIP y esto es lo que encontré... [mostrar módulos] ¿Vale la pena? Mi opinión honesta 👇'", steps: ["Revisar los materiales del productor disponibles en el Drive","Preparar guión: intro honesta, qué incluye el curso, para quién es, precio vs valor","Grabar en formato de cámara directa (más auténtico)","Editar: cortes, subtítulos, mostrar screenshots del contenido","Publicar en YouTube (versión larga) y recortar a 60 seg para TikTok/Reels"] }
      },
      {
        day: 7, member: 2, task: "Reportar resultados de la semana: grupos donde se compartió, reacciones recibidas",
        details: { platform: "general", estimatedTime: 20, tools: ["Google Sheets","WhatsApp"], expectedResult: "Reporte enviado al grupo del equipo con: grupos activos, total de publicaciones, reacciones y comentarios recibidos", contentExample: "Reporte: 'Semana 1 - Compartido en 18 grupos | 45 reacciones | 12 comentarios | 3 personas preguntaron por el link'", steps: ["Abrir la hoja de Google Sheets de seguimiento","Contar total de publicaciones en grupos esta semana","Anotar reacciones y comentarios más relevantes","Identificar los 3 grupos con mejor respuesta","Enviar resumen en el grupo de WhatsApp del equipo"] }
      },
      {
        day: 7, member: 0, task: "Subir primer video tutorial a YouTube (5–10 min)",
        details: { platform: "youtube", estimatedTime: 90, tools: ["CapCut","Canva","YouTube Studio"], expectedResult: "Video tutorial publicado en YouTube con thumbnail, descripción SEO y link del curso en la descripción", contentExample: "Título: 'Cómo hacer el mantenimiento básico de tu moto en casa (SIN mecánico) 🔧' | Thumbnail: cara sorprendida + '¡FÁCIL!' en rojo", steps: ["Grabar tutorial de 5–10 min: mantenimiento básico (aceite, cadena, frenos)","Editar: intro con hook en 5 seg, cortes ágiles, subtítulos","Diseñar thumbnail en Canva: cara expresiva + texto grande en rojo/naranja","Título SEO: incluir 'desde cero', 'paso a paso', 'sin mecánico'","Descripción: primeras 2 líneas con CTA + link del curso + timestamps del video"] }
      },
    ],
  },

  // ─────────────── WEEK 2 ───────────────
  {
    week: 2, label: "Semana 2 – Contenido y engagement",
    recurring: [
      {
        member: 0, task: "Revisar métricas y responder comentarios en todos los canales",
        details: { platform: "general", estimatedTime: 30, tools: ["Facebook","Instagram","TikTok","YouTube"], expectedResult: "Todos los comentarios del día anterior respondidos y métricas anotadas", contentExample: "Respuesta tipo: 'Gracias [nombre]! 🔧 Si quieres aprender más sobre esto, el link está en mi bio. ¡Cualquier pregunta aquí estoy!'", steps: ["Abrir cada plataforma y revisar notificaciones","Responder cada comentario de forma personalizada (no copiar/pegar)","Identificar preguntas frecuentes para convertirlas en nuevo contenido","Anotar métricas del día: alcance, likes, comentarios, clics al link","Guardar en Google Sheets para el reporte semanal"] }
      },
      {
        member: 1, task: "Crear 1 pieza visual diaria (alternar: post, story, carrusel)",
        details: { platform: "instagram", estimatedTime: 30, tools: ["Canva"], expectedResult: "1 pieza visual de calidad lista para publicar, alternando formato cada día", contentExample: "Lunes: post cuadrado | Martes: story | Miércoles: carrusel 5 slides | Jueves: post horizontal | Viernes: infografía", steps: ["Revisar qué formato toca hoy (rotar según el día)","Abrir plantilla correspondiente en Canva","Adaptar el tip del día al formato","Usar paleta de colores y tipografía de la marca","Exportar y enviar al Líder o publicar directamente"] }
      },
      {
        member: 2, task: "Compartir contenido del equipo en grupos + comentar 5 posts de motos por día",
        details: { platform: "facebook", estimatedTime: 30, tools: ["Facebook"], expectedResult: "Contenido del día publicado en grupos + 5 comentarios genuinos en posts de motos de otras cuentas", contentExample: "Comentario: '¡Excelente punto! Yo también tuve ese problema con mi moto. ¿Sabías que hay formas de prevenirlo? 🔧'", steps: ["Publicar el contenido del día en los grupos activos de la lista","Buscar posts populares de motos en Facebook con 'Mecánica motos'","Comentar de forma genuina en 5 posts (no spam, agregar valor)","En los comentarios, mencionar naturalmente el recurso si viene al caso","NO enviar links en comentarios sin que te los pidan"] }
      },
      {
        member: 3, task: "Publicar 3 stories diarias + responder DMs con el link de afiliado",
        details: { platform: "instagram", estimatedTime: 25, tools: ["Instagram"], expectedResult: "3 stories publicadas y todos los DMs respondidos en menos de 2 horas", contentExample: "DM script: 'Hola! 🏍️ Vi que te interesó el tip. ¿Tienes moto actualmente? Te recomiendo esto según tu caso →'", steps: ["Publicar 3 stories usando el material del día (tip + encuesta + CTA)","Revisar DMs de Instagram cada 2 horas","Para cada DM de interés: preguntar '¿Tienes moto actualmente?'","Esperar respuesta antes de enviar el link","Si respondió con interés: enviar link de testimonios + beneficio específico"] }
      },
      {
        member: 2, task: "Subir 1 YouTube Short reciclando el TikTok del día anterior",
        details: { platform: "youtube", estimatedTime: 15, tools: ["SnapTik","YouTube Studio"], expectedResult: "1 Short publicado en YouTube con título optimizado", contentExample: "Título: '¿Por qué tu moto vibra? 3 causas #Shorts #mecanicamotos'", steps: ["Descargar el TikTok del día anterior sin marca de agua (usar SnapTik.app)","Subir el video a YouTube Shorts","Título: mismo hook del TikTok + '#Shorts'","Descripción: 2 líneas + link del curso","Agregar a playlist 'Tips de Mecánica'"] }
      },
      {
        member: 0, task: "Responder DMs con script de conversión en todas las redes",
        details: { platform: "instagram", estimatedTime: 30, tools: ["Instagram","TikTok","Facebook"], expectedResult: "Cada persona interesada recibe seguimiento personalizado en menos de 2 horas", contentExample: "Script: 'Hola [nombre]! Vi que te interesó el tip de mecánica 🔧 ¿Tienes moto actualmente? Te quiero recomendar algo específico para tu caso'", steps: ["Revisar DMs de Instagram, TikTok y Facebook","Para cada persona interesada: preguntar sobre su moto antes de vender","Esperar respuesta antes de enviar el link","Si hay interés: enviar link de testimonios primero","Si no compran en 24h: enviar link del plan $29 con nuevo ángulo"] }
      },
    ],
    unique: [
      {
        day: 8, member: 0, task: "Crear video '¿Cuánto cuesta reparar una moto en taller vs aprenderlo tú mismo?'",
        details: { platform: "tiktok", estimatedTime: 50, tools: ["CapCut","TikTok","Instagram"], expectedResult: "Video publicado en TikTok y Reels con alto potencial viral por el gancho de comparación de costos", contentExample: "Hook: 'El taller me cobró $180 por esto... yo lo hubiera hecho en 15 minutos si lo supiera hacer 😤' → comparación de precios → CTA al curso", steps: ["Investigar precios reales de servicios comunes en talleres locales","Grabar comparando: precio taller vs tiempo que toma aprenderlo","Agregar números en pantalla: '$180 en el taller vs $0 si lo haces tú'","Editar en CapCut con cortes rápidos y texto dramático","Publicar en TikTok + Reels con caption que provoca debate"] }
      },
      {
        day: 9, member: 1, task: "Diseñar infografía comparativa: costo taller vs. precio del curso",
        details: { platform: "pinterest", estimatedTime: 40, tools: ["Canva","Pinterest","Instagram"], expectedResult: "Infografía visual publicada en Pinterest e Instagram mostrando el ROI del curso", contentExample: "Título: '¿Cuánto ahorras aprendiendo mecánica en casa? 🔧' | Tabla: Cambio aceite taller $40 vs en casa $8 | Revisión frenos taller $90 vs en casa $0", steps: ["Abrir Canva → plantilla infografía vertical 1000×1500","Crear tabla comparativa: servicio / precio taller / precio en casa","Calcular ahorro total anual (estimado honesto)","Agregar nota: 'Aprende todo esto en el curso → [link]'","Publicar en Pinterest + compartir como post en Instagram"] }
      },
      {
        day: 10, member: 3, task: "Crear TikTok/Reel de 30 seg usando materiales del productor",
        details: { platform: "tiktok", estimatedTime: 35, tools: ["CapCut","TikTok","Drive"], expectedResult: "Video corto de 30 seg publicado usando los materiales del Drive del productor", contentExample: "'Esto es lo que aprendes en Mecánica de Motos VIP 🔧 [clips del curso] — Link en bio para acceder hoy'", steps: ["Descargar materiales de video del Drive del productor","Abrir CapCut → crear nuevo proyecto","Editar clips del productor con música trending y texto en pantalla","Agregar tu voz o texto: 'Yo ya lo tengo y esto es lo que aprendes...'","Publicar en TikTok y compartir como Reel en Instagram"] }
      },
      {
        day: 11, member: 0, task: "Publicar en Facebook con el link de testimonios para audiencia tibia",
        details: { platform: "facebook", estimatedTime: 20, tools: ["Facebook"], expectedResult: "Post publicado en la página de Facebook con link de testimonios, dirigido a quienes ya interactuaron", contentExample: "'Esto dicen quienes ya aprendieron mecánica de motos en casa 🏍️ [link testimonios] — ¿Eres el siguiente?'", steps: ["Escribir caption con prueba social: '+ de X personas ya aprendieron mecánica en casa'","Incluir el link de testimonios (no el checkout directo)","Agregar imagen de personas satisfechas o resultados del curso","Publicar entre 6–8 pm (mayor actividad en Facebook)","Responder todos los comentarios en las primeras 3 horas"] }
      },
      {
        day: 11, member: 0, task: "Live en TikTok de 20 minutos respondiendo preguntas de mecánica",
        details: { platform: "tiktok", estimatedTime: 30, tools: ["TikTok Live"], expectedResult: "Live completado con al menos 20 espectadores simultáneos y mención natural del curso", contentExample: "'Buenas noches moteros! Hoy respondo sus preguntas de mecánica EN VIVO 🔧 Si tienen dudas sobre mantenimiento, ¡pregunten!'", steps: ["Anunciar el live 2 horas antes en stories y posts","Preparar 5 preguntas frecuentes de mecánica para tener de qué hablar","Durante el live: responder preguntas + mencionar el curso de forma natural","Al finalizar: CTA 'El link del curso está en mi bio'","Guardar el live y editarlo para reutilizarlo como contenido"] }
      },
      {
        day: 12, member: 2, task: "Buscar y reportar 10 nuevos grupos activos de motos (Telegram, Facebook)",
        details: { platform: "facebook", estimatedTime: 25, tools: ["Facebook","Telegram","Google Sheets"], expectedResult: "10 nuevos grupos identificados y registrados en la hoja de seguimiento", contentExample: "Buscar en Telegram: 'motos', 'mecánica motos', 'motociclistas [país]' → unirse a los más activos", steps: ["Buscar en Telegram: 'motos', 'mecánica', 'bikers' → anotar los más activos","Buscar en Facebook grupos nuevos no registrados aún","Verificar actividad: ¿se postea al menos 1 vez por día?","Agregar a Google Sheets con columnas: plataforma, nombre, miembros, actividad","Solicitar unirse a todos"] }
      },
      {
        day: 13, member: 0, task: "Crear un hilo de Twitter/X o post largo en Facebook sobre mecánica básica",
        details: { platform: "facebook", estimatedTime: 30, tools: ["Facebook","ChatGPT"], expectedResult: "Post largo o hilo publicado que posiciona al Líder como experto y genera conversación", contentExample: "'5 cosas que nunca te enseñaron sobre el mantenimiento de tu moto (y que los talleres prefieren que no sepas) 🔧 [Hilo]'", steps: ["Usar ChatGPT: 'Escribe un hilo de 8 tweets sobre mecánica básica de motos para principiantes'","Adaptar al español de la región y al tono de la marca","Publicar como hilo en X o como post largo en Facebook","Incluir link del VSL al final de forma natural","Compartir el hilo en el grupo de WhatsApp del equipo"] }
      },
      {
        day: 14, member: 0, task: "Mini masterclass en YouTube Live (30 min): Mecánica básica para principiantes",
        details: { platform: "youtube", estimatedTime: 45, tools: ["YouTube Live","OBS"], expectedResult: "Masterclass completada, grabada y disponible como video permanente en el canal", contentExample: "'MASTERCLASS GRATIS: Mecánica de Motos para Principiantes 🏍️ — Aprende a revisar tu moto desde cero en 30 minutos'", steps: ["Crear evento en YouTube Studio con 48h de anticipación","Promover en todas las redes con el link del evento","Preparar 3 temas: cambio de aceite, revisión de frenos, ajuste de cadena","Durante el live: enseñar + mencionar el curso como recurso completo","Al finalizar: enviar link del VSL en el chat y comentarios"] }
      },
      {
        day: 14, member: 1, task: "Editar video resumen de la semana con mejores momentos/métricas",
        details: { platform: "youtube", estimatedTime: 40, tools: ["CapCut","Instagram","YouTube"], expectedResult: "Video resumen de 60–90 seg publicado mostrando los mejores contenidos y el progreso de la semana", contentExample: "'Resumen semana 2: X views, X nuevos seguidores, X ventas 🔥 Esto fue lo mejor de esta semana...'", steps: ["Recopilar los mejores clips de la semana","Editar en CapCut: highlight reel de 60–90 seg","Agregar texto con métricas clave (views, seguidores ganados)","Publicar como Reel y Short","Compartir en el grupo de WhatsApp del equipo"] }
      },
    ],
  },

  // ─────────────── WEEK 3 ───────────────
  {
    week: 3, label: "Semana 3 – Escalado y prueba social",
    recurring: [
      {
        member: 0, task: "Analizar qué contenido tuvo más clics/ventas y duplicarlo",
        details: { platform: "general", estimatedTime: 20, tools: ["TikTok Analytics","Instagram Insights","Google Sheets"], expectedResult: "Identificación del contenido ganador de la semana anterior y plan para duplicarlo", contentExample: "Si el video de 'costo taller vs en casa' tuvo 5× más clicks → crear 3 variaciones con distintos servicios de moto", steps: ["Revisar Google Sheets con métricas de las últimas 2 semanas","Identificar el top 3 de posts por clics al link de afiliado","Planificar 3 variaciones de cada uno para esta semana","Asignar a los miembros según sus habilidades","Documentar la fórmula que funcionó para replicarla"] }
      },
      {
        member: 1, task: "Crear variaciones de los mejores posts de la semana 2",
        details: { platform: "instagram", estimatedTime: 35, tools: ["Canva","Instagram"], expectedResult: "3 variaciones del post más exitoso de la semana 2 listas para publicar", contentExample: "Si el carrusel de '5 cosas del curso' funcionó → crear '5 errores que arruinan tu moto' con el mismo formato", steps: ["Identificar el post de mayor engagement de la semana 2","Duplicar la plantilla en Canva","Cambiar el tema manteniendo el mismo formato y estilo visual","Crear 3 variaciones con distintos hooks","Entregar al Líder para programar publicación"] }
      },
      {
        member: 2, task: "Aumentar a 40 grupos diarios donde compartir contenido",
        details: { platform: "facebook", estimatedTime: 35, tools: ["Facebook","WhatsApp"], expectedResult: "Contenido del día publicado en 40 grupos activos (Facebook + WhatsApp)", contentExample: "Usar la lista actualizada de 40+ grupos. Variar el copy en cada publicación para evitar penalizaciones.", steps: ["Abrir la lista de grupos actualizada (ahora con 40 grupos)","Copiar el contenido del día con el copy asignado","Publicar en los 40 grupos variando ligeramente el texto en cada uno","Anotar cualquier grupo que haya eliminado el post","Reportar al equipo grupos con mejor respuesta"] }
      },
      {
        member: 3, task: "Publicar 4 stories diarias + 1 video corto propio de motos",
        details: { platform: "instagram", estimatedTime: 35, tools: ["Instagram","TikTok","CapCut"], expectedResult: "4 stories publicadas y 1 video propio de 30–60 seg en TikTok/Reels", contentExample: "Video propio: mostrar algo relacionado a motos de tu entorno (calle, taller, tu moto) + tip del día + CTA", steps: ["Stories 1–3: material del equipo con sticker de enlace","Story 4: CTA directo con urgencia ('Solo hoy con descuento')","Grabar un video corto propio: algo real sobre motos de tu entorno","Editar en CapCut con texto en pantalla y música","Publicar en TikTok y como Reel en Instagram"] }
      },
      {
        member: 0, task: "Enviar encuesta semanal al grupo de WhatsApp para calentar audiencia",
        details: { platform: "whatsapp", estimatedTime: 20, tools: ["WhatsApp"], expectedResult: "Al menos 30% del grupo participó en la encuesta, aumentando el engagement antes del CTA", contentExample: "'Encuesta rápida 🏍️ ¿Cuál es tu mayor miedo con tu moto? A) Que falle en la carretera B) No saber arreglarla — Voten y en 24h les doy el tip más importante'", steps: ["Crear la encuesta con 2 opciones de respuesta relacionadas a motos","Publicar con el mensaje en el grupo de WhatsApp","Responder a cada persona que vote con un comentario personalizado","Al día siguiente: compartir el resultado + tip relacionado","CTA suave al final: 'Si quieren aprender esto y más, el link está aquí →'"] }
      },
      {
        member: 1, task: "Crear carrusel semanal '¿Sabías que tu moto...?' para Instagram",
        details: { platform: "instagram", estimatedTime: 45, tools: ["Canva","Instagram"], expectedResult: "Carrusel de 8–10 slides publicado con meta de 50+ guardados", contentExample: "Slide 1: '¿Sabías que el 73% de las fallas de moto son PREVENIBLES? 🏍️' → slides con cada falla + cómo evitarla", steps: ["Abrir plantilla de carrusel en Canva (10 slides)","Slide 1: portada con hook de dato sorprendente","Slides 2–8: dato + explicación visual + cómo prevenirlo","Slide 9: CTA 'Aprende todo esto en el curso'","Slide 10: logo + handle de la cuenta","Publicar con caption largo + todos los hashtags"] }
      },
    ],
    unique: [
      {
        day: 15, member: 0, task: "Lanzar campaña '7 días aprendiendo mecánica' en TikTok/Reels (serie de videos)",
        details: { platform: "tiktok", estimatedTime: 60, tools: ["CapCut","TikTok","Instagram"], expectedResult: "Primer video de la serie publicado con los otros 6 días planificados y guionizados", contentExample: "'Día 1 de 7: aprendiendo mecánica de motos desde cero 🔧 ¿Me acompañas? #mecanicareto #motos #aprendeconmigo'", steps: ["Planificar los 7 videos: día 1 = aceite, día 2 = cadena, día 3 = frenos, etc.","Guionizar los 7 en ChatGPT de una sola vez","Grabar el video del Día 1 siguiendo el guión","Publicar con el hashtag de la serie #MecánicaReto7Días","Anunciar la serie en todas las plataformas para generar expectativa"] }
      },
      {
        day: 16, member: 1, task: "Crear banner especial con oferta del checkout al 85% de descuento",
        details: { platform: "instagram", estimatedTime: 30, tools: ["Canva"], expectedResult: "Banner de alta conversión listo para usar en stories, posts y grupos durante la semana de urgencia", contentExample: "'¡OFERTA ESPECIAL! 🔥 Mecánica de Motos VIP con 85% de descuento — Solo por tiempo limitado → [link]'", steps: ["Abrir Canva → plantilla banner urgencia","Usar colores rojo/naranja para transmitir urgencia","Texto grande: porcentaje de descuento + 'tiempo limitado'","Versión 1: para post 1080×1080 | Versión 2: para story 1080×1920","Enviar al equipo para que todos lo usen esta semana"] }
      },
      {
        day: 17, member: 3, task: "Publicar el checkout con descuento en todos los grupos y stories con urgencia",
        details: { platform: "facebook", estimatedTime: 30, tools: ["Facebook","Instagram","WhatsApp"], expectedResult: "Oferta del 85% de descuento publicada en los 40 grupos + stories + WhatsApp el mismo día", contentExample: "'Durante las próximas 72 horas, el curso de Mecánica de Motos VIP tiene 85% de descuento. Después vuelve al precio normal. Link → [checkout descuento]'", steps: ["Publicar el banner de oferta en los 40 grupos de Facebook","Publicar en los grupos de WhatsApp con copy de urgencia","Subir 3 stories en Instagram con el link de checkout con descuento","Verificar que el link funciona correctamente antes de publicar","Anotar cuántas personas hacen clic y reportar al equipo"] }
      },
      {
        day: 18, member: 0, task: "Grabar video respondiendo las 5 objeciones más comunes de compra",
        details: { platform: "tiktok", estimatedTime: 50, tools: ["CapCut","TikTok","Instagram"], expectedResult: "Video publicado que elimina las barreras de compra más comunes de forma honesta y directa", contentExample: "'Las 5 excusas para NO comprar el curso (y por qué están equivocados) 😅 Objeción 1: Es muy caro → [respuesta]'", steps: ["Listar las 5 objeciones más comunes recibidas en DMs y comentarios","Escribir una respuesta honesta y específica para cada una","Grabar en formato de monólogo directo a cámara (más auténtico)","Editar en CapCut: cortes rápidos, texto de objeción en pantalla, respuesta en voz","Publicar en TikTok, Reels y Facebook"] }
      },
      {
        day: 19, member: 2, task: "Recolectar y documentar comentarios positivos para usarlos como prueba social",
        details: { platform: "general", estimatedTime: 25, tools: ["Google Sheets","Screenshot"], expectedResult: "Archivo con 10+ capturas de comentarios positivos organizados por plataforma", contentExample: "Capturar comentarios como: '¡Excelente! Yo ya lo compré y es increíble' → guardar como prueba social para posts futuros", steps: ["Revisar todos los comentarios positivos en Facebook, Instagram, TikTok","Tomar screenshot de los mejores (con nombre visible si posible)","Organizar en carpeta de Drive: una carpeta por plataforma","Destacar los 3 mejores para usar en posts de testimonios","Enviar los screenshots al Líder para crear contenido de prueba social"] }
      },
      {
        day: 20, member: 0, task: "Publicar contenido con los testimonios recolectados",
        details: { platform: "instagram", estimatedTime: 35, tools: ["Canva","Instagram","Facebook","TikTok"], expectedResult: "Post de testimonios publicado en todas las plataformas usando las capturas recolectadas", contentExample: "'Esto dicen quienes ya aprendieron mecánica de motos en casa 🏍️ [mostrar screenshots de comentarios] — ¿Eres el siguiente?'", steps: ["Abrir Canva y crear carrusel o collage con las mejores capturas","Añadir texto de contexto: '+ de X personas ya aprendieron mecánica'","Publicar como post en Instagram y Facebook","Crear versión en video para TikTok (mostrar capturas una por una con música)","Incluir link de testimonios en el CTA"] }
      },
      {
        day: 21, member: 1, task: "Crear kit de stories para que Miembro 3 y Miembro 4 usen los próximos 10 días",
        details: { platform: "instagram", estimatedTime: 60, tools: ["Canva"], expectedResult: "10 plantillas de stories listas para los próximos 10 días, con espacio para el link de afiliado", contentExample: "Story Día 22: urgencia de cierre | Story Día 23: testimonio | Story Día 24: pregunta interactiva | ...", steps: ["Planificar el contenido de las 10 stories (1 por día, días 22–30)","Crear cada plantilla en Canva con la temática del día","Incluir espacio para sticker de enlace en cada story","Organizar en carpeta compartida de Drive","Enviar link a Miembro 3 y Miembro 4 con instrucciones de uso"] }
      },
    ],
  },

  // ─────────────── WEEK 4 ───────────────
  {
    week: 4, label: "Semana 4 – Cierre y urgencia",
    recurring: [
      {
        member: 0, task: "Publicar recordatorio diario de la oferta con cuenta regresiva",
        details: { platform: "instagram", estimatedTime: 20, tools: ["Canva","Instagram","Facebook","TikTok"], expectedResult: "Recordatorio publicado en todas las plataformas con el número real de días restantes", contentExample: "'⏰ Quedan [X] días para el cierre de la campaña. El precio sube en [X] días. Accede ahora → [link checkout descuento]'", steps: ["Calcular los días restantes hasta el cierre","Crear imagen rápida en Canva con la cuenta regresiva","Publicar en Instagram (story + post), Facebook y TikTok","Actualizar el número cada día (no reutilizar)","Variar el copy para no repetirse: urgencia, beneficio, objeción, testimonio"] }
      },
      {
        member: 1, task: "Actualizar gráficos con el precio y fecha límite de la campaña",
        details: { platform: "general", estimatedTime: 25, tools: ["Canva"], expectedResult: "Gráficos actualizados con la cuenta regresiva correcta para el día, listos para publicar", contentExample: "Banner: '⚠ ÚLTIMOS [X] DÍAS — Mecánica de Motos VIP al 85% de descuento — [precio tachado] → [precio actual]'", steps: ["Abrir la plantilla de banner de urgencia en Canva","Actualizar el número de días restantes","Verificar que el precio y el link de checkout sean correctos","Exportar 3 versiones: story (1080×1920), post (1080×1080), banner horizontal","Compartir en el grupo de WhatsApp del equipo"] }
      },
      {
        member: 2, task: "Responder comentarios y consultas en grupos con script de respuesta provisto",
        details: { platform: "facebook", estimatedTime: 25, tools: ["Facebook","WhatsApp"], expectedResult: "Todos los comentarios en grupos respondidos usando el script, sin sonar como spam", contentExample: "Script: '¡Hola! Sí, el curso cubre exactamente eso 🔧 Puedes ver más info aquí → [link testimonios]. ¿Tienes alguna otra pregunta?'", steps: ["Revisar todos los comentarios en los grupos de Facebook","Copiar el script de respuesta del grupo de WhatsApp del equipo","Personalizar cada respuesta con el nombre y la pregunta específica","Si preguntan por precio: enviar link del plan $29 o del checkout con descuento","Reportar al Líder las preguntas más frecuentes del día"] }
      },
      {
        member: 3, task: "Publicar 5 stories diarias con urgencia de cierre de campaña",
        details: { platform: "instagram", estimatedTime: 30, tools: ["Instagram","Canva"], expectedResult: "5 stories publicadas a lo largo del día con distintos mensajes de urgencia y el link de checkout", contentExample: "Story 1 (9am): cuenta regresiva | Story 2 (12pm): testimonio | Story 3 (3pm): pregunta interactiva | Story 4 (6pm): objeción vs respuesta | Story 5 (9pm): último CTA del día", steps: ["Descargar las 5 plantillas del kit de stories de Drive","Publicar Story 1 a las 9am con la cuenta regresiva del día","Story 2 a las 12pm: captura de testimonio real","Story 3 a las 3pm: encuesta o pregunta ('¿Ya lo viste?')","Story 4 a las 6pm: responder objeción común","Story 5 a las 9pm: CTA final del día con el link de checkout"] }
      },
    ],
    unique: [
      {
        day: 22, member: 0, task: "Lanzar video final 'Última oportunidad para unirte a Mecánica de Motos VIP'",
        details: { platform: "tiktok", estimatedTime: 50, tools: ["CapCut","TikTok","Instagram","YouTube"], expectedResult: "Video de cierre publicado en todas las plataformas con CTA urgente y link de checkout", contentExample: "'Esta es la última vez que hablo del curso en mucho tiempo. Si lo dejaste para después, este es el momento. ¿Por qué? Porque después del [fecha] el precio sube. Link en bio.'", steps: ["Grabar video de 60–90 seg desde la perspectiva de 'no te voy a engañar'","Ser honesto: explicar qué pasa con el precio después del cierre","Incluir 2–3 testimonios reales mencionados de voz","CTA claro: 'El link está en mi bio. Úsalo hoy.'","Publicar en TikTok, Reels, Facebook y como Short en YouTube"] }
      },
      {
        day: 23, member: 1, task: "Diseñar gráfico de cuenta regresiva para stories (7 días restantes)",
        details: { platform: "instagram", estimatedTime: 30, tools: ["Canva"], expectedResult: "Set de 7 gráficos de cuenta regresiva (uno por día del 23 al 29) listos para publicar", contentExample: "Cada gráfico: fondo rojo urgente, número grande '7 días', '6 días'... + logo + precio tachado + precio actual", steps: ["Abrir Canva → crear set de 7 stories","Diseñar con colores de urgencia: rojo + blanco + naranja","Número grande de días restantes como elemento central","Agregar precio original tachado y precio con descuento","Exportar los 7 y subir a la carpeta de Drive del equipo"] }
      },
      {
        day: 24, member: 3, task: "Enviar mensaje personalizado a todos los que interactuaron pero no compraron (DMs)",
        details: { platform: "instagram", estimatedTime: 40, tools: ["Instagram","TikTok","Facebook"], expectedResult: "Mensajes personalizados enviados a 20+ personas que mostraron interés en las últimas 3 semanas", contentExample: "'Hola [nombre], hace unos días viste mi video sobre [tema]. ¿Ya pudiste ver el curso? Hoy es uno de los últimos días con el descuento del 85%. Te mando el link si quieres.'", steps: ["Revisar el historial de DMs de las últimas 3 semanas","Identificar personas que respondieron pero no compraron","Escribir mensaje personalizado mencionando el video que vieron","Esperar 30 min y si no responden, enviar el link directamente","Para los que digan 'muy caro': enviar inmediatamente el link del plan $29"] }
      },
      {
        day: 24, member: 0, task: "Enviar recordatorio de oferta final al grupo de WhatsApp",
        details: { platform: "whatsapp", estimatedTime: 20, tools: ["WhatsApp"], expectedResult: "Mensaje de urgencia enviado a todo el grupo con testimonio real + link de checkout", contentExample: "'Última oportunidad ⚠️ El descuento del 85% cierra en 72 horas. [Nombre del grupo] ya lo compró y dice: [testimonio]. Link: [checkout descuento]'", steps: ["Redactar mensaje con urgencia real (no inventada): quedan X días","Incluir un testimonio de alguien del grupo o conocido","Agregar el link del checkout con descuento","Enviar entre 7–9 pm (máxima apertura)","Responder individualmente a quienes pregunten"] }
      },
      {
        day: 25, member: 0, task: "Activar link de plan $29 para quienes no compraron la oferta principal",
        details: { platform: "general", estimatedTime: 25, tools: ["WhatsApp","Instagram","Facebook"], expectedResult: "El plan $29 presentado como alternativa accesible a quienes dijeron que la oferta principal era cara", contentExample: "'¿El precio te pareció alto? Existe el plan de $29 que te da acceso completo. Es literalmente lo que cobran por una revisión básica en el taller, pero para siempre. Link → [plan $29]'", steps: ["Identificar personas que mostraron interés pero no compraron por precio","Preparar el mensaje con el ángulo del plan $29","Enviar por DM personalizado en Instagram, Facebook y TikTok","Publicar en el grupo de WhatsApp como opción alternativa","Monitorear respuestas durante 24 horas"] }
      },
      {
        day: 26, member: 2, task: "Compartir el link del plan $29 en todos los grupos con mensaje diferente",
        details: { platform: "facebook", estimatedTime: 25, tools: ["Facebook","WhatsApp"], expectedResult: "El plan $29 publicado en los 40 grupos con copy diferente al de la oferta principal", contentExample: "'¿Quieres aprender mecánica de motos pero el precio te parece alto? Existe el plan de $29 con acceso completo. Literalmente menos que una revisión en el taller. Link → [plan $29]'", steps: ["Preparar copy específico para el plan $29 (diferente al de la oferta principal)","Publicar en los 40 grupos de Facebook con este nuevo mensaje","Compartir en los grupos de WhatsApp con texto adaptado","Responder comentarios sobre la diferencia entre planes","Anotar cuántas personas preguntan sobre el plan $29"] }
      },
      {
        day: 27, member: 0, task: "Publicar video de resultados de la campaña + agradecimiento a la comunidad",
        details: { platform: "youtube", estimatedTime: 45, tools: ["CapCut","YouTube","TikTok","Instagram"], expectedResult: "Video auténtico de resultados publicado en todas las plataformas que genera confianza y cierra la campaña con fuerza", contentExample: "'30 días promoviendo Mecánica de Motos VIP: esto fue lo que pasó (resultados reales, sin mentir) 📊'", steps: ["Recopilar las métricas reales: ventas, seguidores ganados, views totales","Grabar video siendo honesto sobre los resultados (buenos y malos)","Agradecer a la comunidad y a quienes compraron","Mencionar que la campaña cierra pronto","Publicar en YouTube (versión completa) y recortar para TikTok/Reels"] }
      },
      {
        day: 28, member: 1, task: "Crear reporte visual del mes: alcance, clics, ventas estimadas",
        details: { platform: "general", estimatedTime: 50, tools: ["Canva","Google Sheets"], expectedResult: "Infografía con los KPIs del mes completo lista para compartir con el equipo", contentExample: "Dashboard visual: Total de posts, Alcance estimado, Clics al VSL, Ventas confirmadas, Comisiones generadas", steps: ["Recopilar datos de Google Sheets de las 4 semanas","Calcular totales: posts publicados, grupos alcanzados, ventas, comisiones","Diseñar infografía en Canva con los números más importantes","Incluir gráfico de barras por semana si los datos lo permiten","Compartir con el equipo en el grupo de WhatsApp"] }
      },
      {
        day: 29, member: 0, task: "Reunión de equipo: analizar qué funcionó, qué mejorar para el próximo mes",
        details: { platform: "whatsapp", estimatedTime: 60, tools: ["WhatsApp","Google Meet","Google Docs"], expectedResult: "Lista de 5 cosas que funcionaron y 5 a mejorar, con plan de acción para el mes 2", contentExample: "Agenda: 1) Revisión de métricas 2) Top 3 contenidos 3) Errores cometidos 4) Plan mes 2 5) Ajuste de roles", steps: ["Convocar reunión por WhatsApp o Google Meet","Compartir el reporte visual de Miembro 2 como base de la reunión","Cada miembro comparte su experiencia: qué le funcionó y qué no","Documentar conclusiones en Google Docs","Definir 3 acciones concretas para el mes 2"] }
      },
      {
        day: 30, member: 3, task: "Último push: compartir en todas las redes con mensaje de cierre definitivo de precio",
        details: { platform: "instagram", estimatedTime: 30, tools: ["Instagram","TikTok","Facebook","WhatsApp"], expectedResult: "Mensaje de cierre publicado en todas las plataformas con el link de checkout como última acción de la campaña", contentExample: "'HOY ES EL ÚLTIMO DÍA 🔴 Mecánica de Motos VIP cierra el precio especial a medianoche. Si lo dejaste para después, ya no hay después. Link → [checkout descuento]'", steps: ["Publicar story en Instagram con cuenta regresiva de horas (no días)","Publicar en TikTok video de '¡Hoy es el último día!'","Compartir en todos los grupos de Facebook y WhatsApp","Enviar DM a todas las personas que mostraron interés sin comprar","Celebrar: es el fin de la campaña del mes 1"] }
      },
    ],
  },
];
