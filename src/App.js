import React, { Component } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { HOME } from './routes'

import Navbar from './components/Navbar'
import Home from './views/Home'
import Login from './components/Login'
import Modal from './components/Modal'

import './scss//main.scss'
import '../node_modules/bootstrap/scss/bootstrap.scss'

class App extends Component {

  state = {
    showModal: false
  }

  toggleModal = () => {
    this.setState({showModal: !this.state.showModal})
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar toggleModal={this.toggleModal} />
            {this.state.showModal && (
              <Modal title="Log in" toggleModal={this.toggleModal}>
                <Login />
              </Modal>
            )}
            <Route exact path={HOME} component={Home} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
