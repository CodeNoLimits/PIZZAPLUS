import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").unique().notNull(),
  password: text("password").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const orders = pgTable("orders", {
  id: serial("id").primaryKey(),
  customerName: text("customer_name"),
  customerPhone: text("customer_phone"),
  customerAddress: text("customer_address"),
  items: text("items").notNull(), // JSON string of order items
  totalPrice: integer("total_price").notNull(), // in agorot
  status: text("status").default("pending").notNull(), // pending, confirmed, preparing, delivered, cancelled
  orderMethod: text("order_method").default("whatsapp").notNull(), // whatsapp, phone, website
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const menuItems = pgTable("menu_items", {
  id: serial("id").primaryKey(),
  nameHe: text("name_he").notNull(),
  nameEn: text("name_en").notNull(),
  nameFr: text("name_fr"),
  nameRu: text("name_ru"),
  descriptionHe: text("description_he"),
  descriptionEn: text("description_en"),
  descriptionFr: text("description_fr"),
  descriptionRu: text("description_ru"),
  price: integer("price").notNull(), // Price in agorot (₪1 = 100 agorot)
  category: text("category").notNull(), // pizzas, pastas, salads, mains, sides, desserts, drinks
  image: text("image"),
  available: boolean("available").default(true),
  toppings: text("toppings").array(), // Available toppings for this item
  toppingPrice: integer("topping_price"), // Price per topping in agorot
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
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
  sender: text("sender").notNull(), // 'user' or 'gemini'
  language: text("language").default("he").notNull(),
  timestamp: timestamp("timestamp").defaultNow(),
});

export const customerFeedback = pgTable("customer_feedback", {
  id: serial("id").primaryKey(),
  customerName: text("customer_name"),
  customerEmail: text("customer_email"),
  customerPhone: text("customer_phone"),
  rating: integer("rating"), // 1-5 stars
  feedback: text("feedback").notNull(),
  orderId: integer("order_id").references(() => orders.id),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
  createdAt: true,
});

export const insertOrderSchema = createInsertSchema(orders).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertMenuItemSchema = createInsertSchema(menuItems).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertCartItemSchema = createInsertSchema(cartItems).omit({
  id: true,
  createdAt: true,
});

export const insertChatMessageSchema = createInsertSchema(chatMessages).omit({
  id: true,
  timestamp: true,
});

export const insertCustomerFeedbackSchema = createInsertSchema(customerFeedback).omit({
  id: true,
  createdAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type InsertOrder = z.infer<typeof insertOrderSchema>;
export type InsertMenuItem = z.infer<typeof insertMenuItemSchema>;
export type InsertCartItem = z.infer<typeof insertCartItemSchema>;
export type InsertChatMessage = z.infer<typeof insertChatMessageSchema>;
export type InsertCustomerFeedback = z.infer<typeof insertCustomerFeedbackSchema>;

export type User = typeof users.$inferSelect;
export type Order = typeof orders.$inferSelect;
export type MenuItem = typeof menuItems.$inferSelect;
export type CartItem = typeof cartItems.$inferSelect;
export type ChatMessage = typeof chatMessages.$inferSelect;
export type CustomerFeedback = typeof customerFeedback.$inferSelect;
