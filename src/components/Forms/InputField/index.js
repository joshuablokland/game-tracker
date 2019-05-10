import React from 'react'
import styles from './style.module.scss'

function validationClass (valid) {
  if (valid) {
    return styles.valid
  }
  return styles.invalid
}

const InputField = ({
  name,
  type,
  placeholder,
  validation,
  iconVerified,
  style,
  onChange,
  onBlur
}) => {
  const validClass = validation !== undefined ? validationClass(validation) : ''

  return (
    <div className={styles.gtInputFieldWrapper}>
      <input 
        name={name || ''}
        type={type || ''}
        placeholder={placeholder || ''}
        className={`${styles.gtInputField} ${validClass}`}
        autoComplete='off'
        style={style}
        onChange={onChange}
        onBlur={onBlur}
      />
      { iconVerified && (
        <div className={styles.gtInputFieldIconVerified}>{iconVerified}</div>
      )}
    </div>
  )
}

export default InputField