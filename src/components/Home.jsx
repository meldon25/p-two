import React from 'react'
import { Link } from 'react-router-dom'
import Widget from '../Widget'
import '../Home.css'

function Home () {
    return (
        <div className="home">
        <div className="left-container">
        <img src="https://i.imgur.com/NuvHGup.png" alt="clothes"/>
        <h1>Shop New Sweaters</h1>
        <Link to={'/shop/knitwear'}>
        <button>Get the Look</button>
        </Link>
        </div>
        <div className="right-container">
        <img src="https://i.imgur.com/jFufVbc.png" alt="clothes" />
        <h1>Shop Holiday Dresses</h1>
        <Link to='/shop/dresses'>
        <button>Get the Look</button> 
        </Link>
        </div>
        <Widget />   
        </div>
    )
}
export default Home