import React, {Component} from 'react'
import getAPOD from '../api/nasa_api'

class NasaApi extends Component {
  constructor(props){
    super(props)
    this.state = {
      apod: {}
    }
    this.getAPOD = this.getAPOD.bind(this)
  }
  componentDidMount() {
    getAPOD()
  }
  getAPOD(){
    apod.getAPOD().
    then(apod => {
      this.setState( {
        apod : apod
      })
    })
  }
  render(){
    return (
      <React.Fragment>
        <h1>We're amazing!!</h1>
      </React.Fragment>
    )
  }
  }



export default NasaApi;