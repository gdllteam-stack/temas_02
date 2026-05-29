/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   BIBLIOTECA DE TESTIMONIOS FGDLL â€” app.js
   Arquitectura: filtros dinÃ¡micos, modal, exportaciones
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */

'use strict';

// â”€â”€ ESTADO GLOBAL â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const Estado = {
  filtros: {
    texto: '',
    categoria: '',
    tipo: '',
    intensidad: '',
    momento: '',
    fuente: '',
    estado: '',
    catalogo: '',
    sensibilidad: '',
  },
  orden: 'prioridad',
  temaActivo: null,
  filtrosModoActivo: null,
};

// â”€â”€ UTILIDADES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function normalizar(str) {
  return (str || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function mostrarToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('visible');
  setTimeout(() => toast.classList.remove('visible'), 2500);
}

function getTagClaseEstado(estado) {
  if (estado === 'Completo') return 'tag-estado-completo';
  if (estado === 'RevisiÃ³n') return 'tag-estado-revision';
  return 'tag-estado-falta';
}

function getTagClaseTipo(tipo) {
  const t = normalizar(tipo);
  if (t === 'crudo') return 'tag-tipo-crudo';
  if (t === 'inspirador') return 'tag-tipo-inspirador';
  if (t === 'didactico') return 'tag-tipo-didactico';
  return '';
}

// â”€â”€ FILTROS DINÃMICOS DESDE DATOS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function poblarSelectsDesdeData() {
  const categorias = [...new Set(TEMAS.map(t => t.categoria).filter(Boolean))].sort();
  const tipos = [...new Set(TEMAS.map(t => t.tipoTestimonio).filter(Boolean))].sort();
  const intensidades = [...new Set(TEMAS.map(t => t.intensidad).filter(Boolean))].sort();
  const momentos = [...new Set(TEMAS.map(t => t.momento).filter(Boolean))].sort();

  const llenar = (id, items) => {
    const sel = document.getElementById(id);
    if (!sel) return;
    items.forEach(item => {
      const opt = document.createElement('option');
      opt.value = item;
      opt.textContent = item;
      sel.appendChild(opt);
    });
  };

  llenar('filtroCategoria', categorias);
  llenar('filtroTipo', tipos);
  llenar('filtroIntensidad', intensidades);
  llenar('filtroMomento', momentos);
}

// â”€â”€ LÃ“GICA DE FILTRADO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function filtrarTemas() {
  const f = Estado.filtros;
  const txt = normalizar(f.texto);

  return TEMAS.filter(t => {
    // BÃºsqueda de texto
    if (txt) {
      const haystack = normalizar([
        t.titulo, t.tituloCorto, t.categoria, t.objetivo,
        t.fraseAncla, t.fuenteAA, t.referencia,
        t.tipoTestimonio, t.paso,
        ...(t.guiaTestimonio?.detectar || []),
        ...(t.guiaTestimonio?.admitir || []),
        ...(t.guiaTestimonio?.corregir || []),
      ].join(' '));
      if (!haystack.includes(txt)) return false;
    }

    if (f.categoria && t.categoria !== f.categoria) return false;
    if (f.tipo && t.tipoTestimonio !== f.tipo) return false;
    if (f.intensidad && t.intensidad !== f.intensidad) return false;
    if (f.momento && t.momento !== f.momento) return false;
    if (f.fuente && t.fuentePrincipal !== f.fuente) return false;
    if (f.estado && t.estado !== f.estado) return false;
    if (f.catalogo !== '') {
      const val = f.catalogo === 'true';
      if (t.esCatalogoBase !== val) return false;
    }
    if (f.sensibilidad && t.sensibilidad !== f.sensibilidad) return false;

    return true;
  });
}

function ordenarTemas(temas) {
  const copia = [...temas];
  const orden = Estado.orden;
  if (orden === 'titulo') copia.sort((a, b) => a.titulo.localeCompare(b.titulo));
  else if (orden === 'intensidad') {
    const orden_i = { 'Alta': 0, 'Media': 1, 'Baja': 2 };
    copia.sort((a, b) => (orden_i[a.intensidad] ?? 1) - (orden_i[b.intensidad] ?? 1));
  }
  else if (orden === 'estado') copia.sort((a, b) => a.estado.localeCompare(b.estado));
  else copia.sort((a, b) => (a.prioridad || 99) - (b.prioridad || 99));
  return copia;
}

// â”€â”€ RENDERIZADO DE TARJETAS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function renderTarjetas() {
  const grid = document.getElementById('tarjetasGrid');
  const sinRes = document.getElementById('sinResultados');
  const count = document.getElementById('tarjetasCount');

  const filtrados = filtrarTemas();
  const ordenados = ordenarTemas(filtrados);

  count.textContent = `${ordenados.length} tema${ordenados.length !== 1 ? 's' : ''}`;
  document.getElementById('filtrosResultado').textContent =
    filtrados.length < TEMAS.length ? `${filtrados.length} de ${TEMAS.length} temas` : '';

  // Badge de filtros activos
  const activos = Object.values(Estado.filtros).filter(v => v !== '').length;
  const badge = document.getElementById('filtrosBadge');
  badge.style.display = activos > 0 ? 'flex' : 'none';
  badge.textContent = activos;

  grid.innerHTML = '';

  if (ordenados.length === 0) {
    sinRes.style.display = 'block';
    return;
  }
  sinRes.style.display = 'none';

  ordenados.forEach((tema, i) => {
    grid.appendChild(crearTarjeta(tema, i));
  });
}

function crearTarjeta(tema, idx) {
  const div = document.createElement('article');
  div.className = 'tarjeta';
  div.style.animationDelay = Math.min(idx * 0.04, 0.4) + 's';
  div.setAttribute('data-id', tema.id);

  const tipoClase = getTagClaseTipo(tema.tipoTestimonio);
  const estadoClase = getTagClaseEstado(tema.estado);

  let tagsHtml = `<span class="tag tag-categoria">${tema.categoria || 'General'}</span>`;
  if (tema.esCatalogoBase) tagsHtml += `<span class="tag tag-base">Base</span>`;
  if (tema.tipoTestimonio) tagsHtml += `<span class="tag ${tipoClase}">${tema.tipoTestimonio}</span>`;
  if (tema.sensibilidad === 'sensible') tagsHtml += `<span class="tag tag-sensible">Sensible</span>`;
  if (tema.sensibilidad === 'crisis') tagsHtml += `<span class="tag tag-crisis">Crisis</span>`;
  tagsHtml += `<span class="tag ${estadoClase}">${tema.estado}</span>`;

  const ancla = tema.fraseAncla ? `<p class="tarjeta-ancla">${tema.fraseAncla}</p>` : '';

  const metaItems = [];
  if (tema.intensidad) metaItems.push(`<span class="meta-item">${tema.intensidad}</span>`);
  if (tema.momento) metaItems.push(`<span class="meta-item"><span class="meta-dot"></span>${tema.momento}</span>`);
  if (tema.fuenteAA) metaItems.push(`<span class="meta-item"><span class="meta-dot"></span>${tema.fuenteAA.split('(')[0].trim()}</span>`);

  div.innerHTML = `
    <div class="tarjeta-tope ${tema.sensibilidad}"></div>
    <div class="tarjeta-cuerpo">
      <div class="tarjeta-tags">${tagsHtml}</div>
      <h3 class="tarjeta-titulo">${tema.titulo}</h3>
      ${ancla}
      <div class="tarjeta-meta">${metaItems.join('')}</div>
    </div>
    <div class="tarjeta-pie">
      <button class="btn-ver" data-id="${tema.id}">Ver ficha completa</button>
      <button class="btn-copiar-rapido" data-id="${tema.id}" title="Copiar preguntas guÃ­a">ðŸ“‹</button>
    </div>
  `;

  // Click en la tarjeta
  div.querySelector('.btn-ver').addEventListener('click', (e) => {
    e.stopPropagation();
    abrirModal(tema.id);
  });
  div.querySelector('.tarjeta-cuerpo').addEventListener('click', () => abrirModal(tema.id));
  div.querySelector('.btn-copiar-rapido').addEventListener('click', (e) => {
    e.stopPropagation();
    copiarPreguntas(tema);
    mostrarToast('Preguntas copiadas âœ“');
  });

  return div;
}

