import React, {useEffect, useState} from 'react'
import { useGlobalContext } from '../../context/context'
import './CreateNewPicture.css'
import { Amplify, API, graphqlOperation } from "aws-amplify";
import axios from 'axios';
import { createPicture } from '../../graphql/mutations';
import ModalTop from '../modal/ModalTop';
import Message from '../message/Message';
import TitleForm from '../titleForm/TitleForm'

const CreateNewPicture = () => {
  const {topics}= useGlobalContext();
  const [selectedTopic, setSelectedTopic] = useState('');
  const [selectedTopicId, setSelectedTopicId] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imageTitle, setImageTitle] = useState('');

  const [messageOK, setMessageOK] = useState(false);

  const handleChangeTopic = (e) => {
        setSelectedTopic(e.target.value);      
  }

  const handleChangeImageUrl = (e) => {
    setImageUrl(e.target.value);
  }
  const handleChangeImageTitle = (e) => {
    setImageTitle(e.target.value);
  }

  const createNewPicture = async () => {
    try {
      const result = await API.graphql(
        graphqlOperation(createPicture, {
          input:
          {
            url: imageUrl,
            title: imageTitle,
            topicID: selectedTopicId
          }
        })
      )
      console.log('RESULT', result);
    } catch (error) {
      console.log('PICTUR NOT SAVED', error)
    }
  }

  const handleClickSave = (e) => {
    e.preventDefault();
    if(selectedTopicId && imageUrl){
      createNewPicture();
      setMessageOK(true);
      setImageUrl('');
      setImageTitle('');
    }

  }

  useEffect(() => {
    setSelectedTopic(topics[0]?.title);
    setSelectedTopicId(topics[0]?.id);
  }, [topics])

  useEffect(() => {
     const foundItem = topics.find(item => item.title === selectedTopic);       
        setSelectedTopicId(foundItem?.id);
  }, [selectedTopic])
  
  return (
    <div className='createNewPicture'>
      <TitleForm title="Add a New Image" img="https://images.pexels.com/photos/2268487/pexels-photo-2268487.jpeg?auto=compress&cs=tinysrgb&w=1600"/>
      
      <form className='createNewPicture-formItems'>
        <div className="createNewPicture-formItem">
          <label htmlFor="topic" className='createNewPicture-label'>Topic</label>
            <select id="topic" name="topic" onChange={handleChangeTopic}>
              {
                topics?.map(item => (
                  <option key={item.id} value={item.title} book={item.book}>{item.title}</option>
                ))
                }
            </select>
        </div>
        <div className="createNewPicture-formItem">
          <label htmlFor="title" className='createNewPicture-label'>Title</label>
          <input type="text" id='image' value={imageTitle} onChange={handleChangeImageTitle}/>
        </div>
        <div className="createNewPicture-formItem">
          <label htmlFor="image" className='createNewPicture-label'>ImageURL</label>
          <input type="text" id='image' value={imageUrl} onChange={handleChangeImageUrl}/>
        </div>
        <button className='btnSave' onClick={handleClickSave}>Save it into the database</button>
      </form>

       { messageOK && <ModalTop shouldShowModal={messageOK} onRequestClose={() => 
       setMessageOK(false)} children={
                <Message message="The Image Is Saved." onRequestClose={() => setMessageOK(false)}/>
            }/>}

    </div>
  )
}

export default CreateNewPicture