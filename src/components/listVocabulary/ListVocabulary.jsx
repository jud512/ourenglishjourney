import React, { useEffect, useState } from 'react'
import './ListVocabulary.css';
import * as queries from '../../graphql/queries';
import { API, graphqlOperation} from 'aws-amplify'
import { listWords, wordsByTopicID } from '../../graphql/queries'
import {useGlobalContext} from '../../context/context'
import { MdOutlineEdit, MdDeleteOutline } from 'react-icons/md';
import {AiFillSound} from 'react-icons/ai'
import { deleteWord } from '../../graphql/mutations';
import Modal from '../modal/Modal';
import CreateNewVocabulary from "../createNewVocabulary/CreateNewVocabulary";
import EditWord from '../editWord/EditWord';

const ListVocabulary = () => {
    const { topics } = useGlobalContext();
    const [selectedTopicId, setSelectedTopicId] = useState(topics[0].id);

    const url = 'https://media.merriam-webster.com/audio/prons/en/us/mp3';

    const [words, setWords] = useState([]);

    const handleChangeTopic = (e) => {
        setSelectedTopicId(e.target.value);
    }

    //DELETE
    const deleteWordInApp = (id) => {
        const newWords = words.filter(item => item.id !== id)
        setWords(newWords);
    }

    const deleteWordInDatabase = async (id) => {
        try{
            await API.graphql(graphqlOperation(deleteWord, { input: {id: id}}))
        }
        catch(error){
            console.log('WORD NOT DELETED');
        }
    }

    const handleDeleteWord = (id) => {
        deleteWordInDatabase(id);
        deleteWordInApp(id);
    }
    //EDIT
    const [showEditWord, setShowEditWord] = useState(false);
    const [editedWord, setEditedWord] = useState({});

    const clickEditIcon = (item) => {
        setShowEditWord(true);
        setEditedWord(item);
    }

    //FETCHING


    const fetchWords = async () => {
        try{
            const words = await API.graphql(graphqlOperation(listWords));
            setWords(words.data.listWords.items);
            console.log(words.data.listWords.items)
        }
        catch(error){
            console.log('WORDS NOT FETCHED!', error)
        }
    }
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

    useEffect(() => {
        // fetchWords();
        fetchWordsByTopicID();        
    }, [selectedTopicId]);

    useEffect(() => {

    }, [words])

    

  return (
    <div className='listVocabulary'>
        <h1>The List of Words</h1>
        <form className='listVocabulary-form'>
            <label htmlFor="">Please, select a topic!</label>
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
       {/* { <p>SELECTED TOPICID: {selectedTopicId}</p>} */}
        <table>
            <thead>
                <tr>
                    {/* <th>ID-Word</th> */}
                    <th>Word</th>
                    <th>Speech</th>
                    <th>Pronunciation</th>
                    <th>Description</th>
                    <th>Example</th>
                    <th>Sound</th>
                    <th>Operations</th>
                </tr>
            </thead>
            <tbody>
                {
                    words.map(item => (
                        <tr key={item.id}>
                            {/* <td>{item.id}</td> */}
                            <td>{item.name}</td>
                            <td>{item.speech}</td>
                            <td>{item.pronunciation}</td>
                            <td className='listVocab-align-left'>{item.description}</td>
                            <td className='listVocab-align-left'>{item.example}</td>
                            <td className="icon-listening"><AiFillSound className={item.sound ? "" : "hidden"} onClick={() => {
                                item.audio.play()
                            }}/></td>
                            <td className='icons'>
                                <span className='iconEdit'
                                onClick={() => clickEditIcon(item)}><MdOutlineEdit/></span>
                                <span className='iconDelete' onClick={() => handleDeleteWord(item.id)}><MdDeleteOutline/></span>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>

        {
            showEditWord && <Modal 
                level={2} 
                shouldShowModal={showEditWord} 
                onRequestClose={() => setShowEditWord(false)} children={<EditWord item={editedWord}/>} />
        }
    </div>
  )
}

export default ListVocabulary