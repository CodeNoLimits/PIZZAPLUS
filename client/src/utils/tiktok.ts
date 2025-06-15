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
  trackTikTokEvent('ViewContent', {
    contents: [{
      content_id: item.id,
      content_type: 'product',
      content_name: item.nameEn || item.nameHe
    }],
    value: item.price / 100,
    currency: 'ILS'
  }, eventId);
};

// Track when user adds item to cart
export const trackAddToCart = (item: any, quantity: number = 1) => {
  const eventId = generateEventId();
  trackTikTokEvent('AddToCart', {
    contents: [{
      content_id: item.id,
      content_type: 'product',
      content_name: item.nameEn || item.nameHe
    }],
    value: (item.totalPrice * quantity) / 100,
    currency: 'ILS'
  }, eventId);
};

// Track when user initiates checkout
export const trackInitiateCheckout = (cartItems: any[], total: number) => {
  const eventId = generateEventId();
  trackTikTokEvent('InitiateCheckout', {
    contents: cartItems.map(item => ({
      content_id: item.id,
      content_type: 'product',
      content_name: item.nameEn || item.nameHe
    })),
    value: total / 100,
    currency: 'ILS'
  }, eventId);
};

// Track when user places order via WhatsApp
export const trackPlaceOrder = (cartItems: any[], total: number, orderMethod: string = 'whatsapp') => {
  const eventId = generateEventId();
  trackTikTokEvent('PlaceAnOrder', {
    contents: cartItems.map(item => ({
      content_id: item.id,
      content_type: 'product',
      content_name: item.nameEn || item.nameHe
    })),
    value: total / 100,
    currency: 'ILS'
  }, eventId);
};

// Track search actions
export const trackSearch = (searchTerm: string) => {
  const eventId = generateEventId();
  trackTikTokEvent('Search', {
    search_string: searchTerm
  }, eventId);
};

// Track general page views for specific sections
export const trackPageView = (contentType: string, contentName: string) => {
  const eventId = generateEventId();
  trackTikTokEvent('ViewContent', {
    content_type: contentType,
    content_name: contentName
  }, eventId);
};

// Track contact interactions
export const trackContact = (method: string) => {
  trackTikTokEvent('Contact', {
    contact_method: method
  });
};