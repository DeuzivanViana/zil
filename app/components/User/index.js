'use client'
import { Layout } from '../Layout'
import { useEffect, useState } from 'react'
import { Post } from '../Post'

export const User = ({params}) => {
    const [user, setUser] = useState()
    const [posts, setPosts] = useState([])
    

    useEffect(() => {
        (async () => {
            const { username } = await params

            let user_res = await fetch(`/api/user/${username}`)
            if(user_res.status !== 200)
                return
            
            let user_data = await user_res.json()
            setUser(user_data)

            let post_res = await fetch(`/api/post/${username}`)
            let posts_data = await post_res.json()
            setPosts(posts_data.posts)
        })()
    }, [])


    return <Layout title={`Profile of x`} className={'p-4'}>
        {
            user ? 
            <>
                <h1>Username: {user.USERNAME}</h1>
                <h1>Created at: {user.CREATED_AT}</h1>
                <h1>ID: {user.ID}</h1>

                {posts.map((val, index) => {
                    return <Post
                        className={'max-w-[600px] m-auto'}
                        username={user.USERNAME}
                        content={val.CONTENT}
                        key={index}
                        id={val.ID}
                    />
                })}
            </>
            : <h1>User Not Found</h1>
        }
    </Layout>
}