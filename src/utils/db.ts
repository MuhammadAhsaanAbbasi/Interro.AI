import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

const  DATABASE = process.env.NEXT_PUBLIC_DRIZZLE_DB_URL!
const sql = neon(DATABASE);
export const db = drizzle(sql, {schema});
