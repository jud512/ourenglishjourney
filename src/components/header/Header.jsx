import React from 'react'
import './Header.css'

const Header = ({title, img1, img2}) => {
  return (
    <div className='header-container'>
        <div className="header-container-img">
            <img src={img1} alt="" />
        </div>
        <div className="header-container-title">
            <h1>{title}</h1>
        </div>
        <div className="header-container-img">
            <img src={img2} alt="" />
        </div>
    </div>
  )
}

export default Header