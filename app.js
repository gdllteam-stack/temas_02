'use strict';

const state = {
  text: '',
  filters: {
    etiqueta: '',
    categoria: '',
    publico: '',
    intensidad: '',
    momento: '',
    formato: '',
    tipoTestimonio: ''
  },
  activeTopic: null
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function normalize(value) {
  return String(value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function uniqueValues(items, getter) {
  return [...new Set(items.flatMap((item) => {
    const value = getter(item);
    return Array.isArray(value) ? value : [value];
  }).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'es'));
}

function isCrisis(topic) {
  const tags = topic.etiquetas || [];
  return tags.some((tag) => ETIQUETAS_CRISIS.includes(tag)) || topic.sensibilidad === 'crisis';
}

function isSensitive(topic) {
  const tags = topic.etiquetas || [];
  return isCrisis(topic) || topic.sensibilidad === 'sensible' || tags.some((tag) => ['abuso', 'duelo', 'abandono'].includes(tag));
}

function topicLevel(topic) {
  if (isCrisis(topic)) return 'crisis';
  if (isSensitive(topic)) return 'sensible';
  return 'normal';
}

function fillSelect(id, values) {
  const select = $(id);
  if (!select) return;
  values.forEach((value) => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  });
}

function setupFilters() {
  fillSelect('#filterEtiqueta', uniqueValues(CATALOGO_COMPLETO, (topic) => topic.etiquetas));
  fillSelect('#filterCategoria', uniqueValues(CATALOGO_COMPLETO, (topic) => topic.categoria));
  fillSelect('#filterPublico', uniqueValues(CATALOGO_COMPLETO, (topic) => topic.publico));
  fillSelect('#filterIntensidad', uniqueValues(CATALOGO_COMPLETO, (topic) => topic.intensidad));
  fillSelect('#filterMomento', uniqueValues(CATALOGO_COMPLETO, (topic) => topic.momento));
  fillSelect('#filterFormato', uniqueValues(CATALOGO_COMPLETO, (topic) => topic.formato));
  fillSelect('#filterTipo', uniqueValues(CATALOGO_COMPLETO, (topic) => topic.tipoTestimonio));
}

function searchableText(topic) {
  return normalize([
    topic.titulo,
    topic.tituloCorto,
    topic.categoria,
    topic.fraseAncla,
    topic.objetivo,
    topic.fuentePrincipal,
    ...(topic.etiquetas || []),
    ...(topic.evento || []),
    ...(topic.publico || []),
    ...(topic.emocion || []),
    ...(topic.defectoCaracter || []),
    ...(topic.virtudPrincipal || []),
    ...(topic.pasos || []),
    ...(topic.tradiciones || []),
    ...(topic.conceptos || []),
    ...(topic.palabrasClave || []),
    ...Object.values(topic.guiaTestimonio || {}).flat()
  ].join(' '));
}

function getFilteredTopics() {
  const text = normalize(state.text);
  return CATALOGO_COMPLETO.filter((topic) => {
    if (text && !searchableText(topic).includes(text)) return false;
    if (state.filters.etiqueta && !(topic.etiquetas || []).includes(state.filters.etiqueta)) return false;
    if (state.filters.categoria && topic.categoria !== state.filters.categoria) return false;
    if (state.filters.publico && !(topic.publico || []).includes(state.filters.publico)) return false;
    if (state.filters.intensidad && topic.intensidad !== state.filters.intensidad) return false;
    if (state.filters.momento && topic.momento !== state.filters.momento) return false;
    if (state.filters.formato && topic.formato !== state.filters.formato) return false;
    if (state.filters.tipoTestimonio && topic.tipoTestimonio !== state.filters.tipoTestimonio) return false;
    return true;
  }).sort((a, b) => (b.prioridad || 0) - (a.prioridad || 0));
}

function tagButton(tag) {
  return `<button class="tag" type="button" data-tag="${tag}">${tag}</button>`;
}

function renderCards() {
  const topics = getFilteredTopics();
  const grid = $('#cardGrid');
  const empty = $('#emptyState');
  $('#catalogCount').textContent = `${topics.length} de ${CATALOGO_COMPLETO.length} temas`;
  grid.innerHTML = '';
  empty.hidden = topics.length !== 0;

  topics.forEach((topic) => {
    const level = topicLevel(topic);
    const card = document.createElement('article');
    card.className = `topic-card ${level}`;
    card.innerHTML = `
      <div class="card-topline"></div>
      <div class="card-body">
        <div class="card-meta">
          <span>${topic.categoria}</span>
          <span>${topic.intensidad}</span>
          <span>${topic.momento}</span>
        </div>
        <h3>${topic.titulo}</h3>
        <p class="anchor">"${topic.fraseAncla || ''}"</p>
        <div class="tag-list">${(topic.etiquetas || []).slice(0, 5).map(tagButton).join('')}</div>
      </div>
      <footer class="card-footer">
        <span>${topic.formato} · ${topic.tipoTestimonio}</span>
        <button class="open-topic" type="button" data-id="${topic.id}">Abrir ficha</button>
      </footer>
    `;
    grid.appendChild(card);
  });

  renderActiveTags();
}

function renderActiveTags() {
  const active = $('#activeTags');
  const chips = [];
  if (state.text) chips.push(`Búsqueda: ${state.text}`);
  Object.entries(state.filters).forEach(([key, value]) => {
    if (value) chips.push(`${labelForFilter(key)}: ${value}`);
  });
  active.innerHTML = chips.map((chip) => `<span>${chip}</span>`).join('');
}

function labelForFilter(key) {
  const labels = {
    etiqueta: 'Etiqueta',
    categoria: 'Categoría',
    publico: 'Público',
    intensidad: 'Intensidad',
    momento: 'Momento',
    formato: 'Formato',
    tipoTestimonio: 'Tipo'
  };
  return labels[key] || key;
}

function renderMetrics() {
  $('#metricTemas').textContent = CATALOGO_COMPLETO.length;
  $('#metricEtiquetas').textContent = uniqueValues(CATALOGO_COMPLETO, (topic) => topic.etiquetas).length;
}

function sourceList(topic) {
  const items = [];
  (topic.fuenteAA || []).forEach((source) => items.push(`AA: ${source.obra}${source.referencia ? `, ${source.referencia}` : ''}`));
  (topic.fuenteFGDLL || []).forEach((source) => items.push(`FGDLL: ${source.obra}${source.seccion ? `, ${source.seccion}` : ''}`));
  (topic.librosRecomendados || []).forEach((book) => items.push(`${book.titulo}, ${book.autor}`));
  return items.length ? items : [topic.fuentePrincipal || 'Fuente no especificada'];
}

function questionBlock(title, verb, questions) {
  if (!questions?.length) return '';
  return `
    <section class="question-block">
      <div class="question-heading">
        <strong>${verb}</strong>
        <span>${title}</span>
      </div>
      ${questions.map((question) => `<p>${question}</p>`).join('')}
    </section>
  `;
}

function openTopic(id) {
  const topic = CATALOGO_COMPLETO.find((item) => item.id === id);
  if (!topic) return;
  state.activeTopic = topic;
  const level = topicLevel(topic);
  const guide = topic.guiaTestimonio || {};
  const alert = getAlertMarkup(topic, level);

  $('#modalBody').innerHTML = `
    <div class="modal-topline ${level}"></div>
    <p class="modal-kicker">${topic.categoria} · ${topic.formato} · ${topic.tipoTestimonio}</p>
    <h2 id="modalTitle">${topic.titulo}</h2>
    <p class="modal-anchor">"${topic.fraseAncla || ''}"</p>
    <div class="tag-list modal-tags">${(topic.etiquetas || []).map((tag) => `<span class="tag static">${tag}</span>`).join('')}</div>
    ${alert}
    <section class="detail-section">
      <h3>Objetivo</h3>
      <p>${topic.objetivo || 'Sin objetivo registrado.'}</p>
    </section>
    <section class="detail-section">
      <h3>Fuentes</h3>
      <ul>${sourceList(topic).map((source) => `<li>${source}</li>`).join('')}</ul>
    </section>
    <section class="detail-section">
      <h3>Guía de compartimiento</h3>
      ${questionBlock('Antes del programa', 'Detectar', guide.detectar)}
      ${questionBlock('Al llegar y verme con honestidad', 'Admitir', guide.admitir)}
      ${questionBlock('Hoy con el programa', 'Corregir', guide.corregir)}
    </section>
    ${topic.noUsarPara?.length ? `<section class="detail-section no-use"><h3>No usar para</h3><ul>${topic.noUsarPara.map((item) => `<li>${item}</li>`).join('')}</ul></section>` : ''}
  `;

  $('#modalOverlay').hidden = false;
  document.body.classList.add('modal-open');
}

function getAlertMarkup(topic, level) {
  if (level === 'crisis') {
    return `
      <div class="alert crisis-alert">
        <strong>Tema de crisis.</strong>
        ${topic.advertenciaEtica || 'Evitar detalles gráficos o metodologías. Si hay riesgo actual, activar ayuda inmediata y profesional.'}
      </div>
    `;
  }
  if (level === 'sensible') {
    return `
      <div class="alert sensitive-alert">
        <strong>Tema sensible.</strong>
        ${topic.advertenciaEtica || 'Cuidar el lenguaje, evitar juicios y proteger a terceros.'}
      </div>
    `;
  }
  return '';
}

function closeModal() {
  $('#modalOverlay').hidden = true;
  document.body.classList.remove('modal-open');
  state.activeTopic = null;
}

function topicGuideText(topic) {
  const guide = topic.guiaTestimonio || {};
  const lines = [`${topic.titulo}`, topic.fraseAncla ? `"${topic.fraseAncla}"` : '', ''];
  [
    ['DETECTAR', guide.detectar],
    ['ADMITIR', guide.admitir],
    ['CORREGIR', guide.corregir]
  ].forEach(([title, questions]) => {
    if (!questions?.length) return;
    lines.push(title);
    questions.forEach((question) => lines.push(`- ${question}`));
    lines.push('');
  });
  return lines.join('\n').trim();
}

function whatsappText(topic) {
  return [
    `*${topic.titulo}*`,
    topic.fraseAncla ? `_${topic.fraseAncla}_` : '',
    '',
    `Categoría: ${topic.categoria}`,
    `Etiquetas: ${(topic.etiquetas || []).join(', ')}`,
    '',
    'Guía:',
    topicGuideText(topic)
  ].join('\n').trim();
}

async function copyText(text, successMessage) {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      fallbackCopy(text);
    }
    showToast(successMessage);
  } catch {
    try {
      fallbackCopy(text);
      showToast(successMessage);
    } catch {
      showToast('No se pudo copiar desde este navegador');
    }
  }
}

