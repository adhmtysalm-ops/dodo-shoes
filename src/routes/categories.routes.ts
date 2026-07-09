import { zValidator } from "@hono/zod-validator";
import { drizzle } from "drizzle-orm/d1";
import { Hono } from "hono";

import type { Bindings } from "@/index";

import { categoriesTable, insertCategorySchema } from "@/db/schema";

export const categoriesRouter = new Hono<{ Bindings: Bindings }>();

categoriesRouter.get("/", async (c) => {
  const db = drizzle(c.env.DB);
  const categories = await db.select().from(categoriesTable);
  return c.json(categories);
});

categoriesRouter.post("/", zValidator("json", insertCategorySchema), async (c) => {
  const db = drizzle(c.env.DB);
  const data = c.req.valid("json");
  const [category] = await db.insert(categoriesTable).values(data).returning();
  return c.json(category);
});
