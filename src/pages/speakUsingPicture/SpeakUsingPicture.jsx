import React from 'react'
import FormSelectTopicPicture from '../../components/formSelectTopicPicture/FormSelectTopicPicture'
import './SpeakUsingPicture.css'

const SpeakUsingPicture = () => {
  return (
    <div className='speakUsingPicture'>
        <h1>Speak Using Pictures!</h1>

        <FormSelectTopicPicture appName="speakusingpicture"/>
    </div>
  )
}

export default SpeakUsingPicture