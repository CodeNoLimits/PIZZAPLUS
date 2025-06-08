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
- Kosher: Certified by Chief Rabbinate of Israel

Menu Items:
- Family Pizza L (36cm): ₪55 + ₪7 per topping
- Personal Pizza (25cm): ₪35 + ₪5 per topping
- Pasta in Tomato Sauce: ₪42
- Alfredo Pasta: ₪48
- Fish & Chips: ₪58
- House Fries: ₪18
- Garlic Bread: ₪15

Available Toppings: Mushrooms, Olives, Peppers, Onions, Tomatoes, Corn

Always respond in ${language === 'he' ? 'Hebrew' : 'English'}. Be helpful, friendly, and encourage orders via WhatsApp.`;

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
