import React from'react'

function Header () {
    return(
        <div>
            <h1>Etoile</h1>
            <nav>
                <ul className="login-bar">
                    <li>Login</li>
                    <li>About</li>
                </ul>
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