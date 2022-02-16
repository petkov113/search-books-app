import { QuestionOutlineIcon, SearchIcon, ViewIcon } from '@chakra-ui/icons'
import { GridItem, VStack } from '@chakra-ui/react'
import { LinkIcon } from '.'

const Sidebar = () => {
  return (
    <GridItem as="nav" bg="gray.700" pt={3}>
      <VStack as="ul">
        <LinkIcon to="/explore" icon={<ViewIcon />} />
        <LinkIcon to="/" icon={<SearchIcon />} />
        <LinkIcon to="/about" icon={<QuestionOutlineIcon />} />
      </VStack>
    </GridItem>
  )
}

export default Sidebar
