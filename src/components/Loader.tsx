import { FC } from 'react'
import { Center, Spinner } from '@chakra-ui/react'

const Loader: FC<{ isLoading: boolean }> = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <Center>
          <Spinner size="xl" color="teal.100" />
        </Center>
      )}
    </>
  )
}

export default Loader
