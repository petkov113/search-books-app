import { BooksConstants } from '../constants'
import { Book } from '../saga/sagas/books.saga'

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

export type SetSubjects = {
  type: BooksConstants.SET_SUBJECTS
  subjects: string[]
}

export type BooksState = Readonly<{
  books: Book[]
  isLoading: boolean
  subjects: string[]
}>

export type BooksActions = SearchBooks | SetBooks | SearchStart | SetSubjects
