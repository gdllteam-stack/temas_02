/* BIBLIOTECA DE TESTIMONIOS FGDLL — app.js */
'use strict';

const Estado = {
  filtros: { texto: '', categoria: '', tipo: '', intensidad: '', momento: '', estado: '', sensibilidad: '' },
  orden: 'prioridad', temaActivo: null
};

function normalizar(str) { return (str || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''); }
function mostrarToast(msg) {
  const toast = document.getElementById('toast');
  if(!toast) return;
  toast.textContent = msg; toast.classList.add('visible');
  setTimeout(() => toast.classList.remove('visible'), 2500);
}

function poblarSelectsDesdeData() {
  const c = [...new Set(TEMAS.map(t => t.categoria).filter(Boolean))].sort();
  const t = [...new Set(TEMAS.map(t => t.tipoTestimonio).filter(Boolean))].sort();
  const i = [...new Set(TEMAS.map(t => t.intensidad).filter(Boolean))].sort();
  const m = [...new Set(TEMAS.map(t => t.momento).filter(Boolean))].sort();
  const llenar = (id, items) => {
    const sel = document.getElementById(id); if (!sel) return;
    items.forEach(it => { const opt = document.createElement('option'); opt.value = it; opt.textContent = it; sel.appendChild(opt); });
  };
  llenar('filtroCategoria', c); llenar('filtroTipo', t); llenar('filtroIntensidad', i); llenar('filtroMomento', m);
}

function filtrarTemas() {
  const f = Estado.filtros; const txt = normalizar(f.texto);
  return TEMAS.filter(t => {
    if (txt) {
      const haystack = normalizar([t.titulo, t.categoria, t.fraseAncla, t.paso, ...(t.guiaTestimonio?.detectar||[]), ...(t.guiaTestimonio?.admitir||[]), ...(t.guiaTestimonio?.corregir||[])].join(' '));
      if (!haystack.includes(txt)) return false;
    }
    if (f.categoria && t.categoria !== f.categoria) return false;
    if (f.tipo && t.tipoTestimonio !== f.tipo) return false;
    if (f.intensidad && t.intensidad !== f.intensidad) return false;
    if (f.momento && t.momento !== f.momento) return false;
    if (f.estado && t.estado !== f.estado) return false;
    if (f.sensibilidad && t.sensibilidad !== f.sensibilidad) return false;
    if (f.catalogo === 'true' && !t.esCatalogoBase) return false;
    return true;
  });
}

function ordenarTemas(temas) {
  const copia = [...temas]; const orden = Estado.orden;
  if (orden === 'titulo') copia.sort((a, b) => a.titulo.localeCompare(b.titulo));
  else if (orden === 'intensidad') { const o = {'Alta':0, 'Media':1, 'Baja':2}; copia.sort((a, b) => (o[a.intensidad]??1) - (o[b.intensidad]??1)); }
  else copia.sort((a, b) => (a.prioridad || 99) - (b.prioridad || 99));
  return copia;
}

function renderTarjetas() {
  const grid = document.getElementById('tarjetasGrid');
  const count = document.getElementById('tarjetasCount');
  const filtrados = filtrarTemas(); const ordenados = ordenarTemas(filtrados);
  count.textContent = `${ordenados.length} tema${ordenados.length !== 1 ? 's' : ''}`;
  const badge = document.getElementById('filtrosBadge'); const activos = Object.values(Estado.filtros).filter(v => v !== '').length;
  badge.style.display = activos > 0 ? 'flex' : 'none'; badge.textContent = activos;
  grid.innerHTML = '';
  document.getElementById('sinResultados').style.display = ordenados.length === 0 ? 'block' : 'none';
  ordenados.forEach((t, i) => grid.appendChild(crearTarjeta(t, i)));
}

function crearTarjeta(tema, idx) {
  const div = document.createElement('article'); div.className = 'tarjeta'; div.style.animationDelay = Math.min(idx * 0.04, 0.4) + 's';
  let tags = `<span class="tag tag-categoria">${tema.categoria||'General'}</span>`;
  if (tema.esCatalogoBase) tags += `<span class="tag tag-base">Base</span>`;
  if (tema.sensibilidad !== 'normal') tags += `<span class="tag tag-${tema.sensibilidad}">${tema.sensibilidad}</span>`;
  div.innerHTML = `
    <div class="tarjeta-tope ${tema.sensibilidad}"></div>
    <div class="tarjeta-cuerpo">
      <div class="tarjeta-tags">${tags}</div>
      <h3 class="tarjeta-titulo">${tema.titulo}</h3>
      ${tema.fraseAncla ? `<p class="tarjeta-ancla">${tema.fraseAncla}</p>` : ''}
    </div>
    <div class="tarjeta-pie">
      <button class="btn-ver" data-id="${tema.id}">Ver ficha completa</button>
      <button class="btn-copiar-rapido" data-id="${tema.id}" title="Copiar guía">📋</button>
    </div>
  `;
  div.querySelector('.btn-ver').addEventListener('click', e => { e.stopPropagation(); abrirModal(tema.id); });
  div.querySelector('.btn-copiar-rapido').addEventListener('click', e => { e.stopPropagation(); copiarPreguntas(tema); mostrarToast('Copiado ✓'); });
  return div;
}

