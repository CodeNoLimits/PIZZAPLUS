// TikTok Pixel tracking utilities
declare global {
  interface Window {
    ttq: any;
  }
}

export const trackTikTokEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== 'undefined' && window.ttq) {
    try {
      window.ttq.track(eventName, parameters);
    } catch (error) {
      console.error('TikTok tracking error:', error);
    }
  }
};

// Track when user adds item to cart
export const trackAddToCart = (item: any, quantity: number = 1) => {
  trackTikTokEvent('AddToCart', {
    content_type: 'product',
    content_id: item.id,
    content_name: item.nameHe || item.nameEn,
    quantity: quantity,
    value: (item.totalPrice * quantity) / 100, // Convert from agorot to shekels
    currency: 'ILS'
  });
};

// Track when user initiates checkout
export const trackInitiateCheckout = (cartItems: any[], total: number) => {
  trackTikTokEvent('InitiateCheckout', {
    content_type: 'product_group',
    contents: cartItems.map(item => ({
      content_id: item.id,
      content_name: item.nameHe || item.nameEn,
      quantity: item.quantity,
      price: item.totalPrice / 100
    })),
    value: total / 100, // Convert from agorot to shekels
    currency: 'ILS',
    num_items: cartItems.length
  });
};

// Track when user places order via WhatsApp
export const trackPlaceOrder = (cartItems: any[], total: number, orderMethod: string = 'whatsapp') => {
  trackTikTokEvent('PlaceAnOrder', {
    content_type: 'product_group',
    contents: cartItems.map(item => ({
      content_id: item.id,
      content_name: item.nameHe || item.nameEn,
      quantity: item.quantity,
      price: item.totalPrice / 100
    })),
    value: total / 100,
    currency: 'ILS',
    order_method: orderMethod
  });
};

// Track page views for specific sections
export const trackViewContent = (contentType: string, contentName: string) => {
  trackTikTokEvent('ViewContent', {
    content_type: contentType,
    content_name: contentName
  });
};

// Track contact interactions
export const trackContact = (method: string) => {
  trackTikTokEvent('Contact', {
    contact_method: method
  });
};