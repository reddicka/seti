import { FC } from "react"
import styles from "./Header.module.css"
import { NavLink } from "react-router-dom"
import logo from '../../assets/img/logo.svg'


export const Header: FC = () => {
    const isActiveLink = () => {
        return ({isActive}: {isActive: boolean}) => isActive ? styles.active : undefined
    }

    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} alt='logo' />
            </div>

            <nav className={styles.navigation}>
                <ul>
                    <li>
                        <NavLink to="/" className={isActiveLink()}>Главная</NavLink>
                    </li>
                    <li>
                        <NavLink to="/news" className={isActiveLink()}>Новости</NavLink>
                    </li>
                    <li>
                        <NavLink to="/docs" className={isActiveLink()}>Документы</NavLink>
                    </li>
                    <li>
                        <NavLink to="/structure" className={isActiveLink()}>Структура предприятия</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={isActiveLink()}>О нас</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacts" className={isActiveLink()}>Контакты</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}