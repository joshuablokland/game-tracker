import React, { Component } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { withFirebase } from './firebase'
import { HOME } from './routes'

import Navbar from './components/Navbar'
import Home from './views/Home'
import Authentication from './components/authentication/Authentication'
import Modal, {modalSizes} from './components/Modal'

import './scss//main.scss'
import '../node_modules/bootstrap/scss/bootstrap.scss'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      authUser: null,
      showModal: false
    }
  }

  componentDidMount() {
    this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null })
    })
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
              <Modal size={modalSizes.small} toggleModal={this.toggleModal}>
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

export default withFirebase(App)
