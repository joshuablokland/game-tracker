import React, { Component } from 'react'

class Search extends Component {

  constructor(props) {
    super(props)

    this.state = {
      searchResults: null
    }

    this.getSearchResults()
  }

  getSearchResults() {
    fetch('http://localhost:5000/search/mario')
      .then(r => r.json())
      .then(d => {
        this.setState({searchResults: d})
      })
      .catch(e => e)
  }

  render () {
    return (
      <div>
        {JSON.stringify(this.state.searchResults)}
      </div>
    )
  }
}

export default Search