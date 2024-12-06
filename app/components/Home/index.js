'use client'
import { useEffect, useState } from 'react'
import { Layout } from '../Layout'
import { Post } from '../Post'
import { useRouter } from 'next/navigation'

export const Home = () => {
  const router = useRouter()
  const [posts, setPosts] = useState([])

  useEffect(() => {
    (async () => {
      let res = await fetch('/api/sessions/valid')
      
      if(res.status !== 200) {
        router.push('/signup')
      }

      res = await fetch('/api/post')
      const body = await res.json()
      
      setPosts(body)
    })()
  }, [])

  return <Layout title={'Home'} className={'p-4'}>
    {
      posts.map((val, index) => {
        return <Post
          className={'max-w-[600px] m-auto'}
          username={val.USERNAME}
          content={val.CONTENT}
          key={index}
          id={val.ID}
        />
      })
    }

  </Layout>
}