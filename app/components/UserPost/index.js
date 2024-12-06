'use client'
import { useEffect, useState } from 'react'

export const UserPost = ({params}) => {
    const [post, setPost] = useState()

    useEffect(() => {
        (async () => {
            const {username, post_id} = await params

            const res = await fetch(`/api/post/${username}/${post_id}`)
            const data = await res.json()

            setPost(data.posts)
        })()
    }, [])

    return <h1 className='p-6 text-neutral-50'>{post?.CONTENT}</h1>
}