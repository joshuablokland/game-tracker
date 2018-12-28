import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="http://localhost:3000">Game Tracker</a>
        <div className="collapse navbar-collapse show" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/login">Log in</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar