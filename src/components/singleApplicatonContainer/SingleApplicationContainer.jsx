import React from 'react'
import './SingleApplicationContainer.css'
import { Link } from 'react-router-dom'

const SingleApplicationContainer = ({url, title, desc, img}) => {
  return (
    <div className='singleApplicationContainer'>
        <div className='singleApplicationContainer-title'>
            <h2>{title}</h2>
        </div>
        <div className='singleApplicationContainer-image'>
            <img src={img} alt="" />
        </div>

        <div className='singleApplicationContainer-description'>
            <p>{desc}</p>
        </div>
        <Link to={url}>
            <div className='singleApplicationContainer-button'>
                <p>Try it!</p>
            </div>
        </Link>
        
        
    </div>
  )
}

export default SingleApplicationContainer