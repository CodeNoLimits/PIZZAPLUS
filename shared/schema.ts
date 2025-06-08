import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const menuItems = pgTable("menu_items", {
  id: serial("id").primaryKey(),
  nameHe: text("name_he").notNull(),
  nameEn: text("name_en").notNull(),
  descriptionHe: text("description_he"),
  descriptionEn: text("description_en"),
  price: integer("price").notNull(), // Price in agorot (₪1 = 100 agorot)
  category: text("category").notNull(), // pizzas, pastas, mains, sides, desserts
  image: text("image"),
  available: boolean("available").default(true),
  toppings: text("toppings").array(), // Available toppings for this item
  toppingPrice: integer("topping_price"), // Price per topping in agorot
});

export const cartItems = pgTable("cart_items", {
  id: serial("id").primaryKey(),
  sessionId: text("session_id").notNull(),
  menuItemId: integer("menu_item_id").references(() => menuItems.id),
  quantity: integer("quantity").notNull().default(1),
  selectedToppings: text("selected_toppings").array(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const chatMessages = pgTable("chat_messages", {
  id: serial("id").primaryKey(),
  sessionId: text("session_id").notNull(),
  message: text("message").notNull(),
  sender: text("sender").notNull(), // 'user' or 'bot'
  timestamp: timestamp("timestamp").defaultNow(),
});

export const insertMenuItemSchema = createInsertSchema(menuItems).omit({
  id: true,
});

export const insertCartItemSchema = createInsertSchema(cartItems).omit({
  id: true,
  createdAt: true,
});

export const insertChatMessageSchema = createInsertSchema(chatMessages).omit({
  id: true,
  timestamp: true,
});

export type InsertMenuItem = z.infer<typeof insertMenuItemSchema>;
export type InsertCartItem = z.infer<typeof insertCartItemSchema>;
export type InsertChatMessage = z.infer<typeof insertChatMessageSchema>;

export type MenuItem = typeof menuItems.$inferSelect;
export type CartItem = typeof cartItems.$inferSelect;
export type ChatMessage = typeof chatMessages.$inferSelect;
