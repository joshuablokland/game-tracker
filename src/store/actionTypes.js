/**
 * USER - action types
 */
export const SET_MODAL_STATUS = 'SET_MODAL_STATUS'
export const SET_USER_STATUS = 'SET_USER_STATUS'
export const SET_USER = 'SET_USER'
/**
 * USER - action creators
 */
export const setModalStatus = status => {
  return {
    type: SET_MODAL_STATUS,
    payload: status
  }
}
export const setUserStatus = status => {
  return {
    type: SET_USER_STATUS,
    payload: status
  }
}
export const setUser = user => {
  return {
    type: SET_USER,
    payload: user
  }
}