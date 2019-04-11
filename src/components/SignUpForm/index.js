import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { withFirebase } from '../../firebase'
import validateEmail from '../../utils/validateEmail';

import Alert, { ALERT_TYPES } from '../Alert'
import { Button, InputField } from '../Forms'

const INITIAL_STATE = {
  email: '',
  password: '',
  passwordVerification: '',
  validForm: false,
  error: null
}

class SignUpForm extends Component {

  constructor(props) {
    super(props)

    this.state = INITIAL_STATE
  }

  onSubmit = event => {
    event.preventDefault()

    const { email, password } = this.state;

    this.props.firebase
      .createUserWithEmailAndPassword(email, password)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE })
      })
      .catch(error => {
        this.setState({ error: error.message })
      })
  }

  handleInputChange = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value }, () => {
      // Use callback because state is pending 
      // when passwords need to be verified
      this.setState({ 
        validForm: this.validateForm() 
      }) 
    })
  }

  validatePassword = () => {
    return this.state.password === this.state.passwordVerification 
            && this.state.password !== '' 
            && this.state.passwordVerification !== '' 
  }

  validateForm = () => {
    return validateEmail(this.state.email) && this.validatePassword()
  }

  render() {
    const email = this.state.email
    const validForm = this.state.validForm
    const validEmailIcon = (validateEmail(email)) ? <FontAwesomeIcon icon={faCheck} className="fa-icon text-success" /> : null
    const validPasswordIcon = (this.validatePassword()) ? <FontAwesomeIcon icon={faCheck} className="fa-icon text-success" /> : null
    const error = (this.state.error) ? <Alert type={ALERT_TYPES.danger}>{this.state.error}</Alert> : null

    return (
      <form className="gt-sign-in-form" onSubmit={this.onSubmit}>
      {/* { validEmailIcon } */}
        <InputField 
          name={"email"}
          type={"email"}
          placeholder="Email address"
          onChange={this.handleInputChange}
          onBlur={() => validateEmail(email)}
        />
        {/* { validPasswordIcon } */}
        <InputField 
          name={"password"}
          type={"password"}
          placeholder="Password"
          onChange={this.handleInputChange}
        />
        {/* { validPasswordIcon } */}
        <InputField 
          name={"passwordVerification"}
          type={"password"}
          placeholder="Password verification"
          onChange={this.handleInputChange}
        />
        {error}
        <Button type="submit" disabled={!validForm} classes={['btn-block']}>Sign up</Button>
      </form>
    )
  }
}

export default withFirebase(SignUpForm)