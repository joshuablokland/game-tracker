import React, { Component } from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

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
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
