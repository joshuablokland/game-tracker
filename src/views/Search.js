import React, { Component } from 'react'

const IGDB = {
  url: process.env.REACT_APP_IGDB_URL,
  key: process.env.REACT_APP_IGDB_API_KEY
}

class Search extends Component {

  constructor(props) {
    super(props)

    fetch('https://api-v3.igdb.com/games?search=Halo', {
      mode: "cors",
      headers: {
        'user-key': IGDB.key
      }
    }).then(result => result).then(response => console.log(response))
  }

  render () {
    return (
      <div>
        search
      </div>
    )
  }
}

export default Search