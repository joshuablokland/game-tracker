import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import SearchResult from '../components/SearchResult'

class Search extends Component {

  constructor(props) {
    super(props)

    this.state = {
      searchResults: null
    }

    this.getSearchResults()
  }

  componentDidUpdate() {
    this.getSearchResults()
  }

  getSearchResults() {
    const pathName = this.props.location.pathname
    const searchKey = this.convertPathNameToSearchKey(pathName)

    fetch(`http://localhost:5000/search/${searchKey}`)
      .then(r => r.json())
      .then(d => {
        this.setState({searchResults: d})
      })
      .catch(e => e)
  }

  convertPathNameToSearchKey = str => {
    return str.trim().split('/')[2].replace('-', '%20')
  }

  render () {
    const searchResults = (this.state.searchResults) ? this.state.searchResults.map(game => <SearchResult key={game.id} title={game.name} />) : null
    return (
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col">
            {searchResults}
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Search)