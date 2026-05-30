/* ==========================================================================
   BIBLIOTECA DE TESTIMONIOS FGDLL — data.js
   Base de datos estática de temas estructurados.
========================================================================== */

const TEMAS = [
  // ==========================================
  // FUENTE: LLEGAMOS A CREER
  // ==========================================
  {
    "id": "tema-creer-01",
    "titulo": "El despertar espiritual a través del fondo de sufrimiento",
    "tituloCorto": "El despertar",
    "estado": "Completo",
    "sensibilidad": "normal",
    "categoria": "Paso 2",
    "evento": ["Juntas de información", "Aniversario de grupo"],
    "publico": ["Participantes", "Recién llegados"],
    "intensidad": "Alta",
    "momento": "Mitad",
    "formato": "Individual",
    "tipoTestimonio": "Inspirador",
    "emocion": "Esperanza",
    "pasos": ["Paso 2", "Paso 12"],
    "fuentePrincipal": "AA",
    "fuenteAA": [
      {
        "obra": "Llegamos a Creer",
        "referencia": "Capítulo: El despertar espiritual",
        "uso": "Mostrar cómo la derrota total abrió la puerta a una mente dispuesta."
      }
    ],
    "objetivo": "Transmitir que no se necesita entender a un Poder Superior para empezar a sanar, solo dejar de luchar.",
    "fraseAncla": "Cuando dejé de pelear contra el mundo, pude por fin escuchar.",
    "guiaTestimonio": {
      "detectar": [
        "¿De qué formas tu arrogancia te impedía aceptar que necesitabas ayuda externa?",
        "¿Qué sufrimiento físico o moral fue necesario para quebrar tu autosuficiencia?"
      ],
      "admitir": [
        "¿Cuál fue el momento en que aceptaste, aunque fuera por desesperación, la ayuda del grupo?",
        "¿Cómo se sintió dejar de intentar gobernar tu vida por primera vez?"
      ],
      "corregir": [
        "¿De qué manera practicas hoy la disposición a escuchar antes de reaccionar?",
        "¿Cómo te apoya la experiencia de otros para no volver a confiar solo en tu propio ego?"
      ]
    },
    "variaciones": ["Rendición del ego", "Dejar de luchar"],
    "palabrasClave": ["despertar", "rendición", "fe", "esperanza"],
    "advertenciaEtica": "",
    "advertenciaLider": "Evitar imponer conceptos religiosos. Enfocar en el grupo como el primer 'poder superior' comprensible.",
    "esCatalogoBase": true,
    "prioridad": 10
  },
  {
    "id": "tema-creer-02",
    "titulo": "La pérdida del miedo y la llegada de la fe",
    "tituloCorto": "Pérdida del miedo",
    "estado": "Completo",
    "sensibilidad": "sensible",
    "categoria": "Paso 3",
    "evento": ["Semana del Guerrero"],
    "publico": ["Participantes"],
    "intensidad": "Media",
    "momento": "Mitad",
    "formato": "Individual",
    "tipoTestimonio": "Didáctico",
    "emocion": "Miedo",
    "pasos": ["Paso 3", "Paso 11"],
    "fuentePrincipal": "AA",
    "fuenteAA": [
      {
        "obra": "Llegamos a Creer",
        "referencia": "Capítulo: Pérdida del miedo",
        "uso": "Ilustrar cómo la acción y la confianza en el proceso desplazan al terror paralizante."
      }
    ],
    "objetivo": "Ayudar a identificar cómo el miedo fabricaba excusas para no accionar.",
    "fraseAncla": "El miedo me mintió diciéndome que estaba a salvo mientras me destruía.",
    "guiaTestimonio": {
      "detectar": [
        "¿Qué miedos irracionales gobernaban tus decisiones y te mantenían aislado?",
        "¿Cómo usabas la ira o el control para esconder tu terror a fracasar?"
      ],
      "admitir": [
        "¿Cuándo te diste cuenta de que tus miedos no eran reales, sino proyecciones de tu enfermedad?",
        "¿Cómo te ayudó el grupo a caminar a través del miedo en lugar de huir?"
      ],
      "corregir": [
        "¿Qué herramientas (pausa, tribuna, servicio) usas hoy cuando el miedo aparece?",
        "¿Cómo aplicas el Tercer Paso para accionar a pesar de la incertidumbre?"
      ]
    },
    "variaciones": ["Caminar con miedo", "Confiar en el proceso"],
    "palabrasClave": ["miedo", "acción", "confianza", "paso 3"],
    "advertenciaEtica": "Validar el miedo de los nuevos sin minimizarlos, enfocándose en la acción constructiva.",
    "advertenciaLider": "Cuidar que el compartimiento no se vuelva una lista de fobias, sino de soluciones.",
    "esCatalogoBase": true,
    "prioridad": 15
  },

  // ==========================================
  // FUENTE: MENÚ JUVENIL / EL JOVEN EN AA
  // ==========================================
  {
    "id": "tema-joven-01",
    "titulo": "¿Soy demasiado joven para tener un problema?",
    "tituloCorto": "No hay edad para el fondo",
    "estado": "Completo",
    "sensibilidad": "normal",
    "categoria": "Juventud",
    "evento": ["Semana de la Juventud"],
    "publico": ["Jóvenes", "Recién llegados"],
    "intensidad": "Alta",
    "momento": "Inicio",
    "formato": "Panel corto",
    "tipoTestimonio": "Crudo",
    "emocion": "Rebeldía",
    "pasos": ["Paso 1"],
    "fuentePrincipal": "AA",
    "fuenteAA": [
      {
        "obra": "El Joven en AA",
        "referencia": "Historias personales",
        "uso": "Desmitificar la idea de que se necesita perder familia o trabajo para tocar fondo."
      }
    ],
    "objetivo": "Demostrar que la bancarrota emocional y espiritual llega antes que la material.",
    "fraseAncla": "No perdí casas ni trabajos, pero perdí las ganas de vivir antes de los veinte.",
    "guiaTestimonio": {
      "detectar": [
        "¿Cómo usabas tu juventud como excusa para justificar tu forma de destruir tu vida?",
        "¿De qué manera la presión social te hacía aparentar que todo estaba bajo control?"
      ],
      "admitir": [
        "¿Cuál fue el vacío interno que te obligó a pedir ayuda a pesar de ser tan joven?",
        "¿Qué se sintió escuchar a alguien mayor contar una historia emocionalmente idéntica a la tuya?"
      ],
      "corregir": [
        "¿Cómo construyes hoy tu identidad sin necesidad de complacer las expectativas destructivas de otros?",
        "¿De qué manera vives tu juventud hoy en libertad y sin fugas?"
      ]
    },
    "variaciones": ["El mito de la edad", "Juventud y dolor"],
    "palabrasClave": ["juventud", "fondo emocional", "rebeldía", "identificación"],
    "advertenciaEtica": "",
    "advertenciaLider": "Evitar que los miembros mayores minimicen el fondo del joven (el clásico 'tú no sufriste nada'). Fomentar empatía.",
    "esCatalogoBase": true,
    "prioridad": 20
  },
  {
    "id": "tema-joven-02",
    "titulo": "Castillos en el aire: La fantasía como fuga",
    "tituloCorto": "Castillos en el aire",
    "estado": "Completo",
    "sensibilidad": "normal",
    "categoria": "Juventud",
    "evento": ["Semana de la Juventud"],
    "publico": ["Jóvenes"],
    "intensidad": "Media",
    "momento": "Mitad",
    "formato": "Individual",
    "tipoTestimonio": "Didáctico",
    "emocion": "Frustración",
    "pasos": ["Paso 4"],
    "fuentePrincipal": "FGDLL",
    "fuenteAA": [
      {
        "obra": "Menú de Temas Juvenil",
        "referencia": "Castillos en el aire",
        "uso": "Identificar la fantasía y los planes irreales como mecanismo de evasión."
      }
    ],
    "objetivo": "Aterrizar la mente del joven a la realidad del 'Solo por hoy' abandonando la fantasía.",
    "fraseAncla": "Hacía planes gigantes para el futuro porque no soportaba habitar mi presente.",
    "guiaTestimonio": {
      "detectar": [
        "¿De qué manera te refugiabas en planes grandiosos para no enfrentar tus responsabilidades diarias?",
        "¿Qué frustración sentías cuando tus 'castillos en el aire' chocaban con la realidad?"
      ],
      "admitir": [
        "¿Cuándo te diste cuenta de que soñar sin accionar era otra forma de estar anestesiado?",
        "¿Cómo te enseñó el grupo a aterrizar tus expectativas y mirar tu realidad con honestidad?"
      ],
      "corregir": [
        "¿Qué acciones pequeñas y reales haces hoy para construir tu vida en lugar de solo imaginarla?",
        "¿Cómo mantienes tus metas aterrizadas aplicando el plan de 24 horas?"
      ]
    },
    "variaciones": ["Soñar sin actuar", "Fuga en la fantasía"],
    "palabrasClave": ["fantasía", "realidad", "evasión", "solo por hoy"],
    "advertenciaEtica": "",
    "advertenciaLider": "Guiar para que el joven entienda que soñar es válido, pero evadir el presente destruye.",
    "esCatalogoBase": true,
    "prioridad": 25
  },

  // ==========================================
  // FUENTE: EL LENGUAJE DEL CORAZÓN
  // ==========================================
  {
    "id": "tema-corazon-01",
    "titulo": "El dolor como piedra de toque del crecimiento espiritual",
    "tituloCorto": "El dolor como maestro",
    "estado": "Completo",
    "sensibilidad": "sensible",
    "categoria": "Desarrollo",
    "evento": ["Convenciones", "Semana del Guerrero"],
    "publico": ["Participantes", "Líderes"],
    "intensidad": "Alta",
    "momento": "Cierre",
    "formato": "Individual",
    "tipoTestimonio": "Crudo",
    "emocion": "Tristeza",
    "pasos": ["Paso 10", "Paso 11"],
    "fuentePrincipal": "AA",
    "fuenteAA": [
      {
        "obra": "El Lenguaje del Corazón",
        "referencia": "El dolor: Piedra de toque del crecimiento",
        "uso": "Aceptar que las crisis emocionales en recuperación son oportunidades, no fracasos."
      }
    ],
    "objetivo": "Enseñar a no huir del dolor en la recuperación, sino a usarlo para evolucionar.",
    "fraseAncla": "El dolor ya no es mi enemigo; hoy es el maestro que me avisa dónde debo crecer.",
    "guiaTestimonio": {
      "detectar": [
        "¿Cómo reaccionabas antes ante la frustración o el dolor buscando anestesiarlo inmediatamente?",
        "¿De qué maneras la intolerancia al sufrimiento te hacía culpar a otros de tu malestar?"
      ],
      "admitir": [
        "¿Qué crisis viviste estando ya en recuperación que te obligó a usar los Pasos en lugar de huir?",
        "¿Cómo entendiste que sentir dolor en sobriedad no significaba que el programa estaba fallando?"
      ],
      "corregir": [
        "¿De qué manera te sientas hoy a sentir y analizar lo que duele antes de reaccionar?",
        "¿Cómo acompañas a tus compañeros cuando están pasando por su propio dolor sin intentar 'salvarlos'?"
      ]
    },
    "variaciones": ["Intolerancia al dolor", "Crecer duele"],
    "palabrasClave": ["dolor", "crecimiento", "crisis", "aceptación"],
    "advertenciaEtica": "Orientar el tema a la madurez emocional, sin hacer apología del sufrimiento innecesario.",
    "advertenciaLider": "Cuidar que no se convierta en una catarsis desoladora, debe cerrar con crecimiento.",
    "esCatalogoBase": true,
    "prioridad": 30
  },
  {
    "id": "tema-corazon-02",
    "titulo": "Cuando la muerte y la locura tocan la puerta",
    "tituloCorto": "Al borde del abismo",
    "estado": "Completo",
    "sensibilidad": "crisis",
    "categoria": "Crisis",
    "evento": [],
    "publico": ["Participantes"],
    "intensidad": "Alta",
    "momento": "Mitad",
    "formato": "Individual",
    "tipoTestimonio": "Crudo",
    "emocion": "Desesperación",
    "pasos": ["Paso 1"],
    "fuentePrincipal": "AA",
    "fuenteAA": [
      {
        "obra": "El Lenguaje del Corazón",
        "referencia": "Artículos sobre la depresión profunda de Bill W.",
        "uso": "Visibilizar que la depresión y la ideación suicida son reales y requieren ayuda extrema."
      }
    ],
    "objetivo": "Visibilizar el dolor extremo que lleva al borde, y mostrar que pedir ayuda a tiempo salva vidas.",
    "fraseAncla": "El dolor era tan grande que no quería morir, solo quería dejar de sufrir.",
    "guiaTestimonio": {
      "detectar": [
        "¿Cómo el dolor emocional cerró todas tus salidas, aislándote en la oscuridad?",
        "¿De qué manera el silencio te convenció de que no había más esperanza?"
      ],
      "admitir": [
        "¿Cuál fue la mano tendida o la frase en el grupo que te ancló de regreso a la vida?",
        "¿Cómo fue admitir que ya no podías gobernar tus pensamientos?"
      ],
      "corregir": [
        "¿A quién llamas inmediatamente hoy cuando tus pensamientos se oscurecen?",
        "¿De qué manera la agrupación se ha vuelto tu red de seguridad?"
      ]
    },
    "variaciones": ["El abismo de la depresión", "El rescate silencioso"],
    "palabrasClave": ["crisis", "suicidio", "depresión", "rescate"],
    "advertenciaEtica": "CRÍTICO: No permita detalles metodológicos de intentos de suicidio. El enfoque DEBE estar en la desesperación que llevó allí, y cómo el rescate fue pedir ayuda. Si alguien expresa intenciones activas, referir a ayuda profesional de emergencia.",
    "advertenciaLider": "Tema de crisis extrema. Debe ser guiado con extremo cuidado para inspirar esperanza y contención, no morbo.",
    "esCatalogoBase": true,
    "prioridad": 1
  },

  // ==========================================
  // FUENTE: COMO LO VE BILL
  // ==========================================
  {
    "id": "tema-bill-01",
    "titulo": "Resentimiento: El ofensor número uno",
    "tituloCorto": "El ofensor número uno",
    "estado": "Completo",
    "sensibilidad": "sensible",
    "categoria": "Paso 4",
    "evento": ["Cualquiera"],
    "publico": ["Participantes"],
    "intensidad": "Alta",
    "momento": "Mitad",
    "formato": "Panel largo",
    "tipoTestimonio": "Didáctico",
    "emocion": "Enojo",
    "pasos": ["Paso 4", "Paso 10"],
    "fuentePrincipal": "AA",
    "fuenteAA": [
      {
        "obra": "Como lo ve Bill",
        "referencia": "Resentimiento",
        "uso": "Mostrar cómo guardar ofensas pasadas anula la paz presente."
      }
    ],
    "objetivo": "Visualizar el resentimiento como un veneno interno que se debe soltar para sobrevivir.",
    "fraseAncla": "El resentimiento era un veneno que yo me tomaba, esperando que el otro muriera.",
    "guiaTestimonio": {
      "detectar": [
        "¿Qué viejas ofensas atesorabas y usabas como excusa para estar enojado con el mundo?",
        "¿Cómo tu rol de 'víctima eterna' te impedía ver tu propia parte en los conflictos?"
      ],
      "admitir": [
        "¿Cuándo te diste cuenta en tu inventario de que tú eras quien alimentaba ese dolor?",
        "¿Cómo fue el proceso de admitir que perdonar (o soltar) era para tu propia paz y no por el otro?"
      ],
      "corregir": [
        "¿Qué práctica diaria utilizas hoy (Paso 10) para no irte a dormir con resentimientos nuevos?",
        "¿De qué manera pones límites hoy sin necesidad de acumular odio hacia las personas?"
      ]
    },
    "variaciones": ["Soltar el veneno", "Victimismo"],
    "palabrasClave": ["resentimiento", "inventario", "perdón", "víctima"],
    "advertenciaEtica": "El perdón es un proceso personal de liberación de resentimiento, NO se debe forzar a convivir con agresores.",
    "advertenciaLider": "Asegurar que el participante se enfoque en SU reacción al resentimiento, no en la lista de culpas del ofensor.",
    "esCatalogoBase": true,
    "prioridad": 35
  },
  {
    "id": "tema-bill-02",
    "titulo": "Aceptación: La llave que abre todas las puertas",
    "tituloCorto": "La llave de la aceptación",
    "estado": "Completo",
    "sensibilidad": "normal",
    "categoria": "Desarrollo",
    "evento": ["Cualquiera"],
    "publico": ["Participantes"],
    "intensidad": "Media",
    "momento": "Inicio",
    "formato": "Individual",
    "tipoTestimonio": "Inspirador",
    "emocion": "Aceptación",
    "pasos": ["Paso 1", "Paso 3"],
    "fuentePrincipal": "AA",
    "fuenteAA": [
      {
        "obra": "Como lo ve Bill",
        "referencia": "Aceptación",
        "uso": "Aceptar a las personas, lugares y cosas tal como son, no como quisiéramos que fueran."
      }
    ],
    "objetivo": "Dejar de sufrir por lo que no podemos controlar.",
    "fraseAncla": "La paz no llegó cuando el mundo cambió, llegó cuando yo lo acepté.",
    "guiaTestimonio": {
      "detectar": [
        "¿Cómo peleabas contra la realidad exigiendo que las personas y situaciones
