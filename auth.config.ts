import { defineConfig } from "auth-astro";
import Google from "@auth/core/providers/google";
import Apple from "@auth/core/providers/apple";
import PostgresAdapter from "@auth/pg-adapter";
import { Pool } from "@neondatabase/serverless";
import type { Provider } from "@auth/core/providers";

// Providers activeren zichzelf zodra hun env-variabelen bestaan (zie .env.example en README).
const providers: Provider[] = [];
if (import.meta.env.AUTH_GOOGLE_ID) {
  providers.push(Google({
    clientId: import.meta.env.AUTH_GOOGLE_ID,
    clientSecret: import.meta.env.AUTH_GOOGLE_SECRET,
  }));
}
if (import.meta.env.AUTH_APPLE_ID) {
  providers.push(Apple({
    clientId: import.meta.env.AUTH_APPLE_ID,
    clientSecret: import.meta.env.AUTH_APPLE_SECRET,
  }));
}

export default defineConfig({
  adapter: PostgresAdapter(new Pool({ connectionString: import.meta.env.DATABASE_URL })),
  providers,
  secret: import.meta.env.AUTH_SECRET,
  trustHost: true,
  callbacks: {
    // user.id meegeven zodat API-routes weten wie er is ingelogd
    session({ session, user }) {
      session.user.id = user.id;
      return session;
    },
  },
});
