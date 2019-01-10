import React, { Component } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'

import { HOME } from './routes'
import Navbar from './components/Navbar'
import Home from './views/Home'
import Authentication from './components/authentication/Authentication'
import Modal, {modalSizes} from './components/Modal'

import './scss//main.scss'
import '../node_modules/bootstrap/scss/bootstrap.scss'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
            {this.props.modalOpen && (
              <Modal size={modalSizes.small}>
                <Authentication />
              </Modal>
            )}
            <Route exact path={HOME} component={Home} />
          </div>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ modalOpen: state.modalOpen })

export default connect(mapStateToProps)(App)
