import React from 'react'
import Dropdown from './'
import { shallow } from 'enzyme'

describe('<Dropdown />', () => {

  it('opens when the button is clicked', () => {
    const dropdown = shallow(<Dropdown></Dropdown>)
    dropdown.find('.btn').simulate('click')
    expect(dropdown.instance().state.show).toEqual(true)
  })

  it('closes when the button is not focussed', () => {
    const dropdown = shallow(<Dropdown></Dropdown>)
    dropdown.find('.btn').simulate('click')
    dropdown.find('.btn').simulate('blur')
    expect(dropdown.instance().state.show).toEqual(false)
  })
})