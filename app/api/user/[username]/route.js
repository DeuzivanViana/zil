import { db } from '@/infra/database'
import { NextResponse } from 'next/server'

export const GET = async (req, { params }) => {
    try {
        const user = await db.user.findUnique({
            where: {
                USERNAME: params.username
            }
        })

        if(user === null)
           return NextResponse.json({}, {status: 404})

        delete user.PASSWORD_HASH

        return NextResponse.json(user, {status: 200})
    } catch(error) {
        return NextResponse.json({}, {status: 500})
    }

    return NextResponse.json({}, {status: 200})
}