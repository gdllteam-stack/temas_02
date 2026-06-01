/* ==========================================================================
   BIBLIOTECA DE TESTIMONIOS FGDLL — app.js
   Lógica Vanilla JS | Mobile First | Buscador | Filtros por Etiquetas
========================================================================== */

'use strict';

// ── FUENTE DE DATOS ───────────────────────────────────────
// Usa CATALOGO_COMPLETO si existe, si no usa TEMAS directamente
const SOURCE = (typeof CATALOGO_COMPLETO !== 'undefined') ? CATALOGO_COMPLETO : TEMAS;

// ── ETIQUETAS DE CRISIS (determinan barra roja y alerta) ──
const ETIQUETAS_CRISIS = new Set([
  'suicidio', 'ideacion-suicida', 'violencia', 'abuso-activo',
  'abuso-infantil', 'crisis-emocional', 'autolesión'
]);
const ETIQUETAS_SENSIBLE = new Set([
  'abuso', 'duelo', 'abandono', 'violencia-domestica', 'lgbtq+',
  'dependencia-emocional', 'codependencia', 'infancia'
]);

function nivelAlerta(tema) {
  const tags = tema.etiquetas || [];
  if (tags.some(t => ETIQUETAS_CRISIS.has(t))) return 'crisis';
  if (tags.some(t => ETIQUETAS_SENSIBLE.has(t))) return 'sensible';
  return 'normal';
}

// ── ESTADO GLOBAL ─────────────────────────────────────────
const Estado = {
  filtros: {
    texto: '',
    categoria: '',
    tipo: '',
    intensidad: '',
    momento: '',
    estado: '',
    etiqueta: ''
  },
  orden: 'prioridad',
  temaActivo: null
};

// ── UTILIDADES ────────────────────────────────────────────
function normalizar(str) {
  return (str || '').toString().toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '');
}

function mostrarToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('visible');
  setTimeout(() => toast.classList.remove('visible'), 2500);
}

// ── INICIALIZACIÓN DE FILTROS DESDE LOS DATOS ─────────────
function poblarSelectsDesdeData() {
  const categorias  = [...new Set(SOURCE.map(t => t.categoria).filter(Boolean))].sort();
  const tipos       = [...new Set(SOURCE.map(t => t.tipoTestimonio).filter(Boolean))].sort();
  const intensidades = [...new Set(SOURCE.map(t => t.intensidad).filter(Boolean))].sort();
  const momentos    = [...new Set(SOURCE.map(t => t.momento).filter(Boolean))].sort();
  const etiquetas   = [...new Set(SOURCE.flatMap(t => t.etiquetas || []).filter(Boolean))].sort();

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
  llenar('filtroEtiqueta', etiquetas);

  // Contador total
  const el = document.getElementById('statTemas');
  if (el) el.textContent = SOURCE.length;
}

// ── LÓGICA DE FILTRADO Y ORDENAMIENTO ─────────────────────
function filtrarTemas() {
  const f = Estado.filtros;
  const txt = normalizar(f.texto);

  return SOURCE.filter(t => {
    // 1. Búsqueda por texto
    if (txt) {
      let textoFuente = '';
      if (Array.isArray(t.fuenteAA)) {
        textoFuente = t.fuenteAA.map(f => `${f.obra} ${f.referencia}`).join(' ');
      }
      const haystack = normalizar([
        t.titulo, t.categoria, t.fraseAncla, textoFuente,
        ...(t.etiquetas || []),
        ...(t.palabrasClave || []),
        ...(t.guiaTestimonio?.detectar || []),
        ...(t.guiaTestimonio?.admitir || []),
        ...(t.guiaTestimonio?.corregir || [])
      ].join(' '));
      if (!haystack.includes(txt)) return false;
    }

    // 2. Filtros exactos
    if (f.categoria && t.categoria !== f.categoria) return false;
    if (f.tipo && t.tipoTestimonio !== f.tipo) return false;
    if (f.intensidad && t.intensidad !== f.intensidad) return false;
    if (f.momento && t.momento !== f.momento) return false;
    if (f.estado && t.estado !== f.estado) return false;

    // 3. Filtro por etiqueta (OR — el tema tiene esa etiqueta)
    if (f.etiqueta && !(t.etiquetas || []).includes(f.etiqueta)) return false;

    return true;
  });
}

