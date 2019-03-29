import React from 'react'
import './style.scss'

const Button = ({children, type, classes, onClick}) => {
  
  if ( !Array.isArray(classes) ) {
    classes = []
  }

  return (
    <button 
      type={type || 'button'}
      className={`gt-btn ${classes.join(' ')}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button