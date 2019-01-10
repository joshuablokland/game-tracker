import { 
  SET_USER_STATUS, 
  SET_USER_DISPLAY_NAME, 
  SET_USER_UID
} from '../actionTypes'

const initialState = {
  userLoggedIn: false,
  user: {
    displayName: '',
    uid: ''
  }
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_STATUS:
      return {
        ...state, 
        userLoggedIn: action.payload 
      }
    case SET_USER_DISPLAY_NAME:
      return {
        ...state,
        user: {
          ...state.user,
          displayName: action.payload
        }
      }
    case SET_USER_UID:
      return {
        ...state,
        user: {
          ...state.user,
          uid: action.payload
        }
      }
    default: 
      return state
  }
}

export default user