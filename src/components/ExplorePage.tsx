import { useEffect } from 'react'
import {
  Center,
  GridItem,
  Heading,
  SimpleGrid,
  Tag,
  TagLabel,
  VStack,
  Wrap,
} from '@chakra-ui/react'
import { BookCard, Loader } from '.'
import { CATEGORIES } from '../constants'
import { BooksConstants } from '../redux/constants'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { createExploreQuery } from '../utils'

const ExplorePage = () => {
  const { books, isLoading, subjects } = useAppSelector((store) => store.books)
  const dispatch = useAppDispatch()

  const handleTagClick = (category: string) => {
    const updatedSubjects = subjects.includes(category)
      ? subjects.filter((s) => s !== category)
      : [...subjects, category]

    dispatch({
      type: BooksConstants.SET_SUBJECTS,
      subjects: updatedSubjects,
    })
  }

  useEffect(() => {
    subjects.length
      ? dispatch({
          type: BooksConstants.SEARCH_BOOKS,
          query: createExploreQuery(subjects),
        })
      : dispatch({
          type: BooksConstants.SET_BOOKS,
          books: [],
        })
  }, [subjects, dispatch])

  return (
    <GridItem bg="gray.900" p={6} overflow="auto">
      <VStack spacing={6}>
        <Center>
          <Heading color="teal.200">What Are Your Interests?</Heading>
        </Center>
        <Wrap spacing={4}>
          {CATEGORIES.map((category) => (
            <Tag
              key={category}
              borderRadius="full"
              size="lg"
              variant={subjects.includes(category) ? 'solid' : 'outline'}
              colorScheme="purple"
              cursor="pointer"
              onClick={() => handleTagClick(category)}
            >
              <TagLabel textTransform="capitalize">{category}</TagLabel>
            </Tag>
          ))}
        </Wrap>
        <SimpleGrid
          minChildWidth="230px"
          spacing={6}
          p={1}
          w="100%"
          alignContent="center"
        >
          {isLoading ? (
            <Loader />
          ) : (
            books.map((book) => <BookCard key={book.key} book={book} />)
          )}
        </SimpleGrid>
      </VStack>
    </GridItem>
  )
}

export default ExplorePage
