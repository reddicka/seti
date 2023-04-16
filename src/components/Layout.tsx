import {Link, NavLink, Outlet} from "react-router-dom";
import {FC} from "react";
import { Header } from "./Header/Header"


export const Layout:FC = () => {
    return (
        <>
            <header>
                {/*<NavLink to='/'>Home</NavLink>*/}
                <Header/>
            </header>

            <main className='container'>
                {/* в Outlet вставится все остальное */}
                <Outlet/>
            </main>

            <footer className='container'>
                footer
            </footer>
        </>
    )
}