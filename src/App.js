import React, { Component } from 'react'
import Navbar from './components/Navbar'
import './scss//main.scss'
import '../node_modules/bootstrap/scss/bootstrap.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div class="jumbotron mt-3">
                <h1 class="display-4">Hello, world!</h1>
                <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr class="my-4"/>
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <a class="btn btn-primary btn-lg" href="http://localhost:3000" role="button">Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
