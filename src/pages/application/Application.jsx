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
        </div>
    </div>
  )
}

export default Application