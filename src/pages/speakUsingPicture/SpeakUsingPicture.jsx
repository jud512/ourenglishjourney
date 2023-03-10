import React from 'react'
import BackTo from '../../components/backTo/BackTo'
import FormSelectTopicPicture from '../../components/formSelectTopicPicture/FormSelectTopicPicture'
import Header from '../../components/header/Header'
import './SpeakUsingPicture.css'

const SpeakUsingPicture = () => {
  return (
    <div className='speakUsingPicture'>
      <Header title="Speak Using Pictures!" img1="https://images.pexels.com/photos/3762940/pexels-photo-3762940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" img2="https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        

        <FormSelectTopicPicture appName="speakusingpicture"/>

        <BackTo url='/application'/>
    </div>
  )
}

export default SpeakUsingPicture