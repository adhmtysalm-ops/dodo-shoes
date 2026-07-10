import type { Context, Next } from "hono";
import { verify } from "hono/jwt";

export async function adminAuth(c: Context, next: Next) {
  const authHeader = c.req.header("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return c.json({ error: "Unauthorized" }, 401);
  }

  const token = authHeader.split(" ")[1];
  try {
    const payload = await verify(token, c.env.JWT_SECRET || "super-secret");
    if (payload.role !== "admin") {
      return c.json({ error: "Forbidden: Admins only" }, 403);
    }
    c.set("user", payload);
    await next();
  }
  catch (err) {
    return c.json({ error: "Invalid token" }, 401);
  }
}
