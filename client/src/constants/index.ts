import { MenuItem, Translations } from '../types';

export const PRIMARY_COLOR = '#FF6347';
export const SECONDARY_COLOR = '#2E7D32';
export const ACCENT_COLOR = '#FFD700';

export const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY || '';

export const TRANSLATIONS: Record<string, Translations> = {
  he: {
    // Navigation
    menu: 'תפריט',
    about: 'אודות',
    gallery: 'גלריה',
    contact: 'צור קשר',
    
    // Hero section
    mainTitle: 'פיצה פלוס',
    subtitle: 'פיצריה כשרה בירושלים',
    kosherBadge: 'כשר בד״ץ',
    viewMenu: 'צפה בתפריט',
    
    // Menu
    menuTitle: 'התפריט שלנו',
    addToCart: 'הוסף',
    
    // Categories
    all: 'הכל',
    pizzas: 'פיצות',
    pastas: 'פסטות',
    mains: 'עיקריות',
    sides: 'תוספות',
    desserts: 'קינוחים',
    
    // Cart
    cartTitle: 'העגלה שלך',
    cartEmpty: 'העגלה שלך ריקה',
    total: 'סה״ך:',
    orderWhatsapp: 'שלח הזמנה בוואטסאפ',
    
    // Chat
    chatTitle: 'אסיסטנט פיצה פלוס',
    chatPlaceholder: 'כתוב הודעה...',
    chatWelcome: 'שלום! אני האסיסטנט של פיצה פלוס. איך אני יכול לעזור לך היום?',
    
    // About
    aboutTitle: 'הסיפור שלנו',
    aboutText: 'פיצה פלוס הוקמה מתוך אהבה אמיתית לאוכל איכותי וכשר. אנחנו מאמינים שכל ארוחה צריכה להיות חוויה מיוחדת, ולכן אנו משתמשים רק במרכיבים הטובים והטריים ביותר.',
    kosherTitle: 'כשרות מהודרת',
    kosherText: 'פיצה פלוס פועלת תחת השגחה קפדנית של בד״ץ הרבנות הראשית לישראל',
    
    // Contact
    contactTitle: 'בואו בקרו אותנו',
    address: 'איש מצלח 2, הר חומה, ירושלים',
    phone: '02-9921201',
    whatsappOrders: '054-6083500',
    hours: 'א׳-ה׳: 11:00-23:00 | ו׳: 11:00-15:00 | מוצ״ש: 20:00-23:00',
    
    // Common
    close: 'סגור',
    currency: '₪',
  },
  en: {
    // Navigation
    menu: 'Menu',
    about: 'About',
    gallery: 'Gallery',
    contact: 'Contact',
    
    // Hero section
    mainTitle: 'Pizza Plus',
    subtitle: 'Kosher Pizza Restaurant in Jerusalem',
    kosherBadge: 'Kosher Certified',
    viewMenu: 'View Menu',
    
    // Menu
    menuTitle: 'Our Menu',
    addToCart: 'Add',
    
    // Categories
    all: 'All',
    pizzas: 'Pizzas',
    pastas: 'Pastas',
    mains: 'Main Dishes',
    sides: 'Sides',
    desserts: 'Desserts',
    
    // Cart
    cartTitle: 'Your Cart',
    cartEmpty: 'Your cart is empty',
    total: 'Total:',
    orderWhatsapp: 'Send Order via WhatsApp',
    
    // Chat
    chatTitle: 'Pizza Plus Assistant',
    chatPlaceholder: 'Type a message...',
    chatWelcome: 'Hello! I\'m the Pizza Plus assistant. How can I help you today?',
    
    // About
    aboutTitle: 'Our Story',
    aboutText: 'Pizza Plus was founded with a genuine love for quality kosher food. We believe every meal should be a special experience, which is why we use only the finest and freshest ingredients.',
    kosherTitle: 'Premium Kosher',
    kosherText: 'Pizza Plus operates under strict supervision of the Chief Rabbinate of Israel',
    
    // Contact
    contactTitle: 'Visit Us',
    address: '2 Ish Matzliach St, Har Homa, Jerusalem',
    phone: '02-9921201',
    whatsappOrders: '054-6083500',
    hours: 'Sun-Thu: 11:00-23:00 | Fri: 11:00-15:00 | Sat Night: 20:00-23:00',
    
    // Common
    close: 'Close',
    currency: '₪',
  },
};

