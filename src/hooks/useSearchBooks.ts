import { useCallback, useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from 'redux/store'
import { BooksConstants } from 'redux/constants'
import { isLastPage } from 'utils'

const useSearchBooks = () => {
  const [page, setPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')

  const { books, isLoading, count } = useAppSelector((state) => state.books)
  const dispatch = useAppDispatch()

  const fetchBooks = useCallback(
    (query: string, page = 1) =>
      dispatch({ type: BooksConstants.SEARCH_BOOKS, query, page }),
    [dispatch]
  )

  const fetchMore = useCallback(() => {
    !isLoading && !isLastPage(count, page) && setPage((page) => ++page)
  }, [isLoading, setPage, page, count])

  useEffect(() => {
    fetchBooks(searchQuery, page)
  }, [searchQuery, fetchBooks, page])

  return {
    books,
    isLoading,
    fetchMore,
    page,
    setSearchQuery,
  }
}

export default useSearchBooks
