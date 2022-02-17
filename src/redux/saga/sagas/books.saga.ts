import axios from 'axios'
import {
  all,
  call,
  cancelled,
  select,
  StrictEffect,
  takeLatest,
} from 'redux-saga/effects'
import { BooksConstants } from '../../constants'
import { SearchBooks } from '../../actionTypes/books.types'
import { put } from '../utils/typedEffects'
import { RootState } from '../../reducers.ts/root.reducer'
import { createGeneralQuery } from '../../../utils'

type BooksApiResponse = { data: { numFound: number; docs: Book[] } }

export type Book = {
  key: string
  title: string
  first_publish_year: 1900
  cover_i: 6998425
  author_key: string[]
  author_name?: string[]
  isbn?: string[]
  subject: string[]
  id_amazon: string[]
  id_goodreads: string[]
  id_librarything: string[]
  first_sentence: string[]
  person: string[]
  place: string[]
}

function* fetchBooks(action: SearchBooks): Generator<StrictEffect, any, any> {
  const controller = new AbortController()

  try {
    yield put({ type: BooksConstants.SEARCH_START })

    const { page, query } = action

    const response: BooksApiResponse = yield call(
      axios.get,
      createGeneralQuery(query),
      { signal: controller.signal, params: { page } }
    )

    const books: Book[] = yield select((state: RootState) => state.books.books)
    const updatedBooks = page
      ? [...books, ...response.data.docs]
      : response.data.docs

    yield put({
      type: BooksConstants.SET_BOOKS,
      books: updatedBooks,
    })
  } finally {
    if (yield cancelled()) {
      controller.abort()
    }
  }
}

export function* booksSaga() {
  yield all([takeLatest(BooksConstants.SEARCH_BOOKS, fetchBooks)])
}
