import { useState } from 'react'
import { DndContext, DragEndEvent } from '@dnd-kit/core'
import { arrayMove, SortableContext } from '@dnd-kit/sortable'

import { Box, ChakraProvider } from '@chakra-ui/react'
import { SortableItem } from './components/SortableItem'

export const App = () => {
  const [items, setItems] = useState(['1', '2', '3', '4', '5'])

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (!over || active.id === over.id) {
      return
    }

    setItems((items) => {
      const oldIndex = items.indexOf(active.id)
      const newIndex = items.indexOf(over.id)
      return arrayMove(items, oldIndex, newIndex)
    })
  }

  return (
    <ChakraProvider>
      <Box m={2}>
        <DndContext onDragEnd={handleDragEnd}>
          <SortableContext items={items}>
            {items.map((id) => (
              <SortableItem key={id} id={id} />
            ))}
          </SortableContext>
        </DndContext>
      </Box>
    </ChakraProvider>
  )
}
