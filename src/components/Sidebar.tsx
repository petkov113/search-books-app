import { QuestionOutlineIcon, SearchIcon, ViewIcon } from '@chakra-ui/icons'
import { GridItem, VStack } from '@chakra-ui/react'
import { LinkIcon } from '.'

const Sidebar = () => {
  return (
    <GridItem as="nav" bg="gray.700" pt={3}>
      <VStack as="ul" spacing={3}>
        <LinkIcon to="/explore" title="Explore" icon={<ViewIcon />} />
        <LinkIcon to="/" title="Search" icon={<SearchIcon />} />
        <LinkIcon to="/about" title="About" icon={<QuestionOutlineIcon />} />
      </VStack>
    </GridItem>
  )
}

export default Sidebar
