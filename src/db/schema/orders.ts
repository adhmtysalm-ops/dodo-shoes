import { integer, real, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

import { productsTable } from "./products";
import { usersTable } from "./users";

export const ordersTable = sqliteTable("orders", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  user_id: integer("user_id").references(() => usersTable.id).notNull(),
  status: text("status", { enum: ["pending", "shipped", "delivered", "cancelled"] }).default("pending").notNull(),
  total_amount: real("total_amount").notNull(),
  created_at: integer("created_at", { mode: "timestamp" }).notNull(),
});

export const orderItemsTable = sqliteTable("order_items", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  order_id: integer("order_id").references(() => ordersTable.id).notNull(),
  product_id: integer("product_id").references(() => productsTable.id).notNull(),
  quantity: integer("quantity").notNull(),
  price: real("price").notNull(),
});

export const insertOrderSchema = createInsertSchema(ordersTable);
export const selectOrderSchema = createSelectSchema(ordersTable);
