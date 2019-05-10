import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withFirebase } from './firebase'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { setUserStatus, setUser } from './store/actionTypes'

import '../node_modules/bootstrap/scss/bootstrap.scss'
import './styles/main.scss'

import Navbar from './components/Navbar'
import { ACCOUNT, HOME } from './constants/routes'
import Account from './views/Account'
import Home from './views/Home'

class App extends Component {
  
  componentDidMount() {
    this.checkUser()
  }

  componentDidUpdate() {
    this.checkUser()
  }

  checkUser() {
    this.props.firebase.auth.onAuthStateChanged(authUser => {
      this.props.setUserStatus(authUser)
      if (authUser) {
        this.props.setUser({
          displayName: authUser.displayName,
          email: authUser.email,
          uid: authUser.uid
        })
      }
    })
  }

  render() {
    return (
      <Router>
        <div id="appWrapper">
          {this.props.userLoggedIn && <Navbar /> }
          <div className="appContent">
            <Route exact path={HOME} component={Home} />
            <Route exact path={ACCOUNT} component={Account} />
          </div>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = ({userLoggedIn}) => ({userLoggedIn})
const mapDispatchToProps = dispatch => {
  return {
    setUserStatus: authUser => dispatch(setUserStatus(authUser)),
    setUser: user => dispatch(setUser(user))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withFirebase
)(App)
