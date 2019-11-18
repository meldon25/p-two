import React from'react'
import '../Header.css'
import { NavLink } from 'react-router-dom'

function Header () {
    return(
        <div className="header-container">
            <NavLink exact activeClassName='active' to='/'>
            Etoile
            </NavLink>
            <nav>
                {/* <ul className="login-bar">
                    <li>Login</li>
                    <li>About</li>
                </ul> */}
                <ul className="nav-bar">
                    <li>New</li>
                    <li>Shop</li>
                    <li>Shoes</li>
                    <li>Designers</li>
                    <li>Collection</li>
                    <li>Sale</li>
                    <li>Blog</li>
                </ul>
            </nav>
        </div>
    )
}
export default Header