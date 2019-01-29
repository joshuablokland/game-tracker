import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { setModalStatus } from '../../store/actionTypes'

export const MODAL_SIZES = {
  small: 'modal-sm',
  large: 'modal-lg',
  extraLarge: 'modal-xl'
}

export class Modal extends Component {
  
  constructor(props) {
    super(props)
    this.boundCloseModalOnEsc = this.closeModalOnEsc.bind(this)
  }

  componentDidMount() {
    window.addEventListener('keyup', this.boundCloseModalOnEsc)
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.boundCloseModalOnEsc)
  }

  closeModalOnEsc(e) {
    if (e.keyCode === 27) this.props.onModalStatusChanged(false)
  }

  render() {
    return (
      <Fragment>
        <div className="modal show" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true" style={{display: 'block'}}>
          <div id="modalDialog" className={`modal-dialog modal-dialog-centered ${this.props.size}`} role="document" style={{zIndex: 1}}>
            <div id="modalContent" className="modal-content">
              {this.props.title && (
                <div className="modal-header">
                  <h5 id="modalTitle" className="modal-title">{this.props.title}</h5>
                  <button id="modalClose" type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.toggleModal}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              )}
              {this.props.children}
            </div>
          </div>
        </div>
        <div className="modal-backdrop show"></div>
      </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onModalStatusChanged: status => dispatch(setModalStatus(status))
  }
}
export default connect(null, mapDispatchToProps)(Modal)