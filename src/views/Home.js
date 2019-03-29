import React, {Component} from 'react'
import { connect } from 'react-redux'
import SignIn from '../components/SignIn'

const HomePage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="jumbotron">
            <h1 className="display-4">Hello, main homepage!</h1>
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

const Home = ({userLoggedIn}) => userLoggedIn ? <HomePage /> : <SignIn />

const mapStateToProps = ({userLoggedIn}) => ({ userLoggedIn: userLoggedIn })

export default connect(mapStateToProps)(Home)