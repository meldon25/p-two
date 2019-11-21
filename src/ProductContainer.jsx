// import React from 'react'
// import Product from './Product'
// import axios from 'axios'

// class Products extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             products: props.product
//         }

//     }
//     componentDidMount() {
//         navigator.geolocation.getCurrentPosition((position) => {
//             this.setState({ location: { lat: position.coords.latitude, long: position.coords.longitude } })
//         })
//         this.fetchData()
//     }

//     fetchData = async () => {
//         const clothes = await axios.get(`https://5dced59675f9360014c2642c.mockapi.io/${this.match.params.clothing_name}`)
//         this.setState({
//             products: [...clothes.data]
//         })

//     }

//     renderProducts = () => {

//         console.log(this.props)
//         if (this.props.product.length) {
//             return this.props.product.map((product, index) => {
//                 return <Product key={index} product={this.state.product}/>

//             })
//         }
//     }

//     render() {
//         return (
//             <>
//                 {this.renderProducts()}
//             </>
//         )
//     }

// }
// export default Products




import React from 'react'
import Product from './Product'
import axios from 'axios'

class ProductContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    renderProducts = () => {
        if (this.props.product.length) {
            return this.props.product.map((product, index) => {
                return <Product key={index} product={ product } />
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
export default ProductContainer;
