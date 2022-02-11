import { FC } from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import NamedInput from './NamedInput'

type SearchInputProps = {
  value: string
  onChange: (value: string) => void
}

const SearchInputs: FC<SearchInputProps> = ({ value, onChange }) => (
  <SimpleGrid minChildWidth="350px" spacing={3} p={3} w="100%">
    <NamedInput
      name="Title"
      placeholder="e.g. Harry Potter"
      value={value}
      onChange={onChange}
    />
    <NamedInput
      name="Author"
      placeholder="e.g. J. K. Rowling"
      value={value}
      onChange={onChange}
    />
    <NamedInput
      name="Subject"
      placeholder="e.g. magic"
      value={value}
      onChange={onChange}
    />
  </SimpleGrid>
)

export default SearchInputs