export const MENU_ITEMS: MenuItem[] = [
  // Pizzas
  {
    id: 'pizza-l',
    nameHe: 'פיצה משפחתית L',
    nameEn: 'Family Pizza L',
    descriptionHe: 'פיצה קוטר 36 ס״מ עם רוטב עגבניות טרי, מוצרלה איכותית',
    descriptionEn: '36cm pizza with fresh tomato sauce, quality mozzarella',
    price: 5500, // ₪55
    category: 'pizzas',
    available: true,
    toppings: ['mushrooms', 'olives', 'peppers', 'onions', 'tomatoes', 'corn'],
    toppingPrice: 700, // ₪7 per topping
  },
  {
    id: 'pizza-personal',
    nameHe: 'פיצה אישית',
    nameEn: 'Personal Pizza',
    descriptionHe: 'פיצה קוטר 25 ס״מ מושלמת לאדם אחד',
    descriptionEn: '25cm pizza perfect for one person',
    price: 3500, // ₪35
    category: 'pizzas',
    available: true,
    toppings: ['mushrooms', 'olives', 'peppers', 'onions', 'tomatoes', 'corn'],
    toppingPrice: 500, // ₪5 per topping
  },
  
  // Pastas
  {
    id: 'pasta-tomato',
    nameHe: 'פסטה ברוטב עגבניות',
    nameEn: 'Pasta in Tomato Sauce',
    descriptionHe: 'פסטה טרייה ברוטב עגבניות בזיליקום מעולה',
    descriptionEn: 'Fresh pasta in excellent tomato basil sauce',
    price: 4200, // ₪42
    category: 'pastas',
    available: true,
  },
  {
    id: 'pasta-alfredo',
    nameHe: 'פסטה אלפרדו',
    nameEn: 'Alfredo Pasta',
    descriptionHe: 'פסטה ברוטב שמנת עשיר עם פטריות טריות',
    descriptionEn: 'Pasta in rich cream sauce with fresh mushrooms',
    price: 4800, // ₪48
    category: 'pastas',
    available: true,
  },
  
  // Main Dishes
  {
    id: 'fish-chips',
    nameHe: 'פיש אנד צ׳יפס',
    nameEn: 'Fish & Chips',
    descriptionHe: 'פילה דג טרי בציפוי פריך עם צ׳יפס בית',
    descriptionEn: 'Fresh fish fillet in crispy coating with house fries',
    price: 5800, // ₪58
    category: 'mains',
    available: true,
  },
  
  // Sides
  {
    id: 'fries',
    nameHe: 'צ׳יפס בית',
    nameEn: 'House Fries',
    descriptionHe: 'צ׳יפס זהוב ופריך מתפוחי אדמה טריים',
    descriptionEn: 'Golden crispy fries from fresh potatoes',
    price: 1800, // ₪18
    category: 'sides',
    available: true,
  },
  {
    id: 'garlic-bread',
    nameHe: 'לחם שום',
    nameEn: 'Garlic Bread',
    descriptionHe: 'לחם אפוי עם שום וחמאה',
    descriptionEn: 'Baked bread with garlic and butter',
    price: 1500, // ₪15
    category: 'sides',
    available: true,
  },
];

export const TOPPINGS = [
  { id: 'mushrooms', nameHe: 'פטריות', nameEn: 'Mushrooms' },
  { id: 'olives', nameHe: 'זיתים', nameEn: 'Olives' },
  { id: 'peppers', nameHe: 'פלפלים', nameEn: 'Peppers' },
  { id: 'onions', nameHe: 'בצל', nameEn: 'Onions' },
  { id: 'tomatoes', nameHe: 'עגבניות', nameEn: 'Tomatoes' },
  { id: 'corn', nameHe: 'תירס', nameEn: 'Corn' },
];
