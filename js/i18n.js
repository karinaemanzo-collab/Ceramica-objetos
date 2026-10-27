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
      'hero.eyebrow': 'Hecho a mano en Puerto Rico',
      'hero.subtag': 'Objetos hermosos, hechos a mano, para el día a día',

      'about.eyebrow': 'Sobre mí',
      'about.heading': 'Arcilla, paciencia y raíz local',
      'about.bio':
        '<p>¡Hola! Me llamo Karina y con mis manos soy la que creo todo lo que ven aquí.</p>' +
        '<p>Comencé en cerámica en el 2020, bajo la tutela de Ivonne Prats. Desde entonces me he dedicado a explorar mi inspiración más grande: mi país, Puerto Rico. Hay tanta belleza en todos lados que es fácil encontrar formas, texturas y colores para crear.</p>' +
        '<p>Me apasiona investigar todo lo que conecta con mi herencia: el proceso ancestral de los taínos y de las culturas mexicanas, la cerámica contemporánea, y cómo la influencia europea ha marcado nuestra cultura criolla —en especial, la cerámica y sus usos. En 2026 nació en mí un interés particular por explorar el barro nativo, y en un futuro cercano tengo como objetivo incorporarlo en mis piezas.</p>' +
        '<p>No me gusta seguir tendencias ni especializarme en un solo objeto; mi filosofía es crear piezas atemporales, bellas y duraderas, que puedan funcionar en espacios tanto hoy como en el futuro.</p>' +
        '<p>¡Gracias por estar aquí!</p>',

      'footer.tagline': 'Una vertiente de Proyecto Antillana · Bayamón, Puerto Rico',
      'footer.copyPrefix': '© ',
      'footer.copySuffix': ' Cerámica Objetos. Todos los derechos reservados.',

      'page.title.index': 'Cerámica Objetos | Karina, ceramista en Puerto Rico'
    },

    en: {
      'hero.eyebrow': 'Handmade in Puerto Rico',
      'hero.subtag': 'Hand built beautiful objects for everyday life',

      'about.eyebrow': 'About me',
      'about.heading': 'Clay, patience, and local roots',
      'about.bio':
        '<p>Hi! My name is Karina, and I’m the one who makes everything you see here with my own hands.</p>' +
        '<p>I started working with ceramics in 2020, under the guidance of Ivonne Prats. Since then, I’ve dedicated myself to exploring my greatest inspiration: my country, Puerto Rico. There’s so much beauty everywhere that it’s easy to find shapes, textures, and colors to create with.</p>' +
        '<p>I’m passionate about researching everything connected to my heritage: the ancestral process of the Taíno and Mexican cultures, contemporary ceramics, and how European influence has shaped our criollo culture — especially ceramics and its uses. In 2026 I developed a particular interest in exploring native clay, and in the near future my goal is to incorporate it into my pieces.</p>' +
        '<p>I don’t like following trends or specializing in just one type of object; my philosophy is to create timeless, beautiful, and durable pieces that can work in spaces both today and in the future.</p>' +
        '<p>Thank you for being here!</p>',

      'footer.tagline': 'A branch of Proyecto Antillana · Bayamón, Puerto Rico',
      'footer.copyPrefix': '© ',
      'footer.copySuffix': ' Cerámica Objetos. All rights reserved.',

      'page.title.index': 'Cerámica Objetos | Karina, ceramicist in Puerto Rico'
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
  // mensajes dinámicos.
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
