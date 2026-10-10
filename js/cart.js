// Cerámica Objetos — carrito de interés (localStorage, sin pasarela de pago)
//
// Esto NO procesa pagos: guarda las piezas que la persona quiere pedir y,
// en carrito.html, las envía como un mensaje a través del mismo formulario
// de contacto (Formspree) que ya usa el sitio. Cuando tengas un método de
// pago real, este es el lugar para conectarlo.
//
// Botón "Agregar al carrito": agrega data-product-id, data-product-name,
// data-product-price (número; usa 0 si el precio todavía no está listo),
// data-product-image y data-product-url al botón, con la clase "btn-add-cart".

(function () {
  var STORAGE_KEY = 'co-cart';

  function getAll() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function save(items) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      /* localStorage no disponible: el carrito no persiste */
    }
    updateBadges();
    document.dispatchEvent(new CustomEvent('co-cart-changed'));
  }

  function add(item) {
    var items = getAll();
    var existing = items.filter(function (i) { return i.id === item.id; })[0];
    if (existing) {
      existing.qty += 1;
    } else {
      items.push({
        id: item.id,
        name: item.name,
        nameKey: item.nameKey || '',
        price: Number(item.price) || 0,
        image: item.image || '',
        url: item.url || '',
        qty: 1
      });
    }
    save(items);
  }

  function remove(id) {
    save(getAll().filter(function (i) { return i.id !== id; }));
  }

  function setQty(id, qty) {
    qty = Math.max(1, qty | 0);
    var items = getAll().map(function (i) {
      if (i.id === id) i.qty = qty;
      return i;
    });
    save(items);
  }

  function clear() {
    save([]);
  }

  function count() {
    return getAll().reduce(function (sum, i) { return sum + i.qty; }, 0);
  }

  function subtotal() {
    return getAll().reduce(function (sum, i) { return sum + i.price * i.qty; }, 0);
  }

  // Nombre a mostrar: traducido si la pieza guardó una clave de i18n,
  // o el texto literal guardado al agregarla si no.
  function displayName(item) {
    if (item.nameKey && window.CO_I18N) {
      var translated = window.CO_I18N.t(item.nameKey);
      if (translated) return translated;
    }
    return item.name;
  }

  // true si todas las piezas en el carrito ya tienen un precio real (> 0)
  function hasConfirmedPrices() {
    var items = getAll();
    return items.length > 0 && items.every(function (i) { return i.price > 0; });
  }

  function updateBadges() {
    var n = count();
    document.querySelectorAll('.cart-count').forEach(function (el) {
      el.textContent = String(n);
      el.hidden = n === 0;
    });
  }

  window.CO_CART = {
    add: add,
    remove: remove,
    setQty: setQty,
    clear: clear,
    getAll: getAll,
    count: count,
    subtotal: subtotal,
    hasConfirmedPrices: hasConfirmedPrices,
    displayName: displayName,
    updateBadges: updateBadges
  };

  document.addEventListener('DOMContentLoaded', function () {
    updateBadges();

    document.querySelectorAll('.btn-add-cart').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        add({
          id: btn.getAttribute('data-product-id'),
          name: btn.getAttribute('data-product-name'),
          nameKey: btn.getAttribute('data-product-name-key'),
          price: btn.getAttribute('data-product-price'),
          image: btn.getAttribute('data-product-image'),
          url: btn.getAttribute('data-product-url')
        });

        var original = btn.textContent;
        btn.textContent = (window.CO_I18N && window.CO_I18N.t('product.addedToCart')) || original;
        btn.classList.add('is-added');
        setTimeout(function () {
          btn.textContent = original;
          btn.classList.remove('is-added');
        }, 1600);
      });
    });
  });
})();
