export const Post = ({ username, content, className }) => {
    return <div className={`p-4 bg-neutral-800 rounded-lg ${className} mt-4`}>
        <h1 className='text-md text-neutral-500'>{ username }</h1>
        <hr className='border-neutral-500 mt-1 mb-1'/>
        <p className='text-xs line-clamp-4'>{ content }</p>
    </div>
}