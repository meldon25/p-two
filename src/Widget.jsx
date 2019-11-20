import React from 'react'
 import axios from 'axios'

 const IEX_TOKEN = process.env.REACT_APP_IEX_TOKEN

 class Widget extends React.Component {
     constructor() {
         super()
         this.state = {
             widget: [],
         }
     }
     componentDidMount() {
         this.fetchData()
     }
     fetchData = async () => {
         const result = await axios.get(`https://api.mapbox.com/{endpoint}?access_token=${IEX_TOKEN}`)
         console.log(result)
         this.setState({
             products: result.data[0].widget
         })
     }
     render() {
         return(
             <div>hello</div>
         )
     }

 }
 export default Widget