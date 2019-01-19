import React from 'react'
import { shallow } from 'enzyme'
import { App } from '../App'
import { Navbar } from '../components/Navbar'

const navBarSetup = {
  auth: {
    onAuthStateChanged: () => false
  }
}

describe('<App />', () => {

  it('renders without crashing', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.exists()).toEqual(true)
  })

  it('renders a navbar', () => {
    const wrapper = shallow(<Navbar firebase={navBarSetup} />)
    expect(wrapper.exists()).toEqual(true)
  })
})

