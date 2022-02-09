import { AuthActions } from '../types/auth.types'
import { AuthConstants } from '../constants/auth.constants'
import { AuthState } from '../types/auth.types'

const initialState: AuthState = {
  id: null,
  token: null,
  isLoading: false,
  error: null,
}

export default function authReducer(
  state = initialState,
  action: AuthActions
): AuthState {
  switch (action.type) {
    case AuthConstants.AUTH_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      }
    case AuthConstants.AUTH_SUCCESS:
      return {
        ...state,
        id: action.id,
        token: action.token,
        isLoading: false,
        error: null,
      }
    case AuthConstants.AUTH_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    case AuthConstants.AUTH_CANCEL:
      return {
        ...state,
        isLoading: false,
        error: null,
      }
    case AuthConstants.AUTH_LOGOUT:
      return {
        ...state,
        id: null,
        token: null,
        isLoading: false,
        error: null,
      }
    default:
      return state
  }
}
