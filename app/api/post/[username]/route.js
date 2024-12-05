import { db } from '@/infra/database'
import { NextResponse } from 'next/server'

export const GET = async (req, {params}) => {
    try {
        const user = await db.user.findUnique({
            where: {
                USERNAME: params.username
            }
        })
       
        const posts = await db.post.findMany({
            where: {
                OWNER_ID: user.ID
            }
        })

        return NextResponse.json({posts: posts}, {status: 200})
    } catch(error) {
        return NextResponse.json({err: error}, {status: 500})
    }
}