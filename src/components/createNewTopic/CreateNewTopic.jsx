import React from 'react'
import './CreateNewTopic.css'
import { Amplify, API, graphqlOperation } from "aws-amplify";
import { useRef, useState } from "react";
import { createTopic } from '../../graphql/mutations';
import TitleForm from '../titleForm/TitleForm'
// Amplify.configure(awsconfig);

const CreateNewTopic = () => {
    const inputNewTopic = useRef();
    const inputBook = useRef();
    const [error, setError] = useState("");

    const createNewTopic = async () => {
        try {
            const result = await API.graphql(
                graphqlOperation(createTopic, {
                    input: {
                        title: inputNewTopic.current.value,
                        book: inputBook.current.value
                    }
                })
            )
            console.log(result)
        } catch (error) {
            console.log('TOPIC NOT CREATED', error)
        }
    }

    const handleClickSave = (e) => {
        e.preventDefault()
        if(inputNewTopic.current.value != ""){
            createNewTopic();
            setError("");
            inputNewTopic.current.value = "";
        }
        else{
            setError("Add the topic, please!")
        }
    }
    
    return (
        <div className='createNewTopic'>
            <TitleForm title="Add New Topic" img="https://images.pexels.com/photos/105075/pexels-photo-105075.jpeg?auto=compress&cs=tinysrgb&w=1600"/>
            <div className="createNewTopic-form">
                    <form action="" className='formItems'>
                        <div className="formItem">
                                <label htmlFor="newtopic">Topic</label>
                                <input type="text" id='newtopic' ref={inputNewTopic}/>
                            </div>
                        <div className="formItem">                            
                            <label htmlFor='book'>Book</label>
                            <select id="book" name="book" ref={inputBook}>
                                <option value="BOOK1" >BOOK1</option>
                                <option value="BOOK2" >BOOK2</option>
                                <option value="BOOK3" >BOOK3</option>
                                <option value="NO_BOOK" >NO_BOOK</option>
                                <option value="ENGLISH_VOCABULARY_IN_USE" >ENGLISH_VOCABULARY_IN_USE</option>
                            </select>
                        </div>                     
                        
                            
                        
                    <button className='btnSave' onClick={handleClickSave}>Save it into the database</button>
                </form>

                {
                    error && <p>{error}</p>
                }
            </div>
            
        </div>
    )
}

export default CreateNewTopic