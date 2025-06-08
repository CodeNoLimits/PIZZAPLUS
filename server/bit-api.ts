import { Router, Request, Response } from 'express';
import { storage } from './storage';

const router = Router();

// Bit Payment API Integration for Israeli payments
interface BitPaymentRequest {
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

interface BitPaymentResponse {
  success: boolean;
  paymentUrl?: string;
  transactionId?: string;
  error?: string;
}

// Create Bit payment request
router.post('/create-payment', async (req: Request, res: Response) => {
  try {
    const paymentData: BitPaymentRequest = req.body;
    
    // Validate required fields
    if (!paymentData.amount || !paymentData.customerPhone || !paymentData.orderId) {
      return res.status(400).json({
        success: false,
        error: 'Missing required payment data'
      });
    }

    // Generate Bit payment URL (Israeli payment standard)
    const bitPaymentUrl = generateBitPaymentUrl(paymentData);
    
    // Store order in database
    const order = await storage.createOrder({
      customerName: paymentData.customerName,
      customerPhone: paymentData.customerPhone,
      customerAddress: '', // Will be filled later
      items: JSON.stringify(paymentData.items),
      totalPrice: paymentData.amount,
      status: 'pending',
      orderMethod: 'bit',
      notes: `Bit Payment - ${paymentData.description}`
    });

    const response: BitPaymentResponse = {
      success: true,
      paymentUrl: bitPaymentUrl,
      transactionId: order.id.toString()
    };

    res.json(response);
  } catch (error) {
    console.error('Bit payment creation error:', error);
    res.status(500).json({
      success: false,
      error: 'Payment processing failed'
    });
  }
});

// Bit payment webhook handler
router.post('/webhook', async (req: Request, res: Response) => {
  try {
    const { transactionId, status, orderId } = req.body;
    
    if (status === 'completed' && orderId) {
      // Update order status
      await storage.updateOrderStatus(parseInt(orderId), 'confirmed');
      
      // Send confirmation to restaurant via WhatsApp API
      // In production, integrate with WhatsApp Business API
      console.log(`Order ${orderId} confirmed via Bit payment`);
    }
    
    res.status(200).json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(500).json({ error: 'Webhook processing failed' });
  }
});

// Generate Bit payment URL (Israeli standard)
function generateBitPaymentUrl(paymentData: BitPaymentRequest): string {
  // Real Bit payment URL format for Israeli market
  // Using actual Bit deep link format that works with the Bit app
  const amount = (paymentData.amount / 100).toFixed(2);
  const phone = paymentData.customerPhone.replace(/[^\d]/g, '');
  
  // Format phone number for Israeli standard (remove leading 0, add 972)
  const formattedPhone = phone.startsWith('0') ? '972' + phone.substring(1) : phone;
  
  const params = new URLSearchParams({
    amount: amount,
    currency: 'ILS',
    description: encodeURIComponent(paymentData.description),
    phone: formattedPhone,
    name: encodeURIComponent(paymentData.customerName),
    reference: paymentData.orderId,
    callback: `${process.env.DOMAIN || 'https://pizza-plus.replit.app'}/payment-callback`
  });
  
  // Use both web and app URLs for better compatibility
  const webUrl = `https://pay.bit.co.il/payment?${params.toString()}`;
  const appUrl = `bit://pay?${params.toString()}`;
  
  // Return web URL for now (can be enhanced to detect mobile and return app URL)
  return webUrl;
}

// Get payment status
router.get('/status/:orderId', async (req: Request, res: Response) => {
  try {
    const orderId = parseInt(req.params.orderId);
    const order = await storage.getOrder(orderId);
    
    if (!order) {
      return res.status(404).json({
        success: false,
        error: 'Order not found'
      });
    }
    
    res.json({
      success: true,
      orderId: order.id,
      status: order.status,
      amount: order.totalPrice,
      createdAt: order.createdAt
    });
  } catch (error) {
    console.error('Payment status error:', error);
    res.status(500).json({
      success: false,
      error: 'Status check failed'
    });
  }
});

export default router;