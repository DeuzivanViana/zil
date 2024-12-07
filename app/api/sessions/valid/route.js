import { db } from '@/infra/database'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export const GET = async () => {
    const store = cookies()

    try {
        const token = (await store).get('TOKEN').value
        const session = await db.session.findMany({
            where: {
                TOKEN: token
            }
        })

        
        if(session === null)
            return NextResponse.json({}, {status: 404})

        return NextResponse.json({}, {status: 200})
    }
    catch(error) {
        return NextResponse.json({message: error}, {status: 500})
    }
}