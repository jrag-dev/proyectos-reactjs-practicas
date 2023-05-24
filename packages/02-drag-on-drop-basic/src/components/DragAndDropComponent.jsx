import { useState } from 'react'
import { ContainerCardsComponent } from './ContainerCardsComponent'
import { heroes } from '../services/heroes.js'
import { useDragAndDrop } from '../hooks/useDragAndDrop'

const typesHero = [
  {
    id: 1,
    type: 'good'
  },
    {
    id: 2,
    type: 'normal'
  },
    {
    id: 3,
    type: 'bad'
  }
]

export function DragAndDropComponent () {

  const {
    isDragging,
    listHeroes,
    handleDragging,
    handleUpdateListHeroes
  } = useDragAndDrop(heroes)
  
  return (
    <div className="grid">
      {
        typesHero.map( typeHero => (
          <ContainerCardsComponent
            key={typeHero.id}
            type={typeHero.type}
            heroes={listHeroes}
            
            isDragging={isDragging}
            handleDragging={handleDragging}
            handleUpdateListHeroes={handleUpdateListHeroes}
          />
        ))
      }
    </div>
  )
}