import React, { Component } from 'react'
import gravatar from 'gravatar'

class Gravatar extends Component {
  
  gravatarURL = null

  constructor(props) {
    super(props)
    this.gravatarURL = gravatar.url(this.props.email);
  }

  render() {
    const gravatarImg = 
      this.gravatarURL 
      ? <img 
          src={this.gravatarURL} 
          alt="avatar"
          className="rounded-circle navbar-avatar ml-2"
        /> 
      : null
    return gravatarImg
  }
}

export default Gravatar