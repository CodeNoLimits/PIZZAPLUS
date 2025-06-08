import { Router, Request, Response } from 'express';
import crypto from 'crypto';
import axios from 'axios';

const router = Router();

// Configuration Tranzila basée sur les exemples fournis
const TRANZILLA_CONFIG = {
  terminal: process.env.TRANZILLA_TERMINAL,
  password: process.env.TRANZILLA_PASSWORD,
  apiUrl: 'https://secure5.tranzila.com/cgi-bin/tranzila71u.cgi',
  tokenUrl: 'https://secure5.tranzila.com/cgi-bin/tranzila71t.cgi'
};

interface TranzilaPaymentRequest {
  amount: number;
  currency: string;
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  description: string;
  orderId: string;
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
}

interface TranzilaPaymentResponse {
  success: boolean;
  paymentUrl?: string;
  transactionId?: string;
  error?: string;
}

// Create Tranzila payment with proper Israeli credit card processing
router.post('/create-payment', async (req: Request, res: Response) => {
  try {
    const paymentData: TranzilaPaymentRequest = req.body;
    
    console.log('Creating Tranzila payment:', paymentData);
    
    // Generate transaction ID
    const transactionId = Date.now().toString();
    
    if (!TRANZILLA_CONFIG.terminal) {
      // Use hosted payment page (requires no API credentials)
      const paymentUrl = generateTranzilaPaymentUrl(paymentData, transactionId);
      
      const response: TranzilaPaymentResponse = {
        success: true,
        paymentUrl,
        transactionId
      };
      
      console.log('Tranzila hosted payment URL generated:', paymentUrl);
      res.json(response);
      return;
    }

    // Use direct API processing if credentials available
    const amount = (paymentData.amount / 100).toFixed(2);
    
    const params = new URLSearchParams({
      terminal: TRANZILLA_CONFIG.terminal,
      TranzilaPW: TRANZILLA_CONFIG.password || '',
      sum: amount,
      currency: '1', // ILS
      cred_type: '1', // Regular credit card
      tranmode: 'AK', // Authorization + Capture
      myid: paymentData.orderId,
      npay: '1',
      contact: paymentData.customerName,
      email: paymentData.customerEmail || '',
      phone: paymentData.customerPhone,
      remarks: paymentData.description,
      notify_url: `${process.env.DOMAIN || 'https://pizza-plus.replit.app'}/api/tranzila/webhook`
    });

    // For hosted payment, redirect to Tranzila
    const hostedPaymentUrl = `https://direct.tranzila.com/${TRANZILLA_CONFIG.terminal}/iframenew.php?${params.toString()}`;
    
    const response: TranzilaPaymentResponse = {
      success: true,
      paymentUrl: hostedPaymentUrl,
      transactionId
    };
    
    console.log('Tranzila payment URL generated:', hostedPaymentUrl);
    res.json(response);
    
  } catch (error: any) {
    console.error('Tranzila payment creation failed:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Payment creation failed'
    });
  }
});

