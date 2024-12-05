export const Post = ({ username, content }) => {
    return <div className='p-4 m-2 bg-neutral-800 rounded-lg'>
        <h1 className='text-sm text-neutral-500'>{ username }</h1>
        <p className='text-xs line-clamp-4'>{ content }</p>
    </div>
}