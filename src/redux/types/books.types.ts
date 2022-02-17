export type BooksApiResponse = { data: { numFound: number; docs: Book[] } }

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

export type BooksState = Readonly<{
  books: Book[]
  isLoading: boolean
  subjects: string[]
}>
