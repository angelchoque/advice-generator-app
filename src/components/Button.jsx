import React from 'react'
import '../styles/Button.scss'

const Button = ({onClick, disabled}) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className='button-advice'
      disabled={disabled}
    >
      <span className='icon-button'></span>
    </button>
  )
}

export default Button