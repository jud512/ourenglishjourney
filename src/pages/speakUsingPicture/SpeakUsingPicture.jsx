import React from 'react'
import BackTo from '../../components/backTo/BackTo'
import FormSelectTopicPicture from '../../components/formSelectTopicPicture/FormSelectTopicPicture'
import './SpeakUsingPicture.css'

const SpeakUsingPicture = () => {
  return (
    <div className='speakUsingPicture'>
        <h1>Speak Using Pictures!</h1>

        <FormSelectTopicPicture appName="speakusingpicture"/>

        <BackTo url='/application'/>
    </div>
  )
}

export default SpeakUsingPicture