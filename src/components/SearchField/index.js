import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { SEARCH } from '../../constants/routes'
import { InputField } from '../Forms';

class SearchField extends Component {

  state = {
    search: ''
  }

  handleChange = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value })
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
        <InputField name="search" placeholder="Search here..." onChange={this.handleChange} style={{minWidth: 312}} />
      </form>
    )
  }
}

export default withRouter(SearchField)