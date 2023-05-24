import { CardItemComponent } from './CardItemComponent'


export function ContainerCardsComponent ({ type, heroes, isDragging, handleDragging, handleUpdateListHeroes}) {
  
  const handleDrop = (e) => {
    e.preventDefault()
    console.log(+e.dataTransfer.getData('text'))
    handleUpdateListHeroes(+e.dataTransfer.getData('text'), type)
    handleDragging(false)
  }
  
  const handleDragOver = e => e.preventDefault()
  
  return (
    <div 
      className={`layout-cards ${isDragging ? 'layout-dragging' : ''}`}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <p className="status">{type} hero</p>
      <div className="card-container">
        {
          heroes.map( hero => (
            type === hero.status && 
            <CardItemComponent
              key={hero.id}
              heroId={hero.id}
              name={hero.name}
              status={hero.status}
              handleDragging={handleDragging}
            />
          ))
        }
      </div>
    </div>
  )
}