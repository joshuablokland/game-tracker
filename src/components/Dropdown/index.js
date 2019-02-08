import React, { Component } from 'react'

class Dropdown extends Component {

  state = {
    show: false
  }

  handleClick = event => {
    this.setState({show: !this.state.show})
  }

  renderButton = label => {
    if (typeof label === 'string') {
      return (
        <button 
          className="btn btn-secondary dropdown-toggle" 
          type="button" 
          aria-haspopup="true" 
          aria-expanded="false" 
          onClick={this.handleClick}
          // onBlur={this.handleClick}
        >
          {this.props.label}
        </button>
      )
    } else {
      return (
        <div 
          className="force-hover"
          onClick={this.handleClick}
          // onBlur={this.handleClick}
        >
          {this.props.label}
        </div>
      )
    }

  }

  render () {
    const show = this.state.show ? 'show' : ''
    const align = this.props.align ? this.props.align : ''
    const button = this.renderButton(this.props.label )
    
    return (
      <div className={`dropdown ${show}`}>
        { button }
        <div className={`dropdown-menu ${align} ${show}`} aria-labelledby="dropdownMenuButton">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Dropdown