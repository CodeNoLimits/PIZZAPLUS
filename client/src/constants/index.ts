import { MenuItem, Translations } from '../types';
import pizzaLImage from '@assets/image_1749422361511.png';
import pizzaXLImage from '@assets/image_1749422609268.png';
import fishChipsImage from '@assets/image_1749422785796.png';
import smallSaladImage from '@assets/image_1749422920149.png';
import largeSaladImage from '@assets/image_1749423026096.png';
import mushroomCreamImage from '@assets/image_1749423091982.png';
import personalPizzaImage from '@assets/image_1749423174355.png';
import rosePastaImage from '@assets/image_1749423419789.png';
import basilPastaImage from '@assets/image_1749423446670.png';
import garlicBreadImage from '@assets/image_1749423760035.png';
import soupImage from '@assets/image_1749423822674.png';
import chocolateSticksImage from '@assets/image_1749423875451.png';
import largeFriesImage from '@assets/image_1749424100080.png';
import cheeseCrustImage from '@assets/image_1749424147684.png';

export const PRIMARY_COLOR = '#FF6347';
export const SECONDARY_COLOR = '#2E7D32';
export const ACCENT_COLOR = '#FFD700';

export const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || 'AIzaSyAlIBrQ16b_xVo-gY5JyBTCEEnfyUdjT7I';

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
    id: 'pizza-xl',
    nameHe: 'מגש XL',
    nameEn: 'Pizza XL',
    nameFr: 'Pizza XL',
    nameRu: 'Пицца XL',
    descriptionHe: 'פיצה גדולה עם רוטב עגבניות ומוצרלה - קוטר 42',
    descriptionEn: 'Large pizza with tomato sauce and mozzarella - 42cm diameter',
    descriptionFr: 'Grande pizza avec sauce tomate et mozzarella - diamètre 42cm',
    descriptionRu: 'Большая пицца с томатным соусом и моцареллой - диаметр 42см',
    price: 6500, // ₪65
    category: 'pizzas',
    image: pizzaXLImage,
    available: true,
    toppings: ['tomatoes', 'onions', 'olives-green', 'olives-black', 'mushrooms', 'hot-pepper', 'bulgarian', 'eggplant', 'sweet-potato', 'corn', 'pineapple', 'tuna', 'pesto'],
    toppingPrice: 850, // ₪8.5 per topping (20% more than L)
  },
  {
    id: 'pizza-l',
    nameHe: 'מגש L',
    nameEn: 'Pizza L',
    nameFr: 'Pizza L',
    nameRu: 'Пицца L',
    descriptionHe: 'פיצה בינונית עם רוטב עגבניות ומוצרלה - קוטר 36',
    descriptionEn: 'Medium pizza with tomato sauce and mozzarella - 36cm diameter',
    descriptionFr: 'Pizza moyenne avec sauce tomate et mozzarella - diamètre 36cm',
    descriptionRu: 'Средняя пицца с томатным соусом и моцареллой - диаметр 36см',
    price: 5200, // ₪52
    category: 'pizzas',
    image: pizzaLImage,
    available: true,
    toppings: ['tomatoes', 'onions', 'olives-green', 'olives-black', 'mushrooms', 'hot-pepper', 'bulgarian', 'eggplant', 'sweet-potato', 'corn', 'pineapple', 'tuna', 'pesto'],
    toppingPrice: 700, // ₪7 per topping for whole pizza
    halfToppingPrice: 600, // ₪6 per topping for half pizza (20% more than CSV ₪5)
  },
  {
    id: 'pizza-personal',
    nameHe: 'מגש אישי',
    nameEn: 'Personal Pizza',
    nameFr: 'Pizza Individuelle',
    nameRu: 'Персональная Пицца',
    descriptionHe: 'פיצה אישית עם רוטב עגבניות ומוצרלה',
    descriptionEn: 'Personal pizza with tomato sauce and mozzarella',
    descriptionFr: 'Pizza individuelle avec sauce tomate et mozzarella',
    descriptionRu: 'Персональная пицца с томатным соусом и моцареллой',
    price: 3500, // ₪35
    category: 'pizzas',
    image: personalPizzaImage,
    available: true,
    toppings: ['tomatoes', 'onions', 'olives-green', 'olives-black', 'mushrooms', 'hot-pepper', 'bulgarian', 'eggplant', 'sweet-potato', 'corn', 'pineapple', 'tuna', 'pesto'],
    toppingPrice: 600, // ₪6 per topping (20% more than CSV ₪5)
  },
  
  // Pastas
  {
    id: 'pasta-tomato-basil',
    nameHe: 'רוטב עגבניות ובזיליקום',
    nameEn: 'Tomato and Basil Pasta',
    nameFr: 'Pâtes Tomate et Basilic',
    nameRu: 'Паста с Томатами и Базиликом',
    descriptionHe: 'פסטה ברוטב עגבניות טרי עם בזיליקום',
    descriptionEn: 'Pasta in fresh tomato sauce with basil',
    descriptionFr: 'Pâtes dans une sauce tomate fraîche avec basilic',
    descriptionRu: 'Паста в свежем томатном соусе с базиликом',
    price: 5200, // ₪52
    category: 'pastas',
    image: basilPastaImage,
    available: true,
  },
  {
    id: 'pasta-cream-mushrooms',
    nameHe: 'שמנת פטריות',
    nameEn: 'Mushroom Cream Pasta',
    nameFr: 'Pâtes Crème aux Champignons',
    nameRu: 'Паста в Сливочном Соусе с Грибами',
    descriptionHe: 'פסטה ברוטב שמנת עם פטריות טריות',
    descriptionEn: 'Pasta in cream sauce with fresh mushrooms',
    descriptionFr: 'Pâtes dans une sauce à la crème avec champignons frais',
    descriptionRu: 'Паста в сливочном соусе со свежими грибами',
    price: 5200, // ₪52
    category: 'pastas',
    image: mushroomCreamImage,
    available: true,
  },
  {
    id: 'pasta-rose',
    nameHe: 'רוזה',
    nameEn: 'Rosé Pasta',
    nameFr: 'Pâtes Rosé',
    nameRu: 'Паста Розе',
    descriptionHe: 'פסטה ברוטב עגבניות ושמנת',
    descriptionEn: 'Pasta in tomato and cream sauce',
    descriptionFr: 'Pâtes dans une sauce tomate et crème',
    descriptionRu: 'Паста в томатно-сливочном соусе',
    price: 5200, // ₪52
    category: 'pastas',
    image: rosePastaImage,
    available: true,
  },
  
  // Salads
  {
    id: 'salad-small',
    nameHe: 'סלט קטן',
    nameEn: 'Small Salad',
    nameFr: 'Petite Salade',
    nameRu: 'Маленький Салат',
    descriptionHe: 'ירקות טריים בתיבול שמן זית ולימון',
    descriptionEn: 'Fresh vegetables with olive oil and lemon dressing',
    descriptionFr: 'Légumes frais avec vinaigrette à l\'huile d\'olive et citron',
    descriptionRu: 'Свежие овощи с заправкой из оливкового масла и лимона',
    price: 3900, // ₪39
    category: 'salads',
    image: smallSaladImage,
    available: true,
    toppings: ['egg', 'tuna', 'avocado', 'bulgarian'],
  },
  {
    id: 'salad-large',
    nameHe: 'סלט גדול',
    nameEn: 'Large Salad',
    nameFr: 'Grande Salade',
    nameRu: 'Большой Салат',
    descriptionHe: 'ירקות טריים בתיבול שמן זית ולימון',
    descriptionEn: 'Fresh vegetables with olive oil and lemon dressing',
    descriptionFr: 'Légumes frais avec vinaigrette à l\'huile d\'olive et citron',
    descriptionRu: 'Свежие овощи с заправкой из оливкового масла и лимона',
    price: 5500, // ₪55
    category: 'salads',
    image: largeSaladImage,
    available: true,
    toppings: ['egg', 'tuna', 'avocado', 'bulgarian'],
  },
  
  // Specials
  {
    id: 'fish-chips',
    nameHe: 'פיש & צ\'יפס',
    nameEn: 'Fish & Chips',
    nameFr: 'Poisson et Frites',
    nameRu: 'Рыба с Картофелем',
    descriptionHe: 'דג מטוגן בציפוי פריך עם צ\'יפס',
    descriptionEn: 'Fried fish in crispy coating with chips',
    descriptionFr: 'Poisson frit dans un enrobage croustillant avec frites',
    descriptionRu: 'Жареная рыба в хрустящей панировке с картофелем фри',
    price: 6800, // ₪68
    category: 'mains',
    image: fishChipsImage,
    available: true,
  },
  {
    id: 'cheese-crust',
    nameHe: 'צ\'יז קראסט',
    nameEn: 'Cheese Crust Pizza',
    nameFr: 'Pizza Croûte au Fromage',
    nameRu: 'Пицца с Сырной Корочкой',
    descriptionHe: 'מגש פיצה עם קראסט ממולא בגבינה',
    descriptionEn: 'Pizza tray with cheese-stuffed crust',
    descriptionFr: 'Pizza avec croûte farcie au fromage',
    descriptionRu: 'Пицца с корочкой, фаршированной сыром',
    price: 7200, // ₪72
    category: 'mains',
    image: cheeseCrustImage,
    available: true,
  },
  {
    id: 'soup-seasonal',
    nameHe: 'מרקים (בעונה)',
    nameEn: 'Soups (seasonal)',
    nameFr: 'Soupes (saisonnières)',
    nameRu: 'Супы (сезонные)',
    descriptionHe: 'מרק חם בעונה',
    descriptionEn: 'Hot seasonal soup',
    descriptionFr: 'Soupe chaude de saison',
    descriptionRu: 'Горячий сезонный суп',
    price: 3200, // ₪32
    category: 'mains',
    image: soupImage,
    available: true,
  },
  {
    id: 'chocolate-sticks',
    nameHe: 'מקלות שוקולד',
    nameEn: 'Chocolate Sticks',
    nameFr: 'Bâtonnets au Chocolat',
    nameRu: 'Шоколадные Палочки',
    descriptionHe: 'מקלות עם שוקולד',
    descriptionEn: 'Sticks with chocolate',
    descriptionFr: 'Bâtonnets avec chocolat',
    descriptionRu: 'Палочки с шоколадом',
    price: 3200, // ₪32
    category: 'desserts',
    image: chocolateSticksImage,
    available: true,
  },
  
  // Sides
  {
    id: 'fries-small',
    nameHe: 'צ\'יפס קטן',
    nameEn: 'Small Chips',
    nameFr: 'Petites Frites',
    nameRu: 'Маленькая Картошка',
    descriptionHe: 'מנה קטנה',
    descriptionEn: 'Small portion',
    descriptionFr: 'Petite portion',
    descriptionRu: 'Маленькая порция',
    price: 1500, // ₪15
    category: 'sides',
    available: true,
  },
  {
    id: 'fries-large',
    nameHe: 'צ\'יפס גדול',
    nameEn: 'Large Chips',
    nameFr: 'Grosses Frites',
    nameRu: 'Большая Картошка',
    descriptionHe: 'מנה גדולה',
    descriptionEn: 'Large portion',
    descriptionFr: 'Grande portion',
    descriptionRu: 'Большая порция',
    price: 2400, // ₪24
    category: 'sides',
    image: largeFriesImage,
    available: true,
  },
  {
    id: 'garlic-bread',
    nameHe: 'לחם שום',
    nameEn: 'Garlic Bread',
    nameFr: 'Pain à l\'Ail',
    nameRu: 'Чесночный Хлеб',
    descriptionHe: 'מנה',
    descriptionEn: 'Portion',
    descriptionFr: 'Portion',
    descriptionRu: 'Порция',
    price: 2200, // ₪22
    category: 'sides',
    image: garlicBreadImage,
    available: true,
  },
  
  // Drinks
  {
    id: 'bottle-large',
    nameHe: 'בקבוק גדול',
    nameEn: 'Large Bottle',
    nameFr: 'Grande Bouteille',
    nameRu: 'Большая Бутылка',
    descriptionHe: 'בקבוק',
    descriptionEn: 'Bottle',
    descriptionFr: 'Bouteille',
    descriptionRu: 'Бутылка',
    price: 1500, // ₪15
    category: 'drinks',
    available: true,
  },
  {
    id: 'bottle-small',
    nameHe: 'בקבוק קטן',
    nameEn: 'Small Bottle',
    nameFr: 'Petite Bouteille',
    nameRu: 'Маленькая Бутылка',
    descriptionHe: 'בקבוק',
    descriptionEn: 'Bottle',
    descriptionFr: 'Bouteille',
    descriptionRu: 'Бутылка',
    price: 1000, // ₪10
    category: 'drinks',
    available: true,
  },
  {
    id: 'can',
    nameHe: 'פחית',
    nameEn: 'Can',
    nameFr: 'Canette',
    nameRu: 'Банка',
    descriptionHe: 'פחית',
    descriptionEn: 'Can',
    descriptionFr: 'Canette',
    descriptionRu: 'Банка',
    price: 800, // ₪8
    category: 'drinks',
    available: true,
  },
];

