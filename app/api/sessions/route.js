import { db } from '@/infra/database'
import { z } from 'zod'
import { createHash, randomUUID } from 'crypto'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

const scheme = z.object({
    username: z.string().max(21).min(2),
    password: z.string().max(128).min(6)
})

export const POST = async (req) => {
    const store = cookies()

    try {
        const data = scheme.parse(await req.json())

        const user = await db.user.findUnique({
            where: {
                USERNAME: data.username,
                PASSWORD_HASH: createHash('sha256').update(data.password).digest('hex')
            }
        })

        let session = await db.session.findUnique({
            where: {
                USER_ID: user.ID
            }
        })

        if(session === null) {
            session = await db.session.create({
                data: {
                    USER_ID: user.ID,
                    TOKEN: randomUUID()
                }
            })
        }
        else
        {
            session = await db.session.update({
                where: {
                    USER_ID: user.ID
                },
                data: {
                    TOKEN: randomUUID()
                }
            })
        }

        (await store).set('TOKEN', session.TOKEN)
        
        return NextResponse.json({}, {status: 200})
    }
    catch(error) {
        return NextResponse.json({message: error}, {status: 500})
    }
}