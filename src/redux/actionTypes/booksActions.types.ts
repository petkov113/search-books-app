import { BooksConstants } from '../constants'
import { Book } from '../types'

export type SearchBooks = {
  type: BooksConstants.SEARCH_BOOKS
  query: string
  page?: number
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

export type BooksActions = SearchBooks | SetBooks | SearchStart | SetSubjects
