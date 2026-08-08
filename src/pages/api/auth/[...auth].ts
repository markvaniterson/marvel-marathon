import type { APIRoute, APIContext } from "astro";
import { AstroAuth } from "auth-astro/server";

export const prerender = false;

// De Vercel-adapter geeft request.url als https://localhost/... door, terwijl de echte
// host in de forwarded headers zit. Auth.js bouwt redirect-URLs op request.url, dus
// herschrijven we die hier. Deze route overschaduwt de door auth-astro geïnjecteerde route.
const { GET: rawGET, POST: rawPOST } = AstroAuth();

function withRealHost(ctx: APIContext): APIContext {
  const { request } = ctx;
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  const proto = request.headers.get("x-forwarded-proto") ?? "https";
  const url = new URL(request.url);
  if (!host || url.host === host) return ctx;
  const fixed = new Request(new URL(url.pathname + url.search, `${proto}://${host}`), request);
  return new Proxy(ctx, {
    get: (target, prop) => (prop === "request" ? fixed : Reflect.get(target, prop)),
  });
}

export const GET: APIRoute = (ctx) => rawGET(withRealHost(ctx));
export const POST: APIRoute = (ctx) => rawPOST(withRealHost(ctx));
