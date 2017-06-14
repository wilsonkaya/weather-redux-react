import React, {Component} from 'react'
import {connect} from 'react-redux'


class WeatherList extends Component {
  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temprature</th>
            <th>Pressure</th>
            <th>Humidty</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    )
  }
}

//es6 syntax
function mapStateToProps({weather}){
  return {weather}
}

export default connect(mapStateToProps) (WeatherList)
