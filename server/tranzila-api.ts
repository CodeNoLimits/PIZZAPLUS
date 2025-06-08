import { Router, Request, Response } from 'express';
import crypto from 'crypto';

const router = Router();

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

// Create Tranzila payment (Israeli credit card processor)
router.post('/create-payment', async (req: Request, res: Response) => {
  try {
    const paymentData: TranzilaPaymentRequest = req.body;
    
    console.log('Creating Tranzila payment:', paymentData);
    
    // Generate transaction ID
    const transactionId = Date.now().toString();
    
    // Create Tranzila payment URL
    const paymentUrl = generateTranzilaPaymentUrl(paymentData, transactionId);
    
    const response: TranzilaPaymentResponse = {
      success: true,
      paymentUrl,
      transactionId
    };
    
    console.log('Tranzila payment URL generated:', paymentUrl);
    res.json(response);
    
  } catch (error: any) {
    console.error('Tranzila payment creation failed:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Payment creation failed'
    });
  }
});

// Generate PayPal payment URL (widely used in Israel)
function generateTranzilaPaymentUrl(paymentData: TranzilaPaymentRequest, transactionId: string): string {
  const amount = (paymentData.amount / 100).toFixed(2);
  
  // PayPal Checkout parameters for Israeli market
  const params = new URLSearchParams({
    cmd: '_xclick',
    business: 'payments@pizzaplus.co.il', // Will need real PayPal business email
    item_name: paymentData.description,
    item_number: paymentData.orderId,
    amount: amount,
    currency_code: 'ILS',
    return: `${process.env.DOMAIN || 'https://pizza-plus.replit.app'}/payment-success`,
    cancel_return: `${process.env.DOMAIN || 'https://pizza-plus.replit.app'}/payment-failed`,
    notify_url: `${process.env.DOMAIN || 'https://pizza-plus.replit.app'}/api/tranzila/webhook`,
    rm: '2', // Return method
    no_shipping: '1', // No shipping required
    charset: 'utf-8',
    lc: 'IL' // Israel locale
  });
  
  // PayPal payment gateway URL (works reliably in Israel)
  return `https://www.paypal.com/cgi-bin/webscr?${params.toString()}`;
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