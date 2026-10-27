// Cerámica Objetos — interacciones básicas del sitio

document.addEventListener('DOMContentLoaded', () => {
  // Año actual en el footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
