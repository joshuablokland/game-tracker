export const SET_MODAL_STATUS = 'SET_MODAL_STATUS'
export const setModalStatus = status => ({
  type: SET_MODAL_STATUS,
  payload: status
})

export const SET_USER_STATUS = 'SET_USER_STATUS'
export const setUserStatus = authUser => {
  const status = authUser ? true : false
  return {
    type: SET_USER_STATUS,
    payload: status
  }
}

export const SET_USER = 'SET_USER'
export const setUser = user => ({
  type: SET_USER,
  payload: user
})

export const SET_USER_NAME = 'SET_USER_NAME'
export const setUserName = userName => ({
  type: SET_USER_NAME,
  payload: userName
})