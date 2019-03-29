import React from 'react'
import { Spring } from 'react-spring/renderprops'
import mario from '../../assets/sign-in-mario.png'
import './style.scss'

const Mario = () => {
  return (
    <Spring from={{ opacity: 0, left: -100 }} to={{ opacity: 1, left: 0 }} delay={500} easing="ease">
      {(props) => <img src={mario} width={488} height={842} className="gt-sign-in-img" style={props} />}
    </Spring>
  )
}

export default Mario