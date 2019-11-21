import React, { Component } from 'react'
import ProductContainer from './ProductContainer'
import './Product.css'

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            location: {},
            reviewText: '',
            review: []
        }
    }
    onSubmit = async (e) => {
        e.preventDefault();
        console.log('hey look for me!!!!', this.state.products)
            this.setState(state => ({
                review: [...state.review, state.reviewText]
            }))
               
    }
    onChange = (e) => {
        this.setState({
            reviewText : e.target.value
        })
    }
    render() {
        let review = this.state.review && this.state.review
        { console.log("LOOK AT THIS ONE HERE", this.props) }
        return (
            <>
            <div className="shop-container">
                <div className="img-container">
                    <img src={this.props.product.image} alt="clothes" />
                </div>
                <div className="description-container">
                    <h2>{this.props.product.brand}</h2>
                    <h4>{this.props.product.price}</h4>
                    </div>
                <div className="category-container">
                    <h4>{this.props.product.productCategory}</h4>
                    </div>
                <div className="review-container">
                    <h5>{this.props.product.review}</h5>
                    </div>
                    <form onSubmit = {this.onSubmit}>
                    <h5>Write a review here: </h5>
                    <input type= 'text' onChange={this.onChange}/>
                    <button>Submit</button>
                </form>
                {this.state.review.map((listItem) => {
                    return (
                        <p>{listItem}</p>
                    )
                })}
            </div>
                <ProductContainer product={this.props.product}/>
                {/* <Widget /> */}
                
            </>
        )

    }
}
export default Product
