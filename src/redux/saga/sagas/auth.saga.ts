import { Task } from 'redux-saga'
import { call, cancel, fork } from 'redux-saga/effects'

import * as AUTH_API from 'api/auth.api'
import { AuthConstants } from 'redux/constants'
import {
  AuthCancel,
  AuthLogout,
  AuthRequest,
} from 'redux/actionTypes/authActions.types'
import { put, take } from '../utils/typedEffects'

function* authorize(id: string, password: string) {
  try {
    const token: string = yield call(AUTH_API.login, id, password)
    yield put({ type: AuthConstants.AUTH_SUCCESS, id, token })
    return true
  } catch (e: any) {
    yield put({ type: AuthConstants.AUTH_FAILURE, error: String(e) })
  }
}

export function* authSaga() {
  while (true) {
    const { id, password }: AuthRequest = yield take(AuthConstants.AUTH_REQUEST)
    yield put({ type: AuthConstants.AUTH_START })

    const task: Task = yield fork(authorize, id, password)

    const nextAction: AuthCancel | AuthLogout = yield take([
      AuthConstants.AUTH_LOGOUT,
      AuthConstants.AUTH_CANCEL,
      AuthConstants.AUTH_FAILURE,
    ])

    if (nextAction.type === AuthConstants.AUTH_CANCEL) {
      yield cancel(task)
    }
  }
}
