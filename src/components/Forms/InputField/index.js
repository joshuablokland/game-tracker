import React from 'react'
import './style.scss'

const InputField = ({
  name,
  type,
  placeholder,
  onChange,
  onBlur
}) => {
  return (
    <input 
      name={name || ''}
      type={type || ''}
      placeholder={placeholder || ''}
      className='gt-input-field'
      autocomplete='off'
      onChange={onChange}
      onBlur={onBlur}
    />
  )
}

export default InputField