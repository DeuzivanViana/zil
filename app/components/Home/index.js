'use client'
import { useEffect, useState } from 'react'
import { Layout } from '../Layout'
import { Post } from '../Post'
import { useRouter } from 'next/navigation'

export const Home = () => {
  const router = useRouter()
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)

  const loadPage = async () => {
    let res = await fetch('/api/sessions/valid')
    
    if(res.status !== 200) {
      router.push('/signup')
    }

    res = await fetch(`/api/post?page=${page}`)
    const body = await res.json()
    
    setPosts(body)
  
  }

  const addPage = async (num) => {
    if(page + num >= 1) {
      setPage(page + num)
      window.scrollTo(0, 0)
    }
  }

  useEffect(() => {
    loadPage()
  }, [page])

  return <Layout title={'Home'} className={'p-4'}>
    {
      posts.map((val, index) => {
        return <Post
          className={'max-w-[600px] m-auto'}
          username={val.USERNAME}
          content={val.CONTENT}
          key={index}
          id={val.ID}
          createdAt={val.CREATED_AT}
          trusted={val.TRUSTED}
        />
      })
    }
    <footer className='pt-8 pb-8 text-neutral-500 m-auto text-center w-20 flex gap-6'>
      <button onClick={() => addPage(-1)} className='text-blue-400'>-</button>
      <span> {page} </span>
      <button onClick={() => addPage(1)} className='text-blue-400'>+</button>
    </footer>
  </Layout>
}