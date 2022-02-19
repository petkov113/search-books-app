import axios from 'axios'
import {
  call,
  cancel,
  cancelled,
  fork,
  select,
  StrictEffect,
} from 'redux-saga/effects'
import { BooksConstants } from '../../constants'
import { SearchBooks } from '../../actionTypes/booksActions.types'
import { put, take } from '../utils/typedEffects'
import { RootState } from '../../reducers.ts/root.reducer'
import { createGeneralQuery, isValidQuery } from '../../../utils'
import { Book, BooksApiResponse } from '../../types'
import { Task } from 'redux-saga'

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
  let task: Task | undefined
  while (true) {
    const action: SearchBooks = yield take(BooksConstants.SEARCH_BOOKS)

    if (task) {
      yield cancel(task)
    }

    if (isValidQuery(action.query)) {
      task = yield fork(fetchBooks, action)
    } else {
      yield put({
        type: BooksConstants.SET_BOOKS,
        books: [],
      })
    }
  }
}
