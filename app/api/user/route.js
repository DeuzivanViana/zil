import { db } from '@/infra/database'
import { NextResponse } from 'next/server'
import { z } from 'zod'
import { createHash } from 'crypto'

const scheme = z.object({
    username: z.string().max(21).min(2),
    password: z.string().max(128).min(6)
})

export const POST = async (req, res) => {
    try {
        const data = scheme.parse(await req.json())
        
        await db.user.create({
            data: {
                USERNAME: data.username,
                PASSWORD_HASH: createHash('sha256').update(data.password).digest('hex')
            }
        })

        return NextResponse.json({}, {status: 200})
    }
    catch(error) {
        return NextResponse.json({}, {status: 500})
    }
}