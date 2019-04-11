import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withFirebase } from './firebase'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { setUserStatus } from './store/actionTypes'

import '../node_modules/bootstrap/scss/bootstrap.scss'
import './styles/main.scss'

import Navbar from './components/Navbar'
import { ACCOUNT, HOME, SEARCH } from './constants/routes'
import Account from './views/Account'
import Home from './views/Home'
import Search from './views/Search'

class App extends Component {
  
  componentDidMount() {
    this.props.firebase.auth.onAuthStateChanged(authUser => this.props.setUserStatus(authUser))
  }

  render() {
    return (
      <Router>
        <div id="appWrapper">
          {this.props.userLoggedIn && <Navbar /> }
          <Switch>
            <Route exact path={HOME} component={Home} />
            <Route exact path={ACCOUNT} component={Account} />
            <Route patch={SEARCH} component={Search} />
          </Switch>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = ({userLoggedIn}) => ({userLoggedIn})
const mapDispatchToProps = dispatch => {
  return {
    setUserStatus: authUser => dispatch(setUserStatus(authUser))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withFirebase
)(App)
