import { Link, NavLink, Outlet } from "react-router-dom"
import { FC } from "react"
import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"
import Navbar from "../Navbar/Nabar"
import styles from "./Layout.module.css"


export const Layout: FC = () => {
    return (
        <>
            <header className="container">
                {/*<NavLink to='/'>Home</NavLink>*/}
                <Header/>
            </header>

            <div className={`container ${styles.row}`}>
                <aside>
                    <Navbar/>
                </aside>

                <main className={styles.mainContent}>
                    {/* в Outlet вставится все остальное */}
                    <Outlet/>
                </main>
            </div>

            <footer className="container">
                <Footer/>
            </footer>
        </>
    )
}