import React from 'react'

const alertTypes = {
  success: 'alert-success',
  danger: 'alert-danger'
}

const Alert = (props) => {
  const type = (props.type) ? props.type : alertTypes.success

  return (
    <div className={`alert ${type}`} role="alert">
      { props.children }
    </div>
  )
}

export { alertTypes }
export default Alert;