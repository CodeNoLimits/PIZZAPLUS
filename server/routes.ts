import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Menu endpoints can be added here if needed for dynamic menu management
  // For now, using static data from constants

  const httpServer = createServer(app);
  return httpServer;
}