function abrirModal(id) {
  const tema = TEMAS.find(t => t.id === id); if (!tema) return;
  Estado.temaActivo = tema;
  const contenido = document.getElementById('modalContenido');
  let alerta = '';
  if (tema.sensibilidad === 'crisis') alerta = `<div class="ficha-alerta"><strong>Tema de crisis:</strong> Requiere acompañamiento profesional. Si un miembro expresa intenciones autolíticas, actuar con el manual de emergencia de FGDLL.</div>`;
  else if (tema.sensibilidad === 'sensible') alerta = `<div class="ficha-alerta"><strong>Tema sensible:</strong> Evite juicios hacia familiares o minorías. Conduzca hacia la responsabilidad propia.</div>`;
  
  const g = tema.guiaTestimonio || {};
  const bloque = (n, titulo, sub, p) => p?.length ? `<div class="guia-bloque guia-tiempo-${n}"><div class="guia-header"><span class="guia-num">0${n}</span><div class="guia-etiqueta"><span class="guia-etiqueta-titulo">${titulo}</span><span class="guia-etiqueta-sub">${sub}</span></div></div><div class="guia-preguntas">${p.map(x=>`<p class="guia-pregunta">${x}</p>`).join('')}</div></div>` : '';

  contenido.innerHTML = `
    <div class="ficha-tope ${tema.sensibilidad}"></div>
    <h2 class="ficha-titulo">${tema.titulo}</h2>
    ${tema.fraseAncla ? `<div class="ficha-ancla">"${tema.fraseAncla}"</div>` : ''}
    ${alerta}
    <div class="ficha-seccion"><p class="ficha-seccion-titulo">Objetivo</p><p class="ficha-texto">${tema.objetivo}</p></div>
    <div class="ficha-seccion"><p class="ficha-seccion-titulo">Fuente Doctrinal</p><p class="ficha-texto">${tema.fuentePrincipal}: ${tema.fuenteAA}</p></div>
    <div class="ficha-seccion"><p class="ficha-seccion-titulo">Preguntas Guía - Tres Tiempos</p>
      ${bloque(1, 'Antes del programa', 'Detectar', g.detectar)}
      ${bloque(2, 'Al llegar a FGDLL', 'Admitir', g.admitir)}
      ${bloque(3, 'Hoy con el programa', 'Corregir', g.corregir)}
    </div>
  `;
  document.getElementById('modalOverlay').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function cerrarModal() {
  document.getElementById('modalOverlay').style.display = 'none';
  document.body.style.overflow = ''; Estado.temaActivo = null;
}

function copiarPreguntas(tema) {
  const g = tema.guiaTestimonio || {}; const p = [];
  if (g.detectar) { p.push('1. DETECTAR'); g.detectar.forEach(q=>p.push(q)); p.push(''); }
  if (g.admitir) { p.push('2. ADMITIR'); g.admitir.forEach(q=>p.push(q)); p.push(''); }
  if (g.corregir) { p.push('3. CORREGIR'); g.corregir.forEach(q=>p.push(q)); }
  navigator.clipboard.writeText(p.join('\n'));
}

function descargarTxt(tema) {
  const b = new Blob([`TEMA: ${tema.titulo}\n${tema.fraseAncla}\n\nFuente: ${tema.fuenteAA}\n\n=== GUIA ===\n(Ver preguntas copiadas)...`], { type: 'text/plain;charset=utf-8' });
  const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = `Tema_${tema.id}.txt`; a.click(); URL.revokeObjectURL(a.href);
}

document.addEventListener('DOMContentLoaded', () => {
  poblarSelectsDesdeData(); renderTarjetas();
  const b = document.getElementById('buscador');
  b?.addEventListener('input', e => { Estado.filtros.texto = e.target.value; renderTarjetas(); });
  ['filtroCategoria','filtroTipo','filtroIntensidad','filtroMomento','filtroSensibilidad','ordenSelect'].forEach(id => {
    document.getElementById(id)?.addEventListener('change', e => { 
      if(id === 'ordenSelect') Estado.orden = e.target.value; else Estado.filtros[id.replace('filtro','').toLowerCase()] = e.target.value;
      renderTarjetas(); 
    });
  });
  document.getElementById('modalCerrar')?.addEventListener('click', cerrarModal);
  document.getElementById('btnCopiarGuia')?.addEventListener('click', () => { copiarPreguntas(Estado.temaActivo); mostrarToast('Copiado ✓'); });
  document.getElementById('btnCopiarWA')?.addEventListener('click', () => { navigator.clipboard.writeText(`*${Estado.temaActivo.titulo}*\n_${Estado.temaActivo.fraseAncla}_`); mostrarToast('WhatsApp copiado ✓'); });
  document.getElementById('btnDescargarTxt')?.addEventListener('click', () => descargarTxt(Estado.temaActivo));
  document.getElementById('btnImprimir')?.addEventListener('click', () => { window.print(); });
  document.addEventListener('keydown', e => { if(e.key === 'Escape') cerrarModal(); });
});