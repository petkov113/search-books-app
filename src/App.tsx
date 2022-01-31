import { Container } from '@chakra-ui/react'
import Header from './components/Header'

function App() {
  return (
    <div>
      <Container maxW="100%" h="100vh" backgroundColor="gray.900">
        <Header />
      </Container>
    </div>
  )
}

export default App
