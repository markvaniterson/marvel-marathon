import type { APIRoute } from "astro";
import { getSession } from "auth-astro/server";
import { db } from "../../lib/db";

export const prerender = false;

// Verwijdert het account van de ingelogde gebruiker.
// ON DELETE CASCADE ruimt accounts, sessions, watched en preferences mee op.
export const DELETE: APIRoute = async ({ request }) => {
  const session = await getSession(request);
  const id = Number((session?.user as { id?: string | number } | undefined)?.id);
  if (!Number.isInteger(id) || id <= 0) {
    return new Response(JSON.stringify({ error: "niet ingelogd" }), { status: 401 });
  }
  await db.query("DELETE FROM users WHERE id = $1", [id]);
  return new Response(JSON.stringify({ ok: true }), { headers: { "content-type": "application/json" } });
};
