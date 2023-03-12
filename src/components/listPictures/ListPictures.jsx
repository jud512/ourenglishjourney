import React, { useEffect, useState } from 'react'
import './ListPictures.css'
import { API, graphqlOperation } from 'aws-amplify';
import { listPictures, picturesByTopicID } from '../../graphql/queries';
import { deletePicture } from '../../graphql/mutations';
import { useGlobalContext } from '../../context/context';
import { MdDeleteOutline } from 'react-icons/md';
import TitleForm from '../titleForm/TitleForm'

const ListPictures = () => {
    const {topics, isAdmin} = useGlobalContext();
    const [selectedTopicId, setSelectedTopicId] = useState('');
    const [pictures, setPictures] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchPicturesByTopicID = async () => {
        try {
            const pictures = await API.graphql(graphqlOperation(picturesByTopicID, {topicID: selectedTopicId}));
            setPictures(pictures.data.picturesByTopicID.items);
            console.log(pictures.data.picturesByTopicID.items)
            setIsLoading(false);
        } catch (error) {
            console.log(error)
        }
    }

        const handleChangeTopic = (e) => {
        setSelectedTopicId(e.target.value);
    }

    //DELETE
    const deletePictureInApp = (id) => {
        const newPictures = pictures.filter(item => item.id != id);
        setPictures(newPictures);
    }

    const deletePictureInDatabase = async (id) => {
        try {
            await API.graphql(graphqlOperation(deletePicture, {input: {id: id}}))
        } catch (error) {
            console.log('PICTURE NOT DELETED IN DATABASE')
        }
    }

    const handleDeletePicture = (id) => {
        if(isAdmin){
            deletePictureInApp(id);
            deletePictureInDatabase(id);
        }
        else{
            console.log('YOU DO NOT HAVE PERMISSION TO DELETE')
        }
    }

    useEffect(() => {
        setSelectedTopicId(topics[0]?.id);
    }, [topics])

    useEffect(() => {
        if(selectedTopicId){
            fetchPicturesByTopicID();
        }        
    }, [selectedTopicId])
  return (
    <div className='listPictures'>
        <TitleForm title="The List of Images" img="https://images.pexels.com/photos/2422255/pexels-photo-2422255.jpeg?auto=compress&cs=tinysrgb&w=1600"/>
        
        <form className='listPictures-form'>
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

        <div className="pictures-containers">
            {
                !isLoading && pictures.map( item => (
                    <div className="picture-item" key={item.id}>
                <div className="picture-item-image">
                     <img src={item.url} alt="" />
                </div>
                <div className="picture-item-name">
                    <p>{item.title ? item.title : "This is the name of the picture"}</p>
                    <div className="picture-item-icon-delete" onClick={() => handleDeletePicture(item.id)}>
                        <MdDeleteOutline/>
                    </div>
                </div>
            </div>
                ))
            }
           
        </div>
    </div>
  )
}

export default ListPictures