import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import {HOME} from '../routes'

import { withFirebase } from '../firebase'
import { connect } from 'react-redux'
import { SET_USER_STATUS } from '../store/actionTypes'

class Navbar extends Component {

  componentDidMount() {
    this.props.firebase.auth.onAuthStateChanged(authUser => {
      // console.log(authUser)
      authUser 
        ? this.onUserStatusChanged( true )
        : this.onUserStatusChanged( false )
    })
  }

  onUserStatusChanged = status => {
    this.props.onUserStatusChanged(status)
  }

  onUserSignOut = () => {
    this.props.firebase.doSignOut()
  }

  render() {
    const signOutLink = (this.props.userLoggedIn === true) ? <span onClick={this.onUserSignOut} className="nav-link force-hover">Sign out</span> : null
    const signInLink = (this.props.userLoggedIn === false) ? <span onClick={this.props.toggleModal} className="nav-link force-hover">Sign in</span> : null

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="http://localhost:3000">Game Tracker</a>
        <div className="collapse navbar-collapse show" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink exact className="nav-link" activeClassName="active" to={HOME}>Home</NavLink>
            </li>
            <li className="nav-item">
              { signOutLink }
              { signInLink }
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => ({ userLoggedIn: state.userLoggedIn })

const mapDispatchToProps = dispatch => {
  return {
    onUserStatusChanged: status => {
      dispatch({
        type: SET_USER_STATUS,
        payload: status
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withFirebase(Navbar))