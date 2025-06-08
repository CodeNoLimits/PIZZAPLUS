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

PIZZAS:
- מגש L (Pizza L 36cm): ₪45 + ₪6 per topping
- מגש אישי (Personal Pizza): ₪28 + ₪6 per topping

PASTAS:
- רוטב עגבניות ובזיליקום (Tomato & Basil): ₪45
- שמנת פטריות (Mushroom Cream): ₪45
- רוזה (Rosé - tomato & cream): ₪45

SALADS:
- סלט קטן (Small Salad): ₪35 + toppings
- סלט גדול (Large Salad): ₪50 + toppings

MAIN DISHES:
- פיש & צ'יפס (Fish & Chips): ₪61
- צ'יז קראסט (Cheese Crust - stuffed chicken): ₪63
- מרקים בעונה (Seasonal Soups): ₪25

SIDES:
- צ'יפס קטן (Small Fries): ₪12
- צ'יפס גדול (Large Fries): ₪18
- לחם שום (Garlic Bread): ₪12

DESSERTS:
- מקלות שוקולד (Chocolate Sticks): ₪25

TOPPINGS (₪5-7 each):
Pizza: עגבניות, בצל, פטריות, תירס, זיתים ירוקים, זיתים שחורים, בולגרית, טונה
Salad: ביצה קשה, טונה, אבוקדו, בולגרית

Always respond in ${language === 'he' ? 'Hebrew' : 'English'}. Be helpful, friendly, and encourage WhatsApp orders at 054-6083500.`;

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
