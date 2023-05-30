
import responseMovies from '../mocks/with-results.json'

export function useMovies () {
  const movies = responseMovies.Search
  const hasMovies = movies?.length > 0
  
  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))
  
  return {
    hasMovies,
    mappedMovies
  }
}