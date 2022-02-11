import axios from 'axios'
import { call, cancelled, StrictEffect, takeLatest } from 'redux-saga/effects'
import { SEARCH_URL } from '../../constants/api'
import { BooksConstants } from '../constants'
import { SearchBooks } from '../actionTypes/books.types'
import { put } from './typedEffects'

type BooksApiResponse = { data: { numFound: number; docs: any[] } }
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
}

function* fetchBooks(
  action: SearchBooks
): Generator<StrictEffect, any, BooksApiResponse> {
  const controller = new AbortController()
  try {
    yield put({ type: BooksConstants.SEARCH_START })

    const response = yield call(
      axios.get,
      `${SEARCH_URL}/${encodeURI(action.query)}`,
      { signal: controller.signal }
    )

    yield put({ type: BooksConstants.SET_BOOKS, books: response.data.docs })
  } catch (e) {
    console.log(e)
  } finally {
    if (yield cancelled()) {
      controller.abort()
    }
  }
}

export function* booksSaga() {
  yield takeLatest(BooksConstants.SEARCH_BOOKS, fetchBooks)
}
