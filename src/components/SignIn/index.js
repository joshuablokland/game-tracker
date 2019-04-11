import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setUserStatus } from '../../store/actionTypes'
import { Spring, Transition } from 'react-spring/renderprops'
import { withFirebase } from '../../firebase'
import Alert, { ALERT_TYPES } from '../Alert'
import { Button, InputField } from '../Forms'
import validateEmail from './validateEmail'
import Mario from './Mario'
import Yoshi from './Yoshi'

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
    const gameTracker = String('Game Tracker').split('').map((x, i) => ({key: i, text: x}))

    return (
      <div className="gt-sign-in">
        <Mario />
        <Yoshi />
        <Spring from={{ opacity: 0, marginBottom: -100 }} to={{ opacity: 1, marginBottom: 0 }} delay={500} easing="ease-in-out">
          {(props) => (
            <div style={props}>
              <h1>
                <Transition 
                  items={gameTracker} 
                  keys={item => item.key}
                  from={{ opacity: 0, transform: 'translate3d(0,-40px,0)' }}
                  enter={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
                  leave={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
                  trail={65}
                >
                  {item => props => <span style={props}>{item.text}</span>}
                </Transition>
              </h1>
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
            </div>
          )}
        </Spring>
        { /* <button type="button" className="btn btn-link" onClick={this.handleClick}>Sign up</button> */ }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUserStatus: status => dispatch(setUserStatus(status))
  }
}

export default connect(null, mapDispatchToProps)(withFirebase(SignIn))