import { useState } from 'react'


export function useDragAndDrop (initialHeroes) {
  const [listHeroes, setListHeroes] = useState(initialHeroes)
  const [isDragging, setIsDragging] = useState(false)
  
  const handleDragging = (dragging) => setIsDragging(dragging)
  
  const handleUpdateListHeroes = (id, status) => {
    let card = listHeroes.find(item => item.id === id)
    
    if (card && card.status !== status) {
      card.status = status
      setListHeroes( prevState => (
        [
          card,
          ...prevState.filter(item => item.id !== id)
        ]
      ))
    }
  }
  
  return {
    isDragging,
    listHeroes,
    handleDragging,
    handleUpdateListHeroes
  }
}