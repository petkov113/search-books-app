import { AuthConstants } from '../constants/auth.constants'

export type AuthRequest = {
  type: AuthConstants.AUTH_REQUEST
  id: string
  password: string
}

export type AuthSuccess = {
  type: AuthConstants.AUTH_SUCCESS
  id: string
  token: string
}

export type AuthFailure = {
  type: AuthConstants.AUTH_FAILURE
  error: string
}

export type AuthLogout = {
  type: AuthConstants.AUTH_LOGOUT
}

export type AuthStart = {
  type: AuthConstants.AUTH_START
}

export type AuthCancel = {
  type: AuthConstants.AUTH_CANCEL
}

export type AuthActions =
  | AuthSuccess
  | AuthFailure
  | AuthRequest
  | AuthLogout
  | AuthCancel
  | AuthStart
