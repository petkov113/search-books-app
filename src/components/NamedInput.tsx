import { FC } from 'react'
import { InputGroup, InputLeftAddon, Input } from '@chakra-ui/react'

type NamedInputProps = {
  name: string
  placeholder: string
  value: string
  onChange: (value: string) => void
}

const NamedInput: FC<NamedInputProps> = ({
  name,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <InputGroup>
      <InputLeftAddon
        children={name}
        bg="gray.600"
        color="gray.300"
        border={0}
      />
      <Input
        placeholder={placeholder}
        bg="gray.700"
        color="gray.200"
        border="none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </InputGroup>
  )
}

export default NamedInput
