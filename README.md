# Cerámica Objetos

Sitio web de una sola página para **Cerámica Objetos** / Karina, ceramista en
Puerto Rico, vertiente de **Proyecto Antillana**. Diseño editorial y
minimalista, con paleta crimson red + off-white.

Sitio estático (HTML/CSS/JS puro, sin frameworks ni build step) pensado para
publicarse con GitHub Pages.

**A propósito, el sitio es solo el "about me" / statement de artista.** La
tienda (categorías de piezas, precios, sección de compra) todavía no se
lanza — se quitó deliberadamente para no mostrar un flujo de compra antes de
tiempo. Cuando quieras volver a abrirla, se puede traer de vuelta.

## Estructura

```
index.html            Página única: hero + Sobre Mí / statement de artista
css/styles.css          Estilos (paleta de colores, tipografía, responsive)
js/main.js              Año del footer
js/i18n.js               Selector de idioma ES/EN
assets/img/             Imágenes (sobre-mi.jpg, logo, favicon)
```

## Qué reemplazar antes de publicar

Busca los comentarios `REEMPLAZAR` y los textos en `js/i18n.js` para
encontrar:

- **Textos**: el eslogan del hero y la historia en "Sobre mí" (clave
  `about.bio` en `js/i18n.js`, en español e inglés).
- **Foto**: `assets/img/sobre-mi.jpg` junto al statement.

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
