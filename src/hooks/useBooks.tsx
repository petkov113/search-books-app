import { useCallback, useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from 'redux/store'
import { BooksConstants } from 'redux/constants'
import { createSubjectsQuery } from 'utils'
import { Book } from 'redux/types'

const useBooks = () => {
  const { books, isLoading, subjects } = useAppSelector((state) => state.books)
  const dispatch = useAppDispatch()

  const [searchQuery, setSearchQuery] = useState('')

  const fetchBooks = useCallback(
    (query: string) => dispatch({ type: BooksConstants.SEARCH_BOOKS, query }),
    [dispatch]
  )

  const setBooks = useCallback(
    (books: Book[]) => dispatch({ type: BooksConstants.SET_BOOKS, books }),
    [dispatch]
  )

  const setSubjects = useCallback(
    (subjects: string[]) =>
      dispatch({ type: BooksConstants.SET_SUBJECTS, subjects }),
    [dispatch]
  )

  useEffect(() => {
    fetchBooks(createSubjectsQuery(subjects))
  }, [subjects, fetchBooks, setBooks])

  useEffect(() => {
    fetchBooks(searchQuery)
  }, [fetchBooks, searchQuery])

  return {
    books,
    isLoading,
    fetchBooks,
    setBooks,
    subjects,
    setSubjects,
    setSearchQuery,
  }
}

export default useBooks
