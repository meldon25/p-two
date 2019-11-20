import React from 'react'

const Product = (props) => {
    return(
            <div className="shop-container">
                <div className="img-container">
                    <img src={props.product.image} alt="clothes" />
                </div>
                <div className="description-container">
                    <h2>{props.product.brand}</h2>
                    <h4>{props.product.price}</h4>
                </div>
            </div>
	)
}
export default Product