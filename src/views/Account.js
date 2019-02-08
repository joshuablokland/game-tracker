import React, { Component } from 'react'
import ProfileForm from '../components/ProfileForm'

class Account extends Component {
  render () {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h1 className="mb-4">Account settings</h1>
            <ProfileForm />
          </div>
        </div>
      </div>
    )
  }
}

export default Account