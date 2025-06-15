import crypto from 'crypto';

// TikTok Events API configuration
const TIKTOK_PIXEL_ID = 'D179S7RC77UA68QT5U1G';
const TIKTOK_ACCESS_TOKEN = '80c40d86de38c300bb9e391eb4311f5da14749f5';
const TIKTOK_API_URL = 'https://business-api.tiktok.com/open_api/v1.3/event/track/';

interface TikTokEventData {
  event: string;
  event_id: string;
  event_time: number;
  user: {
    email?: string;
    phone?: string;
    external_id?: string;
    ip?: string;
    user_agent?: string;
  };
  properties: {
    content_id?: string;
    content_type?: string;
    content_name?: string;
    value?: number;
    currency?: string;
    search_string?: string;
    url?: string;
  };
}

// Hash function for PII data (server-side)
const hashPII = (data: string): string => {
  if (!data) return '';
  return crypto.createHash('sha256').update(data.toLowerCase().trim()).digest('hex');
};

// Send event to TikTok Events API
export const sendTikTokEvent = async (eventData: TikTokEventData): Promise<boolean> => {
  try {
    const payload = {
      pixel_code: TIKTOK_PIXEL_ID,
      event: eventData.event,
      event_id: eventData.event_id,
      timestamp: eventData.event_time.toString(),
      context: {
        user: {
          ...(eventData.user.email && { email: hashPII(eventData.user.email) }),
          ...(eventData.user.phone && { phone: hashPII(eventData.user.phone) }),
          ...(eventData.user.external_id && { external_id: hashPII(eventData.user.external_id) }),
          ...(eventData.user.ip && { ip: eventData.user.ip }),
          ...(eventData.user.user_agent && { user_agent: eventData.user.user_agent }),
        },
        page: {
          url: eventData.properties.url || '',
        },
      },
      properties: {
        ...(eventData.properties.content_id && { content_id: eventData.properties.content_id }),
        ...(eventData.properties.content_type && { content_type: eventData.properties.content_type }),
        ...(eventData.properties.content_name && { content_name: eventData.properties.content_name }),
        ...(eventData.properties.value && { value: eventData.properties.value }),
        ...(eventData.properties.currency && { currency: eventData.properties.currency }),
        ...(eventData.properties.search_string && { search_string: eventData.properties.search_string }),
      },
    };

    const response = await fetch(TIKTOK_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Token': TIKTOK_ACCESS_TOKEN,
      },
      body: JSON.stringify({ data: [payload] }),
    });

    if (!response.ok) {
      console.error('TikTok Events API error:', response.statusText);
      return false;
    }

    const result = await response.json();
    console.log('TikTok event sent successfully:', result);
    return true;
  } catch (error) {
    console.error('Failed to send TikTok event:', error);
    return false;
  }
};

// Helper functions for specific events
export const trackViewContentServer = async (
  contentId: string,
  contentName: string,
  value: number,
  userInfo: { email?: string; phone?: string; ip?: string; userAgent?: string; url?: string }
) => {
  return sendTikTokEvent({
    event: 'ViewContent',
    event_id: `view_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    event_time: Date.now(),
    user: {
      email: userInfo.email,
      phone: userInfo.phone,
      ip: userInfo.ip,
      user_agent: userInfo.userAgent,
    },
    properties: {
      content_id: contentId,
      content_type: 'product',
      content_name: contentName,
      value: value,
      currency: 'ILS',
      url: userInfo.url,
    },
  });
};

export const trackAddToCartServer = async (
  contentId: string,
  contentName: string,
  value: number,
  userInfo: { email?: string; phone?: string; ip?: string; userAgent?: string; url?: string }
) => {
  return sendTikTokEvent({
    event: 'AddToCart',
    event_id: `cart_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    event_time: Date.now(),
    user: {
      email: userInfo.email,
      phone: userInfo.phone,
      ip: userInfo.ip,
      user_agent: userInfo.userAgent,
    },
    properties: {
      content_id: contentId,
      content_type: 'product',
      content_name: contentName,
      value: value,
      currency: 'ILS',
      url: userInfo.url,
    },
  });
};

export const trackInitiateCheckoutServer = async (
  totalValue: number,
  userInfo: { email?: string; phone?: string; ip?: string; userAgent?: string; url?: string }
) => {
  return sendTikTokEvent({
    event: 'InitiateCheckout',
    event_id: `checkout_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    event_time: Date.now(),
    user: {
      email: userInfo.email,
      phone: userInfo.phone,
      ip: userInfo.ip,
      user_agent: userInfo.userAgent,
    },
    properties: {
      content_type: 'product_group',
      value: totalValue,
      currency: 'ILS',
      url: userInfo.url,
    },
  });
};

export const trackPlaceOrderServer = async (
  totalValue: number,
  userInfo: { email?: string; phone?: string; ip?: string; userAgent?: string; url?: string }
) => {
  return sendTikTokEvent({
    event: 'PlaceAnOrder',
    event_id: `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    event_time: Date.now(),
    user: {
      email: userInfo.email,
      phone: userInfo.phone,
      ip: userInfo.ip,
      user_agent: userInfo.userAgent,
    },
    properties: {
      content_type: 'product_group',
      value: totalValue,
      currency: 'ILS',
      url: userInfo.url,
    },
  });
};

export const trackSearchServer = async (
  searchTerm: string,
  userInfo: { email?: string; phone?: string; ip?: string; userAgent?: string; url?: string }
) => {
  return sendTikTokEvent({
    event: 'Search',
    event_id: `search_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    event_time: Date.now(),
    user: {
      email: userInfo.email,
      phone: userInfo.phone,
      ip: userInfo.ip,
      user_agent: userInfo.userAgent,
    },
    properties: {
      search_string: searchTerm,
      url: userInfo.url,
    },
  });
};