import { Container, Grid, GridItem } from '@chakra-ui/react'
import Header from './components/Header'
import SearchPage from './components/SearchPage'

function App() {
  return (
    <Container maxW="100%" h="100vh" p={0}>
      <Grid h="100%" templateRows="auto 1fr" templateColumns="70px 1fr">
        <GridItem gridColumn="1/3">
          <Header />
        </GridItem>
        <GridItem bg="gray.700"></GridItem>
        <SearchPage />
      </Grid>
    </Container>
  )
}

export default App
