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
import { useBooks } from '../hooks'

const ExplorePage = () => {
  const { books, isLoading, subjects, setSubjects } = useBooks()

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
          <Heading color="teal.200">What are your interests?</Heading>
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
