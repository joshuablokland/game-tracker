const BUTTON_DISPLAYS = {
  INLINE_BLOCK: 0,
  BLOCK: 10
}

function getDisplay(display) {
  if (display === BUTTON_DISPLAYS.BLOCK) {
    return 'block';
  } else {
    return;
  }
}

export { BUTTON_DISPLAYS, getDisplay }