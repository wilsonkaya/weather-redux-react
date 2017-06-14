import React, {Component} from 'react'

class SearcBar extends Component{
  constructor(props){
    super(props)

    this.state = {
      term: ''
    }
    this.onInputChange = this.onInputChange.bind(this)
  }

  onInputChange(event){
    this.setState({term: event.target.value})
  }

  onFormSubmit(event){
    event.preventdefault()
  }
  render(){
    return(
      <from onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Give a five day forcast of a city"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </from>
    )
  }
}

export default SearcBar
