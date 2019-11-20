import React, { Component } from 'react'
import Products from './Products'
import axios from 'axios'

class Shop extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        const clothes = await axios.get(`https://5dced59675f9360014c2642c.mockapi.io/${this.props.match.params.clothing_name}`)

        this.setState({
            products: [...clothes.data]
        })

    }
    render() {
        {console.log(this.state.products)}
        return (
            <Products product={this.state.products} />
        )

    }
}
export default Shop
