import React, { useRef } from 'react'
import { Amplify, API, graphqlOperation } from "aws-amplify";
import { createWord } from '../../graphql/mutations';
import './CreateNewVocabulary.css'
import { useGlobalContext } from '../../context/context'
import { useState } from 'react';
import { useEffect } from 'react';
import { computeHeadingLevel } from '@testing-library/react';
import axios from 'axios';
import ModalTop from '../modal/ModalTop';
import Message from '../message/Message';
import TitleForm from '../titleForm/TitleForm';
const CreateNewVocabulary = () => {
    const {topics, user} = useGlobalContext();
    const [book, setBook] = useState('BOOK1');
    const [selectedTopic, setSelectedTopic] = useState('');
    const [selectedTopicId, setSelectedTopicId] = useState('');
    const [error, setError] = useState('');

    const [showMessageOK, setShowMessageOK] = useState(false);

    //base-URL
    const baseURL = 'https://www.dictionaryapi.com/api/v3/references/learners/json/';
    const API_KEY = 'f1daf546-8127-447b-8e3f-91d940cf45d6'
    const [word, setWord] = useState('');
    
    //data in the form
    const [formDataWord, setFormDataWord] = useState({
        name:"",
        speech:"",
        description:"",
        pronunciation:"",
        sound:"",
        example:"",
        topicID:""
    })

    //data from fetching
    const [data, setData] = useState();
    const [dataWord, setDataWord] = useState({
        name:"",
        speech:"",
        description:"",
        pronunciation:"",
        sound:"",
        
    })

    const handleChangeWord = (e) => {
        setWord(e.target.value)
        setError('')
    }

        const fetchData = async () => {
            try {
                const res = await axios.get(`${baseURL}${word}?key=${API_KEY}`);
                setData(res.data[0]);
                setDataWord({
                    name : dataWord,
                    speech: res.data[0].fl ? res.data[0].fl : "",
                    description: res.data[0].shortdef[0] ? res.data[0].shortdef[0] : "",
                    pronunciation:res.data[0].hwi.prs[0].ipa ? res.data[0].hwi.prs[0].ipa : "",
                    sound:res.data[0].hwi.prs[0].sound.audio ? res.data[0].hwi.prs[0].sound.audio : "",
                    // example:res.data[0].def[0].sseq[0][0][1].dt[2][1][0].t ? res.data[0].def[0].sseq[0][0][1].dt[2][1][0].t : "",

                })
            } catch(error){
                console.log('NOT FETCHING',error)
                setError("I can't find the word.")
            }
        }
        

    // console.log('DATAWORD',dataWord);
        // console.log("FORMDATA", formDataWord)
    const handleChangeTopic = (e) => {
        setSelectedTopic(e.target.value);        

    }

    useEffect(() => {
        setBook(topics[0]?.book);
        setSelectedTopic(topics[0]?.title);
        setSelectedTopicId(topics[0]?.id);
    }, [topics])

    useEffect(() => {
        const foundItem = topics.find(item => item.title === selectedTopic);
        setBook(foundItem?.book);
        setSelectedTopicId(foundItem?.id);
    }, [selectedTopic])

    const createNewWord = async () => {
        try {
            const result = await API.graphql(
                graphqlOperation(createWord, {
                    input:{                        
                        name: word,
                        speech: formDataWord.speech,
                        description: formDataWord.description,
                        pronunciation: formDataWord.pronunciation,  
                        example: formDataWord.example,    
                        sound: formDataWord.sound,                  
                        topicID: selectedTopicId,
                        username: user.username
                    }
                })
            )
            // console.log(target)
            // console.log('RESULT',result)
        } catch (error) {
            console.log('WORD NOT SAVED', error)
        }
    }

    const handleClickSave = (e) => {
        e.preventDefault();
        createNewWord();
        setShowMessageOK(true);
        setFormDataWord({
            name:"",
            speech:"",
            description:"",
            pronunciation:"",
            sound:"",
            example:"",
            topicID:""
        });
        setWord("");
    }

    const handleCheckDictionary = (e) => {
        e.preventDefault();
        fetchData();

    }

    const handleWordFormChange = (e) => {
        setFormDataWord({...formDataWord, [e.target.name]: e.target.value})
    }

    useEffect(() => {
        setFormDataWord({
            ...formDataWord,
            name: dataWord.name,
            speech: dataWord.speech,
            description: dataWord.description,
            pronunciation: dataWord.pronunciation,
            sound: dataWord.sound,
        })
    }, [dataWord])
    // console.log('SELECTED',selectedTopicId)
    // console.log('DATA', data);
    // console.log('FORMDATAWORD', formDataWord);
    return (
        <div className='createNewVocab'>
            <TitleForm title="Add New Word To The Vocabulary" img="https://images.pexels.com/photos/132474/pexels-photo-132474.jpeg?auto=compress&cs=tinysrgb&w=1600"/>
           
            <div className="createNewVoc">
                    <form  className='formItems'>
                        <div className="formItem-select ">
                            <label htmlFor="topic">Topic</label>
                            <select id="topic" name="topic" onChange={handleChangeTopic}>
                                {
                                    topics?.map(item => (
                                        <option key={item.id} value={item.title} book={item.book}>{item.title}</option>
                                    ))
                                }
                            </select>
                            
                        </div>
                        {/* <p>TopicID: {selectedTopicId}</p> */}
                        <div className="formItem">
                            <span className='formItem-label'>Book</span>
                            <span className='formItem-value'>{book}</span>
                        </div>
                            <div className="formItem">
                                <label htmlFor="newword">Word</label>
                                <input type="text" id='newword' name='wordName' value={word} onChange={handleChangeWord}/>
                            </div>
                            <button className='createNewVocabulary-checkDatabase'  onClick={handleCheckDictionary}>Check the database</button>

                            
                            {
                                error && <p>{error}</p>
                            }


                            <div className="formItem">
                                <label htmlFor="speech">Speech</label>
                            <input type="text" id='speech' name='speech' value={formDataWord.speech} onChange={handleWordFormChange}/>
                            </div>
                            <div className="formItem"> 
                                <label htmlFor="pron">Pronunciation</label>
                                <input type="text" id='pron' name='pronunciation' value={formDataWord.pronunciation} onChange={handleWordFormChange}/>
                            </div>
                            <div className="formItem textarea">
                    
                                <label htmlFor="desc">Description</label>
                                
                                    <textarea id='desc'name='description' value={formDataWord.description} onChange={handleWordFormChange}/>
                                
                                
                            </div>
                            
                            <div className="formItem textarea">
                                <label htmlFor="example">Example</label>
                                <textarea type="text" id='example' name='example' value={formDataWord.example} onChange={handleWordFormChange}/>
                            </div>
                            {/* <div className="formItem">
                                <label htmlFor="sound">Sound</label>
                                <input type="text" id='sound' name='sound' value={formDataWord.sound} onChange={handleWordFormChange}/>
                            </div> */}
                            <div className="formItem">
                                <span className='formItem-label'>Sound</span>
                                <span className='formItem-value'>{formDataWord.sound}</span>
                            </div>
                            
                    <button className='createNewVocabulary-btnSave' onClick={handleClickSave}>Save it into the database</button>
                </form>
            </div>

            { showMessageOK && <ModalTop shouldShowModal={showMessageOK} onRequestClose={() => setShowMessageOK(false)} children={
                <Message message="The Word Is Created." onRequestClose={() => setShowMessageOK(false)}/>
            }/>}




            
        </div>
    )
}

export default CreateNewVocabulary