import { Product } from '../../types';
import { formatNaira } from '../cart/CartDrawer';

export function createProductCardHtml(product: Product): string {
  return `
    <div class="product-card" data-product-id="${product.id}" data-deal-type="${product.dealType || 'regular'}">
      ${product.tag ? `<span class="product-card-badge tag-${product.tagType || 'promo'}">${product.tag}</span>` : ''}
      
      <div class="product-card-image-wrap">
        <img src="${product.image}" alt="${product.name}" class="product-card-image" loading="lazy">
      </div>

      <div class="product-card-info">
        <h3 class="product-card-title">${product.name}</h3>
        <div class="product-card-price">
          ${formatNaira(product.price)}
          ${product.originalPrice ? `<span class="original-price">${formatNaira(product.originalPrice)}</span>` : ''}
        </div>
      </div>

      <div class="product-card-actions">
        <button class="btn btn-primary btn-buy-now" data-id="${product.id}">Buy Now</button>
      </div>
    </div>
  `;
}
