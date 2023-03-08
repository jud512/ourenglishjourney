import React from 'react'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import './BackTo.css'

const BackTo = ({url}) => {
  return (
     <div classname='backto' style={{width:'fit-content'}}>
          <Link to={url} >
          <div className='back-to-somewhere'>            
              <MdKeyboardArrowLeft size={30}/>
              <p> Back to</p>
              <div className="img-container-to-application">                
                  <img src="../options/applications-wb.png" alt="app" />
              </div>             
              </div>
          </Link>
        </div>
  )
}

export default BackTo