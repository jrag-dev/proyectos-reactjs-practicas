

export function CardItemComponent ({ heroId, name, status, handleDragging }) {
  
  const handleDragStart = (e) => {
    e.dataTransfer.setData('text', `${heroId}`)
    handleDragging(true)
  }
  
  const handleDragEnd = (e) => {
    handleDragging(false)
  }
  
  return (
    <div 
      className="card-item"
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <p>{name}</p>
    </div>
  )
}