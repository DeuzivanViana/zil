import { NavigationBar } from '../NavigationBar'

export const Layout = ({children, title, className}) => {
    return (
        <div>
            <NavigationBar title={title}/>
            <main className={className}>
                { children }
            </main>
        </div>
    )
}