import Link from 'next/link'

export const Post = ({ username, content, className, id }) => {
    return <Link href={`/${username}/${id}`} className={`p-4 bg-neutral-800 rounded-lg ${className} mt-4 block`}>
        <h1 className='text-md text-neutral-500 select-none'>{ username }</h1>
        <hr className='border-neutral-500 mt-2 mb-2 select-none'/>
        <p className='text-xs line-clamp-4 select-none'>{ content }</p>
    </Link>
}