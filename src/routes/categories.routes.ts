import { zValidator } from "@hono/zod-validator";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/d1";
import { Hono } from "hono";

import type { Bindings } from "@/index";

import { categoriesTable, insertCategorySchema } from "@/db/schema";
import { adminAuth } from "@/middlewares/admin";

export const categoriesRouter = new Hono<{ Bindings: Bindings }>();

categoriesRouter.get("/", async (c) => {
  const db = drizzle(c.env.DB);
  const categories = await db.select().from(categoriesTable);
  return c.json(categories);
});

categoriesRouter.post("/", adminAuth, zValidator("json", insertCategorySchema), async (c) => {
  const db = drizzle(c.env.DB);
  const data = c.req.valid("json");
  const [category] = await db.insert(categoriesTable).values(data).returning();
  return c.json(category);
});

categoriesRouter.put("/:id", adminAuth, zValidator("json", insertCategorySchema), async (c) => {
  const id = Number(c.req.param("id"));
  const db = drizzle(c.env.DB);
  const data = c.req.valid("json");
  const [category] = await db.update(categoriesTable).set(data).where(eq(categoriesTable.id, id)).returning();
  return c.json(category);
});

categoriesRouter.delete("/:id", adminAuth, async (c) => {
  const id = Number(c.req.param("id"));
  const db = drizzle(c.env.DB);
  await db.delete(categoriesTable).where(eq(categoriesTable.id, id));
  return c.json({ success: true });
});
