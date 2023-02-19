import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import { useGlobalContext } from '../../context/context'

const Home = ({isPassedToWithAuthenticator, user, userAll, signOut}) => {
    if (!isPassedToWithAuthenticator) {
        throw new Error(`isPassedToWithAuthenticator was not provided`);
    }
    // const groups = userAll.signInUserSession.accessToken.payload["cognito:groups"];
    // const isAdmin = groups ? groups[0] === 'admin' : false;

    const {isAdmin} = useGlobalContext();
    // console.log('GROUPS:', groups[0]);
    // console.log(groups)
    // console.log(userAll);
    console.log('ISADMIN', isAdmin)
  return (
    <div className="home">
        {<div className='home-greeting'>Welcome on my WebSite, dear <span>{user}</span>!</div>}
        <p>We're going to have so much fun together during our English Journey.</p>
        <p>Please choose from the options below!</p>
        <div className="home-options">
            <Link to="/application">
                <div className="home-application">
                    Applications
                </div>
            </Link>
            <Link to="/vocabulary">
                <div className="home-vocabulary">
                    Vocabulary
                </div>
            </Link>
            {
                isAdmin && 
                <Link to="/topic">
                    <div className="home-topics">
                        Topics
                    </div>
                </Link>
            }
            
        </div>
    </div>
    
  )
}

export default Home