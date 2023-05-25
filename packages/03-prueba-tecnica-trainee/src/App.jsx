import { useState, useEffect } from 'react'
import { useFetchFact } from './hooks/useFetchFact'
import { useFetchCat } from './hooks/useFetchCat'

import './App.css'


//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`

function App() {
  const { factString } = useFetchFact()
  const { imagenCat } = useFetchCat(factString)

  return (
    <>
      <h2>Image Cat With three First Words Fact</h2>
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
