import { AuthActions } from '../actions/auth.actions'
import { AuthConstants } from '../constants/auth.constants'
import { AuthState } from '../types/auth.types'

const initialState: AuthState = {
  id: null,
  token: null,
  isLoading: false,
}

export default function authReducer(
  state = initialState,
  action: AuthActions
): AuthState {
  switch (action.type) {
    case AuthConstants.AUTH_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case AuthConstants.AUTH_SUCCESS:
      return {
        ...state,
        id: action.id,
        token: action.token,
        isLoading: false,
      }
    case AuthConstants.AUTH_FAILURE:
      return {
        ...state,
        isLoading: false,
      }
    case AuthConstants.AUTH_LOGOUT:
      return {
        ...state,
        id: null,
        token: null,
        isLoading: false,
      }
    default:
      return state
  }
}
