import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = ({user}) => {
  return (
    <div className="home">
        {<div className='home-greeting'>Welcome dear <span>{user}</span>  on my WebSite!</div>}
        <p>We're going to have so much fun together during our English Journey.</p>
        <p>Please choose from the options below!</p>
        <div className="home-options">
            <Link to="/">
                <div className="home-application">
                    Applications
                </div>
            </Link>
            <Link to="/vocabulary">
                <div className="home-vocabulary">
                    Vocabulary
                </div>
            </Link>
        </div>
    </div>
    
  )
}

export default Home