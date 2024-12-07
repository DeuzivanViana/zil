'use client'
import { Layout } from '../Layout'
import { useRouter } from 'next/navigation'
import { Input } from '../UI/Input'
import { Button } from '../UI/Button'
import { Form } from '../UI/Form'
import Link from 'next/link'

export const Signin = () => {
    const router = useRouter()

    const onSubmit = async (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)

        const res = await fetch('/api/sessions', {
            method: 'POST',
            body: JSON.stringify({
                password: data.get('password'),
                username: data.get('username')
            })
        })

        if(res.status !== 200) {
            alert('This user don\'t exists')
        }
        else {
            router.push('/')
        }
    }

    return <Layout title={'Sign-in'} className={'p-4'}>
        <Form onSubmit={onSubmit}>
            <Input type={'text'} name={'username'} placeholder={'Username'}/>
            <Input type={'password'} name={'password'} placeholder={'Password'}/>
            <Button type={'submit'} value={'Sign-in'}/>
            <Link href={'/signup'} className='text-center text-blue-400 text-xs underline'>sign-up</Link>
        </Form>
    </Layout>
}