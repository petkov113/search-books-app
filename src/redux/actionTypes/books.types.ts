import { BooksConstants } from '../constants'
import { Book } from '../sagas/books.saga'

export type SearchBooks = {
  type: BooksConstants.SEARCH_BOOKS
  query: string
}

export type SearchStart = {
  type: BooksConstants.SEARCH_START
}

export type SetBooks = {
  type: BooksConstants.SET_BOOKS
  books: Book[]
}

export type BooksState = Readonly<{
  books: Book[]
  isLoading: boolean
}>

export type BooksActions = SearchBooks | SetBooks | SearchStart

