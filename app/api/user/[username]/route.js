import { db } from '@/infra/database'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export const GET = async (req, { params }) => {
    try {
        const {username} = await params
        const user = await db.user.findUnique({
            where: {
                USERNAME: username
            }
        })

        if(user === null)
           return NextResponse.json({}, {status: 404})

        delete user.PASSWORD_HASH

        return NextResponse.json(user, {status: 200})
    } catch(error) {
        return NextResponse.json({}, {status: 500})
    }
}