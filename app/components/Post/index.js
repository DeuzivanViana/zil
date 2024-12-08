import Link from 'next/link'
import { GrValidate } from 'react-icons/gr'

export const Post = ({ username, content, className, id, createdAt, trusted, title }) => {
    return <Link href={`/${username}/${id}`} className={`p-4 bg-neutral-800 rounded-lg ${className} mt-4 block`}>
        <h1 className='text-md text-neutral-500 select-none flex gap-2 items-center'>
            <span>{ username }</span>
            { trusted ? <GrValidate size={14} className='text-green-400'/> : <></> }
        </h1>
        <hr className='border-neutral-500 mt-2 mb-2 select-none'/>
        <h1 className='font-bold'>{ title }</h1>
        <p className='text-xs line-clamp-2 select-none'>{ content }</p>
        <footer className='text-neutral-600 text-xs block text-end'>
            { createdAt }
        </footer>
    </Link>
}