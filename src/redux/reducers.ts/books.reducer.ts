import { BooksActions } from '../actionTypes/booksActions.types'
import { BooksConstants } from '../constants'
import { BooksState } from '../types'

const initialState: BooksState = {
  books: [],
  isLoading: false,
  subjects: [],
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
    case BooksConstants.SET_SUBJECTS:
      return {
        ...state,
        subjects: action.subjects,
      }
    default:
      return state
  }
}
