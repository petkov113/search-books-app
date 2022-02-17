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
import { SearchBooks } from '../../actionTypes/booksActions.types'
import { put } from '../utils/typedEffects'
import { RootState } from '../../reducers.ts/root.reducer'
import { createGeneralQuery } from '../../../utils'
import { Book, BooksApiResponse } from '../../types'

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
