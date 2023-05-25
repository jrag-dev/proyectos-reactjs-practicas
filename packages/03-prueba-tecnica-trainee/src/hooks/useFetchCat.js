import { useState, useEffect } from 'react'

export function useFetchCat (factString) {
  const [imagenCat, setImagenCat] = useState(null)
  
  useEffect(() => {
    if (!factString) return
    
    const getRandomFact = async () => {
      try {
        const threeFirstWords = factString.split(' ').slice(0, 3).join(' ')
        const respCat = await fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=300&color=red&json=true`)
        const { url } = await respCat.json()
        console.log(url)
        setImagenCat(url)
      } catch (err) {
        throw new Error('Error in Cat Fetching')
      }
    }
    getRandomFact()
  }, [factString])
  
  return {
    imagenCat
  }
}