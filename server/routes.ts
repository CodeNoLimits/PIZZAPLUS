import type { Express } from "express";
import { createServer, type Server } from "http";
import { 
  trackViewContentServer, 
  trackAddToCartServer, 
  trackInitiateCheckoutServer, 
  trackPlaceOrderServer,
  trackSearchServer 
} from "./tiktok-events";

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // TikTok Events API endpoints for server-side tracking
  app.post("/api/tiktok/view-content", async (req, res) => {
    try {
      const { contentId, contentName, value } = req.body;
      const userInfo = {
        ip: req.ip,
        userAgent: req.get('User-Agent'),
        url: req.get('Referer'),
        email: req.body.email,
        phone: req.body.phone
      };
      
      await trackViewContentServer(contentId, contentName, value, userInfo);
      res.json({ success: true });
    } catch (error) {
      console.error('TikTok ViewContent tracking error:', error);
      res.status(500).json({ error: 'Tracking failed' });
    }
  });

  app.post("/api/tiktok/add-to-cart", async (req, res) => {
    try {
      const { contentId, contentName, value } = req.body;
      const userInfo = {
        ip: req.ip,
        userAgent: req.get('User-Agent'),
        url: req.get('Referer'),
        email: req.body.email,
        phone: req.body.phone
      };
      
      await trackAddToCartServer(contentId, contentName, value, userInfo);
      res.json({ success: true });
    } catch (error) {
      console.error('TikTok AddToCart tracking error:', error);
      res.status(500).json({ error: 'Tracking failed' });
    }
  });

  app.post("/api/tiktok/initiate-checkout", async (req, res) => {
    try {
      const { totalValue } = req.body;
      const userInfo = {
        ip: req.ip,
        userAgent: req.get('User-Agent'),
        url: req.get('Referer'),
        email: req.body.email,
        phone: req.body.phone
      };
      
      await trackInitiateCheckoutServer(totalValue, userInfo);
      res.json({ success: true });
    } catch (error) {
      console.error('TikTok InitiateCheckout tracking error:', error);
      res.status(500).json({ error: 'Tracking failed' });
    }
  });

  app.post("/api/tiktok/place-order", async (req, res) => {
    try {
      const { totalValue } = req.body;
      const userInfo = {
        ip: req.ip,
        userAgent: req.get('User-Agent'),
        url: req.get('Referer'),
        email: req.body.email,
        phone: req.body.phone
      };
      
      await trackPlaceOrderServer(totalValue, userInfo);
      res.json({ success: true });
    } catch (error) {
      console.error('TikTok PlaceOrder tracking error:', error);
      res.status(500).json({ error: 'Tracking failed' });
    }
  });

  app.post("/api/tiktok/search", async (req, res) => {
    try {
      const { searchTerm } = req.body;
      const userInfo = {
        ip: req.ip,
        userAgent: req.get('User-Agent'),
        url: req.get('Referer'),
        email: req.body.email,
        phone: req.body.phone
      };
      
      await trackSearchServer(searchTerm, userInfo);
      res.json({ success: true });
    } catch (error) {
      console.error('TikTok Search tracking error:', error);
      res.status(500).json({ error: 'Tracking failed' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
