import { Pool } from "@neondatabase/serverless";

// ponytail: één gedeelde pool per serverless-instance is genoeg
export const db = new Pool({ connectionString: import.meta.env.DATABASE_URL });
