import { zValidator } from "@hono/zod-validator";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/d1";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import { z } from "zod";

import type { Bindings } from "@/index";

import { usersTable } from "@/db/schema";

export const authRouter = new Hono<{ Bindings: Bindings }>();

const registerSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(8),
  password: z.string().min(6),
});

authRouter.post("/register", zValidator("json", registerSchema), async (c) => {
  const { name, phone, password } = c.req.valid("json");
  const db = drizzle(c.env.DB);
  // In a real production app, hash the password using bcrypt or similar.
  const password_hash = password;

  try {
    const [user] = await db.insert(usersTable).values({
      name,
      phone,
      password_hash,
      role: "customer",
      created_at: new Date().getTime(),
    }).returning({ id: usersTable.id, name: usersTable.name, phone: usersTable.phone, role: usersTable.role });

    const payload = {
      id: user.id,
      role: user.role,
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, // 30 days
    };
    const token = await sign(payload, c.env.JWT_SECRET || "super-secret");

    return c.json({ success: true, user, token });
  }
  catch (error) {
    return c.json({ success: false, error: "Phone number might already exist" }, 400);
  }
});

const loginSchema = z.object({
  phone: z.string().min(8),
  password: z.string(),
});

authRouter.post("/login", zValidator("json", loginSchema), async (c) => {
  const { phone, password } = c.req.valid("json");
  const db = drizzle(c.env.DB);

  const [user] = await db.select().from(usersTable).where(eq(usersTable.phone, phone));

  // In a real app, compare the hashed password
  if (!user || user.password_hash !== password) {
    return c.json({ success: false, error: "Invalid credentials" }, 401);
  }

  const payload = {
    id: user.id,
    role: user.role,
    exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, // 30 days
  };
  const token = await sign(payload, c.env.JWT_SECRET || "super-secret");

  return c.json({ success: true, user: { id: user.id, name: user.name, role: user.role }, token });
});
