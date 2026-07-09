import { zValidator } from "@hono/zod-validator";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/d1";
import { Hono } from "hono";
import { z } from "zod";

import type { Bindings } from "@/index";

import { cartItemsTable, cartsTable } from "@/db/schema";

export const cartsRouter = new Hono<{ Bindings: Bindings }>();

cartsRouter.get("/:userId", async (c) => {
  const db = drizzle(c.env.DB);
  const userId = Number.parseInt(c.req.param("userId"));

  let [cart] = await db.select().from(cartsTable).where(eq(cartsTable.user_id, userId));

  if (!cart) {
    [cart] = await db.insert(cartsTable).values({ user_id: userId, created_at: new Date().getTime(), updated_at: new Date().getTime() }).returning();
  }

  const items = await db.select().from(cartItemsTable).where(eq(cartItemsTable.cart_id, cart.id));

  return c.json({ ...cart, items });
});

const addItemSchema = z.object({
  product_id: z.number(),
  quantity: z.number().min(1),
});

cartsRouter.post("/:userId/items", zValidator("json", addItemSchema), async (c) => {
  const db = drizzle(c.env.DB);
  const userId = Number.parseInt(c.req.param("userId"));
  const { product_id, quantity } = c.req.valid("json");

  let [cart] = await db.select().from(cartsTable).where(eq(cartsTable.user_id, userId));
  if (!cart) {
    [cart] = await db.insert(cartsTable).values({ user_id: userId, created_at: new Date().getTime(), updated_at: new Date().getTime() }).returning();
  }

  const [item] = await db.insert(cartItemsTable).values({
    cart_id: cart.id,
    product_id,
    quantity,
  }).returning();

  return c.json(item);
});
