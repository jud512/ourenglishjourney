import React from 'react'
import './ListTopic.css'
import { API, graphqlOperation } from 'aws-amplify';
import { listTopics } from '../../graphql/queries';
import { useEffect } from 'react';
import { useState } from 'react';
import {MdOutlineEdit, MdDeleteOutline} from 'react-icons/md'
import { deleteTopic } from '../../graphql/mutations';
import { useContext } from 'react';


const ListTopic = () => {
  
    const [topics, setTopics] = useState([]);

    const fetchTopics = async () => {
    try {
        const topics = await API.graphql(graphqlOperation(listTopics));
        setTopics(topics.data.listTopics.items)
        console.log((topics.data.listTopics.items))
    } catch (error) {
        console.log('TOPICS NOT FETCHED', error)
    }
    }

    //DELETE A TOPIC
    const deleteTopicInDatabase = async (id) => {
        try {
            await API.graphql(
                graphqlOperation(deleteTopic, {
                    input: {id: id}
                })
            )
        } catch (error) {
            console.log('unsuccessful delete')
        }
    }

    const deleteTopicInApp = (id) => {
        const newTopics = topics.filter((item) => item.id != id)
        setTopics(newTopics);
    }

    const handleDeleteTopic = async (id) => {
        deleteTopicInDatabase(id);
        deleteTopicInApp(id);
    }
    useEffect(() => {
        fetchTopics();
    }, [])
  return (
    <div className='listTopic'>
        <h1>The List of Topics</h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Topic</th>
                    <th>Book</th>
                    <th>Operations</th>
                </tr>
            </thead>
            <tbody>
            {
                topics.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.book}</td>
                        <td className='icons'>
                            <span className='iconEdit'><MdOutlineEdit/></span>
                            <span className='iconDelete' onClick={() => handleDeleteTopic(item.id)}><MdDeleteOutline/></span>
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    </div>
  )
}

export default ListTopic