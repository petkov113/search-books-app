import { useEffect, useRef, useState } from 'react'
import { Center, GridItem, SimpleGrid, VStack, Text } from '@chakra-ui/react'

import { BookCard, Loader, NamedInput } from 'components'
import { createSearchQuery } from 'utils'
import { useSearchBooks, useIsElementVisible } from 'hooks'

const SearchPage = () => {
  const [titleValue, setTitleValue] = useState('')
  const [authorValue, setAuthorValue] = useState('')
  const [subjectValue, setSubjectValue] = useState('')
  const { books, isLoading, setSearchQuery, fetchMore, page } = useSearchBooks()
  const query = createSearchQuery(titleValue, authorValue, subjectValue)

  const lastBookRef = useRef<HTMLDivElement | null>(null)
  useIsElementVisible(lastBookRef, fetchMore)

  const showHeading = !query
  const showBooks = (page === 1 && !isLoading) || page > 1

  useEffect(() => {
    setSearchQuery(query)
  }, [query, setSearchQuery])

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
          {showHeading && (
            <Center>
              <Text fontSize="xl" color="purple.400">
                All of the books in the world are here! 🎉
              </Text>
            </Center>
          )}
          {showBooks &&
            books.map((book, index) => (
              <BookCard
                key={book.key}
                book={book}
                lastBookRef={
                  index === books.length - 1 ? lastBookRef : undefined
                }
              />
            ))}
        </SimpleGrid>
      </VStack>
      <Loader isLoading={isLoading} />
    </GridItem>
  )
}

export default SearchPage
