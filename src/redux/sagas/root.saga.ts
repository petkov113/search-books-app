import { all, call, spawn } from 'redux-saga/effects'
import { authSaga } from './auth.saga'

export function* rootSaga(): Generator {
  const sagas = [authSaga]
  const retrySagas = yield sagas.map((saga) =>
    spawn(function* () {
      while (true) {
        try {
          yield call(saga)
          break
        } catch (e) {
          console.log(e)
        }
      }
    })
  )

  yield all(retrySagas as any)
}
