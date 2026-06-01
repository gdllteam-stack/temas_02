# Biblioteca de Testimonios FGDLL 🕊️

> *"La página debe ayudar a que el testimonio no sea catarsis desordenada, sino experiencia ordenada por la literatura, la conciencia y el servicio."*

Aplicación web estática, rápida y segura diseñada para la **Fraternidad Guerreros de la Luz**. Su propósito es ordenar los testimonios bajo la literatura aprobada (Alcohólicos Anónimos y lineamientos propios de FGDLL), previniendo el lenguaje psicológico indebido, el moralismo o la catarsis descontrolada.

---

## 📱 Filosofía de Diseño: Mobile First
Esta plataforma está diseñada estrictamente bajo el enfoque **Mobile First**. Entendemos que el 90% de los líderes, delegados y participantes consultarán las fichas, filtros y preguntas guía directamente desde sus teléfonos móviles (a menudo minutos antes de subir a tribuna o en medio de una reunión). 

* El panel de filtros en móviles se comporta como un modal inmersivo a pantalla completa para facilitar la búsqueda.
* La interfaz es completamente táctil (touch-friendly), rápida y no requiere recargar la página.

## 🚀 Instalación y Despliegue

La arquitectura es 100% estática (Frontend puro). **No requiere Node.js, npm, ni backend.**

### Uso Local (Sin internet):
1. Descarga o clona la carpeta del proyecto.
2. Haz doble clic sobre el archivo `index.html`.
3. Se abrirá en tu navegador predeterminado y funcionará perfectamente (incluyendo el sistema de copiado y descarga de archivos `.txt`).

### Despliegue en la Nube (Gratis):
Puedes hospedar esta herramienta en segundos arrastrando la carpeta completa a plataformas como:
* [Netlify Drop](https://app.netlify.com/drop)
* [Vercel](https://vercel.com/)
* [GitHub Pages](https://pages.github.com/)

---

## 📂 Estructura del Código

El proyecto consta de 4 archivos principales:

* `index.html`: Base semántica del proyecto. Contiene la interfaz de usuario, los modales y las etiquetas de accesibilidad (ARIA).
* `styles.css`: Estilos visuales con un esquema de colores estricto institucional (negro carbón, dorado viejo, blanco cálido y rojo para alertas). 
* `app.js`: Lógica en **Vanilla JavaScript** (sin librerías pesadas). Controla el buscador reactivo, los filtros combinados, el portapapeles y la manipulación del DOM.
* `data.js`: La base de datos local en formato JSON. Contiene todos los temas, estructurados y validados con fuentes literarias.

---

## 📚 Fuentes Doctrinales Aprobadas

Todo tema incluido en `data.js` debe estar respaldado por la literatura. Las fuentes actualmente mapeadas en esta biblioteca incluyen:

1. *Llegamos a Creer*
2. *Menú de Temas Juvenil FGDLL*
3. *Nuestros Grupos, Nuestra Fortaleza*
4. *El Lenguaje del Corazón*
5. *Como lo ve Bill*
6. *El Joven en AA*
7. *Dr. Bob y los buenos veteranos*
8. *AA Llega a la Mayoría de Edad*
9. *Libro Azul y 12 y 12*

---

## ⚖️ Advertencias ÉTICAS (Sistema de Sensibilidad)

El código lee el atributo `sensibilidad` de cada tema en `data.js` y renderiza la interfaz en consecuencia:

* **`normal` (Gris/Dorado):** Temas generales de servicio, gratitud y aplicación de los Pasos.
* **`sensible` (Ámbar):** Temas de padre, madre, diversidad o perdón. El sistema alerta al líder para evitar juicios familiares, moralismos o forzar perdones.
* **`crisis` (Rojo):** Temas de prevención del suicidio, locura o desesperación extrema. **CRÍTICO:** La interfaz lanza una alerta obligatoria indicando que el grupo no sustituye la atención psiquiátrica o profesional, y bloquea el uso del morbo o detalles metodológicos en tribuna.

---

## 🧠 Metodología de los Tres Tiempos

El código fuerza estructuralmente a que cada testimonio se divida en tres áreas de preguntas guía, erradicando los monólogos circulares:

1. **[01] DETECTAR:** ¿Cómo era mi vida antes del programa? (Identificar la raíz y el daño).
2. **[02] ADMITIR:** ¿Cómo llegué a Guerreros de la Luz? (Identificación y rendición).
3. **[03] APRENDER A CORREGIR:** ¿Qué estoy haciendo diferente hoy? (Acción, servicio y responsabilidad, no perfección).

---

## 🛠️ Cómo agregar nuevos temas (Guía para Coordinadores)

Para agregar un tema, simplemente edita el archivo `data.js` y añade un nuevo objeto al array `TEMAS`. Asegúrate de respetar la estructura JSON:

```json
{
  "id": "tema-nuevo-01",
  "titulo": "Título del tema",
  "tituloCorto": "Título corto",
  "estado": "Completo",
  "sensibilidad": "normal | sensible | crisis",
  "categoria": "Categoría",
  "intensidad": "Alta | Media | Baja",
  "momento": "Inicio | Mitad | Cierre",
  "fuentePrincipal": "AA",
  "fuenteAA": [{ "obra": "Nombre del Libro", "referencia": "Capítulo", "uso": "Razón" }],
  "objetivo": "Meta del testimonio.",
  "fraseAncla": "Frase de impacto.",
  "guiaTestimonio": {
    "detectar": ["Pregunta 1", "Pregunta 2"],
    "admitir": ["Pregunta 1", "Pregunta 2"],
    "corregir": ["Pregunta 1", "Pregunta 2"]
  }
}
