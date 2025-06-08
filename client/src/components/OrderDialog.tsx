import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CartItem, Language, Translations } from '@/types';

interface OrderDialogProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  total: number;
  translations: Translations;
  currentLanguage: Language;
}

const OrderDialog: React.FC<OrderDialogProps> = ({
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
    address: ''
  });
  const [paymentMethod, setPaymentMethod] = useState<'bit' | 'cash'>('bit');
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
                     currentLanguage === 'fr' ? 'Numéro de téléphone invalide' :
                     currentLanguage === 'ru' ? 'Неверный номер телефона' :
                     'Invalid phone number format';
    }

    if (!customerInfo.address.trim()) {
      errors.address = currentLanguage === 'he' ? 'כתובת חובה' :
                       currentLanguage === 'fr' ? 'Adresse requise' :
                       currentLanguage === 'ru' ? 'Адрес обязателен' :
                       'Address required';
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleBitPayment = () => {
    if (!validateForm()) {
      setIsProcessing(false);
      return;
    }
    
    setIsProcessing(true);
    const orderId = generateOrderId();
    
    const message = currentLanguage === 'he'
      ? `🍕 הזמנה מ-Pizza Plus\nמספר הזמנה: ${orderId}\nסכום לתשלום: ${formatPrice(total)}\nשם הלקוח: ${customerInfo.name}\nטלפון: ${customerInfo.phone}\nכתובת: ${customerInfo.address}\n\nפריטים:\n${cartItems.map(item => 
          `${item.nameHe} x${item.quantity} - ${formatPrice(item.totalPrice * item.quantity)}`
        ).join('\n')}\n\nלתשלום דרך Bit, אנא שלחו את הסכום לטלפון 054-608-3500\nאו צרו קשר לאישור ההזמנה`
      : `🍕 Order from Pizza Plus\nOrder #: ${orderId}\nAmount: ${formatPrice(total)}\nCustomer: ${customerInfo.name}\nPhone: ${customerInfo.phone}\nAddress: ${customerInfo.address}\n\nItems:\n${cartItems.map(item => 
          `${item.nameEn} x${item.quantity} - ${formatPrice(item.totalPrice * item.quantity)}`
        ).join('\n')}\n\nFor Bit payment, please send amount to 054-608-3500\nOr contact us to confirm order`;

    const whatsappUrl = `https://wa.me/972546083500?text=${encodeURIComponent(message)}`;
    
    onClose();
    setIsProcessing(false);
    window.open(whatsappUrl, '_blank');
  };

  const handleCashPayment = () => {
    if (!validateForm()) {
      setIsProcessing(false);
      return;
    }
    
    setIsProcessing(true);
    const orderId = generateOrderId();
    
    const message = currentLanguage === 'he'
      ? `🍕 הזמנה חדשה #${orderId}\n\nתשלום במזומן\nלקוח: ${customerInfo.name}\nטלפון: ${customerInfo.phone}\nכתובת: ${customerInfo.address}\n\nפריטים:\n${cartItems.map(item => 
          `${item.nameHe} x${item.quantity} - ${formatPrice(item.totalPrice * item.quantity)}`
        ).join('\n')}\n\nסה"כ: ${formatPrice(total)}`
      : `🍕 New Order #${orderId}\n\nCash Payment\nCustomer: ${customerInfo.name}\nPhone: ${customerInfo.phone}\nAddress: ${customerInfo.address}\n\nItems:\n${cartItems.map(item => 
          `${item.nameEn} x${item.quantity} - ${formatPrice(item.totalPrice * item.quantity)}`
        ).join('\n')}\n\nTotal: ${formatPrice(total)}`;

    const whatsappUrl = `https://wa.me/972546083500?text=${encodeURIComponent(message)}`;
    
    onClose();
    setIsProcessing(false);
    window.open(whatsappUrl, '_blank');
  };

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center">
            {currentLanguage === 'he' ? 'השלמת הזמנה' : 
             currentLanguage === 'fr' ? 'Finaliser la commande' :
             currentLanguage === 'ru' ? 'Завершить заказ' :
             'Complete Order'}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Customer Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">
              {currentLanguage === 'he' ? 'פרטי לקוח' : 'Customer Details'}
            </h3>
            
            <div>
              <Label htmlFor="name">
                {currentLanguage === 'he' ? 'שם מלא' : 'Full Name'} *
              </Label>
              <Input
                id="name"
                value={customerInfo.name}
                onChange={(e) => setCustomerInfo(prev => ({ ...prev, name: e.target.value }))}
                placeholder={currentLanguage === 'he' ? 'הזן שם מלא' : 'Enter full name'}
                className={`mt-1 ${validationErrors.name ? 'border-red-500' : ''}`}
              />
              {validationErrors.name && (
                <p className="text-red-500 text-xs mt-1">{validationErrors.name}</p>
              )}
            </div>

            <div>
              <Label htmlFor="phone">
                {currentLanguage === 'he' ? 'טלפון' : 'Phone'} *
              </Label>
              <Input
                id="phone"
                value={customerInfo.phone}
                onChange={(e) => setCustomerInfo(prev => ({ ...prev, phone: e.target.value }))}
                placeholder="05X-XXXXXXX"
                className={`mt-1 ${validationErrors.phone ? 'border-red-500' : ''}`}
              />
              {validationErrors.phone && (
                <p className="text-red-500 text-xs mt-1">{validationErrors.phone}</p>
              )}
            </div>

            <div>
              <Label htmlFor="address">
                {currentLanguage === 'he' ? 'כתובת' : 'Address'} *
              </Label>
              <Input
                id="address"
                value={customerInfo.address}
                onChange={(e) => setCustomerInfo(prev => ({ ...prev, address: e.target.value }))}
                placeholder={currentLanguage === 'he' ? 'כתובת למשלוח' : 'Delivery address'}
                className={`mt-1 ${validationErrors.address ? 'border-red-500' : ''}`}
              />
              {validationErrors.address && (
                <p className="text-red-500 text-xs mt-1">{validationErrors.address}</p>
              )}
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

          {/* Order Button */}
          <Button
            className="w-full h-12 text-lg"
            disabled={isProcessing}
            onClick={() => {
              if (paymentMethod === 'bit') handleBitPayment();
              else handleCashPayment();
            }}
          >
            {isProcessing ? (
              currentLanguage === 'he' ? 'מעבד...' : 'Processing...'
            ) : (
              <>
                {paymentMethod === 'bit' && (currentLanguage === 'he' ? `שלם עם Bit ${formatPrice(total)}` : `Pay with Bit ${formatPrice(total)}`)}
                {paymentMethod === 'cash' && (currentLanguage === 'he' ? `הזמן במזומן ${formatPrice(total)}` : `Order with Cash ${formatPrice(total)}`)}
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderDialog;