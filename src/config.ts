import {z} from 'zod'
import { existsSync } from 'node:fs'

const envSchema =  z.object({
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
    PORT: z.coerce.number().int().positive().default(3000)
})

if (existsSync(".env")){
    process.loadEnvFile()
}


const parsed = envSchema.safeParse(process.env)

if (!parsed.success){
    console.error(z.prettifyError(parsed.error))
    process.exit(1)
}

export const config = parsed.data