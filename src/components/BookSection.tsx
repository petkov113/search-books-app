import { VStack, Text, Wrap, Tag } from '@chakra-ui/react'

const BookSection = ({ items, title }: { title: string; items: string[] }) => (
  <VStack spacing={2}>
    <Text>{title}</Text>
    <Wrap>
      {items.slice(0, 4).map((subject) => (
        <Tag colorScheme="whatsapp">{subject}</Tag>
      ))}
    </Wrap>
  </VStack>
)

export default BookSection
