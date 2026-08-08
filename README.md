# Marvel Marathon

Persoonlijke kijkgids voor het Marvel Cinematic Universe: kies een route (releasevolgorde, chronologisch, essentials, of álles inclusief series en shorts), bekijk per titel info en de trailer, zie waar hij nu streamt, en vink af wat je gezien hebt.

Astro-app met serverless API-routes, deploybaar op Vercel.

## Lokaal draaien

```bash
npm install
cp .env.example .env   # vul minimaal TMDB_KEY in
npm run dev
```

De app draait dan op http://localhost:4321 (of geef `-- --port 3210` mee).

## Environment (.env)

| Variabele | Waarvoor |
|---|---|
| `TMDB_KEY` | Live "nu te zien op"-data via de TMDB API (gratis key: themoviedb.org → Instellingen → API). Blijft server-side — de frontend praat met `/api/providers`. |
| `DATABASE_URL` | Neon Postgres connection string (console.neon.tech) — nodig voor accounts. |
| `AUTH_SECRET` | Auth.js-sessiesleutel: `openssl rand -base64 33` |
| `AUTH_GOOGLE_ID` / `AUTH_GOOGLE_SECRET` | Google-login (zie hieronder). |
| `AUTH_APPLE_ID` / `AUTH_APPLE_SECRET` | Apple-login (zie hieronder). |

Op Vercel zet je dezelfde variabelen bij Project → Settings → Environment Variables.

## Database (Neon)

Schema staat in `db/schema.sql` (Auth.js-tabellen `users`/`accounts`/`sessions`/`verification_token` plus `watched` en `preferences`). Aanmaken of bijwerken:

```bash
npm run db:migrate
```

## Google-login activeren

1. [console.cloud.google.com](https://console.cloud.google.com) → maak een project → "APIs & Services" → "Credentials" → "Create OAuth client ID" (type: Web application).
2. Authorized redirect URI: `https://JOUW-DOMEIN/api/auth/callback/google` (en `http://localhost:4321/api/auth/callback/google` voor dev).
3. Zet Client ID en Secret in `.env` als `AUTH_GOOGLE_ID` / `AUTH_GOOGLE_SECRET`.

Zodra de variabelen bestaan verschijnt de inlogknop vanzelf in de header (`/api/auth/signin`).

## Apple-login activeren

Vereist een betaald Apple Developer-account ($99/jaar): maak op developer.apple.com een App ID + Services ID + key voor "Sign in with Apple", genereer daarmee het client-secret (JWT), en vul `AUTH_APPLE_ID` / `AUTH_APPLE_SECRET`. Redirect URI: `https://JOUW-DOMEIN/api/auth/callback/apple` (Apple staat geen localhost toe).

## Nog te bouwen

- Sync van afgevinkte titels naar de `watched`-tabel zodra login live is (nu: localStorage).

## Credits

Filmposters, artwork en streamingdata via [TMDB](https://www.themoviedb.org) (JustWatch-data). Deze app gebruikt de TMDB API maar is niet gemaakt of onderschreven door TMDB.
