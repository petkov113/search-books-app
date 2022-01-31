import { AuthActions } from '../actions/auth.actions'
import { AuthConstants } from '../constants/auth.constants'
import { AuthState } from '../types/auth.types'

const initialState: AuthState = {
  id: null,
  token: null,
}

export default function authReducer(
  state = initialState,
  action: AuthActions
): AuthState {
  switch (action.type) {
    case AuthConstants.AUTH_SUCCESS:
      return {
        ...state,
        id: action.id,
        token: action.token,
      }
    case AuthConstants.AUTH_FAILURE:
      return {
        ...state,
        id: null,
        token: null,
      }
    default:
      return state
  }
}