// â”€â”€ MODAL â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function abrirModal(id) {
  const tema = TEMAS.find(t => t.id === id);
  if (!tema) return;
  Estado.temaActivo = tema;

  const overlay = document.getElementById('modalOverlay');
  const contenido = document.getElementById('modalContenido');

  contenido.innerHTML = generarFichaHTML(tema);
  overlay.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function cerrarModal() {
  document.getElementById('modalOverlay').style.display = 'none';
  document.body.style.overflow = '';
  Estado.temaActivo = null;
}

function generarFichaHTML(tema) {
  const tipoClase = getTagClaseTipo(tema.tipoTestimonio);
  const estadoClase = getTagClaseEstado(tema.estado);

  let tagsHtml = `<span class="tag tag-categoria">${tema.categoria || 'General'}</span>`;
  if (tema.esCatalogoBase) tagsHtml += `<span class="tag tag-base">CatÃ¡logo base</span>`;
  if (tema.tipoTestimonio) tagsHtml += `<span class="tag ${tipoClase}">${tema.tipoTestimonio}</span>`;
  if (tema.sensibilidad !== 'normal') tagsHtml += `<span class="tag tag-${tema.sensibilidad}">${tema.sensibilidad === 'crisis' ? 'âš  Crisis' : 'Sensible'}</span>`;
  tagsHtml += `<span class="tag ${estadoClase}">${tema.estado}</span>`;

  // Alerta para sensibles/crisis
  let alertaHtml = '';
  if (tema.sensibilidad === 'crisis') {
    alertaHtml = `<div class="ficha-alerta"><strong>Tema de crisis:</strong> Este tema requiere acompaÃ±amiento especializado. No use en grupos sin apoyo de un servidor preparado. Si un participante estÃ¡ en crisis activa, priorice la contenciÃ³n y los recursos de salud mental.</div>`;
  } else if (tema.sensibilidad === 'sensible') {
    alertaHtml = `<div class="ficha-alerta"><strong>Tema sensible:</strong> Oriente este tema hacia verdad, responsabilidad y libertad emocional. No use para juzgar, confrontar o forzar perdÃ³n.</div>`;
  }

  // Fuente de estudio
  let fuenteHtml = '';
  if (tema.fuenteAA || tema.referencia) {
    fuenteHtml = `
      <div class="ficha-seccion">
        <p class="ficha-seccion-titulo">Base de estudio â€” Literatura AA</p>
        ${tema.fuenteAA ? `<p class="ficha-fuente"><span class="ficha-fuente-titulo">${tema.fuenteAA}</span></p>` : ''}
        ${tema.referencia ? `<p class="ficha-fuente">${tema.referencia}</p>` : ''}
      </div>
    `;
  }

  // Notas para el lÃ­der
  let notasHtml = '';
  if (tema.notasInternas) {
    notasHtml = `
      <div class="ficha-seccion">
        <p class="ficha-seccion-titulo">Nota para el lÃ­der</p>
        <p class="ficha-texto">${tema.notasInternas}</p>
      </div>
    `;
  }

  // QuÃ© debe contar
  let queContarHtml = '';
  if (tema.queDbeContar) {
    queContarHtml = `
      <div class="ficha-seccion">
        <p class="ficha-seccion-titulo">QuÃ© debe incluir el testimonio</p>
        <p class="ficha-texto">${tema.queDbeContar}</p>
      </div>
    `;
  }

  // Variaciones de frase ancla
  let variacionesHtml = '';
  if (tema.variaciones && tema.variaciones.length > 0) {
    const vars = tema.variaciones.map(v => `<p class="ficha-fuente" style="font-style:italic;color:#9e9e9e">"${v}"</p>`).join('');
    variacionesHtml = `
      <div class="ficha-seccion">
        <p class="ficha-seccion-titulo">Variaciones de la frase ancla</p>
        ${vars}
      </div>
    `;
  }

  // GuÃ­a de testimonio â€” tres tiempos
  const g = tema.guiaTestimonio || {};
  const detectar = g.detectar || [];
  const admitir = g.admitir || [];
  const corregir = g.corregir || [];

  const bloque = (num, clase, titulo, sub, preguntas) => {
    if (!preguntas || preguntas.length === 0) return '';
    const ps = preguntas.map(p => `<p class="guia-pregunta">${p}</p>`).join('');
    return `
      <div class="guia-bloque guia-tiempo-${num}">
        <div class="guia-header">
          <span class="guia-num">${num < 10 ? '0' + num : num}</span>
          <div class="guia-etiqueta">
            <span class="guia-etiqueta-titulo">${titulo}</span>
            <span class="guia-etiqueta-sub">${sub}</span>
          </div>
        </div>
        <div class="guia-preguntas">${ps}</div>
      </div>
    `;
  };

  const guiaHtml = `
    <div class="ficha-seccion">
      <p class="ficha-seccion-titulo">Preguntas guÃ­a para preparar el testimonio</p>
      ${bloque(1, '1', 'Antes del programa', 'Detectar', detectar)}
      ${bloque(2, '2', 'Al llegar a Guerreros de la Luz', 'Admitir', admitir)}
      ${bloque(3, '3', 'Ahora con el programa', 'Aprender a corregir', corregir)}
    </div>
  `;

  return `
    <div class="ficha-tope ${tema.sensibilidad}"></div>
    <div class="ficha-tags">${tagsHtml}</div>
    <h2 class="ficha-titulo">${tema.titulo}</h2>
    ${tema.fraseAncla ? `<div class="ficha-ancla">"${tema.fraseAncla}"</div>` : ''}
    ${alertaHtml}
    ${tema.objetivo ? `
      <div class="ficha-seccion">
        <p class="ficha-seccion-titulo">Objetivo del testimonio</p>
        <p class="ficha-texto">${tema.objetivo}</p>
      </div>
    ` : ''}
    ${fuenteHtml}
    ${guiaHtml}
    ${queContarHtml}
    ${variacionesHtml}
    ${notasHtml}
    <div class="ficha-seccion" style="padding-top:8px;border-top:1px solid rgba(255,255,255,0.06)">
      <p class="ficha-seccion-titulo">Metadatos</p>
      <p class="ficha-fuente" style="font-size:13px;color:#666">
        ID: ${tema.id} Â· Prioridad: ${tema.prioridad} Â· 
        Formato: ${tema.formato || 'No especificado'} Â· 
        Momento: ${tema.momento || 'Flexible'}
      </p>
    </div>
  `;
}

// â”€â”€ EXPORTACIONES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function copiarPreguntas(tema) {
  const g = tema.guiaTestimonio || {};
  const partes = [];

  if (g.detectar?.length) {
    partes.push('ANTES DEL PROGRAMA â€” DETECTAR');
    g.detectar.forEach(q => partes.push(q));
    partes.push('');
  }
  if (g.admitir?.length) {
    partes.push('AL LLEGAR A GUERREROS DE LA LUZ â€” ADMITIR');
    g.admitir.forEach(q => partes.push(q));
    partes.push('');
  }
  if (g.corregir?.length) {
    partes.push('AHORA CON EL PROGRAMA â€” APRENDER A CORREGIR');
    g.corregir.forEach(q => partes.push(q));
  }

  navigator.clipboard.writeText(partes.join('\n'));
}

