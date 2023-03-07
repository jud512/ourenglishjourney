import React, {useState, useEffect} from 'react'
import { useGlobalContext } from '../../context/context'
import GameWithWords from '../gameWithWords/GameWithWords';
import Modal from '../modal/Modal';

import * as queries from '../../graphql/queries';
import { API, graphqlOperation} from 'aws-amplify';

import './FormSelectTopic.css';
import ApplicationController from '../applicationController/ApplicationController';

const FormSelectTopic = ({appName}) => {
    const {topics} = useGlobalContext();

    const [words, setWords] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [countWords, setCountWords] = useState(0);
    const [isStart, setIsStart] = useState(false);
    const [selectedTopicId, setSelectedTopicId] = useState("");

    const url = 'https://media.merriam-webster.com/audio/prons/en/us/mp3';

    const fetchWordsByTopicID = async () => {
        try{
            const words = await API.graphql(
                graphqlOperation(queries.wordsByTopicID, {topicID: selectedTopicId})
            );
            
            setWords(words.data.wordsByTopicID.items.map( item => ({...item, 
                audio: item.sound ? new Audio(`${url}/${item?.sound[0]}/${item?.sound}.mp3`) : "" , url: item.sound ? `${url}/${item?.sound[0]}/${item?.sound}.mp3` : "" })));
            setIsLoading(false);   
            console.log(words.data.wordsByTopicID.items);
        }
        catch(error){
            console.log(error);
            setIsLoading(false);
        }
    }


     const handleChangeNumber = (e) => {
        e.preventDefault();
        setCountWords(Number(e.target.value));
        
    }
    const clickStart = (e) => {
        e.preventDefault();
        setIsStart(true);
        
    }

    const handleTopicChange = (e) => {
        setSelectedTopicId(e.target.value);
    }

    useEffect(() => {
        setSelectedTopicId(topics[0]?.id)
    }, [topics])

    useEffect(() => {
        setIsLoading(true);
        fetchWordsByTopicID();
    }, [selectedTopicId])

    useEffect(() => {
    
        setWords(words.sort(() => Math.random()-0.5));
    
    }, [isLoading])



    console.log('TOPICS', topics)
    console.log(selectedTopicId);
    console.log('WORDS', words);
    // console.log('SHUFFLED WORDS', shuffledWords)
  return (
    <div className='formSelectTopic-container-main'>
        <form className="formSelectTopic-form">
            <div className="formSelectTopic-item-main">
                <label htmlFor="formSelectNumber-number">How many words would you like to practice?</label>
                <input type="number" id="formSelectNumber-number" onChange={handleChangeNumber} value={countWords} style={{width:"50px", textAlign:"center", marginLeft:"10px"}}/>
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
            <div className="formWordNumberItem" >
                <button className='formBtn-main' onClick={clickStart}>Start</button>
                
            </div>
        </form>   
        
        {
            isStart &&

            <ApplicationController appName={appName} isStart={isStart} onRequestClose={() => setIsStart(false)} words={words} number={countWords}/>
        }

            
        
         
    </div>
  )
}

export default FormSelectTopic