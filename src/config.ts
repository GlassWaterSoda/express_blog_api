import {z} from 'zod'

const envSchema =  z.object({
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
    PORT: z.coerce.number().int().positive().default(3000)
})

const parsed = envSchema.safeParse(process.env)

if (!parsed.success){
    console.error(z.prettifyError(parsed.error))
    process.exit(1)
}

export const config = parsed.data