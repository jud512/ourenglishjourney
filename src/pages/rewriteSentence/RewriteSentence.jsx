import React from 'react'
import BackTo from '../../components/backTo/BackTo'
import FormSelectOnlyTopic from '../../components/formSelectOnlyTopic/FormSelectOnlyTopic'
import './RewriteSentence.css'

const RewriteSentence = () => {
  return (
    <div className='rewriteSentence'>
        <h1>Rewrite the Sentences!</h1>
        <FormSelectOnlyTopic appName="rewritesentence"/>

        <BackTo url='/application' />
    </div>
  )
}

export default RewriteSentence