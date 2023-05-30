import { useState } from 'react'

import { ListMoviesComponent } from './components/ListMoviesComponent'
import responseWithoutMovies from './mocks/without-results.json'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import './App.scss'



function App() {
  const { hasMovies, mappedMovies } = useMovies()
  const { query, error, handleChange, handleSubmit } = useSearch()
  
  /*
  // Forma no controlada
  const inputRef = useRef()
  
  const handleSubmit = (event) => {
    event.preventDefault()
    const fields = Object.fromEntries(new window.FormData(event.target))
    console.log(fields)
  }
  */
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
                  mappedMovies.map(movie => (
                    <ListMoviesComponent
                      key={movie.id}
                      movie={movie}
                    />
                  ))
                )
                : (
                  <p>{responseWithoutMovies.error}</p>
                )
            }
          </ul>
        </section>
      </main>
      
    </>
  )
}

export default App
