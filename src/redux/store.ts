import { createStore, applyMiddleware, compose } from 'redux'
import { rootReducer } from './reducers.ts/rootReducer'

const middleware: any[] = []

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
)
