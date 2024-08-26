import { sql } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
try {
    
    const queryClient = postgres("postgres://postgres:postgres@0.0.0.0:5432/chatter");
    const db = drizzle(queryClient)
    
    const res = await db.execute(sql`select * from users`)
    console.log(res);
} catch (error) {
    console.log(error);
}
