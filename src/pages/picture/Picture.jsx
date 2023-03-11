import React from 'react'
import { Link } from 'react-router-dom'
import './Picture.css'
import Header from '../../components/header/Header'

const Picture = () => {
  return (
    <div className='picture'>
      <Header title="Images" img1="https://images.pexels.com/photos/1226721/pexels-photo-1226721.jpeg?auto=compress&cs=tinysrgb&w=1600" img2="https://images.pexels.com/photos/185933/pexels-photo-185933.jpeg?auto=compress&cs=tinysrgb&w=1600"/>
      
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