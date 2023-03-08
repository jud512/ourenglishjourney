import React from 'react'
import FormSelectTopic from '../../components/formSelectTopic/FormSelectTopic'
import Header from '../../components/header/Header'
import './ShowWordExplainMeaningVersionTwo.css'
import { Link } from 'react-router-dom'
import {MdKeyboardArrowLeft} from 'react-icons/md'
import BackTo from '../../components/backTo/BackTo'

const ShowWordExplainMeaningVersionTwo = () => {
  return (
    <div className='showWordExplainMeaning'>
      <Header title="Show Word, Explain Meaning!" img1="https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" img2="https://images.pexels.com/photos/1742370/pexels-photo-1742370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
      
        <FormSelectTopic appName="showwordexplainmeaningversiontwo"/>

        {/* <div style={{width:'fit-content'}}>
          <Link to="/application" >
          <div className='back-to-application'>            
              <MdKeyboardArrowLeft size={30}/>
              <p> Back to</p>
              <div className="img-container-to-application">                
                  <img src="../options/applications-wb.png" alt="app" />
              </div>             
              </div>
          </Link>
        </div> */}
        
        <BackTo url='/application'/>
        
        
    </div>
  )
}

export default ShowWordExplainMeaningVersionTwo