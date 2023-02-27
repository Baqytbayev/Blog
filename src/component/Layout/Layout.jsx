import React from "react";
import './Layout.css'
import {NavLink, Outlet} from "react-router-dom";


const Layout = () => {
    return (
        <>
            <header className={'header'}>
                <ul className = 'ulMain'>
                    <li className={'li'}><NavLink to={'/blog'}>Home Page< / NavLink ></li>
                    <li className={'li'}><NavLink to={'/blog/edit'}>Add New Blog< / NavLink ></li>
                    <li className={'li'}><NavLink to={'/blog/contacts'}>Contacts< / NavLink ></li>
                    <li className={'li'}><NavLink to={'/blog/about'}>About< / NavLink ></li>
                </ul>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    )
}
export default Layout;