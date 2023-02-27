import React from 'react'
import { Link } from 'react-router-dom'
import './Application.css'

const Application = () => {
  return (
    <div className='application'>
        <h1>Applications</h1>
        <div className="application-items">
            <div className="application-item">
              <Link to="/application/showwordexplainmeaning" style={{color:"inherit"}}>
                Show Word, Explain Meaning!
              </Link>                
            </div>
            <div className="application-item" style={{backgroundColor:'rgb(218, 186, 59)'}}>
              <Link to="/application/showwordexplainmeaningversiontwo" style={{color:"inherit"}}>
                Show Word, Explain Meaning! (Version 2)
              </Link>                
            </div>
            <div className="application-item" style={{backgroundColor:"rgb(104, 136, 93)"}}>
              <Link to="/application/showdescriptionexplainmeaning" style={{color:"inherit"}}>
                Show Description, Explain Meaning!
              </Link>                
            </div>
            <div className="application-item" style={{backgroundColor:"rgb(97, 64, 131)"}}>
              <Link to="/application/speakusingpicture" style={{color:"inherit"}}>
                Speak Using Pictures!
              </Link>                
            </div>
            <div className="application-item" style={{backgroundColor:"rgb(20, 100, 60)"}}>
              <Link to="/application/rewritesentence" style={{color:"inherit"}}>
                Rewrite Sentences!
              </Link>                
            </div>
        </div>
    </div>
  )
}

export default Application