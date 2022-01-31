import { AuthConstants } from '../constants/auth.constants'

type AuthSuccess = {
  type: AuthConstants.AUTH_SUCCESS
  id: string
  token: string
}

type AuthFailure = {
  type: AuthConstants.AUTH_FAILURE
}

export type AuthActions = AuthSuccess | AuthFailure