// Process direct credit card payment (for advanced integration)
router.post('/process-direct-payment', async (req: Request, res: Response) => {
  try {
    const { creditCard, cvv, expMonth, expYear, amount, holderId, customerName } = req.body;
    
    if (!TRANZILLA_CONFIG.terminal || !TRANZILLA_CONFIG.password) {
      return res.status(400).json({
        success: false,
        error: 'Tranzila credentials not configured'
      });
    }

    // Basic validation
    if (!creditCard || creditCard.length < 13) {
      return res.status(400).json({ 
        success: false, 
        error: 'מספר כרטיס אשראי לא תקין' 
      });
    }
    
    const params = new URLSearchParams({
      terminal: TRANZILLA_CONFIG.terminal,
      TranzilaPW: TRANZILLA_CONFIG.password,
      ccno: creditCard,
      cvv: cvv,
      expmonth: expMonth.padStart(2, '0'),
      expyear: expYear,
      sum: (amount / 100).toFixed(2),
      currency: '1', // ILS
      holderId: holderId,
      myid: Date.now().toString(),
      email: req.body.email || '',
      phone: req.body.phone || '',
      remarks: req.body.description || 'Pizza Plus Payment'
    });
    
    const response = await axios.post(
      TRANZILLA_CONFIG.apiUrl,
      params,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );
    
    // Parse Tranzila response
    const responseParams = new URLSearchParams(response.data);
    const responseCode = responseParams.get('Response');
    const confirmationCode = responseParams.get('ConfirmationCode');
    
    // Tranzila error codes from provided documentation
    const errorMessages: { [key: string]: string } = {
      '000': 'עסקה תקינה',
      '001': 'כרטיס חסום',
      '002': 'כרטיס גנוב',
      '003': 'צור קשר עם חברת האשראי',
      '004': 'סירוב',
      '005': 'סכום לא מאושר',
      '006': 'שגיאת CVV',
      '033': 'כרטיס לא תקף',
      '036': 'כרטיס פג תוקף',
      '037': 'שגיאה בחיוב',
      '039': 'מספר כרטיס שגוי',
      '057': 'ת.ז. לא תקינה',
      '061': 'חריגה ממסגרת אשראי'
    };
    
    if (responseCode === '000') {
      res.json({ 
        success: true, 
        transactionId: confirmationCode,
        message: 'התשלום בוצע בהצלחה'
      });
    } else {
      res.json({ 
        success: false, 
        error: errorMessages[responseCode || ''] || `Transaction failed: ${responseCode}`,
        code: responseCode
      });
    }
  } catch (error: any) {
    console.error('Tranzila direct payment error:', error.response?.data || error.message);
    res.status(500).json({ 
      success: false,
      error: 'שגיאה בעיבוד התשלום' 
    });
  }
});

// Generate Tranzila payment URL using real Israeli gateway
function generateTranzilaPaymentUrl(paymentData: TranzilaPaymentRequest, transactionId: string): string {
  const amount = (paymentData.amount / 100).toFixed(2);
  
  // Tranzila hosted payment page parameters
  const params = new URLSearchParams({
    sum: amount,
    currency: '1', // 1 = ILS
    cred_type: '1', // 1 = Regular credit card
    tranmode: 'AK', // Authorization + Capture
    myid: paymentData.orderId,
    npay: '1', // Number of payments
    contact: paymentData.customerName,
    email: paymentData.customerEmail || '',
    phone: paymentData.customerPhone,
    remarks: paymentData.description,
    success_url: `${process.env.DOMAIN || 'https://pizza-plus.replit.app'}/payment-success`,
    fail_url: `${process.env.DOMAIN || 'https://pizza-plus.replit.app'}/payment-failed`,
    notify_url: `${process.env.DOMAIN || 'https://pizza-plus.replit.app'}/api/tranzila/webhook`
  });
  
  // Real Tranzila hosted payment page URL
  return `https://direct.tranzila.com/${TRANZILLA_CONFIG.terminal || 'demo'}/iframenew.php?${params.toString()}`;
}

// Webhook for payment status updates
router.post('/webhook', async (req: Request, res: Response) => {
  try {
    console.log('Tranzila webhook received:', req.body);
    
    // Tranzila sends payment status via webhook
    const { Response, myid, sum, ConfirmationCode } = req.body;
    
    if (Response === '000') {
      // Payment successful
      console.log(`Payment successful for order ${myid}, amount: ${sum}, confirmation: ${ConfirmationCode}`);
      
      // Update order status in database
      // await storage.updateOrderStatus(parseInt(myid), 'paid');
      
      res.status(200).send('OK');
    } else {
      // Payment failed
      console.log(`Payment failed for order ${myid}, response code: ${Response}`);
      res.status(200).send('OK');
    }
    
  } catch (error) {
    console.error('Tranzila webhook error:', error);
    res.status(500).json({ error: 'Webhook processing failed' });
  }
});

// Get payment status
router.get('/status/:orderId', async (req: Request, res: Response) => {
  try {
    const orderId = req.params.orderId;
    
    // Query Tranzila for payment status
    res.json({
      success: true,
      status: 'pending',
      orderId
    });
    
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

export default router;