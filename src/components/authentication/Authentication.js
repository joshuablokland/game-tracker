import React, { Component } from 'react'
import { SIGN_IN } from './constants'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'

class Authentication extends Component {
  
  constructor(props) {
    super(props)

    // Renders SIGN_IN or SIGN_UP
    this.state = {
      render: SIGN_IN
    }
  }

  switchAuthenticationComponent = type => {
    this.setState(type)
  }

  render() {
    const render = (this.state.render === SIGN_IN)
      ? <SignInForm signUpLinkClicked={this.switchAuthenticationComponent} />
      : <SignUpForm />
    
    return render
  }
}

export default Authentication