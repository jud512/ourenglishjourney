import React from 'react'
import './Message.css'

const Message = ({message, onRequestClose}) => {
  return (
    <div className='message'>
        <h4>{message}</h4>
        <button onClick={onRequestClose}>OK</button>
    </div>
  )
}

export default Message