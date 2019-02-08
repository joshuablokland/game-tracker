import React from 'react'

const ALERT_TYPES = {
  success: 'alert-success',
  danger: 'alert-danger'
}

const ALERT_SPACING = {
  mt_0: 'mt-0',
  mt_4: 'mt-4'
}

const Alert = (props) => {
  const type = (props.type) ? props.type : ALERT_TYPES.success
  const spacing = (props.spacing) ? props.spacing : ALERT_SPACING.mt_0

  return (
    <div className={`alert ${type} ${spacing}`} role="alert">
      { props.children }
    </div>
  )
}

export { ALERT_TYPES, ALERT_SPACING }
export default Alert;