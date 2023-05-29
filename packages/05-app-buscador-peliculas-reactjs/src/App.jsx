import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <form>
          <input type="text" name="search" placeholder="Buscar por Avengers, Star Wars, The Matrix..." />
          <button type="submit">Buscar</button>
        </form>
      </header>
      
      <main>
        Listado de peliculas
      </main>
      
    </>
  )
}

export default App
