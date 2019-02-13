import React, { Component } from 'react'
import { SEARCH } from '../../../routes'
import { withRouter } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class Search extends Component {

  state = {
    search: ''
  }
  
  handleChange = event => {
    this.setState({[event.currentTarget.name]: event.currentTarget.value})
  } 
  
  handleSubmit = event => {
    event.preventDefault()
    if (this.state.search === '') return;
    const searchString = this.state.search.replace(' ', '-')
    this.props.history.push(SEARCH + '/' + searchString);
  }

  render() {
    const disabledButton = this.state.search === ''
    return (
      <form className="navbar-search" onSubmit={this.handleSubmit}>
        <input 
          className="form-control d-inline-block" 
          style={{width: '300px'}} 
          type="text" 
          placeholder="Search bitch..." 
          name="search" 
          autocomplete="off" 
          onChange={this.handleChange}
        />
        <button disabled={disabledButton} className="btn btn-link btn-md" action='submit'>
          <FontAwesomeIcon icon={faSearch}/>
        </button>
      </form>
    )
  }
}

export default withRouter(Search)