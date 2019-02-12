import React, { Component } from 'react'
import { SEARCH } from '../../../routes'
import { withRouter } from 'react-router-dom'

class Search extends Component {

  state = {
    search: null
  }
  
  handleChange = event => {
    this.setState({[event.currentTarget.name]: event.currentTarget.value})
  } 
  
  handleSubmit = event => {
    event.preventDefault()
    this.props.history.push(SEARCH + '/' + this.state.search);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input className="form-control" style={{width: '300px'}} type="text" placeholder="Search bitch..." name="search" onChange={this.handleChange}/>
      </form>
    )
  }
}

export default withRouter(Search)