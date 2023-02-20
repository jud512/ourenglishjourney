import React, { useEffect, useState } from 'react'
import GameWithDescription from '../gameWithDescription/GameWithDescription';
import GameWithWords from '../gameWithWords/GameWithWords';
import Modal from '../modal/Modal';

const ApplicationController = ({appName, isStart, onRequestClose, number, words}) => {
    const [app, setApp] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if(appName === "showwordexplainmeaning"){
            setApp({ 
                direct: "/application/showwordexplainmeaning",
                application: <GameWithWords words={words} number={number}/>})
            setIsLoading(false);
        }
        else if(appName === "showdescriptionexplainmeaning"){
            setApp({
                direct: "/application/showdescriptionexplainmeaning",
                application: <GameWithDescription words={words} number={number}/>
            })
            setIsLoading(false);
        }
    }, [])
    console.log('APPNAME',appName)
    console.log('APP', app)
    console.log('ISSTART', isStart)
    console.log('NUMBER', number)
    console.log('WORDS', words)

  return (
    <>
        {   !isLoading &&
            
            <Modal
                level={1}
                shouldShowModal={isStart}
                direct={app?.direct}
                onRequestClose={onRequestClose}
                
            >
                {app?.application}
            </Modal>}
    </>
  )
}

export default ApplicationController