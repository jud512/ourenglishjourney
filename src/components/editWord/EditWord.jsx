import React, { useState } from 'react'
import './EditWord.css'
import { Amplify, API, graphqlOperation } from "aws-amplify";
import { updateWord } from '../../graphql/mutations';


const EditWord = ({item}) => {
    const [word, setWord] = useState({
        id: item.id,
        name: item.name,
        speech: item.speech,
        description: item.description,
        pronunciation: item.pronunciation,
        sound: item.sound,
        example: item.example,
    })

    const handleWordFormChange = (e) => {
        setWord({...word, [e.target.name]: e.target.value})
    }

    //EDIT
    //Edit word in Database
    const editWordInDatabase = async () => {
        try{
            const result = await API.graphql(graphqlOperation(updateWord, { input: {
                id: word.id,
                name: word.name,
                speech: word.speech,
                description: word.description,
                pronunciation: word.pronunciation,
                example: word.example
            }}))
            console.log('RESULT EDITING',result);

        }
        catch(error){
            console.log('WORD NOT EDITED', error)
        }
    }

    const handleClickSave = (e) => {
        e.preventDefault();
        editWordInDatabase();
    }
    console.log('TRY EDIT: ', item)
  return (
    <div className='editword'>
        <h1>EditWord</h1>
        <form className='formItems'>
            <div className="formItem">
                <p>Word <span className='wordName' style={{fontWeight: "bold", fontSize:'20px', paddingLeft:'20px'}}>{word.name}</span> </p>
            </div>
            <div className="formItem">
                <label htmlFor="speech">Speech</label>
                <input type="text" id='speech' name='speech' value={word.speech} onChange={handleWordFormChange}/>
            </div>
            <div className="formItem"> 
                <label htmlFor="pron">Pronunciation</label>
                <input type="text" id='pron' name='pronunciation' value={word.pronunciation} onChange={handleWordFormChange}/>
            </div>
            <div className="formItem">
                <label htmlFor="desc">Description</label>
                <textarea id='desc' rows="10" cols="30" name='description' value={word.description} onChange={handleWordFormChange}/>
            </div>
                            
            <div className="formItem">
                <label htmlFor="example">Example</label>
                <input type="text" id='example' name='example' value={word.example} onChange={handleWordFormChange}/>
            </div>
            {/* <div className="formItem">
                <label htmlFor="sound">Sound</label>
                <input type="text" id='sound' name='sound' value={word.sound} onChange={handleWordFormChange}/>
            </div> */}
            <button className='btnSave' style={{width:'300px', margin: '10px auto'}}onClick={handleClickSave}>Save it into the database</button>

        </form>
        
    </div>
  )
}

export default EditWord