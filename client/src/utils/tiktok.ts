// TikTok Pixel tracking utilities
declare global {
  interface Window {
    ttq: any;
  }
}

// Generate unique event ID for deduplication
const generateEventId = () => {
  return `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

// Hash function for PII data (simplified for client-side)
const hashData = async (data: string): Promise<string> => {
  if (!data) return '';
  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(data.toLowerCase().trim());
  const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
};

// Send event to server-side Events API for dual tracking
const sendServerEvent = async (endpoint: string, data: any) => {
  try {
    const response = await fetch(`/api/tiktok/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      console.warn('Server-side tracking failed:', response.statusText);
    }
  } catch (error) {
    console.warn('Server-side tracking error:', error);
  }
};

export const trackTikTokEvent = (eventName: string, parameters?: any, eventId?: string) => {
  if (typeof window !== 'undefined' && window.ttq) {
    try {
      const params = eventId ? { ...parameters, event_id: eventId } : parameters;
      window.ttq.track(eventName, params);
    } catch (error) {
      console.error('TikTok tracking error:', error);
    }
  }
};

// Track user identification (call when customer provides contact info)
export const trackUserIdentify = async (email?: string, phone?: string, userId?: string) => {
  if (typeof window !== 'undefined' && window.ttq) {
    try {
      const identifyData: any = {};
      
      if (email) {
        identifyData.email = await hashData(email);
      }
      if (phone) {
        identifyData.phone_number = await hashData(phone);
      }
      if (userId) {
        identifyData.external_id = await hashData(userId);
      }
      
      if (Object.keys(identifyData).length > 0) {
        window.ttq.identify(identifyData);
      }
    } catch (error) {
      console.error('TikTok identify error:', error);
    }
  }
};

// Track when user views menu item content
export const trackViewContent = (item: any) => {
  const eventId = generateEventId();
  
  // Client-side pixel tracking
  trackTikTokEvent('ViewContent', {
    contents: [{
      content_id: item.id,
      content_type: 'product',
      content_name: item.nameEn || item.nameHe
    }],
    value: item.price / 100,
    currency: 'ILS'
  }, eventId);
  
  // Server-side Events API tracking
  sendServerEvent('view-content', {
    contentId: item.id,
    contentName: item.nameEn || item.nameHe,
    value: item.price / 100
  });
};

// Track when user adds item to cart
export const trackAddToCart = (item: any, quantity: number = 1) => {
  const eventId = generateEventId();
  
  // Client-side pixel tracking
  trackTikTokEvent('AddToCart', {
    contents: [{
      content_id: item.id,
      content_type: 'product',
      content_name: item.nameEn || item.nameHe
    }],
    value: (item.totalPrice * quantity) / 100,
    currency: 'ILS'
  }, eventId);
  
  // Server-side Events API tracking
  sendServerEvent('add-to-cart', {
    contentId: item.id,
    contentName: item.nameEn || item.nameHe,
    value: (item.totalPrice * quantity) / 100
  });
};

// Track when user initiates checkout
export const trackInitiateCheckout = (cartItems: any[], total: number) => {
  const eventId = generateEventId();
  
  // Client-side pixel tracking
  trackTikTokEvent('InitiateCheckout', {
    contents: cartItems.map(item => ({
      content_id: item.id,
      content_type: 'product',
      content_name: item.nameEn || item.nameHe
    })),
    value: total / 100,
    currency: 'ILS'
  }, eventId);
  
  // Server-side Events API tracking
  sendServerEvent('initiate-checkout', {
    totalValue: total / 100
  });
};

// Track when user places order via WhatsApp
export const trackPlaceOrder = (cartItems: any[], total: number, orderMethod: string = 'whatsapp') => {
  const eventId = generateEventId();
  
  // Client-side pixel tracking
  trackTikTokEvent('PlaceAnOrder', {
    contents: cartItems.map(item => ({
      content_id: item.id,
      content_type: 'product',
      content_name: item.nameEn || item.nameHe
    })),
    value: total / 100,
    currency: 'ILS'
  }, eventId);
  
  // Server-side Events API tracking
  sendServerEvent('place-order', {
    totalValue: total / 100
  });
};

// Track search actions
export const trackSearch = (searchTerm: string) => {
  const eventId = generateEventId();
  
  // Client-side pixel tracking
  trackTikTokEvent('Search', {
    search_string: searchTerm
  }, eventId);
  
  // Server-side Events API tracking
  sendServerEvent('search', {
    searchTerm: searchTerm
  });
};

// Track general page views for specific sections
export const trackPageView = (contentType: string, contentName: string) => {
  const eventId = generateEventId();
  trackTikTokEvent('ViewContent', {
    content_id: `page_${contentName}`,
    content_type: 'product',
    content_name: contentName
  }, eventId);
};

// Track contact interactions
export const trackContact = (method: string) => {
  const eventId = generateEventId();
  trackTikTokEvent('Contact', {
    content_id: `contact_${method}`,
    content_type: 'product',
    content_name: `contact_${method}`
  }, eventId);
};

// Track promotional banner interactions
export const trackPromoClick = () => {
  const eventId = generateEventId();
  trackTikTokEvent('ViewContent', {
    content_id: 'promo_second_pizza_half_price',
    content_type: 'product',
    content_name: 'second_pizza_half_price'
  }, eventId);
};

// Track language change events
export const trackLanguageChange = (newLanguage: string) => {
  const eventId = generateEventId();
  trackTikTokEvent('ViewContent', {
    content_id: `lang_${newLanguage}`,
    content_type: 'product',
    content_name: `language_${newLanguage}`
  }, eventId);
};