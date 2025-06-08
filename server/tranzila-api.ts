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

// Generate Tranzila payment URL (real Israeli credit card processor)
function generateTranzilaPaymentUrl(paymentData: TranzilaPaymentRequest, transactionId: string): string {
  const amount = (paymentData.amount / 100).toFixed(2);
  
  // Tranzila requires specific parameters for Israeli market
  const params = new URLSearchParams({
    supplier: 'demo', // Will need real supplier ID from Tranzila
    sum: amount,
    currency: '1', // ILS currency code for Tranzila
    cred_type: '1', // Regular credit card
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
  
  // Real Tranzila payment gateway URL
  return `https://secure5.tranzila.com/cgi-bin/tranzila71u.cgi?${params.toString()}`;
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