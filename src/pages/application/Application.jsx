import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/header/Header'
import './Application.css'

const Application = () => {
  return (
    <div className='application'>
      
      <Header title="Applications" img1='https://images.pexels.com/photos/4353618/pexels-photo-4353618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' img2='https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
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