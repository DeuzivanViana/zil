import Link from 'next/link'

export const Post = ({ username, content, className, id }) => {
    return <Link href={`/${username}/${id}`} className={`p-4 bg-neutral-800 rounded-lg ${className} mt-4 block`}>
        <h1 className='text-md text-neutral-500'>{ username }</h1>
        <hr className='border-neutral-500 mt-1 mb-1'/>
        <p className='text-xs line-clamp-4'>{ content }</p>
    </Link>
}