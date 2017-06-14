import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {featchWather} from '../actions/index'

class SearcBar extends Component{
  constructor(props){
    super(props)

    this.state = {
      term: ''
    }
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange(event){
    this.setState({term: event.target.value})
  }

  onFormSubmit(event){
    event.preventDefault()
    //fetchWather is in the props because bindActionCreators at the bottom
    this.props.featchWather(this.state.term)
    this.setState({term: ''})
  }
  render(){
    return(
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Give a five day forcast of a city"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({featchWather}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearcBar)
