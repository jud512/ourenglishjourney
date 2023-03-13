import React from 'react'
import './TaskEditor.css'
import { Link } from 'react-router-dom'
import Header from '../../components/header/Header'
import CircleOption from '../../components/circleOption/CircleOption'


const TaskEditor = () => {
  return (
    <div className='taskEditor'>
        <Header title="Task Editor" img1="https://images.pexels.com/photos/235732/pexels-photo-235732.jpeg?auto=compress&cs=tinysrgb&w=1600" img2="https://images.pexels.com/photos/1586950/pexels-photo-1586950.jpeg?auto=compress&cs=tinysrgb&w=1600"/>
        
        <p>Which task would you like to edit?</p>   
        <div className="taskEditor-options">
            <Link to="editrewritesentence">
                <CircleOption title="Rewrite Sentence App Database" background="orange"/>
                
            </Link>
            <Link to="/">
                <CircleOption title="Another App database" background="darkblue"/>
                
            </Link>
                

        </div>

    </div>

  )
}

export default TaskEditor