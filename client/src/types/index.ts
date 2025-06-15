export type Language = 'he' | 'en' | 'fr' | 'ru';

export interface MenuItem {
  id: string;
  nameHe: string;
  nameEn: string;
  nameFr?: string;
  nameRu?: string;
  descriptionHe?: string;
  descriptionEn?: string;
  descriptionFr?: string;
  descriptionRu?: string;
  price: number; // in agorot
  category: string;
  image?: string;
  available: boolean;
  toppings?: string[];
  toppingPrice?: number;
  halfToppingPrice?: number; // for half-pizza toppings
}

export interface CartItem extends MenuItem {
  cartItemId: string;
  quantity: number;
  selectedToppings: string[];
  totalPrice: number;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'gemini';
  timestamp: Date;
}

export interface Translations {
  // Navigation
  menu: string;
  about: string;
  gallery: string;
  contact: string;
  
  // Hero section
  mainTitle: string;
  subtitle: string;
  kosherBadge: string;
  viewMenu: string;
  
  // Menu
  menuTitle: string;
  addToCart: string;
  
  // Categories
  all: string;
  pizzas: string;
  pastas: string;
  salads: string;
  mains: string;
  sides: string;
  desserts: string;
  drinks: string;
  
  // Cart
  cartTitle: string;
  cartEmpty: string;
  total: string;
  orderWhatsapp: string;
  
  // Chat
  chatTitle: string;
  chatPlaceholder: string;
  chatWelcome: string;
  
  // About
  aboutTitle: string;
  aboutText: string;
  kosherTitle: string;
  kosherText: string;
  
  // Contact
  contactTitle: string;
  address: string;
  phone: string;
  whatsappOrders: string;
  hours: string;
  
  // Promotion
  promoTitle: string;
  promoText: string;
  
  // Common
  close: string;
  currency: string;
}
