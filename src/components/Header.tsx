import { StarIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Spacer } from '@chakra-ui/react'

const Header = () => {
  return (
    <Flex
      p={3}
      width="100%"
      left={0}
      borderBottom="1px"
      borderColor="gray.700"
      pos="fixed"
    >
      <StarIcon w={7} h={7} color="green.300" />
      <Spacer />
      <Box>
        <Button colorScheme="teal" mr="4">
          Sign Up
        </Button>
        <Button colorScheme="teal">Log in</Button>
      </Box>
    </Flex>
  )
}

export default Header
