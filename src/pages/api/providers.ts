import type { APIRoute } from "astro";

export const prerender = false;

// Proxyt TMDB watch-providers (JustWatch-data) zodat de API-key server-side in .env blijft.
export const GET: APIRoute = async ({ url }) => {
  const kind = url.searchParams.get("kind") === "tv" ? "tv" : "movie";
  const id = Number(url.searchParams.get("id"));
  if (!Number.isInteger(id) || id <= 0) {
    return new Response(JSON.stringify({ error: "ongeldig id" }), { status: 400 });
  }

  const key = import.meta.env.TMDB_KEY;
  const headers = {
    "content-type": "application/json",
    // Vercel edge-cache: 24u vers, daarna een dag stale terwijl hij ververst
    "cache-control": "public, s-maxage=86400, stale-while-revalidate=86400",
  };
  if (!key) return new Response(JSON.stringify({ providers: [] }), { headers });

  try {
    const r = await fetch(`https://api.themoviedb.org/3/${kind}/${id}/watch/providers?api_key=${key}`);
    if (!r.ok) return new Response(JSON.stringify({ providers: [] }), { headers });
    const nl = (await r.json()).results?.NL;
    const providers: string[] = nl?.flatrate?.map((p: { provider_name: string }) => p.provider_name) ?? [];
    return new Response(JSON.stringify({ providers }), { headers });
  } catch {
    return new Response(JSON.stringify({ providers: [] }), { headers });
  }
};
