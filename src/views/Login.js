import React, {Component} from 'react'

class Login extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="jumbotron mt-3">
              <h1 className="display-4">Hello, Login page!</h1>
              <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
              <hr className="my-4"/>
              <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
              <a className="btn btn-primary btn-lg" href="http://localhost:3000" role="button">Learn more</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login