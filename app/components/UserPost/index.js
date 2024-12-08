'use client'
import { useEffect, useState } from 'react'
import { Layout } from '../Layout'

export const UserPost = ({params}) => {
    const [post, setPost] = useState()
    const [post_owner_username, setPostOwnerUsername] = useState()

    useEffect(() => {
        (async () => {
            const {username, post_id} = await params

            setPostOwnerUsername(username)

            const res = await fetch(`/api/post/${username}/${post_id}`)
            const data = await res.json()

            setPost(data.posts)
        })()
    }, [])

    return <Layout title={`Post of ${post_owner_username}`}>
        <h1>{post?.TITLE}</h1>
        <pre className='p-6 text-neutral-50 max-w-[650px] m-auto break-words whitespace-pre-line'>{post?.CONTENT}</pre>
    </Layout>
}