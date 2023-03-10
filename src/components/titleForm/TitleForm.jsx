import React from 'react'
import './TitleForm.css'

const TitleForm = ({title, img}) => {
  return (
    
    <div className='titleForm'>
        <div className="titleForm-container">
            <div className="titleForm-imgContainer">
            <img src={img} alt="flower" />
        </div>
        <div className="titleForm-imgContainer">
            <img src={img} alt="flower" />
        </div>
        <div className="titleForm-imgContainer">
            <img src={img} alt="flower" />
        </div>
        <div className="titleForm-imgContainer">
            <img src={img} alt="flower" />
        </div>
        
        <div className="titleForm-imgContainer">
            <img src={img} alt="flower" />
        </div>
        <div className="titleForm-imgContainer">
            <img src={img} alt="flower" />
        </div>
        <div className="titleForm-imgContainer">
            <img src={img} alt="flower" />
        </div>
        <div className="titleForm-imgContainer">
            <img src={img} alt="flower" />
        </div>
        </div>
        
        
        <h1>{title}</h1>
    
    </div>
  )
}

export default TitleForm