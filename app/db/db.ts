import { config } from "dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

config({ path: ".env.local" }); // or .env.local

const client = postgres(process.env.NEXT_PUBLIC_SUPABASE_URL!);
export const db = drizzle(client);
