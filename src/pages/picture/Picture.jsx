import React from 'react'
import { Link } from 'react-router-dom'
import './Picture.css'
import Header from '../../components/header/Header'
import CircleOption from '../../components/circleOption/CircleOption'

const Picture = () => {
  return (
    <div className='picture'>
      <Header title="Images" img1="https://images.pexels.com/photos/1226721/pexels-photo-1226721.jpeg?auto=compress&cs=tinysrgb&w=1600" img2="https://images.pexels.com/photos/185933/pexels-photo-185933.jpeg?auto=compress&cs=tinysrgb&w=1600"/>
      
      <p>You have an opportunity to choose whether you'd like to add a new image to a topic or only list them.</p>
      <div className="picture-options">
        <Link to="createpicture">
          <CircleOption title="Add a New Image" background='rgb(81, 135, 81)'/>
        </Link>
        <Link to="listpicture">
          <CircleOption title="List Images" background='rgb(131, 69, 131)' />
        </Link>
                

        </div>
    </div>
  )
}

export default Picture