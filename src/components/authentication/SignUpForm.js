import React, { Component } from 'react'

class SignUpForm extends Component {

  state = {
    email: null,
    password: null,
    passwordVerification: null,
    validForm: false
  }

  onSubmit = event => {
    event.preventDefault()
    console.log(event)
  }

  handleInputChange = event => {
    const inputfield = {}
    inputfield[event.currentTarget.name] = event.currentTarget.value
    
    this.setState({
      ...this.state, 
      ...inputfield
    }, () => {
      // Use callback because state is pending 
      // when passwords need to be verified
      this.setState({ 
        validForm: this.validateForm() 
      }) 
    })
  }

  validateEmail = () => {
    const REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return REGEX.test(this.state.email)
  }

  validatePassword = () => {
    return this.state.password === this.state.passwordVerification 
            && this.state.password !== null 
            && this.state.passwordVerification !== null
            && this.state.password !== '' 
            && this.state.passwordVerification !== '' 
  }

  validateForm = () => {
    return this.validateEmail() && this.validatePassword()
  }

  render() {
    const validForm = this.state.validForm

    return (
      <form onSubmit={this.onSubmit}>
        <div className="modal-body">
          <h4 className="text-center">Sign Up</h4>
          <div className="form-group">
            <input type="email" name="email" className="form-control" placeholder="Email address" onChange={this.handleInputChange} onBlur={this.validateEmail}/>
          </div>
          <div className="form-group">
            <input type="password" name="password" className="form-control" placeholder="Password" onChange={this.handleInputChange}/>
          </div>
          <div className="form-group">
            <input type="password" name="passwordVerification" className="form-control" placeholder="Password verification" onChange={this.handleInputChange}/>
          </div>
        </div>
        <div className="modal-footer">
          <button type="submit" className="btn btn-primary" disabled={!validForm}>Sign up</button>
        </div>
      </form>
    )
  }
}

export default SignUpForm