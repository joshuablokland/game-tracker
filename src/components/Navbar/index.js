import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'
import styles from './style.module.scss'
import Logo from '../Logo'
import SearchField from '../SearchField'
import ProfileMenu from './ProfileMenu'

import { Route } from 'react-router-dom'
import { HOME, SEARCH } from '../../constants/routes'
import Search from '../../views/Search'

export class Navbar extends Component {

  state = {
    height: 'auto'
  }

  componentDidUpdate() {
    this.getHeight();
  }

  getHeight = () => {
    const isSearchPath = this.props.location.pathname.search(/\/search\//)

    if (isSearchPath !== -1 && this.state.height === 'auto') {
      this.setState({ height: '100vh' })
    } else if (isSearchPath !== 0 && this.state.height === '100vh') {
      this.setState({ height: 'auto' })
    }
  }

  render() {
    const { height } = this.state

    return (
      <nav className={styles.navbar} style={{height}}>
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
            <ProfileMenu />
          </div>
        </div>
        <Route path={SEARCH} component={Search} />
      </nav>
    )
  }
}

export default withRouter(Navbar)