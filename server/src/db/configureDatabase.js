import { sql } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import dotenv from 'dotenv';

// to load environment variables from .env file
dotenv.config();

try {
    const queryClient = postgres(process.env.POSTGRES_CONNECTION_STRING);
    const db = drizzle(queryClient)
    
    const res = await db.execute(sql`select * from users`)
    console.log(res);
} catch (error) {
    console.log(error);
}
