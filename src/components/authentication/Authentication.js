import React, { Component } from 'react'
import { LOGIN } from './constants'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

class Authentication extends Component {
  
  constructor(props) {
    super(props)

    // Renders LOGIN or SIGN_UP
    this.state = {
      render: LOGIN
    }
  }

  switchAuthenticationComponent = type => {
    this.setState(type)
  }

  render() {
    const render = (this.state.render === LOGIN)
      ? <LoginForm signUpLinkClicked={this.switchAuthenticationComponent} />
      : <SignUpForm />
    
    return render
  }
}

export default Authentication