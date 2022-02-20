import { useEffect, useState } from 'react'
import {
  Box,
  Button,
  Center,
  Flex,
  GridItem,
  Heading,
  Spacer,
  useDisclosure,
} from '@chakra-ui/react'

import { AuthConstants } from 'redux/constants'
import { useAppDispatch } from 'redux/store'
import { useAuthState } from 'hooks'
import { AuthForm } from 'components'

enum AuthType {
  LOG_IN = 'login',
  SIGN_UP = 'signup',
}

const Header = () => {
  const [authType, setAuthType] = useState<AuthType>(AuthType.LOG_IN)
  const isAuth = useAuthState()
  const {
    isOpen: isAuthModalOpen,
    onOpen: openAuthModal,
    onClose: onCloseAuthModal,
  } = useDisclosure()
  const dispatch = useAppDispatch()

  const onButtonClick = (type: AuthType) => () => {
    setAuthType(type)
    openAuthModal()
  }

  const logout = () => {
    dispatch({
      type: AuthConstants.AUTH_LOGOUT,
    })
  }

  useEffect(() => {
    isAuth && onCloseAuthModal()
  }, [isAuth, onCloseAuthModal])

  return (
    <GridItem gridColumn="1/3">
      <Flex p={3} width="100%" bg="gray.800">
        <Center>
          <Heading as="h1" size="lg" color="purple.400">
            📚 Book App
          </Heading>
        </Center>
        <Spacer />
        <Box>
          {isAuth ? (
            <Button
              colorScheme="red"
              mr="4"
              variant="outline"
              onClick={logout}
              marginRight={0}
            >
              Logout
            </Button>
          ) : (
            <>
              <Button
                colorScheme="teal"
                mr="4"
                onClick={onButtonClick(AuthType.SIGN_UP)}
              >
                Sign Up
              </Button>
              <Button
                colorScheme="teal"
                onClick={onButtonClick(AuthType.LOG_IN)}
              >
                Log in
              </Button>
            </>
          )}
        </Box>
      </Flex>
      <AuthForm
        isOpen={isAuthModalOpen}
        onClose={onCloseAuthModal}
        isLogin={authType === AuthType.LOG_IN}
      />
    </GridItem>
  )
}

export default Header
