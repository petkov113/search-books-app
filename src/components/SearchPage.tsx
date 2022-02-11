import { Center, GridItem, SimpleGrid, Spinner, VStack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { BooksConstants } from '../redux/constants'
import { useAppDispatch, useAppSelector } from '../redux/store'
import BookCard from './BookCard'
import NamedInput from './NamedInput'

const SearchPage = () => {
  const [titleValue, setTitleValue] = useState('')
  const [authorValue, setAuthorValue] = useState('')
  const [subjectValue, setSubjectValue] = useState('')
  const { books, isLoading } = useAppSelector((state) => state.books)
  const dispatch = useAppDispatch()

  const query = [
    { name: 'title', value: titleValue },
    { name: 'author', value: authorValue },
    { name: 'subject', value: subjectValue },
  ].reduce(
    (acc, { name, value }) => (value ? `${acc}&${name}=${value}` : acc),
    ''
  )

  useEffect(() => {
    query && dispatch({ type: BooksConstants.SEARCH_BOOKS, query })
  }, [query, dispatch])

  return (
    <GridItem bg="gray.900" p={3} overflow="auto">
      <VStack spacing={4}>
        <SimpleGrid minChildWidth="350px" spacing={3} p={3} w="100%">
          <NamedInput
            name="Title"
            placeholder="e.g. Harry Potter"
            value={titleValue}
            onChange={setTitleValue}
          />
          <NamedInput
            name="Author"
            placeholder="e.g. J. K. Rowling"
            value={authorValue}
            onChange={setAuthorValue}
          />
          <NamedInput
            name="Subject"
            placeholder="e.g. magic"
            value={subjectValue}
            onChange={setSubjectValue}
          />
        </SimpleGrid>
        <SimpleGrid
          minChildWidth="230px"
          spacing={6}
          p={4}
          w="100%"
          alignContent="center"
        >
          {isLoading ? (
            <Center>
              <Spinner size="xl" color="teal.100" />
            </Center>
          ) : (
            books.map((book) => <BookCard key={book.key} book={book} />)
          )}
        </SimpleGrid>
      </VStack>
    </GridItem>
  )
}

export default SearchPage
