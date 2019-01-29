import React from 'react'
import { shallow } from 'enzyme'
import Alert, { ALERT_TYPES } from '../../components/Alert'

describe('<Alert />', () => {

  it('renders with a default type of success', () => {
    const alert = shallow(<Alert />)
    
    expect(alert.hasClass('alert-success')).toEqual(true)
  })

  it('renders with a type of success', () => {
    const alert = shallow(<Alert type={ALERT_TYPES.success} />)

    expect(alert.hasClass('alert-success')).toEqual(true)
  })

  it('renders with a type of danger', () => {
    const alert = shallow(<Alert type={ALERT_TYPES.danger} />)

    expect(alert.hasClass('alert-danger')).toEqual(true)
  })

})
