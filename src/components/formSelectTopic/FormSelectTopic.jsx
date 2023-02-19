import React, {useState, useEffect} from 'react'
import { useGlobalContext } from '../../context/context'
import GameWithWords from '../gameWithWords/GameWithWords';
import Modal from '../modal/Modal';

import * as queries from '../../graphql/queries';
import { API, graphqlOperation} from 'aws-amplify';

const FormSelectTopic = () => {
    const {topics} = useGlobalContext();

    const [words, setWords] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [shuffledWords, setShuffledWords] = useState([]);
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
            setShuffledWords(words);
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

    useEffect(() => {
            // setShuffledWords(words);
            // setShuffledWords(shuffledWords.sort(() => Math.random()-0.5)) ;
        
        
    },[words])

    console.log('TOPICS', topics)
    console.log(selectedTopicId);
    console.log('WORDS', words);
    // console.log('SHUFFLED WORDS', shuffledWords)
  return (
    <div className='formSelectTopic-container'>
        <form className="formSelectTopic-form">
            <div className="formSelectTopic-item">
                <label htmlFor="formSelectNumber-number">How many words would you like to practice?</label>
                <input type="number" id="formSelectNumber-number" onChange={handleChangeNumber} value={countWords}/>
            </div>
            <div className="formSelectNumber-item">
                <label htmlFor="topics">Please, choose a topic!</label>
                <select id="topics" name="topics" value={selectedTopicId} onChange={handleTopicChange}>
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

            <Modal
                level={1}
                shouldShowModal={isStart}
                direct="/application/showwordexplainmeaning"
                onRequestClose={() => setIsStart(false)}
            >
                <GameWithWords words={words} number={countWords}/>
            </Modal>
        }
         
    </div>
  )
}

export default FormSelectTopic