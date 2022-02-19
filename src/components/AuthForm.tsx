import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { AtSignIcon, InfoOutlineIcon, LockIcon } from '@chakra-ui/icons'
import {
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  ModalBody,
  ModalFooter,
  Text,
} from '@chakra-ui/react'

import { Modal } from 'components'
import { EMAIL_REGEX } from '@constants'
import { AuthConstants } from 'redux/constants'
import { useAppSelector, useAppDispatch } from 'redux/store'

type AuthFormProps = {
  isOpen: boolean
  onClose: () => void
  isLogin: boolean
}

type Inputs = {
  email: string
  password: string
  confirmedPassword?: string
  termsAccepted?: boolean
}

const AuthForm: FC<AuthFormProps> = ({ isOpen, onClose, isLogin }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm<Inputs>({
    mode: 'onChange',
  })

  const { isLoading, error } = useAppSelector((store) => store.auth)
  const dispatch = useAppDispatch()

  const onPaste = (e: any) => {
    e.preventDefault()
    return false
  }

  const onSubmit: SubmitHandler<Inputs> = ({ email, password }) => {
    dispatch({ type: AuthConstants.AUTH_REQUEST, id: email, password })
  }

  const onCancel = () => {
    dispatch({ type: AuthConstants.AUTH_CANCEL })
    onClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={isLogin ? 'Log In' : 'Sign Up'}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalBody pb={6}>
          <FormControl isInvalid={Boolean(errors.email)}>
            <FormLabel htmlFor="email" color="gray.200">
              Email
            </FormLabel>
            <InputGroup color="gray.50">
              <InputLeftElement
                pointerEvents="none"
                children={<AtSignIcon color="gray.300" />}
              />
              <Input
                id="email"
                type="email"
                placeholder="Enter an valid email"
                {...register('email', {
                  required: {
                    value: true,
                    message: 'Email is required',
                  },
                  pattern: {
                    value: EMAIL_REGEX,
                    message: 'Email is invalid',
                  },
                })}
              />
            </InputGroup>
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl mt={4} isInvalid={!!errors.password}>
            <FormLabel htmlFor="password" color="gray.200">
              Password
            </FormLabel>
            <InputGroup color="gray.50">
              <InputLeftElement
                pointerEvents="none"
                children={<LockIcon color="gray.300" />}
              />
              <Input
                id="password"
                type="password"
                placeholder="Must have at least 6 characters"
                {...register('password', {
                  required: {
                    value: true,
                    message: 'Password is required',
                  },
                  minLength: {
                    value: 6,
                    message: 'Password must have at least 6 characters',
                  },
                })}
              />
            </InputGroup>
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>
          {!isLogin && (
            <>
              <FormControl mt={4} isInvalid={!!errors.confirmedPassword}>
                <FormLabel htmlFor="passwordConfirmation" color="gray.200">
                  Password confirmation
                </FormLabel>
                <InputGroup color="gray.50">
                  <InputLeftElement
                    pointerEvents="none"
                    children={<LockIcon color="gray.300" />}
                  />
                  <Input
                    id="passwordConfirmation"
                    type="password"
                    placeholder="Confirm your password"
                    onPaste={onPaste}
                    {...register('confirmedPassword', {
                      required: {
                        value: true,
                        message: 'Password confirmation is required',
                      },
                      minLength: {
                        value: 6,
                        message: 'Password must have at least 6 characters',
                      },
                      pattern: {
                        value: new RegExp(watch().password),
                        message: "The passwords don't match",
                      },
                    })}
                  />
                </InputGroup>
                <FormErrorMessage>
                  {errors.confirmedPassword && errors.confirmedPassword.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl mt={6}>
                <Checkbox
                  color="gray.50"
                  {...register('termsAccepted', {
                    required: true,
                  })}
                >
                  I agree with Terms and Conditions
                </Checkbox>
              </FormControl>
            </>
          )}
          {error && (
            <Text color="red.400" pt={4} align="center">
              <InfoOutlineIcon h={5} w={5} mr={2} />
              {error}
            </Text>
          )}
        </ModalBody>
        <ModalFooter>
          <Button
            disabled={!isDirty || !isValid || isLoading}
            colorScheme="blue"
            mr={3}
            isLoading={isLoading}
            type="submit"
          >
            Sumbmit
          </Button>
          <Button onClick={onCancel}>Cancel</Button>
        </ModalFooter>
      </form>
    </Modal>
  )
}

export default AuthForm
