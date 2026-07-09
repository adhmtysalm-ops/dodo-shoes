import { Hono } from "hono";

import { authRouter, cartsRouter, categoriesRouter, ordersRouter, productsRouter } from "@/routes";

export type Bindings = {
  SECRET_KEY: string;
  DB: D1Database;
};

const app = new Hono<{ Bindings: Bindings }>();


app.basePath("/api/auth").route("/", authRouter);
app.basePath("/api/categories").route("/", categoriesRouter);
app.basePath("/api/products").route("/", productsRouter);
app.basePath("/api/carts").route("/", cartsRouter);
app.basePath("/api/orders").route("/", ordersRouter);

export default app;
