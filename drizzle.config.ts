import { defineConfig } from 'drizzle-kit'


export default defineConfig({
    schema: "./src/utils/schema.ts",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'DATABASE_URL',
    },
    verbose: true,
    strict: true,
})