import { Product } from '../types';

export const products: Product[] = [
  // Daily & Weekly Deals (Top Deals)
  {
    id: 'deal-iphone-15-pro',
    name: 'iPhone 15 Pro (Grade A+)',
    category: 'deals',
    dealType: 'daily',
    tag: 'Daily Moloore',
    tagType: 'hot',
    price: 1290000,
    originalPrice: 1450000,
    image: '/images/prod-flip.jpg',
    colors: [{ name: 'Natural Titanium', hex: '#9E9A95', image: '/images/prod-flip.jpg' }],
    storage: [
      { size: '128GB', price: 1290000 },
      { size: '256GB', price: 1420000 }
    ],
    specs: ['40-Point Diagnostic Certified', '100% Battery Health', '6 Months QwerTech Warranty', 'Same-Day Ilorin Dispatch / Nationwide']
  },
  {
    id: 'deal-s24-ultra',
    name: 'Galaxy S24 Ultra (256GB)',
    category: 'deals',
    dealType: 'daily',
    tag: 'Save ₦200,000',
    tagType: 'hot',
    price: 1850000,
    originalPrice: 2050000,
    image: '/images/prod-fold.jpg',
    colors: [{ name: 'Titanium Grey', hex: '#737270', image: '/images/prod-fold.jpg' }],
    storage: [{ size: '256GB / 12GB RAM', price: 1850000 }],
    specs: ['Galaxy AI Live Translation', '200MP Quad Zoom', 'Built-in S-Pen', 'Brand New Sealed Box']
  },
  {
    id: 'deal-macbook-m1',
    name: 'MacBook Pro 13" M1',
    category: 'deals',
    dealType: 'weekly',
    tag: 'Weekly Deal',
    tagType: 'promo',
    price: 890000,
    originalPrice: 1050000,
    image: '/images/prod-monitor.jpg',
    colors: [{ name: 'Space Grey', hex: '#7D7E80', image: '/images/prod-monitor.jpg' }],
    storage: [{ size: '8GB / 256GB SSD', price: 890000 }],
    specs: ['Apple M1 8-Core Performance', 'Retina TrueTone Display', 'Grade A+ Pristine', 'Free Laptop Sleeve']
  },
  {
    id: 'deal-ps5-slim',
    name: 'PS5 Slim Disc Edition Bundle',
    category: 'deals',
    dealType: 'weekly',
    tag: 'Weekly Deal',
    tagType: 'promo',
    price: 840000,
    originalPrice: 920000,
    image: '/images/prod-gaming-monitor.jpg',
    colors: [{ name: 'Glacier White', hex: '#FFFFFF', image: '/images/prod-gaming-monitor.jpg' }],
    storage: [{ size: '1TB SSD + 1 DualSense', price: 840000 }],
    specs: ['4K 120Hz Ray Tracing', 'DualSense Haptics', '1TB Ultra High-Speed SSD', '1 Year Warranty']
  },

  // iPhones Lineup
  {
    id: 'iphone-16-pro-max',
    name: 'iPhone 16 Pro Max',
    category: 'iphones',
    tag: 'Brand New',
    tagType: 'new',
    price: 2450000,
    originalPrice: 2600000,
    image: '/images/prod-fold.jpg',
    colors: [
      { name: 'Desert Titanium', hex: '#C2AFA2', image: '/images/prod-fold.jpg' },
      { name: 'Natural Titanium', hex: '#9E9A95', image: '/images/prod-fold.jpg' }
    ],
    storage: [
      { size: '256GB', price: 2450000 },
      { size: '512GB', price: 2750000 }
    ],
    specs: ['A18 Pro Bionic Chip', '48MP Fusion Camera', 'Grade 5 Titanium', 'Brand New Sealed']
  },
  {
    id: 'iphone-15-pro',
    name: 'iPhone 15 Pro (Pre-Owned)',
    category: 'iphones',
    tag: 'Pre-Owned A+',
    tagType: 'promo',
    price: 1350000,
    originalPrice: 1500000,
    image: '/images/prod-flip.jpg',
    colors: [
      { name: 'Natural Titanium', hex: '#9E9A95', image: '/images/prod-flip.jpg' }
    ],
    storage: [
      { size: '128GB', price: 1350000 },
      { size: '256GB', price: 1480000 }
    ],
    specs: ['A17 Pro Gaming Processor', '100% Battery Health', '6 Months Warranty', 'Grade A+']
  },
  {
    id: 'iphone-14-plus',
    name: 'iPhone 14 Plus',
    category: 'iphones',
    tag: 'Big Battery',
    tagType: 'promo',
    price: 890000,
    originalPrice: 980000,
    image: '/images/prod-fold.jpg',
    colors: [
      { name: 'Midnight', hex: '#1C2229', image: '/images/prod-fold.jpg' }
    ],
    storage: [
      { size: '128GB', price: 890000 }
    ],
    specs: ['6.7-inch OLED Screen', 'Long Battery Endurance', 'Dual Camera', 'Tested & Certified']
  },
  {
    id: 'iphone-13-compact',
    name: 'iPhone 13 Mini',
    category: 'iphones',
    tag: 'Compact Phone',
    tagType: 'promo',
    price: 620000,
    originalPrice: 690000,
    image: '/images/prod-flip.jpg',
    colors: [
      { name: 'Midnight', hex: '#1C2229', image: '/images/prod-flip.jpg' }
    ],
    storage: [
      { size: '128GB', price: 620000 }
    ],
    specs: ['5.4-inch Pocket Flagship', 'A15 Bionic', 'Ceramic Shield', 'Grade A+']
  },

  // Samsung & Google Pixel Lineup
  {
    id: 'samsung-s24-ultra',
    name: 'Samsung Galaxy S24 Ultra',
    category: 'samsung',
    tag: 'Galaxy AI',
    tagType: 'new',
    price: 1950000,
    originalPrice: 2150000,
    image: '/images/prod-fold.jpg',
    colors: [
      { name: 'Titanium Grey', hex: '#737270', image: '/images/prod-fold.jpg' }
    ],
    storage: [
      { size: '256GB / 12GB RAM', price: 1950000 }
    ],
    specs: ['Galaxy AI Suite', '200MP Quad Zoom', 'Snapdragon 8 Gen 3', 'Built-in S-Pen']
  },
  {
    id: 'samsung-z-flip6',
    name: 'Samsung Galaxy Z Flip6',
    category: 'samsung',
    tag: 'Foldable',
    tagType: 'new',
    price: 1450000,
    originalPrice: 1600000,
    image: '/images/prod-flip.jpg',
    colors: [
      { name: 'Silver Shadow', hex: '#C2C4C6', image: '/images/prod-flip.jpg' }
    ],
    storage: [
      { size: '256GB', price: 1450000 }
    ],
    specs: ['3.4-inch Flex Window', '50MP Dual Cam', 'Vapor Chamber Cooling', 'Brand New']
  },
  {
    id: 'pixel-9-pro-xl',
    name: 'Google Pixel 9 Pro XL',
    category: 'samsung',
    tag: 'Gemini AI',
    tagType: 'new',
    price: 1780000,
    originalPrice: 1950000,
    image: '/images/prod-fold.jpg',
    colors: [
      { name: 'Obsidian', hex: '#26282A', image: '/images/prod-fold.jpg' }
    ],
    storage: [
      { size: '128GB', price: 1780000 }
    ],
    specs: ['Google Tensor G4', 'Super Actua Display', 'Pro Triple Camera', '7 Years OS Updates']
  },
  {
    id: 'pixel-8a',
    name: 'Google Pixel 8a',
    category: 'samsung',
    tag: 'Best Deal',
    tagType: 'promo',
    price: 720000,
    originalPrice: 790000,
    image: '/images/prod-flip.jpg',
    colors: [
      { name: 'Bay Blue', hex: '#8AB4F8', image: '/images/prod-flip.jpg' }
    ],
    storage: [
      { size: '128GB', price: 720000 }
    ],
    specs: ['Tensor G3 AI', '64MP Main Camera', 'Wireless Fast Charge', 'Brand New']
  },

  // MacBooks & Laptops
  {
    id: 'macbook-pro-16-m3',
    name: 'MacBook Pro 16" (M3 Max)',
    category: 'laptops',
    tag: 'Powerhouse',
    tagType: 'new',
    price: 4650000,
    originalPrice: 4900000,
    image: '/images/prod-monitor.jpg',
    colors: [
      { name: 'Space Black', hex: '#242528', image: '/images/prod-monitor.jpg' }
    ],
    storage: [
      { size: '36GB RAM / 1TB SSD', price: 4650000 }
    ],
    specs: ['Apple M3 Max Chip', 'Liquid Retina XDR 120Hz', '22h Battery Life', 'Brand New Sealed']
  },
  {
    id: 'macbook-air-15-m3',
    name: 'MacBook Air 15" (M3)',
    category: 'laptops',
    tag: 'Ultra-Slim',
    tagType: 'new',
    price: 1980000,
    originalPrice: 2150000,
    image: '/images/prod-monitor.jpg',
    colors: [
      { name: 'Midnight', hex: '#1E242B', image: '/images/prod-monitor.jpg' }
    ],
    storage: [
      { size: '8GB / 256GB SSD', price: 1980000 }
    ],
    specs: ['Apple M3 Chip', '15.3" Liquid Retina', 'Silent Fanless Design', 'Brand New']
  },
  {
    id: 'imac-24-m3',
    name: 'iMac 24" 4.5K Retina (M3)',
    category: 'laptops',
    tag: 'All-in-One',
    tagType: 'new',
    price: 2250000,
    originalPrice: 2450000,
    image: '/images/prod-oled.jpg',
    colors: [
      { name: 'Silver', hex: '#E3E4E6', image: '/images/prod-oled.jpg' }
    ],
    storage: [
      { size: '8-core GPU / 256GB SSD', price: 2250000 }
    ],
    specs: ['4.5K Retina Display', 'M3 Chip', 'Magic Keyboard & Mouse', 'Brand New']
  },
  {
    id: 'macbook-pro-13-preowned',
    name: 'MacBook Pro 13" M1 (Pre-Owned)',
    category: 'laptops',
    tag: 'Hot Deal',
    tagType: 'promo',
    price: 950000,
    originalPrice: 1100000,
    image: '/images/prod-monitor.jpg',
    colors: [
      { name: 'Space Grey', hex: '#7D7E80', image: '/images/prod-monitor.jpg' }
    ],
    storage: [
      { size: '8GB / 256GB SSD', price: 950000 }
    ],
    specs: ['M1 8-Core Processor', 'Retina TrueTone', 'Grade A+ Condition', '6 Months Warranty']
  },

  // Gaming & Tablets
  {
    id: 'ps5-slim-disc',
    name: 'Sony PS5 Slim (Disc Edition)',
    category: 'gaming',
    tag: 'Gaming Gear',
    tagType: 'new',
    price: 880000,
    originalPrice: 950000,
    image: '/images/prod-gaming-monitor.jpg',
    colors: [{ name: 'Glacier White', hex: '#FFFFFF', image: '/images/prod-gaming-monitor.jpg' }],
    storage: [{ size: '1TB SSD Edition', price: 880000 }],
    specs: ['4K 120Hz Gaming', '1TB Custom SSD', 'DualSense Haptics', '1 Year Warranty']
  },
  {
    id: 'ipad-pro-13-m4',
    name: 'iPad Pro 13" (M4 OLED)',
    category: 'gaming',
    tag: 'Ultra-Thin',
    tagType: 'new',
    price: 2150000,
    originalPrice: 2350000,
    image: '/images/prod-neo-qled.jpg',
    colors: [{ name: 'Space Black', hex: '#242528', image: '/images/prod-neo-qled.jpg' }],
    storage: [{ size: '256GB Wi-Fi', price: 2150000 }],
    specs: ['Tandem Ultra Retina OLED', 'Apple M4 Chip', '5.1mm Thin', 'Brand New']
  },
  {
    id: 'galaxy-tab-s9-ultra',
    name: 'Galaxy Tab S9 Ultra',
    category: 'gaming',
    tag: 'Flagship Tab',
    tagType: 'new',
    price: 1650000,
    originalPrice: 1800000,
    image: '/images/prod-oled.jpg',
    colors: [{ name: 'Graphite', hex: '#374151', image: '/images/prod-oled.jpg' }],
    storage: [{ size: '256GB + S-Pen', price: 1650000 }],
    specs: ['14.6" Dynamic AMOLED 2X', 'IP68 Water Resistant', 'Snapdragon 8 Gen 2', 'S-Pen Included']
  },
  {
    id: 'steam-deck-oled',
    name: 'Steam Deck OLED (512GB)',
    category: 'gaming',
    tag: 'Handheld',
    tagType: 'new',
    price: 920000,
    originalPrice: 990000,
    image: '/images/prod-gaming-monitor.jpg',
    colors: [{ name: 'Matte Black', hex: '#1C1C1E', image: '/images/prod-gaming-monitor.jpg' }],
    storage: [{ size: '512GB NVMe SSD', price: 920000 }],
    specs: ['7.4" HDR OLED 90Hz', 'AMD Custom APU', '50Wh Battery', 'Brand New']
  }
];

export const searchSuggestions: string[] = [
  'iPhone 16 Pro Max',
  'iPhone 15 Pro Pre-Owned',
  'Samsung S24 Ultra',
  'Google Pixel 9 Pro',
  'MacBook Pro M3',
  'PlayStation 5 Slim',
  'iPad Pro M4',
  'Daily Moloore Deals',
  'Weekly Deals'
];
