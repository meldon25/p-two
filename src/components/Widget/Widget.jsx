import React from 'react'
import axios from 'axios'
import './Widget.css'

const GOOG_TOKEN = process.env.REACT_APP_GOOG_TOKEN

class Widget extends React.Component {
  constructor() {
    super()
    this.state = {
      widget: []
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    try {
      const result = await axios.post(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=40.742680,-73.983513&radius=1500&type=knitwear&keyword=clothing&key=${GOOG_TOKEN}`)
      this.setState(state => ({
        widget: result.data.results
      }))
    } catch (error) {
      console.log("Error: ", error)
    }
  }

  render() {
    const tempWidget =
      this.state.widget[0] && (
        <div className="widget-container">
          <h4>Nearest Store Locations: </h4>
          <p>{this.state.widget[0].vicinity}</p>
          <p>{this.state.widget[2].vicinity}</p>
        </div>
      )

    return (
      <>
        {tempWidget}
      </>
    )
  }
}
export default Widget


