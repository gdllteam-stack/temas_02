/* ==========================================================================
   BIBLIOTECA DE TESTIMONIOS FGDLL — data.js
   Base de datos modular con etiquetas temáticas.
   Para agregar nuevos paquetes:
     1. Define const PAQUETE_NOMBRE = [ ... ]
     2. Agrégalo a CATALOGO_COMPLETO
========================================================================== */

const TEMAS = [

  // ==========================================
  // FUENTE: LLEGAMOS A CREER
  // ==========================================
  {
    id: "tema-creer-01",
    titulo: "El despertar espiritual a través del fondo de sufrimiento",
    tituloCorto: "El despertar",
    estado: "Completo",
    etiquetas: ["paso-2-fe", "paso-12-servicio", "fe", "aceptación", "crecimiento", "transformacion"],
    categoria: "Paso 2",
    evento: ["Juntas de información", "Aniversario de grupo"],
    publico: ["Participantes", "Recién llegados"],
    intensidad: "Alta",
    momento: "Mitad",
    formato: "Individual",
    tipoTestimonio: "Inspirador",
    emocion: ["Esperanza"],
    defectoCaracter: ["Arrogancia"],
    virtudPrincipal: ["Humildad"],
    pasos: ["Paso 2", "Paso 12"],
    tradiciones: [],
    conceptos: ["Rendición del ego", "Poder Superior"],
    fuentePrincipal: "AA",
    fuenteAA: [
      {
        obra: "Llegamos a Creer",
        referencia: "Capítulo: El despertar espiritual",
        uso: "Mostrar cómo la derrota total abrió la puerta a una mente dispuesta."
      }
    ],
    fuenteFGDLL: [],
    librosRecomendados: [],
    objetivo: "Transmitir que no se necesita entender a un Poder Superior para empezar a sanar, solo dejar de luchar.",
    fraseAncla: "Cuando dejé de pelear contra el mundo, pude por fin escuchar.",
    guiaTestimonio: {
      detectar: [
        "¿De qué formas tu arrogancia te impedía aceptar que necesitabas ayuda externa?",
        "¿Qué sufrimiento físico o moral fue necesario para quebrar tu autosuficiencia?"
      ],
      admitir: [
        "¿Cuál fue el momento en que aceptaste, aunque fuera por desesperación, la ayuda del grupo?",
        "¿Cómo se sintió dejar de intentar gobernar tu vida por primera vez?"
      ],
      corregir: [
        "¿De qué manera practicas hoy la disposición a escuchar antes de reaccionar?",
        "¿Cómo te apoya la experiencia de otros para no volver a confiar solo en tu propio ego?"
      ]
    },
    variaciones: ["Rendición del ego", "Dejar de luchar"],
    palabrasClave: ["despertar", "rendición", "fe", "esperanza"],
    advertenciaEtica: "",
    advertenciaLider: "Evitar imponer conceptos religiosos. Enfocar en el grupo como el primer 'poder superior' comprensible.",
    noUsarPara: [],
    esCatalogoBase: true,
    prioridad: 10,
    relacionados: [],
    fechaCreacion: "2026-05-01"
  },

  {
    id: "tema-creer-02",
    titulo: "La pérdida del miedo y la llegada de la fe",
    tituloCorto: "Pérdida del miedo",
    estado: "Completo",
    etiquetas: ["paso-3-entrega", "paso-11-contacto", "miedo", "fe", "entrega", "ansiedad", "valentía"],
    categoria: "Paso 3",
    evento: ["Semana del Guerrero"],
    publico: ["Participantes"],
    intensidad: "Media",
    momento: "Mitad",
    formato: "Individual",
    tipoTestimonio: "Didáctico",
    emocion: ["Miedo", "Esperanza"],
    defectoCaracter: ["Miedo", "Control"],
    virtudPrincipal: ["Fe", "Valentía"],
    pasos: ["Paso 3", "Paso 11"],
    tradiciones: [],
    conceptos: ["Acción a pesar del miedo", "Confianza en el proceso"],
    fuentePrincipal: "AA",
    fuenteAA: [
      {
        obra: "Llegamos a Creer",
        referencia: "Capítulo: Pérdida del miedo",
        uso: "Ilustrar cómo la acción y la confianza en el proceso desplazan al terror paralizante."
      }
    ],
    fuenteFGDLL: [],
    librosRecomendados: [],
    objetivo: "Ayudar a identificar cómo el miedo fabricaba excusas para no accionar.",
    fraseAncla: "El miedo me mintió diciéndome que estaba a salvo mientras me destruía.",
    guiaTestimonio: {
      detectar: [
        "¿Qué miedos irracionales gobernaban tus decisiones y te mantenían aislado?",
        "¿Cómo usabas la ira o el control para esconder tu terror a fracasar?"
      ],
      admitir: [
        "¿Cuándo te diste cuenta de que tus miedos no eran reales, sino proyecciones de tu enfermedad?",
        "¿Cómo te ayudó el grupo a caminar a través del miedo en lugar de huir?"
      ],
      corregir: [
        "¿Qué herramientas (pausa, tribuna, servicio) usas hoy cuando el miedo aparece?",
        "¿Cómo aplicas el Tercer Paso para accionar a pesar de la incertidumbre?"
      ]
    },
    variaciones: ["Caminar con miedo", "Confiar en el proceso"],
    palabrasClave: ["miedo", "acción", "confianza", "paso 3"],
    advertenciaEtica: "Validar el miedo de los nuevos sin minimizarlos, enfocándose en la acción constructiva.",
    advertenciaLider: "Cuidar que el compartimiento no se vuelva una lista de fobias, sino de soluciones.",
    noUsarPara: ["Ridiculizar los miedos del participante"],
    esCatalogoBase: true,
    prioridad: 15,
    relacionados: ["tema-creer-01"],
    fechaCreacion: "2026-05-01"
  },

  // ==========================================
  // FUENTE: MENÚ JUVENIL / EL JOVEN EN AA
  // ==========================================
  {
    id: "tema-joven-01",
    titulo: "¿Soy demasiado joven para tener un problema?",
    tituloCorto: "No hay edad para el fondo",
    estado: "Completo",
    etiquetas: ["paso-1-impotencia", "juventud", "autodescubrimiento", "identidad", "negación", "comunidad"],
    categoria: "Juventud",
    evento: ["Semana de la Juventud"],
    publico: ["Jóvenes", "Recién llegados"],
    intensidad: "Alta",
    momento: "Inicio",
    formato: "Panel corto",
    tipoTestimonio: "Crudo",
    emocion: ["Rebeldía", "Miedo"],
    defectoCaracter: ["Negación", "Arrogancia"],
    virtudPrincipal: ["Honestidad", "Humildad"],
    pasos: ["Paso 1"],
    tradiciones: [],
    conceptos: ["Fondo emocional vs. material", "Identificación"],
    fuentePrincipal: "AA",
    fuenteAA: [
      {
        obra: "El Joven en AA",
        referencia: "Historias personales",
        uso: "Desmitificar la idea de que se necesita perder familia o trabajo para tocar fondo."
      }
    ],
    fuenteFGDLL: [],
    librosRecomendados: [],
    objetivo: "Demostrar que la bancarrota emocional y espiritual llega antes que la material.",
    fraseAncla: "No perdí casas ni trabajos, pero perdí las ganas de vivir antes de los veinte.",
    guiaTestimonio: {
      detectar: [
        "¿Cómo usabas tu juventud como excusa para justificar tu forma de destruir tu vida?",
        "¿De qué manera la presión social te hacía aparentar que todo estaba bajo control?"
      ],
      admitir: [
        "¿Cuál fue el vacío interno que te obligó a pedir ayuda a pesar de ser tan joven?",
        "¿Qué se sintió escuchar a alguien mayor contar una historia emocionalmente idéntica a la tuya?"
      ],
      corregir: [
        "¿Cómo construyes hoy tu identidad sin necesidad de complacer las expectativas destructivas de otros?",
        "¿De qué manera vives tu juventud hoy en libertad y sin fugas?"
      ]
    },
    variaciones: ["El mito de la edad", "Juventud y dolor"],
    palabrasClave: ["juventud", "fondo emocional", "rebeldía", "identificación"],
    advertenciaEtica: "",
    advertenciaLider: "Evitar que los miembros mayores minimicen el fondo del joven (el clásico 'tú no sufriste nada'). Fomentar empatía.",
    noUsarPara: ["Minimizar el dolor del joven"],
    esCatalogoBase: true,
    prioridad: 20,
    relacionados: [],
    fechaCreacion: "2026-05-01"
  },

  {
    id: "tema-joven-02",
    titulo: "Castillos en el aire: La fantasía como fuga",
    tituloCorto: "Castillos en el aire",
    estado: "Completo",
    etiquetas: ["paso-4-inventario", "juventud", "negación", "cambio", "responsabilidad", "autodescubrimiento"],
    categoria: "Juventud",
    evento: ["Semana de la Juventud"],
    publico: ["Jóvenes"],
    intensidad: "Media",
    momento: "Mitad",
    formato: "Individual",
    tipoTestimonio: "Didáctico",
    emocion: ["Frustración", "Ansiedad"],
    defectoCaracter: ["Evasión", "Perfeccionismo"],
    virtudPrincipal: ["Responsabilidad", "Honestidad"],
    pasos: ["Paso 4"],
    tradiciones: [],
    conceptos: ["Fantasía como mecanismo de evasión", "Solo por hoy"],
    fuentePrincipal: "FGDLL",
    fuenteAA: [
      {
        obra: "Menú de Temas Juvenil",
        referencia: "Castillos en el aire",
        uso: "Identificar la fantasía y los planes irreales como mecanismo de evasión."
      }
    ],
    fuenteFGDLL: [],
    librosRecomendados: [],
    objetivo: "Aterrizar la mente del joven a la realidad del 'Solo por hoy' abandonando la fantasía.",
    fraseAncla: "Hacía planes gigantes para el futuro porque no soportaba habitar mi presente.",
    guiaTestimonio: {
      detectar: [
        "¿De qué manera te refugiabas en planes grandiosos para no enfrentar tus responsabilidades diarias?",
        "¿Qué frustración sentías cuando tus 'castillos en el aire' chocaban con la realidad?"
      ],
      admitir: [
        "¿Cuándo te diste cuenta de que soñar sin accionar era otra forma de estar anestesiado?",
        "¿Cómo te enseñó el grupo a aterrizar tus expectativas y mirar tu realidad con honestidad?"
      ],
      corregir: [
        "¿Qué acciones pequeñas y reales haces hoy para construir tu vida en lugar de solo imaginarla?",
        "¿Cómo mantienes tus metas aterrizadas aplicando el plan de 24 horas?"
      ]
    },
    variaciones: ["Soñar sin actuar", "Fuga en la fantasía"],
    palabrasClave: ["fantasía", "realidad", "evasión", "solo por hoy"],
    advertenciaEtica: "",
    advertenciaLider: "Guiar para que el joven entienda que soñar es válido, pero evadir el presente destruye.",
    noUsarPara: [],
    esCatalogoBase: true,
    prioridad: 25,
    relacionados: ["tema-joven-01"],
    fechaCreacion: "2026-05-01"
  },

  // ==========================================
  // FUENTE: EL LENGUAJE DEL CORAZÓN
  // ==========================================
  {
    id: "tema-corazon-01",
    titulo: "El dolor como piedra de toque del crecimiento espiritual",
    tituloCorto: "El dolor como maestro",
    estado: "Completo",
    etiquetas: ["paso-10-reflexion", "paso-11-contacto", "tristeza", "crecimiento", "sanacion", "aceptación", "transformacion"],
    categoria: "Desarrollo",
    evento: ["Convenciones", "Semana del Guerrero"],
    publico: ["Participantes", "Líderes"],
    intensidad: "Alta",
    momento: "Cierre",
    formato: "Individual",
    tipoTestimonio: "Crudo",
    emocion: ["Tristeza", "Esperanza"],
    defectoCaracter: ["Intolerancia al dolor"],
    virtudPrincipal: ["Aceptación", "Madurez"],
    pasos: ["Paso 10", "Paso 11"],
    tradiciones: [],
    conceptos: ["El dolor como oportunidad de crecimiento"],
    fuentePrincipal: "AA",
    fuenteAA: [
      {
        obra: "El Lenguaje del Corazón",
        referencia: "El dolor: Piedra de toque del crecimiento",
        uso: "Aceptar que las crisis emocionales en recuperación son oportunidades, no fracasos."
      }
    ],
    fuenteFGDLL: [],
    librosRecomendados: [],
    objetivo: "Enseñar a no huir del dolor en la recuperación, sino a usarlo para evolucionar.",
    fraseAncla: "El dolor ya no es mi enemigo; hoy es el maestro que me avisa dónde debo crecer.",
    guiaTestimonio: {
      detectar: [
        "¿Cómo reaccionabas antes ante la frustración o el dolor buscando anestesiarlo inmediatamente?",
        "¿De qué maneras la intolerancia al sufrimiento te hacía culpar a otros de tu malestar?"
      ],
      admitir: [
        "¿Qué crisis viviste estando ya en recuperación que te obligó a usar los Pasos en lugar de huir?",
        "¿Cómo entendiste que sentir dolor en sobriedad no significaba que el programa estaba fallando?"
      ],
      corregir: [
        "¿De qué manera te sientas hoy a sentir y analizar lo que duele antes de reaccionar?",
        "¿Cómo acompañas a tus compañeros cuando están pasando por su propio dolor sin intentar 'salvarlos'?"
      ]
    },
    variaciones: ["Intolerancia al dolor", "Crecer duele"],
    palabrasClave: ["dolor", "crecimiento", "crisis", "aceptación"],
    advertenciaEtica: "Orientar el tema a la madurez emocional, sin hacer apología del sufrimiento innecesario.",
    advertenciaLider: "Cuidar que no se convierta en una catarsis desoladora, debe cerrar con crecimiento.",
    noUsarPara: ["Glorificar el sufrimiento"],
    esCatalogoBase: true,
    prioridad: 30,
    relacionados: [],
    fechaCreacion: "2026-05-01"
  },

  {
    id: "tema-corazon-02",
    titulo: "Cuando la muerte y la locura tocan la puerta",
    tituloCorto: "Al borde del abismo",
    estado: "Completo",
    etiquetas: ["paso-1-impotencia", "suicidio", "crisis-emocional", "ideacion-suicida", "esperanza", "comunidad"],
    categoria: "Crisis",
    evento: [],
    publico: ["Participantes"],
    intensidad: "Alta",
    momento: "Mitad",
    formato: "Individual",
    tipoTestimonio: "Crudo",
    emocion: ["Desesperación", "Esperanza"],
    defectoCaracter: ["Aislamiento"],
    virtudPrincipal: ["Esperanza", "Confianza"],
    pasos: ["Paso 1"],
    tradiciones: [],
    conceptos: ["Pedir ayuda a tiempo", "Red de seguridad"],
    fuentePrincipal: "AA",
    fuenteAA: [
      {
        obra: "El Lenguaje del Corazón",
        referencia: "Artículos sobre la depresión profunda de Bill W.",
        uso: "Visibilizar que la depresión y la ideación suicida son reales y requieren ayuda extrema."
      }
    ],
    fuenteFGDLL: [],
    librosRecomendados: [],
    objetivo: "Visibilizar el dolor extremo que lleva al borde, y mostrar que pedir ayuda a tiempo salva vidas.",
    fraseAncla: "El dolor era tan grande que no quería morir, solo quería dejar de sufrir.",
    guiaTestimonio: {
      detectar: [
        "¿Cómo el dolor emocional cerró todas tus salidas, aislándote en la oscuridad?",
        "¿De qué manera el silencio te convenció de que no había más esperanza?"
      ],
      admitir: [
        "¿Cuál fue la mano tendida o la frase en el grupo que te ancló de regreso a la vida?",
        "¿Cómo fue admitir que ya no podías gobernar tus pensamientos?"
      ],
      corregir: [
        "¿A quién llamas inmediatamente hoy cuando tus pensamientos se oscurecen?",
        "¿De qué manera la agrupación se ha vuelto tu red de seguridad?"
      ]
    },
    variaciones: ["El abismo de la depresión", "El rescate silencioso"],
    palabrasClave: ["crisis", "suicidio", "depresión", "rescate"],
    advertenciaEtica: "CRÍTICO: No permita detalles metodológicos de intentos de suicidio. El enfoque DEBE estar en la desesperación que llevó allí, y cómo el rescate fue pedir ayuda. Si alguien expresa intenciones activas, referir a ayuda profesional de emergencia.",
    advertenciaLider: "Tema de crisis extrema. Debe ser guiado con extremo cuidado para inspirar esperanza y contención, no morbo.",
    noUsarPara: ["Describir métodos de autolesión", "Uso en grupos con personas en riesgo activo sin profesional presente"],
    esCatalogoBase: true,
    prioridad: 1,
    relacionados: [],
    fechaCreacion: "2026-05-01"
  },

  // ==========================================
  // FUENTE: COMO LO VE BILL
  // ==========================================
  {
    id: "tema-bill-01",
    titulo: "Resentimiento: El ofensor número uno",
    tituloCorto: "El ofensor número uno",
    estado: "Completo",
    etiquetas: ["paso-4-inventario", "paso-10-reflexion", "resentimiento", "perdón", "ira", "responsabilidad"],
    categoria: "Paso 4",
    evento: ["Cualquiera"],
    publico: ["Participantes"],
    intensidad: "Alta",
    momento: "Mitad",
    formato: "Panel largo",
    tipoTestimonio: "Didáctico",
    emocion: ["Enojo", "Paz"],
    defectoCaracter: ["Resentimiento", "Victimismo"],
    virtudPrincipal: ["Perdón", "Responsabilidad"],
    pasos: ["Paso 4", "Paso 10"],
    tradiciones: [],
    conceptos: ["Inventario de resentimientos", "Liberación del odio"],
    fuentePrincipal: "AA",
    fuenteAA: [
      {
        obra: "Como lo ve Bill",
        referencia: "Resentimiento",
        uso: "Mostrar cómo guardar ofensas pasadas anula la paz presente."
      }
    ],
    fuenteFGDLL: [],
    librosRecomendados: [],
    objetivo: "Visualizar el resentimiento como un veneno interno que se debe soltar para sobrevivir.",
    fraseAncla: "El resentimiento era un veneno que yo me tomaba, esperando que el otro muriera.",
    guiaTestimonio: {
      detectar: [
        "¿Qué viejas ofensas atesorabas y usabas como excusa para estar enojado con el mundo?",
        "¿Cómo tu rol de 'víctima eterna' te impedía ver tu propia parte en los conflictos?"
      ],
      admitir: [
        "¿Cuándo te diste cuenta en tu inventario de que tú eras quien alimentaba ese dolor?",
        "¿Cómo fue el proceso de admitir que perdonar (o soltar) era para tu propia paz y no por el otro?"
      ],
      corregir: [
        "¿Qué práctica diaria utilizas hoy (Paso 10) para no irte a dormir con resentimientos nuevos?",
        "¿De qué manera pones límites hoy sin necesidad de acumular odio hacia las personas?"
      ]
    },
    variaciones: ["Soltar el veneno", "Victimismo"],
    palabrasClave: ["resentimiento", "inventario", "perdón", "víctima"],
    advertenciaEtica: "El perdón es un proceso personal de liberación de resentimiento, NO se debe forzar a convivir con agresores.",
    advertenciaLider: "Asegurar que el participante se enfoque en SU reacción al resentimiento, no en la lista de culpas del ofensor.",
    noUsarPara: ["Forzar el perdón", "Justificar el abuso"],
    esCatalogoBase: true,
    prioridad: 35,
    relacionados: [],
    fechaCreacion: "2026-05-01"
  },

  {
    id: "tema-bill-02",
    titulo: "Aceptación: La llave que abre todas las puertas",
    tituloCorto: "La llave de la aceptación",
    estado: "Completo",
    etiquetas: ["paso-1-impotencia", "paso-3-entrega", "aceptación", "paz", "cambio", "entrega", "gratitud"],
    categoria: "Desarrollo",
    evento: ["Cualquiera"],
    publico: ["Participantes"],
    intensidad: "Media",
    momento: "Inicio",
    formato: "Individual",
    tipoTestimonio: "Inspirador",
    emocion: ["Paz", "Aceptación"],
    defectoCaracter: ["Control", "Resistencia"],
    virtudPrincipal: ["Aceptación", "Paz"],
    pasos: ["Paso 1", "Paso 3"],
    tradiciones: [],
    conceptos: ["Aceptar lo que no puedo cambiar", "Serenidad"],
    fuentePrincipal: "AA",
    fuenteAA: [
      {
        obra: "Como lo ve Bill",
        referencia: "Aceptación",
        uso: "Aceptar a las personas, lugares y cosas tal como son, no como quisiéramos que fueran."
      }
    ],
    fuenteFGDLL: [],
    librosRecomendados: [],
    objetivo: "Dejar de sufrir por lo que no podemos controlar.",
    fraseAncla: "La paz no llegó cuando el mundo cambió, llegó cuando yo lo acepté.",
    guiaTestimonio: {
      detectar: [
        "¿Cómo peleabas contra la realidad exigiendo que las personas y situaciones fueran de otra manera?",
        "¿De qué forma el deseo de control te generaba angustia constante?",
        "¿Qué relaciones o situaciones te consumían energía por no aceptarlas como eran?"
      ],
      admitir: [
        "¿Cuál fue el momento en que te rendiste y dejaste de pelear contra lo que no podías cambiar?",
        "¿Cómo el programa te enseñó la diferencia entre aceptar y resignarse?",
        "¿Qué herramienta del programa te ayudó a practicar la aceptación por primera vez?"
      ],
      corregir: [
        "¿Cómo usas hoy la oración de la serenidad cuando algo te rebasa?",
        "¿Qué cambios comenzaron a ocurrir en tu vida cuando dejaste de resistir la realidad?",
        "¿De qué manera la aceptación te ha liberado para enfocarte en lo que sí puedes hacer?"
      ]
    },
    variaciones: ["Soltar el control", "La serenidad como práctica"],
    palabrasClave: ["aceptación", "serenidad", "control", "rendición"],
    advertenciaEtica: "",
    advertenciaLider: "Distinguir claramente entre aceptación activa (que libera para actuar) y resignación pasiva (que paraliza).",
    noUsarPara: ["Justificar abuso o maltrato con 'hay que aceptarlo'"],
    esCatalogoBase: true,
    prioridad: 40,
    relacionados: ["tema-bill-01"],
    fechaCreacion: "2026-05-01"
  }

];

