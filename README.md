# Cerámica Objetos

Sitio web multi-página para **Cerámica Objetos**, negocio de piezas de
cerámica hecha a mano en Puerto Rico, vertiente de **Proyecto Antillana**.
Diseño editorial y minimalista, con paleta crimson red + off-white.

Sitio estático (HTML/CSS/JS puro, sin frameworks ni build step) pensado para
publicarse con GitHub Pages. Cada categoría de producto tiene su propia
página (estructura de navegación inspirada en catálogos de una página por
categoría, sin copiar el diseño visual de ninguna marca en particular).

## Estructura

```
index.html            Inicio: hero, Sobre Mí, directorio de colecciones, Contacto
pipas.html             Página de la categoría Pipas
ceniceros.html          Página de la categoría Ceniceros
tazas.html              Página de la categoría Tazas
shotglasses.html        Página de la categoría Shotglasses
css/styles.css          Estilos (paleta de colores, tipografía, responsive)
js/main.js              Menú móvil y mensaje del formulario de contacto
assets/img/             Imágenes (placeholders a reemplazar por fotos reales)
assets/img/pipas/       Fotos reales de la categoría Pipas
```

Las 4 páginas de categoría comparten la misma estructura: una foto grande
destacada arriba (hero de la categoría) y debajo una cuadrícula de piezas,
cada una con su nombre y un espacio para el precio.

## Qué reemplazar antes de publicar

Busca los comentarios `REEMPLAZAR` en cada archivo `.html` para encontrar:

- **Imágenes de Ceniceros, Tazas y Shotglasses**: estas tres categorías
  todavía usan placeholders (`assets/img/cenicero-*.svg`, `taza-*.svg`,
  `shot-*.svg`). Reemplázalas por fotos reales siguiendo el mismo patrón
  que ya tiene `pipas.html` con las fotos en `assets/img/pipas/`.
- **Precios**: cada pieza tiene un `<span class="piece-price">$XX</span>`
  de marcador. Edita el texto con el precio real de cada una.
- **Textos**: el eslogan del hero, la historia en "Sobre mí" y la
  descripción corta de cada categoría.
- **Información de contacto**: usuario de Instagram, número de WhatsApp y
  correo electrónico (aparecen en `index.html#contacto` y en el footer de
  cada página).
- **Formulario de contacto**: es HTML estático, no envía correos por sí
  solo. Para recibir los mensajes, crea una cuenta gratuita en
  [Formspree](https://formspree.io) o [Getform](https://getform.io) y
  reemplaza el `action="..."` del `<form>` en `index.html` con el enlace
  que te den.

## Publicar con GitHub Pages

1. Ve a este repositorio en GitHub → pestaña **Settings**.
2. En el menú lateral, entra a **Pages**.
3. En "Build and deployment" → "Source", selecciona **Deploy from a
   branch**.
4. En "Branch", elige la rama donde está el sitio terminado (normalmente
   `main`, después de fusionar el pull request) y la carpeta **/(root)**.
   Guarda los cambios.
5. Espera 1–2 minutos. GitHub mostrará la URL pública, con este formato:
   `https://karinaemanzo-collab.github.io/Ceramica-objetos/`
6. Cada vez que hagas `push` de cambios nuevos a esa rama, el sitio se
   actualiza automáticamente en unos minutos.

## Ver el sitio localmente

No requiere instalación. Basta con abrir `index.html` en el navegador, o
levantar un servidor simple:

```bash
python3 -m http.server 8000
```

y visitar `http://localhost:8000`.