function fallbackCopy(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.left = '-9999px';
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
}

function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('visible');
  window.setTimeout(() => toast.classList.remove('visible'), 2200);
}

function bindEvents() {
  $('#searchInput').addEventListener('input', (event) => {
    state.text = event.target.value;
    renderCards();
  });

  [
    ['#filterEtiqueta', 'etiqueta'],
    ['#filterCategoria', 'categoria'],
    ['#filterPublico', 'publico'],
    ['#filterIntensidad', 'intensidad'],
    ['#filterMomento', 'momento'],
    ['#filterFormato', 'formato'],
    ['#filterTipo', 'tipoTestimonio']
  ].forEach(([selector, key]) => {
    $(selector).addEventListener('change', (event) => {
      state.filters[key] = event.target.value;
      renderCards();
    });
  });

  $('#clearFilters').addEventListener('click', () => {
    state.text = '';
    Object.keys(state.filters).forEach((key) => {
      state.filters[key] = '';
    });
    $('#searchInput').value = '';
    $$('.filters select').forEach((select) => {
      select.value = '';
    });
    renderCards();
  });

  $('#cardGrid').addEventListener('click', (event) => {
    const tag = event.target.closest('[data-tag]');
    if (tag) {
      state.filters.etiqueta = tag.dataset.tag;
      $('#filterEtiqueta').value = tag.dataset.tag;
      renderCards();
      return;
    }
    const button = event.target.closest('[data-id]');
    if (button) openTopic(button.dataset.id);
  });

  $('#modalClose').addEventListener('click', closeModal);
  $('#modalOverlay').addEventListener('click', (event) => {
    if (event.target.id === 'modalOverlay') closeModal();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !$('#modalOverlay').hidden) closeModal();
  });
  $('#copyGuide').addEventListener('click', () => {
    if (state.activeTopic) copyText(topicGuideText(state.activeTopic), 'Guía copiada');
  });
  $('#copyWhatsapp').addEventListener('click', () => {
    if (state.activeTopic) copyText(whatsappText(state.activeTopic), 'Texto para WhatsApp copiado');
  });
  $('#printTopic').addEventListener('click', () => window.print());
}

document.addEventListener('DOMContentLoaded', () => {
  setupFilters();
  renderMetrics();
  bindEvents();
  renderCards();
});
