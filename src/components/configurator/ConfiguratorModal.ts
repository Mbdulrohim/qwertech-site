import { products } from '../../data/products';
import { formatNaira } from '../cart/CartDrawer';
import { CartApi, ConfiguratorApi, Product, ProductColor, ProductStorage } from '../../types';

export function initConfiguratorModal(cartApi: CartApi): ConfiguratorApi {
  const modalBackdrop = document.getElementById('configurator-modal');
  const modalContent = document.getElementById('config-modal-content');

  function openConfigurator(productId: string): void {
    const product = products.find(p => p.id === productId);
    if (!product || !modalContent) return;

    let selectedColor: ProductColor = product.colors && product.colors.length > 0 
      ? product.colors[0] 
      : { name: 'Space Black', hex: '#1C1C1E', image: product.image };
      
    let selectedStorage: ProductStorage = product.storage && product.storage.length > 0 
      ? product.storage[0] 
      : { size: 'Standard', price: product.price };
      
    let hasTradeIn = false;
    const tradeInDiscount = 150000;

    function renderAppleBuyPage(): void {
      if (!modalContent || !product) return;
      const basePrice = selectedStorage.price || product.price;
      const finalPrice = Math.max(0, basePrice - (hasTradeIn ? tradeInDiscount : 0));
      const activeImage = selectedColor.image || product.image;

      modalContent.innerHTML = `
        <!-- 1. Apple Sticky Sub-Navigation Bar -->
        <div class="apple-pdp-subnav">
          <div class="apple-subnav-left">
            <span class="apple-subnav-title">${product.name}</span>
          </div>
          <div class="apple-subnav-right">
            <span class="apple-subnav-price">${formatNaira(finalPrice)}</span>
            <button class="apple-close-circle-btn" id="apple-pdp-close" aria-label="Close Product View">
              <i data-lucide="x" style="width: 18px; height: 18px;"></i>
            </button>
          </div>
        </div>

        <!-- 2. Apple 2-Column Responsive Layout -->
        <div class="apple-pdp-layout">
          <!-- Left Column: Apple Sticky Product Showcase -->
          <div class="apple-pdp-gallery-col">
            <div class="apple-pdp-hero-image-wrap">
              <img src="${activeImage}" alt="${product.name} in ${selectedColor.name}" class="apple-pdp-hero-image" id="apple-hero-img">
            </div>
            <p class="apple-pdp-finish-label">
              ${product.name} in <strong>${selectedColor.name}</strong>
            </p>

            <!-- What's In The Box Card -->
            <div class="apple-pdp-box-card">
              <div class="apple-box-title">What's in the Box</div>
              <ul class="apple-box-items">
                <li class="apple-box-item">
                  <i data-lucide="smartphone" style="width: 15px; height: 15px; color: #0071E3;"></i>
                  <span>${product.name}</span>
                </li>
                <li class="apple-box-item">
                  <i data-lucide="cable" style="width: 15px; height: 15px; color: #0071E3;"></i>
                  <span>USB-C Fast Charging Cable (1m)</span>
                </li>
                <li class="apple-box-item">
                  <i data-lucide="shield-check" style="width: 15px; height: 15px; color: #0071E3;"></i>
                  <span>40-Point Diagnostic Inspection Certificate</span>
                </li>
                <li class="apple-box-item">
                  <i data-lucide="award" style="width: 15px; height: 15px; color: #0071E3;"></i>
                  <span>6 Months QwerTech Store Warranty Card</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Right Column: Apple Linear Step-by-Step Selection Flow -->
          <div class="apple-pdp-steps-col">
            <!-- Header Section -->
            <div class="apple-step-header">
              <span class="apple-step-tag ${product.tagType === 'new' ? 'brand-new' : ''}">${product.tag || ''}</span>
              <h1 class="apple-pdp-main-h1">Buy ${product.name}</h1>
              <p class="apple-pdp-price-lead">
                From ${formatNaira(finalPrice)} ${hasTradeIn ? 'with QwerTech Trade-In credit' : ''}
              </p>
            </div>

            <!-- Step 1: Model Choice (Apple Style) -->
            <div class="apple-step-block">
              <div class="apple-step-heading">1. Model. <span>Which is right for you?</span></div>
              <div class="apple-model-cards-grid">
                <div class="apple-model-card active">
                  <div>
                    <div class="apple-model-card-title">${product.name}</div>
                    <div class="apple-model-card-sub">Grade A+ Pristine & Certified</div>
                  </div>
                  <div class="apple-model-card-price">${formatNaira(basePrice)}</div>
                </div>
              </div>
            </div>

            <!-- Step 2: Finish Selection (Apple Swatches) -->
            <div class="apple-step-block">
              <div class="apple-step-heading">2. Finish. <span>Pick your favorite.</span></div>
              <div style="font-size: 0.8125rem; color: #1D1D1F; font-weight: 500;">
                Color — <span id="apple-active-color-name" style="color: #6E6E73;">${selectedColor.name}</span>
              </div>
              <div class="apple-finish-swatches-row">
                ${product.colors && product.colors.length > 0 ? product.colors.map(col => `
                  <div class="apple-swatch-circle ${col.name === selectedColor.name ? 'active' : ''}" 
                       data-color-name="${col.name}" 
                       data-color-hex="${col.hex}" 
                       data-color-img="${col.image}" 
                       style="background-color: ${col.hex};" 
                       title="${col.name}">
                  </div>
                `).join('') : `
                  <div class="apple-swatch-circle active" style="background-color: #1C1C1E;" title="Space Black"></div>
                  <div class="apple-swatch-circle" style="background-color: #9E9A95;" title="Natural Titanium"></div>
                  <div class="apple-swatch-circle" style="background-color: #F2F2F2;" title="White"></div>
                `}
              </div>
            </div>

            <!-- Step 3: Storage Selection -->
            <div class="apple-step-block">
              <div class="apple-step-heading">3. Storage. <span>How much space do you need?</span></div>
              <div class="apple-storage-grid">
                ${product.storage.map(st => `
                  <div class="apple-storage-card ${st.size === selectedStorage.size ? 'active' : ''}" data-size="${st.size}">
                    <div class="apple-storage-size">${st.size}</div>
                    <div class="apple-storage-price">${formatNaira(st.price)}</div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Step 4: Apple Trade-In / Device Swap -->
            <div class="apple-step-block">
              <div class="apple-step-heading">4. QwerTech Trade In. <span>Get ₦150,000 credit.</span></div>
              <div class="apple-tradein-options">
                <div class="apple-tradein-card ${hasTradeIn ? 'active' : ''}" id="tradein-yes">
                  <div class="apple-tradein-card-title">Trade in a smartphone</div>
                  <div class="apple-tradein-card-desc">Save ${formatNaira(tradeInDiscount)} instantly</div>
                </div>
                <div class="apple-tradein-card ${!hasTradeIn ? 'active' : ''}" id="tradein-no">
                  <div class="apple-tradein-card-title">No trade-in</div>
                  <div class="apple-tradein-card-desc">Keep your current phone</div>
                </div>
              </div>
            </div>

            <!-- Step 5: Warranty & Care -->
            <div class="apple-step-block">
              <div class="apple-step-heading">5. QwerTech Care. <span>Protection for your gadget.</span></div>
              <div style="border: 1px solid #D2D2D7; border-radius: 12px; padding: 16px; background-color: #FAFAFC; display: flex; align-items: flex-start; gap: 12px;">
                <i data-lucide="shield-check" style="width: 20px; height: 20px; color: #0071E3; flex-shrink: 0; margin-top: 2px;"></i>
                <div>
                  <div style="font-size: 0.875rem; font-weight: 600; color: #1D1D1F;">6 Months Comprehensive Warranty Included</div>
                  <div style="font-size: 0.75rem; color: #6E6E73; margin-top: 2px;">Covers hardware defects, battery performance guarantee, and free diagnostics across Nigeria.</div>
                </div>
              </div>
            </div>

            <!-- Step 6: Summary & Actions -->
            <div class="apple-pdp-summary-box">
              <div class="apple-summary-total-row">
                <div>
                  <div class="apple-summary-total-label">Total for ${product.name}</div>
                  <div style="font-size: 0.75rem; color: #6E6E73;">${selectedColor.name} • ${selectedStorage.size}</div>
                </div>
                <div class="apple-summary-total-val">${formatNaira(finalPrice)}</div>
              </div>

              <button class="apple-btn-bag" id="apple-add-to-bag">
                <i data-lucide="shopping-bag" style="width: 18px; height: 18px;"></i>
                Add to Bag
              </button>

              <a href="https://wa.me/2348000000000?text=Hello%20QwerTech,%20I%20want%20to%20order%20${encodeURIComponent(product.name)}%20(${encodeURIComponent(selectedColor.name)}%20/%20${encodeURIComponent(selectedStorage.size)})%20for%20${encodeURIComponent(formatNaira(finalPrice))}" target="_blank" rel="noopener" class="apple-btn-whatsapp">
                <i data-lucide="message-circle" style="width: 18px; height: 18px;"></i>
                Order Instantly via WhatsApp
              </a>

              <p class="apple-pdp-shipping-note">
                ⚡ Free Express Delivery in Ilorin. Fast nationwide dispatch across Nigeria.
              </p>
            </div>
          </div>
        </div>
      `;

      if (window.lucide) window.lucide.createIcons();

      // Close modal button
      document.getElementById('apple-pdp-close')?.addEventListener('click', closeModal);

      // Color swatches click
      modalContent.querySelectorAll<HTMLElement>('.apple-swatch-circle').forEach(swatch => {
        swatch.addEventListener('click', () => {
          const colorName = swatch.dataset.colorName;
          const colorHex = swatch.dataset.colorHex;
          const colorImg = swatch.dataset.colorImg;
          if (colorName && colorHex) {
            selectedColor = { name: colorName, hex: colorHex, image: colorImg || product.image };
            renderAppleBuyPage();
          }
        });
      });

      // Storage selection click
      modalContent.querySelectorAll<HTMLElement>('.apple-storage-card').forEach(card => {
        card.addEventListener('click', () => {
          const size = card.dataset.size;
          const found = product.storage.find(s => s.size === size);
          if (found) {
            selectedStorage = found;
            renderAppleBuyPage();
          }
        });
      });

      // Trade-In Options
      document.getElementById('tradein-yes')?.addEventListener('click', () => {
        hasTradeIn = true;
        renderAppleBuyPage();
      });

      document.getElementById('tradein-no')?.addEventListener('click', () => {
        hasTradeIn = false;
        renderAppleBuyPage();
      });

      // Add to Bag
      document.getElementById('apple-add-to-bag')?.addEventListener('click', () => {
        cartApi.addItem({
          id: product.id,
          name: product.name,
          variant: `${selectedColor.name} • ${selectedStorage.size}`,
          price: finalPrice,
          quantity: 1,
          image: activeImage
        });
        closeModal();
      });
    }

    renderAppleBuyPage();
    modalBackdrop?.classList.add('is-open');
    document.body.classList.add('no-scroll');
  }

  function closeModal(): void {
    modalBackdrop?.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
  }

  modalBackdrop?.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  return {
    openConfigurator,
    closeModal
  };
}
