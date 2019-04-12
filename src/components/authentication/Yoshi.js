import React from 'react'
import { Spring } from 'react-spring/renderprops'
import yoshi from '../../assets/sign-in-yoshi.png'
import styles from './style.module.scss'

const Yoshi = () => {
  return (
    <Spring from={{ opacity: 0, right: -100 }} to={{ opacity: 1, right: 0 }} delay={500} easing="ease-out">
      {(props) => <img src={yoshi} width={464} height={707} className={styles.gtSignInImg} style={props} />}
    </Spring>
  )
}

export default Yoshi