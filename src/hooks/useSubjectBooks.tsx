import { useCallback, useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from 'redux/store'
import { BooksConstants } from 'redux/constants'
import { isLastPage, createSubjectsQuery } from 'utils'

const useSubjectBooks = () => {
  const [page, setPage] = useState(1)
  const { books, isLoading, subjects, count } = useAppSelector(
    (state) => state.books
  )
  const dispatch = useAppDispatch()

  const fetchBooks = useCallback(
    (query: string, page = 1) =>
      dispatch({ type: BooksConstants.SEARCH_BOOKS, query, page }),
    [dispatch]
  )

  const setSubjects = useCallback(
    (subjects: string[]) =>
      dispatch({ type: BooksConstants.SET_SUBJECTS, subjects }),
    [dispatch]
  )

  const fetchMore = useCallback(() => {
    !isLoading && !isLastPage(count, page) && setPage((page) => ++page)
  }, [isLoading, setPage, count, page])

  useEffect(() => {
    fetchBooks(createSubjectsQuery(subjects))
  }, [subjects, fetchBooks, page])

  return {
    books,
    isLoading,
    fetchMore,
    page,
    subjects,
    setSubjects,
  }
}

export default useSubjectBooks
