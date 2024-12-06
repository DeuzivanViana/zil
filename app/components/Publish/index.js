'use client'
import { useRouter } from 'next/navigation'
import { Layout } from '../Layout'
import { useEffect } from 'react'

export const Publish = () => {
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

    return <Layout>
        <form onSubmit={onSubmit} className='gap-2 flex flex-col mt-16 m-6 bg-neutral-800 p-8 rounded-lg'>
            <textarea rows={10} type='text' name='content' placeholder='Content' className='p-2 text-sm rounded-md outline-none'/>
            <button type='submit' className='p-2 mt-6 bg-green-400 rounded-md'>Sign-up</button>
        </form>
    </Layout>
}