import { useState, useEffect } from 'react'
import { useFetchFact } from './hooks/useFetchFact'
import { useFetchCat } from './hooks/useFetchCat'

import './App.css'

function App() {
  const { factString, handleClickNewFact } = useFetchFact()
  const { imagenCat } = useFetchCat(factString)
  
  return (
    <>
      <h2>Image Cat With three First Words Fact</h2>
      
      <button onClick={handleClickNewFact}>Get new Fact</button>
      
      <div className="paragraph-fact">
        {
          factString ? <p>{factString}</p> : 'cargando fact ...'
        }
      </div>
      {
        imagenCat && (
          <img
            className="img-cat"
            src={`${import.meta.env.VITE_URL_CAT}${imagenCat}`}
            alt={`Image extracted using the first three words for ${factString}`}
          />
        )
      }
    </>
  )
}

export default App
