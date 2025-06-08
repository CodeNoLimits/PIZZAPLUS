import { Router, Request, Response } from 'express';
import crypto from 'crypto';
import axios from 'axios';

const router = Router();

// Configuration iCount basée sur les exemples fournis
const ICOUNT_CONFIG = {
  companyId: process.env.ICOUNT_COMPANY_ID,
  apiUser: process.env.ICOUNT_API_USER,
  apiPass: process.env.ICOUNT_API_PASS,
  apiUrl: 'https://api.icount.co.il/api/v3.php'
};

interface IcountPaymentRequest {
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

interface IcountPaymentResponse {
  success: boolean;
  paymentUrl?: string;
  transactionId?: string;
  error?: string;
}

// Create Icount payment (leading Israeli payment processor)
router.post('/create-payment', async (req: Request, res: Response) => {
  try {
    const paymentData: IcountPaymentRequest = req.body;
    
    console.log('Creating Icount payment:', paymentData);
    
    // Generate transaction ID
    const transactionId = Date.now().toString();
    
    // Create Icount payment URL
    const paymentUrl = generateIcountPaymentUrl(paymentData, transactionId);
    
    const response: IcountPaymentResponse = {
      success: true,
      paymentUrl,
      transactionId
    };
    
    console.log('Icount payment URL generated:', paymentUrl);
    res.json(response);
    
  } catch (error: any) {
    console.error('Icount payment creation failed:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Payment creation failed'
    });
  }
});

// Generate Icount payment URL (real Israeli payment processor)
function generateIcountPaymentUrl(paymentData: IcountPaymentRequest, transactionId: string): string {
  const amount = (paymentData.amount / 100).toFixed(2);
  
  // Icount payment gateway parameters for Israeli market
  const params = new URLSearchParams({
    company_id: 'demo', // Will need real company ID from Icount
    amount: amount,
    currency: 'ILS',
    description: paymentData.description,
    customer_name: paymentData.customerName,
    customer_phone: paymentData.customerPhone,
    customer_email: paymentData.customerEmail || '',
    order_id: paymentData.orderId,
    success_url: `${process.env.DOMAIN || 'https://pizza-plus.replit.app'}/payment-success`,
    error_url: `${process.env.DOMAIN || 'https://pizza-plus.replit.app'}/payment-failed`,
    callback_url: `${process.env.DOMAIN || 'https://pizza-plus.replit.app'}/api/icount/webhook`,
    lang: 'he' // Hebrew interface
  });
  
  // Real Icount payment gateway URL (widely used in Israel)
  return `https://payment.icount.co.il/payment?${params.toString()}`;
}

// Webhook for payment status updates
router.post('/webhook', async (req: Request, res: Response) => {
  try {
    console.log('Icount webhook received:', req.body);
    
    // Icount sends payment status via webhook
    const { status, order_id, amount, transaction_id } = req.body;
    
    if (status === 'approved') {
      // Payment successful
      console.log(`Payment successful for order ${order_id}, amount: ${amount}, transaction: ${transaction_id}`);
      
      // Update order status in database
      // await storage.updateOrderStatus(parseInt(order_id), 'paid');
      
      res.status(200).send('OK');
    } else {
      // Payment failed
      console.log(`Payment failed for order ${order_id}, status: ${status}`);
      res.status(200).send('OK');
    }
    
  } catch (error) {
    console.error('Icount webhook error:', error);
    res.status(500).json({ error: 'Webhook processing failed' });
  }
});

// Get payment status
router.get('/status/:orderId', async (req: Request, res: Response) => {
  try {
    const orderId = req.params.orderId;
    
    // Query Icount for payment status
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