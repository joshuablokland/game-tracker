import React, { Component } from 'react'
import { withFirebase } from '../../firebase'
import Alert, { 
  ALERT_TYPES, 
  ALERT_SPACING 
} from '../Alert'

const INITIAL_STATE = {
  error: null,
  success: null,
  user: {
    displayName: '',
    email: ''
  }
}

class ProfileForm extends Component {
  
  timeout = null

  constructor(props) {
    super(props)
    this.state = INITIAL_STATE
    
    this.props.firebase.auth.onAuthStateChanged(authUser => 
      authUser 
        ? this.setUserProfile(authUser)
        : null
    )
  }

  setUserProfile = user => {
    const { displayName, email } = user
    this.setState({ 
      ...this.state, 
      ...{ 
        user: {
          displayName, 
          email 
        } 
      }
    })
  }

  handleChange = event => {
    const inputfield = {
      [event.currentTarget.name]: event.currentTarget.value
    }
    this.setState({
      ...this.state,
      ...{
        user: {
          ...this.state.user,
          ...inputfield
        }
      }      
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.firebase.doUpdateProfile(this.state.user)
      .then(() => {
        this.setState({ 
          success: 'Your profile has been updated.'
        }, () => {
          setTimeout(() => {
            this.setState({success: null})
          }, 3000)
        })
      })
      .catch(error => this.setState({
        ...this.state,
        error
      }))
  }

  renderMessage = () => {
    if (this.state.error) {
      return <Alert type={ALERT_TYPES.danger} spacing={ALERT_SPACING.mt_4}>{this.state.error}</Alert>
    }
    if (this.state.success) {
      return <Alert spacing={ALERT_SPACING.mt_4}>{this.state.success}</Alert>
    }
    return null
  }

  render () {
    const message = this.renderMessage()

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="displayName">Name</label>
          <input 
            onChange={this.handleChange}
            value={this.state.user.displayName}
            type="text"
            className="form-control"
            id="displayName"
            name="displayName"
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input 
            onChange={this.handleChange}
            value={this.state.user.email}
            type="text"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter your name"
            disabled
          />
        </div>
        <button type="submit" className="btn btn-primary">Save changes</button>
        { message }
      </form>
    )
  }
}

export default withFirebase(ProfileForm)