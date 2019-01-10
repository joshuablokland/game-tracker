import React, { Component } from 'react'
import { withFirebase } from '../../firebase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Alert, { alertTypes } from '../Alert';

const INITIAL_STATE = {
  email: '',
  password: '',
  passwordVerification: '',
  validForm: false,
  error: null
}

class SignUpFormBase extends Component {

  constructor(props) {
    super(props)

    this.state = INITIAL_STATE
  }

  onSubmit = event => {
    event.preventDefault()

    const { email, password } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE })
      })
      .catch(error => {
        this.setState({ error: error.message })
      })
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
    const REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return REGEX.test(this.state.email)
  }

  validatePassword = () => {
    return this.state.password === this.state.passwordVerification 
            && this.state.password !== '' 
            && this.state.passwordVerification !== '' 
  }

  validateForm = () => {
    return this.validateEmail() && this.validatePassword()
  }

  render() {
    const validForm = this.state.validForm
    const validEmailIcon = (this.validateEmail()) ? <FontAwesomeIcon icon={faCheck} className="fa-icon text-success" /> : null
    const validPasswordIcon = (this.validatePassword()) ? <FontAwesomeIcon icon={faCheck} className="fa-icon text-success" /> : null
    const error = (this.state.error) ? <Alert type={alertTypes.danger}>{this.state.error}</Alert> : null

    return (
      <form onSubmit={this.onSubmit}>
        <div className="modal-body">
          <h4 className="text-center">Sign Up</h4>
          <div className="form-group form-group-validation-icon">
            { validEmailIcon }
            <input type="email" name="email" className="form-control" placeholder="Email address" onChange={this.handleInputChange} onBlur={this.validateEmail}/>
          </div>
          <div className="form-group form-group-validation-icon">
            { validPasswordIcon }
            <input type="password" name="password" className="form-control" placeholder="Password" onChange={this.handleInputChange}/>
          </div>
          <div className="form-group form-group-validation-icon">
            { validPasswordIcon }
            <input type="password" name="passwordVerification" className="form-control" placeholder="Password verification" onChange={this.handleInputChange}/>
          </div>
          {error}
        </div>
        <div className="modal-footer">
          <button type="submit" className="btn btn-primary" disabled={!validForm}>Sign up</button>
        </div>
      </form>
    )
  }
}

const SignUpForm = withFirebase(SignUpFormBase)

export default SignUpForm