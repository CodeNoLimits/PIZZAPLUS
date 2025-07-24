import { defineStackbitConfig } from "@stackbit/types";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  ssgName: "custom",
  nodeVersion: "18",
  devCommand: "cd client && npm run dev",
  buildCommand: "npm run netlify:build",
  outputDir: "dist/public"
});