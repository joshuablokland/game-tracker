import React from 'react'
import './style.scss'

function validationClass (valid) {
  if (valid) {
    return 'valid'
  }
  return 'invalid'
}

const InputField = ({
  name,
  type,
  placeholder,
  validation,
  iconVerified,
  onChange,
  onBlur
}) => {
  const validClass = validation !== undefined ? validationClass(validation) : ''

  return (
    <div className="gt-input-field-wrapper">
      <input 
        name={name || ''}
        type={type || ''}
        placeholder={placeholder || ''}
        className={`gt-input-field ${validClass}`}
        autoComplete='off'
        onChange={onChange}
        onBlur={onBlur}
      />
      { iconVerified && (
        <div className="gt-input-field-icon-verified">{iconVerified}</div>
      )}
    </div>
  )
}

export default InputField