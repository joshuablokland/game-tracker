import React, { Component } from 'react'

import { withFirebase } from '../../../firebase'
import { setModalStatus } from '../../../store/actionTypes'
import { connect } from 'react-redux'

import { SIGN_UP } from '../constants'
import validateEmail from '../functions/validateEmail'
import Alert, { ALERT_TYPES } from '../../Alert';

export const INITIAL_STATE = {
  email: '',
  password: '',
  validForm: false,
  error: null
}

export class SignInForm extends Component {
  
  constructor(props) {
    super(props)

    this.state = INITIAL_STATE
  }

  onSubmit = event => {
    event.preventDefault()
    
    const { email, password } = this.state

    this.props.firebase
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE })
        this.onModalStatusChanged(false)
      })
      .catch(error => {
        this.setState({ error: error.message })
      });
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

  validateForm = () => {
    return validateEmail(this.state.email) && this.validatePassword()
  }

  validatePassword = () => {
    return this.state.password !== ''
  }

  handleClick = event => {
    this.props.signUpLinkClicked({render: SIGN_UP})
  }

  onModalStatusChanged = status => {
    this.props.onModalStatusChanged(status)
  }

  render() {
    const email = this.state.email
    const validForm = this.state.validForm
    const error = (this.state.error) ? <Alert type={ALERT_TYPES.danger}>{this.state.error}</Alert> : null

    return (
      <form onSubmit={this.onSubmit}>
        <div className="modal-body">
          <h4 className="text-center">Sign in</h4>
          <div className="form-group">
            <input type="email" name="email" className="form-control" id="inputEmailAddress" aria-describedby="emailHelp" placeholder="Email address" onChange={this.handleInputChange} onBlur={() => validateEmail(email)}/>
          </div>
          <div className="form-group">
            <input type="password" name="password" className="form-control" id="inputPassword" placeholder="Password" onChange={this.handleInputChange}/>
          </div>
          { error }
        </div>
        <div className="modal-footer justify-content-between">
          <button type="button" className="btn btn-link" onClick={this.handleClick}>Sign up</button>
          <button type="submit" className="btn btn-primary" disabled={!validForm}>Sign in</button>
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({ userLoggedIn: state.userLoggedIn })

const mapDispatchToProps = dispatch => {
  return {
    onModalStatusChanged: status => dispatch(setModalStatus(status))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withFirebase(SignInForm))