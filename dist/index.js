// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/tiktok-events.ts
import crypto from "crypto";
var TIKTOK_PIXEL_ID = "D179S7RC77UA68QT5U1G";
var TIKTOK_ACCESS_TOKEN = "80c40d86de38c300bb9e391eb4311f5da14749f5";
var TIKTOK_API_URL = "https://business-api.tiktok.com/open_api/v1.3/event/track/";
var hashPII = (data) => {
  if (!data) return "";
  return crypto.createHash("sha256").update(data.toLowerCase().trim()).digest("hex");
};
var sendTikTokEvent = async (eventData) => {
  try {
    const payload = {
      pixel_code: TIKTOK_PIXEL_ID,
      event: eventData.event,
      event_id: eventData.event_id,
      timestamp: eventData.event_time.toString(),
      context: {
        user: {
          ...eventData.user.email && { email: hashPII(eventData.user.email) },
          ...eventData.user.phone && { phone: hashPII(eventData.user.phone) },
          ...eventData.user.external_id && { external_id: hashPII(eventData.user.external_id) },
          ...eventData.user.ip && { ip: eventData.user.ip },
          ...eventData.user.user_agent && { user_agent: eventData.user.user_agent }
        },
        page: {
          url: eventData.properties.url || ""
        }
      },
      properties: {
        ...eventData.properties.content_id && { content_id: eventData.properties.content_id },
        ...eventData.properties.content_type && { content_type: eventData.properties.content_type },
        ...eventData.properties.content_name && { content_name: eventData.properties.content_name },
        ...eventData.properties.value && { value: eventData.properties.value },
        ...eventData.properties.currency && { currency: eventData.properties.currency },
        ...eventData.properties.search_string && { search_string: eventData.properties.search_string }
      }
    };
    const response = await fetch(TIKTOK_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Token": TIKTOK_ACCESS_TOKEN
      },
      body: JSON.stringify({ data: [payload] })
    });
    if (!response.ok) {
      console.error("TikTok Events API error:", response.statusText);
      return false;
    }
    const result = await response.json();
    console.log("TikTok event sent successfully:", result);
    return true;
  } catch (error) {
    console.error("Failed to send TikTok event:", error);
    return false;
  }
};
var trackViewContentServer = async (contentId, contentName, value, userInfo) => {
  return sendTikTokEvent({
    event: "ViewContent",
    event_id: `view_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    event_time: Date.now(),
    user: {
      email: userInfo.email,
      phone: userInfo.phone,
      ip: userInfo.ip,
      user_agent: userInfo.userAgent
    },
    properties: {
      content_id: contentId,
      content_type: "product",
      content_name: contentName,
      value,
      currency: "ILS",
      url: userInfo.url
    }
  });
};
var trackAddToCartServer = async (contentId, contentName, value, userInfo) => {
  return sendTikTokEvent({
    event: "AddToCart",
    event_id: `cart_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    event_time: Date.now(),
    user: {
      email: userInfo.email,
      phone: userInfo.phone,
      ip: userInfo.ip,
      user_agent: userInfo.userAgent
    },
    properties: {
      content_id: contentId,
      content_type: "product",
      content_name: contentName,
      value,
      currency: "ILS",
      url: userInfo.url
    }
  });
};
var trackInitiateCheckoutServer = async (totalValue, userInfo) => {
  return sendTikTokEvent({
    event: "InitiateCheckout",
    event_id: `checkout_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    event_time: Date.now(),
    user: {
      email: userInfo.email,
      phone: userInfo.phone,
      ip: userInfo.ip,
      user_agent: userInfo.userAgent
    },
    properties: {
      content_type: "product_group",
      value: totalValue,
      currency: "ILS",
      url: userInfo.url
    }
  });
};
var trackPlaceOrderServer = async (totalValue, userInfo) => {
  return sendTikTokEvent({
    event: "PlaceAnOrder",
    event_id: `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    event_time: Date.now(),
    user: {
      email: userInfo.email,
      phone: userInfo.phone,
      ip: userInfo.ip,
      user_agent: userInfo.userAgent
    },
    properties: {
      content_type: "product_group",
      value: totalValue,
      currency: "ILS",
      url: userInfo.url
    }
  });
};
var trackSearchServer = async (searchTerm, userInfo) => {
  return sendTikTokEvent({
    event: "Search",
    event_id: `search_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    event_time: Date.now(),
    user: {
      email: userInfo.email,
      phone: userInfo.phone,
      ip: userInfo.ip,
      user_agent: userInfo.userAgent
    },
    properties: {
      search_string: searchTerm,
      url: userInfo.url
    }
  });
};

// server/routes.ts
async function registerRoutes(app2) {
  app2.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });
  app2.post("/api/tiktok/view-content", async (req, res) => {
    try {
      const { contentId, contentName, value } = req.body;
      const userInfo = {
        ip: req.ip,
        userAgent: req.get("User-Agent"),
        url: req.get("Referer"),
        email: req.body.email,
        phone: req.body.phone
      };
      await trackViewContentServer(contentId, contentName, value, userInfo);
      res.json({ success: true });
    } catch (error) {
      console.error("TikTok ViewContent tracking error:", error);
      res.status(500).json({ error: "Tracking failed" });
    }
  });
  app2.post("/api/tiktok/add-to-cart", async (req, res) => {
    try {
      const { contentId, contentName, value } = req.body;
      const userInfo = {
        ip: req.ip,
        userAgent: req.get("User-Agent"),
        url: req.get("Referer"),
        email: req.body.email,
        phone: req.body.phone
      };
      await trackAddToCartServer(contentId, contentName, value, userInfo);
      res.json({ success: true });
    } catch (error) {
      console.error("TikTok AddToCart tracking error:", error);
      res.status(500).json({ error: "Tracking failed" });
    }
  });
  app2.post("/api/tiktok/initiate-checkout", async (req, res) => {
    try {
      const { totalValue } = req.body;
      const userInfo = {
        ip: req.ip,
        userAgent: req.get("User-Agent"),
        url: req.get("Referer"),
        email: req.body.email,
        phone: req.body.phone
      };
      await trackInitiateCheckoutServer(totalValue, userInfo);
      res.json({ success: true });
    } catch (error) {
      console.error("TikTok InitiateCheckout tracking error:", error);
      res.status(500).json({ error: "Tracking failed" });
    }
  });
  app2.post("/api/tiktok/place-order", async (req, res) => {
    try {
      const { totalValue } = req.body;
      const userInfo = {
        ip: req.ip,
        userAgent: req.get("User-Agent"),
        url: req.get("Referer"),
        email: req.body.email,
        phone: req.body.phone
      };
      await trackPlaceOrderServer(totalValue, userInfo);
      res.json({ success: true });
    } catch (error) {
      console.error("TikTok PlaceOrder tracking error:", error);
      res.status(500).json({ error: "Tracking failed" });
    }
  });
  app2.post("/api/tiktok/search", async (req, res) => {
    try {
      const { searchTerm } = req.body;
      const userInfo = {
        ip: req.ip,
        userAgent: req.get("User-Agent"),
        url: req.get("Referer"),
        email: req.body.email,
        phone: req.body.phone
      };
      await trackSearchServer(searchTerm, userInfo);
      res.json({ success: true });
    } catch (error) {
      console.error("TikTok Search tracking error:", error);
      res.status(500).json({ error: "Tracking failed" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = parseInt(process.env.PORT || "5000", 10);
  const host = "0.0.0.0";
  try {
    server.listen(port, host, () => {
      log(`serving on port ${port}`);
    });
  } catch (error) {
    log(`Failed to start server: ${error}`);
    app.listen(port, host, () => {
      log(`serving on port ${port} (fallback)`);
    });
  }
})();
