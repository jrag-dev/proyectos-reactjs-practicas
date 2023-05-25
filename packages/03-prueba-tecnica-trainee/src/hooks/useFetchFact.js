import { useState, useEffect } from 'react'

export function useFetchFact () {
  const [factString, setFact] = useState('The Cat Fact')
  
  useEffect(() => {
    const getRandomFact = async () => {
      try {
        const respFact = await fetch(import.meta.env.VITE_FACT_ENDPOINT_RANDOM_FACT)
        const { fact } = await respFact.json()
        if (!fact) throw new Error('Error fetching fact')
        setFact(prevState => (fact))
      } catch (err) {
        throw new Error('Error in Fact fetching')
      }
    }
    getRandomFact()
  }, [])
  
  return {
    factString
  }
}