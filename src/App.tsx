import { ChakraProvider, Heading } from '@chakra-ui/react'

export const App = () => {
  return (
    <ChakraProvider>
      <Heading>React Kanban Board</Heading>
    </ChakraProvider>
  )
}
