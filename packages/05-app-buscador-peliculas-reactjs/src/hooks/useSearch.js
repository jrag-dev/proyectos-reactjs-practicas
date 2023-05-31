import { useState, useCallback } from 'react'
import { useMovies } from './useMovies'

export function useSearch () {
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)
  const { getMovies } = useMovies({ query })
  
  const handleChange = event => {
    const newQuery = event.target.value
    
    if (newQuery.startsWith(' ')) return
    setQuery(newQuery)

    if (newQuery.match(/^\d+$/)) {
      setError('No se puede buscar una pelicula por un número.')
      return
    }
    
    if (newQuery.length < 3) {
      setError('El campo no debe tener al menos 3 caracteres')
      return
    }
    setError(null)
  }
  
  return {
    query,
    error,
    handleChange,
    setQuery
  }
}