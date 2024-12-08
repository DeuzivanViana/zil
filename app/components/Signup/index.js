'use client'
import { Layout } from '../Layout'
import { useRouter } from 'next/navigation'
import { Input } from '../UI/Input'
import { Button } from '../UI/Button'
import { Form } from '../UI/Form'
import Link from 'next/link'


export const Signup = () => {
    const router = useRouter()

    const onSubmit = async (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)

        if(data.get('password') !== data.get('password1')) {
            alert('Your password don\'t match')
            return
        }

        const res = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({
                password: data.get('password'),
                username: data.get('username')
            })
        })

        if(res.status !== 200) {
            alert('This user already exists')
        }
        else {
            router.push('/signin')
        }
    }

    return <Layout title={'Sign-up'} className={'p-4'}>
        <Form onSubmit={onSubmit}>
            <Input type={'text'} name={'username'} placeholder={'Username'}/>
            <Input type={'password'} name={'password'} placeholder={'Password'}/>
            <Input type={'password'} name={'password1'} placeholder={'Verify password'}/>
            <Button type={'submit'} value={'Sign-up'}/>
            <Link href={'/signin'} className='text-center text-blue-400 text-xs underline'>sign-in</Link>
        </Form>

    </Layout>
}