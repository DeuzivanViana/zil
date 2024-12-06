'use client'
import { useParams } from 'next/navigation'
import { Layout } from '../Layout'
import { useEffect, useState } from 'react'

export const User = ({username = 'undefined'}) => {
    const [user, setUser] = useState(null)
    const params = useParams()

    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/user/${params.username}`)

            if(res.status !== 200)
                return
            
            const data = await res.json()

            setUser(data)
        })()
    })


    return <Layout title={params.user} className={'p-4'}>
        {
            user ? 
            <h1>{user.USERNAME}</h1>
            :
            <h1>User Not Found</h1>
        }
    </Layout>
}