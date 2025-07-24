import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";
import path from "path";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  ssgName: "custom",
  nodeVersion: "18",
  buildCommand: "npm run netlify:build",
  devCommand: "npm run dev --prefix client",
  outputDir: "dist/public",
  contentSources: [
    new GitContentSource({
      rootPath: path.join(__dirname, "client"),
      contentDirs: ["src/data"],
      models: [
        {
          name: "HomePage",
          type: "page",
          urlPath: "/",
          filePath: "src/data/home.json",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "description", type: "text" },
            { name: "heroImage", type: "string" }
          ]
        }
      ],
      assetsConfig: {
        referenceType: "static",
        staticDir: "public",
        uploadDir: "images",
        publicPath: "/images"
      }
    })
  ]
});