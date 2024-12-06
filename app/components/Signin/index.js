'use client'
import { Layout } from '../Layout'
import { useRouter } from 'next/navigation'

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
        <form onSubmit={onSubmit} className='gap-2 flex flex-col mt-16 bg-neutral-800 p-8 rounded-lg max-w-[400px] m-auto'>
            <input type='text' name='username' placeholder='Username' className='placeholder-neutral-500 p-2 text-sm rounded-md outline-none'/>
            <input type='password' name='password' placeholder='Password' className='placeholder-neutral-500 p-2 text-sm rounded-md outline-none'/>
            <button type='submit' className='p-2 mt-6 bg-green-400 rounded-md'>Sign-in</button>
        </form>
    </Layout>
}