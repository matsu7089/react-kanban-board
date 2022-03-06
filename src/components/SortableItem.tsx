import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Box, Text } from '@chakra-ui/react'

type Props = {
  id: string
}

export const SortableItem = (props: Props) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <Box
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      borderWidth="1px"
      borderRadius="lg"
      bg="white"
    >
      <Text m={4}>{props.id}</Text>
    </Box>
  )
}
