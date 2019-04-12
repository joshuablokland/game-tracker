import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setUserStatus } from '../../store/actionTypes'
import validateEmail from '../../utils/validateEmail'
import { withFirebase } from '../../firebase'
import styles from '../Authentication/style.module.scss'

import Alert, { ALERT_TYPES } from '../Alert'
import { Button, InputField } from '../Forms'


class SignIn extends Component {

  state = {
    email: '',
    password: '',
    validForm: false,
    error: null
  }

  validateForm = () => validateEmail(this.state.email) && this.validatePassword()

  validatePassword = () => this.state.password !== ''

  handleInputChange = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value }, () => {
      // Use callback because state is pending 
      // when passwords need to be verified
      this.setState({ 
        validForm: this.validateForm() 
      }) 
    })
  }

  onSubmit = event => {
    event.preventDefault()

    const { email, password } = this.state

    this.props.firebase
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({ error: error.message })
      });
    
    this.props.firebase.auth.onAuthStateChanged(authUser => this.props.setUserStatus(authUser))
  }

  render() {
    const email = this.state.email
    const validForm = this.state.validForm
    const error = (this.state.error) ? <Alert type={ALERT_TYPES.danger}>{this.state.error}</Alert> : null
    
    return (
      <form className={styles.gtSignInForm} onSubmit={this.onSubmit}>
        <InputField 
          name={"email"}
          type={"email"}
          placeholder="Email address"
          onChange={this.handleInputChange}
          onBlur={() => validateEmail(email)}
        />
        <InputField 
          name={"password"}
          type={"password"}
          placeholder="Password"
          onChange={this.handleInputChange}
        />
        { error }
        <Button type="submit" disabled={!validForm} classes={['btn-block']}>Sign in</Button>
      </form>      
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUserStatus: status => dispatch(setUserStatus(status))
  }
}

export default connect(null, mapDispatchToProps)(withFirebase(SignIn))