import React, { useEffect, useState } from 'react'
import { Amplify, API, graphqlOperation } from "aws-amplify";
import { updateTopic } from '../../graphql/mutations';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../../context/context'
import ModalTop from '../modal/ModalTop';
import Message from '../message/Message';
import { useNavigate } from 'react-router-dom';

export const EditTopic = () => {
    const { topics } = useGlobalContext();
    const topicId = useParams();
    const topicEdited = topics.find(item => item.id === topicId.edit);

    const [topic, setTopic] = useState({});
    const [showMessageOK, setShowMessageOK] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setTopic({
            id: topicEdited?.id || "" ,
            title: topicEdited?.title || "",
            book: topicEdited?.book || ""
        })
    },[topicEdited])

    const handleTopicFormChange = (e) => {
        setTopic({...topic, [e.target.name]: e.target.value})
    }

    const editTopicInDatabase = async () => {
        try{
            const result = await API.graphql(graphqlOperation(updateTopic, {
                input: {
                    id: topic.id,
                    title: topic.title,
                    book: topic.book
                }
            }))
            console.log('RESULT EDIT TOPIC', result);
        } catch(error){
            console.log('TOPIC NOT EDITED', error)
        }
    }

    const handleClickSave = (e) => {
        e.preventDefault();
        editTopicInDatabase();
        setShowMessageOK(true);
    }
  return (
    <div className='edittopic'>
        <h1>EditTopic</h1>
        <form className="formItems">
            <div className="formItem">
                <label htmlFor="topic">Topic</label>
                <input type="text" id="topic" name="title" value={topic?.title} onChange={handleTopicFormChange}/>
            </div>
            <div className="formItem">
                <label htmlFor="book">Book</label>
                <select name="book" id="book" value={topic?.book} onChange={handleTopicFormChange}>
                    <option value="BOOK1" >BOOK1</option>
                    <option value="BOOK2" >BOOK2</option>
                    <option value="BOOK3" >BOOK3</option>
                    <option value="NO_BOOK" >NO_BOOK</option>
                </select>
            </div>
            <button className='btnSave' style={{width:'300px', margin: '10px auto'}}onClick={handleClickSave}>Save it into the database</button>
        </form>

        { showMessageOK && <ModalTop shouldShowModal={showMessageOK} onRequestClose={() => setShowMessageOK(false)} 
        children={
                <Message message="The Topic Is Edited." onRequestClose={() => {setShowMessageOK(false); navigate("/topic/listtopic")}}/>} />
        }
    </div>
  )
}
