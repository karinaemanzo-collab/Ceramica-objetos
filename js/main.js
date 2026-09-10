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

  // Pestañas de la galería (Pipas / Tazas / Shotglasses / Ceniceros)
  const galleryTabs = document.querySelectorAll('.gallery-tab');
  const galleryCategories = document.querySelectorAll('.gallery-category');

  function activateGalleryTab(target) {
    galleryTabs.forEach((t) => {
      const isActive = t.getAttribute('data-target') === target;
      t.classList.toggle('is-active', isActive);
      t.setAttribute('aria-selected', String(isActive));
    });

    galleryCategories.forEach((category) => {
      const isTarget = category.id === `gallery-${target}`;
      category.classList.toggle('is-active', isTarget);
      category.hidden = !isTarget;
    });
  }

  galleryTabs.forEach((tab) => {
    tab.addEventListener('click', () => activateGalleryTab(tab.getAttribute('data-target')));
  });

  // Enlaces del menú principal que apuntan directo a una categoría
  // (Pipas / Tazas / Shotglasses / Ceniceros): activan esa pestaña y
  // desplazan hasta la galería.
  document.querySelectorAll('[data-gallery-category]').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      activateGalleryTab(link.getAttribute('data-gallery-category'));
      document.getElementById('galeria').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Formulario de contacto: mensaje de confirmación en pantalla.
  // NOTA: el envío real del formulario depende del "action" configurado
  // en index.html (ver comentario ahí sobre Formspree/Getform).
  const form = document.getElementById('contactForm');
  const formNote = document.getElementById('formNote');

  if (form && formNote) {
    form.addEventListener('submit', () => {
      formNote.textContent = 'Enviando tu mensaje...';
    });
  }
});
