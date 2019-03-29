import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withFirebase } from '../../firebase'
import Alert, { ALERT_TYPES } from '../Alert'
import validateEmail from './validateEmail'
import { Button, InputField } from '../Forms'
import './style.scss'
import mario from '../../assets/sign-in-mario.png'
import yoshi from '../../assets/sign-in-yoshi.png'

class SignIn extends Component {

  state = {
    email: '',
    password: '',
    validForm: false,
    error: null
  }

  validateForm = () => validateEmail(this.state.email) && this.validatePassword()

  validatePassword = () => this.state.password !== ''

  // handleClick = event => this.props.signUpLinkClicked({render: SIGN_UP})

  onModalStatusChanged = status => this.props.onModalStatusChanged(status)

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

  onSubmit = event => {
    event.preventDefault()
    
    const { email, password } = this.state
    /*.then(() => {
        this.setState({ ...INITIAL_STATE })
        this.onModalStatusChanged(false)
      }) */
    this.props.firebase
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({ error: error.message })
      });
  }

  render() {
    const email = this.state.email
    const validForm = this.state.validForm
    const error = (this.state.error) ? <Alert type={ALERT_TYPES.danger}>{this.state.error}</Alert> : null

    return (
      <div className="gt-sign-in">
        <img src={mario} width={488} height={842} className="gt-sign-in-img" style={{left: 0}} />
        <img src={yoshi} width={464} height={707} className="gt-sign-in-img" style={{right: 0}} />
        <h1 className="">Game Tracker</h1>
        <form className="gt-sign-in-form" onSubmit={this.onSubmit}>
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
        { /* <button type="button" className="btn btn-link" onClick={this.handleClick}>Sign up</button> */ }
      </div>
    )
  }
}

const mapStateToProps = ({ userLoggedIn }) => ({ userLoggedIn: userLoggedIn })

export default connect(mapStateToProps)(withFirebase(SignIn))