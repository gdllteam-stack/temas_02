/* ══════════════════════════════════════════════════════════
   BIBLIOTECA DE TESTIMONIOS FGDLL — app.js
   Arquitectura: filtros dinámicos, modal, exportaciones
══════════════════════════════════════════════════════════ */

'use strict';

// ── ESTADO GLOBAL ─────────────────────────────────────────
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

// ── UTILIDADES ────────────────────────────────────────────
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
  if (estado === 'Revisión') return 'tag-estado-revision';
  return 'tag-estado-falta';
}

function getTagClaseTipo(tipo) {
  const t = normalizar(tipo);
  if (t === 'crudo') return 'tag-tipo-crudo';
  if (t === 'inspirador') return 'tag-tipo-inspirador';
  if (t === 'didactico') return 'tag-tipo-didactico';
  return '';
}

// ── FILTROS DINÁMICOS DESDE DATOS ─────────────────────────
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

// ── LÓGICA DE FILTRADO ─────────────────────────────────────
function filtrarTemas() {
  const f = Estado.filtros;
  const txt = normalizar(f.texto);

  return TEMAS.filter(t => {
    // Búsqueda de texto
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

// ── RENDERIZADO DE TARJETAS ────────────────────────────────
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
      <button class="btn-copiar-rapido" data-id="${tema.id}" title="Copiar preguntas guía">📋</button>
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
    mostrarToast('Preguntas copiadas ✓');
  });

  return div;
}

// ── MODAL ─────────────────────────────────────────────────
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
  if (tema.esCatalogoBase) tagsHtml += `<span class="tag tag-base">Catálogo base</span>`;
  if (tema.tipoTestimonio) tagsHtml += `<span class="tag ${tipoClase}">${tema.tipoTestimonio}</span>`;
  if (tema.sensibilidad !== 'normal') tagsHtml += `<span class="tag tag-${tema.sensibilidad}">${tema.sensibilidad === 'crisis' ? '⚠ Crisis' : 'Sensible'}</span>`;
  tagsHtml += `<span class="tag ${estadoClase}">${tema.estado}</span>`;

  // Alerta para sensibles/crisis
  let alertaHtml = '';
  if (tema.sensibilidad === 'crisis') {
    alertaHtml = `<div class="ficha-alerta"><strong>Tema de crisis:</strong> Este tema requiere acompañamiento especializado. No use en grupos sin apoyo de un servidor preparado. Si un participante está en crisis activa, priorice la contención y los recursos de salud mental.</div>`;
  } else if (tema.sensibilidad === 'sensible') {
    alertaHtml = `<div class="ficha-alerta"><strong>Tema sensible:</strong> Oriente este tema hacia verdad, responsabilidad y libertad emocional. No use para juzgar, confrontar o forzar perdón.</div>`;
  }

  // Fuente de estudio
  let fuenteHtml = '';
  if (tema.fuenteAA || tema.referencia) {
    fuenteHtml = `
      <div class="ficha-seccion">
        <p class="ficha-seccion-titulo">Base de estudio — Literatura AA</p>
        ${tema.fuenteAA ? `<p class="ficha-fuente"><span class="ficha-fuente-titulo">${tema.fuenteAA}</span></p>` : ''}
        ${tema.referencia ? `<p class="ficha-fuente">${tema.referencia}</p>` : ''}
      </div>
    `;
  }

  // Notas para el líder
  let notasHtml = '';
  if (tema.notasInternas) {
    notasHtml = `
      <div class="ficha-seccion">
        <p class="ficha-seccion-titulo">Nota para el líder</p>
        <p class="ficha-texto">${tema.notasInternas}</p>
      </div>
    `;
  }

  // Qué debe contar
  let queContarHtml = '';
  if (tema.queDbeContar) {
    queContarHtml = `
      <div class="ficha-seccion">
        <p class="ficha-seccion-titulo">Qué debe incluir el testimonio</p>
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

  // Guía de testimonio — tres tiempos
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
      <p class="ficha-seccion-titulo">Preguntas guía para preparar el testimonio</p>
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
        ID: ${tema.id} · Prioridad: ${tema.prioridad} · 
        Formato: ${tema.formato || 'No especificado'} · 
        Momento: ${tema.momento || 'Flexible'}
      </p>
    </div>
  `;
}

// ── EXPORTACIONES ─────────────────────────────────────────
function copiarPreguntas(tema) {
  const g = tema.guiaTestimonio || {};
  const partes = [];

  if (g.detectar?.length) {
    partes.push('ANTES DEL PROGRAMA — DETECTAR');
    g.detectar.forEach(q => partes.push(q));
    partes.push('');
  }
  if (g.admitir?.length) {
    partes.push('AL LLEGAR A GUERREROS DE LA LUZ — ADMITIR');
    g.admitir.forEach(q => partes.push(q));
    partes.push('');
  }
  if (g.corregir?.length) {
    partes.push('AHORA CON EL PROGRAMA — APRENDER A CORREGIR');
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
    ...(g.detectar || []).map(q => `• ${q}`),
    '',
    `*Admitir (al llegar a Guerreros):*`,
    ...(g.admitir || []).map(q => `• ${q}`),
    '',
    `*Aprender a corregir (hoy):*`,
    ...(g.corregir || []).map(q => `• ${q}`),
    '',
    `_Fuente: ${tema.fuenteAA || 'FGDLL'}_`,
    `_Biblioteca de Testimonios FGDLL_`,
  ];
  navigator.clipboard.writeText(lineas.join('\n'));
  mostrarToast('Copiado para WhatsApp ✓');
}

