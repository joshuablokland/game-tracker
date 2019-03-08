import React, { Component } from 'react'
import { withFirebase } from '../../firebase'
import { connect } from 'react-redux'

class SearchResult extends Component {
  
  onClick = event => {
    this.props.firebase.doCreateRentalList(this.props.userUID, this.props.gameID)
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