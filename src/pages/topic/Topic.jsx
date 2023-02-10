import React from 'react'
import { Link } from 'react-router-dom'
import './Topic.css'

const Topic = () => {

  return (
    <div className='topic'>

        <h1>Topics</h1>
      <p>You have an opportunity to choose whether you'd like to create a new topic or only list the.m</p>
      <div className="topic-options">
        <Link to="createtopic">
          <div className="topic-create" >
            <span>Create A New Topic</span>
        </div>
        </Link>
        <Link to="listtopic">
          <div className="topic-list">
            <span>List Topics</span>
          </div>
        </Link>
                

        </div>
    </div>

  )
}

export default Topic