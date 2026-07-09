import { zValidator } from "@hono/zod-validator";
import { drizzle } from "drizzle-orm/d1";
import { Hono } from "hono";

import type { Bindings } from "@/index";

import { insertProductSchema, productsTable } from "@/db/schema";

export const productsRouter = new Hono<{ Bindings: Bindings }>();

productsRouter.get("/", async (c) => {
  const db = drizzle(c.env.DB);
  const products = await db.select().from(productsTable);
  return c.json(products);
});

productsRouter.post("/", zValidator("json", insertProductSchema), async (c) => {
  const db = drizzle(c.env.DB);
  const data = c.req.valid("json");
  // ensure created_at is set for sqlite
  const [product] = await db.insert(productsTable).values({ ...data, created_at: new Date().getTime() }).returning();
  return c.json(product);
});
