import { combineReducers } from 'redux'
import authReducer from './auth.reducer'
import booksReducer from './books.reducer'

export const rootReducer = combineReducers({
  auth: authReducer,
  books: booksReducer
})

export type RootState = ReturnType<typeof rootReducer>
