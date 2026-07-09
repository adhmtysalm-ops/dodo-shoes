import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/d1";
import { Hono } from "hono";

import type { Bindings } from "@/index";

import { cartItemsTable, cartsTable, orderItemsTable, ordersTable } from "@/db/schema";

export const ordersRouter = new Hono<{ Bindings: Bindings }>();

ordersRouter.get("/:userId", async (c) => {
  const db = drizzle(c.env.DB);
  const userId = Number.parseInt(c.req.param("userId"));
  const orders = await db.select().from(ordersTable).where(eq(ordersTable.user_id, userId));
  return c.json(orders);
});

ordersRouter.post("/checkout/:userId", async (c) => {
  const db = drizzle(c.env.DB);
  const userId = Number.parseInt(c.req.param("userId"));

  const [cart] = await db.select().from(cartsTable).where(eq(cartsTable.user_id, userId));
  if (!cart)
    return c.json({ error: "Cart is empty" }, 400);

  const items = await db.select().from(cartItemsTable).where(eq(cartItemsTable.cart_id, cart.id));
  if (items.length === 0)
    return c.json({ error: "Cart is empty" }, 400);

  const total_amount = 100.00;

  const [order] = await db.insert(ordersTable).values({
    user_id: userId,
    total_amount,
    status: "pending",
    created_at: new Date().getTime(),
  }).returning();

  for (const item of items) {
    await db.insert(orderItemsTable).values({
      order_id: order.id,
      product_id: item.product_id,
      quantity: item.quantity,
      price: 10.00,
    });
  }

  await db.delete(cartItemsTable).where(eq(cartItemsTable.cart_id, cart.id));

  return c.json({ success: true, order });
});
