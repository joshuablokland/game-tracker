import React, { Component, Fragment } from 'react'
import { Spring, Transition } from 'react-spring/renderprops'

import { Button } from '../Forms'
import SignInForm from '../SignInForm'
import SignUpForm from '../SignUpForm'
import Mario from './Mario'
import Yoshi from './Yoshi'

const SIGN_IN = 'SIGN_IN'
const SIGN_UP = 'SIGN_UP'

const AuthenticationForm = ({ render, toggle }) => {
  const ifSignIn = render === SIGN_IN
  const form = ifSignIn ? <SignInForm /> : <SignUpForm />
  const toggleText = ifSignIn ? <span>Don’t have an account yet </span> : null
  const toggleButton = ifSignIn 
    ? <Button classes={['btn-link']} onClick={toggle}>Sign Up!</Button>
    : <Button classes={['btn-link']} onClick={toggle}>Go back to Sign In.</Button>

  return (
    <Fragment>
      {form}
      <p className="gt-sign-up-text">{toggleText}{toggleButton}</p>
    </Fragment>
  )
}

class Authentication extends Component {

  state = {
    render: SIGN_IN,
    email: '',
    password: '',
    validForm: false,
    error: null
  }

  toggleView = () => {
    const render = this.state.render === SIGN_IN ? SIGN_UP : SIGN_IN
    this.setState({ render })
  }

  render() {
    const { render } = this.state
    const gameTracker = String('Game Tracker').split('').map((x, i) => ({key: i, text: x}))

    return (
      <div className="gt-sign-in">
        <Mario />
        <Yoshi />
        <Spring from={{ opacity: 0, marginBottom: -100 }} to={{ opacity: 1, marginBottom: 0 }} delay={500} easing="ease-in-out">
          {(props) => (
            <div className="gt-sign-in-holder" style={props}>
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
              <AuthenticationForm render={render} toggle={this.toggleView} />
            </div>
          )}
        </Spring>
      </div>
    )
  }
}

export default Authentication