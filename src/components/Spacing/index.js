import React from 'react'

const SPACING_TYPES = {
  MARGIN: 0,
  PADDING: 1
}

const spacingBase = 16
const SPACING_AMOUNT = {
  SMALL: spacingBase * 0.5,
  NORMAL: spacingBase,
  MEDIUM: spacingBase * 2,
  LARGE: spacingBase * 2.5
}

const SPACING_DIRECTION = {
  TOP: 0,
  RIGHT: 1,
  BOTTOM: 2,
  LEFT: 3,
  X: 4,
  Y: 5,
  XY: 6
}

const Spacing = ({ children, type, amount, direction }) => {
  const _type = type => {
    if(type === SPACING_TYPES.MARGIN) {
      
    } else {

    }
  }

  const _amount = amount => {
    switch(amount) {
      case SPACING_AMOUNT.SMALL: return;
      case SPACING_AMOUNT.NORMAL: return;
      case SPACING_AMOUNT.MEDIUM: return;
      case SPACING_AMOUNT.LARGE: return;
      default: return;
    }
  }

  const _direction = direction => {
    switch(direction) {
      case SPACING_DIRECTION.TOP: return;
      case SPACING_DIRECTION.RIGHT: return;
      case SPACING_DIRECTION.BOTTOM: return;
      case SPACING_DIRECTION.LEFT: return;
      case SPACING_DIRECTION.X: return;
      case SPACING_DIRECTION.Y: return;
      case SPACING_DIRECTION.XY: return;
      default: return;
    }
  }

  return (
    <div>
      {children}
    </div>
  )
}

export default Spacing
export {
  SPACING_TYPES,
  SPACING_AMOUNT,
  SPACING_DIRECTION
}