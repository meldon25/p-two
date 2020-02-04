import React from 'react'
import Product from './Product'
import data from '../../data.json'


class ProductContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    renderProducts = () => {
        if (this.props.product.length) {
            return this.props.product.map((product, index) => {
                return <Product key={ index } product={ product } />
            })
        }
    }

    render() {
        return (
            <>
                { this.renderProducts() }
            </>
        )
    }

}
export default ProductContainer;
