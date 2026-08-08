// Genereert het Apple client-secret (JWT, max 6 maanden geldig) voor Sign in with Apple.
// Gebruik: node scripts/apple-secret.mjs <pad-naar.p8> <TEAM_ID> <SERVICES_ID> <KEY_ID>
import { readFileSync } from "node:fs";
import { SignJWT, importPKCS8 } from "jose";

const [p8Path, teamId, servicesId, keyId] = process.argv.slice(2);
if (!p8Path || !teamId || !servicesId || !keyId) {
  console.error("Gebruik: node scripts/apple-secret.mjs <pad-naar.p8> <TEAM_ID> <SERVICES_ID> <KEY_ID>");
  process.exit(1);
}

const key = await importPKCS8(readFileSync(p8Path, "utf8"), "ES256");
const jwt = await new SignJWT({})
  .setProtectedHeader({ alg: "ES256", kid: keyId })
  .setIssuer(teamId)
  .setSubject(servicesId)
  .setAudience("https://appleid.apple.com")
  .setIssuedAt()
  .setExpirationTime("180d")
  .sign(key);

console.log(jwt);
console.error("\nLet op: dit secret verloopt over ~6 maanden — draai dit script dan opnieuw en werk AUTH_APPLE_SECRET bij.");
