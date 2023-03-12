import React from 'react'
import { Link } from 'react-router-dom'
import './Topic.css'
import Header from '../../components/header/Header'
import CircleOption from "../../components/circleOption/CircleOption"

const Topic = () => {

  return (
    <div className='topic'>
        <Header title="Topics" img1="https://images.pexels.com/photos/6588858/pexels-photo-6588858.jpeg?auto=compress&cs=tinysrgb&w=1600" img2="https://images.pexels.com/photos/14341303/pexels-photo-14341303.jpeg?auto=compress&cs=tinysrgb&w=1600"/>
        
      <p>You have an opportunity to choose whether you'd like to create a new topic or only list them</p>
      <div className="topic-options">
        <Link to="createtopic">
          <CircleOption title="Create a new topic" background='rgb(193, 147, 30)'/>
        </Link>
        <Link to="listtopic">
          <CircleOption title="List topic" background="rgb(40, 111, 57)"/>
          
        </Link>
                

        </div>
    </div>

  )
}

export default Topic