import { QuestionOutlineIcon, SearchIcon } from '@chakra-ui/icons'
import { Circle, GridItem, Tooltip, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const linkHoverStyles = { backgroundColor: 'teal.500', transition: 'all .2s' }

const Sidebar = () => {
  return (
    <GridItem as="nav" bg="gray.700" pt={3}>
      <VStack as="ul">
        <Tooltip
          label="Search books"
          fontSize="md"
          placement="right"
          bg="teal"
          hasArrow
        >
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
        </Tooltip>
        <Tooltip
          label="About"
          fontSize="md"
          placement="right"
          bg="teal"
          hasArrow
        >
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
        </Tooltip>
      </VStack>
    </GridItem>
  )
}

export default Sidebar
