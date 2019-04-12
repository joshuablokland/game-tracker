import React from 'react'
import styles from './style.module.scss'

const BUTTON_TYPES = {
  DEFAULT: 0,
  LINK: 10
}

function getType(types) {
  switch(types) {
    case BUTTON_TYPES.default:
      return styles.default
    case BUTTON_TYPES.link:
      return styles.link
    default:
      return styles.default
  }
}

const Button = ({children, type, onClick}) => {
  const btnType = getType(type)

  return (
    <button 
      type={type || 'button'}
      className={`${styles.gtBtn} ${btnType}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
export { BUTTON_TYPES }