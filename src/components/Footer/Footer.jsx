import React from 'react'
import '../Footer/Footer.css'

function Footer () {
    return (

        <div className="footer-container">
            <div className="lside-container">
            <ul className="leftlist">
                <li>Contact</li>
                <li>Shipping</li>
                <li>Returns</li>
                <li>Size Guide</li>
                <li>Jobs</li>
                <li>Accessibility</li>
            </ul>
            </div>
        <div className="copyright-container">
            <ul className="rightlist">
                <li>2019 Etoile</li>
            </ul>
        </div>
        </div>
    )
}
export default Footer