import React from 'react'
import styles from './style.module.scss'
import { getType } from './types'
import { getDisplay } from './display'


const Button = ({children, type, display, onClick}) => {
  const btnType = getType(type)
  const btnDisplay = getDisplay(display)

  return (
    <button 
      type={type || 'button'}
      className={`${styles.gtBtn} ${styles[btnType]} ${styles[btnDisplay]}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button