import React, { Component } from 'react'
import Navbar from './components/Navbar'
import '../node_modules/bootstrap/scss/bootstrap.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App;
