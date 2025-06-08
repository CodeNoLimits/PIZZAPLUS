import { GoogleGenerativeAI } from '@google/generative-ai';
import { GEMINI_API_KEY } from '../constants';

let genAI: GoogleGenerativeAI | null = null;

if (GEMINI_API_KEY) {
  genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
}

export async function sendMessageToGemini(message: string, history: any[], language: string): Promise<string> {
  if (!genAI) {
    return 'מצטער, שירות הצ\'אט אינו זמין כרגע. אנא צרו קשר טלפונית.';
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const systemInstruction = `You are a friendly customer service assistant for Pizza Plus, a kosher pizza restaurant in Jerusalem, Israel.

Restaurant Details:
- Name: Pizza Plus (פיצה פלוס)
- Location: 2 Ish Matzliach St, Har Homa, Jerusalem (איש מצלח 2, הר חומה, ירושלים)
- Phone: 02-9921201
- WhatsApp Orders: 054-6083500
- Hours: Sun-Thu 11:00-23:00, Fri 11:00-15:00, Sat Night 20:00-23:00
- Kosher: Certified by Chief Rabbinate of Israel (בד״ץ הרבנות הראשית לישראל)

COMPLETE MENU WITH EXACT PRICES:

PIZZAS:
- מגש L (Pizza L 36cm): ₪52 base price
- מגש אישי (Personal Pizza): ₪35 base price

PIZZA TOPPINGS:
For Large Pizza (₪7 each): עגבניות, בצל, זיתים ירוקים, זיתים שחורים, פטריות, פלפל חריף, בולגרית (₪10), חציל, בטטה, תירס, אננס, טונה (₪10), פסטו
For Personal Pizza (₪5 each): עגבניות, בצל, זיתים ירוקים, זיתים שחורים, פטריות, פלפל חריף, בולגרית (₪8), חציל, בטטה, תירס, אננס, טונה (₪8), פסטו
For Half Large Pizza (₪5 each per half): Same toppings, בולגרית (₪7), טונה (₪7)

PASTAS:
- רוטב עגבניות ובזיליקום (Tomato & Basil): ₪52
- שמנת פטריות (Mushroom Cream): ₪52
- רוזה (Rosé - tomato & cream): ₪52

SALADS:
- סלט קטן (Small Salad): ₪39
- סלט גדול (Large Salad): ₪55
Salad Toppings: ביצה קשה, טונה, אבוקדו, בולגרית

SPECIALS:
- פיש & צ'יפס (Fish & Chips): ₪68
- צ'יז קראסט (Cheese Crust Pizza with cheese-stuffed crust): ₪72
- מרקים בעונה (Seasonal Soups): ₪32
- מקלות שוקולד (Chocolate Sticks): ₪32

SIDES:
- צ'יפס קטן (Small Chips): ₪15
- צ'יפס גדול (Large Chips): ₪24
- לחם שום (Garlic Bread): ₪22

DRINKS:
- בקבוק גדול (Large Bottle): ₪15
- בקבוק קטן (Small Bottle): ₪10
- פחית (Can): ₪8

Website Features: Online menu with cart, multilingual support (Hebrew/English/French/Russian), interactive Google Maps, real-time AI chat, WhatsApp ordering, authentic restaurant photos.

Always respond in ${language === 'he' ? 'Hebrew' : language === 'en' ? 'English' : language === 'fr' ? 'French' : 'Russian'}. Be helpful, friendly, and encourage orders via WhatsApp 054-6083500. Help calculate prices with toppings and guide ordering.`;

    const chat = model.startChat({
      history: history,
      generationConfig: {
        maxOutputTokens: 200,
      },
    });

    const result = await chat.sendMessage(systemInstruction + '\n\nUser: ' + message);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Gemini API error:', error);
    return language === 'he' 
      ? 'מצטער, אירעה שגיאה. אנא נסה שוב או צור קשר טלפונית.'
      : 'Sorry, an error occurred. Please try again or contact us by phone.';
  }
}
