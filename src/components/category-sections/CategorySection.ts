import { products } from '../../data/products';
import { createProductCardHtml } from '../product-card/ProductCard';
import { ConfiguratorApi } from '../../types';

export function renderCategoryGrids(configuratorApi: ConfiguratorApi): void {
  // 1. iPhones Grid
  const iphonesGrid = document.getElementById('grid-iphones-products');
  const iphoneProds = products.filter(p => p.category === 'iphones').slice(0, 4);
  if (iphonesGrid) {
    iphonesGrid.innerHTML = iphoneProds.map(p => createProductCardHtml(p)).join('');
  }

  // 2. Samsung & Google Pixels Grid
  const samsungGrid = document.getElementById('grid-samsung-products');
  const samsungProds = products.filter(p => p.category === 'samsung').slice(0, 4);
  if (samsungGrid) {
    samsungGrid.innerHTML = samsungProds.map(p => createProductCardHtml(p)).join('');
  }

  // 3. MacBooks & Laptops Grid
  const macbooksGrid = document.getElementById('grid-macbooks-products');
  const macbookProds = products.filter(p => p.category === 'laptops').slice(0, 4);
  if (macbooksGrid) {
    macbooksGrid.innerHTML = macbookProds.map(p => createProductCardHtml(p)).join('');
  }

  // 4. Gaming & Tablets Grid
  const gamingGrid = document.getElementById('grid-gaming-products');
  const gamingProds = products.filter(p => p.category === 'gaming').slice(0, 4);
  if (gamingGrid) {
    gamingGrid.innerHTML = gamingProds.map(p => createProductCardHtml(p)).join('');
  }

  // Attach Buy Now & Click events across all product cards
  document.querySelectorAll<HTMLElement>('.product-card').forEach(card => {
    const id = card.dataset.productId;
    const buyBtn = card.querySelector('.btn-buy-now');
    const imageWrap = card.querySelector('.product-card-image-wrap');
    const title = card.querySelector('.product-card-title');

    buyBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      if (id) configuratorApi.openConfigurator(id);
    });

    imageWrap?.addEventListener('click', () => {
      if (id) configuratorApi.openConfigurator(id);
    });

    title?.addEventListener('click', () => {
      if (id) configuratorApi.openConfigurator(id);
    });
  });
}
