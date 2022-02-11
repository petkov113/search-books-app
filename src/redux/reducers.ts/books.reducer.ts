import { BooksActions, BooksState } from '../actionTypes/books.types'
import { BooksConstants } from '../constants'

const initialState: BooksState = {
  books: [],
  isLoading: false,
}

export default function booksReducer(
  state = initialState,
  action: BooksActions
): BooksState {
  switch (action.type) {
    case BooksConstants.SEARCH_START:
      return {
        ...state,
        isLoading: true,
      }
    case BooksConstants.SET_BOOKS:
      return {
        ...state,
        books: action.books,
        isLoading: false,
      }
    default:
      return state
  }
}
