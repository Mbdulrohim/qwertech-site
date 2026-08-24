import { NavCategory } from '../types';

export const navCategories: NavCategory[] = [
  {
    id: 'iphones',
    title: 'iPhones',
    subcategories: [
      { name: 'All iPhones', link: '#iphones' },
      { name: 'iPhone 16 Pro Max & 16 Pro', link: '#iphones' },
      { name: 'iPhone 15 Series (Brand New)', link: '#iphones' },
      { name: 'iPhone 14 & 13 Series', link: '#iphones' },
      { name: 'Pre-Owned iPhones (Grade A+)', link: '#iphones' },
      { name: 'Compact Mini iPhones', link: '#iphones' },
      { name: 'iPhone 18 Coming Soon Hub', link: '#hero-slider' }
    ],
    featured: [
      {
        tag: 'Flagship Apple',
        title: 'iPhone 16 Pro Max',
        desc: 'From ₦2,450,000 | In Stock in Ilorin, Nigeria',
        image: '/images/prod-fold.jpg'
      },
      {
        tag: 'Best Value Deal',
        title: 'iPhone 15 Pro (Pre-Owned)',
        desc: 'From ₦1,350,000 | 100% Battery Tested',
        image: '/images/prod-flip.jpg'
      },
      {
        tag: 'Next Generation',
        title: 'iPhone 18 Coming Soon',
        desc: 'Pre-register for early Nigerian VIP allocation',
        image: '/images/hero-keynote.jpg'
      }
    ]
  },
  {
    id: 'samsung',
    title: 'Samsung',
    subcategories: [
      { name: 'All Samsung Phones', link: '#samsung' },
      { name: 'Galaxy S24 Ultra & S24+', link: '#samsung' },
      { name: 'Galaxy Z Fold6 & Flip6', link: '#samsung' },
      { name: 'Galaxy S23 Series (Pre-Owned)', link: '#samsung' },
      { name: 'Galaxy Tab S9 Series', link: '#gaming' },
      { name: 'Samsung Accessories & S-Pen', link: '#samsung' }
    ],
    featured: [
      {
        tag: 'Galaxy AI Titan',
        title: 'Galaxy S24 Ultra',
        desc: 'From ₦1,950,000 | Snapdragon 8 Gen 3',
        image: '/images/prod-fold.jpg'
      },
      {
        tag: 'Next Flip',
        title: 'Galaxy Z Flip6',
        desc: 'From ₦1,450,000 | Compact Flex Window',
        image: '/images/prod-flip.jpg'
      }
    ]
  },
  {
    id: 'google-pixel',
    title: 'Google Pixel',
    subcategories: [
      { name: 'All Google Pixel', link: '#samsung' },
      { name: 'Pixel 9 Pro & 9 Pro XL', link: '#samsung' },
      { name: 'Pixel 8a (Best Value AI)', link: '#samsung' },
      { name: 'Pixel 7 Pro (Pre-Owned)', link: '#samsung' },
      { name: 'Google Tensor Accessories', link: '#samsung' }
    ],
    featured: [
      {
        tag: 'Gemini AI Flagship',
        title: 'Pixel 9 Pro XL',
        desc: 'From ₦1,780,000 | 50MP Pro Triple Cam',
        image: '/images/prod-fold.jpg'
      },
      {
        tag: 'Compact Value',
        title: 'Pixel 8a',
        desc: 'From ₦720,000 | Tensor G3 AI Inside',
        image: '/images/prod-flip.jpg'
      }
    ]
  },
  {
    id: 'macbooks-imacs',
    title: 'MacBooks & iMacs',
    subcategories: [
      { name: 'All Apple Mac Lineup', link: '#laptops' },
      { name: 'MacBook Pro 16" & 14" (M3 Max)', link: '#laptops' },
      { name: 'MacBook Air 15" & 13" (M3)', link: '#laptops' },
      { name: 'iMac 24" 4.5K Retina', link: '#laptops' },
      { name: 'Mac Studio & Mac Mini M2', link: '#laptops' },
      { name: 'Certified Pre-Owned MacBooks', link: '#laptops' }
    ],
    featured: [
      {
        tag: 'Maximum Performance',
        title: 'MacBook Pro 16" M3 Max',
        desc: 'From ₦4,650,000 | Up to 128GB Unified Memory',
        image: '/images/prod-monitor.jpg'
      },
      {
        tag: 'All-In-One Studio',
        title: 'iMac 24" 4.5K Retina',
        desc: 'From ₦2,250,000 | Ultra-Thin M3 Beauty',
        image: '/images/prod-oled.jpg'
      }
    ]
  },
  {
    id: 'gaming-tablets',
    title: 'Gaming & Tablets',
    subcategories: [
      { name: 'Sony PlayStation 5 Slim', link: '#gaming' },
      { name: 'Steam Deck OLED Handheld', link: '#gaming' },
      { name: 'iPad Pro M4 (Tandem OLED)', link: '#gaming' },
      { name: 'iPad Air 13" & iPad Mini 6', link: '#gaming' },
      { name: 'Galaxy Tab S9 Ultra & Plus', link: '#gaming' },
      { name: 'DualSense Controllers & Headsets', link: '#gaming' }
    ],
    featured: [
      {
        tag: 'Next-Gen Gaming',
        title: 'PS5 Slim Disc Bundle',
        desc: 'From ₦880,000 | 4K 120Hz Ray Tracing',
        image: '/images/prod-gaming-monitor.jpg'
      },
      {
        tag: 'Portable PC',
        title: 'Steam Deck OLED',
        desc: 'From ₦920,000 | 90Hz HDR Handheld',
        image: '/images/prod-gaming-monitor.jpg'
      }
    ]
  },
  {
    id: 'deals',
    title: 'Daily & Weekly Deals',
    subcategories: [
      { name: '⚡ All Live Flash Deals', link: '#deals-spotlight' },
      { name: '🔥 Daily Moloore Offers', link: '#deals-spotlight' },
      { name: '⚡ Weekly Mega Discounts', link: '#deals-spotlight' },
      { name: '📦 Open-Box Clearout Deals', link: '#deals-spotlight' },
      { name: '🔄 Device Swap Specials', link: '#perks' }
    ],
    featured: [
      {
        tag: 'Daily Moloore',
        title: 'iPhone 15 Pro (Grade A+)',
        desc: '₦1,290,000 (Save ₦160,000 Today)',
        image: '/images/prod-flip.jpg'
      },
      {
        tag: 'Weekly Mega',
        title: 'MacBook Pro 13" M1',
        desc: '₦890,000 (Save ₦160,000 This Week)',
        image: '/images/prod-monitor.jpg'
      }
    ]
  }
];

