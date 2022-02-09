import { SearchIcon } from '@chakra-ui/icons'
import {
  Container,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react'
import Header from './components/Header'

function App() {
  return (
    <Container maxW="100%" h="100vh" p={0}>
      <Grid h="100%" templateRows="auto 1fr" templateColumns="70px 1fr">
        <GridItem gridColumn="1/3">
          <Header />
        </GridItem>
        <GridItem bg="gray.700"></GridItem>
        <GridItem bg="gray.900" p={3}>
          <InputGroup color="gray.100">
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.400" />}
            />
            <Input
              placeholder="Search for books"
              bg="gray.700"
              border="none"
              width="400px"
            />
          </InputGroup>
        </GridItem>
      </Grid>
    </Container>
  )
}

export default App
