import React from 'react'
import { Amplify, API, graphqlOperation } from "aws-amplify";
import { createWord } from '../../graphql/mutations';
import './CreateNewVocabulary.css'
import { useGlobalContext } from '../../context/context'
import { useState } from 'react';
import { useEffect } from 'react';
const CreateNewVocabulary = () => {
    const {topics} = useGlobalContext();
    const [book, setBook] = useState('BOOK1');
    const [selectedTopic, setSelectedTopic] = useState('');
    const handleChangeTopic = (e) => {
        setSelectedTopic(e.target.value);
        const foundItem = topics.find(item => item.title === selectedTopic);
        setBook(foundItem.book);
    }
    useEffect(() => {
        setBook(topics[0]?.book);
        setSelectedTopic(topics[0]?.title);
    }, [topics])
    //TODO!!!!!!!!!!!
    const createNewWord = async (e) => {
        e.preventDefault();
        const {target} = e;
        try {
            const result = API.graphql(
                graphqlOperation(createWord, {
                    input:{
                        name: target.wordName,
                        speech: target.speechName,
                        description: target.descName,
                        pronunciation: target.pronName,
                        sound: target.soundName,
                        example: target.exampleName,
                        wordId: ''
                    }
                })
            )
        } catch (error) {
            
        }
    }
    
    return (
        <div className='createNewVocab'>
            <h1 className='createVocTitle'>Add New Word To The Vocabulary</h1>
            <div className="createNewVoc">
                    <form action="" className='formItems'>
                        <div className="formItem">
                            <label htmlFor="topic">Topic</label>
                            <select id="topic" name="topic" onChange={handleChangeTopic}>
                                {
                                    topics?.map(item => (
                                        <option key={item.id} value={item.title} book={item.book}>{item.title}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="formItem">
                            <span>Book</span>
                            <span>{book}</span>
                        </div>
                            <div className="formItem">
                                <label htmlFor="newword">Word</label>
                                <input type="text" id='newword' name='wordName'/>
                            </div>
                            <div className="formItem">
                                <label htmlFor="speech">Speech</label>
                            <input type="text" id='speech' name='speechName'/>
                            </div>
                            <div className="formItem"> 
                                <label htmlFor="pron">Pronunciation</label>
                                <input type="text" id='pron' name='pronName'/>
                            </div>
                            <div className="formItem">
                                <label htmlFor="desc">Description</label>
                                <textarea id='desc' rows="10" cols="30" name='descName'/>
                            </div>
                            
                            <div className="formItem">
                                <label htmlFor="example">Example</label>
                                <input type="text" id='example' name='exampleName' />
                            </div>
                            <div className="formItem">
                                <label htmlFor="sound">Sound</label>
                                <input type="text" id='sound' name='souondName' />
                            </div>
                            
                    <button className='btnSave' onClick={createNewWord}>Save it into the database</button>
                </form>
            </div>
            
        </div>
    )
}

export default CreateNewVocabulary