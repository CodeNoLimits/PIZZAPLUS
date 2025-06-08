import type { Express } from "express";
import { createServer, type Server } from "http";
import bitPaymentRouter from "./bit-api";

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Bit payment API routes
  app.use('/api/bit', bitPaymentRouter);

  // Menu endpoints can be added here if needed for dynamic menu management
  // For now, using static data from constants

  const httpServer = createServer(app);
  return httpServer;
}
