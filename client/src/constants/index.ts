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
    drinks: 'משקאות',
    
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
    drinks: 'Drinks',
    
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
  fr: {
    // Navigation
    menu: 'Menu',
    about: 'À propos',
    gallery: 'Galerie',
    contact: 'Contact',
    
    // Hero section
    mainTitle: 'Pizza Plus',
    subtitle: 'Restaurant de pizza casher à Jérusalem',
    kosherBadge: 'Casher Certifié',
    viewMenu: 'Voir le menu',
    
    // Menu
    menuTitle: 'Notre Menu',
    addToCart: 'Ajouter',
    
    // Categories
    all: 'Tout',
    pizzas: 'Pizzas',
    pastas: 'Pâtes',
    salads: 'Salades',
    mains: 'Plats principaux',
    sides: 'Accompagnements',
    desserts: 'Desserts',
    drinks: 'Boissons',
    
    // Cart
    cartTitle: 'Votre panier',
    cartEmpty: 'Votre panier est vide',
    total: 'Total:',
    orderWhatsapp: 'Commander via WhatsApp',
    
    // Chat
    chatTitle: 'Assistant Pizza Plus',
    chatPlaceholder: 'Tapez un message...',
    chatWelcome: 'Bonjour! Je suis l\'assistant de Pizza Plus. Comment puis-je vous aider aujourd\'hui?',
    
    // About
    aboutTitle: 'Notre Histoire',
    aboutText: 'Pizza Plus a été fondé avec un amour authentique pour la nourriture casher de qualité. Nous croyons que chaque repas devrait être une expérience spéciale, c\'est pourquoi nous utilisons uniquement les ingrédients les plus fins et les plus frais.',
    kosherTitle: 'Casher Premium',
    kosherText: 'Pizza Plus fonctionne sous la supervision stricte du Grand Rabbinat d\'Israël',
    
    // Contact
    contactTitle: 'Visitez-nous',
    address: '2 Rue Ish Matzliach, Har Homa, Jérusalem',
    phone: '02-9921201',
    whatsappOrders: '054-6083500',
    hours: 'Dim-Jeu: 11h00-23h00 | Ven: 11h00-15h00 | Sam soir: 20h00-23h00',
    
    // Common
    close: 'Fermer',
    currency: '₪',
  },
  ru: {
    // Navigation
    menu: 'Меню',
    about: 'О нас',
    gallery: 'Галерея',
    contact: 'Контакты',
    
    // Hero section
    mainTitle: 'Пицца Плюс',
    subtitle: 'Кошерный ресторан пиццы в Иерусалиме',
    kosherBadge: 'Кошерная сертификация',
    viewMenu: 'Посмотреть меню',
    
    // Menu
    menuTitle: 'Наше меню',
    addToCart: 'Добавить',
    
    // Categories
    all: 'Всё',
    pizzas: 'Пиццы',
    pastas: 'Паста',
    salads: 'Салаты',
    mains: 'Основные блюда',
    sides: 'Гарниры',
    desserts: 'Десерты',
    drinks: 'Напитки',
    
    // Cart
    cartTitle: 'Ваша корзина',
    cartEmpty: 'Ваша корзина пуста',
    total: 'Итого:',
    orderWhatsapp: 'Заказать через WhatsApp',
    
    // Chat
    chatTitle: 'Помощник Pizza Plus',
    chatPlaceholder: 'Введите сообщение...',
    chatWelcome: 'Привет! Я помощник Pizza Plus. Как я могу помочь вам сегодня?',
    
    // About
    aboutTitle: 'Наша история',
    aboutText: 'Pizza Plus была основана с подлинной любовью к качественной кошерной еде. Мы верим, что каждый прием пищи должен быть особенным опытом, поэтому мы используем только самые лучшие и свежие ингредиенты.',
    kosherTitle: 'Премиум кошерность',
    kosherText: 'Pizza Plus работает под строгим надзором Главного раввината Израиля',
    
    // Contact
    contactTitle: 'Посетите нас',
    address: 'Иш Мацлиах 2, Ар Хома, Иерусалим',
    phone: '02-9921201',
    whatsappOrders: '054-6083500',
    hours: 'Вс-Чт: 11:00-23:00 | Пт: 11:00-15:00 | Сб вечер: 20:00-23:00',
    
    // Common
    close: 'Закрыть',
    currency: '₪',
  },
};

