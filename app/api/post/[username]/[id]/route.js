import { db } from '@/infra/database'
import { NextResponse } from 'next/server'

export const GET = async (req, {params}) => {
    try {
        await params
        const posts = await db.post.findUnique({
            where: {
                ID: params.id
            }
        })

        return NextResponse.json({posts}, {status: 200})
    } catch(error) {
        return NextResponse.json({err: error}, {status: 500})
    }
}