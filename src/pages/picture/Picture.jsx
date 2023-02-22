import React from 'react'
import { Link } from 'react-router-dom'
import './Picture.css'

const Picture = () => {
  return (
    <div className='picture'>
      <h1>Images</h1>
      <p>You have an opportunity to choose whether you'd like to add a new image to a topic or only list them.</p>
      <div className="picture-options">
        <Link to="createpicture">
          <div className="picture-create" >
            <span>Add A New Image</span>
        </div>
        </Link>
        <Link to="listpicture">
          <div className="picture-list">
            <span>List Images</span>
          </div>
        </Link>
                

        </div>
    </div>
  )
}

export default Picture