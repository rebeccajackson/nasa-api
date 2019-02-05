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
    this.getAPOD()
    
  }
  getAPOD(){
    getAPOD().
    then(apod => {
      this.setState( {
        apod : apod
      })
    })
  }
  render(){

    return (
      <React.Fragment>
        <h1>NASA Photo of the day!</h1>
        <ul>
          <li>{this.state.apod[0]} </li>
          <li>{this.state.apod[1]} </li>
          <li>{this.state.apod.date} </li>
         
        </ul>
      </React.Fragment>
    )
  }
  }



export default NasaApi;