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
    return type === SPACING_TYPES.MARGIN ? 'margin' : 'padding'
  }

  const spacing = direction => {
    switch(direction) {
      case SPACING_DIRECTION.TOP: 
        return {
          [_type(type)+'Top']: amount
        };
      case SPACING_DIRECTION.RIGHT: 
        return {
          [_type(type)+'Right']: amount
        };
      case SPACING_DIRECTION.BOTTOM: 
        return {
          [_type(type)+'Bottom']: amount
        };
      case SPACING_DIRECTION.LEFT: 
        return {
          [_type(type)+'Left']: amount
        };
      case SPACING_DIRECTION.X: 
        return {
          [ _type(type)+'Left']: amount,
          [_type(type)+'Right']: amount
        };
      case SPACING_DIRECTION.Y: 
        return {
          [_type(type)+'Top']: amount,
          [_type(type)+'Bottom']: amount
        };
      case SPACING_DIRECTION.XY: 
        return {
          [_type(type)]: amount
        };
      default: 
        return {
          [_type(type)]: amount
        };
    }
  }

  return (
    <div style={spacing(direction)}>
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