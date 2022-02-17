import { FC } from 'react'
import { ModalBody, Text, Box, Image, VStack, Flex } from '@chakra-ui/react'
import { BookLinks, Modal, BookSection } from '.'
import { Book } from '../redux/saga/sagas/books.saga'
import { BOOK_COVER_URL, COVERS_URL } from '../constants'

type BookModalProps = {
  book: Book
  isOpen: boolean
  onClose: () => void
}

const BookModal: FC<BookModalProps> = ({ isOpen, onClose, book }) => {
  return (
    <Modal
      title={book?.title || ''}
      isOpen={isOpen}
      onClose={onClose}
      size="xl"
    >
      <ModalBody pb={6} color="gray.200">
        <Flex wrap="wrap" justifyContent="center" pb={3}>
          <VStack mb={1}>
            <Box
              backgroundImage={`url(${BOOK_COVER_URL})`}
              backgroundSize="cover"
              backgroundPosition="center"
              maxW="250px"
              height="300px"
              mb={3}
            >
              {book.isbn?.[0] && (
                <Image
                  src={`${COVERS_URL}${book.isbn?.[0]}-L.jpg`}
                  alt="book cover"
                  width="100%"
                  objectFit="cover"
                  height="300px"
                />
              )}
            </Box>
            <Box
              color="gray.300"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="l"
              textAlign="center"
              textTransform="uppercase"
            >
              {book.author_name?.[0] || 'Unknown'}{' '}
              {book.first_publish_year && (
                <span>&bull; {book.first_publish_year}</span>
              )}
            </Box>
          </VStack>
          <VStack pr={3} pl={3} flex="1" spacing={25}>
            <VStack spacing={2}>
              <Text>Links</Text>
              <BookLinks
                isbn={book.isbn?.[0]}
                amazonId={book.id_amazon?.[0]}
                goodreadsId={book.id_goodreads?.[0]}
                librarythingId={book.id_librarything?.[0]}
              />
            </VStack>
            {book.subject?.length && (
              <BookSection title="Subjects" items={book.subject} />
            )}
            {book.person?.length && (
              <BookSection title="Persons" items={book.person} />
            )}
          </VStack>
        </Flex>
        {book.first_sentence?.[0] && (
          <Text as="cite">{book.first_sentence?.[0]}...</Text>
        )}
      </ModalBody>
    </Modal>
  )
}

export default BookModal
