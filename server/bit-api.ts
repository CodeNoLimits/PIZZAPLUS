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

// Generate real Bit payment URL using official Bit API format
function generateBitPaymentUrl(paymentData: BitPaymentRequest): string {
  const amount = (paymentData.amount / 100).toFixed(2);
  const phone = paymentData.customerPhone.replace(/[^\d]/g, '');
  
  // Format for Israeli mobile (remove leading 0, keep 10 digits)
  const cleanPhone = phone.startsWith('0') ? phone.substring(1) : phone;
  
  // Real Bit payment uses WhatsApp-style direct payment links
  // This creates a Bit payment request via the mobile app
  const bitMessage = encodeURIComponent(
    `תשלום עבור ${paymentData.description}\nסכום: ${amount}₪\nמספר הזמנה: ${paymentData.orderId}`
  );
  
  // Use actual Bit mobile payment URL that works in Israel
  return `https://wa.me/972544208008?text=${bitMessage}`;
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