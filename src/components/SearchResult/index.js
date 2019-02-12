import React, { Component } from 'react'

class SearchResult extends Component {
  render() {
    return (
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>      
        </div>
      </div>
    )
  }
}

export default SearchResult