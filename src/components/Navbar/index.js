import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { HOME } from '../../constants/routes'
import { withFirebase } from '../../firebase'
import { setUserStatus } from '../../store/actionTypes'
import Search from './Search'
import ProfileMenu from './ProfileMenu'

export class Navbar extends Component {

  onUserSignOut = () => {
    this.props.firebase.signOut()
    this.props.onUserStatusChanged(false)
  }

  render() {
    const { userLoggedIn, user } = this.props

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white justify-content-between">
        <NavLink exact className="navbar-brand" activeClassName="active" to={HOME}>Game Tracker</NavLink>
        <Search />
        <div className="collapse navbar-collapse show flex-grow-0" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink exact className="nav-link" activeClassName="active" to={HOME}>Home</NavLink>
            </li>
            <ProfileMenu userStatus={userLoggedIn} user={user} onUserSignOut={this.onUserSignOut} />
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
    onUserStatusChanged: status => dispatch(setUserStatus(status))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withFirebase(Navbar))