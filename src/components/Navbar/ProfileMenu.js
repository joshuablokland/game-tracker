import React from 'react'
import { NavLink } from 'react-router-dom'
import Dropdown from '../Dropdown'
import Gravatar from '../Gravatar'
import { ACCOUNT } from '../../constants/routes'

const ProfileMenu = ({ userStatus, user, onUserSignOut }) => {
  if (!userStatus) {
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
        <span onClick={onUserSignOut} id="signOut" className="force-hover dropdown-item">Sign out</span>
        <NavLink className="dropdown-item" activeClassName="" to={ACCOUNT}>Account</NavLink>
      </Dropdown>
    )
  }
}

export default ProfileMenu