export interface FooterColumn {
  title: string;
  links: Array<{ name: string; href: string }>;
}

export const footerColumns: FooterColumn[] = [
  {
    title: 'Phones & Computing',
    links: [
      { name: 'Brand New iPhones', href: '#iphones' },
      { name: 'Pre-Owned iPhones (Grade A+)', href: '#iphones' },
      { name: 'Samsung Galaxy S24 Series', href: '#samsung' },
      { name: 'Google Pixel 9 Series', href: '#samsung' },
      { name: 'MacBook Pro & MacBook Air M3', href: '#laptops' },
      { name: 'iMac 24" Retina All-in-One', href: '#laptops' }
    ]
  },
  {
    title: 'Gaming & Gadgets',
    links: [
      { name: 'Sony PlayStation 5 Slim', href: '#gaming' },
      { name: 'Steam Deck OLED Handheld', href: '#gaming' },
      { name: 'iPad Pro M4 & iPad Air', href: '#gaming' },
      { name: 'Galaxy Tab S9 Ultra', href: '#gaming' },
      { name: 'DualSense & Pro Controllers', href: '#gaming' }
    ]
  },
  {
    title: 'QwerTech Services',
    links: [
      { name: '40-Point Diagnostic Check', href: '#perks' },
      { name: 'Device Swap & Trade-In', href: '#perks' },
      { name: 'Express Delivery (Ilorin & Nationwide)', href: '#perks' },
      { name: 'Warranty & After-Sales Repair', href: '#perks' },
      { name: 'Corporate & Bulk Gadget Orders', href: '#perks' }
    ]
  },
  {
    title: 'Customer Support',
    links: [
      { name: 'Call or WhatsApp: +234 800 QWERTECH', href: 'https://wa.me/2348000000000' },
      { name: 'Track Your Delivery', href: '#cart' },
      { name: 'Physical Store: Ilorin, Kwara State', href: '#support' },
      { name: 'Frequently Asked Questions', href: '#support' },
      { name: 'Return & Exchange Policy', href: '#support' }
    ]
  }
];

export const promoTickerItems: string[] = [
  '⚡ DAILY MOLOORE DEALS LIVE: Save up to ₦150,000 on Certified Pre-Owned iPhones & MacBooks',
  '🚚 FREE FAST DELIVERY: Across Ilorin on Orders Over ₦200,000 | Fast Nationwide Shipping',
  '🛡️ 100% VERIFIED QUALITY: Every Pre-Owned Device Undergoes 40-Point Testing with Full Warranty',
  '🚀 IPHONE 18 COMING SOON: Pre-Register Now for Exclusive Nigerian Launch Priority',
  '🔄 SWAP & UPGRADE: Trade In Your Old Phone or Laptop for Instant Value Towards Any New Gadget'
];