function copiarWhatsApp(tema) {
  const g = tema.guiaTestimonio || {};
  const lineas = [
    `*${tema.titulo}*`,
    `_${tema.fraseAncla || ''}_`,
    '',
    `*Detectar (antes del programa):*`,
    ...(g.detectar || []).map(q => `â€¢ ${q}`),
    '',
    `*Admitir (al llegar a Guerreros):*`,
    ...(g.admitir || []).map(q => `â€¢ ${q}`),
    '',
    `*Aprender a corregir (hoy):*`,
    ...(g.corregir || []).map(q => `â€¢ ${q}`),
    '',
    `_Fuente: ${tema.fuenteAA || 'FGDLL'}_`,
    `_Biblioteca de Testimonios FGDLL_`,
  ];
  navigator.clipboard.writeText(lineas.join('\n'));
  mostrarToast('Copiado para WhatsApp âœ“');
}

function descargarTxt(tema) {
  const g = tema.guiaTestimonio || {};
  const lineas = [
    'â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•',
    `BIBLIOTECA DE TESTIMONIOS FGDLL`,
    'â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•',
    '',
    `TEMA: ${tema.titulo}`,
    `CATEGORÃA: ${tema.categoria}`,
    `TIPO: ${tema.tipoTestimonio}`,
    `INTENSIDAD: ${tema.intensidad}`,
    `ESTADO: ${tema.estado}`,
    '',
    'â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€',
    'FRASE ANCLA',
    'â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€',
    `"${tema.fraseAncla || 'Sin frase ancla'}"`,
    '',
    'â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€',
    'OBJETIVO DEL TESTIMONIO',
    'â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€',
    tema.objetivo || 'Sin objetivo definido',
    '',
    'â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€',
    'FUENTE DE ESTUDIO',
    'â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€',
    tema.fuenteAA || 'FGDLL / GuÃ­a de Apadrinamiento',
    tema.referencia || '',
    '',
    'â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€',
    'PREGUNTAS GUÃA â€” LOS TRES TIEMPOS',
    'â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€',
    '',
    '[ 01 ] ANTES DEL PROGRAMA â€” DETECTAR',
    ...(g.detectar || []).map(q => `   ${q}`),
    '',
    '[ 02 ] AL LLEGAR A GUERREROS DE LA LUZ â€” ADMITIR',
    ...(g.admitir || []).map(q => `   ${q}`),
    '',
    '[ 03 ] AHORA CON EL PROGRAMA â€” APRENDER A CORREGIR',
    ...(g.corregir || []).map(q => `   ${q}`),
    '',
    'â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€',
    'QUÃ‰ DEBE INCLUIR EL TESTIMONIO',
    'â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€',
    tema.queDbeContar || 'â€”',
    '',
    'â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€',
    'NOTA PARA EL LÃDER',
    'â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€',
    tema.notasInternas || 'â€”',
    '',
    'â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•',
    'Biblioteca de Testimonios â€” Fraternidad Guerreros de la Luz',
    `El testimonio no es catarsis desordenada,`,
    `sino experiencia ordenada por la literatura,`,
    `la conciencia y el servicio.`,
    'â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•',
  ];

  const blob = new Blob([lineas.join('\n')], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `FGDLL-${tema.id}-${tema.titulo.replace(/[^a-zA-ZÃ¡Ã©Ã­Ã³ÃºÃÃ‰ÃÃ“ÃšÃ±Ã‘0-9]/g, '_').slice(0, 40)}.txt`;
  a.click();
  URL.revokeObjectURL(url);
  mostrarToast('Archivo descargado âœ“');
}

function imprimirFicha(tema) {
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.add('printing');
  window.print();
  overlay.classList.remove('printing');
}

// â”€â”€ MODOS DE USO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function aplicarModo(filtroJSON) {
  try {
    const filtro = JSON.parse(filtroJSON);
    resetFiltros(false);
    Object.entries(filtro).forEach(([k, v]) => {
      if (k in Estado.filtros) Estado.filtros[k] = v;
      const sel = document.getElementById('filtro' + k.charAt(0).toUpperCase() + k.slice(1));
      if (sel) sel.value = v;
    });
    renderTarjetas();
    document.getElementById('biblioteca').scrollIntoView({ behavior: 'smooth' });
  } catch(e) {}
}

// â”€â”€ RESET â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function resetFiltros(render = true) {
  Object.keys(Estado.filtros).forEach(k => Estado.filtros[k] = '');
  ['filtroCategoria','filtroTipo','filtroIntensidad','filtroMomento',
   'filtroFuente','filtroEstado','filtroCatalogo','filtroSensibilidad']
    .forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
  const buscador = document.getElementById('buscador');
  if (buscador) { buscador.value = ''; Estado.filtros.texto = ''; }
  if (render) renderTarjetas();
}

// â”€â”€ EDITOR JSON â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function generarJSONNuevoTema() {
  const val = id => document.getElementById(id)?.value?.trim() || '';
  const textarea = id => {
    const txt = val(id);
    return txt ? txt.split('\n').filter(l => l.trim()).map(l => l.trim()) : [];
  };

  const titulo = val('edTitulo');
  if (!titulo) { mostrarToast('Agrega un tÃ­tulo'); return; }

  const nuevoId = `tema-${String(Date.now()).slice(-6)}`;
  const obj = {
    id: nuevoId,
    titulo,
    tituloCorto: '',
    categoria: val('edCategoria'),
    estado: val('edFuenteAA') && val('edAncla') ? 'Completo' : 'RevisiÃ³n',
    sensibilidad: val('edSensibilidad'),
    fuentePrincipal: val('edFuenteAA') ? 'AA' : 'FGDLL',
    fuenteAA: val('edFuenteAA'),
    referencia: '',
    intensidad: val('edIntensidad'),
    momento: val('edMomento'),
    formato: '',
    tipoTestimonio: val('edTipo'),
    paso: '',
    esCatalogoBase: false,
    objetivo: val('edObjetivo'),
    fraseAncla: val('edAncla'),
    variaciones: [],
    queDbeContar: '',
    notasInternas: val('edAdvertencia'),
    prioridad: 99,
    guiaTestimonio: {
      detectar: textarea('edDetectar'),
      admitir: textarea('edAdmitir'),
      corregir: textarea('edCorregir'),
    }
  };

  const json = JSON.stringify(obj, null, 2);
  const resultado = document.getElementById('editorResultado');
  const jsonEl = document.getElementById('editorJSON');
  resultado.style.display = 'block';
  jsonEl.textContent = json;
  resultado.scrollIntoView({ behavior: 'smooth' });
}

// â”€â”€ INICIALIZACIÃ“N â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function init() {
  poblarSelectsDesdeData();
  renderTarjetas();
  bindEventos();
}

