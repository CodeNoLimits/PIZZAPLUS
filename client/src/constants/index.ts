import { MenuItem, Translations } from '../types';

export const PRIMARY_COLOR = '#FF6347';
export const SECONDARY_COLOR = '#2E7D32';
export const ACCENT_COLOR = '#FFD700';

export const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';

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
    salads: 'סלטים',
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
    salads: 'Salads',
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
    nameHe: 'מגש L',
    nameEn: 'Pizza L',
    descriptionHe: 'פיצה קוטר 36 עם רוטב עגבניות ומוצרלה',
    descriptionEn: '36cm pizza with tomato sauce and mozzarella',
    price: 4500, // ₪45
    category: 'pizzas',
    available: true,
    toppings: ['tomatoes', 'onions', 'mushrooms', 'corn', 'olives-green', 'olives-black', 'bulgarian', 'tuna'],
    toppingPrice: 600, // ₪5-7 per topping
  },
  {
    id: 'pizza-personal',
    nameHe: 'מגש אישי',
    nameEn: 'Personal Pizza',
    descriptionHe: 'פיצה אישית עם רוטב עגבניות ומוצרלה',
    descriptionEn: 'Personal pizza with tomato sauce and mozzarella',
    price: 2800, // ₪28
    category: 'pizzas',
    available: true,
    toppings: ['tomatoes', 'onions', 'mushrooms', 'corn', 'olives-green', 'olives-black', 'bulgarian', 'tuna'],
    toppingPrice: 600, // ₪5-7 per topping
  },
  
  // Pastas
  {
    id: 'pasta-tomato-basil',
    nameHe: 'רוטב עגבניות ובזיליקום',
    nameEn: 'Tomato and Basil Pasta',
    descriptionHe: 'פסטה ברוטב עגבניות טרי עם בזיליקום',
    descriptionEn: 'Pasta in fresh tomato sauce with basil',
    price: 4500, // ₪45
    category: 'pastas',
    available: true,
  },
  {
    id: 'pasta-cream-mushrooms',
    nameHe: 'שמנת פטריות',
    nameEn: 'Mushroom Cream Pasta',
    descriptionHe: 'פסטה ברוטב שמנת עם פטריות טריות',
    descriptionEn: 'Pasta in cream sauce with fresh mushrooms',
    price: 4500, // ₪45
    category: 'pastas',
    available: true,
  },
  {
    id: 'pasta-rose',
    nameHe: 'רוזה',
    nameEn: 'Rosé Pasta',
    descriptionHe: 'פסטה ברוטב עגבניות ושמנת',
    descriptionEn: 'Pasta in tomato and cream sauce',
    price: 4500, // ₪45
    category: 'pastas',
    available: true,
  },
  
  // Salads
  {
    id: 'salad-small',
    nameHe: 'סלט קטן',
    nameEn: 'Small Salad',
    descriptionHe: 'ירקות טריים בתיבול שמן זית ולימון',
    descriptionEn: 'Fresh vegetables with olive oil and lemon dressing',
    price: 3500, // ₪35
    category: 'salads',
    available: true,
    toppings: ['egg', 'tuna', 'avocado', 'bulgarian'],
  },
  {
    id: 'salad-large',
    nameHe: 'סלט גדול',
    nameEn: 'Large Salad',
    descriptionHe: 'ירקות טריים בתיבול שמן זית ולימון',
    descriptionEn: 'Fresh vegetables with olive oil and lemon dressing',
    price: 5000, // ₪50
    category: 'salads',
    available: true,
    toppings: ['egg', 'tuna', 'avocado', 'bulgarian'],
  },
  
  // Main Dishes
  {
    id: 'fish-chips',
    nameHe: 'פיש & צ\'יפס',
    nameEn: 'Fish & Chips',
    descriptionHe: 'דג מטוגן בציפוי פריך עם צ\'יפס',
    descriptionEn: 'Fried fish in crispy coating with fries',
    price: 6100, // ₪61
    category: 'mains',
    available: true,
  },
  {
    id: 'cheese-crust',
    nameHe: 'צ\'יז קראסט',
    nameEn: 'Cheese Crust',
    descriptionHe: 'חזה עוף ממולא בגבינה ומטוגן',
    descriptionEn: 'Chicken breast stuffed with cheese and fried',
    price: 6300, // ₪63
    category: 'mains',
    available: true,
  },
  {
    id: 'soup-seasonal',
    nameHe: 'מרקים (בעונה)',
    nameEn: 'Soups (seasonal)',
    descriptionHe: 'מרק חם',
    descriptionEn: 'Hot soup',
    price: 2500, // ₪25
    category: 'mains',
    available: true,
  },
  
  // Sides
  {
    id: 'fries-small',
    nameHe: 'צ\'יפס קטן',
    nameEn: 'Small Fries',
    descriptionHe: 'מנה קטנה של צ\'יפס זהוב',
    descriptionEn: 'Small portion of golden fries',
    price: 1200, // ₪12
    category: 'sides',
    available: true,
  },
  {
    id: 'fries-large',
    nameHe: 'צ\'יפס גדול',
    nameEn: 'Large Fries',
    descriptionHe: 'מנה גדולה של צ\'יפס זהוב',
    descriptionEn: 'Large portion of golden fries',
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
    price: 1200, // ₪12
    category: 'sides',
    available: true,
  },
  
  // Desserts
  {
    id: 'chocolate-sticks',
    nameHe: 'מקלות שוקולד',
    nameEn: 'Chocolate Sticks',
    descriptionHe: 'מקלות בצק פריכים עם שוקולד חם',
    descriptionEn: 'Crispy dough sticks with hot chocolate',
    price: 2500, // ₪25
    category: 'desserts',
    available: true,
  },
];

export const TOPPINGS = [
  { id: 'tomatoes', nameHe: 'עגבניות', nameEn: 'Tomatoes' },
  { id: 'onions', nameHe: 'בצל', nameEn: 'Onions' },
  { id: 'mushrooms', nameHe: 'פטריות', nameEn: 'Mushrooms' },
  { id: 'corn', nameHe: 'תירס', nameEn: 'Corn' },
  { id: 'olives-green', nameHe: 'זיתים ירוקים', nameEn: 'Green Olives' },
  { id: 'olives-black', nameHe: 'זיתים שחורים', nameEn: 'Black Olives' },
  { id: 'bulgarian', nameHe: 'בולגרית', nameEn: 'Bulgarian Cheese' },
  { id: 'tuna', nameHe: 'טונה', nameEn: 'Tuna' },
  { id: 'egg', nameHe: 'ביצה קשה', nameEn: 'Hard Boiled Egg' },
  { id: 'avocado', nameHe: 'אבוקדו', nameEn: 'Avocado' },
];
