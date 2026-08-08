import type { APIRoute } from "astro";
import { getSession } from "auth-astro/server";
import { db } from "../../lib/db";

export const prerender = false;

async function userId(request: Request): Promise<number | null> {
  const session = await getSession(request);
  const id = Number((session?.user as { id?: string | number } | undefined)?.id);
  return Number.isInteger(id) && id > 0 ? id : null;
}

// Volledige kijkstaat van de ingelogde gebruiker
export const GET: APIRoute = async ({ request }) => {
  const id = await userId(request);
  if (!id) return new Response(JSON.stringify({ error: "niet ingelogd" }), { status: 401 });

  const watched = await db.query("SELECT title_key FROM watched WHERE user_id = $1", [id]);
  const prefs = await db.query("SELECT route FROM preferences WHERE user_id = $1", [id]);
  return new Response(JSON.stringify({
    watched: watched.rows.map((r) => r.title_key),
    route: prefs.rows[0]?.route ?? null,
  }), { headers: { "content-type": "application/json" } });
};

// Vervangt de kijkstaat door wat de client stuurt (client is de bron van waarheid na merge)
export const PUT: APIRoute = async ({ request }) => {
  const id = await userId(request);
  if (!id) return new Response(JSON.stringify({ error: "niet ingelogd" }), { status: 401 });

  let body: { watched?: unknown; route?: unknown };
  try { body = await request.json(); } catch {
    return new Response(JSON.stringify({ error: "ongeldige body" }), { status: 400 });
  }
  const watched = Array.isArray(body.watched)
    ? body.watched.filter((k): k is string => typeof k === "string" && k.length < 40).slice(0, 500)
    : [];
  const route = typeof body.route === "string" && body.route.length < 40 ? body.route : null;

  const client = await db.connect();
  try {
    await client.query("BEGIN");
    await client.query("DELETE FROM watched WHERE user_id = $1 AND NOT (title_key = ANY($2))", [id, watched]);
    await client.query(
      "INSERT INTO watched (user_id, title_key) SELECT $1, unnest($2::text[]) ON CONFLICT DO NOTHING",
      [id, watched],
    );
    await client.query(
      `INSERT INTO preferences (user_id, route) VALUES ($1, $2)
       ON CONFLICT (user_id) DO UPDATE SET route = EXCLUDED.route, updated_at = now()`,
      [id, route],
    );
    await client.query("COMMIT");
  } catch (e) {
    await client.query("ROLLBACK");
    throw e;
  } finally {
    client.release();
  }
  return new Response(JSON.stringify({ ok: true }), { headers: { "content-type": "application/json" } });
};
