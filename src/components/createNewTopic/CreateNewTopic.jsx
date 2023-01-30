import React from 'react'
import './CreateNewTopic.css'
import { Amplify, API, graphqlOperation } from "aws-amplify";
import { useRef, useState } from "react";
import { createTopic } from '../../graphql/mutations';
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
            <h1 className='createTopicTitle'>Add New Topics</h1>
            <div className="createNewTopic">
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