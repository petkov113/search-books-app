import { AtSignIcon, LockIcon } from '@chakra-ui/icons'
import {
  Button,
  Checkbox,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react'
import { FC } from 'react'
import Modal from './Modal'

const AuthForm: FC<{
  isOpen: boolean
  onClose: () => void
  isLogin: boolean
}> = ({ isOpen, onClose, isLogin }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={isLogin ? 'Log In' : 'Sign Up'}
    >
      <ModalBody pb={6}>
        <FormControl>
          <InputGroup color="gray.50">
            <InputLeftElement
              pointerEvents="none"
              children={<AtSignIcon color="gray.300" />}
            />
            <Input type="email" placeholder="Email" />
          </InputGroup>
        </FormControl>
        <FormControl mt={4}>
          <InputGroup color="gray.50">
            <InputLeftElement
              pointerEvents="none"
              children={<LockIcon color="gray.300" />}
            />
            <Input type="password" placeholder="Password" />
          </InputGroup>
        </FormControl>
        {!isLogin && (
          <>
            <FormControl mt={4}>
              <InputGroup color="gray.50">
                <InputLeftElement
                  pointerEvents="none"
                  children={<LockIcon color="gray.300" />}
                />
                <Input type="password" placeholder="Confirm your password" />
              </InputGroup>
            </FormControl>
            <FormControl mt={6}>
              <Checkbox size="lg" color="gray.50">
                I agree with Terms and Conditions
              </Checkbox>
            </FormControl>
          </>
        )}
      </ModalBody>
      <ModalFooter>
        <Button colorScheme="blue" mr={3}>
          Save
        </Button>
        <Button onClick={onClose}>Cancel</Button>
      </ModalFooter>
    </Modal>
  )
}

export default AuthForm
