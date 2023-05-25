import { useState, useEffect } from 'react'
import './App.css'


const FACT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`

function App() {
  
  const [factString, setFact] = useState('')
  const [imagenCat, setImagenCat] = useState(null)
  
  useEffect(() => {
    const getRandomFact = async () => {
      const respFact = await fetch(FACT_ENDPOINT_RANDOM_FACT)
      const { fact } = await respFact.json()
      setFact(prevState => (fact))
    }
    getRandomFact()
  }, [])
  
    useEffect(() => {
      if (!factString) return
    
      const getRandomFact = async () => {
      const threeFirstWords = factString.split(' ').slice(0, 3).join(' ')
      const respCat = await fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
      const { url } = await respCat.json()
      console.log(url)
      setImagenCat(url)
    }
    
    getRandomFact()
  }, [factString])

  return (
    <>
      <h2>Recuperando datos de la api</h2>
      {
        factString ? <p>{factString}</p> : 'cargando fact ...'
      }
      {
        imagenCat && (
          <img
            src={`https://cataas.com/${imagenCat}`}
            alt={`Image extracted using the first three words for ${factString}`}
          />
        )
      }
    </>
  )
}

export default App
