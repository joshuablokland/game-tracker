import React from 'react'
import { shallow, mount } from 'enzyme'
import { Navbar } from '../../components/Navbar'

const navBarProps = {
  firebase: {
    auth: {
      onAuthStateChanged: () => false
    }
  },
  userLoggedIn: false
}

describe('<Navbar />', () => {

  it('renders without crashing', () => {
    const navbar = shallow(<Navbar {...navBarProps}/>)
    
    expect(navbar.exists()).toEqual(true)
  })

  it('renders a sign in link', () => {
    const navbar = mount(<Navbar {...navBarProps}/>)
    const signInLink = navbar.find('#signIn')

    expect(signInLink.exists()).toEqual(true)
  })

  it('renders a sign out link', () => {
    const navBarPropsSignOut = { ...navBarProps, userLoggedIn: true }
    const navbar = mount(<Navbar {...navBarPropsSignOut}/>)
    const signOutLink = navbar.find('#signOut')

    expect(signOutLink.exists()).toEqual(true)
  })
})