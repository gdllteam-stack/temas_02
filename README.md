# Biblioteca de Testimonios FGDLL

Aplicación estática, rápida y segura diseñada para la Fraternidad Guerreros de la Luz. Ordena los testimonios bajo la literatura de Alcohólicos Anónimos y lineamientos propios, previniendo el lenguaje psicológico indebido o la catarsis descontrolada.

## 🚀 Instalación y Despliegue
1. No requiere Node.js, npm, ni backend. 
2. Solo descomprime la carpeta y haz doble clic sobre `index.html`.
3. Para publicarlo, puedes arrastrar la carpeta a **Netlify**, **Vercel**, o **GitHub Pages**. (Totalmente gratuito).

## 🛡️ Estructura del Código
* `index.html`: Base semántica del proyecto con accesibilidad ARIA y sistema de modales.
* `styles.css`: Estilos visuales con un esquema de colores estricto institucional (negro y dorado). Responsive design (mobile-first).
* `data.js`: Almacena la base de datos de los temas (JSON). Aquí es donde se editan o agregan los testimonios.
* `app.js`: Contiene la lógica en Vanilla JS. Buscador reactivo, filtros dinámicos, creación del modal, copiado al portapapeles y generación de descarga de archivo TXT.

## ⚖️ Advertencias Éticas Incorporadas
El código detecta la variable `sensibilidad: "crisis"` o `"sensible"` en `data.js`. Cuando el líder o participante abren uno de esos temas, la UI lanza alertas restrictivas de color e íconos en rojo bloqueando abusos de catarsis o detalles de metodologías de suicidio.

Desarrollado para Guerreros de la Luz bajo la métrica: **Detectar, Admitir y Corregir**.