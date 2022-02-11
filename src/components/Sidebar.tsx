import { QuestionOutlineIcon, SearchIcon } from '@chakra-ui/icons'
import { Center, Circle, GridItem, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const linkHoverStyles = { backgroundColor: 'teal.500', transition: 'all .2s' }

const Sidebar = () => {
  return (
    <GridItem as="nav" bg="gray.700" pt={3}>
      <VStack as="ul">
        <Link to="/">
          <Circle
            size="40px"
            bg="teal.700"
            color="white"
            _hover={linkHoverStyles}
          >
            <SearchIcon />
          </Circle>
        </Link>
        <Link to="/about">
          <Circle
            size="40px"
            bg="teal.700"
            color="white"
            _hover={linkHoverStyles}
          >
            <QuestionOutlineIcon />
          </Circle>
        </Link>
      </VStack>
    </GridItem>
  )
}

export default Sidebar
