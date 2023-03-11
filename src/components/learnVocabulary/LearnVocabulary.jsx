import './LearnVocabulary.css'
import { useState, useEffect } from 'react';
import * as queries from '../../graphql/queries';
import { API, graphqlOperation} from 'aws-amplify'
import {useGlobalContext} from '../../context/context'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import { GiReturnArrow } from 'react-icons/gi'
import SingleCard from '../singleCard/SingleCard';
import TitleForm from '../titleForm/TitleForm'




const LearnVocabulary = () => {
    const { topics, user } = useGlobalContext();
    const [selectedTopicId, setSelectedTopicId] = useState(topics[0]?.id);
    const handleChangeTopic = (e) => {
        setSelectedTopicId(e.target.value);
    }
    const url = 'https://media.merriam-webster.com/audio/prons/en/us/mp3';

    const [words, setWords] = useState([]);
    const [selectWords, setSelectWords] = useState(words);

    const [currentIdx, setCurrentIdx] = useState(0);

   

    const fetchWordsByTopicID = async () => {
        try{
            const words = await API.graphql(
                graphqlOperation(queries.wordsByTopicID, {topicID: selectedTopicId})
            );
            setWords(words.data.wordsByTopicID.items.map( item => ({...item, 
                audio: item.sound ? new Audio(`${url}/${item?.sound[0]}/${item?.sound}.mp3`) : "" , url: item.sound ? `${url}/${item?.sound[0]}/${item?.sound}.mp3` : "" })));
            console.log(words.data.wordsByTopicID.items);
        }
        catch(error){
            console.log(error);
        }
    }

    const handleLeft = () => {
    const length = words.length;
        currentIdx === 0 ? setCurrentIdx(length-1) : setCurrentIdx(currentIdx - 1);
    }

    const handleRight = () => {
        const length = words.length;
        currentIdx === length - 1 ? setCurrentIdx(0) : setCurrentIdx(currentIdx + 1) ;
    } 


    useEffect(() => {
        fetchWordsByTopicID();        
    }, [selectedTopicId]);

    useEffect(() => {
        const newWords = words.map(item => ({...item, turn: false}))
        setSelectWords(newWords);
    }, [words])

    useEffect(() => {
        setSelectedTopicId(topics[0]?.id);
    }, [topics])

    // console.log('LEARN WORDS', words);
    return (
        <div className="learnVocabulary">
            <TitleForm title="Let's Learn Words!" img="https://images.pexels.com/photos/132468/pexels-photo-132468.jpeg?auto=compress&cs=tinysrgb&w=1600"/>
            <div className="learnVocabulary-container">
                {/* <p>Here's the time to learn new words using cards!</p> */}
                <form className='learnVocabulary-form'>
                    <label style={{marginRight:'10px'}}>Please, select a topic!</label>
                    <select id="topic" name="topic" onChange={handleChangeTopic}>
                        {
                            topics?.map( item => (
                                <option key={item.id} value={item.id}>
                                    {item.title}
                                </option>
                            ))
                        }
                    </select>
                </form>


                <div className="cardsContainer">
                    <div className="leftArrow"><IoIosArrowBack onClick={handleLeft}/> </div>
                    <div className="cardContainer">
                        <div className='card'  >

                            { words[currentIdx] && <SingleCard  item={words[currentIdx]} /> }

                        </div>
                    </div>
                    <div className="rightArrow"><IoIosArrowForward onClick={handleRight}/></div>
                </div>
            </div>
        </div>
    )
}

export default LearnVocabulary;