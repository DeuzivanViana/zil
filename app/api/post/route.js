import { db } from '@/infra/database'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const scheme = z.object({
    content: z.string().max(512).min(2)
})

export const POST = async (req) => {
    const store = cookies()

    try {
        const token = (await store).get('TOKEN')
        const data = scheme.parse(await req.json())

        const session = await db.session.findFirst({
            where: {
                TOKEN: token.value
            }
        })

        if(session === null)
            throw {message: 'Session not valid'}

        const user = await db.user.findUnique({
            where: {
                ID: session.USER_ID
            }
        })

        const post = await db.post.create({
            data: {
                CONTENT: data.content,
                OWNER_ID: user.ID
            }
        })

        await db.user.update({
            where: {
                ID: user.ID
            }, 
            data: {
                POSTS_ID: user.POSTS_ID.length > 0 ? user.POSTS_ID + '/' + post.ID : post.ID
            }
        })

        return NextResponse.json({}, {status: 200})
    }
    catch(error) {
        return NextResponse.json({}, {status: 500})
    }
}

export const GET = async (req, {params}) => {
    try {
        const posts = await db.post.findMany()

        return NextResponse.json(posts, {status: 200})
    } catch(error) {
        return NextResponse.json({}, {status: 500})
    }
}