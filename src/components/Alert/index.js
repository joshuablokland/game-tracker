import React from 'react'

const ALERT_TYPES = {
  success: 'alert-success',
  danger: 'alert-danger'
}

const Alert = (props) => {
  const type = (props.type) ? props.type : ALERT_TYPES.success

  return (
    <div className={`alert ${type}`} role="alert">
      { props.children }
    </div>
  )
}

export { ALERT_TYPES }
export default Alert;