import React from 'react'
import BackTo from '../../components/backTo/BackTo'
import FormSelectOnlyTopic from '../../components/formSelectOnlyTopic/FormSelectOnlyTopic'
import Header from '../../components/header/Header'
import './RewriteSentence.css'

const RewriteSentence = () => {
  return (
    <div className='rewriteSentence'>
      <Header title="REwrite Sentences!" img1="https://images.pexels.com/photos/1766604/pexels-photo-1766604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" img2="https://images.pexels.com/photos/6357/coffee-cup-desk-pen.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
       
        <FormSelectOnlyTopic appName="rewritesentence"/>

        <BackTo url='/application' />
    </div>
  )
}

export default RewriteSentence