function ordenarTemas(temas) {
  const copia = [...temas];
  if (Estado.orden === 'titulo') {
    copia.sort((a, b) => a.titulo.localeCompare(b.titulo));
  } else if (Estado.orden === 'intensidad') {
    const peso = { 'Alta': 0, 'Media': 1, 'Baja': 2 };
    copia.sort((a, b) => (peso[a.intensidad] ?? 3) - (peso[b.intensidad] ?? 3));
  } else {
    copia.sort((a, b) => (a.prioridad || 99) - (b.prioridad || 99));
  }
  return copia;
}

// ── RENDERIZADO DE TARJETAS ───────────────────────────────
function renderTarjetas() {
  const grid   = document.getElementById('tarjetasGrid');
  const count  = document.getElementById('tarjetasCount');
  const sinRes = document.getElementById('sinResultados');
  const badge  = document.getElementById('filtrosBadge');

  const filtrados = filtrarTemas();
  const ordenados = ordenarTemas(filtrados);

  count.textContent = `${ordenados.length} tema${ordenados.length !== 1 ? 's' : ''}`;
  document.getElementById('filtrosResultado').textContent =
    filtrados.length < SOURCE.length
      ? `Mostrando ${filtrados.length} de ${SOURCE.length}`
      : '';

  const activos = Object.values(Estado.filtros).filter(v => v !== '').length;
  badge.style.display = activos > 0 ? 'flex' : 'none';
  badge.textContent = activos;

  grid.innerHTML = '';
  sinRes.style.display = ordenados.length === 0 ? 'block' : 'none';
  ordenados.forEach((tema, idx) => grid.appendChild(crearTarjeta(tema, idx)));
}

function crearTarjeta(tema, idx) {
  const div = document.createElement('article');
  div.className = 'tarjeta';
  div.style.animationDelay = Math.min(idx * 0.04, 0.4) + 's';

  const alerta = nivelAlerta(tema);

  // Badges de etiquetas (max 4 visible)
  const etiquetasVis = (tema.etiquetas || []).slice(0, 4);
  const esBadges = etiquetasVis.map(e => {
    const esCrisis = ETIQUETAS_CRISIS.has(e);
    const cls = esCrisis ? 'tag-crisis-etiq' : 'tag-etiqueta';
    return `<span class="tag ${cls}" data-etiqueta="${e}">${e}${esCrisis ? ' ⚠' : ''}</span>`;
  }).join('');

  const catBadge = `<span class="tag tag-categoria">${tema.categoria || 'General'}</span>`;

  div.innerHTML = `
    <div class="tarjeta-tope ${alerta}"></div>
    <div class="tarjeta-cuerpo">
      <div class="tarjeta-tags">${catBadge}${esBadges}</div>
      <h3 class="tarjeta-titulo">${tema.titulo}</h3>
      ${tema.fraseAncla ? `<p class="tarjeta-ancla">${tema.fraseAncla}</p>` : ''}
    </div>
    <div class="tarjeta-pie">
      <button class="btn-ver" data-id="${tema.id}">Ver ficha completa</button>
      <button class="btn-copiar-rapido" data-id="${tema.id}" title="Copiar Preguntas Guía">📋</button>
    </div>
  `;

  div.querySelector('.btn-ver').addEventListener('click', e => {
    e.stopPropagation();
    abrirModal(tema.id);
  });
  div.querySelector('.tarjeta-cuerpo').addEventListener('click', () => abrirModal(tema.id));
  div.querySelector('.btn-copiar-rapido').addEventListener('click', e => {
    e.stopPropagation();
    copiarPreguntas(tema);
    mostrarToast('Preguntas copiadas ✓');
  });

  // Etiquetas clickeables para filtrar
  div.querySelectorAll('[data-etiqueta]').forEach(badge => {
    badge.style.cursor = 'pointer';
    badge.addEventListener('click', e => {
      e.stopPropagation();
      const etiq = badge.dataset.etiqueta;
      Estado.filtros.etiqueta = etiq;
      const sel = document.getElementById('filtroEtiqueta');
      if (sel) sel.value = etiq;
      renderTarjetas();
      mostrarToast(`Filtrando por: ${etiq}`);
    });
  });

  return div;
}

