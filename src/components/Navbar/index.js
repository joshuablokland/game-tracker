import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'
import { withFirebase } from '../../firebase'
import { setUserStatus } from '../../store/actionTypes'
import styles from './style.module.scss'
import Logo from '../Logo'
import SearchField from '../SearchField'
import ProfileMenu from './ProfileMenu'

import { Route } from 'react-router-dom'
import { HOME, SEARCH } from '../../constants/routes'
import Search from '../../views/Search'

export class Navbar extends Component {

  state = {
    style: {
      height: 'auto',
      paddingBottom: 20
    }
  }

  componentDidUpdate() {
    this.getHeight();
  }

  onUserSignOut = () => {
    this.props.firebase.signOut()
    this.props.onUserStatusChanged(false)
  }

  getHeight = () => {
    const isSearchPath = this.props.location.pathname.search(/\/search\//)

    if (isSearchPath !== -1 && this.state.style.height === 'auto') {
      this.setState({
        style: {
          height: '100vh',
          paddingBottom: 0
        }
      })
    } else if (isSearchPath !== 0 && this.state.style.height === '100vh') {
      this.setState({
        style: {
          height: 'auto',
          paddingBottom: 20
        }
      })
    }
  }

  render() {
    const { userLoggedIn, user } = this.props
    console.log(this.state.style)
    const { style } = this.state

    return (
      <nav className={styles.navbar} style={{...style}}>
        <div className={styles.navbarInner}>
          <div className={styles.navbarBrand}>
            <NavLink exact to={HOME}>
              <Logo />
            </NavLink>
          </div>
          <div className={styles.navbarSearch}>
            <SearchField />
          </div>
          <div className={styles.navbarProfileMenu}>
            <ProfileMenu userStatus={userLoggedIn} user={user} onUserSignOut={this.onUserSignOut} />
          </div>
        </div>
        <Route path={SEARCH} component={Search} />
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

export default compose(
  withRouter,
  withFirebase,
  connect(mapStateToProps, mapDispatchToProps)
)(Navbar)