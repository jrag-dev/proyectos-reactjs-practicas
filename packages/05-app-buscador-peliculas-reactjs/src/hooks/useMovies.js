import { useState, useRef, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies ({ query, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMovies, setErrorMovies] = useState(null)
  const previousSearch = useRef(query)
  
  const hasMovies = movies?.length > 0

  const getMovies = useCallback( async (query) => {
    console.log('getMovies: ', query)
      if (query === previousSearch.current) return
      
      try {
        setLoading(true)
        setErrorMovies(null)
        previousSearch.current = query
        const newMovies = await searchMovies({ query })
        setMovies(newMovies)
        console.log('newMovies: ', newMovies)
      } catch (err) {
        setErrorMovies(err.message)
      } finally {
        setLoading(false)
      }
  }, [])  
  
  const sortedMovies = useMemo(() => {
    return sort
    ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
    : movies
  }, [sort, movies])

  
  return {
    hasMovies,
    getMovies,
    errorMovies,
    movies: sortedMovies,
    loading
  }
}