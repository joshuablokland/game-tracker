import React from 'react'
import { shallow } from 'enzyme'
import Authentication from './index'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'
import { SIGN_UP } from './constants'

describe('<Authentication />', () => {
  
  it('renders the SignInForm as a default', () => {
    const auth = shallow(<Authentication />)
    const signUpForm = auth.find(SignUpForm)
    const signInForm = auth.find(SignInForm)

    expect(signUpForm.exists()).toEqual(false)
    expect(signInForm.exists()).toEqual(true)
  })

  it('renders the SignUpForm when the sign up link is clicked', () => {
    const auth = shallow(<Authentication />)
    auth.setState({ render: SIGN_UP })
    const signInForm = auth.find(SignInForm)
    const signUpForm = auth.find(SignUpForm)

    expect(signInForm.exists()).toEqual(false)
    expect(signUpForm.exists()).toEqual(true)
  })

})
