'use client'
import { useRouter } from 'next/navigation'
import { Layout } from '../Layout'
import { useEffect, useState } from 'react'

export const Publish = () => {
    const [content, setContent] = useState('')
    const router = useRouter()

    useEffect(() => {
        (async () => {
            const res = await fetch('/api/sessions/valid')
            if(res.status !== 200) {
                router.push('/signup')
            }
        })()
    }, [])

    const onSubmit = async (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)

        const res = await fetch('/api/post', {
            method: 'POST',
            body: JSON.stringify({
                content: data.get('content')
            })
        })

        if(res.status !== 200) {
            alert('A error ocurred')
        }
        else {
            router.push('/')
        }
    }

    const setContentSmart = (text) => {
        setContent(text.slice(0, 512))
    }

    return <Layout title={'Publish'} className={'p-6'}>
        <form onSubmit={onSubmit} className='gap-2 flex flex-col mt-16 bg-neutral-800 p-8 rounded-lg max-w-[600px] m-auto'>
            <textarea  onChange={(e) => setContentSmart(e.target.value)} value={content} rows={10} type='text' name='content' placeholder='Content' className='p-2 text-sm rounded-md outline-none bg-neutral-700 text-neutral-50 resize-none placeholder-neutral-500'/>
            <footer className='text-neutral-400 text-xs'>chars: {content.length}</footer>
            <button type='submit' className='p-2 mt-6 bg-green-400 rounded-md'>Send</button>
        </form>
    </Layout>
}