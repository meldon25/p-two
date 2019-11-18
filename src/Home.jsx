import React from 'react'
import './Home.css'

function Home () {
    return (
        <div className="home">
        <div className="left-container">
        <img src="https://i.imgur.com/NuvHGup.png" />
        <h1>Shop New Sweaters</h1>
        <button>Get the Look</button>
        </div>
        <div className="right-container">
        <img src="https://i.imgur.com/jFufVbc.png" />
        <h1>Shop Holiday Dresses</h1>
        <button>Get the Look</button> 
        </div>       
        </div>
    )
}
export default Home