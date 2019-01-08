import React, { Component, Fragment } from 'react'
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
    const renderLogin = this.state.render === LOGIN
    
    return (
      <Fragment>
        {renderLogin
          ? (<LoginForm signUpLinkClicked={this.switchAuthenticationComponent}/>) 
          : (<SignUpForm />)
        }
      </Fragment>
    )
  }
}

export default Authentication