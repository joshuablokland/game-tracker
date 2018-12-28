import React, { Component } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import {HOME, LOGIN} from './routes'

import Navbar from './components/Navbar'
import Home from './views/Home'
import Login from './views/Login'

import './scss//main.scss'
import '../node_modules/bootstrap/scss/bootstrap.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <Route exact path={HOME} component={Home} />
            <Route path={LOGIN} component={Login} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
