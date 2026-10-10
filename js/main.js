// Cerámica Objetos — interacciones básicas del sitio

document.addEventListener('DOMContentLoaded', () => {
  // Año actual en el footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Menú de navegación en móvil
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('siteNav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Cierra el menú al elegir un enlace (útil en móvil)
    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Formulario de contacto (index.html / historia.html / footer): mensaje de
  // confirmación en pantalla. NOTA: el envío real depende del "action"
  // configurado en el <form> (ver comentario ahí sobre Formspree/Getform).
  document.querySelectorAll('form[data-note-target]').forEach((form) => {
    const note = document.getElementById(form.getAttribute('data-note-target'));
    if (!note) return;
    form.addEventListener('submit', () => {
      const fallback = 'Enviando tu mensaje...';
      note.textContent = (window.CO_I18N && window.CO_I18N.t('form.sending')) || fallback;
    });
  });

  // Filtros de categoría (para-la-casa.html / para-encender.html): pastillas
  // de subcategoría (una activa a la vez) + pastilla "Se envía por correo"
  // (se puede combinar con cualquier subcategoría).
  const filterBar = document.querySelector('.filter-bar');
  if (filterBar) {
    const items = Array.from(document.querySelectorAll('.gallery-item'));
    const subcatPills = Array.from(filterBar.querySelectorAll('[data-subcat]'));
    const shippablePill = filterBar.querySelector('[data-filter-shippable]');
    let currentSubcat = 'all';
    let shippableOnly = false;

    function applyFilter() {
      items.forEach((item) => {
        const matchesSubcat = currentSubcat === 'all' || item.getAttribute('data-subcat') === currentSubcat;
        const matchesShippable = !shippableOnly || item.getAttribute('data-shippable') === 'true';
        item.hidden = !(matchesSubcat && matchesShippable);
      });
    }

    subcatPills.forEach((pill) => {
      pill.addEventListener('click', () => {
        currentSubcat = pill.getAttribute('data-subcat');
        subcatPills.forEach((p) => p.classList.toggle('is-active', p === pill));
        applyFilter();
      });
    });

    if (shippablePill) {
      shippablePill.addEventListener('click', () => {
        shippableOnly = !shippableOnly;
        shippablePill.classList.toggle('is-active', shippableOnly);
        applyFilter();
      });
    }

    applyFilter();
  }
});
