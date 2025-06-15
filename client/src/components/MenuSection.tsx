import React, { useState } from 'react';
import { MenuItem, CartItem, Translations, Language } from '../types';
import { MENU_ITEMS, TOPPINGS, PRIMARY_COLOR } from '../constants';
import { Plus, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { trackAddToCart, trackViewContent } from '../utils/tiktok';

interface MenuSectionProps {
  translations: Translations;
  currentLanguage: Language;
  onAddToCart: (item: MenuItem, selectedToppings: string[]) => void;
}

const MenuSection: React.FC<MenuSectionProps> = ({ translations, currentLanguage, onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedToppings, setSelectedToppings] = useState<Record<string, string[]>>({});

  const categories = [
    { id: 'all', label: translations.all },
    { id: 'pizzas', label: translations.pizzas },
    { id: 'pastas', label: translations.pastas },
    { id: 'salads', label: translations.salads },
    { id: 'mains', label: translations.mains },
    { id: 'sides', label: translations.sides },
    { id: 'desserts', label: translations.desserts },
    { id: 'drinks', label: translations.drinks },
  ];

  const filteredItems = activeCategory === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  const formatPrice = (price: number) => `${translations.currency}${(price / 100).toFixed(0)}`;

  const handleToppingChange = (itemId: string, toppingId: string, checked: boolean) => {
    setSelectedToppings(prev => ({
      ...prev,
      [itemId]: checked 
        ? [...(prev[itemId] || []), toppingId]
        : (prev[itemId] || []).filter(id => id !== toppingId)
    }));
  };

  const handleAddToCart = (item: MenuItem) => {
    const toppings = selectedToppings[item.id] || [];
    
    // Calculate total price including toppings
    const toppingPrice = toppings.length * (item.toppingPrice || 0);
    const itemWithToppings = {
      ...item,
      totalPrice: item.price + toppingPrice,
      selectedToppings: toppings
    };
    
    // Track TikTok add to cart event
    trackAddToCart(itemWithToppings, 1);
    
    onAddToCart(item, toppings);
    // Clear selected toppings after adding to cart
    setSelectedToppings(prev => ({ ...prev, [item.id]: [] }));
  };

  const getToppingName = (toppingId: string) => {
    const topping = TOPPINGS.find(t => t.id === toppingId);
    if (!topping) return toppingId;
    
    return currentLanguage === 'he' ? topping.nameHe :
           currentLanguage === 'fr' ? (topping.nameFr || topping.nameEn) :
           currentLanguage === 'ru' ? (topping.nameRu || topping.nameEn) :
           topping.nameEn;
  };

  return (
    <section id="menu" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{translations.menuTitle}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {currentLanguage === 'he' ? 'מגוון עשיר של פיצות, פסטות ומנות עיקריות מוכנות באהבה ובמחויבות לאיכות הגבוהה ביותר' :
             currentLanguage === 'fr' ? 'Large sélection de pizzas, pâtes et plats principaux préparés avec amour et engagement pour la plus haute qualité' :
             currentLanguage === 'ru' ? 'Богатый выбор пицц, пасты и основных блюд, приготовленных с любовью и приверженностью к высочайшему качеству' :
             'Wide variety of pizzas, pastas and main dishes prepared with love and commitment to the highest quality'}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(category => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category.id 
                  ? 'text-white' 
                  : 'hover:border-primary hover:text-primary'
              }`}
              style={activeCategory === category.id ? { backgroundColor: PRIMARY_COLOR } : {}}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1"
                  onClick={() => trackViewContent(item)}>
              {/* Item Image */}
              <div className="relative h-48 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center overflow-hidden">
                {item.image ? (
                  <img 
                    src={item.image} 
                    alt={currentLanguage === 'he' ? item.nameHe : item.nameEn}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-white text-6xl opacity-30">🍕</div>
                )}
                {item.category === 'pizzas' && (
                  <div className="absolute top-3 right-3">
                    <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      {currentLanguage === 'he' ? 'פופולרי' :
                       currentLanguage === 'fr' ? 'Populaire' :
                       currentLanguage === 'ru' ? 'Популярно' :
                       'Popular'}
                    </span>
                  </div>
                )}
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {currentLanguage === 'he' ? item.nameHe : 
                   currentLanguage === 'fr' ? (item.nameFr || item.nameEn) :
                   currentLanguage === 'ru' ? (item.nameRu || item.nameEn) :
                   item.nameEn}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {currentLanguage === 'he' ? item.descriptionHe : 
                   currentLanguage === 'fr' ? (item.descriptionFr || item.descriptionEn) :
                   currentLanguage === 'ru' ? (item.descriptionRu || item.descriptionEn) :
                   item.descriptionEn}
                </p>

                {/* Toppings Selection */}
                {item.toppings && item.toppings.length > 0 && (
                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">
                      {currentLanguage === 'he' ? `תוספות זמינות (+${formatPrice(item.toppingPrice || 0)} כל אחת):` :
                       currentLanguage === 'fr' ? `Garnitures disponibles (+${formatPrice(item.toppingPrice || 0)} chacune):` :
                       currentLanguage === 'ru' ? `Доступные добавки (+${formatPrice(item.toppingPrice || 0)} каждая):` :
                       `Available toppings (+${formatPrice(item.toppingPrice || 0)} each):`}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {item.toppings.map(toppingId => (
                        <div key={toppingId} className="flex items-center space-x-2">
                          <Checkbox
                            id={`${item.id}-${toppingId}`}
                            checked={(selectedToppings[item.id] || []).includes(toppingId)}
                            onCheckedChange={(checked) => handleToppingChange(item.id, toppingId, checked as boolean)}
                          />
                          <label 
                            htmlFor={`${item.id}-${toppingId}`}
                            className="text-sm cursor-pointer"
                          >
                            {getToppingName(toppingId)}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold" style={{ color: PRIMARY_COLOR }}>
                    {formatPrice(item.price)}
                  </span>
                  <Button
                    onClick={() => handleAddToCart(item)}
                    className="text-white px-4 py-2 rounded-lg transition-colors"
                    style={{ backgroundColor: PRIMARY_COLOR }}
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    {translations.addToCart}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
