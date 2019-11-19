import React from 'react'
import data from './data.json'

const Product = (props) => {
    return(
        <div className="product">
			<div className="hero">
				{/* <img src={product[0].image} alt="post banner" /> */}
			</div>
			<div className="content">
				{/* <h3>{product[0].id}</h3>
				<p>{product[0].image}</p> */}
			</div>
		</div>
	)
}
export default Product