function bindEventos() {

  // Buscador
  const buscador = document.getElementById('buscador');
  const btnLimpiar = document.getElementById('btnLimpiar');
  buscador?.addEventListener('input', (e) => {
    Estado.filtros.texto = e.target.value;
    btnLimpiar.classList.toggle('visible', e.target.value.length > 0);
    renderTarjetas();
  });
  btnLimpiar?.addEventListener('click', () => {
    buscador.value = '';
    Estado.filtros.texto = '';
    btnLimpiar.classList.remove('visible');
    renderTarjetas();
  });

  // Toggle filtros
  const btnFiltros = document.getElementById('btnFiltrosToggle');
  const panelFiltros = document.getElementById('filtrosPanel');
  btnFiltros?.addEventListener('click', () => {
    panelFiltros.classList.toggle('visible');
    btnFiltros.classList.toggle('activo');
  });

  // Selects de filtros
  const mapFiltros = {
    filtroCategoria: 'categoria',
    filtroTipo: 'tipo',
    filtroIntensidad: 'intensidad',
    filtroMomento: 'momento',
    filtroFuente: 'fuente',
    filtroEstado: 'estado',
    filtroCatalogo: 'catalogo',
    filtroSensibilidad: 'sensibilidad',
  };
  Object.entries(mapFiltros).forEach(([elId, campo]) => {
    document.getElementById(elId)?.addEventListener('change', (e) => {
      Estado.filtros[campo] = e.target.value;
      renderTarjetas();
    });
  });

  // Orden
  document.getElementById('ordenSelect')?.addEventListener('change', (e) => {
    Estado.orden = e.target.value;
    renderTarjetas();
  });

  // Reset filtros
  document.getElementById('btnResetFiltros')?.addEventListener('click', () => resetFiltros());
  document.getElementById('btnResetSin')?.addEventListener('click', () => resetFiltros());

  // Modos de uso
  document.querySelectorAll('.modo-card[data-filtro]').forEach(btn => {
    btn.addEventListener('click', () => aplicarModo(btn.dataset.filtro));
  });

  // Modal cerrar
  document.getElementById('modalCerrar')?.addEventListener('click', cerrarModal);
  document.getElementById('modalOverlay')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) cerrarModal();
  });

  // Modal exportar
  document.getElementById('btnCopiarGuia')?.addEventListener('click', () => {
    if (!Estado.temaActivo) return;
    copiarPreguntas(Estado.temaActivo);
    mostrarToast('Preguntas copiadas âœ“');
  });
  document.getElementById('btnCopiarWA')?.addEventListener('click', () => {
    if (!Estado.temaActivo) return;
    copiarWhatsApp(Estado.temaActivo);
  });
  document.getElementById('btnDescargarTxt')?.addEventListener('click', () => {
    if (!Estado.temaActivo) return;
    descargarTxt(Estado.temaActivo);
  });
  document.getElementById('btnImprimir')?.addEventListener('click', () => {
    if (!Estado.temaActivo) return;
    imprimirFicha(Estado.temaActivo);
  });

  // ESC para cerrar modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (document.getElementById('modalOverlay').style.display !== 'none') cerrarModal();
      if (document.getElementById('editorOverlay').style.display !== 'none') {
        document.getElementById('editorOverlay').style.display = 'none';
        document.body.style.overflow = '';
      }
    }
  });

  // Editor
  document.getElementById('btnEditor')?.addEventListener('click', () => {
    document.getElementById('editorOverlay').style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });
  document.getElementById('editorCerrar')?.addEventListener('click', () => {
    document.getElementById('editorOverlay').style.display = 'none';
    document.body.style.overflow = '';
  });
  document.getElementById('editorOverlay')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
      document.getElementById('editorOverlay').style.display = 'none';
      document.body.style.overflow = '';
    }
  });
  document.getElementById('btnGenerarJSON')?.addEventListener('click', generarJSONNuevoTema);
  document.getElementById('btnCopiarJSON')?.addEventListener('click', () => {
    const txt = document.getElementById('editorJSON')?.textContent;
    if (txt) {
      navigator.clipboard.writeText(txt);
      mostrarToast('JSON copiado âœ“');
    }
  });
}

// Arrancar cuando el DOM estÃ© listo
document.addEventListener('DOMContentLoaded', init);

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   IMPORTADOR DE BASES DE TEMAS
   Flujo: pegar JSON â†’ validar â†’ previsualizar â†’ fusionar â†’ descargar
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */

const Importador = {
  temasNuevos: [],      // los temas parseados del JSON pegado
  temasValidados: [],   // con metadatos de validaciÃ³n
};

// â”€â”€ Abrir / cerrar â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function abrirImportador() {
  impIrPaso(1);
  document.getElementById('impJsonInput').value = '';
  document.getElementById('impError').style.display = 'none';
  document.getElementById('importadorOverlay').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function cerrarImportador() {
  document.getElementById('importadorOverlay').style.display = 'none';
  document.body.style.overflow = '';
}

function impIrPaso(n) {
  [1, 2, 3].forEach(i => {
    document.getElementById(`impPaso${i}`).style.display = i === n ? 'block' : 'none';
  });
}

