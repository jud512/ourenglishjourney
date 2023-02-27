import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../../context/context'

const FormSelectOnlyTopic = () => {
    const {topics} = useGlobalContext();
    const [selectedTopicId, setSelectedTopicId] = useState('');

    const handleTopicChange = (e) => {
        setSelectedTopicId(e.target.value);
    }

    const clickStart = () => {

    }

    useEffect(() => {
        setSelectedTopicId(topics[0]?.id);
    }, [topics])
  return (
    <div className='formSelectTopic-container'>
        <form className="formSelectTopic-form">            
            <div className="formSelectNumber-item">
                <label htmlFor="topics">Please, choose a topic!</label>
                <select id="topics" name="topics" value={selectedTopicId} onChange={handleTopicChange} style={{marginLeft:'10px'}}>
                    {
                        topics.map(item => (
                            <option key={item.id} value={item.id}>{item.title}</option>
                        ))
                    }
                </select>
            </div>
            <div className="formWordNumberItem" style={{alignSelf:'flex-end'}}>
                <button className='formBtn' onClick={clickStart}>Start</button>
                
            </div>
        </form>   
        </div>
  )
}

export default FormSelectOnlyTopic