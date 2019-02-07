import {
  SET_MODAL_STATUS,
  SET_USER_STATUS,
  SET_USER
} from '../actionTypes'

const initialState = {
  userLoggedIn: false,
  modalOpen: false,
  user: {
    displayName: null,
    email: null,
    uid: null
  }
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODAL_STATUS:
      return {
        ...state,
        modalOpen: action.payload
      }
    case SET_USER_STATUS:
      return {
        ...state, 
        userLoggedIn: action.payload 
      }
    case SET_USER:
      return {
        ...state,
        user: action.payload
      }
    default: 
      return state
  }
}

export default user