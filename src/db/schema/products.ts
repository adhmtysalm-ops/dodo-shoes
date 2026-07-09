import { integer, real, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

import { categoriesTable } from "./categories";

export const productsTable = sqliteTable("products", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  description: text("description"),
  price: real("price").notNull(),
  stock: integer("stock").default(0).notNull(),
  category_id: integer("category_id").references(() => categoriesTable.id),
  created_at: integer("created_at", { mode: "timestamp" }).notNull(),
});

export const insertProductSchema = createInsertSchema(productsTable);
export const selectProductSchema = createSelectSchema(productsTable);
