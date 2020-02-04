import React, { Component } from 'react'
import ProductContainer from '../Product/ProductContainer'
import Widget from '../Widget/Widget'
import axios from 'axios'
import './Shop.css'

class Shop extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            location: {},
            reviewText: '',
            review: []
        }
    }
    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({ location: { lat: position.coords.latitude, long: position.coords.longitude } })
        })
        this.fetchData()
    }

    fetchData = async () => {
        // const clothes = await axios.get(`https://5e39e9ca8d7e1300149cd763.mockapi.io/${this.props.match.params.clothing_name}`)
        const clothes = await axios.get(`https://5e39e9ca8d7e1300149cd763.mockapi.io/products`)

        this.setState({
            products: [...clothes.data]
        })
    }
    
    onSubmit = async (e) => {
        e.preventDefault();
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
        return (
            <>
                <ProductContainer 
                product={this.state.products}
                />
                <Widget />
                {this.state.review.map((listItem) => {
                    return (
                        <p>{ listItem }</p>
                    )
                })}
            </>
        )

    }
}
export default Shop
