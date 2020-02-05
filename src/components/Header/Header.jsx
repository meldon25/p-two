import React from 'react'
import '../Header/Header.css'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div className="header-container">
            <div className="header-title">
                <NavLink exact activeClassName='active' to='/'>
                    Étoile
            </NavLink>
            <div className="login-nav">
                <ul className="login-bar">
                    <li>Login</li>
                    <li>About</li>
                </ul>
            </div>
            </div>
            <div className="header-nav">
                <ul className="nav-bar">
                    <li>Shop</li>
                    <li>New</li>
                    <li>Collection</li>
                    <li>Sale</li>
                    <li>Blog</li>
                </ul>
            </div>
        </div>
    )
}
export default Header