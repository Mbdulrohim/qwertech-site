import { navCategories, promoTickerItems } from '../../data/navigation';
import gsap from 'gsap';

declare global {
  interface Window {
    lucide?: {
      createIcons: () => void;
    };
  }
}

export function initHeader(): void {
  const header = document.querySelector('.site-header');
  const navMenuItems = document.querySelectorAll<HTMLElement>('.nav-menu-item');
  const megaMenuPanel = document.querySelector<HTMLElement>('.mega-menu-panel');
  const megaMenuContent = document.getElementById('mega-menu-content');
  const mobileToggleBtn = document.getElementById('mobile-nav-toggle');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  const mobileDrawerClose = document.getElementById('mobile-drawer-close');
  const promoTickerEl = document.getElementById('nav-promo-ticker');

  const searchOpenBtn = document.getElementById('search-open-btn');
  const cartOpenBtn = document.getElementById('cart-open-btn');

  // Sticky header scroll shadow
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });

  // Promo Ticker cycling
  let promoIndex = 0;
  if (promoTickerEl && promoTickerItems.length > 0) {
    promoTickerEl.innerHTML = promoTickerItems[0];
    setInterval(() => {
      promoIndex = (promoIndex + 1) % promoTickerItems.length;
      gsap.to(promoTickerEl, {
        opacity: 0,
        y: -6,
        duration: 0.25,
        onComplete: () => {
          if (promoTickerEl) {
            promoTickerEl.innerHTML = promoTickerItems[promoIndex];
            gsap.fromTo(promoTickerEl, { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.3 });
          }
        }
      });
    }, 4500);
  }

  // Mega Menu Hover Logic
  let megaMenuTimeout: number | null = null;

  function renderMegaMenu(categoryId: string): void {
    const category = navCategories.find(c => c.id === categoryId);
    if (!category || !megaMenuContent) return;

    const sublinksHtml = category.subcategories.map(sub => `
      <a href="${sub.link}" class="mega-menu-item-link">
        <span>${sub.name}</span>
        <i data-lucide="chevron-right" style="width: 14px; height: 14px;"></i>
      </a>
    `).join('');

    const featuredHtml = category.featured.map(feat => `
      <div class="mega-feature-card" onclick="window.location.href='#${categoryId}'">
        <div class="mega-feature-thumb">
          <img src="${feat.image}" alt="${feat.title}" loading="lazy">
        </div>
        <span class="mega-feature-tag">${feat.tag}</span>
        <h4 class="mega-feature-title">${feat.title}</h4>
        <p class="mega-feature-desc">${feat.desc}</p>
      </div>
    `).join('');

    megaMenuContent.innerHTML = `
      <div class="site-container">
        <div class="mega-menu-grid">
          <div class="mega-menu-links-col">
            <span class="mega-menu-category-title">${category.title}</span>
            ${sublinksHtml}
          </div>
          <div class="mega-menu-featured-row">
            ${featuredHtml}
          </div>
        </div>
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();
  }

  navMenuItems.forEach(item => {
    const categoryId = item.dataset.category;
    if (!categoryId) return;

    item.addEventListener('mouseenter', () => {
      if (megaMenuTimeout) clearTimeout(megaMenuTimeout);
      navMenuItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      renderMegaMenu(categoryId);
      megaMenuPanel?.classList.add('is-open');
    });

    item.addEventListener('mouseleave', () => {
      megaMenuTimeout = setTimeout(() => {
        item.classList.remove('active');
        megaMenuPanel?.classList.remove('is-open');
      }, 150);
    });
  });

  megaMenuPanel?.addEventListener('mouseenter', () => {
    if (megaMenuTimeout) clearTimeout(megaMenuTimeout);
    megaMenuPanel.classList.add('is-open');
  });

  megaMenuPanel?.addEventListener('mouseleave', () => {
    megaMenuTimeout = setTimeout(() => {
      navMenuItems.forEach(i => i.classList.remove('active'));
      megaMenuPanel.classList.remove('is-open');
    }, 150);
  });

  // Mobile Drawer Toggle
  function openMobileDrawer(): void {
    mobileDrawer?.classList.add('is-open');
    document.body.classList.add('no-scroll');
  }

  function closeMobileDrawer(): void {
    mobileDrawer?.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
  }

  mobileToggleBtn?.addEventListener('click', openMobileDrawer);
  mobileDrawerClose?.addEventListener('click', closeMobileDrawer);

  mobileDrawer?.addEventListener('click', (e) => {
    if (e.target === mobileDrawer) {
      closeMobileDrawer();
    }
  });

  // Mobile Accordion Items
  document.querySelectorAll<HTMLElement>('.mobile-menu-item').forEach(item => {
    const title = item.querySelector('.mobile-menu-title');
    title?.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      document.querySelectorAll('.mobile-menu-item').forEach(i => i.classList.remove('is-open'));
      if (!isOpen) item.classList.add('is-open');
    });
  });

  document.querySelectorAll<HTMLElement>('.mobile-nav-drawer a').forEach(link => {
    link.addEventListener('click', () => {
      closeMobileDrawer();
    });
  });
}
