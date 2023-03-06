import { API, graphqlOperation } from 'aws-amplify'
import React, { useEffect, useState} from 'react'
import { useGlobalContext } from '../../context/context'
import { createRewriteTask } from '../../graphql/mutations'
import { listRewriteTasks, rewriteTasksByTopicID } from '../../graphql/queries'
import FormSelectOnlyTopic from '../formSelectOnlyTopic/FormSelectOnlyTopic'
import './EditRewriteSentence.css'

const EditRewriteSentence = () => {
    const {topics} = useGlobalContext();

    //Add New Task
    const [selectedTopicId, setSelectedTopicId] = useState('');
    const [task, setTask] = useState({origin: '', incomplete:'', answer:''});

    //List tasks
    const [selectedTopicIdList, setSelectedTopicIdList] = useState('');
    const [tasks, setTasks] = useState([]);
    const [showList, setShowList] = useState(false);

   

    //Adding
    const handleTopicChange = (e) => {
        setSelectedTopicId(e.target.value);
    }

    const handleTaskChange = (e) => {
        setTask({...task, [e.target.name]:e.target.value})
    }

    const addNewSentence = async () => {
        try {
            const result = await API.graphql(graphqlOperation(createRewriteTask, {
                input: {
                    origin: task.origin,
                    incomplete: task.incomplete,
                    answer: task.answer,
                    topicID: selectedTopicId
                }
            }))
            console.log(result)
        } catch (error) {
            console.log('TASK NOT CREATED')
        }
    }

    const handleClickSave = (e) => {
        e.preventDefault();
        if(task && selectedTopicId){
            addNewSentence();
            setTask({origin: '', incomplete:'', answer:''});
        }
    }

    //Listing
    const handleTopicChangeList = (e) => {
        setSelectedTopicIdList(e.target.value);
        setShowList(false);
    }

    const fetchTasks = async () => {
        try {
            const tasks = await API.graphql(graphqlOperation(rewriteTasksByTopicID, {topicID: selectedTopicIdList}));
            setTasks(tasks.data.rewriteTasksByTopicID.items);
        } catch (error) {
            console.log(error)
        }
    }

    const handleClickList = (e) => {
        e.preventDefault();
        fetchTasks();
        setShowList(true);
    }


    //to render
    useEffect(() => {
        setSelectedTopicId(topics[0]?.id)
        selectedTopicId ? setSelectedTopicIdList(selectedTopicId) : setSelectedTopicIdList(topics[0]?.id); 
        
    }, [topics])
    console.log(tasks)
  return (
    <div className='editrewritesentence'>
        <h2>Add New Sentence</h2>
        <div className='editrewritesentence-addnew-container'>
            <form className="editrewritesentence-form">            
                <div className="editrewritesentence-item">
                    <label htmlFor="topics" className='label'>Please, choose a topic!</label>
                    <select id="topics" name="topics" value={selectedTopicId} onChange={handleTopicChange} >
                        {
                            topics.map(item => (
                                <option key={item.id} value={item.id}>{item.title}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="editrewritesentence-item">
                    <label htmlFor="origin" className='label'>Sentence</label>
                    <input type="text" id="origin" name="origin" value={task.origin} onChange={handleTaskChange}/>
                </div>
                <div className="editrewritesentence-item">
                    <label htmlFor="incomplete" className='label'>Incomplete Sentence</label>
                    <input type="text" id="incomplete" name="incomplete" value={task.incomplete} onChange={handleTaskChange}/>
                </div>
                
                <div className="editrewritesentence-item">
                    <label htmlFor="answer" className='label' >Answer</label>
                    <input type="text" id="answer" name='answer' value={task.answer} onChange={handleTaskChange}/>
                </div>

                <button className='btnSave' onClick={handleClickSave}>Save Into The Database</button>
                
            </form>  
        </div>

        <h2>List Tasks</h2>
        <div className='editrewritesentence-addnew-container'>
            <form className="editrewritesentence-form">            
                    <div className="editrewritesentence-item">
                        <label htmlFor="topics" className='label'>Please, choose a topic!</label>
                        <select id="topics" name="topics" value={selectedTopicIdList} onChange={handleTopicChangeList} >
                            {
                                topics.map(item => (
                                    <option key={item.id} value={item.id}>{item.title}</option>
                                ))
                            }
                        </select>
                    </div>
                <button className='btnList' onClick={handleClickList}>List Tasks</button>    
            </form>
            {
                showList &&
                <table className='rewritesentence-table'>
                <thead>
                    <tr>
                        <th>Origin Sentence</th>
                        <th>Incomplete Sentence</th>
                        <th>Answer</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map(item => 
                            <tr key={item.origin}>
                                <td>{item.origin}</td>
                                <td>{item.incomplete}</td>
                                <td>{item.answer}</td>
                                <td>Edit Delete</td>
                            </tr>)
                    }
                </tbody>
            </table>}
            
        </div>
    </div>
  )
}

export default EditRewriteSentence