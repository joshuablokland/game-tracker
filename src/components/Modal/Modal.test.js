import React from 'react'
import { shallow, mount } from 'enzyme'
import { Modal, MODAL_SIZES } from './index'

describe('<Modal />', () => {

  it('renders a modal', () => {
    const modal = shallow(<Modal />)

    expect(modal.exists()).toEqual(true)
  })

  it('renders a small modal', () => {
    const modal = shallow(<Modal size={MODAL_SIZES.small}/>)
    const modalDialog = modal.find('#modalDialog')
    
    expect(modalDialog.hasClass('modal-sm')).toEqual(true)
  })

  it('renders a large modal', () => {
    const modal = shallow(<Modal size={MODAL_SIZES.large}/>)
    const modalDialog = modal.find('#modalDialog')
    
    expect(modalDialog.hasClass('modal-lg')).toEqual(true)
  })

  it('renders a large modal', () => {
    const modal = shallow(<Modal size={MODAL_SIZES.extraLarge}/>)
    const modalDialog = modal.find('#modalDialog')
    
    expect(modalDialog.hasClass('modal-xl')).toEqual(true)
  })

  it('renders a title', () => {
    const title = 'Badass title'
    const modal = shallow(<Modal title={title}/>)
    const modalTitle = modal.find('#modalTitle')
    const modalCloseButton = modal.find('#modalClose')

    expect(modalTitle.contains(title)).toEqual(true)
    expect(modalCloseButton.exists()).toEqual(true)
  })

  it('renders without a title', () => {
    const modal = shallow(<Modal />)
    const modalTitle = modal.find('#modalTitle')
    const modalCloseButton = modal.find('#modalClose')

    expect(modalTitle.exists()).toEqual(false)
    expect(modalCloseButton.exists()).toEqual(false)
  })

  it('closes when the esc key has been pressed', () => {
    const map = {};
    window.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });

    const spy = jest.spyOn(Modal.prototype, 'closeModalOnEsc')
    const modal = mount(<Modal onModalStatusChanged={jest.fn}/>)
    
    map.keyup({ keyCode: 27 });
    expect(spy).toHaveBeenCalled();
  })
})
