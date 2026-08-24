// ==========================================================================
// QWERTECH - MODULAR MAIN APPLICATION ENTRY POINT (TYPESCRIPT)
// ==========================================================================

// Global Foundation Styles
import './styles/tokens.css';
import './styles/base.css';
import './styles/responsive.css';

// Individual Component Styles (Organized in Folders for Easy Editing)
import './components/splash/splash.css';
import './components/header/header.css';
import './components/hero/hero.css';
import './components/deals/deals.css';
import './components/product-card/product-card.css';
import './components/category-sections/category-section.css';
import './components/stories/stories.css';
import './components/perks/perks.css';
import './components/newsletter/newsletter.css';
import './components/footer/footer.css';
import './components/search/search.css';
import './components/cart/cart.css';
import './components/configurator/configurator.css';

// Component Controllers
import { initSplashScreen } from './components/splash/SplashScreen';
import { initHeader } from './components/header/Header';
import { initHeroSlider } from './components/hero/HeroSlider';
import { initDealsSection } from './components/deals/DealsSection';
import { renderCategoryGrids } from './components/category-sections/CategorySection';
import { initStoriesSection } from './components/stories/StoriesSection';
import { initPerksSection } from './components/perks/PerksSection';
import { initNewsletterSection } from './components/newsletter/NewsletterSection';
import { initFooter } from './components/footer/Footer';
import { initSearchOverlay } from './components/search/SearchOverlay';
import { initCartDrawer } from './components/cart/CartDrawer';
import { initConfiguratorModal } from './components/configurator/ConfiguratorModal';
import { products } from './data/products';
import { createProductCardHtml } from './components/product-card/ProductCard';

// Setup Lucide icons
import { createIcons, icons } from 'lucide';

declare global {
  interface Window {
    lucide?: {
      createIcons: () => void;
    };
  }
}

window.lucide = {
  createIcons: () => createIcons({ icons })
};

document.addEventListener('DOMContentLoaded', () => {
  // 0. Initialize Cinematic Splash Screen
  initSplashScreen();

  // 1. Initialize Cart Drawer
  const cartApi = initCartDrawer();

  // 2. Initialize Configurator Modal
  const configuratorApi = initConfiguratorModal(cartApi);

  // 3. Initialize Search Overlay
  initSearchOverlay((productId: string) => {
    configuratorApi.openConfigurator(productId);
  });

  // 4. Initialize Header & Navigation
  initHeader();

  // 5. Initialize Hero Multi-Slider
  initHeroSlider();

  // 6. Render Deals Section & Initialize Filter Tabs
  const dealsGrid = document.getElementById('grid-deals-products');
  const dealProds = products.filter(p => p.category === 'deals');
  if (dealsGrid) {
    dealsGrid.innerHTML = dealProds.map(p => createProductCardHtml(p)).join('');
  }
  initDealsSection();

  // 7. Render Category Grids (iPhones, Samsung & Pixel, MacBooks & Laptops, Gaming & Tablets)
  renderCategoryGrids(configuratorApi);

  // 8. Initialize Stories & Tech Buying Guides
  initStoriesSection();

  // 9. Initialize Value Perks
  initPerksSection();

  // 10. Initialize Newsletter Alerts
  initNewsletterSection();

  // 11. Initialize Footer
  initFooter();

  // Generate all Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
