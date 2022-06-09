import { useEffect, useState } from 'react'

const API = 'https://api.adviceslip.com/advice'

const useFetch = (count) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(API)
        const data = await response.json()
        setData(data)
      } catch (e) {
        console.error(e)
      }
    })()
  }, [count])

  return data
}

export default useFetch