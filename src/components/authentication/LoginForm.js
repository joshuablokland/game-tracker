import React, { Component } from 'react'
import { SIGN_UP } from './constants'

class LoginForm extends Component {
  
  onSubmit = event => {
    console.log(event)
  }

  handleClick = event => {
    this.props.signUpLinkClicked({render: SIGN_UP})
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="modal-body">
          <h4 className="text-center">Login</h4>
          <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address"/>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
          </div>
        </div>
        <div className="modal-footer justify-content-between">
          <button type="button" className="btn btn-link" onClick={this.handleClick}>Sign up</button>
          <button type="submit" className="btn btn-primary">Log in</button>
        </div>
      </form>
    )
  }
}

export default LoginForm