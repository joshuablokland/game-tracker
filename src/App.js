import React from 'react'
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

const App = ({modalOpen, userLoggedIn}) => {
  const modal = (modalOpen) ? (
    <Modal size={MODAL_SIZES.small}>
      <Authentication />
    </Modal>
  ) : null

  return (
    <Router>
      <div id="appWrapper">
        {userLoggedIn && <Navbar /> }
        {modal}
        <Switch>
          <Route exact path={HOME} component={Home} />
          <Route exact path={ACCOUNT} component={Account} />
          <Route patch={SEARCH} component={Search} />
        </Switch>
      </div>
    </Router>
  )  
}

const mapStateToProps = ({modalOpen, userLoggedIn}) => ({
  modalOpen: modalOpen,
  userLoggedIn: userLoggedIn
})

export default connect(mapStateToProps)(App)
