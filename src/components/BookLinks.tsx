import { Link, Tag, Wrap } from '@chakra-ui/react'
import React, { FC } from 'react'

type BookLinksProps = {
  amazonId?: string
  isbn?: string
  goodreadsId?: string
  librarythingId?: string
}

const BookLinks: FC<BookLinksProps> = ({
  amazonId,
  isbn,
  goodreadsId,
  librarythingId,
}) => {
  console.log(amazonId)
  return (
    <Wrap mt={5} justifyContent="space-between">
      {amazonId && (
        <Link href={`https://www.amazon.com/s?k=${amazonId}`} isExternal>
          <Tag variant="solid" colorScheme="teal">
            Amazon
          </Tag>
        </Link>
      )}
      {goodreadsId && (
        <Link
          href={`https://www.goodreads.com/book/show/${goodreadsId}`}
          isExternal
        >
          <Tag variant="solid" colorScheme="teal">
            GoodReads
          </Tag>
        </Link>
      )}
      {isbn && (
        <Link href={`https://openlibrary.org/isbn/${isbn}`} isExternal>
          <Tag variant="solid" colorScheme="teal">
            OL
          </Tag>
        </Link>
      )}
      {librarythingId && (
        <Link
          href={`https://www.librarything.com/work/${librarythingId}`}
          isExternal
        >
          <Tag variant="solid" colorScheme="teal">
            LibraryThing
          </Tag>
        </Link>
      )}
    </Wrap>
  )
}

export default BookLinks
