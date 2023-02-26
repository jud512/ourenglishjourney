import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../../context/context';
import './FormSelectTopicPicture.css'
import ApplicationController from '../applicationController/ApplicationController';
import { API, graphqlOperation } from 'aws-amplify';
import { picturesByTopicID } from '../../graphql/queries';

const FormSelectTopicPicture = ({appName}) => {
    const {topics} = useGlobalContext();

    const [pictures, setPictures] = useState([]);
    const [countPicture, setCountPicture] = useState(0);
    const [selectedTopicId, setSelectedTopicId] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    const [isStart, setIsStart] = useState(false);

    const handleChangeNumber = (e) => {
        setCountPicture(e.target.value);
    }

    const handleTopicChange = (e) => {
        setSelectedTopicId(e.target.value)
    }

    const clickStart = (e) => {
        e.preventDefault();
        setIsStart(!isStart)
    }

    const fetchPicturesByTopicID = async () => {
        try {
            const pictures = await API.graphql(graphqlOperation(picturesByTopicID, {topicID: selectedTopicId}))

            setPictures(pictures.data.picturesByTopicID.items)
            setIsLoading(false)
        } catch (error) {
            
        }
    }

    useEffect(() => {
        setIsLoading(true);
        fetchPicturesByTopicID();
    }, [selectedTopicId])

    useEffect(() => {
        setSelectedTopicId(topics[0]?.id);
    }, [topics])

    useEffect(() => {
        setPictures(pictures.sort(() => Math.random()-0.5));
    }, [isLoading])

    // console.log(pictures)
  return (
    <div className='formSelectTopic-container'>
        <form className="formSelectTopic-form">
            <div className="formSelectTopic-item">
                <label htmlFor="formSelectNumber-number">How many pictures would you like to get?</label>
                <input type="number" id="formSelectNumber-number" onChange={handleChangeNumber} value={countPicture} style={{width:"50px", textAlign:"center", marginLeft:"10px"}}/>
            </div>
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
        
        {
            isStart &&

            <ApplicationController appName={appName} isStart={isStart} onRequestClose={() => setIsStart(false)}  pictures={pictures} number={countPicture}/>
        }

            
        
         
    </div>
  )
}

export default FormSelectTopicPicture