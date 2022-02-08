import { call } from 'redux-saga/effects'
import * as AUTH_API from '../../api/auth.api'
import { AuthConstants } from '../constants/auth.constants'
import { put, take } from './typedEffects'

function* authorize(id: string, password: string) {
  try {
    const token: string = yield call(AUTH_API.login, id, password)
    yield put({ type: AuthConstants.AUTH_SUCCESS, id, token })
    return true
  } catch (error) {
    yield put({ type: AuthConstants.AUTH_FAILURE })
  }
}

export function* authSaga() {
  while (true) {
    const { user, password } = yield take(AuthConstants.AUTH_REQUEST)
    yield put({ type: AuthConstants.AUTH_REQUEST })
    const isSuccess: boolean = yield call(authorize, user, password)
    if (isSuccess) {
      yield take(AuthConstants.AUTH_LOGOUT)
    }
  }
}
