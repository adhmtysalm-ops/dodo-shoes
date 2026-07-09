import { zValidator } from "@hono/zod-validator";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/d1";
import { Hono } from "hono";
import { z } from "zod";

import type { Bindings } from "@/index";

import { usersTable } from "@/db/schema";

export const authRouter = new Hono<{ Bindings: Bindings }>();

const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
});

authRouter.post("/register", zValidator("json", registerSchema), async (c) => {
  const { name, email, password } = c.req.valid("json");
  const db = drizzle(c.env.DB);
  const password_hash = password;

  try {
    const [user] = await db.insert(usersTable).values({
      name,
      email,
      password_hash,
      role: "customer",
      created_at: new Date().getTime(),
    }).returning({ id: usersTable.id, name: usersTable.name, email: usersTable.email, role: usersTable.role });

    return c.json({ success: true, user });
  }
  catch (error) {
    return c.json({ success: false, error: "Email might already exist" }, 400);
  }
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

authRouter.post("/login", zValidator("json", loginSchema), async (c) => {
  const { email, password } = c.req.valid("json");
  const db = drizzle(c.env.DB);

  const [user] = await db.select().from(usersTable).where(eq(usersTable.email, email));

  if (!user || user.password_hash !== password) {
    return c.json({ success: false, error: "Invalid credentials" }, 401);
  }

  return c.json({ success: true, user: { id: user.id, name: user.name, role: user.role } });
});
