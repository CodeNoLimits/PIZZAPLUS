import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  ssgName: "vite",
  nodeVersion: "18",
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["client/src/data", "client/public/admin"],
      models: [
        {
          name: "MenuItem",
          type: "data",
          filePath: "client/src/data/menu/{slug}.json",
          fields: [
            { name: "name_he", type: "string", required: true },
            { name: "name_en", type: "string", required: true },
            { name: "description", type: "text" },
            { name: "price", type: "number", required: true },
            { name: "category", type: "string", required: true },
            { name: "image", type: "image" },
            { name: "popular", type: "boolean" },
            { name: "available", type: "boolean" }
          ]
        },
        {
          name: "RestaurantInfo", 
          type: "data",
          filePath: "client/src/data/restaurant-info.json",
          fields: [
            { name: "name", type: "string", required: true },
            { name: "phone", type: "string", required: true },
            { name: "whatsapp", type: "string" },
            { name: "address", type: "text", required: true },
            { name: "hoursSunThu", type: "string" },
            { name: "hoursFri", type: "string" },
            { name: "hoursSat", type: "string" },
            { name: "kosherCert", type: "string" }
          ]
        },
        {
          name: "MenuPrices",
          type: "data", 
          filePath: "client/src/data/menu-prices.json",
          fields: [
            { name: "pizzaXL", type: "number" },
            { name: "pastas", type: "number" },
            { name: "smallSalad", type: "number" },
            { name: "largeSalad", type: "number" },
            { name: "toppingPrice", type: "number" }
          ]
        }
      ],
      assetsConfig: {
        referenceType: "static",
        staticDir: "client/public",
        uploadDir: "images/menu",
        publicPath: "/images/menu"
      }
    })
  ],
  devCommand: "npm run dev",
  experimental: {
    ssg: {
      name: "vite",
      logPatterns: {
        up: ["ready in", "Local:"]
      },
      directoryChangeCommand: "cd client",
      installCommand: "npm install", 
      buildCommand: "npm run build",
      devCommand: "npm run dev",
      customContentReload: true
    }
  }
});