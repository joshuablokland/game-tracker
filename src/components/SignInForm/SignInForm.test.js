import React from 'react'
import { shallow } from 'enzyme'
import { SignInForm } from './Form/index'

describe('<SignInForm />', () => {

  it('renders a form', () => {
    const form = shallow(<SignInForm />)

    expect(form.exists()).toEqual(true)
  })

  it('handles changes email field', () => {
    const event = {
      currentTarget: {
        name: 'email',
        value: 'test@test.com'
      }
    }

    const form = shallow(<SignInForm />)
    const emailField = form.find('#inputEmailAddress')

    emailField.simulate('change', event)
    expect(form.state().email).toEqual('test@test.com')
  })

})