import { BooksConstants } from 'redux/constants'
import { Book } from 'redux/types'

export type SearchBooks = {
  type: BooksConstants.SEARCH_BOOKS
  query: string
  page: number
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

export type SetCount = {
  type: BooksConstants.SET_COUNT
  count: number
}

export type BooksActions =
  | SearchBooks
  | SetBooks
  | SearchStart
  | SetSubjects
  | SetCount
