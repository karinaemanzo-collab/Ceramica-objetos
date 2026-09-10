# Cerámica Objetos

Sitio web de una sola página para **Cerámica Objetos**, negocio de piezas de
cerámica hecha a mano en Puerto Rico, vertiente de **Proyecto Antillana**.

Sitio estático (HTML/CSS/JS puro, sin frameworks ni build step) pensado para
publicarse con GitHub Pages.

## Estructura

```
index.html          Página principal (todas las secciones)
css/styles.css       Estilos (paleta de colores, tipografía, responsive)
js/main.js           Menú móvil y mensaje del formulario de contacto
assets/img/          Imágenes (placeholders a reemplazar por fotos reales)
```

## Qué reemplazar antes de publicar

Busca los comentarios `REEMPLAZAR` en `index.html` para encontrar:

- **Imágenes**: cambia los archivos en `assets/img/` (`hero.svg`,
  `sobre-mi.svg`, `pieza-1.svg` a `pieza-6.svg`) por fotos reales. Puedes
  mantener los mismos nombres de archivo (usando `.jpg`/`.webp` y
  actualizando la extensión en `index.html`) o usar nombres nuevos.
- **Textos**: el eslogan del hero, la historia en "Sobre mí" y los pies de
  foto de la galería.
- **Información de contacto**: usuario de Instagram, número de WhatsApp y
  correo electrónico (aparecen en la sección de contacto y en el footer).
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
