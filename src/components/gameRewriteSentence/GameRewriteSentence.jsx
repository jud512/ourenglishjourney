import { API, graphqlOperation } from 'aws-amplify';
import React, { useEffect, useState } from 'react'
import { rewriteTasksByTopicID } from '../../graphql/queries';
import './GameRewriteSentence.css'
import {GrPrevious, GrNext} from 'react-icons/gr'
import { IconContext } from 'react-icons';


const GameRewriteSentence = ({selectedTopicId}) => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isShow, setIsShow] = useState(false);

  const [idx, setIdx] = useState(0);

  const fetchTasksByTopcID = async () => {
    try {
      const tasks = await API.graphql(graphqlOperation(rewriteTasksByTopicID, {
        topicID: selectedTopicId
      }));
      setTasks(tasks.data.rewriteTasksByTopicID.items);
      setIsLoading(false);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if(selectedTopicId){
      fetchTasksByTopcID();
    }
  }, [selectedTopicId])

  const handleClickPrev = () => {
    idx === 0 ? setIdx(idx) : setIdx(idx-1);
    setIsShow(false);
  }

  const handleClickNext = () => {
    idx === tasks?.length - 1 ? setIdx(idx) : setIdx(idx+1);
    setIsShow(false)
  }

  const handleClickHint = () => {
    setIsShow(!isShow)
  }

  
  console.log('TOPICID', selectedTopicId)
  console.log(tasks)
  return (
    <div className='gameRewriteSentence'>
      <div className="gameRewriteSentence-img-container">
        <img src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img" />
      </div>
      <div className='gameRewriteSentence-instruction'>
        Please, rewrite the following sentence!
      </div>
      <div className="gameRewriteSentence-container">

        <div className='gameRewriteSentence-icon' onClick={handleClickPrev}>
          <GrPrevious className='gameRewriteSentence-icon'/>                
              
          </div>
          <div className="gameRewriteSentence-task-container">
           
            <p>{tasks[idx]?.origin}</p>
            <p>{tasks[idx]?.incomplete.replaceAll('*', '_________________')}</p>
            
          </div>
          <div className='gameRewriteSentence-icon' onClick={handleClickNext}><GrNext /></div>
          </div>
      <div className="gameRewriteSentence-hint">
      
      
        <p>Do you want to check your answer? Click here: <span onClick={handleClickHint}>{isShow ? 'HIDE' : 'HINT'}</span></p>  
        { isShow && <p className='gameRewriteSentence-hint-answer'>{tasks[idx]?.answer}</p>}
      </div>
    </div>
  )
}

export default GameRewriteSentence