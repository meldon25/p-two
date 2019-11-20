import React from 'react'
import Product from './Product'

class Products extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: props.product
        }

    }

    renderProducts = () => {

        console.log(this.props)
        if (this.props.product.length) {
            return this.props.product.map((x, index) => {
                return <Product key={index} product={x}/>

            })
        }
    }

    render() {
        return (
            <>
                {this.renderProducts()}
            </>
        )
    }

}
export default Products