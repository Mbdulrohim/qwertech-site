import { CartApi, CartItem } from '../../types';

const CART_STORAGE_KEY = 'qwertech_cart_v3';

export function formatNaira(amount: number | string): string {
  return `₦${Number(amount).toLocaleString('en-NG')}`;
}

export function initCartDrawer(): CartApi {
  const cartDrawerBackdrop = document.getElementById('cart-drawer-backdrop');
  const cartOpenBtn = document.getElementById('cart-open-btn');
  const cartCloseBtn = document.getElementById('cart-close-btn');
  const cartDrawerBody = document.getElementById('cart-drawer-body');
  const cartSubtotalEl = document.getElementById('cart-subtotal');
  const cartTotalEl = document.getElementById('cart-total');
  const cartBadgeCount = document.querySelectorAll<HTMLElement>('.cart-badge-count');
  const shippingMeterText = document.getElementById('shipping-meter-text');
  const shippingMeterFill = document.getElementById('shipping-meter-fill');
  const promoInput = document.getElementById('promo-input') as HTMLInputElement | null;
  const promoApplyBtn = document.getElementById('promo-apply-btn');
  const promoMessage = document.getElementById('promo-message');

  let cartItems: CartItem[] = loadCart();
  let appliedDiscount = 0;

  function loadCart(): CartItem[] {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [
        {
          id: 'iphone-16-pro-max',
          name: 'iPhone 16 Pro Max',
          variant: 'Desert Titanium / 256GB',
          price: 2450000,
          quantity: 1,
          image: '/images/prod-fold.jpg'
        }
      ];
    } catch {
      return [];
    }
  }

  function saveCart(): void {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (e) {
      console.warn('Unable to persist cart', e);
    }
    renderCart();
  }

  function openCart(): void {
    cartDrawerBackdrop?.classList.add('is-open');
    document.body.classList.add('no-scroll');
  }

  function closeCart(): void {
    cartDrawerBackdrop?.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
  }

  cartOpenBtn?.addEventListener('click', openCart);
  cartCloseBtn?.addEventListener('click', closeCart);

  cartDrawerBackdrop?.addEventListener('click', (e) => {
    if (e.target === cartDrawerBackdrop) {
      closeCart();
    }
  });

  function updateQuantity(index: number, delta: number): void {
    if (!cartItems[index]) return;
    cartItems[index].quantity += delta;
    if (cartItems[index].quantity <= 0) {
      cartItems.splice(index, 1);
    }
    saveCart();
  }

  function removeItem(index: number): void {
    if (!cartItems[index]) return;
    cartItems.splice(index, 1);
    saveCart();
  }

  function renderCart(): void {
    const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    cartBadgeCount.forEach(el => {
      el.textContent = String(totalCount);
      el.style.display = totalCount > 0 ? 'flex' : 'none';
    });

    if (!cartDrawerBody) return;

    if (cartItems.length === 0) {
      cartDrawerBody.innerHTML = `
        <div class="cart-empty-state">
          <i data-lucide="shopping-bag" style="width: 44px; height: 44px; stroke-width: 1.5; color: var(--color-grey-400); margin: 0 auto 14px;"></i>
          <h4 style="font-size: 1.125rem; margin-bottom: 6px;">Your Bag is Empty</h4>
          <p style="font-size: 0.8125rem; margin-bottom: 20px;">Explore our brand new and tested pre-owned devices.</p>
          <button class="btn btn-primary" id="cart-start-shopping">Start Shopping</button>
        </div>
      `;
      document.getElementById('cart-start-shopping')?.addEventListener('click', () => {
        closeCart();
        window.location.href = '#iphones';
      });

      if (cartSubtotalEl) cartSubtotalEl.textContent = '₦0';
      if (cartTotalEl) cartTotalEl.textContent = '₦0';
      if (shippingMeterText) shippingMeterText.textContent = 'Add items for Free Ilorin Delivery';
      if (shippingMeterFill) shippingMeterFill.style.width = '0%';

      if (window.lucide) window.lucide.createIcons();
      return;
    }

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const finalTotal = Math.max(0, subtotal - appliedDiscount);

    const freeDeliveryThreshold = 200000;
    const progress = Math.min(100, (subtotal / freeDeliveryThreshold) * 100);

    if (shippingMeterFill) shippingMeterFill.style.width = `${progress}%`;
    if (shippingMeterText) {
      if (subtotal >= freeDeliveryThreshold) {
        shippingMeterText.innerHTML = `<strong>Congratulations!</strong> You qualify for Free Fast Delivery across Ilorin.`;
      } else {
        const remaining = freeDeliveryThreshold - subtotal;
        shippingMeterText.innerHTML = `Add <strong>${formatNaira(remaining)}</strong> more for Free Ilorin Delivery.`;
      }
    }

    cartDrawerBody.innerHTML = cartItems.map((item, index) => `
      <div class="cart-item-row">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-details">
          <h5 class="cart-item-name">${item.name}</h5>
          <p class="cart-item-variant">${item.variant}</p>
          <div class="cart-item-controls">
            <div class="cart-quantity-stepper">
              <button class="stepper-btn btn-dec" data-index="${index}">-</button>
              <span class="stepper-value">${item.quantity}</span>
              <button class="stepper-btn btn-inc" data-index="${index}">+</button>
            </div>
            <span class="cart-item-price">${formatNaira(item.price * item.quantity)}</span>
          </div>
        </div>
        <button class="btn-remove-item" data-index="${index}" style="align-self: flex-start; color: var(--color-grey-400); cursor: pointer; padding: 4px;" title="Remove">
          <i data-lucide="trash-2" style="width: 15px; height: 15px;"></i>
        </button>
      </div>
    `).join('');

    if (cartSubtotalEl) cartSubtotalEl.textContent = formatNaira(subtotal);
    if (cartTotalEl) cartTotalEl.textContent = formatNaira(finalTotal);

    cartDrawerBody.querySelectorAll<HTMLElement>('.btn-dec').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = btn.dataset.index ? parseInt(btn.dataset.index, 10) : -1;
        if (idx >= 0) updateQuantity(idx, -1);
      });
    });
    cartDrawerBody.querySelectorAll<HTMLElement>('.btn-inc').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = btn.dataset.index ? parseInt(btn.dataset.index, 10) : -1;
        if (idx >= 0) updateQuantity(idx, 1);
      });
    });
    cartDrawerBody.querySelectorAll<HTMLElement>('.btn-remove-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = btn.dataset.index ? parseInt(btn.dataset.index, 10) : -1;
        if (idx >= 0) removeItem(idx);
      });
    });

    if (window.lucide) window.lucide.createIcons();
  }

  promoApplyBtn?.addEventListener('click', () => {
    const code = promoInput?.value.trim().toUpperCase();
    if (!promoMessage) return;

    if (code === 'KEYNOTE50' || code === 'QWERTECH') {
      appliedDiscount = 50000;
      promoMessage.style.color = '#0A84FF';
      promoMessage.textContent = 'Promo code applied: ₦50,000 discount applied!';
      renderCart();
    } else if (code) {
      promoMessage.style.color = '#E53E3E';
      promoMessage.textContent = 'Invalid promo code. Try "QWERTECH".';
    }
  });

  function addItem(item: CartItem): void {
    const existingIndex = cartItems.findIndex(i => i.id === item.id && i.variant === item.variant);
    if (existingIndex > -1) {
      cartItems[existingIndex].quantity += item.quantity || 1;
    } else {
      cartItems.push({
        id: item.id,
        name: item.name,
        variant: item.variant,
        price: item.price,
        quantity: item.quantity || 1,
        image: item.image
      });
    }
    saveCart();
    openCart();
  }

  renderCart();

  return {
    addItem,
    openCart,
    closeCart
  };
}
