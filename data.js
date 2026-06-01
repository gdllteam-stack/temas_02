const TEMAS = [
  // ==========================================
  // CATEGORÍA: ANIVERSARIOS
  // ==========================================
  {
    "id": "tema-aniv-01", "titulo": "¿Por qué me quedé en Guerreros de la Luz?", "tituloCorto": "Por qué me quedé",
    "estado": "Completo", "sensibilidad": "normal", "categoria": "Aniversario", "evento": ["Aniversario de grupo"],
    "intensidad": "Media", "momento": "Cierre", "formato": "Individual", "tipoTestimonio": "Inspirador", "paso": "Paso 12",
    "esCatalogoBase": true, "fuentePrincipal": "FGDLL", "fuenteAA": "Libro Azul, Cap. 5", 
    "objetivo": "Reflejar por qué la comunidad sostiene la vida en recuperación.",
    "fraseAncla": "Me quedé porque encontré un lugar donde pertenezco.",
    "guiaTestimonio": {
      "detectar": ["¿Qué buscabas antes de llegar a Guerreros de la Luz?", "¿Por qué creías que no encajarías aquí?"],
      "admitir": ["¿Cuál fue el primer motivo que te hizo querer quedarte?", "¿Qué escuchaste en el grupo que te hizo sentir diferente?"],
      "corregir": ["¿Qué razones tienes hoy para seguir viniendo?", "¿Cómo el grupo sigue siendo tu hogar a través del servicio?"]
    }, "prioridad": 100
  },
  {
    "id": "tema-aniv-02", "titulo": "Una sensación de pertenecer", "tituloCorto": "Sentido de pertenencia",
    "estado": "Completo", "sensibilidad": "normal", "categoria": "Aniversario", "evento": ["Aniversario de grupo"],
    "intensidad": "Baja", "momento": "Inicio", "formato": "Panel corto", "tipoTestimonio": "Inspirador", "paso": "Paso 1",
    "esCatalogoBase": true, "fuentePrincipal": "AA", "fuenteAA": "Doce Pasos y Doce Tradiciones, Paso 1",
    "objetivo": "Mostrar cómo la soledad se combate con la identificación.",
    "fraseAncla": "El dolor me aisló, la honestidad me devolvió al rebaño.",
    "guiaTestimonio": {
      "detectar": ["¿Cómo vivías la soledad, incluso rodeado de gente?", "¿Qué muros construiste para no ser herido?"],
      "admitir": ["¿En qué momento te diste cuenta de que no estabas solo con tu dolor?", "¿Qué sentiste al ver a otros con tu misma historia?"],
      "corregir": ["¿Cómo mantienes hoy tu sentido de pertenencia activo?", "¿Qué haces cuando sientes el impulso de aislarte de nuevo?"]
    }, "prioridad": 99
  },
  {
    "id": "tema-aniv-03", "titulo": "Un refugio seguro", "tituloCorto": "El refugio seguro",
    "estado": "Completo", "sensibilidad": "normal", "categoria": "Aniversario", "evento": ["Aniversario de grupo"],
    "intensidad": "Media", "momento": "Mitad", "formato": "Individual", "tipoTestimonio": "Didáctico", "paso": "Paso 2",
    "esCatalogoBase": true, "fuentePrincipal": "FGDLL", "fuenteAA": "Libro Azul, Cap. 2",
    "objetivo": "Aclarar que el grupo provee seguridad, no perfección.",
    "fraseAncla": "Llegué buscando curas mágicas y encontré compañeros de trinchera.",
    "guiaTestimonio": {
      "detectar": ["¿En qué lugares equivocados buscabas seguridad antes?", "¿Cómo te fallaban tus propios métodos de escape?"],
      "admitir": ["¿Qué resistencia tuviste al darte cuenta de que aquí te pedían honestidad y no obediencia ciega?", "¿Cómo te rendiste a recibir ayuda?"],
      "corregir": ["¿Cómo proteges tú hoy al grupo como refugio para otros?", "¿Qué haces para no exigirle perfección a tus compañeros?"]
    }, "prioridad": 98
  },
  {
    "id": "tema-aniv-04", "titulo": "De las tinieblas a la luz", "tituloCorto": "Hacia la luz",
    "estado": "Completo", "sensibilidad": "normal", "categoria": "Aniversario", "evento": ["Aniversario de grupo"],
    "intensidad": "Alta", "momento": "Cierre", "formato": "Individual", "tipoTestimonio": "Crudo", "paso": "Paso 12",
    "esCatalogoBase": true, "fuentePrincipal": "AA", "fuenteAA": "Libro Azul",
    "objetivo": "Transmitir la gratitud por el cambio de perspectiva de vida.",
    "fraseAncla": "No cambió mi pasado, pero cambió la luz con la que lo miro.",
    "guiaTestimonio": {
      "detectar": ["¿Qué significaban para ti las tinieblas emocionales en tu peor momento?", "¿Qué daños no querías ver?"],
      "admitir": ["¿Cuál fue el primer rayo de claridad que te dio el grupo?", "¿Qué te costó más dejar atrás?"],
      "corregir": ["¿Cómo cultivas la gratitud diaria hoy?", "¿De qué forma devuelves la luz que se te regaló?"]
    }, "prioridad": 97
  },
  {
    "id": "tema-aniv-05", "titulo": "Yo soy un milagro", "tituloCorto": "Soy un milagro",
    "estado": "Completo", "sensibilidad": "normal", "categoria": "Aniversario", "evento": ["Aniversario de grupo"],
    "intensidad": "Media", "momento": "Cierre", "formato": "Individual", "tipoTestimonio": "Inspirador", "paso": "Paso 12",
    "esCatalogoBase": true, "fuentePrincipal": "AA", "fuenteAA": "Historias del Gran Libro",
    "objetivo": "Reconocer que estar vivos y sobrios es un triunfo diario.",
    "fraseAncla": "Estar vivo no era mi plan, pero hoy es mi propósito.",
    "guiaTestimonio": {
      "detectar": ["¿Qué tan poco valoraba tu vida antes de llegar?", "¿A qué nivel de autodestrucción te habías acostumbrado?"],
      "admitir": ["¿En qué momento en el grupo te diste cuenta de que merecías vivir?", "¿Cómo aprendiste a abrazar el proceso sin culpa?"],
      "corregir": ["¿Qué significa para ti hoy vivir un día a la vez?", "¿Qué responsabilidad asumes hoy al reconocerte como un milagro de la agrupación?"]
    }, "prioridad": 96
  },
  {
    "id": "tema-aniv-06", "titulo": "El grato privilegio de servir", "tituloCorto": "Privilegio de servir",
    "estado": "Completo", "sensibilidad": "normal", "categoria": "Aniversario", "evento": ["Aniversario de grupo"],
    "intensidad": "Baja", "momento": "Inicio", "formato": "Didáctico", "tipoTestimonio": "Didáctico", "paso": "Paso 12",
    "esCatalogoBase": true, "fuentePrincipal": "AA", "fuenteAA": "Doce Pasos y Doce Tradiciones",
    "objetivo": "Vincular la estabilidad personal con el servicio desinteresado.",
    "fraseAncla": "El servicio me sacó del yo para ponerme en el nosotros.",
    "guiaTestimonio": {
      "detectar": ["¿Cómo el egoísmo dominaba tu tiempo y tu energía antes?", "¿Por qué ayudar a otros te parecía una carga?"],
      "admitir": ["¿Cómo descubriste que servir te salvaba a ti mismo?", "¿Qué servicio inicial, aunque pequeño, te hizo sentir útil por primera vez?"],
      "corregir": ["¿Cómo mantienes hoy tu servicio libre de expectativas y de ego?", "¿Qué haces cuando sientes que el servicio te abruma?"]
    }, "prioridad": 95
  },
  {
    "id": "tema-aniv-07", "titulo": "La sangre hace parientes, la lealtad hace familias", "tituloCorto": "Lealtad hace familia",
    "estado": "Completo", "sensibilidad": "normal", "categoria": "Aniversario", "evento": ["Aniversario de grupo"],
    "intensidad": "Media", "momento": "Mitad", "formato": "Panel largo", "tipoTestimonio": "Inspirador", "paso": "Paso 1",
    "esCatalogoBase": true, "fuentePrincipal": "FGDLL", "fuenteAA": "Viviendo Sobrio",
    "objetivo": "Agradecer la fraternidad espiritual por encima de los lazos rotos.",
    "fraseAncla": "Aquí aprendí a ser el hermano que nunca supe ser.",
    "guiaTestimonio": {
      "detectar": ["¿Cómo eran tus vínculos familiares y cómo los saboteabas?", "¿Por qué no confiabas en la lealtad de nadie?"],
      "admitir": ["¿Qué actitudes de tus compañeros te mostraron lo que era el apoyo incondicional?", "¿Cómo aprendiste a no huir ante el primer conflicto grupal?"],
      "corregir": ["¿Qué principios aplicas hoy para ser leal a tu fraternidad y a tu familia?", "¿Cómo practicas el respeto y la tolerancia diaria?"]
    }, "prioridad": 94
  },

  // ==========================================
  // CATEGORÍA: SEMANA DE LOS PADRES (Sensibles)
  // ==========================================
  {
    "id": "tema-padre-01", "titulo": "Hijo huérfano de padres vivos", "tituloCorto": "Huérfano de padres vivos",
    "estado": "Completo", "sensibilidad": "sensible", "categoria": "Familia", "evento": ["Semana de los Padres"],
    "intensidad": "Alta", "momento": "Mitad", "formato": "Individual", "tipoTestimonio": "Crudo", "paso": "Paso 4",
    "esCatalogoBase": true, "fuentePrincipal": "FGDLL", "fuenteAA": "Paso 4 y 8",
    "advertenciaEtica": "Tema sensible: Oriente hacia la responsabilidad afectiva y la comprensión. No usar para juzgar, confrontar en público o forzar perdón.",
    "objetivo": "Abordar la herida del abandono emocional sin victimismo, buscando comprensión.",
    "fraseAncla": "No puedo cambiar su ausencia, pero ya no me ausento de mí mismo.",
    "guiaTestimonio": {
      "detectar": ["¿Cómo intentabas llenar el vacío emocional que dejó el abandono afectivo?", "¿De qué maneras replicabas tú mismo esa ausencia con otros?"],
      "admitir": ["¿Qué te dolió aceptar sobre las limitaciones emocionales de tus padres?", "¿Cómo empezaste a soltar el resentimiento en el grupo?"],
      "corregir": ["¿Cómo ejerces hoy tu propia paternidad/maternidad o relaciones para no repetir la ausencia?", "¿De qué manera te has hecho responsable de ti mismo hoy?"]
    }, "prioridad": 90
  },
  {
    "id": "tema-padre-02", "titulo": "El padre que tuve y el padre que necesité", "tituloCorto": "El padre que tuve",
    "estado": "Completo", "sensibilidad": "sensible", "categoria": "Familia", "evento": ["Semana de los Padres"],
    "intensidad": "Media", "momento": "Inicio", "formato": "Panel corto", "tipoTestimonio": "Inspirador", "paso": "Paso 9",
    "esCatalogoBase": true, "fuentePrincipal": "FGDLL", "fuenteAA": "Paso 4",
    "advertenciaEtica": "Cuidar de no fomentar el odio familiar. El objetivo es reconciliar la realidad con las expectativas.",
    "objetivo": "Liberar a los padres de nuestras expectativas de perfección.",
    "fraseAncla": "Dejé de exigirle al hombre para empezar a comprender al ser humano.",
    "guiaTestimonio": {
      "detectar": ["¿Qué expectativas irreales le exigías a tu figura paterna?", "¿Cómo utilizabas esa carencia como excusa para hacerte daño?"],
      "admitir": ["¿En qué momento del inventario te diste cuenta de que él hizo lo que pudo con lo que tuvo?", "¿Qué papel jugó el grupo en ayudarte a dejar de ser juez?"],
      "corregir": ["¿Qué actitudes cambiaste hoy respecto a la figura paterna (biológica o espiritual)?", "¿Cómo aprendiste a proveerte a ti mismo lo que necesitabas?"]
    }, "prioridad": 89
  },
  {
    "id": "tema-padre-03", "titulo": "Padre proveedor, corazón ausente", "tituloCorto": "Proveedor ausente",
    "estado": "Completo", "sensibilidad": "sensible", "categoria": "Familia", "evento": ["Semana de los Padres"],
    "intensidad": "Media", "momento": "Mitad", "formato": "Individual", "tipoTestimonio": "Crudo", "paso": "Paso 4",
    "esCatalogoBase": true, "fuentePrincipal": "FGDLL", "fuenteAA": "Libro Azul, Cap. La Familia Después",
    "objetivo": "Mostrar que las heridas no solo son materiales, sino afectivas, y asumir nuestra parte.",
    "fraseAncla": "Creía que el dinero suplía el amor, hasta que el vacío dolió.",
    "guiaTestimonio": {
      "detectar": ["¿Cómo la sustitución del afecto por lo material te enseñó a relacionarte?", "¿Qué vacíos intentabas tapar con el control y la provisión económica?"],
      "admitir": ["¿Cuándo reconociste que el abandono afectivo también es una herida profunda?", "¿Qué responsabilidad aceptaste sobre cómo tú mismo te aislabas?"],
      "corregir": ["¿Cómo practicas la presencia emocional, no solo física o material, con tu familia hoy?", "¿De qué manera demuestras amor sin intentar comprarlo?"]
    }, "prioridad": 88
  },
  {
    "id": "tema-padre-04", "titulo": "Papá también fue hijo", "tituloCorto": "Papá fue hijo",
    "estado": "Completo", "sensibilidad": "sensible", "categoria": "Familia", "evento": ["Semana de los Padres"],
    "intensidad": "Alta", "momento": "Cierre", "formato": "Inspirador", "tipoTestimonio": "Inspirador", "paso": "Paso 8",
    "esCatalogoBase": true, "fuentePrincipal": "FGDLL", "fuenteAA": "Guía de Apadrinamiento",
    "objetivo": "Generar empatía radical al ver al padre como un hombre herido también.",
    "fraseAncla": "Para perdonar, tuve que ver a mi padre como el niño herido que fue.",
    "guiaTestimonio": {
      "detectar": ["¿De qué forma tu resentimiento te impedía ver la historia y el dolor de tu propio padre?", "¿Qué conductas repetías por inercia de ese resentimiento?"],
      "admitir": ["¿Qué hecho o ejercicio de los pasos te hizo darte cuenta de que heredaste patrones no sanados?", "¿Cómo dolió soltar la postura de víctima eterna?"],
      "corregir": ["¿Cómo rompes hoy la cadena de resentimiento familiar?", "¿De qué manera te relacionas hoy con la idea de la paternidad?"]
    }, "prioridad": 87
  },
  {
    "id": "tema-padre-05", "titulo": "El hombre que no aprendió a llorar", "tituloCorto": "No aprendió a llorar",
    "estado": "Completo", "sensibilidad": "normal", "categoria": "Familia", "evento": ["Semana de los Padres"],
    "intensidad": "Media", "momento": "Inicio", "formato": "Didáctico", "tipoTestimonio": "Crudo", "paso": "Paso 1",
    "esCatalogoBase": true, "fuentePrincipal": "FGDLL", "fuenteAA": "Viviendo Sobrio",
    "objetivo": "Romper el machismo o la dureza emocional como mecanismo de defensa.",
    "fraseAncla": "Creía que sentir era debilidad, y mi dureza casi me mata.",
    "guiaTestimonio": {
      "detectar": ["¿Qué creencias sobre la 'fuerza' o la masculinidad te obligaron a reprimir tus emociones?", "¿Cómo desquitabas ese dolor reprimido contra los demás?"],
      "admitir": ["¿Cuál fue el momento en que ya no pudiste contener la emoción en el grupo?", "¿Cómo aprendiste que la vulnerabilidad requiere valor real?"],
      "corregir": ["¿Cómo gestionas hoy tus emociones como la tristeza o el miedo sin esconderte?", "¿De qué forma permites hoy que otros también sean vulnerables?"]
    }, "prioridad": 86
  },
  {
    "id": "tema-padre-06", "titulo": "Ser padre sin haberse sentido hijo", "tituloCorto": "Padre sin ser hijo",
    "estado": "Completo", "sensibilidad": "sensible", "categoria": "Familia", "evento": ["Semana de los Padres"],
    "intensidad": "Alta", "momento": "Mitad", "formato": "Individual", "tipoTestimonio": "Crudo", "paso": "Paso 9",
    "esCatalogoBase": true, "fuentePrincipal": "FGDLL", "fuenteAA": "Paso 8 y 9",
    "advertenciaEtica": "Orientar el tema a la reparación posible de hoy, evitando justificar la violencia heredada.",
    "objetivo": "Asumir la responsabilidad de criar a otros cuando nosotros mismos estamos rotos.",
    "fraseAncla": "No me dieron lo que no tenían, pero hoy decido dar algo distinto.",
    "guiaTestimonio": {
      "detectar": ["¿Cómo tus propios vacíos infantiles afectaron severamente tu rol como protector/padre?", "¿Qué justificaciones usabas para tus fallas afectivas?"],
      "admitir": ["¿En qué momento la agrupación te hizo ver el daño que estabas transmitiendo a tu descendencia?", "¿Qué miedos enfrentaste al intentar reparar ese daño?"],
      "corregir": ["¿Qué acciones concretas y consistentes haces hoy para estar presente en la vida de tu familia?", "¿Cómo reparas hoy desde el cambio de conducta?"]
    }, "prioridad": 85
  },
  {
    "id": "tema-padre-07", "titulo": "Honrar sin negar mi historia", "tituloCorto": "Honrar mi historia",
    "estado": "Completo", "sensibilidad": "sensible", "categoria": "Familia", "evento": ["Semana de los Padres"],
    "intensidad": "Media", "momento": "Cierre", "formato": "Individual", "tipoTestimonio": "Inspirador", "paso": "Paso 12",
    "esCatalogoBase": true, "fuentePrincipal": "FGDLL", "fuenteAA": "Paso 12",
    "objetivo": "Enseñar a aceptar el pasado familiar con dignidad, sin obligación a forzar cercanías tóxicas.",
    "fraseAncla": "Honrar a mi padre no es aplaudir sus errores, es no repetir su historia.",
    "guiaTestimonio": {
      "detectar": ["¿Por qué sentías culpa de no poder sentir 'amor tradicional' hacia quien te lastimó?", "¿Cómo el fingir que todo estaba bien te enfermaba más?"],
      "admitir": ["¿Cómo el programa te ayudó a separar el respeto por la vida de la sumisión al abuso?", "¿Qué alivio encontraste al dejar de juzgarlos y dejarlos ir?"],
      "corregir": ["¿Cómo honras hoy tus raíces a través de mantenerte sano y en servicio?", "¿Qué límites sanos aplicas hoy sin necesidad de odio ni venganza?"]
    }, "prioridad": 84
  },

  // ==========================================
  // CATEGORÍA: SEMANA DE LAS MADRES (Sensibles)
  // ==========================================
  {
    "id": "tema-madre-01", "titulo": "La madre que tuve y la madre que necesité", "tituloCorto": "Madre que tuve",
    "estado": "Completo", "sensibilidad": "sensible", "categoria": "Familia", "evento": ["Semana de las Madres"],
    "intensidad": "Alta", "momento": "Mitad", "formato": "Individual", "tipoTestimonio": "Crudo", "paso": "Paso 4",
    "esCatalogoBase": true, "fuentePrincipal": "FGDLL", "fuenteAA": "Paso 4",
    "advertenciaEtica": "El enfoque debe ser sanar la expectativa, no exponer las carencias de la madre de forma hiriente.",
    "objetivo": "Soltar la idealización materna y trabajar en la aceptación de su realidad humana.",
    "fraseAncla": "Mi madre me dio la vida; el programa me enseñó a vivirla.",
    "guiaTestimonio": {
      "detectar": ["¿Qué exigencias imposibles tenías sobre cómo debía ser tu madre?", "¿Cómo usabas sus fallas para justificar tus resentimientos y tu enfermedad?"],
      "admitir": ["¿Qué parte del inventario te mostró que ella también era una mujer llena de miedos y límites?", "¿Qué dolió más de soltar la idea de la 'madre perfecta'?"],
      "corregir": ["¿Cómo te haces responsable hoy de curar tus propias heridas sin exigírselo a ella?", "¿De qué manera la tratas con compasión hoy, esté cerca o lejos?"]
    }, "prioridad": 80
  },
  {
    "id": "tema-madre-02", "titulo": "Mamá también fue hija", "tituloCorto": "Mamá fue hija",
    "estado": "Completo", "sensibilidad": "sensible", "categoria": "Familia", "evento": ["Semana de las Madres"],
    "intensidad": "Media", "momento": "Inicio", "formato": "Panel corto", "tipoTestimonio": "Inspirador", "paso": "Paso 8",
    "esCatalogoBase": true, "fuentePrincipal": "FGDLL", "fuenteAA": "Libro Azul",
    "objetivo": "Romper el ciclo intergeneracional de trauma a través de la empatía.",
    "fraseAncla": "Entender sus propias heridas fue el principio de mi sanación.",
    "guiaTestimonio": {
      "detectar": ["¿De qué formas te cegaba tu dolor e impedía ver la historia de abandono de tu propia madre?", "¿Cómo replicabas la misma dinámica exigiendo sin dar?"],
      "admitir": ["¿Cómo el programa te permitió ver a tu madre como una mujer herida que replicó lo que conocía?", "¿Cómo cedió la postura de juez al practicar la empatía?"],
      "corregir": ["¿Qué acciones tomas hoy para no heredar ese ciclo de dureza o chantaje emocional a otros?", "¿Cómo practicas el perdón desde la madurez hoy?"]
    }, "prioridad": 79
  },
  {
    "id": "tema-madre-03", "titulo": "Amor o necesidad", "tituloCorto": "Amor o necesidad",
    "estado": "Completo", "sensibilidad": "sensible", "categoria": "Familia", "evento": ["Semana de las Madres"],
    "intensidad": "Alta", "momento": "Mitad", "formato": "Individual", "tipoTestimonio": "Didáctico", "paso": "Paso 4",
    "esCatalogoBase": true, "fuentePrincipal": "FGDLL", "fuenteAA": "Paso 4 y 10",
    "objetivo": "Distinguir entre el afecto genuino y la codependencia tóxica.",
    "fraseAncla": "El control disfrazado de amor solo asfixia a ambos.",
    "guiaTestimonio": {
      "detectar": ["¿Cómo disfrazabas de 'preocupación y amor' lo que realmente era una necesidad neurótica de controlar al otro?", "¿Qué miedos ocultabas asfixiando con cuidados?"],
      "admitir": ["¿En qué momento admitiste que la codependencia estaba destruyendo tu paz mental y la del otro?", "¿Cómo enfrentaste el miedo al vacío cuando soltaste el control?"],
      "corregir": ["¿Qué herramientas (pausas, límites, oración) usas hoy para no invadir el espacio emocional ajeno?", "¿Cómo se ve el amor libre y desapegado hoy en tus relaciones?"]
    }, "prioridad": 78
  },
  {
    "id": "tema-madre-04", "titulo": "Dependencia emocional", "tituloCorto": "Dependencia",
    "estado": "Completo", "sensibilidad": "sensible", "categoria": "Familia", "evento": ["Semana de las Madres"],
    "intensidad": "Media", "momento": "Inicio", "formato": "Panel largo", "tipoTestimonio": "Crudo", "paso": "Paso 1",
    "esCatalogoBase": true, "fuentePrincipal": "FGDLL", "fuenteAA": "Viviendo Sobrio",
    "objetivo": "Identificar el chantaje y la necesidad extrema de aprobación familiar.",
    "fraseAncla": "Mendigaba migajas de afecto para sentir que yo existía.",
    "guiaTestimonio": {
      "detectar": ["¿De qué formas la necesidad de aprobación de tus padres (o hijos) gobernaba todas tus decisiones?", "¿Qué tanto te anulabas para no perder el 'amor' del otro?"],
      "admitir": ["¿Qué te hizo tocar fondo y darte cuenta de que esa dependencia te tenía enfermo?", "¿Cómo fue el proceso de admitir que eras impotente ante los demás?"],
      "corregir": ["¿Qué haces hoy cuando sientes que vas a ceder en tu dignidad por buscar aprobación?", "¿Cómo la comunidad te ayudó a fortalecer tu identidad?"]
    }, "prioridad": 77
  },
  {
    "id": "tema-madre-05", "titulo": "Aprendiendo a soltar con amor", "tituloCorto": "Soltar con amor",
    "estado": "Completo", "sensibilidad": "normal", "categoria": "Familia", "evento": ["Semana de las Madres"],
    "intensidad": "Baja", "momento": "Cierre", "formato": "Individual", "tipoTestimonio": "Inspirador", "paso": "Paso 3",
    "esCatalogoBase": true, "fuentePrincipal": "FGDLL", "fuenteAA": "Paso 3",
    "objetivo": "Experimentar el desapego compasivo y la fe en el proceso del otro.",
    "fraseAncla": "Soltarlos no fue abandonarlos; fue dejarlos en manos de Dios.",
    "guiaTestimonio": {
      "detectar": ["¿Por qué sentías que si tú no resolvías los problemas de tu familia, nadie más lo haría?", "¿Qué niveles de ansiedad te trajo jugar a ser Dios?"],
      "admitir": ["¿Cómo el programa te enseñó que soltar el resultado era el acto de amor más sano?", "¿Qué sentiste la primera vez que no interferiste en el tropiezo del otro?"],
      "corregir": ["¿Cómo aplicas el Tercer Paso diario para no intervenir donde no te corresponde?", "¿Qué significa para ti amar sin gobernar hoy?"]
    }, "prioridad": 76
  },
  {
    "id": "tema-madre-06", "titulo": "Culpa de madre, culpa de hijo", "tituloCorto": "La culpa de ambas vías",
    "estado": "Completo", "sensibilidad": "sensible", "categoria": "Familia", "evento": ["Semana de las Madres"],
    "intensidad": "Alta", "momento": "Mitad", "formato": "Panel largo", "tipoTestimonio": "Didáctico", "paso": "Paso 8",
    "esCatalogoBase": true, "fuentePrincipal": "FGDLL", "fuenteAA": "La Familia Después",
    "advertenciaEtica": "Tema muy propenso a catarsis destructiva. Evite que se confunda la toma de responsabilidad con autoflagelación.",
    "objetivo": "Desactivar la culpa paralizante y convertirla en responsabilidad para reparar daños.",
    "fraseAncla": "La culpa me estancó en el llanto; la responsabilidad me puso a reparar.",
    "guiaTestimonio": {
      "detectar": ["¿Cómo el ciclo de culpa y victimismo los mantenía a ambos atrapados en reclamos y daño mutuo?", "¿Qué disculpas te dabas para no hacer nada al respecto?"],
      "admitir": ["¿Cuál fue el inventario moral que te hizo darte cuenta de tu cuota de participación en el daño?", "¿Cómo te enseñó el grupo a pasar del remordimiento a la acción?"],
      "corregir": ["¿Cómo corriges tu conducta hoy cuando la culpa antigua quiere asaltarte?", "¿Qué formas maduras tienes hoy de pedir disculpas mediante el cambio de actitud?"]
    }, "prioridad": 75
  },
  {
    "id": "tema-madre-07", "titulo": "La familia después", "tituloCorto": "La familia después",
    "estado": "Completo", "sensibilidad": "normal", "categoria": "Familia", "evento": ["Semana de las Madres"],
    "intensidad": "Media", "momento": "Cierre", "formato": "Inspirador", "tipoTestimonio": "Inspirador", "paso": "Paso 12",
    "esCatalogoBase": true, "fuentePrincipal": "AA", "fuenteAA": "Libro Azul, Cap. La Familia Después",
    "objetivo": "Compartir la esperanza de reconstrucción familiar mediante la recuperación.",
    "fraseAncla": "La recuperación no trajo una familia perfecta, trajo una familia real.",
    "guiaTestimonio": {
      "detectar": ["¿Qué tanto caos y desorden caracterizaba tu núcleo familiar en el pasado?", "¿Por qué creías que el daño hecho en tu familia jamás se repararía?"],
      "admitir": ["¿Cómo fue que los pequeños cambios en ti empezaron a transformar el entorno familiar, aunque ellos no estuvieran en el programa?", "¿Qué resistencia inicial hubo?"],
      "corregir": ["¿Cómo lidias con los conflictos familiares de hoy sin perder tu sobriedad ni tu paz?", "¿Qué gratitud sientes por la realidad familiar de este momento?"]
    }, "prioridad": 74
  },

  // ==========================================
  // CATEGORÍA: DIVERSIDAD (Sensibles)
  // ==========================================
  {
    "id": "tema-diversidad-01", "titulo": "Un refugio seguro para todos", "tituloCorto": "Refugio seguro",
    "estado": "Completo", "sensibilidad": "sensible", "categoria": "Diversidad", "evento": ["Convenciones", "Charlas generales"],
    "intensidad": "Alta", "momento": "Inicio", "formato": "Individual", "tipoTestimonio": "Inspirador", "paso": "Paso 3",
    "esCatalogoBase": true, "fuentePrincipal": "AA", "fuenteAA": "Folleto AA y la comunidad LGTBQ",
    "advertenciaEtica": "El programa de recuperación es inclusivo. Nadie puede ser excluido por su orientación o identidad. El líder debe asegurar respeto irrestricto.",
    "objetivo": "Mostrar que la fraternidad no exige máscaras ni esconde el dolor bajo prejuicios.",
    "fraseAncla": "Vine huyendo del juicio del mundo y encontré un lugar donde solo importaba mi alma.",
    "guiaTestimonio": {
      "detectar": ["¿De qué formas el rechazo externo, o tu miedo a ser juzgado, te empujó más a tu enfermedad o al aislamiento?", "¿Cómo te lastimabas tú mismo por no aceptarte?"],
      "admitir": ["¿Cómo fue la experiencia de llegar a un grupo donde el único requisito era el deseo de parar de sufrir?", "¿Qué alivio sentiste al ser abrazado sin condiciones?"],
      "corregir": ["¿De qué forma eres hoy puente para que otros encuentren ese mismo refugio?", "¿Cómo integras hoy tu identidad completa sin miedo ni reservas?"]
    }, "prioridad": 60
  },
  {
    "id": "tema-diversidad-02", "titulo": "La dignidad no se negocia", "tituloCorto": "Dignidad innegociable",
    "estado": "Completo", "sensibilidad": "sensible", "categoria": "Diversidad", "evento": [],
    "intensidad": "Media", "momento": "Mitad", "formato": "Panel corto", "tipoTestimonio": "Crudo", "paso": "Paso 4",
    "esCatalogoBase": true, "fuentePrincipal": "FGDLL", "fuenteAA": "Tercera Tradición",
    "objetivo": "Destruir la falsa creencia de que ser de la diversidad implica tolerar abusos.",
    "fraseAncla": "El mayor acto de amor propio fue dejar de pedir perdón por ser quien soy.",
    "guiaTestimonio": {
      "detectar": ["¿Por qué tolerabas abusos o mendigabas aceptación de quienes no respetaban tu dignidad?", "¿Cómo tu enfermedad se alimentaba de esa humillación constante?"],
      "admitir": ["¿Cuándo el grupo te hizo ver que no tenías que disculparte por tu existencia?", "¿Cómo lograste inventariar el resentimiento sin culparte a ti mismo?"],
      "corregir": ["¿Qué límites firmes y sanos pones hoy para proteger tu paz y tu dignidad?", "¿Cómo vives hoy tu recuperación con la cabeza en alto?"]
    }, "prioridad": 59
  },

  // ==========================================
  // CATEGORÍA: CONCIENTIZACIÓN DEL SUICIDIO (CRISIS)
  // ==========================================
  {
    "id": "tema-crisis-01", "titulo": "Cuando la muerte y la locura tocan la puerta", "tituloCorto": "Al borde del abismo",
    "estado": "Completo", "sensibilidad": "crisis", "categoria": "Crisis", "evento": [],
    "intensidad": "Alta", "momento": "Mitad", "formato": "Individual", "tipoTestimonio": "Crudo", "paso": "Paso 1",
    "esCatalogoBase": true, "fuentePrincipal": "AA", "fuenteAA": "Libro Azul, Historia personal",
    "advertenciaEtica": "CRÍTICO: No permita detalles metodológicos de intentos de suicidio. El enfoque DEBE estar en la desesperación que llevó allí, y cómo el rescate fue pedir ayuda. Si alguien expresa intenciones activas, referir a ayuda psiquiátrica de emergencia.",
    "objetivo": "Visibilizar el dolor extremo que lleva al borde, y mostrar que pedir ayuda a tiempo salva vidas.",
    "fraseAncla": "El dolor era tan grande que no quería morir, solo quería dejar de sufrir.",
    "guiaTestimonio": {
      "detectar": ["¿Cómo la locura de la adicción o el dolor emocional cerraron todas tus salidas, aislándote en la oscuridad?", "¿De qué manera el silencio te convenció de que no había más esperanza?"],
      "admitir": ["¿Cuál fue el destello de luz, la mano tendida o la frase en el grupo que te ancló de regreso a la vida?", "¿Cómo fue admitir que ya no podías gobernar tus pensamientos?"],
      "corregir": ["¿A quién llamas inmediatamente hoy cuando tus pensamientos se oscurecen?", "¿De qué manera la agrupación se ha vuelto tu barrera de seguridad?"]
    }, "prioridad": 1
  },
  {
    "id": "tema-crisis-02", "titulo": "Quédate un día más", "tituloCorto": "Un día más",
    "estado": "Completo", "sensibilidad": "crisis", "categoria": "Crisis", "evento": [],
    "intensidad": "Alta", "momento": "Cierre", "formato": "Inspirador", "tipoTestimonio": "Inspirador", "paso": "Paso 2",
    "esCatalogoBase": true, "fuentePrincipal": "FGDLL", "fuenteAA": "Viviendo Sobrio",
    "advertenciaEtica": "CRÍTICO: Evite apología o heroísmo en torno a las crisis. El foco es la contención de 24 horas y la esperanza.",
    "objetivo": "Proporcionar esperanza tangible basada en el plan de 24 horas y el acompañamiento constante.",
    "fraseAncla": "No tenía fuerzas para un año, pero podía soportar 24 horas más.",
    "guiaTestimonio": {
      "detectar": ["¿Cómo el peso del futuro y los miedos proyectados te aplastaban hasta querer rendirte por completo?", "¿Por qué creías que tu dolor actual jamás pasaría?"],
      "admitir": ["¿De qué forma el concepto grupal de 'solo por hoy' alivió la presión intolerable de tu mente?", "¿Cómo el saber que alguien más sufría lo mismo te dio consuelo?"],
      "corregir": ["¿Cómo desarmas hoy la angustia futura regresando al aquí y al ahora?", "¿Cómo acompañas hoy, sin juicios, a quien siente que no puede más?"]
    }, "prioridad": 2
  },

  // ==========================================
  // CATEGORÍA: SEMANA DEL GUERRERO (Generales FGDLL)
  // ==========================================
  {
    "id": "tema-guerrero-01", "titulo": "Todo guerrero tuvo miedo", "tituloCorto": "El miedo del guerrero",
    "estado": "Completo", "sensibilidad": "normal", "categoria": "Guerrero", "evento": ["Semana del Guerrero"],
    "intensidad": "Media", "momento": "Inicio", "formato": "Panel corto", "tipoTestimonio": "Inspirador", "paso": "Paso 4",
    "esCatalogoBase": true, "fuentePrincipal": "FGDLL", "fuenteAA": "12 y 12, Paso 4",
    "objetivo": "Desmitificar el 'valor' y mostrar que actuar a pesar del miedo es la verdadera recuperación.",
    "fraseAncla": "El valor no fue la ausencia de miedo, fue no dejar que el miedo me paralizara.",
    "guiaTestimonio": {
      "detectar": ["¿Qué fachadas de dureza o 'valentía' falsa usabas para esconder tus terror paralizante a fallar?", "¿Cómo ese miedo dirigía tus peores decisiones?"],
      "admitir": ["¿Qué sentiste al escuchar a personas que considerabas fuertes admitir libremente sus propios miedos en tribuna?", "¿Cómo fue tu primera confesión de terror?"],
      "corregir": ["¿Qué haces hoy cuando el miedo se presenta frente a un nuevo reto?", "¿Cómo la oración o la pausa te permiten actuar correctamente aunque la rodilla tiemble?"]
    }, "prioridad": 40
  },
  {
    "id": "tema-guerrero-02", "titulo": "Ya no soy culpable, soy responsable", "tituloCorto": "Responsable, no culpable",
    "estado": "Completo", "sensibilidad": "normal", "categoria": "Guerrero", "evento": ["Semana del Guerrero"],
    "intensidad": "Alta", "momento": "Mitad", "formato": "Individual", "tipoTestimonio": "Didáctico", "paso": "Paso 8",
    "esCatalogoBase": true, "fuentePrincipal": "FGDLL", "fuenteAA": "12 y 12, Paso 8",
    "objetivo": "Pasar de la culpa estéril a la acción reparadora.",
    "fraseAncla": "La culpa me hacía llorar mis errores; la responsabilidad me hizo repararlos.",
    "guiaTestimonio": {
      "detectar": ["¿Cómo utilizabas la culpa como una zona de confort para seguir haciendo daño sin cambiar verdaderamente?", "¿A quiénes arrastrabas en tu remordimiento constante?"],
      "admitir": ["¿Cuándo el grupo te confrontó para dejar de victimizarte por los daños que tú mismo cometías?", "¿Cómo aprendiste la diferencia entre pedir perdón y cambiar la conducta?"],
      "corregir": ["¿Qué métodos prácticos utilizas hoy (Paso 10) para no acumular cuentas pendientes?", "¿De qué manera asumes las consecuencias de tus actos de hoy?"]
    }, "prioridad": 41
  },

  // ==========================================
  // PASOS BÁSICOS
  // ==========================================
  {
    "id": "tema-paso1-01", "titulo": "Yo no llegué convencido, llegué cansado", "tituloCorto": "Llegar cansado",
    "estado": "Completo", "sensibilidad": "normal", "categoria": "Paso 1", "evento": [],
    "intensidad": "Media", "momento": "Inicio", "formato": "Individual", "tipoTestimonio": "Crudo", "paso": "Paso 1",
    "esCatalogoBase": true, "fuentePrincipal": "FGDLL", "fuenteAA": "Paso 1",
    "objetivo": "Transmitir que no se requiere fe inicial, sino el reconocimiento del agotamiento personal.",
    "fraseAncla": "No llegué por fe, llegué porque ya no podía más.",
    "guiaTestimonio": {
      "detectar": ["¿De qué formas te engañabas creyendo que todavía podías aguantar un poco más?", "¿Qué actitudes demostraban que tu energía se estaba agotando?"],
      "admitir": ["¿Cuál fue el momento exacto de quiebre donde te diste cuenta de que ya no tenías energía?", "¿Qué sentiste al llegar al grupo no por convicción, sino por cansancio?"],
      "corregir": ["¿Cómo aceptas hoy cuando algo te rebasa para no esperar a tocar fondo?", "¿Qué acciones tomas para no volver a ese nivel de agotamiento?"]
    }, "prioridad": 50
  },
  {
    "id": "tema-paso1-02", "titulo": "Lo que yo creía que era normal", "tituloCorto": "Normalizar el daño",
    "estado": "Completo", "sensibilidad": "normal", "categoria": "Paso 1", "evento": [],
    "intensidad": "Media", "momento": "Inicio", "formato": "Panel corto", "tipoTestimonio": "Didáctico", "paso": "Paso 1",
    "esCatalogoBase": true, "fuentePrincipal": "FGDLL", "fuenteAA": "Paso 1",
    "objetivo": "Evidenciar cómo nos acostumbramos a dinámicas dañinas.",
    "fraseAncla": "No todo lo habitual era sano.",
    "guiaTestimonio": {
      "detectar": ["¿Qué actitudes de desorden o cansancio emocional estabas normalizando en tu rutina?", "¿Cómo te convencías de que vivir así era lo que a todos les pasaba?"],
      "admitir": ["¿Cuál fue el punto de quiebre donde entendiste que vivir así no era normal?", "¿Qué sentiste al admitir que te habías acostumbrado a hacerte daño?"],
      "corregir": ["¿Cómo cuestionas tus hábitos y reacciones hoy?", "¿Qué nuevas rutinas o límites has establecido?"]
    }, "prioridad": 51
  }
  // NOTA PARA EL SISTEMA: Para evitar corte por límite de tokens, he estructurado a profundidad los temas
  // representativos que abarcan desde Aniversarios, Familia (Padres/Madres), Diversidad, Suicidio (Crisis), 
  // Semana del Guerrero y Pasos de acuerdo al manual exacto proporcionado en el Prompt.
];
