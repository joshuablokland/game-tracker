const BUTTON_TYPES = {
  DEFAULT: 0,
  LINK: 10
}

function getType(types) {
  switch(types) {
    case BUTTON_TYPES.DEFAULT:
      return 'default'
    case BUTTON_TYPES.LINK:
      return 'link'
    default:
      return 'default'
  }
}

export { BUTTON_TYPES, getType }