// â”€â”€ Limpiar formato markdown del JSON â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function limpiarJSON(raw) {
  let txt = raw.trim();
  // Quitar bloques de cÃ³digo markdown ```json ... ``` o ``` ... ```
  txt = txt.replace(/^
http://googleusercontent.com/immersive_entry_chip/0

---

### 4. `styles.css`

```css
/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   BIBLIOTECA DE TESTIMONIOS FGDLL
   Identidad visual: Institucional Â· Espiritual Â· Profunda
   Paleta: Negro carbÃ³n / Dorado viejo / Blanco cÃ¡lido
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */

:root {
  --negro:        #0d0d0d;
  --negro-medio:  #141414;
  --negro-suave:  #1c1c1c;
  --carbon:       #222222;
  --gris-oscuro:  #2e2e2e;
  --gris-medio:   #4a4a4a;
  --gris-claro:   #7a7a7a;
  --gris-texto:   #9e9e9e;

  --dorado:       #c9a84c;
  --dorado-suave: #dab96a;
  --dorado-pale:  #e8d48a;
  --dorado-dark:  #9a7a30;
  --ambar:        #c07b2a;

  --blanco:       #f5f0e8;
  --blanco-frio:  #e8e4de;
  --crema:        #f0ead8;

  --rojo:         #8b2b2b;
  --rojo-suave:   #a03535;
  --verde:        #2d5a3a;
  --azul-oscuro:  #1a2a3a;

  --tiempo-1:     #c9a84c;   /* Detectar â€” dorado */
  --tiempo-2:     #6a7a8a;   /* Admitir â€” gris azulado */
  --tiempo-3:     #5a7a5a;   /* Corregir â€” verde profundo */

  --fuente-titulo: 'Cormorant Garamond', Georgia, serif;
  --fuente-texto:  'DM Sans', system-ui, sans-serif;

  --radio:        8px;
  --radio-grande: 16px;
  --sombra:       0 4px 24px rgba(0,0,0,0.5);
  --sombra-suave: 0 2px 12px rgba(0,0,0,0.3);

  --transicion:   0.25s ease;
}

/* â”€â”€ RESET â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  background: var(--negro);
  color: var(--blanco);
  font-family: var(--fuente-texto);
  font-size: 16px;
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
}
a { color: inherit; text-decoration: none; }
button { cursor: pointer; font-family: var(--fuente-texto); border: none; background: none; }
select, input, textarea { font-family: var(--fuente-texto); }
img { display: block; max-width: 100%; }

/* â”€â”€ CONTENEDOR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
.contenedor {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   NAV
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
.nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  background: rgba(13,13,13,0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(201,168,76,0.15);
}
.nav-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--fuente-titulo);
}
.nav-sigla {
  font-size: 20px;
  font-weight: 700;
  color: var(--dorado);
  letter-spacing: 0.08em;
}
.nav-sep { color: var(--gris-medio); font-size: 14px; }
.nav-nombre {
  font-size: 14px;
  color: var(--gris-texto);
  font-style: italic;
}
.nav-links {
  display: flex;
  align-items: center;
  gap: 24px;
}
.nav-links a {
  font-size: 14px;
  color: var(--gris-texto);
  transition: color var(--transicion);
}
.nav-links a:hover { color: var(--blanco); }
.btn-editor {
  font-size: 13px;
  padding: 8px 16px;
  border: 1px solid var(--dorado-dark);
  border-radius: var(--radio);
  color: var(--dorado);
  background: transparent;
  transition: all var(--transicion);
}
.btn-editor:hover {
  background: var(--dorado);
  color: var(--negro);
  border-color: var(--dorado);
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   HERO
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 120px 32px 80px;
  overflow: hidden;
}
.hero-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 80% 60% at 20% 50%, rgba(201,168,76,0.07) 0%, transparent 60%),
    radial-gradient(ellipse 60% 80% at 80% 20%, rgba(26,42,58,0.4) 0%, transparent 70%),
    linear-gradient(180deg, var(--negro) 0%, var(--negro-medio) 100%);
}
.hero-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: 
    repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(201,168,76,0.03) 80px, rgba(201,168,76,0.03) 81px),
    repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(201,168,76,0.03) 80px, rgba(201,168,76,0.03) 81px);
}
.hero-content {
  position: relative;
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
}
.hero-eyebrow {
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--dorado);
  margin-bottom: 24px;
}
.hero-titulo {
  font-family: var(--fuente-titulo);
  font-size: clamp(52px, 8vw, 88px);
  font-weight: 400;
  line-height: 1.05;
  color: var(--blanco);
  margin-bottom: 24px;
}
.hero-titulo em {
  font-style: italic;
  color: var(--dorado-suave);
}
.hero-subtitulo {
  font-size: 18px;
  font-weight: 300;
  color: var(--gris-texto);
  margin-bottom: 32px;
  line-height: 1.5;
}
.hero-principio {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 32px;
}
.principio-item {
  font-family: var(--fuente-titulo);
  font-size: 20px;
  font-style: italic;
  color: var(--dorado-pale);
}
.principio-sep { color: var(--gris-medio); font-size: 20px; }
.hero-descripcion {
  font-size: 15px;
  color: var(--gris-texto);
  max-width: 560px;
  margin: 0 auto 40px;
  line-height: 1.75;
}
.hero-acciones {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

/* â”€â”€ BOTONES PRINCIPALES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
.btn-primario {
  display: inline-block;
  padding: 14px 32px;
  background: var(--dorado);
  color: var(--negro);
  font-size: 15px;
  font-weight: 600;
  border-radius: var(--radio);
  transition: all var(--transicion);
  border: 2px solid var(--dorado);
}
.btn-primario:hover {
  background: var(--dorado-pale);
  border-color: var(--dorado-pale);
  transform: translateY(-1px);
}
.btn-secundario {
  display: inline-block;
  padding: 14px 32px;
  background: transparent;
  color: var(--blanco);
  font-size: 15px;
  font-weight: 400;
  border-radius: var(--radio);
  border: 1px solid rgba(255,255,255,0.2);
  transition: all var(--transicion);
}
.btn-secundario:hover {
  border-color: var(--dorado);
  color: var(--dorado);
}

/* â”€â”€ STATS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
.hero-stats {
  position: relative;
  display: flex;
  justify-content: center;
  gap: 48px;
  margin-top: 64px;
  padding-top: 32px;
  border-top: 1px solid rgba(201,168,76,0.2);
}
.stat { text-align: center; }
.stat-num {
  display: block;
  font-family: var(--fuente-titulo);
  font-size: 36px;
  font-weight: 600;
  color: var(--dorado);
  line-height: 1;
}
.stat-label {
  display: block;
  font-size: 12px;
  font-weight: 500;
  color: var(--gris-texto);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-top: 6px;
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   SECCIÃ“N MODOS DE USO
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
.modos {
  padding: 96px 0;
  background: var(--negro-suave);
  border-top: 1px solid rgba(201,168,76,0.1);
}
.seccion-header {
  text-align: center;
  margin-bottom: 48px;
}
.seccion-eyebrow {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--dorado);
  margin-bottom: 12px;
}
.seccion-titulo {
  font-family: var(--fuente-titulo);
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 400;
  color: var(--blanco);
}
.modos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
}
.modo-card {
  background: var(--carbon);
  border: 1px solid rgba(201,168,76,0.12);
  border-radius: var(--radio-grande);
  padding: 32px 24px;
  text-align: left;
  transition: all var(--transicion);
  cursor: pointer;
}
.modo-card:hover {
  border-color: var(--dorado);
  background: var(--gris-oscuro);
  transform: translateY(-2px);
}
.modo-icono {
  font-size: 28px;
  color: var(--dorado);
  margin-bottom: 16px;
}
.modo-card h3 {
  font-family: var(--fuente-titulo);
  font-size: 20px;
  font-weight: 500;
  color: var(--blanco);
  margin-bottom: 10px;
  line-height: 1.3;
}
.modo-card p {
  font-size: 14px;
  color: var(--gris-texto);
  line-height: 1.6;
  margin-bottom: 16px;
}
.modo-tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--dorado-dark);
  border: 1px solid var(--dorado-dark);
  padding: 3px 8px;
  border-radius: 4px;
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   TRES TIEMPOS
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
.tres-tiempos {
  padding: 80px 0;
  background: var(--negro);
}
.tiempos-grid {
  display: flex;
  align-items: stretch;
  gap: 0;
}
.tiempo-card {
  flex: 1;
  padding: 40px 32px;
  border-radius: var(--radio-grande);
  position: relative;
}
.tiempo-1 { background: linear-gradient(135deg, rgba(201,168,76,0.12), rgba(201,168,76,0.04)); border: 1px solid rgba(201,168,76,0.25); }
.tiempo-2 { background: linear-gradient(135deg, rgba(106,122,138,0.12), rgba(106,122,138,0.04)); border: 1px solid rgba(106,122,138,0.25); }
.tiempo-3 { background: linear-gradient(135deg, rgba(90,122,90,0.12), rgba(90,122,90,0.04)); border: 1px solid rgba(90,122,90,0.25); }
.tiempo-num {
  font-family: var(--fuente-titulo);
  font-size: 64px;
  font-weight: 700;
  line-height: 1;
  opacity: 0.12;
  position: absolute;
  top: 20px; right: 24px;
}
.tiempo-1 .tiempo-num { color: var(--dorado); }
.tiempo-2 .tiempo-num { color: var(--gris-claro); }
.tiempo-3 .tiempo-num { color: var(--verde); }
.tiempo-card h3 {
  font-family: var(--fuente-titulo);
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 8px;
  color: var(--blanco);
}
.tiempo-verbo {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 16px;
}
.tiempo-1 .tiempo-verbo { color: var(--dorado); }
.tiempo-2 .tiempo-verbo { color: #6a7a8a; }
.tiempo-3 .tiempo-verbo { color: #5a8a5a; }
.tiempo-card p { font-size: 14px; color: var(--gris-texto); line-height: 1.65; }
.tiempo-conector {
  display: flex;
  align-items: center;
  padding: 0 8px;
  font-size: 28px;
  color: var(--dorado-dark);
  opacity: 0.5;
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   BIBLIOTECA
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
.biblioteca {
  padding: 80px 0 120px;
  background: var(--negro-medio);
}

/* â”€â”€ BUSCADOR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
.buscador-wrap {
  margin-bottom: 40px;
}
.buscador-top {
  display: flex;
  gap: 12px;
  margin-bottom: 0;
}
.buscador-input-wrap {
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
}
.buscador-icono {
  position: absolute;
  left: 16px;
  font-size: 20px;
  color: var(--gris-claro);
  pointer-events: none;
}
.buscador-input {
  width: 100%;
  padding: 14px 44px 14px 48px;
  background: var(--carbon);
  border: 1px solid var(--gris-oscuro);
  border-radius: var(--radio);
  color: var(--blanco);
  font-size: 15px;
  outline: none;
  transition: border-color var(--transicion);
}
.buscador-input:focus { border-color: var(--dorado); }
.buscador-input::placeholder { color: var(--gris-claro); }
.buscador-limpiar {
  position: absolute;
  right: 12px;
  font-size: 13px;
  color: var(--gris-claro);
  padding: 4px;
  opacity: 0;
  transition: opacity var(--transicion);
}
.buscador-limpiar.visible { opacity: 1; }
.buscador-limpiar:hover { color: var(--blanco); }
.btn-filtros-toggle {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 20px;
  background: var(--carbon);
  border: 1px solid var(--gris-oscuro);
  border-radius: var(--radio);
  color: var(--gris-texto);
  font-size: 14px;
  transition: all var(--transicion);
  white-space: nowrap;
}
.btn-filtros-toggle:hover, .btn-filtros-toggle.activo {
  border-color: var(--dorado);
  color: var(--dorado);
}
.filtros-badge {
  background: var(--dorado);
  color: var(--negro);
  font-size: 11px;
  font-weight: 700;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.filtros-panel {
  display: none;
  margin-top: 12px;
  padding: 24px;
  background: var(--carbon);
  border: 1px solid var(--gris-oscuro);
  border-radius: var(--radio);
}
.filtros-panel.visible { display: block; }
.filtros-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 20px;
}
.filtro-grupo { display: flex; flex-direction: column; gap: 6px; }
.filtro-label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--gris-claro);
}
.filtro-select {
  padding: 9px 12px;
  background: var(--gris-oscuro);
  border: 1px solid transparent;
  border-radius: var(--radio);
  color: var(--blanco);
  font-size: 14px;
  outline: none;
  transition: border-color var(--transicion);
  cursor: pointer;
}
.filtro-select:focus { border-color: var(--dorado); }
.filtro-select option { background: var(--negro); }
.filtros-acciones {
  display: flex;
  align-items: center;
  gap: 16px;
}
.btn-reset-filtros {
  font-size: 13px;
  color: var(--gris-texto);
  padding: 6px 12px;
  border: 1px solid var(--gris-oscuro);
  border-radius: var(--radio);
  transition: all var(--transicion);
}
.btn-reset-filtros:hover { color: var(--blanco); border-color: var(--gris-claro); }
.filtros-resultado {
  font-size: 13px;
  color: var(--gris-texto);
}

/* â”€â”€ CABECERA TARJETAS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
.tarjetas-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 12px;
}
.tarjetas-count {
  font-size: 14px;
  color: var(--gris-texto);
}
.tarjetas-orden {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: var(--gris-texto);
}

/* â”€â”€ TARJETAS GRID â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
.tarjetas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
}

/* TARJETA */
.tarjeta {
  background: var(--carbon);
  border: 1px solid var(--gris-oscuro);
  border-radius: var(--radio-grande);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all var(--transicion);
  cursor: pointer;
}
.tarjeta:hover {
  border-color: var(--dorado);
  transform: translateY(-2px);
  box-shadow: var(--sombra);
}
.tarjeta-tope {
  height: 4px;
}
.tarjeta-tope.normal { background: linear-gradient(90deg, var(--dorado-dark), var(--dorado)); }
.tarjeta-tope.sensible { background: linear-gradient(90deg, var(--ambar), #e09030); }
.tarjeta-tope.crisis { background: linear-gradient(90deg, var(--rojo), var(--rojo-suave)); }

.tarjeta-cuerpo {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.tarjeta-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
}
.tag {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 3px 8px;
  border-radius: 4px;
}
.tag-categoria {
  background: rgba(201,168,76,0.12);
  color: var(--dorado);
  border: 1px solid rgba(201,168,76,0.25);
}
.tag-tipo-crudo { background: rgba(139,43,43,0.15); color: #c07070; border: 1px solid rgba(139,43,43,0.3); }
.tag-tipo-inspirador { background: rgba(90,122,90,0.15); color: #80b080; border: 1px solid rgba(90,122,90,0.3); }
.tag-tipo-didactico { background: rgba(106,122,138,0.15); color: #8090a0; border: 1px solid rgba(106,122,138,0.3); }
.tag-base { background: rgba(201,168,76,0.2); color: var(--dorado-pale); border: 1px solid rgba(201,168,76,0.4); }
.tag-estado-completo { background: rgba(45,90,58,0.2); color: #70b080; border: 1px solid rgba(45,90,58,0.4); }
.tag-estado-falta { background: rgba(139,43,43,0.15); color: #c07070; border: 1px solid rgba(139,43,43,0.3); }
.tag-estado-revision { background: rgba(160,120,30,0.2); color: var(--dorado-suave); border: 1px solid rgba(160,120,30,0.4); }
.tag-sensible { background: rgba(192,123,42,0.15); color: var(--ambar); border: 1px solid rgba(192,123,42,0.3); }
.tag-crisis { background: rgba(139,43,43,0.2); color: var(--rojo-suave); border: 1px solid rgba(139,43,43,0.4); }

.tarjeta-titulo {
  font-family: var(--fuente-titulo);
  font-size: 20px;
  font-weight: 500;
  color: var(--blanco);
  line-height: 1.3;
  margin-bottom: 10px;
}
.tarjeta-ancla {
  font-family: var(--fuente-titulo);
  font-size: 14px;
  font-style: italic;
  color: var(--dorado-suave);
  margin-bottom: 14px;
  padding-left: 12px;
  border-left: 2px solid var(--dorado-dark);
  line-height: 1.5;
}
.tarjeta-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
  padding-top: 16px;
}
.meta-item {
  font-size: 12px;
  color: var(--gris-claro);
  display: flex;
  align-items: center;
  gap: 4px;
}
.meta-dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--gris-medio);
}
.tarjeta-pie {
  padding: 12px 20px;
  border-top: 1px solid var(--gris-oscuro);
  display: flex;
  gap: 10px;
}
.btn-ver {
  flex: 1;
  padding: 9px;
  font-size: 13px;
  font-weight: 600;
  background: var(--gris-oscuro);
  color: var(--blanco);
  border-radius: var(--radio);
  text-align: center;
  transition: all var(--transicion);
}
.btn-ver:hover { background: var(--dorado); color: var(--negro); }
.btn-copiar-rapido {
  padding: 9px 14px;
  font-size: 13px;
  background: transparent;
  color: var(--gris-claro);
  border: 1px solid var(--gris-oscuro);
  border-radius: var(--radio);
  transition: all var(--transicion);
}
.btn-copiar-rapido:hover { color: var(--dorado); border-color: var(--dorado); }

/* â”€â”€ SIN RESULTADOS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
.sin-resultados {
  text-align: center;
  padding: 80px 0;
  color: var(--gris-texto);
}
.sin-resultados p { margin-bottom: 20px; font-size: 16px; }

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   MODAL
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.8);
  z-index: 200;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 24px;
  overflow-y: auto;
}
.modal {
  background: var(--negro-suave);
  border: 1px solid var(--gris-oscuro);
  border-radius: var(--radio-grande);
  width: 100%;
  max-width: 780px;
  margin: auto;
  position: relative;
  overflow: hidden;
}
.modal-cerrar {
  position: absolute;
  top: 16px; right: 16px;
  z-index: 10;
  width: 36px;
  height: 36px;
  background: var(--gris-oscuro);
  border-radius: 50%;
  font-size: 15px;
  color: var(--gris-texto);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transicion);
}
.modal-cerrar:hover { background: var(--rojo); color: var(--blanco); }

.modal-contenido {
  padding: 48px 40px 32px;
}

/* SECCIONES DEL MODAL */
.ficha-tope {
  height: 6px;
  margin: -48px -40px 32px;
}
.ficha-tope.normal { background: linear-gradient(90deg, var(--dorado-dark), var(--dorado)); }
.ficha-tope.sensible { background: linear-gradient(90deg, var(--ambar), #e09030); }
.ficha-tope.crisis { background: linear-gradient(90deg, var(--rojo-dark, #6b1a1a), var(--rojo)); }

.ficha-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 20px;
}
.ficha-titulo {
  font-family: var(--fuente-titulo);
  font-size: 34px;
  font-weight: 500;
  color: var(--blanco);
  line-height: 1.2;
  margin-bottom: 16px;
}
.ficha-ancla {
  font-family: var(--fuente-titulo);
  font-size: 18px;
  font-style: italic;
  color: var(--dorado-suave);
  padding: 12px 20px;
  border-left: 3px solid var(--dorado);
  background: rgba(201,168,76,0.05);
  border-radius: 0 var(--radio) var(--radio) 0;
  margin-bottom: 28px;
}
.ficha-alerta {
  padding: 12px 16px;
  background: rgba(139,43,43,0.15);
  border: 1px solid rgba(139,43,43,0.4);
  border-radius: var(--radio);
  margin-bottom: 24px;
  font-size: 14px;
  color: #d08080;
}
.ficha-alerta::before { content: 'âš  '; }

.ficha-seccion {
  margin-bottom: 28px;
}
.ficha-seccion-titulo {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--dorado);
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(201,168,76,0.15);
}
.ficha-texto {
  font-size: 15px;
  color: var(--blanco-frio);
  line-height: 1.7;
}
.ficha-fuente {
  font-size: 14px;
  color: var(--gris-texto);
  padding: 6px 0;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}
.ficha-fuente:last-child { border-bottom: none; }
.ficha-fuente-titulo { font-weight: 600; color: var(--blanco-frio); }

/* PREGUNTAS GUÃA - TRES TIEMPOS */
.guia-bloque {
  border-radius: var(--radio);
  overflow: hidden;
  margin-bottom: 12px;
}
.guia-header {
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}
.guia-tiempo-1 .guia-header { background: rgba(201,168,76,0.12); }
.guia-tiempo-2 .guia-header { background: rgba(106,122,138,0.12); }
.guia-tiempo-3 .guia-header { background: rgba(90,122,90,0.12); }
.guia-num {
  font-family: var(--fuente-titulo);
  font-size: 24px;
  font-weight: 700;
}
.guia-tiempo-1 .guia-num { color: var(--dorado); }
.guia-tiempo-2 .guia-num { color: #6a8aaa; }
.guia-tiempo-3 .guia-num { color: #5a8a5a; }
.guia-etiqueta {
  flex: 1;
}
.guia-etiqueta-titulo {
  font-size: 14px;
  font-weight: 600;
  color: var(--blanco);
  display: block;
}
.guia-etiqueta-sub {
  font-size: 12px;
  font-style: italic;
}
.guia-tiempo-1 .guia-etiqueta-sub { color: var(--dorado-suave); }
.guia-tiempo-2 .guia-etiqueta-sub { color: #6a8aaa; }
.guia-tiempo-3 .guia-etiqueta-sub { color: #5a8a5a; }
.guia-preguntas {
  padding: 16px;
  background: rgba(255,255,255,0.02);
}
.guia-pregunta {
  font-size: 14px;
  color: var(--blanco-frio);
  padding: 8px 0;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  line-height: 1.6;
}
.guia-pregunta:last-child { border-bottom: none; padding-bottom: 0; }

/* MODAL EXPORTAR */
.modal-exportar {
  padding: 20px 40px 28px;
  border-top: 1px solid var(--gris-oscuro);
  background: rgba(0,0,0,0.2);
}
.exportar-label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--gris-claro);
  margin-bottom: 12px;
}
.exportar-botones {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.btn-exportar {
  padding: 9px 16px;
  font-size: 13px;
  background: var(--gris-oscuro);
  color: var(--gris-texto);
  border: 1px solid transparent;
  border-radius: var(--radio);
  transition: all var(--transicion);
}
.btn-exportar:hover {
  background: var(--carbon);
  color: var(--dorado);
  border-color: var(--dorado-dark);
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   EDITOR MODAL
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
.editor-modal {
  max-width: 700px;
}
.editor-contenido {
  padding: 40px;
  max-height: 85vh;
  overflow-y: auto;
}
.editor-titulo {
  font-family: var(--fuente-titulo);
  font-size: 28px;
  font-weight: 500;
  color: var(--blanco);
  margin-bottom: 8px;
}
.editor-desc {
  font-size: 14px;
  color: var(--gris-texto);
  margin-bottom: 28px;
}
.editor-desc code {
  background: var(--gris-oscuro);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 13px;
  color: var(--dorado-suave);
}
.editor-form { display: flex; flex-direction: column; gap: 16px; margin-bottom: 24px; }
.editor-campo { display: flex; flex-direction: column; gap: 6px; }
.editor-campo label {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--gris-claro);
}
.editor-campo input, .editor-campo textarea, .editor-campo select {
  padding: 10px 14px;
  background: var(--gris-oscuro);
  border: 1px solid transparent;
  border-radius: var(--radio);
  color: var(--blanco);
  font-size: 14px;
  outline: none;
  transition: border-color var(--transicion);
  resize: vertical;
}
.editor-campo input:focus, .editor-campo textarea:focus, .editor-campo select:focus {
  border-color: var(--dorado);
}
.editor-fila { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.editor-acciones { margin-bottom: 24px; }
.editor-resultado {
  background: var(--negro);
  border: 1px solid var(--gris-oscuro);
  border-radius: var(--radio);
  padding: 20px;
}
.editor-resultado-label {
  font-size: 12px;
  color: var(--gris-texto);
  margin-bottom: 12px;
}
.editor-resultado pre {
  font-size: 12px;
  color: var(--dorado-suave);
  overflow-x: auto;
  max-height: 300px;
  overflow-y: auto;
  white-space: pre-wrap;
  word-break: break-word;
  margin-bottom: 12px;
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   TOAST
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
.toast {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%) translateY(80px);
  background: var(--carbon);
  border: 1px solid var(--dorado-dark);
  color: var(--blanco);
  padding: 12px 24px;
  border-radius: var(--radio);
  font-size: 14px;
  z-index: 500;
  transition: transform 0.3s ease;
  pointer-events: none;
  white-space: nowrap;
}
.toast.visible {
  transform: translateX(-50%) translateY(0);
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   RESPONSIVE
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
@media (max-width: 768px) {
  .nav { padding: 12px 20px; }
  .nav-nombre { display: none; }
  .nav-links a { display: none; }

  .hero { padding: 100px 20px 60px; }
  .hero-stats { gap: 24px; flex-wrap: wrap; justify-content: center; }
  .hero-acciones { flex-direction: column; align-items: center; }
  .btn-primario, .btn-secundario { width: 100%; text-align: center; }

  .tiempos-grid {
    flex-direction: column;
  }
  .tiempo-conector {
    transform: rotate(90deg);
    padding: 0;
    justify-content: center;
    margin: -16px 0;
    font-size: 20px;
  }

  .tarjetas-grid { grid-template-columns: 1fr; }

  .modal-contenido { padding: 32px 20px 24px; }
  .modal-exportar { padding: 16px 20px 20px; }
  .ficha-tope { margin: -32px -20px 24px; }
  .ficha-titulo { font-size: 26px; }
  .exportar-botones { gap: 8px; }
  .btn-exportar { font-size: 12px; padding: 8px 12px; }

  .editor-contenido { padding: 28px 20px; }
  .editor-fila { grid-template-columns: 1fr; }

  .modos-grid { grid-template-columns: 1fr; }
  .filtros-grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 480px) {
  .filtros-grid { grid-template-columns: 1fr; }
  .tarjetas-header { flex-direction: column; align-items: flex-start; }
  .principio-item { font-size: 16px; }
  .hero-titulo { font-size: 42px; }
}

/* â”€â”€ ANIMACIONES ENTRADA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
.tarjeta {
  animation: fadeInUp 0.4s ease both;
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Delay escalonado para tarjetas */
.tarjeta:nth-child(1)  { animation-delay: 0.00s; }
.tarjeta:nth-child(2)  { animation-delay: 0.04s; }
.tarjeta:nth-child(3)  { animation-delay: 0.08s; }
.tarjeta:nth-child(4)  { animation-delay: 0.12s; }
.tarjeta:nth-child(5)  { animation-delay: 0.16s; }
.tarjeta:nth-child(6)  { animation-delay: 0.20s; }
.tarjeta:nth-child(7)  { animation-delay: 0.24s; }
.tarjeta:nth-child(8)  { animation-delay: 0.28s; }
.tarjeta:nth-child(9)  { animation-delay: 0.32s; }
.tarjeta:nth-child(n+10) { animation-delay: 0.36s; }

/* â”€â”€ PRINT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
@media print {
  .nav, .hero, .modos, .tres-tiempos, .buscador-wrap,
  .tarjetas-header, .tarjetas-grid, .modal-overlay:not(.printing),
  .modal-cerrar, .modal-exportar, .toast { display: none !important; }
  .modal-overlay.printing {
    position: static;
    background: white;
    padding: 0;
  }
  .modal {
    border: none;
    max-width: 100%;
    background: white;
  }
  .modal-contenido { padding: 0; color: black; }
  .ficha-titulo, .ficha-texto, .guia-pregunta { color: black !important; }
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   IMPORTADOR DE BASES
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
.btn-importador {
  font-size: 13px;
  padding: 8px 16px;
  border: 1px solid rgba(90,122,90,0.5);
  border-radius: var(--radio);
  color: #80b080;
  background: rgba(90,122,90,0.08);
  transition: all var(--transicion);
}
.btn-importador:hover {
  background: rgba(90,122,90,0.2);
  border-color: #80b080;
  color: #a0d0a0;
}

.importador-modal {
  max-width: 760px;
}
.importador-contenido {
  padding: 40px;
  max-height: 88vh;
  overflow-y: auto;
}

.imp-paso { }
.imp-header {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  margin-bottom: 28px;
}
.imp-num {
  font-family: var(--fuente-titulo);
  font-size: 52px;
  font-weight: 700;
  color: var(--dorado);
  opacity: 0.3;
  line-height: 1;
  flex-shrink: 0;
}
.imp-titulo {
  font-family: var(--fuente-titulo);
  font-size: 26px;
  font-weight: 500;
  color: var(--blanco);
  margin-bottom: 6px;
}
.imp-desc {
  font-size: 14px;
  color: var(--gris-texto);
  line-height: 1.6;
}
.imp-desc code {
  background: var(--gris-oscuro);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 12px;
  color: var(--dorado-suave);
}

.imp-instrucciones {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 28px;
}
.imp-paso-mini {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 12px 14px;
  background: var(--carbon);
  border-radius: var(--radio);
  border: 1px solid var(--gris-oscuro);
}
.imp-mini-num {
  font-family: var(--fuente-titulo);
  font-size: 18px;
  font-weight: 700;
  color: var(--dorado);
  flex-shrink: 0;
  line-height: 1.4;
}
.imp-paso-mini p {
  font-size: 13px;
  color: var(--gris-texto);
  line-height: 1.5;
}
.imp-paso-mini p code {
  background: var(--gris-oscuro);
  padding: 1px 5px;
  border-radius: 3px;
  font-size: 11px;
  color: var(--dorado-suave);
}

.imp-campo { margin-bottom: 20px; }
.imp-label {
  display: block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--gris-claro);
  margin-bottom: 8px;
}
.imp-textarea {
  width: 100%;
  padding: 14px 16px;
  background: var(--negro);
  border: 1px solid var(--gris-oscuro);
  border-radius: var(--radio);
  color: var(--blanco);
  font-size: 13px;
  font-family: 'Courier New', monospace;
  line-height: 1.6;
  outline: none;
  resize: vertical;
  transition: border-color var(--transicion);
}
.imp-textarea:focus { border-color: var(--dorado); }
.imp-textarea::placeholder { color: var(--gris-medio); font-family: var(--fuente-texto); font-size: 13px; }
.imp-hint {
  font-size: 12px;
  color: var(--gris-medio);
  margin-top: 6px;
}

.imp-acciones {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 24px;
}

.imp-error {
  margin-top: 16px;
  padding: 14px 16px;
  background: rgba(139,43,43,0.15);
  border: 1px solid rgba(139,43,43,0.4);
  border-radius: var(--radio);
  font-size: 13px;
  color: #d08080;
  line-height: 1.6;
}
.imp-error code {
  background: rgba(0,0,0,0.3);
  padding: 1px 5px;
  border-radius: 3px;
}

/* Resumen de validaciÃ³n */
.imp-resumen {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 12px;
  margin-bottom: 24px;
  padding: 20px;
  background: var(--carbon);
  border-radius: var(--radio);
  border: 1px solid var(--gris-oscuro);
}
.imp-stat {
  text-align: center;
}
.imp-stat-num {
  display: block;
  font-family: var(--fuente-titulo);
  font-size: 32px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 4px;
}
.imp-stat-num.ok { color: #70b080; }
.imp-stat-num.warn { color: var(--dorado); }
.imp-stat-num.err { color: #d08080; }
.imp-stat-num.total { color: var(--blanco); }
.imp-stat-label {
  font-size: 11px;
  color: var(--gris-claro);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

/* Lista de temas en previsualizaciÃ³n */
.imp-lista-temas {
  max-height: 280px;
  overflow-y: auto;
  border: 1px solid var(--gris-oscuro);
  border-radius: var(--radio);
  margin-bottom: 16px;
}
.imp-tema-fila {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  border-bottom: 1px solid rgba(255,255,255,0.04);
  font-size: 13px;
}
.imp-tema-fila:last-child { border-bottom: none; }
.imp-tema-fila:hover { background: rgba(255,255,255,0.02); }
.imp-tema-id {
  font-family: monospace;
  font-size: 11px;
  color: var(--gris-claro);
  flex-shrink: 0;
  width: 80px;
}
.imp-tema-titulo {
  flex: 1;
  color: var(--blanco-frio);
}
.imp-tema-estado {
  flex-shrink: 0;
  font-size: 10px;
  font-weight: 700;
  padding: 2px 7px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.imp-tema-estado.completo { background: rgba(45,90,58,0.3); color: #70b080; }
.imp-tema-estado.incompleto { background: rgba(139,43,43,0.2); color: #d08080; }
.imp-tema-estado.revision { background: rgba(160,120,30,0.2); color: var(--dorado-suave); }
.imp-tema-issues {
  font-size: 11px;
  color: var(--gris-claro);
  flex-shrink: 0;
}

.imp-advertencia {
  padding: 12px 16px;
  background: rgba(192,123,42,0.1);
  border: 1px solid rgba(192,123,42,0.3);
  border-radius: var(--radio);
  font-size: 13px;
  color: var(--dorado-suave);
  margin-bottom: 8px;
}

/* Resultado final */
.imp-resultado {
  padding: 24px;
  background: rgba(45,90,58,0.1);
  border: 1px solid rgba(45,90,58,0.3);
  border-radius: var(--radio);
  margin-bottom: 28px;
}
.imp-resultado-titulo {
  font-family: var(--fuente-titulo);
  font-size: 22px;
  color: #80c080;
  margin-bottom: 12px;
}
.imp-resultado p {
  font-size: 14px;
  color: var(--gris-texto);
  line-height: 1.7;
}
.imp-resultado strong { color: var(--blanco-frio); }

.imp-pasos-netlify {
  margin-bottom: 24px;
}
.imp-link {
  color: var(--dorado-suave);
  text-decoration: underline;
  text-underline-offset: 3px;
}
.imp-link:hover { color: var(--dorado-pale); }

@media (max-width: 600px) {
  .importador-contenido { padding: 24px 16px; }
  .imp-instrucciones { grid-template-columns: 1fr; }
  .imp-header { gap: 12px; }
  .imp-num { font-size: 36px; }
}
