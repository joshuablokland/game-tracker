import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../node_modules/bootstrap/scss/bootstrap.scss'
import Authentication from './components/Authentication'
import Modal, { MODAL_SIZES } from './components/Modal'
import Navbar from './components/Navbar'
import { ACCOUNT, HOME, SEARCH } from './constants/routes'
import './styles/main.scss'
import Account from './views/Account'
import Home from './views/Home'
import Search from './views/Search'

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
            {modal}
            <Switch>
              <Route exact path={HOME} component={Home} />
              <Route exact path={ACCOUNT} component={Account} />
              <Route patch={SEARCH} component={Search} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ modalOpen: state.modalOpen })

export default connect(mapStateToProps)(App)
