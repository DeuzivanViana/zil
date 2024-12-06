import Link from 'next/link'
import {IoMdAdd} from 'react-icons/io'

export const NavigationBar = ({ title = 'Title' }) => {
    return <nav className='p-6 bg-neutral-900 flex justify-between'>
        <h1 className='font-bold'>{ title }</h1>
        <Link href={'/publish'} className='text-neutral-50'>
            <IoMdAdd size={20}/>
        </Link>
    </nav>
}