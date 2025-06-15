import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Language, MenuItem, CartItem, Translations } from './types';
import { TRANSLATIONS } from './constants';
import Header from './components/Header';
import Hero from './components/Hero';
import PromoBanner from './components/PromoBanner';
import { MessageCircle, Phone } from 'lucide-react';

// Lazy load components that are not immediately visible
const MenuSection = lazy(() => import('./components/MenuSection'));
const Gallery = lazy(() => import('./components/Gallery'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Cart = lazy(() => import('./components/Cart'));
const ChatWidget = lazy(() => import('./components/ChatWidget'));
const OrderDialog = lazy(() => import('./components/OrderDialog'));

// Import TikTok tracking directly (small utility)
import { trackPageView } from './utils/tiktok';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('he');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOrderOpen, setIsOrderOpen] = useState(false);

  const translations = TRANSLATIONS[currentLanguage];

  useEffect(() => {
    // Set document direction and language
    document.documentElement.dir = currentLanguage === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  useEffect(() => {
    // Track initial page view
    trackPageView('website', 'pizza_plus_homepage');
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setCurrentLanguage(lang);
  };

  const handleAddToCart = (item: MenuItem, selectedToppings: string[]) => {
    const cartItemId = Date.now().toString();
    
    // Calculate total price including toppings
    let totalPrice = item.price;
    if (item.toppingPrice && selectedToppings.length > 0) {
      totalPrice += selectedToppings.length * item.toppingPrice;
    }

    const cartItem: CartItem = {
      ...item,
      cartItemId,
      quantity: 1,
      selectedToppings,
      totalPrice,
    };

    // Check if same item with same toppings already exists
    const existingItemIndex = cartItems.findIndex(
      existing => 
        existing.id === item.id && 
        JSON.stringify(existing.selectedToppings.sort()) === JSON.stringify(selectedToppings.sort())
    );

    if (existingItemIndex > -1) {
      // Update quantity of existing item
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].quantity += 1;
      setCartItems(updatedItems);
    } else {
      // Add new item
      setCartItems(prev => [...prev, cartItem]);
    }

    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      setCartItems(prev => prev.filter(item => item.cartItemId !== cartItemId));
    } else {
      setCartItems(prev => 
        prev.map(item => 
          item.cartItemId === cartItemId ? { ...item, quantity } : item
        )
      );
    }
  };

  const handleRemoveItem = (cartItemId: string) => {
    setCartItems(prev => prev.filter(item => item.cartItemId !== cartItemId));
  };

  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className={`font-heebo ${currentLanguage === 'he' ? 'rtl' : 'ltr'} bg-gray-50 min-h-screen`}>
      {/* Promotional Banner - Top Priority Placement */}
      <PromoBanner 
        translations={translations} 
        currentLanguage={currentLanguage} 
      />
      
      <Header
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
        cartItemCount={totalCartItems}
        onToggleCart={() => setIsCartOpen(true)}
        translations={translations}
      />

      <main className="pt-16">
        <Hero translations={translations} />
        
        {/* Quick Info Strip */}
        <section className="bg-gray-800 text-white py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt text-primary mr-2"></i>
                <span>{translations.address}</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-clock text-primary mr-2"></i>
                <span>{translations.hours}</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="text-green-400 w-4 h-4 mr-2" />
                <span>הזמנות: {translations.whatsappOrders}</span>
              </div>
            </div>
          </div>
        </section>

        <MenuSection
          translations={translations}
          currentLanguage={currentLanguage}
          onAddToCart={handleAddToCart}
        />
        
        <Gallery translations={translations} />
        <About translations={translations} />
        <Contact translations={translations} />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                <i className="fas fa-pizza-slice text-white"></i>
              </div>
              <div>
                <div className="font-bold">{translations.mainTitle}</div>
                <div className="text-sm text-gray-400">Pizza Plus Jerusalem</div>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-400">
                © 2024 {translations.mainTitle}. כל הזכויות שמורות.
              </p>
              <div className="flex items-center justify-center md:justify-end mt-2 space-x-4">
                <i className="fas fa-certificate text-yellow-400"></i>
                <span className="text-xs text-gray-400">{translations.kosherBadge}</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-5 right-5 flex flex-col space-y-3 z-30">
        <a 
          href={`https://wa.me/972${translations.whatsappOrders.replace(/[^0-9]/g, '').substring(1)}`}
          className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all transform hover:scale-110"
        >
          <MessageCircle className="w-5 h-5" />
        </a>
        <a 
          href={`tel:${translations.phone}`}
          className="w-14 h-14 bg-primary hover:bg-red-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all transform hover:scale-110"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>

      <Cart
        isOpen={isCartOpen}
        cartItems={cartItems}
        translations={translations}
        currentLanguage={currentLanguage}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={() => {
          setIsCartOpen(false);
          setIsOrderOpen(true);
        }}
      />

      <OrderDialog
        isOpen={isOrderOpen}
        onClose={() => setIsOrderOpen(false)}
        cartItems={cartItems}
        total={cartItems.reduce((sum, item) => sum + (item.totalPrice * item.quantity), 0)}
        translations={translations}
        currentLanguage={currentLanguage}
      />

      <ChatWidget
        translations={translations}
        currentLanguage={currentLanguage}
      />
    </div>
  );
}

export default App;
