import React from 'react';
import { CartItem, Translations, Language } from '../types';
import { X, Plus, Minus, ShoppingCart, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TOPPINGS } from '../constants';

interface CartProps {
  isOpen: boolean;
  cartItems: CartItem[];
  translations: Translations;
  currentLanguage: Language;
  onClose: () => void;
  onUpdateQuantity: (cartItemId: string, quantity: number) => void;
  onRemoveItem: (cartItemId: string) => void;
}

const Cart: React.FC<CartProps> = ({
  isOpen,
  cartItems,
  translations,
  currentLanguage,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
}) => {
  const formatPrice = (price: number) => `${translations.currency}${(price / 100).toFixed(0)}`;

  const total = cartItems.reduce((sum, item) => sum + (item.totalPrice * item.quantity), 0);

  const getToppingName = (toppingId: string) => {
    const topping = TOPPINGS.find(t => t.id === toppingId);
    return currentLanguage === 'he' ? topping?.nameHe : topping?.nameEn;
  };

  const generateWhatsAppMessage = () => {
    if (cartItems.length === 0) return '';

    const orderText = cartItems.map(item => {
      const itemName = currentLanguage === 'he' ? item.nameHe : item.nameEn;
      const toppings = item.selectedToppings.length > 0 
        ? ` (תוספות: ${item.selectedToppings.map(getToppingName).join(', ')})`
        : '';
      return `${itemName}${toppings} x${item.quantity} - ${formatPrice(item.totalPrice * item.quantity)}`;
    }).join('\n');

    return encodeURIComponent(
      `שלום! אני רוצה להזמין:\n\n${orderText}\n\nסה"כ: ${formatPrice(total)}\n\nכתובת משלוח: `
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      
      {/* Cart Drawer */}
      <div className="fixed right-0 top-0 h-full w-96 max-w-full bg-white shadow-2xl flex flex-col z-50">
        {/* Header */}
        <CardHeader className="border-b border-gray-200">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-bold">{translations.cartTitle}</CardTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="text-center text-gray-500 py-12">
              <ShoppingCart className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg">{translations.cartEmpty}</p>
              <p className="text-sm mt-2">הוסף מנות מהתפריט כדי להתחיל</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map(item => (
                <Card key={item.cartItemId}>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h4 className="font-semibold">
                          {currentLanguage === 'he' ? item.nameHe : item.nameEn}
                        </h4>
                        {item.selectedToppings.length > 0 && (
                          <p className="text-sm text-gray-600">
                            תוספות: {item.selectedToppings.map(getToppingName).join(', ')}
                          </p>
                        )}
                        <p className="text-sm text-gray-600">{formatPrice(item.totalPrice)}</p>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => onRemoveItem(item.cartItemId)}
                      >
                        <X className="w-3 h-3" />
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => onUpdateQuantity(item.cartItemId, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => onUpdateQuantity(item.cartItemId, item.quantity + 1)}
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>
                      <span className="font-semibold">
                        {formatPrice(item.totalPrice * item.quantity)}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 p-6 bg-gray-50">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-lg font-bold">
                <span>{translations.total}</span>
                <span>{formatPrice(total)}</span>
              </div>
              <Button 
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3"
                onClick={() => {
                  const message = generateWhatsAppMessage();
                  const whatsappUrl = `https://wa.me/972546083500?text=${message}`;
                  window.open(whatsappUrl, '_blank');
                }}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                {translations.orderWhatsapp}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
