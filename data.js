Aquí tienes el archivo data.js actualizado, utilizando exclusivamente los ejes temáticos, libros y manuales de las fuentes que acabas de compartir (Llegamos a Creer, Menú Juvenil, Nuestros Grupos, Lenguaje del Corazón, Como lo ve Bill, El Joven en AA, Dr. Bob y los buenos veteranos, AA Llega a la Mayoría de Edad).
He respetado absolutamente todos los lineamientos doctrinales, las advertencias éticas, los tres tiempos (Detectar, Admitir, Corregir) y el formato exacto requerido para que funcione perfectamente con tu aplicación.
```javascript
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
    "fuenteFGDLL": [],
    "librosRecomendados": [],
    "objetivo": "Transmitir que no se necesita entender a Dios para empezar a sanar, solo dejar de luchar.",
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
    "noUsarPara": [
      "Juzgar creencias ajenas",
      "Forzar conceptos religiosos"
    ],
    "esCatalogoBase": true,
    "prioridad": 10,
    "relacionados": []
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
    "fuenteFGDLL": [],
    "librosRecomendados": [],
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
        "¿Qué herramientas (pausa, tribuna, apadrinamiento) usas hoy cuando el miedo aparece?",
        "¿Cómo aplicas el Tercer Paso para accionar a pesar de la incertidumbre?"
      ]
    },
    "variaciones": ["Caminar con miedo", "Confiar en el proceso"],
    "palabrasClave": ["miedo", "acción", "confianza", "paso 3"],
    "advertenciaEtica": "Validar el miedo de los nuevos sin minimizarlo, enfocándose en la acción constructiva.",
    "advertenciaLider": "Cuidar que el compartimiento no se vuelva una lista de fobias, sino de soluciones.",
    "noUsarPara": [
      "Minimizar las emociones de los demás",
      "Fomentar el perfeccionismo"
    ],
    "esCatalogoBase": true,
    "prioridad": 15,
    "relacionados": []
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
    "fuenteFGDLL": [],
    "librosRecomendados": [],
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
        "¿Cómo construyes hoy tu identidad sin necesidad de complacer las expectativas de otros jóvenes?",
        "¿De qué manera vives tu juventud hoy en libertad y sin fugas?"
      ]
    },
    "variaciones": ["El mito de la edad", "Juventud y dolor"],
    "palabrasClave": ["juventud", "fondo emocional", "rebeldía", "identificación"],
    "advertenciaEtica": "",
    "advertenciaLider": "Evitar que los miembros mayores minimicen el fondo del joven (el 'tú no sufriste nada'). Fomentar empatía.",
    "noUsarPara": [
      "Comparar sufrimientos materiales",
      "Invalidar el dolor juvenil"
    ],
    "esCatalogoBase": true,
    "prioridad": 20,
    "relacionados": []
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
    "fuentePrincipal": "AA",
    "fuenteAA": [
      {
        "obra": "Menú de Temas Juvenil",
        "referencia": "Castillos en el aire",
        "uso": "Identificar la fantasía y los planes irreales como mecanismo de evasión."
      }
    ],
    "fuenteFGDLL": [],
    "librosRecomendados": [],
    "objetivo": "Aterrizar la mente del joven a la realidad del 'Solo por hoy' abandonando la fantasía.",
    "fraseAncla": "Hacía planes gigantes para el futuro porque no soportaba habitar mi presente.",
    "guiaTestimonio": {
      "detectar": [
        "¿De qué manera te refugiabas en planes grandiosos o fantasías para no enfrentar tus responsabilidades diarias?",
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
    "noUsarPara": [
      "Aplastar las aspiraciones de los jóvenes",
      "Burlarse de las metas de vida"
    ],
    "esCatalogoBase": true,
    "prioridad": 25,
    "relacionados": []
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
    "evento": ["Convenciones"],
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
    "fuenteFGDLL": [],
    "librosRecomendados": [],
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
    "noUsarPara": [
      "Justificar el quedarse sufriendo",
      "Minimizar depresiones clínicas"
    ],
    "esCatalogoBase": true,
    "prioridad": 30,
    "relacionados": []
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
    "fuenteFGDLL": [],
    "librosRecomendados": [],
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
    "noUsarPara": [
      "Obligar a perdonar abusos graves",
      "Generar culpa a quien aún siente enojo"
    ],
    "esCatalogoBase": true,
    "prioridad": 35,
    "relacionados": []
  },

  // ==========================================
  // FUENTE: NUESTROS GRUPOS NUESTRA FORTALEZA
  // ==========================================
  {
    "id": "tema-grupos-01",
    "titulo": "El bienestar común debe tener la preferencia",
    "tituloCorto": "El bienestar común",
    "estado": "Completo",
    "sensibilidad": "normal",
    "categoria": "Servicio",
    "evento": ["Aniversario de grupo", "Juntas de trabajo"],
    "publico": ["Líderes", "Delegados"],
    "intensidad": "Media",
    "momento": "Mitad",
    "formato": "Didáctico",
    "tipoTestimonio": "Didáctico",
    "emocion": "Orgullo",
    "pasos": ["Tradición 1"],
    "fuentePrincipal": "AA",
    "fuenteAA": [
      {
        "obra": "Nuestros Grupos Nuestra Fortaleza",
        "referencia": "Tradición Primera",
        "uso": "Bajar el ego personal para cuidar la unidad del grupo."
      }
    ],
    "fuenteFGDLL": [],
    "librosRecomendados": [],
    "objetivo": "Enseñar que la supervivencia personal depende directamente de la unidad del grupo.",
    "fraseAncla": "Cuando quise imponer mi razón, perdí mi paz; cuando cedí por el grupo, gané libertad.",
    "guiaTestimonio": {
      "detectar": [
        "¿Cómo tu necesidad de tener la razón, figurar o mandar generaba conflictos y división?",
        "¿De qué forma el 'yo' siempre estaba por encima del 'nosotros' en tus decisiones?"
      ],
      "admitir": [
        "¿Qué situación grupal te enseñó que si el barco se hunde, tú también te ahogas?",
        "¿Cómo dolió soltar el deseo de control y acatar la conciencia del grupo aunque no estuvieras de acuerdo?"
      ],
      "corregir": [
        "¿Cómo practicas hoy la tolerancia hacia las ideas de tus compañeros en el servicio?",
        "¿De qué manera aportas a la unidad del grupo sin buscar aplausos ni reconocimientos?"
      ]
    },
    "variaciones": ["Ceder la razón", "Unidad del grupo"],
    "palabrasClave": ["unidad", "tradición 1", "bienestar común", "ego"],
    "advertenciaEtica": "",
    "advertenciaLider": "Cuidar que no se convierta en una queja sobre las dinámicas actuales del grupo. Enfocar en la actitud personal.",
    "noUsarPara": [
      "Criticar las decisiones del grupo",
      "Exponer conflictos de la mesa de servicio"
    ],
    "esCatalogoBase": true,
    "prioridad": 40,
    "relacionados": []
  },

  // ==========================================
  // FUENTE: DR. BOB Y LOS BUENOS VETERANOS
  // ==========================================
  {
    "id": "tema-bob-01",
    "titulo": "Amor y Servicio: Mantenerlo simple",
    "tituloCorto": "Mantenerlo simple",
    "estado": "Completo",
    "sensibilidad": "normal",
    "categoria": "Servicio",
    "evento": ["Semana del Guerrero", "Aniversarios"],
    "publico": ["Participantes"],
    "intensidad": "Baja",
    "momento": "Cierre",
    "formato": "Individual",
    "tipoTestimonio": "Inspirador",
    "emocion": "Gratitud",
    "pasos": ["Paso 12"],
    "fuentePrincipal": "AA",
    "fuenteAA": [
      {
        "obra": "Dr. Bob y los buenos veteranos",
        "referencia": "El último mensaje del Dr. Bob",
        "uso": "Recordar que la esencia de la recuperación no es la teoría complicada, sino el amor y servicio mutuo."
      }
    ],
    "fuenteFGDLL": [],
    "librosRecomendados": [],
    "objetivo": "Evitar la arrogancia intelectual en el programa y regresar a las acciones de servicio simples.",
    "fraseAncla": "Quise entender el programa con la mente, pero solo funcionó cuando lo apliqué con las manos.",
    "guiaTestimonio": {
      "detectar": [
        "¿Cómo complicabas tu vida antes tratando de racionalizar todo en lugar de actuar?",
        "¿Qué excusas intelectuales usabas para no servir o no involucrarte con los demás?"
      ],
      "admitir": [
        "¿Cuándo te diste cuenta de que hacer un café o tender una silla valía más que un discurso perfecto?",
        "¿Cómo la simplicidad del servicio te sacó de la depresión o la auto-obsesión?"
      ],
      "corregir": [
        "¿Cómo mantienes tu recuperación sencilla el día de hoy, sin complicarte la existencia?",
        "¿Qué actos de amor y servicio anónimos haces para mantener viva tu gratitud?"
      ]
    },
    "variaciones": ["Acción sobre teoría", "El servicio que sana"],
    "palabrasClave": ["simplicidad", "servicio", "dr bob", "acción"],
    "advertenciaEtica": "",
    "advertenciaLider": "Fomentar el mensaje de que menos debate y más servicio es la clave.",
    "noUsarPara": [
      "Juzgar el nivel de entendimiento de otros",
      "Fomentar mediocridad en el estudio"
    ],
    "esCatalogoBase": true,
    "prioridad": 45,
    "relacionados": []
  },

  // ==========================================
  // FUENTE: AA LLEGA A LA MAYORÍA DE EDAD
  // ==========================================
  {
    "id": "tema-mayoria-01",
    "titulo": "El anonimato como sacrificio personal",
    "tituloCorto": "Sacrificio del anonimato",
    "estado": "Completo",
    "sensibilidad": "normal",
    "categoria": "Desarrollo",
    "evento": ["Cualquiera"],
    "publico": ["Líderes", "Participantes"],
    "intensidad": "Media",
    "momento": "Cierre",
    "formato": "Panel corto",
    "tipoTestimonio": "Didáctico",
    "emocion": "Humildad",
    "pasos": ["Tradición 12"],
    "fuentePrincipal": "AA",
    "fuenteAA": [
      {
        "obra": "AA Llega a la Mayoría de Edad",
        "referencia": "El desarrollo de las Tradiciones",
        "uso": "El anonimato espiritual como la renuncia a la fama, el prestigio y el reconocimiento."
      }
    ],
    "fuenteFGDLL": [],
    "librosRecomendados": [],
    "objetivo": "Comprender que la recuperación florece en el silencio del ego y la humildad de no ser el protagonista.",
    "fraseAncla": "El anonimato me enseñó que puedo ser útil sin necesidad de ser importante.",
    "guiaTestimonio": {
      "detectar": [
        "¿De qué maneras vivías mendigando el aplauso y el reconocimiento de otros en todo lo que hacías?",
        "¿Cómo el ego te lastimaba cuando sentías que no eras valorado o visto como 'el mejor'?"
      ],
      "admitir": [
        "¿Qué situación en el servicio o el grupo te demostró que buscar protagonismo destruía el mensaje?",
        "¿Cómo fue el proceso de aprender a ayudar en secreto, sin que nadie te diera las gracias?"
      ],
      "corregir": [
        "¿Cómo sacrificas hoy el deseo de figurar para priorizar los principios por encima de las personalidades?",
        "¿De qué forma practicas la humildad diaria en tu familia y en tu grupo sin anunciar tus buenas obras?"
      ]
    },
    "variaciones": ["Silenciar el ego", "Principios sobre personalidades"],
    "palabrasClave": ["anonimato", "humildad", "sacrificio", "tradición 12"],
    "advertenciaEtica": "",
    "advertenciaLider": "Este tema es fundamental para los servidores. Evitar que suene como un regaño para los nuevos.",
    "noUsarPara": [
      "Evadir responsabilidades ('soy anónimo')",
      "Atacar a servidores visibles"
    ],
    "esCatalogoBase": true,
    "prioridad": 50,
    "relacionados": []
  }
];

```
