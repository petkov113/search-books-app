import { FC } from 'react'
import { Tag as ChakraTag } from '@chakra-ui/react'

export const tagHoverStyles = {
  backgroundColor: 'purple.400',
  color: 'white',
  transition: 'all .2s',
}

const Tag: FC<{ text: string }> = ({ text }) => {
  return (
    <ChakraTag variant="solid" colorScheme="teal" _hover={tagHoverStyles}>
      {text}
    </ChakraTag>
  )
}

export default Tag