export const MENU_ITEMS: MenuItem[] = [
  // Pizzas
  {
    id: 'pizza-l',
    nameHe: 'מגש L',
    nameEn: 'Pizza L',
    descriptionHe: 'פיצה בינונית עם רוטב עגבניות ומוצרלה - קוטר 36',
    descriptionEn: 'Medium pizza with tomato sauce and mozzarella - 36cm diameter',
    price: 5200, // ₪52
    category: 'pizzas',
    available: true,
    toppings: ['tomatoes', 'onions', 'olives-green', 'olives-black', 'mushrooms', 'hot-pepper', 'bulgarian', 'eggplant', 'sweet-potato', 'corn', 'pineapple', 'tuna', 'pesto'],
    toppingPrice: 700, // ₪7 per topping for whole pizza
  },
  {
    id: 'pizza-personal',
    nameHe: 'מגש אישי',
    nameEn: 'Personal Pizza',
    descriptionHe: 'פיצה אישית עם רוטב עגבניות ומוצרלה',
    descriptionEn: 'Personal pizza with tomato sauce and mozzarella',
    price: 3500, // ₪35
    category: 'pizzas',
    available: true,
    toppings: ['tomatoes', 'onions', 'olives-green', 'olives-black', 'mushrooms', 'hot-pepper', 'bulgarian', 'eggplant', 'sweet-potato', 'corn', 'pineapple', 'tuna', 'pesto'],
    toppingPrice: 500, // ₪5 per topping for personal pizza
  },
  
  // Pastas
  {
    id: 'pasta-tomato-basil',
    nameHe: 'רוטב עגבניות ובזיליקום',
    nameEn: 'Tomato and Basil Pasta',
    descriptionHe: 'פסטה ברוטב עגבניות טרי עם בזיליקום',
    descriptionEn: 'Pasta in fresh tomato sauce with basil',
    price: 5200, // ₪52
    category: 'pastas',
    available: true,
  },
  {
    id: 'pasta-cream-mushrooms',
    nameHe: 'שמנת פטריות',
    nameEn: 'Mushroom Cream Pasta',
    descriptionHe: 'פסטה ברוטב שמנת עם פטריות טריות',
    descriptionEn: 'Pasta in cream sauce with fresh mushrooms',
    price: 5200, // ₪52
    category: 'pastas',
    available: true,
  },
  {
    id: 'pasta-rose',
    nameHe: 'רוזה',
    nameEn: 'Rosé Pasta',
    descriptionHe: 'פסטה ברוטב עגבניות ושמנת',
    descriptionEn: 'Pasta in tomato and cream sauce',
    price: 5200, // ₪52
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
    price: 3900, // ₪39
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
    price: 5500, // ₪55
    category: 'salads',
    available: true,
    toppings: ['egg', 'tuna', 'avocado', 'bulgarian'],
  },
  
  // Specials
  {
    id: 'fish-chips',
    nameHe: 'פיש & צ\'יפס',
    nameEn: 'Fish & Chips',
    descriptionHe: 'דג מטוגן בציפוי פריך עם צ\'יפס',
    descriptionEn: 'Fried fish in crispy coating with chips',
    price: 6800, // ₪68
    category: 'mains',
    available: true,
  },
  {
    id: 'cheese-crust',
    nameHe: 'צ\'יז קראסט',
    nameEn: 'Cheese Crust Pizza',
    descriptionHe: 'מגש פיצה עם קראסט ממולא בגבינה',
    descriptionEn: 'Pizza tray with cheese-stuffed crust',
    price: 7200, // ₪72
    category: 'mains',
    available: true,
  },
  {
    id: 'soup-seasonal',
    nameHe: 'מרקים (בעונה)',
    nameEn: 'Soups (seasonal)',
    descriptionHe: 'מרק חם בעונה',
    descriptionEn: 'Hot seasonal soup',
    price: 3200, // ₪32
    category: 'mains',
    available: true,
  },
  {
    id: 'chocolate-sticks',
    nameHe: 'מקלות שוקולד',
    nameEn: 'Chocolate Sticks',
    descriptionHe: 'מקלות עם שוקולד',
    descriptionEn: 'Sticks with chocolate',
    price: 3200, // ₪32
    category: 'desserts',
    available: true,
  },
  
  // Sides
  {
    id: 'fries-small',
    nameHe: 'צ\'יפס קטן',
    nameEn: 'Small Chips',
    descriptionHe: 'מנה קטנה',
    descriptionEn: 'Small portion',
    price: 1500, // ₪15
    category: 'sides',
    available: true,
  },
  {
    id: 'fries-large',
    nameHe: 'צ\'יפס גדול',
    nameEn: 'Large Chips',
    descriptionHe: 'מנה גדולה',
    descriptionEn: 'Large portion',
    price: 2400, // ₪24
    category: 'sides',
    available: true,
  },
  {
    id: 'garlic-bread',
    nameHe: 'לחם שום',
    nameEn: 'Garlic Bread',
    descriptionHe: 'מנה',
    descriptionEn: 'Portion',
    price: 2200, // ₪22
    category: 'sides',
    available: true,
  },
  
  // Drinks
  {
    id: 'bottle-large',
    nameHe: 'בקבוק גדול',
    nameEn: 'Large Bottle',
    descriptionHe: 'בקבוק',
    descriptionEn: 'Bottle',
    price: 1500, // ₪15
    category: 'drinks',
    available: true,
  },
  {
    id: 'bottle-small',
    nameHe: 'בקבוק קטן',
    nameEn: 'Small Bottle',
    descriptionHe: 'בקבוק',
    descriptionEn: 'Bottle',
    price: 1000, // ₪10
    category: 'drinks',
    available: true,
  },
  {
    id: 'can',
    nameHe: 'פחית',
    nameEn: 'Can',
    descriptionHe: 'פחית',
    descriptionEn: 'Can',
    price: 800, // ₪8
    category: 'drinks',
    available: true,
  },
];

