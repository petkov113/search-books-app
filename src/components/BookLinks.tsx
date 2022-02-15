import { FC } from 'react'
import { Link, Wrap } from '@chakra-ui/react'
import { Tag } from '.'

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
          <Tag text="Amazon" />
        </Link>
      )}
      {goodreadsId && (
        <Link
          href={`https://www.goodreads.com/book/show/${goodreadsId}`}
          isExternal
        >
          <Tag text="GoodReads" />
        </Link>
      )}
      {isbn && (
        <Link href={`https://openlibrary.org/isbn/${isbn}`} isExternal>
          <Tag text="OL" />
        </Link>
      )}
      {librarythingId && (
        <Link
          href={`https://www.librarything.com/work/${librarythingId}`}
          isExternal
        >
          <Tag text="LibraryThing" />
        </Link>
      )}
    </Wrap>
  )
}

export default BookLinks
