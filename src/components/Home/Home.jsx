import React from 'react'
import { Link } from 'react-router-dom'
import '../Home/Home.css'

function Home () {
    return (
        <div className="home">
        <div className="left-container">
        <div className="img-container">
        <img src="https://i.imgur.com/SwdBZOD.png?1" alt="clothes"/>
        <div className="imgafter1">
        <img src="https://i.imgur.com/5fKChsn.png" alt="clothes"/>
        </div>
        </div>
        <h1>Shop New Sweaters</h1>
        <Link to={'/shop/knitwear'}>
        <button>Get the Look</button>
        </Link>
        </div>
        <div className="right-container">
        <div className="img-container">
        <img src="https://i.imgur.com/OiFGH8K.png?1" alt="clothes" />
        <div className="imgafter2">
        <img src="https://i.imgur.com/Jum8a2X.png?1" alt="clothes" />
        </div>
        </div>
        <div className="button-container">
        <h1>Shop Holiday Dresses</h1>
        <Link to={'/shop/dresses'}>
        <button>Get the Look</button> 
        </Link>
        </div>
        </div>
        </div>
    )
}
export default Home