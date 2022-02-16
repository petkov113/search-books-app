import { FC } from 'react'
import {
  Modal as ChakraModal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalProps as ChakraModalProps,
} from '@chakra-ui/react'

type ModalProps = {
  title: string
  isOpen: boolean
  onClose: () => void
}

const Modal: FC<ModalProps & ChakraModalProps> = ({
  title,
  children,
  onClose,
  isOpen = false,
  ...props
}) => {
  return (
    <ChakraModal
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick
      closeOnEsc
      {...props}
    >
      <ModalOverlay />
      <ModalContent backgroundColor="gray.700">
        <ModalHeader color="teal.200">{title}</ModalHeader>
        <ModalCloseButton color="gray.100" />
        {children}
      </ModalContent>
    </ChakraModal>
  )
}

export default Modal
