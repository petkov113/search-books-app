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
import { BookCard, Loader } from 'components'

import { CATEGORIES } from '@constants'
import { useIsElementVisible, useSubjectBooks } from 'hooks'
import { tagHoverStyles } from './Tag'
import { useRef } from 'react'

const ExplorePage = () => {
  const { books, isLoading, subjects, setSubjects, fetchMore, page } =
    useSubjectBooks()
  const showBooks = (page === 1 && !isLoading) || page > 1

  const lastBookRef = useRef<HTMLDivElement | null>(null)
  useIsElementVisible(lastBookRef, fetchMore)

  const handleTagClick = (category: string) => {
    const updatedSubjects = subjects.includes(category)
      ? subjects.filter((s) => s !== category)
      : [...subjects, category]

    setSubjects(updatedSubjects)
  }

  return (
    <GridItem bg="gray.900" p={6} overflow="auto">
      <VStack spacing={6}>
        <Center>
          <Heading color="teal.200">What are your interests? 🤔</Heading>
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
              _hover={tagHoverStyles}
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

export default ExplorePage
