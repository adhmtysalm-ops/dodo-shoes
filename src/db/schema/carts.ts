import { integer, sqliteTable } from "drizzle-orm/sqlite-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

import { productsTable } from "./products";
import { usersTable } from "./users";

export const cartsTable = sqliteTable("carts", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  user_id: integer("user_id").references(() => usersTable.id).notNull().unique(),
  created_at: integer("created_at", { mode: "timestamp" }).notNull(),
  updated_at: integer("updated_at", { mode: "timestamp" }).notNull(),
});

export const cartItemsTable = sqliteTable("cart_items", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  cart_id: integer("cart_id").references(() => cartsTable.id).notNull(),
  product_id: integer("product_id").references(() => productsTable.id).notNull(),
  quantity: integer("quantity").default(1).notNull(),
});

export const insertCartItemSchema = createInsertSchema(cartItemsTable);
export const selectCartItemSchema = createSelectSchema(cartItemsTable);
