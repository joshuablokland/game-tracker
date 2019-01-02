import React, { Component, Fragment } from 'react'

class Modal extends Component {
  
  constructor(props) {
    super(props)
    this.boundToggleModalOnEsc = this.toggleModalOnEsc.bind(this)
  }

  componentDidMount() {
    window.addEventListener('keyup', this.boundToggleModalOnEsc)
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.boundToggleModalOnEsc)
  }

  toggleModalOnEsc = (e) => {
    if (e.keyCode === 27) this.props.toggleModal()
  }

  render() {
    return (
      <Fragment>
        <div className="modal show" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{display: 'block'}}>
          <div className="modal-dialog modal-dialog-centered" role="document" style={{zIndex: 1}}>
            <div className="modal-content">
              {this.props.title && (
                <div className="modal-header">
                  <h5 className="modal-title">{this.props.title}</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.toggleModal}>
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

export default Modal