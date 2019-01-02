import React, {Component} from 'react'

class Login extends Component {
  render() {
    return (
      <form>
        <div className="modal-body">
          <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address"/>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
          </div>
        </div>
        <div class="modal-footer justify-content-between">
          <button type="button" class="btn btn-link">Sign up</button>
          <button type="submit" className="btn btn-primary">Log in</button>
        </div>
      </form>
    )
  }
}

export default Login