import React from 'react'
import BackTo from '../../components/backTo/BackTo'
import FormSelectTopic from '../../components/formSelectTopic/FormSelectTopic'
import './ShowDescriptionExplainMeaning.css'
import Header from '../../components/header/Header'

const ShowDescriptionExplainMeaning = () => {
  return (
    <div className='showDescriptionExplainMeaning'>
       <Header title="Show Description, Find the Word!" img1="https://images.pexels.com/photos/4170629/pexels-photo-4170629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" img2="https://images.pexels.com/photos/3021329/pexels-photo-3021329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        
        <FormSelectTopic appName="showdescriptionexplainmeaning"/>

        <BackTo url='/application'/>
    </div>
  )
}

export default ShowDescriptionExplainMeaning