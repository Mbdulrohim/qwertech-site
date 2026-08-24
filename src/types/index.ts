export interface ProductColor {
  name: string;
  hex: string;
  image: string;
}

export interface ProductStorage {
  size: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  category: 'iphones' | 'samsung' | 'laptops' | 'gaming' | 'deals';
  dealType?: 'daily' | 'weekly';
  tag?: string;
  tagType?: 'new' | 'promo' | 'hot';
  price: number;
  originalPrice?: number;
  image: string;
  colors: ProductColor[];
  storage: ProductStorage[];
  specs: string[];
}

export interface CartItem {
  id: string;
  name: string;
  variant: string;
  price: number;
  quantity: number;
  image: string;
}

export interface NavSubcategory {
  name: string;
  link: string;
}

export interface NavFeaturedItem {
  tag: string;
  title: string;
  desc: string;
  image: string;
}

export interface NavCategory {
  id: string;
  title: string;
  subcategories: NavSubcategory[];
  featured: NavFeaturedItem[];
}

export interface Story {
  id: string;
  tag: string;
  title: string;
  desc: string;
  image: string;
  readTime: string;
  content: string;
}

export interface CartApi {
  addItem: (item: CartItem) => void;
  openCart: () => void;
  closeCart: () => void;
}

export interface ConfiguratorApi {
  openConfigurator: (productId: string) => void;
  closeModal: () => void;
}