// ── MODAL Y FICHAS ────────────────────────────────────────
function abrirModal(id) {
  const tema = SOURCE.find(t => t.id === id);
  if (!tema) return;
  Estado.temaActivo = tema;

  const contenido = document.getElementById('modalContenido');
  const alerta = nivelAlerta(tema);

  // Alerta ética
  let alertaHtml = '';
  if (alerta === 'crisis') {
    alertaHtml = `<div class="ficha-alerta">${tema.advertenciaEtica || 'TEMA DE CRISIS: Requiere acompañamiento profesional. No sustituye ayuda de emergencia.'}</div>`;
  } else if (alerta === 'sensible' && tema.advertenciaEtica) {
    alertaHtml = `<div class="ficha-alerta ficha-alerta-sensible">${tema.advertenciaEtica}</div>`;
  }

  // Etiquetas del tema en el modal
  const etiqHtml = (tema.etiquetas || []).map(e => {
    const esCrisis = ETIQUETAS_CRISIS.has(e);
    const cls = esCrisis ? 'tag-crisis-etiq' : 'tag-etiqueta';
    return `<span class="tag ${cls}">${e}${esCrisis ? ' ⚠' : ''}</span>`;
  }).join('');
  const fichaTagsHtml = `
    <div class="ficha-tags">
      <span class="tag tag-categoria">${tema.categoria || 'General'}</span>
      ${etiqHtml}
    </div>`;

  // Fuentes
  let fuenteHtml = '<p class="ficha-fuente">No especificada</p>';
  if (Array.isArray(tema.fuenteAA) && tema.fuenteAA.length > 0) {
    fuenteHtml = tema.fuenteAA.map(f =>
      `<p class="ficha-fuente"><span class="ficha-fuente-titulo">${f.obra}</span> — ${f.referencia}<br><em style="font-size:13px;color:var(--gris-texto);">${f.uso}</em></p>`
    ).join('');
  }
  if (Array.isArray(tema.fuenteFGDLL) && tema.fuenteFGDLL.length > 0) {
    fuenteHtml += tema.fuenteFGDLL.map(f =>
      `<p class="ficha-fuente"><span class="ficha-fuente-titulo">FGDLL — ${f.obra}</span>${f.seccion ? ` · ${f.seccion}` : ''}</p>`
    ).join('');
  }
  if (Array.isArray(tema.librosRecomendados) && tema.librosRecomendados.length > 0) {
    fuenteHtml += tema.librosRecomendados.map(l =>
      `<p class="ficha-fuente"><span class="ficha-fuente-titulo">${l.titulo}</span>${l.autor ? ` — ${l.autor}` : ''}${l.año ? ` (${l.año})` : ''}</p>`
    ).join('');
  }

  // Guía 3 tiempos
  const g = tema.guiaTestimonio || {};
  const bloqueGuia = (num, titulo, sub, preguntas) => {
    if (!preguntas || preguntas.length === 0) return '';
    return `
      <div class="guia-bloque guia-tiempo-${num}">
        <div class="guia-header">
          <span class="guia-num">0${num}</span>
          <div class="guia-etiqueta">
            <span class="guia-etiqueta-titulo">${titulo}</span>
            <span class="guia-etiqueta-sub">${sub}</span>
          </div>
        </div>
        <div class="guia-preguntas">
          ${preguntas.map(p => `<p class="guia-pregunta">${p}</p>`).join('')}
        </div>
      </div>`;
  };

  // Nota al líder y "no usar para"
  let liderHtml = '';
  if (tema.advertenciaLider) {
    liderHtml += `<p class="ficha-texto" style="margin-top:8px;color:var(--dorado-suave);font-size:14px;"><strong>Nota al líder:</strong> ${tema.advertenciaLider}</p>`;
  }
  if (Array.isArray(tema.noUsarPara) && tema.noUsarPara.length > 0) {
    liderHtml += `<p class="ficha-texto" style="margin-top:8px;font-size:13px;color:var(--gris-texto);">🚫 <strong>No usar para:</strong> ${tema.noUsarPara.join(' · ')}</p>`;
  }

  contenido.innerHTML = `
    <div class="ficha-tope ${alerta}"></div>
    ${fichaTagsHtml}
    <h2 class="ficha-titulo">${tema.titulo}</h2>
    ${tema.fraseAncla ? `<div class="ficha-ancla">"${tema.fraseAncla}"</div>` : ''}
    ${alertaHtml}

    <div class="ficha-seccion">
      <p class="ficha-seccion-titulo">Objetivo del Testimonio</p>
      <p class="ficha-texto">${tema.objetivo || 'Sin objetivo definido.'}</p>
    </div>

    <div class="ficha-seccion">
      <p class="ficha-seccion-titulo">Base de Estudio / Fuente Doctrinal</p>
      ${fuenteHtml}
      ${liderHtml}
    </div>

    <div class="ficha-seccion">
      <p class="ficha-seccion-titulo">Preguntas Guía (Los 3 Tiempos)</p>
      ${bloqueGuia(1, 'Antes del programa', 'Detectar', g.detectar)}
      ${bloqueGuia(2, 'Al llegar a Guerreros de la Luz', 'Admitir', g.admitir)}
      ${bloqueGuia(3, 'Ahora con el programa', 'Aprender a corregir', g.corregir)}
    </div>
  `;

  document.getElementById('modalOverlay').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function cerrarModal() {
  document.getElementById('modalOverlay').style.display = 'none';
  const panelFiltros = document.getElementById('filtrosPanel');
  if (!(window.innerWidth < 768 && panelFiltros && panelFiltros.classList.contains('visible'))) {
    document.body.style.overflow = '';
  }
  Estado.temaActivo = null;
}

// ── EXPORTACIONES ─────────────────────────────────────────
function copiarPreguntas(tema) {
  const g = tema.guiaTestimonio || {};
  const texto = [];
  if (g.detectar?.length) { texto.push('[01] DETECTAR - Antes del programa:'); g.detectar.forEach(q => texto.push(`• ${q}`)); texto.push(''); }
  if (g.admitir?.length)  { texto.push('[02] ADMITIR - Al llegar a FGDLL:'); g.admitir.forEach(q => texto.push(`• ${q}`)); texto.push(''); }
  if (g.corregir?.length) { texto.push('[03] CORREGIR - Aprendiendo hoy:'); g.corregir.forEach(q => texto.push(`• ${q}`)); }
  navigator.clipboard.writeText(texto.join('\n')).catch(() => {});
}

function copiarWhatsApp(tema) {
  const g = tema.guiaTestimonio || {};
  const lineas = [
    `*${tema.titulo}*`,
    `_${tema.fraseAncla || ''}_`, ``,
    `*1. Detectar:*`, ...(g.detectar || []).map(q => `> ${q}`), ``,
    `*2. Admitir:*`,  ...(g.admitir  || []).map(q => `> ${q}`), ``,
    `*3. Corregir:*`, ...(g.corregir || []).map(q => `> ${q}`), ``,
    `_Etiquetas: ${(tema.etiquetas || []).join(', ')}_`,
    `_Fraternidad Guerreros de la Luz_`
  ];
  navigator.clipboard.writeText(lineas.join('\n')).catch(() => {});
}

function descargarTxt(tema) {
  const contenido = [
    'BIBLIOTECA DE TESTIMONIOS FGDLL',
    '=========================================',
    `TEMA: ${tema.titulo}`,
    `FRASE: "${tema.fraseAncla}"`,
    `ETIQUETAS: ${(tema.etiquetas || []).join(', ')}`,
    '',
    `OBJETIVO: ${tema.objetivo}`,
    '',
    '=== PREGUNTAS GUÍA ===',
    '',
    '[01] DETECTAR:',
    ...(tema.guiaTestimonio?.detectar || []),
    '',
    '[02] ADMITIR:',
    ...(tema.guiaTestimonio?.admitir || []),
    '',
    '[03] CORREGIR:',
    ...(tema.guiaTestimonio?.corregir || []),
    '',
    '=========================================',
    'Detectar, Admitir y Aprender a Corregir.'
  ].join('\n');

  const blob = new Blob([contenido], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `FGDLL_${tema.id}.txt`;
  a.click();
  URL.revokeObjectURL(url);
}

// ── PANEL DE FILTROS ──────────────────────────────────────
function toggleFiltrosPanel() {
  const panel = document.getElementById('filtrosPanel');
  const btn   = document.getElementById('btnFiltrosToggle');
  const isVisible = panel.classList.contains('visible');
  if (isVisible) {
    panel.classList.remove('visible');
    btn.classList.remove('activo');
    document.body.style.overflow = '';
  } else {
    panel.classList.add('visible');
    btn.classList.add('activo');
    if (window.innerWidth < 768) document.body.style.overflow = 'hidden';
  }
}

function limpiarFiltros() {
  ['filtroCategoria', 'filtroTipo', 'filtroIntensidad', 'filtroMomento', 'filtroEstado', 'filtroEtiqueta'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  const buscador = document.getElementById('buscador');
  if (buscador) buscador.value = '';
  document.getElementById('btnLimpiar')?.classList.remove('visible');
  Object.keys(Estado.filtros).forEach(k => Estado.filtros[k] = '');
  renderTarjetas();
  if (window.innerWidth < 768 && document.getElementById('filtrosPanel')?.classList.contains('visible')) {
    toggleFiltrosPanel();
  }
}

// ── INICIALIZACIÓN ────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  poblarSelectsDesdeData();
  renderTarjetas();

  // Buscador
  const inputBuscar    = document.getElementById('buscador');
  const btnLimpiarText = document.getElementById('btnLimpiar');
  inputBuscar?.addEventListener('input', e => {
    Estado.filtros.texto = e.target.value;
    btnLimpiarText?.classList.toggle('visible', e.target.value.length > 0);
    renderTarjetas();
  });
  btnLimpiarText?.addEventListener('click', () => {
    inputBuscar.value = '';
    Estado.filtros.texto = '';
    btnLimpiarText.classList.remove('visible');
    renderTarjetas();
  });

  // Selects de filtros
  const mapFiltros = {
    filtroCategoria: 'categoria',
    filtroTipo:      'tipo',
    filtroIntensidad:'intensidad',
    filtroMomento:   'momento',
    filtroEstado:    'estado',
    filtroEtiqueta:  'etiqueta'
  };
  Object.entries(mapFiltros).forEach(([elId, stateKey]) => {
    document.getElementById(elId)?.addEventListener('change', e => {
      Estado.filtros[stateKey] = e.target.value;
      renderTarjetas();
    });
  });

  // Orden
  document.getElementById('ordenSelect')?.addEventListener('change', e => {
    Estado.orden = e.target.value;
    renderTarjetas();
  });

  // Panel filtros mobile
  document.getElementById('btnFiltrosToggle')?.addEventListener('click', toggleFiltrosPanel);
  document.getElementById('btnCerrarFiltrosMovil')?.addEventListener('click', toggleFiltrosPanel);
  document.getElementById('btnAplicarFiltrosMovil')?.addEventListener('click', toggleFiltrosPanel);
  document.getElementById('btnResetFiltros')?.addEventListener('click', limpiarFiltros);
  document.getElementById('btnResetSin')?.addEventListener('click', limpiarFiltros);

  // Modal
  document.getElementById('modalCerrar')?.addEventListener('click', cerrarModal);
  document.getElementById('modalOverlay')?.addEventListener('click', e => {
    if (e.target === e.currentTarget) cerrarModal();
  });

  // Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (document.getElementById('modalOverlay')?.style.display !== 'none') {
        cerrarModal();
      } else if (document.getElementById('filtrosPanel')?.classList.contains('visible') && window.innerWidth < 768) {
        toggleFiltrosPanel();
      }
    }
  });

  // Resize
  window.addEventListener('resize', () => {
    const panel = document.getElementById('filtrosPanel');
    if (panel?.classList.contains('visible')) {
      document.body.style.overflow = window.innerWidth >= 768 ? '' : 'hidden';
    }
  });

  // Botones de exportación en el modal
  document.getElementById('btnCopiarGuia')?.addEventListener('click', () => {
    copiarPreguntas(Estado.temaActivo);
    mostrarToast('Preguntas copiadas ✓');
  });
  document.getElementById('btnCopiarWA')?.addEventListener('click', () => {
    copiarWhatsApp(Estado.temaActivo);
    mostrarToast('Listo para WhatsApp ✓');
  });
  document.getElementById('btnDescargarTxt')?.addEventListener('click', () => {
    descargarTxt(Estado.temaActivo);
    mostrarToast('Archivo descargado ✓');
  });
  document.getElementById('btnImprimir')?.addEventListener('click', () => {
    window.print();
  });

  // Accesos rápidos en sección de Modos de Uso
  document.querySelectorAll('.modo-card[data-filtro]').forEach(btn => {
    btn.addEventListener('click', () => {
      try {
        limpiarFiltros();
        const config = JSON.parse(btn.dataset.filtro);
        Object.entries(config).forEach(([key, val]) => {
          if (key in Estado.filtros) {
            Estado.filtros[key] = val;
            const selectId = 'filtro' + key.charAt(0).toUpperCase() + key.slice(1);
            const sel = document.getElementById(selectId);
            if (sel) sel.value = val;
          }
        });
        renderTarjetas();
        document.getElementById('biblioteca')?.scrollIntoView({ behavior: 'smooth' });
      } catch (err) {
        console.error('Error aplicando filtro rápido', err);
      }
    });
  });
});
