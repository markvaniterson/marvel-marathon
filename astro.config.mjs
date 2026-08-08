import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import auth from "auth-astro";

export default defineConfig({
  output: "static",
  adapter: vercel(),
  integrations: [auth()],
  // Astro's checkOrigin vergelijkt tegen request.url, die op Vercel "localhost" is
  // (adapterbug, zie src/pages/api/auth/[...auth].ts). Auth.js heeft eigen CSRF-tokens
  // en onze API-routes accepteren alleen JSON, dus form-CSRF is al afgedekt.
  security: { checkOrigin: false },
});
