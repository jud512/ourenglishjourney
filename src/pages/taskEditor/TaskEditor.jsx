import React from 'react'
import './TaskEditor.css'
import { Link } from 'react-router-dom'


const TaskEditor = () => {
  return (
    <div className='taskEditor'>
        <h1>Task Editor</h1> 
        <p>Which task would you like to edit?</p>   
        <div className="taskEditor-options">
            <Link to="editrewritesentence">
                <div className="taskEditor-rewrite" >
                    <span>Rewrite Sentence App Database</span>
                </div>
            </Link>
            <Link to="/">
                <div className="taskEditor-another">
                    <span>Another App database </span>
                </div>
            </Link>
                

        </div>

    </div>

  )
}

export default TaskEditor