export const TOPPINGS = [
  // Pizza toppings with pricing info - ALL LANGUAGES INCLUDED
  { 
    id: 'tomatoes', 
    nameHe: 'עגבניות', 
    nameEn: 'Tomatoes', 
    nameFr: 'Tomates', 
    nameRu: 'Помидоры',
    priceXL: 850, // ₪8.5 for XL
    priceL: 700, // ₪7 for L
    pricePersonal: 600, // ₪6 for Personal
    priceHalf: 600 // ₪6 for half L
  },
  { 
    id: 'onions', 
    nameHe: 'בצל', 
    nameEn: 'Onions', 
    nameFr: 'Oignons', 
    nameRu: 'Лук',
    priceXL: 850,
    priceL: 700,
    pricePersonal: 600,
    priceHalf: 600
  },
  { 
    id: 'olives-green', 
    nameHe: 'זיתים ירוקים', 
    nameEn: 'Green Olives', 
    nameFr: 'Olives vertes', 
    nameRu: 'Зеленые оливки',
    priceXL: 850,
    priceL: 700,
    pricePersonal: 600,
    priceHalf: 600
  },
  { 
    id: 'olives-black', 
    nameHe: 'זיתים שחורים', 
    nameEn: 'Black Olives', 
    nameFr: 'Olives noires', 
    nameRu: 'Черные оливки',
    priceXL: 850,
    priceL: 700,
    pricePersonal: 600,
    priceHalf: 600
  },
  { 
    id: 'mushrooms', 
    nameHe: 'פטריות', 
    nameEn: 'Mushrooms', 
    nameFr: 'Champignons', 
    nameRu: 'Грибы',
    priceXL: 850,
    priceL: 700,
    pricePersonal: 600,
    priceHalf: 600
  },
  { 
    id: 'hot-pepper', 
    nameHe: 'פלפל חריף', 
    nameEn: 'Hot Pepper', 
    nameFr: 'Piment fort', 
    nameRu: 'Острый перец',
    priceXL: 850,
    priceL: 700,
    pricePersonal: 600,
    priceHalf: 600
  },
  { 
    id: 'bulgarian', 
    nameHe: 'בולגרית', 
    nameEn: 'Bulgarian Cheese', 
    nameFr: 'Fromage bulgare', 
    nameRu: 'Болгарский сыр',
    priceXL: 1200, // ₪12 for XL (premium topping)
    priceL: 1000, // ₪10 for L
    pricePersonal: 800, // ₪8 for Personal
    priceHalf: 700 // ₪7 for half L
  },
  { 
    id: 'eggplant', 
    nameHe: 'חציל', 
    nameEn: 'Eggplant', 
    nameFr: 'Aubergine', 
    nameRu: 'Баклажан',
    priceXL: 850,
    priceL: 700,
    pricePersonal: 600,
    priceHalf: 600
  },
  { 
    id: 'sweet-potato', 
    nameHe: 'בטטה', 
    nameEn: 'Sweet Potato', 
    nameFr: 'Patate douce', 
    nameRu: 'Батат',
    priceXL: 850,
    priceL: 700,
    pricePersonal: 600,
    priceHalf: 600
  },
  { 
    id: 'corn', 
    nameHe: 'תירס', 
    nameEn: 'Corn', 
    nameFr: 'Maïs', 
    nameRu: 'Кукуруза',
    priceXL: 850,
    priceL: 700,
    pricePersonal: 600,
    priceHalf: 600
  },
  { 
    id: 'pineapple', 
    nameHe: 'אננס', 
    nameEn: 'Pineapple', 
    nameFr: 'Ananas', 
    nameRu: 'Ананас',
    priceXL: 850,
    priceL: 700,
    pricePersonal: 600,
    priceHalf: 600
  },
  { 
    id: 'tuna', 
    nameHe: 'טונה', 
    nameEn: 'Tuna', 
    nameFr: 'Thon', 
    nameRu: 'Тунец',
    priceXL: 1200, // ₪12 for XL (premium topping)
    priceL: 1000, // ₪10 for L
    pricePersonal: 800, // ₪8 for Personal
    priceHalf: 700 // ₪7 for half L
  },
  { 
    id: 'pesto', 
    nameHe: 'פסטו', 
    nameEn: 'Pesto', 
    nameFr: 'Pesto', 
    nameRu: 'Песто',
    priceXL: 850,
    priceL: 700,
    pricePersonal: 600,
    priceHalf: 600
  },
  
  // Salad toppings
  { 
    id: 'egg', 
    nameHe: 'ביצה קשה', 
    nameEn: 'Hard Boiled Egg', 
    nameFr: 'Œuf dur', 
    nameRu: 'Вареное яйцо',
    priceSalad: 600 // ₪6 for salads
  },
  { 
    id: 'avocado', 
    nameHe: 'אבוקדו', 
    nameEn: 'Avocado', 
    nameFr: 'Avocat', 
    nameRu: 'Авокадо',
    priceSalad: 800 // ₪8 for salads
  },
];
