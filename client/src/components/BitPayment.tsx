import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CreditCard, X } from 'lucide-react';
import { CartItem, Language, Translations } from '../types';

interface BitPaymentProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  total: number;
  translations: Translations;
  currentLanguage: Language;
}

const BitPayment: React.FC<BitPaymentProps> = ({
  isOpen,
  onClose,
  cartItems,
  total,
  translations,
  currentLanguage
}) => {
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    email: '',
    address: ''
  });
  const [paymentMethod, setPaymentMethod] = useState<'bit' | 'card' | 'cash'>('bit');
  const [isProcessing, setIsProcessing] = useState(false);
  const [validationErrors, setValidationErrors] = useState<{[key: string]: string}>({});

  const formatPrice = (price: number) => {
    return `${(price / 100).toFixed(2)}₪`;
  };

  const generateOrderId = () => {
    return 'PZP' + Date.now().toString().slice(-8);
  };

  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    
    if (!customerInfo.name.trim()) {
      errors.name = currentLanguage === 'he' ? 'שם חובה' :
                   currentLanguage === 'fr' ? 'Nom requis' :
                   currentLanguage === 'ru' ? 'Имя обязательно' :
                   'Name required';
    }
    
    const phoneRegex = /^0[5-9][0-9]{8}$/;
    if (!customerInfo.phone.trim()) {
      errors.phone = currentLanguage === 'he' ? 'טלפון חובה' :
                     currentLanguage === 'fr' ? 'Téléphone requis' :
                     currentLanguage === 'ru' ? 'Телефон обязателен' :
                     'Phone required';
    } else if (!phoneRegex.test(customerInfo.phone.replace(/[\s-]/g, ''))) {
      errors.phone = currentLanguage === 'he' ? 'מספר טלפון לא תקין (05X-XXXXXXX)' :
                     currentLanguage === 'fr' ? 'Numéro de téléphone invalide (05X-XXXXXXX)' :
                     currentLanguage === 'ru' ? 'Неверный номер телефона (05X-XXXXXXX)' :
                     'Invalid phone number (05X-XXXXXXX)';
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleBitPayment = async () => {
    if (!validateForm()) {
      setIsProcessing(false);
      return;
    }
    
    setIsProcessing(true);
    const orderId = generateOrderId();
    const orderData = {
      orderId,
      amount: total,
      currency: 'ILS',
      customerName: customerInfo.name,
      customerPhone: customerInfo.phone,
      customerEmail: customerInfo.email,
      description: `Pizza Plus Order #${orderId}`,
      items: cartItems.map(item => ({
        name: currentLanguage === 'he' ? item.nameHe : item.nameEn,
        quantity: item.quantity,
        price: item.totalPrice
      }))
    };

    try {
      console.log('Sending Bit payment request:', orderData);
      
      // Call our Bit payment API
      const response = await fetch('/api/bit/create-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData)
      });

      console.log('Response status:', response.status);
      const result = await response.json();
      console.log('Response data:', result);
      
      if (result.success && result.paymentUrl) {
        console.log('Opening Bit payment URL:', result.paymentUrl);
        
        // Open Bit payment URL
        const newWindow = window.open(result.paymentUrl, '_blank');
        
        if (!newWindow) {
          alert(currentLanguage === 'he' 
            ? 'חלון חדש נחסם. אנא אפשר חלונות קופצים ונסה שוב'
            : 'Popup blocked. Please allow popups and try again'
          );
          setIsProcessing(false);
          return;
        }
        
        setIsProcessing(false);
        onClose();
        alert(currentLanguage === 'he' 
          ? 'תשלום נשלח! אנא השלם את התשלום באפליקציית Bit'
          : currentLanguage === 'fr' 
          ? 'Paiement envoyé! Veuillez compléter le paiement dans l\'app Bit'
          : currentLanguage === 'ru'
          ? 'Платеж отправлен! Пожалуйста, завершите платеж в приложении Bit'
          : 'Payment sent! Please complete payment in Bit app'
        );
      } else {
        console.error('Payment failed:', result);
        throw new Error(result.error || 'Payment creation failed');
      }
      
    } catch (error) {
      console.error('Bit payment error:', error);
      setIsProcessing(false);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      alert(currentLanguage === 'he' 
        ? `שגיאה בתשלום: ${errorMessage}. אנא נסה שוב`
        : currentLanguage === 'fr'
        ? `Erreur de paiement: ${errorMessage}. Veuillez réessayer`
        : currentLanguage === 'ru'
        ? `Ошибка платежа: ${errorMessage}. Пожалуйста, попробуйте еще раз`
        : `Payment error: ${errorMessage}. Please try again`
      );
    }
  };

  const handleCardPayment = async () => {
    if (!validateForm()) {
      setIsProcessing(false);
      return;
    }
    
    setIsProcessing(true);
    const orderId = generateOrderId();
    const orderData = {
      orderId,
      amount: total,
      currency: 'ILS',
      customerName: customerInfo.name,
      customerPhone: customerInfo.phone,
      customerEmail: customerInfo.email,
      description: `Pizza Plus Order #${orderId}`,
      items: cartItems.map(item => ({
        name: item.nameHe,
        quantity: item.quantity,
        price: item.totalPrice
      }))
    };

    try {
      console.log('Creating Tranzila payment:', orderData);
      
      const response = await fetch('/api/tranzila/create-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      const result = await response.json();
      console.log('Tranzila payment response:', result);

      if (result.success && result.paymentUrl) {
        console.log('Opening Tranzila payment URL:', result.paymentUrl);
        
        const paymentWindow = window.open(result.paymentUrl, '_blank', 'width=800,height=600,scrollbars=yes,resizable=yes');
        
        if (!paymentWindow) {
          alert(currentLanguage === 'he' 
            ? 'חוסם חלונות קופצים מונע את התשלום. אנא אפשר חלונות קופצים ונסה שוב'
            : currentLanguage === 'fr'
            ? 'Le bloqueur de popups empêche le paiement. Veuillez autoriser les popups et réessayer'
            : currentLanguage === 'ru'
            ? 'Блокировщик всплывающих окон препятствует оплате. Пожалуйста, разрешите всплывающие окна и попробуйте еще раз'
            : 'Popup blocker is preventing payment. Please allow popups and try again'
          );
          setIsProcessing(false);
          return;
        }
        
        // Close the payment dialog
        onClose();
        setIsProcessing(false);
        
      } else {
        console.error('Payment failed:', result);
        throw new Error(result.error || 'Payment creation failed');
      }
      
    } catch (error) {
      console.error('Tranzila payment error:', error);
      setIsProcessing(false);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      alert(currentLanguage === 'he' 
        ? `שגיאה בתשלום: ${errorMessage}. אנא נסה שוב`
        : currentLanguage === 'fr'
        ? `Erreur de paiement: ${errorMessage}. Veuillez réessayer`
        : currentLanguage === 'ru'
        ? `Ошибка платежа: ${errorMessage}. Пожалуйста, попробуйте еще раз`
        : `Payment error: ${errorMessage}. Please try again`
      );
    }
  };

  const handleCashPayment = () => {
    const orderId = generateOrderId();
    const message = currentLanguage === 'he' 
      ? `הזמנה חדשה #${orderId}\n\nתשלום במזומן\nלקוח: ${customerInfo.name}\nטלפון: ${customerInfo.phone}\nכתובת: ${customerInfo.address}\n\nפריטים:\n${cartItems.map(item => 
          `${currentLanguage === 'he' ? item.nameHe : item.nameEn} x${item.quantity} - ${formatPrice(item.totalPrice * item.quantity)}`
        ).join('\n')}\n\nסה"כ: ${formatPrice(total)}`
      : `New Order #${orderId}\n\nCash Payment\nCustomer: ${customerInfo.name}\nPhone: ${customerInfo.phone}\nAddress: ${customerInfo.address}\n\nItems:\n${cartItems.map(item => 
          `${currentLanguage === 'he' ? item.nameHe : item.nameEn} x${item.quantity} - ${formatPrice(item.totalPrice * item.quantity)}`
        ).join('\n')}\n\nTotal: ${formatPrice(total)}`;

    const whatsappUrl = `https://wa.me/972546083500?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      
      <div className="fixed right-0 top-0 h-full w-96 max-w-full bg-white shadow-2xl flex flex-col z-50 overflow-y-auto">
        <CardHeader className="border-b border-gray-200">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-bold">
              {currentLanguage === 'he' ? 'תשלום' : 'Payment'}
            </CardTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="flex-1 p-6 space-y-6">
          {/* Customer Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">
              {currentLanguage === 'he' ? 'פרטי לקוח' : 'Customer Details'}
            </h3>
            
            <div>
              <Label htmlFor="name">
                {currentLanguage === 'he' ? 'שם מלא' : 
                 currentLanguage === 'fr' ? 'Nom complet' :
                 currentLanguage === 'ru' ? 'Полное имя' :
                 'Full Name'}
              </Label>
              <Input
                id="name"
                value={customerInfo.name}
                onChange={(e) => {
                  setCustomerInfo(prev => ({ ...prev, name: e.target.value }));
                  if (validationErrors.name) {
                    setValidationErrors(prev => ({ ...prev, name: '' }));
                  }
                }}
                placeholder={currentLanguage === 'he' ? 'הכנס שם מלא' : 
                           currentLanguage === 'fr' ? 'Entrez le nom complet' :
                           currentLanguage === 'ru' ? 'Введите полное имя' :
                           'Enter full name'}
                className={`mt-1 ${validationErrors.name ? 'border-red-500' : ''}`}
              />
              {validationErrors.name && (
                <p className="text-red-500 text-xs mt-1">{validationErrors.name}</p>
              )}
            </div>

            <div>
              <Label htmlFor="phone">
                {currentLanguage === 'he' ? 'טלפון' : 
                 currentLanguage === 'fr' ? 'Téléphone' :
                 currentLanguage === 'ru' ? 'Телефон' :
                 'Phone'}
              </Label>
              <Input
                id="phone"
                value={customerInfo.phone}
                onChange={(e) => {
                  setCustomerInfo(prev => ({ ...prev, phone: e.target.value }));
                  if (validationErrors.phone) {
                    setValidationErrors(prev => ({ ...prev, phone: '' }));
                  }
                }}
                placeholder="05X-XXXXXXX"
                className={`mt-1 ${validationErrors.phone ? 'border-red-500' : ''}`}
              />
              {validationErrors.phone && (
                <p className="text-red-500 text-xs mt-1">{validationErrors.phone}</p>
              )}
            </div>

            <div>
              <Label htmlFor="address">
                {currentLanguage === 'he' ? 'כתובת' : 'Address'}
              </Label>
              <Input
                id="address"
                value={customerInfo.address}
                onChange={(e) => setCustomerInfo(prev => ({ ...prev, address: e.target.value }))}
                placeholder={currentLanguage === 'he' ? 'כתובת למשלוח' : 'Delivery address'}
                className="mt-1"
              />
            </div>
          </div>

          {/* Payment Method */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">
              {currentLanguage === 'he' ? 'אמצעי תשלום' : 'Payment Method'}
            </h3>

            <div className="grid gap-3">
              {/* Bit Payment */}
              <Button
                variant={paymentMethod === 'bit' ? 'default' : 'outline'}
                className="h-12 justify-start"
                onClick={() => setPaymentMethod('bit')}
              >
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">BIT</span>
                </div>
                {currentLanguage === 'he' ? 'תשלום דרך Bit' : 'Pay with Bit'}
              </Button>

              {/* Credit Card */}
              <Button
                variant={paymentMethod === 'card' ? 'default' : 'outline'}
                className="h-12 justify-start"
                onClick={() => setPaymentMethod('card')}
              >
                <CreditCard className="w-5 h-5 mr-3" />
                {currentLanguage === 'he' ? 'כרטיס אשראי' : 'Credit Card'}
              </Button>

              {/* Cash Payment */}
              <Button
                variant={paymentMethod === 'cash' ? 'default' : 'outline'}
                className="h-12 justify-start"
                onClick={() => setPaymentMethod('cash')}
              >
                <span className="text-lg mr-3">💰</span>
                {currentLanguage === 'he' ? 'תשלום במזומן' : 'Cash Payment'}
              </Button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-2 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold">
              {currentLanguage === 'he' ? 'סיכום הזמנה' : 'Order Summary'}
            </h4>
            {cartItems.map(item => (
              <div key={item.cartItemId} className="flex justify-between text-sm">
                <span>
                  {currentLanguage === 'he' ? item.nameHe : item.nameEn} x{item.quantity}
                </span>
                <span>{formatPrice(item.totalPrice * item.quantity)}</span>
              </div>
            ))}
            <div className="border-t pt-2 flex justify-between font-semibold">
              <span>{currentLanguage === 'he' ? 'סה"כ' : 'Total'}</span>
              <span>{formatPrice(total)}</span>
            </div>
          </div>

          {/* Payment Button */}
          <Button
            className="w-full h-12 text-lg"
            disabled={isProcessing}
            onClick={() => {
              if (paymentMethod === 'bit') handleBitPayment();
              else if (paymentMethod === 'card') handleCardPayment();
              else handleCashPayment();
            }}
          >
            {isProcessing ? (
              currentLanguage === 'he' ? 'מעבד...' : 
              currentLanguage === 'fr' ? 'Traitement...' :
              currentLanguage === 'ru' ? 'Обработка...' :
              'Processing...'
            ) : (
              <>
                {paymentMethod === 'bit' && (currentLanguage === 'he' ? `שלם עם Bit ${formatPrice(total)}` : 
                  currentLanguage === 'fr' ? `Payer avec Bit ${formatPrice(total)}` :
                  currentLanguage === 'ru' ? `Оплатить через Bit ${formatPrice(total)}` :
                  `Pay with Bit ${formatPrice(total)}`)}
                {paymentMethod === 'card' && (currentLanguage === 'he' ? `שלם בכרטיס ${formatPrice(total)}` : 
                  currentLanguage === 'fr' ? `Payer par carte ${formatPrice(total)}` :
                  currentLanguage === 'ru' ? `Оплатить картой ${formatPrice(total)}` :
                  `Pay with Card ${formatPrice(total)}`)}
                {paymentMethod === 'cash' && (currentLanguage === 'he' ? `אשר הזמנה ${formatPrice(total)}` : 
                  currentLanguage === 'fr' ? `Confirmer commande ${formatPrice(total)}` :
                  currentLanguage === 'ru' ? `Подтвердить заказ ${formatPrice(total)}` :
                  `Confirm Order ${formatPrice(total)}`)}
              </>
            )}
          </Button>
        </CardContent>
      </div>
    </div>
  );
};

export default BitPayment;