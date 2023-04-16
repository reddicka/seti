import React, {FC} from "react";
import {Link, NavLink, useLocation, useNavigate} from "react-router-dom";
import styles from './Navbar.module.css';


const Navbar: FC = () => {
    const isActiveLink = () => {
        return ({isActive}: {isActive: boolean}) => isActive ? styles.active : undefined
    }

    const navigate = useNavigate()
    const location = useLocation()


    const items = [
        {
            label: 'Профиль',
            key: '/profile',
            // icon: <UserOutlined/>
        },
        {
            label: 'Диалоги',
            key: '/dialogs',
            // icon: <MailOutlined />
        },
        {
            label: 'Чач',
            key: '/chat',
            // icon: <MessageOutlined />
        },
        {
            label: 'Найти',
            key: '/search',
            // icon: <UsergroupAddOutlined/>
        }
    ]

    return (
        // <Sider style={{background: colorBgContainer}} width={200}>
        //     <Menu
        //         mode="inline"
        //         selectedKeys={[location.pathname]}
        //         style={{height: '100%'}}
        //         items={items}
        //         onClick={({key}) => {
        //             navigate(key)
        //         }}
        //     />
        // </Sider>


        <nav className={styles.nav}>
            <ul>
                <li className={styles.item}>
                    <NavLink to="/profile" className={isActiveLink()}>Профиль</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/dialogs" className={isActiveLink()}>Диалоги</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/search" className={isActiveLink()}>Найти</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;