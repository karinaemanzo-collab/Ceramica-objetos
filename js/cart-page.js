// Cerámica Objetos — renderiza la página carrito.html a partir de js/cart.js

(function () {
  function t(key, fallback) {
    return (window.CO_I18N && window.CO_I18N.t(key)) || fallback;
  }

  function render() {
    var list = document.getElementById('cartList');
    var totalEl = document.getElementById('cartTotal');
    var totalNote = document.getElementById('cartTotalNote');
    if (!list || !window.CO_CART) return;

    var items = window.CO_CART.getAll();
    list.innerHTML = '';

    if (items.length === 0) {
      var empty = document.createElement('p');
      empty.className = 'cart-empty';
      empty.setAttribute('data-i18n', 'cart.empty');
      empty.textContent = t('cart.empty', 'Tu carrito está vacío.');
      list.appendChild(empty);

      var backLink = document.createElement('a');
      backLink.href = 'tienda.html';
      backLink.className = 'btn btn-outline';
      backLink.style.marginTop = '20px';
      backLink.setAttribute('data-i18n', 'cart.continue');
      backLink.textContent = t('cart.continue', 'Seguir viendo la tienda');
      list.appendChild(backLink);
    } else {
      items.forEach(function (item) {
        var row = document.createElement('div');
        row.className = 'cart-row';
        row.setAttribute('data-id', item.id);

        var name = window.CO_CART.displayName(item);
        var priceText = item.price > 0 ? '$' + item.price : '$XX';

        row.innerHTML =
          '<a class="cart-row-media" href="' + (item.url || '#') + '">' +
            '<img src="' + item.image + '" alt="' + name + '">' +
          '</a>' +
          '<div>' +
            '<a class="cart-row-name" href="' + (item.url || '#') + '">' + name + '</a>' +
            '<div class="cart-row-price">' + priceText + '</div>' +
            '<div class="cart-row-qty">' +
              '<button type="button" class="qty-dec" aria-label="-">-</button>' +
              '<span>' + item.qty + '</span>' +
              '<button type="button" class="qty-inc" aria-label="+">+</button>' +
            '</div>' +
          '</div>' +
          '<button type="button" class="cart-row-remove" data-i18n="cart.remove">' + t('cart.remove', 'Quitar') + '</button>';

        row.querySelector('.qty-dec').addEventListener('click', function () {
          window.CO_CART.setQty(item.id, item.qty - 1);
        });
        row.querySelector('.qty-inc').addEventListener('click', function () {
          window.CO_CART.setQty(item.id, item.qty + 1);
        });
        row.querySelector('.cart-row-remove').addEventListener('click', function () {
          window.CO_CART.remove(item.id);
        });

        list.appendChild(row);
      });
    }

    if (totalEl) {
      totalEl.textContent = '$' + window.CO_CART.subtotal();
    }
    if (totalNote) {
      totalNote.hidden = window.CO_CART.hasConfirmedPrices();
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    render();
    document.addEventListener('co-cart-changed', render);

    var form = document.getElementById('cartForm');
    var pedidoField = document.getElementById('pedidoField');
    if (form && pedidoField) {
      form.addEventListener('submit', function () {
        var items = window.CO_CART.getAll();
        var lines = items.map(function (item) {
          var name = window.CO_CART.displayName(item);
          var priceText = item.price > 0 ? '$' + item.price : '$XX (precio a confirmar)';
          return item.qty + ' x ' + name + ' — ' + priceText;
        });
        pedidoField.value = lines.join('\n') || '(carrito vacío)';
      });
    }
  });
})();
