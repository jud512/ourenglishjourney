import React, { useEffect, useState } from 'react'
import { AiFillSound } from 'react-icons/ai'
import {GiReturnArrow} from 'react-icons/gi'
import './SingleCard.css'

const SingleCard = ({item,  handleItemSelect, selectWords, currentIdx}) => {
    const [showBack, setShowBack] = useState(false);
    return (
    
        <div className='item' key={item.id}>            
            <div className="turnCard" onClick={() => setShowBack(!showBack)}><GiReturnArrow /></div>
                <div className="item-content">
                    <div className={ showBack ? "back showback" : "back"}>                
                        <p className='desc'>{item.description}</p>
                        <p className='desc'>{item.example}</p>
                    </div> 
                    <div className='front'>              

                        <p className='word'>{ item.name }</p>                      
                        <p className='speech'>{item.speech}</p>
                        <p className='pron'>/{item.pronunciation}/</p>
                        {
                            item.sound  &&
                                <p className='soundIcon'><AiFillSound onClick={() => {
                                    item.audio.play()}}/></p>
                        }
                        
                    </div> 
                </div>    
           

        </div>
    
  )
}

export default SingleCard