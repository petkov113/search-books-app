import {
  put as putUntyped,
  take as takeUntyped,
  PutEffect,
  TakeEffect,
} from 'redux-saga/effects'
import { Actions } from '../actionTypes'
import { Constants } from '../constants'

export const put = <T extends Actions>(action: T): PutEffect<T> =>
  putUntyped(action)

export const take = <T extends Constants | Constants[]>(
  action: T
): TakeEffect => takeUntyped(action)
