import { AuthConstants } from '../constants/auth.constants'

type AuthRequest = {
  type: AuthConstants.AUTH_REQUEST
}

type AuthSuccess = {
  type: AuthConstants.AUTH_SUCCESS
  id: string
  token: string
}

type AuthFailure = {
  type: AuthConstants.AUTH_FAILURE
}

type AuthLogout = {
  type: AuthConstants.AUTH_LOGOUT
}

export type AuthActions = AuthSuccess | AuthFailure | AuthRequest | AuthLogout
