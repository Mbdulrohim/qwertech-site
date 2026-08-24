import { products, searchSuggestions } from '../../data/products';
import { formatNaira } from '../cart/CartDrawer';

export function initSearchOverlay(openConfiguratorCallback?: (productId: string) => void): void {
  const searchOverlay = document.getElementById('search-overlay');
  const searchOpenBtn = document.getElementById('search-open-btn');
  const searchCloseBtn = document.getElementById('search-close-btn');
  const searchInput = document.getElementById('search-input') as HTMLInputElement | null;
  const searchClearBtn = document.getElementById('search-clear-btn');
  const searchResultsContainer = document.getElementById('search-results-grid');
  const trendingTagsContainer = document.getElementById('search-trending-tags');

  if (trendingTagsContainer) {
    trendingTagsContainer.innerHTML = searchSuggestions.map(tag => `
      <button class="tag-pill" data-query="${tag}">${tag}</button>
    `).join('');

    trendingTagsContainer.querySelectorAll<HTMLElement>('.tag-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        const query = pill.dataset.query;
        if (searchInput && query) {
          searchInput.value = query;
          performSearch(query);
          searchInput.focus();
        }
      });
    });
  }

  function openSearch(): void {
    searchOverlay?.classList.add('is-active');
    document.body.classList.add('no-scroll');
    setTimeout(() => {
      searchInput?.focus();
    }, 100);
    performSearch('');
  }

  function closeSearch(): void {
    searchOverlay?.classList.remove('is-active');
    document.body.classList.remove('no-scroll');
    if (searchInput) searchInput.value = '';
    searchClearBtn?.classList.remove('visible');
  }

  searchOpenBtn?.addEventListener('click', openSearch);
  searchCloseBtn?.addEventListener('click', closeSearch);

  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (searchOverlay?.classList.contains('is-active')) {
        closeSearch();
      } else {
        openSearch();
      }
    }
    if (e.key === 'Escape' && searchOverlay?.classList.contains('is-active')) {
      closeSearch();
    }
  });

  searchInput?.addEventListener('input', (e) => {
    const target = e.target as HTMLInputElement;
    const query = target.value.trim();
    if (query.length > 0) {
      searchClearBtn?.classList.add('visible');
    } else {
      searchClearBtn?.classList.remove('visible');
    }
    performSearch(query);
  });

  searchClearBtn?.addEventListener('click', () => {
    if (searchInput) {
      searchInput.value = '';
      searchClearBtn.classList.remove('visible');
      performSearch('');
      searchInput.focus();
    }
  });

  function performSearch(query: string): void {
    if (!searchResultsContainer) return;
    const cleanQuery = query.toLowerCase();

    const filtered = cleanQuery === ''
      ? products.slice(0, 6)
      : products.filter(p => 
          p.name.toLowerCase().includes(cleanQuery) ||
          p.category.toLowerCase().includes(cleanQuery) ||
          p.specs.some(s => s.toLowerCase().includes(cleanQuery))
        );

    if (filtered.length === 0) {
      searchResultsContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 32px 0; color: var(--color-text-muted);">
          <p>No devices found matching "<strong>${query}</strong>".</p>
        </div>
      `;
      return;
    }

    searchResultsContainer.innerHTML = filtered.map(product => `
      <div class="search-result-item" data-product-id="${product.id}">
        <img src="${product.image}" alt="${product.name}" class="search-result-thumb">
        <div class="search-result-info">
          <h5>${product.name}</h5>
          <p>${formatNaira(product.price)}</p>
        </div>
      </div>
    `).join('');

    searchResultsContainer.querySelectorAll<HTMLElement>('.search-result-item').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.dataset.productId;
        closeSearch();
        if (openConfiguratorCallback && id) {
          openConfiguratorCallback(id);
        }
      });
    });
  }
}
