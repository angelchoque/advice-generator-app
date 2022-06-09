import React, { useState } from 'react'
import Button from '../components/Button'
import useFetch from '../hooks/useFetch'

import '../styles/Card.scss'

const Card = () => {
  const [count, setCount] = useState(1)
  const [disable, setDisable] = useState(false);
  const data = useFetch(count)

  const handleOnClick = () => {
    setCount(count+1)
    setDisable(true)
    setTimeout(() => setDisable(false), 2000)
  }
  
  return (
    <>
      <div className='card'>
        <h4 className='card__advice-id'>ADVICE #{data?.slip?.id}</h4>
        <p className='card__advice-text'>"{data?.slip?.advice}"</p>
        <span className="card__pattern"></span>
        <Button onClick={handleOnClick} disabled={disable} />
      </div>
    </>
  )
}

export default Card