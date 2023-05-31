

export const searchMovies = async ({ query }) => {
  
  if (query === '') return null
  
  try {
    const response = await fetch(`http://www.omdbapi.com/?apikey=7d1fad3e&s=${query}`)
    const json = await response.json()
    
    // mapeando los datos de la api
    const movies = json.Search
    
    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
  } catch (err) {
    throw new Error('Error buscando las peliculas.')
  }
}