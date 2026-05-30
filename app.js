/* ==========================================================================
   BIBLIOTECA DE TESTIMONIOS FGDLL — app.js
   Lógica Vanilla JS | Mobile First | Buscador | Filtros | Modal
========================================================================== */

'use strict';

// ── ESTADO GLOBAL ─────────────────────────────────────────
const Estado = {
  filtros: {
    texto: '',
    categoria: '',
    tipo: '',
    intensidad: '',
    momento: '',
    estado: '',
    sensibilidad: ''
  },
  orden: 'prioridad',
  temaActivo: null
};

// ── UTILIDADES ────────────────────────────────────────────
function normalizar(str) {
  return (str || '').toString().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function mostrarToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('visible');
  setTimeout(() => toast.classList.remove('visible'), 2500);
}

// ── INICIALIZACIÓN DE FILTROS DESDE LOS DATOS ─────────────
function poblarSelectsDesdeData() {
  // Extraer valores únicos de la base de datos
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

// ── LÓGICA DE FILTRADO Y ORDENAMIENTO ─────────────────────
function filtrarTemas() {
  const f = Estado.filtros;
  const txt = normalizar(f.texto);

  return TEMAS.filter(t => {
    // 1. Búsqueda por texto (Título, ancla, preguntas, categoría, fuente)
    if (txt) {
      let textoFuente = '';
      if (Array.isArray(t.fuenteAA)) {
        textoFuente = t.fuenteAA.map(f => `${f.obra} ${f.referencia}`).join(' ');
      }
      
      const haystack = normalizar([
        t.titulo, t.categoria, t.fraseAncla, t.paso, textoFuente,
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
    if (f.sensibilidad && t.sensibilidad !== f.sensibilidad) return false;

    return true;
  });
}

function ordenarTemas(temas) {
  const copia = [...temas];
  const orden = Estado.orden;

  if (orden === 'titulo') {
    copia.sort((a, b) => a.titulo.localeCompare(b.titulo));
  } else if (orden === 'intensidad') {
    const peso = { 'Alta': 0, 'Media': 1, 'Baja': 2 };
    copia.sort((a, b) => (peso[a.intensidad] ?? 3) - (peso[b.intensidad] ?? 3));
  } else {
    // Orden por prioridad (por defecto)
    copia.sort((a, b) => (a.prioridad || 99) - (b.prioridad || 99));
  }
  return copia;
}

// ── RENDERIZADO DE TARJETAS ───────────────────────────────
function renderTarjetas() {
  const grid = document.getElementById('tarjetasGrid');
  const count = document.getElementById('tarjetasCount');
  const sinRes = document.getElementById('sinResultados');
  const badge = document.getElementById('filtrosBadge');

  const filtrados = filtrarTemas();
  const ordenados = ordenarTemas(filtrados);

  // Actualizar contadores
  count.textContent = `${ordenados.length} tema${ordenados.length !== 1 ? 's' : ''}`;
  document.getElementById('filtrosResultado').textContent = 
    filtrados.length < TEMAS.length ? `Mostrando ${filtrados.length} de ${TEMAS.length}` : '';

  // Actualizar Badge de Filtros Activos
  const activos = Object.values(Estado.filtros).filter(v => v !== '').length;
  badge.style.display = activos > 0 ? 'flex' : 'none';
  badge.textContent = activos;

  grid.innerHTML = '';

  if (ordenados.length === 0) {
    sinRes.style.display = 'block';
    return;
  }
  sinRes.style.display = 'none';

  // Renderizar cada tarjeta
  ordenados.forEach((tema, idx) => {
    grid.appendChild(crearTarjeta(tema, idx));
  });
}

function crearTarjeta(tema, idx) {
  const div = document.createElement('article');
  div.className = 'tarjeta';
  div.style.animationDelay = Math.min(idx * 0.04, 0.4) + 's'; // Efecto cascada
  
  // Generar etiquetas (Tags)
  let tags = `<span class="tag tag-categoria">${tema.categoria || 'General'}</span>`;
  if (tema.esCatalogoBase) tags += `<span class="tag tag-base">Base</span>`;
  if (tema.sensibilidad === 'sensible') tags += `<span class="tag tag-sensible">Sensible</span>`;
  if (tema.sensibilidad === 'crisis') tags += `<span class="tag tag-crisis">Crisis</span>`;

  div.innerHTML = `
    <div class="tarjeta-tope ${tema.sensibilidad}"></div>
    <div class="tarjeta-cuerpo">
      <div class="tarjeta-tags">${tags}</div>
      <h3 class="tarjeta-titulo">${tema.titulo}</h3>
      ${tema.fraseAncla ? `<p class="tarjeta-ancla">${tema.fraseAncla}</p>` : ''}
    </div>
    <div class="tarjeta-pie">
      <button class="btn-ver" data-id="${tema.id}">Ver ficha completa</button>
      <button class="btn-copiar-rapido" data-id="${tema.id}" title="Copiar Preguntas Guía">📋</button>
    </div>
  `;

  // Eventos de la tarjeta
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

// ── MODAL Y FICHAS ────────────────────────────────────────
function abrirModal(id) {
  const tema = TEMAS.find(t => t.id === id);
  if (!tema) return;
  Estado.temaActivo = tema;

  const contenido = document.getElementById('modalContenido');
  
  // Alertas Éticas según sensibilidad
  let alerta = '';
  if (tema.sensibilidad === 'crisis') {
    alerta = `<div class="ficha-alerta"><strong>TEMA DE CRISIS:</strong> ${tema.advertenciaEtica || 'Requiere acompañamiento profesional. No sustituye ayuda psiquiátrica de emergencia.'}</div>`;
  } else if (tema.sensibilidad === 'sensible') {
    alerta = `<div class="ficha-alerta"><strong>TEMA SENSIBLE:</strong> ${tema.advertenciaEtica || 'Evite juicios hacia familiares o minorías. Conduzca hacia la responsabilidad propia y el respeto.'}</div>`;
  }

  // Parsear la fuente (puede ser array de objetos o string)
  let textoFuente = 'No especificada';
  if (Array.isArray(tema.fuenteAA) && tema.fuenteAA.length > 0) {
    textoFuente = `${tema.fuenteAA[0].obra} — ${tema.fuenteAA[0].referencia}`;
  } else if (typeof tema.fuenteAA === 'string') {
    textoFuente = tema.fuenteAA;
  }

  // Función auxiliar para renderizar los 3 tiempos
  const g = tema.guiaTestimonio || {};
  const bloqueGuia = (num, titulo, sub, preguntas) => {
    if (!preguntas || preguntas.length === 0) return '';
    const listaHtml = preguntas.map(p => `<p class="guia-pregunta">${p}</p>`).join('');
    return `
      <div class="guia-bloque guia-tiempo-${num}">
        <div class="guia-header">
          <span class="guia-num">0${num}</span>
          <div class="guia-etiqueta">
            <span class="guia-etiqueta-titulo">${titulo}</span>
            <span class="guia-etiqueta-sub">${sub}</span>
          </div>
        </div>
        <div class="guia-preguntas">${listaHtml}</div>
      </div>
    `;
  };

  contenido.innerHTML = `
    <div class="ficha-tope ${tema.sensibilidad}"></div>
    <h2 class="ficha-titulo">${tema.titulo}</h2>
    ${tema.fraseAncla ? `<div class="ficha-ancla">"${tema.fraseAncla}"</div>` : ''}
    ${alerta}
    
    <div class="ficha-seccion">
      <p class="ficha-seccion-titulo">Objetivo del Testimonio</p>
      <p class="ficha-texto">${tema.objetivo || 'Sin objetivo definido.'}</p>
    </div>

    <div class="ficha-seccion">
      <p class="ficha-seccion-titulo">Base de Estudio / Fuente Doctrinal</p>
      <p class="ficha-fuente"><span class="ficha-fuente-titulo">${tema.fuentePrincipal || 'AA'}</span>: ${textoFuente}</p>
      ${tema.advertenciaLider ? `<p class="ficha-texto" style="margin-top:8px; color:var(--dorado-suave); font-size:14px;"><strong>Nota al líder:</strong> ${tema.advertenciaLider}</p>` : ''}
    </div>

    <div class="ficha-seccion">
      <p class="ficha-seccion-titulo">Preguntas Guía (Los 3 Tiempos)</p>
      ${bloqueGuia(1, 'Antes del programa', 'Detectar', g.detectar)}
      ${bloqueGuia(2, 'Al llegar a Guerreros de la Luz', 'Admitir', g.admitir)}
      ${bloqueGuia(3, 'Ahora con el programa', 'Aprender a corregir', g.corregir)}
    </div>
  `;

  document.getElementById('modalOverlay').style.display = 'flex';
  document.body.style.overflow = 'hidden'; // Bloquear scroll de fondo
}

function cerrarModal() {
  document.getElementById('modalOverlay').style.display = 'none';
  // Solo restaurar el scroll del body si el panel de filtros NO está abierto en móvil
  const panelFiltros = document.getElementById('filtrosPanel');
  if (!(window.innerWidth < 768 && panelFiltros.classList.contains('visible'))) {
    document.body.style.overflow = ''; 
  }
  Estado.temaActivo = null;
}

// ── EXPORTACIONES ─────────────────────────────────────────
function copiarPreguntas(tema) {
  const g = tema.guiaTestimonio || {};
  const texto = [];
  
  if (g.detectar?.length) { texto.push('[01] DETECTAR - Antes del programa:'); g.detectar.forEach(q => texto.push(`• ${q}`)); texto.push(''); }
  if (g.admitir?.length) { texto.push('[02] ADMITIR - Al llegar a FGDLL:'); g.admitir.forEach(q => texto.push(`• ${q}`)); texto.push(''); }
  if (g.corregir?.length) { texto.push('[03] CORREGIR - Aprendiendo hoy:'); g.corregir.forEach(q => texto.push(`• ${q}`)); }
  
  navigator.clipboard.writeText(texto.join('\n'));
}

function copiarWhatsApp(tema) {
  const g = tema.guiaTestimonio || {};
  const lineas = [
    `*${tema.titulo}*`,
    `_${tema.fraseAncla || ''}_`,
    ``,
    `*1. Detectar:*`, ...(g.detectar || []).map(q => `> ${q}`), ``,
    `*2. Admitir:*`, ...(g.admitir || []).map(q => `> ${q}`), ``,
    `*3. Corregir:*`, ...(g.corregir || []).map(q => `> ${q}`), ``,
    `_Fuente: ${tema.fuentePrincipal}_`,
    `_Fraternidad Guerreros de la Luz_`
  ];
  navigator.clipboard.writeText(lineas.join('\n'));
}

function descargarTxt(tema) {
  const contenido = `BIBLIOTECA DE TESTIMONIOS FGDLL\n=========================================\n\nTEMA: ${tema.titulo}\nFRASE: "${tema.fraseAncla}"\n\nOBJETIVO: ${tema.objetivo}\n\n=== PREGUNTAS GUÍA ===\n\n[01] DETECTAR:\n${(tema.guiaTestimonio?.detectar||[]).join('\n')}\n\n[02] ADMITIR:\n${(tema.guiaTestimonio?.admitir||[]).join('\n')}\n\n[03] CORREGIR:\n${(tema.guiaTestimonio?.corregir||[]).join('\n')}\n\n=========================================\nDetectar, Admitir y Aprender a Corregir.`;
  
  const blob = new Blob([contenido], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `FGDLL_${tema.id}.txt`;
  a.click();
  URL.revokeObjectURL(url);
}

// ── CONTROL DEL PANEL DE FILTROS (MOBILE FIRST) ───────────
function toggleFiltrosPanel() {
  const panel = document.getElementById('filtrosPanel');
  const btn = document.getElementById('btnFiltrosToggle');
  const isVisible = panel.classList.contains('visible');

  if (isVisible) {
    panel.classList.remove('visible');
    btn.classList.remove('activo');
    document.body.style.overflow = ''; // Restaurar scroll
  } else {
    panel.classList.add('visible');
    btn.classList.add('activo');
    // Bloquear scroll de la página de fondo SOLO en móvil (menor a 768px)
    if (window.innerWidth < 768) {
      document.body.style.overflow = 'hidden';
    }
  }
}

function limpiarFiltros() {
  const selects = ['filtroCategoria', 'filtroTipo', 'filtroIntensidad', 'filtroMomento', 'filtroEstado', 'filtroSensibilidad'];
  selects.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  
  const buscador = document.getElementById('buscador');
  if (buscador) buscador.value = '';
  document.getElementById('btnLimpiar')?.classList.remove('visible');

  // Resetear el estado global
  Object.keys(Estado.filtros).forEach(k => Estado.filtros[k] = '');
  
  renderTarjetas();
  
  // Si estamos en móvil, cerramos el panel al limpiar
  if (window.innerWidth < 768 && document.getElementById('filtrosPanel').classList.contains('visible')) {
    toggleFiltrosPanel();
  }
}

// ── EVENT LISTENERS (MAIN INIT) ───────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  poblarSelectsDesdeData();
  renderTarjetas();

  // Buscador de texto
  const inputBuscar = document.getElementById('buscador');
  const btnLimpiarText = document.getElementById('btnLimpiar');
  
  inputBuscar?.addEventListener('input', (e) => {
    Estado.filtros.texto = e.target.value;
    btnLimpiarText.classList.toggle('visible', e.target.value.length > 0);
    renderTarjetas();
  });
  
  btnLimpiarText?.addEventListener('click', () => {
    inputBuscar.value = '';
    Estado.filtros.texto = '';
    btnLimpiarText.classList.remove('visible');
    renderTarjetas();
  });

  // Listeners de los Selects (Filtros y Orden)
  const mapFiltros = {
    filtroCategoria: 'categoria', filtroTipo: 'tipo', filtroIntensidad: 'intensidad',
    filtroMomento: 'momento', filtroEstado: 'estado', filtroSensibilidad: 'sensibilidad'
  };
  
  Object.entries(mapFiltros).forEach(([elementId, stateKey]) => {
    document.getElementById(elementId)?.addEventListener('change', (e) => {
      Estado.filtros[stateKey] = e.target.value;
      renderTarjetas();
    });
  });

  document.getElementById('ordenSelect')?.addEventListener('change', (e) => {
    Estado.orden = e.target.value;
    renderTarjetas();
  });

  // Botones de Panel de Filtros Mobile/Desktop
  document.getElementById('btnFiltrosToggle')?.addEventListener('click', toggleFiltrosPanel);
  document.getElementById('btnCerrarFiltrosMovil')?.addEventListener('click', toggleFiltrosPanel);
  document.getElementById('btnAplicarFiltrosMovil')?.addEventListener('click', toggleFiltrosPanel);
  
  document.getElementById('btnResetFiltros')?.addEventListener('click', limpiarFiltros);
  document.getElementById('btnResetSin')?.addEventListener('click', limpiarFiltros);

  // Manejo del Modal de Ficha
  document.getElementById('modalCerrar')?.addEventListener('click', cerrarModal);
  document.getElementById('modalOverlay')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) cerrarModal();
  });

  // Tecla Escape para cerrar modales o filtros
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const panelFiltros = document.getElementById('filtrosPanel');
      if (document.getElementById('modalOverlay').style.display !== 'none') {
        cerrarModal();
      } else if (panelFiltros.classList.contains('visible') && window.innerWidth < 768) {
        toggleFiltrosPanel();
      }
    }
  });

  // Ajuste de scroll al redimensionar pantalla
  window.addEventListener('resize', () => {
    const panelFiltros = document.getElementById('filtrosPanel');
    if (panelFiltros.classList.contains('visible')) {
      if (window.innerWidth >= 768) {
        document.body.style.overflow = ''; // Desktop: no bloquea scroll
      } else {
        document.body.style.overflow = 'hidden'; // Movil: bloquea scroll
      }
    }
  });

  // Botones de Exportación dentro del Modal
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
  
  // Botones genéricos de "Modos de uso" en el HTML
  document.querySelectorAll('.modo-card[data-filtro]').forEach(btn => {
    btn.addEventListener('click', () => {
      try {
        limpiarFiltros();
        const config = JSON.parse(btn.dataset.filtro);
        Object.entries(config).forEach(([key, val]) => {
          if (key in Estado.filtros) Estado.filtros[key] = val;
          // Actualizar visualmente el select si existe
          const selectId = 'filtro' + key.charAt(0).toUpperCase() + key.slice(1);
          if (document.getElementById(selectId)) document.getElementById(selectId).value = val;
        });
        // Manejar el tag especial esCatalogoBase
        if (config.esCatalogoBase) Estado.filtros.catalogo = 'true';
        
        renderTarjetas();
        document.getElementById('biblioteca').scrollIntoView({ behavior: 'smooth' });
      } catch (err) {
        console.error("Error aplicando filtro rápido", err);
      }
    });
  });
});
