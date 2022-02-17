import { FC } from 'react'
import { Box, Image, useDisclosure } from '@chakra-ui/react'
import { BOOK_COVER_URL, COVERS_URL } from '../constants'
import { Book } from '../redux/saga/sagas/books.saga'
import { BookLinks } from './'
import BookModal from './BookModal'

type BookCardProps = {
  book: Book
}

const BookCard: FC<BookCardProps> = ({ book }) => {
  const {
    isOpen: isBookModalOpen,
    onOpen: openBookModal,
    onClose: onCloseBookModal,
  } = useDisclosure()

  return (
    <>
      <Box
        maxW="sm"
        borderRadius="lg"
        overflow="hidden"
        bg="purple.900"
        cursor="pointer"
        onClick={openBookModal}
      >
        <Box
          backgroundImage={`url(${BOOK_COVER_URL})`}
          backgroundSize="cover"
          backgroundPosition="center"
          height="300px"
        >
          {book.isbn?.[0] && (
            <Image
              src={`${COVERS_URL}${book.isbn?.[0]}-L.jpg`}
              alt="book cover"
              width="100%"
              objectFit="cover"
              height="300px"
              loading="lazy"
            />
          )}
        </Box>

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Box
              color="gray.400"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
            >
              {book.author_name?.[0] || 'Unknown'}{' '}
              {book.first_publish_year && (
                <span>&bull; {book.first_publish_year}</span>
              )}
            </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            color="gray.200"
          >
            {book.title}
          </Box>
          <BookLinks
            isbn={book.isbn?.[0]}
            amazonId={book.id_amazon?.[0]}
            goodreadsId={book.id_goodreads?.[0]}
            librarythingId={book.id_librarything?.[0]}
          />
        </Box>
      </Box>
      <BookModal
        book={book}
        isOpen={isBookModalOpen}
        onClose={onCloseBookModal}
      />
    </>
  )
}

export default BookCard