// ============================================================================
// PAQUETE: LITERATURA AA (20 temas — Los 12 Pasos, Tradiciones y Vida Diaria)
// ============================================================================
const PAQUETE_LITERATURA_AA = [
  {
    id: "tema-AALIT-001",
    titulo: "La admisión de la impotencia como primer paso a la libertad",
    tituloCorto: "Admitir la impotencia",
    estado: "Completo",
    categoria: "Primer Paso",
    evento: ["Juntas de Paso 1", "Reuniones de principiantes"],
    publico: ["Todos", "Recién llegados"],
    etiquetas: ["paso-1-impotencia", "aceptación", "negación", "honestidad"],
    intensidad: "Alta",
    momento: "Inicio",
    formato: "Individual",
    tipoTestimonio: "Crudo",
    emocion: ["Miedo", "Despair", "Esperanza"],
    defectoCaracter: ["Negación", "Soberbia"],
    virtudPrincipal: ["Honestidad"],
    pasos: ["Paso 1"],
    tradiciones: [],
    conceptos: ["Rendición incondicional", "Fondo emocional"],
    fuentePrincipal: "AA",
    fuenteAA: [{ obra: "Libro Grande / Doce Pasos y Doce Tradiciones", referencia: "Paso 1", uso: "Base del Primer Paso y la rendición" }],
    fuenteFGDLL: [],
    librosRecomendados: [{ titulo: "Alcohólicos Anónimos (Libro Azul)", autor: "Bill W. y primeros miembros", año: 1939, uso: "Base del Primer Paso y la rendición" }],
    objetivo: "Ayudar a comprender que admitir la derrota total no es debilidad, sino el cimiento indispensable de la recuperación.",
    fraseAncla: "La admisión de la impotencia personal se convierte en el sólido cimiento sobre el cual podremos construir una existencia feliz.",
    guiaTestimonio: {
      detectar: [
        "¿Cómo intentabas controlar tu consumo o tus conductas destructivas?",
        "¿Qué excusas te dabas para no ver que tu vida era ingobernable?",
        "¿Cuál fue el fondo de sufrimiento que te obligó a parar?"
      ],
      admitir: [
        "¿En qué momento de tu proceso aceptaste que no tenías el control?",
        "¿Cómo se sintió dejar de pelear y rendirte ante tu enfermedad?",
        "¿De qué manera el grupo te ayudó a ver tu realidad?"
      ],
      corregir: [
        "¿Cómo practicas la rendición en tu vida diaria hoy?",
        "¿Qué herramientas usas cuando vuelve la ilusión de control?",
        "¿Cómo ha cambiado tu vida al aceptar tu impotencia?"
      ]
    },
    variaciones: ["El regalo de la derrota", "Dejar de luchar"],
    palabrasClave: ["impotencia", "derrota", "control", "rendición"],
    advertenciaEtica: "",
    advertenciaLider: "Cuidar que los participantes no confundan la impotencia ante la enfermedad con falta de responsabilidad sobre sus acciones de hoy.",
    noUsarPara: ["Fomentar el victimismo", "Justificar recaídas sin buscar ayuda"],
    esCatalogoBase: false,
    prioridad: 100,
    relacionados: [],
    fechaCreacion: "2026-05-31"
  },
  {
    id: "tema-AALIT-002",
    titulo: "Llegar a creer en un Poder Superior restaurador",
    tituloCorto: "Llegamos a creer",
    estado: "Completo",
    categoria: "Segundo Paso",
    evento: ["Juntas de estudio", "Juntas espirituales"],
    publico: ["Todos", "Agnósticos", "Escépticos"],
    etiquetas: ["paso-2-fe", "fe", "esperanza", "confianza"],
    intensidad: "Media",
    momento: "Mitad",
    formato: "Individual",
    tipoTestimonio: "Inspirador",
    emocion: ["Esperanza", "Paz"],
    defectoCaracter: ["Soberbia", "Control-obsesivo"],
    virtudPrincipal: ["Fe"],
    pasos: ["Paso 2"],
    tradiciones: [],
    conceptos: ["Mente receptiva", "Sano juicio"],
    fuentePrincipal: "AA",
    fuenteAA: [{ obra: "Llegamos a Creer / Doce Pasos y Doce Tradiciones", referencia: "Paso 2", uso: "Ejemplos de despertares espirituales variados" }],
    fuenteFGDLL: [],
    librosRecomendados: [{ titulo: "Llegamos a Creer", autor: "Varios autores AA", año: 1973, uso: "Ejemplos de despertares espirituales variados" }],
    objetivo: "Mostrar que la fe no requiere dogmas religiosos, sino una mente abierta y la disposición de confiar en algo más grande que uno mismo.",
    fraseAncla: "Llegamos a creer que un Poder superior a nosotros mismos podría devolvernos el sano juicio.",
    guiaTestimonio: {
      detectar: [
        "¿Cómo era tu relación con la fe, la religión o la esperanza antes del programa?",
        "¿De qué manera el orgullo intelectual te impedía pedir ayuda?",
        "¿Cómo se manifestaba tu locura emocional o tu falta de sano juicio?"
      ],
      admitir: [
        "¿Qué te convenció de que los demás miembros tenían un poder que a ti te faltaba?",
        "¿Cómo fue tu proceso personal de llegar a creer en un Poder Superior, tal como tú lo concibes?",
        "¿Qué resistencias tuviste que soltar para abrir tu mente?"
      ],
      corregir: [
        "¿Cómo te apoya hoy tu Poder Superior en los momentos difíciles?",
        "¿Qué acciones diarias mantienen viva tu esperanza y tu fe?",
        "¿De qué manera notas que se te ha devuelto el sano juicio?"
      ]
    },
    variaciones: ["La fe de los agnósticos", "El sano juicio recuperado"],
    palabrasClave: ["Poder Superior", "fe", "esperanza", "agnóstico", "apertura"],
    advertenciaEtica: "",
    advertenciaLider: "Respetar absolutamente todas las concepciones de un Poder Superior, evitando imponer dogmas religiosos.",
    noUsarPara: ["Hacer proselitismo religioso", "Juzgar a quienes dudan o son ateos"],
    esCatalogoBase: false,
    prioridad: 95,
    relacionados: [],
    fechaCreacion: "2026-05-31"
  },
  {
    id: "tema-AALIT-003",
    titulo: "La entrega total: Hacer a un lado el ego",
    tituloCorto: "Poner la voluntad",
    estado: "Completo",
    categoria: "Tercer Paso",
    evento: ["Juntas regulares"],
    publico: ["Todos"],
    etiquetas: ["paso-3-entrega", "entrega", "humildad", "voluntad"],
    intensidad: "Alta",
    momento: "Mitad",
    formato: "Individual",
    tipoTestimonio: "Inspirador",
    emocion: ["Paz", "Miedo"],
    defectoCaracter: ["Egoísmo", "Soberbia"],
    virtudPrincipal: ["Entrega"],
    pasos: ["Paso 3"],
    tradiciones: [],
    conceptos: ["Entregar la voluntad y la vida", "Dejar a Dios actuar"],
    fuentePrincipal: "AA",
    fuenteAA: [{ obra: "Libro Grande / Como lo ve Bill", referencia: "Paso 3", uso: "Reflexiones sobre la voluntad y la dependencia" }],
    fuenteFGDLL: [],
    librosRecomendados: [{ titulo: "Como lo ve Bill", autor: "Bill W.", año: 1967, uso: "Reflexiones sobre la voluntad y la dependencia" }],
    objetivo: "Evidenciar que el esfuerzo por controlar todo genera sufrimiento, y que la paz llega al soltar las riendas.",
    fraseAncla: "Decidimos poner nuestras voluntades y nuestras vidas al cuidado de Dios, como nosotros lo concebimos.",
    guiaTestimonio: {
      detectar: [
        "¿De qué maneras intentabas dirigir el show de tu vida y la de los demás?",
        "¿Cuáles eran las consecuencias de querer forzar los resultados a tu manera?",
        "¿A qué miedos te enfrentabas cuando las cosas no salían como querías?"
      ],
      admitir: [
        "¿Cómo tomaste la decisión de entregar tu vida al cuidado de tu Poder Superior?",
        "¿Qué te costó más trabajo soltar en el programa?",
        "¿Cómo te ayudó escuchar las experiencias de otros que ya se habían rendido?"
      ],
      corregir: [
        "¿Cómo practicas la entrega cuando sientes miedo o incertidumbre hoy?",
        "¿Qué diferencia hay entre tu vida dirigida por ti y tu vida dirigida por un Poder Superior?",
        "¿Cómo usas la Oración de la Serenidad para soltar el control?"
      ]
    },
    variaciones: ["Dejar de ser el director", "Confianza activa"],
    palabrasClave: ["entrega", "control", "voluntad", "confianza"],
    advertenciaEtica: "",
    advertenciaLider: "Recordar que la entrega no es inacción, sino acción libre de la obsesión por el resultado.",
    noUsarPara: ["Fomentar la pasividad absoluta frente a la vida"],
    esCatalogoBase: false,
    prioridad: 90,
    relacionados: [],
    fechaCreacion: "2026-05-31"
  },
  {
    id: "tema-AALIT-004",
    titulo: "Enfrentando los fantasmas del pasado: El inventario",
    tituloCorto: "El inventario moral",
    estado: "Completo",
    categoria: "Cuarto Paso",
    evento: ["Juntas de pasos", "Talleres de inventario"],
    publico: ["Todos"],
    etiquetas: ["paso-4-inventario", "resentimiento", "miedo", "honestidad", "autodescubrimiento"],
    intensidad: "Alta",
    momento: "Mitad",
    formato: "Individual",
    tipoTestimonio: "Crudo",
    emocion: ["Resentimiento", "Miedo", "Culpa"],
    defectoCaracter: ["Resentimiento", "Egoísmo"],
    virtudPrincipal: ["Valentía"],
    pasos: ["Paso 4"],
    tradiciones: [],
    conceptos: ["Inventario minucioso", "Resentimiento como veneno"],
    fuentePrincipal: "AA",
    fuenteAA: [{ obra: "Libro Grande / Doce Pasos y Doce Tradiciones", referencia: "Paso 4", uso: "Guía práctica para hacer el inventario" }],
    fuenteFGDLL: [],
    librosRecomendados: [{ titulo: "Alcohólicos Anónimos", autor: "Bill W.", año: 1939, uso: "Guía práctica para hacer el inventario" }],
    objetivo: "Desmitificar el inventario moral, mostrándolo como una herramienta de liberación de resentimientos y miedos, no de castigo.",
    fraseAncla: "El resentimiento es el ofensor número uno. Destruye más alcohólicos que cualquier otra cosa.",
    guiaTestimonio: {
      detectar: [
        "¿De qué manera los rencores y miedos del pasado dominaban tus acciones?",
        "¿Cómo te justificabas culpando a los demás de tus problemas?",
        "¿Qué carga emocional llevabas antes de hacer tu inventario?"
      ],
      admitir: [
        "¿Qué descubriste sobre tu propia participación en tus problemas al escribir tu inventario?",
        "¿Cómo te sentiste al plasmar por primera vez tus secretos y miedos en papel?",
        "¿Qué patrones repetitivos pudiste identificar en tu vida?"
      ],
      corregir: [
        "¿Cómo te liberas hoy de nuevos resentimientos antes de que crezcan?",
        "¿De qué manera el autoanálisis te ayuda a no repetir viejos errores?",
        "¿Cómo practicas la honestidad contigo mismo en tu vida cotidiana?"
      ]
    },
    variaciones: ["Desenterrando el resentimiento", "Mirar adentro sin miedo"],
    palabrasClave: ["inventario", "resentimiento", "miedo", "culpa", "escritura"],
    advertenciaEtica: "",
    advertenciaLider: "Alentar a no compartir detalles explícitos que dañen a terceros, enfocándose en la propia actitud y emoción.",
    noUsarPara: ["Promover la culpa excesiva", "Hablar de crímenes que requieran asesoría legal en tribuna abierta"],
    esCatalogoBase: false,
    prioridad: 85,
    relacionados: [],
    fechaCreacion: "2026-05-31"
  },
  {
    id: "tema-AALIT-005",
    titulo: "La sanación a través de la confesión: Quinto Paso",
    tituloCorto: "Admitir los defectos",
    estado: "Completo",
    categoria: "Quinto Paso",
    evento: ["Juntas de reflexión"],
    publico: ["Todos"],
    etiquetas: ["paso-5-confesion", "honestidad", "vergüenza", "sanacion", "liberacion"],
    intensidad: "Alta",
    momento: "Mitad",
    formato: "Individual",
    tipoTestimonio: "Inspirador",
    emocion: ["Vergüenza", "Paz", "Alegría"],
    defectoCaracter: ["Orgullo", "Aislamiento"],
    virtudPrincipal: ["Humildad"],
    pasos: ["Paso 5"],
    tradiciones: [],
    conceptos: ["Naturaleza exacta de los defectos", "Romper el aislamiento"],
    fuentePrincipal: "AA",
    fuenteAA: [{ obra: "Doce Pasos y Doce Tradiciones", referencia: "Paso 5", uso: "El sentido de compartir el inventario" }],
    fuenteFGDLL: [],
    librosRecomendados: [{ titulo: "Doce Pasos y Doce Tradiciones", autor: "Bill W.", año: 1952, uso: "El sentido de compartir el inventario" }],
    objetivo: "Subrayar cómo admitir nuestros secretos ante otro ser humano rompe el aislamiento y cura la vergüenza.",
    fraseAncla: "Hasta que no hubimos charlado con completa sinceridad acerca de nuestros conflictos, y escuchado a alguien más hacer lo mismo, todavía no pertenecíamos.",
    guiaTestimonio: {
      detectar: [
        "¿De qué manera tus secretos y tu vergüenza te mantenían aislado?",
        "¿Por qué creías que si alguien te conocía realmente, te rechazaría?",
        "¿Cómo se sentía cargar solo con las culpas de tu pasado?"
      ],
      admitir: [
        "¿Qué te dio el valor para compartir tu inventario con tu padrino o guía?",
        "¿Cómo fue la experiencia de ser escuchado sin ser juzgado?",
        "¿Qué alivio experimentaste al nombrar la 'naturaleza exacta' de tus defectos?"
      ],
      corregir: [
        "¿Cómo ha cambiado tu forma de relacionarte con los demás ahora que no tienes nada que esconder?",
        "¿De qué manera mantienes viva la práctica de compartir tus cargas emocionales?",
        "¿Cómo ayudas hoy a otros a sentirse seguros para compartir sus propios secretos?"
      ]
    },
    variaciones: ["El fin del aislamiento", "Sacar la basura emocional"],
    palabrasClave: ["confesión", "apadrinamiento", "vergüenza", "liberación"],
    advertenciaEtica: "",
    advertenciaLider: "Enfatizar la confidencialidad absoluta que debe existir entre quien escucha un Quinto Paso y quien lo da.",
    noUsarPara: ["Forzar a alguien a compartir en público lo que debe ser privado"],
    esCatalogoBase: false,
    prioridad: 80,
    relacionados: [],
    fechaCreacion: "2026-05-31"
  },
  {
    id: "tema-AALIT-006",
    titulo: "Dispuestos a soltar: La preparación para el cambio",
    tituloCorto: "Enteramente dispuestos",
    estado: "Completo",
    categoria: "Sexto Paso",
    evento: ["Juntas regulares"],
    publico: ["Todos"],
    etiquetas: ["paso-6-disposicion", "cambio", "crecimiento", "aceptacion"],
    intensidad: "Media",
    momento: "Mitad",
    formato: "Individual",
    tipoTestimonio: "Didáctico",
    emocion: ["Ansiedad", "Esperanza"],
    defectoCaracter: ["Aferramiento", "Perfeccionismo"],
    virtudPrincipal: ["Disposición"],
    pasos: ["Paso 6"],
    tradiciones: [],
    conceptos: ["Estar enteramente dispuesto", "Soltar defectos acariciados"],
    fuentePrincipal: "AA",
    fuenteAA: [{ obra: "Doce Pasos y Doce Tradiciones / Como lo ve Bill", referencia: "Paso 6", uso: "Entender la resistencia a dejar ir los defectos" }],
    fuenteFGDLL: [],
    librosRecomendados: [{ titulo: "Doce Pasos y Doce Tradiciones", autor: "Bill W.", año: 1952, uso: "Entender la resistencia a dejar ir los defectos" }],
    objetivo: "Enseñar que la recuperación requiere la voluntad de abandonar incluso aquellos defectos que nos producen un placer morboso o aparente seguridad.",
    fraseAncla: "Casi todos los seres humanos prefieren quedarse con algunos defectos. El Sexto Paso separa a los hombres de los niños.",
    guiaTestimonio: {
      detectar: [
        "¿Cuáles eran esos defectos (ira, victimismo, lujuria) de los que en el fondo no querías desprenderte?",
        "¿Cómo te autoengañabas pensando que ciertos defectos te protegían o eran útiles?",
        "¿Qué sufrimiento te causaba aferrarte a viejos patrones de conducta?"
      ],
      admitir: [
        "¿Cómo te diste cuenta de que tus defectos acariciados te estaban frenando?",
        "¿Qué significó para ti llegar a estar 'enteramente dispuesto' a cambiar?",
        "¿Cómo pediste ayuda para soltar aquello que te era tan familiar?"
      ],
      corregir: [
        "¿Qué haces hoy cuando notas que quieres volver a un viejo defecto?",
        "¿Cómo practicas la disposición diaria para seguir transformándote?",
        "¿De qué manera tu vida es más plena al no depender de esas falsas muletas?"
      ]
    },
    variaciones: ["Soltando mis muletas", "La voluntad de cambiar"],
    palabrasClave: ["disposición", "defectos", "aferrarse", "cambio"],
    advertenciaEtica: "",
    advertenciaLider: "Recordar que es un proceso de progreso, no de perfección inmediata.",
    noUsarPara: ["Generar frustración por no poder eliminar defectos de golpe"],
    esCatalogoBase: false,
    prioridad: 75,
    relacionados: [],
    fechaCreacion: "2026-05-31"
  },
  {
    id: "tema-AALIT-007",
    titulo: "La verdadera humildad en acción: El Séptimo Paso",
    tituloCorto: "Pedir con humildad",
    estado: "Completo",
    categoria: "Séptimo Paso",
    evento: ["Juntas de pasos", "Reflexión espiritual"],
    publico: ["Todos"],
    etiquetas: ["paso-7-humildad", "humildad", "transformacion", "sanacion"],
    intensidad: "Alta",
    momento: "Mitad",
    formato: "Individual",
    tipoTestimonio: "Inspirador",
    emocion: ["Paz", "Alegría"],
    defectoCaracter: ["Soberbia", "Arrogancia"],
    virtudPrincipal: ["Humildad"],
    pasos: ["Paso 7"],
    tradiciones: [],
    conceptos: ["Humildad como cimiento", "Petición genuina"],
    fuentePrincipal: "AA",
    fuenteAA: [{ obra: "Doce Pasos y Doce Tradiciones", referencia: "Paso 7", uso: "El sentido profundo de la humildad" }],
    fuenteFGDLL: [],
    librosRecomendados: [{ titulo: "Doce Pasos y Doce Tradiciones", autor: "Bill W.", año: 1952, uso: "El sentido profundo de la humildad" }],
    objetivo: "Comprender la humildad no como humillación, sino como una visión realista de nosotros mismos y nuestra necesidad de ayuda superior.",
    fraseAncla: "La verdadera humildad no es un espíritu abyecto; es solo una estimación correcta de nosotros mismos.",
    guiaTestimonio: {
      detectar: [
        "¿De qué manera el orgullo ciego y la soberbia guiaban tus decisiones?",
        "¿Por qué te resistías a pedir ayuda y preferías sufrir en silencio?",
        "¿Cómo confundías la humildad con la humillación o la debilidad?"
      ],
      admitir: [
        "¿Cómo aprendiste en el grupo el verdadero valor de la humildad?",
        "¿De qué forma le pediste a tu Poder Superior que te liberara de tus defectos?",
        "¿Qué alivio encontraste al dejar de intentar ser perfecto o autosuficiente?"
      ],
      corregir: [
        "¿Cómo aplicas la humildad en tus relaciones y retos de hoy?",
        "¿Qué haces para mantener a raya la soberbia cuando las cosas van bien?",
        "¿De qué manera el Séptimo Paso es una herramienta diaria de equilibrio?"
      ]
    },
    variaciones: ["La soberbia vs. la humildad", "El fin de la autosuficiencia"],
    palabrasClave: ["humildad", "soberbia", "oración", "transformación"],
    advertenciaEtica: "",
    advertenciaLider: "Aclarar que humildad en el programa significa conocer la propia justa dimensión, ni más ni menos.",
    noUsarPara: ["Promover la baja autoestima", "Permitir el abuso por parte de otros bajo el disfraz de 'humildad'"],
    esCatalogoBase: false,
    prioridad: 85,
    relacionados: [],
    fechaCreacion: "2026-05-31"
  },
  {
    id: "tema-AALIT-008",
    titulo: "Preparación para el perdón: La lista del Octavo Paso",
    tituloCorto: "Lista de reparaciones",
    estado: "Completo",
    categoria: "Octavo Paso",
    evento: ["Juntas de pasos"],
    publico: ["Todos"],
    etiquetas: ["paso-8-reparacion", "perdón", "culpa", "honestidad"],
    intensidad: "Media",
    momento: "Mitad",
    formato: "Individual",
    tipoTestimonio: "Didáctico",
    emocion: ["Culpa", "Miedo", "Esperanza"],
    defectoCaracter: ["Justificación", "Victimismo"],
    virtudPrincipal: ["Responsabilidad"],
    pasos: ["Paso 8"],
    tradiciones: [],
    conceptos: ["Estar dispuestos a reparar", "Dejar de culpar a otros"],
    fuentePrincipal: "AA",
    fuenteAA: [{ obra: "Libro Grande", referencia: "Paso 8", uso: "Instrucciones para hacer la lista" }],
    fuenteFGDLL: [],
    librosRecomendados: [{ titulo: "Alcohólicos Anónimos", autor: "Bill W.", año: 1939, uso: "Instrucciones para hacer la lista" }],
    objetivo: "Abordar la resistencia a perdonar y ser perdonados, y la importancia de estar dispuestos a reparar los daños antes de actuar.",
    fraseAncla: "El Octavo y Noveno Pasos tienen que ver con las relaciones personales. Primero echamos una mirada al pasado para descubrir dónde hicimos algún mal.",
    guiaTestimonio: {
      detectar: [
        "¿A quiénes dañaste en tu etapa destructiva y cómo evitabas pensar en ello?",
        "¿De qué manera te justificabas diciendo que 'ellos te habían hecho más daño'?",
        "¿Qué miedo te paralizaba al pensar en hacer una lista de las personas ofendidas?"
      ],
      admitir: [
        "¿Cómo lograste superar el resentimiento para estar 'dispuesto' a reparar el daño?",
        "¿Qué sentiste al poner en papel los nombres de las personas a las que heriste?",
        "¿De qué manera tu padrino te ayudó a enfocarte en tu parte, y no en la de ellos?"
      ],
      corregir: [
        "¿Cómo ha cambiado tu actitud hacia las personas de tu lista?",
        "¿Qué haces hoy para no acumular nuevas deudas emocionales o morales?",
        "¿Cómo practicas la disposición a enmendar tus errores día con día?"
      ]
    },
    variaciones: ["Perdonar para ser perdonado", "Asumiendo mis destrozos"],
    palabrasClave: ["lista", "reparación", "voluntad", "daño"],
    advertenciaEtica: "",
    advertenciaLider: "Recordar que el Octavo Paso es hacer la lista y ganar la disposición, no es aún el momento de ir a pedir perdón.",
    noUsarPara: ["Revivir culpas que paralicen", "Fomentar el odio hacia quienes están en la lista"],
    esCatalogoBase: false,
    prioridad: 70,
    relacionados: [],
    fechaCreacion: "2026-05-31"
  },
  {
    id: "tema-AALIT-009",
    titulo: "Limpiando los escombros del pasado: Noveno Paso",
    tituloCorto: "Reparación directa",
    estado: "Completo",
    categoria: "Noveno Paso",
    evento: ["Juntas regulares", "Juntas de promesas"],
    publico: ["Todos"],
    etiquetas: ["paso-9-enmiendas", "reparacion", "familia", "liberacion", "sanacion"],
    intensidad: "Alta",
    momento: "Mitad",
    formato: "Individual",
    tipoTestimonio: "Crudo",
    emocion: ["Culpa", "Miedo", "Paz"],
    defectoCaracter: ["Cobardía", "Evasión"],
    virtudPrincipal: ["Valentía"],
    pasos: ["Paso 9"],
    tradiciones: [],
    conceptos: ["Enmiendas directas", "Las promesas del programa"],
    fuentePrincipal: "AA",
    fuenteAA: [{ obra: "Libro Grande / Doce Pasos y Doce Tradiciones", referencia: "Paso 9", uso: "Instrucciones sobre reparaciones y las promesas" }],
    fuenteFGDLL: [],
    librosRecomendados: [{ titulo: "Alcohólicos Anónimos", autor: "Bill W.", año: 1939, uso: "Instrucciones sobre reparaciones y las promesas" }],
    objetivo: "Ilustrar la acción liberadora de reparar el daño causado y cómo esto abre la puerta a las promesas del programa.",
    fraseAncla: "Si nos esmeramos en esta fase de nuestro desarrollo, vamos a conocer una libertad y una felicidad nuevas.",
    guiaTestimonio: {
      detectar: [
        "¿De qué manera las culpas de tu pasado te mantenían prisionero o al borde de recaer?",
        "¿Cuáles eran tus mayores miedos al pensar en dar la cara a quienes heriste?",
        "¿Cómo evitabas asumir las consecuencias de tus actos destructivos?"
      ],
      admitir: [
        "¿Cómo te guio tu padrino para hacer reparaciones sin causar más daño?",
        "¿Qué sucedió en tu interior cuando pediste perdón y reparaste material o emocionalmente una falta?",
        "¿Cómo viviste el rechazo de alguien que no quiso perdonarte, si fue el caso?"
      ],
      corregir: [
        "¿Cuáles de las Promesas del programa se han vuelto realidad en tu vida tras el Noveno Paso?",
        "¿De qué manera esta libertad te permite ser hoy un mejor miembro de familia o sociedad?",
        "¿Cómo enmiendas ahora rápidamente cuando te equivocas, para no volver a cargar ese peso?"
      ]
    },
    variaciones: ["Las promesas se cumplen", "El valor de dar la cara"],
    palabrasClave: ["reparación", "promesas", "daño", "libertad", "acción"],
    advertenciaEtica: "Si se habla de reparaciones que implican delitos o daños graves, enfocar el tema en la restitución espiritual/emocional o advertir sobre el cuidado legal.",
    advertenciaLider: "Enfatizar el condicional: 'excepto cuando el hacerlo implique perjuicio'. Las reparaciones requieren prudencia y guía.",
    noUsarPara: ["Fomentar acciones temerarias que dañen a terceros", "Imponer el perdón de otros como condición para la sobriedad"],
    esCatalogoBase: false,
    prioridad: 95,
    relacionados: [],
    fechaCreacion: "2026-05-31"
  },
  {
    id: "tema-AALIT-010",
    titulo: "Mantenimiento diario: La disciplina del Décimo Paso",
    tituloCorto: "Inventario personal",
    estado: "Completo",
    categoria: "Décimo Paso",
    evento: ["Juntas de prevención"],
    publico: ["Todos", "Miembros con tiempo"],
    etiquetas: ["paso-10-reflexion", "crecimiento", "honestidad", "responsabilidad"],
    intensidad: "Media",
    momento: "Cierre",
    formato: "Individual",
    tipoTestimonio: "Didáctico",
    emocion: ["Paz"],
    defectoCaracter: ["Pereza", "Negación"],
    virtudPrincipal: ["Responsabilidad"],
    pasos: ["Paso 10"],
    tradiciones: [],
    conceptos: ["Mantener la casa limpia", "Admitir errores de inmediato"],
    fuentePrincipal: "AA",
    fuenteAA: [{ obra: "Libro Grande / Doce Pasos y Doce Tradiciones", referencia: "Paso 10", uso: "El chequeo diario de nuestro estado espiritual" }],
    fuenteFGDLL: [],
    librosRecomendados: [{ titulo: "Doce Pasos y Doce Tradiciones", autor: "Bill W.", año: 1952, uso: "El chequeo diario de nuestro estado espiritual" }],
    objetivo: "Mostrar que la sobriedad y la paz emocional requieren vigilancia diaria y la corrección inmediata de nuestros errores.",
    fraseAncla: "Continuamos haciendo nuestro inventario personal y cuando nos equivocábamos lo admitíamos inmediatamente.",
    guiaTestimonio: {
      detectar: [
        "¿Cómo era tu vida cuando dejabas que los problemas diarios se acumularan sin resolverlos?",
        "¿Qué pasa con tus emociones (ira, miedo, autocompasión) cuando no haces un chequeo diario?",
        "¿Cómo solías justificar tus estallidos o pequeñas deshonestidades diarias?"
      ],
      admitir: [
        "¿Cómo aprendiste a detenerte y observarte en medio de una situación estresante?",
        "¿Qué sentiste la primera vez que lograste admitir un error inmediatamente y pedir disculpas?",
        "¿De qué manera el inventario diario evita que recaigas en viejas conductas destructivas?"
      ],
      corregir: [
        "¿Cuál es tu rutina para hacer tu inventario al final del día?",
        "¿Cómo manejas las emociones tóxicas ('resacas emocionales') en el momento presente?",
        "¿Qué beneficios te da irte a dormir sabiendo que no le debes nada moralmente a nadie?"
      ]
    },
    variaciones: ["Evitando resacas emocionales", "Mantenimiento espiritual"],
    palabrasClave: ["mantenimiento", "inventario", "vigilancia", "diario"],
    advertenciaEtica: "",
    advertenciaLider: "Enfocar el tema en la parte práctica de limpiar la casa a diario y no dejarse acumular presiones emocionales.",
    noUsarPara: ["Crear un perfeccionismo neurótico", "Castigarse obsesivamente por cada fallo"],
    esCatalogoBase: false,
    prioridad: 80,
    relacionados: [],
    fechaCreacion: "2026-05-31"
  },
  {
    id: "tema-AALIT-011",
    titulo: "El contacto consciente: Oración y meditación",
    tituloCorto: "Contacto consciente",
    estado: "Completo",
    categoria: "Undécimo Paso",
    evento: ["Juntas espirituales"],
    publico: ["Todos"],
    etiquetas: ["paso-11-contacto", "fe", "paz", "crecimiento"],
    intensidad: "Media",
    momento: "Cierre",
    formato: "Individual",
    tipoTestimonio: "Inspirador",
    emocion: ["Paz", "Esperanza"],
    defectoCaracter: ["Soberbia", "Egoísmo"],
    virtudPrincipal: ["Fe"],
    pasos: ["Paso 11"],
    tradiciones: [],
    conceptos: ["Búsqueda de la voluntad divina", "Oración de San Francisco"],
    fuentePrincipal: "AA",
    fuenteAA: [{ obra: "Doce Pasos y Doce Tradiciones", referencia: "Paso 11", uso: "El sentido de la oración y meditación en el programa" }],
    fuenteFGDLL: [],
    librosRecomendados: [{ titulo: "Doce Pasos y Doce Tradiciones", autor: "Bill W.", año: 1952, uso: "El sentido de la oración y meditación en el programa" }],
    objetivo: "Enseñar que la fortaleza diaria viene de mantener una conexión constante y consciente con un Poder Superior.",
    fraseAncla: "Buscamos a través de la oración y la meditación mejorar nuestro contacto consciente con Dios... pidiéndole solamente que nos dejase conocer su voluntad.",
    guiaTestimonio: {
      detectar: [
        "¿Cómo era tu vida cuando confiabas únicamente en tu propia fuerza de voluntad?",
        "¿De qué manera el ajetreo y el ruido mental te desconectaban de tu paz interior?",
        "¿Por qué creías que la oración o meditación no servían o eran debilidad?"
      ],
      admitir: [
        "¿Cómo comenzaste a experimentar y desarrollar tu propio método de oración o meditación?",
        "¿Qué cambio sentiste al pedir 'que se haga tu voluntad' en lugar de exigir resultados específicos?",
        "¿Cómo te ha sostenido el contacto consciente en medio de las crisis personales?"
      ],
      corregir: [
        "¿Cómo integras la meditación y la oración en tu rutina actual?",
        "¿De qué forma escuchas o percibes la dirección de tu Poder Superior?",
        "¿Cómo se refleja esta paz interior en tu trato hacia tu familia y compañeros?"
      ]
    },
    variaciones: ["Buscando Su voluntad", "La Oración de San Francisco"],
    palabrasClave: ["oración", "meditación", "voluntad", "contacto"],
    advertenciaEtica: "",
    advertenciaLider: "Mantener el enfoque en la espiritualidad práctica, sin promover técnicas religiosas específicas.",
    noUsarPara: ["Promover dogmas", "Invalidar a quienes meditan o rezan de forma distinta"],
    esCatalogoBase: false,
    prioridad: 85,
    relacionados: [],
    fechaCreacion: "2026-05-31"
  },
  {
    id: "tema-AALIT-012",
    titulo: "El Despertar Espiritual y el mensaje a otros",
    tituloCorto: "Llevar el mensaje",
    estado: "Completo",
    categoria: "Duodécimo Paso",
    evento: ["Juntas regulares", "Aniversarios"],
    publico: ["Todos"],
    etiquetas: ["paso-12-servicio", "servicio", "apadrinamiento", "comunidad", "amor"],
    intensidad: "Alta",
    momento: "Cierre",
    formato: "Individual",
    tipoTestimonio: "Inspirador",
    emocion: ["Alegría", "Gratitud"],
    defectoCaracter: ["Egoísmo", "Aislamiento"],
    virtudPrincipal: ["Servicio"],
    pasos: ["Paso 12"],
    tradiciones: [],
    conceptos: ["El despertar espiritual", "Practicar estos principios"],
    fuentePrincipal: "AA",
    fuenteAA: [{ obra: "Frente a Frente: El Apadrinamiento / El Lenguaje del Corazón", referencia: "Paso 12", uso: "El apadrinamiento como pilar del Paso Doce" }],
    fuenteFGDLL: [],
    librosRecomendados: [{ titulo: "Frente a Frente", autor: "Grapevine Inc.", año: 2013, uso: "El apadrinamiento como pilar del Paso Doce" }],
    objetivo: "Demostrar que la recuperación real se mantiene y se expande regalando a otros lo que nos fue dado gratuitamente.",
    fraseAncla: "Nada asegura tanto la inmunidad contra la bebida como el trabajo intensivo con otros alcohólicos.",
    guiaTestimonio: {
      detectar: [
        "¿De qué manera el egoísmo y la concentración en tus propios problemas te mantenían enfermo?",
        "¿Cómo intentabas llenar el vacío interior antes de descubrir el servicio?",
        "¿Qué pensabas sobre el 'despertar espiritual' antes de vivirlo?"
      ],
      admitir: [
        "¿Cómo reconociste tu propio despertar espiritual y los cambios en tu personalidad?",
        "¿Qué significó para ti que otro compañero se tomara el tiempo de apadrinarte y escucharte?",
        "¿Qué sentiste la primera vez que lograste ayudar a alguien a ver una luz de esperanza?"
      ],
      corregir: [
        "¿De qué manera llevar el mensaje y apadrinar a otros te mantiene sobrio y centrado hoy?",
        "¿Cómo intentas 'practicar estos principios en todos tus asuntos' (trabajo, hogar, sociedad)?",
        "¿Por qué crees que el amor incondicional del Paso Doce no tiene precio?"
      ]
    },
    variaciones: ["Amor incondicional", "Apadrinamiento en acción"],
    palabrasClave: ["mensaje", "despertar", "servicio", "apadrinamiento"],
    advertenciaEtica: "",
    advertenciaLider: "Enfocar el servicio no solo en la comunidad o el grupo, sino en llevar los principios a la vida familiar y laboral.",
    noUsarPara: ["Jactarse de cuántos ahijados se tiene", "Usar el servicio como escape de las responsabilidades familiares"],
    esCatalogoBase: false,
    prioridad: 95,
    relacionados: [],
    fechaCreacion: "2026-05-31"
  },
  {
    id: "tema-AALIT-013",
    titulo: "Nuestro bienestar común: La Unidad ante todo",
    tituloCorto: "Unidad de grupo",
    estado: "Completo",
    categoria: "Primera Tradición",
    evento: ["Juntas de trabajo", "Aniversarios"],
    publico: ["Servidores", "Miembros con tiempo"],
    etiquetas: ["tradicion-unidad", "unidad", "pertenencia", "comunidad"],
    intensidad: "Media",
    momento: "Mitad",
    formato: "Individual",
    tipoTestimonio: "Didáctico",
    emocion: ["Esperanza", "Paz"],
    defectoCaracter: ["Egoísmo", "Arrogancia"],
    virtudPrincipal: ["Humildad"],
    pasos: [],
    tradiciones: ["Tradición 1"],
    conceptos: ["El bienestar común primero", "Sacrificio de deseos personales"],
    fuentePrincipal: "AA",
    fuenteAA: [{ obra: "AA Llega a su Mayoría de Edad / Doce Pasos y Doce Tradiciones", referencia: "Tradición 1", uso: "Historia de cómo se formaron las tradiciones y el sacrificio personal" }],
    fuenteFGDLL: [],
    librosRecomendados: [{ titulo: "AA Llega a su Mayoría de Edad", autor: "Bill W.", año: 1957, uso: "Historia de cómo se formaron las tradiciones y el sacrificio personal" }],
    objetivo: "Enseñar que la supervivencia personal depende de la supervivencia del grupo, lo que exige dejar de lado los egos y pleitos.",
    fraseAncla: "Nuestro bienestar común debe tener la preferencia; la recuperación personal depende de la unidad de A.A.",
    guiaTestimonio: {
      detectar: [
        "¿De qué manera tu individualismo extremo y tus deseos personales destruían todo a tu alrededor?",
        "¿Cómo era tu incapacidad para trabajar en equipo o aceptar reglas de un grupo?",
        "¿Por qué siempre querías imponer tu voluntad sobre los demás?"
      ],
      admitir: [
        "¿Cómo te diste cuenta de que sin el grupo y la comunidad tu vida estaba en riesgo?",
        "¿Qué sacrificios personales tuviste que hacer por el bien común del grupo?",
        "¿Qué aprendiste sobre la tolerancia y el amor en medio de los conflictos del grupo?"
      ],
      corregir: [
        "¿Cómo aplicas hoy el principio de unidad en tu familia y en tu trabajo?",
        "¿De qué manera sueltas el deseo de tener la razón para preservar la armonía?",
        "¿Por qué es vital para tu sobriedad proteger a la agrupación por encima de todo?"
      ]
    },
    variaciones: ["Sacrificio por el grupo", "El bienestar común"],
    palabrasClave: ["unidad", "grupo", "sacrificio", "bienestar"],
    advertenciaEtica: "",
    advertenciaLider: "Resaltar que la unidad no es uniformidad de pensamiento, sino amor y tolerancia mutua.",
    noUsarPara: ["Criticar a miembros del grupo", "Imponer obediencia ciega"],
    esCatalogoBase: false,
    prioridad: 75,
    relacionados: [],
    fechaCreacion: "2026-05-31"
  },
  {
    id: "tema-AALIT-014",
    titulo: "El anonimato como base espiritual y freno al ego",
    tituloCorto: "La base del anonimato",
    estado: "Completo",
    categoria: "Duodécima Tradición",
    evento: ["Juntas regulares"],
    publico: ["Todos"],
    etiquetas: ["anonimato", "humildad", "comunidad", "crecimiento"],
    intensidad: "Media",
    momento: "Cierre",
    formato: "Individual",
    tipoTestimonio: "Didáctico",
    emocion: ["Paz"],
    defectoCaracter: ["Soberbia", "Búsqueda de prestigio"],
    virtudPrincipal: ["Humildad"],
    pasos: [],
    tradiciones: ["Tradición 12"],
    conceptos: ["Principios antes que personalidades", "Sacrificio de la fama"],
    fuentePrincipal: "AA",
    fuenteAA: [{ obra: "Comprendiendo el Anonimato / El Lenguaje del Corazón", referencia: "Tradición 12", uso: "El valor del sacrificio personal" }],
    fuenteFGDLL: [],
    librosRecomendados: [{ titulo: "Comprendiendo el Anonimato", autor: "Servicios Generales de AA", año: 1981, uso: "El valor del sacrificio personal" }],
    objetivo: "Profundizar en el anonimato no solo como ocultar el nombre, sino como la práctica de anteponer los principios espirituales al prestigio y al protagonismo.",
    fraseAncla: "El anonimato es la base espiritual de todas nuestras Tradiciones, recordándonos siempre anteponer los principios a las personalidades.",
    guiaTestimonio: {
      detectar: [
        "¿De qué manera el hambre de reconocimiento, fama o prestigio gobernaba tus acciones?",
        "¿Cómo destruías tus relaciones al querer siempre ser la figura central o el 'salvador'?",
        "¿Qué vacíos intentabas llenar buscando siempre la aprobación de los demás?"
      ],
      admitir: [
        "¿Cómo entendiste que en la agrupación nadie es más importante que los principios del programa?",
        "¿Qué significó para ti renunciar al protagonismo y empezar a servir de forma anónima o silenciosa?",
        "¿Qué descubriste sobre la verdadera humildad a través del sacrificio del ego?"
      ],
      corregir: [
        "¿Cómo evitas hoy el 'deslumbramiento del éxito' o el protagonismo en tus círculos sociales?",
        "¿De qué manera priorizas el mensaje y la sanación por encima de ser reconocido?",
        "¿Cómo aplicas 'principios antes que personalidades' cuando no te agrada alguien del grupo?"
      ]
    },
    variaciones: ["Principios antes que personalidades", "Servicio sin reflectores"],
    palabrasClave: ["anonimato", "prestigio", "principios", "humildad"],
    advertenciaEtica: "",
    advertenciaLider: "Enfocar en la humildad del anonimato espiritual, evitando debates sobre redes sociales a menos que ilustren la pérdida del ego.",
    noUsarPara: ["Atacar a quienes han roto su anonimato", "Usarlo para evadir responsabilidades"],
    esCatalogoBase: false,
    prioridad: 80,
    relacionados: [],
    fechaCreacion: "2026-05-31"
  },
  {
    id: "tema-AALIT-015",
    titulo: "Rompiendo el estigma: La recuperación de la mujer",
    tituloCorto: "Las mujeres y la recuperación",
    estado: "Completo",
    categoria: "Específico",
    evento: ["Juntas de aniversario", "Eventos de diversidad"],
    publico: ["Mujeres", "Todos"],
    etiquetas: ["diversidad", "inclusión", "vergüenza", "sanacion", "identidad"],
    intensidad: "Alta",
    momento: "Mitad",
    formato: "Individual",
    tipoTestimonio: "Crudo",
    emocion: ["Vergüenza", "Esperanza", "Culpa"],
    defectoCaracter: ["Aislamiento", "Autocompasión"],
    virtudPrincipal: ["Aceptación"],
    pasos: ["Paso 1"],
    tradiciones: [],
    conceptos: ["Doble estigma", "Superar el dolor"],
    fuentePrincipal: "AA",
    fuenteAA: [{ obra: "Mujeres en AA / Las Mujeres en AA", referencia: "Historias personales", uso: "Experiencias de superación del estigma y la culpa maternal" }],
    fuenteFGDLL: [],
    librosRecomendados: [{ titulo: "Las Mujeres en AA", autor: "AA World Services", año: 1968, uso: "Experiencias de superación del estigma y la culpa maternal" }],
    objetivo: "Visibilizar el dolor particular (como la culpa familiar y el estigma social) y la profunda recuperación que viven las mujeres en el programa.",
    fraseAncla: "La vergüenza, el remordimiento y la culpa me estaban hundiendo... hasta que probé la libertad de este programa.",
    guiaTestimonio: {
      detectar: [
        "¿Cómo te afectaba la presión y el juicio social por ser mujer con este problema?",
        "¿De qué manera el sentimiento de culpa (como madre, hija, esposa) te mantenía esclava del consumo o la depresión?",
        "¿Cómo intentabas mantener una fachada de perfección o normalidad para esconder tu enfermedad?"
      ],
      admitir: [
        "¿Cómo rompiste la barrera del miedo y la vergüenza para pedir ayuda?",
        "¿Qué alivio encontraste al identificarte con las historias de otras compañeras?",
        "¿Cómo el trabajo de los pasos te liberó del peso aplastante del remordimiento?"
      ],
      corregir: [
        "¿Cómo reconstruyes hoy el amor y el respeto por ti misma y hacia tus seres queridos?",
        "¿De qué manera ayudas a otras mujeres a superar el estigma y acercarse al programa?",
        "¿Cómo mantienes viva tu dignidad y libertad espiritual un día a la vez?"
      ]
    },
    variaciones: ["El fin del estigma", "Perdonándome como mujer"],
    palabrasClave: ["mujer", "estigma", "culpa", "sororidad"],
    advertenciaEtica: "Puede tocar temas sensibles como violencia, abuso o pérdida de hijos; guiar con profundo respeto y contención.",
    advertenciaLider: "Crear un ambiente de empatía total, recordando que el dolor no tiene género pero las cargas sociales a veces sí.",
    noUsarPara: ["Promover divisiones de género", "Juzgar las capacidades de crianza del pasado"],
    esCatalogoBase: false,
    prioridad: 85,
    relacionados: [],
    fechaCreacion: "2026-05-31"
  },
  {
    id: "tema-AALIT-016",
    titulo: "La Sobriedad Emocional: La próxima frontera",
    tituloCorto: "Sobriedad Emocional",
    estado: "Completo",
    categoria: "Desarrollo Espiritual",
    evento: ["Juntas de reflexión"],
    publico: ["Todos", "Miembros con tiempo"],
    etiquetas: ["crecimiento", "dependencia-emocional", "evolucion", "paz"],
    intensidad: "Alta",
    momento: "Mitad",
    formato: "Individual",
    tipoTestimonio: "Inspirador",
    emocion: ["Tristeza", "Paz"],
    defectoCaracter: ["Dependencia Emocional", "Control-obsesivo"],
    virtudPrincipal: ["Aceptación"],
    pasos: ["Paso 10", "Paso 12"],
    tradiciones: [],
    conceptos: ["Dependencia insalubre", "Borrachera seca"],
    fuentePrincipal: "AA",
    fuenteAA: [{ obra: "El Lenguaje del Corazón", referencia: "La próxima frontera: la sobriedad emocional", uso: "El famoso artículo de Bill W. sobre la sobriedad emocional y la depresión" }],
    fuenteFGDLL: [],
    librosRecomendados: [{ titulo: "El Lenguaje del Corazón", autor: "Bill W.", año: 1988, uso: "El famoso artículo de Bill W. sobre la sobriedad emocional y la depresión" }],
    objetivo: "Explicar que detener el consumo o la conducta no basta; la meta es sanar las dependencias emocionales para lograr verdadera paz.",
    fraseAncla: "Si examinamos cada perturbación, encontraremos en la raíz alguna dependencia poco saludable y su consecuente demanda insalubre.",
    guiaTestimonio: {
      detectar: [
        "Aunque habías parado de consumir o actuar destructivamente, ¿cómo se manifestaba tu 'borrachera seca' o depresión?",
        "¿De qué manera tus demandas absolutas de amor, aprobación o seguridad hacia otras personas te enfermaban?",
        "¿Cómo reaccionabas (ira, depresión) cuando la gente o el mundo no cumplían tus altas expectativas?"
      ],
      admitir: [
        "¿Cómo te diste cuenta de que tus depresiones venían de dependencias emocionales insalubres?",
        "¿Qué significó para ti empezar a depender de tu Poder Superior en lugar de exigir a los seres humanos?",
        "¿Cómo el programa te ayudó a traducir tus expectativas en aceptación?"
      ],
      corregir: [
        "¿Cómo practicas la sobriedad emocional frente a las frustraciones diarias hoy?",
        "¿De qué manera tu amor hacia los demás ha cambiado de 'demandar' a 'dar'?",
        "¿Qué herramientas usas para no engancharte emocionalmente y mantener tu paz?"
      ]
    },
    variaciones: ["Superar la borrachera seca", "Exigencias irreales"],
    palabrasClave: ["emociones", "dependencia", "depresión", "borrachera seca"],
    advertenciaEtica: "Diferenciar entre depresión clínica que requiere atención médica y los bajones emocionales causados por actitudes espirituales.",
    advertenciaLider: "Ayudar a comprender que la sobriedad emocional es un trabajo de vida, no un destino final.",
    noUsarPara: ["Aconsejar dejar medicamentos psiquiátricos", "Invalidar emociones legítimas de duelo"],
    esCatalogoBase: false,
    prioridad: 95,
    relacionados: [],
    fechaCreacion: "2026-05-31"
  },
  {
    id: "tema-AALIT-017",
    titulo: "La obsesión mental que precede a la recaída",
    tituloCorto: "Prevención de recaídas",
    estado: "Completo",
    categoria: "Prevención",
    evento: ["Juntas de prevención"],
    publico: ["Todos"],
    etiquetas: ["control-obsesivo", "negación", "miedo", "ansiedad"],
    intensidad: "Alta",
    momento: "Inicio",
    formato: "Individual",
    tipoTestimonio: "Didáctico",
    emocion: ["Ansiedad", "Miedo"],
    defectoCaracter: ["Autoengaño", "Control-obsesivo"],
    virtudPrincipal: ["Honestidad"],
    pasos: ["Paso 1", "Paso 10"],
    tradiciones: [],
    conceptos: ["Falsas sensaciones de control", "Autoengaño"],
    fuentePrincipal: "AA",
    fuenteAA: [{ obra: "Vivir Sobrio / Prevención de Recaídas", referencia: "Cap. sobre autoengaño", uso: "Técnicas para evadir el autoengaño" }],
    fuenteFGDLL: [],
    librosRecomendados: [{ titulo: "Vivir Sobrio", autor: "Alcohólicos Anónimos", año: 1975, uso: "Técnicas para evadir el autoengaño" }],
    objetivo: "Identificar los sutiles engaños de la mente que preparan el terreno para una recaída física o emocional.",
    fraseAncla: "La recaída empieza mucho antes de levantar la copa; comienza con el autoengaño y la violación mental de la abstinencia.",
    guiaTestimonio: {
      detectar: [
        "¿Cómo era el proceso en tu mente antes de una recaída o de repetir un patrón destructivo?",
        "¿Qué mentiras te contabas a ti mismo para justificar volver al viejo comportamiento?",
        "¿De qué manera te ibas alejando poco a poco de tu programa, grupo o prácticas espirituales?"
      ],
      admitir: [
        "¿Cómo aprendiste a reconocer las señales de peligro ('alertas rojas') en tu conducta o emociones?",
        "¿Qué descubriste sobre la fuerza de la 'obsesión mental' y la alergia física?",
        "¿Cómo te ayudó el grupo a romper esa barrera de autoengaño?"
      ],
      corregir: [
        "¿Cuáles son tus herramientas inmediatas cuando sientes que la obsesión intenta regresar?",
        "¿Cómo practicas la honestidad rigurosa con tu padrino sobre tus pensamientos peligrosos?",
        "¿De qué manera vives el 'Solo por Hoy' para no abrumarte con el futuro?"
      ]
    },
    variaciones: ["El sutil autoengaño", "Cuidando el 'Solo por Hoy'"],
    palabrasClave: ["recaída", "obsesión", "engaño", "prevención", "alertas"],
    advertenciaEtica: "",
    advertenciaLider: "Enfatizar que los pensamientos de consumo/actuación son parte de la enfermedad; el secreto está en compartirlos para que pierdan fuerza.",
    noUsarPara: ["Atacar a quienes han recaído", "Hacer sentir culpables por tener tentaciones"],
    esCatalogoBase: false,
    prioridad: 90,
    relacionados: [],
    fechaCreacion: "2026-05-31"
  },
  {
    id: "tema-AALIT-018",
    titulo: "Viviendo sobrio: El poder del plan de 24 horas",
    tituloCorto: "Un Día a la Vez",
    estado: "Completo",
    categoria: "Vida Diaria",
    evento: ["Juntas de principiantes", "Juntas regulares"],
    publico: ["Todos"],
    etiquetas: ["esperanza", "paz", "crecimiento", "cambio"],
    intensidad: "Baja",
    momento: "Inicio",
    formato: "Individual",
    tipoTestimonio: "Didáctico",
    emocion: ["Esperanza", "Paz"],
    defectoCaracter: ["Ansiedad por el futuro"],
    virtudPrincipal: ["Confianza"],
    pasos: ["Paso 1"],
    tradiciones: [],
    conceptos: ["Solo por hoy", "Mantenerlo simple"],
    fuentePrincipal: "AA",
    fuenteAA: [{ obra: "Viviendo Sobrio / AA Como Lo Ve Bill", referencia: "El plan de 24 horas", uso: "Las herramientas prácticas del día a día" }],
    fuenteFGDLL: [],
    librosRecomendados: [{ titulo: "Viviendo Sobrio", autor: "Alcohólicos Anónimos", año: 1975, uso: "Las herramientas prácticas del día a día" }],
    objetivo: "Reducir la ansiedad ante la recuperación, demostrando que la vida se aborda un día (o un momento) a la vez.",
    fraseAncla: "La mayoría de la gente se siente más segura con el plan de 24 horas que con la resolución de no volver a hacerlo nunca.",
    guiaTestimonio: {
      detectar: [
        "¿De qué manera pensar en el 'nunca más' o en todo el futuro te llenaba de terror y ansiedad?",
        "¿Cómo tus preocupaciones por el mañana te impedían resolver los problemas del hoy?",
        "¿Cómo era vivir abrumado por las promesas rotas del pasado?"
      ],
      admitir: [
        "¿Cómo descubriste el alivio de enfocarte únicamente en mantenerte limpio o sereno 'Solo por hoy'?",
        "¿Qué herramientas sencillas (llamar por teléfono, leer, ir a una junta) te ayudaron a atravesar los días difíciles?",
        "¿Qué significó para ti aprender a 'tómalo con calma'?"
      ],
      corregir: [
        "¿Cómo aplicas el plan de 24 horas en tus problemas familiares, económicos o laborales actualmente?",
        "¿De qué forma celebras las pequeñas victorias de cada día?",
        "¿Cómo logras mantenerte centrado en el presente sin la carga del ayer o el miedo al mañana?"
      ]
    },
    variaciones: ["Solo por Hoy", "Simplificando la recuperación"],
    palabrasClave: ["presente", "24 horas", "ansiedad", "herramientas"],
    advertenciaEtica: "",
    advertenciaLider: "Es ideal para relajar a los recién llegados que se sienten abrumados por la enormidad del cambio de vida.",
    noUsarPara: ["Fomentar la irresponsabilidad sobre planes futuros reales"],
    esCatalogoBase: false,
    prioridad: 80,
    relacionados: [],
    fechaCreacion: "2026-05-31"
  },
  {
    id: "tema-AALIT-019",
    titulo: "El Tercer Legado: Servicio y gratitud en acción",
    tituloCorto: "Gratitud y Servicio",
    estado: "Completo",
    categoria: "Servicio",
    evento: ["Juntas de trabajo", "Aniversarios"],
    publico: ["Servidores", "Miembros con tiempo"],
    etiquetas: ["gratitud", "servicio-grupal", "comunidad", "responsabilidad"],
    intensidad: "Media",
    momento: "Cierre",
    formato: "Individual",
    tipoTestimonio: "Inspirador",
    emocion: ["Alegría", "Esperanza"],
    defectoCaracter: ["Egoísmo", "Pereza"],
    virtudPrincipal: ["Gratitud"],
    pasos: ["Paso 12"],
    tradiciones: ["Tradición 7"],
    conceptos: ["Tercer Legado", "Responsabilidad de devolver lo dado"],
    fuentePrincipal: "AA",
    fuenteAA: [{ obra: "El Manual de Servicio de AA / Nuestra Gran Responsabilidad", referencia: "Tercer Legado", uso: "El sentido histórico y vital del servicio" }],
    fuenteFGDLL: [],
    librosRecomendados: [{ titulo: "Nuestra Gran Responsabilidad", autor: "Bill W.", año: 2019, uso: "El sentido histórico y vital del servicio" }],
    objetivo: "Inspirar a los miembros a devolver lo que han recibido, entendiendo que el servicio estructural y grupal mantiene viva a la comunidad.",
    fraseAncla: "Si la Recuperación ha tenido lugar, la Unidad y el Servicio deben seguir para completar los Tres Legados. La gratitud debe ser acción.",
    guiaTestimonio: {
      detectar: [
        "¿Cómo era tu vida cuando solo te importaba recibir y tomar provecho de los demás?",
        "¿De qué manera el egoísmo y la pereza dominaban tu actitud hacia las responsabilidades?",
        "¿Qué pensabas del 'servicio' antes de entrar al programa?"
      ],
      admitir: [
        "¿Cómo te diste cuenta de que para conservar tu recuperación tenías que empezar a dar?",
        "¿Qué sentiste al asumir tu primera responsabilidad dentro de tu grupo (hacer café, barrer, coordinar)?",
        "¿Cómo el involucrarte en el servicio te conectó más profundamente con la comunidad?"
      ],
      corregir: [
        "¿De qué forma el servicio te ayuda hoy a mantener a raya tu ego y tu soberbia?",
        "¿Cómo respondes a la 'Declaración de Responsabilidad' en tu vida diaria y en tu grupo?",
        "¿Por qué crees que el servicio es la manifestación más grande de tu gratitud?"
      ]
    },
    variaciones: ["Devolviendo el regalo", "La acción de dar"],
    palabrasClave: ["servicio", "gratitud", "legado", "responsabilidad"],
    advertenciaEtica: "",
    advertenciaLider: "Fomentar el servicio desde el amor y la gratitud, no desde la obligación culposa o la búsqueda de poder en el grupo.",
    noUsarPara: ["Regañar a quienes no tienen cargos de servicio", "Fomentar el síndrome del 'salvador'"],
    esCatalogoBase: false,
    prioridad: 85,
    relacionados: [],
    fechaCreacion: "2026-05-31"
  },
  {
    id: "tema-AALIT-020",
    titulo: "De un gran 'YO' a nadie: La transformación del ego",
    tituloCorto: "La reducción del ego",
    estado: "Completo",
    categoria: "Desarrollo Espiritual",
    evento: ["Juntas de reflexión"],
    publico: ["Todos"],
    etiquetas: ["humildad", "transformacion", "autodescubrimiento", "crecimiento"],
    intensidad: "Alta",
    momento: "Mitad",
    formato: "Individual",
    tipoTestimonio: "Crudo",
    emocion: ["Paz", "Alegría"],
    defectoCaracter: ["Soberbia", "Egoísmo"],
    virtudPrincipal: ["Humildad"],
    pasos: ["Paso 2", "Paso 7"],
    tradiciones: [],
    conceptos: ["Deflación del ego", "Cambio de personalidad"],
    fuentePrincipal: "AA",
    fuenteAA: [{ obra: "Lo mejor del Grapevine Vol. 1 / Como lo ve Bill", referencia: "El gran YO se convierte en nadie", uso: "El ensayo: Cuando el gran 'yo' se convierte en nadie" }],
    fuenteFGDLL: [],
    librosRecomendados: [{ titulo: "Lo Mejor del Grapevine Vol. 1", autor: "Varios (Harry M. Tiebout, MD)", año: 1993, uso: "El ensayo: Cuando el gran 'yo' se convierte en nadie" }],
    objetivo: "Mostrar que la recuperación exige un colapso profundo del ego (deflación) para dar paso a una personalidad enseñable y serena.",
    fraseAncla: "El programa de ayuda está impregnado de la reducción del ego. Es el despertar donde el gran 'yo' se convierte en un feliz don nadie.",
    guiaTestimonio: {
      detectar: [
        "¿Cómo el creerte el centro del universo, o el dueño de la verdad, te destruía y alejaba a todos?",
        "¿De qué manera tu ego inflado disfrazaba en realidad profundos complejos de inferioridad o miedos?",
        "¿Qué ocurría cuando la vida o las personas no se ajustaban a tus grandiosos planes?"
      ],
      admitir: [
        "¿Cuál fue la crisis o fracaso que finalmente pinchó tu ego y te hizo receptivo a la ayuda?",
        "¿Cómo entendiste que no eras el director del mundo, sino una pequeña parte de un gran todo?",
        "¿Qué alivio experimentaste al dejar de fingir ser poderoso o perfecto?"
      ],
      corregir: [
        "¿Cómo disfrutas hoy de la libertad de ser 'uno más' entre tus compañeros y tu familia?",
        "¿De qué manera practicas el dejarte enseñar y aceptar que no siempre tienes la razón?",
        "¿Cómo ha cambiado tu felicidad al soltar las exigencias del ego y abrazar la sencillez?"
      ]
    },
    variaciones: ["Desinflando el ego", "La libertad de no ser importante"],
    palabrasClave: ["ego", "soberbia", "rendición", "humildad", "enseñable"],
    advertenciaEtica: "",
    advertenciaLider: "Asegurar que la 'deflación del ego' se entienda como despojarse de la arrogancia tóxica, no como destrucción de la sana autoestima.",
    noUsarPara: ["Humillar o maltratar a miembros desde tribuna", "Destruir la autoestima legítima"],
    esCatalogoBase: false,
    prioridad: 100,
    relacionados: [],
    fechaCreacion: "2026-05-31"
  }
];

// ============================================================================
// CATÁLOGO COMPLETO — combina todos los paquetes
// Para agregar un libro nuevo: define PAQUETE_NOMBRE y agrégalo aquí
// ============================================================================
const CATALOGO_COMPLETO = [
  ...TEMAS,
  ...PAQUETE_LITERATURA_AA
];
