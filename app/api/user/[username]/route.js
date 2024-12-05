import { NextResponse } from 'next/server'

export const GET = async (req, { params }) => {

    return NextResponse.json({}, {status: 200})
}