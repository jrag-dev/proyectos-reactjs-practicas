import { useState, useEffect } from 'react'

import { ListMoviesComponent } from './components/ListMoviesComponent'
import responseWithoutMovies from './mocks/without-results.json'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import './App.scss'



function App() {
  const [sort, setSort] = useState(false)
  const { query, error, handleChange, setQuery } = useSearch()
  const { hasMovies, movies, getMovies, loading } = useMovies({ query, sort })
  
  const handleSort = () => {
    setSort(!sort)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    
    if (query === '') return
    
    getMovies(query)
    
    setQuery('')
  }
  
  return (
    <>
      <header className="header">
        <h1>Buscador de Peliculas</h1>
        <form onSubmit={handleSubmit}>
          <div className="fields">
            <input
              name="query" 
              type="text" 
              placeholder="Buscar por Avengers, Star Wars, The Matrix..."
              onChange={handleChange}
              value={query} 
            />
            <input type="checkbox" onChange={handleSort} checked={sort} />
            <button type="submit">Buscar</button>
          </div>
          {
            error && (
              <p><span>{error}</span></p>
            )
          }
        </form>
      </header>
      
      <main>
        <section className="movies">
          <h2>Listado de peliculas</h2>
        
          <ul className="movies-list">
            {            
              hasMovies 
                ? (
                  movies.map(movie => (
                    <ListMoviesComponent
                      key={movie.id}
                      movie={movie}
                    />
                  ))
                )
                : loading ? (
                  <p>cargando...</p>
                ) 
                : (
                  <p>Busca las peliculas por su nombre...</p>
                )
            }
          </ul>
        </section>
      </main>
      
    </>
  )
}

export default App
