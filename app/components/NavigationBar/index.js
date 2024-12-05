export const NavigationBar = ({ title = 'Title' }) => {
    return <nav className='p-6 bg-neutral-900'>
        <h1 className='font-bold'>{ title }</h1>
    </nav>
}