function descargarTxt(tema) {
  const g = tema.guiaTestimonio || {};
  const lineas = [
    '═══════════════════════════════════════════',
    `BIBLIOTECA DE TESTIMONIOS FGDLL`,
    '═══════════════════════════════════════════',
    '',
    `TEMA: ${tema.titulo}`,
    `CATEGORÍA: ${tema.categoria}`,
    `TIPO: ${tema.tipoTestimonio}`,
    `INTENSIDAD: ${tema.intensidad}`,
    `ESTADO: ${tema.estado}`,
    '',
    '───────────────────────────────────────────',
    'FRASE ANCLA',
    '───────────────────────────────────────────',
    `"${tema.fraseAncla || 'Sin frase ancla'}"`,
    '',
    '───────────────────────────────────────────',
    'OBJETIVO DEL TESTIMONIO',
    '───────────────────────────────────────────',
    tema.objetivo || 'Sin objetivo definido',
    '',
    '───────────────────────────────────────────',
    'FUENTE DE ESTUDIO',
    '───────────────────────────────────────────',
    tema.fuenteAA || 'FGDLL / Guía de Apadrinamiento',
    tema.referencia || '',
    '',
    '───────────────────────────────────────────',
    'PREGUNTAS GUÍA — LOS TRES TIEMPOS',
    '───────────────────────────────────────────',
    '',
    '[ 01 ] ANTES DEL PROGRAMA — DETECTAR',
    ...(g.detectar || []).map(q => `   ${q}`),
    '',
    '[ 02 ] AL LLEGAR A GUERREROS DE LA LUZ — ADMITIR',
    ...(g.admitir || []).map(q => `   ${q}`),
    '',
    '[ 03 ] AHORA CON EL PROGRAMA — APRENDER A CORREGIR',
    ...(g.corregir || []).map(q => `   ${q}`),
    '',
    '───────────────────────────────────────────',
    'QUÉ DEBE INCLUIR EL TESTIMONIO',
    '───────────────────────────────────────────',
    tema.queDbeContar || '—',
    '',
    '───────────────────────────────────────────',
    'NOTA PARA EL LÍDER',
    '───────────────────────────────────────────',
    tema.notasInternas || '—',
    '',
    '═══════════════════════════════════════════',
    'Biblioteca de Testimonios — Fraternidad Guerreros de la Luz',
    `El testimonio no es catarsis desordenada,`,
    `sino experiencia ordenada por la literatura,`,
    `la conciencia y el servicio.`,
    '═══════════════════════════════════════════',
  ];

  const blob = new Blob([lineas.join('\n')], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `FGDLL-${tema.id}-${tema.titulo.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ0-9]/g, '_').slice(0, 40)}.txt`;
  a.click();
  URL.revokeObjectURL(url);
  mostrarToast('Archivo descargado ✓');
}

function imprimirFicha(tema) {
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.add('printing');
  window.print();
  overlay.classList.remove('printing');
}

// ── MODOS DE USO ─────────────────────────────────────────
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

// ── RESET ─────────────────────────────────────────────────
function resetFiltros(render = true) {
  Object.keys(Estado.filtros).forEach(k => Estado.filtros[k] = '');
  ['filtroCategoria','filtroTipo','filtroIntensidad','filtroMomento',
   'filtroFuente','filtroEstado','filtroCatalogo','filtroSensibilidad']
    .forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
  const buscador = document.getElementById('buscador');
  if (buscador) { buscador.value = ''; Estado.filtros.texto = ''; }
  if (render) renderTarjetas();
}

// ── EDITOR JSON ────────────────────────────────────────────
function generarJSONNuevoTema() {
  const val = id => document.getElementById(id)?.value?.trim() || '';
  const textarea = id => {
    const txt = val(id);
    return txt ? txt.split('\n').filter(l => l.trim()).map(l => l.trim()) : [];
  };

  const titulo = val('edTitulo');
  if (!titulo) { mostrarToast('Agrega un título'); return; }

  const nuevoId = `tema-${String(Date.now()).slice(-6)}`;
  const obj = {
    id: nuevoId,
    titulo,
    tituloCorto: '',
    categoria: val('edCategoria'),
    estado: val('edFuenteAA') && val('edAncla') ? 'Completo' : 'Revisión',
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

// ── INICIALIZACIÓN ─────────────────────────────────────────
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
    mostrarToast('Preguntas copiadas ✓');
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
      mostrarToast('JSON copiado ✓');
    }
  });
}

// Arrancar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', init);

/* ══════════════════════════════════════════════════════════
   IMPORTADOR DE BASES DE TEMAS
   Flujo: pegar JSON → validar → previsualizar → fusionar → descargar
══════════════════════════════════════════════════════════ */

const Importador = {
  temasNuevos: [],      // los temas parseados del JSON pegado
  temasValidados: [],   // con metadatos de validación
};

// ── Abrir / cerrar ─────────────────────────────────────────
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

// ── Limpiar formato markdown del JSON ─────────────────────
function limpiarJSON(raw) {
  let txt = raw.trim();
  // Quitar bloques de código markdown ```json ... ``` o ``` ... ```
  txt = txt.replace(/^
http://googleusercontent.com/immersive_entry_chip/0
