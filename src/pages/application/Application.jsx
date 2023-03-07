import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/header/Header'
import SingleApplicationContainer from '../../components/singleApplicatonContainer/SingleApplicationContainer'
import './Application.css'

const Application = () => {
  return (
    <div className='application'>
      
      <Header title="Applications" img1='https://images.pexels.com/photos/4353618/pexels-photo-4353618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' img2='https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>

        <div className="application-items">
          <SingleApplicationContainer url="/application/showwordexplainmeaningversiontwo" title="Show Word, Explain Meaning!" desc="Try to explain what the following words mean!" img="https://images.pexels.com/photos/52986/hands-words-meaning-fingers-52986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
          <SingleApplicationContainer url="/application/showdescriptionexplainmeaning" title="Show Description, Find The Word!" desc="Try to find out which words match to the following descriptions!" img="https://images.pexels.com/photos/54257/pexels-photo-54257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
          <SingleApplicationContainer url="/application/speakusingpicture" title="Speak Using Pictures!" desc="Let's speak about different topics using pictures!" img="https://images.pexels.com/photos/344102/pexels-photo-344102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
          <SingleApplicationContainer url="/application/rewritesentence" title="Rewrite Sentences!" desc="Try to use different words to express the same meaning!" img="https://images.pexels.com/photos/110473/pexels-photo-110473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>



            
        </div>
    </div>
  )
}

export default Application