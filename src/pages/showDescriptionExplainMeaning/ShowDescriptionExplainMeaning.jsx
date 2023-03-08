import React from 'react'
import BackTo from '../../components/backTo/BackTo'
import FormSelectTopic from '../../components/formSelectTopic/FormSelectTopic'
import './ShowDescriptionExplainMeaning.css'

const ShowDescriptionExplainMeaning = () => {
  return (
    <div className='showDescriptionExplainMeaning'>
        <h1>Show Description, Explain Meaning!</h1>
        <FormSelectTopic appName="showdescriptionexplainmeaning"/>

        <BackTo url='/application'/>
    </div>
  )
}

export default ShowDescriptionExplainMeaning