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
    <div className="home slide-in-blurred-bottom">
        <div className="home-image-container">
            <div className="home-image-happiness">
                <img src="https://images.pexels.com/photos/2597365/pexels-photo-2597365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            </div>
            <div className='home-logoimg-container '>
                <img src="./ourenglishjourney3-wb.png" alt="Logo Image" />
            </div>
            <div className='home-image-happiness '>
                <img src="https://images.pexels.com/photos/1116302/pexels-photo-1116302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Logo Image" />
            </div>
        </div>
        
        {<div className='home-greeting'>Welcome on my WebSite, dear <span>{user}</span>!</div>}
        <p>We're going to have so much fun together during Our English Journey.</p>
        <p>Please choose from the options below!</p>
        <div className="home-options">
            <Link to="/application" className='home-option-link'>
                <div className="home-application">
                    <img src="options/applications-wb.png" alt="" />
                </div>
            </Link>
            <Link to="/vocabulary" className='home-option-link'>
                <div className="home-vocabulary">
                    <img src="options/vocabulary_green-wb.png" alt="" />
                </div>
            </Link>
            <Link to="/picture" className='home-option-link'>
                <div className="home-picture">
                    <img src="options/pictures-wb.png" alt="" />                    
                </div>
            </Link>
            {
                isAdmin && 
                <Link to="/topic" className='home-option-link'>
                    <div className="home-topics">
                        <img src="options/topics-wb.png" alt="" />
                    </div>
                </Link>
            }
            {
                isAdmin && 
                <Link to="/taskeditor" className='home-option-link'>
                    <div className="home-taskeditor">
                        <img src="options/taskeditor-wb.png" alt="" />
                    </div>
                </Link>
            }
            
        </div>
    </div>
    
  )
}

export default Home