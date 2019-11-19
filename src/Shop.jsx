import React from 'react'
import axios from 'axios'

class Shop extends React.Component {
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
        const clothing = await axios.get('https://5dced59675f9360014c2642c.mockapi.io/clothing')
        console.log(clothing)
        this.setState({
            products: clothing.data[0].clothing
        })
    }
    render() {
        const clothes = this.state.products.map((products, index) => (
            <React.Fragment key={index}>
                <div className="shop-container">
                    <div className="img-container">
                    <img src={products.image} />
                    </div>
                    <div className="description-container">
                    <h2>{products.brand}</h2>
                    <h4>{products.price}</h4>
                    </div>
                </div>

            </React.Fragment>
        ))
        return (
            <div>{ clothes }</div>
        )

    }
}
export default Shop
