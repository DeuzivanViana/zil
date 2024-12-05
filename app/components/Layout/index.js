import { NavigationBar } from '../NavigationBar'

export const Layout = ({children, title}) => {
    return (
        <div>
            <NavigationBar title={title}/>
            <main>
                { children }
            </main>
        </div>
    )
}