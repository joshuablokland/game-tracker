import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { HOME } from '../routes'

import { withFirebase } from '../firebase'
import { connect } from 'react-redux'
import { setModalStatus, setUserStatus } from '../store/actionTypes'

export class Navbar extends Component {

  componentDidMount() {
    this.props.firebase.auth.onAuthStateChanged(authUser => 
      authUser 
        ? this.onUserStatusChanged( true )
        : this.onUserStatusChanged( false )
    )
  }

  onUserStatusChanged = status => {
    this.props.onUserStatusChanged(status)
  }

  onUserSignOut = () => {
    this.props.firebase.doSignOut()
  }

  onModalStatusChanged = status => {
    this.props.onModalStatusChanged(status)
  }

  render() {
    const authLink = (this.props.userLoggedIn === true) 
      ? <span onClick={this.onUserSignOut} id="signOut" className="nav-link force-hover">Sign out</span>
      : <span onClick={() => this.onModalStatusChanged(true)} id="signIn" className="nav-link force-hover">Sign in</span>

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="http://localhost:3000">Game Tracker</a>
        <div className="collapse navbar-collapse show" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink exact className="nav-link" activeClassName="active" to={HOME}>Home</NavLink>
            </li>
            <li className="nav-item">
              { authLink }
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
    onUserStatusChanged: status => dispatch(setUserStatus(status)),
    onModalStatusChanged: status => dispatch(setModalStatus(status))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withFirebase(Navbar))