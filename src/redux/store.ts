import { useDispatch, useSelector } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Actions } from './actionTypes'
import { rootReducer, RootState } from './reducers.ts/root.reducer'
import { rootSaga } from './saga/sagas/root.saga'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

export function useAppSelector<T>(fn: (store: RootState) => T): T {
  return fn(useSelector((x: RootState) => x))
}

export const useAppDispatch = () => useDispatch<Dispatch>()

type Dispatch = <TReturnType>(action: Actions) => TReturnType
