import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../../context/context'
import ApplicationController from '../applicationController/ApplicationController';

const FormSelectOnlyTopic = ({appName}) => {
    const {topics} = useGlobalContext();
    const [selectedTopicId, setSelectedTopicId] = useState('');
    const [isStart, setIsStart] = useState(false);

    const handleTopicChange = (e) => {
        setSelectedTopicId(e.target.value);
    }

    const clickStart = (e) => {
        e.preventDefault();
        setIsStart(!isStart);
    }

    useEffect(() => {
        setSelectedTopicId(topics[0]?.id);
    }, [topics])

    console.log(isStart, appName)
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
            <div className="formWordNumberItem">
                <button className='formBtn-main' onClick={clickStart}>Start</button>
                
            </div>
        </form>  
        {
            isStart && 
            <ApplicationController appName={appName} isStart={isStart} onRequestClose={() => setIsStart(false)} selectedTopicId={selectedTopicId}/>

        }

        </div>

        
  )
}

export default FormSelectOnlyTopic