export const TOPPINGS = [
  // Pizza toppings
  { id: 'tomatoes', nameHe: 'עגבניות', nameEn: 'Tomatoes', nameFr: 'Tomates', nameRu: 'Помидоры' },
  { id: 'onions', nameHe: 'בצל', nameEn: 'Onions', nameFr: 'Oignons', nameRu: 'Лук' },
  { id: 'olives-green', nameHe: 'זיתים ירוקים', nameEn: 'Green Olives', nameFr: 'Olives vertes', nameRu: 'Зеленые оливки' },
  { id: 'olives-black', nameHe: 'זיתים שחורים', nameEn: 'Black Olives', nameFr: 'Olives noires', nameRu: 'Черные оливки' },
  { id: 'mushrooms', nameHe: 'פטריות', nameEn: 'Mushrooms', nameFr: 'Champignons', nameRu: 'Грибы' },
  { id: 'hot-pepper', nameHe: 'פלפל חריף', nameEn: 'Hot Pepper', nameFr: 'Piment fort', nameRu: 'Острый перец' },
  { id: 'bulgarian', nameHe: 'בולגרית', nameEn: 'Bulgarian Cheese', nameFr: 'Fromage bulgare', nameRu: 'Болгарский сыр' },
  { id: 'eggplant', nameHe: 'חציל', nameEn: 'Eggplant', nameFr: 'Aubergine', nameRu: 'Баклажан' },
  { id: 'sweet-potato', nameHe: 'בטטה', nameEn: 'Sweet Potato', nameFr: 'Patate douce', nameRu: 'Батат' },
  { id: 'corn', nameHe: 'תירס', nameEn: 'Corn', nameFr: 'Maïs', nameRu: 'Кукуруза' },
  { id: 'pineapple', nameHe: 'אננס', nameEn: 'Pineapple', nameFr: 'Ananas', nameRu: 'Ананас' },
  { id: 'tuna', nameHe: 'טונה', nameEn: 'Tuna', nameFr: 'Thon', nameRu: 'Тунец' },
  { id: 'pesto', nameHe: 'פסטו', nameEn: 'Pesto', nameFr: 'Pesto', nameRu: 'Песто' },
  
  // Salad toppings
  { id: 'egg', nameHe: 'ביצה קשה', nameEn: 'Hard Boiled Egg', nameFr: 'Œuf dur', nameRu: 'Вареное яйцо' },
  { id: 'avocado', nameHe: 'אבוקדו', nameEn: 'Avocado', nameFr: 'Avocat', nameRu: 'Авокадо' },
];
