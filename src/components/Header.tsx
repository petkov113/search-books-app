import { useState } from 'react'
import { StarIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Spacer, useDisclosure } from '@chakra-ui/react'
import AuthForm from './AuthForm'

enum AuthType {
  LOG_IN = 'login',
  SIGN_UP = 'signup',
}

const Header = () => {
  const [authType, setAuthType] = useState<AuthType>(AuthType.LOG_IN)
  const {
    isOpen: isAuthModalOpen,
    onOpen: openAuthModal,
    onClose: onCloseAuthModal,
  } = useDisclosure()

  const onButtonClick = (type: AuthType) => () => {
    setAuthType(type)
    openAuthModal()
  }

  return (
    <>
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
          <Button
            colorScheme="teal"
            mr="4"
            onClick={onButtonClick(AuthType.SIGN_UP)}
          >
            Sign Up
          </Button>
          <Button colorScheme="teal" onClick={onButtonClick(AuthType.LOG_IN)}>
            Log in
          </Button>
        </Box>
      </Flex>
      <AuthForm
        isOpen={isAuthModalOpen}
        onClose={onCloseAuthModal}
        isLogin={authType === AuthType.LOG_IN}
      />
    </>
  )
}

export default Header
