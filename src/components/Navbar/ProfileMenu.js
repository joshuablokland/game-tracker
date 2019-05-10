import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { setUserStatus } from '../../store/actionTypes'
import { withFirebase } from '../../firebase'
import Dropdown from '../Dropdown'
import Gravatar from '../Gravatar'
import { ACCOUNT } from '../../constants/routes'

class ProfileMenu extends Component {
  
  userSignOut = () => {
    this.props.firebase.signOut()
    this.props.onUserStatusChanged(false)
  }

  render() {
    const { userLoggedIn, user } = this.props

    if (!userLoggedIn) {
      return null
    } else {
      const userAvatar = user.email
        ? (
          <div>
            <span className="py-2 ml-1 d-inline-flex">{user.displayName}</span>
            <Gravatar email={user.email} />
          </div>
        ) : 'Profile'
      return (
        <Dropdown label={userAvatar} align="dropdown-menu-right">
          <span onClick={this.userSignOut} id="signOut" className="force-hover dropdown-item">Sign out</span>
          <NavLink className="dropdown-item" activeClassName="" to={ACCOUNT}>Account</NavLink>
        </Dropdown>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  userLoggedIn: state.userLoggedIn,
  user: state.user
})

const mapDispatchToProps = dispatch => {
  return {
    onUserStatusChanged: status => dispatch(setUserStatus(status))
  }
}

export default compose(
  withFirebase,
  connect(mapStateToProps, mapDispatchToProps)
)(ProfileMenu)