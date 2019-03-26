import React, { Component } from 'react'
import { withFirebase } from '../../firebase'
import { connect } from 'react-redux'

class SearchResult extends Component {

  constructor(props) {
    super(props)
 
    this.state = {
      isAdded: false,
      isInOwnedList: false
    }

    // this.props.firebase.
    console.log(this.props.firebase.getGameFromOwned())
    
  }
  
  componentDidMount() {
    // console.log(this.props.userUID)
  }

  onClick = event => {
    this.props.firebase.addToOwnedList(this.props.userUID, this.props.gameID, error => {
      if (error) {
        console.log(error)
      } else {
        console.log('it fucking worked')
      }
    })
  }

  render() {
    return (
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          {this.props.userLoggedIn && <button className="btn btn-md btn-primary" onClick={this.onClick}>Save to owned</button>}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ 
  userLoggedIn: state.userLoggedIn,
  userUID: state.user.uid
})

export default connect(mapStateToProps)(withFirebase(SearchResult))