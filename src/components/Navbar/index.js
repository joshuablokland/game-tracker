import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { HOME, ACCOUNT } from '../../routes'

import { withFirebase } from '../../firebase'
import { connect } from 'react-redux'
import { setModalStatus, setUserStatus, setUser } from '../../store/actionTypes'

import Gravatar from '../Gravatar'
import Dropdown from '../Dropdown'

export class Navbar extends Component {

  componentDidMount() {
    this.props.firebase.auth.onAuthStateChanged(authUser => {
      const isLoggedIn = authUser ? true : false
      this.onUserStatusChanged(isLoggedIn)
      if (isLoggedIn) { 
        this.onSetUser(authUser)
      }
    })
  }

  onUserStatusChanged = status => {
    this.props.onUserStatusChanged(status)
  }

  onSetUser = user => {
    const _user = {
      displayName: user.displayName,
      email: user.email,
      uid: user.uid
    }
    this.props.onSetUser(_user)
  }

  onUserSignOut = () => {
    this.props.firebase.doSignOut()
  }

  onModalStatusChanged = status => {
    this.props.onModalStatusChanged(status)
  }

  renderProfileMenu = userStatus => {
    if (!userStatus) {
      return (
        <li className="nav-item">
          <span onClick={() => this.onModalStatusChanged(true)} id="signIn" className="nav-link force-hover">Sign in</span>
        </li>
      )
    } else {
      const userAvatar = this.props.user.email 
        ? (
          <div>
            { this.props.user.displayName }
            <Gravatar email={this.props.user.email} />
          </div>
        ) : 'Profile'
      return (
        <Dropdown label={userAvatar} align="dropdown-menu-right">
          <span onClick={this.onUserSignOut} id="signOut" className="force-hover dropdown-item">Sign out</span>
          <NavLink className="dropdown-item" activeClassName="" to={ACCOUNT}>Account</NavLink>
        </Dropdown>
      )
    }
  }

  render() {
    const profileMenu = this.renderProfileMenu(this.props.userLoggedIn)
  
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white justify-content-between">
        <a className="navbar-brand" href="http://localhost:3000">Game Tracker</a>
        <div className="collapse navbar-collapse show flex-grow-0" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink exact className="nav-link" activeClassName="active" to={HOME}>Home</NavLink>
            </li>
            { profileMenu }
          </ul>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => ({ 
  userLoggedIn: state.userLoggedIn,
  user: state.user
})

const mapDispatchToProps = dispatch => {
  return {
    onUserStatusChanged: status => dispatch(setUserStatus(status)),
    onModalStatusChanged: status => dispatch(setModalStatus(status)),
    onSetUser: user => dispatch(setUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withFirebase(Navbar))