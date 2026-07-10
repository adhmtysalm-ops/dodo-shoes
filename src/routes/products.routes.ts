import { zValidator } from "@hono/zod-validator";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/d1";
import { Hono } from "hono";

import type { Bindings } from "@/index";

import { insertProductSchema, productsTable } from "@/db/schema";
import { adminAuth } from "@/middlewares/admin";

export const productsRouter = new Hono<{ Bindings: Bindings }>();

productsRouter.get("/", async (c) => {
  const db = drizzle(c.env.DB);
  const products = await db.select().from(productsTable);
  return c.json(products);
});

productsRouter.get("/:id", async (c) => {
  const id = Number(c.req.param("id"));
  const db = drizzle(c.env.DB);
  const [product] = await db.select().from(productsTable).where(eq(productsTable.id, id));
  if (!product) return c.json({ error: "Not found" }, 404);
  return c.json(product);
});

productsRouter.post("/", adminAuth, zValidator("json", insertProductSchema), async (c) => {
  const db = drizzle(c.env.DB);
  const data = c.req.valid("json");
  const [product] = await db.insert(productsTable).values({ ...data, created_at: new Date().getTime() }).returning();
  return c.json(product);
});

productsRouter.put("/:id", adminAuth, zValidator("json", insertProductSchema), async (c) => {
  const id = Number(c.req.param("id"));
  const db = drizzle(c.env.DB);
  const data = c.req.valid("json");
  const [product] = await db.update(productsTable).set(data).where(eq(productsTable.id, id)).returning();
  return c.json(product);
});

productsRouter.delete("/:id", adminAuth, async (c) => {
  const id = Number(c.req.param("id"));
  const db = drizzle(c.env.DB);
  await db.delete(productsTable).where(eq(productsTable.id, id));
  return c.json({ success: true });
});
