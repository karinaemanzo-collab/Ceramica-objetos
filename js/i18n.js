// Cerámica Objetos — selector de idioma (Español / English)
//
// Cómo funciona: cualquier elemento con data-i18n="clave" recibe su texto
// (textContent) de translations[idioma]["clave"]. data-i18n-html hace lo
// mismo pero con innerHTML (para bloques con varios <p>). data-i18n-aria-label
// traduce ese atributo. data-i18n-title en <html> traduce document.title.
// El idioma elegido se guarda en localStorage y se aplica en todas las
// páginas del sitio.
//
// REEMPLAZAR/AGREGAR: si agregas texto nuevo al sitio, márcalo con
// data-i18n="tu.clave" en el HTML y agrega "tu.clave" aquí en los dos
// idiomas (es y en).

(function () {
  var translations = {
    es: {
      'nav.home': 'Inicio',
      'nav.about': 'Sobre Mí',
      'nav.pipas': 'Pipas',
      'nav.ceniceros': 'Ceniceros',
      'nav.tazas': 'Tazas',
      'nav.platos': 'Platos',
      'nav.shotglasses': 'Shotglasses',
      'nav.contact': 'Contacto',
      'nav.toggleAria': 'Abrir menú',

      'hero.eyebrow': 'Hecho a mano en Puerto Rico',
      'hero.subtag': 'Objetos hermosos, hechos a mano, para el día a día',
      'hero.tagline': 'Piezas de cerámica hecha a mano en Puerto Rico, moldeadas con paciencia y arcilla local.',
      'hero.cta.collections': 'Ver colecciones',
      'hero.cta.contact': 'Cómo comprar',

      'about.eyebrow': 'Sobre mí',
      'about.heading': 'Arcilla, paciencia y raíz local',
      'about.bio':
        '<p>¡Hola! Me llamo Karina y con mis manos soy la que creo todo lo que ven aquí.</p>' +
        '<p>Comencé en cerámica en el 2020, bajo la tutela de Ivonne Prats. Desde entonces me he dedicado a explorar mi inspiración más grande: mi país, Puerto Rico. Hay tanta belleza en todos lados que es fácil encontrar formas, texturas y colores para crear.</p>' +
        '<p>Me apasiona investigar todo lo que conecta con mi herencia: el proceso ancestral de los taínos y de las culturas mexicanas, la cerámica contemporánea, y cómo la influencia europea ha marcado nuestra cultura criolla —en especial, la cerámica y sus usos. En 2026 nació en mí un interés particular por explorar el barro nativo, y en un futuro cercano tengo como objetivo incorporarlo en mis piezas.</p>' +
        '<p>No me gusta seguir tendencias ni especializarme en un solo objeto; mi filosofía es crear piezas atemporales, bellas y duraderas, que puedan funcionar en espacios tanto hoy como en el futuro.</p>' +
        '<p>¡Gracias por estar aquí!</p>',

      'collections.eyebrow': 'Piezas',
      'collections.heading': 'Nuestras colecciones',
      'collections.lead': 'Explora por categoría. Cada pieza es única, hecha a mano una a la vez.',

      'contact.eyebrow': 'Cómo comprar',
      'contact.heading': 'Hagamos un pedido',
      'contact.lead': 'Escríbeme por el formulario, o directamente por redes sociales, WhatsApp o correo. Te respondo lo antes posible con disponibilidad y precios.',
      'contact.label.email': 'Correo',
      'contact.label.location': 'Ubicación',

      'form.label.name': 'Nombre',
      'form.label.email': 'Email',
      'form.label.message': 'Mensaje',
      'form.submit': 'Enviar mensaje',
      'form.sending': 'Enviando tu mensaje...',

      'footer.tagline': 'Una vertiente de Proyecto Antillana · Bayamón, Puerto Rico',
      'footer.copyPrefix': '© ',
      'footer.copySuffix': ' Cerámica Objetos. Todos los derechos reservados.',

      'category.eyebrow': 'Colección',

      'pipas.lead': 'Pipas de cerámica hechas a mano, esmaltadas y cocidas una a una en el taller. Ninguna pieza es idéntica a la otra.',
      'pipas.item1.name': 'Pipa Terracota',
      'pipas.item2.name': 'Pipa Bruma',
      'pipas.item3.name': 'Pipa Medianoche',
      'pipas.item4.name': 'Pipa Barro',
      'pipas.item5.name': 'Pipa Hueso',

      'ceniceros.lead': 'Ceniceros de cerámica, moldeados a mano con la misma arcilla local que da forma a cada pieza del taller.',
      'ceniceros.item1.name': 'Cenicero Arcilla',
      'ceniceros.item2.name': 'Cenicero Bruma',
      'ceniceros.item3.name': 'Cenicero Cobre',
      'ceniceros.item4.name': 'Cenicero Ceniza',
      'ceniceros.item5.name': 'Cenicero Terracota',

      'tazas.lead': 'Tazas de cerámica hechas a mano, pensadas para el uso diario: piezas simples, cálidas y duraderas.',
      'tazas.item1.name': 'Taza Jade',
      'tazas.item2.name': 'Taza Cobalto',
      'tazas.item3.name': 'Taza Terracota',
      'tazas.item4.name': 'Taza Arena',
      'tazas.item5.name': 'Taza Bruma',

      'platos.lead': 'Platos de cerámica hechos a mano, pensados tanto para servir como para decorar: piezas únicas con esmaltes propios.',
      'platos.item1.name': 'Plato Cobalto',
      'platos.item2.name': 'Plato Bruma',
      'platos.item3.name': 'Plato Terracota',
      'platos.item4.name': 'Plato Arcilla',
      'platos.item5.name': 'Plato Arena',

      'shotglasses.lead': 'Shotglasses de cerámica hechos a mano, piezas pequeñas con el mismo cuidado artesanal de siempre.',
      'shotglasses.item1.name': 'Shotglass Fiesta',
      'shotglasses.item2.name': 'Shotglass Ámbar',
      'shotglasses.item3.name': 'Shotglass Rubí',
      'shotglasses.item4.name': 'Shotglass Ónix',
      'shotglasses.item5.name': 'Shotglass Bruma',

      'piece.status.available': 'Disponible',
      'piece.status.soldout': 'Agotado',

      'page.title.index': 'Cerámica Objetos | Piezas de cerámica hecha a mano en Puerto Rico',
      'page.title.pipas': 'Pipas | Cerámica Objetos',
      'page.title.ceniceros': 'Ceniceros | Cerámica Objetos',
      'page.title.tazas': 'Tazas | Cerámica Objetos',
      'page.title.platos': 'Platos | Cerámica Objetos',
      'page.title.shotglasses': 'Shotglasses | Cerámica Objetos'
    },

    en: {
      'nav.home': 'Home',
      'nav.about': 'About Me',
      'nav.pipas': 'Pipes',
      'nav.ceniceros': 'Ashtrays',
      'nav.tazas': 'Mugs',
      'nav.platos': 'Plates',
      'nav.shotglasses': 'Shotglasses',
      'nav.contact': 'Contact',
      'nav.toggleAria': 'Open menu',

      'hero.eyebrow': 'Handmade in Puerto Rico',
      'hero.subtag': 'Hand built beautiful objects for everyday life',
      'hero.tagline': 'Handmade ceramic pieces from Puerto Rico, shaped with patience and local clay.',
      'hero.cta.collections': 'View collections',
      'hero.cta.contact': 'How to buy',

      'about.eyebrow': 'About me',
      'about.heading': 'Clay, patience, and local roots',
      'about.bio':
        '<p>Hi! My name is Karina, and I’m the one who makes everything you see here with my own hands.</p>' +
        '<p>I started working with ceramics in 2020, under the guidance of Ivonne Prats. Since then, I’ve dedicated myself to exploring my greatest inspiration: my country, Puerto Rico. There’s so much beauty everywhere that it’s easy to find shapes, textures, and colors to create with.</p>' +
        '<p>I’m passionate about researching everything connected to my heritage: the ancestral process of the Taíno and Mexican cultures, contemporary ceramics, and how European influence has shaped our criollo culture — especially ceramics and its uses. In 2026 I developed a particular interest in exploring native clay, and in the near future my goal is to incorporate it into my pieces.</p>' +
        '<p>I don’t like following trends or specializing in just one type of object; my philosophy is to create timeless, beautiful, and durable pieces that can work in spaces both today and in the future.</p>' +
        '<p>Thank you for being here!</p>',

      'collections.eyebrow': 'Pieces',
      'collections.heading': 'Our collections',
      'collections.lead': 'Browse by category. Every piece is unique, handmade one at a time.',

      'contact.eyebrow': 'How to buy',
      'contact.heading': "Let's place an order",
      'contact.lead': "Message me through the form, or reach out directly on social media, WhatsApp, or email. I'll get back to you as soon as possible with availability and pricing.",
      'contact.label.email': 'Email',
      'contact.label.location': 'Location',

      'form.label.name': 'Name',
      'form.label.email': 'Email',
      'form.label.message': 'Message',
      'form.submit': 'Send message',
      'form.sending': 'Sending your message...',

      'footer.tagline': 'A branch of Proyecto Antillana · Bayamón, Puerto Rico',
      'footer.copyPrefix': '© ',
      'footer.copySuffix': ' Cerámica Objetos. All rights reserved.',

      'category.eyebrow': 'Collection',

      'pipas.lead': 'Handmade ceramic pipes, glazed and fired one at a time in the studio. No two pieces are alike.',
      'pipas.item1.name': 'Terracotta Pipe',
      'pipas.item2.name': 'Mist Pipe',
      'pipas.item3.name': 'Midnight Pipe',
      'pipas.item4.name': 'Clay Pipe',
      'pipas.item5.name': 'Bone Pipe',

      'ceniceros.lead': 'Ceramic ashtrays, hand-shaped with the same local clay used in every piece from the studio.',
      'ceniceros.item1.name': 'Clay Ashtray',
      'ceniceros.item2.name': 'Mist Ashtray',
      'ceniceros.item3.name': 'Copper Ashtray',
      'ceniceros.item4.name': 'Ash-Grey Ashtray',
      'ceniceros.item5.name': 'Terracotta Ashtray',

      'tazas.lead': 'Handmade ceramic mugs, made for everyday use: simple, warm, and long-lasting pieces.',
      'tazas.item1.name': 'Jade Mug',
      'tazas.item2.name': 'Cobalt Mug',
      'tazas.item3.name': 'Terracotta Mug',
      'tazas.item4.name': 'Sand Mug',
      'tazas.item5.name': 'Mist Mug',

      'platos.lead': 'Handmade ceramic plates, made for serving as well as display: unique pieces with their own glazes.',
      'platos.item1.name': 'Cobalt Plate',
      'platos.item2.name': 'Mist Plate',
      'platos.item3.name': 'Terracotta Plate',
      'platos.item4.name': 'Clay Plate',
      'platos.item5.name': 'Sand Plate',

      'shotglasses.lead': 'Handmade ceramic shotglasses, small pieces made with the same care as everything else.',
      'shotglasses.item1.name': 'Fiesta Shotglass',
      'shotglasses.item2.name': 'Amber Shotglass',
      'shotglasses.item3.name': 'Ruby Shotglass',
      'shotglasses.item4.name': 'Onyx Shotglass',
      'shotglasses.item5.name': 'Mist Shotglass',

      'piece.status.available': 'Available',
      'piece.status.soldout': 'Sold Out',

      'page.title.index': 'Cerámica Objetos | Handmade Ceramic Pieces from Puerto Rico',
      'page.title.pipas': 'Pipes | Cerámica Objetos',
      'page.title.ceniceros': 'Ashtrays | Cerámica Objetos',
      'page.title.tazas': 'Mugs | Cerámica Objetos',
      'page.title.platos': 'Plates | Cerámica Objetos',
      'page.title.shotglasses': 'Shotglasses | Cerámica Objetos'
    }
  };

  var STORAGE_KEY = 'co-lang';
  var DEFAULT_LANG = 'es';

  function getLang() {
    try {
      return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    } catch (e) {
      return DEFAULT_LANG;
    }
  }

  function translate(lang, key) {
    var dict = translations[lang] || translations[DEFAULT_LANG];
    return dict[key];
  }

  function applyLanguage(lang) {
    if (!translations[lang]) lang = DEFAULT_LANG;

    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var val = translate(lang, el.getAttribute('data-i18n'));
      if (val !== undefined) el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var val = translate(lang, el.getAttribute('data-i18n-html'));
      if (val !== undefined) el.innerHTML = val;
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach(function (el) {
      var val = translate(lang, el.getAttribute('data-i18n-aria-label'));
      if (val !== undefined) el.setAttribute('aria-label', val);
    });

    var titleKey = document.documentElement.getAttribute('data-i18n-title');
    if (titleKey) {
      var titleVal = translate(lang, titleKey);
      if (titleVal !== undefined) document.title = titleVal;
    }

    document.querySelectorAll('.lang-toggle button').forEach(function (btn) {
      var isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* localStorage no disponible (modo privado, etc.): el idioma no persiste entre páginas */
    }
  }

  // Expuesto para que otros scripts (ej. js/main.js) puedan traducir
  // mensajes dinámicos, como el aviso de "enviando" del formulario.
  window.CO_I18N = {
    t: function (key) { return translate(getLang(), key); },
    getLang: getLang,
    applyLanguage: applyLanguage
  };

  document.addEventListener('DOMContentLoaded', function () {
    applyLanguage(getLang());

    document.querySelectorAll('.lang-toggle button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLanguage(btn.getAttribute('data-lang'));
      });
    });
  });
})();
