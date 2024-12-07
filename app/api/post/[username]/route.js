import { db } from '@/infra/database'
import { NextResponse } from 'next/server'

export const GET = async (req, {params}) => {
    try {
        const page = Number(await req.nextUrl.searchParams.get('page')) || 1
        const pageSize = Number(await req.nextUrl.searchParams.get('pageSize')) || 10
        const offset = (page - 1) * pageSize

        const {username} = await params
        
        const user = await db.user.findUnique({
            where: {
                USERNAME: username
            }
        })
       
        const posts = await db.post.findMany({
            take: pageSize,
            skip: offset,
            orderBy: {
                CREATED_AT: 'desc'
            },
            where: {
                OWNER_ID: user.ID
            }
        })

        return NextResponse.json({posts}, {status: 200})
    } catch(error) {
        return NextResponse.json({err: error}, {status: 500})
    }
}