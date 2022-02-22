import { BooksActions } from 'redux/actionTypes/booksActions.types'
import { BooksConstants } from 'redux/constants'
import { BooksState } from 'redux/types'

const initialState: BooksState = {
  books: [],
  isLoading: false,
  subjects: [],
  count: 0,
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
    case BooksConstants.SET_COUNT:
      return {
        ...state,
        count: action.count,
      }
    default:
      return state
  }
}
