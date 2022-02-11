import { Center, GridItem, VStack, Link, Text } from '@chakra-ui/react'

const AboutPage = () => {
  return (
    <GridItem bg="gray.900" p={3}>
      <Center h="100%">
        <VStack>
          <Text color="gray.200">
            Powered by{' '}
            <Link color="purple.400" href="https://openlibrary.org/" isExternal>
              Open Library
            </Link>
          </Text>
          <Text color="gray.400">The application is for testing purposes only</Text>
        </VStack>
      </Center>
    </GridItem>
  )
}

export default AboutPage
