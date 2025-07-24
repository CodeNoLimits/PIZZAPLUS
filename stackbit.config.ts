import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  ssgName: "custom",
  nodeVersion: "18",
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["client/src/data"],
      models: [
        {
          name: "HomePage",
          type: "page",
          urlPath: "/",
          filePath: "client/src/data/home.json", 
          fields: [
            { name: "title", type: "string", required: true },
            { name: "description", type: "text" },
            { name: "heroImage", type: "image" }
          ]
        },
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
        }
      ],
      assetsConfig: {
        referenceType: "static",
        staticDir: "client/public",
        uploadDir: "images",
        publicPath: "/images"
      }
    })
  ],
  devCommand: "cd client && npm run dev",
  siteMap: ({ documents }) => {
    return [
      {
        stableId: "home",
        urlPath: "/",
        document: documents.find(d => d.modelName === "HomePage"),
        isHomePage: true
      }
    ];
  }
});