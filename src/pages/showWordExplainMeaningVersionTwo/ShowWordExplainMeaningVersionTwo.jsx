import React from 'react'
import FormSelectTopic from '../../components/formSelectTopic/FormSelectTopic'
import Header from '../../components/header/Header'
import './ShowWordExplainMeaningVersionTwo.css'

const ShowWordExplainMeaningVersionTwo = () => {
  return (
    <div className='showWordExplainMeaning slide-in-blurred-bottom'>
      <Header title="Show Word, Explain Meaning!" img1="https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" img2="https://images.pexels.com/photos/1742370/pexels-photo-1742370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
      
        <FormSelectTopic appName="showwordexplainmeaningversiontwo"/>
    </div>
  )
}

export default ShowWordExplainMeaningVersionTwo