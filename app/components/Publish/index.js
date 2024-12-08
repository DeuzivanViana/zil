'use client'
import { useRouter } from 'next/navigation'
import { Layout } from '../Layout'
import { useEffect, useState } from 'react'
import { Form } from '../UI/Form'
import { Button } from '../UI/Button'
import { Input } from '../UI/Input'

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
                content: data.get('content'),
                title: data.get('content')
            })
        })

        const body = await res.json()
        if(res.status !== 200) {
            alert(body.error.message || 'Unknow error')
        }
        else {
            router.push('/')
        }
    }

    const setContentSmart = (text) => {
        setContent(text.slice(0, 5140))
    }

    return <Layout title={'Publish'} className={'p-6'}>
        <Form onSubmit={onSubmit}>
            <Input name={'title'} placeholder={'Title'} className={'outline-none'}/>
            <textarea  onChange={(e) => setContentSmart(e.target.value)} value={content} rows={10} type='text' name='content' placeholder='Content' className='p-2 text-sm rounded-md outline-none bg-neutral-800 text-neutral-50 resize-none placeholder-neutral-500 border border-neutral-700'/>
            <footer className='text-neutral-400 text-xs '>chars: {content.length}</footer>
            <Button type={'submit'} value={'Send'}/>
        </Form>
    </Layout>
}