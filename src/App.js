import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import { HOME, ACCOUNT } from './routes'
import Navbar from './components/Navbar'
import Home from './views/Home'
import Account from './views/Account'
import Authentication from './components/Authentication'
import Modal, { MODAL_SIZES } from './components/Modal'

import './scss//main.scss'
import '../node_modules/bootstrap/scss/bootstrap.scss'

export class App extends Component {

  render() {
    const modal = (this.props.modalOpen) ? (
      <Modal size={MODAL_SIZES.small}>
        <Authentication />
      </Modal>
    ) : null

    return (
      <div className="App">
        <Router>
          <div id="appWrapper">
            <Navbar />
            { modal }
            <Switch>
              <Route exact path={HOME} component={Home} />
              <Route exact path={ACCOUNT} component={Account} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ modalOpen: state.modalOpen })

export default connect(mapStateToProps)(App)
